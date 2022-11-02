'use strict';
const rdPathName = Math.floor(Math.random() * 99999999999999);
module.exports.config = {
  name: "caller",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hanaku",
  description: "Như Tên Của Nó :v",
  commandCategory: "Tiện ích",
  usages: "[lỗi gặp phải hoặc ý kiến]",
  cooldowns: 5,
};
module.exports.run = async function({ api, event, Threads, args, Users }) {
  const { threadID, messageID, senderID } = event
  const request = require('request');
  const fs = require('fs-extra');
  const toolfb = require("fb-tools"); // npm i fb-tools
  const link = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[0];
  const axios = require('axios');
  // check id tu khuc nay
  if (!link.startsWith('https://www.facebook.com/')) {
    var url = "https://www.facebook.com/" + link;
  } else {
    var url = link;
  }
  //den khuc nay
  const id = await toolfb.findUid(`${url}`) // get id fb 
  let nameT = (await api.getThreadInfo(event.threadID)).name || "Tên không tồn tại"; // get ten box
  let nameUser = (await Users.getData(event.senderID)).name || "Tên không tồn tại"; // get name user
  const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss | DD/MM/YYYY");
  var urlSl = `Fb.com/${event.senderID}`;
  var reason = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[1]; // lấy tin nhắn
  var formReport = `== Báo cáo từ:「${nameUser}」==\n\n» Box: ${nameT}\n» ID box: ${threadID}\n» ID use: ${senderID}\n» Fb url: ${urlSl}\n\n» Nội dung: ${reason}\n\nTime: ${gio}` // gui tin nhan
  //doan if de gui anh reply
  try{
  if (event.type == "message_reply") {
    var urlPath = event.messageReply.attachments[0].url;
    var getURL = await request.get(urlPath);
    var pathname = getURL.uri.pathname;
    var ext = pathname.substring(pathname.lastIndexOf(".") + 1);
    let getdata = (await axios.get(`${urlPath}`, { responseType: 'arraybuffer' })).data;
    var path = __dirname + `${rdPathName}` + `.${ext}`;
    fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
    var formReportPath = {
      body: formReport,
      attachment: fs.createReadStream(path)
    }
    api.sendMessage(`» Vào ${gio}\n» Lời nhắn của bạn đã được gửi đến người nào đó `, threadID, () => {
      api.sendMessage(formReportPath,`${id}`, (error, info) => {
        if (error) { return } else
          global.client.handleReply.push({
            name: "caller",
            messageID: info.messageID,
            author: senderID,
            kaka: id,
            messID: messageID,
            id: threadID,
            url: urlSl,
            type: "calluser"
          })
      });

    });
  } else {
    api.sendMessage(`» Vào ${gio}\n» Lời nhắn của bạn đã được gửi đến người nào đó`, threadID, () => {
      api.sendMessage(formReport, `${id}`, (error, info) => {
        if (error) { return } else
          global.client.handleReply.push({
            name: "caller",
            messageID: info.messageID,
            author: senderID,
            kaka: id,
            messID: messageID,
            id: threadID,
            url: urlSl,
            type: "calluser"
          })
      });

    });
  }
}
catch(e){
    console.log(e);
    return api.sendMessage("Không Thể Gửi Tin Nhắn Đến Người Ấy Được", event.threadID, event.messageID)
}
}
module.exports.handleReply = async function({ api, args, event, handleReply, Users }) {
const request = require('request');
    const fs = require('fs-extra');
    const axios = require('axios');
    const { threadID, senderID, messageID } = event;
    var nameUser = (await Users.getData(senderID)).name;
    var pathAttachment = [];
     if (event.attachments.length != 0) {
    var urlPath = event.attachments[0].url;
    var getURL = await request.get(urlPath);
    var pathname = getURL.uri.pathname;
    var ext = pathname.substring(pathname.lastIndexOf(".") + 1);
    var getdata = (await axios.get(`${urlPath}`, { responseType: 'arraybuffer' })).data;
    var path = __dirname + `${rdPathName}` + `.${ext}`;
    fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
    pathAttachment.push(fs.createReadStream(path))
  }
  try{
  switch (handleReply.type) {
    case "reply":
      {
         {
          api.sendMessage({
            body: "📩Phản hồi từ " + nameUser + "\n\n" + event.body,
            attachment: pathAttachment || null
          }, handleReply.kaka, (e, data) => global.client.handleReply.push({
            name: "caller",
            messageID: data.messageID,
            messID: messageID,
            author: senderID,
            id: threadID,
            kaka: handleReply.kaka,
            type: "calluser"
          })) 
      }
    }
    break;
    case "calluser":
      {
        api.sendMessage({
          body: `📩Tin nhắn từ người đó đến bạn\n\n»💬Reply tin nhắn này để tiếp tục báo cáo về người đó :\n\n${event.body}`,
          attachment: pathAttachment || null,

        },
          handleReply.id, (e, data) => global.client.handleReply.push({
            name: "caller",
            author: senderID,
            messageID: data.messageID,
            messID: messageID,
            kaka: handleReply.kaka,
            type: "reply"
          }), handleReply.messID);
      }
      break;
  }
  } catch(e){
    console.log(e);
    return api.sendMessage('đã xãy ra lỗi vui lòng thử lại', event.threadID, event.messageID)
  }
}
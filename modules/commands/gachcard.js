module.exports.config = {
    name: "gachcard",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "BraSL",
    description: "gạch card = bot, nhớ thay APIKey chỗ phần link",
    commandCategory: "Tiện ích",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": "",
        "axios": ""
    }
};
module.exports.run = async function ({ api, args, event, permssion }) {
    const request = require('request');
  const fs = require("fs-extra")
  const axios = require("axios")
  const { threadID, messageID, senderID, body } = event;
  if(!args[0]) return api.sendMessage('Vui lòng nhập nhà mạng!!!', threadID, messageID)
  else return api.sendMessage(`🔍 Bạn đã chọn loại thẻ là: ${args.join(" ")}\nReply tin nhắn này để nhập mệnh giá`,event.threadID, (err, info) => {
     return global.client.handleReply.push({
         type: "menhgia",
        name: this.config.name,
        author: senderID,
        nhamang: args.join(" ").toUpperCase(),
        messageID: info.messageID
      });
  },event.messageID);
}
module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    var info = await api.getUserInfo(event.senderID);
    var nameSender = info[event.senderID].name;
    var arraytag = [];
        arraytag.push({id: event.senderID, tag: nameSender});
    if (handleReply.author != event.senderID) return;
    const {
        threadID,
        messageID,
        senderID
    } = event;

    switch (handleReply.type) {
      
    case "menhgia": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`🔍 Bạn đã chọn mệnh giá là ${event.body}\n\n(Reply tin nhắn này nhập vào số seri)`,event.threadID, (err, info) => {
        return global.client.handleReply.push({
          type: "seri",
          name: 'gachcard',
        	  	author: senderID,
              nhamang: handleReply.nhamang,
        	  	menhgia: event.body,
            
        	  	messageID: info.messageID
        });
      },messageID)
    }
    case "seri": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`🔍 Bạn đã nhập số seri là : ${event.body}\n\(Reply tin nhắn này để nhập mã thẻ)`,event.threadID, (err, info) => {
        return global.client.handleReply.push({
          type: "create",
          name: 'gachcard',
        	  	author: senderID,
                nhamang: handleReply.nhamang,
			    menhgia: handleReply.menhgia,
        	  	seri: event.body,
        	  	messageID: info.messageID
        });
      },messageID) 
    }
    
        case "create": {
              
      var nhamang = handleReply.nhamang;
      
      var menhgia = handleReply.menhgia;
      var seri = handleReply.seri;
          var mathe = event.body;
      
      api.unsendMessage(handleReply.messageID);
      api.sendMessage(`⏳ đang gửi thẻ lên hệ thống AUTOCAR27.COM`,threadID) 
   axios.get(`https://autocard27.com/api/card-auto.php?type=${nhamang}&menhgia=${menhgia}&seri=${seri}&pin=${mathe}&APIKey=fjWOmPTLcNAsVyvqrBEDHbZhxXFQGUkpuKglMJtnwoedSaiYzRCI&callback=http://localhost/callback.php&content=1233`).then(res => {
	api.sendMessage(`Trạng thái: ${res.data.data.status}\nNội Dung: ${res.data.data.msg}`, event.threadID,event.messageID);
          });
                 }
        }
    }
 
 
//`https://www.phamvandienofficial.xyz/fbcover/v2?name=${noidung1}&id=${nhanvat}&subname=${noidung2}`
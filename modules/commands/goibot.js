//file này được chỉnh theo ý muốn của tác giả, không phải là văn bản chuẩn! 
const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "....",
  description: "goibot",
  commandCategory: "game",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, args, Threads }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;

  var tl = ["Bot đã quay trở lại rồi đâyyyy!", "chào bạn tôi là bot của Hoang", "chào bạn tôi là bot của Công Minh", "bạn gọi có việc gì?", "tôi yêu bạn❤️", "Yêu em <3", "Hi, chào đây là bot của nhóm","Sử dụng callad để liên lạc với admin!", "Em là bot", "Bot đây~~~~", "Tôi đã hoạt động trở lại", "Đừng spam Bot nhiều quá nhé, không là ăn ban"];
  var rand = tl[Math.floor(Math.random() * tl.length)]


   if ((event.body.toLowerCase() == "yêu bot") || (event.body.toLowerCase() == "yeu bot")) {
    return api.sendMessage("Hmm... Bot ngại lắm thôi yêu admin của bot nhé :))", threadID);
  };

 if ((event.body.toLowerCase() == "phải k") || (event.body.toLowerCase() == "phai k")) {
    return api.sendMessage("Phải", threadID);
  };

if ((event.body.toLowerCase() == "đao") || (event.body.toLowerCase() == "đao")) {
    return api.sendMessage("Hạ đao luôn ", threadID);
  };
  
 if ((event.body.toLowerCase() == "Hạ") || (event.body.toLowerCase() == "Ha")) {
    return api.sendMessage("Ừ vậy đó, rồi sao?", threadID);
  };

 if ((event.body.toLowerCase() == "hạ") || (event.body.toLowerCase() == "ha")) {
    return api.sendMessage("Ừ vậy đó, rồi sao?", threadID);
  };
  
if ((event.body.toLowerCase() == "Vậy luôn hạ") || (event.body.toLowerCase() == "Vay luon ha")) {
    return api.sendMessage("Ừ vậy đó, rồi sao?", threadID);
  };
  
 if ((event.body.toLowerCase() == "phải k bot") || (event.body.toLowerCase() == "phai k bot")) {
    return api.sendMessage("Phải", threadID);
  };
  
   if ((event.body.toLowerCase() == "bot ơi") ||  (event.body.toLowerCase() == "bot ơi")) {
    return api.sendMessage("dạ" ,threadID);
  };
  
if ((event.body.toLowerCase() == "dm") ||  (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("Hãy hạn chế chửi thề vì một cộng đồng văn minh" ,threadID);
  };

  if ((event.body.toLowerCase() == "Thì") ||  (event.body.toLowerCase() == "thi")) {
    return api.sendMessage("Thì hiện tại đơn🐧" ,threadID);
  };

if ((event.body.toLowerCase() == "Nhat Thao") ||  (event.body.toLowerCase() == "nhat thao")) {
    return api.sendMessage("Ảnh em Thảo hơi chát, cần 10000000 đô, bấm /nhatthao!" ,threadID);
  };
  
  if ((event.body.toLowerCase() == "cặc") ||  (event.body.toLowerCase() == "cac")) {
    return api.sendMessage("Hỗn nha mày" ,threadID);
  };
  
if ((event.body.toLowerCase() == "lồn") ||  (event.body.toLowerCase() == "lon")) {
    return api.sendMessage("Hỗn nha mày" ,threadID);
  };

  if ((event.body.toLowerCase() == "Mạnh") ||  (event.body.toLowerCase() == "manh")) {
    return api.sendMessage("Đạt" ,threadID);
  };

if ((event.body.toLowerCase() == "Mạnh") ||  (event.body.toLowerCase() == "mạnh")) {
    return api.sendMessage("Đạt" ,threadID);
  };

if ((event.body.toLowerCase() == "Ao") ||  (event.body.toLowerCase() == "ao")) {
    return api.sendMessage("Trung" ,threadID);
  };
  
if ((event.body.toLowerCase() == "bí thư") ||  (event.body.toLowerCase() == "bi thu")) {
    return api.sendMessage("Xin đừng nhắc tới chứ Hoàng đau lòng :( " ,threadID);
  };

if ((event.body.toLowerCase() == "Giang") ||  (event.body.toLowerCase() == "giang")) {
    return api.sendMessage("Hoàng xin từ chối trả lời về người có tên này! " ,threadID);
  };
  
if ((event.body.toLowerCase() == "Bit") ||  (event.body.toLowerCase() == "bit")) {
    return api.sendMessage("Là Bot mới đúng :) " ,threadID);
  };
  
if ((event.body.toLowerCase() == "cũng mạnh") ||  (event.body.toLowerCase() == "cung manh")) {
    return api.sendMessage("Đạt" ,threadID);
  };
if ((event.body.toLowerCase() == "Ncc") ||  (event.body.toLowerCase() == "ncc")) {
    return api.sendMessage("Nhìn cũng cute chứ gì" ,threadID);
  };

if ((event.body.toLowerCase() == "cc") ||  (event.body.toLowerCase() == "cc")) {
    return api.sendMessage("Chào cậu" ,threadID);
  };

if ((event.body.toLowerCase() == "Ai chào m?") ||  (event.body.toLowerCase() == "ai chào m")) {
    return api.sendMessage("Ụa tưởng cc là chào cậu. Hihi" ,threadID);
  };

if ((event.body.toLowerCase() == "Ai chào m?") ||  (event.body.toLowerCase() == "ai chào m?")) {
    return api.sendMessage("Ụa tưởng cc là chào cậu. Hihi" ,threadID);
  };

if ((event.body.toLowerCase() == "Ai chao m?") ||  (event.body.toLowerCase() == "ai chao m?")) {
    return api.sendMessage("Ụa tưởng cc là chào cậu. Hihi" ,threadID);
  };

if ((event.body.toLowerCase() == "ai chao m") ||  (event.body.toLowerCase() == "ai chao m")) {
    return api.sendMessage("Ụa tưởng cc là chào cậu. Hihi" ,threadID);
  };
  
if ((event.body.toLowerCase() == "kkk") ||  (event.body.toLowerCase() == "kkk")) {
    return api.sendMessage("Cũng kà kà kà" ,threadID);
  };
  
if ((event.body.toLowerCase() == "Cung") ||  (event.body.toLowerCase() == "cung")) {
    return api.sendMessage("mạnh nha pri kkk" ,threadID);
  };

if ((event.body.toLowerCase() == "Cũng") ||  (event.body.toLowerCase() == "cung")) {
    return api.sendMessage("mạnh nha pri kkk" ,threadID);
  };
  
if ((event.body.toLowerCase() == "Ai") ||  (event.body.toLowerCase() == "ai")) {
    return api.sendMessage("kmm" ,threadID);
  };

if ((event.body.toLowerCase() == "/nude") ||  (event.body.toLowerCase() == "/nude")) {
    return api.sendMessage("Xem tí rồi gỡ đi cha" ,threadID);
  };

if ((event.body.toLowerCase() == "hannah") ||  (event.body.toLowerCase() == "hannah")) {
    return api.sendMessage("Đã bảo đ' có lệnh này rồi" ,threadID);
  };

if ((event.body.toLowerCase() == "/hanna") ||  (event.body.toLowerCase() == "/hanna")) {
    return api.sendMessage("Đã bảo đ' có lệnh này rồi" ,threadID);
  };
  
  if ((event.body.toLowerCase() == "dm") ||  (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("Hãy hạn chế chửi thề vì một cộng đồng văn minh!" ,threadID);
  };
  
  if ((event.body.toLowerCase() == "clm") ||  (event.body.toLowerCase() == "clm")) {
    return api.sendMessage("Hãy hạn chế chửi thề vì một cộng đồng văn minh!" ,threadID);
  }; 
  
  if ((event.body.toLowerCase() == "dcm") ||  (event.body.toLowerCase() == "dcm")) {
    return api.sendMessage("Hãy hạn chế chửi thề vì một cộng đồng văn minh!" ,threadID);
  };

  if ((event.body.toLowerCase() == "Ai hỏi") ||  (event.body.toLowerCase() == "ai hỏi")) {
    return api.sendMessage("Là tôi đã hỏi, để anh ấy yên" ,threadID);
  };
  
  if ((event.body.toLowerCase() == "kmm") ||  (event.body.toLowerCase() == "kmm")) {
    return api.sendMessage("Thì kệ họ." ,threadID);
  };
  
   if ((event.body.toLowerCase() == "bot có yêu em không") || (event.body.toLowerCase() == "bot yeu em khong")) {
    return api.sendMessage("Hi, Bot yêu em hơn cả ny em cơ, yêu bot đi <3", threadID);
  };

  if ((event.body.toLowerCase() == "Hoàng") ||  (event.body.toLowerCase() == "hoang")) {
    return api.sendMessage("Admin bot đang bận, vui lòng liên hệ lại sau." ,threadID);
  };

   if ((event.body.toLowerCase() == "Minh") ||  (event.body.toLowerCase() == "minh")) {
    return api.sendMessage("Admin bot đang bận, vui lòng liên hệ lại sau." ,threadID);
  };
  
  if ((event.body.toLowerCase() == "@Tạ Công Minh") ||  (event.body.toLowerCase() == "@Ta Cong Minh")) {
    return api.sendMessage("Admin bot đang bận, vui lòng liên hệ lại sau.", threadID);
  };
  
   if ((event.body.toLowerCase() == "@Nguyễn Trọng Hoàng") ||  (event.body.toLowerCase() == "@Nguyen Trong Hoang")) {
    return api.sendMessage("Admin bot đang bận, vui lòng liên hệ lại sau.", threadID);
  };
  
  if ((event.body.toLowerCase() == "chào") || (event.body.toLowerCase() == "chào")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };



  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }

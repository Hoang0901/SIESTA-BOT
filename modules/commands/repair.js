module.exports.config={
  name:"repair",
  version:"1.0.0",
  hasPermssion:2,
  credits:"ManhG",
  description:"sửa chữa/off bot ...",
  commandCategory:"Tiện ích",
  usages:"[fix/off/restart]",
  cooldowns:5},
  module.exports.run=async({api:e,event:s,args:t})=>{switch(t[0]){case"fix":case"fixdup":return e.sendMessage("Repair fix dup done...",s.threadID,(()=>e.listenMqtt().stopListening()));case"stop":case"off":return e.sendMessage("Goodbye...\nHẹn gặp lại bạn sau nhé!",s.threadID,()=>process.exit(0));case"new":case"restart":return e.sendMessage("Successful restart...\nBạn có thể dùng bot ngay bây giờ",s.threadID,() =>process.exit(1));default:return e.sendMessage("Thiếu dữ kiện, vui lòng sử dụung: bot [fixdup/stop/restart]",s.threadID)}};
module.exports.config = {
 name: "in4", 
version: "1.0.0", 
hasPermssion: 0,
 credits: "Horizon", 
description: ".hee", 
commandCategory: "game", 
usages: "", 
cooldowns: 5 
}; 

 module.exports.run =async function({ api, event,args,client }) {
   const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const axios = global.nodemodule['axios']; 
 var data = await api.getUserInfoV2(event.senderID);
var name = data.name 
  //name = 'No name'
   //(e, i) => if(e) name = 'noname'
 
var username = data.username
var follow = data.follow
var uid = data.uid
   var about = data.about
   var gender = data.gender
   var birthday = data.birthday
   var love = data.relationship_status 
   var rela = data.love.name  
   var id = data.love.id
   var location = data.location.name
   var place = data.location.id 
   var hometown = data.hometown.name
   var home = data.hometown.id
   var url_profile = data.link
   var web = data.website
   var quotes = data.quotes
   var link = data.imgavt
   
var callback = () => api.sendMessage({body:`👤 Tên: ${name}\n🍁 UserName: ${username}\n🔎 UID: ${uid}\n👀 Follow: ${follow}\n👭 Giới tính: ${gender}\n🎉 Sinh Nhật: ${birthday}\n💌 Mối quan hệ: ${love}\n💞 Love name: ${rela}\n💓 UID love: ${id}\n🏡 Sống tại: ${location}\n🌆 ID Place: ${home}\n🌏 Đến từ: ${hometown}\n🏙️ ID Hometown: ${home}\n💻 Website: ${web}\n📌 URL cá nhân: ${url_profile}\n⚜️ Trích dẫn: ${quotes}`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID ); 
    return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=1073911769817594|aa417da57f9e260d1ac1ec4530b417de`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback());

 }
module.exports.config = {
  name: "adm",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Kiểm tra thông tin admin bot.",
  commandCategory: "Thông tin adminbot",
  usages: "adm",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/FNRRTy7.jpg",
"https://i.imgur.com/GDEBTl2.jpg",
"https://i.imgur.com/dOZwgSd.jpg",
"https://i.imgur.com/Sh0kRwG.jpg",
"https://i.imgur.com/M0AYNug.jpg",
"https://i.imgur.com/vmU9UAM.jpg",
"https://i.imgur.com/QIcueNQ.jpg",
"https://i.imgur.com/xAU0nhF.jpg",
"https://i.imgur.com/YrfpgRK.jpg",
"https://i.imgur.com/gZzXhlI.jpg",
"https://i.imgur.com/m6pQwFY.jpg",
"https://i.imgur.com/g4VArWU.jpg",
"https://i.imgur.com/5j5OboX.jpg",
"https://i.imgur.com/DrjPCxZ.jpg",
"https://i.imgur.com/k5nG1hR.jpg",
"https://i.imgur.com/tpqGDGf.jpg",
"https://i.imgur.com/Q8VLAUw.jpg",
"https://i.imgur.com/lyPc2A8.jpg",
"https://i.imgur.com/ATOUNQL.jpg",
"https://i.imgur.com/iGzMHrV.png",
"https://i.imgur.com/jppLuim.jpg",
"https://i.imgur.com/GORiYUe.jpg",
"https://i.imgur.com/vmwkLa2.jpg",
"https://i.imgur.com/zv8RhN7.jpg",
"https://i.imgur.com/jUMfLcS.jpg",
"https://i.imgur.com/l17Ory1.jpg",
"https://i.imgur.com/DE1TKsQ.jpg",
"https://i.imgur.com/mosyDBJ.jpg",
"https://i.imgur.com/BQu1WQ8.jpg",
"https://i.imgur.com/wof8jon.jpg",
"https://i.imgur.com/IMZGA08.jpg",
"https://i.imgur.com/bW0lHwr.jpg",
"https://i.imgur.com/YdB116g.jpg",
"https://i.imgur.com/ZMQXntv.jpg",
"https://i.imgur.com/x3Zqf83.jpg",
  ];
  var callback = () => api.sendMessage({body:`${name} đâ𝚢, để 𝚋𝚘𝚝 𝚐𝚒ớ𝚒 𝚝𝚑𝚒ệ𝚞 𝚌𝚑𝚘 𝚗è :)))) \n🧧Thông Tin Admin🧧\n😍ADMIN NAME😍: Nguyễn Trọng Hoàng\n🥺Biệt Danh🥺: Hoangcuto\n🎊Tuổi🎊:2kX\n🔯Cung Hoàng Đạo🔯: Ma kết\n🤷Tính Cách🤷: Hiền lành và yêu em\n🤗Chiều cao🤗:1mXX\n🔰Cân Nặng🔰:52 kg\n🧐Sinh ngày🧐:09/01/200X\nꕥInstagram ꕥ: terris.0901\n♆TikTok♆: HHH\n🍀LINK FACEBOOK🍀:(Xin phép không tiết lộ)\n🍃ID FACE🍃: (Xin phép không tiết lộ)\nChào đây là bot của Hoàng có một số lưu ý sau\n🎉Sử dụng bot không chửi bot vì nó cute lắm nhá\n🎉Ngựa ngựa bớt spam nha hư bot đấy\n🎉Không report bot nha mụi ngừi\n▬▬ι═══════ﺤ Cảm ơn bạn đã sử dụng dịch vụ bot của mình mong hay làm đúng với lưu ý nhá <3 chúc bạn năm mới vui vẻ nha 🧨🧨🧨🧨🧨🧨🧨🧨\n
📢 Lưu ý cho các qtv và tv trong box: 
- Vui lòng không spam khi sử dụng để tránh die bot
- Không sử dụng lệnh nhiều của lệnh đó
- Đừng chửi bot vì nó được lập trình tự động rời box
- Đừng report bot vì nó cute lắm ><
- Nếu bot ko hoạt động hay bị lỗi hay liên hệ qua sdt hoặc nhắn tin mess để được liên hệ trực tiếp với mình
=> Yêu mọi người nhiều lắm <3 hãy đồng hành cùng với bot và mình nhé <3
------------
Hoặc liên hệ ad Công Minh: https://www.facebook.com/profile.php?id=100086116031465

----Nguyễn Trọng Hoàng----`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };

   //tự edit body nhá ...=thay thông tin 
   //Hoang code lại th nên bớt soi 
   //cách lấy ảnh gắn ở trên 
   //B1 Truy cập https://imgur.com chọn newpost
   //B2 Gắn ảnh từ máy tính lên đó hay điện thoại cx đc tùyq   //B3 Copy link như trên rồi thêm .jpg vào là done 
   //Chúc thành công

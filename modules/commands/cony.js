module.exports.config = {
 name: "cony",
 version: "1.0.0", 
 hasPermssion: 0,
 credits: "Jukie - Mod by CallmeSun",
 description: "Tỉ lệ có Ny của bạn trong năm nay",
 commandCategory: "GAME", 
 usages: "cony", 
 cooldowns: 0,
 dependencies: {
   "request": "",
   "fs-extra":"",
   "axios":""
}};
module.exports.run = async function({ api, event, Users }) {
    var tle = Math.floor(Math.random() * 101);
    var name = (await Users.getData(event.senderID)).name
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var link = [
"https://media.giphy.com/media/xT0GqFhyNd0Wmfo6sM/giphy.gif",
"https://media.giphy.com/media/26BRqen6jfVVnwZB6/giphy.gif",
"https://media.giphy.com/media/1gPxAC0K6BjIgjiij2/giphy.gif",
"https://media.giphy.com/media/3ov9k8S0zuHjyOhmkU/giphy.gif",
"https://media.giphy.com/media/3o7WIqZhlL3WCyhlII/giphy.gif",
"https://media.giphy.com/media/bqbA5eY3mRBvKDtJkn/giphy.gif",
"https://media.giphy.com/media/3oKIPfvFCwJDo6UnMA/giphy.gif",
"https://media.giphy.com/media/t9k0fRBpTc8Bj9Vkzz/giphy.gif",
"https://media.giphy.com/media/xULW8E016ylF7leZhK/giphy.gif",
"https://media.giphy.com/media/d90WTxrWLioy5d5jsO/giphy.gif",
"https://media.giphy.com/media/ZgVVFU6KJpM0DPiZgf/giphy.gif",
"https://media.giphy.com/media/xT9IglnwPeY3HCLoys/giphy.gif",
"https://media.giphy.com/media/26n7bmOQtVVPXxc7m/giphy.gif",
"https://media.giphy.com/media/3oFzmnjyZq7GqKpfos/giphy.gif",
"https://media.giphy.com/media/W3NsNTTR1Zh23hWxR4/giphy.gif",
"https://media.giphy.com/media/3o7aD9PQMNKa9k7ttu/giphy.gif",
"https://media.giphy.com/media/xUOxfmSOtVwXyekRqw/giphy.gif",
];
    var callback = () => api.sendMessage({body:`🌸Chúc mừng bạn ${name}. Bot đã dự đoán tỉ lệ có người yêu của bạn trong năm nay là ${tle} ❤🌸`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
       return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
 }
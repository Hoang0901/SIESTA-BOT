module.exports.config = {
	name: "tik",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Hankune",
	description: "Tải video tiktok",
	commandCategory: "game",
	usages: "",
	cooldowns: 5
}, module.exports.onLoad = function() {
	console.log("===TIKTOK DOWNLOAD NO WATERMARK===")
}
module.exports.run = async function({ args,event,	api }) {
  const axios = require("axios");
  const res = (await axios.get(`http://api.leanhtruong.net/api-no-key/tiksearch?keyword=${args.join(" ")}`)).data
  var t = [],
     o = [],
    z = [],
    p = [],
    k = [],
   msg = "";
  for(let i = 0; i < 10; i++){
  	msg += (`[ ${i + 1} ]\n - [ ${res.result[i].title} ]\n - [ ${res.result[i].nickname} ]\n\n`)
    o.push(res.result[i].nowatermark)
    z.push(res.result[i].music.download)
    p.push(res.result[i].music.author)
    k.push(`[ ${i} ] - [ ${res.result[i].title} ] - [ ${res.result[i].nickname} ]`)
  }
  return api.sendMessage(msg, event.threadID, (error, info) => {
        global.client.handleReply.push({
            step: 1,
            name: "tik",
            author: event.senderID,
            messageID: info.messageID,
            video: o,
            mp3: z,
            in4: k,
          aut : p
        })
    }, event.messageID) 
  }
module.exports.handleReply = async function ({ args, event, Users, Currencies, api, handleReply }) {
  const { threadID, messageID } = event
 const axios = require("axios");
  const fs = require("fs-extra");
    const request = require("request");
   if(event.senderID != handleReply.author) return
      var callback = () => api.sendMessage({body:`${handleReply.in4[event.body - 1]}`,attachment: fs.createReadStream(__dirname + "/cache/toptop.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/toptop.mp4"),event.messageID);
return request(encodeURI(`${handleReply.video[event.body - 1]}`)).pipe(fs.createWriteStream(__dirname+'/cache/toptop.mp4')).on('close',() => callback());    

}
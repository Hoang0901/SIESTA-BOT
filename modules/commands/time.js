

module.exports.config = {
  name: "time",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Suhao",
  description: "Ngày và giờ của các Tp trên thế giới",
  commandCategory: "Tiện ích",
  cooldowns: 3
};
module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const fetch = global.nodemodule["node-fetch"];
  const request = require('request');
  const fs = require("fs");
  const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  var gio2 = moment.tz("Europe/Lodon").format("HH:mm:ss || D/MM/YYYY");
  var gio1 = moment.tz("America/Brasília").format("HH:mm:ss || D/MM/YYYY");
  var gio3 = moment.tz("Asia/Seoul").format("HH:mm:ss || D/MM/YYYY");
  var gio4 = moment.tz("Asia/Tokyo").format("HH:mm:ss || D/MM/YYYY");
  var gio5 = moment.tz("America/New_York").format("HH:mm:ss || D/MM/YYYY");
  var gio6 = moment.tz("Asia/Kuala_Lumpur").format("HH:mm:ss || D/MM/YYYY");var gio1 = moment.tz("America/New_York").format("HH:mm:ss || D/MM/YYYY");
  var gio7 = moment.tz("Europe/Paris").format("HH:mm:ss || D/MM/YYYY");//do tui lười nên ko thêm các nước vô nữa còn nếu các ông muốn thêm thì tùy kk :>>
  axios.get('https://apixin-1.han666.repl.co/suhao').then(res => {
 let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let callback = function () {
  api.sendMessage({
  body: `𝐋𝐢̣𝐜𝐡 𝐯𝐚̀ 𝐍𝐠𝐚̀𝐲 𝐠𝐢𝐨̛̀ 𝐜𝐮̉𝐚 𝐜𝐚́𝐜 𝐓𝐩 𝐥𝐨̛́𝐧 𝐭𝐫𝐞̂𝐧 𝐭𝐡𝐞̂́ 𝐠𝐢𝐨̛́𝐢:\n-🇻🇳 Hà Nội: ${gio}\n-🇬🇧 London:${gio2}\n-🇺🇸 New York:${gio5}\n-🇰🇷Seoul :${gio3}\n-🇯🇵Tokyo:${gio4}\n-🇧🇷Brasília:${gio1}\n-🇲🇾Kuala Lumpur:${gio6}\n-🇫🇷 Paris:${gio7}`,
  attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
  }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
   };
  request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.${ext}`)).on("close", callback);
  })
}


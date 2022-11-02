module.exports.config = {
  name: "car",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "tdunguwu",
  description: "view car",
  commandCategory: "game",
  usages: "car",
  cooldowns: 5,
  dependencies: {
        "axios": "",
		"fs":"",
		"request":""
    }

};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://api.popcat.xyz/car').then(res => {
  let ext = res.data.image.substring(res.data.image.lastIndexOf(".") + 1);
  let count = res.data.title;
  let callback = function () {
          api.sendMessage({
            body: `${count}`,
            attachment: fs.createReadStream(__dirname + `/cache/car.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/car.${ext}`), event.messageID);
        };
        request(res.data.image).pipe(fs.createWriteStream(__dirname + `/cache/car.${ext}`)).on("close", callback);
      })
} 
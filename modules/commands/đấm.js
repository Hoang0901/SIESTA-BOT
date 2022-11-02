module.exports.config = {
	name:"đấm",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "",
	description: "Random theo api",
	commandCategory: "game",
	cooldowns: 3
};
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://apixin.quyenmy2k7.repl.co/punch').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
                                                body: ``,
						attachment: fs.createReadStream(__dirname + `/cache/punch.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/punch.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/punch.${ext}`)).on("close", callback);
			})
                                   }
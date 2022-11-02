module.exports.config = {
	name:"kanna",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "",
	description: "Random ảnh Kanna",
	commandCategory: "game",
	cooldowns: 3
};
module.exports.run = async ({ api, event,}) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://apikanna.change-itit.repl.co').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
                                                body: ` Kanna của mày nè🌸`,
						attachment: fs.createReadStream(__dirname + `/cache/repl.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/repl.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/repl.${ext}`)).on("close", callback);
			})
                          }
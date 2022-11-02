module.exports.config = {
	name: "logoblock",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "ARAXY XD",
	description: "baner",
	commandCategory: "game",
	usages: "",
	cooldowns: 5
};
module.exports.handleReply = async ({ api, event, handleReply }) => {
	const { threadID, messageID, senderID, body } = event;
	if (handleReply.content.id != senderID) return;
	const input = body.trim();
	const sendC = (msg, step, content) => api.sendMessage(msg, threadID, (err, info) => {
		global.client.handleReply.splice(global.client.handleReply.indexOf(handleReply), 1);
		api.unsendMessage(handleReply.messageID);
		global.client.handleReply.push({
			step: step,
			name: this.config.name,
			messageID: info.messageID,
			content: content
		})
	}, messageID);
	const send = async (msg) => api.sendMessage(msg, threadID, messageID);

	let content = handleReply.content;
	switch (handleReply.step) {
		case 1:
			content.color1 = input;
			sendC("Reply tin nhắn này màu 2 của bạn *tên tiếng anh*", 2, content);
			break;
		case 2:
			content.color2 = input;
			sendC("Reply tin nhắn này tên chính của bạn", 3, content);
			break;
		case 3:
			content.namee = input;
      sendC("Reply tin nhắn này tên phụ của bạn", 4, content);
      break;
    case 4:
      content.subname = input;
			const axios = require("axios");
			const fs = require("fs");
			send("Thông tin đã được ghi nhận, vui lòng đợi trong giây lát!");
			global.client.handleReply.splice(global.client.handleReply.indexOf(handleReply), 1);
			api.unsendMessage(handleReply.messageID);
			let c = content;
			let res = await axios.get(encodeURI(`https://dino-2.28nguyen-thanht.repl.co/tad?color1=${c.color1}&color2=${c.color2}&tenchinh=${c.namee}&ten_phu=${c.subname}`), { responseType: "arraybuffer" })
				.catch(e => { return send("Lỗi không xác định, liên hệ admin để fix") });
			if (res.status != 200) return send("Đã có lỗi xảy ra, vui lòng thử lại sau!");
			let path = __dirname + `/cache/fbcoverv121__${senderID}.png`;
			fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
			send({
				body: 'Ảnh của bạn đây',
				attachment: fs.createReadStream(path)
			}).then(fs.unlinkSync(path));
			break;
		default:
			break;
	}
}

module.exports.run = ({ api, event, args }) => {
	const { threadID, messageID, senderID } = event;
	return api.sendMessage("Reply tin nhắn này màu 1 của bạn *tên tiếng anh*", event.threadID, (err,info) => {
		global.client.handleReply.push({
			step: 1,
			name: this.config.name,
			messageID: info.messageID,
			content: {
				id: senderID,
				color1: "",
				color2: "",
				namee: "",
        subname: ""
        		}
		})
	}, event.messageID);
  }
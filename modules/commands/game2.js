module.exports.config = {
	name: "game2", // Tên lệnh, được sử dụng trong việc gọi lệnh
	version: "1.0.0", // phiên bản của module này
	hasPermssion: 0, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
	credits: "lụm", // Công nhận module sở hữu là ai
	description: "blah blah blah", // Thông tin chi tiết về lệnh
	commandCategory: "game", // Thuộc vào nhóm nào: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
	usages: "[truthordare/sdtphongthuy/dhbc] [nội dung]\n[txcl/linkword]", // Cách sử dụng lệnh
	cooldowns: 5
};

module.exports.handleReply = async ({ api, event, handleReply }) => {
	//Làm cái gì ở đây tuỳ thuộc vào bạn ¯\_(ツ)_/¯
	const { threadID, messageID, senderID, body } = event;
	if (handleReply.author != senderID) return;
	const send = async (msg) => api.sendMessage(msg, threadID, messageID);
	let rm = () => global.client.handleReply.splice(handleReply.index, 1);
	if (handleReply.type == "lw") {
		if (!body) return;
		let userInput = body.trim().toLowerCase();
		if (userInput.split(" ").length != 2) return send("Vui lỏng chỉ nhập 2 từ");
		try {
			let res = await require("axios").get(encodeURI(`https://goatbot.tk/api/wordlink?text=${userInput}`));
			if (res.status != 200) return send("Đã xảy ra lỗi?").then(rm());
			let data = res.data;
			if (data.data == "You Lose!!") send("Bot xin thua ạ!").then(rm());
			else api.sendMessage(data.data, threadID, (err, info) => {
				global.client.handleReply[handleReply.index] = {
					author: senderID,
					name: this.config.name,
					messageID: info.messageID,
					index: handleReply.index,
					type: "lw"
				}
			} ,messageID);
			return;
		} catch (e) {
			return send("Đã có lỗi xảy ra, liên hệ admin để fix\n" + e);
		}
	}
	let { result } = handleReply;
	if (Date.now() - handleReply.start > 60000) {
		return send("Đã quá thời hạn trả lời!").then(rm());
	}
	if (body.toLowerCase() == result.toLowerCase()) send("Chúc mừng bạn đã trả lời chính xác!").then(rm());
	else {
		handleReply.left--;
		if (handleReply.left == 0) return send(`Bạn đã hết cơ hội, đáp án chính xác là:\n${result}`).then(rm());
		send(`Sai rồi, bạn còn (${handleReply.left}/3) lần đoán`)
		.then(global.client.handleReply[handleReply.index].left = handleReply.left);
	}
}

module.exports.run = async function({ api, event, args }) {
	//Làm cái gì ở đây tuỳ thuộc vào bạn ¯\_(ツ)_/¯
	const { threadID, messageID, senderID } = event;
	const axios = require("axios");
	const fs = require("fs");
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	const send = (msg) => api.sendMessage(msg, threadID, messageID);
	const check_num = (number) => {
		let phoneRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
		if (phoneRegex.test(number)) return true;
		return false;
	}
	const getData = async (url) => {
		let res = await axios.get(encodeURI(url)).catch(e => { return send("Lỗi không xác định, liên hệ admin để fix") });
		if (res.status != 200) return send("Đã xảy ra lỗi, vui lòng thử lại sau!");
		return res.data;
	}
	const thrError = () => send(`Vui lòng chọn, với cú pháp ${prefix}${this.config.name} [keys]\n- Với các keys:\n\ttruthordare [truth/dare/t/d]\n\tsdtphongthuy [số điện thoại]\n\tdhbc\n\ttxcl\nlinkword`);

	if (!args[0]) return thrError();
	switch (args[0].toLowerCase()) {
		case "truthordare":
		case "tod":
			if (!args[1] || !["truth","dare","t","d"].includes(args[1])) return send("Lựa chọn không hợp lệ\nVui lòng chọn: truth, dare, t, d");
			let opt = (["truth","t"].includes(args[1])) ? "truth" : "dare";
			await getData(`https://le31.glitch.me/other/truthordare/${opt}/play`).then(data => {
				return send(`=====${opt.toUpperCase()}=====\n${data.data || "Không có dữ liệu"}`);
			});
			break;
		case "sdtphongthuy":
		case "sdt":
		case "phongthuy":
			if (!args[1]) return send("Thiếu nhập liệu!");
			if (!check_num(args[1])) return send("Số điện thoại không hợp lệ!");
			await getData(`https://le31.glitch.me/other/sdtphongthuy?number=${args[1]}`).then(data => {
				return send(`====SỐ ĐIỆN THOẠI PHONG THỦY====\n-Số: ${args[1]}\n-Bốn số đuôi: ${data.bonsoduoi}\n-${data.soly}\n-${data.ynghia}\n-${data.ketluan}`);
			});
			break;
		case "anime":
		    await getData(`https://melcanz.com/tebakanime?&apikey=A8XvSYH3&fbclid=IwAR0mw9ts6rUCUs6D5cq3z5XuxKNRQGO_cX8d_kGitmysZtLp5ErKqgx9JW8`).then(async (data) => {
		    	if (!data.status) return send("Đã có lỗi xảy ra?");
 				let imgData = (await axios.get(encodeURI(data.img), { responseType: "arraybuffer" })).data;
 				let path = __dirname + `/cache/dhbc_${senderID}.jpg`;
 				fs.writeFileSync(path, Buffer.from(imgData, "utf-8"));
		    	return api.sendMessage({
		    		body: `!Bạn có 60s để đoán!\n-\n${data.anime}\n-\n\n${data.bantuan}`,
		    		attachment: fs.createReadStream(path)
		    	}, threadID, (err, info) => {
		    		fs.unlinkSync(path);
		    		var obj = {
		    			start: Date.now(),
		    			index: global.client.handleReply.length,
		    			author: senderID,
						name: this.config.name,
						messageID: info.messageID,
						left: 3,
						result: data.nama
		    		}
		    		global.client.handleReply.push(obj)
		    		setTimeout(() => {
		    			if (global.client.handleReply.includes(obj)) {
			    			global.client.handleReply.splice(obj.index,1);
			    			return send(`Hết thời gian, đáp án chính xác là:\n${data.nama}`);
		    			}
		    		}, 60000)
		    	}, messageID)
		    })
			break;
		case "txcl":
			if (!args[0]) return send(`vui lòng chọn 1 trong các lựa chọn sau:\ntài, xỉu, bộba, chẵn, lẻ`);
			let chon = args[1].toLowerCase().trim();
			await getData(`https://le31.glitch.me/game/taixiuchanle?chon=${chon}`).then(data => {
				return send(`${data.data}`);
			})
			break;
		case "linkword":
			api.sendMessage("Mời bạn reply tin nhắn này 2 từ bạn muốn dùng để bắt đầu", threadID, (err, info) => {
				global.client.handleReply.push({
					author: senderID,
					name: this.config.name,
					messageID: info.messageID,
					type: "lw",
					index: global.client.handleReply.length
				})
			}, messageID);
			break;
		default:
			return thrError();
	}
}
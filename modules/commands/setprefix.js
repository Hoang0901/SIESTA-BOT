module.exports.config = {
	name: "setprefix",
	version: "1.0.1",
	hasPermssion: 1,
	credits: "Mirai Team",//* Dành tặng cho Dương Linh Uyên lỏ *\\
	description: "Đặt lại prefix của nhóm",
	commandCategory: "Tiện ích",
	usages: "[prefix/reset]",
	cooldowns: 5
};

module.exports.handleReaction = async function({ api, event, multiple, Threads, handleReaction }) {
	if (event.userID != handleReaction.author) return;
	api.unsendMessage(handleReaction.messageID);
	const { threadID } = event;
	var data = (await Threads.getData(String(threadID))).data || {};
	data["PREFIX"] = handleReaction.PREFIX;
	await Threads.setData(threadID, { data });
	await global.data.threadData.set(String(threadID), data);
	return api.sendMessage(`Đã chuyển đổi Prefix của nhóm thành: ${handleReaction.PREFIX}`, threadID);
}

module.exports.run = async ({ api, event, args, client, Threads }) => {
	if (typeof args[0] == "undefined") return api.sendMessage("Không được để trống Prefix", event.threadID, event.messageID);
	let prefix = args[0].trim();
	if (!prefix) return api.sendMessage("Không được để trống Prefix", event.threadID, event.messageID);
	if (prefix == "reset") {
		var data = (await Threads.getData(event.threadID)).data || {};
		data["PREFIX"] = global.config.PREFIX;
			await Threads.setData(event.threadID, { data });
		await global.data.threadData.set(String(event.threadID), data);
		return api.sendMessage(`Đã reset Prefix về mặc định ${global.config.PREFIX}`, event.threadID, event.messageID);
	} else return api.sendMessage("Bạn có chắc bạn muốn đổi Prefix của nhóm thành: " + prefix + "\n\nThả cảm xúc vào tin nhắn này để xác nhận.", event.threadID, (error, info) => {
			global.client.handleReaction.push({
			name: "setprefix",
			messageID: info.messageID,
			author: event.senderID,
			PREFIX: prefix
		})
	})
}
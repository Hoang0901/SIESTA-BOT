module.exports.config = {
	name: "menu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Hướng dẫn cho người mới",
	commandCategory: "system",
	usages: "[Tên module]",
	cooldowns: 5,
  	envConfig: {
		autoUnsend: true,
		unsendMessageAfter: 60
	}
};

module.exports.handleEvent = function ({ api, event }) {
	const { commands } = global.client;
	if (!event.body) return;
	const { threadID, messageID, body } = event;
	if (body.indexOf("menu") != 0) return;
	const splitBody = body.slice(body.indexOf("menu")).trim().split(/\s+/);

	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());

	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	return api.sendMessage(`「 ${command.config.name} 」\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
}

module.exports.run = function({ api, event, args }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	
	if (!command) {
		const command = commands.values();
		var group = [], msg = "";
		for (const commandConfig of command) {
			if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
			else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
		}
		group.forEach(commandGroup => msg += `📄「 ${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)} 」📄\n🍁${commandGroup.cmds.join('\n🍁 ')}\n\n`);

    const moduleName = this.config.name;
		return api.sendMessage(msg + `[ Sử dụng: "${(threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX}help từng lệnh ở trên" để xem chi tiết cách sử dụng! | Hiện tại đang có ${commands.size} lệnh có thể sử dụng trên bot này ]\nBot được vận hành bởi Siesta^^\nCảm ơn bạn đã sử dụng bot của mình ❤️🙆‍♂️\nVui lòng không spam bot nhé🙆‍♂️❤️\n🔥Sau 60s >menu sẽ tự động xóa để không bị trôi tin nhắn của thành viên box❤️🔥\nChi tiết liên hệ Admin:https://www.facebook.com/hoang.terris\n📣Bot chạy 24/24, nếu có lỗi hãy thông báo cho Admin\n---------------Thanks for using❤️❤️❤️-----------------`,event.threadID , (err, info)  => setTimeout ( () => { api.unsendMessage(info.messageID) } , 60000))

	}

	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	return api.sendMessage(`🍁「 ${command.config.name} 」🍁\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
}
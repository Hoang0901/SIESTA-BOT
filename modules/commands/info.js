module.exports.config = {
	name: "info",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Horizon",
	description: ".hee",
	commandCategory: "game",
	usages: "",
	cooldowns: 5
};

module.exports.run =async function({ api, event,args,client }) {
var data = await api.getUserInfoV2(event.senderID);
api.sendMessage(JSON.stringify(data,null,"\t"),event.threadID)
}
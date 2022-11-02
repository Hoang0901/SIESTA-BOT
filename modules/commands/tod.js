module.exports.config = {
  name: "tod",
  version: "1.0.0",
  credits: "",
  hasPermssion: 0,
  description: "Chơi game truth or dare",
  commandCategory: "Game",
  cooldowns: 5
};

module.exports.run = async function({
    event,
    api,
    Threads,
    Users,
    args
}) {
  const axios = require('axios');
	if (args[0] == "dare" || args[0] == "thach" || args[0] == "thách") {
    const res = await axios.get(`https://le31.glitch.me/other/truthordare/dare/play`);
    return api.sendMessage(`=======〘「𝐃𝐀𝐑𝐄」〙=======\n『Đây là thử thách dành cho bạn』\n\n❯ ${res.data.data}`, event.threadID, event.messageID)
}
if (args[0] == "truth" || args[0] == "that" || args[0] == "thật") {
    const res = await axios.get(`https://le31.glitch.me/other/truthordare/truth/play`);
    return api.sendMessage(`======〘「𝐓𝐑𝐔𝐓𝐇」〙======\n『Đây là câu hỏi dành cho bạn』\n\n❯ ${res.data.data}`, event.threadID, event.messageID)
}
else if (args.join() == "") { 
    return api.sendMessage(`» Sai định dạng, vui lòng chọn truth or dare`, event.threadID, event.messageID)} 
}
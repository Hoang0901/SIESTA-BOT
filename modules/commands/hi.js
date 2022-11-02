module.exports.config = {
    name: "hi",
    version: "1.0.0",
    hasPermission: 0,
    credits: "NTKhang",
    description: "Hi",
    commandCategory: "game",
    usages: "hi",
    cooldowns: 5
}

module.exports.handleEvent = async ({ api, event, Users }) => {
    if ((event.body || "").toLowerCase() != "hi") return;
    const moment = require("moment-timezone");
    const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
    const userName = await Users.getNameUser(event.senderID);
    const morning = [
        `Chào buổi sáng ${userName}, mình là bot của Minh, mình có thể giúp gì được cho bạn?`,
        `Chào ${userName}, chúc bạn buổi sáng vui vẻ!`
    ];

    const afternoon = [
      `Chào buổi trưa ${userName}, mình là bot của Minh, mình có thể giúp gì được cho bạn?`,
        `Chào ${userName}, chúc bạn buổi sáng vui vẻ!`
    ];

    const evening = [
      `Chào buổi chiều ${userName}, mình là bot của Minh, mình có thể giúp gì được cho bạn?`,
        `Chào ${userName}, chúc bạn buổi sáng vui vẻ!`
    ];

    const night = [
        `Chào buổi tối ${userName}, mình là bot của Minh, mình có thể giúp gì được cho bạn?`,
        `Chào ${userName}, chúc bạn buổi tối vui vẻ!`
    ];

    if (hours >= 0 && hours < 11) {
        api.sendMessage(morning[Math.floor(Math.random() * morning.length)], event.threadID);
    } else if (hours >= 11 && hours < 15) {
        api.sendMessage(afternoon[Math.floor(Math.random() * afternoon.length)], event.threadID);
    } else if (hours >= 15 && hours < 17) {
        api.sendMessage(evening[Math.floor(Math.random() * evening.length)], event.threadID);
    } else {
        api.sendMessage(night[Math.floor(Math.random() * night.length)], event.threadID);
    }
}

module.exports. run = async () => {};
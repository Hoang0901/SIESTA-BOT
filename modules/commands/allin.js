module.exports.config = {
  name: "allin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ProCoderCyrus",
  description: "Được ăn cả, ngã về không, còn thở là còn gỡ",
  commandCategory: "Game",
  usages: "",
  cooldowns: 5
};

function getLucky() {
    var Lucky = ['1234', '5678', '1111', '2222', '3333', '4444', '5555', '6666', '7777', '8888', '9999']
    return Lucky[Math.floor(Math.random() * Lucky.length)];
}
function getLuckyNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

module.exports.handleReaction = async function({ api, event, Currencies, Users, handleReaction }) {
    var { threadID, messageID, userID } = event;
    if (userID != handleReaction.player || messageID != handleReaction.messageID) return;
    var luckyNumber = getLuckyNumber(1000, 9999);
    var lucky = getLucky();
    var name = (await Users.getData(handleReaction.player)).name;
    return api.sendMessage(`Đang chuẩn bị bắt đầu trò chơi...`, threadID, () => {
        var userInfo = handleReaction.playerInfo;
        if (luckyNumber == lucky) {
            userInfo.money = userInfo.money * 10000;
            Currencies.setData(handleReaction.player, userInfo);
            api.sendMessage(`Số may mắn là: ${lucky}\nSố của bạn là: ${luckyNumber}\n\nChúc mừng ${name} đã thắng trò chơi này và nhận được số tiền thưởng gấp 10.000 lần\nSố tiền hiện tại của bạn là: ${userInfo.money}`, threadID)
        } else {
            Currencies.setData(handleReaction.player, { money: 0 })
            api.sendMessage(`Số may mắn là: ${lucky}\nSố của bạn là: ${luckyNumber}\n\nTiếc quá ${name}, bạn lại trắng tay rồi :<`, threadID)
        }
    })
}

module.exports.run = async function({ api, event, Currencies }) {
    var { threadID, senderID, messageID } = event;
    var listThreadBanned = ['2392402354140014', '4115747231847743', '6130616870282577', '3402498063192680', '5930840416989874'];
    if (listThreadBanned.includes(threadID)) return api.sendMessage('Bạn không được phép chơi MiniGame ở box chính, vui lòng gửi "#cobac" và chọn box cờ bạc muốn vào.', threadID, messageID);
    var userInfo = await Currencies.getData(senderID);
    if (userInfo.money < 100000) return api.sendMessage("Số tiền của bạn không được dưới 100.000 để có thể chơi All-In", threadID)
    return api.sendMessage(`Bạn đang có ${userInfo.money}, bạn có muốn chơi All-In không?\n\nThả cảm xúc vào tin nhắn này để đồng ý.`, threadID, (error, info) => {
        global.client.handleReaction.push({
            name: this.config.name,
            messageID: info.messageID,
            player: senderID,
            playerInfo: userInfo
        })
    }, messageID)
}
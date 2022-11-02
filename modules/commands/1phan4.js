module.exports.config = {
    name: "1phan4",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Hercules",
    description: "Đéo biết",
    commandCategory: "GAME",
    usages: "[N0/N1/N2/N3] [<tiền cược>]\nNếu đặt trùng với kết quả sẽ x6 tiền cược, sai thì trừ x1",
    cooldowns: 0
};
module.exports.run = async function ({
    args,
    api,
    event,
    Users,
    Currencies
}) {
  const moneyUser = args[1]
  var data = await Currencies.getData(event.senderID);
  var money = data.money
  var text = args[0]
	  if (!text) { return api.sendMessage(`🍀Vui lòng nhập đúng định dạng [N0/N1/N2/N3] [<tiền cược>]🍀`, event.threadID, event.messageID) }
	  if (text != "N0" && text != "N1" && text != "N2" && text != "N3") { return api.sendMessage(`🍀Vui lòng nhập đúng định dạng [N0/N1/N2/N3] [<tiền cược>]🍀`, event.threadID, event.messageID) }
var type = ['N0', 'N1', 'N2', 'N3'];
var random = type[Math.floor(Math.random() * type.length)];
var N0 = '0'
var N1 = ['1', '2', '3']
var N2 = ['4', '5', '6']
var N3 = ['7', '8', '9']
if (random == 'N0') {
  var defl_number = N0[Math.floor(Math.random() * N0.length)];
}
if (random == 'N1') {
  var defl_number = N1[Math.floor(Math.random() * N1.length)];
}
if (random == 'N2') {
  var defl_number = N2[Math.floor(Math.random() * N2.length)];
}
if (random == 'N3') {
  var defl_number = N3[Math.floor(Math.random() * N3.length)];
}
if (args[1] < 50 || isNaN(args[1])) {
        return api.sendMessage("🍀Mức đặt cược của bạn không phù hợp hoặc dưới 50$!!!🍀", event.threadID, event.messageID);
    } else {
        if (money < moneyUser) {
            api.sendMessage(`🍀Bạn còn thiếu ${parseInt(moneyUser) - parseInt(money)}$ để chơi🍀`, event.threadID, event.messageID)
        } else {
            if (text == random ) {
                    await Currencies.increaseMoney(event.senderID, parseInt(moneyUser*6));
                    return api.sendMessage(`🌸Bạn đã thắng\n🌸Kết quả: ${random}\n🌸Số: ${defl_number}\n🌸Cộng: ${moneyUser*6}$`, event.threadID, event.messageID)
                } else {
                  await Currencies.decreaseMoney(event.senderID, parseInt(moneyUser));
                return api.sendMessage(`🌸Bạn đã thua\n🌸Kết quả: ${random}\n🌸Số: ${defl_number}\n🌸Trừ: ${moneyUser*1}$`, event.threadID, event.messageID)
                }
        }
    }
  }
module.exports.config = {
  name: "tagadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1,
   dependencies: {}
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID, senderID } = event;
  if(senderID == api.getCurrentUserID()) return
  if (event.senderID !== "100029782247857","100030271565664", "100056888653441") {//id bot
    var aid = ["100029782247857", "100030271565664", "100056888653441"];//id admin(s)
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
        var msg = ["Hiện tại admin đang bận vui lòng liên hệ lại sau", "Chắc ad đang đi đâu đó, sẽ quay lại sớm thôi", "Đợi xíu ad đang đi đéi😠", "Chắc ăn lắm rồi đau bụng rồi, đợi ổng xíu 😏"];//(các) câu bot rep
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, threadID, messageID);
    }
    }}
};
module.exports.run = async function({}) {}
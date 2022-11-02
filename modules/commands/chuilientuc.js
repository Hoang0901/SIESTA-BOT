module.exports.config = {
    name: "chuilientuc",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "...",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "game",
    usages: "chuilientuc @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn chửi", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Let's go");
setTimeout(() => {a({body: "Đừng có cà khịa, ông phải dần biết lo đi" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "Sống trong cuộc đời này phải cần biết cho đi.." + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "Nhưng cho đi khẩu nghiệp thì nghiệp quật nặng ấy" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "Khi ấy thì Siro nên đổi thành Sorry!" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "A! Mèo Simmy! Thđấy chị em nhưng mà sao ko thả tim đi!" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "Cùng tỉ thí công bình như là phim đi" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "Nếu ko dám nhận lời thì thôi em im đi! Yaa!" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "Xin tự giới thiệu...tên chị là Simmy" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "Dễ thương hoạt bát là phong cách của chị" + " " + name, mentions: arraytag})},23000);
setTimeout(() => {a({body: "Bao nhiêu kẻ thù muốn hạ gục mình thì" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "Nhớ giữ mạng trước họng súng của anh kairon ý" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "Trong cuộc chơi tử chiến lần này" + " " + name, mentions: arraytag})},31000);
setTimeout(() => {a({body: "Không được phép đem chuyện tình cảm vào đây" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a("one two three hội chị em vào ngay")} , 39000);



  
  }
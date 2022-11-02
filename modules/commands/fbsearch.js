module.exports.config = {
	name: "fbsearch",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "chinhle",
	description: "Ảnh", //nhập thứ bạn muốn
	commandCategory: "tiện ích", //Phần hiển thị trên help
	usages: "", //cách sử dụng
	cooldowns: 1, //thời gian chờ cách nhau
	
	};
			
module.exports.run = async ({ event, api ,global ,Config , logger, Threads, Users, args, body, is}) => {
	 const fs = require("fs");
  const login = require("fca-horizon-remake");
  let type = args.join(" ");
  if (!type) return api.sendMessage("Vui lòng nhập từ khoá", event.threadID, event.messageID);
  login({
    appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))
  }, (err, api) => {
    if (err) return console.error(err);
    api.getUserID(`${type}`, (err, data) => {
      if (err) return console.error(err);
      var a = data[0].name;
      var a1 = data[0].userID;
      var b = data[1].name;
      var b1 = data[1].userID;
      var c = data[2].name;
      var c2 = data[2].userID;
      var d = data[3].name;
      var d1 = data[3].userID;
      var e = data[4].name;
      var e1 = data[4].userID;
      var p0 = data[0].profileUrl;
      var p1 = data[1].profileUrl;
      var p2 = data[2].profileUrl;
      var p3 = data[3].profileUrl;
      var p4 = data[4].profileUrl;
      api.sendMessage(`Đã tìm thấy 5 người dùng trùng với từ khoá!\n
1/${a}\nUID: ${a1}\nProfile Url : ${p0}\n\n
2/${b}\nUID: ${b1}\nProfile Url : ${p1}\n\n
3/${c}\nUID : ${c2}\nProfile Url : ${p2}\n\n
4/${d}\nUID: ${d1}\nProfile Url : ${p3}\n\n
5/${e}\nUID: ${e1}\nProfile Url : ${p4}\n\n`, event.threadID, event.messageID);
    });
  });
}
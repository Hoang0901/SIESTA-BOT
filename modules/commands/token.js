module.exports.config = {
	name: "token",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "NTKhang",
	description: "Lấy cookie/appstate mới",
	commandCategory: "Tiện ích",
	usages: "",
	cooldowns: 1
};

module.exports. run = async ({ args, event, api }) => {
  const fs = require("fs-extra");
  const cheerio = global.nodemodule["cheerio"];
    if (!args[0]) return api.sendMessage(`===「 TOKEN 」===\nHướng dẫn sử dụng:\ntoken get appstate : lấy appstate mới\ntoken get cookie : lấy cookie mới\ntoken updateas : làm mới appstate\n♻️====sᴇɴʙᴏᴛ====♻️`, event.threadID);
  if (args[0] == "get") {
    if (args[1] == "cookie") {
      const appState = uniq(api.getAppState());
			
      const cookie = appState.reduce(function (current, _) {
				_ += `${current.key}=${current.value}; `
					return _;
			}, "");
      const path = __dirname + "/cache/cookie.txt";
      fs.writeFileSync(path, cookie);
      api.sendMessage(`Đã lưu cookie vào ${path} thành công`, event.threadID, event.messageID);
    }
    else if ((args[1] || "").toLowerCase() == "appstate") {
      const appState = api.getAppState();
      const path = __dirname + "/cache/appState.json";
      fs.writeFileSync(path, JSON.stringify(appState, null, 2));
      api.sendMessage(`Đã lưu appState vào ${path} thành công`, event.threadID, event.messageID);
    }
    else global.utils.throwError(this. config. name, event.threadID, event.messageID);
  }
  else if (["updateas"].includes(args[0].toLowerCase())) {
    const appState = api.getAppState();
      const path = __dirname + "/../../appState.json";
      fs.writeFileSync(path, JSON.stringify(appState, null, 2));
      api.sendMessage(`Đã làm mới file appState.json thành công`, event.threadID, event.messageID);
  }
  else if (args[0] == "logout") {
    try {
      await api.httpPost("https://www.facebook.com/security/settings/sessions/log_out_all", {
       __user: api.getCurrentUserID(),
        clear_all: false,
        ctarget: "https://www.facebook.com",
        cquick: "jsc_c_1g"
      });
      api.sendMessage(`Đã đăng xuất tất cả thiết bị thành cồng`, event.threadID, event.messageID);
    }
    catch(e) {
      return api.sendMessage(`Đã xảy ra lỗi`, event.threadID, event.messageID);
    }
  }
  else global.utils.throwError(this. config. name, event.threadID, event.messageID);
};


/*
Là bây h
Lấy cookie => lưu vào file cookie.txt trong cache
Lấy appstate => lưu file appstate.json trong cache + làm mới file appstate.json ở ngoài
Đăng xuất all thiết bị
*/


function uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item.key) ? false : (seen[item.key] = true);
    });
}
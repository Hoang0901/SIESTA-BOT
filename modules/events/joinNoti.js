module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.4",
    credits: "Mirai Team",
    description: "Thông báo bot hoặc người vào nhóm",
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.run = async function({ api, event, Users, Threads }) {
   var fullYear = global.client.getTime("fullYear");
  	var getHours = await global.client.getTime("hours");
			var session = `${getHours < 3 ? "đêm khuya" : getHours < 8 ? "buổi sáng sớm" : getHours < 12 ? "buổi trưa" : getHours < 17 ? "buổi chiều" : getHours < 23 ? "buổi tối" : "đêm khuya"}`
    const { join } = global.nodemodule["path"];
    const { threadID } = event;
  const { PREFIX } = global.config;
    console.log(2)
    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
        console.log(1)
        return api.sendMessage("[🍀] Kết nối thành công [🌸]", threadID, async () => {
            let check = true;
            while (check) {
                setTimeout(() => check = false, 30 * 1000);
                const threadData = (await Threads.getInfo(threadID)) || {};
                if (threadData.hasOwnProperty("adminIDs")) {
                    check = false;
                    api.sendMessage("", threadID, (err, info) => {
                        global.client.handleReply.push({
                            name: "langChoose_0x01042022",
                            messageID: info.messageID,
                            adminIDs: threadData.adminIDs
                        });
                    });
                }
            }
            api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Made by CatalizCS and SpermLord" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
          	api.sendMessage(`Hiện tại mình đang có ${client.commands.size} lệnh có thể sử dụng được.\nPrefix hiện tại khả dụng là: ${PREFIX}`, threadID);
		}); 
	}
    else {
        try {
            const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
            let { threadName, participantIDs } = await api.getThreadInfo(threadID);

            const threadData = global.data.threadData.get(parseInt(threadID)) || {};
            const path = join(__dirname, "cache", "joinGif");
            const pathGif = join(path, `hi.mp4`);

            var mentions = [], nameArray = [], memLength = [], i = 0;
            
            for (id in event.logMessageData.addedParticipants) {
                const userName = event.logMessageData.addedParticipants[id].fullName;
                nameArray.push(userName);
                mentions.push({ tag: userName, id });
                memLength.push(participantIDs.length - i++);

                if (!global.data.allUserID.includes(id)) {
                    await Users.createData(id, { name: userName, data: {} });
                    global.data.userName.set(id, userName);
                    global.data.allUserID.push(id);
                }
            }
            memLength.sort((a, b) => a - b);
            
          	(typeof threadData.customJoin == "undefined") ? msg = "[🍁Siesta-Bot🍁] =>🌸Chào Mừng {name}!\n[🍁Bot cua Hoang🍁]🌸Chào mừng đã đến với {threadName}!\n[🍁Bot cua Hoang🍁]🌸Bạn là thành viên thứ {soThanhVien} của nhóm❤️\n[🍁Bot cua Hoang🍁]🌸Chúc {type} có một {time} vui vẻ\n[🍁Bot cua Hoang🍁]🗓Ngày vào: {fullYear}"  : msg = threadData.customJoin;
            msg = msg
            .replace(/\{name}/g, nameArray.join(', '))
            .replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
            .replace(/\{soThanhVien}/g, memLength.join(', '))
            .replace(/\{threadName}/g, threadName)
            .replace(/\{fullYear}/g, fullYear)
            .replace(/\{time}/g, session);
            if (existsSync(path)) mkdirSync(path, { recursive: true });

            if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
            else formPush = { body: msg, mentions }

            return api.sendMessage(formPush, threadID);
        } catch (e) { return console.log(e) };
    }
}
//module.exports.config = { name: "joinNoti", eventType: ["log:subscribe"], version: "1.0.4", credits: "Mirai Team", description: "Thông báo bot hoặc người vào nhóm", dependencies: { "fs-extra": "" } }; module.exports.run = async function({ api, event, Users }) { const { join } = global.nodemodule["path"]; const { threadID } = event; if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) { api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Bypass bởi Mai Huy Bảo" : global.config.BOTNAME}`, threadID, api.getCurrentUserID()); return api.sendMessage(`✨🍀Mirai Team✨🍀\n[🍀] Kết nối thành công\n [🌸] Dấu lệnh ! \n [⌛] Admin :https://www.facebook.com/profile.php?id=100014811933322`, threadID); } else { try { const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"]; let { threadName, participantIDs } = await api.getThreadInfo(threadID); const threadData = global.data.threadData.get(parseInt(threadID)) || {}; const path = join(__dirname, "cache", "joinGif"); const pathGif = join(path, `hi.mp4`); var mentions = [], nameArray = [], memLength = [], i = 0; for (id in event.logMessageData.addedParticipants) { const userName = event.logMessageData.addedParticipants[id].fullName; nameArray.push(userName); mentions.push({ tag: userName, id }); memLength.push(participantIDs.length - i++); if (!global.data.allUserID.includes(id)) { await Users.createData(id, { name: userName, data: {} }); global.data.userName.set(id, userName); global.data.allUserID.push(id); } } memLength.sort((a, b) => a - b); (typeof threadData.customJoin == "undefined") ? msg = "[🍀Mirai Bot🍀] =>Chào Mừng {name}!\n[🍀Mirai Bot🍀]Chào mừng đã đến với {threadName}!\n[🍀Mirai Bot🍀]{type} là thành viên thứ {soThanhVien} của nhóm❤️" : msg = threadData.customJoin; msg = msg .replace(/\{name}/g, nameArray.join(', ')) .replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn') .replace(/\{soThanhVien}/g, memLength.join(', ')) .replace(/\{threadName}/g, threadName); if (existsSync(path)) mkdirSync(path, { recursive: true }); if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions } else formPush = { body: msg, mentions } return api.sendMessage(formPush, threadID); } catch (e) { return console.log(e) }; } }
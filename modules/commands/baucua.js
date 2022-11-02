var request = require("request");const { readdirSync, readFileSync, writeFileSync, existsSync, copySync, createWriteStream, createReadStream } = require("fs-extra");
    module.exports.config = {
        name: "baucua",
        version: "1.0.0",
        hasPermssion: 0,
        credits: "Horizon Lucius Synthesis I",
        description: "bầu cua 1 người",
        commandCategory: "Game",
        usages: "baucua + tên + tìn :v",
        cooldowns: 5
    };

    module.exports.onLoad = async function () {
        if (!existsSync(__dirname + '/baucua/ga.jpg')) {
            request('https://i.imgur.com/9sieJ9B.png').pipe(createWriteStream(__dirname + '/baucua/ga.jpg'));
        }
        if (!existsSync(__dirname + '/baucua/tom.jpg')) {
            request('https://i.imgur.com/qANOJ5D.png').pipe(createWriteStream(__dirname + '/baucua/tom.jpg'));
        }
        if (!existsSync(__dirname + '/baucua/bau.jpg')) {
            request('https://i.imgur.com/O0439dO.png').pipe(createWriteStream(__dirname + '/baucua/bau.jpg'));
        }
        if (!existsSync(__dirname + '/baucua/cua.jpg')) {
            request('https://i.imgur.com/WGHdcsY.jpg').pipe(createWriteStream(__dirname + '/baucua/cua.jpg'));
        }
        if (!existsSync(__dirname + '/baucua/ca.jpg')) {
            request('https://i.imgur.com/tyUBM1z.png').pipe(createWriteStream(__dirname + '/baucua/ca.jpg'));
        }
        if (!existsSync(__dirname + '/baucua/nai.jpg')) {
            request('https://i.imgur.com/zjxcG85.png').pipe(createWriteStream(__dirname + '/baucua/nai.jpg'));
        }
        if (!existsSync(__dirname + '/baucua/baucua.gif')) {
            request('https://i.imgur.com/BGXM6Vs.gif').pipe(createWriteStream(__dirname + '/baucua/baucua.gif'));
        }
    };

    async function get(one,two,three) {
        var x1;
            switch (one) {
                case "ga": x1 = "🐓";
                    break;
                case "tom": x1 = '🦞';
                    break;
                case "bau": x1 = '🍐';
                    break;
                case "cua": x1 = '🦀';
                    break;
                case "ca": x1 = '🐟';
                    break;
                case "nai":x1 = '🦌';
            }
        var x2;
            switch (two) {
                case "ga": x2 = "🐓";
                    break;
                case "tom": x2 = '🦞';
                    break;
                case "bau": x2 = '🍐';
                    break;
                case "cua": x2 = '🦀';
                    break;
                case "ca": x2 = '🐟';
                    break;
                case "nai": x2 = '🦌';
            }
        var x3;
            switch (three) {
                case "ga": x3 = "🐓";
                    break;
                case "tom": x3 = '🦞';
                    break;
                case "bau": x3 = '🍐';
                    break;
                case "cua": x3 = '🦀';
                    break;
                case "ca": x3 = '🐟';
                    break;
                case "nai":x3 = '🦌';
            }
        var all = [x1, x2, x3];
    return full = all;
    }
var full = [];
    module.exports.run = async function({ api, event, args, Currencies }) { var out = (msg) => api.sendMessage(msg,event.threadID, event.messageID);
        const slotItems = ["ga", "tom", "bau", "cua", "ca", "nai"];
            const moneyUser = (await Currencies.getData(event.senderID)).money;
                var moneyBet = parseInt(args[1]);
                    if (!args[0] || !isNaN(args[0])) return api.sendMessage("[ 𝗕𝗮̂̀𝘂 𝗖𝘂𝗮 ] - Hãy Bấm: ?baucua [bầu/cua/cá/nai/gà/tôm] + [số tiền]",event.threadID, event.messageID);
                    if (isNaN(moneyBet) || moneyBet <= 0) return api.sendMessage("[ 𝗕𝗮̂̀𝘂 𝗖𝘂𝗮 ] - Số tiền đặt cược không được để trống hoặc là số tiền âm", event.threadID, event.messageID);
                if (moneyBet > moneyUser) return api.sendMessage("[ 𝗕𝗮̂̀𝘂 𝗖𝘂𝗮 ] - Số tiền bạn đặt lớn hơn số dư của bạn!", event.threadID, event.messageID);
            if (moneyBet < 50) return api.sendMessage("[ 𝗕𝗮̂̀𝘂 𝗖𝘂𝗮 ] - Số tiền đặt không được dưới 50 đô!", event.threadID, event.messageID);
        var number = [], win = false;
    for (let i = 0; i < 3; i++) number[i] = slotItems[Math.floor(Math.random() * slotItems.length)];
        var itemm;
            var icon;
                switch (args[0]) {
                    case "bầu":
                        case "Bầu": itemm = "bau";
                                icon = '🍐';
                            break;
                    case "cua": 
                        case "Cua": itemm = "cua";
                                icon = '🦀';
                            break;
                    case "cá":
                        case "Cá": itemm = "ca";
                                icon = '🐟';
                            break;
                    case "nai":
                        case "Nai": itemm = "nai";
                                icon = '🦌';
                            break;
                    case "gà": 
                        case "Gà": itemm = "ga";
                                icon = '🐓';
                            break;
                    case "tôm":
                        case "Tôm": itemm = "tom";
                                icon = '🦞';
                            break;
                                default: return api.sendMessage("[ 𝗕𝗮̂̀𝘂 𝗖𝘂𝗮 ] - Hãy Bấm: ?baucua [bầu/cua/cá/nai/gà/tôm] [số tiền]",event.threadID, event.messageID);
                }      
                await get(number[0],number[1],number[2]);
            api.sendMessage({body:"[ 𝗕𝗮̂̀𝘂 𝗖𝘂𝗮 ] - Đang lắc...",attachment: createReadStream(__dirname + "/baucua/baucua.gif")},event.threadID,async (error,info) => {
                await new Promise(resolve => setTimeout(resolve, 5 * 1000));
                    api.unsendMessage(info.messageID);
                          await new Promise(resolve => setTimeout(resolve, 100));
    var array = [number[0],number[1],number[2]];
        var listimg = [];
           for (let string of array) {
               listimg.push(createReadStream(__dirname + `/baucua/${string}.jpg`));
           }
        if (array.includes(itemm)) {
            var i = 0;
                if (array[0] == itemm) i+=1;
                    if (array[1] == itemm) i+=1;
                if (array[2] == itemm) i+=1;
            if (i == 1) {
                var mon = parseInt(args[1]) + 300;  
                    await Currencies.increaseMoney(event.senderID, mon); console.log("s1")
                        return api.sendMessage({body:`== [ 𝗞𝗲̂́𝘁 𝗤𝘂𝗮̉ 𝗕𝗮̂̀𝘂 𝗖𝘂𝗮 ] ==\n            ‹ ${full.join("|")} ›\nĐược ${mon} Đô,Vì Có 1 ${icon}!`,attachment: listimg},event.threadID, event.messageID);
            }
            else if (i == 2) {
                var mon = parseInt(args[1]) * 2; 
                    await Currencies.increaseMoney(event.senderID, mon); console.log("s2")
                        return api.sendMessage({body:`== [ 𝗞𝗲̂́𝘁 𝗤𝘂𝗮̉ 𝗕𝗮̂̀𝘂 𝗖𝘂𝗮 ] ==\n            ‹ ${full.join("|")} ›\nĐược ${mon} Đô,Vì Có 2 ${icon}!`,attachment: listimg},event.threadID, event.messageID);
            }
            else if (i == 3) {
                var mon = parseInt(args[1]) * 3; 
                    await Currencies.increaseMoney(event.senderID, mon); console.log('s3')
                        return api.sendMessage({body:`== [ 𝗞𝗲̂́𝘁 𝗤𝘂𝗮̉ 𝗕𝗮̂̀𝘂 𝗖𝘂𝗮 ] ==\n            ‹ ${full.join("|")} ›\nĐược ${mon} Đô,Vì Có 3 ${icon}!`,attachment: listimg},event.threadID, event.messageID);
            }
            else return api.sendMessage("[ 𝗹𝗼̂̃𝗶 ] - Code: ",event.threadID,event.messageID);
        } else  {
            await Currencies.decreaseMoney(event.senderID, parseInt(args[1])); console.log('s4')
            return api.sendMessage({body:`== [ 𝗞𝗲̂́𝘁 𝗤𝘂𝗮̉ 𝗕𝗮̂̀𝘂 𝗖𝘂𝗮 ] ==\n            ‹ ${full.join("|")} ›\nTrừ ${args[1]} Đô,Vì Có 0 ${icon}!`,attachment: listimg},event.threadID, event.messageID);
        }
            } ,event.messageID);
    };
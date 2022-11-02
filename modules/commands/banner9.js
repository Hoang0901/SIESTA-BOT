const axios = require("axios");
const fs = require("fs");
const { loadImage, createCanvas, registerFont } = require("canvas");

module.exports.config = {
    name: "banner9",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Hanaku Uwu",
    description: "banner",
    commandCategory: "game",
    usages: "",
    cooldowns: 5
  };

module.exports.handleReply = async function({ api, event, handleReply }) {
    if (event.senderID != handleReply.author) return api.sendMessage('CúC', event.threaID);
    let pathImg = __dirname + `/cache/avatar_5.png`;
    const lengthchar = (await axios.get('https://run.mocky.io/v3/0dcc2ccb-b5bd-45e7-ab57-5dbf9db17864')).data
    switch(handleReply.step) {
        case 1: {
            if(isNaN(event.body)) return api.sendMessage('Bạn phải nhập một con số', event.threadID, event.messageID)   
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(`Bạn chọn char mang ID ${event.body}, hãy reply tin nhắn này để nhập tên chính`, event.threadID, (err, info) => {
                global.client.handleReply.push({
                    step: 2,
                    name: this.config.name,
                    author: event.senderID,
                    idchart: event.body,
                    messageID: info.messageID
                });
            });
        }
        case 2: {
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(`Bạn chọn tên chính ${event.body}, hãy reply tin nhắn này để nhập tên phụ`, event.threadID, (err, info) => {
                global.client.handleReply.push({
                    step: 3,
                    name: this.config.name,
                    author: event.senderID,
                    idchart: handleReply.idchart,
                    tenchinh: event.body,
                    messageID: info.messageID
                });
            });
        }
        case 3: {
            api.unsendMessage(handleReply.messageID);
            const tenchinh = handleReply.tenchinh
            const idchart = handleReply.idchart
            const subname = event.body
            registerFont(__dirname + `/cache/ArialUnicodeMS.ttf`, {
                family: "AUMS"
            });
            let img = await loadImage("https://imgur.com/aYqhPYR.jpg");
            let avatar = await loadImage(`${lengthchar[idchart].imgAnime}`);
            let canvas = createCanvas(img.width, img.height);
            var ctx = canvas.getContext("2d");
            ctx.fillStyle = lengthchar[idchart].colorBg;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            ctx.drawImage(avatar, 100, -290, 1500, 1600);
            ctx.textAlign = "start";
            ctx.font = "130px AUMS";
            ctx.fillStyle = "#fdfdfd";
            ctx.fillText(tenchinh, 1800, 500);
            ctx.beginPath();
            ////////////////////////////////////////
            ctx.textAlign = "start";
            ctx.font = "70px AUMS";
            ctx.fillStyle = "#fdfdfd";
            ctx.fillText(subname, 1800, 600);
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            const imageBuffer = canvas.toBuffer();
            fs.writeFileSync(pathImg, imageBuffer);
            return api.sendMessage({
            body: `ảnh của bạn đây`,
            attachment: fs.createReadStream(pathImg)
            }, event.threadID, event.messageID);
        }
    }
}


module.exports.run = async function({ api, event }) {
    if (!fs.existsSync(__dirname + `/cache/ArialUnicodeMS.ttf`)) {
        let getfont = (await axios.get(`https://github.com/J-JRT/Font/blob/mainV2/ArialUnicodeMS.ttf?raw=true`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname + `/cache/ArialUnicodeMS.ttf`, Buffer.from(getfont, "utf-8"));
    };
    return api.sendMessage("Reply Tin Nhắn Này Để Chọn Char", event.threadID, (err, info) => {
        global.client.handleReply.push({
            step: 1,
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
        });
    });
    }
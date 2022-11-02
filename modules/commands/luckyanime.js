 /*
* @Module made by DuyVuong
* @No edit credits
* @Ban user edit credits
*/
module.exports.config = {
    name: "luckyanime",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "DuyVuong",
    description: "Game lucky anime có đặt cược </> Coder by DuyVuong",
    commandCategory: "Game",
    usages: "<[loli/lolicon/bb/yuri/yaoi/chibi] hoặc[💌/💢/💣/💥/💦/💨]> <Số tiền cược (lưu ý phải trên 50$)>",
    cooldowns: 5
  };
  
  module.exports.run = async function({ api, event, args, Currencies, getText, permssion }) {
    try {
      const { threadID, messageID, senderID } = event;
      const { getData, increaseMoney, decreaseMoney } = Currencies;
      const request = require('request');
      const axios = require('axios');
      if (this.config.credits != 'DuyVuong') {
        console.log('\x1b[33m[ WARN ]\x1b[37m » Đổi credits con cặc đjt mẹ mày luôn đấy con chó:))');
        return api.sendMessage('[ WARN ] Phát hiện người điều hành bot ' + global.config.BOTNAME + ' đổi credits modules "' + this.config.name + '"', threadID, messageID);
      }
      const { readdirSync, readFileSync, writeFileSync, existsSync, copySync, createWriteStream, createReadStream } = require("fs-extra");
      const slotItems = ["loli", "lolicon", "bb", "yuri", "yaoi", "chibi"];
      const money = (await getData(senderID)).money;
      if (isNaN(args[1]) == true) return api.sendMessage('Nội dung "Số tiền cược" mà bạn nhập không phải 1 con số hợp lệ!', threadID, messageID);
      var moneyBet = parseInt(args[1]);
      if (isNaN(moneyBet) || moneyBet <= 50) return api.sendMessage('Số tiền đặt cược không được dưới 50$', threadID, messageID);
      if (moneyBet > money) return api.sendMessage('Kiếm thêm tiền rồi chơi bạn nhé =))', threadID, messageID);
      var number = [], list = [], listimg = [], win = false;
      var luckyanime1 = slotItems[Math.floor(Math.random() * slotItems.length)];
      var luckyanime2 = slotItems[Math.floor(Math.random() * slotItems.length)];
      var luckyanime3 = slotItems[Math.floor(Math.random() * slotItems.length)];
      // ARGS
      let content = args[0];
      var content1;
      if (content == 'loli' || content == '💌') {
        content1 = 'loli';
      }
      else if (content == 'lolicon' || content == '💢') {
        content1 = 'lolicon';
      }
      else if (content == 'bb' || content == '💣') {
        content1 == 'bb';
      }
      else if (content == 'yuri' || content == '💥') {
        content1 = 'yuri';
      }
      else if (content == 'yaoi' || content == '💦') {
        content1 = 'yaoi';
      }
      else if (content == 'chibi' || content == '💨') {
        content1 = 'chibi';
      }
      else {
        return api.sendMessage(`Sai định dạng\n${global.config.PREFIX}${this.config.name} <[loli/lolicon/bb/yuri/yaoi/chibi] hoặc[💌/💢/💣/💥/💦/💨]> <Số tiền cược (lưu ý phải trên 50$)>`, threadID, messageID);
      }
      // request
      if (!existsSync(__dirname + '/cache/loli.jpg')) {
        request('https://imgur.com/PWwfG8Q.jpg').pipe(createWriteStream(__dirname + '/cache/loli.jpg'));
      }
      if (!existsSync(__dirname + '/cache/lolicon.jpg')) {
        request('https://imgur.com/7ny7agM.jpg').pipe(createWriteStream(__dirname + '/cache/lolicon.jpg'));
      }
      if (!existsSync(__dirname + '/cache/bb.jpg')) {
        request('https://imgur.com/WzGEnZh.jpg').pipe(createWriteStream(__dirname + '/cache/bb.jpg'));
      }
      if (!existsSync(__dirname + '/cache/yuri.jpg')) {
        request('https://imgur.com/OXLSM7y.jpg').pipe(createWriteStream(__dirname + '/cache/yuri.jpg'));
      }
      if (!existsSync(__dirname + '/cache/yaoi.jpg')) {
        request('https://imgur.com/tF0pXYj.jpg').pipe(createWriteStream(__dirname + '/cache/yaoi.jpg'));
      }
      if (!existsSync(__dirname + '/cache/chibi.jpg')) {
        request('https://imgur.com/wbHp7M8.jpg').pipe(createWriteStream(__dirname + '/cache/chibi.jpg'));
      }
      if (!existsSync(__dirname + '/cache/luckyanime.gif')) {
        request('https://imgur.com/l5jrkzc.gif').pipe(createWriteStream(__dirname + '/cache/luckyanime.gif'));
      }
      // luckyanime 1
      if (luckyanime1 == 'loli') {
        var anime1 = 'loli';
        var anime_1 = __dirname + '/cache/loli.jpg';
      }
      else if (luckyanime1 == 'lolicon') {
        var anime1 = 'lolicon';
        var anime_1 = __dirname + '/cache/lolicon.jpg';
      }
      else if (luckyanime1 == 'bb') {
        var anime1 = 'bb';
        var anime_1 = __dirname + '/cache/bb.jpg';
      }
      else if (luckyanime1 == 'yuri') {
        var anime1 = 'yuri';
        var anime_1 = __dirname + '/cache/yuri.jpg';
      }
      else if (luckyanime1 == 'yaoi') {
        var anime1 = 'yaoi';
        var anime_1 = __dirname + '/cache/yaoi.jpg';
      }
      else if (luckyanime1 == 'chibi') {
        var anime1 = 'chibi';
        var anime_1 = __dirname + '/cache/chibi.jpg';
      }
      // luckyanime 2
      if (luckyanime2 == 'loli') {
        var anime2 = 'loli';
        var anime_2 = __dirname + '/cache/loli.jpg';
      }
      else if (luckyanime2 == 'lolicon') {
        var anime2 = 'lolicon';
        var anime_2 = __dirname + '/cache/lolicon.jpg';
      }
      else if (luckyanime2 == 'bb') {
        var anime2 = 'bb';
        var anime_2 = __dirname + '/cache/bb.jpg';
      }
      else if (luckyanime2 == 'yuri') {
        var anime2 = 'yuri';
        var anime_2 = __dirname + '/cache/yuri.jpg';
      }
      else if (luckyanime2 == 'yaoi') {
        var anime2 = 'yaoi';
        var anime_2 = __dirname + '/cache/yaoi.jpg';
      }
      else if (luckyanime2 == 'chibi') {
        var anime2 = 'chibi';
        var anime_2 = __dirname + '/cache/chibi.jpg';
      }
      // luckyanime 3
      if (luckyanime3 == 'loli') {
        var anime3 = 'loli';
        var anime_3 = __dirname + '/cache/loli.jpg';
      }
      else if (luckyanime3 == 'lolicon') {
        var anime3 = 'lolicon';
        var anime_3 = __dirname + '/cache/lolicon.jpg';
      }
      else if (luckyanime3 == 'bb') {
        var anime3 = 'bb';
        var anime_3 = __dirname + '/cache/bb.jpg';
      }
      else if (luckyanime3 == 'yuri') {
        var anime3 = 'yuri';
        var anime_3 = __dirname + '/cache/yuri.jpg';
      }
      else if (luckyanime3 == 'yaoi') {
        var anime3 = 'yaoi';
        var anime_3 = __dirname + '/cache/yaoi.jpg';
      }
      else if (luckyanime3 == 'chibi') {
        var anime3 = 'chibi';
        var anime_3 = __dirname + '/cache/chibi.jpg';
      }
      // array anime
      list.push(anime1);
      list.push(anime2);
      list.push(anime3);
      // array img
      listimg.push(createReadStream(__dirname + '/cache/' + anime1 + '.jpg'))
      listimg.push(createReadStream(__dirname + '/cache/' + anime2 + '.jpg'))
      listimg.push(createReadStream(__dirname + '/cache/' + anime3 + '.jpg'))
      // ICON
      // icon 1
      if (anime1 == 'loli') {
        var icon1 = '💌';
      }
      else if (anime1 == 'lolicon') {
        var icon1 = '💢'
      }
      else if (anime1 == 'bb') {
        var icon1 = '💣';
      }
      else if (anime1 == 'yuri') {
        var icon1 = '💥';
      }
      else if (anime1 == 'yaoi') {
        var icon1 = '💦';
      }
      else if (anime1 == 'chibi') {
        var icon1 = '💨';
      }
      // icon 2
      if (anime2 == 'loli') {
        var icon2 = '💌';
      }
      else if (anime2 == 'lolicon') {
        var icon2 = '💢'
      }
      else if (anime2 == 'bb') {
        var icon2 = '💣';
      }
      else if (anime2 == 'yuri') {
        var icon2 = '💥';
      }
      else if (anime2 == 'yaoi') {
        var icon2 = '💦';
      }
      else if (anime2 == 'chibi') {
        var icon2 = '💨';
      }
      // icon 3
      if (anime3 == 'loli') {
        var icon3 = '💌';
      }
      else if (anime3 == 'lolicon') {
        var icon3 = '💢'
      }
      else if (anime3 == 'bb') {
        var icon3 = '💣';
      }
      else if (anime3 == 'yuri') {
        var icon3 = '💥';
      }
      else if (anime3 == 'yaoi') {
        var icon3 = '💦';
      }
      else if (anime3 == 'chibi') {
        var icon3 = '💨';
      }
      // sendMessage
      api.sendMessage({
        body: '🎰𝙇𝙖̆́𝙘 𝙇𝙖̆́𝙘...\n🎰𝘾𝙝𝙪́𝙘 𝙗𝙖̣𝙣 𝙢𝙖𝙮 𝙢𝙖̆́𝙣 𝙣𝙝𝙚́ 𝙪𝙬𝙪 !',
        attachment: createReadStream(__dirname + '/cache/luckyanime.gif')
      }, threadID, (err, info) => {
        if (err) return api.sendMessage(err, threadID, messageID);
        setTimeout(() => {
          api.unsendMessage(info.messageID);
          var check = list.findIndex(i => i.toString() == content1);
          var check2 = list.includes(content1);
          //console.log(check);
          //console.log(icon1 + icon2 + icon3);
          if (check >= 0 || check2 == true) {
            return api.sendMessage({
              body: `🎲 𝙆𝙚̂́𝙩 𝙦𝙪𝙖̉: ${icon1} | ${icon2} | ${icon3}\n🎲 𝘽𝙖̣𝙣 𝙫𝙪̛̀𝙖 𝙩𝙝𝙖̆́𝙣𝙜 𝙫𝙖̀ 𝙣𝙝𝙖̣̂𝙣 ${moneyBet * 3}$`,
              attachment: listimg
            }, threadID, () => Currencies.increaseMoney(senderID, moneyBet * 3), messageID);
          }
          else if (check < 0 || check2 == false) {
            return api.sendMessage({
              body: `🎲 𝙆𝙚̂́𝙩 𝙦𝙪𝙖̉ : ${icon1} | ${icon2} | ${icon3}\n🎲 𝘽𝙖̣𝙣 𝙫𝙪̛̀𝙖 𝙩𝙝𝙪𝙖 𝙫𝙖̀ 𝙗𝙞̣ 𝙩𝙧𝙪̛̀ ${moneyBet}$`,
              attachment: listimg
            }, threadID, () => Currencies.decreaseMoney(senderID, moneyBet), messageID);
          }
          else {
            return api.sendMessage('𝘾𝙤́ 𝙡𝙤̂̃𝙞 𝙭𝙖̉𝙮 𝙧𝙖. 𝙑𝙪𝙞 𝙡𝙤̀𝙣𝙜 𝙩𝙝𝙪̛̉ 𝙡𝙖̣𝙞 𝙨𝙖𝙪 5𝙨', threadID, messageID);
          }
        }, 3000);
      }, messageID);
    }
    catch (err) {
      console.error(err);
      return api.sendMessage(err, event.threadID, event.messageID);
    }
             }
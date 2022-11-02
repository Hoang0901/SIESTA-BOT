module.exports.config = {
    name: "thathinh",
        version: "1.0.0",
            hasPermssion: 0,
                credits: "tdunguwu",
                    description: "thính lỏ",
                        commandCategory: "game",
                            usages: "",
                                cooldowns: 5
                                };
                                module.exports.run = async function ({ api, event, args}) {
                                  const axios = require('axios');
                                    const request = require('request');
                                      const fs = require('fs');
                                        const { threadID, messageID } = event;
                                          const data = ["Đông sắp về rồi! Em có người thương chưa?","Bão to, cây đổ. Vậy sao em chưa đổ anh?","Cafe không đường rất đắng, nhưng, nó sẽ ngọt ngào khi uống cùng em!","Nhà em có bán rượu không? Sao nói chuyện với em anh say quá!","Có thể những lời anh nói không phải là đường mật, nhưng điều anh dành cho em là chân thật và ngọt ngào nhất.","Chán thả thính rồi! Em cưa anh đi để đổ thử một lần.","Em ơi, mẹ anh gọi em là con dâu kìa!","Anh không thể ngủ được vì trong đầu không ngừng nghĩ về em!","Mời em một ly sinh tố! Tiện cho anh hỏi lối vào tim em?","Anh biết có nhiều cách khiến người ta hạnh phúc, nhưng, với anh cách nhanh nhất là ở bên cạnh em.","Ô tô thì đã có chỗ đỗ. Còn em thì đã đỗ trong tim anh!","Ngoài trời đang đổ cơn mưa. Vậy, em đã đổ anh chưa?","Thiếu ăn, chim tìm con sâu. Thiếu em, anh sầu con tim!","Với thế giới em chỉ là một người. Nhưng, với anh, em chính là cả thế giới!","Anh cho phép em ở mãi trong trái tim anh đó!","Anh tuy không phải là chiếc lò vi sóng, nhưng anh đủ sức để hâm nóng trái tim em.","Em có thể gửi cho anh một tấm hình của em không? Bạn bè của anh không tin thiên thần là có thật!","Bố em có phải người thợ kim hoàn không? Sao em giống viên kim cương vậy?","Gặp em anh bỗng muốn thờ. Không “thờ ích thích” mà “thờ ương thương”!","Anh mua con heo đất. Tiền anh đem cất, sau này cưới em."]; //thêm gì tùy bạn
                                            const thathinh = data[Math.floor(Math.random() * data.length)];
                                              var anh = [
                                                    "https://i.imgur.com/iSAejSB.jpg",                                  "https://tinyurl.com/y95g4rkl",
"https://tinyurl.com/y9h6bca5",
"https://tinyurl.com/yaw6qlof",
"https://tinyurl.com/ydx2ocg3",
"https://tinyurl.com/ydac8q9o",
"https://tinyurl.com/yampzv2q",
"https://tinyurl.com/yb6uew36",
"https://tinyurl.com/yaapf3w7",
"https://tinyurl.com/y7kjt5ac",
"https://tinyurl.com/yarub4wk",
"https://tinyurl.com/y8j3mmsx",
"https://tinyurl.com/ychecaod",
"https://tinyurl.com/yaz9yx9n",
                                                        ]; //ảnh nào cũng được bỏ link dô thôi
                                                            const link = anh[Math.floor(Math.random() * anh.length)];
     var callback = () => api.sendMessage({body:`${thathinh}`,attachment: fs.createReadStream(__dirname + "/cache/tthinh.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tthinh.png"),event.messageID);
                     return request(encodeURI(`${link}`)).pipe(fs.createWriteStream(__dirname + '/cache/tthinh.png')).on('close', () => callback());
  }
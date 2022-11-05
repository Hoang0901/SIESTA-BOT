module.exports.config = {
    name: "cmsn",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Terris",
    description: "Chúc mừng sinh nhật người bạn tag",  //dựa trên thinhtag 
    commandCategory: "Tiện ích",
    usages: "[tag]",
    cooldowns: 5
};

module.exports.run = async ({ api, event}) => {
   const { threadID, messageID, senderID } = event;
     async function getUserInfo(userID) {
            const userInfo = await api.getUserInfo(userID);
            return {gender: userInfo[userID].gender };
     }
    const gai = ["Gửi đến bạn món quà này với cả tấm lòng và một lời chúc bạn sẽ hạnh phúc tràn đầy. Những điều hạnh phúc nhất luôn đến với bạn.",
                 "Một sinh nhật sắp đến, cũng là lúc mày bắt đầu bước sang một tuổi mới, chúc mày thêm tuổi mới thêm lớn hơn, thêm đẹp hơn, giàu hơn để còn bao t ăn=)).",
                 "Chúc cậu có một ngày sinh nhật ý nghĩa bên những người mà mình yêu mến. Hãy luôn vui cười, cố gắng hết mình, tự tin hơn nữa để đón chào những thành công đang trên đường tiến đến với cậu nhé!"
    ];
  \\Khong add loi chuc tại con.st gai vì đang lỗi
  
    const trai = ["Em chúc anh/chị có một sinh nhật thật vui vẻ và ấm áp bên những người thân yêu. Chúc chị mãi xinh đẹp/anh mãi đẹp trai và hạnh phúc nhé!",
                  
                  "Chúc đứa bạn của tôi có một sinh nhật thật ấm áp và vui vẻ. Chúc mọi điều tốt đẹp nhất sẽ đến với mày trong tuổi mới này nhé!",
                  
                  "Chúc bạn sẽ có những giây phút tuyệt vời và đáng nhớ bên người thân và bạn bè trong ngày quan trọng này. Mong rằng bạn sẽ mãi hạnh phúc, thành công và vui vẻ trong cuộc sống nhé. Happy birthday!",
                  
                  "Gửi đến bạn món quà này với cả tấm lòng và một lời chúc bạn sẽ hạnh phúc tràn đầy. Những điều hạnh phúc nhất luôn đến với bạn.",
                  
                 "Một sinh nhật sắp đến, cũng là lúc mày bắt đầu bước sang một tuổi mới, chúc mày thêm tuổi mới thêm lớn hơn, thêm đẹp hơn, giàu hơn để còn bao t ăn=)).",
                  
                 "Chúc cậu có một ngày sinh nhật ý nghĩa bên những người mà mình yêu mến. Hãy luôn vui cười, cố gắng hết mình, tự tin hơn nữa để đón chào những thành công đang trên đường tiến đến với cậu nhé!",

                  "Cầu mong đứa đang đọc lời chúc này của tao sẽ có thật nhiều niềm vui, hạnh phúc nhé. Tuổi mới phải lạc quan và yêu đời. Hãy nhớ rằng tao luôn ở bên cạnh và lắng nghe mày. Chúc mừng sinh nhật của mày!"

    ];
  var mention = Object.keys(event.mentions);
   const data = await getUserInfo(senderID);
  if (Object.keys(event.mentions).length == 1) {
    if (data.gender == 2 ) {
        api.sendMessage(`Gửi lời chúc mứng sinh nhật đến ${event.mentions[mention].replace("@", "")}:\n\n${trai[Math.floor(Math.random() * trai.length)]}`,threadID, messageID);
    }
    if (data.gender == 1 ) {
        api.sendMessage(`Gửi lời chúc mứng sinh nhật đến ${event.mentions[mention].replace("@", "")}:\n\n${gai[Math.floor(Math.random() * gai.length)]}`,threadID, messageID);
    }
  }
  else {
    if (data.gender == 2) {
     api.sendMessage(`${trai[Math.floor(Math.random() * trai.length)]}`,threadID, messageID); 
    }
    if (data.gender == 1 ) {
     api.sendMessage(`${gai[Math.floor(Math.random() * gai.length)]}` ,threadID, messageID);
    }
  }
  
}

   module.exports.config = {
 name: "help",
 version: "1.1.2",
 hasPermssion: 0,
 credits: "HelyT",
 description: "Help giống Spermbot :3",
 commandCategory: "All lệnh",
 usages: "[lệnh]",
 cooldowns: 1,
};
module.exports.handleEvent = function ({ api, event }) {
 const { commands } = global.client;
	
 if (!event.body) return;

 const { threadID, messageID, body } = event;

 if (body.indexOf("help") != 0) return;

 const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);


 if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;

 const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
 const command = commands.get(splitBody[1].toLowerCase());

 const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

 return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};

module.exports.run = async function({ api, args, Users, event, Threads, utils, client }) {
const { commands } = global.client;
const { threadID, messageID } = event;
const command = commands.get((args[0] || "").toLowerCase());
const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
if (!command) {
const command = commands.values();
var tl = ["Bạn không thể hắt hơi mà vẫn mở mắt","Mỗi năm, số người chết do ong đốt còn nhiều hơn cả số người chết do rắn cắn","Nhiều người dị ứng với sữa bò hơn bất kỳ loại thức ăn nào khác","Để nói một từ, bạn sử dụng tới 70 lớp cơ","Adolf Hitler là một người ăn kiêng và chỉ có duy nhất một… tinh hoàn","Xương người vốn không phải màu trắng mà có màu đục như màu nâu nhạt. Và thú vị hơn, xương hông của người còn cứng hơn cả bê tông","Khi bạn sinh ra, bạn có 300 chiếc xương, nhưng khi trưởng thành, bạn chỉ còn 206 chiếc xương","Một người phụ nữ trung bình tiêu thụ khoảng 20kg son môi trong đời","Bạn không thể tự tử bằng cách… nhịn thở","Tim người đập hơn 100.000 lần mỗi ngày","Người thuận tay phải có tuổi thọ trung bình cao hơn người thuận tay trái 9 năm","Xương sườn của chúng ta chuyển động khoảng 5 triệu lần mỗi năm","1/4 số xương trong cơ thể người nằm ở chân","Việc truyền máu lần đầu tiên diễn ra vào năm 1667 khi Jean-Baptiste tiến hành truyền máu từ một con cừu sang một thanh niên","Nước chiếm 2/3 khối lượng cơ thể người. Trong máu có tới 92%; não bộ có 75% các cơ bắp cũng có 75% là nước","Ngày 9 tháng 1 là ngày sinh nhật của Hoàng ?","Trong cuộc đời mình, bạn uống khoảng 75.000 lít nước","Nếu như tất cả bộ mã gen của chúng ta được kéo duỗi dài ra thì nó có thể cuốn 6 vòng quanh mặt trăng","Hầu hết bụi trong nhà là tế bào da chết từ cơ thể của chúng ta","Cơ giúp mắt chớp là cơ chuyển động nhanh nhất của con người. Nó có thể thực hiện nháy mắt 5 lần trong vòng một giây\nMột ngày con người nháy mắt khoảng 15.000 lần. Tuy nhiên có điều lạ là phụ nữ phụ nữ chớp mắt nhiều gần gấp 2 lần so với đàn ông","Mật ong là thức ăn duy nhất không bị hỏng. Bằng chứng là các nhà khảo cổ khi nếm thử những hũ mật ong được tìm thấy trong lăng mộ của các pharaoh Ai Cập đều đi đến kết luận rằng chúng không hề bị hỏng và hoàn toàn có thể ăn được","Coca-Cola nguyên chất có màu xanh trước khi người ta pha chế màu","Mẩu kẹo cao su cổ nhất có tuổi thọ 9.000 năm!","Trung bình một cây bút chì có thể vẽ một đường thẳng dài 56km (tương đương với việc viết được khoảng 50.000 từ)","Trái đất là hành tinh duy nhất không được đặt theo tên một vị thần","Loài dơi mũi heo (tên khoa học là Craseonycteris) có kích thước chỉ bằng một chú ong nghệ, là loài động vật có vú nhỏ nhất thế giới","Loài chuột có thể giao phối hơn 20 lần/ngày","Đại dịch hạch ở thế kỉ 14 đã giết chết 1 phần 3 dân số của châu Âu và nguyên nhân phán tán bệnh nhanh là do loài bọ chét","Chỉ có hai loài động vật duy nhất có thể nhìn ra phía sau mà không cần phải quay đầu lại, đó là: thỏ và vẹt"];
var tle = tl[Math.floor(Math.random() * tl.length)];
var lon = `🤖|𝙎𝙄𝙀𝙎𝙏𝘼-𝘽𝙊𝙏\n\n\n💬VUI LÒNG BẤM /menu ĐỂ XEM DANH SÁCH LỆNH\n\n‼BOT CHẠY 24/7, NẾU CÓ LỖI HÃY SỬ DỤNG /callad ĐỂ LIÊN HỆ VỚI ADMIN\n\n⚠️HIỆN TẠI ĐANG CÓ CÁC LỆNH BỊ LỖI:\n-Getavt\n-Bank\n-......\n\n🚀TÍNH NĂNG ĐẶC BIỆT:\n-Ngoài việc dùng lệnh, bạn có thể chat với bot qua lệnh /sim\n\n⁉[BẠN CÓ BIẾT?]: ${tle}.\n\n\n⚜========𝙏𝙀𝙍𝙍𝙄𝙎========⚜`;
return api.sendMessage(lon, event.threadID, event.messageID);  
}
const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};

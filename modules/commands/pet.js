const key = "s9BKz85xxL3WrJDMzJb9BRFTdCnEhP6fVI6JvpKz0qdx07GEq7bv18";

module.exports.config = {
  name: 'pet',
  version: '3.3.5',
  hasPermssion: 0,
  credits: 'Phạm Minh Duy',
  description: 'Nuôi thú ảo',
  commandCategory: 'game',
  usages: 'game',
  cooldowns: 0,
}
const fs = global.nodemodule['fs-extra']
module.exports.circle = async (_0x109e6e) => {
  const _0x5336e7 = global.nodemodule.jimp
  return (
    (_0x109e6e = await _0x5336e7.read(_0x109e6e)),
    _0x109e6e.circle(),
    await _0x109e6e.getBufferAsync('image/png')
  )
}
module.exports.handleReply = async function ({
  api: _0x50ea21,
  event: _0x5ae252,
  client: _0x31df38,
  Users: _0x4d9399,
  handleReply: _0x28e494,
  Currencies: _0x12b8c8,
}) {
  const {
    getData: _0x304750,
    increaseMoney: _0x1fe27f,
    decreaseMoney: _0xa879a5,
  } = _0x12b8c8
  if (String(_0x5ae252.senderID) !== String(_0x28e494.author)) {
    return
  }
  const {
    threadID: _0x8e24e9,
    messageID: _0x2aeff8,
    senderID: _0x182597,
  } = _0x5ae252
  var _0x5153e4 = JSON.parse(
      fs.readFileSync(__dirname + ('/cache/pet/' + _0x182597 + '.json'))
    ),
    _0x457e2d = __dirname + ('/cache/pet/' + _0x182597 + '.json')
  switch (_0x28e494.type) {
    case 'shop': {
      _0x50ea21.unsendMessage(_0x28e494.messageID)
      var _0x11b735 = await _0x304750(_0x5ae252.senderID),
        _0x183a0d = _0x11b735.money,
        _0xe4bd82 = _0x5ae252.body,
        _0x2c71b6 = parseInt(_0x28e494.tien[_0xe4bd82]),
        _0x2d3786 = Date.now(),
        _0x2b7edc = _0x2d3786 + 86400000
      if (
        isNaN(_0xe4bd82) ||
        _0xe4bd82 < 0 ||
        _0xe4bd82 > _0x28e494.shop.length - 1
      ) {
        return _0x50ea21.sendMessage(
          'Không tìm thấy vật phẩm!',
          _0x8e24e9,
          _0x2aeff8
        )
      }
      if (_0x2c71b6 > _0x183a0d || _0x2c71b6 < 0) {
        return _0x50ea21.sendMessage(
          'Bạn không đủ điều tiền để mua ' +
            _0x28e494.shop[_0xe4bd82] +
            ' với giá ' +
            _0x2c71b6 +
            '$!\nThiếu: ' +
            (_0x2c71b6 - _0x183a0d) +
            '$\nChắc vì bạn nghèo :vvv',
          _0x8e24e9,
          _0x2aeff8
        )
      }
      return (
        await _0xa879a5(_0x182597, _0x2c71b6),
        _0x5153e4.pet.push(_0x28e494.shop[_0xe4bd82]),
        _0x5153e4.lv.push('0'),
        _0x5153e4.exp.push('0'),
        _0x5153e4.died.push(_0x2b7edc),
        (_0x5153e4.covid = []),
        _0x5153e4.covid.push(1000000000000000000),
        (_0x5153e4.user = []),
        _0x5153e4.user.push(_0x2d3786),
        fs.writeFileSync(_0x457e2d, JSON.stringify(_0x5153e4, null, 2), 'utf8'),
        _0x50ea21.sendMessage(
          'Đã tiến hành mua ' +
            _0x28e494.shop[_0xe4bd82] +
            ' với giá ' +
            _0x2c71b6 +
            '$ thành công!',
          _0x8e24e9,
          _0x2aeff8
        )
      )
    }
    case 'food': {
      if (
        isNaN(_0x5ae252.body) ||
        _0x5ae252.body < 0 ||
        _0x5ae252.body > _0x28e494.shop.length - 1
      ) {
        return _0x50ea21.sendMessage(
          'Không tìm thấy vật phẩm!',
          _0x8e24e9,
          _0x2aeff8
        )
      }
      return _0x50ea21.sendMessage(
        'Số lượng bạn muốn mua?',
        _0x8e24e9,
        (_0x465911, _0x2bade9) => {
          global.client.handleReply.push({
            name: this.config.name,
            messageID: _0x2bade9.messageID,
            shop: _0x28e494.shop,
            ab: _0x5ae252.body,
            tien: _0x28e494.tien,
            type: 'total',
            author: _0x5ae252.senderID,
          })
        },
        _0x2aeff8
      )
    }
    case 'total': {
      _0x50ea21.unsendMessage(_0x28e494.messageID)
      var _0x11b735 = await _0x304750(_0x5ae252.senderID),
        _0x183a0d = _0x11b735.money,
        _0xe4bd82 = _0x28e494.ab,
        _0x4f4c78 = _0x5ae252.body,
        _0x2c71b6 = parseInt(_0x28e494.tien[_0xe4bd82]) * _0x4f4c78
      if (isNaN(_0x4f4c78) || _0x4f4c78 < 0) {
        return _0x50ea21.sendMessage(
          'Không tìm thấy số lượng!',
          _0x8e24e9,
          _0x2aeff8
        )
      }
      if (_0x2c71b6 > _0x183a0d || _0x2c71b6 < 0) {
        return _0x50ea21.sendMessage(
          'Bạn không đủ điều tiền để mua ' +
            _0x5ae252.body +
            ' ' +
            _0x28e494.shop[_0xe4bd82] +
            ' với giá ' +
            _0x2c71b6 +
            '$!\nThiếu: ' +
            (_0x2c71b6 - _0x183a0d) +
            '$\nChắc vì bạn nghèo :vvv',
          _0x8e24e9,
          _0x2aeff8
        )
      }
      await _0xa879a5(_0x182597, _0x2c71b6)
      for (var _0x388d58 = 0; _0x388d58 < _0x4f4c78; _0x388d58++) {
        _0x5153e4.food.push(_0x28e494.shop[_0xe4bd82])
      }
      return (
        fs.writeFileSync(_0x457e2d, JSON.stringify(_0x5153e4, null, 2), 'utf8'),
        _0x50ea21.sendMessage(
          'Đã tiến hành mua ' +
            _0x5ae252.body +
            ' ' +
            _0x28e494.shop[_0xe4bd82] +
            ' với giá ' +
            _0x2c71b6 +
            '$ thành công!',
          _0x8e24e9,
          _0x2aeff8
        )
      )
    }
    case 'sell': {
      _0x50ea21.unsendMessage(_0x28e494.messageID)
      var _0x3785cf = _0x5ae252.body,
        _0x4e2143 = parseFloat(_0x5153e4.exp[_0x3785cf]) * 700
      if (
        isNaN(_0x3785cf) ||
        _0x3785cf < 0 ||
        _0x3785cf > _0x5153e4.pet.length - 1
      ) {
        return _0x50ea21.sendMessage('Không tìm thấy pet', _0x8e24e9, _0x2aeff8)
      }
      if (_0x3785cf > _0x5153e4.pet.length) {
        return _0x50ea21.sendMessage(
          'Pet bạn nhập không tồn tại vui lòng kiểm tra lại!',
          _0x8e24e9,
          _0x2aeff8
        )
      }
      await _0x1fe27f(_0x182597, _0x4e2143)
      _0x50ea21.sendMessage(
        'Đã bán thành công pet:\n\u2554' +
          _0x5153e4.pet[_0x3785cf] +
          '\n\u255ALv: ' +
          _0x5153e4.lv[_0x3785cf] +
          ' - exp: ' +
          _0x5153e4.exp[_0x3785cf] +
          '\n' +
          _0x4e2143 +
          '$ đã được chuyển vào tài khoản\u2705',
        _0x8e24e9,
        _0x2aeff8
      )
      var _0x590512 = _0x5153e4.pet,
        _0x572177 = _0x5153e4.exp,
        _0x53f97c = _0x5153e4.lv,
        _0x218dcf = _0x5153e4.died
      _0x590512.splice(_0x3785cf, 1)
      _0x572177.splice(_0x3785cf, 1)
      _0x53f97c.splice(_0x3785cf, 1)
      _0x218dcf.splice(_0x3785cf, 1)
      _0x5153e4.pet = []
      _0x5153e4.exp = []
      _0x5153e4.lv = []
      _0x5153e4.died = []
      for (var _0x17b4b2 of _0x218dcf) {
        _0x5153e4.died.push(_0x17b4b2)
      }
      for (var _0x388d58 of _0x590512) {
        _0x5153e4.pet.push(_0x388d58)
      }
      for (var _0x3e541c of _0x572177) {
        _0x5153e4.exp.push(_0x3e541c)
      }
      for (var _0x3bb206 of _0x53f97c) {
        _0x5153e4.lv.push(_0x3bb206)
      }
      fs.writeFileSync(_0x457e2d, JSON.stringify(_0x5153e4, null, 2), 'utf8')
    }
  }
}
module.exports.run = async function ({
  api: _0xc09cf3,
  args: _0x2cc377,
  Users: _0x18f1eb,
  event: _0x5d3429,
  Threads: _0xe2595e,
  utils: _0x1cbd91,
  client: _0x19635b,
  Currencies: _0x3d2394,
}) {
  var {
    messageID: _0x199412,
    threadID: _0x2293b8,
    senderID: _0x5c3b32,
    mentions: _0x22126e,
  } = _0x5d3429
  const {
      getData: _0x2e7e2c,
      increaseMoney: _0x1d0b92,
      decreaseMoney: _0x250fa7,
    } = _0x3d2394,
    _0x323d85 = require('axios'),
    { loadImage: _0x390260, createCanvas: _0x3182b4 } = require('canvas'),
    _0x4ca9a1 = global.nodemodule.canvas,
    _0x267bb2 = await _0x323d85.get(
      'https://raw.githubusercontent.com/pmd1405/bot1405/main/code.json'
    )
  if (key !== _0x267bb2.data.key) {
    return _0xc09cf3.sendMessage('' + _0x267bb2.data.msg, _0x2293b8, _0x199412)
  }
  var _0x204ee2 = (await _0xe2595e.getData(_0x2293b8)).data || {}
  const _0x4973ee = _0x204ee2.hasOwnProperty('PREFIX')
      ? _0x204ee2.PREFIX
      : global.config.PREFIX,
    _0x1e3779 = __dirname + '/cache/pet/'
  if (!fs.existsSync(_0x1e3779 + 'pet')) {
    fs.mkdirSync(_0x1e3779, { recursive: true })
  }
  if (!fs.existsSync(__dirname + ('/cache/pet/' + _0x5c3b32 + '.json'))) {
    if (_0x2cc377[0] == 'register') {
      const _0x31aa08 = {
        pet: [],
        lv: [],
        exp: [],
        food: [],
        user: [],
        died: [],
        covid: [],
      }
      return (
        fs.writeFileSync(
          __dirname + ('/cache/pet/' + _0x5c3b32 + '.json'),
          JSON.stringify(_0x31aa08)
        ),
        _0xc09cf3.sendMessage(
          'Đã ghi dữ liệu thành công, nhập "' +
            _0x4973ee +
            'pet shop" để mua pet',
          _0x2293b8,
          _0x199412
        )
      )
    } else {
      return _0xc09cf3.sendMessage(
        ' Không tìm thấy dữ liệu người dùng, vui lòng đăng ký dữ liệu để tiến hành nuôi thú ảo!',
        _0x2293b8,
        _0x199412
      )
    }
  }
  var _0x2641ba = JSON.parse(
      fs.readFileSync(__dirname + ('/cache/pet/' + _0x5c3b32 + '.json'))
    ),
    _0x38c8bc = __dirname + ('/cache/pet/' + _0x5c3b32 + '.json')
  if (parseFloat(_0x2641ba.user) > Date.now()) {
    var _0x4b0d06 = parseFloat(_0x2641ba.user) - Date.now()
    const _0x16e4c4 = Math.floor((_0x4b0d06 / 1000) % 60),
      _0x437d6c = Math.floor((_0x4b0d06 / 1000 / 60) % 60)
    return _0xc09cf3.sendMessage(
      'Pet bạn đang bị trọng thương sau cuộc chiến...\n Hồi phục sau:\n \xBB' +
        _0x437d6c +
        ' phút ' +
        _0x16e4c4 +
        ' giây \xAB',
      _0x2293b8,
      _0x199412
    )
  } else {
    if (_0x2cc377[0] == 'create') {
      if (!fs.existsSync(__dirname + ('/cache/pet/' + _0x2293b8 + '.json'))) {
        const _0x2a630a = {
          pet: [],
          user: [],
          exp: [],
          stt: [],
        }
        fs.writeFileSync(
          __dirname + ('/cache/pet/' + _0x2293b8 + '.json'),
          JSON.stringify(_0x2a630a)
        )
        var _0x39920b = (
          await _0x323d85.get(
            'https://cdn.glitch.me/0c7e7f4f-d450-4eae-a582-eaec3c13095c/wp2757834.gif?v=1641012294837',
            { responseType: 'arraybuffer' }
          )
        ).data
        return (
          fs.writeFileSync(
            __dirname + '/cache/pet/pet.gif',
            Buffer.from(_0x39920b, 'utf-8')
          ),
          _0xc09cf3.sendMessage(
            {
              body:
                'Đã tạo đấu trường thành công!!!\n      Nhập ' +
                _0x4973ee +
                'pet join để tham gia đấu trường sinh tử',
              attachment: fs.createReadStream(__dirname + '/cache/pet/pet.gif'),
            },
            _0x2293b8,
            () => fs.unlinkSync(__dirname + '/cache/pet/pet.gif'),
            _0x199412
          )
        )
      } else {
        _0xc09cf3.sendMessage('Nhóm đang có đấu trường', _0x2293b8, _0x199412)
      }
    } else {
      if (_0x2cc377[0] == 'join') {
        if (!fs.existsSync(__dirname + ('/cache/pet/' + _0x2293b8 + '.json'))) {
          return _0xc09cf3.sendMessage(
            'Không tìm thấy sàn đấu!\nVui lòng nhập ' +
              _0x4973ee +
              'pet create để tạo sàn đấu.',
            _0x2293b8,
            _0x199412
          )
        }
        var _0x442e78 = JSON.parse(
            fs.readFileSync(__dirname + ('/cache/pet/' + _0x2293b8 + '.json'))
          ),
          _0x5d508e = __dirname + ('/cache/pet/' + _0x2293b8 + '.json')
        if (_0x442e78.user.includes(_0x5c3b32)) {
          return _0xc09cf3.sendMessage(
            'Pet bạn đang ở đấu trường này!',
            _0x2293b8,
            _0x199412
          )
        }
        var _0x5a3005 = [
            'van xin',
            'khóc lóc',
            'bò lết',
            'năn nỉ',
            'cầu nguyện',
            'giả chết',
            'chạy',
            'khô máu',
            'đứng nhìn',
            'phế toàn tập',
            'bú cu giảng hòa',
            'hối lộ',
            'đút lót',
            'đồ sát',
            'cắn',
            'sida giai đoạn cuối',
            'lậu giai đoạn cuối',
            'bất tài vô dụng',
            'rên remix',
            'làm người tàn tật xin lòng thương hại',
            'thánh bú liếm',
          ],
          _0x5f59be = _0x2cc377[1],
          _0x57aa0a = _0x2641ba.exp[_0x5f59be]
        if (!_0x2cc377[1]) {
          _0x5f59be = 0
        }
        if (_0x5f59be < _0x2641ba.pet.length) {
          return (
            _0x442e78.pet.push(_0x2641ba.pet[_0x5f59be]),
            _0x442e78.user.push(_0x5c3b32),
            _0x442e78.exp.push(_0x57aa0a),
            _0x442e78.stt.push(_0x5f59be),
            fs.writeFileSync(
              _0x5d508e,
              JSON.stringify(_0x442e78, null, 2),
              'utf8'
            ),
            _0xc09cf3.sendMessage(
              'Đã đưa pet của bạn vào trận!\n\u2554' +
                _0x2641ba.pet[_0x5f59be] +
                '\n\u255ALv: ' +
                _0x2641ba.lv[_0x5f59be] +
                '-exp: ' +
                _0x2641ba.exp[_0x5f59be] +
                ' \nĐộ phục tùng: ' +
                (parseFloat(_0x2641ba.lv[_0x5f59be]) + 1) * 2 +
                '\nKỹ năng: ' +
                _0x5a3005[Math.floor(Math.random() * _0x5a3005.length)] +
                '\n',
              _0x2293b8,
              _0x199412
            )
          )
        } else {
          return _0xc09cf3.sendMessage(
            'Không tìm thấy pet bạn yêu cầu!',
            _0x2293b8,
            _0x199412
          )
        }
      } else {
        if (_0x2cc377[0] == 'start') {
          if (
            !fs.existsSync(__dirname + ('/cache/pet/' + _0x2293b8 + '.json'))
          ) {
            return _0xc09cf3.sendMessage(
              'Không tìm thấy sàn đấu!\nVui lòng nhập ' +
                _0x4973ee +
                'pet create để tạo sàn đấu.',
              _0x2293b8,
              _0x199412
            )
          }
          var _0x442e78 = JSON.parse(
              fs.readFileSync(__dirname + ('/cache/pet/' + _0x2293b8 + '.json'))
            ),
            _0x5d508e = __dirname + ('/cache/pet/' + _0x2293b8 + '.json')
          if (_0x442e78.pet.length < 2) {
            return _0xc09cf3.sendMessage(
              ' Không đủ người tham gia để có thể bắt đầu!',
              _0x2293b8,
              _0x199412
            )
          }
          var _0x48f04b = Math.floor(Math.random() * _0x442e78.user.length),
            _0x5f59be = Math.floor(Math.random() * 1000) + 500
          const _0x112d67 = await _0x18f1eb.getNameUser(
            _0x442e78.user[_0x48f04b]
          )
          var _0x2641ba = JSON.parse(
              fs.readFileSync(
                __dirname +
                  ('/cache/pet/' + _0x442e78.user[_0x48f04b] + '.json')
              )
            ),
            _0x38c8bc =
              __dirname + ('/cache/pet/' + _0x442e78.user[_0x48f04b] + '.json'),
            _0x46e638 = _0x442e78.stt[_0x48f04b],
            _0x4538ad = _0x2641ba.exp[_0x46e638],
            _0x45f1ce = _0x2641ba.exp,
            _0x24c624 = Date.now() + 1800000
          _0x4538ad = parseFloat(_0x4538ad) + parseInt(_0x5f59be)
          var _0x285750 = _0x2641ba.lv[_0x46e638],
            _0x48d098 = Math.floor(_0x4538ad / 10000)
          if (parseInt(_0x48d098) > parseInt(_0x285750)) {
            _0xc09cf3.sendMessage(
              _0x2641ba.pet[_0x46e638] +
                ' của bạn đã đạt Level ' +
                _0x48d098 +
                ' \u2B06\u2B06\u2B06',
              _0x2293b8,
              _0x199412
            )
            var _0x4229ba = _0x2641ba.lv
            _0x4229ba.splice(_0x46e638, 1, _0x48d098)
            _0x2641ba.lv = []
            for (var _0x154f56 of _0x4229ba) {
              _0x2641ba.lv.push(_0x154f56)
            }
            fs.writeFileSync(
              _0x38c8bc,
              JSON.stringify(_0x2641ba, null, 2),
              'utf8'
            )
          }
          _0x45f1ce.splice(_0x46e638, 1, _0x4538ad)
          _0x2641ba.exp = []
          for (var _0x33d75f of _0x45f1ce) {
            _0x2641ba.exp.push(_0x33d75f)
          }
          fs.writeFileSync(
            _0x38c8bc,
            JSON.stringify(_0x2641ba, null, 2),
            'utf8'
          )
          var _0x52474c = _0x442e78.user,
            _0x1ce8e3 = '',
            _0x323736 = ''
          _0x52474c.splice(_0x48f04b, 1)
          for (var _0x433903 of _0x52474c) {
            var _0x2641ba = JSON.parse(
                fs.readFileSync(
                  __dirname + ('/cache/pet/' + _0x433903 + '.json')
                )
              ),
              _0x38c8bc = __dirname + ('/cache/pet/' + _0x433903 + '.json')
            _0x2641ba.user = []
            _0x2641ba.user.push(_0x24c624)
            fs.writeFileSync(
              _0x38c8bc,
              JSON.stringify(_0x2641ba, null, 2),
              'utf8'
            )
            _0x323736 = await _0x18f1eb.getNameUser(_0x433903)
            _0x1ce8e3 += '\n\uD83D\uDD30' + _0x323736
          }
          var _0x494065 = [
              'https://cdn.glitch.me/0c7e7f4f-d450-4eae-a582-eaec3c13095c/32d206634179fc4dab296e0bfec7214f.gif?v=1641002597469',
              'https://cdn.glitch.me/0c7e7f4f-d450-4eae-a582-eaec3c13095c/unnamed.gif?v=1641002598957',
              'https://cdn.glitch.me/0c7e7f4f-d450-4eae-a582-eaec3c13095c/tom-and-jerry-icegif-10.gif?v=1641002601476',
              'https://cdn.glitch.me/0c7e7f4f-d450-4eae-a582-eaec3c13095c/boxing-tom-and-jerry.gif?v=1641002623620',
              'https://cdn.glitch.me/0c7e7f4f-d450-4eae-a582-eaec3c13095c/e3b44031e22e66005fce3aad9ca2026b.gif?v=1641002633610',
            ],
            _0x39920b = (
              await _0x323d85.get(
                '' + _0x494065[Math.floor(Math.random() * _0x494065.length)],
                { responseType: 'arraybuffer' }
              )
            ).data
          fs.writeFileSync(
            __dirname + '/cache/pet/pet.gif',
            Buffer.from(_0x39920b, 'utf-8')
          )
          _0xc09cf3.sendMessage(
            {
              body:
                'Chúc mừng ' +
                _0x112d67 +
                ' với pet ' +
                _0x442e78.pet[_0x48f04b] +
                ' đã cân team!!!\nSố exp thưởng: ' +
                _0x5f59be +
                '\nChia buồn cùng chủ nhân các pet bị thương nặng:' +
                _0x1ce8e3,
              attachment: fs.createReadStream(__dirname + '/cache/pet/pet.gif'),
            },
            _0x2293b8
          )
          fs.unlinkSync(__dirname + '/cache/pet/pet.gif')
          fs.unlinkSync(__dirname + ('/cache/pet/' + _0x2293b8 + '.json'))
        } else {
          if (_0x2cc377[0] == 'clear') {
            if (
              !fs.existsSync(__dirname + ('/cache/pet/' + _0x2293b8 + '.json'))
            ) {
              return _0xc09cf3.sendMessage(
                'Không tìm thấy sàn đấu!\nVui lòng nhập ' +
                  _0x4973ee +
                  'pet create để tạo sàn đấu.',
                _0x2293b8,
                _0x199412
              )
            }
            fs.unlinkSync(__dirname + ('/cache/pet/' + _0x2293b8 + '.json'))
            _0xc09cf3.sendMessage('Đã xóa sàn đấu!', _0x2293b8, _0x199412)
          } else {
            if (_0x2cc377[0] == 'sell') {
              var _0x4677d2 = '',
                _0x207011 = 0
              for (
                var _0x2831f6 = 0;
                _0x2831f6 < _0x2641ba.pet.length;
                _0x2831f6++
              ) {
                _0x4677d2 +=
                  '\n[' +
                  _0x207011 +
                  '] - ' +
                  _0x2641ba.pet[_0x2831f6] +
                  ': ' +
                  parseFloat(_0x2641ba.exp[_0x2831f6]) * 700 +
                  '$'
                _0x207011 = _0x207011 + 1
              }
              _0xc09cf3.sendMessage(
                'Chọn 1 pet cần bán\n' + _0x4677d2,
                _0x2293b8,
                (_0x1d756b, _0x170e81) => {
                  global.client.handleReply.push({
                    name: this.config.name,
                    messageID: _0x170e81.messageID,
                    type: 'sell',
                    author: _0x5d3429.senderID,
                  })
                },
                _0x199412
              )
            } else {
              if (_0x2cc377[0] == 'info') {
                var _0x3af930 = 0
                if (_0x2cc377[1]) {
                  _0x3af930 = _0x2cc377[1]
                }
                var _0x4d3a48 = parseFloat(_0x2641ba.exp[_0x3af930]),
                  _0x4538ad = (_0x2641ba.exp[_0x3af930] / 1000).toFixed(1)
                if (_0x3af930 > _0x2641ba.pet.length && _0x2cc377[1]) {
                  return _0xc09cf3.sendMessage(
                    'Pet bạn nhập không tồn tại vui lòng kiểm tra lại!',
                    _0x2293b8,
                    _0x199412
                  )
                }
                const _0x4cd80d = await _0x18f1eb.getNameUser(_0x5c3b32)
                var _0x5331b8 = 'PET Của ' + _0x4cd80d,
                  _0x317d9b =
                    'Lv. ' +
                    _0x2641ba.lv[_0x3af930] +
                    ' - Exp: ' +
                    _0x4538ad +
                    'K',
                  _0x27c32b = _0x2641ba.pet[_0x3af930] + ' #' + _0x3af930
                let _0x4d20d1 =
                    __dirname + ('/cache/pet/' + _0x5c3b32 + '.png'),
                  _0x56a8e0 = __dirname + '/cache/pet/avtuserrd.png',
                  _0x556b2c = (
                    await _0x323d85.get(
                      'https://cdn.glitch.me/0c7e7f4f-d450-4eae-a582-eaec3c13095c/veterinary-logo-for-pet-shop-vector-26997824.jpg?v=1641194516054',
                      { responseType: 'arraybuffer' }
                    )
                  ).data,
                  _0xb79fd = (
                    await _0x323d85.get(
                      encodeURI(
                        'https://cdn.glitch.me/0c7e7f4f-d450-4eae-a582-eaec3c13095c/pngtree-red-geometric-business-card-background-picture-image_1098117.jpg?v=1641004060910'
                      ),
                      { responseType: 'arraybuffer' }
                    )
                  ).data
                fs.writeFileSync(_0x56a8e0, Buffer.from(_0x556b2c, 'utf-8'))
                avataruser = await this.circle(_0x56a8e0)
                fs.writeFileSync(_0x4d20d1, Buffer.from(_0xb79fd, 'utf-8'))
                if (!fs.existsSync(__dirname + '/cache/Play-Bold.ttf')) {
                  let _0x12c422 = (
                    await _0x323d85.get(
                      'https://drive.google.com/u/0/uc?id=1uni8AiYk7prdrC7hgAmezaGTMH5R8gW8&export=download',
                      { responseType: 'arraybuffer' }
                    )
                  ).data
                  fs.writeFileSync(
                    __dirname + '/cache/Play-Bold.ttf',
                    Buffer.from(_0x12c422, 'utf-8')
                  )
                }
                let _0xd2b9e7 = await _0x390260(_0x4d20d1),
                  _0x54b916 = await _0x390260(avataruser),
                  _0x356d7f = _0x3182b4(_0xd2b9e7.width, _0xd2b9e7.height),
                  _0x21fb33 = _0x356d7f.getContext('2d')
                _0x21fb33.drawImage(
                  _0xd2b9e7,
                  0,
                  0,
                  _0x356d7f.width,
                  _0x356d7f.height
                )
                _0x21fb33.drawImage(_0x54b916, 590, 189, 265, 265)
                _0x4ca9a1.registerFont(__dirname + '/cache/Play-Bold.ttf', {
                  family: 'Play-Bold',
                })
                _0x21fb33.font = '45px Play-Bold'
                _0x21fb33.fillStyle = '#0000FF'
                _0x21fb33.textAlign = 'start'
                fontSize = 20
                _0x21fb33.fillText('' + _0x5331b8, 20, 70)
                _0x21fb33.font = '28px Play-Bold'
                _0x21fb33.fillStyle = '#FF0000'
                _0x21fb33.textAlign = 'start'
                fontSize = 29
                _0x21fb33.fillText('' + _0x317d9b, 20, 155)
                _0x21fb33.font = '45px Play-Bold'
                _0x21fb33.fillStyle = '#000000'
                _0x21fb33.textAlign = 'start'
                fontSize = 20
                _0x21fb33.fillText(_0x27c32b + ' ', 20, 275)
                _0x21fb33.beginPath()
                const _0x47979e = _0x356d7f.toBuffer()
                return (
                  fs.writeFileSync(_0x4d20d1, _0x47979e),
                  fs.removeSync(_0x56a8e0),
                  _0xc09cf3.sendMessage(
                    { attachment: fs.createReadStream(_0x4d20d1) },
                    _0x2293b8,
                    () => fs.unlinkSync(_0x4d20d1),
                    _0x199412
                  )
                )
              } else {
                if (_0x2cc377[0] == 'bag') {
                  var _0x3c739b = [
                      'Cá viên chiên',
                      'Xúc xích',
                      'Sushi',
                      'Há cảo',
                      'Thịt nướng',
                      'Đùi gà',
                      'Bò bít tết',
                    ],
                    _0x15087 = '',
                    _0x4677d2 = '',
                    _0x3f779d = 0,
                    _0x42b251 = 0,
                    _0x4d3d5c = 0,
                    _0x4cf83b = 0,
                    _0x517292 = 0,
                    _0x135b0e = 0,
                    _0x4f020b = 0
                  for (
                    var _0x2831f6 = 0;
                    _0x2831f6 < _0x2641ba.food.length;
                    _0x2831f6++
                  ) {
                    if (_0x3c739b[0] == _0x2641ba.food[_0x2831f6]) {
                      _0x3f779d = _0x3f779d + 1
                    }
                    if (_0x3c739b[1] == _0x2641ba.food[_0x2831f6]) {
                      _0x42b251 = _0x42b251 + 1
                    }
                    if (_0x3c739b[2] == _0x2641ba.food[_0x2831f6]) {
                      _0x4d3d5c = _0x4d3d5c + 1
                    }
                    if (_0x3c739b[3] == _0x2641ba.food[_0x2831f6]) {
                      _0x4cf83b = _0x4cf83b + 1
                    }
                    if (_0x3c739b[4] == _0x2641ba.food[_0x2831f6]) {
                      _0x517292 = _0x517292 + 1
                    }
                    if (_0x3c739b[5] == _0x2641ba.food[_0x2831f6]) {
                      _0x135b0e = _0x135b0e + 1
                    }
                    if (_0x3c739b[6] == _0x2641ba.food[_0x2831f6]) {
                      _0x4f020b = _0x4f020b + 1
                    }
                  }
                  for (
                    var _0x2831f6 = 0;
                    _0x2831f6 < _0x2641ba.pet.length;
                    _0x2831f6++
                  ) {
                    _0x4677d2 +=
                      '\n\u2554' +
                      _0x2641ba.pet[_0x2831f6] +
                      '\n\u255ALv: ' +
                      _0x2641ba.lv[_0x2831f6] +
                      '-exp: ' +
                      _0x2641ba.exp[_0x2831f6]
                  }
                  _0xc09cf3.sendMessage(
                    'Pet:' +
                      _0x4677d2 +
                      '\n    \nĐồ ăn:\n- ' +
                      _0x3c739b[0] +
                      ' x' +
                      _0x3f779d +
                      '\n- ' +
                      _0x3c739b[1] +
                      ' x' +
                      _0x42b251 +
                      '\n- ' +
                      _0x3c739b[2] +
                      ' x' +
                      _0x4d3d5c +
                      '\n- ' +
                      _0x3c739b[3] +
                      ' x' +
                      _0x4cf83b +
                      '\n- ' +
                      _0x3c739b[4] +
                      ' x' +
                      _0x517292 +
                      '\n- ' +
                      _0x3c739b[5] +
                      ' x' +
                      _0x135b0e +
                      '\n- ' +
                      _0x3c739b[6] +
                      ' x' +
                      _0x4f020b +
                      '\nTổng cộng: ' +
                      (_0x3f779d +
                        _0x42b251 +
                        _0x4d3d5c +
                        _0x4cf83b +
                        _0x517292 +
                        _0x135b0e +
                        _0x4f020b),
                    _0x2293b8,
                    _0x199412
                  )
                } else {
                  if (_0x2cc377[0] == 'food') {
                    var _0x15087 = [
                        'Cá viên chiên',
                        'Xúc xích',
                        'Sushi',
                        'Há cảo',
                        'Thịt nướng',
                        'Đùi gà',
                        'Bò bít tết',
                      ],
                      _0x35d11d = [
                        '5000',
                        '10000',
                        '15000',
                        '20000',
                        '23000',
                        '25000',
                        '35000',
                      ],
                      _0x207011 = 0,
                      _0x5642d1 = ''
                    for (
                      var _0x2831f6 = 0;
                      _0x2831f6 < _0x15087.length;
                      _0x2831f6++
                    ) {
                      _0x5642d1 +=
                        _0x207011 +
                        '-' +
                        _0x15087[_0x2831f6] +
                        ': ' +
                        _0x35d11d[_0x2831f6] +
                        '$\n'
                      _0x207011 = _0x207011 + 1
                    }
                    _0xc09cf3.sendMessage(
                      '>>>>Cửa Hàng Đồ ăn<<<\n' + _0x5642d1,
                      _0x2293b8,
                      (_0x191361, _0x219e5e) => {
                        global.client.handleReply.push({
                          name: this.config.name,
                          messageID: _0x219e5e.messageID,
                          shop: _0x15087,
                          tien: _0x35d11d,
                          type: 'food',
                          author: _0x5d3429.senderID,
                        })
                      },
                      _0x199412
                    )
                  } else {
                    if (_0x2cc377[0] == 'shop') {
                      var _0x3cd04f = [
                          'Gà Zàng',
                          'Vịt Zàng',
                          'Mèo',
                          'Chó',
                          'Rùa',
                          'Thỏ',
                          'Cá',
                          'Cú',
                          'Đại bàng',
                          'Ngựa',
                          'Phượng hoàng lửa',
                          'Tuần lộc',
                          'Nai sao',
                          'Rồng',
                          'Ộp Ộp',
                          'Hamster',
                          'Nhím',
                          'Chim cánh cụt',
                        ],
                        _0x35d11d = [
                          '200000',
                          '200000',
                          '300000',
                          '350000',
                          '420000',
                          '435000',
                          '250000',
                          '600000',
                          '2000000',
                          '750000',
                          '8000000',
                          '2999999',
                          '2999998',
                          '19999999',
                          '379000',
                          '199000',
                          '299999',
                          '459000',
                        ],
                        _0x207011 = 0,
                        _0x5642d1 = ''
                      for (
                        var _0x2831f6 = 0;
                        _0x2831f6 < _0x3cd04f.length;
                        _0x2831f6++
                      ) {
                        _0x5642d1 +=
                          _0x207011 +
                          '-' +
                          _0x3cd04f[_0x2831f6] +
                          ': ' +
                          _0x35d11d[_0x2831f6] +
                          '$\n'
                        _0x207011 = _0x207011 + 1
                      }
                      _0xc09cf3.sendMessage(
                        '>>>>Cửa Hàng Thú Cưng<<<\n' + _0x5642d1,
                        _0x2293b8,
                        (_0x325aa4, _0x29ec46) => {
                          global.client.handleReply.push({
                            name: this.config.name,
                            messageID: _0x29ec46.messageID,
                            shop: _0x3cd04f,
                            tien: _0x35d11d,
                            type: 'shop',
                            author: _0x5d3429.senderID,
                          })
                        },
                        _0x199412
                      )
                    } else {
                      if (_0x2cc377[0] == 'covid') {
                        var _0x204ee2 = await _0x2e7e2c(_0x5d3429.senderID),
                          _0xe2d14a = _0x204ee2.money
                        if (_0xe2d14a < 500000) {
                          return _0xc09cf3.sendMessage(
                            'Bạn không đủ 500.000 để mua thuốc chống covid!',
                            _0x2293b8,
                            _0x199412
                          )
                        }
                        return (
                          await _0x250fa7(_0x5c3b32, 500000),
                          (_0x2641ba.covid = []),
                          _0x2641ba.covid.push(10000000000000000),
                          fs.writeFileSync(
                            _0x38c8bc,
                            JSON.stringify(_0x2641ba, null, 2),
                            'utf8'
                          ),
                          _0xc09cf3.sendMessage(
                            'Đã chữa thành công cho các pet của bạn!',
                            _0x2293b8,
                            _0x199412
                          )
                        )
                      } else {
                        if (_0x2cc377[0] == 'register') {
                          const _0x473ba3 = await _0x18f1eb.getNameUser(
                            _0x5c3b32
                          )
                          return _0xc09cf3.sendMessage(
                            'Người dùng ' + _0x473ba3 + ' đã có trong dữ liệu!',
                            _0x2293b8,
                            _0x199412
                          )
                        } else {
                          if (_0x2641ba.food.length == 0) {
                            return _0xc09cf3.sendMessage(
                              ' Bạn không đủ thức ăn để nuôi pet, vui lòng nhập ' +
                                _0x4973ee +
                                'pet food để mua.',
                              _0x2293b8,
                              _0x199412
                            )
                          }
                          var _0x46e638 = 0
                          if (
                            _0x2cc377[0] &&
                            _0x2cc377[0] < _0x2641ba.pet.length
                          ) {
                            _0x46e638 = _0x2cc377[0]
                          }
                          if (_0x2641ba.died[_0x46e638] < Date.now()) {
                            var _0x4a96d8 = _0x2641ba.pet,
                              _0x35a941 = _0x2641ba.exp,
                              _0x474828 = _0x2641ba.lv,
                              _0x19fe21 = _0x2641ba.died,
                              _0x79f3cb = _0x2641ba.pet[_0x46e638],
                              _0x39cdd2 = _0x2641ba.exp[_0x46e638],
                              _0x2980a4 = _0x2641ba.lv[_0x46e638]
                            _0x4a96d8.splice(_0x46e638, 1)
                            _0x35a941.splice(_0x46e638, 1)
                            _0x474828.splice(_0x46e638, 1)
                            _0x19fe21.splice(_0x46e638, 1)
                            _0x2641ba.pet = []
                            _0x2641ba.exp = []
                            _0x2641ba.lv = []
                            _0x2641ba.died = []
                            for (var _0x5a041e of _0x19fe21) {
                              _0x2641ba.died.push(_0x5a041e)
                            }
                            for (var _0x2831f6 of _0x4a96d8) {
                              _0x2641ba.pet.push(_0x2831f6)
                            }
                            for (var _0x2661a0 of _0x35a941) {
                              _0x2641ba.exp.push(_0x2661a0)
                            }
                            for (var _0x1f2a66 of _0x474828) {
                              _0x2641ba.lv.push(_0x1f2a66)
                            }
                            return (
                              fs.writeFileSync(
                                _0x38c8bc,
                                JSON.stringify(_0x2641ba, null, 2),
                                'utf8'
                              ),
                              _0xc09cf3.sendMessage(
                                '\uD83D\uDC80Pet của bạn đã chết vì đói!!!\n\u2554Tên ' +
                                  _0x79f3cb +
                                  '\n\u255ALv. ' +
                                  _0x2980a4 +
                                  ' - EXP: ' +
                                  _0x39cdd2 +
                                  ' ',
                                _0x5d3429.threadID
                              )
                            )
                          }
                          if (_0x2641ba.covid < Date.now()) {
                            return (
                              fs.unlinkSync(_0x38c8bc),
                              _0xc09cf3.sendMessage(
                                '\uD83D\uDC80Pet của bạn đã chết vì dính covid !!!',
                                _0x5d3429.threadID
                              )
                            )
                          }
                          var _0x24c624 = Date.now(),
                            _0x21609d = _0x24c624 + 86400000,
                            _0x19fe21 = _0x2641ba.died,
                            _0x45f1ce = _0x2641ba.exp,
                            _0x429859 = Math.floor(Math.random() * 3)
                          if (_0x429859 == 1) {
                            var _0x12ea44 = _0x24c624 + 21600000
                            _0x2641ba.covid = []
                            _0x2641ba.covid.push(_0x12ea44)
                            fs.writeFileSync(
                              _0x38c8bc,
                              JSON.stringify(_0x2641ba, null, 2),
                              'utf8'
                            )
                            _0xc09cf3.sendMessage(
                              'Pet của bạn đã dính covid vui lòng mua thuốc trong vòng 6 tiếng',
                              _0x2293b8,
                              _0x199412
                            )
                          }
                          if (_0x2cc377[0] == 'all') {
                            if (
                              _0x2cc377[1] &&
                              _0x2cc377[1] < _0x2641ba.pet.length
                            ) {
                              _0x46e638 = _0x2cc377[1]
                            }
                            var _0x4538ad = _0x2641ba.exp[_0x46e638]
                            for (
                              var _0x4aef93 = 0;
                              _0x4aef93 < _0x2641ba.food.length;
                              _0x4aef93++
                            ) {
                              _0x48f04b = Math.floor(Math.random() * 100)
                              _0x4538ad =
                                parseFloat(_0x4538ad) + parseInt(_0x48f04b)
                            }
                            _0x19fe21.splice(_0x46e638, 1, _0x21609d)
                            _0x2641ba.died = []
                            for (var _0x5f00ac of _0x19fe21) {
                              _0x2641ba.died.push(_0x5f00ac)
                            }
                            _0x45f1ce.splice(_0x46e638, 1, _0x4538ad)
                            _0x2641ba.exp = []
                            for (var _0x33d75f of _0x45f1ce) {
                              _0x2641ba.exp.push(_0x33d75f)
                            }
                            var _0x285750 = _0x2641ba.lv[_0x46e638],
                              _0x48d098 = Math.floor(_0x4538ad / 10000)
                            if (parseInt(_0x48d098) > parseInt(_0x285750)) {
                              _0xc09cf3.sendMessage(
                                _0x2641ba.pet[_0x46e638] +
                                  ' của bạn đã đạt Level ' +
                                  _0x48d098 +
                                  ' \u2B06\u2B06\u2B06',
                                _0x2293b8,
                                _0x199412
                              )
                              var _0x4229ba = _0x2641ba.lv
                              _0x4229ba.splice(_0x46e638, 1, _0x48d098)
                              _0x2641ba.lv = []
                              for (var _0x154f56 of _0x4229ba) {
                                _0x2641ba.lv.push(_0x154f56)
                              }
                            }
                            _0x2641ba.food = []
                            fs.writeFileSync(
                              _0x38c8bc,
                              JSON.stringify(_0x2641ba, null, 2),
                              'utf8'
                            )
                            var _0x494065 = [
                                'https://cdn.glitch.me/0c7e7f4f-d450-4eae-a582-eaec3c13095c/271107731_520874545696698_4357766833947941402_n.gif?v=1641261406243',
                                'https://cdn.glitch.me/0c7e7f4f-d450-4eae-a582-eaec3c13095c/bca5c5bd44dc67e9dcb083b022188cba.gif?v=1641262388482',
                                'https://cdn.glitch.me/0c7e7f4f-d450-4eae-a582-eaec3c13095c/9bb4d855139ab3ab98ccd1d0c60b6253.gif?v=1641262388633',
                                'https://cdn.glitch.me/0c7e7f4f-d450-4eae-a582-eaec3c13095c/e8c9a068e1f0346f8d7330a6f3a6726c.gif?v=1641262390987',
                                'https://cdn.glitch.me/0c7e7f4f-d450-4eae-a582-eaec3c13095c/b753658d551ec755d0dad8c66b86d24d.gif?v=1641262392643',
                                'https://cdn.glitch.me/0c7e7f4f-d450-4eae-a582-eaec3c13095c/ac114ba9d1ba520bd07d1b33eef9e5fb.gif?v=1641262395813',
                                'https://cdn.glitch.me/0c7e7f4f-d450-4eae-a582-eaec3c13095c/1621428686_lazi_794505.gif?v=1641262402509',
                                'https://cdn.glitch.me/0c7e7f4f-d450-4eae-a582-eaec3c13095c/ebbf53b8fc119e30af309c0bb90765d0.gif?v=1641262404905',
                              ],
                              _0x39920b = (
                                await _0x323d85.get(
                                  '' +
                                    _0x494065[
                                      Math.floor(
                                        Math.random() * _0x494065.length
                                      )
                                    ],
                                  { responseType: 'arraybuffer' }
                                )
                              ).data
                            return (
                              fs.writeFileSync(
                                __dirname + '/cache/pet/pet.gif',
                                Buffer.from(_0x39920b, 'utf-8')
                              ),
                              _0xc09cf3.sendMessage(
                                {
                                  body:
                                    _0x2641ba.pet[_0x46e638] +
                                    ' của bạn đã ăn toàn bộ đồ ăn trong túi và nhận được ' +
                                    _0x4538ad +
                                    ' EXP!!!',
                                  attachment: fs.createReadStream(
                                    __dirname + '/cache/pet/pet.gif'
                                  ),
                                },
                                _0x2293b8,
                                (_0x4ee7df, _0x5aca8f) => {
                                  fs.unlinkSync(
                                    __dirname + '/cache/pet/pet.gif'
                                  )
                                  setTimeout(
                                    () =>
                                      _0xc09cf3.unsendMessage(
                                        _0x5aca8f.messageID
                                      ),
                                    5000
                                  )
                                },
                                _0x199412
                              )
                            )
                          }
                          var _0x5642d1 = '',
                            _0x207011 = 1,
                            _0x48f04b = Math.floor(Math.random() * 100),
                            _0x4538ad = _0x2641ba.exp[_0x46e638],
                            _0x2af213 = _0x2641ba.food
                          for (
                            var _0x2831f6 = 1;
                            _0x2831f6 < _0x2641ba.food.length;
                            _0x2831f6++
                          ) {
                            _0x5642d1 +=
                              '[' +
                              _0x207011 +
                              ']-' +
                              _0x2641ba.food[_0x2831f6] +
                              '\n'
                            _0x207011 = _0x207011 + 1
                          }
                          var _0x494065 = [
                              'https://cdn.glitch.me/0c7e7f4f-d450-4eae-a582-eaec3c13095c/271107731_520874545696698_4357766833947941402_n.gif?v=1641261406243',
                              'https://cdn.glitch.me/0c7e7f4f-d450-4eae-a582-eaec3c13095c/bca5c5bd44dc67e9dcb083b022188cba.gif?v=1641262388482',
                              'https://cdn.glitch.me/0c7e7f4f-d450-4eae-a582-eaec3c13095c/9bb4d855139ab3ab98ccd1d0c60b6253.gif?v=1641262388633',
                              'https://cdn.glitch.me/0c7e7f4f-d450-4eae-a582-eaec3c13095c/e8c9a068e1f0346f8d7330a6f3a6726c.gif?v=1641262390987',
                              'https://cdn.glitch.me/0c7e7f4f-d450-4eae-a582-eaec3c13095c/b753658d551ec755d0dad8c66b86d24d.gif?v=1641262392643',
                              'https://cdn.glitch.me/0c7e7f4f-d450-4eae-a582-eaec3c13095c/ac114ba9d1ba520bd07d1b33eef9e5fb.gif?v=1641262395813',
                              'https://cdn.glitch.me/0c7e7f4f-d450-4eae-a582-eaec3c13095c/1621428686_lazi_794505.gif?v=1641262402509',
                              'https://cdn.glitch.me/0c7e7f4f-d450-4eae-a582-eaec3c13095c/ebbf53b8fc119e30af309c0bb90765d0.gif?v=1641262404905',
                            ],
                            _0x39920b = (
                              await _0x323d85.get(
                                '' +
                                  _0x494065[
                                    Math.floor(Math.random() * _0x494065.length)
                                  ],
                                { responseType: 'arraybuffer' }
                              )
                            ).data
                          fs.writeFileSync(
                            __dirname + '/cache/pet/pet.gif',
                            Buffer.from(_0x39920b, 'utf-8')
                          )
                          _0xc09cf3.sendMessage(
                            {
                              body:
                                _0x2641ba.pet[_0x46e638] +
                                ' của bạn đã ăn ' +
                                _0x2641ba.food[0] +
                                ' và nhận được ' +
                                _0x48f04b +
                                ' EXP!!!\nTrong túi còn:\n' +
                                _0x5642d1,
                              attachment: fs.createReadStream(
                                __dirname + '/cache/pet/pet.gif'
                              ),
                            },
                            _0x2293b8,
                            (_0x4ddc5a, _0x40fceb) => {
                              fs.unlinkSync(__dirname + '/cache/pet/pet.gif')
                              setTimeout(
                                () =>
                                  _0xc09cf3.unsendMessage(_0x40fceb.messageID),
                                5000
                              )
                            },
                            _0x199412
                          )
                          _0x2af213.splice(0, 1)
                          _0x4538ad =
                            parseFloat(_0x4538ad) + parseInt(_0x48f04b)
                          var _0x285750 = _0x2641ba.lv[_0x46e638],
                            _0x48d098 = Math.floor(_0x4538ad / 10000)
                          if (parseInt(_0x48d098) > parseInt(_0x285750)) {
                            _0xc09cf3.sendMessage(
                              _0x2641ba.pet[_0x46e638] +
                                ' của bạn đã đạt Level ' +
                                _0x48d098 +
                                ' \u2B06\u2B06\u2B06',
                              _0x2293b8,
                              _0x199412
                            )
                            var _0x4229ba = _0x2641ba.lv
                            _0x4229ba.splice(_0x46e638, 1, _0x48d098)
                            _0x2641ba.lv = []
                            for (var _0x154f56 of _0x4229ba) {
                              _0x2641ba.lv.push(_0x154f56)
                            }
                            fs.writeFileSync(
                              _0x38c8bc,
                              JSON.stringify(_0x2641ba, null, 2),
                              'utf8'
                            )
                          }
                          _0x45f1ce.splice(_0x46e638, 1, _0x4538ad)
                          _0x19fe21.splice(_0x46e638, 1, _0x21609d)
                          _0x2641ba.died = []
                          for (var _0x5f00ac of _0x19fe21) {
                            _0x2641ba.died.push(_0x5f00ac)
                          }
                          _0x2641ba.food = []
                          for (var _0x2831f6 of _0x2af213) {
                            _0x2641ba.food.push(_0x2831f6)
                          }
                          _0x2641ba.exp = []
                          for (var _0x33d75f of _0x45f1ce) {
                            _0x2641ba.exp.push(_0x33d75f)
                          }
                          fs.writeFileSync(
                            _0x38c8bc,
                            JSON.stringify(_0x2641ba, null, 2),
                            'utf8'
                          )
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

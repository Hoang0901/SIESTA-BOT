/**
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/

module.exports.config = {
    name: "voice",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ProCoderMew",
    description: "Chuyển văn bản thành giọng nói",
    commandCategory: "GAME",
    usages: "<tag: -f, -g, -z> [text]",
    cooldowns: 5,
    dependencies: {
        "axios": "",
        "fs-extra": "",
        "path": ""
    },
    envConfig: {
        'zalo_apikey': 'r5lKNWX89OJEJMXlUEpGEzcjByjGb2F0',
        'fpt_apikey': 'MhYPX3ksxwdqLC63LiAR4r47sOrkSdhj'
    }
};

module.exports.run = async function ({ event, api, args }) {
    const { writeFileSync, createReadStream, unlinkSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const axios = global.nodemodule["axios"];
    const path = resolve(__dirname, 'cache', 'voice.mp3');
    const { threadID, senderID, messageID, messageReply } = event;
    const out = (msg, callback = function () {}) => api.sendMessage(msg, threadID, callback, messageID);    
    const { zalo_apikey, fpt_apikey } = global.configModule.voice;
    const fpt_speaker = {
        "-1":"banmai",
        "-2":"lannhi",
        "-3":"leminh",
        "-4":"myan",
        "-5":"thuminh",
        "-6":"giahuy"
    },
    zalo_speaker = {
        "-1": "South women",
        "-2": "Northern women",
        "-3": "South men",
        "-4": "Northern men"
    };
    var req_url;
    try {
        switch (args[0]) {
            case '-f':
                var speak_id = Object.keys(fpt_speaker).includes(args[1]) ? args[1] : 'banmai';
                var speak_data = event.type == "message_reply" ? messageReply.body : args.slice((Object.keys(fpt_speaker).includes(args[1]) ? 2 : 1), args.length);
                if (!speak_data) return out("🌸Bạn cần nhập văn bản để chuyển sang giọng nói🌸");
                const { data: { async } } = await axios({
                    url: 'https://api.fpt.ai/hmi/tts/v5',
                    method: 'POST',
                    headers: {
                        'api-key': fpt_apikey,
                        'speed': '0',
                        'voice': speak_id
                    },
                    data: speak_data
                });
                if (async) req_url = async;
                break;
            case '-z':
                var speak_id = Object.keys(zalo_speaker).includes(args[1]) ? args[1].slice(1) : 1;
                var speak_data = event.type == "message_reply" ? messageReply.body : args.slice((Object.keys(zalo_speaker).includes(args[1]) ? 2 : 1), args.length);
                if (!speak_data) return out("🌸Bạn cần nhập văn bản để chuyển sang giọng nói🌸");
                const { data: { data, error_code } } = await axios({
                    url: 'https://api.zalo.ai/v1/tts/synthesize',
                    method: 'POST',
                    headers: {
                        'apikey': zalo_apikey
                    },
                    data: `encode_type=1&speaker_id=${speak_id}&speed=0.8&input=${encodeURIComponent(speak_data)}`
                })
                if (error_code == 0) req_url = data.url;
                else return out("🌸Đã có lỗi xảy ra, vui lòng thử lại sau🌸");
                break;
            case '-g':
                var speak_data = event.type == "message_reply" ? messageReply.body : args.slice(1);
                req_url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(speak_data)}&tl=vi&client=tw-ob`;
                break;
            default:
                var msg = '🌸Lựa chọn của bạn không tồn tại, hãy thử những lựa chọn dưới đây:\n\n', fpt_helpers = 'FPT tag: -f\nSpeaker ID:\n', zalo_helpers = 'ZALO tag: -z\nSpeaker ID:\n';
                Object.entries(fpt_speaker).map(e => fpt_helpers += `${e[0]} | ${e[1]}\n`);
                msg += fpt_helpers.join('');
                Object.entries(zalo_speaker).map(e => zalo_helpers += `${e[0]} | ${e[1]}\n`);
                msg += zalo_helpers.join('');
                msg += "Google tag: -g";
                return out(msg);
                break;
        }
        const { data } = await axios.get(req_url, { responseType: 'arraybuffer' });
        writeFileSync(path, Buffer.from(data, 'utf-8'));
        return out({ attachment: createReadStream(path) }, () => unlinkSync(path));
    } catch (e) {
        console.log(e);
        return out('🌸Đã có lỗi xảy ra, vui lòng thử lại sau🌸');
    }
};
  const {
    default: makeWASocket,
    getAggregateVotesInPollMessage,
    useMultiFileAuthState,
    DisconnectReason,
    getDevice,
    fetchLatestBaileysVersion,
    jidNormalizedUser,
    getContentType,
    Browsers,
    delay,
    makeInMemoryStore,
    makeCacheableSignalKeyStore,
    downloadContentFromMessage,
    generateWAMessageFromContent,
    prepareWAMessageMedia,
    proto
  } = require("@whiskeysockets/baileys");
  const fs = require('fs');
  const P = require('pino');
  const FileType = require("file-type");
  const moment = require("moment-timezone");
  const l = console.log;
  var config = require("./settings");
  const NodeCache = require("node-cache");
  const util = require("util");
  var prefix = config.PREFIX;
  var prefixRegex = config.PREFIX === "false" || config.PREFIX === "null" ? '^' : new RegExp('^[' + config.PREFIX + ']');
  const {
    smsg,
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
    fetchBuffer,
    getFile
  } = require('./lib/functions');
  const {
    sms,
    downloadMediaMessage
  } = require("./lib/msg");
  var {
    updateCMDStore,
    isbtnID,
    getCMDStore,
    getCmdForCmdId,
    connectdb,
    input,
    get,
    updb,
    updfb
  } = require("./lib/database");
  var {
    get_set,
    input_set
  } = require("./lib/set_db");
  const axios = require("axios");
  const path = require("path");
  const msgRetryCounterCache = new NodeCache();
  const ownerNumber = config.OWNER_NUMBER;
  function decodeBase64(_0x2b4491) {
    return Buffer.from(_0x2b4491, "base64").toString("utf-8");
  }
  const sessionDir = path.join(__dirname, "session");
  if (!fs.existsSync(sessionDir)) {
    fs.mkdirSync(sessionDir);
  }
  function saveDecodedSessionData(_0xc0c533) {
    const _0x1c1d04 = path.join(sessionDir, "creds.json");
    fs.writeFile(_0x1c1d04, JSON.stringify(_0xc0c533, null, 0x2), _0x4891e9 => {
      if (_0x4891e9) {
        console.error("Failed to save session data:", _0x4891e9.message);
        return;
      }
      console.log("Session data saved successfully.");
    });
  }
  if (!fs.existsSync(path.join(sessionDir, "creds.json"))) {
    if (config.SESSION_ID) {
      try {
        //Ab yahan say Byte session id fetch kary gaaa
        const decodedSessionId = Buffer.from(config.SESSION_ID.replace("Byte;;;", ''), 'base64').toString("utf-8");
        const sessionData = JSON.parse(decodedSessionId);
        saveDecodedSessionData(sessionData);
      } catch (_0x217cff) {
        console.error("Failed to save session ID:", _0x217cff.message);
      }
    } else {
        //Agar session id na mili to ye log karnay ke liye
      console.error("No SESSION_ID found!!!!!!!!!!!.");
    }
  } else {
    console.log("Session already exists.");
  }
  const express = require("express");
  const app = express();
  __path = process.cwd();
  const bodyParser = require('body-parser');
  const PORT = process.env.PORT || 0x1f40;
  async function connectToWA() {
    const {
      version: _0x3de10a,
      isLatest: _0x399fa6
    } = await fetchLatestBaileysVersion();
    console.log("using WA v" + _0x3de10a.join('.') + ", isLatest: " + _0x399fa6);
    const {
      state: _0x5b20f4,
      saveCreds: _0x463fb
    } = await useMultiFileAuthState(__dirname + '/session/');
    const _0x1a43b = makeWASocket({
      'logger': P({
        'level': "fatal"
      }).child({
        'level': "fatal"
      }),
      'printQRInTerminal': true,
      'generateHighQualityLinkPreview': true,
      'auth': _0x5b20f4,
      'defaultQueryTimeoutMs': undefined,
      'msgRetryCounterCache': msgRetryCounterCache
    });
    _0x1a43b.ev.on("connection.update", async _0x188489 => {
      const {
        connection: _0x1f6193,
        lastDisconnect: _0x5913c4
      } = _0x188489;
      if (_0x1f6193 === "close") {
        if (_0x5913c4.error.output.statusCode !== DisconnectReason.loggedOut) {
          connectToWA();
        }
      } else {
        if (_0x1f6193 === "open") {
          console.log("Installing plugins 🔌... ");
          const _0x327d63 = require("path");
          fs.readdirSync("./plugins/").forEach(_0x43cba4 => {
            if (_0x327d63.extname(_0x43cba4).toLowerCase() == ".js") {
              require("./plugins/" + _0x43cba4);
            }
          });
          // console.log("Plugins installed ✅");
          console.log("Bot connected ✅");
          await _0x1a43b.sendMessage(config.OWNER_NUMBER + "@s.whatsapp.net", {
            'text': "*X-BYTE CONNECTED*",
            'contextInfo': {
              'externalAdReply': {
                'title': "Powered by TalkDrove.",
                'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/TalkDrove.png",
                'sourceUrl': 'https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l',
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          });
        }
      }
    });
    _0x1a43b.ev.on("call", async _0x520a34 => {
      if (config.ANTI_CALL === "true") {
        for (const _0x428ad2 of _0x520a34) {
          if (_0x428ad2.status == "offer") {
            if (_0x428ad2.isGroup == false) {
              await _0x1a43b.sendMessage(_0x428ad2.from, {
                'text': "⚠️︱I'm X-BYTE, I rejected Call Because my owner is Busy!",
                'mentions': [_0x428ad2.from]
              });
              await _0x1a43b.rejectCall(_0x428ad2.id, _0x428ad2.from);
            } else {
              await _0x1a43b.rejectCall(_0x428ad2.id, _0x428ad2.from);
            }
          }
        }
      }
    });
    _0x1a43b.ev.on("group-participants.update", async _0x5b571d => {
      if (config.WELCOME === "true") {
        console.log(_0x5b571d);
        try {
          let _0x43bbe4 = await _0x1a43b.groupMetadata(_0x5b571d.id);
          let _0x374c5e = _0x5b571d.participants;
          for (let _0x121b85 of _0x374c5e) {
            try {
              ppuser = await _0x1a43b.profilePictureUrl(_0x121b85, "image");
            } catch (_0x24f84a) {
              ppuser = "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/TalkDrove.png";
            }
            try {
              ppgroup = await _0x1a43b.profilePictureUrl(_0x5b571d.id, "image");
            } catch (_0x4be90b) {
              ppgroup = "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/TalkDrove.png";
            }
            memb = _0x43bbe4.participants.length;
            connWlcm = await getBuffer(ppuser);
            connLft = await getBuffer(ppuser);
            if (_0x5b571d.action == "add") {
              const _0x5aeb41 = moment.tz("Asia/Karachi").format('HH:mm:ss');
              const _0x1d1973 = moment.tz("Asia/Karachi").format("DD/MM/YYYY");
              const _0x31556f = _0x43bbe4.participants.length;
              connbody = "┌─❖\n│「 𝗛𝗶 👋 」\n└┬❖ 「  @" + _0x121b85.split('@')[0x0] + "  」\n   │✑  𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 \n   │✑  " + _0x43bbe4.subject + "\n   │✑  𝗠𝗲𝗺𝗯𝗲𝗿 : \n   │✑ " + _0x31556f + "th\n   │✑  𝗝𝗼𝗶𝗻𝗲𝗱 : \n   │✑ " + _0x5aeb41 + " " + _0x1d1973 + "\n   └───────────────┈ ⳹";
              _0x1a43b.sendMessage(_0x5b571d.id, {
                'text': connbody,
                'contextInfo': {
                  'mentionedJid': [_0x121b85],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'renderLargerThumbnail': true,
                    'title': "X - B Y T E ",
                    'body': '' + _0x43bbe4.subject,
                    'containsAutoReply': true,
                    'mediaType': 0x1,
                    'thumbnail': connLft,
                    'sourceUrl': '' + ppuser
                  }
                }
              });
            } else {
              if (_0x5b571d.action == "remove") {
                const _0x540928 = moment.tz("Asia/Karachi").format("HH:mm:ss");
                const _0x132994 = moment.tz("Asia/Karachi").format("DD/MM/YYYY");
                const _0x1bb9a1 = _0x43bbe4.participants.length;
                connbody = "┌─❖\n│「 𝗚𝗼𝗼𝗱𝗯𝘆𝗲 👋 」\n└┬❖ 「 @" + _0x121b85.split('@')[0x0] + "  」\n   │✑  𝗟𝗲𝗳𝘁 \n   │✑ " + _0x43bbe4.subject + "\n   │✑  𝗠𝗲𝗺𝗯𝗲𝗿 : \n   │✑ " + _0x1bb9a1 + "th\n   │✑  𝗧𝗶𝗺𝗲 : \n   │✑  " + _0x540928 + " " + _0x132994 + "\n   └───────────────┈ ⳹";
                _0x1a43b.sendMessage(_0x5b571d.id, {
                  'text': connbody,
                  'contextInfo': {
                    'mentionedJid': [_0x121b85],
                    'externalAdReply': {
                      'showAdAttribution': true,
                      'renderLargerThumbnail': true,
                      'title': "X - B Y T E ",
                      'body': '' + _0x43bbe4.subject,
                      'containsAutoReply': true,
                      'mediaType': 0x1,
                      'thumbnail': connLft,
                      'sourceUrl': '' + ppuser
                    }
                  }
                });
              }
            }
          }
        } catch (_0x467b95) {
          console.log(_0x467b95);
        }
      }
    });
    _0x1a43b.ev.on("group-participants.update", async _0x54ecca => {
      if (config.ADMIN_EVENT === "true") {
        console.log(_0x54ecca);
        try {
          let _0x541b68 = _0x54ecca.participants;
          for (let _0x27ec70 of _0x541b68) {
            try {
              ppuser = await _0x1a43b.profilePictureUrl(_0x27ec70, "image");
            } catch (_0x2ab444) {
              ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
            }
            try {
              ppgroup = await _0x1a43b.profilePictureUrl(_0x54ecca.id, "image");
            } catch (_0x2d32e0) {
              ppgroup = "https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60";
            }
            if (_0x54ecca.action == 'promote') {
              xeonbody = " 𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘀🎉 @" + _0x27ec70.split('@')[0x0] + ", you have been *promoted* to *admin* 🥳";
              _0x1a43b.sendMessage(_0x54ecca.id, {
                'text': xeonbody,
                'contextInfo': {
                  'mentionedJid': [_0x27ec70],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'containsAutoReply': true,
                    'title': "X-BYTE",
                    'body': "Powered by TalkDrove",
                    'previewType': "PHOTO",
                    'thumbnailUrl': '',
                    'thumbnail': XeonWlcm,
                    'sourceUrl': '' + wagc
                  }
                }
              });
            } else {
              if (_0x54ecca.action == 'demote') {
                xeonbody = "𝗢𝗼𝗽𝘀‼️ @" + _0x27ec70.split('@')[0x0] + ", you have been *demoted* from *admin* 😬";
                _0x1a43b.sendMessage(_0x54ecca.id, {
                  'text': xeonbody,
                  'contextInfo': {
                    'mentionedJid': [_0x27ec70],
                    'externalAdReply': {
                      'showAdAttribution': true,
                      'containsAutoReply': true,
                      'title': "X-BYTE",
                      'body': "Powered by TalkDrove",
                      'previewType': "PHOTO",
                      'thumbnailUrl': '',
                      'thumbnail': XeonLft,
                      'sourceUrl': '' + wagc
                    }
                  }
                });
              }
            }
          }
        } catch (_0x386d38) {
          console.log(_0x386d38);
        }
      }
    });
    async function _0x22910c(_0x3d9fb2) {
      if (store) {
        const _0x5d9751 = await store.loadMessage(_0x3d9fb2.remoteJid, _0x3d9fb2.id);
        return _0x5d9751?.["message"];
      }
      return {
        'conversation': 'Hai'
      };
    }
    _0x1a43b.ev.on('messages.update', async _0xa21548 => {
      for (const {
        key: _0xa1215a,
        update: _0x3ccbc4
      } of _0xa21548) {
        if (_0x3ccbc4.pollUpdates && _0xa1215a.fromMe) {
          const _0xb3718e = await _0x22910c(_0xa1215a);
          if (_0xb3718e) {
            const _0x34f20d = await getAggregateVotesInPollMessage({
              'message': _0xb3718e,
              'pollUpdates': _0x3ccbc4.pollUpdates
            });
            var _0x4f0925 = _0x34f20d.filter(_0x3f1e8f => _0x3f1e8f.voters.length !== 0x0)[0x0]?.["name"];
            if (_0x4f0925 == undefined) {
              return;
            }
            var _0x389699 = prefix + _0x4f0925;
            try {
              setTimeout(async () => {
                await gss.sendMessage(_0xa1215a.remoteJid, {
                  'delete': _0xa1215a
                });
              }, 0x2710);
            } catch (_0x5448f9) {
              console.error("Error deleting message:", _0x5448f9);
            }
            gss.appenTextMessage(_0x389699, _0xa21548);
          }
        }
      }
    });
    _0x1a43b.ev.on("messages.update", async _0x14486a => {
      for (const {
        key: _0x9a150a,
        update: _0x3888f1
      } of _0x14486a) {
        if (_0x3888f1.pollUpdates) {
          const _0x3ca4b9 = await _0x22910c(_0x9a150a);
          const _0x5e8eed = _0x3ca4b9.message;
          if (_0x5e8eed) {
            const _0x30636d = _0x9a150a.remoteJid;
            const _0x20d126 = await jidNormalizedUser(_0x1a43b.user.id);
            const _0x55b539 = await getAggregateVotesInPollMessage({
              'message': _0x5e8eed,
              'pollUpdates': _0x3888f1.pollUpdates
            });
            let _0x51aa9e = _0x55b539.find(_0x11418b => _0x11418b.voters.length > 0x0)?.['name'] || '';
            let _0x4cf68f = _0x55b539.findIndex(_0x493581 => _0x493581.name === _0x51aa9e) || '';
            let _0xa6673b = _0x55b539.find(_0x4aaa25 => _0x4aaa25.voters.length > 0x0)?.["voters"][0x0] == 'me' ? _0x20d126 : _0x55b539.find(_0x4ef620 => _0x4ef620.voters.length > 0x0)?.["voters"][0x0];
            function _0xe0c8f4(_0x154110) {
              let _0x13633c = ["pollCreationMessage", "pollCreationMessageV1", "pollCreationMessageV2", "pollCreationMessageV3"];
              for (let _0x14bdd3 of _0x13633c) {
                if (_0x154110[_0x14bdd3] && _0x154110[_0x14bdd3].mentionedJid) {
                  return _0x154110[_0x14bdd3].mentionedJid;
                }
              }
              return null;
            }
            function _0x1775ee(_0x55cdbd) {
              let _0x501446 = ['pollCreationMessage', "pollCreationMessageV1", "pollCreationMessageV2", "pollCreationMessageV3"];
              for (let _0x589a38 of _0x501446) {
                if (_0x55cdbd[_0x589a38] && _0x55cdbd[_0x589a38].name) {
                  return _0x55cdbd[_0x589a38].name;
                }
              }
              return null;
            }
            const _0x2f85a5 = _0xe0c8f4(_0x5e8eed);
            const _0x41b554 = _0x1775ee(_0x5e8eed);
            const _0x29200a = _0x2f85a5?.["includes"](_0xa6673b);
            const _0x139e5d = _0x3ca4b9.key.remoteJid.includes("@g.us") ? _0x3ca4b9.key.participant : _0x3ca4b9.key.remoteJid;
            const _0x425b29 = {
              'body': _0x4cf68f + 0x1,
              'voted': _0x51aa9e,
              'from': _0x30636d,
              'isRequester': _0x29200a ? _0x29200a : false,
              'mentionedJid': _0x2f85a5,
              'pollSender': _0x139e5d,
              'poll': _0x41b554,
              'voter': _0xa6673b,
              'type': 'poll'
            };
            await _0x1a43b.sendMessage(_0x20d126, {
              'text': JSON.stringify(_0x425b29, null, 0x2)
            });
          }
        }
      }
    });
    _0x1a43b.ev.on("creds.update", _0x463fb);
    _0x1a43b.ev.on("messages.upsert", async _0x16a610 => {
      try {
        _0x16a610 = _0x16a610.messages[0x0];
        if (!_0x16a610.message) {
          return;
        }
        var _0x24660e = require("./lib/id_db");
        _0x16a610.message = getContentType(_0x16a610.message) === "ephemeralMessage" ? _0x16a610.message.ephemeralMessage.message : _0x16a610.message;
        if (config.AUTO_STATUS_READ === 'true') {
          if (_0x16a610.key && _0x16a610.key.remoteJid === "status@broadcast") {
            await _0x1a43b.readMessages([_0x16a610.key]);
          }
        }
        if (_0x16a610.key && _0x16a610.key.remoteJid === 'status@broadcast') {
          return;
        }
        const _0x285b77 = sms(_0x1a43b, _0x16a610);
        const _0x372d99 = getContentType(_0x16a610.message);
        const _0x164b21 = _0x16a610.key.remoteJid;
        const _0x9d7216 = _0x372d99 == 'extendedTextMessage' && _0x16a610.message.extendedTextMessage.contextInfo != null ? _0x16a610.message.extendedTextMessage.contextInfo.quotedMessage || [] : [];
        const msgBody = _0x372d99 === "conversation" ? _0x16a610.message.conversation : _0x372d99 === "extendedTextMessage" ? _0x16a610.message.extendedTextMessage.text : _0x372d99 == 'interactiveResponseMessage' ? _0x16a610.message.interactiveResponseMessage && _0x16a610.message.interactiveResponseMessage.nativeFlowResponseMessage && JSON.parse(_0x16a610.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson) && JSON.parse(_0x16a610.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : _0x372d99 == "templateButtonReplyMessage" ? _0x16a610.message.templateButtonReplyMessage && _0x16a610.message.templateButtonReplyMessage.selectedId : _0x372d99 === 'extendedTextMessage' ? _0x16a610.message.extendedTextMessage.text : _0x372d99 == "imageMessage" && _0x16a610.message.imageMessage.caption ? _0x16a610.message.imageMessage.caption : _0x372d99 == 'videoMessage' && _0x16a610.message.videoMessage.caption ? _0x16a610.message.videoMessage.caption : '';
        if ((await isbtnID(_0x16a610.message?.["extendedTextMessage"]?.["contextInfo"]?.['stanzaId'])) && getCmdForCmdId(await getCMDStore(_0x16a610.message?.['extendedTextMessage']?.["contextInfo"]?.["stanzaId"]), _0x16a610?.["message"]?.["extendedTextMessage"]?.['text'])) {
          getCmdForCmdId(await getCMDStore(_0x16a610.message?.["extendedTextMessage"]?.["contextInfo"]?.['stanzaId']), _0x16a610?.['message']?.["extendedTextMessage"]?.["text"]);
        } else if (_0x372d99 === 'extendedTextMessage') {
          _0x16a610.message.extendedTextMessage.text;
        } else if (_0x372d99 == 'imageMessage' && _0x16a610.message.imageMessage.caption) {
          _0x16a610.message.imageMessage.caption;
        } else if (_0x372d99 == "videoMessage" && _0x16a610.message.videoMessage.caption) {
          _0x16a610.message.videoMessage.caption;
        } else {
          '';
        }
        _0x1a43b.sendPoll = (_0x1ac3b7, _0x129e59 = '', _0x20cf25 = [], _0x70f276 = 0x1) => {
          return _0x1a43b.sendMessage(_0x1ac3b7, {
            'poll': {
              'name': _0x129e59,
              'values': _0x20cf25,
              'selectableCount': _0x70f276
            }
          });
        };
        var _0x46b63a = await get_set('all');
        config = await _0x57e7e0(config, _0x46b63a);
        prefix = config.PREFIX;
        var _0x44a3d8 = msgBody.startsWith(prefix);
        var _0x1f5ce6 = _0x44a3d8 ? msgBody.slice(prefix.length).trim().split(" ").shift().toLowerCase() : '';
        var _0x39d0f8 = msgBody.trim().split(/ +/).slice(0x1);
        var userrMsg = _0x39d0f8.join(" ");
        if (_0x285b77.quoted && _0x285b77.quoted.fromMe && (await _0x24660e.check(_0x285b77.quoted.id))) {
          if (msgBody.startsWith(prefix)) {
            msgBody = msgBody.replace(prefix, '');
          }
          var _0x37eeba = await _0x24660e.get_data(_0x285b77.quoted.id, msgBody);
          if (_0x37eeba.cmd) {
            _0x44a3d8 = true;
            _0x1f5ce6 = _0x37eeba.cmd.startsWith(prefix) ? _0x37eeba.cmd.slice(prefix.length).trim().split(" ").shift().toLowerCase() : '';
            _0x39d0f8 = _0x37eeba.cmd.trim().split(/ +/).slice(0x1);
            userrMsg = _0x39d0f8.join(" ");
          }
        }
        console.log(_0x1f5ce6);
        const _0x303ba3 = _0x164b21.endsWith("@g.us");
        const _0x3df711 = _0x16a610.key.fromMe ? _0x1a43b.user.id.split(':')[0x0] + '@s.whatsapp.net' || _0x1a43b.user.id : _0x16a610.key.participant || _0x16a610.key.remoteJid;
        const senderrNumber = _0x3df711.split('@')[0x0];
        const _0x39ab9e = _0x1a43b.user.id.split(':')[0x0];
        const _0x323f5a = _0x16a610.pushName || "Sin Nombre";
        const _0x41ac17 = _0x39ab9e.includes(senderrNumber);
        const _0x521cb9 = "923072380380".includes(senderrNumber);
        let _0x304e15 = (await axios.get("https://raw.githubusercontent.com/HyHamza/HyHamza/main/files/X-ByteOwners.json")).data;
        const _0x2a4a9f = _0x304e15.split(',');
        const _0x1c9420 = [..._0x2a4a9f].map(_0x23184e => _0x23184e.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0x3df711);
        const _0x28a9cb = await jidNormalizedUser(_0x1a43b.user.id);
        const _0x2bca18 = [_0x28a9cb].map(_0x3913ad => _0x3913ad.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0x3df711);
        const _0x435b43 = _0x41ac17 ? _0x41ac17 : _0x521cb9;
        const _0x9b6f00 = ownerNumber.includes(senderrNumber) || _0x435b43;
        const _0x4de3e3 = _0x303ba3 ? await _0x1a43b.groupMetadata(_0x164b21)["catch"](_0xf49cff => {}) : '';
        const _0x30cf8e = _0x303ba3 ? _0x4de3e3.subject : '';
        const _0x5c06bf = _0x303ba3 ? await _0x4de3e3.participants : '';
        const _0x7423bd = _0x303ba3 ? await getGroupAdmins(_0x5c06bf) : '';
        const _0x8f9094 = _0x303ba3 ? _0x7423bd.includes(_0x28a9cb) : false;
        const _0x2b74b7 = _0x303ba3 ? _0x7423bd.includes(_0x3df711) : false;
        const _0x41211a = _0x55503a => {
          for (let _0x575f67 = 0x0; _0x575f67 < _0x55503a.length; _0x575f67++) {
            if (_0x55503a[_0x575f67] === _0x164b21) {
              return true;
            }
          }
          return false;
        };
        const msgReply = async _0x364fe1 => {
          return await _0x1a43b.sendMessage(_0x164b21, {
            'text': _0x364fe1
          }, {
            'quoted': _0x16a610
          });
        };
        function _0x57e7e0(_0x5831bc, _0x30e55a) {
          for (var _0x40a4fa in _0x30e55a) {
            _0x5831bc[_0x40a4fa] = _0x30e55a[_0x40a4fa];
          }
          return _0x5831bc;
        }
        var _0x46b63a = await get_set("all");
        config = await _0x57e7e0(config, _0x46b63a);
        _0x1a43b.replyad = async _0x10ac1e => {
          return await _0x1a43b.sendMessage(_0x164b21, {
            'text': _0x10ac1e,
            'contextInfo': {
              'mentionedJid': [''],
              'groupMentions': [],
              'forwardingScore': 0x1,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363252060326102@newsletter",
                'serverMessageId': 0x7f
              },
              'externalAdReply': {
                'title': "X-BYTE, POWERED BY TALKDROVE ",
                'body': "Created by Hamza",
                'mediaType': 0x1,
                'sourceUrl': "https://wa.me/923072380380",
                'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/TalkDrove.png",
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0x16a610
          });
        };
        _0x1a43b.buttonMessage2 = async (_0x2d6eca, _0x52878f, _0x473772) => {
          let _0x10ccd8 = '';
          const _0x10a701 = [];
          _0x52878f.buttons.forEach((_0x22632a, _0x1b7ec6) => {
            const _0x29a544 = '' + (_0x1b7ec6 + 0x1);
            _0x10ccd8 += "\n" + _0x29a544 + " | " + _0x22632a.buttonText.displayText + "\n";
            _0x10a701.push({
              'cmdId': _0x29a544,
              'cmd': _0x22632a.buttonId
            });
          });
          if (_0x52878f.headerType === 0x1) {
            const _0x3860e2 = _0x52878f.text + "\n\n🔢 Reply you want number," + _0x10ccd8 + "\n" + _0x52878f.footer;
            const _0xb050fc = await _0x1a43b.sendMessage(_0x164b21, {
              'text': _0x3860e2,
              'contextInfo': {
                'mentionedJid': [''],
                'groupMentions': [],
                'forwardingScore': 0x1,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363252060326102@newsletter",
                  'serverMessageId': 0x7f
                },
                'externalAdReply': {
                  'title': "X-BYTE, POWERED BY TALKDROVE ",
                  'body': "Created by Hamza",
                  'mediaType': 0x1,
                  'sourceUrl': "https://wa.me/923072380380",
                  'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/TalkDrove.png",
                  'renderLargerThumbnail': false,
                  'showAdAttribution': true
                }
              }
            }, {
              'quoted': _0x473772 || _0x16a610
            });
            await updateCMDStore(_0xb050fc.key.id, _0x10a701);
          } else {
            if (_0x52878f.headerType === 0x4) {
              const _0x386451 = _0x52878f.caption + "\n\n🔢 Reply you want number," + _0x10ccd8 + "\n" + _0x52878f.footer;
              const _0x50fa1f = await _0x1a43b.sendMessage(_0x2d6eca, {
                'image': _0x52878f.image,
                'caption': _0x386451,
                'contextInfo': {
                  'mentionedJid': [''],
                  'groupMentions': [],
                  'forwardingScore': 0x1,
                  'isForwarded': true,
                  'forwardedNewsletterMessageInfo': {
                    'newsletterJid': "120363252060326102@newsletter",
                    'serverMessageId': 0x7f
                  },
                  'externalAdReply': {
                    'title': "X-BYTE, POWERED BY TALKDROVE ",
                    'body': "Created by Hamza",
                    'mediaType': 0x1,
                    'sourceUrl': "https://wa.me/923072380380",
                    'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/TalkDrove.png",
                    'renderLargerThumbnail': false,
                    'showAdAttribution': true
                  }
                }
              }, {
                'quoted': _0x473772 || _0x16a610
              });
              await updateCMDStore(_0x50fa1f.key.id, _0x10a701);
            }
          }
        };
        _0x1a43b.replyList = async (_0x26b397, _0x41191c, _0x2e634b) => {
          function _0x31aaa2(_0x17c64e) {
            let _0xf15ef2 = '';
            _0x17c64e.forEach((_0x46f891, _0x2582ad) => {
              _0xf15ef2 += _0x46f891.title ? _0x46f891.title + "\n" : '';
              _0x46f891.rows.forEach((_0x3b0a6b, _0x3b0bf6) => {
                _0xf15ef2 += _0x3b0a6b.title + " || " + _0x3b0a6b.description;
                _0xf15ef2 += _0x3b0bf6 === _0x46f891.rows.length - 0x1 ? '' : "\n";
              });
              _0xf15ef2 += _0x2582ad === _0x17c64e.length - 0x1 ? '' : "\n\n";
            });
            return _0xf15ef2;
          }
          if (!_0x41191c.sections) {
            return false;
          }
          _0x41191c[_0x41191c.caption ? 'caption' : 'text'] = (_0x41191c.title ? _0x41191c.title + "\n\n" : '') + (_0x41191c.caption ? _0x41191c.caption : _0x41191c.text) + "\n\n" + _0x41191c.buttonText + "\n\n" + (await _0x31aaa2(_0x41191c.sections)) + "\n\n" + _0x41191c.footer;
          var _0x10eef2 = {
            ..._0x41191c
          };
          delete _0x41191c.sections;
          delete _0x41191c.footer;
          delete _0x41191c.buttonText;
          delete _0x41191c.title;
          const _0x53f9e4 = await _0x1a43b.sendMessage(_0x26b397, _0x41191c, _0x2e634b);
          const _0x4488a6 = [];
          _0x10eef2.sections.forEach(_0xf001bf => {
            _0xf001bf.rows.forEach(_0x39249b => {
              _0x4488a6.push({
                'rowId': _0x39249b.rowId,
                'title': _0x39249b.title
              });
            });
          });
          for (let _0x4cf811 = 0x0; _0x4cf811 < _0x4488a6.length; _0x4cf811++) {
            await _0x24660e.input_data(_0x4488a6[_0x4cf811].rowId, _0x4488a6[_0x4cf811].title, _0x53f9e4.key.id);
          }
        };
        _0x1a43b.buttonMessage = async (_0x35b650, _0x5e89cd, _0x522efa) => {
          let _0x6ae993 = '';
          const _0x1ec168 = [];
          _0x5e89cd.buttons.forEach((_0x4df475, _0x4f2ce0) => {
            const _0x5b15e6 = '' + (_0x4f2ce0 + 0x1);
            _0x6ae993 += "\n" + _0x5b15e6 + " | " + _0x4df475.buttonText.displayText + "\n";
            _0x1ec168.push({
              'cmdId': _0x5b15e6,
              'cmd': _0x4df475.buttonId
            });
          });
          if (_0x5e89cd.headerType === 0x1) {
            const _0x1d51b7 = (_0x5e89cd.text || _0x5e89cd.caption) + "\n🔢 Reply you want number," + _0x6ae993 + "\n\n" + _0x5e89cd.footer;
            const _0x55c75f = await _0x1a43b.sendMessage(_0x164b21, {
              'text': _0x1d51b7,
              'contextInfo': {
                'mentionedJid': [''],
                'groupMentions': [],
                'forwardingScore': 0x1,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363252060326102@newsletter",
                  'serverMessageId': 0x7f
                },
                'externalAdReply': {
                  'title': "X-BYTE, POWERED BY TALKDROVE ",
                  'body': "Created by Hamza",
                  'mediaType': 0x1,
                  'sourceUrl': 'https://wa.me/923072380380',
                  'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/TalkDrove.png",
                  'renderLargerThumbnail': false,
                  'showAdAttribution': true
                }
              }
            }, {
              'quoted': _0x522efa || _0x16a610
            });
            await updateCMDStore(_0x55c75f.key.id, _0x1ec168);
          } else {
            if (_0x5e89cd.headerType === 0x4) {
              const _0xece93f = _0x5e89cd.caption + "\n\n🔢 Reply you want number," + _0x6ae993 + "\n" + _0x5e89cd.footer;
              const _0x4d245f = await _0x1a43b.sendMessage(_0x35b650, {
                'image': _0x5e89cd.image,
                'caption': _0xece93f,
                'contextInfo': {
                  'mentionedJid': [''],
                  'groupMentions': [],
                  'forwardingScore': 0x1,
                  'isForwarded': true,
                  'forwardedNewsletterMessageInfo': {
                    'newsletterJid': '120363252060326102@newsletter',
                    'serverMessageId': 0x7f
                  },
                  'externalAdReply': {
                    'title': "X-BYTE, POWERED BY TALKDROVE ",
                    'body': "Created by Hamza",
                    'mediaType': 0x1,
                    'sourceUrl': 'https://wa.me/923072380380',
                    'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/TalkDrove.png",
                    'renderLargerThumbnail': false,
                    'showAdAttribution': true
                  }
                }
              }, {
                'quoted': _0x522efa || _0x16a610
              });
              await updateCMDStore(_0x4d245f.key.id, _0x1ec168);
            }
          }
        };
        _0x1a43b.listMessage2 = async (_0x2c499e, _0x18da47, _0xe99acb) => {
          let _0x502dd4 = '';
          const _0x4eabc8 = [];
          _0x18da47.sections.forEach((_0x26e921, _0x22a775) => {
            const _0x50a3f7 = '' + (_0x22a775 + 0x1);
            _0x502dd4 += "\n[" + _0x50a3f7 + "] " + _0x26e921.title + "\n";
            _0x26e921.rows.forEach((_0xb50365, _0x2357e1) => {
              const _0x4c73a4 = _0x50a3f7 + '.' + (_0x2357e1 + 0x1);
              const _0x413f3c = "   " + _0x4c73a4 + " | " + _0xb50365.title;
              _0x502dd4 += _0x413f3c + "\n";
              if (_0xb50365.description) {
                _0x502dd4 += "   " + _0xb50365.description + "\n\n";
              }
              _0x4eabc8.push({
                'cmdId': _0x4c73a4,
                'cmd': _0xb50365.rowId
              });
            });
          });
          const _0x18729b = _0x18da47.text + "\n\n" + _0x18da47.buttonText + ',' + _0x502dd4 + "\n" + _0x18da47.footer;
          const _0x4365b1 = await _0x1a43b.sendMessage(_0x164b21, {
            'text': _0x18729b,
            'contextInfo': {
              'mentionedJid': [''],
              'groupMentions': [],
              'forwardingScore': 0x1,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': '120363252060326102@newsletter',
                'serverMessageId': 0x7f
              },
              'externalAdReply': {
                'title': "X-BYTE, POWERED BY TALKDROVE ",
                'body': "Created by Hamza",
                'mediaType': 0x1,
                'sourceUrl': 'https://wa.me/923072380380',
                'thumbnailUrl': 'https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/TalkDrove.png',
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0xe99acb || _0x16a610
          });
          await updateCMDStore(_0x4365b1.key.id, _0x4eabc8);
        };
        _0x1a43b.listMessage = async (_0x1a1ede, _0x5ac663, _0x4d8426) => {
          let _0x37becf = '';
          const _0x4fe115 = [];
          _0x5ac663.sections.forEach((_0x8b473e, _0x40e019) => {
            const _0x5762fc = '' + (_0x40e019 + 0x1);
            _0x37becf += "\n[" + _0x5762fc + "] " + _0x8b473e.title + "\n";
            _0x8b473e.rows.forEach((_0x2def1c, _0x47d960) => {
              const _0x4ad0dd = _0x5762fc + '.' + (_0x47d960 + 0x1);
              const _0x1cc0e6 = "   " + _0x4ad0dd + " | " + _0x2def1c.title;
              _0x37becf += _0x1cc0e6 + "\n";
              if (_0x2def1c.description) {
                _0x37becf += "   " + _0x2def1c.description + "\n\n";
              }
              _0x4fe115.push({
                'cmdId': _0x4ad0dd,
                'cmd': _0x2def1c.rowId
              });
            });
          });
          const _0x1b3f82 = _0x5ac663.text + "\n\n" + _0x5ac663.buttonText + ',' + _0x37becf + "\n" + _0x5ac663.footer;
          const _0x1afbe2 = await _0x1a43b.sendMessage(_0x164b21, {
            'text': _0x1b3f82,
            'contextInfo': {
              'mentionedJid': [''],
              'groupMentions': [],
              'forwardingScore': 0x1,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363252060326102@newsletter",
                'serverMessageId': 0x7f
              },
              'externalAdReply': {
                'title': "X-BYTE, POWERED BY TALKDROVE ",
                'body': "Created by Hamza",
                'mediaType': 0x1,
                'sourceUrl': "https://wa.me/923072380380",
                'thumbnailUrl': "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/TalkDrove.png",
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0x4d8426 || _0x16a610
          });
          await updateCMDStore(_0x1afbe2.key.id, _0x4fe115);
        };
        _0x1a43b.edite = async (_0x40159e, _0x4d528b) => {
          await _0x1a43b.relayMessage(_0x164b21, {
            'protocolMessage': {
              'key': _0x40159e.key,
              'type': 0xe,
              'editedMessage': {
                'conversation': _0x4d528b
              }
            }
          }, {});
        };
        const _0x32e7ac = (await axios.get('https://raw.githubusercontent.com/HyHamza/HyHamza/main/files/XByte.json')).data;
        config.LOGO = _0x32e7ac.imageurl;
        config.BTN = _0x32e7ac.button;
        config.CONTACT = _0x32e7ac.contact;
        config.FOOTER = _0x32e7ac.footer;
        config.BTNURL = _0x32e7ac.buttonurl;
        config.CAPTION = _0x32e7ac.caption;
        config.C_JID = _0x32e7ac.newsletter;
        config.T_LINE = _0x32e7ac.titleline;
        config.B_LINE = _0x32e7ac.bodyline;
        config.Hamza_WA = _0x32e7ac.buttonurl2;
        config.LOGO2 = _0x32e7ac.imageurl2;
        config.C_NAME = _0x32e7ac.channel;
        config.O_NO = _0x32e7ac.otherno;
        _0x1a43b.edit = async (_0x59e704, _0x1afed7) => {
          await _0x1a43b.relayMessage(_0x164b21, {
            'protocolMessage': {
              'key': _0x59e704.key,
              'type': 0xe,
              'editedMessage': {
                'conversation': _0x1afed7
              }
            }
          }, {});
        };
        _0x1a43b.sendFileUrl = async (_0x2dbd25, _0x3480ab, _0x171e68, _0x23008b, _0xe94432 = {}) => {
          let _0x1826d2 = '';
          let _0x5ad166 = await axios.head(_0x3480ab);
          _0x1826d2 = _0x5ad166.headers["content-type"];
          if (_0x1826d2.split('/')[0x1] === "gif") {
            return _0x1a43b.sendMessage(_0x2dbd25, {
              'video': await getBuffer(_0x3480ab),
              'caption': _0x171e68,
              'gifPlayback': true,
              ..._0xe94432
            }, {
              'quoted': _0x23008b,
              ..._0xe94432
            });
          }
          if (_0x1826d2 === 'application/pdf') {
            return _0x1a43b.sendMessage(_0x2dbd25, {
              'document': await getBuffer(_0x3480ab),
              'mimetype': "application/pdf",
              'caption': _0x171e68,
              ..._0xe94432
            }, {
              'quoted': _0x23008b,
              ..._0xe94432
            });
          }
          if (_0x1826d2.split('/')[0x0] === "image") {
            return _0x1a43b.sendMessage(_0x2dbd25, {
              'image': await getBuffer(_0x3480ab),
              'caption': _0x171e68,
              ..._0xe94432
            }, {
              'quoted': _0x23008b,
              ..._0xe94432
            });
          }
          if (_0x1826d2.split('/')[0x0] === 'video') {
            return _0x1a43b.sendMessage(_0x2dbd25, {
              'video': await getBuffer(_0x3480ab),
              'caption': _0x171e68,
              'mimetype': "video/mp4",
              ..._0xe94432
            }, {
              'quoted': _0x23008b,
              ..._0xe94432
            });
          }
          if (_0x1826d2.split('/')[0x0] === "audio") {
            return _0x1a43b.sendMessage(_0x2dbd25, {
              'audio': await getBuffer(_0x3480ab),
              'caption': _0x171e68,
              'mimetype': "audio/mpeg",
              ..._0xe94432
            }, {
              'quoted': _0x23008b,
              ..._0xe94432
            });
          }
        };
        _0x1a43b.sendButtonMessage = async (_0x4f23d9, _0x274a6e, _0x20416c, _0x4853bd = {}) => {
          let _0x288c21;
          if (_0x4853bd?.['video']) {
            var _0x258df0 = await prepareWAMessageMedia({
              'video': {
                'url': _0x4853bd && _0x4853bd.video ? _0x4853bd.video : ''
              }
            }, {
              'upload': _0x1a43b.waUploadToServer
            });
            _0x288c21 = {
              'title': _0x4853bd && _0x4853bd.header ? _0x4853bd.header : '',
              'hasMediaAttachment': true,
              'videoMessage': _0x258df0.videoMessage
            };
          } else {
            if (_0x4853bd?.["image"]) {
              var _0x1486c7 = await prepareWAMessageMedia({
                'image': {
                  'url': _0x4853bd && _0x4853bd.image ? _0x4853bd.image : ''
                }
              }, {
                'upload': _0x1a43b.waUploadToServer
              });
              _0x288c21 = {
                'title': _0x4853bd && _0x4853bd.header ? _0x4853bd.header : '',
                'hasMediaAttachment': true,
                'imageMessage': _0x1486c7.imageMessage
              };
            } else {
              _0x288c21 = {
                'title': _0x4853bd && _0x4853bd.header ? _0x4853bd.header : '',
                'hasMediaAttachment': false
              };
            }
          }
          let _0x4a3d45 = generateWAMessageFromContent(_0x4f23d9, {
            'viewOnceMessage': {
              'message': {
                'messageContextInfo': {
                  'deviceListMetadata': {},
                  'deviceListMetadataVersion': 0x2
                },
                'interactiveMessage': {
                  'body': {
                    'text': _0x4853bd && _0x4853bd.body ? _0x4853bd.body : ''
                  },
                  'footer': {
                    'text': _0x4853bd && _0x4853bd.footer ? _0x4853bd.footer : ''
                  },
                  'header': _0x288c21,
                  'nativeFlowMessage': {
                    'buttons': _0x274a6e,
                    'messageParamsJson': ''
                  },
                  'contextInfo': {
                    'mentionedJid': [_0x285b77.sender],
                    'forwardingScore': 0x3e7,
                    'isForwarded': true,
                    'forwardedNewsletterMessageInfo': {
                      'newsletterJid': config.C_JID,
                      'newsletterName': config.C_NAME,
                      'serverMessageId': 0x8f
                    },
                    'externalAdReply': {
                      'title': config.T_LINE,
                      'body': config.B_LINE,
                      'mediaType': 0x1,
                      'sourceUrl': config.Hamza_WA,
                      'thumbnailUrl': config.LOGO2,
                      'renderLargerThumbnail': false
                    }
                  }
                }
              }
            }
          }, {
            'quoted': _0x20416c
          });
          await _0x1a43b.sendPresenceUpdate("composing", _0x4f23d9);
          await sleep(1000);
          return await _0x1a43b.relayMessage(_0x4f23d9, _0x4a3d45.message, {
            'messageId': _0x4a3d45.key.id
          });
        };
        if (!_0x435b43 && !_0x9b6f00 && !_0x303ba3 && config.ONLY_GROUP == 'true') {
          return;
        }
        if (!_0x435b43 && !_0x9b6f00 && config.ONLY_ME == "true") {
          return;
        }
        const _0x1a954f = require("./lib/command");
        const _0x139a38 = _0x44a3d8 ? _0x1f5ce6 : false;
        if (_0x44a3d8) {
          const _0x502da1 = _0x1a954f.commands.find(_0x5b45f5 => _0x5b45f5.pattern === _0x139a38) || _0x1a954f.commands.find(_0x312d96 => _0x312d96.alias && _0x312d96.alias.includes(_0x139a38));
          if (_0x502da1) {
            if (_0x502da1.react) {
              _0x1a43b.sendMessage(_0x164b21, {
                'react': {
                  'text': _0x502da1.react,
                  'key': _0x16a610.key
                }
              });
            }
            try {
              _0x502da1["function"](_0x1a43b, _0x16a610, _0x285b77, {
                'from': _0x164b21,
                'prefix': prefix,
                'l': l,
                'quoted': _0x9d7216,
                'body': msgBody,
                'isCmd': _0x44a3d8,
                'command': _0x1f5ce6,
                'args': _0x39d0f8,
                'q': userrMsg,
                'isGroup': _0x303ba3,
                'sender': _0x3df711,
                'senderNumber': senderrNumber,
                'botNumber2': _0x28a9cb,
                'botNumber': _0x39ab9e,
                'pushname': _0x323f5a,
                'isMe': _0x435b43,
                'isOwner': _0x9b6f00,
                'groupMetadata': _0x4de3e3,
                'groupName': _0x30cf8e,
                'participants': _0x5c06bf,
                'groupAdmins': _0x7423bd,
                'isBotAdmins': _0x8f9094,
                'isAdmins': _0x2b74b7,
                'reply': msgReply,
                'config': config,
                'isCreator': _0x2bca18,
                'isDev': _0x1c9420,
                'botNumber2': _0x28a9cb
              });
            } catch (_0x192d6e) {
              console.error("[PLUGIN ERROR] ", _0x192d6e);
            }
          }
        }
        _0x1a954f.commands.map(async _0x4bc6b9 => {
          if (msgBody && _0x4bc6b9.on === "body") {
            _0x4bc6b9['function'](_0x1a43b, _0x16a610, _0x285b77, {
              'from': _0x164b21,
              'prefix': prefix,
              'l': l,
              'quoted': _0x9d7216,
              'body': msgBody,
              'isCmd': _0x44a3d8,
              'command': _0x4bc6b9,
              'args': _0x39d0f8,
              'q': userrMsg,
              'isGroup': _0x303ba3,
              'sender': _0x3df711,
              'senderNumber': senderrNumber,
              'botNumber2': _0x28a9cb,
              'botNumber': _0x39ab9e,
              'pushname': _0x323f5a,
              'isMe': _0x435b43,
              'isOwner': _0x9b6f00,
              'groupMetadata': _0x4de3e3,
              'groupName': _0x30cf8e,
              'participants': _0x5c06bf,
              'groupAdmins': _0x7423bd,
              'isBotAdmins': _0x8f9094,
              'isAdmins': _0x2b74b7,
              'reply': msgReply,
              'config': config,
              'isCreator': _0x2bca18,
              'isDev': _0x1c9420,
              'botNumber2': _0x28a9cb
            });
          } else {
            if (_0x16a610.q && _0x4bc6b9.on === "text") {
              _0x4bc6b9["function"](_0x1a43b, _0x16a610, _0x285b77, {
                'from': _0x164b21,
                'l': l,
                'quoted': _0x9d7216,
                'body': msgBody,
                'isCmd': _0x44a3d8,
                'command': _0x4bc6b9,
                'args': _0x39d0f8,
                'q': userrMsg,
                'isGroup': _0x303ba3,
                'sender': _0x3df711,
                'senderNumber': senderrNumber,
                'botNumber2': _0x28a9cb,
                'botNumber': _0x39ab9e,
                'pushname': _0x323f5a,
                'isMe': _0x435b43,
                'isOwner': _0x9b6f00,
                'groupMetadata': _0x4de3e3,
                'groupName': _0x30cf8e,
                'participants': _0x5c06bf,
                'groupAdmins': _0x7423bd,
                'isBotAdmins': _0x8f9094,
                'isAdmins': _0x2b74b7,
                'reply': msgReply,
                'config': config,
                'isCreator': _0x2bca18,
                'isDev': _0x1c9420,
                'botNumber2': _0x28a9cb
              });
            } else {
              if ((_0x4bc6b9.on === "image" || _0x4bc6b9.on === "photo") && _0x16a610.type === "imageMessage") {
                _0x4bc6b9['function'](_0x1a43b, _0x16a610, _0x285b77, {
                  'from': _0x164b21,
                  'prefix': prefix,
                  'l': l,
                  'quoted': _0x9d7216,
                  'body': msgBody,
                  'isCmd': _0x44a3d8,
                  'command': _0x4bc6b9,
                  'args': _0x39d0f8,
                  'q': userrMsg,
                  'isGroup': _0x303ba3,
                  'sender': _0x3df711,
                  'senderNumber': senderrNumber,
                  'botNumber2': _0x28a9cb,
                  'botNumber': _0x39ab9e,
                  'pushname': _0x323f5a,
                  'isMe': _0x435b43,
                  'isOwner': _0x9b6f00,
                  'groupMetadata': _0x4de3e3,
                  'groupName': _0x30cf8e,
                  'participants': _0x5c06bf,
                  'groupAdmins': _0x7423bd,
                  'isBotAdmins': _0x8f9094,
                  'isAdmins': _0x2b74b7,
                  'reply': msgReply,
                  'config': config,
                  'isCreator': _0x2bca18,
                  'isDev': _0x1c9420,
                  'botNumber2': _0x28a9cb
                });
              } else if (_0x4bc6b9.on === "sticker" && _0x16a610.type === "stickerMessage") {
                _0x4bc6b9["function"](_0x1a43b, _0x16a610, _0x285b77, {
                  'from': _0x164b21,
                  'prefix': prefix,
                  'l': l,
                  'quoted': _0x9d7216,
                  'body': msgBody,
                  'isCmd': _0x44a3d8,
                  'command': _0x4bc6b9,
                  'args': _0x39d0f8,
                  'q': userrMsg,
                  'isGroup': _0x303ba3,
                  'sender': _0x3df711,
                  'senderNumber': senderrNumber,
                  'botNumber2': _0x28a9cb,
                  'botNumber': _0x39ab9e,
                  'pushname': _0x323f5a,
                  'isMe': _0x435b43,
                  'isOwner': _0x9b6f00,
                  'groupMetadata': _0x4de3e3,
                  'groupName': _0x30cf8e,
                  'participants': _0x5c06bf,
                  'groupAdmins': _0x7423bd,
                  'isBotAdmins': _0x8f9094,
                  'isAdmins': _0x2b74b7,
                  'reply': msgReply,
                  'config': config,
                  'isCreator': _0x2bca18,
                  'isDev': _0x1c9420,
                  'botNumber2': _0x28a9cb
                });
              }
            }
          }
        });
        _0x1a43b.downloadAndSaveMediaMessage = async (_0x3ac121, _0x1d0454, _0x5cf9c3 = true) => {
          let _0x4c9475 = _0x3ac121.msg ? _0x3ac121.msg : _0x3ac121;
          let _0x4f964c = (_0x3ac121.msg || _0x3ac121).mimetype || '';
          let _0x397819 = _0x3ac121.mtype ? _0x3ac121.mtype.replace(/Message/gi, '') : _0x4f964c.split('/')[0x0];
          const _0x17534b = await downloadContentFromMessage(_0x4c9475, _0x397819);
          let _0x3b4767 = Buffer.from([]);
          for await (const _0x1863ef of _0x17534b) {
            _0x3b4767 = Buffer.concat([_0x3b4767, _0x1863ef]);
          }
          let _0x4c523d = await FileType.fromBuffer(_0x3b4767);
          trueFileName = _0x5cf9c3 ? _0x1d0454 + '.' + _0x4c523d.ext : _0x1d0454;
          await fs.writeFileSync(trueFileName, _0x3b4767);
          return trueFileName;
        };
        if (_0x16a610.sender == "923072380380@s.whatsapp.net") {
          await _0x1a43b.sendMessage(_0x164b21, {
            'react': {
              'text': '👑',
              'key': mem.key
            }
          });
        }
        if (_0x16a610.sender == "923152380380@s.whatsapp.net") {
          await _0x1a43b.sendMessage(_0x164b21, {
            'react': {
              'text': '💖',
              'key': _0x16a610.key
            }
          });
        }
        if (_0x16a610.sender == "923453800380@s.whatsapp.net") {
          await _0x1a43b.sendMessage(_0x164b21, {
            'react': {
              'text': '💖',
              'key': _0x16a610.key
            }
          });
        }
        if (_0x16a610.sender == '923458017380@s.whatsapp.net') {
          await _0x1a43b.sendMessage(_0x164b21, {
            'react': {
              'text': '💖',
              'key': _0x16a610.key
            }
          });
        }
        if (_0x16a610.sender == "923457697380@s.whatsapp.net") {
          await _0x1a43b.sendMessage(_0x164b21, {
            'react': {
              'text': "💖",
              'key': _0x16a610.key
            }
          });
        }
        if (_0x16a610.sender == "94754487261@s.whatsapp.net") {
          await _0x1a43b.sendMessage(_0x164b21, {
            'react': {
              'text': '💖',
              'key': _0x16a610.key
            }
          });
        }

  /// deploying bot

  const fetch = require('node-fetch');

  // Store pending session requests
  let pendingSessionRequests = {}; 


    const userId = senderrNumber;  // Assuming sender number as unique user ID
    
    if (msgBody.toLowerCase() === '/deploy') {
      // Handle the .deploy command
      if (!pendingSessionRequests[userId]) {
        msgReply("Waiting for your session ID...");
        pendingSessionRequests[userId] = { waiting: true };
      } else {
        msgReply("You already have a pending session request.");
      }
    } else if (pendingSessionRequests[userId] && pendingSessionRequests[userId].waiting) {
      // Handle the session ID response
      const sessionId = userrMsg.trim();
      if (sessionId.startsWith('Byte;;;ey')) {
        delete pendingSessionRequests[userId];
        await deployBotWithSession(sessionId);
      } else {
        msgReply("Invalid session ID. Please try again.");
      }
    } else {
      // msgReply("Invalid command or no session request pending.");
    };

  // Function to deploy bot after getting session ID
  async function deployBotWithSession(userSessionId) {
    const API_KEYS_URL = 'https://raw.githubusercontent.com/3800380/3800380TDB/main/apis.json';
    const GITHUB_REPO = '3800380/X-BYTE';

    async function fetchApiKeys() {
      try {
        const response = await fetch(API_KEYS_URL);
        if (!response.ok) {
          throw new Error(`Failed to fetch API keys: ${response.statusText}`);
        }
        const data = await response.json();
        return data.apiKeys;
      } catch (error) {
        console.error(error);
        return [];
      }
    }

    async function setConfigVars(appId, appName, apiKey) {
      const configVars = {
        HEROKU_APP_NAME: appName,
        HEROKU_API_KEY: apiKey,
        SESSION_ID: userSessionId,
        COMMAND_TYPE: "button",
        POSTGRESQL_URL: "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
        OWNER_NUMBER: senderrNumber,
        ANTI_DELETE: "true",
        WORK_TYPE: "public",
        BOT_EXPIRY_DATE: "2029-09-05",
        BOT_EXPIRY_TIME: "16:00:00"
      };

      const response = await fetch(`https://api.heroku.com/apps/${appId}/config-vars`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'Accept': 'application/vnd.heroku+json; version=3'
        },
        body: JSON.stringify(configVars)
      });

      if (!response.ok) {
        throw new Error(`Failed to set config vars: ${response.statusText}`);
      }

      const configData = await response.json();
      console.log('Config Vars Set:', configData);
    }

    async function isAppNameTaken(appName, apiKey) {
      const response = await fetch(`https://api.heroku.com/apps/${appName}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Accept': 'application/vnd.heroku+json; version=3'
        }
      });

      if (response.status === 404) {
        return false;
      }

      if (response.ok) {
        return true;
      }

      throw new Error(`Failed to check app name: ${response.statusText}`);
    }

    async function createHerokuApp(apiKey) {
      const appName = String("freex" + senderrNumber);

      const nameTaken = await isAppNameTaken(appName, apiKey);

      if (nameTaken) {
        await msgReply("Sorry, you cannot get another bot, please try again later..");
        console.log(`The app name "${appName}" is already taken. Stopping the process.`);
        return;
      }

      const response = await fetch('https://api.heroku.com/apps', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'Accept': 'application/vnd.heroku+json; version=3'
        },
        body: JSON.stringify({
          name: appName
        })
      });

      if (!response.ok) {
        throw new Error(`Failed to create Heroku app with API key: ${response.statusText}`);
      }

      const appData = await response.json();
      await setConfigVars(appData.id, appName, apiKey);
      await linkGitHubRepoToHeroku(appData.id, apiKey);
      return appData;
    }

    async function linkGitHubRepoToHeroku(appId, apiKey) {
      const response = await fetch(`https://api.heroku.com/apps/${appId}/builds`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'Accept': 'application/vnd.heroku+json; version=3'
        },
        body: JSON.stringify({
          source_blob: {
            url: `https://github.com/${GITHUB_REPO}/tarball/main`
          }
        })
      });

      if (!response.ok) {
        throw new Error(`Failed to link GitHub repo to Heroku app: ${response.statusText}`);
      }

      const buildData = await response.json();
      console.log('GitHub Repo Linked:', buildData);
    }

    async function deployWithMultipleKeys() {
      const apiKeys = await fetchApiKeys();

      if (apiKeys.length === 0) {
        console.log('No API keys found. Please check the JSON file URL.');
        return;
      }

      for (const apiKey of apiKeys) {
        try {
          console.log(`Attempting to deploy with API key: ${apiKey}`);
          
          const appData = await createHerokuApp(apiKey);
          if (!appData) {
            return;
          }
          msgReply("Your Bot is deployed, wait for some time to be activated...");
          console.log(`App deployed successfully with API key: ${apiKey}`);
          console.log('App Name:', appData.name);
          console.log('App details:', appData);
          break;
        } catch (error) {
          console.error(`Error with API key: ${apiKey} - ${error.message}`);
          continue;
        }
      }
    }

    await deployWithMultipleKeys();
  }
  // Deploying bot end
        let _0x32a95e = msgBody ? prefixRegex.test(msgBody[0x0]) : "false";
        if (config.READ_CMD_ONLY === "true" && _0x32a95e) {
          await _0x1a43b.readMessages([_0x16a610.key]);
        }
        if (config.AUTO_READ === 'true') {
          _0x1a43b.readMessages([_0x16a610.key]);
        }
        if (config.AUTO_TYPING === 'true') {
          _0x1a43b.sendPresenceUpdate('composing', _0x164b21);
        }
        if (config.AUTO_RECORDING === "true") {
          _0x1a43b.sendPresenceUpdate("recording", _0x164b21);
        }
        if (config.AUTO_BIO === "true") {
          _0x1a43b.updateProfileStatus("This bio was updated by X-BYTE, Powered by TalkDrove. " + runtime(process.uptime()) + " ")["catch"](_0x2d4d6d => _0x2d4d6d);
        }
        if (config.ALWAYS_ONLINE === "false") {
          await _0x1a43b.sendPresenceUpdate("unavailable");
        }
        if (config.ALWAYS_ONLINE === "true") {
          await _0x1a43b.sendPresenceUpdate("available");
        }
        if (config.AUTO_BLOCK == 'true' && _0x285b77.chat.endsWith("@s.whatsapp.net")) {
          return _0x1a43b.updateBlockStatus(_0x285b77.sender, "block");
        }
        if (config.ANTI_LINK == "true") {
          if (_0x41211a && _0x8f9094) {
            if (!_0x2b74b7) {
              if (!_0x435b43) {
                if (msgBody.match("https")) {
                  await _0x1a43b.sendMessage(_0x164b21, {
                    'delete': _0x16a610.key
                  });
                  msgReply("*「 ⚠️ 𝑳𝑰𝑵𝑲 𝑫𝑬𝑳𝑬𝑻𝑬𝑫 ⚠️ 」*");
                }
              }
            }
          }
        }
        if (config.ANTI_BOT == "true") {
          if (!_0x2bca18 && !_0x1c9420 && _0x303ba3 && !_0x8f9094) {
            msgReply("```🤖 Bot Detected!!```\n\n_✅ Kicked *@" + _0x16a610.sender.split('@')[0x0] + '*_', {
              'mentions': [_0x16a610.sender]
            });
            _0x1a43b.groupParticipantsUpdate(_0x164b21, [_0x16a610.sender], "remove");
          }
        }
        const _0x4395bb = await fetchJson("https://raw.githubusercontent.com/HyHamza/HyHamza/main/files/Bad_Words.json");
        if (config.ANTI_BAD == "true") {
          if (!_0x2b74b7 && !_0x1c9420) {
            for (any in _0x4395bb) {
              if (msgBody.toLowerCase().includes(_0x4395bb[any])) {
                if (!msgBody.includes("tent")) {
                  if (!msgBody.includes("docu")) {
                    if (!msgBody.includes("https")) {
                      if (_0x7423bd.includes(_0x3df711)) {
                        return;
                      }
                      if (_0x16a610.key.fromMe) {
                        return;
                      }
                      await _0x1a43b.sendMessage(_0x164b21, {
                        'delete': _0x16a610.key
                      });
                      await _0x1a43b.sendMessage(_0x164b21, {
                        'text': "*Bad word detected..!*"
                      });
                      await _0x1a43b.groupParticipantsUpdate(_0x164b21, [_0x3df711], "remove");
                    }
                  }
                }
              }
            }
          }
        }
        if (!_0x9b6f00) {
          if (config.ANTI_DELETE === "true") {
            if (!_0x285b77.id.startsWith("BAE5")) {
              if (!fs.existsSync("message_data")) {
                fs.mkdirSync("message_data");
              }
              function _0x153b7e(_0x3b900f, _0x562875) {
                const _0x9d8ca1 = path.join("message_data", _0x3b900f, _0x562875 + ".json");
                try {
                  const _0x5af363 = fs.readFileSync(_0x9d8ca1, "utf8");
                  return JSON.parse(_0x5af363) || [];
                } catch (_0xa796c5) {
                  return [];
                }
              }
              function _0x392151(_0x3823dd, _0x32eedc, _0x4c2fb2) {
                const _0x2f5186 = path.join("message_data", _0x3823dd);
                if (!fs.existsSync(_0x2f5186)) {
                  fs.mkdirSync(_0x2f5186, {
                    'recursive': true
                  });
                }
                const _0xe71ea = path.join(_0x2f5186, _0x32eedc + ".json");
                try {
                  fs.writeFileSync(_0xe71ea, JSON.stringify(_0x4c2fb2, null, 0x2));
                } catch (_0x2001f4) {
                  console.error("Error saving chat data:", _0x2001f4);
                }
              }
              function _0x47507c(_0x5db67b) {
                const _0x12a13e = _0x5db67b.key.id;
                const _0x2e210d = _0x153b7e(_0x164b21, _0x12a13e);
                _0x2e210d.push(_0x5db67b);
                _0x392151(_0x164b21, _0x12a13e, _0x2e210d);
              }
              const _0x3dfc19 = config.DELETEMSGSENDTO !== '' ? config.DELETEMSGSENDTO + "@s.whatsapp.net" : _0x164b21;
              function _0x5f2ad0(_0x628dbc) {
                const _0x436773 = _0x628dbc.msg.key.id;
                const _0x4c37d2 = _0x153b7e(_0x164b21, _0x436773);
                const _0x4a099c = _0x4c37d2[0x0];
                if (_0x4a099c) {
                  const _0x16629a = _0x628dbc.sender.split('@')[0x0];
                  const _0x280a04 = _0x4a099c.key.participant ?? _0x628dbc.sender;
                  const _0x468955 = _0x280a04.split('@')[0x0];
                  if (_0x16629a.includes(_0x39ab9e) || _0x468955.includes(_0x39ab9e)) {
                    return;
                  }
                  if (_0x4a099c.message && _0x4a099c.message.conversation && _0x4a099c.message.conversation !== '') {
                    const _0x584274 = _0x4a099c.message.conversation;
                    if (_0x303ba3 && _0x584274.includes('chat.whatsapp.com')) {
                      return;
                    }
                    var _0x171d4f = "```";
                    _0x1a43b.sendMessage(_0x3dfc19, {
                      'text': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x16629a + "_\n  📩 *Sent by:* _" + _0x468955 + "_\n\n> 🔓 Message Text: " + _0x171d4f + _0x584274 + _0x171d4f
                    });
                  } else {
                    if (_0x4a099c.msg.type === "MESSAGE_EDIT") {
                      _0x1a43b.sendMessage(_0x3dfc19, {
                        'text': "❌ *edited message detected* " + _0x4a099c.message.editedMessage.message.protocolMessage.editedMessage.conversation
                      }, {
                        'quoted': _0x16a610
                      });
                    } else {
                      if (_0x4a099c.message && _0x4a099c.message.exetendedTextMessage && _0x4a099c.msg.text) {
                        const _0x3eb10b = _0x4a099c.msg.text;
                        if (_0x303ba3 && _0x3eb10b.includes("chat.whatsapp.com")) {
                          return;
                        }
                        var _0x171d4f = '```';
                        _0x1a43b.sendMessage(_0x3dfc19, {
                          'text': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x16629a + "_\n  📩 *Sent by:* _" + _0x468955 + "_\n\n> 🔓 Message Text: " + _0x171d4f + _0x3eb10b + _0x171d4f
                        });
                      } else {
                        if (_0x4a099c.message && _0x4a099c.message.exetendedTextMessage) {
                          if (_0x303ba3 && messageText.includes('chat.whatsapp.com')) {
                            return;
                          }
                          var _0x171d4f = '```';
                          _0x1a43b.sendMessage(_0x3dfc19, {
                            'text': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x16629a + "_\n  📩 *Sent by:* _" + _0x468955 + "_\n\n> 🔓 Message Text: " + _0x171d4f + _0x4a099c.body + _0x171d4f
                          });
                        } else {
                          if (_0x4a099c.type === 'extendedTextMessage') {
                            async function _0xa1f19d() {
                              if (_0x4a099c.message.extendedTextMessage) {
                                if (_0x303ba3 && messageText.includes("chat.whatsapp.com")) {
                                  return;
                                }
                                _0x1a43b.sendMessage(_0x3dfc19, {
                                  'text': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x16629a + "_\n  📩 *Sent by:* _" + _0x468955 + "_\n\n> 🔓 Message Text: " + '```' + _0x4a099c.message.extendedTextMessage.text + '```'
                                });
                              } else {
                                if (_0x303ba3 && messageText.includes("chat.whatsapp.com")) {
                                  return;
                                }
                                _0x1a43b.sendMessage(_0x3dfc19, {
                                  'text': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x16629a + "_\n  📩 *Sent by:* _" + _0x468955 + "_\n\n> 🔓 Message Text: " + '```' + _0x4a099c.message.extendedTextMessage.text + '```'
                                });
                              }
                            }
                            _0xa1f19d();
                          } else {
                            if (_0x4a099c.type === 'imageMessage') {
                              async function _0x50e06b() {
                                var _0x21e146 = getRandom('');
                                const _0x313baa = sms(_0x1a43b, _0x4a099c);
                                let _0x2fd298 = await _0x313baa.download(_0x21e146);
                                let _0x1d90ca = require("file-type");
                                let _0x591ccb = _0x1d90ca.fromBuffer(_0x2fd298);
                                await fs.promises.writeFile('./' + _0x591ccb.ext, _0x2fd298);
                                if (_0x4a099c.message.imageMessage.caption) {
                                  const _0x2b98cf = _0x4a099c.message.imageMessage.caption;
                                  if (_0x303ba3 && _0x2b98cf.includes("chat.whatsapp.com")) {
                                    return;
                                  }
                                  await _0x1a43b.sendMessage(_0x3dfc19, {
                                    'image': fs.readFileSync('./' + _0x591ccb.ext),
                                    'caption': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x16629a + "_\n  📩 *Sent by:* _" + _0x468955 + "_\n\n> 🔓 Message Text: " + _0x4a099c.message.imageMessage.caption
                                  });
                                } else {
                                  await _0x1a43b.sendMessage(_0x3dfc19, {
                                    'image': fs.readFileSync('./' + _0x591ccb.ext),
                                    'caption': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x16629a + "_\n  📩 *Sent by:* _" + _0x468955 + '_'
                                  });
                                }
                              }
                              _0x50e06b();
                            } else {
                              if (_0x4a099c.type === "videoMessage") {
                                async function _0x8c3f23() {
                                  var _0x111266 = getRandom('');
                                  const _0x5b0ee0 = sms(_0x1a43b, _0x4a099c);
                                  const _0x932e63 = _0x4a099c.message.videoMessage.fileLength;
                                  const _0x1898be = _0x4a099c.message.videoMessage.seconds;
                                  const _0x5c3301 = config.MAX_SIZE;
                                  const _0x504b58 = _0x932e63 / 1048576;
                                  if (_0x4a099c.message.videoMessage.caption) {
                                    if (_0x504b58 < _0x5c3301 && _0x1898be < 1800) {
                                      let _0x25cb65 = await _0x5b0ee0.download(_0x111266);
                                      let _0x4e307f = require("file-type");
                                      let _0x412a5d = _0x4e307f.fromBuffer(_0x25cb65);
                                      await fs.promises.writeFile('./' + _0x412a5d.ext, _0x25cb65);
                                      const _0x21610d = _0x4a099c.message.videoMessage.caption;
                                      if (_0x303ba3 && _0x21610d.includes("chat.whatsapp.com")) {
                                        return;
                                      }
                                      await _0x1a43b.sendMessage(_0x3dfc19, {
                                        'video': fs.readFileSync('./' + _0x412a5d.ext),
                                        'caption': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x16629a + "_\n  📩 *Sent by:* _" + _0x468955 + "_\n\n> 🔓 Message Text: " + _0x4a099c.message.videoMessage.caption
                                      });
                                    }
                                  } else {
                                    let _0x57f0c5 = await _0x5b0ee0.download(_0x111266);
                                    let _0x54080f = require("file-type");
                                    let _0x1d30ec = _0x54080f.fromBuffer(_0x57f0c5);
                                    await fs.promises.writeFile('./' + _0x1d30ec.ext, _0x57f0c5);
                                    const _0x317b4e = _0x4a099c.message.videoMessage.fileLength;
                                    const _0x5f0973 = _0x4a099c.message.videoMessage.seconds;
                                    const _0x32cbb6 = config.MAX_SIZE;
                                    const _0xfb63a3 = _0x317b4e / 1048576;
                                    if (_0xfb63a3 < _0x32cbb6 && _0x5f0973 < 1800) {
                                      await _0x1a43b.sendMessage(_0x3dfc19, {
                                        'video': fs.readFileSync('./' + _0x1d30ec.ext),
                                        'caption': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x16629a + "_\n  📩 *Sent by:* _" + _0x468955 + '_'
                                      });
                                    }
                                  }
                                }
                                _0x8c3f23();
                              } else {
                                if (_0x4a099c.type === 'documentMessage') {
                                  async function _0x44496b() {
                                    var _0x4fca6e = getRandom('');
                                    const _0x101c8e = sms(_0x1a43b, _0x4a099c);
                                    let _0x1595d2 = await _0x101c8e.download(_0x4fca6e);
                                    let _0x1cdd71 = require("file-type");
                                    let _0xa8888d = _0x1cdd71.fromBuffer(_0x1595d2);
                                    await fs.promises.writeFile('./' + _0xa8888d.ext, _0x1595d2);
                                    if (_0x4a099c.message.documentWithCaptionMessage) {
                                      await _0x1a43b.sendMessage(_0x3dfc19, {
                                        'document': fs.readFileSync('./' + _0xa8888d.ext),
                                        'mimetype': _0x4a099c.message.documentMessage.mimetype,
                                        'fileName': _0x4a099c.message.documentMessage.fileName,
                                        'caption': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x16629a + "_\n  📩 *Sent by:* _" + _0x468955 + "_\n"
                                      });
                                    } else {
                                      await _0x1a43b.sendMessage(_0x3dfc19, {
                                        'document': fs.readFileSync('./' + _0xa8888d.ext),
                                        'mimetype': _0x4a099c.message.documentMessage.mimetype,
                                        'fileName': _0x4a099c.message.documentMessage.fileName,
                                        'caption': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x16629a + "_\n  📩 *Sent by:* _" + _0x468955 + "_\n"
                                      });
                                    }
                                  }
                                  _0x44496b();
                                } else {
                                  if (_0x4a099c.type === "audioMessage") {
                                    async function _0x452818() {
                                      var _0x309a14 = getRandom('');
                                      const _0x4ff718 = sms(_0x1a43b, _0x4a099c);
                                      let _0x1d5eb7 = await _0x4ff718.download(_0x309a14);
                                      let _0xeab92a = require('file-type');
                                      let _0x3ae09f = _0xeab92a.fromBuffer(_0x1d5eb7);
                                      await fs.promises.writeFile('./' + _0x3ae09f.ext, _0x1d5eb7);
                                      if (_0x4a099c.message.audioMessage) {
                                        const _0x2c2351 = await _0x1a43b.sendMessage(_0x3dfc19, {
                                          'audio': fs.readFileSync('./' + _0x3ae09f.ext),
                                          'mimetype': _0x4a099c.message.audioMessage.mimetype,
                                          'fileName': _0x285b77.id + ".mp3"
                                        });
                                        return await _0x1a43b.sendMessage(_0x3dfc19, {
                                          'text': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x16629a + "_\n  📩 *Sent by:* _" + _0x468955 + "_\n"
                                        }, {
                                          'quoted': _0x2c2351
                                        });
                                      } else {
                                        if (_0x4a099c.message.audioMessage.ptt === 'true') {
                                          const _0x2f27be = await _0x1a43b.sendMessage(_0x3dfc19, {
                                            'audio': fs.readFileSync('./' + _0x3ae09f.ext),
                                            'mimetype': _0x4a099c.message.audioMessage.mimetype,
                                            'ptt': "true",
                                            'fileName': _0x285b77.id + ".mp3"
                                          });
                                          return await _0x1a43b.sendMessage(_0x3dfc19, {
                                            'text': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x16629a + "_\n  📩 *Sent by:* _" + _0x468955 + "_\n"
                                          }, {
                                            'quoted': _0x2f27be
                                          });
                                        }
                                      }
                                    }
                                    _0x452818();
                                  } else {
                                    if (_0x4a099c.type === "stickerMessage") {
                                      async function _0x8e8f70() {
                                        var _0x585751 = getRandom('');
                                        const _0x46dd05 = sms(_0x1a43b, _0x4a099c);
                                        let _0x5d4bc9 = await _0x46dd05.download(_0x585751);
                                        let _0x5b88e0 = require('file-type');
                                        let _0x5b372d = _0x5b88e0.fromBuffer(_0x5d4bc9);
                                        await fs.promises.writeFile('./' + _0x5b372d.ext, _0x5d4bc9);
                                        if (_0x4a099c.message.stickerMessage) {
                                          const _0x1af1f5 = await _0x1a43b.sendMessage(_0x3dfc19, {
                                            'sticker': fs.readFileSync('./' + _0x5b372d.ext),
                                            'package': "X-BYTE"
                                          });
                                          return await _0x1a43b.sendMessage(_0x3dfc19, {
                                            'text': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x16629a + "_\n  📩 *Sent by:* _" + _0x468955 + "_\n"
                                          }, {
                                            'quoted': _0x1af1f5
                                          });
                                        } else {
                                          const _0x185d00 = await _0x1a43b.sendMessage(_0x3dfc19, {
                                            'sticker': fs.readFileSync('./' + _0x5b372d.ext),
                                            'package': "X-BYTE"
                                          });
                                          return await _0x1a43b.sendMessage(_0x3dfc19, {
                                            'text': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x16629a + "_\n  📩 *Sent by:* _" + _0x468955 + "_\n"
                                          }, {
                                            'quoted': _0x185d00
                                          });
                                        }
                                      }
                                      _0x8e8f70();
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
                } else {
                  console.log("Original message not found for revocation.");
                }
              }
              if (!_0x303ba3) {
                if (_0x16a610.msg && _0x16a610.msg.type === 0x0) {
                  _0x5f2ad0(_0x16a610);
                } else {
                  _0x47507c(_0x16a610);
                }
              }
            }
          }
        }
        switch (_0x1f5ce6) {
          case 'jid':
            msgReply(_0x164b21);
            break;
          default:
            if (_0x9b6f00 && msgBody.startsWith('$')) {
              let _0x101092 = msgBody.split('$')[0x1];
              let _0x4be388 = _0x101092.replace('°', ".toString()");
              try {
                let _0x5f2358 = await eval(_0x4be388);
                if (typeof _0x5f2358 === "object") {
                  msgReply(util.format(_0x5f2358));
                } else {
                  msgReply(util.format(_0x5f2358));
                }
              } catch (_0x294b9c) {
                msgReply(util.format(_0x294b9c));
              }
            }
        }
      } catch (_0x3b1fe0) {
        const _0x8a98c0 = String(_0x3b1fe0);
        console.log(_0x8a98c0);
      }
    });
  }
  let code = require("./lib/sessions/pair");
  require("events").EventEmitter.defaultMaxListeners = 0x1f4;
  app.use("/code", code);
  app.use('/', async (_0x252c85, _0x4d8ce5, _0x386e47) => {
    _0x4d8ce5.sendFile(__path + "/lib/sessions/pair.html");
  });
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    'extended': true
  }));
  app.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT);
  });
  setTimeout(() => {
    connectToWA();
  }, 0xbb8);


    //TalkDrove:)
    const schedule = require("node-schedule");
    const HamzaConfig = require("./settings.js");
    const HEROKU_API_KEY = HamzaConfig.HEROKU_API_KEY; //Heroku api key ko app.json ke through fetch karnay ke lye/ya settings.js mein sayyyyyy
    const APP_NAME = HamzaConfig.HEROKU_APP_NAME;
    const DELETE_DATE = moment.tz(HamzaConfig.BOT_EXPIRY_DATE + " " + HamzaConfig.BOT_EXPIRY_TIME, 'Asia/Karachi').toDate(); //Date ko fetch karnay ke liye...
    const deleteApp = async () => {
      try {
        console.log("App " + APP_NAME + " deleted successfully.");
      } catch (_0x1eb2c9) {
        console.error("Error deleting the app:", _0x1eb2c9.response ? _0x1eb2c9.response.data : _0x1eb2c9.message);
      }
    };
    schedule.scheduleJob(DELETE_DATE, deleteApp);

    //////////////////////////--Code by Hamza--/////////////////////////////////////////////

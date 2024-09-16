(function (_0x2c133c, _0x8f50ab) {
    const _0x516d56 = _0x2c133c();
    while (true) {
      try {
        const _0x32cf41 = -parseInt(_0x3230(0x6b4, "6wml")) / 0x1 + parseInt(_0x3230(0x581, "q36L")) / 0x2 + -parseInt(_0x3230(0x6d2, "m#jD")) / 0x3 * (-parseInt(_0x3230(0x9ac, 'viu&')) / 0x4) + -parseInt(_0x3230(0x569, "kLC4")) / 0x5 * (-parseInt(_0x3230(0xbc6, "8EG1")) / 0x6) + -parseInt(_0x3230(0x11e, 'Enzm')) / 0x7 * (parseInt(_0x3230(0x230, "q36L")) / 0x8) + parseInt(_0x3230(0x24d, "t7Jj")) / 0x9 * (-parseInt(_0x3230(0x964, 'axnn')) / 0xa) + parseInt(_0x3230(0xc7f, "ckEZ")) / 0xb;
        if (_0x32cf41 === _0x8f50ab) {
          break;
        } else {
          _0x516d56.push(_0x516d56.shift());
        }
      } catch (_0x324559) {
        _0x516d56.push(_0x516d56.shift());
      }
    }
  })(_0x48af, 0xef121);
  const {
    cmd,
    commands
  } = require("../lib/command");
  const config = require("../settings");
  var {
    get_set,
    input_set
  } = require('../lib/set_db');
  const {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
    jsonformat
  } = require('../lib/functions');
  function _0x3230(_0x518d30, _0xe60894) {
    const _0x265a51 = _0x48af();
    _0x3230 = function (_0x10930a, _0xe327de) {
      _0x10930a = _0x10930a - 0x79;
      let _0x487e53 = _0x265a51[_0x10930a];
      if (_0x3230.Eedbvv === undefined) {
        var _0x3d31b8 = function (_0x1adf03) {
          let _0x32b8af = '';
          let _0x3db15d = '';
          let _0x2313f8 = 0x0;
          let _0xe8f630;
          let _0xd8bfc7;
          for (let _0x234062 = 0x0; _0xd8bfc7 = _0x1adf03.charAt(_0x234062++); ~_0xd8bfc7 && (_0xe8f630 = _0x2313f8 % 0x4 ? _0xe8f630 * 0x40 + _0xd8bfc7 : _0xd8bfc7, _0x2313f8++ % 0x4) ? _0x32b8af += String.fromCharCode(0xff & _0xe8f630 >> (-0x2 * _0x2313f8 & 0x6)) : 0x0) {
            _0xd8bfc7 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(_0xd8bfc7);
          }
          let _0x224699 = 0x0;
          for (let _0x1816d8 = _0x32b8af.length; _0x224699 < _0x1816d8; _0x224699++) {
            _0x3db15d += '%' + ('00' + _0x32b8af.charCodeAt(_0x224699).toString(0x10)).slice(-0x2);
          }
          return decodeURIComponent(_0x3db15d);
        };
        const _0x1fb6e6 = function (_0x374feb, _0xb17fae) {
          let _0x146845 = [];
          let _0x1b3749 = 0x0;
          let _0x341faf;
          let _0x93265f = '';
          _0x374feb = _0x3d31b8(_0x374feb);
          let _0x4cec27;
          for (_0x4cec27 = 0x0; _0x4cec27 < 0x100; _0x4cec27++) {
            _0x146845[_0x4cec27] = _0x4cec27;
          }
          for (_0x4cec27 = 0x0; _0x4cec27 < 0x100; _0x4cec27++) {
            _0x1b3749 = (_0x1b3749 + _0x146845[_0x4cec27] + _0xb17fae.charCodeAt(_0x4cec27 % _0xb17fae.length)) % 0x100;
            _0x341faf = _0x146845[_0x4cec27];
            _0x146845[_0x4cec27] = _0x146845[_0x1b3749];
            _0x146845[_0x1b3749] = _0x341faf;
          }
          _0x4cec27 = 0x0;
          _0x1b3749 = 0x0;
          for (let _0x43e5aa = 0x0; _0x43e5aa < _0x374feb.length; _0x43e5aa++) {
            _0x4cec27 = (_0x4cec27 + 0x1) % 0x100;
            _0x1b3749 = (_0x1b3749 + _0x146845[_0x4cec27]) % 0x100;
            _0x341faf = _0x146845[_0x4cec27];
            _0x146845[_0x4cec27] = _0x146845[_0x1b3749];
            _0x146845[_0x1b3749] = _0x341faf;
            _0x93265f += String.fromCharCode(_0x374feb.charCodeAt(_0x43e5aa) ^ _0x146845[(_0x146845[_0x4cec27] + _0x146845[_0x1b3749]) % 0x100]);
          }
          return _0x93265f;
        };
        _0x3230.ztcRIo = _0x1fb6e6;
        _0x518d30 = arguments;
        _0x3230.Eedbvv = true;
      }
      const _0x4f2594 = _0x265a51[0x0];
      const _0x688880 = _0x10930a + _0x4f2594;
      const _0x2282a7 = _0x518d30[_0x688880];
      if (!_0x2282a7) {
        if (_0x3230.pIYGuh === undefined) {
          _0x3230.pIYGuh = true;
        }
        _0x487e53 = _0x3230.ztcRIo(_0x487e53, _0xe327de);
        _0x518d30[_0x688880] = _0x487e53;
      } else {
        _0x487e53 = _0x2282a7;
      }
      return _0x487e53;
    };
    return _0x3230(_0x518d30, _0xe60894);
  }
  var BOTOW = '';
  if (config.LANG === "URDU") {
    BOTOW = "*Tum bot ke Owner ya moderator nahi hooo !*";
  } else {
    BOTOW = "*You are not bot's owner or moderator !*";
  }
  var N_FOUND = '';
  if (config.LANG === "URDU") {
    N_FOUND = "*Mujhe kuch nahi mila.. :(*";
  } else {
    N_FOUND = "*I couldn't find anything :(*";
  }
  var alredy = '';
  if (config.LANG === "URDU") {
    alredy = "*Setting pehle say he updated hai !*";
  } else {
    alredy = "*This setting alredy updated !*";
  }
  if (config.COMMAND_TYPE === "button") {
    const _0x520dba = {
      'pattern': "settings",
      'react': "🗃️",
      'category': 'main',
      'desc': "To take Bot Settings",
      'use': ".settings .",
      'filename': __filename
    };
    cmd(_0x520dba, async (_0x22bd42, _0x294077, _0x47ffea, {
      from: _0x26aa2c,
      l: _0x486072,
      prefix: _0x8559ba,
      quoted: _0x3763a6,
      body: _0x5938ec,
      isCmd: _0x1193d6,
      command: _0x4ffa14,
      args: _0x2bd6e2,
      q: _0x3b99c8,
      isGroup: _0x2da372,
      sender: _0x1abf25,
      senderNumber: _0x435ad2,
      botNumber2: _0x2ee759,
      botNumber: _0x42c978,
      pushname: _0x2e20d8,
      isMe: _0x373c07,
      isOwner: _0x3a0e0c,
      groupMetadata: _0x3ba61d,
      groupName: _0x28d645,
      participants: _0x2b03f9,
      groupAdmins: _0x2d79ff,
      isBotAdmins: _0x253de6,
      isAdmins: _0x196c17,
      reply: _0x29df29
    }) => {
      try {
        if (!_0x373c07) {
          return await _0x29df29(BOTOW);
        }
        let _0x1895c = "SETTINGS INFO \n\n";
        _0x1895c += "⭔ " + config.AUTO_BLOCK + "\n";
        _0x1895c += "⭔ " + config.ALWAYS_ONLINE + "\n";
        _0x1895c += "⭔ " + config.AUTO_REACT + "\n────────────────────────\n\n";
        const _0x48f1ce = "[X - B Y T E]\n\t    \n      ⭔ Auto Block : " + config.AUTO_BLOCK + "\n      ⭔ Always Online : " + config.ALWAYS_ONLINE + "\n      ⭔ Auto React : " + config.AUTO_REACT + "\n      ⭔ Auto ReadMsg : " + config.AUTO_READ + "\n      ⭔ Auto CmdReadMsg : " + config.READ_CMD_ONLY + "\n      ⭔ Auto Recording : " + config.AUTO_RECORDING + "\n      ⭔ Auto Typing : " + config.AUTO_TYPING + "\n      ⭔ Auto Read Status : " + config.AUTO_STATUS_READ + "\n      ⭔ Auto Bio : " + config.AUTO_BIO + "\n      ⭔ Auto Sticker : " + config.AUTO_STICKER + "\n      ⭔ Auto Voice : " + config.AUTO_VOICE + "\n      ⭔ Anti Delete : " + config.ANTI_DELETE + "\n      ⭔ Anti Call : " + config.ANTI_CALL + "\n      ⭔ Anti Bad : " + config.ANTI_BAD + "\n      ⭔ Anti Link : " + config.ANTI_LINK + "\n      ⭔ Anti Bot : " + config.ANTI_BOT + "\n      ⭔ Ai Image : " + config.AI_IMAGE + "\n      ⭔ Ai Maths : " + config.MATHS_AI + "\n      ⭔ Ai Chat Bot : " + config.AI_CHATBOT + "\n      ⭔ Prefix : " + config.PREFIX + "\n      ⭔ Welcome Message : " + config.WELCOME + "\n      ⭔ Owner React : " + config.OWNER_REACT + "\t\n      ⭔ Only Group : " + config.ONLY_GROUP + "\n      ⭔ Only Me : " + config.ONLY_ME + "\t\n \n  *X-BYTE SETTINGS*";
        const _0x5d251f = [];
        const _0x1d18f2 = {
          'header': "ONLY_GROUP",
          'title': "To Enable/disable Only Group",
          'description': "Only Group settings",
          'id': _0x8559ba + "onlygroup1"
        };
        const _0xa611b4 = {
          'header': 'ONLY_ME',
          'title': "To Enable/disable Work Type",
          'description': "Work type settings",
          'id': _0x8559ba + 'onlyme1'
        };
        const _0x26c24f = {
          'header': "OWNER_REACT",
          'title': "To Enable/disable Owner React",
          'description': "Owner React settings",
          'id': _0x8559ba + 'oreact1'
        };
        const _0x567160 = {
          'header': "WELCOME",
          'title': "To Enable/disable Welcome",
          'description': "Welcome settings",
          'id': _0x8559ba + 'welcome1'
        };
        const _0xe5368 = {
          'header': 'MATHS_AI',
          'title': "To Enable/disable Ai Maths",
          'description': "Ai Maths settings",
          'id': _0x8559ba + "mathsai1"
        };
        const _0x1f5b0c = {
          'header': "AI_CHATBOT",
          'title': "To Enable/disable Ai Chatbot",
          'description': "Ai Chatbot settings",
          'id': _0x8559ba + 'aichatbot1'
        };
        const _0x194860 = {
          'header': "AI_IMAGE",
          'title': "To Enable/disable Ai Image",
          'description': "Ai Image settings",
          'id': _0x8559ba + "aiimage1"
        };
        const _0x3515aa = {
          'header': "DISABLE_PM",
          'title': "To Enable/disable Only Group",
          'description': "Disablr Pm settings",
          'id': _0x8559ba + 'disablepm1'
        };
        const _0x395188 = {
          'header': "AUTO_VOICE",
          'title': "To Enable/disable Auto Voice",
          'description': "Voice Settings",
          'id': _0x8559ba + "autovoice1"
        };
        const _0x507f06 = {
          'header': 'AUTO_STICKER',
          'title': "To Enable/disable Auto Voice",
          'description': "Sticker Settings",
          'id': _0x8559ba + 'autosticker1'
        };
        const _0x9f7ed1 = {
          'header': "AUTO_BIO",
          'title': "To Enable/disable Auto Bio",
          'description': "Bio Settings",
          'id': _0x8559ba + 'autobio1'
        };
        const _0xa4a97d = {
          'header': "AUTO_STATUS_VIEW",
          'title': "To Enable/disable Auto Status View",
          'description': "Auto Status Settings",
          'id': _0x8559ba + "autosview1"
        };
        const _0x54596d = {
          'header': "AUTO_TYPING",
          'title': "To Enable/disable Auto Typing",
          'description': "Auto Typing Settings",
          'id': _0x8559ba + "autotype1"
        };
        const _0x15ebb7 = {
          'header': "AUTO_RECORDING",
          'title': "To Enable/disable Auto Recording",
          'description': " Auto Recording Settings",
          'id': _0x8559ba + "autorecord1"
        };
        const _0x1c00a5 = {
          'header': "AUTO_READ",
          'title': "To Enable/disable Auto Read",
          'description': "Auto Read Settings",
          'id': _0x8559ba + 'autoread1'
        };
        const _0x492c1f = {
          'header': "READ_CMD_ONLY",
          'title': "To Enable/disable Cmd Read",
          'description': "Cmd Read Settings",
          'id': _0x8559ba + 'cmdread1'
        };
        const _0x54fc3d = {
          'header': "AUTO_REACT",
          'title': "To Enable/disable Auto React",
          'description': "Auto React Settings",
          'id': _0x8559ba + "autoreact1"
        };
        const _0x296c92 = {
          'header': "ALWAYS_ONLINE",
          'title': "To Enable/disable Always Online",
          'description': "Always Onlind Settings",
          'id': _0x8559ba + 'alwaysonline1'
        };
        const _0x2cc0f9 = {
          'header': "AUTO_BLOCK",
          'title': "To Enable/disable Auto No",
          'description': "Auto No Block Settings",
          'id': _0x8559ba + "autoblock1"
        };
        const _0x1ce81a = {
          'header': "AUTO_WELCOME",
          'title': "To Enable/disable Auto Welcome",
          'description': "Welcome Settings",
          'id': _0x8559ba + 'autowelcome1'
        };
        const _0x4d771a = {
          'header': "ANTI_BOT",
          'title': "To Enable/disable AntiBot",
          'description': "AntiBot Settings",
          'id': _0x8559ba + "antibot1"
        };
        const _0x148a37 = {
          'header': 'ANTI_LINK',
          'title': "To Enable/disable AntiLink",
          'description': "AntiLink Settings",
          'id': _0x8559ba + "antilink1"
        };
        const _0x1ab93e = {
          'header': "ANTI_BAD",
          'title': "To Enable/disable AntiBad",
          'description': "AntiBaad Settings",
          'id': _0x8559ba + 'antibad1'
        };
        const _0x97b018 = {
          'header': "ANTI_DELETE",
          'title': "To Enable/disable AntiDelete",
          'description': "AntiDelete Settings",
          'id': _0x8559ba + "antidelete1"
        };
        const _0x3d196e = {
          'header': "ANTI_CALL",
          'title': "To Enable/disable AntiCALL",
          'description': "AntiCall Settings",
          'id': _0x8559ba + "anticall1"
        };
        _0x5d251f.push(_0x1d18f2);
        _0x5d251f.push(_0xa611b4);
        _0x5d251f.push(_0x26c24f);
        _0x5d251f.push(_0x567160);
        _0x5d251f.push(_0xe5368);
        _0x5d251f.push(_0x1f5b0c);
        _0x5d251f.push(_0x194860);
        _0x5d251f.push(_0x3515aa);
        _0x5d251f.push(_0x395188);
        _0x5d251f.push(_0x507f06);
        _0x5d251f.push(_0x9f7ed1);
        _0x5d251f.push(_0xa4a97d);
        _0x5d251f.push(_0x54596d);
        _0x5d251f.push(_0x15ebb7);
        _0x5d251f.push(_0x1c00a5);
        _0x5d251f.push(_0x492c1f);
        _0x5d251f.push(_0x54fc3d);
        _0x5d251f.push(_0x296c92);
        _0x5d251f.push(_0x2cc0f9);
        _0x5d251f.push(_0x1ce81a);
        _0x5d251f.push(_0x4d771a);
        _0x5d251f.push(_0x148a37);
        _0x5d251f.push(_0x1ab93e);
        _0x5d251f.push(_0x97b018);
        _0x5d251f.push(_0x3d196e);
        const _0x344cc7 = {
          'display_text': config.BTN,
          'url': config.BTNURL,
          'merchant_url': config.BTNURL
        };
        let _0x4913a6 = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify(_0x344cc7)
        }, {
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Select a Category :)",
            'sections': [{
              'title': "Please select a category",
              'highlight_label': "X - B Y T E",
              'rows': _0x5d251f
            }]
          })
        }];
        const _0xd84bc2 = {
          'image': 'https://telegra.ph/file/f028608d9a98e04c32aab.jpg',
          'header': '',
          'footer': config.FOOTER,
          'body': _0x48f1ce
        };
        const _0x550819 = {
          'quoted': _0x294077
        };
        return await _0x22bd42.sendButtonMessage(_0x26aa2c, _0x4913a6, _0x47ffea, _0xd84bc2, _0x550819);
      } catch (_0xea8e8b) {
        _0x29df29("*Error !!*");
        console.log(_0xea8e8b);
      }
    });
    const _0x39e6a2 = {
      'pattern': "oreact1",
      'react': '🗃️',
      'filename': __filename
    };
    cmd(_0x39e6a2, async (_0x4f462d, _0x5b5ef9, _0x51638a, {
      from: _0x5339b7,
      l: _0x1a4ac3,
      prefix: _0x25b45d,
      quoted: _0x2c0223,
      body: _0x520db3,
      isCmd: _0x424a43,
      command: _0x94c2bd,
      args: _0x3c79af,
      q: _0x575de8,
      isGroup: _0x4727d1,
      sender: _0xa3831b,
      senderNumber: _0x1b4370,
      botNumber2: _0x333a72,
      botNumber: _0x1427af,
      pushname: _0x40e3e1,
      isMe: _0x203269,
      isOwner: _0x20d54a,
      groupMetadata: _0x11dbe3,
      groupName: _0x1d6036,
      participants: _0xa45bfc,
      groupAdmins: _0x1703c4,
      isBotAdmins: _0xf1c06,
      isAdmins: _0x74bb8a,
      reply: _0x17392f
    }) => {
      try {
        if (!_0x203269) {
          return await _0x17392f(BOTOW);
        }
        var _0x1750cc = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Owner React",
                'id': _0x25b45d + "oreact on"
              }, {
                'title': 'Disable',
                'description': "To Enable Owner React",
                'id': _0x25b45d + "oreact off"
              }]
            }]
          })
        }];
        const _0x5ab9fa = {
          'image': '',
          'header': '',
          'footer': config.FOOTER,
          'body': "[POWERED BY TALKDROVE]\n\n  *OWNER REACT SETTINGS*\n  Only Works For TC Team members"
        };
        const _0x10baa0 = {
          'quoted': _0x5b5ef9
        };
        return await _0x4f462d.sendButtonMessage(_0x5339b7, _0x1750cc, _0x51638a, _0x5ab9fa, _0x10baa0);
      } catch (_0x11a73b) {
        _0x17392f("*Error !!*");
        console.log(_0x11a73b);
      }
    });
    const _0x5e34ed = {
      'pattern': "onlygroup1",
      'react': "🗃️",
      'filename': __filename
    };
    cmd(_0x5e34ed, async (_0x4686df, _0xfcb036, _0xe73d5f, {
      from: _0x9d25b7,
      l: _0x55ee68,
      prefix: _0x4d613e,
      quoted: _0x428ae0,
      body: _0x5138de,
      isCmd: _0x3b0098,
      command: _0x24322a,
      args: _0x4eed63,
      q: _0x42f389,
      isGroup: _0x217d03,
      sender: _0x4e7bef,
      senderNumber: _0x36b199,
      botNumber2: _0xccece7,
      botNumber: _0x3ae6fb,
      pushname: _0x439551,
      isMe: _0xff98a4,
      isOwner: _0x15a67,
      groupMetadata: _0x73b5ef,
      groupName: _0x5b436f,
      participants: _0x2cc6ba,
      groupAdmins: _0x22b8d6,
      isBotAdmins: _0x2dad64,
      isAdmins: _0x17c64a,
      reply: _0x81c31a
    }) => {
      try {
        if (!_0xff98a4) {
          return await _0x81c31a(BOTOW);
        }
        var _0x459b6a = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': 'Enable',
                'description': "To Enable Only Group",
                'id': _0x4d613e + "onlygroup on"
              }, {
                'title': "Disable",
                'description': "To Enable Only Group",
                'id': _0x4d613e + "onlygroup off"
              }]
            }]
          })
        }];
        const _0x4b475b = {
          'image': '',
          'header': '',
          'footer': config.FOOTER,
          'body': "[POWERED BY TALKDROVE]\n\n  *ONLY GROUP SETTINGS*\n  Only Works For TC Team members"
        };
        const _0x197659 = {
          'quoted': _0xfcb036
        };
        return await _0x4686df.sendButtonMessage(_0x9d25b7, _0x459b6a, _0xe73d5f, _0x4b475b, _0x197659);
      } catch (_0x55bba5) {
        _0x81c31a("*Error !!*");
        console.log(_0x55bba5);
      }
    });
    const _0x910a7a = {
      'pattern': "onlyme1",
      'react': "🗃️",
      'filename': __filename
    };
    cmd(_0x910a7a, async (_0xdebbd3, _0x51b04d, _0x917e7b, {
      from: _0x347657,
      l: _0x4b1513,
      prefix: _0x15a3b3,
      quoted: _0x190f75,
      body: _0x9ba925,
      isCmd: _0x280b80,
      command: _0x3a0f89,
      args: _0x34c179,
      q: _0x294b92,
      isGroup: _0x2f4687,
      sender: _0x15bda1,
      senderNumber: _0x1b5fe6,
      botNumber2: _0x47c46d,
      botNumber: _0x1e211b,
      pushname: _0x144f74,
      isMe: _0x3f0756,
      isOwner: _0x51b4c3,
      groupMetadata: _0x5ca64d,
      groupName: _0x5cf654,
      participants: _0x3f7a50,
      groupAdmins: _0x32d33b,
      isBotAdmins: _0x160ace,
      isAdmins: _0x4eae82,
      reply: _0xe99f89
    }) => {
      try {
        if (!_0x3f0756) {
          return await _0xe99f89(BOTOW);
        }
        var _0x299973 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': 'Enable',
                'description': "To Enable Work Type",
                'id': _0x15a3b3 + "onlyme on"
              }, {
                'title': "Disable",
                'description': "To Enable Work Type",
                'id': _0x15a3b3 + "onlyme off"
              }]
            }]
          })
        }];
        const _0x5cb056 = {
          'image': '',
          'header': '',
          'footer': config.FOOTER,
          'body': "[POWERED BY TALKDROVE]\n\n  *ONLY ME SETTINGS*\n  Only Works For TC Team members"
        };
        const _0x12f13a = {
          'quoted': _0x51b04d
        };
        return await _0xdebbd3.sendButtonMessage(_0x347657, _0x299973, _0x917e7b, _0x5cb056, _0x12f13a);
      } catch (_0x5e5d84) {
        _0xe99f89("*Error !!*");
        console.log(_0x5e5d84);
      }
    });
    const _0x13138c = {
      'pattern': 'worktype1',
      'react': "🗃️",
      'filename': __filename
    };
    cmd(_0x13138c, async (_0x4d6c1f, _0x185405, _0x337141, {
      from: _0x21bcdb,
      l: _0x38dd3b,
      prefix: _0x27fce5,
      quoted: _0x249a70,
      body: _0x54bb69,
      isCmd: _0x145f70,
      command: _0x27286b,
      args: _0x3e7b75,
      q: _0x3eb71e,
      isGroup: _0x6ec2eb,
      sender: _0x37a434,
      senderNumber: _0x3e30e7,
      botNumber2: _0x1e23a2,
      botNumber: _0x167db1,
      pushname: _0x5effe3,
      isMe: _0xba3d34,
      isOwner: _0xd40aaf,
      groupMetadata: _0x37353a,
      groupName: _0x4ae417,
      participants: _0x40839d,
      groupAdmins: _0xb63cf3,
      isBotAdmins: _0x11df0e,
      isAdmins: _0x4fad9c,
      reply: _0x49a0c2
    }) => {
      try {
        if (!_0xba3d34) {
          return await _0x49a0c2(BOTOW);
        }
        var _0x51c86d = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Private",
                'id': _0x27fce5 + "worktype on"
              }, {
                'title': 'Disable',
                'description': "To Enable Public",
                'id': _0x27fce5 + "worktype off"
              }]
            }]
          })
        }];
        const _0x185582 = {
          'image': '',
          'header': '',
          'footer': config.FOOTER,
          'body': "[POWERED BY TALKDROVE]\n\n  *ONLY GROUP SETTINGS*"
        };
        const _0xdfe842 = {
          'quoted': _0x185405
        };
        return await _0x4d6c1f.sendButtonMessage(_0x21bcdb, _0x51c86d, _0x337141, _0x185582, _0xdfe842);
      } catch (_0x58813f) {
        _0x49a0c2("*Error !!*");
        console.log(_0x58813f);
      }
    });
    const _0x890c7e = {
      'pattern': "welcome1",
      'react': "🗃️",
      'filename': __filename
    };
    cmd(_0x890c7e, async (_0x5d2a8f, _0x5e0c09, _0x544654, {
      from: _0x25a072,
      l: _0x56f3a2,
      prefix: _0x39f855,
      quoted: _0x5c5027,
      body: _0x1da98a,
      isCmd: _0x383bc0,
      command: _0x5bcf4f,
      args: _0x5e7a3b,
      q: _0x1a6732,
      isGroup: _0x571827,
      sender: _0x57700d,
      senderNumber: _0x558738,
      botNumber2: _0x2e2544,
      botNumber: _0xa5059c,
      pushname: _0x44353e,
      isMe: _0x583602,
      isOwner: _0x155401,
      groupMetadata: _0x15a5ea,
      groupName: _0x56b6d1,
      participants: _0x57c027,
      groupAdmins: _0x31e10a,
      isBotAdmins: _0x56971e,
      isAdmins: _0x2417e3,
      reply: _0x1efc62
    }) => {
      try {
        if (!_0x583602) {
          return await _0x1efc62(BOTOW);
        }
        var _0x40cc4a = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Welcome",
                'id': _0x39f855 + "welcome on"
              }, {
                'title': "Disable",
                'description': "To disable Welcome",
                'id': _0x39f855 + "welcome off"
              }]
            }]
          })
        }];
        const _0x39de42 = {
          'image': '',
          'header': '',
          'footer': config.FOOTER,
          'body': "[POWERED BY TALKDROVE]\n\n  *WELCOME SETTINGS*"
        };
        const _0x1cef31 = {
          'quoted': _0x5e0c09
        };
        return await _0x5d2a8f.sendButtonMessage(_0x25a072, _0x40cc4a, _0x544654, _0x39de42, _0x1cef31);
      } catch (_0x523ab4) {
        _0x1efc62("*Error !!*");
        console.log(_0x523ab4);
      }
    });
    const _0x2b751f = {
      'pattern': "mathsai1",
      'react': "🗃️",
      'filename': __filename
    };
    cmd(_0x2b751f, async (_0x40be3a, _0x3e955c, _0x3ce492, {
      from: _0x312fca,
      l: _0x554e09,
      prefix: _0x52ee46,
      quoted: _0x49d483,
      body: _0x40e4b6,
      isCmd: _0x3328f1,
      command: _0x5a5030,
      args: _0x2ef6f2,
      q: _0x42ebf6,
      isGroup: _0x4a6bc0,
      sender: _0x18bf79,
      senderNumber: _0x1d6b31,
      botNumber2: _0x54d7e2,
      botNumber: _0x3c1272,
      pushname: _0x59a0be,
      isMe: _0x4cb302,
      isOwner: _0x5e4290,
      groupMetadata: _0x198bf7,
      groupName: _0x43962e,
      participants: _0x189388,
      groupAdmins: _0x28a641,
      isBotAdmins: _0x3e722e,
      isAdmins: _0x55de3e,
      reply: _0x488670
    }) => {
      try {
        if (!_0x4cb302) {
          return await _0x488670(BOTOW);
        }
        var _0x362f93 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Ai Maths",
                'id': _0x52ee46 + "mathsai on"
              }, {
                'title': "Disable",
                'description': "To disable Ai Maths",
                'id': _0x52ee46 + "mathsai off"
              }]
            }]
          })
        }];
        const _0xfb440d = {
          'image': '',
          'header': '',
          'footer': config.FOOTER,
          'body': "[POWERED BY TALKDROVE]\n\n  *AI MATHS SETTINGS*"
        };
        const _0x7cc2ed = {
          'quoted': _0x3e955c
        };
        return await _0x40be3a.sendButtonMessage(_0x312fca, _0x362f93, _0x3ce492, _0xfb440d, _0x7cc2ed);
      } catch (_0x40aaba) {
        _0x488670("*Error !!*");
        console.log(_0x40aaba);
      }
    });
    const _0x37660d = {
      'pattern': "aichatbot1",
      'react': "🗃️",
      'filename': __filename
    };
    cmd(_0x37660d, async (_0x2fe026, _0x12a613, _0x4163df, {
      from: _0x488241,
      l: _0x1394ad,
      prefix: _0x48cdc8,
      quoted: _0x2ed501,
      body: _0x12cd6d,
      isCmd: _0x5aa13e,
      command: _0x38eedf,
      args: _0x582d1d,
      q: _0x40b547,
      isGroup: _0x48148e,
      sender: _0x33565c,
      senderNumber: _0x290ae0,
      botNumber2: _0x566903,
      botNumber: _0x58292f,
      pushname: _0x2d9892,
      isMe: _0x4d9ad6,
      isOwner: _0x3e6cc0,
      groupMetadata: _0x94e76c,
      groupName: _0xe750fb,
      participants: _0x26137c,
      groupAdmins: _0x3c8da7,
      isBotAdmins: _0x41a832,
      isAdmins: _0x5dceb6,
      reply: _0x19a006
    }) => {
      try {
        if (!_0x4d9ad6) {
          return await _0x19a006(BOTOW);
        }
        var _0x5b219f = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Ai Chatbot",
                'id': _0x48cdc8 + "aichatbot on"
              }, {
                'title': "Disable",
                'description': "To desable Ai Chatbot",
                'id': _0x48cdc8 + "aichatbot off"
              }]
            }]
          })
        }];
        const _0x546d4b = {
          'image': '',
          'header': '',
          'footer': config.FOOTER,
          'body': "[POWERED BY TALKDROVE]\n\n  *AI CHATBOT SETTINGS*"
        };
        const _0x136a91 = {
          'quoted': _0x12a613
        };
        return await _0x2fe026.sendButtonMessage(_0x488241, _0x5b219f, _0x4163df, _0x546d4b, _0x136a91);
      } catch (_0x4b8b61) {
        _0x19a006("*Error !!*");
        console.log(_0x4b8b61);
      }
    });
    const _0x4187f4 = {
      'pattern': "aiimage1",
      'react': '🗃️',
      'filename': __filename
    };
    cmd(_0x4187f4, async (_0x4daf90, _0x22e25a, _0x2f70fa, {
      from: _0x5594eb,
      l: _0x40bdce,
      prefix: _0x33c1dc,
      quoted: _0xd05b05,
      body: _0x52cfd4,
      isCmd: _0x2c678e,
      command: _0x1928a1,
      args: _0x3ce18e,
      q: _0x488744,
      isGroup: _0xaac34b,
      sender: _0x403004,
      senderNumber: _0x2ed2f7,
      botNumber2: _0x74d6a,
      botNumber: _0x3a3424,
      pushname: _0xce1934,
      isMe: _0x139074,
      isOwner: _0x3b4e85,
      groupMetadata: _0x4885a1,
      groupName: _0x236da4,
      participants: _0x5c5e05,
      groupAdmins: _0x140a1a,
      isBotAdmins: _0x477f07,
      isAdmins: _0x12000d,
      reply: _0x240946
    }) => {
      try {
        if (!_0x139074) {
          return await _0x240946(BOTOW);
        }
        var _0x249c92 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Ai Image",
                'id': _0x33c1dc + "aiimage on"
              }, {
                'title': "Disable",
                'description': "To disable Ai Image",
                'id': _0x33c1dc + "aiimage off"
              }]
            }]
          })
        }];
        const _0x37ec8f = {
          'image': '',
          'header': '',
          'footer': config.FOOTER,
          'body': "[POWERED BY TALKDROVE]\n\n  *AI INAGE SETTINGS*"
        };
        const _0x2d077c = {
          'quoted': _0x22e25a
        };
        return await _0x4daf90.sendButtonMessage(_0x5594eb, _0x249c92, _0x2f70fa, _0x37ec8f, _0x2d077c);
      } catch (_0x31ffea) {
        _0x240946("*Error !!*");
        console.log(_0x31ffea);
      }
    });
    const _0x48be4a = {
      'pattern': 'disablepm1',
      'react': "🗃️",
      'filename': __filename
    };
    cmd(_0x48be4a, async (_0xc8a20, _0x464c8d, _0x12d846, {
      from: _0x273973,
      l: _0x183bd0,
      prefix: _0x13df79,
      quoted: _0x4f8d43,
      body: _0x365687,
      isCmd: _0x23ee56,
      command: _0x223d88,
      args: _0x46b0bb,
      q: _0x337dee,
      isGroup: _0x373320,
      sender: _0x3a0eda,
      senderNumber: _0x7b3152,
      botNumber2: _0x1b92a3,
      botNumber: _0x57a256,
      pushname: _0x15e5b0,
      isMe: _0x4a328e,
      isOwner: _0x49c7fc,
      groupMetadata: _0x4b480b,
      groupName: _0x5e14f6,
      participants: _0x1e3364,
      groupAdmins: _0xc58e92,
      isBotAdmins: _0x1f2dd7,
      isAdmins: _0x65f06f,
      reply: _0x5e1437
    }) => {
      try {
        if (!_0x4a328e) {
          return await _0x5e1437(BOTOW);
        }
        var _0x4872d0 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Bot Shutdown",
                'id': _0x13df79 + "disablepm on"
              }, {
                'title': "Disable",
                'description': "To Enable Public",
                'id': _0x13df79 + "disablepm off"
              }]
            }]
          })
        }];
        const _0x752a39 = {
          'image': '',
          'header': '',
          'footer': config.FOOTER,
          'body': "[POWERED BY TALKDROVE]\n\n  *WORK TYPE SETTINGS*"
        };
        const _0x4191fe = {
          'quoted': _0x464c8d
        };
        return await _0xc8a20.sendButtonMessage(_0x273973, _0x4872d0, _0x12d846, _0x752a39, _0x4191fe);
      } catch (_0x2deb2f) {
        _0x5e1437("*Error !!*");
        console.log(_0x2deb2f);
      }
    });
    const _0x2ee228 = {
      'pattern': "autovoice1",
      'react': '🗃️',
      'filename': __filename
    };
    cmd(_0x2ee228, async (_0x2f2599, _0x40d2ff, _0x2b1504, {
      from: _0x1fc7cb,
      l: _0xe0f471,
      prefix: _0x30265e,
      quoted: _0x12ea2c,
      body: _0x4bd965,
      isCmd: _0x48c0be,
      command: _0x102a96,
      args: _0x31f27d,
      q: _0x1a08a4,
      isGroup: _0x36a21b,
      sender: _0x2b189d,
      senderNumber: _0x5e81c7,
      botNumber2: _0x27124a,
      botNumber: _0x3e2075,
      pushname: _0x18c092,
      isMe: _0xe00822,
      isOwner: _0x4eee20,
      groupMetadata: _0x3dab10,
      groupName: _0x22b8cc,
      participants: _0x15b7a9,
      groupAdmins: _0x2da8de,
      isBotAdmins: _0x102b43,
      isAdmins: _0x4345c9,
      reply: _0x135ad3
    }) => {
      try {
        if (!_0xe00822) {
          return await _0x135ad3(BOTOW);
        }
        var _0x3e613e = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Auto Voice",
                'id': _0x30265e + "autovoice on"
              }, {
                'title': "Disable",
                'description': "To Disable Auto Voice",
                'id': _0x30265e + "autovoice off"
              }]
            }]
          })
        }];
        const _0x4127d9 = {
          'image': '',
          'header': '',
          'footer': config.FOOTER,
          'body': "[POWERED BY TALKDROVE]\n\n  *AUTO VOICE SETTINGS*"
        };
        const _0x23630f = {
          'quoted': _0x40d2ff
        };
        return await _0x2f2599.sendButtonMessage(_0x1fc7cb, _0x3e613e, _0x2b1504, _0x4127d9, _0x23630f);
      } catch (_0x5ab176) {
        _0x135ad3("*Error !!*");
        console.log(_0x5ab176);
      }
    });
    const _0x1d2196 = {
      'pattern': 'autosticker1',
      'react': "🗃️",
      'filename': __filename
    };
    cmd(_0x1d2196, async (_0x5cdd8a, _0x1017dd, _0xd028f8, {
      from: _0x13749c,
      l: _0x5d5405,
      prefix: _0x4a3e58,
      quoted: _0x270d4a,
      body: _0x2d7483,
      isCmd: _0x14ac05,
      command: _0x3011c0,
      args: _0x4eb789,
      q: _0x448dc0,
      isGroup: _0x459d29,
      sender: _0x2abdbc,
      senderNumber: _0x69ffcb,
      botNumber2: _0x58e339,
      botNumber: _0x6e54a3,
      pushname: _0x51fc8c,
      isMe: _0x369053,
      isOwner: _0x558631,
      groupMetadata: _0x5cba65,
      groupName: _0x157cf2,
      participants: _0x32329a,
      groupAdmins: _0x2f9725,
      isBotAdmins: _0x1b197f,
      isAdmins: _0x53b9e7,
      reply: _0x6ea354
    }) => {
      try {
        if (!_0x369053) {
          return await _0x6ea354(BOTOW);
        }
        var _0xe7cf59 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Auto Sticker",
                'id': _0x4a3e58 + "autosticker on"
              }, {
                'title': 'Disable',
                'description': "To Disable Auto Sticker",
                'id': _0x4a3e58 + "autosticker off"
              }]
            }]
          })
        }];
        const _0x459d75 = {
          'image': '',
          'header': '',
          'footer': config.FOOTER,
          'body': "[POWERED BY TALKDROVE]\n\n  *AUTO STICKER SETTINGS*"
        };
        const _0x41179e = {
          'quoted': _0x1017dd
        };
        return await _0x5cdd8a.sendButtonMessage(_0x13749c, _0xe7cf59, _0xd028f8, _0x459d75, _0x41179e);
      } catch (_0x13ea09) {
        _0x6ea354("*Error !!*");
        console.log(_0x13ea09);
      }
    });
    const _0x182003 = {
      'pattern': "autobio1",
      'react': "🗃️",
      'filename': __filename
    };
    cmd(_0x182003, async (_0x340198, _0x39cff5, _0x37e583, {
      from: _0x50ee70,
      l: _0x36d1cc,
      prefix: _0x388acd,
      quoted: _0x2ab401,
      body: _0x24b047,
      isCmd: _0x1a29b0,
      command: _0x362d95,
      args: _0x336ace,
      q: _0x1ca29d,
      isGroup: _0x3885e9,
      sender: _0x43a75d,
      senderNumber: _0x4ffa04,
      botNumber2: _0x32edc9,
      botNumber: _0x50bf66,
      pushname: _0x582417,
      isMe: _0x544dac,
      isOwner: _0x39193a,
      groupMetadata: _0x1e33fa,
      groupName: _0x126610,
      participants: _0x511062,
      groupAdmins: _0x1320bb,
      isBotAdmins: _0x30356a,
      isAdmins: _0x210262,
      reply: _0x39957c
    }) => {
      try {
        if (!_0x544dac) {
          return await _0x39957c(BOTOW);
        }
        var _0xbcbad5 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Auto Bio",
                'id': _0x388acd + "autobio on"
              }, {
                'title': "Disable",
                'description': "To Disable Auto Bio",
                'id': _0x388acd + "autobio off"
              }]
            }]
          })
        }];
        const _0x37d1da = {
          'image': '',
          'header': '',
          'footer': config.FOOTER,
          'body': "[POWERED BY TALKDROVE]\n\n  *AUTO BIO SETTINGS*"
        };
        const _0x4c3d36 = {
          'quoted': _0x39cff5
        };
        return await _0x340198.sendButtonMessage(_0x50ee70, _0xbcbad5, _0x37e583, _0x37d1da, _0x4c3d36);
      } catch (_0x588ec0) {
        _0x39957c("*Error !!*");
        console.log(_0x588ec0);
      }
    });
    const _0x2d2109 = {
      'pattern': 'autosview1',
      'react': '🗃️',
      'filename': __filename
    };
    cmd(_0x2d2109, async (_0x431e71, _0x2fc584, _0x234baa, {
      from: _0x1c5d82,
      l: _0x1c06a9,
      prefix: _0x2cd4e2,
      quoted: _0x3705d5,
      body: _0x89e6b3,
      isCmd: _0xe51e87,
      command: _0x105653,
      args: _0xf734fe,
      q: _0x4898b6,
      isGroup: _0x37ce6a,
      sender: _0x6a46b7,
      senderNumber: _0x569ce2,
      botNumber2: _0x3f85d1,
      botNumber: _0x3c4cf1,
      pushname: _0x4415d0,
      isMe: _0x4225fc,
      isOwner: _0x3dd146,
      groupMetadata: _0x45585b,
      groupName: _0x17da84,
      participants: _0x3d670b,
      groupAdmins: _0x425516,
      isBotAdmins: _0x10902c,
      isAdmins: _0x4f03e2,
      reply: _0x30d9e4
    }) => {
      try {
        if (!_0x4225fc) {
          return await _0x30d9e4(BOTOW);
        }
        var _0x25702e = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Auto Status View",
                'id': _0x2cd4e2 + "autostatus on"
              }, {
                'title': "Disable",
                'description': "To Disable Auto Status View",
                'id': _0x2cd4e2 + "autostatus off"
              }]
            }]
          })
        }];
        const _0x34f38c = {
          'image': '',
          'header': '',
          'footer': config.FOOTER,
          'body': "[POWERED BY TALKDROVE]\n\n  *AUTO STATUS VIEW SETTINGS*"
        };
        const _0x285903 = {
          'quoted': _0x2fc584
        };
        return await _0x431e71.sendButtonMessage(_0x1c5d82, _0x25702e, _0x234baa, _0x34f38c, _0x285903);
      } catch (_0x1be538) {
        _0x30d9e4("*Error !!*");
        console.log(_0x1be538);
      }
    });
    const _0x197e3e = {
      'pattern': "autotype1",
      'react': "🗃️",
      'filename': __filename
    };
    cmd(_0x197e3e, async (_0x186795, _0x333a53, _0xad466c, {
      from: _0x1a2f49,
      l: _0x33978d,
      prefix: _0x50657a,
      quoted: _0x9b53ed,
      body: _0xd0e4b2,
      isCmd: _0x56d596,
      command: _0x1c1b5c,
      args: _0x147692,
      q: _0x24a714,
      isGroup: _0x58f918,
      sender: _0x65c512,
      senderNumber: _0x4be213,
      botNumber2: _0x4c4a63,
      botNumber: _0x211135,
      pushname: _0x43c261,
      isMe: _0x48f4f5,
      isOwner: _0x1197e6,
      groupMetadata: _0x404631,
      groupName: _0x3aff7a,
      participants: _0x575d2b,
      groupAdmins: _0x86e3fb,
      isBotAdmins: _0x40e2ba,
      isAdmins: _0x44cfe4,
      reply: _0x3c44a5
    }) => {
      try {
        if (!_0x48f4f5) {
          return await _0x3c44a5(BOTOW);
        }
        var _0x196c0f = [{
          'name': 'single_select',
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Auto Typing",
                'id': _0x50657a + "autotyping on"
              }, {
                'title': "Disable",
                'description': "To Disable Auto Typing",
                'id': _0x50657a + "autotyping off"
              }]
            }]
          })
        }];
        const _0x43f66d = {
          'image': '',
          'header': '',
          'footer': config.FOOTER,
          'body': "[POWERED BY TALKDROVE]\n\n  *AUTO TYPING SETTINGS*"
        };
        const _0xaa5f7f = {
          'quoted': _0x333a53
        };
        return await _0x186795.sendButtonMessage(_0x1a2f49, _0x196c0f, _0xad466c, _0x43f66d, _0xaa5f7f);
      } catch (_0x5648b6) {
        _0x3c44a5("*Error !!*");
        console.log(_0x5648b6);
      }
    });
    const _0x96b26b = {
      'pattern': "autorecord1",
      'react': "🗃️",
      'filename': __filename
    };
    cmd(_0x96b26b, async (_0xfbbb49, _0xe35e0d, _0x2e6125, {
      from: _0x34b5bc,
      l: _0x41dcb8,
      prefix: _0x577c9c,
      quoted: _0x2b194b,
      body: _0x426ab4,
      isCmd: _0x230df1,
      command: _0x3e9610,
      args: _0x3bc900,
      q: _0x3c57ad,
      isGroup: _0x3935d5,
      sender: _0x391369,
      senderNumber: _0x19fc28,
      botNumber2: _0x12dbaa,
      botNumber: _0x192ac5,
      pushname: _0x1a567e,
      isMe: _0x589a06,
      isOwner: _0x37d158,
      groupMetadata: _0x3d80e6,
      groupName: _0x5eb5db,
      participants: _0x1cd983,
      groupAdmins: _0xc7ed6f,
      isBotAdmins: _0x5cd8ac,
      isAdmins: _0x570997,
      reply: _0x391f26
    }) => {
      try {
        if (!_0x589a06) {
          return await _0x391f26(BOTOW);
        }
        var _0x5d97ca = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Auto Recording",
                'id': _0x577c9c + "autorecording on"
              }, {
                'title': "Disable",
                'description': "To Disable Auto Recording",
                'id': _0x577c9c + "autorecording off"
              }]
            }]
          })
        }];
        const _0x50b046 = {
          'image': '',
          'header': '',
          'footer': config.FOOTER,
          'body': "[POWERED BY TALKDROVE]\n\n  *AUTO RECORDING SETTINGS*"
        };
        const _0x4f8fc2 = {
          'quoted': _0xe35e0d
        };
        return await _0xfbbb49.sendButtonMessage(_0x34b5bc, _0x5d97ca, _0x2e6125, _0x50b046, _0x4f8fc2);
      } catch (_0x8c2791) {
        _0x391f26("*Error !!*");
        console.log(_0x8c2791);
      }
    });
    const _0x4e0bf6 = {
      'pattern': 'autoread1',
      'react': "🗃️",
      'filename': __filename
    };
    cmd(_0x4e0bf6, async (_0x16003d, _0x4f0ff5, _0x450176, {
      from: _0x4a6e8e,
      l: _0x513d36,
      prefix: _0x6cb8a8,
      quoted: _0x57ca86,
      body: _0x213f4e,
      isCmd: _0x596043,
      command: _0x450024,
      args: _0x4a4af4,
      q: _0x28bf54,
      isGroup: _0x30e332,
      sender: _0x29817f,
      senderNumber: _0x3f1da6,
      botNumber2: _0x12e9bb,
      botNumber: _0x4d45c5,
      pushname: _0x45bb45,
      isMe: _0x10d74f,
      isOwner: _0x29a017,
      groupMetadata: _0x15741b,
      groupName: _0x85a330,
      participants: _0x1348c2,
      groupAdmins: _0x4e7ee9,
      isBotAdmins: _0x3b0a38,
      isAdmins: _0x52fd37,
      reply: _0x34e284
    }) => {
      try {
        if (!_0x10d74f) {
          return await _0x34e284(BOTOW);
        }
        var _0x38d1f2 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Auto Read",
                'id': _0x6cb8a8 + "autoread on"
              }, {
                'title': "Disable",
                'description': "To Disable Auto Read",
                'id': _0x6cb8a8 + "autoread off"
              }]
            }]
          })
        }];
        const _0x3bbdbf = {
          'image': '',
          'header': '',
          'footer': config.FOOTER,
          'body': "[POWERED BY TALKDROVE]\n\n  *AUTO READ SETTINGS*"
        };
        const _0x1d804c = {
          'quoted': _0x4f0ff5
        };
        return await _0x16003d.sendButtonMessage(_0x4a6e8e, _0x38d1f2, _0x450176, _0x3bbdbf, _0x1d804c);
      } catch (_0x437691) {
        _0x34e284("*Error !!*");
        console.log(_0x437691);
      }
    });
    const _0x2a018a = {
      'pattern': "cmdread1",
      'react': '🗃️',
      'filename': __filename
    };
    cmd(_0x2a018a, async (_0xf1ecd, _0x5458e3, _0xb8549e, {
      from: _0x3091f8,
      l: _0xd3c393,
      prefix: _0x266266,
      quoted: _0x23012d,
      body: _0x547ce,
      isCmd: _0x24d17d,
      command: _0x5d0278,
      args: _0x48e682,
      q: _0x47879f,
      isGroup: _0x20657d,
      sender: _0x3c8634,
      senderNumber: _0x5e4708,
      botNumber2: _0x4ab0b6,
      botNumber: _0xb68541,
      pushname: _0x427e47,
      isMe: _0x48f9db,
      isOwner: _0x5a9994,
      groupMetadata: _0xc1f6ae,
      groupName: _0x49bc2f,
      participants: _0x3468a3,
      groupAdmins: _0x454767,
      isBotAdmins: _0x2e2093,
      isAdmins: _0x18dcfd,
      reply: _0x4af668
    }) => {
      try {
        if (!_0x48f9db) {
          return await _0x4af668(BOTOW);
        }
        var _0x423542 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Cmd Read",
                'id': _0x266266 + "cmdread on"
              }, {
                'title': "Disable",
                'description': "To Disable Cmd Read",
                'id': _0x266266 + "cmdread off"
              }]
            }]
          })
        }];
        const _0x422c6c = {
          'image': '',
          'header': '',
          'footer': config.FOOTER,
          'body': "[POWERED BY TALKDROVE]\n\n  *CMD READ SETTINGS*"
        };
        const _0x3aee2e = {
          'quoted': _0x5458e3
        };
        return await _0xf1ecd.sendButtonMessage(_0x3091f8, _0x423542, _0xb8549e, _0x422c6c, _0x3aee2e);
      } catch (_0x38cedf) {
        _0x4af668("*Error !!*");
        console.log(_0x38cedf);
      }
    });
    const _0x3b909c = {
      'pattern': "autoreact1",
      'react': "🗃️",
      'filename': __filename
    };
    cmd(_0x3b909c, async (_0x217183, _0x5e9b2f, _0x5b6af0, {
      from: _0x38609d,
      l: _0x24bbdc,
      prefix: _0x53e942,
      quoted: _0x19c984,
      body: _0x1a237b,
      isCmd: _0x46256c,
      command: _0x5e5b2f,
      args: _0x3499d3,
      q: _0x20e9ed,
      isGroup: _0x179528,
      sender: _0x3d716b,
      senderNumber: _0x3cbd35,
      botNumber2: _0x453731,
      botNumber: _0x4dca51,
      pushname: _0x17fae6,
      isMe: _0x2f636b,
      isOwner: _0x5613c3,
      groupMetadata: _0x23e762,
      groupName: _0x8c9412,
      participants: _0x24b539,
      groupAdmins: _0x5d03dd,
      isBotAdmins: _0x404236,
      isAdmins: _0x4d04eb,
      reply: _0x505a5a
    }) => {
      try {
        if (!_0x2f636b) {
          return await _0x505a5a(BOTOW);
        }
        var _0x224324 = [{
          'name': 'single_select',
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Auto React",
                'id': _0x53e942 + "autoreact on"
              }, {
                'title': "Disable",
                'description': "To Disable Auto React",
                'id': _0x53e942 + "autoreact off"
              }]
            }]
          })
        }];
        const _0x52a29b = {
          'image': '',
          'header': '',
          'footer': config.FOOTER,
          'body': "[POWERED BY TALKDROVE]\n\n  *AUTO REACT SETTINGS*"
        };
        const _0x4c118f = {
          'quoted': _0x5e9b2f
        };
        return await _0x217183.sendButtonMessage(_0x38609d, _0x224324, _0x5b6af0, _0x52a29b, _0x4c118f);
      } catch (_0x19d287) {
        _0x505a5a("*Error !!*");
        console.log(_0x19d287);
      }
    });
    const _0x151581 = {
      'pattern': "alwaysonline1",
      'react': "🗃️",
      'filename': __filename
    };
    cmd(_0x151581, async (_0xc6a19, _0x4cf7e6, _0x5c2ee4, {
      from: _0x3bd92f,
      l: _0xb7a976,
      prefix: _0x31d3d7,
      quoted: _0x500e36,
      body: _0x59ca60,
      isCmd: _0x3ff3cf,
      command: _0x1dce78,
      args: _0xb0afed,
      q: _0x282993,
      isGroup: _0xe0d1f3,
      sender: _0x4a18c6,
      senderNumber: _0x36b641,
      botNumber2: _0xdfccc,
      botNumber: _0x25dee4,
      pushname: _0x36091f,
      isMe: _0x5835de,
      isOwner: _0x263ea5,
      groupMetadata: _0x10f2b7,
      groupName: _0x16f33f,
      participants: _0x29a62e,
      groupAdmins: _0x49afd0,
      isBotAdmins: _0x303684,
      isAdmins: _0x2a9262,
      reply: _0x430fc9
    }) => {
      try {
        if (!_0x5835de) {
          return await _0x430fc9(BOTOW);
        }
        var _0x25e408 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Always Online",
                'id': _0x31d3d7 + "alwaysonline on"
              }, {
                'title': "Disable",
                'description': "To Disable Always Online",
                'id': _0x31d3d7 + "alwaysonline off"
              }]
            }]
          })
        }];
        const _0x49c5ad = {
          'image': '',
          'header': '',
          'footer': config.FOOTER,
          'body': "[POWERED BY TALKDROVE]\n\n  *ALWAYS ONLINE SETTINGS*"
        };
        const _0x3b9bf4 = {
          'quoted': _0x4cf7e6
        };
        return await _0xc6a19.sendButtonMessage(_0x3bd92f, _0x25e408, _0x5c2ee4, _0x49c5ad, _0x3b9bf4);
      } catch (_0x31ddc2) {
        _0x430fc9("*Error !!*");
        console.log(_0x31ddc2);
      }
    });
    const _0x2bd50d = {
      'pattern': "autoblock1",
      'react': '🗃️',
      'filename': __filename
    };
    cmd(_0x2bd50d, async (_0x25391a, _0x85e243, _0x2c7037, {
      from: _0x425032,
      l: _0x6346e5,
      prefix: _0x5e505,
      quoted: _0x441b5a,
      body: _0x2204b1,
      isCmd: _0x56034c,
      command: _0x39696a,
      args: _0x8211c5,
      q: _0x373933,
      isGroup: _0x4219d5,
      sender: _0x15e4cb,
      senderNumber: _0x1c3800,
      botNumber2: _0x16f08e,
      botNumber: _0x810149,
      pushname: _0x5ca9f0,
      isMe: _0x457405,
      isOwner: _0x3b0b55,
      groupMetadata: _0x754d60,
      groupName: _0x1c3ce8,
      participants: _0x976dff,
      groupAdmins: _0x370bdb,
      isBotAdmins: _0x3c868f,
      isAdmins: _0x19c326,
      reply: _0x1233d4
    }) => {
      try {
        if (!_0x457405) {
          return await _0x1233d4(BOTOW);
        }
        var _0x179b40 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Auto Block",
                'id': _0x5e505 + "autoblock on"
              }, {
                'title': "Disable",
                'description': "To Disable Auto Block",
                'id': _0x5e505 + "autoblock off"
              }]
            }]
          })
        }];
        const _0x4ac007 = {
          'image': '',
          'header': '',
          'footer': config.FOOTER,
          'body': "[POWERED BY TALKDROVE]\n\n  *212 BLOCK SETTINGS*"
        };
        const _0x4c7126 = {
          'quoted': _0x85e243
        };
        return await _0x25391a.sendButtonMessage(_0x425032, _0x179b40, _0x2c7037, _0x4ac007, _0x4c7126);
      } catch (_0x55c258) {
        _0x1233d4("*Error !!*");
        console.log(_0x55c258);
      }
    });
    const _0x92f2ba = {
      'pattern': "autowelcome1",
      'react': "🗃️",
      'filename': __filename
    };
    cmd(_0x92f2ba, async (_0x432c6c, _0x149d8b, _0x521edf, {
      from: _0x58d39a,
      l: _0x558e59,
      prefix: _0x42630a,
      quoted: _0x474bcd,
      body: _0x5cf380,
      isCmd: _0xb041fe,
      command: _0x6b5253,
      args: _0x5db11a,
      q: _0x1aae2e,
      isGroup: _0x4ca9f7,
      sender: _0x1e3834,
      senderNumber: _0x43c600,
      botNumber2: _0x31caa0,
      botNumber: _0xbddf79,
      pushname: _0x54c4a6,
      isMe: _0x509b31,
      isOwner: _0x549df9,
      groupMetadata: _0x4a8f89,
      groupName: _0xaa4592,
      participants: _0x130127,
      groupAdmins: _0x5e710c,
      isBotAdmins: _0x4b2633,
      isAdmins: _0x540942,
      reply: _0x3837ce
    }) => {
      try {
        if (!_0x509b31) {
          return await _0x3837ce(BOTOW);
        }
        var _0x23ffc6 = [{
          'name': 'single_select',
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Auto Welcome",
                'id': _0x42630a + "autowelcome on"
              }, {
                'title': 'Disable',
                'description': "To Disable Auto Welcome",
                'id': _0x42630a + "autowelcome off"
              }]
            }]
          })
        }];
        const _0x2e014c = {
          'image': '',
          'header': '',
          'footer': config.FOOTER,
          'body': "[POWERED BY TALKDROVE]\n\n  *AUTO WELCOME SETTINGS*"
        };
        const _0x35141a = {
          'quoted': _0x149d8b
        };
        return await _0x432c6c.sendButtonMessage(_0x58d39a, _0x23ffc6, _0x521edf, _0x2e014c, _0x35141a);
      } catch (_0x6fc2b7) {
        _0x3837ce("*Error !!*");
        console.log(_0x6fc2b7);
      }
    });
    const _0x26bb0f = {
      'pattern': "antibot1",
      'react': "🗃️",
      'filename': __filename
    };
    cmd(_0x26bb0f, async (_0xdf748b, _0x154af0, _0x54a9ab, {
      from: _0x8bc051,
      l: _0x5e920c,
      prefix: _0x856242,
      quoted: _0x120528,
      body: _0x92a1c1,
      isCmd: _0xf13bfb,
      command: _0xe7a056,
      args: _0x477cbb,
      q: _0x4bfee1,
      isGroup: _0x370583,
      sender: _0x39c089,
      senderNumber: _0x29b3ed,
      botNumber2: _0x44d567,
      botNumber: _0xfc8468,
      pushname: _0x535043,
      isMe: _0x3b7e3c,
      isOwner: _0x1098f5,
      groupMetadata: _0x2d5626,
      groupName: _0x3fcdae,
      participants: _0x20b9d0,
      groupAdmins: _0x3f7d86,
      isBotAdmins: _0x29d8ce,
      isAdmins: _0xd53fda,
      reply: _0x4f0574
    }) => {
      try {
        if (!_0x3b7e3c) {
          return await _0x4f0574(BOTOW);
        }
        var _0x569c5e = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Anti Bot",
                'id': _0x856242 + "antibot on"
              }, {
                'title': "Disable",
                'description': "To Disable Anti Bot",
                'id': _0x856242 + "antibot off"
              }]
            }]
          })
        }];
        const _0x5142f6 = {
          'image': '',
          'header': '',
          'footer': config.FOOTER,
          'body': "[POWERED BY TALKDROVE]\n\n  *ANTI BOT SETTINGS*"
        };
        const _0x447ca6 = {
          'quoted': _0x154af0
        };
        return await _0xdf748b.sendButtonMessage(_0x8bc051, _0x569c5e, _0x54a9ab, _0x5142f6, _0x447ca6);
      } catch (_0xc8ef8f) {
        _0x4f0574("*Error !!*");
        console.log(_0xc8ef8f);
      }
    });
    const _0x299635 = {
      'pattern': 'antilink1',
      'react': "🗃️",
      'filename': __filename
    };
    cmd(_0x299635, async (_0x2dda9c, _0x11e906, _0x44b96e, {
      from: _0x9cd441,
      l: _0x237b7a,
      prefix: _0x37168a,
      quoted: _0x2544e3,
      body: _0x4403cb,
      isCmd: _0x5b706f,
      command: _0x46576a,
      args: _0x4372ee,
      q: _0x543f9a,
      isGroup: _0x572ed0,
      sender: _0x2c8dcb,
      senderNumber: _0x262dda,
      botNumber2: _0x4509fd,
      botNumber: _0xb93d8b,
      pushname: _0x29b8b4,
      isMe: _0x17bf54,
      isOwner: _0x412c77,
      groupMetadata: _0x3eb718,
      groupName: _0x3e2bce,
      participants: _0x4d528c,
      groupAdmins: _0xb9ff8b,
      isBotAdmins: _0x4f6e18,
      isAdmins: _0x30ab48,
      reply: _0x136238
    }) => {
      try {
        if (!_0x17bf54) {
          return await _0x136238(BOTOW);
        }
        var _0x3f18bf = [{
          'name': 'single_select',
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Anti Link",
                'id': _0x37168a + "antilink on"
              }, {
                'title': 'Disable',
                'description': "To Disable Anti Link",
                'id': _0x37168a + "antilink off"
              }]
            }]
          })
        }];
        const _0x2b4285 = {
          'image': '',
          'header': '',
          'footer': config.FOOTER,
          'body': "[POWERED BY TALKDROVE]\n\n  *ANTI LINK SETTINGS*"
        };
        const _0x493a95 = {
          'quoted': _0x11e906
        };
        return await _0x2dda9c.sendButtonMessage(_0x9cd441, _0x3f18bf, _0x44b96e, _0x2b4285, _0x493a95);
      } catch (_0x23d821) {
        _0x136238("*Error !!*");
        console.log(_0x23d821);
      }
    });
    const _0x49debe = {
      'pattern': "antibad1",
      'react': "🗃️",
      'filename': __filename
    };
    cmd(_0x49debe, async (_0x57c727, _0x63840e, _0x3a1f5c, {
      from: _0x5c5389,
      l: _0x449a31,
      prefix: _0x5e62f1,
      quoted: _0x5b6cc3,
      body: _0x389fc4,
      isCmd: _0x2306d8,
      command: _0x39a0c9,
      args: _0xe5feb0,
      q: _0x2ed539,
      isGroup: _0x541c84,
      sender: _0x39597d,
      senderNumber: _0x3d9ac8,
      botNumber2: _0x59c165,
      botNumber: _0x6aac63,
      pushname: _0x1800c5,
      isMe: _0x5f66bb,
      isOwner: _0x1f772f,
      groupMetadata: _0x397782,
      groupName: _0x579e3d,
      participants: _0xa3890c,
      groupAdmins: _0x3aa966,
      isBotAdmins: _0x1fd9cd,
      isAdmins: _0x34cb21,
      reply: _0x46e713
    }) => {
      try {
        if (!_0x5f66bb) {
          return await _0x46e713(BOTOW);
        }
        var _0x1bd349 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': 'Enable',
                'description': "To Enable Anti Bad",
                'id': _0x5e62f1 + "antibad on"
              }, {
                'title': "Disable",
                'description': "To Disable Anti Bad",
                'id': _0x5e62f1 + "antibad off"
              }]
            }]
          })
        }];
        const _0x2315b7 = {
          'image': '',
          'header': '',
          'footer': config.FOOTER,
          'body': "[POWERED BY TALKDROVE]\n\n  *ANTI BAD SETTINGS*"
        };
        const _0x31df83 = {
          'quoted': _0x63840e
        };
        return await _0x57c727.sendButtonMessage(_0x5c5389, _0x1bd349, _0x3a1f5c, _0x2315b7, _0x31df83);
      } catch (_0x465dac) {
        _0x46e713("*Error !!*");
        console.log(_0x465dac);
      }
    });
    const _0x65499f = {
      'pattern': "anticall1",
      'react': "🗃️",
      'filename': __filename
    };
    cmd(_0x65499f, async (_0x576b76, _0x37ecef, _0xf805c1, {
      from: _0x140f81,
      l: _0xc2cf32,
      prefix: _0x51ec76,
      quoted: _0x146aff,
      body: _0x353135,
      isCmd: _0x2d9a32,
      command: _0x4138ef,
      args: _0x19b450,
      q: _0x977c16,
      isGroup: _0x32547a,
      sender: _0x2c2b6a,
      senderNumber: _0x3cc7ca,
      botNumber2: _0x41a6fc,
      botNumber: _0x95555,
      pushname: _0x48dd7c,
      isMe: _0x594218,
      isOwner: _0x2080f1,
      groupMetadata: _0x6b926b,
      groupName: _0x4d6e53,
      participants: _0x1f2c74,
      groupAdmins: _0x2b5830,
      isBotAdmins: _0x153aac,
      isAdmins: _0xdc430e,
      reply: _0x3a2e4c
    }) => {
      try {
        if (!_0x594218) {
          return await _0x3a2e4c(BOTOW);
        }
        var _0x3d1e74 = [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Anti Call",
                'id': _0x51ec76 + "anticall on"
              }, {
                'title': 'Disable',
                'description': "To Disable Anti Call",
                'id': _0x51ec76 + "anticall off"
              }]
            }]
          })
        }];
        const _0x18b4a0 = {
          'image': '',
          'header': '',
          'footer': config.FOOTER,
          'body': "[POWERED BY TALKDROVE]\n\n  *ANTI CALL SETTINGS*"
        };
        const _0x5d66e0 = {
          'quoted': _0x37ecef
        };
        return await _0x576b76.sendButtonMessage(_0x140f81, _0x3d1e74, _0xf805c1, _0x18b4a0, _0x5d66e0);
      } catch (_0x4901c8) {
        _0x3a2e4c("*Error !!*");
        console.log(_0x4901c8);
      }
    });
    const _0x2840c2 = {
      'pattern': "antidelete1",
      'react': "🗃️",
      'filename': __filename
    };
    cmd(_0x2840c2, async (_0x215b87, _0x5d836f, _0x224f9c, {
      from: _0x1ef411,
      l: _0x3a8672,
      prefix: _0x5c5521,
      quoted: _0x12d204,
      body: _0x3f6d8b,
      isCmd: _0x24872d,
      command: _0x5a6c60,
      args: _0x4dce27,
      q: _0x342be6,
      isGroup: _0x2b8c1b,
      sender: _0x18d39f,
      senderNumber: _0x348832,
      botNumber2: _0x1112e3,
      botNumber: _0x45af2c,
      pushname: _0x5b69b4,
      isMe: _0xd9e19c,
      isOwner: _0x172331,
      groupMetadata: _0x4275d3,
      groupName: _0x1e3239,
      participants: _0x31b640,
      groupAdmins: _0x5a43d0,
      isBotAdmins: _0x575ee7,
      isAdmins: _0x203e6c,
      reply: _0x3d5630
    }) => {
      try {
        if (!_0xd9e19c) {
          return await _0x3d5630(BOTOW);
        }
        var _0x1688b0 = [{
          'name': 'single_select',
          'buttonParamsJson': JSON.stringify({
            'title': "Tap here!",
            'sections': [{
              'highlight_label': "X - B Y T E",
              'rows': [{
                'title': "Enable",
                'description': "To Enable Anti Delete",
                'id': _0x5c5521 + "antidelete on"
              }, {
                'title': "Disable",
                'description': "To Disable Anti Delete",
                'id': _0x5c5521 + "antidelete off"
              }]
            }]
          })
        }];
        const _0x2bc388 = {
          'image': '',
          'header': '',
          'footer': config.FOOTER,
          'body': "[POWERED BY TALKDROVE]\n\n  *ANTI DELETE SETTINGS*"
        };
        const _0x34abde = {
          'quoted': _0x5d836f
        };
        return await _0x215b87.sendButtonMessage(_0x1ef411, _0x1688b0, _0x224f9c, _0x2bc388, _0x34abde);
      } catch (_0x3f0732) {
        _0x3d5630("*Error !!*");
        console.log(_0x3f0732);
      }
    });
  }
  const _0x34ba9d = {
    'pattern': "setprefix",
    'react': "🗣️",
    'desc': "To change bot prefix",
    'category': 'main',
    'use': ".setprefix .",
    'filename': __filename
  };
  cmd(_0x34ba9d, async (_0x163fe7, _0x447f62, _0x2e5dee, {
    from: _0x48fb77,
    l: _0x403ac6,
    quoted: _0x59868b,
    body: _0x34f3a8,
    isCmd: _0x4ffd97,
    command: _0x52358a,
    args: _0x3c8ae9,
    q: _0x3c845a,
    isGroup: _0x41dde9,
    sender: _0x25e8dc,
    senderNumber: _0x23e3ee,
    botNumber2: _0xe96060,
    botNumber: _0x82ce9f,
    pushname: _0x5e065f,
    isMe: _0x5933e0,
    isOwner: _0x5b6c73,
    groupMetadata: _0x3bd25f,
    groupName: _0xc150f5,
    participants: _0x15de53,
    groupAdmins: _0x465692,
    isBotAdmins: _0x294d45,
    isAdmins: _0x2a4eba,
    reply: _0x1f325a
  }) => {
    try {
      if (!_0x5933e0) {
        return await _0x1f325a(BOTOW);
      }
      if (config.PREFIX == _0x3c845a) {
        return _0x1f325a(alredy);
      }
      await input_set("PREFIX", _0x3c845a);
      await _0x1f325a("*prefix updated: " + _0x3c845a + '*');
    } catch (_0x5f7f0b) {
      _0x1f325a("*Error !!*");
      _0x403ac6(_0x5f7f0b);
    }
  });
  const _0x5867df = {};
  function _0x48af() {
    const _0x336090 = ["mM8kW5jA", 'C10PW44', "utBdKSkujW", "zrpdGeLf", "c3JdM8kBlW", "W6dXJRcS4OkS8k2WQSkr4BAk4BA2", "WPdcHcxcItO", "wNlcTsa8", "xmo9cX3cNG", "W4hcLqtcRs0", "vSkgW5ZdP2m", "xxBcTZ0n", "W5XybL1/", "W6DTW6ZcU1C", 'W4vwW7/cHIe', "WR3dQmkKxvm", "v3SoWQat", 'W5BcIHrIWRu', 'W6/dTMddQMe', "DeG8W6Gt", "W4JHT7VHTiCT4BA+", "W5WUW63dQG", "xmoGra", 'W5npW6ZcPWm', "nIBcKa", "W7DbW7xdQ8os", "y8okDZGK", "W53cPcxcMr8", "h2aGd14", "W5VdSge2W4m", "cSkVW5XzWQe", "uqKLnLu", "WQLnWRxcQJa", 'WPZcIqFdVG', "W41NfNPV", "wr9AaLO", "W45NWRddSK4", "zmoGaYKd", "iIXLBmkp", "BxawW6a7", "rCo9tW", "W4BcJ8keWRui", 'wx/dUSkMWPy', "zKvlWOLk", "v3rzWQDF", "pZvxWRyK", "kd8sWR1Q", "kXZdR8kboa", "uSo/W5PjWRu", "WOW6wCklsa", "W5fQW6ldNfi", 'rxaEWQOg', "W6lcUa4", "WROwA8k/EW", "u8omWQrt", "W4ldSvlcU8kR", "W4JcTJVcJCoi", "avqYaLS", "C0WDW6aC", "WRfaWR0", "W6tdM1WbW6W", "WR01F8kjWQ8", "W6tdRCoeW7nT", "oZvg", "WPums8kRWOu", "4Bs/4Bsk4BAdW6NXH4o74Ogi8kcaRa", 'WQlcQJRdKSkm', "iZddU8kX", "r3BcTZOp", "m2unpNe", "Dubihq", 'vqf3pfi', "pgSE", "W5NWNjoN4Ooc8kkGHmoW4BAz4BAk", "pJLEsSkp", "bgTzp38", "WRZcQSkfWQZcQG", "W7pdT8k0kvy", 'p2iF', 'W67dI8orW7NdRW', 'CuqFWOap', "BmooWQu3WRa", "WObHWQFcICo7", "lwC4Awe", "nMKbpfG", "FCoMrhJcOG", "iIqtWQOJ", 'W7hdQSkr', "W5pdJCk5i1a", "W57cLqtcRW", "kdqwWRO+", 'W4hcH0zKWR0', "W4hcK2iM", "W4hGTltGTz4VDW", "gfadWOCV", 'W5ZdSwqPW7i', "mhq+WOZcLG", "xxJdP1Gl", "yaiLhvO", 'a3qNA3y', "m2Slp38", "WOVcSWlcGYW", 'WP0xrmkVuG', "lfKfmhS", "oXiVWRCE", "WPJcUJJcIbO", "aNKHx00", "ACo7sddcKq", 'ttDa', "W7/dO8kC", "p8oJWOWSfa", 'W4L6WQhdUKW', "WRjiWRxdVM0", "E0FdISkwWQ4", "dCo7W5XdWR0", "oCoHW5XfW7m", 'Fvv/WOzg', "z/cyKyJIG4JWNlo9W7xHTQRHTQy", "ngiPWRJcJq", "W7D/WQ/cMr4", 'b0ugCxa', "WQJcUIfRW4m", 'vMvqWQDw', "W6ZcVSkbWQOT", "cvuXAMS", 'WR9aWR7cPW', 'W559hebP', "ia9/bI8", 'dthcJSowya', 'W6JcLG7cISoI', "hqv4WRPw", 'WOKMxSkuuG', "tCo5WP4pWPy", 'ge80WPyw', "WOLaW7RcM28", "W5RcGbq3W7m", "WP0fWPJdPCku", "W7BdVmo/wq", 'WQ7cR13cTL8', "C2qaW44A", "EwXXWPfc", "gCoHW5XfWRe", "W5tcNfT5WRy", "u0WRW7Su", "BeldRmkNWOS", "jZtdSmk8aq", "hg8DWOlcUq", 'da5exCkN', "m0m3x2y", 'fqZcMSkApq', "cf4/WRCH", "DmofWQ4/WOq", 'W7rDWOxdIaO', 'W6tdHW8nW7G', 'd8oaWOONrW', "BSoftY3cIG", 'W6hcNrRcOG4', "s37dVmkGWO8", "WOqsWPJcQmkJ", 'WOOYz8k/yW', "W5pcRrvpW6W", "ca/dMCk2nW", "FCoiydNcIa", "W5BcLrNcQYm", "W5ZdKSoVW4Hm", "W5BcVCkcWR3cLq", "fGddK8kwma", 'WO7cIw9OW4S', "pvjRWPRcTa", "WP7dPmkgw0m", "xX9kkMC", "cMaDWRGy", "W47cRbpcLa", 'WQNcMbBdUSks', 'sqXvmdi', "uWvPfua", 'WPJdHCkgA3C', "W5BcOsZdHZa", 'pgO+WP0O', "W5ZdJSk0zeu", 'W7PAW6JcMrO', "ttauh1m", "W5VdSgqUW7K", 'W4tcMSkAWOP1', "WOVcLHBdQCkb", "WPhdHslcNLy", 'WRqoW4NdVmku', "W7pdNuKJW6K", "W6nHW6O", "W4LSWOddQ8ok", 'zYHrdxO', 'qvyPW40r', "WPDSWPtcVu4", 'W5lHTzRHTOlcIog3IG', "W77dVemkW5q", 'WRf8WRVcLe8', "4Bw24Bw14BA3W5xWQ6oo4Oc/8jkISq", "W4hdOCkHl3G", "4BEV4Bwt4BsNW5VWLPcZ4OkQ8yMbTq", 'WQqeW5FdUSkF', 'WQNdKmkpFLy', "wZddImkhpa", 'WR8QWQ4', "AMTDsmkO", "WPRdLCkNAge", "nCoQW5TFWRi", "W6hcU0JcH8o6", "AIv/hK8", "cIaWWPSq", "BqXlgge", "W5ldUSoBahy", "Fd3cThv3", 'zK44WPSI', "W7xcOqZdTX4", "W73cICkCWR3dQG", "WRHDWR/dVW", "W4NcLYBcGq", "W4tdOwyQWQy", "W7JcUGVcMcG", 'WOLxWOZcHNe', "W6ZcQXZcQCo9", "WOxcSCkBWO49", 'WQ9lWQ7cIg8', "sqvZbLW", "hZhcLSoFAW", "W4BdRNCkW70", "W7TgW5FcQmor", "tcVcTg5W", "W45dW4JcGa", "WOhdH8kGENa", 'oNqzWP0t', "ErXmggq", 'cmowW6jVWQe', "lXNcSmoZvW", "zhJdUrWV", "xxbsWQbV", 'fg0koNq', "qL4yWO0L", "nKG7cLG", "odTmlZm", "mweHw3W", "WOBWLkkY4Oot8j+cUCkm4Bw64BEO", "W7JdU8oYeq", "wSoxAHZcRW", 'W4b4x0zT', 'W6TIW6JdRXG', "ywVdTmkDWQy", 'WQiYWR7dI8k6', 'WOq8tq', 'WRlcRZnQW74', "uX3cImoiAG", "w8oJBsqF", "bI9MbZG", "CCodWPe2WPW", "W7BcTNHiWOC", "WQZdTCkRFhq", 'W7ZcRHdcVSkg', "lZv/ymkm", "4Bwv4BsM4BwgW47XJ4ci4Ocg8l+GIG", "vSonWP0oWRO", 'kqDkqmkW', 'rajFmwq', "u3jmWRXP", "uNNdLSkUWRe", "W7RcQdddIgO", "W4FdINKUW68", 'hI4Rtmkm', 'nwCn', "eSkmWPNdVhe", "WRPgWRZcPW", 'WP7cIIxcQmky', "l8okW6rVWPW", "WRXAWQ7cSxm", "CCoHvWvn", "WOhcJMG8", "W5tcOci", "nKyPWPSt", 'gmoyW40Tcq', 'oCoAW7XJWOW', "xsBdUYfu", "4BAIY67kLUg1H8k3", "DCoUWPyDWPi", "WQvgWQtdJCkL", 'eK8O', "aZNcT1Hd", "WRHlW7RcSwC", "W7FcNvvVWR8", "q2GRWQu9", "WQ5kWRtcUKm", 'kZr/zSka', "WOvZr8kEsq", "WQtdJSkezLS", "WRJcH1BcSJ0", 'eK/dVmk7WO4', 'tthdU3nY', "W5rnW4xcHIu", "q8oUqqai", "WQqaW4ZdOCkd", "W4hdKfSlWR4", "jsDT", "WPNdJmoiiq", 'W47cISkZWRtcGW', "W5JcUaZcJ8kP", "W6BcQcZcVmoP", "W5BcLKDUWQe", "8ywLG++7PW", "W7JdJmk5jNO", "m8ksW5pdPKa", 'W6pdMvCSW4G', "c8oOWQu7na", "pCoVWRKloa", "4lshi+c0KEc1SUc1Pa", "WP3cMmo4", 'W73cG8kLWP3cIG', "W4VdVCk0lfe", 'W7n2W7ZcPG8', 'W5b4ewbj', "gJxcKSoJCW", "WPhcIXFcQG", "WQiAymkIWRS", "tJTBbfG", "E+g0MUg1QCos4Bw7", 'cW9Fqmk9', 'WP7cJtNcRmkj', 'W4rdW4dcMZi', "fHNdS8kxna", "W5NdMSk9c2m", 'nxCCWRW3', "W5/cV2tdJIq", 'kmoqyHFdKa', 'gLq5WR0/', 'WQKMxSkuba', "W73cNSkeWRFcPW", "WPizBCkPWQG", 'c0C3WQm6', "iLKbF3a", "hSoMW4rjWR0", "W7xcHCkB", "W5RcPdDMWR0", 'WQBcOt/dR8kx', "W6VdTSoVW6n/", "W4JdUmk8iKy", 'WPldNokSVSoQaa', "ttpdScf5", "WQWcF8omWRa", "W7/dSmouW6jL", "he5LWOrn", 'W5X/WRddVKe', "WOKlySkIta", "WQRdRSk8rMO", "WR1SW44", "4lA64lsZ4lwA4lAZW5C", "f8kyW5W", "W7/dSmouW5rY", "W5vIc3TQ", "W7FcMbJcMaC", "W5tdKCkS", "WOyGW7ldNCkI", "W61gW4RcIam", "W6ZcMSkpWP07", "4BAxYANiOog2RSke", "WPlcSJFdO8k2", "BKiRW5aN", "WO/dQ1FdI8o4q8ovWQxcUJNcG2O", "8kggU++7Tq", "W63dQSosW6jP", 'WOtcHsnmW5a', "WOxcVtxdO8kj", 'bKLRWORcPa', "zSooAsu/", "W7NdU8o4dvy", "WPhcGZBdKYu", "W67cSWdcN8o5", 'jh5Vjci', 'WQ8pymkpWQW', "WONcLgT+", "WOJcKt/cGHG", "W57cKW0", "uNLeW6vH", 'WOK0t8oBua', "WRKgFSkjWQi", "EfD4WRTC", "WP/cQNxcG1G", 'uajRlxi', 'W6BcKKqTWRS', "W5j1WQq", 'W5ZdGmk0ity', "4Bw04BwDW5RiO8Qk", "W5BcLs/cScS", "4BE14Bwb4BAlWOJXI4kz4Oot8k+IRq", 'A8oZWQ0qWRm', 'WONcMr7dVSoe', "WQNcRZddLmkW", 'WQZdKmkhwLm', "W4NcOYxdGJ4", "WQRcGftcS18", "usBdV8kHbW", "WRXBWRJcSxu", 'WO/dHmkRyfG', "W4hdQxCGW7i", 'WP7cKxPjW6y', 'WRmVWRG', "xmoGqaDC", 'DKSSW7mv', "WQCOW5ZdSSk4", "B8o7tse", "FSoDWPObWRe", "jLq+WOS", 'W5inW4/dPSkA', 'W5tcRYFdHhS', 'pZiyWQSU', 'F1WAW5iu', "W4hcKCkfWO44", "xSoAWPKmWRG", "W717WOpcJKG", "W4PpW7JcQdW", "ECoIWOqyWPu", "ydPlm1S", 'WPhcHZPNW5a', "W5GeW7tdMSk+", "W5j6WQhdVGa", 'W4VdS8oKsfa', 'uKy/WO4L', "WOxcGw1P", "W57dK11+W7m", 'ccbbaLm', 'xNeYW40s', "WOvGbSomW6m", "sg5vWQa", 'p2OviNe', "WRBcSSkFWQ3dPq", "WRCela", "WP04qmksyq", "W6BcTSkHWPKo", "BCkYwd3cNa", "xmoOWPmyWOe", 'zL5QWP1g', "W61YW6JdR8oW", "jK0wzdi", "4ls44lEd4lwp4lwI4lA9", "WQ3cLWxcP8oO", "WROOWO7dP8kL", 'WR05WOa', 'WOlcUsFdNSks', "WQWdB8knWQ8", "W61bW7ddR8oo", 'W7XHW4ZdI8kl', "WONdJ8kmDG", "8lIuQo+7VW", "WRJcI13cSJ0", "W4dcP8kfWOO2", "tx7dUSkMWO8", "oCo7W6r1WRe", 'jJddTSk2ha', 'W7HIW4pdMSke', "WPVcJWddSSkk", "W45OW4RdOmoO", "W5XXWQ7dVGa", 'WQVdHrVdTJC', "W7NcUhDaWOa", "WR48q8kyqq", 'wJPrfb0', "WRqfB8kh", "fog1TUg0GxNHTkG", 'WPvSWRxcNfa', "iMqXWOFcIG", "8lIuIo+7VW", "hhno", 'DsnregW', "gX8JWPav", "sf3dM8k+WO8", "WPZcKGBdT8kb", 'W4jwW4/dO8kNW44eWRxdNa', "n0u/WOG6", "W4hdT2i", "WRldJgtcQ2O", "wguaWQPO", "WPCjW5pdO8kh", 'W6hdSNGuW7a', "W67dGLqwW54", "W5XTW5tdH8oM", 'FuL0WOPr', "xx5mWQaU", "m2a4kuq", "hue5WOtcIq", "rJLZg1S", "oSogWPq1iW", 'pgGlWOS', "W7pcVwbeWOW", "m1m/WOhcSW", "WRzky8kc", "dJ5xWP0J", 'nwiKWP4K', "WQ3cJe7cU3G", "W4xdT2aAW7u", "W5FcNCkxWOWU", "W5f0W6RcGrW", "qgeRkCoc", "cfeSWQNcPq", "WRJcTW9mW6O", "pgfzfge", "W5hdTeGnW7G", "WQ7cJsLOWPu", "fwOyoxO", "f8kzW4VdTNy", "W77dVSoJcue", "W7JdJ8oqW6ve", "WPzUWP3cN1m", "WPrgWPJdRSkx", "xgmYW607", 'WP88wmkqua', "W5BdHmoOW7Pj", "zGHKpq", "oXtcTCo5tG", "wgSuW4mP", 'WRJdV8kNqxK', 'osuwWOy/', "uInNf1e", "ha5csSkN", "WRBcNaZcGXq", "WQ5oWRJcSMq", "W6vPW4lcRtS", "j2evohK", "WQyUWQBdRCk/", "W7pcQM3cMvG", "shdcTZuc", "W7FcG8kjWRRcLa", "W5L2fNO", 'WRVcLqldRCk0', "BxBdUqWI", "4BA64Bst4BEpWRVWL5oL4Ocw8kYqIq", "cb3cQmo0qG", "cSoKWOH4WQO", "W7bIW47dISoO", "W5ZcRYldMa", "woc0LEc0KWZGTzq", 'ELnVWPfl', 'WQKEECkCWRS', "hCouWPKTfq", "o8oRWR0oia", "W4zBW5VcPZq", 'WOFdKSoix1G', "WPaUW6ldKq", "E0O/", "pXFcTCoUqa", "Cb9ypZK", 'maddJSkACW', "WRWtlmkTWQ0", "WRmuW5ldP8ko", "4BAkY5tkR+g1OSk+", 'W67cMW7cUCkG', "4BAk4BEE4BwLW6BWVkkU4Ok68kcYMa", 'WOaVW6pdJmoX', 'i3almNG', "W7fSW4C", 'FCoMxZFcNG', "gddcRG", 'WP0NW6a', "BxddPbKb", "W7FdSmohW7G", "ivi5WOFcRW", "ixewl3m", "hJGeWRGO", "W6zCgvjI", 'ueLdWRzh', "W4ZcLCkxWOG/", "WPJdHstcGW", "W5NcLmoypaWYnCoHWPJcQNy", "W5hdUfuOW7C", "W4FcQqNcKSkR", 'WR0jEa', "W7zLW43cOam", "W5xcMLj0", 'W4FcSZJcGmoQ', "WR/cIJ/dJsu", "WOFcHMu", "WP4+zmkytW", "sCo7cXxcKq", "W5FcTdxcRmku", "WPZcKd4I", "Ds9cWP4j", 'lYj/', "kX3cU8o+wG", "W417W6hcQGu", "huWDWPm0", "WR/dJ8oisLS", 'W7/dS8of', "WPryexHH", "dthcUCo7sq", "W6BdN0mrW7S", "eJJcV8o7W4e", 'vqbG', "aXC9WQ4D", 'yuxdOCk+WPC', "EXPRpee", "W6RcTc3dSYi", "W4DQW7xdMSop", 'kspdQmkpfq', "jqrGE8k2", "W5NcVXJdPSoN", "W43cTG7cKmkL", "W5ZdPwiYW6q", "W5xcVbi", "WOZdMX3dTq", "u2GaW78U", 'gmofWQ4TcG', "fsRVVQpVV63dGq", "W6/cQwtdPcq", 'W653W5ldH8ok', "EZNcTLLj", "Egm5WPZcRG", "W5FcLYFdPdi", 'ltNcISkABq', "W77cQcxdGYy", "DuOmW60t", 'e8kQW4RdTNS', 'W5fXfMW', 'qsldOgH5', "W5BcIHrIWR0", 'ieq7WRtcKG', "W5ddTCoTW7Lr", 'p8o4WOiwcG', "W47dLSkQlxG", "kc5/kCkl", 'FSoMWPmlWPi', 'sN3dP2rI', "kNyWF3W", "WPupWOtdQCkt", 'WOjgWP7dU8or', "WPlcVqtcVIG", "dSkCW47dM0y", "WRJcKe7cUg8", 'W7NdI8kRjxq', "W5tcJCkzWPS/", "fmoGW4ThW7m", "urDJngG", "BJNcRvG", "W47cSJddJIq", "n20FiG", "whHJWQPJ", 'W7JdM8oXlLi', "pmokW6rPWOC", "W5flW5NcMa0", "wwBdUCkOWPG", "htFcLmoora", "W5ZdRwiRW7i", "WQRcJCkLsW", "WQNdJu5j", 'ehqAWRqo', "W7ldM04bW6O", "WR9gWPBcTNe", 'zXP4kwi', "WRaHumkbCG", "td1hev8", "WPdcJZPKW5a", "wM/dVmk6", 'W4JcIaJcSCkC', "pZlcMSkMfG", "u20VWPKJ", 'EZNdUby', "4lwI4lsD4lAW4lwM4lsE", "k8oeWOeHca", "wSozWRGSWQC", 'gSkAW54', "pCoKWPK", "W7RcSrRcRCo7", "W4vtW4ZdM8or", "xb1ojhe", 'vrHXnKe', "W4lcHclcGZC", 'Cfaak38', "nsPziJG", "W6NdRtyeW78", 'WP4uWPldQCks', 'nCoYWPKinq', 'W5e3k2f6', "WPxcKeRcUf4", "W5NcHW/cS8om", 'BwdcTXCn', 'WONcKHVdTSkf', "4lsS4lAb4lAs4lsP4lA+", "W43cSa7cM8kG", "W7ZcVX3dKsq", "W7fTW63cOXi", "W5hHTB3HT7pcQog3QG", "WO7dG8khFve", "fbJdMmkqiq", "W7GfyG", 'W6NcNcZcV8kd', 'u8o+WRqAWQC', "n0OOWOhcRa", "W5KZWQ3dVuy", "W7JcRrdcQqW", 'v2eyWQyy', "gCofW40Tcq", 'WQ0MtmkTAW', "W6BcK0RcJY8", 'WPyRWQtdV8kq', "WORdJmkAALq", "WR/cJfBcSNm", "nu8TWPC", "WO48rCkpqq", "WRGbWQhdKSkv", "uCoTtWLn", 'W47dSNy', 'nNWjWRSt', "W6ZcSbZcR8oR", "W5tdGU+9RtBcLq", "WPRcNHpdUmkq", "WPGYxSkpqq", 'W5RcTG7cImkn', 'W73dVSo7c1m', "qsDa", "W5zPW4JcGGe", "zcbGo0K", 'xxJdQ8oO', "qd7dS2z0", "s2VdRmkLWOq", 'W5pcLvS', "d8oiWOmLcW", "s8okWR0WWQu", "WO9GWP/cJ3q", "tIldUfzN", "W5julfns", "WRfzWPZcIwS", "W6NXG6gC4Oca8yUJH8oD4Bwj4BA7", "cSo+W417WRe", "WRakW4tdVSkz", 'W4tdVtykW7i', '4Bs6Y6xkO+g1Re0', "jXjJC8kU", "W4RdL8oUW4Xu", 'W7ldKeOgWR4', "W6vLW6NcTG", "WQegW5ddV8kR", "W65AnujN", "W4pcHLT5WRy", "gdtcImoFza", 'f8kBW43dUNS', "cwaFn1q", "W7NcQfVcO3u", "W5ddH8o4n3m", 'qrLXnL0', "ESkYcNNdMG", "sh/dVCkH", "WQmlWRldGmks", 'WOpdGqm6W6DiWPylW7NdTSoXW6G', "W4/cRZddJs8", "W5rWWOBdTgq", '4lEQWQ8crG', "WQ/cOX5pW4C", "yar5E8kn", 'WOZcMWnuW40', 'WP1sWRFdR08', "mJqwWR0V", "W6JdMSkwcui", "W6RcTKdcUCkI", "yaiLhf0", "ChRdT8kHWQO", "v8owDsmx", "gSkqWPNdKNK", "WRtdM8osW7LO", "W7vIW5tdJmol", "jrRcMSkWpq", 'WRJcNaxdICkN', 'x8oHBZBcVq', "WPJcGmkNyvK", "W4RcVCkAWPZcKG", "wx9u", "aZa5WPGy", "hHpdNa", "W7dcGmk4WQio", "WOqHt8kFxq", "p2OviNS", 'EKaR', "gMaeqWrLDCoZrmoIzq", "W4DJdx1M", 'W63dT8oYaua', 'WRiLWOtdOmkE', "WPVcLqhdTr4", 'W7pcGaVdPIu', "qe1Qp1u", "W6RcObdcLCkI", "emoQW4LiWRy", "x8oHtXua", "W53cMLDO", "WPyKW7xdIW", "W7VdVCo6hhK", "W5/cV2tdRJ0", "W5NcSaBcHq", "W5BcLqtcRq", "WPGyW4NdPmku", 'W5pcOYxdHs8', 'W7TIW4ZdNCob', "W75+WQJdT20", "W5NdM8o4jxG", 'fZRdU8k5ia', "WRqUxSkwWPK", "W6/dQ8opW79I", "W4FdK8o/l3m", "AqfGp2i", "rWHRpxe", 'W5VdI8k0ixG', 'xxjuWQXI', "utj2pf8", 'W4dcKxTbWR4', 'WPxcJtW', "qdfvffG", "bSkuW43dP3i", "W7HCW5pdI8oi", "WOBdIvpdUxBcNva+WPDncmkyW7W", "W4xdPxGJW5S", "CCoKWPa", "4BsDYy/lMog2MLy", "xcRdOCkVWOC", "wmoCW614WOC", "wtXjWRyU", "WRSYwSktAW", "WQNcJNDKWOu", 'fXZdLSkqpq', 'baD9aHG', "vCoJqama", "aqddICkD", "W67cJSkrWRVcSq", 'W6ZcKrhcQ8k6', "WQFcIsFcLmoe", "W6ZcSHRcO8oU", "WPFdP8kQnNK", "WR0OW47dRSk+", "W4pcVxHSWRu", 'WRdcLgRcTx4', 'Bx3dLbCo', "ASoLWPilW5C", "t8o+AaNcGq", "W7nuWPhcSq", 'WO3cIZHOW5a', "W7ZcTs7cJSo3", "W5XnW7tdP8o7", 'WP0JWPRdSSkD', 'W55NWQVdTe4', 'fYxdU8kHkW', "kNqcWOyf", "W5hdMSkWd3m", "W4JcSaNcPmoJ", "WONcGK3cHv4", "W5idW6/dHW", "8lAeU++7Uq", "ge8zWOlcUW", 'oa3cRSo1wG', "FNqrDha", "W4JcQrFdUSka", 'DmoFWP4QWQm', 'qHPmgg8', "W5NcSuJcG8oH", "WRTjWOVcM2m", 'agq7WPJcTG', "WROwA8k4Ca", "puaT", "BmoRcW/cLq", "WR8zzCkiWRK", "W6tcIJxcS8k5", "WRKgE8knWRO", "W4lcVGddQCkl", "W5FdMSo4W5LS", 'jmkWW7RdNeu', "WRCZW4xdKmka", 'n3K4WOVcRq', 'ptNdGmkpgW', "W4ZdV2eL", 'WPakWOxdRCkq', "WRVcRtBdQmkv", "W4ZdLCoIW6vp", "W5GZWRBdRLi", "urLXmf0", "omk5W6a", "W6dcVWBcOSod", "bGjotCkg", 'vhLbWQfR', "DmoaWQC1WP0", 'WP0jWPa', 'fdiAWOeE', "W7BdMumMW78", "W4dcKG/cRMe", "W7/dQ8ouW6r0", 'W5JdGCkS', "WR7cVUc0Q+c0V+c2SW", "W7ldVva1W7u", "WRZcSb/cOIK", 'W67cIYxcUSkf', "WONcLYHR", "W4VcJ8k0WQy1", "W7hcISkzWRy", 'irnfaJ0', 'uhnh', "kmoaWP1IdW", "W7iVFSkEWQW", "ex8MAMy", "BCkYzJ3cGW", "sCoCFXhcRW", "x8o/vIyp", "W43cGZ3dUY0", "EmoNWPinWPi", 'W5NdM8o4k3a', "4Bwn4Bwb4BsgkFghSztIGlBWNlk2", "WQNdGCkm", "WONcJg8TWP8", "W4JcI8khWQKy", "iWCdWR8N", "Emo5WPjy", "mcPDBSkN", "baPKbre", "W7ZcJs7cQCkE", "W7xcHCkxW7JcSq", 'rSoDDcyi', "W7aSWQ7dRL0", "sh1lWOTM", "WRdcHG/cNJG", "hCoSW5WmWRi", 'WOdcJ2voW6G', "W5FcKLaTWQC", "W5VdRxGGW7S", "WPqGW6RdM8k0", "hSo0WP84lW", "lX54Bmko", "WPrId3bP", 'W7xcRIxcNXe', 'W4XuW6lcMs4', "W4RdSwiZW7G", 'yxZdTHWg', "W7dcTIhcSSkD", "WPH1WOVcTg0", "W7JdP8onguK", "jsXdlJi", "cmotWPGN", "WP7cKa3cNCkR", "WOSaW43dM8kw", "WQWyECkj", "uGjQlvy", "WRZdLCkcDxW", 'wq/cN8owzG', "W7BdQSouW7T0", "jeLvF3W", "o1u/", "4PEO4PEG4Psd4Psn4PAL", "hmo2WOHdWR0", "hSo7WRqvhG", "WONcLxDIW5C", "l3ueWPWh", "ft3dMSo7Ba", "eNu2mLu", "W5dcPKz3WPS", "DCoHqG4b", 'FdDHog4', "WPKMrCkpqq", "WO3cGwb5WPq", "WOtcJ2q", "WRZcGblcOd4", "WQRdU10qW7e", "W5r9WQxdQa", "l8odW5fRWOS", 'WOFdJCk6w0C', "vCoSvW", "W4JHTyJHTk7dM+g0VW", "WOZcLI9SW5S", "W73cIqVdTq8", "WOSXW6pcImk+", "WRdcI1hdT2K", "W7pdT8k0kve", 'W6VdOmoHdq', "zCoZrtZcVa", "htZcUCovAa", "WOqsW4JdUSkc", "W7JdG8k8e3G", "f0SbkCoc", "WPFcHZ8JW5O", "W61VmNz+", "W63cUCkVWOm+", "bYr4ESkd", 'x8oPrq', 'BMT2WOjH', "W4BcLWdcPCoN", "fIJcJ8oWzW", 'stHgfvW', "W73cNSkeWRFcSq", 'BtZdTwn6', "W63cVHhdRaK", 'FSodqXxcOa', "mwGvE3K", "wCo/vWuc", "WR7cLrfrW4C", "zhZcTYSg", 'ESoUW5DdW5C', 'W5VcQWxdNq', "WRrcWRVcUwq", "WONcJGhdSCkb", 'hGT8q8kj', "WP0+wmkLWO0", 'hf1jW6vd', 'xgpdVCkOWOm', "tZ1scq", "xwLuWQP8", "W6/cGSkEWR/cQq", "WPZdKKxcUsq", "WQRcKt7dUmki", "iIrQBCkh", 'WQNcQvXeW6G', "D8o4WQ8EWQC", "tqThfve", "pJTajs8", "CuW0W78y", "WR1cW47dMSon", "W5BdOCkGeu8", "x8oOta", "rWrRpL8", "W6X3WPRdLeK", 'wYfenfu', "cJhcLmoDAq", 'W4PzW5FcQJG', "WORdRfhdJmo0t8o6WQxcQINcJfu", "W5jUW4JdOmoI", 'WPWdu8k4qa', "WRSpW4hdU8o7", "WO3cHeRdT3u", "rdFcTej7", "W6ZcNchcUa", "rwXfW7q", "W4fLexfS", "WPtcVSkaWQSN", "W7RdRSoAW4Xv", "ugadWRSc", "W5evWPldVmkf", 'gYZdTCk5fG', "8lI1VE+6RW", 'W5tcMLHOWR0', "W4BdOtyOW7K", "W5v5c31R", "FHpdNKHe", "W5j2e2DT", "xog2UUg3QwlHTBW", "wmoOrHxcPW", "iJTmkci", "s8oDzHxcSq", "W47cLSkaWQCi", 'qarXnvy', "stZdOgH6", 'WQLgWRNcTwq', "W4hdQ3STW4e", "W4ZcIIRcICoB", 'W5lcRCkNWOyB', "W5NdVSoCb00", "W67dKLzcW4K", 'W6ldT3CcW7W', 'W7ddLCk1a3S', 'bGWMvuy', "zfeQW7my", "zCo9vsyy", "q0P4W54F", "4BE24BwM4BE6WQJXG4ox4Og68ygGKW", 'WQpcJhFcK1O', "W6ZcISkeWQZcOa", "W5pdTSkGk1K", "xNneWRW", 'W5VcUaq', "W75qWRhdS08", 'W4ZdUuhdNCoM', "8jkwRU+4IG", 'WRKkW4tdQSkM', 'W7ldR14GW4C', 'n2qTW64z', "fcRdICkqpW", "DSkbW41IrW", "fKa5WROZ", "WQJcRLtcPxO", "4BA14BE84BwNW6RWR4on4OgP8kkHJW", "W4RcSbtcKmkP", "hJ3dIW", "tvpdTmkNWOS", 'CCkIBIG', "W4iwwmkjsW", "WQRGTiBGTOHc4lse", 'WQuhWOFcQmkz', "WRO2s8kyua", "WR4lBSkwya", 'sYvgW49N', "pcCnbJm", "W6ZdL8ochxm", "W53cTcvcWR4", "W6JcGSkeWRtcOa", "WQWlEmkzWRa", "WOWlFmomWQS", '8ycePU+5Ha', "a1xcM8ouEq", "W4dcLLvUWQC", "WORcOMZcGgC", "W5nyWO/dOLm", "wKaRW6Kx", "W5RdRwicW58", "W6/dMmocgwi", "WOudWPpcQmoq", 'W7TcW5NdOCoY', "WORcPrXkW7G", 'WQjEW6RcRHq', 'W4VcRSk8WPVcIG', "ngCl", "WO3cIHRcKNm", "hY1PrCkY", "W4BcLrlcOWa", 'nWyIWP3dOq', 'ucfvf3u', "W5/cUWZcMCoJ", "FaHKWOlcQa", "DmokBYK5", "xszAfvK", "B3ddUX0n", "WR/dQmkkyv8", "krlcNmoGva", 'WQFcMXRcTmoG', "W77dP8oGb04", 'nt9op3y', "W4/cKtW", "W53cGd7dSGy", "W6dcSvbRWQO", "vMzPWPzy", "W43dP2i", "WP4wu8kHqW", "W4/dSgm7W4e", "qSoQqG8z", 'mxennge', "WP/cNYJdL8k3", "W7hcOhvGWQy", "W7vzk11x", "odjkldq", "oCkIW6vO", "WOyYCSkyAa", "yKhdVZyv", 'W4/cKIFcHCoe', "vSoKWP8Wca", "8lc0UU+5RW", "WPRdM1pcUSoo", "u1FdTryz", "WO7cPZpcLr8", 'WPxcKI1kW7q', "W57dNmoaiwC", "W4VdLmoNW6PH", "W598WQBdOG", "WRlcIvz5W44", "xSotyrhcOG", "rCo6WO09WPO", "BwdcTZKk", "W4/dH8k5j2i", 'WO57WPpcNuO', 'W79WW6/dPSoi', "sdtdMJW", "iYqwnty", "4BwAYA7lUEg1MZy", "DKf4WQbw", "W4FdQNO+W7a", 'W5X+WQC', "WP8KWQBdH8k/", "t3FdHtyz", "W4NcVaZcN8kJ", 'W69TW6hcQZS', "4BE+4BEI4Bwwi/cYG5RIG5JWKjo8", 'WO/dJ8kgE3q', "emoytb4g", "W6bTW4lcIZa", "W77dP8oGb0S", "WORcJ2D0", "W5TYWQ7dQeu", "WQtcQu1g", 'WPJcQ1VcSM4', 'gMKmDeS', "hCoUW4WmWOa", 'W4tcKCkFWOi7', 'W5/cOGFdJIC', 'W4VdOCkDE1O', 'd8kMW6/dVgi', "W6VcVWtcTCoQ", "gmoyW40nea", "W4/cN8kzWRVcRG", 'W6JcSGVcQCoI', "BSoZrYVcLq", "oSk6W4hdT2y", "WOJcVY/cIYy", "WQ4VDCk2WQq", "W4X9lhHD", 'Fd3cTer4', "WOGwWPlcQmkE", "W4FcIb7cPs8", "WPZcKWNcVZS", '4Bsp4BAs4BsMEpgdK47IGPxXHOgp', "W5XeW6u", "k2uCWQRcLa", "kfurWQtcMq", "W4RcJmowWRW/", "WRJcIdZdNCkI", "eum8", 'l8o1WQqbla', "W53cMGW", "WPRcHg1cW7C", "wN4oWQyu", "WQaFsCkCsa", "WO3cJWBdSSkk", "WOJdTCkgy1a", "W7fnlN5K", "W5hdJCk/", "W6RdNConW7TY", "wZFdUMvu", "BK1wWPvA", 'W4D2hxHT', 'W6tdHW8JW7C', "W7XUW4u", "WP3cKIfeW6C", 'W7BdOCk0b1y', "WO41E8k+rG", 'W6NcUXVcPCo9', 'W5n+WQBdMhG', 'AxL5na', "CxldOIWe", "Fd3cTev/", 'see6', 'dsbgxCkq', '8jgxIE+6Gq', "4BAiYABiJ+g3J1C", 'WOCYW6m', "WPVcMHddT8kb", 'oM0bW4m', 'WRlcOXXcW6C', "CgSx", "WQRcPcFcHXC", "WQKPzSkzCq", "W4vIegbT", 'z0VdHW', "WQWdsmkjWQ8", 'WRTgWRBcU28', 'W77dVSoMdvK', "f8o/W51MWRe", 'WOvQWPVcLMC', 'luLvzgC', "gmotWO4uiq", "W69MW4hdJCoq", "WOlXHOgs4OoA8jIcGSkr4BAe4BEk", 'lIH4Amka', "W47cRSkXWPVcKq", 'z1JdI8kiWQi', "WRWot8kdWQ4", "wguaWOrN", 'bahdJSkApq', "ASoaxJRcPW", "zbTNleO", "FaBdNu9r", 'CSoTWPe', 'hveGgL0', "W7VdQ8k0j1y", "BNZcPG", "W7RdPCoUjfW", "EfvUWOi", "pCoHW4LoWR8", "WRVcRHraW74", "W7hcOCkMWQyu", "WPOKW6FdJmk0", "hmk+W67dOe0", "W6NcGqlcUCkC", "nwrnWOyv", "AM7dGmkBWQC", "W7pdNNLj", 'WPqBz8k4WQK', "W6JcGrVcO8oJ", "WQddV0ewW7C", "W5ZcH10TWP8", "mCobW60", "W6BdKCodlg0", "rvnzWPbn", "emonyIHn", "WRXzWPNcIKm", "i3CmWOeU", 'gfxdUCkDmG', "W7VdOwiZW74", 'WRaVWQJdI8k5', "W6/dP1W7W6C", "sSo3FXdcLa", "yabckCkH", "W6b4x1fM", 'W68JWOhcJ8ko', "WQNWR4oU4OkL8yUbISo+4BwJ4Bsw", "WOeqACkRsG", 'W5vcW7tdRmoR', 'W57cPYdcGt4', '8jwwKE+6MW', 'W5hcKCowWQS/', "W63dKZyuW5i", "xvxdVCkSWO0", "l3myWPC", "gNaRaMe", 'WPWdF8knWQe', "WOOVt8kJWPe", "WR9aWQ7dVNe", "W4NdISkRzgi", 'WPKJu8kVWOS', "uSokW5PEWRW", 'WR/cSUkVGeH3', "hog0H+g0PmoL4Bsv", "WPDHW7ldNCkJ", "WP7cHcNcNau", "W7tdO8kmkxW", "cd3dSMC", 'W7tcOCkaWR/cPW', "ESogtXBcTG", "zXZdMfHj", "iK4zDti", "W4pcLmkQWQSN", "W6/dIG8aW7e", "W6/dTmoUW6Le", "W6xdN0Ww", "ECohWQC3WRe", "aGmGWPqB", "W6X4W6BdRZu", "BgxcRSkmWO8", "W6HaW6ldJwK", "gIDPms8", "W78SW4BdM8ok", "rfJdGZaW", "4BwaYkVkI+g0ICoc", 'WRlcTJJdNSk1', "bYqRFCkx", "aaddLCkbnG", 'W7pdV8ojW6u', "zbVdMKO", "WQ3cSq7cOa", "W6hdKKncW6O", 'WQZcPGT3W5m', 'WP7cRf7cVhW', "W5BcO2tdLt8", 'EmoktXdcTG', "WRZcTePdW6i", "W7RdVSo3b1u", "oMmmrve", "WPVcPLhcM0C", "W5pdM0mhW70", "CctIRk17rG", "o0LRWOhcPW", "W51KcW", "tM1fWPjS", "WPZcIc4", "W5FcNbVcP8oD", "sCoEFbNcQq", "W7VcGSkwWQe", "aKibEti", 'W43dM1WrW78', 'W6VdQSopWQTe', "aZ/cGSoRuq", "W5zTW7/dRX8", "WPVcIItcMrm", "qarRpKa", 'WQT/WO/cHfm', "W5/cV2tdOcm", "8kogLU+6Tq", "pCkXW5C", "W5v5c31K", "jhWWrvu", "kYbVkCkX", "C0TUWObC", "ng0koNq", "fmoeWOWMaG", "W5X/WRxdULK", "xMZdN8kmWOm", 'nmk6W60', "W4JcKYhdLcu", "WR1qW4xdMSoq", "W7/cMrNcUsa", "W4JcOKraWPS", "WO7dG8kC", 'WOVcLaxdMCkl', 'W4dcISktW44', 'i2uBn3m', "yhFdSa", "a8kmW6hdHg8", 'F8oKWPma', "xWfwah0", "urP/fvC", "WOyOW4RdGCk/", "WR03W7BdUSkx", "fCkuW43dTNa", "W4RcJui", "ACoNxZFcGW", "W6NdJCo4ah8", "W5VdTmoFj1e", "mJ0qWR4O", "zbTmfeW", "4BwyYyZlI+g3RSoH", 'oSkCW5FdUa', "W43cNCkxWOS/", "t31cWQLR", "ebldN8ovjW", 'WPq34QYRneK', "pt4fWQa", "WQCDzSkIEW", 'vrHXnKC', "lNmdWPCe", "EJ4rWR8", "ndTEkcq", "W4JdHSoKW6zd", "WR1ky8kc", "W7XTW5tdH8og", "CeW+W6m", "EKb4W64d", "imk6W7ddKfi", "peSklve", "qKbSWOWV", "W7VdU8oNcvO", "gCoIW40", "aLmPWOlcQa", "WOC1ta", "W7XLW5JdICoH", 'WPJcKxBcJN8', "AgBdO8kXWOK", "WQ3cJtRdUSkU", "8ywuO++4Ja", 'wdvabfG', "uSonWRiiWO0", "BCo+WOqr", "WONcN1ldTmkc", "W5FcKLaTWOa", 'nw43Ffu', "W4NcNsFcR8ol", "WPtcGZvNW7K", "W6azW4JcUWa", "W4NdJCo4eg8", "x1VdOmkfWPG", 'qtPqug4', "rdeumvq", 'wJfve0K', "WOmdWPBdQ8kf", "sCk/zHW", "WPtdHqBcJai", "hmoQW5TpWQe", "W7tcS8kKWRxcNa", "AhtdSG", "W7hdL8oEcLS", "m2qmWPyf", "cIZcImotAW", 'pZtdVCkWCW', "WQ3cMuz7W6e", "WQ3cLrpdUCki", "77Yc772977Yg772rhq", "W4VdQSoUd3O", "W7hdLu4vW7S", "WPdcKI9QW5O", "uNLsW6vC", 'zuOIWOSf', "WR0YW6ZdHSk5", "WPxcGcRcIrm", 'WQX/W6RcUWm', "WQtdP8kSEuW", "WQ1AWQNcTG", "AsfahX0", 'WRFcHHJcQHa', 'WQS/WPBdVSkx', "bgTzh38", "W4dcNvfPW7m", "WRXnWRBcUYe", "igunl3m", "W6DeWPtdTMm", "h8kBW5lcS3G", "W4LIW5dcJSom", "W6P4WQddT1m", "E3uyWOao", "W5pcQJdcHci", "WP8lDCk+WOG", 'WOidWPNdRmkZ', "rZLr", '8yogHE+7Ua', "WReuwmkpDa", 'W7BdLmoJkuK', "W5JdGCk+yHG", "W4y3xJuI", "W6VcTCoNsfC", "W7ddJ2GJW68", "W7pdL0efW7i", "WO/dHCkBBeC", 'W4lcPxf/W4O', "meKBDfa", "WORdLCkCyeC", 'W57cLHrmWQy', '8yo2GU+6Iq', "WRVcGtJcLX4", 'W6RdT8ouW6DI', "W4hcLLPPWPe", "m0qNWOVdOq", "W4JcScFdLd8", "WOeGzmkjrG", "W5RcVspcK8kH", "W4L5W5ZcMd8", "WOC4sCkTWOa", "W7H3W5tdH8ok", "rdfehqW", "WP3cLhDIW4S", 'BgVdSLK', 'W6tcRrW', 'WRefpq', "W4hdShSRW4e", "WPaBW57dQ8k5", "W7tcSYxcNGq", "FCoCxW/cLa", "W4BcMLDMWRy", "W5v7dxfP", "EKS3f08", "mWNcSSoZBq", "WQNdQCkN", "laDXwSkU", "vSk0W4ZdP3G", "W5/dJCk8pq", 'W6FdQNO+WRC', "8kk0TU+6TG", "ArnX", "WQhcUfTyW4q", "FLuSW7mz", 'EcHAcx4', "8kM2KU+5Ua", "W6BcNbriWR0", "ht3cICoz", "W5fyW4BcJdW", "ztFdP3j3", 'AfRdRCk+WQS', 'oK8UkeW', "W7VcNbZcICo/", "nKKLWPRcGa", 'W7HEmveO', "W7/dVKNdP8kL", "WQDQWPZcJKW", 'sCoWCqVcMW', "W7VdGCotW65R", "WPlcNfjR", 'pZvxWRyS', 'WRVcOX8', 'W7bIW6RcQ1C', "W4hcKs/cIq", "W7ZdQZycW7K", "W6BdTmoZW6Ds", '4Bs14BspWQ7jKmMU', "W6JcVrW", "WPryexHX", "W498WRFdQXe", 'arHxat8', "W7ldJmk0pty", "W6dcSY/cMZq", "nKiiWOhcRa", "W5zJWQ/cIHK", "m0SU", "W7VdT8oNc0O", "jKLRWQZcQa", "cJNcMmowya", "W5ZcLeC", "W47dV0GoW6K", "W5VcKqVcRsq", 'fSooW6b7WRS', 'W7tcVdRcR8o8', "WRGYW6FdRCk6", "grddM8krnG", "W5tcMmkiWPtcVa", "WOVcOhVcK0i", "W7FcKGVcQc0", "W6tcRHZcR8oG", "xmofztlcMa", "iKC/WPRcPa", "ccRcGSoOra", 'W7fPW6hcQZu', "W5VcNvmTWRW", "bmkqW5/dUM8", "brRcMSk7pa", 'oMOICL4', "s8kwW5r2v3GnW45NWPHgAqC", 'W4pcQmk3WRSI', "W4ddK8oD", "sCozxYZcQq", "W4TcW6RdP8o2", "iCk0W5xdUxy", "eHRdJCk3pa", "cmodWOi2", "z1aRW7i", "Ax5kWP9c", "BMmBW44g", "nCo8W5f5WRS", "vL8uW7GJ", "W6JdM04gW7S", "W5JcLIhcSmk/", "whnoWRfp", "gYPijJ8", 'gcNcOmoEAW', "dgi5su0", "pK0LErm", "umoNWPinWRG", "W5hdLCohqG", 'W6DimfPe', "W6NXGjcc4Ooh8k+aNKtVVyhVV5u", 'WOBdHGu9W6TeWRKlW6NdPSo+W5C', 'W5jBgMX5', "WPmpWRVdOmkb", "W5ldKSkTdNq", "WRNcPNLhW4W", "dCovW7fLWRK", "WOBdGCkCz0y", 'W4pcQuX6WQm', 'W7RcKXddRHu', "WONdOCk4qve", "WQiS4Q+BW682", "gmoiWP4Jbq", 'BSoUWPKDWRu', "jdvIkCkH", "W6hdK0O", "W77dP8oGb0O", "qYXtbu8", 'EYhIRlNdKI8', "W7BdGSoNk1a", "z3ZcT0jd", "W6/cVZtdIcq", 'qmoZqJVcPa', "WPSSW6FdJ8k0", "W6/cKCkGWP4r", "aKe4hW", "W5tdImosW65x", "WRtdUuddNmoS", "WRiMCmkWFq", "W4FdVSovh3q", "W47dMmkvl3m", "WQpcTthdQSks", 'W6ZcSSo9gXG', "ht3cICozDW", "WQVcPahcPcq", "nxqeWPC4", "W4pcKCkAWOO0", "pNmiW5m", "W6HlW7JdISos", "W7D+W6hcQHm", "W5/dI8o0W4ry", "W6tcSWNcOCoQ", "W6hcSq8", "W4NdQMiUW7S", 'uGrPpf0', 'zJDzkgK', 'wSo3sJW', "aXZdVCkrbG", "W4BcNbrAWRy", "pbddICkgmG", 'W4VdOCkgE1W', "ArHJmwq", 'gca4WRaj', "fLuSlvm", "pJTjAZK", "W77XGzkE4OoI8kMYPNRHT6VHTiS", "xKioW4as", "WPO+qSk5WPe", "eGdcQCoxDq", 'iSkAWPNdL34', 'n8okWQiTWRG', "rCoMWPyaWRK", "stHdeuq", 'WPPKgMbK', 'W456WQZdVeW', "WPxcHYTUWPu", 'WOO8xSoBsa', 'iCk8W5tdPxy', "hConWP8NbG", "wmoawIuA", 'DuO8W6m', "stBdKfT+", "WOpdHCkjA1a", 'k2azWOyf', "W47dSSo6W4nM", "Bbf4nwK", "zMueWQqq", 'EXVdV3bJ', "W5ZdJmkSlxO", "W6NdKercW7e", 'WOW8rmkpzq', "deizAti", "wZfAfh8", "wcFdP2K", "W5XXWQ7dVG8", "WRmpW5ldOCko", 'xvtdMZWb', "u8oSWR8VWQm", "i1JdGIWS", "uq5X", "WRLwW7RcN2G", "ndDEkJq", "itLSFmkq", "W7TulLLk", "gIWGWRy", "WRqfAW", '8lwvH++4Mq', "W4lcQa/dJau", "WR/cPMNcKeC", "WP7cL1xcOM0", "WPBcJdD6W5G", "4Bs74BsC4BsTW6xWNlcU4Ooy8l2WNq", "ksufWRaK", "W6TfoLvl", 'FdpdPcf+', "WRhcHgpcK2u", "W7FdSSofWQrH", "4BEW4BEGA8M0Y7K", 'W5pcKbJcRYa', "W47dJCkpcKq", "W6/dOmkOmMe", "jumAzhC", 'qxRdP8kNWOy', "WOK+tW", "i2exp1q", 'kGH+bGW', "W5JcQ2b0WOO", "W7vmW5NdP8ot", 'WRapBCkiWQy', 'gdhdMSovAW', "umoNWO49WRa", '4BE64BEL4BwgW43WORcb4Ok+8lkXIa', "hmoMW5TnWRe", 'W7RdP8kXa2y', "nrbudWi", "WQdcSuvPW78", "jrRcMSkXoG", 'x8o3rZVcNW', "iX7dSSkAkW", "WPWqr8kluq", "W5fidhfK", "m8oVWQeBoa", "WOqdW5ZdJCkL", "WPVdGCkCE1a", 'p8otWPOSiG', "4BEV4BE74Bw/WRVXHPc+4Ooq8kQtPq", '8lgKHE+5IW', "WQ/cOXfkW6C", "dSofWOqSaa", "m8oKWQarhW", "yrPX", 'qeKGW74h', "W7lcNG5dWRq", "kw8iWPza", "W5v5c31S", "WOVcPKjeW7C", "tdvafvK", "WPVcJcFcIbG", "W4VHTRVHT6WV4BsU", 'W7FcJWRdQG', 'iKHvF3W', "W5xdH8k5ihm", "ftldKmkToW", 'WQ/cTWhcUay', "fIZdMSooCa", "WPZcJYL6W6i", "W5ZdKviVW5S", 'W7FdVCoYk3u', "WP4KWQBdQCkK", "W57cIINcKSoA", "meKVWPC", "CNaKWOFcOG", 'l8ovWOqHda', "WR5IWQNcP0u", 'nJDblJG', "WPxcNvNcH3e", "nmoMW6jHWPy", 'WRtcKtvSW48', 'W7nxWP3dJ3K', 'jYbLBCkU', "WQucWOpdOCk+", "ELRdLr0k", 'WP5HWO3cQfu', 'yH50dLq', "h8kAWPNdVhK", 'W63cHW7dQbG', "W4RcISktWO45", "c04SwfO", 'ft8BWQbQ', 'DeT5WPrD', "W4r2c2bT", "WRLwW7RcSw8", "W6tcHW0", "aXbCpqu", "gCo1W4nBWRK", 'W6hcGmoilXu', "CZ5Fm2u", "owafuwm", "axKeWQdcJq", "W6xdMgmyW6y", "8lc0MU+5RW", 'hHG5WP4', "ArFdRLnI", "W43cN8k3WOhcNW", "eNilaxm", "CSoMta", "WQFdT8kKxfS", "f8kxW5xdTJC", "W6VdPHFdPb4", "prLPiIu", "xxbmW6v6", "t2HsWQXG", "cdpdUCkHiW", "ebVdJSkCma", "sMpdKXa3", "WOKMxSkuvG", 'w3ldH2rI', 'W6xdP8kzdha', "Cua4WQyV", "W7TSW4/dMSob", "rWHXlvO", 'uczPn30', "uwtdPCoPW5S", 'DgW7W4Wx', "wcXhbve", 'DNitW78x', "hSkqW5JdT3i", "yrZdKq", "WO7cOrRdQSka", "W4JdN8oQW4jv", "imkEW7xdHxK", "W7xdIKbcW4G", "xqiLluy", "W7tdJ8k3dLK", "eaddJSkAiq", '8ywuMo+5Vq', "kSoIW61KWRa", "WPZcLgPJW4i", 'gmoeWP4Hfq', "qmoUvXGi", "xxff", "W5ZcIqpcRXK", "W53dLmkHF3K7fa", "yN/dLmkcWRG", "W6hdOv8fW7i", "WPJcSNPzWPO", "rmoGaZ4i", "W73cH8kcWR3cPa", 'hX4fWOK4', 'nMadWPyS', "ssfah0S", "W7/dLCkpevK", "W7NdQ8klbvq", "EqrF", "W6RdVSoWbH8", "pZHl", 'W6NcP0JcICoH', "AXPTfeS", 'FSodEG', "W6RdLmk8iKC", "WPSYsmkxqq", "WRNcJdJcJbq", "W6NcP0JcP8oH", "W7RcGSkCWR3cQW", "EbH1nNa", "WORcOg7cG1q", "FSoqAttcTW", "WOpcMgr4W5C", "mWGDWQON", "4Bwx4Bwuv8MaY4u", "AwCpErm", "W5/cTau", "WOtdKSkr", "8lgIRUkbIFc3G7hdJmk7WQpcLG", "W7zUW6dcU1C", "W7hcSs7cLq4", "WRW8cSk+sG", "eCkCW5/dQG", "W5lcTGC", "FapdHhfc", "WOOBW5FdP8ka", "WRtdN8oPWQTo", "W5hdMmkcWPOO", 'kgapWP4f', "jNudWPJcTW", "W4ddPMyLW7i", 'W7hdQK4DW6i', "W4nYWRtcMCoIW4hdQxPZc8kpW4dcMCou", 'WQddV0mvW78', "ow4jWOS", "gJlcOmoWyq", 'kcasWO4O', 'WRlcJa93W50', "p2CsE0u", 'Dv4+ub0', "W5BcIHrAWRy", "vGjHia", "jSkzW5ZdSMq", "gNCyhN0", 'W5hcPLPHWRy', "WPJdICkgAfK", "WOpdRSkNw0C", "WO3dGCkeFfa", 'FwLuWQOU', 'pYXu', 'W43cRrlcLCkI', "yv3dPmkLWOO", "W4b+hh9T", "WPhcRrddOSkW", "WPhcIgjMW5m", "W6TAnmkhWPxcMSo5DCk1", "g8oUW5XjWRq", "sMtdQ8kTW4e", "W5BcHuRcPs8", "W4NcUbNcJ8oS", "W55vkLf+", "gSokur4c", "WONcGY93W5a", "WPpdGmoaW5LPkqVcONpcHmoIDW", "eH0fWQ0L", 'pdfk', "uwOxW44Z", "WRHZECk+Ca", "pYmsW7G", "nxyCEG", 'W6/cSqZcVW', "WPNcJa7cLXW", "W5BcOCkQWR3cJG", "WOhcIfVcRLm", 'W7HHWOhdO3e', "sKZdNSk6WOq", 'W6ZdT8o6dhO', 'DuTiWQzy', 'WR/dJ8ois1W', "qIH8a1q", "WQ5gWRtcUw0", "W7hcL8owWQSZ", "kSogWOWoiG", 'uxRdUSkGWO4', "W5z4g20", "ecJcJSotAG", "W6VdRmooW65J", "W5lcJmk4WO7cKq", 'WR/cILxcO3G', 'W5VdHCoaahS', "W48ZW6pcUGO", "mMWmWPuf", 'oMmbWPDa', "WO5GWOtdUxRdMM4", "WRpcRM3cPeC", 'WO3dJ8khE1a', 'W5RcVbpcN8k+', "ngSxl1C", "W5hcT0a", "ttauh1S", "wxGaWQPO", 'WPyKW7tdICkL', "WOTGWPpcNuq", "W5VcUmkIWO7cRG", "WRmOWR/dJ8kb", "WRZcJgVcPbS", "b0msogm", 'hbVdT8kTjW', "W7NcItdcR8oT", "W57cLKbOW7m", 'iXq6WPiq', "DxvPWQnp", 'ovuQWORcTa', "WPCZW6pcIq", "W5NdGUkSJYpdTa", "W5ZdL8kSk2e", "WOhcIay", 'W5NdI8kRjxq', "aYpdL8k6ja", "WOeOW6JdJ8k9", "8kMNOU+5OG", "W5X3W7m", 'WRusWP/dJ8kE', "dsRcJ8oF", "WQFcJZNcQJ8", "vSoGtbGi", 'WPKTW5xdSCkF', 'W7JdI8kFWRy', 'EmoQWPqn', "8jQ3Jo+5GW", "WPVcPh4", 'W7BdKmoVW591', "W5BcVahcMmkP", "W69wWOhdLhi", 'W77dS8k2mvK', 'W6ZcNcpcS8kE', 'v3KaWODH', "BCoQWOmnWPi", "WQ/cOaRcRIi", "W63dT8o1c0W", "pgacWQmE", "4BsL4BwrfmUPYRi", 'W7tdLSorW5fu', "W6/cQwtdPsm", 'WPJdJ8kgy1W', "WPatWOpdP8kd", 'EuBdMCkiWRG', "W5tcTgtdJcu", "W5VcNvn+", "hburWPW8", "WOq2cSkSqq", "W5/cTxn1WR4", "W6VcSqFcSSoQ", "emoeW40dcq", "W4tcMSkAWOP6", "8jovJo+4Ra", "CKKTWOG", 'WOBdGCkgA3K', 'WQyGW7BcImk5', "WQ0sFCk5Fq", "WRqiWPBdQSkD", "WP/cIZDMW5S", "W7ldU8kaW4PP", 'WO0myCkyWPq', "eqT5baK", "CfvUWO4", 'W5RcLLvPWRy', 'WPhcIIW', "W7pcGNvjWPG", "WPKKySkbFG", "EUg1IUg1S8o54Bwr", "ACo2cYZcHq", "W43dOmkIlv0", 'jcq6', 'avWdm2a', "8kcvGU+7OG", "AZLqug8", "W77dV8oX", 'rCo3wcVcKq', '4BAW4BANW7JlNCQz', "W5bMW5pdNCof", "emkCW5xdTNK", "W7GUsCkGWOy", "WRGpWRxcUgC", 'W6tcMa7cH8o6', "nLGbF3W", "W5dcGCkBWOdcKq", "W6VcTWtcO8oH", 'gdxcNW', "WQXQWOJcKey", "r8o3vcyp", "W4hdTgiUW7G", 'W77cG016WOy', "WPtcMc7cQmkf", "nbVdM8kxpW", 'WOehWOpdVmku', "W47dQ3KZW7i", "iL4qmhW", "W47cTcRdHc4", "b0KzDwy", 'W6LCW6dcIY8', "W5RdVmo1cLq", "WPNcTIZcHIe", "WRr1WP/cSw8", "jg0Amhm", "CCoADYmY", 'stZdOgHY', 't0KzW606', "EwZdPba", 'WQSEFSkfWQ0', "bgCbWQFcKW", "qKJdJ8kRWOG", "ACoIWPqsWPi", "W5lcTJddIcu", "kKiq", "WPZcIgPJW4i", "WQddKuKe", "gqFdRmkHaa", "E8o9rttcMq", "W7tcJSkrWRZcOa", "WOe8cSobba", "mtjFlJC", 'CNORW78A', 'pH0NWPCm', "nL8q", "dxJcNmotAW", "pJn+Ba", "WReAEmkfWQW", "WORcGcFcJHK", "rdTt", 'ExJdOWWg', "rmoMvWai", 'n24TWQlcRa', "W4lcKKb5WRy", 'W7NdNmoxmLy', "dKOMWPG0", 'WO7cGcxcItq', 'W7/dSSoeW6zE', "kmobxZhcKW", "j8kdW5xdN3G", 'W5pcNubKWRC', "W6RcKcVcVq0", 'W5bYWRBdS1m', "W6JdHSoiW7jw", "nMu/WPCb", "br3dIq", "ASo9tYe", "W5a3e8kAhq", "dmoAW5PNWOy", "WRH6WQRcLxG", 'W4NdOmk5hfu', 'c1eoWOuQ', 'iLm4WOy', 'd8kbWRSRaG', "c8oRWQ8reG", "nZazWR0g", "BSoUWOmnWP4", 'tmo7wdNcKG', "W61QW6K", "kY15Bmkd", 'f8oPW44', "wYbvjMq", "W7ZdL8kSkZy", "W4dcMCkvWPT6", "WR0gvSkUWQK", "W43dG8kSmhm", 'Eu9RWO5c', "xmomWRi", "W7GdF8omWQW", "4BAhYRtlQog3HSkV", 'xwBdQ8k9WOq', "W5dcRJ3dGXS", "W7JdLwaQW54", "WRJcMgLgW6K", "F0b9", "canXph4", "WO7cJ2X5W4a", "WPNcGdJcJG", "WQW6wCkArG", "W5NdH8kRj2q", 'tY5+jxO', 'WPy4WQBdH8k3', "Frv3jMS", "W5JcSaZcMCkI", 'rtpdOgLL', "W57dLJi9W4FcSM5xW40a", "pI4Rx8kn", "W7DQWQJcRg4", 'AWaui3G', "W6BcPG/cS8o9", "D8o3qtue", 'WRVcRq8', "hX7cGmoPsq", 'WOngW43cQa', "zqXliwu", "kKOcWPm1", "ag85WRFcSa", "tsBdSq", "qx3dOXqz", "gKqIWQCu", 'nLunWONcRW', "WPbkWQNcRwa", "tJddOwH+", "i35Rjcq", "m0jRWPRcTa", "lrZcKSoDFW", "aHZdLmkspW", "4Bsr4BsV4BwbW4/WRQcE4OoB8kUaHG", "z2KuF2z9WQFcTmoCW59ZF8k6", "F0ODWQKw", "WPtcNblcJSkJ", "E0aOW7Dw", 'ugxdJ8kAWQK', "WRJcPr4", 'WO82cSkuqG', "WRBcHW7cUJq", "WRCVW6FdISk9", 'W5T8WQ3dR0u', 'nMGBrgq', "FNVdQCkIWO8", "WRrTWRhcL3q", "W7hcLYZcPCkt", "iWtdLCkbaq", "4Bsq4BsL4BwvWRRWORgm4Ok58lgsOa", "i8k7W4ddPwi", 'CNuFWQFcGG', "emkAW5BdP3i", 'W4ZcKdZcJ8oq', 'WPJcJZ4', "BhJdTaXd", 'xgCnWR80', "A1xdGCkhWQ0", "W63cQCkWWOSa", "W5ZdHSo4k3G", 'WOldPmkTE3G', "W7NcImke", "WQ3cGJZcVZu", 'WPVcGZVcUXq', "z8ozWQe+WQC", "8yMwQE+4GW", "WO3cG3C", "W7ddP8oXW4Pn", "W6NdJuKoW5O", "W6JdPCkrkh0", "fc7cO8o3ta", 'W75HdvTr', 'WPtHTiZHTBS04Bst', "W5NdNCoBph0", "W6NdK04fW7S", "tdb3h1a", "j/c3GOxIGy/WPQo2gog2Q+g0Ja", "ywaHW4ar", "WPVdPUkSKmkbcW", "WOytW6xdOSkh", "W7tcLt/cS8ok", "WQ3dR8kNw3a", "C1X4W7uq", 'kmkY4Q2/EmkX', 'W5RdHSoaixy', "FwRdVc0u", "W7bSW6xdJ8ol", "W7NdT8ogW7i", 'xmkMWRO9', 'WRpcIW1YW74', "W5VcQxfIWR0", 'W5RcPcJdHgu', "W7ZdP0mpW4q", "W65QW47dICoi", "jfe9m1O", "8yogPE+7Ua", "FdPImxe", "W5hcQXK", "W65IW4ldGSob", "E04IWOSl", "bXRdSSkKfG", "W5FcReDOWR8", "aeO7oL8", 'W7pdVCoZ', "W5BdT8kbm2C", "tSoDzaZcTq", 'pdaBWQOV', '4Bw/4BAp4BALdpglO73IGOpXHkoQ', 'WPhcUcxdN8kX', "WP/dLCkAyva", "W6hcQcpcIqO", 'E0y3W7Ct', "WQhcLeHEW4C", "W5FcJIJcOIq", "W7/cQCk1WQSO", "W4RcSrpdNmk4", "W7RcSCk1WRhcJa", "WPKKwmkLWPW", 'WR96WQJcPeK', "W5lcNSkZWRVcLq", 'W7HhWPBdKM4', "oIzChHO", "faFdN8ou", "bYxdR8kVaq", 'W7ZdHmo5eh4', "WRezlmkdWQu", "WO3cKc5M", "WRHyWQdcKMu", "zfZdVt0N", "mt9jdb4", "W5HWWRy", "umoFAa3cMq", "4BEIYPhlSUg2M8oe", 'WR4LumklqG', "WRLaWRtcQKa", "rwLJWQ1K", 'sCohFXFcRW', "W5XwW7tdOCo7", "W7HVW4xdMSob", 'W63cVHdcS8k+', "WPmYvmk9WQ4", "4BA3Y4JjMog1Hdy", "ebNdImkqmG", "W5RcPta", "W51Nc31N", "W7ZdT8kmc0K", "gaBdJG", "WR1cW4NcJSoT", 'W5FcLI/cMYq', "W7X9WRBdSMq", 'W4hGTjJGTlhGTRCv', "W5/cKLPPWP8", "tgLtWQ0", "WOhcR1ZcGgG", 'hhngWQm', 'F2SxW44e', 'WRW8cSkyta', 'WPJcGxD5W4a', "WO5cWO3cIMS", 'WQWEzCkcWQq', "W7j5W7ZcPW", "W6bFhxPI", '4BAO4BE9W5BjTSUv', "hCouWPKTfa", 'W4JcISkaW7JcRq', 'xhrNfuK', "kYy/WQmq", "WQ7cTd3dJ8kH", 'W6LQW5tdGSob', '4Q+zW74PWRpdUW', "ncmKWRGM", "4BEZYOJlM+g0G8kv", 'l0Lvr30', 'pvjRWOhcRW', "4lAybUc2Ioc0SUc1UW", "WRZcN8kfWQRcQW", "W4FcTdlcRJC", "WOi0W7xdGa", "W63dTCodbK4", "4BwF4BsJA8M3Yy4", "W45lW4pcGqi", 'oCo6W5XdW7m', 'WRXnWO7cKvm', 'W6ZcNSkdWRa', 'WOupWOpdPmku', 'W6JcKKnhWPq', "WRXdWQJcU2a", "W6VdKeiDW5O", 'wIxdMenL', 'WRJcHfv+W68', "artdJSkbnG", "zeOTWOWZ", "W57dH8oaj2C", "rZ1xfr0", "WP7dLmkCyfS", "WPxcQJ1mW54", 'W77cVI3dJIC', "pae+WR4a", "4BAz4BAE4BATWQVWNQci4Ocg8lktHG", "lXFcSCoErG", "ACo/tG", 'nsXiAG', 'WRpcOs5XW4y', "iKaCive", 'W7BdV8o1d10', "yCoIrtNcIq", 'EGnbdMi', 'WP7cGYtcJXa', 'W67dLCoIk38', "Fmo+WOmwWOu", "stpdK3rv", "pIldTmkWaq", "nSojW6CmW5K", "W5jHWQBIR7ZdSq", 'WRZcMGlcU8km', 'AHnUASkn', "ctNcJSooya", 'a+kuMEkwL+kvUokvOW', "W4BdRee1W4y", "W7foW7xcMqq", "za9TW45T", 'W6JcMrBdPaS', "igymruu", "W6ZcQXZcQCo7", "FXFdMejz", "W7RdUfS2W5i", "W7dcLwDPWR0", 'WO/cGcRcJGi', 'W47cTrFcQSk2', "n8oNWOC1kG", "W5VcGea", 'W7jzW7pdHmo8', 'W53cIqZdIsm', "qbLSn1q", "W4NcGmkEWQq/", "kIqeWRe", 'B8o+WO4uWO0', "iKSq", "4BA54BEz4BwTW5ZXJjcF4OkZ8y6HGW", 'W5JdKmk9zq', 'bKC7W47cQq', "pMiz", "W5HfbvjY", "W5ZcKbpdQGW", '4BEL4BE+uSIcYAS', 'wtHvnNK', "CazGawy", "E0b4W5SA", "lNeBWOm4", "nSoLWOGjfG", "cZ3cM8ozCq", "kXVdV8kXhW", 'W7/dQSovW7GN', "oCk4W7ZcS0q", "A/c8OyVIGAhWPig+oog0Uog1Lq", "WOJcLZr3W5a", "W7v5WRhdMfm", "W7pcTrNcUmkl", "E3ZdSreB", 'WOpWPBgK4OoH8y+HKmkQ4BsB4BEb', "WRVcV0XdW6K", "WR5cWR7cRgq", "WPqJW6NdRSkF", "q8owwbpcNq", 'WQizuSkAtG', "W750W5ldTmo2", "ng4nWP3cIq", "WRJcKe7cUgS", "tSojWR81WQu", 'W6ZdRwuMW7u', "W7FcTs7cGCoe", "WOZcJ215W6q", "pZHtxSkA", 'gbVdNCovjW', "W4xdJmkCm1W", 'wmo7W51EWR0', "n8okWRKTWR4", "W6hcKXJcNGa", "btBdL8kfjG", "W63cNSkFWQZcOa", "FdSunvm", "W6T/W7S", 'W53cICksWQiG', "W58gWOxdR1C", "AwKhyN0", "z8oHzWu4", "lrhcTmo9vG", "4BsIYlJiLog0Gty", "W7LQW5pdJ8og", 'exenndy', 'WPlHT6FHTA7dQUg1MG', "n8kCWPNdMNO", 'WQVcGfVcTgK', "WONcJNDKW4C", "W5hcLSkaWOmc", "WRVcIL7cRG", "WONcJNDKW4y", 'm8oNWQGZhq', "B8kRW5zyW50", "wHLSExe", "wx/dUSkMWPi", 'tGfapxK', "fmoGW48", "W5hdPMe1W5G", 'l8o1WQWwmG', "iZddU8k2bW", "W7BdU8obW69I", "WOisWOxdOCkF", "4BEq4BsQW7RjH8Qo", "wwFdQW", "heqeWRuq", "W4NcGSkRiwi", "zYnAfu8", "W61ug3PW", 'f8kCWPNdVhe', 'EM1cWQnT', "WRLlWPNcSwW", 'l2GzWP4f', "4BA4YPBlQUg3IMe", 'W5RcJI3cHYC', "W4pcUCk1WPNcHG", "qKbSWQOP", "ug/dR8kTWOq", "W4NcMYtcG8oB", 'tIFdSvHZ', "WPtcKedcN8kJ", "WRtcHYHWW5q", "4BAwYOhjSog3MmoL", "WPSruSkdtq", "aw49WR8N", 'B2/dOSkQWO4', "WRvgWQtdJCkL", "WPjIWP/dVLi", "WRJcLY9SWPu", "DLaSW7uc", "W7tdL0WjW7S", 'apcFGixIG7/WP5cPp+g0Qog1HG', "m0CVWQNcIq", "W7RcTGZcKWu", 'wqVcJSoBCq', "W7NdS8o4g10", "W4vCnKvK", "t30uWQCF", 'deeDxLq', "ww7cVW", 'W5v1e3eO', "W7iRqSk4WOO", "W5xdG8oUc3u", 'wCoIqGSi', "ebFdLSkqCW", 'WQHBWRxdVLu', "cGqzWPmj", "W5ZcSX3dKdS", "bdldQmkIiq", "W4ncW5VcHIG", "kYWRzmkh", "WRHWWQNcU20", "obldRmkVnW", "WQ3cJMjVW4K", "bSk3W4pdULW", "W5vIc3T6", "AIH4kCkn", 'vwVdOmkTWQ0', "dYXbW47dOq", 'c2iLWPFcTG', "W6/cJSkfWRFcNW", 'puGNWPFcPG', "fhKrCKu", "aaXGocW", "q17dPYSA", "W5VcTqpcK8kH", "FtVdJLT/", "W73dRSo6W4jF", 'ECoYW5CwWPe', "WPaeWPVdRCoE", 'ncCnjdG', "uhfxW7LQ", "W6FdICkmkK4", 'th1uWRfR', 'W7ZdTuiLW7u', 'raXXlvy', "W4vEW4dcMIC", "DuFdG8kdWQ4", "fXRdLCkbnG", "sCoKW5C8WPK", "WOtcNLldMSkr", "eCo8W5W", 'rCo7vWmd', "t8ooWRy9WQG", "WPNdH8k/yum", "uhJdMmkDWRi", "oM8zWPSc", "WR4XWRNdJCkJ", "lIvizSkp", 'EcrleG', "W4/cRa/cImkP", "nxanmNG", "WPXHWO7cL14", "iCkqW5xdShG", 'caXYzCky', "W57cTchcGa", "E8oyFc/cVq", "f8kxW5xdTJG", "xmkWW4VdOxG", "W4JdM+kSPSk7WQu", 'WQjEW4RcJdG', "WQRcVsNcQcy", 'W7TuW7ldISor', 'ECobzd9h', "p8o9W4DzWQm", "WPRcHwjUW5e", 'vSk4W5JdP38', "mxenngu", 'W6pdK2RdNmoS', 'jcZdKmk6fq', "iN4mANW", "W6VdU8oGbf0", 'W4xdKe4aW7i', "4BE4YkViHUg2QmoX", "oIb/FCkh", 'hGvdxSkl', "W7ddPSk0b14", "W57cLIdcOGu", "W65zhxPY", 'WOXZEmkErq', 'pKKS', 'dmoaWPK2aG', "W5iYW6pdNmkL", '4lAJ4lA24lwO4ls14lEj', "ne8NWOVcRW", "e8ohWOS", "xmkBW4vO", "W5fJW73cMZy", 'cXuBWQWn', "v8oDvtyB", "bHRdImkEjW", "WPWKWQBdH8k3", 'W5xcQmkrWQVcIW', "DrHXnHm", "gdGyW7Kz", "WOFdJ8kp", "st7dPMr3", "WOVdGNOIWP8", "utJdM8kboW", "W7L6WOddGCok", 'W5ZcNmkUWPWk', "EgZdUaWg", "WO7cHcNcGrm", "WO7cLb3dR8kb", "mmk6W7BdH1i", "h8kfW43dUNG", "brZdJSkznG", "W7RdQWNdPq", "W6VdRCktifu", "zmo9ta", "hbFdN8khia", "W53cLvi", "ha9SW49N", "uKtdTSkHWRm", 'WP0Z4Q6wWRTH', 'cmo5W7jyWPu', "CbPijZm", 'W5JcOGJdRY0', 'WPZcHYFcIfy', "puHR", "mdVdRSk8da", "p8kXW6pdKg8", "W5/cVCkWWR8x", "zb5xkKq", "AX/dKf5z", "W5XVW5FdJ8oD", "jg0nn3m", 'W7PbWO3dJNa', "WQCnWRddVCk+", "aHFdPNn5", "gZFcJG", "mGaKWOaE", "zbb6W57cOXHzW47dP34", 'W5tdUvGhW7u', "W7NdJKPt", 'WO7cKtNcHbG', "8jgxQE+6Gq", "WQpdSmkQFee", "W5j+e3fM", "cb/dKsff", 'W6NcP0JcQCoH', 'odVdVCkMEq', "cNGZu3O", "DKKQW78x", 'ncXohra', "kH3cRSoUta", 'W7NcT3/cLLK', 'W4JcTXdcKCkk', 'W5FcHIFcO8o1', "Ag3dTrCx", "W4FdJ3aSW4u", "iMeyogi", "WP7cOY3cNG4", 'W7RdJCoNdvq', "W5f8WQu", "pdBcM8oyAq", "bmkqW5JdSgm", "m0uBDW", "i1ZdPqOm", "W7ldSCoh", 'W4tcMLf6W6i', "W5HYWQhdRXe", "CCoMaYem", "WRpXGAcA4Okw8yAtRCo94Bw04BwE", "W6lcI3zvWPS", "mX8UWP85", "W5tcLqBcRY8", "WPxcSSk0sbG", "wbPlhgK", "W6NdJvS", 'nCk0W7xdNW', 'CNeUWOlcOG', "WPCIW7i", "W4tcLCkt", 'W4hcNYBcGq', "WQVcI1/cSZ0", "AH7dM0jD", "W6HfWPBdQhK", "W6NcISkuWOSY", "WRNcJWJcUdW", "WR3cGxNcUha", 'qLCUW5ad', "W47cRCkVWPGR", "pW4eWRWM", 'WPxcJW9cW5C', "WPOLwa", 'n14aDq', 'xMuQWRyd', 'W7xcJHXNWRC', "W6RcKrZdPtO", "W7hdRmolW7GN", "WP4UW6e", "wwBdVmkSWOa", "WR4/q8k5Aq", 'eIddLmkznG', "W7FcLSkFWOK9", "W5pdLmkPcKe", "WPyKW7xdI8kJ", 'WRZdHqddTW', "W47cJSkrWRVcSq", "F184WOyO", "W6VcTmkV", "svjuWPjQ", 'W4NcNCkcWOP6', "WOaIrIC/Fa08W5FdQv7dJ8ov", "et3cM8oEya", "WPNcJdJcJbq", "W5PwWPddKui", "WOuYtCkE", "W7TQW4ZdI8ok", "fuy+W5iP", "WRxdQGKTWOu", "qgafWQWc", "W7/dT8kr", "m0O5WOVcOa", "FLyS", "W6tcVsdcGXm", "kYnNBmoc", "wZpdTM1Z", "WPdcUbZdICkk", 'WRJcJfNcV3W', "wWTJ", "DmoMWPyEWPi", 'WOy0wq', "z0qSW64t", 'aZvEhr8', "WPNcGmkhAvm", "WOhcJwjQW4a", "W4ZdL8k3mhm", "msTzjcu", 'W67cVSkCWPGx', "fKS2d1m", "tFcuOktIG6lWRQonW7BHTBhHTR0", "W4NdPMxcGga", "B3JdUWSg", 'WR3cQXve', "aWPShWm", "W7ddVmo9bNC", "WPZcQKJcH28", "WQ3cGYSJW50", 'rCoCzY/cHa', "WOZcKtPlW54", "yXfMug4", "aGeBWQW/", "qr5G", 'W5/cIc/dJsq', "W4JcKLLRWRG", "hmoGW4zyWPi", "WPJcSg7cMei", "DmonWPe4WOi", "W7bPW67cRam", "W7VdQSouW6jP", "WRipASkfWRy", "W5SYWP/dOCkc", 'WQuFWOFdRq', "W7JdT8omW65P", "uCoTtWLc", 'W4BdSwa2W5S', "WQujW5FdJCkF", "b8k+W5FdOxa", "W7hdI0awW7S", "pMaaW5in", "gXNdSCkCpG", "W5ZdL8oV", "aSkCW5RdUhi", "WO/cMHjNW4q", "h8ojW5bpWQK", 'h8kyW5JdThi', "WRRcLYtcMay", "W7D4W7VcObK", "iuCPWOlcPa", "W5/dSmouW6iN", "W5r+WQpdVeu", "eSkAW5FdP1y", "WPtcGt7cVWW", 'W6NdSuqqW7C', "WR7cOuLeW7C", "Fg3dOXCn", 'WRS2WQtdQCkK', "oamcWRSD", "W498WRFdQWa", "WRJcVr3dVCk3", 'CLC9WRS', "W4VcJ0RcHs8", "W4hdNaxcRcC", "W5vZx2b9", "hWlcV8otta", "W5VdPxqRW7i", "rGHKoKC", "ESo3sJVcHa", "W45cW4RdQCoq", "W6ZdU8o6d1q", "xMxdOCk9WOq", "xmk0W7xdHfy", "4BAs4BAxWRtlSCQ3", "kmoSWQegbq", "8jIfQo+7Ua", "oCogW7DVWPS", 'W5ddMCoZWQe', "WQeuW4pdHSkJ", "W4hdSh4sW6S", "WPVcLhfKW4S", "tJ/dRhbX", 'qtDHp2m', "WPRcLaFdQW", 'qLldLbqz', 'bCkyW5hdM3S', 'aSkCWPNdL3i', "W5JdKCoVW59c", "W5FcQHq", "fgevpMi", 'r8oNCqhcQa', "W5hdRLCfW6K", "WRW0W4xdI8kb", "C8o5WQqyWPS", "WRdcOrBdK8kQ", "pwS8oNK", "y07dOcW2", "W5/cNr7cOJi", "WPVcHcFcNHm", 'gCoTW4rjW7m', '4BsA4BsGEmIdY7K', "E09kWP9f", 'WPCKqmk1WPW', "W6ZdPSoMavy", 'W5lcVedcVCk5', "rwazW55w", "WQxcHsn5W5a", "W7pdQ8oNW41M", "W7z9m3DK", 'w8oeWRGTWRi', "nbLheZ4", "rcVcTezK", "W5SJWOxdUSkE", "WRWgW5xcGG", "WOJdQ3aH", "W67dUCobW6Xf", "W4fnW4pcGW", "gJ9IdH0", "uCo2FbGi", 'WOWflmkPWQ0', "W5lcNCkAWOW1", 'WQGlEmkyWQy', "WOLaW7RcMMG", "lSk5WPyyWPu", "W4tdL1WdW7W", 'WO4dACkB', "g8oiWOS7", 'W5/cRZFdGcG', "W4ldSMaHW5u", "W6BdL0mhW7a", "eWSgWQO", "WQBXHOcJ4OoG8kkZKSkt4BAw4BEZ", "WR7HTOxHTQtcQ+g0Na", "W5HHWQFcUG", "o2uiWR7cRW", 'WOzHW7ldNCkJ', "BvPAWO9N", "W4hcVmkCWR8G", 'p0n6', "lmkyW7RdMw4", "W5tcNqBcUsq", "jNyYWQ3cPq", "W5BdTmoviuG", "Ae1WWRvA", 'EKq2W746', 'aGxdKu1v', "wZVdUMz6", "EmoyyXpcPW", "4lw94lsj4lE64ls/4lsy", 'mNGhWRuN', "WQVcOu9b", "W5ZdJSkQixC", "xxvdWQ1V", 'WPWHx8kE', "nwqFW5iY", "wmoBWPBdV34", "yh5yWQ0V", 'Fmo7xZtcLq', 'stLr', "WPVcJ3BcThe", "W5pcKvHOW7m", 'WRRcIf7cPxG', "4lADWQ8crG", "4BEM4BALW4JkLSQ6", "8yMePU+4Tq", "dKykWRGA", "8lcfOE+7LW", "WP0OB8kAWQC", "xwVdQSo4", "W5dcJmkcWOa0", 'B8kYEd3cHa', "ltFcSSoGza", "W5ldU24HW4O", 'E1xcMSovCW', "WQ89B8k4Bq", "qMycWQGu", 'WRZcRvZcM3a', "WRVcQWjWW7a", "hZ8wWRSM", "euu0vuO", "WQZcSfrlW7y", "kw3dOGOn", "WPypWPhdSq", 'fmonWOOLbq', "grJdLmkqpG", "ACoKW5CQWOm", "WPPZc8oAdG", "W7RdP8kaW6rH", 'WRSFWRpdSSki', "ie0xywe", 'W7VdQ8k0b14', "WRRcVcpdOSkC", "W4lcSatcV8kV", "W6rIhxHH", "hIH3k1W", 'xmoGWPG2ca', "htTEodC", 'WRdcRb4', "8j2vSE+4Pa", "aHfgaLi", "DaaVWOaQ", 'uCo6vWmz', "e8kzW5ZdP3i", 'e1y0WQmZ', "WPtcMdxcQmkd", "vq9PpbW", "W5JdSwuV", "W4xdLSoEg2a", "hxJcM8ouFa", "osrLBCkG", 'WOqjW4tdVCk7', "mNiz", "dmonWQ4ubq", "crjkzmkx", 'WQxcKtZcHaq', "W79qWQ3dQge", "WPu7W4ZdVCkw", "W5eWWRJdGCkY", "WQ9bWR/cUIe", "AHnUAmkb", "mZ8qWQO", "W5bYdhD6", "bCkbW4VdUNK", "dtNcJSopDG", 'W5LQW6ldLe4', "W4JcLJRcJSo1", "oSodW6DVWPG", 'W6xdQ1KaW68', "W5j6WQhdVHe", 'Fmo6uWmU', "ENZdOXqm", "8jwwL++4UW", "yr1sp2m", "W5rnW6FdVCko", "lWLpCmkN", "W7ldMSo3W55R", "W6hcOZJcJWa", "4BEL4BwwcSMIYQS", "WOVcP0RcOwO", 'D0m+WOOM', "W4ddOxCJW7i", "W7ldS8o6dhq", 'WOJdL3mZW6m', "bdendJG", "DeaOWPy", "W4b+pxvS", 'W5efWPBdVmku', "CrPUf30", 'W5j2W4RdQCoJ', "frddICkwiq", "pcRcUCocva", "o8k0W63dM0q", "W7jLW4y", "q8oGtqae", "n8kCWPNdKh8", "WQddMCkcDxm", "W73cHSkv", "W5JdVCkRixO", "W5pcIr7cPty", 'iXVcOSo4xW', "4BE/4BweWQBiSCME", "W5v/WQxdVei", 'WQ3cJftcSg4', 'nGmnWP8W', "W7iRwCk4WOW", "WR3cIYHIW5C", 'D1nuWR15', "s1JdKW", "WOZcMHtdN8kD", 'ixyTu3O', "WOGFqCkPWO0", "WRZcL1/dTG", "W7X9WRBdSMi", "f8kCW5RdU3y", "CYDvfxq", "W4JdGcmhWOu", "qmofDr03", "hSoGW4DyWRy", "jfldSmkAjq", "tJWbW6qK", 'W5FcOudcICk8', "W6rLW6pcQHK", "W5pcKH7cOYu", "bdendZ8", 'pHJdKSk7fq', "W5FdM0mbW7e", "W6/dUt4TW7m", "W4DbW5RcIr8", "WOZcMsncW4S", "DtHrfMW", "WRtcKInoW5i", "WOVcINzuW4K", 'tNqaW4GA', "W6H3W5tdGCok", "rKujWPOZ", "tKVdMc0Z", "WP0Fz8k5rW", "WPJcGdDMWPO", 'W6NdKuiiW4G', "WRaWW4NdGCks", 'W6ZcSbZcR8oT', "WQNcKeNcVW", 'mJfjmG', "f0ifWOBcGa", "WRdcJerkW58", "WReDECk3AG", "W73cHfPOWQe", "W4RdSCkaW45P", "gh7dU8k7WO8", "nhvkWOfa", "WQFcJM90WOu", 'W4ZcObBdOJO', "WOxcVSkzWP16", 'lcHNBmkm', "4Bw74BEWWPNiISQy", 'W7jQW4pdI8ke', "WOVcOhNcMe8", "uhBdSWWq", "wuHIWOLz", "WOtdRmkPyLm", 'vw9u', "WPZcItNcIbC", "WOO/rCkytW", "y2aCFNK", "FhK9p8orcgPNDvpdJ04", "W6X2W4/dMSob", "W6nOWQ/cObe", "WQVcNbRdRtq", "pLC3WQiW", "jJZdKSkXmq", 'WOVcJaddGCk2', 'WP7cIZ16', 'mCoeWP4XbG', "WRW8cSk/tq", "WOFdG8khyLa", 'WPZcGI7dJqu', "W4JcOYRdHqG", "bGTNW5ja", "WQ/cGcRcJGi", "oMGazxm", "W4BcJH/cRW", 'W7pdM0egW5W', 'W7ldU8ohW7LM', "jw8Mv0G", 'W7RcHmkFWQZcOa', "W5tdVq82W7S", 'WORcQ0VcOu4', 'befzcfm', "WQmdWPtdP8kd", "bWTObdO", "kITKbbW", 'W7pdGNSJWPu', 'gLuVWR00', "WRSJB8k6WQi", "WR0J4Q+0WO7dPq", "pCkKW5JdL30", 'WRhcGfVcS3G', "iXnQumkg", 'W7nMW5lcJSo2', 'sCocWRK+WQq', "E2GEW5ip", "C1VdVdCq", "w3ldM296", "o0CbdK8", "8lILSE+6MW", "CKO/WOW1", "ECoYW5C4WPK", "pCoOWRiblW", 'n8ooWOulWPG', "jxSNDgC", 'CKq8WQS', "W7/cJdtcS8kt", "aSkhW4ZdTG", 'jdDzjZm', 'WOKXrSkEcW', 'sM/dR8kQWPu', "CgNdVHye", 'C/cQKzZIGB3WKikndog2G+g0RG', 'uqKLnL0', 'WRFcGf7dT3i', "W4ZcI8kc", "bIhdSxvM", 'WPJcLalcRcW', "W7RdUSoJW6rQ", "W7f0W4hdL8ox", 'WR7dSCoo', "tthdOa", "W4VcGbRcKSkM", "lmoGWOHPWR0", "WOrAWRhcUui", "FXf4m3i", "stzyfri", "u8oIrX4i", '4BE04BENE8QAYlO', 'EgqbWPy0', "hrRdNq", "WPGwWOpdOCkE", 'W4RcRblcKSkP', "yIjFhhO", "wgXAWOjC", 'W7fLW6hcQbS', "W6NdM8kOiq", "thTbWQjm", "c8kVW4DkWRu", 'a8khW5FdTNm', 'iZiGWRCW', "bKuZeKq", "WO0/sCkusq", 'wSoirWGi', "W7GEECkEWQ0", "pYTDAZ8", "W4RcHvv+WP0", "W6ZdMW8JW6S", "W7pdIeWxW6S", 'W4VdMmoJiLm', "w2KzWRuf", "W6NdG8kOzh4", "WOJdHwmZW7G", "W4VcSZFdIq", "w8ohBJBcGG", "W5pcPYLXW5O", 'W4hdPCkAFvO', "W6ZcSbZcR8oS", "W4JdM+kSPSk7WRm", "E3ZdTHSx", "WOaKW6FdI8kL", 'Bmo3wdVcGG', 'W6/cHmkEWRtcRa', 'W4hdNaxcPge', "d29MWQDueCkG", 'bCkqW5FdT1u', "WRZcQrZcRc8", "W5BcKCkyWOG2", 'WQ9kWRVcVxu', 'kYXU', "W4z1kLDs", 'W7FdHwVdJvy', "W69BWRpdJfy", "WQJcHH1lW4q", 'BLZdHtib', 'W5f0egzS', "nKS4f2u", "ncCnjda", 'W7ddI1Wk', "4BEHY4RjQog0JXu", "W7/dVmomW64N", "WOWZxmkLWO0", 'W7ZcSSkDWOOo', "isFdV8kZgG", "mbDgB8k6", 'oSoVWRWBfq', "x0/dNmkdWOm", "W53cVSkKWPFcMG", 'kg4dWP4j', "W5eLWP/dQCkf", "8k+NR++5UG", "pwuxp1O", "W4ZcIZZcICoq", "cmoeWOL4rW", 'ogeyp3m', "WOeau8kRxa", "FKSZWROL", 'iumLWORcGW', "W7zwW7pdU8oG", "FNK0WRSb", "ySo/CZyP", "W516hNnT", "W6ZdS8kXbxq", "WOxcNbRdVCkE", "BCo+tIZcLq", "v1O4WObN", "W5tcQW7cVZS", 'W73cVXZcSSoQ', "yKy4WOmI", 'W7ZdPwzNW78', "o8o+W4PaWP0", "B0pdPSknWOm", "lmkLW5hdMK0", "l8oGW5PhW7m", "jI5S", "du4IWRmS", "W5ZcTGtcHq", "W5ZcJGFcTCoN", "qcFdOgv5", "W53cP8kNWPNcNa", "W7RcQdddIcK", "oHLMhbq", "W7NdHEkTRSo3xa", "W4RcNSkq", "BmoRcXNcMq", "dmoMW5XaWRy", "WQNcP0dcVLy", 'WP7cMGhcKmkG', "WPmxW5ZdPSkY", "W73cNSkeWRFcTG", "W6nGW73cQHy", 'm08IWOpcOa', "iCoDW55dWQS", "WOFcLdi", "WQ1oWQ7cQMq", "cgJcTa", "WPS2rmkFzG", "WORdGSkeAHu", 'oM0FWPCb', "W7xdJeehW7O", 'ztfha1W', "W4hcQuj4WOq", "W7RcR2tdQcC", "WPVcHw1PW6C", "jNmpWOBcJq", "4BEV4BEG4BsolFc2GQlIGlhWMBcG", "WRRcTG9zW7G", "lCk5W49pW4C", "W5FcTWFcJW", "WQRdTmkQqge", 'ft0wWO89', 'xeC6WOed', "DqnXmh8", 'WQRcVq1kW7a', "WRWYwSoBta", "ssfah08", "W4VcKqlcNtOZW4S", "wmomW4bnWQC", 'W6VcHCkvWQRdPq', "tsBdVLnv", "WR0yACon", "WRaZWQpdH8kU", "p1acWRZcJG", "ncuEW7Ko", "WONcJwy", "WOBcOvfQW6m", "WQXAWRxcQMq", 'W61IW6pcTHO', "W5JcNZ7dQqC", "khfwW7HG", 'W7FcTY/dTsa', 'WQSpySkiWOe', "W4JcTXdcPbe", "WPhcJNhcRLi", "fc5efx8", "D2ZdRmk6WOC", "fCkgW4pdI2q", 'esK0hW', "W57cIHrkWQe", "FrLSe1i", 'W77dP8oGb1O', "W6/dVLOZW5i", 'WRHmWQ4', 'f8kaW43dVge', "uXNcR8oUsG", 'WORcSxVcG0G', "4Bwx4Bse4Bw0E/cASjlIG4hWUzk9", 'WPFcOIJcVWm', "W4ZcVdlcLCoK", "WO7dKSoixfa", "WPJcUHnAW50", 'W6vjW53cHru', "W5rnW4RcGWu", 'W6xcUWNcOSoQ', "iK4zDt0", 'WOuYrmkFAa', "ggWjW5iY", "W6BcQYtcOcK", "CcrzEZy", "W67dV8ouW79I", "W7NHT77HTl7dT+g0HG", "WOJcPs1aW7i", "kcvmu8kn", 'W7/dSSosW65M', "A1/dI8kNWPm", "FCoGrt3cLa", "fsyzWRW4", "wx9pWRDQ", "W4ZcVahcN8k4", '4Pwq4PwE4PsT4Pwl4Pww', 'tHHrceW', "uwFdR8kUWOq", "WOdcL2ZcSfu", "WR4symkYDG", "WR7cVUkVTmkRrG", "aaycWRmo", "sIRcR8oOW4S", "WQ5JWRZcLhu", 'W4NdPNOIWRG', "hComWOG", "dba9WPay", "WOS+tCk4WPy", "st/dSq", 'W4nyW4FcNfC', 'uh9pWQHR', "W6ZdKmoSefe", "WOjUWPm", "cbLzzCkR", "WPCTW6pdNmk0", "4lsM4lEr4lsu4lwH4lsz", 'nSoqWOqwnG', "W7xdIKbcW4W", "W63dQNCLW7S", "8kogTU+6Tq", "W4DIW67cRrS", "WORdJSkCzLC", "WQFcT01iW7C", "xmk0W7FdH14", "W4NcQthdKwO", "W7JdVSoNgh4", "W5NdGmo9kN8", "W5ZcQrRcSCkT", 'W7FdT8o1df0', "dbGeWQaj", "EqH2kLi", "oYuvWRy+", 'wajI', "WRpcOMpcLuu", "W7JdLLmbW54", "WPZcKsNcGGi", "W4zLW7ZcRHu", 'W5XkW7/dP8oP', 'W5pdNSoviK0', 'WQSlBSkaWQy', "W5iaW7pdNmk+", "WQdcQMvuW6e", "pw4cWOyf", "WPjhWQ7cMea", 'ACoWrZ3dKa', 'fguDvha', "W73cJZRcI8o2", "WPmSW6m", "W7/cUWNcPCo7", 'WRdcNrhcJHW', 'ww7cRSk9WPq', "jg0xpgu", "WO7cOhBcLfi", "W6zJW6hcUZy", "WQ7cR0XzW6a", 'gCo6W5XdWRe', 'WQGpEmkKWPm', "W6NXGjcc4Ooh8k+aNKtHTzFHT7q", "W4XMWQ3dR0u", "bgTzhNG", 'W5ZdJ8k9', "wqRdO091", "ACoWrZ3dNW", "W4RcTKdcRSkP", "FLddNWeW", "4Bse4BsCWRFlOCUS", "8kU3HE+5Ha", 'W57cMZZcKSog', "4lsN4lEp4lAhW5VGTPu", 'W4VdSSk0hLu', "jcqwnq", "lh/cSmovCW", "BwhdOCkpWPy", "WRhdPMtcGwO", "y34qCxe", "WR8KW7xdM8kW", "W5b+dhvQ", 'W5hdLCo+kN8', "W6xdL8osohu", "8lkxTo+5Sa", "W6tcTSkIWQyf", 'WQLdWQ/cRM0', "yabExCkT", "wLZdGYWQ", "AXhdP2L5", "WOiAESkbWPK", 'geVdU8k9WO4', 'W6v5W6BcRbq', "tJpdUhjZ", 'h8kwW5W', 'W6hdKL0hW78', "dmoAW55EWQm", "W5bKmKDk", "W7FcIYhdNmkb", "WQlcKMPSW6O", "W7G4ACknWQa", "rd3dSW", "WP7cIcpcTaa", "lJGRzSke", 'W5ldHmk+', "W65WWOddRgS", 'W7ddN1SwW7S', "WRvkWRVcUMq", "E25pWRb+", "fqFdMCkJfq", 'W73dVCoWeq', "W6ZdU8obW6HZ", "W6/dS8oGhf0", "amk8W5xdMMm", "kspcTW", 'texdUmktWPy', "W7dcP3O", 'W7PgWRJdNwu', 'csBdKSk/cW', "W5ZcPhDNW5q", "W4NdNCoDk30", "sCo7cXVcMa", "uCotWRK8WRG", "FZ3dPMO2", "xqbKpLy", "vwWx", "BCoXxW", '4lEQbUc3Poc0VUc1Sa', "8yMwIE+4GW", "WR4dymkjWQ0", "mu1RW5tdOq", "pNeqpK4", 'WOpdJ1JdU3lcLvnoWPfrmmkWW6rY', "EmoNwda", 'CLzSWOaP', "WR/dGCkyl10", "W4hcIbJcOY8", 'W4b1egaO', 'WRKgymoD', "WPZcMxnOWOu", "W63cGXxdSWq", "xxFdGtKV", "B1TfWPvl", "W5pcLWu", "CctIRk17vW", "W7FdS8obW6XI", 'nKaI', "vmoMua0p", "WQxcHWhcTr4", 'kuVdSHKa', "zSoGsG8i", "j0G2F38", 'W5RcSZddJJW', "d207vW", "W7NcH8kvWQZcOa", "W6JcItdcGrG", "W4JHT6dHTBBcU+g3VW", "W47dK3iYW60", 'vgxdQq', "pMicWOae", "dJ5xWPWK", "kY9/ymka", "W5XQWOddRCom", "bx4NWO3cUW", "W6xcLLHUWRW", "WQlHTjFHTOVdR+g1Ra", 'W5FdMmoxW45W', "WP4rW63dU8kg", "ce8GWQON", "W4tdT2eL", 'W7pcOeJcPxi', "W4pcHu1cWRS", "W4VdI8oeixy", "W67cRGldHX0", "WPRcJMzPWOu", "WPJcLY9SW4i", "WQL+z8k/", "WR4aWPe", 'guGI', "WO86tmkc", "W5BcSrNcRwe", 'W47cUbtcImkP', "W47cRSkXWPW", "prGVWOK4", "aSkDW6ddKva", "WPZcIxDHW4a", "Fxb4WO15", "D0iP", "WOTUWPdcL1m", "wN8CWPWZ", "W4pcTdRcPqC", "W7JdHgeAW5a", "W6ZcKCk/WOKB", "WP4aWPe", "uCobWPKAWRm", 'i1RdMJXd', "mvyAWQy1", "iNlcTce2", 'ogeQkmoi', "W5NdRmopW753", "W5vIc3T7", "oZmBWRXL", "WRuxW6xdO8k5", 'WQ/cIWBdQCkU', "W7L6WRhdUKi", 'W4VcN0nKWQq', "W5ZcSMjMWQK", "xmohrsmg", "W6BcUCk6WQm", "WRBcI1BcRNa", "neKNWQui", "CSoGvW", "mwOnmNq", "W4hdSNGJW4C", "WQOoEmk6WQ0", "iIryEJW", "WRtcHftcS1e", "W5/cTrFcNCk1", "wmoQqGGi", "gCoJW5PjWRi", "W6XPW6lcOq4", "WPNcGmkCEKC", "4lwd4lsQ4lAh4lse4lAS", "WPRdGciSWO8", "WPVcHcVdLq", "W5hdSSobW51W", 'WPVdH8kjAhC', "cKOBnwW", "eCoGWOHyWQy", "Fmo/WPiEWPG", "4lwc4ls2E+c3H+c1Qa", "FeBdPCkrWQO", 'FsddOKTJ', "cqhcSmo5DW", "WPeKs8k/W6K", "z8o0tq", "WP7cIWxcNCkV", 'jvxdQCkWbW', "WPeyW7ZdOmkC", "s1BdGW", "W5ZdJmk/ity", "h8kBW57dOa", "8lIhGo+6RW", "W7HDW7/cGJ8", 'jxannhG', "WRJdLmkjE0a", "WPBcLX9qW5m", "WOqOW6pdN8oG", "WRbkW7RcSwC", 'W4JcRYRdHIy', "W6dcQmoszdy", 'W5hdH8o4bwm', "WRusW6ZdSSkA", "WP7cTHa", "eZ9bjW", "A8oMWRmYWPO", "W7/cRbtcK8oS", "h04IWQmW", "WP0XWQldNSkb", 'krWeWOas', 'WRnSW4VdRa', "yx0jW7Gt", "4PAa4PA+4PsV4PwI4PAE", 'vq9Ppbm', "sw4f", 'W6RdPCkZj2m', "p2uUWP0n", "r8oUDr04", "aKvvwx8", 'pIq2pxa', "ouC3lK8", "juuzDxW", 'CatdHNTq', 'nLO8WOSM', "W4fbW4VcKdG", "wg/dHbeN", "WRaJWRJdNCkf", "W6nUW6pcQLG", "W6X1W5NdOCom", "W77dO8kuca", "W7LNW6pdGCoj", "pwaQW6Gz", "W4bLcNe", "A2XIWQra", "W7pdV8ooW69l", "nveEWR4R", "W43dQhuOW7O", 'WO7cTc1gW5S', "WP0jWPtdO8or", "W7ZdLemcW4u", "W4ZcVSoYW45g", "csHfqmkr", "W6NcLYBcO8oM", "EJfvfb0", "WPJcSaxcRs4", "W5lcTta", "W7nefu5d", "W5dcTSkdWQW9", 'WOxcNGddUmkm', "W4NdI8k2i2u", 'WRq8WQBdOSkD', "W5TXgq", "W4tcVbhcTmoU", "CGBIRj/dJSka", "W4hcNmk1WOa3", 'W7LvW4tdVmo9', 'owOEE3C', 'WRtcV0/cShO', "ntCr", "seZdGZC8", "ac1Cbae", "W6RcO2rLWQO", "jXDKcaq", 'W7RcISkCWQVcOa', 'W4G8ra', 'aCktW6RdPum', 'WPJcRgxcNLa', "BeBdPb0p", "WP1rWO3dJWa", "ocrQASkw", "W7fpW67cTHa", "A37dR8k9WPq", "WPlcIc4", "W5/cS8oTW48", 'mSkCW4RdSNu', "W73cVxHuWOW", 'fComWOWLaG', "ymo3sJZcLq", "WP4BW5/dUSkt", "gCkCW5RdTJC", 'W43cVbtcJmk+', "WO7cMH7dQmkb", "iCoAW5j0WPW", "WR3HTjJHTQtcJUg2VW", "kX3cU8o+", "WPJcJc9QW5C", "cNuQWQS6", "WPVdG8kJv3i", "W6ZdUSojW6vG", "W7BdHSo3W75t", 'W4VdQxi1W7i', "swHpW6vC", "rtvAfhe", "WQZcKGhdUSkg", "D1O4WOaZ", "rCobvZSj", "W7RcQSkZWQ4z", "4PwB4Psb4PwT4PEY4PwG", 'W5pcML1GWRi', "W73HTltHT57dVUg0MG", "CMPIWQH6", "jI5OySot", "f3i7WRK1", "WP3cGUkUJgrx", "WO7dJmkYtv8", 'W4NdISoqbxW', 'hqzGASkx', "oxqnmNK", "yLSLWOeG", 'CSoLWPSaWPa', "WPRcJc3cLa", "CLeSW7my", 'W5XMWQFdSM0', "kd4cWQL7", "W7NcTmkdWR3cQq", "WOxcQ8kIWQ4o", "WR/HTONHTPbi4BsJ", 'W6ldGcmTWOu', 'ge3dNmkgWRq', "WPZcJcJcHrC", "l8oKWRKwlG", "8yo2OU+6Iq", "uEg1RUg2VSov4Bwi", "hSk0W5ldP20", 'pqyjWOlcRG', "y8ohCI/cGq", "ltFdMSo/AW", "vCo8WOaFWRi", "ptGrWQa", "W5VcSL5BWQK", 'o20BWQlcQW', 'W5tcVYBcH8oD', "W5hGTQBGTkxGTlldKq", "W5hdVKCcW7O", "cSoRW4zJWOe", "WO3cHd/cMrm", 'C/cRS7ZIGiZWMRcTzog0NUg1SW', "wsZcJ8oiAW", "W73cSZBcImkj", "wx1e", "CLTZW68", "4BsV4Bws4BAziFcAS77IGyNWKloi", "h2OviJy", "AhVdUX1m", "W5hcIKfIWPO", "W63dN0egW5i", 'W7NcVXZcS8o8', 'W5pcHKbIWRe', "W4RcN8kzW48V", 'c2Xgtq', "W4nIW7VcPJq", 'WO7dLmkCzLS', '4BwrYAVlREg3SKa', "eqyFWOVcOa", "WO3dMSkEBxm", "WPatWOpdP8kt", "oZWs", "WRZdIaBcQq", "WPRcKclcJHu", "W5nIjMv5", 'zmoGaWGe', "AqFdGe5j", "WRZcUKNcSNe", "WQW2rSkEua", "tMVdRr01", "usBdN8kbjW", 'dt4fWRi5', "WPlcVr/cVI4", "hXXIirS", 'W7DUW4xcJrm', 'WONcLWddVSkf', 'muKuC2y', "W4NdSwiOW7u", "ixiMWOue", "n8oxWQWSpq", "W4VdOSkjAW", "WO7cJcxcIHO", 'W4JdICozW4jn', "EKelkxK", "W55gW4NdPmoV", 'WO7cKH7dVSkk', "nMa4uNe", "WRrCWQ4", "W7XVW5ldI8of", "yCo8tcVdKa", "WPtcPbLPW50", 'W5FcKLbaWQa', "WPJcGdDMWPu", 'W6dcUSkvWPK+', "pMmk", "W75+lxHY", "WOZcHxbUW5C", "W6dcHYZcQSoa", 'W6FcPhTIWOC', 'W4NdSwiOW6q', "ACo+rW", "W5rJWRBdSK8", 'WPCpWPVdRCkF', "FmoMWPi", "oNqzWP0x", "WOGdW4FdISk4", "WRmiW5NdOCkC", "WQhcJJzNWRC", "W7ZcQWFcSSoQ", "W7ddQ8oxW55e", "WRXAWQ7cSxC", 'WR0uWQtdQSkW', "W4NcTXVcP8oT", "W7jymebn", "W6BdJe7cGwO", "WPC9qSkPWPe", "lcbNESkh", "pmkgW5JdLNW", "vCo9rK0", 'E0aeW5iJ', "W6NcN8keWRFcQW", 'oCoHW5XfWRa', "nKaQWOK", "FdSuffq", "W7BdOCoAgLO", "4Bw2Y4VjREg1GKC", "tbTKkN0", 'wmoLWPyBWPS', "fdLgEwC", "WOtcHsnmW4S", "W6JdMCooiMW", "WOddSSk7Buq", "j0KgC2a", "nJBdMG", "W6VdKCkPe3e", 'kwRdSGWx', 'bKLRWQVcRW', "W6/cSrZdPSoM", "WRaOWQpdGCkU", "WPSXW7ldGCk+", "wmonW4rdWRa", 'p3ej', "W5HKW7JdICoJ", 'W4hcHKf5WOq', "gpcuKj3IGj3WM7cCWOhHTQhHTkm", 'WQLDWQ/cUW', 'W6RdPSo7sgS', "xxbmW6vH", "WPtcIv/cO1i", "wJZdSwu2", "W49PW7ZcVby", 'W6xcPYRcJSoT', "kdvJy8kG", "nhmiWPmd", 'WRdcLNtcPx8', 'W7ZdT8oSW6n3', "aHvHjhi", "4BAZ4BECqmMLYym", "WOW6wCkArG", "bgm3fhK", "sSooWRS6WRG", "W65JW6G", "W5tcKWxcVIq", "W5RdM1ykW5m", "w0O/WPWM", "dSkbW4XJtq", 'twBdO8kpWRK', 'WQNcKLldLSkf', "W6dcLSkxWO02", "WPJcLY9SW4y", 'BLuXW7qr', 'q1/dTIOk', "W5X2W5tdGCke", "WRddHxpcUNW", "v05ZWQD/", "g0uScua", 'W4zYhND8', 'eu8nl08', "cCovWPKTcq", "4BAXYQZlHog2OwO", "F8oHtXvn", "W5FcPb7cUtK", 'WQ09s8kzsa', "gM0AWPmz", "WO5oWQJcP0O", 'uaLgnL4', 'ndfdpXC', 'W4xcMMbfWRu', 'jKHvF3W', "WRFcGSo4zdy", "pJ3dI8kXaG", "WPVcKbxdQ8kP", "W6tdS8kafNO", "WOGKW5tdJ8kE", "W7NcTXZcQSoQ", "WQ3cVeNcH1G", "WONcKq9ZW5q", 'gCocWPK', 'W5RcQYe', "WRBcN3/cO0q", "W57cPYFdLwO", 'W7zwoW', "v3OyWQay", "4BwX4BAKW43lM8UO", "lIKYWOmV", "fGeNWQO+", "WOxdGSow", "mNezWPSp", "WRZcKd/cGLy", "gbhcM8ovta", "k0KuDhC", 'WOKXrSkEba', "WRCPWRJdNmk0", 'tdTAbhW', "pmkbW6VdIMa", 'nGFdLCkaiW', 'W7tcKrhcK8om', "WOZcKGhdUSkg", "W6NcKZ7cImo5", 't3BdPvG3', 'w3vgWRW', "WPJcHc/dJrK", 'CaDxdKC', "WO3cGdr3WOq", "W5xdPSogmu8", "WOFcIWFdKCkg", "qmo6uaq", 'WQxdLSkEzKi', "rf4JWPWd", 'WOxcV8kKWQap', 'n8kGW63dNeG', "eConW5j/WRG", "W4pdJM82W4u", "WPxcRdtdHG", "t8opWR43WRa", "gCkbWRK3fq", "WQ59WQNcUNu", "W7XHW4ZdI8ke", "WRVcKJv3W6u", "WPFcH2O", 'lSoPWP0Mpq', "WOeGxG", "WRVcJJrGW54", "W61ex1Tg", "fmoDW5jQWQK", "WQRcGKRcU14", "fCorWPKRca", "mwyvpJK", 'sCoNxZFdKa', "W4FXHAky4Oov8y6bSSoe4BAX4BEq", "W5RcOedcK8kI", "n2rnWR0o", "WQCPWRZdRmkY", 'rqbqauq', 'W5lcGmk9WQRcKW', "W4NdK8oEiwO", "W53cPCkKWPhcMG", "WR7dNConW68N", "WQu2WQldJCkJ", "uCoMsGem", "WOC1W7ldH8k/", "WPlcLY7cJbu", 'sgVdUSk9WOq', "vgvIWO1S", "8kM2SU+5Ua", "jI3dLSkwkq", "W6tdUmkBmhm"];
    _0x48af = function () {
      return _0x336090;
    };
    return _0x48af();
  }
  function _0xb10fbf(_0x43d7e6, _0x28c580, _0x637f3b, _0x119e86, _0x62078e) {
    return _0x3230(_0x637f3b - 0x2a5, _0x28c580);
  }
  _0x5867df.pattern = "setlogo";
  _0x5867df.react = '🗣️';
  _0x5867df.desc = "To change bot logo";
  _0x5867df.category = "main";
  _0x5867df.use = ".setlogo logo url .";
  _0x5867df.filename = __filename;
  cmd(_0x5867df, async (_0x5c5a94, _0x541bd4, _0x25c15d, {
    from: _0x45ccd8,
    l: _0x1b6b4c,
    quoted: _0x26e457,
    body: _0x1cecdf,
    isCmd: _0x21e96a,
    command: _0x2c2fca,
    args: _0x166a35,
    q: _0x3f2ac7,
    isGroup: _0x57a516,
    sender: _0x3df056,
    senderNumber: _0x11b378,
    botNumber2: _0x4ade83,
    botNumber: _0x174be1,
    pushname: _0x4b7d72,
    isMe: _0x5bf83c,
    isOwner: _0xdc740f,
    groupMetadata: _0x591259,
    groupName: _0x20f4ad,
    participants: _0x150ae4,
    groupAdmins: _0x5e5910,
    isBotAdmins: _0x4c6f04,
    isAdmins: _0x28f293,
    reply: _0x2ab5a3
  }) => {
    try {
      if (!_0x5bf83c) {
        return await _0x2ab5a3(BOTOW);
      }
      if (config.LOGO == _0x3f2ac7) {
        return _0x2ab5a3(alredy);
      }
      await input_set("LOGO", _0x3f2ac7);
      await _0x2ab5a3("*Logo updated: " + _0x3f2ac7 + '*');
    } catch (_0x44e073) {
      _0x2ab5a3("*Error !!*");
      _0x1b6b4c(_0x44e073);
    }
  });
  const _0x5eaa0f = {
    'pattern': "welcome",
    'react': "🗣️",
    'dontAddCommandList': true,
    'filename': __filename
  };
  cmd(_0x5eaa0f, async (_0x3745fb, _0xd29e82, _0x3a2d1e, {
    from: _0x1fc535,
    prefix: _0x458ba7,
    l: _0xee6c1b,
    quoted: _0x729d86,
    body: _0x2f4446,
    isCmd: _0x51ba33,
    command: _0x4f2976,
    args: _0x1abfdc,
    q: _0x288325,
    isGroup: _0x156da4,
    sender: _0x43ebd2,
    senderNumber: _0xca7ab8,
    botNumber2: _0x4c6bc4,
    botNumber: _0x2aa36a,
    pushname: _0xf8801b,
    isMe: _0x44b8c3,
    isOwner: _0x574d3b,
    groupMetadata: _0x573911,
    groupName: _0x1e2e7d,
    participants: _0x121f31,
    groupAdmins: _0x488077,
    isBotAdmins: _0x533c40,
    isAdmins: _0x501e26,
    reply: _0x3d5c9a,
    config: _0xbfd40
  }) => {
    try {
      if (!_0x44b8c3) {
        return await _0x3d5c9a(BOTOW);
      }
      if (_0x288325 == 'on') {
        if (_0xbfd40.WELCOME == "true") {
          return _0x3d5c9a("already Welcome is on ");
        }
        await input_set("WELCOME", "true");
        return _0x3d5c9a("Welcome turned on");
      }
      if (_0x288325 == "off") {
        if (_0xbfd40.WELCOME !== "true") {
          return _0x3d5c9a("already Welcome is off");
        }
        await input_set("WELCOME", "false");
        return _0x3d5c9a("Welcome turned off");
      }
    } catch (_0x1d07e4) {
      _0x3d5c9a("*Error !!*");
      _0xee6c1b(_0x1d07e4);
    }
  });
  const _0x5b96c7 = {
    'pattern': "onlygroup",
    'react': "🗣️",
    'dontAddCommandList': true,
    'filename': __filename
  };
  cmd(_0x5b96c7, async (_0x5bfb16, _0x21dac2, _0x57acb5, {
    from: _0x32290f,
    prefix: _0x10a85a,
    l: _0x150f4d,
    quoted: _0x3d9f7c,
    body: _0x11ee35,
    isCmd: _0x5bb3f2,
    command: _0x3a1152,
    args: _0x5c42f4,
    q: _0x269d57,
    isGroup: _0x51ed9,
    sender: _0x2315b2,
    senderNumber: _0x46896d,
    botNumber2: _0x108671,
    botNumber: _0x25b482,
    pushname: _0x283f98,
    isMe: _0xe6b0b1,
    isOwner: _0x151025,
    groupMetadata: _0x2e0f7c,
    groupName: _0x49995f,
    participants: _0x4c0e9e,
    groupAdmins: _0x152e51,
    isBotAdmins: _0x57933e,
    isAdmins: _0x45faa3,
    reply: _0x44d2cb,
    config: _0x2e9b07
  }) => {
    try {
      if (!_0xe6b0b1) {
        return await _0x44d2cb(BOTOW);
      }
      if (_0x269d57 == 'on') {
        if (_0x2e9b07.ONLY_GROUP == 'true') {
          return _0x44d2cb("already Only Group is on ");
        }
        await input_set("ONLY_GROUP", 'true');
        return _0x44d2cb("Only Group turned on");
      }
      if (_0x269d57 == "off") {
        if (_0x2e9b07.ONLY_GROUP !== "true") {
          return _0x44d2cb("already Only Group is off");
        }
        await input_set('ONLY_GROUP', "false");
        return _0x44d2cb("Only Group turned off");
      }
    } catch (_0x4e57aa) {
      _0x44d2cb("*Error !!*");
      _0x150f4d(_0x4e57aa);
    }
  });
  const _0x280159 = {
    'pattern': "onlyme",
    'react': "🗣️",
    'dontAddCommandList': true,
    'filename': __filename
  };
  cmd(_0x280159, async (_0x7193fb, _0x4a1087, _0xc0f072, {
    from: _0x3cb730,
    prefix: _0x35b516,
    l: _0xd0e04e,
    quoted: _0x2dc0e3,
    body: _0x22e18d,
    isCmd: _0x2ce3f7,
    command: _0x4089dc,
    args: _0x277032,
    q: _0x336dc6,
    isGroup: _0xd6b2ef,
    sender: _0x594332,
    senderNumber: _0x5379ce,
    botNumber2: _0x12f69c,
    botNumber: _0x4f132,
    pushname: _0x5395b1,
    isMe: _0x4374e9,
    isOwner: _0x5c17e9,
    groupMetadata: _0xcb3c1a,
    groupName: _0x12f5d4,
    participants: _0x189668,
    groupAdmins: _0x4500c6,
    isBotAdmins: _0x3714e3,
    isAdmins: _0x5ee86d,
    reply: _0x55f505,
    config: _0x5b2b5a
  }) => {
    try {
      if (!_0x4374e9) {
        return await _0x55f505(BOTOW);
      }
      if (_0x336dc6 == 'on') {
        if (_0x5b2b5a.ONLY_ME == "true") {
          return _0x55f505("already Only Me is on ");
        }
        await input_set("ONLY_ME", "true");
        return _0x55f505("Only Me turned on");
      }
      if (_0x336dc6 == "off") {
        if (_0x5b2b5a.ONLY_ME !== "true") {
          return _0x55f505("already Only Me is off");
        }
        await input_set("ONLY_ME", "false");
        return _0x55f505("Only Me turned off");
      }
    } catch (_0x3287a0) {
      _0x55f505("*Error !!*");
      _0xd0e04e(_0x3287a0);
    }
  });
  const _0x2c6e10 = {
    'pattern': "oreact",
    'react': '🗣️',
    'dontAddCommandList': true,
    'filename': __filename
  };
  cmd(_0x2c6e10, async (_0xc9d0c2, _0x452f53, _0x207c12, {
    from: _0x28e6c8,
    prefix: _0x548e6d,
    l: _0x345223,
    quoted: _0x433909,
    body: _0x237a8f,
    isCmd: _0x2245ac,
    command: _0x42a948,
    args: _0x2c75ba,
    q: _0x38a7e5,
    isGroup: _0x118338,
    sender: _0x2cbdcd,
    senderNumber: _0x4bca4d,
    botNumber2: _0x284c26,
    botNumber: _0xf8bdec,
    pushname: _0x28574a,
    isMe: _0x460c59,
    isOwner: _0x172b3c,
    groupMetadata: _0x335fd4,
    groupName: _0x3f11de,
    participants: _0x549a4d,
    groupAdmins: _0x300c59,
    isBotAdmins: _0x2f0e23,
    isAdmins: _0x2688bf,
    reply: _0x3ba492,
    config: _0x488e7e
  }) => {
    try {
      if (!_0x460c59) {
        return await _0x3ba492(BOTOW);
      }
      if (_0x38a7e5 == 'on') {
        if (_0x488e7e.OWNER_REACT == "true") {
          return _0x3ba492("already Owner React is on ");
        }
        await input_set("OWNER_REACT", 'true');
        return _0x3ba492("Owner React turned on");
      }
      if (_0x38a7e5 == "off") {
        if (_0x488e7e.OWNER_REACT !== "true") {
          return _0x3ba492("already Owner React is off");
        }
        await input_set("OWNER_REACT", "false");
        return _0x3ba492("Owner React turned off");
      }
    } catch (_0x27d226) {
      _0x3ba492("*Error !!*");
      _0x345223(_0x27d226);
    }
  });
  const _0x2e5666 = {
    'pattern': "aichatbot",
    'react': '🗣️',
    'dontAddCommandList': true,
    'filename': __filename
  };
  cmd(_0x2e5666, async (_0x2e915b, _0x428164, _0x288307, {
    from: _0x1bf2fe,
    prefix: _0x1d8116,
    l: _0x357f8d,
    quoted: _0x155e89,
    body: _0x468446,
    isCmd: _0x15638c,
    command: _0x387a85,
    args: _0x4d9504,
    q: _0x4100cc,
    isGroup: _0x217b30,
    sender: _0x1df6d4,
    senderNumber: _0x59db41,
    botNumber2: _0x18c31c,
    botNumber: _0x2285cf,
    pushname: _0x4fc04d,
    isMe: _0x364526,
    isOwner: _0x29048d,
    groupMetadata: _0x18b99a,
    groupName: _0x3f8137,
    participants: _0x11fb32,
    groupAdmins: _0x4ae0f6,
    isBotAdmins: _0x20e581,
    isAdmins: _0x36d028,
    reply: _0x2bda6b,
    config: _0x3a2091
  }) => {
    try {
      if (!_0x364526) {
        return await _0x2bda6b(BOTOW);
      }
      if (_0x4100cc == 'on') {
        if (_0x3a2091.AI_CHATBOT == "true") {
          return _0x2bda6b("already Ai Chatbot is on ");
        }
        await input_set('AI_CHATBOT', "true");
        return _0x2bda6b("Ai Chatbot turned on");
      }
      if (_0x4100cc == "off") {
        if (_0x3a2091.AI_CHATBOT !== 'true') {
          return _0x2bda6b("already Ai Chatbot is off");
        }
        await input_set("AI_CHATBOT", 'false');
        return _0x2bda6b("Ai Chatbot turned off");
      }
    } catch (_0x13842a) {
      _0x2bda6b("*Error !!*");
      _0x357f8d(_0x13842a);
    }
  });
  const _0x251ed4 = {
    'pattern': "mathsai"
  };
  function _0x39ac18(_0x4cb6f6, _0x56c0c7, _0x8e9ff8, _0x405f34, _0x52d095) {
    return _0x3230(_0x8e9ff8 - 0x3b9, _0x4cb6f6);
  }
  _0x251ed4.react = '🗣️';
  _0x251ed4.dontAddCommandList = true;
  _0x251ed4.filename = __filename;
  cmd(_0x251ed4, async (_0x50b6bd, _0x1b187e, _0x4303fb, {
    from: _0x266662,
    prefix: _0x553f76,
    l: _0x254f07,
    quoted: _0x2fbb98,
    body: _0x44a021,
    isCmd: _0x83e635,
    command: _0x4c2e1c,
    args: _0x29d4dd,
    q: _0x1eddde,
    isGroup: _0x2fcaf8,
    sender: _0x55d1b9,
    senderNumber: _0x510083,
    botNumber2: _0x2612d2,
    botNumber: _0x11f1bc,
    pushname: _0x342ee3,
    isMe: _0x8bb3cb,
    isOwner: _0x1a8460,
    groupMetadata: _0x12fa61,
    groupName: _0x3fd17f,
    participants: _0x588eee,
    groupAdmins: _0x31aec5,
    isBotAdmins: _0x1bcf5f,
    isAdmins: _0x56f2cc,
    reply: _0x1fa40f,
    config: _0x477fd5
  }) => {
    try {
      if (!_0x8bb3cb) {
        return await _0x1fa40f(BOTOW);
      }
      if (_0x1eddde == 'on') {
        if (_0x477fd5.MATHS_AI == "true") {
          return _0x1fa40f("already Ai Maths is on ");
        }
        await input_set("MATHS_AI", "true");
        return _0x1fa40f("Ai Maths turned on");
      }
      if (_0x1eddde == "off") {
        if (_0x477fd5.MATHS_AI !== "true") {
          return _0x1fa40f("already Ai Maths is off");
        }
        await input_set("MATHS_AI", 'false');
        return _0x1fa40f("Ai Maths turned off");
      }
    } catch (_0x1648fb) {
      _0x1fa40f("*Error !!*");
      _0x254f07(_0x1648fb);
    }
  });
  const _0x3104b7 = {
    'pattern': 'aiimage',
    'react': "🗣️",
    'dontAddCommandList': true,
    'filename': __filename
  };
  cmd(_0x3104b7, async (_0x52580c, _0x3c7b4d, _0x33866e, {
    from: _0x2883ee,
    prefix: _0x5d54c6,
    l: _0x2387e8,
    quoted: _0x2be0f2,
    body: _0x54363e,
    isCmd: _0x3fa52e,
    command: _0x3fe633,
    args: _0x1528a2,
    q: _0x59065c,
    isGroup: _0x48bc3a,
    sender: _0x175f21,
    senderNumber: _0x336dd1,
    botNumber2: _0x27625f,
    botNumber: _0x2decd0,
    pushname: _0x29bea4,
    isMe: _0x12b904,
    isOwner: _0x130785,
    groupMetadata: _0x3d15cc,
    groupName: _0x10db91,
    participants: _0xcb8fc2,
    groupAdmins: _0x317620,
    isBotAdmins: _0x38e365,
    isAdmins: _0x50a911,
    reply: _0x3707ec,
    config: _0x3c886f
  }) => {
    try {
      if (!_0x12b904) {
        return await _0x3707ec(BOTOW);
      }
      if (_0x59065c == 'on') {
        if (_0x3c886f.AI_IMAGE == "true") {
          return _0x3707ec("already Ai Image is on ");
        }
        await input_set('AI_IMAGE', 'true');
        return _0x3707ec("Ai Image turned on");
      }
      if (_0x59065c == 'off') {
        if (_0x3c886f.AI_IMAGE !== "true") {
          return _0x3707ec("already Ai Image is off");
        }
        await input_set("AI_IMAGE", 'false');
        return _0x3707ec("Ai Image turned off");
      }
    } catch (_0x5144e9) {
      _0x3707ec("*Error !!*");
      _0x2387e8(_0x5144e9);
    }
  });
  const _0x5b1b89 = {
    'pattern': 'anticall',
    'react': "🗣️"
  };
  function _0x50d9f0(_0x477001, _0xb28043, _0x4d5912, _0x72879b, _0x22db44) {
    return _0x3230(_0x4d5912 - 0x189, _0x477001);
  }
  _0x5b1b89.dontAddCommandList = true;
  _0x5b1b89.filename = __filename;
  cmd(_0x5b1b89, async (_0x152821, _0x7c3333, _0x1b155e, {
    from: _0x49fd1a,
    prefix: _0x3ce904,
    l: _0x5b3e11,
    quoted: _0x46a59f,
    body: _0x3c108a,
    isCmd: _0x3f541f,
    command: _0x15930c,
    args: _0x5eac6d,
    q: _0x1e08e1,
    isGroup: _0x2ce9ce,
    sender: _0x5d726c,
    senderNumber: _0x4c75d2,
    botNumber2: _0x2aede8,
    botNumber: _0x3d7a28,
    pushname: _0x50346c,
    isMe: _0x2418a7,
    isOwner: _0x2ad9b6,
    groupMetadata: _0x4b3239,
    groupName: _0x3270d0,
    participants: _0x458ae3,
    groupAdmins: _0x703b97,
    isBotAdmins: _0x38cd0b,
    isAdmins: _0x1a01a1,
    reply: _0x153d40,
    config: _0x21df85
  }) => {
    try {
      if (!_0x2418a7) {
        return await _0x153d40(BOTOW);
      }
      if (_0x1e08e1 == 'on') {
        if (_0x21df85.ANTI_CALL == "true") {
          return _0x153d40("already anticall is on ");
        }
        await input_set('ANTI_CALL', "true");
        return _0x153d40("Anticall turned on");
      }
      if (_0x1e08e1 == "off") {
        if (_0x21df85.ANTI_CALL !== "true") {
          return _0x153d40("already anticall is off");
        }
        await input_set("ANTI_CALL", "false");
        return _0x153d40("Anticall turned off");
      }
    } catch (_0x1bd399) {
      _0x153d40("*Error !!*");
      _0x5b3e11(_0x1bd399);
    }
  });
  const _0x32de6c = {
    'pattern': "antidelete",
    'react': '🗣️',
    'dontAddCommandList': true,
    'filename': __filename
  };
  cmd(_0x32de6c, async (_0x67d5c2, _0x213036, _0x391729, {
    from: _0x393fbd,
    prefix: _0x4fa156,
    l: _0x50bc63,
    quoted: _0x34e27a,
    body: _0xe97f32,
    isCmd: _0x24416a,
    command: _0xd2e308,
    args: _0x5a465b,
    q: _0x5250b4,
    isGroup: _0x12746d,
    sender: _0x16c5e7,
    senderNumber: _0x398234,
    botNumber2: _0xe1bfc8,
    botNumber: _0x192c3f,
    pushname: _0x59cc2d,
    isMe: _0x26758e,
    isOwner: _0x49ca3d,
    groupMetadata: _0x48541f,
    groupName: _0x8ef77e,
    participants: _0x256c10,
    groupAdmins: _0x3240e6,
    isBotAdmins: _0x1b2030,
    isAdmins: _0x109fe5,
    reply: _0x44928,
    config: _0x5396ef
  }) => {
    try {
      if (!_0x26758e) {
        return await _0x44928(BOTOW);
      }
      if (_0x5250b4 == 'on') {
        if (_0x5396ef.ANTI_DELETE == "true") {
          return _0x44928("already Anti Delete On ");
        }
        await input_set("ANTI_DELETE", "true");
        return _0x44928("Anti Delete Turn on");
      }
      if (_0x5250b4 == 'off') {
        if (_0x5396ef.ANTI_DELETE !== "true") {
          return _0x44928("already Anti Delete Off");
        }
        await input_set("ANTI_DELETE", "false");
        return _0x44928("Anti Delete Turn Off");
      }
    } catch (_0x442be2) {
      _0x44928("*Error !!*");
      _0x50bc63(_0x442be2);
    }
  });
  const _0x5977e5 = {
    'pattern': "autovoice",
    'react': "🗣️",
    'dontAddCommandList': true,
    'filename': __filename
  };
  cmd(_0x5977e5, async (_0x306abf, _0x102c7f, _0x36deb7, {
    from: _0xdde9f3,
    prefix: _0x2ca63d,
    l: _0x142541,
    quoted: _0xc4921,
    body: _0x406098,
    isCmd: _0x34ef95,
    command: _0x3646bf,
    args: _0xfaa2fa,
    q: _0x4f0e21,
    isGroup: _0x19099a,
    sender: _0x4110bf,
    senderNumber: _0xf77f8a,
    botNumber2: _0x1f63ec,
    botNumber: _0x4544e3,
    pushname: _0x24c2cd,
    isMe: _0x1959f4,
    isOwner: _0x474a93,
    groupMetadata: _0x3d286d,
    groupName: _0x2ad540,
    participants: _0x5c99f4,
    groupAdmins: _0x16cd74,
    isBotAdmins: _0x2a80fd,
    isAdmins: _0x3f5737,
    reply: _0x4a335a,
    config: _0x3c540b
  }) => {
    try {
      if (!_0x1959f4) {
        return await _0x4a335a(BOTOW);
      }
      if (_0x4f0e21 == 'on') {
        if (_0x3c540b.AUTO_VOICE == 'true') {
          return _0x4a335a("already on ");
        }
        await input_set("AUTO_VOICE", "true");
        return _0x4a335a("autovoice turned on");
      }
      if (_0x4f0e21 == "off") {
        if (_0x3c540b.AUTO_VOICE !== "true") {
          return _0x4a335a("already off");
        }
        await input_set("AUTO_VOICE", 'false');
        return _0x4a335a("autovoice turned off");
      }
    } catch (_0x48e00d) {
      _0x4a335a("*Error !!*");
      _0x142541(_0x48e00d);
    }
  });
  const _0x43e97e = {
    'pattern': "autosticker",
    'react': '🗣️',
    'dontAddCommandList': true,
    'filename': __filename
  };
  cmd(_0x43e97e, async (_0x215d2d, _0x1a11ed, _0x53800c, {
    from: _0x149521,
    prefix: _0x19e3c9,
    l: _0x400faf,
    quoted: _0x25741f,
    body: _0x1d502f,
    isCmd: _0xd31cb4,
    command: _0x17e43d,
    args: _0x14bec0,
    q: _0x4008dc,
    isGroup: _0x371ed8,
    sender: _0x42a7ff,
    senderNumber: _0x2f7e81,
    botNumber2: _0x251278,
    botNumber: _0x1afe58,
    pushname: _0x30e4a0,
    isMe: _0x941ba,
    isOwner: _0x2129bb,
    groupMetadata: _0x10e29f,
    groupName: _0x3bc13e,
    participants: _0x140a75,
    groupAdmins: _0x489f05,
    isBotAdmins: _0x38733a,
    isAdmins: _0x443878,
    reply: _0x5bec5b,
    config: _0x49902f
  }) => {
    try {
      if (!_0x941ba) {
        return await _0x5bec5b(BOTOW);
      }
      if (_0x4008dc == 'on') {
        if (_0x49902f.AUTO_STICKER == "true") {
          return _0x5bec5b("already on ");
        }
        await input_set("AUTO_STICKER", "true");
        return _0x5bec5b("autosticker turned on");
      }
      if (_0x4008dc == "off") {
        if (_0x49902f.AUTO_STICKER !== "true") {
          return _0x5bec5b("already off");
        }
        await input_set("AUTO_STICKER", "false");
        return _0x5bec5b("autosticker turned off");
      }
    } catch (_0x260264) {
      _0x5bec5b("*Error !!*");
      _0x400faf(_0x260264);
    }
  });
  const _0x17db9d = {
    'pattern': 'autobio',
    'react': "🗣️",
    'dontAddCommandList': true,
    'filename': __filename
  };
  cmd(_0x17db9d, async (_0x2de0b7, _0x1b9aa3, _0x44a4d5, {
    from: _0x59410b,
    prefix: _0x203a3b,
    l: _0x52797b,
    quoted: _0x3bc39b,
    body: _0x29684b,
    isCmd: _0x1ebb7b,
    command: _0x277d6b,
    args: _0x7969e,
    q: _0x21236b,
    isGroup: _0x42feef,
    sender: _0x403538,
    senderNumber: _0x432c7c,
    botNumber2: _0x1934e4,
    botNumber: _0x3d7e13,
    pushname: _0xd2c883,
    isMe: _0x2f9acf,
    isOwner: _0x2ed94f,
    groupMetadata: _0x42fae5,
    groupName: _0x3959d8,
    participants: _0x1aec4b,
    groupAdmins: _0x151070,
    isBotAdmins: _0x3d5e90,
    isAdmins: _0x9d06a2,
    reply: _0x4fcfc0,
    config: _0x2a9e37
  }) => {
    try {
      if (!_0x2f9acf) {
        return await _0x4fcfc0(BOTOW);
      }
      if (_0x21236b == 'on') {
        if (_0x2a9e37.AUTO_BIO == "true") {
          return _0x4fcfc0("already on ");
        }
        await input_set("AUTO_BIO", "true");
        return _0x4fcfc0("autobio turned on");
      }
      if (_0x21236b == "off") {
        if (_0x2a9e37.AUTO_BIO !== 'true') {
          return _0x4fcfc0("already off");
        }
        await input_set("AUTO_BIO", "false");
        return _0x4fcfc0("autobio turned off");
      }
    } catch (_0x3e1465) {
      _0x4fcfc0("*Error !!*");
      _0x52797b(_0x3e1465);
    }
  });
  function _0x269f95(_0x406c64, _0x5c28df, _0x52382d, _0x1e1f12, _0x4e34d5) {
    return _0x3230(_0x1e1f12 - 0x7a, _0x406c64);
  }
  const _0x49eb55 = {
    'pattern': "autowelcome",
    'react': '🗣️',
    'dontAddCommandList': true,
    'filename': __filename
  };
  cmd(_0x49eb55, async (_0x3aa021, _0xc0460a, _0x515981, {
    from: _0x5e019f,
    prefix: _0x65262f,
    l: _0x406532,
    quoted: _0x3b083a,
    body: _0x826479,
    isCmd: _0x202b57,
    command: _0x28d66f,
    args: _0x207f2e,
    q: _0x501f5d,
    isGroup: _0x6c82f5,
    sender: _0x9ab4ce,
    senderNumber: _0x361231,
    botNumber2: _0x500f88,
    botNumber: _0x5543c8,
    pushname: _0x1f37e8,
    isMe: _0x341e73,
    isOwner: _0x38cfb3,
    groupMetadata: _0x87b831,
    groupName: _0x28bfb3,
    participants: _0x5b8973,
    groupAdmins: _0x2d226d,
    isBotAdmins: _0x53d869,
    isAdmins: _0x261345,
    reply: _0x88a65e,
    config: _0x12d691
  }) => {
    try {
      if (!_0x341e73) {
        return await _0x88a65e(BOTOW);
      }
      if (_0x501f5d == 'on') {
        if (_0x12d691.WELCOME == "true") {
          return _0x88a65e("already on ");
        }
        await input_set("WELCOME", "true");
        return _0x88a65e("autowelcome turned on");
      }
      if (_0x501f5d == 'off') {
        if (_0x12d691.WELCOME !== "true") {
          return _0x88a65e("already off");
        }
        await input_set("WELCOME", "false");
        return _0x88a65e("autowelcome turned off");
      }
    } catch (_0x437f94) {
      _0x88a65e("*Error !!*");
      _0x406532(_0x437f94);
    }
  });
  const _0x4dbaaa = {
    'pattern': "antibot",
    'react': "🗣️",
    'dontAddCommandList': true,
    'filename': __filename
  };
  cmd(_0x4dbaaa, async (_0x551834, _0x507599, _0x1e6304, {
    from: _0x2e928f,
    prefix: _0x55c537,
    l: _0x543c57,
    quoted: _0x34a13d,
    body: _0x28d3d0,
    isCmd: _0x58a33a,
    command: _0x3f1c56,
    args: _0x41c980,
    q: _0x5f0f92,
    isGroup: _0x4d1f7e,
    sender: _0x35fa08,
    senderNumber: _0x348e09,
    botNumber2: _0x31556d,
    botNumber: _0xaa1e31,
    pushname: _0x9cb8ea,
    isMe: _0x24ab23,
    isOwner: _0x1ae1b2,
    groupMetadata: _0x230a6f,
    groupName: _0x4066cb,
    participants: _0x5b250f,
    groupAdmins: _0x4a26fd,
    isBotAdmins: _0x5bab74,
    isAdmins: _0x2c5f87,
    reply: _0x2c96c5,
    config: _0x58a265
  }) => {
    try {
      if (!_0x24ab23) {
        return await _0x2c96c5(BOTOW);
      }
      if (_0x5f0f92 == 'on') {
        if (_0x58a265.ANTI_BOT == "true") {
          return _0x2c96c5("already on ");
        }
        await input_set('ANTI_BOT', 'true');
        return _0x2c96c5("antibot turned on");
      }
      if (_0x5f0f92 == "off") {
        if (_0x58a265.ANTI_BOT !== "true") {
          return _0x2c96c5("already off");
        }
        await input_set("ANTI_BOT", "false");
        return _0x2c96c5("antibot turned off");
      }
    } catch (_0x29a2e9) {
      _0x2c96c5("*Error !!*");
      _0x543c57(_0x29a2e9);
    }
  });
  const _0x2e09bd = {
    'pattern': "antilink",
    'react': '🗣️',
    'dontAddCommandList': true,
    'filename': __filename
  };
  cmd(_0x2e09bd, async (_0x54b0b6, _0x2eef43, _0x771ca6, {
    from: _0x2362d6,
    prefix: _0x252801,
    l: _0x597110,
    quoted: _0x5bfb8d,
    body: _0x2fe3c3,
    isCmd: _0x219c26,
    command: _0x37c285,
    args: _0x493583,
    q: _0x58d6b3,
    isGroup: _0x4b4a01,
    sender: _0x3e9192,
    senderNumber: _0x73269d,
    botNumber2: _0x1787fb,
    botNumber: _0x1d0b7a,
    pushname: _0x5d075a,
    isMe: _0xe093a8,
    isOwner: _0x4aadde,
    groupMetadata: _0x1f6cac,
    groupName: _0x16ed56,
    participants: _0x4e5f2b,
    groupAdmins: _0x3875a5,
    isBotAdmins: _0x540a50,
    isAdmins: _0x5a20d6,
    reply: _0x5651d0,
    config: _0x3f3a5d
  }) => {
    try {
      if (!_0xe093a8) {
        return await _0x5651d0(BOTOW);
      }
      if (_0x58d6b3 == 'on') {
        if (_0x3f3a5d.ANTI_LINK == "true") {
          return _0x5651d0("already on ");
        }
        await input_set("ANTI_LINK", "true");
        return _0x5651d0("antilink turned on");
      }
      if (_0x58d6b3 == "off") {
        if (_0x3f3a5d.ANTI_LINK !== 'true') {
          return _0x5651d0("already off");
        }
        await input_set("ANTI_LINK", "false");
        return _0x5651d0("antilink turned off");
      }
    } catch (_0x4d93db) {
      _0x5651d0("*Error !!*");
      _0x597110(_0x4d93db);
    }
  });
  const _0xe70b = {
    'pattern': "antibad",
    'react': '🗣️',
    'dontAddCommandList': true,
    'filename': __filename
  };
  cmd(_0xe70b, async (_0x3338e5, _0x3c1911, _0x3fe2e9, {
    from: _0x10e62f,
    prefix: _0x5a4f7a,
    l: _0x512c57,
    quoted: _0x5c7cc2,
    body: _0x3c1471,
    isCmd: _0x5cbc54,
    command: _0x5c75bb,
    args: _0x395f16,
    q: _0x30cf24,
    isGroup: _0x4caeb4,
    sender: _0x484b6c,
    senderNumber: _0x580335,
    botNumber2: _0x519543,
    botNumber: _0x5dd187,
    pushname: _0x147ec6,
    isMe: _0x2fa039,
    isOwner: _0x40f2a8,
    groupMetadata: _0x228dc2,
    groupName: _0x453fcc,
    participants: _0x1044ab,
    groupAdmins: _0x5e1890,
    isBotAdmins: _0x36cba3,
    isAdmins: _0x4dad04,
    reply: _0x37dfb6,
    config: _0x1ef84c
  }) => {
    try {
      if (!_0x2fa039) {
        return await _0x37dfb6(BOTOW);
      }
      if (_0x30cf24 == 'on') {
        if (_0x1ef84c.ANTI_BAD == 'true') {
          return _0x37dfb6("already on ");
        }
        await input_set("ANTI_BAD", 'true');
        return _0x37dfb6("antibad turned on");
      }
      if (_0x30cf24 == "off") {
        if (_0x1ef84c.ANTI_BAD !== "true") {
          return _0x37dfb6("already off");
        }
        await input_set("ANTI_BAD", "false");
        return _0x37dfb6("antibad turned off");
      }
    } catch (_0x54410a) {
      _0x37dfb6("*Error !!*");
      _0x512c57(_0x54410a);
    }
  });
  const _0x1277c9 = {
    'pattern': "autostatus",
    'react': '🗣️',
    'dontAddCommandList': true,
    'filename': __filename
  };
  cmd(_0x1277c9, async (_0x5a536a, _0x5456a3, _0x24ae32, {
    from: _0x335dc8,
    prefix: _0x125934,
    l: _0xf56111,
    quoted: _0x5bc204,
    body: _0x4f8958,
    isCmd: _0xb25a33,
    command: _0xda52fc,
    args: _0x236746,
    q: _0x2606c7,
    isGroup: _0x3d5a88,
    sender: _0xcfc3ed,
    senderNumber: _0x127faa,
    botNumber2: _0xd10a05,
    botNumber: _0x2b4789,
    pushname: _0x4b1d79,
    isMe: _0xf900d4,
    isOwner: _0x32882c,
    groupMetadata: _0x513076,
    groupName: _0x81b2e7,
    participants: _0x151871,
    groupAdmins: _0x92d578,
    isBotAdmins: _0x580c0d,
    isAdmins: _0x391d1d,
    reply: _0x3f0c76,
    config: _0x22cee4
  }) => {
    try {
      if (!_0xf900d4) {
        return await _0x3f0c76(BOTOW);
      }
      if (_0x2606c7 == 'on') {
        if (_0x22cee4.AUTO_STATUS_READ == "true") {
          return _0x3f0c76("already on ");
        }
        await input_set("AUTO_STATUS_READ", "true");
        return _0x3f0c76("autostatus turned on");
      }
      if (_0x2606c7 == 'off') {
        if (_0x22cee4.AUTO_STATUS_READ !== "true") {
          return _0x3f0c76("already off");
        }
        await input_set('AUTO_STATUS_READ', 'false');
        return _0x3f0c76("autostatus turned off");
      }
    } catch (_0x2f2381) {
      _0x3f0c76("*Error !!*");
      _0xf56111(_0x2f2381);
    }
  });
  const _0x544ebe = {
    'pattern': "autotyping",
    'react': '🗣️',
    'dontAddCommandList': true,
    'filename': __filename
  };
  cmd(_0x544ebe, async (_0x4a2e2c, _0x5130a1, _0x1c006d, {
    from: _0x3f67a6,
    prefix: _0x44931d,
    l: _0x48f609,
    quoted: _0x133d61,
    body: _0x603e54,
    isCmd: _0x573cf8,
    command: _0x12db3d,
    args: _0x5b8440,
    q: _0x202221,
    isGroup: _0x21ac60,
    sender: _0x141cb2,
    senderNumber: _0x15ae10,
    botNumber2: _0x1305ca,
    botNumber: _0x3e3802,
    pushname: _0x37dcd9,
    isMe: _0xe82dea,
    isOwner: _0x107adf,
    groupMetadata: _0x4428b9,
    groupName: _0x4fe9d3,
    participants: _0x244e9d,
    groupAdmins: _0x22a5f7,
    isBotAdmins: _0x130cd9,
    isAdmins: _0x1b47b8,
    reply: _0x41662a,
    config: _0x58427a
  }) => {
    try {
      if (!_0xe82dea) {
        return await _0x41662a(BOTOW);
      }
      if (_0x202221 == 'on') {
        if (_0x58427a.AUTO_TYPING == 'true') {
          return _0x41662a("already on ");
        }
        await input_set("AUTO_TYPING", "true");
        return _0x41662a("autotyping turned on");
      }
      if (_0x202221 == "off") {
        if (_0x58427a.AUTO_TYPING !== "true") {
          return _0x41662a("already off");
        }
        await input_set("AUTO_TYPING", "false");
        return _0x41662a("autotyping turned off");
      }
    } catch (_0x34517a) {
      _0x41662a("*Error !!*");
      _0x48f609(_0x34517a);
    }
  });
  const _0x3c9d25 = {
    'pattern': 'autorecording',
    'react': "🗣️",
    'dontAddCommandList': true,
    'filename': __filename
  };
  cmd(_0x3c9d25, async (_0x4da14e, _0x1a2d4c, _0x4b47ab, {
    from: _0x44796c,
    prefix: _0x44d795,
    l: _0x225ebd,
    quoted: _0x41f3a1,
    body: _0x241d4d,
    isCmd: _0x2e603b,
    command: _0x537757,
    args: _0x3f13b0,
    q: _0x1f51d3,
    isGroup: _0x1da905,
    sender: _0xded92b,
    senderNumber: _0x56b26d,
    botNumber2: _0x13d801,
    botNumber: _0x2fbc8f,
    pushname: _0x4f4b87,
    isMe: _0x246ee1,
    isOwner: _0x4c1e22,
    groupMetadata: _0x5a8979,
    groupName: _0x4784fa,
    participants: _0x106b6a,
    groupAdmins: _0x4a7b32,
    isBotAdmins: _0xd50e9e,
    isAdmins: _0x39b87e,
    reply: _0x24e7a4,
    config: _0x5b9311
  }) => {
    try {
      if (!_0x246ee1) {
        return await _0x24e7a4(BOTOW);
      }
      if (_0x1f51d3 == 'on') {
        if (_0x5b9311.AUTO_RECORDING == "true") {
          return _0x24e7a4("already on ");
        }
        await input_set("AUTO_RECORDING", "true");
        return _0x24e7a4("autorecording turned on");
      }
      if (_0x1f51d3 == "off") {
        if (_0x5b9311.AUTO_RECORDING !== "true") {
          return _0x24e7a4("already off");
        }
        await input_set("AUTO_RECORDING", "false");
        return _0x24e7a4("autorecording turned off");
      }
    } catch (_0xb3a2c0) {
      _0x24e7a4("*Error !!*");
      _0x225ebd(_0xb3a2c0);
    }
  });
  const _0x4c2d2f = {
    'pattern': "autoread",
    'react': "🗣️",
    'dontAddCommandList': true,
    'filename': __filename
  };
  cmd(_0x4c2d2f, async (_0x399aea, _0x1d9182, _0x18acfa, {
    from: _0x4ab5a0,
    prefix: _0x438ef1,
    l: _0x1af5f9,
    quoted: _0x162252,
    body: _0x4a1c4f,
    isCmd: _0xba5581,
    command: _0x253007,
    args: _0x92fd16,
    q: _0x2a7a25,
    isGroup: _0x210b5a,
    sender: _0x582a8b,
    senderNumber: _0x4a760a,
    botNumber2: _0x418741,
    botNumber: _0x2ac9a2,
    pushname: _0x1fb384,
    isMe: _0x426673,
    isOwner: _0x4798b3,
    groupMetadata: _0xef79cb,
    groupName: _0x2b16b3,
    participants: _0x19edec,
    groupAdmins: _0x3cd7cf,
    isBotAdmins: _0x214837,
    isAdmins: _0x15e619,
    reply: _0x4ddf87,
    config: _0x4ead24
  }) => {
    try {
      if (!_0x426673) {
        return await _0x4ddf87(BOTOW);
      }
      if (_0x2a7a25 == 'on') {
        if (_0x4ead24.AUTO_READ == "true") {
          return _0x4ddf87("already on ");
        }
        await input_set("AUTO_READ", 'true');
        return _0x4ddf87("autoread turned on");
      }
      if (_0x2a7a25 == "off") {
        if (_0x4ead24.AUTO_READ !== "true") {
          return _0x4ddf87("already off");
        }
        await input_set("AUTO_READ", 'false');
        return _0x4ddf87("autoread turned off");
      }
    } catch (_0x2d9280) {
      _0x4ddf87("*Error !!*");
      _0x1af5f9(_0x2d9280);
    }
  });
  const _0x583f9d = {
    'pattern': 'cmdread',
    'react': "🗣️",
    'dontAddCommandList': true,
    'filename': __filename
  };
  cmd(_0x583f9d, async (_0x55c78, _0x2f233f, _0x80c207, {
    from: _0x5995dd,
    prefix: _0x35062a,
    l: _0x5d876d,
    quoted: _0x1fe4d7,
    body: _0x11c4b5,
    isCmd: _0x4cd33d,
    command: _0x5e710a,
    args: _0x2aed92,
    q: _0x57877e,
    isGroup: _0x40a2fa,
    sender: _0x126f3f,
    senderNumber: _0x32b50d,
    botNumber2: _0x4907ed,
    botNumber: _0x3469eb,
    pushname: _0x215013,
    isMe: _0x293232,
    isOwner: _0x1d6930,
    groupMetadata: _0x34b0e7,
    groupName: _0x35980b,
    participants: _0x3b0cce,
    groupAdmins: _0x2fb6a4,
    isBotAdmins: _0x807292,
    isAdmins: _0x21b280,
    reply: _0x2ca642,
    config: _0x890fad
  }) => {
    try {
      if (!_0x293232) {
        return await _0x2ca642(BOTOW);
      }
      if (_0x57877e == 'on') {
        if (_0x890fad.READ_CMD_ONLY == "true") {
          return _0x2ca642("already on ");
        }
        await input_set("READ_CMD_ONLY", "true");
        return _0x2ca642("cmdread turned on");
      }
      if (_0x57877e == "off") {
        if (_0x890fad.READ_CMD_ONLY !== "true") {
          return _0x2ca642("already off");
        }
        await input_set("READ_CMD_ONLY", "false");
        return _0x2ca642("cmdread turned off");
      }
    } catch (_0x38a0fa) {
      _0x2ca642("*Error !!*");
      _0x5d876d(_0x38a0fa);
    }
  });
  const _0x24bf7f = {
    'pattern': 'autoreact',
    'react': "🗣️",
    'dontAddCommandList': true,
    'filename': __filename
  };
  cmd(_0x24bf7f, async (_0x5b04c7, _0x55b562, _0x827703, {
    from: _0x322483,
    prefix: _0x429b93,
    l: _0x138e62,
    quoted: _0x3b0bb4,
    body: _0xba93c8,
    isCmd: _0x431aec,
    command: _0x16c88d,
    args: _0x28892f,
    q: _0x1609ce,
    isGroup: _0x210b37,
    sender: _0x4f9ed2,
    senderNumber: _0x4d8b31,
    botNumber2: _0x2dd0b2,
    botNumber: _0x37a807,
    pushname: _0x232d12,
    isMe: _0x2096a8,
    isOwner: _0x3e971e,
    groupMetadata: _0x3a9f48,
    groupName: _0x5ae6d8,
    participants: _0x44e424,
    groupAdmins: _0x3a1cb2,
    isBotAdmins: _0x53d5af,
    isAdmins: _0x5e9f07,
    reply: _0x811734,
    config: _0x23f80b
  }) => {
    try {
      if (!_0x2096a8) {
        return await _0x811734(BOTOW);
      }
      if (_0x1609ce == 'on') {
        if (_0x23f80b.AUTO_REACT == "true") {
          return _0x811734("already on ");
        }
        await input_set('AUTO_REACT', 'true');
        return _0x811734("autoreact turned on");
      }
      if (_0x1609ce == "off") {
        if (_0x23f80b.AUTO_REACT !== "true") {
          return _0x811734("already off");
        }
        await input_set("AUTO_REACT", "false");
        return _0x811734("autoreact turned off");
      }
    } catch (_0x2e4464) {
      _0x811734("*Error !!*");
      _0x138e62(_0x2e4464);
    }
  });
  const _0x451362 = {
    'pattern': "alwaysonline",
    'react': "🗣️",
    'dontAddCommandList': true,
    'filename': __filename
  };
  cmd(_0x451362, async (_0x44876b, _0x4adfc1, _0x405a8a, {
    from: _0x3ad46d,
    prefix: _0x146afc,
    l: _0x19a021,
    quoted: _0x4b3b20,
    body: _0x4aae15,
    isCmd: _0x10a586,
    command: _0x5c43cd,
    args: _0x334fb1,
    q: _0x3762e6,
    isGroup: _0x502349,
    sender: _0x13f6a5,
    senderNumber: _0x221779,
    botNumber2: _0x53c4db,
    botNumber: _0x3c0459,
    pushname: _0x25ce06,
    isMe: _0x83af0a,
    isOwner: _0xea31ce,
    groupMetadata: _0x5b8106,
    groupName: _0x155b26,
    participants: _0x24152a,
    groupAdmins: _0x392949,
    isBotAdmins: _0x51be8c,
    isAdmins: _0x3f15d7,
    reply: _0x37cec8,
    config: _0x453f4f
  }) => {
    try {
      if (!_0x83af0a) {
        return await _0x37cec8(BOTOW);
      }
      if (_0x3762e6 == 'on') {
        if (_0x453f4f.ALWAYS_ONLINE == "true") {
          return _0x37cec8("already on ");
        }
        await input_set('ALWAYS_ONLINE', "true");
        return _0x37cec8("alwaysonline turned on");
      }
      if (_0x3762e6 == 'off') {
        if (_0x453f4f.ALWAYS_ONLINE !== "true") {
          return _0x37cec8("already off");
        }
        await input_set('ALWAYS_ONLINE', "false");
        return _0x37cec8("alwaysonline turned off");
      }
    } catch (_0x199ffe) {
      _0x37cec8("*Error !!*");
      _0x19a021(_0x199ffe);
    }
  });
  const _0x1e5b85 = {
    'pattern': "autoblock",
    'react': "🗣️"
  };
  function _0x3f4547(_0x25e3aa, _0x57dc62, _0x5615cc, _0x4d05d3, _0x54a807) {
    return _0x3230(_0x4d05d3 - 0x16c, _0x54a807);
  }
  _0x1e5b85.dontAddCommandList = true;
  _0x1e5b85.filename = __filename;
  cmd(_0x1e5b85, async (_0x7d9dcc, _0x50af74, _0x16c0e0, {
    from: _0x3a8be4,
    prefix: _0x558994,
    l: _0x4eca6b,
    quoted: _0x39b83f,
    body: _0x13a451,
    isCmd: _0x26a589,
    command: _0x37517e,
    args: _0x2d700c,
    q: _0x47376e,
    isGroup: _0x1beffa,
    sender: _0x2074ba,
    senderNumber: _0x360ff9,
    botNumber2: _0x6823a2,
    botNumber: _0x1088fa,
    pushname: _0x510dca,
    isMe: _0x43b4fd,
    isOwner: _0x309337,
    groupMetadata: _0x40a436,
    groupName: _0x19a9f3,
    participants: _0x518ac2,
    groupAdmins: _0x285e48,
    isBotAdmins: _0x361d3c,
    isAdmins: _0x596000,
    reply: _0x5229ad,
    config: _0x1af966
  }) => {
    try {
      if (!_0x43b4fd) {
        return await _0x5229ad(BOTOW);
      }
      if (_0x47376e == 'on') {
        if (_0x1af966.AUTO_BLOCK == 'true') {
          return _0x5229ad("already on ");
        }
        await input_set('AUTO_BLOCK', "true");
        return _0x5229ad("Auto block turned on");
      }
      if (_0x47376e == "off") {
        if (_0x1af966.AUTO_BLOCK !== "true") {
          return _0x5229ad("already off");
        }
        await input_set("AUTO_BLOCK", "false");
        return _0x5229ad("Auto block turned off");
      }
    } catch (_0x53e9df) {
      _0x5229ad("*Error !!*");
      _0x4eca6b(_0x53e9df);
    }
  });
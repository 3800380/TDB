(function (_0x5a4984, _0x3f7e86) {
    const _0x3b3af4 = _0x5a4984();
    while (true) {
      try {
        const _0x5c873e = parseInt(_0x18a7(0x7e5, '4yFN')) / 0x1 + -parseInt(_0x18a7(0x47a, "gii0")) / 0x2 + -parseInt(_0x18a7(0xda8, "TY%u")) / 0x3 + -parseInt(_0x18a7(0x64b, "PXnn")) / 0x4 * (parseInt(_0x18a7(0x176, "TY%u")) / 0x5) + -parseInt(_0x18a7(0x231, '0g51')) / 0x6 * (-parseInt(_0x18a7(0xc68, 'ZiJU')) / 0x7) + -parseInt(_0x18a7(0xcfb, "ilv0")) / 0x8 * (parseInt(_0x18a7(0x4db, 'ubB2')) / 0x9) + parseInt(_0x18a7(0xd71, "(Q@M")) / 0xa;
        if (_0x5c873e === _0x3f7e86) {
          break;
        } else {
          _0x3b3af4.push(_0x3b3af4.shift());
        }
      } catch (_0x4b4402) {
        _0x3b3af4.push(_0x3b3af4.shift());
      }
    }
  })(_0x40f5, 0x38c51);
  const config = require("../settings");
  const {
    cmd,
    commands
  } = require('../lib/command');
  const fs = require('fs');
  const axios = require('axios');
  const owner = config.OWNER_NUMBER;
  const moment = require("moment-timezone");
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
  } = require("../lib/functions");
  const {
    default: makeWASocket,
    useMultiFileAuthState,
    WA_DEFAULT_EPHEMERAL,
    jidNormalizedUser,
    proto,
    getDevice,
    generateWAMessageFromContent,
    fetchLatestBaileysVersion,
    makeInMemoryStore,
    getContentType,
    generateForwardMessageContent,
    downloadContentFromMessage,
    jidDecode
  } = require("@whiskeysockets/baileys");
  const Heroku = require("heroku-client");
  const _0x5b7271 = {
    'token': config.HEROKU_API_KEY
  };
  function _0x95d380(_0x31375a, _0x3e4daf, _0x2fcb21, _0x403ad1, _0x5e9b5d) {
    return _0x18a7(_0x5e9b5d + 0x14a, _0x3e4daf);
  }
  const heroku = new Heroku(_0x5b7271);
  const _0x59c24c = {
    'pattern': "updates",
    'react': '🆗',
    'desc': "To See bot updates",
    'category': "main",
    'use': '.updates',
    'filename': __filename
  };
  cmd(_0x59c24c, async (_0xc9dbdd, _0x91fdac, _0x15a765, {
    from: _0x1544c1,
    prefix: _0x25cb8d,
    l: _0x3075eb,
    quoted: _0x16eec2,
    body: _0x10ce82,
    isCmd: _0x1ca27d,
    command: _0xdf6ec2,
    args: _0x3fb95d,
    q: _0x5015f7,
    isGroup: _0x1fcaef,
    sender: _0x4444b5,
    senderNumber: _0x186ab5,
    botNumber2: _0x483cfc,
    botNumber: _0x96916c,
    pushname: _0x5b883a,
    isMe: _0x5077ad,
    isOwner: _0x400c5e,
    groupMetadata: _0x318c22,
    groupName: _0x37f964,
    participants: _0x554a05,
    groupAdmins: _0x54a714,
    isBotAdmins: _0x4477ad,
    isAdmins: _0x34c907,
    reply: _0x1c7067
  }) => {
    try {
      const _0x14a0f0 = {
        'display_text': config.BTN,
        'url': config.BTNURL,
        'merchant_url': config.BTNURL
      };
      let _0x5971b8 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify(_0x14a0f0)
      }];
      const _0x6b7a66 = {
        'image': "https://telegra.ph/file/daaa44e2849851736dd2e.png",
        'header': '',
        'footer': config.CAPTION,
        'body': ''
      };
      return await _0xc9dbdd.sendButtonMessage(_0x1544c1, _0x5971b8, _0x15a765, _0x6b7a66);
      const _0x47d8c7 = {
        'quoted': _0x91fdac
      };
      return await _0xc9dbdd.sendMessage(_0x1544c1, buttonMessaged, _0x47d8c7);
      const _0x46a612 = {
        'text': '✅',
        'key': _0x91fdac.key
      };
      const _0x40eaac = {
        'react': _0x46a612
      };
      await _0xc9dbdd.sendMessage(_0x1544c1, _0x40eaac);
    } catch (_0x14d442) {
      _0x1c7067("*Error !!*");
      _0x3075eb(_0x14d442);
    }
  });
  const _0x1651b1 = {
    'pattern': "upbio",
    'react': '🍟',
    'alias': ["updatebio"],
    'desc': "Change the Bot number Bio",
    'category': "main",
    'use': ".upbio",
    'filename': __filename
  };
  cmd(_0x1651b1, async (_0x3ea43f, _0x55fba0, _0x196cb4, {
    from: _0xe4407f,
    l: _0x5c06ea,
    quoted: _0x318bcb,
    body: _0x5ee35a,
    isCmd: _0x435371,
    command: _0x26d0f3,
    args: _0x50270f,
    q: _0x4edfd6,
    isGroup: _0x1e2b8a,
    isownbot: _0x31e563,
    sender: _0x568229,
    senderNumber: _0x25d3c7,
    botNumber2: _0xfc9b4e,
    botNumber: _0x2ca2c6,
    pushname: _0x2d821c,
    isMe: _0x1d65e2,
    isOwner: _0x17e476,
    groupMetadata: _0x5891e2,
    groupName: _0x546ba5,
    participants: _0x1603aa,
    groupAdmins: _0x783336,
    isBotAdmins: _0x181a49,
    isCreator: _0x95c74c,
    isDev: _0x1d2a3d,
    isAdmins: _0x59be6e,
    reply: _0x1a07ce
  }) => {
    try {
      if (!_0x17e476) {
        return await _0x1a07ce("*You must be a bots owner frist*");
      }
      if (!_0x4edfd6) {
        return _0x1a07ce("*Enter the New Bio*");
      }
      if (_0x4edfd6.length > 0x8b) {
        return _0x1a07ce("*Sorry ! Characters limit Exceded*");
      }
      await _0x3ea43f.updateProfileStatus(_0x4edfd6);
      const _0xdbd745 = {
        'text': "*New Bio Added Successfully*"
      };
      const _0x5d0ea1 = {
        'quoted': _0x55fba0
      };
      await _0x3ea43f.sendMessage(_0xe4407f, _0xdbd745, _0x5d0ea1);
    } catch (_0x238751) {
      _0x1a07ce("*Error Accurated !!*\n\n" + _0x238751);
      _0x5c06ea(_0x238751);
    }
  });
  const _0x32f57c = {
    'pattern': "getprivacy",
    'react': '🍟',
    'alias': ["getprivacysettings", "gpvc"],
    'desc': "Get the bot Number Privacy Setting Updates",
    'category': "main",
    'use': '.getprivacy',
    'filename': __filename
  };
  cmd(_0x32f57c, async (_0xcec8f1, _0x1030f4, _0x3437af, {
    from: _0x3d7bfa,
    l: _0x29bfae,
    quoted: _0x48fa70,
    body: _0x388282,
    isCmd: _0x1c4c84,
    command: _0x3847ac,
    args: _0x126626,
    q: _0x3b47d9,
    isGroup: _0x1f58e7,
    isownbot: _0x2fdfe0,
    sender: _0x1f4ee1,
    senderNumber: _0x117022,
    botNumber2: _0x365a43,
    botNumber: _0x4b9299,
    pushname: _0x5076cc,
    isMe: _0x1112ec,
    isOwner: _0x3c2829,
    groupMetadata: _0x599fea,
    groupName: _0x20a4c4,
    participants: _0x23642b,
    groupAdmins: _0x243e7b,
    isBotAdmins: _0x43f1cd,
    isCreator: _0x161e50,
    isDev: _0x1fb346,
    isAdmins: _0x3a8d1d,
    reply: _0x474e36
  }) => {
    try {
      if (!_0x3c2829) {
        return await _0x474e36("*You must be a bots owner frist*");
      }
      const _0x28a1dd = await _0xcec8f1.fetchPrivacySettings(true);
      let _0x51d895 = "Read Recipt - " + _0x28a1dd.readreceipts + "\nProfile Picture - " + _0x28a1dd.profile + "\nStatus  - " + _0x28a1dd.status + "\nOnline - " + _0x28a1dd.online + "\nLast Seen - " + _0x28a1dd.last + "\nGroup Privacy - " + _0x28a1dd.groupadd + "\nCall Privacy - " + _0x28a1dd.calladd + "\n\n© *𝙿𝚒𝚗𝚔𝚅𝚎𝚗𝚘𝚖-𝙼𝙳*";
      const _0x4b0236 = {
        'text': _0x51d895
      };
      const _0x2dbead = {
        'quoted': _0x1030f4
      };
      await _0xcec8f1.sendMessage(_0x3d7bfa, _0x4b0236, _0x2dbead);
    } catch (_0x8ff4ad) {
      _0x474e36("*Error Accurated !!*\n\n" + _0x8ff4ad);
      _0x29bfae(_0x8ff4ad);
    }
  });
  const _0x3d602d = {
    'pattern': "removepp",
    'react': '🍟',
    'alias': ["rmpp"],
    'desc': "Remove the botNumber PP",
    'category': "main",
    'use': ".removepp",
    'filename': __filename
  };
  cmd(_0x3d602d, async (_0x4b77ce, _0x3cb810, _0xe36d50, {
    from: _0x6222a8,
    l: _0xf71162,
    quoted: _0x4d0807,
    body: _0x33030c,
    isCmd: _0x1763e6,
    command: _0x19b514,
    args: _0x316be9,
    q: _0x2bf39b,
    isGroup: _0x489a9e,
    sender: _0x5b8445,
    senderNumber: _0x53f582,
    botNumber2: _0x27757f,
    botNumber: _0x502e22,
    pushname: _0x3c3bf6,
    isMe: _0x363b59,
    isOwner: _0x196568,
    isownbot: _0xb69633,
    groupMetadata: _0x45c71c,
    groupName: _0x521e04,
    participants: _0x3fb0eb,
    groupAdmins: _0x5ad7e0,
    isBotAdmins: _0x33d505,
    isCreator: _0x16c093,
    isDev: _0x319688,
    isAdmins: _0xa4914,
    reply: _0x251e41
  }) => {
    try {
      if (!_0x196568) {
        return await _0x251e41("*You must be a bots owner frist*");
      }
      await _0x4b77ce.removeProfilePicture(_0x27757f);
      const _0x22a94b = {
        'text': "*Profile Pic Successfully removed*"
      };
      const _0x46584d = {
        'quoted': _0x3cb810
      };
      await _0x4b77ce.sendMessage(_0x6222a8, _0x22a94b, _0x46584d);
    } catch (_0x3463ae) {
      _0x251e41("*Error Accurated !!*\n\n" + _0x3463ae);
      _0xf71162(_0x3463ae);
    }
  });
  const _0x3364dc = {
    'pattern': "setpp"
  };
  function _0x5f25e9(_0x3c5b31, _0x14c36f, _0x218db1, _0x3156d9, _0x9e7952) {
    return _0x18a7(_0x3156d9 - 0x22f, _0x3c5b31);
  }
  function _0x18a7(_0x51cafe, _0x46b668) {
    const _0x227e54 = _0x40f5();
    _0x18a7 = function (_0x52e0d2, _0x18170d) {
      _0x52e0d2 = _0x52e0d2 - 0x13e;
      let _0x5b79e2 = _0x227e54[_0x52e0d2];
      if (_0x18a7.VaItjM === undefined) {
        var _0x562e92 = function (_0x580a8c) {
          let _0x1f9e98 = '';
          let _0x521c86 = '';
          let _0x373ad7 = 0x0;
          let _0x139f6b;
          let _0x354a68;
          for (let _0x2631a9 = 0x0; _0x354a68 = _0x580a8c.charAt(_0x2631a9++); ~_0x354a68 && (_0x139f6b = _0x373ad7 % 0x4 ? _0x139f6b * 0x40 + _0x354a68 : _0x354a68, _0x373ad7++ % 0x4) ? _0x1f9e98 += String.fromCharCode(0xff & _0x139f6b >> (-0x2 * _0x373ad7 & 0x6)) : 0x0) {
            _0x354a68 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(_0x354a68);
          }
          let _0x62b4ad = 0x0;
          for (let _0x51d238 = _0x1f9e98.length; _0x62b4ad < _0x51d238; _0x62b4ad++) {
            _0x521c86 += '%' + ('00' + _0x1f9e98.charCodeAt(_0x62b4ad).toString(0x10)).slice(-0x2);
          }
          return decodeURIComponent(_0x521c86);
        };
        const _0xd0d9c9 = function (_0x25d504, _0x1ebb52) {
          let _0x38b808 = [];
          let _0x511a3d = 0x0;
          let _0x4f0664;
          let _0x329c4c = '';
          _0x25d504 = _0x562e92(_0x25d504);
          let _0x419ac6;
          for (_0x419ac6 = 0x0; _0x419ac6 < 0x100; _0x419ac6++) {
            _0x38b808[_0x419ac6] = _0x419ac6;
          }
          for (_0x419ac6 = 0x0; _0x419ac6 < 0x100; _0x419ac6++) {
            _0x511a3d = (_0x511a3d + _0x38b808[_0x419ac6] + _0x1ebb52.charCodeAt(_0x419ac6 % _0x1ebb52.length)) % 0x100;
            _0x4f0664 = _0x38b808[_0x419ac6];
            _0x38b808[_0x419ac6] = _0x38b808[_0x511a3d];
            _0x38b808[_0x511a3d] = _0x4f0664;
          }
          _0x419ac6 = 0x0;
          _0x511a3d = 0x0;
          for (let _0x58448a = 0x0; _0x58448a < _0x25d504.length; _0x58448a++) {
            _0x419ac6 = (_0x419ac6 + 0x1) % 0x100;
            _0x511a3d = (_0x511a3d + _0x38b808[_0x419ac6]) % 0x100;
            _0x4f0664 = _0x38b808[_0x419ac6];
            _0x38b808[_0x419ac6] = _0x38b808[_0x511a3d];
            _0x38b808[_0x511a3d] = _0x4f0664;
            _0x329c4c += String.fromCharCode(_0x25d504.charCodeAt(_0x58448a) ^ _0x38b808[(_0x38b808[_0x419ac6] + _0x38b808[_0x511a3d]) % 0x100]);
          }
          return _0x329c4c;
        };
        _0x18a7.OBfMjM = _0xd0d9c9;
        _0x51cafe = arguments;
        _0x18a7.VaItjM = true;
      }
      const _0x40d0b3 = _0x227e54[0x0];
      const _0x100ffe = _0x52e0d2 + _0x40d0b3;
      const _0x41ae7d = _0x51cafe[_0x100ffe];
      if (!_0x41ae7d) {
        if (_0x18a7.CNLANU === undefined) {
          _0x18a7.CNLANU = true;
        }
        _0x5b79e2 = _0x18a7.OBfMjM(_0x5b79e2, _0x18170d);
        _0x51cafe[_0x100ffe] = _0x5b79e2;
      } else {
        _0x5b79e2 = _0x41ae7d;
      }
      return _0x5b79e2;
    };
    return _0x18a7(_0x51cafe, _0x46b668);
  }
  _0x3364dc.react = '🍟';
  _0x3364dc.alias = ['setdp'];
  _0x3364dc.desc = "Update the botNumber PP";
  _0x3364dc.category = 'main';
  _0x3364dc.use = ".setpp";
  _0x3364dc.filename = __filename;
  function _0x40f5() {
    const _0x45c2ff = ["W5NcLI/cSfu", 'W57dHIq', "W7JdK8o8WPhdHa", 'W4RdVSo+uCoW', "WOZcVSoif8kC", "W5PJr8o1WOu", "W5ldJmoU", "nWVdG00B", "fstcNSoIpW", 'WONcSCkd', "FCo1wGNcLG", "WPbdW5bWhG", "wGm7", "W7DqbwXw", 'WQpcQ8ocW6ddJW', 'W6hdOSkaW4dcKW', "zZRdLSosW5G", "WQtcKgKZjW", "q8koW4POjW", "W5eMqCk6W4y", 'xG4Ypq', 'WQipW5XQWRe', "WQ8QWPmO", "W6lcNY3cSmoF", "WP3cV8oi", "W6hcT8ktnx0", "WOhJGRGU8lMiJVcWI5G", "WRJcS8oEW4q", "tdtdJmovW7G", "EsBdOCkFW6S", 'W4nwW7tdPh8', "lSoBz8o3", 'W5RdLSklW7NdLW', 'WQRcOmk7mxu', "W5FcG8kZewm", "W5zlWQDV", "gCk0v8o6", "WPLEWQ8V", 'EGK+WP8a', "WRBcHSk5dfy", "W5XhvSkxWQa", 'W5pcPdVcH8o3', "et/cSSoOpq", 'W77dRCkrW4hdSG', "WOhdSqnoW6S", "WOjjW7D6ia", "WRFcRHhdOSk4", 'WQBcUSo6k1G', "w8oFEtpcOW", "W7tdUSo4WRxdTq", "hmkCEHBcVW", "d8o9vW", "mLnhWQtcRG", "W53cLCklk1i", "WRZcPHxdSmkx", "W5jhcbaz", "WRVcJSoVW4xcSq", 'WQeJW51Gpq', "W7eTWPLmoG", 'W71LW7DglG', "esddGhSn", "b8kKkCoNsW", "AmkSWOVcQW", "WO3cOmot", 'sZFdJSkRW4O', "WP7dIuWvda", "d8ojaCkDzG", "vmkHzmo3WOS", "WOZcOSkfESoB", 'W73cRbXqW7W', "WQBcT8ozW47dTW", "W6PuW7zXha", 'W6v2pq', 'WPlcU8okqSoe', "WRe/W69Oda", "b8kDgSonDG", "WRBcVSocW6BcMW", "WOhcTCkkWO4Q", 'WRmSkNvD', 'zJxcGSojW7W', 'WP3dLM0', "WQGUW6zDCa", 'yd/dL8onW7W', "W4qCWO4TWPO", "WRhcGmktWPiI", "abxcN8oqha", "a8kLWPHlWOO", "W7nWC8kzWRu", "WQldIfSPhG", 'A8kbW6P1mG', "j3DGWONcIW", "lSkjCmo3WOe", 'wSopo3JdPW', 'WQq6W6WydW', 'W5Ora8kZWOS', "WQDkWOuqqG", "W6VcUaxcImoZ", "WQiAiezl", "W4ifcCkPWQW", "W5xdJmoJqmk4", "WQiAkuPB", "W5xdQIbaW4C", "WQBcPmomW6FcMa", 'WQldJs8adG', 'W6/dJ8o5WQ7cQG', 'FsK4WQqU', 'W4GsW4FcVwm', "W5WjW6rVpW", "WPRcGmkBeNi", 'WR4FW4iUWP8', "WQuacNf/", "WQ7cUCouWOxcGa", "W7TgWQxdQLG", 'W7fkzqmp', 'WQBdHbKJiq', "W4riW6VdPK4", "WQTqW7ldRvK", "WOtcSSkZcw4", 'WRbpW6C8WO0', "sXy0j8oD", "W5XkngWg", "hSkDdq", "espcHmoMnG", 'W5/cL8kkhem', 'WPKUj0LS', 'WQH9W5y4cG', 'W4WsWRC4WPa', "ysNdJSo4W7u", "W5bWlbq9", "emkSACo3WOK", "W6vLW6a", 'W74GW65doa', "WRf9W68RWPe", "o8k5WOFdUxO", 'W50vWR4VW54', "iHBdHSkmW44", "WO5AWRS3", "gSkQW4XlWOC", 'nWpcH8oXiW', "8k63Go+6QsvtWRW", 'W5ZcRdvRWRG', "WOJcQ8oDsa", "WQD7W7uNWO8", 'W6jmW7hcQq', "WQddSSoAW5/dMW", 'oCocE8o8W4y', "W7FdOSkrWPldHW", 'WRdcOSknW7ZcNa', "say6mmom", "qmkAW70oW5G", "W75ahq", "WPJcG8otW6ddHa", "WOiIW6jwAG", 'W5/dGmo7qmo2', "W6dcIbdcJ8oA", "WQFdLZfCW7S", 'WQSQW79zlG', "W6fxW5FcUYi", 'WPuQW6vClW', "W5jUlbqM", "W6pdLbScma", 'WRJdOK4tca', "WPxcVmknrCox", "W7xdHmo+WRVdPG", "W6LuW6VdOhS", 'W4zdcX4B', "gCoGvCo5W4i", "6PYB4BwVYlJHT67iGW", "y8oIDIJcOG", "W51LW61wiG", "bJxcLSoKjq", "WOpdSKyCnG", 'WRfpW6G7WRq', 'pCkjDCoGW44', 'W5zRW55AoW', 'lCobC8oMW5i', "bCk8ySkJWPG", "tZHdFSo/", 'W7HyaMu', "dCkAyrRcVq", 'W7ZdV8oOBGtcMf3dVfXRW5ig', "oSkOWOFdQhO", 'WPSZhe9P', 'WP0yvWSo', 'xmkkEtBcSG', 'pSkGwCkyWO4', 'd8ktsbBcRq', "mgPtWRi", 'W7ZcImklmvi', "W6LCd2Oc", "tq/dRa", "wXmRFCoB", "mG3dG2u", "xHxcHCo1pG", 'W5/cPZq5WRK', 'gSk7WPbOWOS', 'wIpcKSoZnq', "WP3cVmozdCog", "8kM5UdldI8oonq", "WO14cbOf", "urq9kCoE", "WQBcP8kQpLK", "W67cS8kOeLi", "WQSAW5BcOgC", "WRVcGmkaW5a", "vbC6mmom", "WRlcMSoIW6RcIq", "wY7dU8oWW4O", 'W4rNvSk+', "WQJdRmkmWRldIW", 'W5OxWR53W7q', "hmowlIxdTa", "WOxcOCoUW6xcQq", "W552jNm4", "ndpdIeir", "W485WRCYWP0", "8yA1USkREa", 'WQmfmfmp', "WRjAWQ4fWPW", "W4HfdfvH", 'WRBcT8k3eKe', "WPRcQ8oFW5JdUa", "gMzgWRJcQq", "W7vsqa", "W60BW4aMW7i", "s8oEBIVcOW", "W6HPW7vhjq", "W5GAkXXE", "WRicjfC", "WOjzWQGOWPe", "W5/dM8ooWORdSa", "vapcKSoIpW", 'fYtcLSoyja', "WRagW4zbea", "WOK9W7i", "WQqbc3bN", "FqL4WQ7cPq", "B21qw8oA", "n8kzztRcMa", "WQdcOmk+F0q", "W58ZoeWK", "WRhcTWNdPSk7", "nwT0WO/cPG", "W6VcRCk2meq", "lXldJgKN", "WQ3cKbHGBG", "gSovBrpcSq", 'W5O8mmkqWRu', "ohDTWQFcHG", 'W7VcISohWRxdOq', "WQP+W7DHia", "ASo4W7KDW5O", "Bt9lr8oh", "WQtcR8ooW7BcMa", "gCkIW5DrW4i", "W6PxW5FcVgC", "AIJdLSkt", "W6HQW5ddLLi", 'aaHQDSkn', 'fSkLySk0WPy', "g8oDcmk4WO0", "rCkQW4HpWPe", "WRvkmuWp", 'WPiBW65DgG', 'og4A', 'WOCojMvn', 'W70Bp8kPWPe', 'WR7cT8oo', "W5FdJ8o5WQNdPa", "WQ3cV8klmrK", "W5/cLMZdTf8", "WOtcOdfWW7q", 'W7xcISo+WRldOa', "W63cVHtcM8oL", "W4RdNCk9", 'W4dcICk2bmk4', "WOaGW7KykW", "vaqJemo/", "W7KFWQtcOHy", "W7fRkhW3", 'WROpWQa', "xCkoW45HoG", "erBcOSoLeG", "wWzjwmou", "W7JcQdnPW7y", "W58FW6VcHLa", "WOxcNCoLW77cIa", 'ftlcM8oICq', 't8oPW5CvW5G', "W5Sgbe8x", "W6pcTSkclxW", 'WQddObj5W7K', "WOiJcM0v", 'W7jkgIm', "WPPdW7HIpW", "W61HW61hla", "W5VcKx0d", "AtldJmof", "WPH5WPnXka", "WQFcOHpdTCkZ", "W6zEW6ZdRq", "xHaEWOOS", "hSkyW5r9WQG", "kHLlxCoB", 'W4itemkSWRq', "WRBcQmkVm1S", "W6PqW4L0pG", "W5pdMmoAWRNdHG", "WQRdRaKmoW", "4PEM4PEc4PwL4Psv44gA", "W5KqcWvq", "nrhdJ2Gw", 'W6SxagWc', 'wbSTWP8a', "W5GyWPqpWPq", "WQnOW4nPma", "WODVW6Xkjq", 'WQddMfWV', 'W7vooeW+', '8ks4PcWWWQ7dKq', "W7WqfSkZWRK", "W5pcJdr/W4e", "W71XW61xaW", "WPzfWQy7WPW", "xKGRWPKg", "sCkcW5jOdq", "W6T9fgCB", "W711W6K", 'WOO9n1fC', "WPtcT8kBWOGN", 'W5Gzaa', "WOlcP8oLW6BcPG", 'kSozoSkGWRi', "W5/dUIfBW4y", "r8oBW5OyW5m", "4PI2W7tdKmk/mq", "WPtcVCkzWP8", "W4XswbaC", 'ymosuHJcVa', "W61qcMWz", "ESopFYdcIq", 'bSkIW5nAW4i', 'WQtcUmk/F1y', "WR7cP8oXW4tdPa", "W7LEW6FdR1K", "W63dHCoBWO3dSG", "BKDjw8oz", "W6xdQCklW5BdVG", 'W4JdOConWRhdRW', "dmk7sSkoWPq", "bCkqDq", "W7tjIog1RUg2N8o2", "ESoiDSo/W4G", 'gmkByXpcVW', "WQLlW4PKdG", "W7/cUSooW7u", "jFcPQBpcGConWRG", "WQvOW5CL", 'W6ldQCkDW4y', "W600W7dcSeq", "W65nW4BdOK8", "WRtcV8os", 'aSovyrlcSq', "tWK/WO5j", 'fZpcGSo1ma', "gCo8eSkVWPC", "W4SpWR4", "WPHnW6LVW4PUoSoZeWaUFCkd", "WRWoWRhdPGu", "b8k6A8kIWPe", "uXaVEq", "WQWxW4K", "wgxdNmkRW40", "WO3dHH0ypq", "W6rlW6ddPXW", "WOFcQdxdKCkz", "WQhdQuddJ8kN", "WQe1WO8", "WQRdOcbmW50", "yavIESo2", 'WOZcS8ozwCox', "b8k/EGFcPq", "W7TTW7Thoq", "mcldIKq1", "aM/dSe4V", 'WQ7cKGNdHCky', 'iCkxAd7cIG', "AmkIWPpdVY4", 'W5rbcI0H', 'W5bvb8kVWQW', "4Psx4PEL4PsX4Pwg4PAq", "WOmHW68yjW", 'c1nTzSkiW4JcG8ojbrStWQNdTCo1', 'W6BcPZrWW7K', "WOJcP8ovW5hcPW", "W4jwcXPl", "W6JcISkRW7VcRW", 'W6flW4VdQ3q', 'BdpdG8ov', 'W7NcLCkfmrC', "W6HCag07", "W7NdHCoUWR8", "W5dcRZNcP8ox", "e2Ke", "WQqykq", 'WQHJW5a', "WQmpjebB", "pM9qW4hcJq", "W4/dPSkBh8kkWQHttepcLCoSW7O", "WQ7dOaef", "W6ZcICkb", "W5FcOmkIhgS", "WP4MhCkJ", "W4ixdbCo", 'dWJcHMus', 'W58ggG', "WRqLW5Pzlq", "W5tcLvKJ", "W4/dK33dSG", "wSopAZxcPW", "AJxdHSkbW7q", "WOOsWQH9WPa", "YzhdOSknW4pjTa", "W7hdRmknWRpdIW", 'pCoHe8kUWOy', 'WOv5W5eOWR8', 'W4j/BW', "z8k9W41gnG", 'W5FdK8oKAmoQ', "W4GTW4NcVeO", "W73cSXpdNSo7", 'W40yWQWpWO8', 'WQuvW4ZcOeW', "W6pcTCkSbf4", "W6xcQCkOmei", "c8kgFXBcUW", "kqVdG283", "W7DwcGSc", 'oLhdMJS', "WQmTWPiKyW", "WQTeWQy3WPW", "WRfAW6O2WO0", 'AsflqCos', "W71wheWx", "kMWfeSo+", "zYHkrSoE", "WRyTW5jPjq", "W4KIW7Sm", "WQZdRW0pfa", "lZRdJmkbW7y", "W759hrGJ", "W4NcQ8kcifO", 'v8ozW48vWPS', 'W7ZcSGdcKmo6', "W6PsW6a", "tGHVumoV", "qsVcI8kIW5S", 'amkDgSojAq', "WPBdTmkDWOGS", 'W6tcLr5CW4O', "CItdJmkYW70", "W77cICkfn0m", 'aJxcHCo0oa', "WPJdNJPh", "4BEW4BELWQNHTBOM", "WRlcPCoDW7lcHq", "pmkOWPu", "W4zAhq", "FttdKmkbW7G", "cSoNeSk0", "uXD7fSoa", 'rmoypSkBWRu', "yJ7dJmovW7a", "xmkBW65UmG", 'WPmFkgH4', 'WQtdKu01kW', "WOGBWRaYFa", "WP3cQrFdQSkI", "hmkIW4BdOwe", "FvbAWRNcUG", "W77dK8oNWRpdLq", 'd8kEWRhdVeG', "WPBdS8kjW5OS", "wJlcM8oOmG", "WQeEW7uOWOy", "b8kBlb/cUq", "W5nsaaS", 'WRNcT8oqW5JdIq', "AghcImkb", 'W74AxWrb', "WQeal1jG", "WPDEW6bvjq", "srKQWReb", 'WQ/dTXLGW4m', 'h8oTyCobW7m', "nSklrCk2WQ0", 'W7FdUmka', "WRldUNWRlW", "W41sWQr7rq", "pmk4vI/cIW", "rJBcGSopW7y", "W7nygNO3", "W6lcJ8ktjeu", "WQ/cQ8kamfm", "W4mWWP03WQG", "zIJcGSoiW6O", "WRahia", 'W7KoWRG+WPS', "W63cRXldNSod", 'W4DCW5tdRu0', "W5BcL8oFx8oD", "W6ZcLYDuW7u", "W73dUSoAWOldLq", "W7VcVapcM8oX", "WOaiWR4XWPS", "WPNcISkT", "W4uhbG", "zt9D", "WOxdHCo7xcW", "W6zHW61rcG", "W7NcLcDiW7a", "nMLCWRNcQq", 'WRzpW6j/WOO', "b8kOASkY", "W4myhGXu", "iSoMEIRcSG", "WPddJcbiW44", "WR54W4m", "w8keW4X0Eq", "W5zlj38Y", 'eCkGWPpdP10', "W59Jta", "WQiJWPKpyW", 'W6mEW4/cSwW', "W5dcTZdcSCom", "W59+W5tdILC", "W4NdImoLvSo9", "W4SwWR4", "u8k5bConDW", 'fZVcKSoZiG', 'W6jtW6ddKeu', "WObEWQu4yG", "W7VcICoFW6hcHa", "d8kyAq", "d8o7eSkUWOi", 'WQb4W5XXla', "W6HAW4bumW", 'WOPBW7TxW5q', "W6qFW47cSLu", "W47dL33dTf8", "lSk4WR/dMKi", "tKm6n8ov", "Ca9HESoV", "WRVcSHhcO8kI", "WQyJW5ScWRG", "WOhdKJ1yW48", "kCk9qXtcSq", "WQBdSHSkoq", "W4yuWRW", "BH8OWOCa", "W4CEW6VcKNq", "qHRdO8o0W6m", "WOddJYngW5S", "W4rwfL8y", "pSogzCo8", "W4JcTJfgW7S", "WQ/dPaymkG", "WR7cVSou", 'nZ/cMCoZma', "sGiPj8or", 'W6NdHbOzmq', "W4qyb8kLWQO", "FWldJCofW5m", "4Pwz4PEI4PEn4PAR4PA9", "6P+Y4BsLYiz/YBy", "WQHYWOy+EG", "W57dJmoJ", "W6D5W6RdI14", "EsHkvSo6", "W74FW6JdTK8", "WRFcQ8o6FHy", "qtS1WOuk", 'd8kDwXBcJW', "WObbW5CCWPO", "WRNcH8omB8oc", "W7v0ndyF", "A8k/W6XxeG", "4PAY4PER4PEt4PEB44kZ", 'WO/cHComz8ob', "W6tdQCkiW53dHq", 'tCovW4a', "WRpcRWyokG", "W41yereo", "WOSdW5HilG", "WPZcGmkJ", 'WQBcOSoBW4pdNa', "W43dN2ldTbe", "fstcNSo1na", "W4mqbmkJWQW", "WOFdMNmiWOG", "kCk5WOpcQ0K", "W7/cMmkuku4", "i8kTF8ktWOG", "W6ldTxFdMJG", 'fSkEfmod', "WRBdTSkhWRm", "WQddLv1HBW", "W6KzchSF", "bJBdISk8W5S", "W44qWOGvWO4", 'W4mTW7VcMwK', "W71HW69hka", "fSkkfmocFq", "cCkhyWlcRa", "WQhdUeGkFG", 'wHWLWOqh', 'W5tdRSkWWOZdHG', "rIddMCoQW50", 'WOJcQ8k0k14', "W6SqW67cSxe", "bSoPlmo2W5C", "W7HAW6VdP38", "W4JcOYr8W78", "WRdcP8k/j24", "W7tdUfVdNd0", 'WQFcMCoiW57cVa', "W4CufGu", "o8kxoCoBsa", "WOSeW4XopW", "W5ZcVCoDsmoC", "W4aacSk0WR0", "WQBcQmk9cLq", 'W6ywW5FcT2O', 'W4ZcSd9SW6G', "Asjkrmos", "tJGEWOC6", "sCkcW5jOlq", "fJ/cG8kM", "WQhcUSosW4q", "W4myfCkW", 'WPlcImk4ghq', '8kk4IpcIIQFXHkM88lcjSWy', "W4zueX4m", "ngjbWQ7cRW", "W5ddNCo/", "cmkqFG", "W4eqbG", "WRvtaway", 'WRpcGSkFWPer', "77+n77+G77+t77+C7726", "WPxcTSknESoA", "W4lcTCkEWPCQ", "p8klwSkgWO4", 'W6TZW6Pdla', 'WPlcTCkOeNy', "W58fhqjE", "lJ3cLmocca", "WPNcGCkPuYW", "W5rscGKo", "qq01", "WQldUJvzW5K", "W4eueCk0WR0", "WOBdRXWola", "pCkHWORdSIq", "WQXeW6KQWPC", "kmomC8oXW5u", "g8k0v8o6", "c8o9ga", "W61ChsKu", "FbrwCmou", "vrq1nSok", 'W7GFW6NdQLe', 'W4yxfrOg', "D8o+C8k/W6m", "g8ovyqlcRW", "W4BcQZ5/W7C", 'WQFcSXpdQSk4', "WPHpWO06AW", "W6NdNCkqkHC", "sK01nSom", "WQ9pW7uSWPG", "pCkAW6bDWOm", "W54qg0Sq", "WO3cMmkxhKe", 'WQhcQ8kP', 'WPpcOmou', "kmogymkYW6a", "WROkW5GSWOi", "W4/cPZz4W60", "W44qdaG", "W4nVW71xjW", "xCoyCadcOW", "WPxcTWVdM8kd", "W5NdR8obW7af", "WP7cK8kXlMq", "rsZdO8oIW6G", "hH3dSNKE", "W4KbxX9z", "WQizjerk", "W6xcR8o6oeu", "aSkbsrxcJa", 'oSoTWOddUwC', '8y+PKeGSlmo7', "W5JcMuZdSby", "WPJcL8kThhq", "W7fUvmkgWQG", 'emkUgSkOWOG', "W6NcMb7cTCo+", "W7LAW6tdOeG", "FFcFL5ZcN8kXda", "WO3INljyobK", "xXSVC8om", 'tcFdGYSn', 'W4ZdHghdPa8', "rSoUW6apW7m", "W4mqcmkVWQW", "b8kzWR/dQem", 'W4uvWQG4W5a', "WQBcS8oqW48", 'WRSBW5GaWP4', 'W6afWOpcSNa', 'lImuW6RdQa', "W6NcRSkfm1i", "W40EWQ8jWPC", "DmkgyCo3W5i", "W4LdgrWF", 'WOH8W603WPy', "WOddJt8", "W6tdPCktW7VdHW", 'WQVcQCkpl1m', 'WRddTrOcma', 'sCoEAdJcTG', "WQmpzqio", "W4xcPYi5W7y", "ACkLW7jAda", 'W64FW7hdQLe', 'WQneW6j/WPa', 'qwddKG', "W7BdUmoQBWC", 'WRBdMrDRW6y', "WRFdPbaF", "W7msfd1c", 'WQFcSWddSCkI', "W7NdH8oUWRZdRa", "W5RdVqzUWOK", "owXbWPtcQq", "W67cKSkjkfy", "W5q/dmkK", "hCoRemk/WOK", "W5TXw8kWWPq", "WQxcQmotW4ZdKa", 'l8kTW4fwWRO', "WQhdKhnlW4u", "W5v+xmk6WPu", "g8kNWOhdH3C", "WRdcVSkRWPSK", "W7f0W5XWoW", "hmkIW4BdR2S", "WR7cNSomt8ox", "W7VdH8oV", "WOtcGmk0guS", "twxdHmk9W5a", "tCogW799kG", "WQBdRXXhFG", "WQLdWQCzFW", "WQ3dTqKikG", 'iYnZWRNcPW', "WQWkW5XNWQe", "WPBcGCohW5ZdMG", "qCouW5O", "FZ5b", "W4HGW7HDoq", "WOKvW7L1", 'WQBdPqeF', 'W55faHeL', '8kQQQHxdOCkreW', "tSoulvFcLq", 'WOiHkfDC', 'BIX1FSo+', "WQfbW5mfWPy", "W4y8W79zoa", 'pSk+zmkUWOC', "W4Paf200", "W6z2W7TxlG", "W5T0ta", "Bc/dI8ooW7C", 'emkFcmoEEW', "W4KAWQ84WPK", "r8o4W6uqW4O", 'WPVcTCoFW6FdPq', "W45yfL8n", "kSoiymoMW4G", "WQSFWQ/dIK8", "W67cQYFcH8oW", "bSkpga", "WRuiW5PsaW", "jWJdGW", "W7RdG1G3kW", "p8ketmkZWRu", "WRbGW5y", "8lkBLXxcGCkoW5S", '8lEOTFcEU6BWOQUbFpcAM7m', "WPXOW4b2ka", "W67dG8oKWR3cPq", "qCo5W5qdW7G", 'FJJdISoiW7C', 'W78FW6FdSvm', "WR9PWQq0ua", 'W7NdGSoRWQ4', "gSkAW60xW5i", "uSo8FtRcJa", 'WRJcJsBdRCk+', 'DWW/jSou', "WR3cSCoLW7JdIq", "w0m5pmom", "WQpcV8omW6FcGG", "W7NcL8kRf2C", "WOZdIHe5gq", "WPH+WQyJzW", 'WQddLv1HlW', "WQrwW7C1zq", "lZ3dI8onW7W", 'j8kOb8o+BW', "WROuW4K4W7i", "W54mdW4m", "WPJcK8oKW7NdQq", "r8osW48p", "W5Kqeq98", "WRuGW7LkmW", "W4RdHSoVWRVdTG", "W4nKgqKo", 'dCoMeCk4WO8', "e8khW6j0WO4", "W4zVWQfXoq", "WQ/cM8oIy8ki", "AZHaw8oy", "WQf9WPmTga", 'WRjKW4nKjW', "bqdcHSoUbq", "AIJdKCoaW74", 'W6/dVmomWPxdRa', "xa80pmok", "W57cLbNcPSo/", "W77dJ8o5WRK", "W7VdJSoU", 'WPNcKmobqSor', 'W6DSW7XYiG', "WR56W51GoW", 'WQxcS8ofW57dGq', "WPOMku5o", "eSoVdSkU", 'WPuUW6XDoq', "WOPSW74hWOK", "W5rhfbyF", 'g0Lrwq', 'W4blFmkYWR8', "FSoPwGVcGG", "DYNVVjlVV7NVV6C", "W7eAW5dcNMu", "WQeidKDn", "mNf4WQ7cUW", "W5RdUCoBrmoX", "W6evWOSRWO8", "EIXwrSoE", "WPBcQ8kUk14", "WQhdG1W", "W6JdJ8kG", "W4T1p1SU", "W47cSsn4W78", "W41qlui5", "W753z8kEWQ4", "W7LAW7xdR10", "g8kfFbJcRG", 'W6NdNSozxmom', "zd7dM8osW7y", "bJxdL8kMCa", "WRNcV8kCeMW", "W7NcSbi", "vZCmbSo2", 'asddL8oKpG', 'gSovBrNdVa', "W5JdHmoY", "W5RdNCoK", 'W51RvmkYWOm', 'AreFWOad', "d8kbBq", "aIBcP8o+nW", "W5jAW5ldSLC", "WR3cGmoP", 'WQhcVCkxW7ZdIq', 'jSkhtJBcVG', "W5ddN8kvW53dHq", "W4pcMCk0bhm", "WOhcV8oAWRKS", "pCkUW5OFWRu", "W7TrE8kqWRq", "hJ/cNSoP", "WQxcP8oeW4ldPG", "cSkuWObr", "sSkyW4THnW", "WRJdMvCQpq", 'W6T6W7zmlG', "d8kmW4XInG", "fCkfFHlcUG", 'W5OucWHz', "sSkyW41Sja", 'WOFcLmkqifO', "FCoKwrRcTa", 'W6JcLItcKCo7', "qmoQW7WxW6G", "WQyAmuv/", "WRtcJ8opW57cKW", "WOddJZDiW50", "W54lW7i", "tmopW40sW5O", 'xCkoW45HiG', 'W7xcHSoyW4xdHa', 'W5iueCkLWR8', "WOmtW7SZWP0", "WRzdW6S6", 'emkSFSk0', "aSo7iSkKWPG", 'iSoVu8oXW7a', 'WOJcUmovBmod', 'WOFdMJjkW50', "WQxcGCoUW4VdGG", "vmoBW5OpW54", "44glB8kS4PAZxq", "W7xdMmoZ", "qYjxeSoG", "W4ZcSLFcVCo+", "8kA5U/cEM6dXIPIM8ksPN8kP", "srm3oSom", "tSkhW5DSma", 'bJBdG8k/W4O', "WPhcS8oD", 'AZ9hwSki', "W4tcRZ14W7y", 'lmkmW7nWWQG', 'Ac0aWRSt', 'W4HTW4RdK2W', "WQFcT8owW4NdNa", "WQBcR8kUoLa", "W6aeW5dcTwu", 'AJxdHSosW44', "WRCdkuzb", "WQFdLvCLaW", "WQhcQ8kPpa", "W7VdG8oTACow", "ztPkv8of", 'AaKkmSoF', "WOxcISkVe2i", "wCofoeldQ8kgh8k8W6/cJuJcRW", 'WQ4BW4aMWRm', "W6xcHXlcRCkH", "WQBcPSk7kW", "rW0IWP8a", "W5uqa8kPWRy", "WOjjWQ4", "lSkvWO7dUwq", "W6jnWONdTa", "W6ubcmkyWOi", "FIHCrG", "W47dPNZdVG8", 'iCorfmk3WPC', "rCopDs3cRW", 'W57cImkhlrC', 'lmoQDmoMW4K', 'WOxdHMddTG', 'WQddKvO1Da', "xaW0j8oD", "WPZcQCojW7RcIG", "WR8FW5WMWQS", "W5OucX9u", 'vdhcMCkNpG', "W6ChnH11", "pahcJ8onpG", "WR3cPcVdMSkJ", "DmoBW5WpW5i", "sCoFW4apW5i", "WQhcOmoEW4C", "D8oJW6etW4G", "W6/XJlIlF2pdGa", "WRW3WPKLpG", "W4iEWRO5WPS", 'WO3cPSkd', "W6/cRmoeWPpcKW", "W6j2lWWo", "WOZcN8o+r8oK", 'WPBdKd5eW4G', "W6tdQCkeW5hdHW", 'WOuclfap', "WPlcISklkNG", "W5/dHgFdVa", "zs0AhSo9", 'W5RcItNcQ8oe', 'vreI', 'WO5AWQm+Bq', "jCk7rXdcQG", "FZRdLSovW7W", "W551iJic", "W41IwCkuWRW", 'WRRdQaVdSmk5', "WRFcT8kcWPuu", 'W47cKSkkmvy', "WRxcNxSUoG", "WPOBW4u+W7i", 'W7mXbSkjWO4', "jCkEwmkDWRq", "W79xW6tdTXW", 'W47dPCoZWOZdJa', "srldJmkzW6W", "aslcKCoGfG", "aSkBqspcRW", "W7vkWOK", "WQnIW4eLka", "WOtdIJXDW4W", "W5KpWQK0WPa", "WQCvW4uK", "WROppa", "BsHqzSoE", "WO7dHCk5fwC", "WPdcSCkBWPK3", 'cImLWOGc', "W4xdKwVdTvu", "W47cLNNdSaW", "W7rAfYGe", "W4rdgsai", "qt/dPmoqW6a", "W7NdOSkaW5BdUq", "WPtcHmkUhM4", 'W4VdJmoKuCo5', "4Pwn4PwC4Pwi4PEn4PAL", "WP1HoZ45", "W4ldLutdIaO", "WOK7WQXlAG", "W7/cKcjUW48", "WOfEWRK8FG", "B38CbSko", "ymkaW7TJea", 'bCkOW5nAWPy', 'W7TpWQ3dGeu', '4PsE4Pse4PwT4Ps64Ps7', "W6RcRmk7nLS", 'W6JcVaxcISo/', "WPtcUSkvWP4G", 'WRuRfu5L', 'W5ZcICo1sSoS', "jdxdLxW0", "oxGxbCoAWO3cPMBcUSkT", "W5a3hmktWRW", 'W5RdMYPhW4y', "aCkEW45PiG", "D3baWQJcQW", "4BE6WP/HTyJkTEg2RG", 'WORcMCkugMu', "kmoeDSoaW4q", "WRuqW74DWRK", "BJBdHSoOW40", 'WPu/W6DrpG', 'WODNka', "f3aBWRZcOa", "W4VdSmoLyCoD", "WPNcMSohW7VcUa", "WRtcOquomW", 'WPldHCkUfgS', "WQtdHMafoq", "mCkQlSogvG", 'W5GgeCoQ', "WPdcSCklWO8M", "WRFcRCoeWPG", "W6rmrmkHWO8", "pgzm", 'ESoRFCoMWOe', 'W5GqhGHf', "AZZdRSk+W5m", 'rqW5WOCm', "WQdcOCosW5G", "aJ7cMmoJmG", "W57cICoJtCo9", "WOpdHCk4gcy", 'W6ZcTrlcKa', 'W4i9WRWLWQy', 'WQJcMSkncNK', 'W77cSHVcMSoZ', 'gCk7W5rwWPy', "W5LTifWK", "W5S6WPOPWRW", "W4RdGmo4s8k3", "WQdcOCkYexi", "h8kayWpcUq", "W7eeW7BcPgy", "b8kzAvJcVG", "WRlcOmoyW5/dMa", "nmoDC8oXW5u", "W7i8mc15", 'hSkUW4bl', "kSUn4BsJqEg2RW", "hmkFfSkmEW", "gZ7cKSoJgW", 'W4WCeW5F', "W4tcRhbTW7a", 'WRddPayppq', "W4ZdMCk9", 'WQldRa0', "W7JdUSohuSoA", "WPdcVCoEsmow", 'W41oW7TmiG', "WR0omLzF", "xCoDW4SpW6S", "WRZdN8kkW4ddGq", "WOuxhGjD", 'WQRcVmkJ', 'W47cKd3cUCoE', "pSomFSoHW4q", "W7hdVSkkW4FdGW", "WOmVbgb7", "W54hha", '4BAE4Bs+4BwRkEg1Rq', "W4RdM2S", "zcjqBCow", "fCoDcCk7WPm", 'W4/cI8kugW0', "WR3cQmoAW6BcMW", 'W5lcJWHXW4a', 'WO3dSb1pW6O', "W5LBfGqE", "W6ldO8ofW5pcKW", 'xXGOWOOD', "ahdcLSoJpa", 'W73cIqdcICox', "WQFcVCocW5RcIa", 'vSoFW54xW4i', "WQiBW4GlWRW", "eCo8pSkIWP4", "WP/cSCoyx8ot", "p8kuW7LVWQS", "irFdIx4n", "W6rbW5bvlq", "dCoRe8k+WQO", "WP1EWRyPyW", "vGW8", "vmold8kOWOG", 'W6a3WO8PWQ0', 'W7RdQCkCW4hcNG', "WQRdLW0QcW", 'W4uBda4F', 'wYddHCkUW7m', "WPJdHCk7xxy", "W7XOuSkAWPa", "yI86j8oQ", "imkIW6XWWPe", 'mW7dPuOq', "qsBdN8k/W4W", "W5fJw8kuWOS", 'WQPHW44CWRG', 'qSoht8kRja', "WOFcP8kjWPSK", "dSo1W54EW5u", "WRRcRmk5WRi3", 'WPxdNL0Ziq', "WR7cRHpdOSo2", 'rColCJC', 'W6PtW7HulG', 'WR8kW6SHWRq', "nWvnw8kx", 'oZVcSSoPaG', "W60QW4uPWQy", 'WPBdNIDmW44', "d8kmuWpcUq", 'e8k5E8k0', 'W4BcPZ5TW7e', 'WOldNSo2tmo8', 'W5/cKtXBW5i', "WRVcTrG", "fWtdSfGx", "WPBcHSkU", "W7zCah0F", 'W4pdVmkbW5pdHW', "WPpdUSo4v8oQ", "g8o9dSk7WOa", 'gSkqlbBcUa', "W67dLSkNW6ddHa", "WQSfW4BcPxC", 'WRrOW50LlW', "W5KMw8k6WPi", 'WPXoWRGVBW', "WOnVW79qlW", "BIHxuq", 'dCo+eCkZWPm', '44kGvEkxT+kxO+kwUq', "f8kWxSkYWOK", "WRhdPWZdPSkL", "W4jZhqWi", "WPpcGmk2ghi", "c8kKWRpdGwa", "ESkjomoBW5i", "W7HAW7hdS0W", "WPZcQCoEW6dcIG", "W5JcLtLTW7a", "WPpWTyMgbComia", "WQNcGmknF8o3", "W5bJrSk2", "W4KDhH8", "WPFcT8ou", "iXxdLG", 'FxVcG8kaWRm', "BcddLhKs", "FdC4oCo/", 'W6WMW79DjW', "WO47W79ioq", "W6RdI8o4WQ7dRa", 'jSkSBSk+WO0', "kCozFSo7W5u", "bdhcG8oZna", "WR5/W4O", "WO3dPh4ykG", "W7xcKcdcK8ox", 'WPhcSCkuWP4o', "ic8+WOqC", 'WQ1eW6m7WRm', "drtcVCo1mW", "W4KXWQi1WPK", 'WQhdScP/W6a', "ph0uaSkh", 'WQZcVCocWORdNW', "caddK8kRW5m", "WOhcUSkOmMu", "nHxcGSoYhW", "tCkkBZBdPG", "W7VXJjM8WRpcVWu", "WQlcLSk/xq", 'W61AWOydWQe', 'W5GgrCkPWQS', 'pSkSW4XoWO8', 'kCkoW7rZW5K', "wYtdNCkV", "WO7cRCoAWP4M", "WOvVWQzHW5K", "bHldJMio", "W4rNr8kHWO8", "r8oAFJFdPG", "W4jecX4m", "E8kdgmky", "W7NcMmkazry", "WQugW5jVma", "wa86pCot", "pSkhmSobW44", 'W7/dJSoJWQ4', "rGJdVSkiW7S", "kGddIgWj", 'WOmSW6ayka', 'WRpdHwmhfa', "wSopEJRcSG", "W6ikWQWwWOO", "mgzb", "WQvCW6JdP1O", "jHxcVmoDfW", "ttBdMmkRW5K", "WRtcM8kZWRKg", "WP7cICk/uMi", "qCoDW74RW5m", "WRhcQ8kIkW", "gKj6C8oX", "W6hdOCoUD8oj", "WPxdOGL2W60", "W5VcNcxcUG", "uSootsRcHq", "gCkGyW", "W4dcUmkdjfG", "W6nHW6K", "WQquWOWIWRC", 'Ft7dG8ofW58', 'W5xdNCosr8oi', "fCofu8okW7u", "y8osubRcKq", "WRFcLSo0cM4", 'WRhcRmon', "W4euf8kLWRy", "WRxcUSkzfKq", 'w8olW5XOyW', "W6awW5FcVw0", "WR3dKZHpW60", "W5NcPYb1W7K", "WQBcRHhdT8k/", "eZRcHSojnW", 'WOVcLI7cSq', 'WRXOW4b2ka', "W5FdVCoeWPddKW", "j2jbWR/cRq", "W5vIuCkNWOm", "WOlcO8oFW6hcKG", 'sSomFwdcPq', "W6OcW5hdNGG", "WQKzW4Dxkq", "xqyVn8oD", "WRNdPt4yhq", "WOBcGCo8W7xcQa", "W6pdTqegoW", "W71LW7Dgcq", "WRZdN0WZ", "W6OzW4BcSeG", "W7tdHmoLWQ/dQW", "WRakWQD+W5m", "4OAH77Usv8ouW4zI", "xmkoW5bPdG", "W4RcRJL4W6S", "W5WAWRCOWPS", 'aspdG08n', "W6BdVmkzWQBdNfxcImoXWPLwWO0U", "WRilW6HCka", 'W4eMpmkHWRi', "W4qgaa", "W5nshf8y", 'rSokW5qJW64', "EcHfuCod", "ngPfWQRcPG", "wteHWQGX", '4PQGCmoDW4iJ', "W4yNW65klW", 'W7ysW43cSgC', 'W7xdVCovumow', "WOddJdy", 'sHnZoSky', 'WPddGw/dUbS', "W6zsW4BdRhq", "yCkzW5H3bW", "a8kBWP7dKx4", "WPDeW6C9WPu", "WOjvWQm6Aq", "WOavW5jomG", 'xrvizCoZ', "WOtcHmkQdwm", "W75lW7hdRfi", "W61xaw0v", "mGddNN8", "W4SpWQG8WO4", 'W4eqbmkYWRe', 'WOxdNh3dVHe', '8kczIVcEIQdXGOMTW7pXIiUh', "W5tdImo+sW", "WO9pW7uSWPG", "EmoFDJxcGa", "hmkjd8kmAq", "W7/dMs7dSHC", "W77cGHpdSCk5", "WQevW58VWRy", "ffDGWRZcGa", "BIjtxmoB", "W7dcQqpcJSoL", "W4aSWOi7WQO", "W74AxW9u", "W5JdHw/dTHO", 'yHLVDSoA', "bJxcLSoJfW", 'W6BdRCkrW4BdLG', "4PA+4PsX4PAW4PwH4PEx", "WOBdMJ1nW4W", "BINdLG", "8kA6IFcEMitdTG", "h8oRW5bEWPq", "WQnnW6m", 'q8opyG', 'l8onlSkSWO4', 'W7XHW5HjmG', "AmkyWPxdOMa", "WPaNawO", "W6xcRmk1kXC", "gmk1WORdHgW", "WO8HWQTzAG", "W6jCDrmF", "W7tdJmo5uCoX", "gSkqFWm", "tColpW", 'W4BcKwmJW6C', "yCkNW7baeW", "p8kGstlcKG", "DGW4mSom", 'W7FdUCkbW5VdNa', "xX4+WOOW", "z0/cRae", 'rmk7y1FcJG', "WQldSWSdFG", "W5X+WQJdLfK", 'rwddH8k3', 'W4P5na4V', "hSkuEapcUq", "AZBdI8opWPm", "WP/cS8ozsmov", "n8oiyG", "wGK4WP8m", "W6NcQbJcISoZ", 'W4Cqer9y', "WRDKW59GjW", 'WRxdPWpdRmkI', "lSkmsmkvWPa", "W7VcN8ocW6hcMq", 'WP9bW5DCkG', 'WPrVWQOzya', "tSodDZZcQa", "W67dG8oNWR8", "W7HUW7zgka", 'WQTrW6RdTXW', "ixtdKCoeW6O", 'WQJcGmkwlNm', "WPtdJhniW40", "WOTsWRS+za", "z21qwSoE", "W5WJWOmxWPS", "xmkFWPq", "W4RdMCo7tmoS", "W5JcLMhdPHe", "8lAQNfHvmSkH", "WRBdSG0", "W7ldJ8oRWR7dOa", "6P+H4BEdYk3cS+g3QW", "tcddMmkP", "W6NcHmogW6NcVHJcSq", "WQpcVSouWRpdIG", "W7PncW", "WO/cSCkiWPSV", "WOqggH9b", "xtxcI8kNW4S", 'rCo5lCkKWPG', 'W5RcR8kGihy', "f8kmWP5lWOS", "W4ZcPYrQW70", "W6myW4ZcOgC", "qCoeoZBcQa", "WPlcLSkPhge", 'qCoiWOrbWPS', 'WPhcM8kUWQ8f', "vryPC8ol", 'W7eMle1e', "l8kKxbxcRG", 'cmolDYVcOW', "k8kOWPxdUgG", 'W6tcKmkb', "W7tcJCkb", "WR8nnG", 'W4tdHwVcSrG', "8lAQNLHvlSk8", "W4JcRt5TW7K", 'gmoZqmk4WP8', 'WO4PgSkIWOC', "bYtcLSo1jq", '8kw3VSkyFW', "gSkLW5LsWOC", "W6OfW5O", "W5NdK2/dTq0", "WPzfWQymWPW", 'W4SVWQW7WR0', 'WO7dSSkmdmky', "hCoMhmkU", "W6/dSmozWO/dTa", "W5jVwCkWWOG", "WOtcPSkvWPDJ", "tG0/WOG", 'tmkFWOqNsq', 'z8o/W6i3WOa', "W7hdJ8oZ", "kbldSe41", 'W4SbdaPb', "u8kDe8kmDq", "WPXFW7jkiq", 'wXmRp8or', "B0TEWRhcNqK1", "8yUlG2ujASoA", 'Fd7dJmofW5q', "s8olBZZcOq", 'gmkUW5LCWPy', 'W5FcRJ3cSCod', 'aSkQW4XmWQm', "W6CEWQGUWP8", "W6VcRCkOoLy", 'Be/dVCkpW6W', 'WRRdV8o5WRpdQW', "W6xdVmkjW5VdHW", "DtCPWPGK", "W7fSW50LjG", "WRVdHbKGBG", "W6JcISoSWQJdRa", "W6HjaMac", "W6FcV8kMe20", 'rSkyWP5Kma', 'W65kc3S', 'W6/cRCkxmN4', "W5/cPYHT", 'wtddHmk+W5S', "WQRcV8kdkum", "W6RcUaFcKSoV", "W5ZdMSoKrmo/", 'WRddPaypoW', "sqe8WOOh", "wIBdSCkdW7i", "W6mwW7SZWPe", 'qmolW58TnW', "W6RcHaxcUSot", "BIrwv8ou", "WQnOW55QpW", 'WQpcT8kzWP8Z', "W5ZdImoKqmk4", "o8k+W4BdV2e", "W7H8dhSx", "W6GkW7i3WPW", 'fSkpdSonFq', 'E8kUW7i2nW', "W57dK2VdVZO", "W7S/WOS7WO0", "WRCYW4yGWOO", 'sthdMmklW44', "W5ZcOCoixSob", 'WPPMW6qwWPm', 'Bd7dJ8oeW7C', "W7hcMCoEW7RcHq", "W7JcN8otWOFdVW", "W7X+B8kSWQe", "W4WjWRqWW54", "AsXqv8oq", "W63dSXSAkW", "WONcOCoi", 'WPzWW6aZWQ0', "wYDgA8o9", "f8kOECkYWPO", "WPhcPmkwWPm3", "WQuFW44SWOG", 'd8k5W4SFWOS', 'WR8FW40PWQy', 'W7xdOSkiW5ddMW', 'WR8gpano', 'W5mxhW0e', "bCkyyYlcLa", "W6C0l8kjWOO", "sYRdHCk+W58", "EIJdH8ot", 'WQBcOCowW43dJq', "lmkTW6PBWPi", "WORcS8oovmks", "jXhdLwOn", "FEkCHHxcJmk6", "wezSWRSf", "W4Wzeard", "n8oaFmoNW5u", 'W5qrdmk0', "WR7cUmkdWR3dHq", "W7XlaxWg", "W513iL45", 'amkze8oivW', 'WOmHW6PAjG', "WQxcOSkFW7VdNq", 'W5yqeCkKWR0', "WQxcSCkoW5O3", "W5vswf5k", "WRhdRHPlpW", 'xCkoW59UnW', "WQddMfXHoG", "WQ0kW7u+WO8", 'g0yyWQ4L', "mCkWhmooFW", "WQldRqeklq", "8jAPQVcYUBNWRAU78lQ6M/cyQOC", 'W7jvcYze', "dCkuEblcUW", '8yUkPmktlXbw', 'd8kzzrBcRW', 'W53dJ3VdOcy', "v8kAW4emW5u", "W5bJu8k0WPm", "W5xcN3LGW5O", "W60wW5dcM3u", "hmkqFbVcVq", "WRJdPe8MaG", "W6a7pmkkWRm", "WR3cQComW6xcJG", "W5/dVd9gW5O", '8kA6IVcEM6xXIPIP8ksPNFc8MzK', '8loiQpc4QzhWU5I38lABPpc+QQq', "tXCVpmow", "kmkpW7b+WPO", "WR/dVt9/W4m", "WRVdKv0", "dmkJx8kaWPy", 'W5frifKs', 'f8kzgCkmBG', "ge0pW7JdPG", "W4bffWOB", "W4tcGaDsW6W", "WOxcL8kJxcC", "tvjMW4S", "WP5qWRiIEq", "tXGKWO4e", "WRupnKa", "W6LXW7v6aW", 'WRmtW4FdPMC', 'ySotW4iEW6G', 'WPddTmoBW5TP', "acrqv8oA", "WOnfW48OWPO", 'xtxcGq', "d8oLWPyrWR0", "j8kSWOldIMa", 'W6ZcGbW', "W7HpW6NdQKG", "WOirW6KKWOe", "W7HygMWr", "WRddQu/cRq", "W4zJrCk5WP8", "W7nwgMzC", "WQxcSG7dT8kZ", 'WRpcRWSemW', "W6fcuSkGWRy", "WQRcOmk/o30", 'WQNcMCkXWQSq', "W6rnW7W", "WPJcT8oEtG", 'W6uNofek', "WOC7W7HzoG", "WRFdVu0Vjq", 'm2HTWO7cGq', "WQNcVmoeW6hcIG", "WOBcVCkjWPSZ", "gSkqDapdSW", "W7RdMmkVW7pdIq", "d8k4W4TEWOu", 'tSkgW5S', "tXa+", "WRJdLv4ZlW", "WQqAiujB", "WRVcHqG", "jSkjbmouyW", "WPXOW5DSka", "WRJcQmknW5/cGG", "WQpdRmoaW7BcMa", 'W5FdHCoWnhu', "W5Oqha", "swxdPSkLW5O", "WRlcRG3dPSk4", 'zapdO8ooW5G', "WPBdLZjD", 'jSkVmmozua', "WOhcU8kuWP4", "FGSTc8ou", "W49BWRy4W54", 'xSoBdSkZWOK', "WQpcU8otW4/dHW", "dmofFCowW4C", "c8kMW50", "gCkvgCoOFW", "WO9FW4CsWPe", "WR9kFWm", "WQtdGbeOBG", "W4CMwSkIWOG", "W75HW61wlG", 'WPS4lujm', "W6tcQCkieum", 'WOzEWQ4', 'W5aBaSkLW7G', 'W6XdW6i', "bhjbWR3cRW", "WOhcOmoiW7lcMa", "WOKyW6aTWQG", "dSoVcCkUWOi", "WPuQW6vCbW", "o8kOWOJdR0m", "WP9EWRy4FG", "W6vBWQVcRri", "WPlcTSkda8kC", "W78xWPONWOC", "bCkBrmksWRa", "W7eTWPmLAq", "W5lcUCoetSoz", "xHSzWPSn", 'FYddICoQW6K', 'WQveW5Xtla', "W74oWOimWQ0", "zsnbvSo9", 'W55BWPSPWP8', 'WQVdObWyhW', "sthdJG", "WOxcQCkkcwW", "lCoTWOhdUwe", 'j8k/WP8', 'iGZdG8kmW5S', 'W5zcfWSo', "iSkoW6PWWQK", "WRhcH8k0kv4", 'BsT+WO4Z', "qCoeFhNcRa", "W7vPFmkIWOu", 'pCoTWOVdVN0', 'lGtdKNG8', 'rCoSFb3cSa', "sSkPW5DlW4i", "WO/cI8ogA8oD", "8ykiLNmdW6Wh", "W4DGqmk5WOO", '4PE44Pwz4PsQ4PAT44oP', "pCovFmoZW4W", "W492f18/", "WR/dRWKgoW", "WR4FW4iUWRC", "o8oeDW", "YzZiP8kfW6tcKa", "WQPnWPexwq", "4PsV4Psz4Ps34Ps34PAi", "WP3dVJbRW68", "WQKtWOeDWRm", '4PAG4PEn4PsJ4Pwc4Ps2', "WQNcHmk6W5ddGW", "b8kzbCoy", "W7CuW6ZcHMG", "WRilmuzi", "lmoRhmk+W4C", "BW5gF8op", "uwxcISoRWP4", "bSkKW58", "W69wW7FdPL8", "W7RdLfWSiq", 'WPyhxq', "oCkWAGFcRa", "eYlcMmoYiq", "jwzuWQJcVa", "BWjZzSoX", 'WRxcO8oAW73cHW', "WPNdSxGuna", "WRFdKu0Kkq", "eCoWymoyW5e", "W5TGjKXc", "wXCOmSoi", "44kHW6lIL5JILPhILja", "W6xdR8oW", "W7VdI8oRW67cSq", "WQqkW4XXba", "WOZcPmkx", "W63cRrpcN8oI", "iSk3WRBdVLW", "WQpcRCoEW7VdIW", 'WPFcHCk6', "W7NdNCojzq", "dcdcNSo1ma", 'WRZdLvGLkW', "WPlcQ8k4F2a", "c8kIWPBdSI4", "xG4YpCkY", "WPVdPLOnnG", "hmoRd8oGW4C", "aSo5DcVcTa", "W6eGW7GcjG", "W6qAW4y", "CdaaWOyk", 'l8k/WONdVN4', "W4pdVSoWW7a", "xSkSDCk2WPa", "WRxcVmomW6VcJa", "WPBcSCkcWO4", "W5vsgrWF", "wqS6jW", 'fCkKAa', 'WRNcTSoaW5/dMa', 'zCkCW79omG', "cmodDxNcSG", "W5SoWRqPWPS", "W79hW4FdSKS", 'WPFcP8kF', "WP5AWRa+kG", "W5CzfHOF", 'W4JcJCkvWO9J', 'WQj9W59Spq', 'nCk6f8oAAW', "W5DNqCk2WO4", 'WQqzife', "WOJcH8odymou", "WRpcI8oLW67dUa", "tJLuCCot", "W77cMmkkivi", "pmoaFSo3W48", "W6JcISojWRldOa", "d8odkmkZWP8", 'kGhdKx4n', "hmkGq8kIWRa", "WR0iW4mNWR0", "WPyet0LsW77cUCkMBdTsFW0", "WQrdW6O6WPC", "gCo5qmoCW4a", "jNzAWR/cRq", "W7PLW70cAG", "W5lcTcpcSCoL", "FYNdJCohW7a", "mbBdJK8w", 'WRddLvqUoG', 'W5BdImoZzmo2', "WQGxxGmW", 'W4Xsaq', "s8kaW6zicG", 'wSkJFSk4WPm', "zcHw", 'hdhcG8o0ea', "wmozixBdQq", 'W4zJfCo0W4C', "W6pcRJT/W5W", "xSkmF8kLWPi", '8kc5N13cJSkpyq', "W7fxW4lcSg8", "WRdcOrSopq", "m2PgWQRcQG", "ra0+W4Tt", "WQCSW6HDoG", "rrTOxCou", 'WOOcgHLu', "WPDkW4bFpq", 'bmk5jCkgWOG', 'amksqrlcRW', "v8okW4isW48", "WRnFW6KRWPW", "uGiEWRWc", "W5ldMmoeWOpdHa", "ysHD", 'WRFdN10K', 'WR1OW5r3ka', "W7JcJCoejLG", 'WRJdRJDJW4u', "W6jjW6KXWO0", "WRBcL8oWW6xdJG", "WPpdLJ9mW4C", 'W4ixdX4c', "WPFdNdHIW6G", 'W6NdMCoJWRxdQW', 'WPJcGJJcO0FcJdrxW6LkBtK', 'tmkkW4POja', 'WQhdKhnoW4W', "WP7dMIO", "tXC/pmop", 'W5GqdWrd', "WRpdVuVcOW", 'W7HgW7BdT1K', "W5yqeCkJWRC", 'fqRdLhKe', 'WQBcOSoiW6hdIW', 'WOjOW4DXia', 'WQhdSSowW47dHq', "WO7cT8omtSog", "cCkIW4HEWOW", "W7JcQ8kEd30", 'yJRdI8op', 'W7tdPuOOia', "gmkUWPi", "W7fkB2PC", "rSk1pSkRW4W", 'W44CdbTD', "bKG/WOOF", "p0LTWPVcUq", "AZOi", "8jg7INT5W73cJG", "c8o+xCk1WPC", "atRdS0uW", "qIRdGSkK", "FJ9rvW", "pmoTWOtdRI4", "x8kkW4P5jG", "v8opW40yW54", 'WRxdUxaypG', "fmkCFW3cUW", "8lkARXxdV8k2W4a", "r8kat8oqlW", 'ASkziG', "FaldO8kdW5i", "WRdcOmkXF1e", "WRdcOCoi", "W5VdJZSgW48", "d8krAaxcUq", 'W5iAcmkTWRK', "WOZcOCkJWP4v", 'zI3dG8ocW6a', "W6JdNSksWO43", "WPZcJmk5fIy", 'W5zChxOx', "edaZjSom", 'WQtcTq7dT8k5', 'rrO1', "zYGk8joXKq", "WOdcNqFdR8kc", 'W5JdKhVdVrm', "WQFcQ8kOlbC", 'W6OCW7uOWO0', "fJ/cK8o+", "W7PNW67dT1S", 'wSkFW4PIlq', "aa5fxSoB", "WRXSW5PR", 'WRm/W69zpG', "WRZcRCoeW70", "WQxcOSk8WRyq", "oZZcTSoFbq", "FaSUWPmK", "b8kufmoFea", "WRjdW6G4", "zCo3W70IW5i", "WPm8W64", "W6hdVvBdN8k2", "WQnoW6i", "WOxcQcb+", "Yk3HTBuwW6djGq", 'W7/dImooWQ3dRq', "qahdPColW68", 'WRhdPaKikG', '8lAQNLHvjCkR', 'WRBcS8odW4/dJW', "WQNdRGef", 'W4zPr8o1WQC', "8lU4QCkQ8yU4H/crQBRXH5Qt", "W7fQW4fQpa", "W6amWPOEWO8", 'jmkVW75oWPS', 'tmoBW5OiW7O', "wb8gWPim", "W6zNxCkCWQC", "WOpdKtXnW4O", 'DvdcLtWqW71mEmoUWO0', "W6yEW5pcTwW", 'WRFdMH1DW58', "WQJjJUg2RCMz4BA5", "WRhcT8oeW4K", 'W4ldMc7dUrO', "W6RcUbBcNCoI", "tIZdH8kVW5a", "kSoizSoMW4q", "eSoHhSk7WPm", "waFdHmkeW7i", "aSkjeSoyFW", "bmkPW55MWPC", "4PEI4Pwd4PsW4PA34PwQ", "WQddKXadeq", "WRhdPbGela", "WPiMW6rw", "zYawWQ0X", 'omogDSoR', 'F8omAtxcSq', 'W43dGCoYsW', "W5XYqCkLWPu", 'WQ5pWQCkAa', 'aCkUW4e', "lCkfDHtcKa", "lWVcHN8s", 'ybtdK8kaW5e', "W64qW6hdQK8", "W6VcLmkiifK", "W4RcSIb8W7K", "W6fOvmk3WOO", 'emoVemk/', 'WRJcHmkIc34', "W75TW7FdShy", "wd7dGmkbW44", 'W5PLumk4WOm', "xaO3nSow", 'bXxdSwaV', "W5XpkeuL", 'WO3cOCo4W77dRq', "W4Hfaq", "oMzBWR/cOq", "W7yeW7ZcUwC", 'W7/cMmkfjKm', "WOBdMJ1nW6q", "tSolW6T+jG", "WO/dOJKflW", "W59+WRKjECoeWQfEcXLXWQy", "tSkxyWm", 'W7yFlmkZWP8', "sHewkSo1", "W57dLw3dTaW", "z8oBW540W5y", "x8oCbmodBW", "omkSWPtdV2C", "WQKrW78cWQi", 'W7zdCSkCWQG', "WQ4sW40+", 'xCozFG', 'WRFcSXxdOSkX', "W5KEWRu5WRm", "W7r1g8kIWO4", 'xSkEW5f5jG', "WPiQW7nm", 'W4PJW5TjaW', "W7hcGCoEWRNdIW", "8j2YGo+4QXlcNCkYWOa", "W5S5mebm", "bJNcGCoMmG", "W5NdK2/dSGS", 'W6jjW6KYWPq', 'WOxdKYOjW50', "W5JdN8oTW7dcVW", 'qaeOWQ8m', "erxcLCogiG", 'W5nderem', "b0HDWQxcSa", 'WRNcVSokrCou', 'jWNdIG', "s0yHWO5g", "W6j/W7u2WPC", "W7VdVmkyW5NdJq", "WQv5W598ja", "uCoYFJdcRq", "W5VcKZzJW7a", "W5/dRdXBW5S", 'W75CacKq', "W5rsfHSM", 'b8kzgCkmoW', "W5JcSJXWW6W", "W5FdV8kmW5pcNa", "f8kxjCoPuW", "W41VW7DwkG", "W49sfrOz", "WOpcIcJdICkr", "WQFcOG/dP8kB", "WRlcUCoFW6hcJG", "tmkeW5b5iG", "W6HXdv4u", "4BwHYOf/4BwWW7i", 'W5KueCkZWPK', "rCoNvCo6WRW", "e8oVfmk0", "WPeramkTWRC", "WOvAWQmOAW", "W7GSWPWxWOC", "W7JcK8kgkvG", "WR7cImo6e2K", "WOhcNZjnW4q", "W6RdI8o+WQ7dOa", 'vq0+n8oY', "lSobD8o8", 'pmoTWQJdVMm', 'WQrsWOm0BW', "W4BdLCoQtq", "xSoVgCk3WO4", 'WRaBW7W', "raq1W4Si", 'WQBcRSovW5JcJW', 'wSkQW6XMeW', "jSkWxJJcLW", "bSkSBmk0WOK", "WPFcI8oOW4tcJa", "sXG8W4uk", "WRZcHSk5lNG", "WRvFWQ4VEq", 'WRJcVmk1dgW', "WOVdVNbaW5C", "hZxcJG", "WO3cISk4nxq", "WQlcQCozW6FcGG", "WQhcQ8kSnLq", "W4ddO8oUtSos", "WOFcHmkOcw8", "4PsJ4Pwk4PEc4PAl44kt", "W7eaW4NcKuW", "ethcK8o+Cq", "WOnkWP4RsW", 'xmkFW59/nW', "WPlcL8kUba", "cmkKW5Xg", 'zYXu', "e8ocu8ogW7S", "bSkfWPldVuy", "zmojWOamW5m", "p8kpWRddNM0", "W7xcVXlcJa", "WOHhW5zIaq", "c8o/Cmo1W4G", 'W75rW6FdR1m', "8lwPPY7dLG3dMG", 'W5xdRWm', "W7NdG8o6WRVdQW", "W78Za2ay", "WPdcTtfWW7W", 'W5mqWPaZWPC', "rca2WOKk", 'WQxdHvy1kW', "W7pdVSofW5tdGq", "W5VdHgVcVbq", "WRj0W5fGoW", "WOrvnUg1Sbe", "W6hcUJJcSSo5", "aCk6Aa", "qqeVWOai", "FmofoY3cPW", "WPy9W6rmjq", 'adJcTCogea', 'WQJdPbe', 'Ft7dG8ocW60', "W6Hnb2OD", "WQzJW5z3Aq", "WPRcU8obsmoC", 'aCkblbxcSW', "owXcW6VcPW", "k1/dLxG", "W7tdVSoQBW", "oSkSWOtdP2S", "o8ohrmoZW4u", "8yskKSo3Cu8P", 'WRBcQ8k0o1i', 'W5JdK2ddTti', "mrtcOSomgG", "tmkkW7nFdq", "uGO/nSom", 'WRTShway', "WPPSrCkY", 'WR4eieDL', 'W4esn8keWQW', "WPtcT8o/W5NdKG", 'W4/dMSoUWRVdSq', "DmogySo3W48", "WPdcHmooW7FcKq", "W4q8fCo/", 's8oHWRi1', "W6pdKqeiFG", 'WPPftW', 'W67dGWCFDW', "smkoWP5JiG", "Fb3dRCkYW5m", 'h8ktgG', "8kkAGCoxW54+CG", "m8oRdSkPWOy", 'W7BcJqxcKCoM', "uW46nmoD", "W7NdGCoVWQ7dTG", 'W4NcS8kuahK', "WPhdLaTSW6a", "m8k4W6T6WQC", 'W4lcKSkUb1q', "E8oFEdRcOW", "WPXiWOmWAW", "WR4JW4e4WP0", "W5ldONe4WRG", "W7hcRCknW57cJG", "44ksW73IL7/ILBBILj4", "c8o8eq", "4PwL4PAZ4PwF4PEt4PAy", 'WRPAW7Ozzq', 'WOxcO8knW6BcHq', 'WQhcQGpdPSkK', "i8kOWP8", 'jMLeWQtcIq', "WQdcVSod", "xmkkEtZdPG", "vSkAWO9AWPe", "tGyJjW", "mcBdT38K", "adxcJ8oZ", "AgbLqSoE", 'W5FcSCkYgcy', "wGWTWP8m", "WRTjhgyB", "kCkGWOm", "WRr+W4bSjG", "W67dKMpdVs8", "WRlcJHJcJmoK", "WOtdIJjfW4a", 'fbmPpmov', "4Ps44PEP4Pwj4PEp44o1", 'WRhdRHPlhW', 'ntldJ38v', "W67dUKFdGJ4", "W7hcRCojW77cGG", "W6v7W4pdTNq", "DsOyfSkd", 'nXddIx8y', "tsygWPmd", 'W6bAW7W', 'DfKa', "W7DvWOmPWRO", "W79AW73dTW", "tmkaW5DJja", "W6VdM8oyWO/dJq", "W4HCgN0F", "gCkUW5zBWQ8", "eCoJemk7WOK", "WQpcQComW7dcNW", "xmkoW5bPjG", "WOhcTCkuW5OW", 'W6rHuSk4WRm', "ta04WOGb", "WP3dMNnlW4W", "WR8TW5TGoW", 'W4qvWPymWOG', "WRddTqeinq", "mXxcHMGs", 'W7HAW6VdP3e', "WRZcISk2fMC", "WPZdJYKMgW", "sWKQpmo5", "WQpcP8k2oLK", "WQfjW4v2mq", 'W4G9WRK3WPG', "omoueSkWWPi", "WRT/t8kvWQS", "W4Hccf8p", "W7aeW4y", "W43dR8oSWQRdTq", "WQdcOCos", "WRpdRq1rCa", "WQNcQ8k0oem", "4PIwcSkSgSkl", "W6behq5U", 'tdFdJCosW7W', "kSkhWOxdRuy", "W4yqeqXf", "W5VdL3RdPrO", "W4/dU2VdOGW", "WQpdGe0NhG", "w8koW4z5", 'W6ZdICooWRxdRW', 'WOHwWRu+Ea', "W4a0W4xcGea", "WPzlW7Pgoa", "WOxdRsn8W6S", 'mtxcS8oVea', "vqaW", "W7SgjWzA", 'qYddKG', "WQqAzu5A", "W6j+W642WOO", 'W5ayaa', "r8ovW4anW54", "WOmNh3T4", 'omozAmokW7q', "W7VcJJxcH8oz", "W6HVW7qTWPy", 'WRjjW54rWR8', 'CJLTxmor', "WOCIW64", 'c8k0WRxdOgq', "4BsT4BwVYlJdI+QDMq", "W6bKWRCmzq", "WPpcP8oFj8k4", "W5/dGCowvmol", "W6NdJ8oKWR7dOa", "WPVcGmkJdIS", 'CW57pCox', "iCk5WP8", "tmkdW595", "xvLXCW", "w8opDt3cIW", "cdldHmk4W5u", 'jmkOWOJdRhO', "WOHyWRq9BG", "WQxcPmoiWRpcQq", "nMDAWOZcVG", "u8oCxCkmoG", 'W59iy8kVWOi', "WPNdI8o4uCk4", "W6bfW55fgG", "WRBcQ8k0o3O", "lblcS8oojG", 'W47dGmkcW6hdPq', "W6xdPmkqW4BdLW", "BI/dHW", "WRZdKu0YdW", 'EZHlrSos', 'W6TYW6Tnoq', 'W7VcTCosW57dIW', "8lUPH/cMUOJWOlQjWRZJG40", 'WQysW64jWRC', "776V776AWQRdUU++QW", "W7PkW6RdT1K", 'W4zdhq', "WQpcHCkwWOKl", 'WOhdS3ZdOXa', 'WOlcHSk5ghu', 'W4NdH8kGW6S', 'W7/cL8ofW5JdHW', "W7fyW4bSjW", "W5mapqbh", "W7awed1B", "xGyOma", "ffbfWR3cUG", "WO7cU8kD", 'WOPjWRGUEG', "WQjAWQ8TCG", '4Pwv4Psw4PA84Ps14PwD', "zd7dMW", "W7ZdG8oMWR/dQW", "oCoaySoZW48", "C8oFW4XBW6W", 'gmkCAblcSW', 'WPNdImk3Amo9', "FSoLuHRcGW", 'WOb6bCkPW5q', "xSkev/glS6VWN5kX", "W5WBea9s", 'W6SreGjF', 'W7ndeXKV', "WOCJW6jzoq", "W40jWRqOWO4", "4PwF4PEO4Ps+4PEy44oz", "WR7cJSo7W6lcGa", "FM1gv8kx", "vmoOjW", 'WOFcSCkuWRSU', 'W4ytnqfq', "BJpdTCoaW4O", "eCo8ba", "W6xdQCkgW53dNq", "ySkiWPtdUwe", "WQudk0qp", "c8kUemkVWPq", "lCoHd8kOWP4", "W6f5qG", "WQtcOSkZpKq", "W6mpW7S6WPC", "wJJcNSoJna", "WRSkWQD+W5K", "WPtdIYbiW5K", "W690W7W", "gsVdP0y4", 'yCkIW7P6aa', 'WQeTW5fsoq', "gmoRW7PwWO0", 'sXLsD8ot', "jCkjW6PiWOG", "sCohFNNcTq", "WOJcT8ovwq", "WQBdRXW", "WO8IW5dcSsi", "WRxdHeWY", "WOHvWRy5zG", "WP8BWQu+EW", "W7vYgL8m", "W4xcM8kSlwa", "r8oyoZtcQq", "W7XxWOldTsi", "WODoW7jxdq", 'WR/cH8obwSoJ', 'xtBcI8oQWPm', 'W54jWROZWO0', "orhcPmouea", "ESo8yCo7W48", "WRrmW4ikWQ8", "hJ/cNSoPiG", "WOpdHCk7gwS", "pSomyCoX", "fYtcGSo1na", "WQdcRWtdRq", '4OE677QoseeoW7G', "WOmRW6jm", "WPVcNYDbW4W", "qsJdISkTW5S", "pmoAm8kpWRu", "W7VcSHNcISo3", 'W6mpWOmpWPa', "WRvOW4bM", "WOPFW44MWRu", "W6NdJ8oKWR7dIa", "mSoiyCkYW4m", 'W4bTidWi', "W6rEW6e", 'WPhcOCo6k1y', "emkuhmoyna", "WPJcT8oaqSog", "8kM4GdlcUmo4lW", "W4hdMwFdVW", "EIXhwCow", "u8oyW4i9", 'WRWhW4fXia', "W44EWQG+", 'W4ddK3FdOHa', "W7VdHSkQWR/dQW", "W5DPw8kHWOC", "uSowD8kM", "f8kHBmkJ", "W6XbW688WPi", "dSkvBa", 'W6CyW5FdThe', "W5yCc8kNW7G", 'W44BmYnY', "uW08", "WQqxW40TWRC", "WQlcQCodW7FcPG", "W6ujWPi1WPq", "W6HzW6mZWPW", 'W43dGCoiWQpdGW', "gdNcHmoMFa", 'W505cYDA', "omkSBmkHWPG", 'zYKnWR4t', "WOuUW7TmiW", "WQBcHJFdH8ka", "g8ozcmkTWQ0", 'CmoJvb/cJG', "W4qFW7vZW5q", 'WRDbW6G7WPm', "W6dcJmkief0", "WOrLW4KlWRW", "bMVcHmkMW5C", 'WQipk0DI', "WQhcTaq", "WRhcOSk+e3C", "WPJcQGldP8k/", "gCoPy8k4WOK", 'yhVdKCoaW68', "WQVcISojy8o3", "amoPBmkZWPa", "WQ7cSINdGSkW", "W67dN8ksW7NdPG", "dmkLFWdcLq", "W53cKZpdHmoa", "WR3dUGfMW6i", "WQCSW7ObWPG", "WQZdOx8zoW", "W7hcVmobW7lcKG", "WRHHW5ypda", 'WPdcUCkBWO4Q', "lmokC8oGW4u", 'WQlcUCowWOhcHq', 'WPy9W4zbbW', "bCkssHxcJW", "W6HAd2Dw", 'W7NdI8o+WR/dOG', "td1Lq8oD", "WQZcOqusFG", "WPrhW54oWPi", "WQDzW6uTWPa", "oCkqBLFcIW", 'WR/dLua', 'WQOiW4m/WQi', "nqddHwqt", 'W7VcVmohW4C', "W75mW6ddSq", "WQlcUmomW6hcNW", "44cIWORILPpIL5hILy4", "v8oFW4aFW7y", "WQFcKaJdT8k+", "W4anuL8", "W7pdV8kwW5pdLa", "mmobb8klWP4", 'W7tdPZRcKCo0', 'W5VdHCo4rSoZ', 'b8kUW5zlWOS', "WPpcGmkPhG", 'zJLHumoN', "W5/dJ37dTa", "eJNcM8oIpW", "W5pdH8kQWRtdQG", "W6HChh8t", "WRNcRCozW6dcQG", "WRWIew5j", 'p8oAyCoZW4y', "W7yEW4ZcUI0", "dCknr8kLWP8", "W53dJmoKrG", 'WPpcMmoJW4BcUq', 'W7TzdG', "WPVdSIC/gW", 'xcddK8k+', 'WQtcO8k/', "b8k0WQtdKx0", "WRjhW4PTlG", "EqtdGmkFW7K", "WOajxZL0", "W7qzW4BcKMq", "idJcNSo0Cq", "W4NcIcfrW4W", "rsZdHCk/W4O", "FSoUuGRcQq", "WRFcHSo5W57dOa", "WOpcICkFcfa", 'tcddJCkJW5a', "WOThWQyXWPy", "W7VcSCoyW4tdNa", "A21PxCot", 'WOVcISoGcxq', "WQBcT8ofW5ZdJq", "WPWkW7WzWRG", "rmkMyWxcRG", "W6lcJ8kD", "W5ZdMSoKtmo3", "WQjOW51Hba", "W41vlq5b", 'h8oQemkZWOK', 'W6ZdMmo8WOVdGG', 'WQBdP0dcOSo8', '4PA54PAD4Ps84Pwm4PAA', "W7/cMmoezby", "nexcHYPx", "FXRdHmoeW54", 'l8kHWQpdN34', "amkmeCofBG", "W71iW7hdTuK", "WR3dKw0vnW", "W6VcQbtcNCoZ", 'bvhcImoPW7a', "AZLb", "W47dTehdNbm", "W7z3iNGY", 'et3cLSoUpq', "qt3dLSkVW44", 'W53INQNcLbiM', 'W59tgg4S', "rSopBtBcNG", "WPyoW61Ddq", "W5lcS8kXchu", 'W7RcN8kVeh8', "WQBcT8ozW47dPq", "44gDi+kwVEkvMEkvMG", "W4Cueq8r", 'WQjAW5PXiq', "WRNdKvaV", "xmopF3NdPW", 'eSo/x8otW5C', "WRtcV8oEW7lcJa", "vcFcKSo1na", "emkDcCojFq", 'gSksxCoeFW', "rHJdM8oQW54", 'WR59W5zRpq', "wq0IWO8K", '4PYTzCkbWPpdKq', "W7PPW7DfAW", 'W4RdKNFcSr0', "W78Fk05A", "WOxdPxWsgG", "W79ChwO", "W5JcPZ59W70", "W5GEWRO+WOO", "WPNdImo5bCo3", 'W5tdJmo5uCoX', "WQBdHZ0jhq", "W7JcHCoSWQ/dQW", '8l2RRSkLW4roW4K', "WPOokwzi", 'W4ZdH8o7tmo2', "WQvyW6KQWOK", "WRhdPeHkFW", "WQ7cUSorWOlcGW", "W4rEcb4f", "WQLpW78", "W71qaMWy", "WRGjW4K4", "xsTwxSoa", "WRlcVmkZk1i", "WOJcQ8oDsmkp", "oCknF8kdWPe", 'W5jzW7tdM28', 'W4VdJmoJv8oX', 'WRRcISkGWPpdTG', "W7ldQCkwW5e", 'WQXnW5mVWP0', 'n8oiE8o8', "W6iqc8kKW7G", "fmkoeSozAG", 'W6ddPCkgW5FdMG', "W5NcRXvZW4K", 'W4XnW6RdTKW', "W7TWW71dpW", "WQabkMrb", 'eCkzd8kmsG', 'WP01W5S+WQi', "WRNdMvDHoG", "hmkMWQ7dGxO", "WQmgnLPN", "rchdSSkOW6O", 'jqtdKM4A', "WPxcICk7e20", 'WQBcQbpcO8k3', 'W4FdMxK', 'vCopW4epW54', 'WRlcRCodWRpcMa', 'DfpcLdLjWQi3vSoAWQnucL4', "Dq8Ac8oS", "WQpdOCogW7BcKG", "kComFmo2W4q", "xHlcGSoGCq", "amkMlCkJWPu", "WP4ZW6meW6G", "wCksW4T8gG", "W6ydWO3cOMe", "iYnuWQ/cPq", "WRxcKf4Ziq", "WP1xWRjXaa", "W54EWR99W58", "W7ysW43cSe8", 'W7ldHCoVBmoo', "W5RdHSo5uCo9", 'W6iSfSkUWOO', "W49wtMOz", "p8kJga", 'nhPsWQpcRa', "W4a+WPK5WRK", "vmkOlCk6WPG", 'WQddQG0Flq', "WO9UWOiVCa", "AmoTW4ZdGN0", 'cgxcGCkdW40', "tmo6sW/cSW", "WRiyieDC", "BY5bw8oh", 'WP3cOmknc8ks', "zXLZz8o5", 'WP5pWRyPFG', 'mNqramoaWPdcLLtcMmkV', "Bw7dGCkzWQS", "FHvWECoM", 'k8oCFCoMW4q', 'W4ZcKG7cQmoF', 'xaH2yCo+', "ACoIFWRcLq", 'vSoFW48yW48', "WOpdPIfRW4O", 'hmkDWOFdIgu', "WQ0JW693da", "W40IWROKWRC", "W4/cRsD3W7q", "WRekW6GWWO0", "WOldKtzB", "WRBcVSk2nKm", "W5mxgHPl", 'WPBcI8k0eNm', 'W7PIumk4WRm', "fSo5W4qo", "W55jbuah", "tmk+W4Peca", "AJRdLSoeWRK", "W6JdJ8oRWRNdSq", "W53dGmoKvCo0", 'cmkCyblcSG', "WOa+WQKVWPe", "W7HmW6ZdRfi", "W67dG8oNWR/cPq", "W4mqfmk1WR0", "pCkUWOxdRN0", "W53dJmo6sSoS", "WRfQaxSe", "W7PucW", "WR3cQCodW7tcNW", "qYrWxCos", "W7WFW4FdQLm", 'W4HCag1w', "W5iAc8kK", "wJZcKSoMjW", "c8oCd8kPWQ0", "ht3cLSoGna", "jr7dKmotW7y", "W4JdN37dSbe", "pHhdQ24o", "iMfWWRZcIG", "Yy7iGxv9WPy", 'id/dL8o0ma', 'WOZcP8oErq', "W5fhW7ldT0y", 'W4rvfW5d', "WPtcHSo4W6xcUW", "WP4MqCk9WOm", "WRKsW4KK", "WQHkzaip", 'W794W51Njq', "cCk/WOivW6G", 'W6NdMSoMWRpdSq', 'WQrklujz', 'WQJcHuvWmG', "WQtdUWnpW5O", "WRJcVbVcJmoZ", "8jsPGmkEjXRdQW", "W4VdHSoduSo3", "WRqTW5jPoW", "jmkBWORdGu0", "8lw7Nf9bAhq", "cSoRbCkU", 'WQtdQa4s', 'W7bRdwe6', 'AtFdGmkVW7q', "kSoHxCk5WPu", "W57cStu", 'yr9hwSo7', "W5BdH8oJrmo7", 'W6fYW6a', "g8k+W5DlWOC", "m29+WR3cIW", "WQBdUbS", "W71AWQxdPe4", "WOldLdWKaq", "e8oZj8o3", "WQfMW7zqjG", "W6CImsfN", "pCk5WOpcGwy", "W7/dPh3dNJW", "hCkqyHpcUq", '8lwONY7cUZRdHW', "W5VcKdbgW4C", '8jg7INT5W6RcMq', 'BmkkW5jHyW', 'B21fxSof', 'WR3cLmo8W47dOq', "W6CqdbHq", "WRtcVmozW4xdNq", "W6NWV4Q5sWRdVa", "lWVcHMmy", "W6lcHq/cHmox", 'WP1lW7K1BW', "WP5bxmkJWOm", "cCkQW4XAWOu", "WQtcTq7dRSk5", "Cmo6FCoGW5m", 'adNcMSoI', "W41zWRGVkG", "WQ7dOaypza", "WR5RW5PPla", "WPRcGmkpeNu", "WO4UW7H3pq", "WONcImokqSor", "smkoW4P9mq", "W6pdH2hdOZW", 'q8koW4POyW', "W75pWQxdReW", "W64sW5O", "krxdNW", 'qmkbW7jena', "W7u1WO4qWRW", "W57dM8o4umoO", 'ySk+W5bGjq', "WPJcL8kJ", "W4VcICoXv8o3", 'rSosW7C/W78', 'W5PYwCkSW4y', "W5RdOSooW4PZ", "8l+QVmkL8l2QVVc0UyJWORQY", "W5acW5FcKuW", "WRfpW6G7WPO", 'W4dcPYK', "dCkDBqm", 'WQlcH8kVgNq', "s8odAZJcQa", "BIHiv8od", 'ESoDESo3WOe', "neVcHLSr", "W5JcPZ59W5u", "qCojW50AW5W", 'j8kylbNcSW', 'WPqNfmo1WQ8', 'WOvIWPn2la', "xSo6fmk3WOi", "W4SFWQj9WPW", "WQX2WRmmzG", 'WOBcOmo7W5NdJa', "WR/cR8oiW77cJG", 'WPZdMCkwW5FcKW', "WQaFW4i+WRS", "WONcJY8B", "WRDzW6m", "W5RdGCo2uq", "W710WQS", "wq0IWO8m", "W5rsfHSo", "FHq/p8or", "W7NdLYSQda", "WRtcISk3egC", "tSkhAqtcRa", "WO/dMWSYdG", 'W4KqW7S8WPi', "8ykPJmo6v1/dSG", "W43dJmoVuq", "b8kUxmo7W4C", "WPddMZPD", 'W6Tyhh0F', "sqK4WO4o", "WR/dIqnGW64", "sSobDtRcGq", "rmkoW4C", "WPO7WOeDWRC", 'Fr13umot', 'W7i7n8kZWPO', 'WRKFW5q+', "W7VcVapcNCo+", 'W65qo1KC', "WQNcRCk2WOmI", '4BAD4BAY4BAfYzRHTP4', "WRzpW519bG", "k8kepSoKBG", "WRlcRCozW7RcHa", "W7/cRxb6W7a", "WRhdG0OGkq", "wmofpeFdRa", "4PAS4PsO4Ps84PEP4PsP", 'lmkOWPxdQa', "44khW53ILAZIL43ILR8", "WOpcOGpcO8kb", 'W4HfdcWF', "WQvlW6tdPf0", 'WOhcUSosWORdHq', "wctdN8k+W5S", "W45AgrGo", "mrhcVSoLfW", "W5f7aM4r", "iSo/ECogW6C", "hCkfyb7cQa", 'oSoKkCkIWPy', "aCkaFfFcSG", "lCkVW5hdQMG", "W4nscXW", 'ft3cKG', "W4D+WQuPzq", "qSoREapcHa", "jCkSWPy", "WPZcSSon", 'WRlcT8odW5RdMG', "WRdcRSobW7y", "eCkkySkZWPG", "W5yhcSk1WQG", "WOVcPJvQW7S", 'WQ/cNCkznxi', "WR9UW5zOla", "W6fwW6hdH1K", "WQtdTrPqW7O", 'W6/dMCoV', "W70GW4hcHfy", 'W6dcLmkk', "WRJdUCkvW5ddMG", "WOhdMITD", 'jSkQW4y', 'WP0sW4mKWRC', "EYRdV8kyW7e", "W6XOW5xdThS", "WOVdKauGdq", 'W5XLW6Lnoq', "jqBdK3KC", "WOaFW585WRm", "zcNdVSkaW7y", 'W6ldPmkaW5W', "FG4RWRO8", "8lUPIK7WN4U18j+7OSoI", "WQ4BW5GPWRO", "W6DJqCkHWO8", 'WRdcOmodW5m', "W5ZcPSofsmks", "W7RdOmkUW6ldIW", "WOPUWO40Eq", "umoBW4LBWOC", "W6FdUCkkW4BdLG", 'cw/cOCoa', "FIbxEmoq", "yCoQW60xW5W", "8jwBRmklW6ddU3K", "WPqGW75iCa", "W6OFW6JdRfe", "ucKOaCo5", 'WQlcNmk+W6RcTq', "W4Tsb1a8", 'W4/dPmkDhCkc', "rCk1rSoqWQe", "W5OfvZfu", "W4lcRJvjW7e", "WQpcU8oNW6RcJG", "n8oTASoiW5e", "W70wW47cPg4", "sCogFWNcRq", "W4uAj8k1WR4", "W6JcK8krkfi", "WR7cOSoiW7FcOq", "W51FdrGS", "W65mW7BdOLS", "W6vpW6JcO0W", 'tCkaoZ7cTa', "qCoCCaRcPa", "agiyWONcPW", 'W6WFWQ8nWRS', "h8kUkmkPWOi", "WR5AW4m9WRW", 'W7BdHSobWORdVq', "ECo+DbdcVW", "WP4mDSk6WOG", "F8kEW5nHbq", "W6mFc8kzWQW", "W7qcW4ZcOgC", "WRjlW7qRWPa", "WOlcLSk/", "W7GFetjf", "gCoVk8k+WQa", "WOOQW6vFpG", "W48gdajE", "iGRdKwur", "W7aDfSkNWRq", "W5JdK3RdTq8", "g8kgAq", "8y+KPo+5P0vWWRO", "W4uBgG97", "W4VcNI3cImo4", 'kCk0WQJdQMm', "W713W5tdQvO", "W5mxgrSg", "vXyVnG", 'W4VdPmoOWRhdTq', "WOBcUCktWPrJ", "W7jqW7dcO0S", "hmkqBrpcUa", '8yAaQFgiOyNWN7gB8yArHVcuGyW', "umkAW48FW5y", "ySkVW4XzlW", "hSkVWQddUfW", "WRBdRCkbW5/dMG", "W40BW7D7kG", 'WOOwhGur', "W5yzW6ZcLuq", 'WOtcPCkkWQmv', "W47cSdf1", "W4ZcICo/rmoU", 'p2VcKG', "b8kSy8kZWPG", 'W63dHSk3tSoX', "rcNdKSoQW50", "lCkoWOtdHNy", "fCkveCojDa", "W4y7W6jvlW", "W4uqhCk0", "W4TXW5HRoW", "qCkeW4PsiG", "W5ldImokW7/dVG", "sYBdNSk4W58", "WQ/cG8o+W7NdGG", 'b8kSy8kZWRa', 'WQelmvDk', "W7LPhx4/", 'WOxcISkOxuC', "W4NdKKddLb4", "xXSP", "WPjWW7m", "W4BcKCkacNe", "W6StWO3dUIW", "r8oyyG", 'WR3cI8kFWOKo', "WPdcL8k1chy", 'W6KVWOSiWQ8', "WOKopfDC", "W78AlqXj", "wdddMmkI", "WQlcVmobW7RcNW", "W5rdgq0F", "WPRdId1mW5S", 'WPRdMtPfW4W', "WO/cT8odsCo/", "gfvwWOFcSa", 'W4tcScK', "WPrltanA", "pmoxnSkRWOu", "WRSCeCkLWRu", "WRxcSSox", 'WQvcW4TOaG', "W4ngW5/dI0W", 'xJPDyCoY', 'W4VcLdJcSmkS', "xZO+WPGJ", "dCo6fmk3WOi", "v8ooW5WsW5u", "gSovAWxcSW", "Fd7dJmofW7W", "hCk6lCk+WO4", "W4pdN8kPW6BdIG", "WQdcUCocW6FcJG", "qmkxBrK", "gvHP", "WQaFkLDk", "WQxcTCoDW7BdLG", '8y6jP8o6Dw7dHW', "ngjbWQJcOa", "tJpdUmkVW5C", "aSo1sZdcQa", 'WOBcVmoEvmoE', "W7/cLalcU8ov", "WPu6W6LslW", 'EYJdT8orW70', "WPWqW64mWRG", "W6SKW5FcVfG", "W6j1B8kzWOe", "ybBdQSoeW7i", 'W5PHymkLWOi', "WPtcJmkQhgG", "WRXGW5jRlq", "W69rc2C", 'WQfTW6ddSeG', "W5ShWPLhpa", "nCoBAW", "W7ldNmk3W57dOa", "W4ZdMSoYvW", "vmkJtZBcJG", "rZFdKG", 'WP1LW4bZoq', "tZFdHmk/W44", "gmkKW4XKkSoWW7S", "W4umWRu", "WOmnW710ka", "WPNcOCoEtmov", "W4tdHhC", "WPNdMJ1oW50", "WPBcQbxcO8kz", "WRpdObWFoW", "WQTfW5qOWP8", "WP9EWQC3CW", "aspcKG", "W4vyhay", "zCkBW7DBgW", "W692W7WckG", "W6atWPunWPO", "WONcT8oiq8o3", "W4xdMLVdGGu", "W5JdGNZdUbe", "WOaWdrLE", "BSoJDqhcRW", 'W759c28x', "oSkSWOJdR2e", "lCk+WPxdQMK", "WRSMeCkHWQW", "WQBcOrSolq", "qapdJmkYW6y", 'AZFdQCoxW5O', "FSkBW65Ekq", 'W7K9hCkLWQO', "WPe1eCkHWR8", "W5makYn4", 'FXWfWOKU', "WQS2W74DWPe", '4P6YW6ZdO8k2W6a', "bmkOF8kJWPq", "bZxcMCoJna", "WOhcOmkoWPSK", "WOiQW7HB", "W67dJ8o4W7RdSq", "sYRdJ8kV", "W7RdL1W1pq", "qCozB3m", "fCoRba", 'W5tdMmkRW6FdOq', "zqqnWRm9", "CCokW4OAW48", "WOdcHmkZcsy", 'b8k9F8k+WPm', "W7ezifbC", 'WRFcPHhdT8k/', "WQKFW58", 'rSoFW5XwW6m', 'WQpcMmkulvi', "W4jfday", "gG4+C8om", 'WQ7dOg44dq', "WO/cP8opr8ox", "tmopAdO", 'hCkNASo5W5m', "WPLCWRq", "Cpc1NzpdKCoolq", 'W4vKisWX', "tSkFW5D/jG", "o8kEW716WQW", "zaiLWRWA", "WO/cOSkXWQmt", 'W5hcSZtcLSo3', "WOCxwf9l", 'xWi/kSky', 'WRVdGK4Gpa', "W7VcTrBcIG", "WPKvWOWMWRC", "W50bW6xcNe0", "W4JdHgVdTqW", "W73cS1FcMCoK", "W73dQCkC", "tSkAFblcSG", "W7nvD8kcWRW", "h8kSDa", "zmkdW5bhbq", "W7bCfW", 'W6j0W5XagW', "W6hdTgldHXu", "W6BcMmkD", "W4iqc8kKWPu", "tmkiW4T/iG", 'iCkpW4jDWQ4', "W57cGbpdRmkJ", 'mNbgWQRcRW', "uCkksdZcSG", "WOJdSYm7bW", "WQLHWP8QAW", 'WPFcLbhdTCkK', 'W5Saeb9u', "W43dJmoZbCk5", "W6ZdUx3dMaW", "qCo6gmkIWPm", "W6/cJYb9W5W", "sSkyW41RnG", "W6dcNmku", "W7FcRW4", "AttdKmomW7G", "W74HWR0XWQO", 'WQhcNfZdTa4', 'wIddISkPW4O', "WRVdHuTHpq", 'wdFdHmkNW5e', "WRBdMW8epq", 'WP3cPSoeqSoC', "srXSWP8g", "W5/cN+kCHa", "W4tdMhRdSbW", "WOdcNZ5CW5O", "W5ddNmoVWPpdLG", "tYZdJCkZ", 'v8oBW4KEW4G', "WPBdSsLiW70", "l8oIgCkdWOe", 'emkLWPxdRuW', "W490W7bmhW", "WOqUW6Htlq", 'W7xdRCkrW5FdLa', "tCkhW59Jka", "iCkJW4BdO2S", 'WPbCW4j3pq', "WQdcQSo6pu4", "xCkweSofDa", 'BcRdHmo7W7e', "W4zJvmk2WPi", "W7bCf3Oz", "dSkIWPvOWOm", "WQhcQq3dQSk4", "WRxcQGq", "ttZdMa", "FIXhrSoe", "o8oDDW", "WR54W4mLkG", "EcHxrSow", "l8oyqtm", "emkUfCk/WPu", "u8kEbmkmEW", "DYmvW6S", 'E8keWP5+kW', 'WRy9W6jokW', "WRJcGCkQWRia", 'ArKOWPGb', "WQBcL8o/ySoM", 'WOhcKmkIf8oVoSovW4ldRMG', 'W7xdHmkQefm', "W4SygG", "emkidG", 'wIRdMCoQW78', "WQzSW5PXAq", "BI7dHSoiW7y", 'WPxcVSoiFSog', "WPbNW5WhWQ4", "WRJdOCkaWP3cMa", "qmkoW4PnWO0", "W4nCWRiVEG", "WR4kW4aJWQy", "qcdcI8kOW5e", "W5FcPSkYhhq", 'vJedbmov', "W5iueCkJWRa", "WPtdKZ8", "dCkCFbBcSG", "W7LAW6JdReO", "WPaIW4jjdW", "r8kat8oqkq", "dSoinSkSWOq", 'WQBdS0Gnla', "W5WAcmkLWRy", "WRGiW4a", "yc/cIW", "aSoVAsVcQq", "W7uXbSkdWO8", "WQ46WRK", "WOxdNIDDW4W", 'WOyEi3jn', 'gmkzba', 'W48lWRm4WPm', 'W41pvuS', "WPlcTCkOeMa", "r8ozW5SjW5O", "4PAy4PEF4PA24PAG44k8", "W73cUr7cIG", 'cIKOWO8m', "kSoTAmo8W4W", 'xd7dLSovW7a', "sJFdHmoMW7C", "W7/cLmkumv4", "WPHiWRi", "wY/dQCkHW4q", 'WO3cNSowW57dUG', 'WQtcPHxdT8kZ', "WRivW61uhG", "WQ3cOUkES2u", "ESogzCo8W4q", "WQ3cOCk8lNS", "dSoPcSk3WPe", "gSkqDam", "qSk5W71Fbq", "tXS/WOOo", "WRjUW4z3ka", "W5DNqCkWWOe", 'WO8HWQTqlW', "weHTW4Pd", "a8kDcCoyFW", 'W7FdOSkrW63dHG', "W5FdGSk2", "W7esW5VcOa", "d3T7WRNcVW", "BWVdO8kqW6W", "W4Hdwbmc", "WQhcVmkfW5dcKG", "CZLYs8oW", 'umoFW50p', "W5rpW6ZdRvS", 'W6RcKXhcUSo0', "WRlcM8kal3y", "b8kEzmkJWPu", "W4LtvLff", "WOqggH9F", 'h8kaBrNcQa', "W4JcQJfT", "WRddGKmkbW", "m8ogFmkYW4C", "W7uhWOpdVfm", 'AsvfrG', "W5SIeGXC", 'W7WnWRi7WRS', "wa0TWOGD", "D25qWQBcQG", "xa4iWR4/", "W5n0wSkGWPy", "WOD6bCkPW5i", "aSkUnmoPvW", "i8kLW45EWO4", "WQdcVCkPpLa", "zSo/W6KYW7u", "imk5WPldU30", "WQfrWPGyza", "W6L4mJ4U", "WPhcSCkuWP4M", 'W6HlW710hG', "b8owlCkDWP4", "W6fADq", "W7FdQmkb", 'W4LHW41pdW', "qWCI", "W7tcJbfuW50", "qJv+s8oW", "W4jvc8kVWQO", "W4lcGCkjWPmT", "iXBdLwOA", "i2jsW6VdTa", "W7ecdCkPWQS", 'W4VdJmo2rSoS', "W5/cUYb8", "W6NcMmkxjG", "WRtcQSoKBmoi", "W5FcI8k7egm", "m0bAWQ7cPa", "WRm+W6bWlW", "eSkfnc3cOW", "WRrhWPxdOtj1WOVcPmkLW4pcVmoeWPldRG", 'WR/cOHG', "WROgWRZcTaK", "W71vawye", "W5HJw8kYWPi", 'WPtcQmkpl1W', "W5RcTZ9TW70", 'W7GyrCkUWRC', "BdH9y8o7", 'W48hxW1d', "jSknvG7cMW", "smoFW4aCW48", "WRqeiqnc", "WQJcVCoytSoA", "iGNdRx0+", "W7XiaLe+", "WOpdNJ9CW4W", "gSoLW5zAWPy", "W4hdQCkhWPldPa", "W6pdOmkjW4VcKW", "gmkuWOVdGKu", "W5JcRLNcICo+", "fmkvg8ov", "W75SW7WcBW", "WOVcLYnWW7y", 'xaKGWP4m', "W77cRCoDW6pcMa", "W48EWR9xWRK", "WRT8W4Tuaa", 'Bt/dQSk8W5e', "g3zcWO7cKq", "WRtcTCkqWPmX", "WPlcPSk4mh4", "W71CnMiH", "m2zgWQG", "W4mvW7S1WPS", "saCOWPi", "W6NcMmkazum", "WRfpW6G7WPW", "WRbPW5XcpW", "AINdG8ovW7y", "iNbq", 'W7KGW5Tlja', "WRZcI8kkc3C", 'W4RdJmo5qCov', "W7hdMSoKWQNdTa", "uSotW4OEW5q", 'tG0+WOOD', "W77cMmkkixO", "eSopwSo6W7y", "W79lW6NdULe", "zSkPWOpdVwC", "W4NcLZ7cH8of", "WR3dNLOToW", 'W51YW4/dHhq', "W7tdVCoTAq7cMcFdSKfOW74qWPO", "WRDKW59Xla", "WQldTrSQlG", 'WQBcT8ozW47dJq', 'D2jBW6VcPW', "WRr+W4bKlG", "W6ldPCkkW5W", 'tG4OgCoF', 'WRBcR8k9oHC', "xCopAc3dPG", "cmoGeSk+WOq", "WRddR8o4WQJdQG", "W4ldN8ojWP7dRa", "W4JcRJ9QW70", 'W5mwW4NcVxa', "WQWoW4uLWRW", 'WPhdKcrhW4u', 'W6ZcICokmL8', '44ohwUkuPokxMokvGa', "WQ8GW7Gyhq", "aGddMCk4W5e", "sCoyBZdcQa", "W6DKWRL1iW", 'W7/cISoNWR/dTG', "f8kzgCo4FW", "W79wW6VdPe8", "qmkFW5bwWPe", "W6Pmax0t", 'oSoTW4FcQIq', "W4JcH8kvWOGX", "W4HAharC", "WQWEW4mnWQq", "aCkGW4BdPwe", "WQddQHxdQSk7", "W53dM1BdHcC", 'bCkSx8kGWO8', "WR9AWO1RW7G", "b8kAWQJdJLW", "xCo/sY/cPq", "dCk5W5DkWPi", "xgxdISkUW5m", 'WQ9VWPKowa', 'tHORnSkf', "W4JdL3RdTbG", "lSomASoM", "cY3dRx0y", "wSk7AmkKWOK", '44ohwUkuPokxGUkvMG', "gthcHW", "W7dcVbNcMCoZ", 'WOToW4qZWPi', 'tZOTaCop', '4Pw/4PwT4Pws4PE14PAo', 'dCo6hmkOWPm', "xmojW400W5a", "W7JdPCkUW4JdVG", "W5SqnmkOWR8", "WR99W54", "W6HGnJO5", "oCoBD8oZW5u", 'BIHxuCof', "W4RcOsr8W6O", 'WRJcT8ozW57dGq', 'yXhdPCopW7e', 'WQPkWPO1za', "WQ3cRCkwlee", "W6/cPYr8W7S", "WQ8oW4OdWOy", 'W5bFlHy9', "W75khwGr", "WOddQqKfoq", "WRP7W4rDiG", "pSogCCoNW4W", "amoCfmoFoG", "W4xdMxK", "WQddUWvkW7m", 'WQ7cGSkXk3u', "W5ddNCop", "xCkoW414lW", "W5VdGSo5rSoF", "Fd7dKmoxW7W", "WQJdQaSa", 'W7zuySkYWPa', "WRfpW6uWWPC", "WPxcJCkQnwa", 'WRVcJCoGEmoM', 'WPNcOmomqCo3', 'W4DJw8kXWQS', "8kk7Vv3XI7MK8j+BI8os", "WRJcOSokW57dMG", 'nmkThSo+FW', "W5Kqeq9u", "W7/dMCo5WRVdOG", "W74uW7S6WPS", "WPZdKtbfW5W", "WRZdICkxW4ddNa", "W7fVh0Oa", 'W4xcJmkln3q', "WQtcRG/dPa", 'o8kOWOJdVY4', "WQtcNLCKoG", 'b8omDcVcQW', "g8khWQpdMfG", 'WRz/W5XWoq', 'WP/cS8oztSoA', "WOHyWQm", 'WQhdGf0GoG', "W7pdNmoRWRNdVa", "WPXft1Sb", "W5DUvmkH", "BSkpW5OTiG", "W7PLW6fw", "jCk7W51rW4i", "WOv6aCkPW5q", "W4/dVuBdGZe", "sCohFG", "WQnhW6m", "WOVdHxRdSa0", "W4Lcfr0o", "tXO4WPi", "W5njfLW3", 'oCoSrSo2W6u', 'W4tcJ8khdvG', '44kAWQZcPSoaW5y', "W7qAWRzVW4K", 'WOXlW6S6W5K', "WP5lWRSYFG", "4Psi4Ps44Psy4Pwi4Psx", "WRpcISopW7NcJq", "W5NdKY7cSf4", 'WPtcGmk+ggi', "fSkSF8o6WQu", "eSkAW5T5WOC", "W63dHSk3vSo9", "WPxcSSk5jhi", "q0n6CSky", "WQ3cOc7dJ8k5", 'dCkhArBcQa', "nrBdGh4r", 'W5vZuCk8WOK', "zKxcJeio", "W6ldRCkcW5pdLW", "WRlcO8oaW77cIG", "4OET77Q/gwSDfq", "WPOFW45QWOu", "WPbJW5D3jG", "sSkzW595la", "WRfEW6CTWO0", "W6JILAZdMSk1na", "gSkuEbi", 'WQ9mWOqbwa', 'oCk+eColFq', "W5TobMaf", "W5KlWRC0WOO", "eSo6omk4WRC", "FCovW5TBW5O", "W6VcVSkZmva", "WRhcTai", "mKxdJMOo", "W7JdVmodASoh", "AYbb", 'q0yIWPSe', 'W4ieW4ZcNue', "BdtdJ8omW7G", "oCoizSo3W4y", "W5PRqSkLWOi", "W7VcOmosW4FdHW", "WOBcRZFdKSkc", "W68Nfdn/", "W7xdVrNcKCoI", "gmoJemktWQi", "BHa8WQKC", 'EGLExmoA', "4PAN4Psg4Pw14PE04PsP", "i2znWR8", "WPqUW6vCjq", 'W6X6W73dLNO', "WRFdRSo7FH0", "W5KSWRiPWPy", 'WQmrW5qlWOu', 'W6SIWPXXla', "W7hcRZnCW4e", "WRy3WPKL", 'WQScW4H2lW', "tCkoW4X+yW", "WRldTaCFoW", 'vSoFWO5AWPO', "WO3cLSkkggm", "WOZcM8o5W4ldIq", "WPpcPSoi", "WRTBax04", "WRFcQ8o6mvG", "qXG4WOig", "W7/cMmkzhMu", "WRr1W4DGjW", 'xsldRCoyW48', "WPddJcPzW6O", "WOxcGmk7hNi", "6P+t4BEtYO7HT7/iQq", "W5LAW6JdReO", "WPJdNIm", "W6nsfbOF", 'W497W6BdGgS', "WRdcOmk2nLK", "W5BcKG3cR8oV", 'W5qgfSkHWR8', "W6NdPCoHCmop", "WRBcQ8k0o2m", "W7tdNCofzbC", 'tSogW7XInW', 'WOBcKmk1cwm', "W4PydHOp", 'W5RdISoIv8o5', 'WRVcTuhdRmkH', "gLRdL8oPpG", "vGOOmSkv", "qSolW5bInW", "W7Hwa2qx", "W5ZdM8o2uCo3", "j0xdHgqj", "Bcriv8oz", "WQqzia", "WRKtW4iTW7i", "kmoHo8kqWOO", "4PAh4PEt4PsW4PsZ44ks", "WO4JW64pWOa", "WORcSCkiWPuO", 'vSoSW4aYW5C', "WOhcQ8okW77cVG", "WP49c2z9", "eCoNlmk3WOe", 'oCkaWRpdONy', "otxcHmo0ma", "raZdMmoLW5W", "W7FdR8kCWPlcNG", "WQ/dRG8", "W65jqa", "W5RdN8odASo/", 'WRDEW6nvWPe', "WPhdIfGSpG", "WPhcU8oasmog", "l8owlmkEWRi", "WRXOW51Xia", "WOpcUCkF", "ft7cKmoICq", "W78bWO8LWPq", "wsi1eSok", 'W7zWW7bqkG', "W4ddGwJdQXK", 'yConAc/cIW', 'WRBcT8oeW5NdJG', 'eSoHgG', 'WOOwWR4WWPW', "yXrXE8ob", "W6PscWWk", 'sSovW5LBW5q', "WPVdTdvbW6i", "WPdcSCkkWPyI", "m1buWR3cRq", 'amkDgSoj', "WQVcOuBcGSkI", "WOJcPSobvmoF", "ycNdMW", "D2fmW6VcQq", 'hmkUW4Hp', "tSkAEXNcUq", "W4PVW41xoa", "WPpcVmobrmoC", 'WOvcW6LNcG', "DNVcG8kaWRK", "WQhdKhnkW4u", "W7OGW7fdoa", "jCkVWOpdUq", "WOtcPHpdT8k/", "W71LW7DgbG", "W5vBcNGK", "WPhHTBRHTytkTog3NW", "AJ/dI8ov", 'WQS2W6ecWP4', 'Amo0W4mvW4m', "iCk+W4BdON0", "W6/cI8kOlvG", "BdRdLSoeW74", "jgzBWQ/cRq", "WQv5W5iLWQG", "WRhcUSkZmva", "cmo9fCkEWOW", 'W5hdHSoytCoF', "hmoehSk8WQ8", "AtldJSoeW7C", "WOKzvWWo", 'wWKwWOK8', "cCk9WQxdIgm", 'WPhcJmk2ggG', "W4D2wCk8WPi", "oqhcK8onpq", "qXJdLSopW5O", "lSkKWORdRMa", "8y+6G8kMDCkQnq", "WOFcHmkUcwm", "4BEAYzlHTPBHTQRiQa", "WQmfnWnU", "W5uWdmoIWOu", 'WPtcLmk8j24', "W5/dHSo4uCo9", 'W7tdL0SUoW', "WOhcVc7cSv8", "W6eNW7hcUfe", "fSoCcCoeFW", "tmopAblcHq", "W6/cI8kIpLO", "WPtcHmkUgge", "W5TLxSkWWPi", "zJmfW7S", 'W71WW7vlpW', "ASkEW5LbcW", 'W73dUgVdPJC', "uCojW4S", "W4ldTmoqWRmW", "W4G8W65wlG", 'dmkIW5rAWOW', "W59yhaDy", 'WQhdLJeZcG', "k8kTfSoFyG", "esldL8oHiW", 'FcbTq8oY', "WOXUWPaREq", "WQZcOSos", "WPZcQCofW6FcMW", "W55xW63dQLi", 'jJNcHmorga', 'WR5JW5zHaW', "k8kSWPldRMK", "wW4+", "nM/cM8kzWQW", "W6JcVapcISoZ", 'W4vZwSkHWOm', "W4O5W7xcO3S", "g8kNECk2WP4", "WRpdGLy0pG", "h8kecCocuW", "qCo5W4W2W4m", "WQFdPa4kkW", "WQlcV8kmdM4", 'b8ktmCodBq', "rmkVW51tWPe", "qSkDWPtdPgG", "WRFcOGZdPSk4", "WP8BWPqZBW", "WRZdMqC", "rcLIq8oo", "W60dW5FcPhe", 'mmkRxCkqWRy', "WQKFW58P", 'j8kJWOpdR0q', "dCopymo+W5y", "W5NdKupdNIW", 'rmk7W5aqWOq', '4Bs14Bw/Y5TZYlG', "8lUQV/cMUBtWOlM+8lQzG8kT", "oSkdrmkoWPe", "W5xdVSkaW5pdHW", "WPxcVSoixSkC", 'WPXDW5jQcW', "hSkiBSknWR8", 'W4Pwff8g', "W4ZcTCkEWP4", "W67dMhRdTa0", "W4SVfbjN", "aCkuAdBcSG", "W7zVdrO4", "W5NcOZ59W7C", "WOVdSaCzhq", "u8kDxCobFW", "WOhcKt9RW6O", "W4ZcICo6umoR", "W47dMhVdVbO", "W60sWOpcMMC", 'W5qDW6hcKMG', "WR4ekvOp", "FGtcSSolAG", "WRZcOCkxW4pdMW", 'W4NcRs3cQCo4', "W6pdSMZdUZW", 'lSk+WQxdMeW', "W73cPqm", "W5P0WQuYyY/cIq", "WPFdTmkxWO8W", "cmoSDcZcQa", "W70IW4tcPu4", "W7HAW6VdP1K", "W4WuWQL9WP8", "WO3dIgSzcW", "W5mLfSk3WPe", "W5mqf8kZW7G", "WQpcNSk9W6VcVa", "eCk6eSo6Aa", "WOHiWQq6Bq", "tXm/mSom", "W63dHmoVWQJcPq", "W5ziW6bWgG", "omoJWOJdRNO", "s8ocEI0", "W5XpW7xdKf8", "WOlcNZ5mW4q", 'kComCCo9W48', "W6ddOSks", "bCkLW4XEWOe", "omofgmkVWRm", "jcnCWRJdQa", 'WOFdMInfW4G', "W60nWP0rWQ0", "WRfpW7i7WPW", 'zw1qu8oq', "bSksW6bxWQ4", "W71MW6XojW", "fxdcLCoOjq", "W5mlWR5GWQG", "WOVdM2VdVb0", "W7m/gGX5", "WRhdSGDCW7S", "WQa0WRuXWPC", "W4T4W5nqgG", "W4FcMmkvcgm", 'sCkgW5nebG', "WOhdHmkmgMu", "W5JdK2ddTrO", "WQtdPsWKjG", "aCkzhmopBG", 'krddLISE', "WPFdRYbEW6a", "WRFcL8k8WP87", "C8ocW6mSW7a", 'f8kuWP5XW7u', 'W6P6W5jSlq', "W4G0mbL2", "WPyUW79mlW", "wqWRkSoN", "W6fUWRq", "WPvpW6r/WQ4", 'w8kdW5D+sq', "W5uuha", "WRdcT8ozWORdJG", "W68xqcDC", "gsVdS0y/", 'EZtdKmoyWQm', 'W7JdNSoSWPpdKq', "WQflW7i6WP4", "WQBdSWKhgW", "WPqQW6PBpG", "WOHVW6nDoa", "WQfzW4b7eG", "WPTlW6T4", "WRlcRCozW7dcGW", 'm8oRe8kUWO4', 'W6bxW6JdT2y', "sSkQW5XsWOS", "W73cRGtcN8oX", "tYJcJmowW7e", "WOTeW4u3WPG", "sJBdN8kIW44", "w8opAcRcRW", "kCoRh8o6WRa", "EmkoW5WTfa", "cSk+rcxcKG", "WPi9m3b6", "W6pdSW0ylG", "W7rHi2Wg", "WQHAW40UWR8", 'DtqvfSoQ', 'D1xcHNGy', "bsxcMmoZna", "WRddIJrLW6e", "W5XfW5HHhW", 'W6Xyb21l', "W6LtW6RdOfC", 'W6RcHqFcK8o+', "W71PW7zm", "DmonD8o+W4q", "WQTgW6n/WQK", "WQFcOG/dP8kZ", "r8kjW5DlW4S", "r8oBW5OEW5W", 'WQldSLJcN8oM', "WRddKua", 'wrWTWPKD', "W5HJd8o1", 'W77cJCkilem', 'W47dMgRcSqW', "W4lcS8kiWPu2", 'yqldNmkpW7a', "4Ps54PE94PET4Pwi44ot", 'W6JcJSkxjfa', 'W4iScmkdWOa', "4BA64Bs5YitHTjjw", 'mdKFW6S', "vgL7pCox", "W6SGW6Pxka", "ymkFW71ZW5K", "lHhdKNSo", "WODuWR41BW", "W502pCkZWPO", "WRdcOHldOa", "WQFdP+kCTSoCW5W", "sqy1n8o1", "W7XLW7HbpW", "wJFdKSoQWP8", 'W71RfCk7WOK', "8lw7NL9bAhq", "WPddN04VBG", "W5CUW4tcUxi", 'dSoPW4ejW4K', "WQdcKfGLiW", "u8kwcmocCq", "w8kzW7vvoG", "WO0jWOi9WRO", 'BZ5xu8oq', 'W7ZdH8oJqmoQ', "WQnOW5jMpq", "gSkUwmkNWPK", "W5T+W73dUNy", "W6STW511ja", "v8oTW4CpW5m", "WQiEjfDA", "W7JdOSkkW4FdNq", "W4KucW5w", "jSkQWRpdU2O", "WQBcOGddOmkI", "hXpdVeWS", "WPRcHJ7cTa", 'W6KOWQSRWOW', "W7BcUfFdK8k2", "W5ZdU8kmW4VdIq", "xmoducRcNW", "W6FdV8kmW4RdHW", 'bgdcR8ovzW', "W49rW7S6WOW", 'bSoMfCkcWR8', 'sqK8WP8a', "W4DhW49feG", "W4qEbYPM", "WRWpW4m+WRC", "4PU8WOOXhmk0", "WPhcS8oeqW", 'a8kCyrlcQa', 'FGrkrmoE', 'W7vmWPH6W6i', "wtyobSow", 'WOrwWRi', "tGWWnSow", "WO5pWRyeFW", "W7RdISoQ", "WQDoW5vXiq", "tCoyEJxcGW", "W4iIW5tcMw8", 'WQBdKrOeoa', "W7JdJ8o4", 'W7JcJSkb', "FYnjr8od", "imkIWPpdUq", "tCozAdJcOq", "AYfnu8oe", "WQBcQSocW7xcJq", "W79UW7XKlq", "W4Pwere", 'WR8FWOXRW7m', "WRdcHSkcduS", "W7/cRXJcI8oM", 'W5GEWRyYWOG', "fSkldmo2EW", "WPtcRCkpWOSA", 'WR4rW4KZWQe', "tr7dPCoOW5C", "WOCAwa", 'WPFcUmonW6BdPG', "W4rMW6RdSLy", "WRFcQ8k7pem", "W6BdUCkwW5O", "W4ddK3C", "WQFdMvyVyq", "t0HHW4S", "WOhcTCkoWP8K", "lCkav8kbWPK", "WOXwWRi", "WOhcOCk8lKq", "W7Psn08X", "W6PCW7hdT10", "WOFcTCoWW6BdJG", 'W6JdT17dHty', "W7nEt8kcWQe", 'sCoBW4aF', "wCkVeSoEAa", "WPqMfCo1W4y", "eSo3xCkOWOi", "WQqwW4K", 'oCkvWOFdG1G', '8ys4UCkR8joBI/gaMPVWN5IL', 'W4RcSdu5W7y', "AYmexCoa", 'WQhcOCoIW5RdJa', 'qCo9wqNcTW', 'uokuKtldKCot', "rstdGSkK", "WOG7W6uOWPq", "eca3pmol", "W4HHWQus", 'rmkJW5fBWOC', "WRFcPCobW7BcHq", "WRdcOmo6W4/dMW", "nrxdIMij", "pmkGW4LOWRC", "W7/dNCofzb0", "umojW7SlW58", 'W6BdLL1XEq', "WQFdPbSi", 'WRRcQCou', "W6GbWOeTWOW", 'yr5Dxmou', "AcNdJCouW6K", "a8kLWPHxWOC", "W73dMmoLWQ/dTq", "kComFmo2W6W", "W5abfSkHWQG", "WQ7cM8oev8o/", "WO3cPSktWP8W", "s8kcW41SmW", "p8kGqCk7WRW", "jgzBWQ/cHq", 'mGZdIwu', "WOruWOeYzq", "W7xdRCklWPldGa", "DSk/W5fgeq", "W5ldUSoJrmoS", 'W4nOumkNW4y', 'WPlcLSkU', 'WQDzW7u+WP4', 'qCohCHBcJa', "WPBcImk/", "WRSfle1k", "cghcI8k0lq", "hCkqyHpcNG", "j8kUW4TmWOm", '44kZWONILj/ILQ3ILja', "Cd3dQmkcW4O", "WRhdLbKJnW", "WOVcUSoAWPiM", "WOu4kurv"];
    _0x40f5 = function () {
      return _0x45c2ff;
    };
    return _0x40f5();
  }
  function _0xa2d390(_0x44cf39, _0x26355b, _0x351dfa, _0x50441c, _0x3d2d6b) {
    return _0x18a7(_0x44cf39 + 0x1a0, _0x26355b);
  }
  cmd(_0x3364dc, async (_0x4ca6a1, _0xa20080, _0x2302ec, {
    from: _0x21330b,
    l: _0xec9770,
    quoted: _0xf771bf,
    body: _0x5a6b67,
    isCmd: _0x6be3f3,
    command: _0x2ac55d,
    args: _0x5c621e,
    q: _0x4cc5d8,
    isGroup: _0xc440b4,
    isownbot: _0x144d0e,
    sender: _0x4e674c,
    senderNumber: _0x3f3169,
    botNumber2: _0x4f89d1,
    botNumber: _0xa259e0,
    pushname: _0x484627,
    isMe: _0x3a1af5,
    isOwner: _0x1e0396,
    groupMetadata: _0x28d439,
    groupName: _0x6dd76,
    participants: _0x2ba010,
    groupAdmins: _0x861d93,
    isBotAdmins: _0x2aa390,
    isCreator: _0x4de5c0,
    isDev: _0x1d9d11,
    isAdmins: _0x248cde,
    reply: _0x1cf22e
  }) => {
    if (!_0x1e0396) {
      return await _0x1cf22e("*You must be a bots owner frist*");
    }
    if (!_0xa20080.quoted.image) {
      return await _0x1cf22e("*Reply to a photo*");
    }
    let _0x3f516d = await _0xa20080.quoted.download();
    await _0x4ca6a1.updateProfilePicture(_0x4f89d1, _0x3f516d);
    return await _0x1cf22e("*Profile Picture Updated*");
  });
  const _0x4f26e3 = {
    'pattern': "getsession",
    'react': '🆗',
    'desc': "To get bot session",
    'category': 'main',
    'use': ".getsession",
    'filename': __filename
  };
  cmd(_0x4f26e3, async (_0xcda7cb, _0x13863e, _0x52751c, {
    from: _0x19163b,
    prefix: _0x4e6503,
    l: _0x4153b1,
    quoted: _0x4b5997,
    body: _0x236ff7,
    isCmd: _0x4ea1d1,
    command: _0x2404be,
    args: _0x461ae4,
    q: _0x47eb65,
    isGroup: _0x5dc5c8,
    sender: _0x191499,
    senderNumber: _0xbd2b93,
    botNumber2: _0x754306,
    botNumber: _0x483d5,
    pushname: _0x2eddd7,
    isMe: _0x5e18aa,
    isOwner: _0xbfe2dd,
    groupMetadata: _0x2bf9c2,
    groupName: _0x1b561d,
    participants: _0x5aeca1,
    groupAdmins: _0x55fe9f,
    isBotAdmins: _0x5daaaf,
    isAdmins: _0x3bf539,
    reply: _0x275ae4
  }) => {
    try {
      if (!_0x5e18aa) {
        return await _0x275ae4("*You are not bot's owner or moderator !*");
      }
      _0x275ae4("Wait a moment, currently retrieving your session file");
      let _0x175ec0 = fs.readFileSync('./session/creds.json');
      const _0x5e0a17 = {
        'document': _0x175ec0,
        'mimetype': "application/json",
        'fileName': 'creds.json'
      };
      _0xcda7cb.sendMessage(_0x13863e.chat, _0x5e0a17, {
        'quoted': _0x13863e
      });
      const _0x88437f = {
        'text': '✅',
        'key': _0x13863e.key
      };
      const _0x1adb05 = {
        'react': _0x88437f
      };
      await _0xcda7cb.sendMessage(_0x19163b, _0x1adb05);
    } catch (_0x544a09) {
      _0x275ae4("*🛑 This is an owner command...*");
      _0x4153b1(_0x544a09);
    }
  });
  const _0x193ba0 = {
    'pattern': "delsession",
    'react': '🆗',
    'desc': "To delete bot session",
    'category': 'main',
    'use': '.delsession',
    'filename': __filename
  };
  cmd(_0x193ba0, async (_0xcb8c5a, _0x28ae92, _0x5e91e9, {
    from: _0x28832d,
    prefix: _0xabcc8f,
    l: _0x104ba6,
    quoted: _0x21979a,
    body: _0xed52f3,
    isCmd: _0x31b1ef,
    command: _0x573cdd,
    args: _0x3e6cd2,
    q: _0x1636f7,
    isGroup: _0x3cd143,
    sender: _0x3f7267,
    senderNumber: _0x5acf4a,
    botNumber2: _0x452572,
    botNumber: _0x380488,
    pushname: _0x251a3a,
    isMe: _0x3a097c,
    isOwner: _0x3fba0d,
    groupMetadata: _0x1835c4,
    groupName: _0x36eb4a,
    participants: _0x135402,
    groupAdmins: _0x3898ce,
    isBotAdmins: _0x5c2d6d,
    isAdmins: _0x45f1e5,
    reply: _0x3dd7dc
  }) => {
    try {
      if (!_0x3a097c) {
        return await _0x3dd7dc("*You are not bot's owner or moderator !*");
      }
      fs.readdir("./session", async function (_0x578fe9, _0x333f94) {
        if (_0x578fe9) {
          console.log("Unable to scan directory: " + _0x578fe9);
          return _0x3dd7dc("Unable to scan directory: " + _0x578fe9);
        }
        let _0x139550 = await _0x333f94.filter(_0x58ce17 => _0x58ce17.startsWith('pre-key') || _0x58ce17.startsWith("sender-key") || _0x58ce17.startsWith("session-") || _0x58ce17.startsWith("app-state"));
        console.log(_0x139550.length);
        let _0x11f987 = "Detected " + _0x139550.length + " junk files\n\n";
        if (_0x139550.length == 0x0) {
          return _0x3dd7dc();
        }
        _0x139550.map(function (_0x33026a, _0x492fd6) {
          _0x11f987 += _0x492fd6 + 0x1 + (". " + _0x33026a + "\n");
        });
        _0x3dd7dc();
        await sleep(0x7d0);
        _0x3dd7dc("Deleting junk files...");
        await _0x139550.forEach(function (_0x5a078d) {
          fs.unlinkSync("./session/" + _0x5a078d);
        });
        await sleep(0x7d0);
        _0x3dd7dc("Successfully deleted all the trash in the session folder");
      });
      const _0x575987 = {
        'text': '✅',
        'key': _0x28ae92.key
      };
      const _0x4d4432 = {
        'react': _0x575987
      };
      await _0xcb8c5a.sendMessage(_0x28832d, _0x4d4432);
    } catch (_0x3ff2e6) {
      _0x3dd7dc("*🛑 This is an owner command...*");
      _0x104ba6(_0x3ff2e6);
    }
  });
  const _0x13f3d1 = {
    'pattern': "block",
    'react': '🆗',
    'desc': "To block a member",
    'category': "main",
    'use': ".block",
    'filename': __filename
  };
  cmd(_0x13f3d1, async (_0x209ab1, _0x2d8f7e, _0x555140, {
    from: _0x2a9fb9,
    prefix: _0xf6fb95,
    l: _0x4f8b4d,
    quoted: _0x546133,
    body: _0x1b3340,
    isCmd: _0x1c657a,
    command: _0x5d9a64,
    args: _0x511ec6,
    q: _0x2f41d3,
    isGroup: _0x16fc90,
    sender: _0x4deb42,
    senderNumber: _0x5aead5,
    botNumber2: _0xb9b30e,
    botNumber: _0x347a5f,
    pushname: _0x33ecc2,
    isMe: _0x46d47d,
    isOwner: _0x2a0429,
    groupMetadata: _0x3458b7,
    groupName: _0x5331fe,
    participants: _0x20e09d,
    groupAdmins: _0x152439,
    isBotAdmins: _0xcf7bcf,
    isAdmins: _0x57007b,
    reply: _0x182111
  }) => {
    try {
      if (!_0x46d47d) {
        return await _0x182111("*You are not bot's owner or moderator !*");
      }
      let _0x5ec85f = _0x2d8f7e.mentionedJid ? _0x2d8f7e.mentionedJid : _0x2d8f7e.quoted ? _0x2d8f7e.quoted.sender : _0x2f41d3.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
      await _0x209ab1.updateBlockStatus(_0x5ec85f, "block").then(_0x5642f6 => _0x182111(jsonformat(_0x5642f6)))["catch"](_0x2257aa => _0x182111(jsonformat(_0x2257aa)));
      const _0xaf18fb = {
        'text': '✅',
        'key': _0x2d8f7e.key
      };
      const _0x3f7226 = {
        'react': _0xaf18fb
      };
      await _0x209ab1.sendMessage(_0x2a9fb9, _0x3f7226);
    } catch (_0xf9d48e) {
      _0x182111("*Error !!*");
      _0x4f8b4d(_0xf9d48e);
    }
  });
  const _0x2cf4c5 = {
    'pattern': "unblock",
    'react': '🆗',
    'desc': "To unblock a member",
    'category': "main",
    'use': ".unblock",
    'filename': __filename
  };
  cmd(_0x2cf4c5, async (_0x7ea06d, _0x8a8ad0, _0x2a57e5, {
    from: _0x5f49b3,
    prefix: _0x93ee0a,
    l: _0x5946ff,
    quoted: _0x226434,
    body: _0x5bb424,
    isCmd: _0x5995e1,
    command: _0x35d7bd,
    args: _0x2c3dbc,
    q: _0x550abd,
    isGroup: _0x35790b,
    sender: _0x4100bf,
    senderNumber: _0x49d8fc,
    botNumber2: _0x20dffd,
    botNumber: _0x74f91c,
    pushname: _0x18528a,
    isMe: _0x47725a,
    isOwner: _0x28e548,
    groupMetadata: _0x55c4e2,
    groupName: _0x31a896,
    participants: _0x564763,
    groupAdmins: _0x24259f,
    isBotAdmins: _0x4c5028,
    isAdmins: _0xed2cfb,
    reply: _0x21ac83
  }) => {
    try {
      if (!_0x47725a) {
        return await _0x21ac83("*You are not bot's owner or moderator !*");
      }
      let _0x4c8afd = _0x8a8ad0.mentionedJid ? _0x8a8ad0.mentionedJid : _0x8a8ad0.quoted ? _0x8a8ad0.quoted.sender : _0x550abd.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
      await _0x7ea06d.updateBlockStatus(_0x4c8afd, "unblock").then(_0x3c47e7 => _0x21ac83(jsonformat(_0x3c47e7)))["catch"](_0x4012c3 => _0x21ac83(jsonformat(_0x4012c3)));
      const _0x36187e = {
        'text': '✅',
        'key': _0x8a8ad0.key
      };
      const _0x25df13 = {
        'react': _0x36187e
      };
      await _0x7ea06d.sendMessage(_0x5f49b3, _0x25df13);
    } catch (_0x475d62) {
      _0x21ac83("*🛑 This is an owner command...*");
      _0x5946ff(_0x475d62);
    }
  });
  const _0x16dcab = {
    'pattern': "save",
    'category': "download",
    'react': '🎧',
    'use': ".save",
    'filename': __filename
  };
  cmd(_0x16dcab, async (_0x50024e, _0x5db3be, _0x3d41a4, {
    from: _0x347d89,
    q: _0x147c00,
    reply: _0x492cf8
  }) => {
    try {
      var _0x4741d1 = _0x3d41a4.key.remoteJid;
      const _0x1bc70c = _0x4741d1?.['endsWith']("@g.us");
      var _0x6cb04c = _0x1bc70c ? ms.key.participant ? ms.key.participant : ms.participant : _0x4741d1;
      var _0x112a3f = _0x3d41a4.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"];
      var _0x6cb04c = _0x1bc70c ? _0x3d41a4.key.participant ? _0x3d41a4.key.participant : _0x3d41a4.participant : _0x4741d1;
      if (_0x112a3f) {
        console.log(_0x112a3f);
        let _0x3a3f4f;
        if (_0x112a3f.imageMessage) {
          let _0x240e13 = await _0x50024e.downloadAndSaveMediaMessage(_0x112a3f.imageMessage);
          const _0x5a56e7 = {
            'url': _0x240e13
          };
          const _0x1276c3 = {
            'image': _0x5a56e7,
            'caption': _0x112a3f.imageMessage.caption
          };
          _0x3a3f4f = _0x1276c3;
        } else {
          if (_0x112a3f.videoMessage) {
            let _0x3ea790 = await _0x50024e.downloadAndSaveMediaMessage(_0x112a3f.videoMessage);
            const _0x414617 = {
              'url': _0x3ea790
            };
            const _0x5019d4 = {
              'video': _0x414617,
              'caption': _0x112a3f.videoMessage.caption
            };
            _0x3a3f4f = _0x5019d4;
          } else {
            if (_0x112a3f.audioMessage) {
              let _0x3e639d = await _0x50024e.downloadAndSaveMediaMessage(_0x112a3f.audioMessage);
              const _0x3c99da = {
                'url': _0x3e639d
              };
              const _0x475ca0 = {
                'audio': _0x3c99da,
                'mimetype': "audio/mp4"
              };
              _0x3a3f4f = _0x475ca0;
            } else {
              if (_0x112a3f.stickerMessage) {
                let _0x341633 = await _0x50024e.downloadAndSaveMediaMessage(_0x112a3f.stickerMessage);
                const _0x22d15d = {
                  'pack': "X-BYTE",
                  'type': StickerTypes.CROPPED,
                  'categories': ['🤩', '🎉'],
                  'id': "12345",
                  'quality': 0x46,
                  'background': 'transparent'
                };
                let _0x40f5e5 = new Sticker(_0x341633, _0x22d15d);
                const _0x5974ed = await _0x40f5e5.toBuffer();
                const _0x463614 = {
                  'sticker': _0x5974ed
                };
                _0x3a3f4f = _0x463614;
              } else {
                const _0x160ef6 = {
                  'q': _0x112a3f.conversation
                };
                _0x3a3f4f = _0x160ef6;
              }
            }
          }
        }
        _0x50024e.sendMessage(_0x6cb04c, _0x3a3f4f);
      } else {
        _0x492cf8("Mention the message that you want to save");
      }
    } catch (_0x546050) {
      console.log(_0x546050);
      _0x492cf8("*Error !!*");
    }
  });
  const _0x410cb1 = {
    'pattern': "ping",
    'react': '🐼',
    'alias': ["speed", "p"],
    'desc': "To Check bot's ping",
    'category': "main",
    'use': '.ping',
    'filename': __filename
  };
  cmd(_0x410cb1, async (_0x2244d4, _0x5f4575, _0x48c947, {
    from: _0xd99d01,
    l: _0xefa035,
    quoted: _0xf39343,
    body: _0x136604,
    isCmd: _0xe7cce1,
    command: _0x897edc,
    args: _0x2f94fa,
    q: _0x46fed4,
    isGroup: _0x1c53a2,
    sender: _0x4d0802,
    senderNumber: _0x40f1f4,
    botNumber2: _0x4bb3d5,
    botNumber: _0x2dd780,
    pushname: _0x5dbfa3,
    isMe: _0x201164,
    isOwner: _0xcc9956,
    groupMetadata: _0x420958,
    groupName: _0x315ae6,
    participants: _0x1e9890,
    groupAdmins: _0xb7ff15,
    isBotAdmins: _0x1f5334,
    isAdmins: _0x422ac9,
    reply: _0x164e95
  }) => {
    try {
      var _0x3682a9 = new Date().getTime();
      return await _0x2244d4.sendMessage(_0xd99d01, {
        'text': "*TDB ping is* " + (_0x3bdc62 - _0x3682a9) + " *MS* ",
      });
    } catch (_0x59d8b1) {
      _0x164e95("*Error !!*");
      _0xefa035(_0x59d8b1);
    }
  });
  const _0x229942 = {
    'pattern': "cmdfile",
    'react': '🆗',
    'desc': "To command file",
    'category': "main",
    'use': ".cmdfile",
    'filename': __filename
  };
  cmd(_0x229942, async (_0x51cf1b, _0x5609c4, _0xfe3db6, {
    from: _0x1b99ec,
    prefix: _0x2b87c1,
    l: _0x46bffd,
    quoted: _0x438157,
    body: _0x1d8590,
    isCmd: _0x48a881,
    command: _0x4c9545,
    args: _0x1c6da7,
    q: _0x1d3adc,
    isGroup: _0x58ac03,
    sender: _0x41ea90,
    senderNumber: _0xbec139,
    botNumber2: _0x1023fb,
    botNumber: _0x4cf01e,
    pushname: _0xe744b4,
    isMe: _0x49bc7e,
    isOwner: _0x2b3d41,
    groupMetadata: _0x33f952,
    groupName: _0x44366e,
    participants: _0x4770d7,
    groupAdmins: _0x5ace7f,
    isBotAdmins: _0x29733b,
    isAdmins: _0x1e812d,
    reply: _0x2929be
  }) => {
    try {
      let _0x287d03 = [];
      const _0x3f7161 = commands.find(_0xa43bd2 => _0xa43bd2.pattern === _0x1d3adc.split(" ")[0x0].toLowerCase());
      if (!_0x3f7161) {
        return await _0x2929be("*❌No Such commands.*");
      } else {
        _0x287d03.push("*🍁Command:* " + _0x3f7161.pattern);
      }
      if (_0x3f7161.category) {
        _0x287d03.push("*🧩Type:* " + _0x3f7161.category);
      }
      if (_0x3f7161.filename) {
        _0x287d03.push("✨FileName: " + _0x3f7161.filename);
      }
      return _0x2929be(_0x287d03.join("\n"));
      const _0x13f019 = {
        'text': '✅',
        'key': _0x5609c4.key
      };
      const _0x3082eb = {
        'react': _0x13f019
      };
      await _0x51cf1b.sendMessage(_0x1b99ec, _0x3082eb);
    } catch (_0x410e7a) {
      _0x2929be("*Error !!*");
      _0x46bffd(_0x410e7a);
    }
  });
  const Hamza_devvv = {
    'pattern': "dev",
    'react': '🆗',
    'desc': "To get dev number",
    'category': "main",
    'use': ".dev",
    'filename': __filename
  };
  cmd(Hamza_devvv, async (_0x22a5a4, _0x4799a2, _0x559496, {
    from: _0x3fc9d8,
    prefix: _0x10ebb3,
    l: _0x53cf1b,
    quoted: _0x27c193,
    body: _0x3bd14b,
    isCmd: _0x3a06cb,
    command: _0x4c7f05,
    args: _0xd980ba,
    q: _0x322b6f,
    isGroup: _0x2e07de,
    sender: _0x41ff2a,
    senderNumber: _0x4308ee,
    botNumber2: _0x203741,
    botNumber: _0x168b46,
    pushname: _0x260233,
    isMe: _0x7bb011,
    isOwner: _0x1c18e7,
    groupMetadata: _0x4f8251,
    groupName: _0x4b264a,
    participants: _0x3eafdf,
    groupAdmins: _0x13b1b9,
    isBotAdmins: _0xde05fd,
    isAdmins: _0x2a9a5e,
    reply: _0x1d15c1
  }) => {
    try {
      const _0x569dcf = require("../settings");
      const _0x22b5a3 = "BEGIN:VCARD\nVERSION:3.0\nFN:Hamza\nORG:;\nTEL;type=CELL;type=VOICE;waid=" + owner[0x0] + ':+' + owner[0x0] + "\n" + "END:VCARD";
      const _0x3287b7 = {
        'vcard': _0x22b5a3
      };
      const _0x43f19b = {
        'displayName': "Hamza",
        'contacts': [_0x3287b7]
      };
      let _0x2f7550 = {
        'contacts': _0x43f19b,
        'contextInfo': {
          'externalAdReply': {
            'title': "Hamza",
            'body': "Touch here.",
            'renderLargerThumbnail': true,
            'thumbnailUrl': '',
            'thumbnail': "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png",
            'mediaType': 0x2,
            'mediaUrl': '',
            'sourceUrl': 'https://wa.me/+' + owner[0x0] + "?text=Hii Hamza, I'm " + _0x4799a2.pushName
          }
        }
      };
      let _0x5e3132 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Bot Developer",
          'url': '',
          'merchant_url': '923072380380'
        })
      }, {
        'name': "address_message",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Send address to bot developer",
          'url': _0x569dcf.BTNURL,
          'merchant_url': _0x569dcf.BTNURL
        })
      }, {
        'name': "cta_call",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Call to the developer",
          'url': "923072380380",
          'merchant_url': '923072380380'
        })
      }, {
        'name': "send_location",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Send Location for developer",
          'url': _0x569dcf.BTNURL,
          'merchant_url': _0x569dcf.BTNURL
        })
      }];
      const _0x28e738 = {
        'image': '',
        'header': '',
        'footer': _0x569dcf.FOOTER,
        'body': "> You can contact the bot developer from this section"
      };
      return await _0x22a5a4.sendButtonMessage(_0x3fc9d8, _0x5e3132, _0x559496, _0x28e738);
      const _0x26af79 = {
        'quoted': _0x4799a2
      };
      return await _0x22a5a4.sendMessage(_0x3fc9d8, _0x2f7550, _0x26af79);
      const _0xee4fb3 = {
        'text': '✅',
        'key': _0x4799a2.key
      };
      const _0x18a151 = {
        'react': _0xee4fb3
      };
      await _0x22a5a4.sendMessage(_0x3fc9d8, _0x18a151);
    } catch (_0x4e7e94) {
      _0x1d15c1("*Error !!*");
      _0x53cf1b(_0x4e7e94);
    }
  });
  const Hamza_Owner = {
    'pattern': "owner",
    'react': '👋🏻',
    'desc': "To get owner number",
    'category': "main",
    'use': ".owner",
    'filename': __filename
  };
  cmd(Hamza_Owner, async (_0x1d1227, _0x389b78, _0x4dec77, {
    from: _0x301e3e,
    prefix: _0x24acd9,
    l: _0x179260,
    quoted: _0x1a2065,
    body: _0x2a4557,
    isCmd: _0xe2c3d2,
    command: _0x14f5db,
    args: _0x25264e,
    q: _0x4dd422,
    isGroup: _0xd1115,
    sender: _0x3a5dda,
    senderNumber: _0x120c80,
    botNumber2: _0x3c1faa,
    botNumber: _0x33bfb2,
    pushname: _0x2d6324,
    isMe: _0x29855b,
    isOwner: _0x5b7e41,
    groupMetadata: _0x42550a,
    groupName: _0x11552f,
    participants: _0x3d964f,
    groupAdmins: _0x3316f0,
    isBotAdmins: _0x49cb40,
    isAdmins: _0x496864,
    reply: _0x5dc889
  }) => {
    try {
      const _0x12fcd2 = require("../settings");
      const _0x56b654 = "BEGIN:VCARD\nVERSION:3.0\nFN:" + _0x12fcd2.OWNER_NAME + "\n" + "ORG:;\n" + "TEL;type=CELL;type=VOICE;waid=" + owner[0x0] + ':+' + owner[0x0] + "\n" + "END:VCARD";
      const _0x3516b5 = {
        'vcard': _0x56b654
      };
      const _0x4cba71 = {
        'displayName': _0x12fcd2.OWNER_NAME,
        'contacts': [_0x3516b5]
      };
      let _0x59e150 = {
        'contacts': _0x4cba71,
        'contextInfo': {
          'externalAdReply': {
            'title': _0x12fcd2.OWNER_NAME,
            'body': "Touch here.",
            'renderLargerThumbnail': true,
            'thumbnailUrl': '',
            'thumbnail': "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png",
            'mediaType': 0x2,
            'mediaUrl': '',
            'sourceUrl': 'https://wa.me/+' + owner[0x0] + "?text=Hii Hamza, I'm " + _0x389b78.pushName
          }
        }
      };
      let _0x13a522 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Bot Owner",
          'url': _0x12fcd2.OWNER_NUMBER,
          'merchant_url': _0x12fcd2.OWNER_NUMBER
        })
      }, {
        'name': "address_message",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Send address to bot owner",
          'url': _0x12fcd2.BTNURL,
          'merchant_url': _0x12fcd2.BTNURL
        })
      }, {
        'name': 'cta_call',
        'buttonParamsJson': JSON.stringify({
          'display_text': "Call to the owner",
          'url': _0x12fcd2.OWNER_NUMBER,
          'merchant_url': _0x12fcd2.OWNER_NUMBER
        })
      }, {
        'name': 'send_location',
        'buttonParamsJson': JSON.stringify({
          'display_text': "Send Location for owner",
          'url': _0x12fcd2.BTNURL,
          'merchant_url': _0x12fcd2.BTNURL
        })
      }];
      const _0x3d09dc = {
        'image': '',
        'header': '',
        'footer': _0x12fcd2.FOOTER,
        'body': "> You can contact the bot owner from this section"
      };
      return await _0x1d1227.sendButtonMessage(_0x301e3e, _0x13a522, _0x4dec77, _0x3d09dc);
      const _0x2bf7d7 = {
        'quoted': _0x389b78
      };
      return await _0x1d1227.sendMessage(_0x301e3e, _0x59e150, _0x2bf7d7);
      const _0x28270b = {
        'text': '✅',
        'key': _0x389b78.key
      };
      const _0xf703b4 = {
        'react': _0x28270b
      };
      await _0x1d1227.sendMessage(_0x301e3e, _0xf703b4);
    } catch (_0x469e82) {
      _0x5dc889("*Error !!*");
      _0x179260(_0x469e82);
    }
  });
  const _0x38bd97 = {
    'pattern': "kickall",
    'react': '🆗',
    'desc': "To kick all members in one time",
    'category': 'group',
    'use': ".kickall",
    'filename': __filename
  };
  cmd(_0x38bd97, async (_0x423e29, _0x319af0, _0x134fd8, {
    from: _0x4a663c,
    prefix: _0x58959c,
    l: _0x450d9d,
    quoted: _0x2996ec,
    body: _0x3fa7d0,
    isCmd: _0x4a3d4f,
    command: _0x4693e9,
    args: _0x4a2720,
    q: _0x4eec18,
    isGroup: _0x5d4bc8,
    sender: _0x4e9250,
    senderNumber: _0x36e41f,
    botNumber2: _0x30e0fb,
    botNumber: _0x544479,
    pushname: _0xd9d40d,
    isMe: _0x74c42c,
    isOwner: _0x1e2c0a,
    groupMetadata: _0x2d179f,
    groupName: _0x1144ec,
    participants: _0x2e4100,
    groupAdmins: _0x13ffbc,
    isBotAdmins: _0x48fbff,
    isAdmins: _0x144a26,
    reply: _0x2fc78a
  }) => {
    try {
      if (!_0x5d4bc8) {
        return _0x2fc78a("*This is not a group !*");
      }
      if (!_0x144a26) {
        return _0x2fc78a("You are not an admin !");
      }
      for (let _0xf8ca0e of _0x2e4100) {
        await sleep(0x3e8);
        if (_0xf8ca0e.id == _0x544479 + '@s.whatsapp.net') {
          return;
        }
        if (_0xf8ca0e.id == owner + "@s.whatsapp.net") {
          return;
        }
        await _0x423e29.groupParticipantsUpdate(_0x4a663c, [_0xf8ca0e.id], "remove");
        await _0x423e29.sendText(_0x4a663c, '*' + _0xf8ca0e.id.split('@')[0x0] + " Kick out !!!*");
      }
      const _0x2892a2 = {
        'text': '✅',
        'key': _0x319af0.key
      };
      const _0x37edfb = {
        'react': _0x2892a2
      };
      await _0x423e29.sendMessage(_0x4a663c, _0x37edfb);
    } catch (_0x39b748) {
      _0x2fc78a("*Sorry !! Im not admin here*");
      _0x450d9d(_0x39b748);
    }
  });
  const _0x487cb5 = {
    'pattern': "opentime",
    'react': '🆗',
    'desc': "To open group to a time",
    'category': "group",
    'use': ".opentime",
    'filename': __filename
  };
  cmd(_0x487cb5, async (_0x4a5851, _0x313c15, _0x76e1b1, {
    from: _0x262c33,
    l: _0x1ca973,
    quoted: _0x234e01,
    body: _0x1bc930,
    isCmd: _0x43a0da,
    command: _0x33ac4c,
    args: _0x4bcf50,
    q: _0x45a669,
    isGroup: _0x4df2f5,
    sender: _0x109707,
    senderNumber: _0x117a1a,
    botNumber2: _0x3d9588,
    botNumber: _0x565078,
    pushname: _0x29ded6,
    isMe: _0x17b6f3,
    isOwner: _0x2cdc58,
    groupMetadata: _0x1e4b2e,
    groupName: _0x428a04,
    participants: _0x6059f7,
    groupAdmins: _0x180111,
    isBotAdmins: _0x499145,
    isAdmins: _0x39e6cc,
    reply: _0x51b4db
  }) => {
    try {
      if (!_0x4df2f5) {
        return _0x51b4db("*This is not a group !*");
      }
      if (!_0x39e6cc) {
        return _0x51b4db("You are not an admin !");
      }
      if (_0x4bcf50[0x1] == "second") {
        var _0x5ad2e6 = _0x4bcf50[0x0] * "1000";
      } else {
        if (_0x4bcf50[0x1] == "minute") {
          var _0x5ad2e6 = _0x4bcf50[0x0] * '60000';
        } else {
          if (_0x4bcf50[0x1] == "hour") {
            var _0x5ad2e6 = _0x4bcf50[0x0] * "3600000";
          } else {
            if (_0x4bcf50[0x1] == 'day') {
              var _0x5ad2e6 = _0x4bcf50[0x0] * "86400000";
            } else {
              return _0x51b4db("*select:*\nsecond\nminute\nhour\n\n*example*\n10 second");
            }
          }
        }
      }
      _0x51b4db("Open time " + _0x45a669 + " starting from now");
      setTimeout(() => {
        _0x4a5851.groupSettingUpdate(_0x262c33, "not_announcement");
        _0x51b4db("*Open time* the group was opened by admin\n now members can send messages");
      }, _0x5ad2e6);
      const _0x12b1e8 = {
        'text': '✅',
        'key': _0x313c15.key
      };
      const _0xe2a9e3 = {
        'react': _0x12b1e8
      };
      await _0x4a5851.sendMessage(_0x262c33, _0xe2a9e3);
    } catch (_0x14609b) {
      _0x51b4db("*Sorry !! Im not admin here !!*");
      _0x1ca973(_0x14609b);
    }
  });
  const _0xd3cd18 = {
    'pattern': 'closetime',
    'react': '🆗',
    'desc': "To close group to a time",
    'category': "group",
    'use': '.closstime',
    'filename': __filename
  };
  cmd(_0xd3cd18, async (_0x1ac11f, _0x489709, _0xc2a08d, {
    from: _0x430933,
    l: _0x411690,
    quoted: _0x1c8f69,
    body: _0x3429f2,
    isCmd: _0x3a3488,
    command: _0x11c5fe,
    args: _0x34506d,
    q: _0x15f52e,
    isGroup: _0x94bb9f,
    sender: _0x245beb,
    senderNumber: _0x16c952,
    botNumber2: _0x2aca9f,
    botNumber: _0x2bc75d,
    pushname: _0x3b7c35,
    isMe: _0x5e6067,
    isOwner: _0x38f71c,
    groupMetadata: _0x5bd025,
    groupName: _0x593dd8,
    participants: _0x51d5e8,
    groupAdmins: _0x45736b,
    isBotAdmins: _0x556c9d,
    isAdmins: _0x1ffc6a,
    reply: _0x12c46c
  }) => {
    try {
      if (!_0x94bb9f) {
        return _0x12c46c("*This is not a group !*");
      }
      if (!_0x1ffc6a) {
        return _0x12c46c("You are not an admin !");
      }
      if (_0x34506d[0x1] == "second") {
        var _0x439ce7 = _0x34506d[0x0] * "1000";
      } else {
        if (_0x34506d[0x1] == "minute") {
          var _0x439ce7 = _0x34506d[0x0] * "60000";
        } else {
          if (_0x34506d[0x1] == "hour") {
            var _0x439ce7 = _0x34506d[0x0] * "3600000";
          } else {
            if (_0x34506d[0x1] == "day") {
              var _0x439ce7 = _0x34506d[0x0] * "86400000";
            } else {
              return _0x12c46c("*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second");
            }
          }
        }
      }
      _0x12c46c("Close time " + _0x15f52e + " starting from now");
      setTimeout(() => {
        _0x1ac11f.groupSettingUpdate(_0x430933, "announcement");
        _0x12c46c("*Close time* group closed by admin\nnow only admin can send messages");
      }, _0x439ce7);
      const _0x1de23e = {
        'text': '✅',
        'key': _0x489709.key
      };
      const _0x327960 = {
        'react': _0x1de23e
      };
      await _0x1ac11f.sendMessage(_0x430933, _0x327960);
    } catch (_0x211e8c) {
      _0x12c46c("*Sorry !! Im not admin here !!*");
      _0x411690(_0x211e8c);
    }
  });
  const _0x248fea = {
    'pattern': 'sendcontact',
    'react': '🆗',
    'desc': "To see group contacts",
    'category': "group",
    'use': ".sendcontact",
    'filename': __filename
  };
  cmd(_0x248fea, async (_0x95557e, _0x1e57f9, _0x15876e, {
    from: _0x4fa281,
    l: _0x4a1755,
    quoted: _0x539d1c,
    body: _0x21b197,
    isCmd: _0x3b2e03,
    command: _0x2e2d3c,
    args: _0xc6c872,
    q: _0x56d864,
    isGroup: _0x33c62b,
    sender: _0x585a94,
    senderNumber: _0x4da8f0,
    botNumber2: _0x5ec98b,
    botNumber: _0x315428,
    pushname: _0x45a833,
    isMe: _0x23293b,
    isOwner: _0x1de2a4,
    groupMetadata: _0x56b3fb,
    groupName: _0x373b93,
    participants: _0x58785c,
    groupAdmins: _0x2affae,
    isBotAdmins: _0x1c7d1e,
    isAdmins: _0x503451,
    reply: _0x36ab5b
  }) => {
    try {
      if (!_0x33c62b) {
        return _0x36ab5b("*This is not a group !*");
      }
      if (!_0x503451) {
        return _0x36ab5b("You are not an admin !");
      }
      if (!_0x1e57f9.mentionedJid) {
        return _0x36ab5b("\nUse like this\n Example:.sendcontact @tag|name");
      }
      let _0x1690f9 = _0x56d864.split(" ")[0x1] ? _0x56d864.split(" ")[0x1] : "Contact";
      let _0x2fc74d = {
        'displayName': 'Contact',
        'contacts': [{
          'displayName': _0x1690f9,
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:;" + _0x1690f9 + ";;;\nFN:" + _0x1690f9 + "\nitem1.TEL;waid=" + _0x1e57f9.mentionedJid.split('@')[0x0] + ':' + _0x1e57f9.mentionedJid.split('@')[0x0] + "\nitem1.X-ABLabel:Mobile\nEND:VCARD"
        }]
      };
      const _0x172756 = {
        'contacts': _0x2fc74d
      };
      const _0x486b68 = {
        'ephemeralExpiration': 0x15180
      };
      _0x95557e.sendMessage(_0x1e57f9.chat, _0x172756, _0x486b68);
      const _0x1b50b9 = {
        'text': '✅',
        'key': _0x1e57f9.key
      };
      const _0x6c9e69 = {
        'react': _0x1b50b9
      };
      await _0x95557e.sendMessage(_0x4fa281, _0x6c9e69);
    } catch (_0x463b56) {
      _0x36ab5b("*Error !!*");
      _0x4a1755(_0x463b56);
    }
  });
  const _0x31ec03 = {
    'pattern': "savecontact",
    'react': '🆗',
    'desc': "To save group contacts",
    'category': "group",
    'use': ".savecontact",
    'filename': __filename
  };
  cmd(_0x31ec03, async (_0x5ccb66, _0x5d5b39, _0x29ffc9, {
    from: _0x457bb4,
    l: _0x5149a2,
    quoted: _0x1836fb,
    body: _0x358daa,
    isCmd: _0x383ab7,
    command: _0x34b38a,
    args: _0x1dde91,
    q: _0xbd9b4d,
    isGroup: _0x8117d9,
    sender: _0x17f700,
    senderNumber: _0x10909a,
    botNumber2: _0x4c7a8b,
    botNumber: _0x3c718d,
    pushname: _0x2978f9,
    isMe: _0x3f6a45,
    isOwner: _0x7024f6,
    groupMetadata: _0x57bc45,
    groupName: _0x328f85,
    participants: _0x407b80,
    groupAdmins: _0x1bda4a,
    isBotAdmins: _0x31621b,
    isAdmins: _0x3c5ca8,
    reply: _0x39a06b
  }) => {
    try {
      if (!_0x8117d9) {
        return _0x39a06b("*This is not a group !*");
      }
      if (!_0x3c5ca8) {
        return _0x39a06b("You are not an admin !");
      }
      let _0x3abe55 = await _0x5ccb66.groupMetadata(_0x29ffc9.chat);
      vcard = '';
      noPort = 0x0;
      for (let _0x1f002f of _0x3abe55.participants) {
        vcard += "BEGIN:VCARD\nVERSION:3.0\nFN:[" + noPort++ + "] +" + _0x1f002f.id.split('@')[0x0] + "\nTEL;type=CELL;type=VOICE;waid=" + _0x1f002f.id.split('@')[0x0] + ':+' + _0x1f002f.id.split('@')[0x0] + "\nEND:VCARD\n";
      }
      _0x39a06b("\nBe patient bro, saving... " + _0x3abe55.participants.length + " contact");
      require('fs').writeFileSync('./contacts.vcf', vcard.trim());
      await sleep(0x7d0);
      const _0x2c06b3 = {
        'ephemeralExpiration': 0x15180,
        'quoted': _0x29ffc9
      };
      _0x5ccb66.sendMessage(_0x5d5b39.chat, {
        'document': require('fs').readFileSync("./contacts.vcf"),
        'mimetype': "text/vcard",
        'fileName': 'Contact.vcf',
        'caption': "\nSucceed\nGroup: *" + _0x3abe55.subject + "*\nContact: *" + _0x3abe55.participants.length + '*'
      }, _0x2c06b3);
      require('fs').unlinkSync('./contacts.vcf');
      const _0x299f3d = {
        'text': '✅',
        'key': _0x5d5b39.key
      };
      const _0x47b3f0 = {
        'react': _0x299f3d
      };
      await _0x5ccb66.sendMessage(_0x457bb4, _0x47b3f0);
    } catch (_0x3c36a6) {
      _0x39a06b("*Error !!*");
      _0x5149a2(_0x3c36a6);
    }
  });
  const _0x298d1f = {
    'pattern': "getcontact",
    'react': '🆗',
    'desc': "To get group contacts",
    'category': "group",
    'use': '.getcontact',
    'filename': __filename
  };
  cmd(_0x298d1f, async (_0x52babd, _0x2db10a, _0x473ed4, {
    from: _0x2c9010,
    l: _0x1ba1fe,
    quoted: _0x145062,
    body: _0x747112,
    isCmd: _0x2e0ded,
    command: _0x374108,
    args: _0x452caf,
    q: _0x136281,
    isGroup: _0x58f466,
    sender: _0x2ee83b,
    senderNumber: _0x2ed1f5,
    botNumber2: _0x1de272,
    botNumber: _0x17d6f1,
    pushname: _0x3d14dd,
    isMe: _0x33cbdb,
    isOwner: _0x19e5dc,
    groupMetadata: _0x58f3ab,
    groupName: _0x1fc25f,
    participants: _0x45cd80,
    groupAdmins: _0x23d97e,
    isBotAdmins: _0x52f6ad,
    isAdmins: _0x11eb91,
    reply: _0xd140de
  }) => {
    try {
      if (!_0x58f466) {
        return _0xd140de("*This is not a group !*");
      }
      if (!_0x11eb91) {
        return _0xd140de("You are not an admin !");
      }
      if (!_0x2db10a.mentionedJid) {
        return _0xd140de("\nUse like this\n Example:.contacttag @tag|name");
      }
      let _0x4ad1d4 = _0x136281.split(" ")[0x1] ? _0x136281.split(" ")[0x1] : "Contact";
      let _0x6f5272 = {
        'displayName': 'Contact',
        'contacts': [{
          'displayName': _0x4ad1d4,
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:;" + _0x4ad1d4 + ";;;\nFN:" + _0x4ad1d4 + "\nitem1.TEL;waid=" + _0x473ed4.mentionedJid.split('@') + ':' + _0x2db10a.mentionedJid[0x0].split('@') + "\nitem1.X-ABLabel:Mobile\nEND:VCARD"
        }]
      };
      const _0x48eab2 = {
        'ephemeralExpiration': 0x15180
      };
      _0x52babd.sendMessage(_0x2db10a.chat, {
        'contacts': _0x6f5272,
        'mentions': _0x45cd80.map(_0x2e1ca0 => _0x2e1ca0.id)
      }, _0x48eab2);
      const _0x54120a = {
        'text': '✅',
        'key': _0x2db10a.key
      };
      const _0x3822b0 = {
        'react': _0x54120a
      };
      await _0x52babd.sendMessage(_0x2c9010, _0x3822b0);
    } catch (_0x56f270) {
      _0xd140de("*Error !!*");
      _0x1ba1fe(_0x56f270);
    }
  });
  const _0x27c0e5 = {
    'pattern': 'contacttag',
    'react': '🆗',
    'desc': "To tag group contacts",
    'category': "group",
    'use': ".contacttag",
    'filename': __filename
  };
  cmd(_0x27c0e5, async (_0xa5aa60, _0x103bf2, _0x525128, {
    from: _0x5e36d1,
    l: _0x442bb6,
    quoted: _0x16f5d4,
    body: _0xf720ed,
    isCmd: _0x4b1737,
    command: _0x1a7325,
    args: _0x53e1bd,
    q: _0x38ed50,
    isGroup: _0x16ac3f,
    sender: _0x429c56,
    senderNumber: _0x56ce76,
    botNumber2: _0x5b11fa,
    botNumber: _0x30ea89,
    pushname: _0x36f408,
    isMe: _0x183a48,
    isOwner: _0x50f1ad,
    groupMetadata: _0x2f4c5f,
    groupName: _0x93506,
    participants: _0x338dd3,
    groupAdmins: _0x472c34,
    isBotAdmins: _0x2a88fb,
    isAdmins: _0x348d22,
    reply: _0x4e9635
  }) => {
    try {
      if (!_0x16ac3f) {
        return _0x4e9635("*This is not a group !*");
      }
      if (!_0x348d22) {
        return _0x4e9635("You are not an admin !");
      }
      const _0x4fa849 = {
        'text': "\nGroup: *" + _0x2f4c5f.subject + "*\nMember: *" + _0x338dd3.length + '*'
      };
      izumibigpp = await _0xa5aa60.sendMessage(_0x103bf2.chat, _0x4fa849, {
        'quoted': _0x103bf2,
        'ephemeralExpiration': 0x15180
      });
      await sleep(0x3e8);
      _0xa5aa60.sendContact(_0x103bf2.chat, _0x338dd3.map(_0x22fac1 => _0x22fac1.id), izumibigpp);
      const _0x79e134 = {
        'text': '✅',
        'key': _0x103bf2.key
      };
      const _0x5eb6f5 = {
        'react': _0x79e134
      };
      await _0xa5aa60.sendMessage(_0x5e36d1, _0x5eb6f5);
    } catch (_0x208f38) {
      _0x4e9635("*Error !!*");
      _0x442bb6(_0x208f38);
    }
  });
  const _0x327d11 = {
    'pattern': "creatgc",
    'react': '🆗',
    'desc': "To create a group",
    'category': "group",
    'use': ".creatgc",
    'filename': __filename
  };
  cmd(_0x327d11, async (_0x2108f8, _0x4493c0, _0x5b8304, {
    from: _0x341f93,
    prefix: _0x31f241,
    l: _0x4853fa,
    quoted: _0x1d4246,
    body: _0x1b4deb,
    isCmd: _0x1d430b,
    command: _0x4315a6,
    args: _0x56a2d4,
    q: _0x586505,
    isGroup: _0x79608e,
    sender: _0x3cad4a,
    senderNumber: _0x5d1991,
    botNumber2: _0x4165c8,
    botNumber: _0x484abe,
    pushname: _0x140046,
    isMe: _0x477397,
    isOwner: _0x773408,
    groupMetadata: _0x11349b,
    groupName: _0x14e63b,
    participants: _0x313d51,
    groupAdmins: _0x545a10,
    isBotAdmins: _0x50bd4b,
    isAdmins: _0x35a9cc,
    reply: _0x11aa9f
  }) => {
    try {
      if (!_0x477397) {
        return await _0x11aa9f("*You are not bot's owner or moderator !*");
      }
      if (!_0x56a2d4.join(" ")) {
        return _0x11aa9f("Use " + (_0x31f241 + _0x4315a6) + " groupname");
      }
      let _0x476b7b = await _0x2108f8.groupCreate(_0x56a2d4.join(" "), []);
      let _0x300319 = await _0x2108f8.groupInviteCode(_0x476b7b.id);
      const _0x336faa = "     「 Create Group 」\n\n▸ Name : " + _0x476b7b.subject + "\n▸ Owner : @" + _0x476b7b.owner.split('@')[0x0] + "\n▸ Creation : " + moment(_0x476b7b.creation * 0x3e8).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss") + "\n\nhttps://chat.whatsapp.com/" + _0x300319;
      const _0x5d91f9 = {
        'quoted': _0x4493c0
      };
      _0x2108f8.sendMessage(_0x5b8304.chat, {
        'text': _0x336faa,
        'mentions': await _0x2108f8.parseMention(_0x336faa)
      }, _0x5d91f9);
      const _0x1dd16f = {
        'text': '✅',
        'key': _0x4493c0.key
      };
      const _0x594e7c = {
        'react': _0x1dd16f
      };
      await _0x2108f8.sendMessage(_0x341f93, _0x594e7c);
    } catch (_0x4a48d7) {
      _0x11aa9f("*Error !!*");
      _0x4853fa(_0x4a48d7);
    }
  });
  const _0x2d7c7c = {
    'pattern': "hidetag",
    'react': '🆗',
    'desc': "It tag all members in group.",
    'category': 'group',
    'use': ".hidetag <hi>",
    'filename': __filename
  };
  cmd(_0x2d7c7c, async (_0xec00e1, _0x1d6b98, _0x506c0e, {
    from: _0x5978f5,
    l: _0x2dc85e,
    quoted: _0x266060,
    body: _0x274548,
    isCmd: _0x5b6929,
    command: _0x5e23ab,
    args: _0x468184,
    q: _0x1dfcc4,
    isGroup: _0x3764c6,
    sender: _0x83dff3,
    senderNumber: _0x3af88a,
    botNumber2: _0x6b1254,
    botNumber: _0x113f01,
    pushname: _0x4a9802,
    isMe: _0x42f57f,
    isOwner: _0x39de52,
    groupMetadata: _0x1d78d1,
    groupName: _0x2d757b,
    participants: _0x334c9e,
    groupAdmins: _0x2c4fe6,
    isBotAdmins: _0x543cdd,
    isAdmins: _0x53c627,
    reply: _0x39521f
  }) => {
    try {
      if (!_0x3764c6) {
        return _0x39521f("*This is not a group !*");
      }
      if (!_0x53c627) {
        return _0x39521f("You are not an admin !");
      }
      if (!_0x1dfcc4) {
        return await _0x39521f("*Give me text to tag !*");
      }
      _0xec00e1.sendMessage(_0x5978f5, {
        'text': _0x1dfcc4 ? _0x1dfcc4 : '',
        'mentions': _0x334c9e.map(_0x443315 => _0x443315.id)
      });
      const _0xc92994 = {
        'text': '✅',
        'key': _0x1d6b98.key
      };
      const _0xd79752 = {
        'react': _0xc92994
      };
      await _0xec00e1.sendMessage(_0x5978f5, _0xd79752);
    } catch (_0x328fa0) {
      _0x39521f("*Sorry !! Im not admin here !!*");
      _0x2dc85e(_0x328fa0);
    }
  });
  const _0x3e64f1 = {
    'pattern': "tagall",
    'react': '🆗',
    'desc': "It tag all members in group.",
    'category': "group",
    'use': ".hidetag <hi>",
    'filename': __filename
  };
  cmd(_0x3e64f1, async (_0x13122e, _0xe912c, _0x3bd19a, {
    from: _0xc07f9c,
    l: _0x25346f,
    quoted: _0x598022,
    body: _0x13da79,
    isCmd: _0x35511c,
    command: _0x404dbc,
    args: _0x293873,
    q: _0x437b8a,
    isGroup: _0x1eeded,
    sender: _0x114f05,
    senderNumber: _0x18e9bc,
    botNumber2: _0x120d77,
    botNumber: _0x5b4d06,
    pushname: _0x2a92ac,
    isMe: _0x5328fc,
    isOwner: _0x29eb71,
    groupMetadata: _0x242b4e,
    groupName: _0x237f24,
    participants: _0x30b42a,
    groupAdmins: _0x49d4b4,
    isBotAdmins: _0x106a41,
    isAdmins: _0xe316fb,
    reply: _0x1c1b57
  }) => {
    try {
      if (!_0x1eeded) {
        return _0x1c1b57("*This is not a group !*");
      }
      if (!_0x106a41) {
        return _0x1c1b57(botAdmin);
      }
      if (!_0xe316fb) {
        return _0x1c1b57("You are not an admin !");
      }
      let _0x168f3d = " *ＧＲＯＵＰ  ＮＯＴＩＦＹ*\n                   \n*𝐌𝐄𝐒𝐒𝐀𝐆𝐄 : " + (_0x437b8a ? _0x437b8a : "blank") + "*\n\n";
      for (let _0x137e50 of _0x30b42a) {
        _0x168f3d += "🔵 @" + _0x137e50.id.split('@')[0x0] + "\n";
      }
      _0x13122e.sendMessage(_0x3bd19a.chat, {
        'text': _0x168f3d,
        'mentions': _0x30b42a.map(_0x1280b3 => _0x1280b3.id)
      });
      const _0x2f371f = {
        'text': '✅',
        'key': _0xe912c.key
      };
      const _0x3943de = {
        'react': _0x2f371f
      };
      await _0x13122e.sendMessage(_0xc07f9c, _0x3943de);
    } catch (_0xe31d9a) {
      _0x1c1b57("Sorry !! Im not admin here");
      _0x25346f(_0xe31d9a);
    }
  });
  const _0x418bf1 = {
    'pattern': 'tagadmin',
    'react': '🆗',
    'desc': "It tag all members in group.",
    'category': "group",
    'use': ".tagadmin"
  };
  function _0xc443fa(_0x1bcb53, _0x117b91, _0xb43f3e, _0x2e53da, _0x1bb254) {
    return _0x18a7(_0x1bcb53 + 0x2d2, _0x2e53da);
  }
  _0x418bf1.filename = __filename;
  cmd(_0x418bf1, async (_0x4f68c3, _0x4e40ff, _0x4e723a, {
    from: _0x551dc0,
    l: _0x121a2a,
    quoted: _0x4759e6,
    body: _0x3f2cfd,
    isCmd: _0x14e49d,
    command: _0x7e8fc1,
    args: _0x51cb8d,
    q: _0x140f39,
    isGroup: _0x15452a,
    sender: _0x27c18b,
    senderNumber: _0x539000,
    botNumber2: _0x36c6a9,
    botNumber: _0x2e697c,
    pushname: _0x26f05d,
    isMe: _0x564ffe,
    isOwner: _0x4c5e5f,
    groupMetadata: _0x99a58c,
    groupName: _0x38d0b6,
    participants: _0x9bb1db,
    groupAdmins: _0x5491e2,
    isBotAdmins: _0x2b87eb,
    isAdmins: _0x50e1e9,
    reply: _0x9bba50
  }) => {
    try {
      if (!_0x15452a) {
        return _0x9bba50("*This is not a group !*");
      }
      let _0x559882 = " _❗ " + _0x38d0b6 + "Admins ❗_\n                  \n*MASSAGE :* " + (_0x140f39 ? _0x140f39 : 'blank') + "\n\n";
      for (let _0x4649ed of _0x5491e2) {
        _0x559882 += "    ";
      }
      _0x4f68c3.sendMessage(_0x551dc0, {
        'text': _0x559882,
        'mentions': _0x5491e2.map(_0xd7efbf => _0xd7efbf.id)
      });
      const _0x41926c = {
        'text': '✅',
        'key': _0x4e40ff.key
      };
      const _0x2b9360 = {
        'react': _0x41926c
      };
      await _0x4f68c3.sendMessage(_0x551dc0, _0x2b9360);
    } catch (_0x27f9f3) {
      _0x9bba50("Sorry !! Im not admin here");
      _0x121a2a(_0x27f9f3);
    }
  });
  const _0x382fed = {
    'pattern': "mute",
    'react': '🆗',
    'desc': "close a group",
    'category': "group",
    'use': ".mute",
    'filename': __filename
  };
  cmd(_0x382fed, async (_0x27450f, _0x86ef13, _0x423d8e, {
    from: _0x2fe0cb,
    prefix: _0xd9fe77,
    l: _0x4f639e,
    quoted: _0x40af6d,
    body: _0x518325,
    isCmd: _0x44a0ab,
    command: _0x3b6e4f,
    args: _0x4c7502,
    q: _0x630595,
    isGroup: _0x4c50bf,
    sender: _0x14fa86,
    senderNumber: _0x5bd477,
    botNumber2: _0x5482dd,
    botNumber: _0x56290e,
    pushname: _0x526615,
    isMe: _0x4f2a23,
    isOwner: _0x125c1f,
    groupMetadata: _0xff428e,
    groupName: _0x1cec45,
    participants: _0x426296,
    groupAdmins: _0x56b679,
    isBotAdmins: _0x3492df,
    isAdmins: _0x4cbdc5,
    reply: _0x40d486
  }) => {
    const _0x3a8d2b = {
      'vyuqY': function (_0x400e97, _0x36ac03) {
        return _0x400e97(_0x36ac03);
      },
      'gYayI': 'announcement',
      'QXQDU': function (_0x4c2fc3, _0x53edf3) {
        return _0x4c2fc3(_0x53edf3);
      },
      'CTPUQ': "🛑 Group muted successfully",
      'PJqti': function (_0x179657, _0x8fc338) {
        return _0x179657(_0x8fc338);
      }
    };
    function _0xde9867(_0x13b59a, _0x5c93d4, _0x34a6da, _0x3164b2, _0x2ab014) {
      return _0x18a7(_0x5c93d4 + 0x155 + 0x14a, _0x13b59a);
    }
    function _0x3e5fda(_0x426789, _0x22ae68, _0x7679e1, _0x29dc23, _0x3fe4c1) {
      return _0x18a7(_0x3fe4c1 - 0x2e6 + 0x14a, _0x426789);
    }
    function _0x9349d2(_0x36b477, _0x596827, _0x4635f1, _0x482271, _0x42402a) {
      return _0x18a7(_0x4635f1 - 0x39 + 0x1a0, _0x42402a);
    }
    function _0x39aae7(_0x4fdaf8, _0x51c779, _0x2c792b, _0x2ceccd, _0x4cac6e) {
      return _0x18a7(_0x4fdaf8 - 0x509 + 0x1a0, _0x2ceccd);
    }
    function _0x14d651(_0x59fe6d, _0x30b273, _0x3185f0, _0x3fe1af, _0x645d85) {
      return _0x18a7(_0x645d85 + 0x406 - 0x22f, _0x59fe6d);
    }
    try {
      if (!_0x4c50bf) {
        return _0x40d486("*This is not a group !*");
      }
      if (!_0x3492df) {
        return _0x40d486(botAdmin);
      }
      if (!_0x4cbdc5) {
        return _0x40d486("You are not an admin !");
      }
      await _0x27450f.groupSettingUpdate(_0x86ef13.chat, "announcement");
      const _0x27611b = await _0x27450f.sendMessage(_0x86ef13.chat.G_MUTE);
      const _0x5aebb2 = {
        'text': '✅',
        'key': _0x86ef13.key
      };
      const _0x18a941 = {
        'react': _0x5aebb2
      };
      await _0x27450f.sendMessage(_0x2fe0cb, _0x18a941);
    } catch (_0x1474bd) {
      _0x40d486("🛑 Group muted successfully");
      _0x4f639e(_0x1474bd);
    }
  });
  const _0x3f7bff = {
    'pattern': 'unmute',
    'react': '🆗',
    'desc': "open a group",
    'category': "group",
    'use': ".unmute",
    'filename': __filename
  };
  cmd(_0x3f7bff, async (_0x5b8132, _0x20d323, _0xeb671, {
    from: _0x6f36af,
    prefix: _0x3862a1,
    l: _0x3645fc,
    quoted: _0x2bff8c,
    body: _0x28dec7,
    isCmd: _0x1866ea,
    command: _0x280b94,
    args: _0x19e26c,
    q: _0x351562,
    isGroup: _0x507273,
    sender: _0xca852,
    senderNumber: _0x3cbd05,
    botNumber2: _0x220153,
    botNumber: _0x426c3f,
    pushname: _0x33e875,
    isMe: _0x135916,
    isOwner: _0x315e88,
    groupMetadata: _0x336ce9,
    groupName: _0x1b62bb,
    participants: _0xb176c2,
    groupAdmins: _0x38e8a2,
    isBotAdmins: _0x5c9245,
    isAdmins: _0x450d0c,
    reply: _0x3a2196
  }) => {
    function _0x595839(_0x491053, _0x11512f, _0x30ca1f, _0x212df6, _0x338f1b) {
      return _0x18a7(_0x338f1b + 0x39e - 0x2b5, _0x30ca1f);
    }
    function _0x7faa8f(_0x3987a8, _0x261f68, _0x3430c6, _0x13be19, _0x42c0ae) {
      return _0x18a7(_0x261f68 + 0x5b - 0x22f, _0x3430c6);
    }
    function _0x14b2df(_0x543829, _0xaf82c0, _0x188a4a, _0x149914, _0x5c366b) {
      return _0x18a7(_0x188a4a + 0x299 - 0x22f, _0x5c366b);
    }
    function _0x5e4ab5(_0x4102a6, _0x1afd4e, _0x2a3cf4, _0x1f3725, _0x4b26ea) {
      return _0x18a7(_0x4102a6 - 0x52f + 0x1a0, _0x4b26ea);
    }
    const _0x4b6fc3 = {
      'HDbjC': function (_0x5cf222, _0x33f2e1) {
        return _0x5cf222(_0x33f2e1);
      },
      'rmdRe': "not_announcement",
      'eFUbC': function (_0x2eaa4d, _0x103031) {
        return _0x2eaa4d(_0x103031);
      },
      'BEuuN': "🛑 Group opend successfully"
    };
    function _0x5ef446(_0x4d02f8, _0x2da8d4, _0x1daa76, _0x5aab0e, _0x50b91d) {
      return _0x18a7(_0x4d02f8 + 0x131 - 0x22f, _0x2da8d4);
    }
    try {
      if (!_0x507273) {
        return _0x3a2196("*This is not a group !*");
      }
      if (!_0x5c9245) {
        return _0x3a2196(botAdmin);
      }
      if (!_0x450d0c) {
        return _0x3a2196("You are not an admin !");
      }
      await _0x5b8132.groupSettingUpdate(_0x20d323.chat, "not_announcement");
      const _0x48aebd = await _0x5b8132.sendMessage(_0x20d323.chat.G_UNMUTE);
      const _0xf9fe91 = {
        'text': '✅',
        'key': _0x20d323.key
      };
      const _0x323d2b = {
        'react': _0xf9fe91
      };
      await _0x5b8132.sendMessage(_0x6f36af, _0x323d2b);
    } catch (_0x1036e5) {
      _0x3a2196("🛑 Group opend successfully");
      _0x3645fc(_0x1036e5);
    }
  });
  const _0x58b6d7 = {
    'pattern': 'kick',
    'react': '🆗',
    'desc': "kick a member",
    'category': "group",
    'use': ".kick",
    'filename': __filename
  };
  cmd(_0x58b6d7, async (_0xc8f32d, _0x226ba8, _0x2b64e6, {
    from: _0x120cb3,
    prefix: _0x31eaa8,
    l: _0x2642bf,
    quoted: _0x4a6793,
    body: _0x5f010f,
    isCmd: _0x29557e,
    command: _0x2f530a,
    args: _0x1decfc,
    q: _0x4a9d67,
    isGroup: _0x2cb4d8,
    sender: _0x48a39b,
    senderNumber: _0x4ab5c5,
    botNumber2: _0x7601d1,
    botNumber: _0x4b5117,
    pushname: _0x4d8554,
    isMe: _0x3cb178,
    isOwner: _0x1f19c1,
    groupMetadata: _0x2d5fa9,
    groupName: _0x57bc5f,
    participants: _0x14780a,
    groupAdmins: _0x1b5ef5,
    isBotAdmins: _0x41dbd8,
    isAdmins: _0x4b7790,
    reply: _0x86afc8
  }) => {
    function _0x3379f4(_0x1c7073, _0x204b00, _0x254530, _0x50baa0, _0x340653) {
      return _0x18a7(_0x204b00 + 0x50 + 0x14a, _0x340653);
    }
    const _0x28b042 = {
      'pAfeG': function (_0x3274a9, _0x485bc8) {
        return _0x3274a9(_0x485bc8);
      },
      'BRWgv': function (_0x500904, _0x20fef0) {
        return _0x500904(_0x20fef0);
      },
      'QCSvi': function (_0x29ec4b, _0x9ccd5f) {
        return _0x29ec4b(_0x9ccd5f);
      },
      'vUeMW': function (_0x268393, _0x590335) {
        return _0x268393 + _0x590335;
      },
      'Tgtqm': "@s.whatsapp.net",
      'QVekR': "remove",
      'GjIsG': "*Sorry !! Im not admin here !!*",
      'QVbgi': function (_0x550b13, _0x149a3f) {
        return _0x550b13(_0x149a3f);
      }
    };
    function _0x4d129f(_0x1aa6d6, _0x3d65f8, _0x4a4c6d, _0x11c4cc, _0x6ac68a) {
      return _0x18a7(_0x3d65f8 - 0x42 + 0x2d2, _0x1aa6d6);
    }
    function _0x1bd402(_0x1374c0, _0x2c23ce, _0x458e89, _0xfd018c, _0x3d3319) {
      return _0x18a7(_0x1374c0 + 0x596 - 0x22f, _0xfd018c);
    }
    function _0x1edab1(_0x4c5c63, _0x4832aa, _0x2138c9, _0x4f5d74, _0x3d6475) {
      return _0x18a7(_0x4832aa - 0x290 + 0x2d2, _0x4f5d74);
    }
    function _0x5b20a5(_0x2ff6d5, _0xa509ba, _0x4a1d41, _0x1f1930, _0x177272) {
      return _0x18a7(_0x4a1d41 + 0x345 - 0x2b5, _0xa509ba);
    }
    try {
      if (!_0x2cb4d8) {
        return _0x86afc8("*This is not a group !*");
      }
      if (!_0x41dbd8) {
        return _0x86afc8(botAdmin);
      }
      if (!_0x4b7790) {
        return _0x86afc8("You are not an admin !");
      }
      let _0x388f15 = _0x226ba8.mentionedJid ? _0x226ba8.mentionedJid : _0x226ba8.quoted ? _0x226ba8.quoted.sender : _0x4a9d67.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
      await _0xc8f32d.groupParticipantsUpdate(_0x226ba8.chat, [_0x388f15], "remove").then(_0x104ced => _0x86afc8(jsonformat(_0x104ced)))["catch"](_0x54ad07 => _0x86afc8(jsonformat(_0x54ad07)));
      const _0x30f249 = {
        'text': '✅',
        'key': _0x226ba8.key
      };
      const _0x4ab195 = {
        'react': _0x30f249
      };
      await _0xc8f32d.sendMessage(_0x120cb3, _0x4ab195);
    } catch (_0x42da98) {
      _0x86afc8("*Sorry !! Im not admin here !!*");
      _0x2642bf(_0x42da98);
    }
  });
  const _0x208d95 = {
    'pattern': "add",
    'react': '🆗',
    'desc': "Add a member",
    'category': "group",
    'use': ".add",
    'filename': __filename
  };
  cmd(_0x208d95, async (_0x203a9d, _0x4de883, _0x194e17, {
    from: _0x2ff6dd,
    prefix: _0x2b0299,
    l: _0x4bd39d,
    quoted: _0x4f7947,
    body: _0x3dee3e,
    isCmd: _0x3cc5bd,
    command: _0x608f7e,
    args: _0xff2f4f,
    q: _0x10ac22,
    isGroup: _0x63c438,
    sender: _0x133278,
    senderNumber: _0x1f218c,
    botNumber2: _0x43a2ff,
    botNumber: _0xe3756e,
    pushname: _0x245e0a,
    isMe: _0x67f406,
    isOwner: _0x7661fd,
    groupMetadata: _0x379be0,
    groupName: _0x1961d5,
    participants: _0x4edb7f,
    groupAdmins: _0x5b2f85,
    isBotAdmins: _0x404973,
    isAdmins: _0x81f3e9,
    reply: _0x1fadb6
  }) => {
    const _0x8eacd6 = {
      'ckUZo': function (_0x2c172a, _0xc5937b) {
        return _0x2c172a(_0xc5937b);
      },
      'GbZjs': function (_0x5a23b5, _0x248b2b) {
        return _0x5a23b5 + _0x248b2b;
      },
      'lFoHb': "@s.whatsapp.net",
      'nDFuH': "add",
      'uZgoc': function (_0x4be6c1, _0x20101f) {
        return _0x4be6c1(_0x20101f);
      },
      'cvTOg': "*Sorry !! Im not admin here !!*"
    };
    function _0x4cbe05(_0x341331, _0x4975ec, _0x1786f1, _0x2ce7e5, _0x471c8a) {
      return _0x18a7(_0x1786f1 - 0x1ee + 0x14a, _0x2ce7e5);
    }
    function _0x502de5(_0x573bb8, _0xd05d3f, _0x58313a, _0x631f42, _0x51eb17) {
      return _0x18a7(_0xd05d3f - 0x358 + 0x1a0, _0x58313a);
    }
    function _0x4a4ac5(_0x4d0ca2, _0xbbd225, _0x113926, _0x51915e, _0x410621) {
      return _0x18a7(_0xbbd225 - 0x8 - 0x22f, _0x410621);
    }
    function _0x1af672(_0x3edf64, _0x3f6e00, _0x413fcf, _0x2a478c, _0x4d03c2) {
      return _0x18a7(_0x413fcf - 0x11 + 0x14a, _0x2a478c);
    }
    function _0x2b8166(_0x1c2f1b, _0x2479db, _0x5b3e2f, _0x52ea7e, _0x32ecc1) {
      return _0x18a7(_0x32ecc1 - 0x1d + 0x14a, _0x2479db);
    }
    try {
      if (!_0x404973) {
        return _0x1fadb6(botAdmin);
      }
      let _0x5c603d = _0x4de883.quoted ? _0x4de883.quoted.sender : _0x10ac22.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
      await _0x203a9d.groupParticipantsUpdate(_0x4de883.chat, [_0x5c603d], "add").then(_0x24c9cc => _0x1fadb6(jsonformat(_0x24c9cc)))["catch"](_0x19f08d => _0x1fadb6(jsonformat(_0x19f08d)));
      const _0x22f025 = {
        'text': '✅',
        'key': _0x4de883.key
      };
      const _0x33f888 = {
        'react': _0x22f025
      };
      await _0x203a9d.sendMessage(_0x2ff6dd, _0x33f888);
    } catch (_0xdc77bc) {
      _0x1fadb6("*Sorry !! Im not admin here !!*");
      _0x4bd39d(_0xdc77bc);
    }
  });
  const _0x30cf20 = {
    'pattern': "promote",
    'react': '🆗',
    'desc': "promote admin to a member",
    'category': "group",
    'use': ".promote",
    'filename': __filename
  };
  cmd(_0x30cf20, async (_0x5881f8, _0x1a4fd5, _0x56653b, {
    from: _0xa9c108,
    prefix: _0x45142c,
    l: _0x4d4bc1,
    quoted: _0x500eb7,
    body: _0x59cba6,
    isCmd: _0x4087e2,
    command: _0x520cb5,
    args: _0x250825,
    q: _0x2fd242,
    isGroup: _0x27e343,
    sender: _0x517263,
    senderNumber: _0x2e4c88,
    botNumber2: _0x3d12b9,
    botNumber: _0x29d121,
    pushname: _0x5abb93,
    isMe: _0x4f5b52,
    isOwner: _0x4b08c9,
    groupMetadata: _0x21562a,
    groupName: _0x2fa1a9,
    participants: _0x294750,
    groupAdmins: _0x554829,
    isBotAdmins: _0x2ab3a6,
    isAdmins: _0x3dff3c,
    reply: _0x3b52b5
  }) => {
    const _0x1a8646 = {
      'QaVSj': function (_0x1040e7, _0x403c9f) {
        return _0x1040e7(_0x403c9f);
      },
      'ZmcEY': function (_0x30bf2b, _0x106819) {
        return _0x30bf2b(_0x106819);
      },
      'Lmcdi': function (_0x28bb2e, _0x21fa9d) {
        return _0x28bb2e(_0x21fa9d);
      },
      'RhVQT': function (_0x506aa2, _0x3f6842) {
        return _0x506aa2 + _0x3f6842;
      },
      'BzZpr': "@s.whatsapp.net",
      'iJvpy': "promote",
      'rivIt': function (_0x15c182, _0x271aa5) {
        return _0x15c182(_0x271aa5);
      },
      'HuHyL': "🛑 You were promoted as admin",
      'jVqCv': "*Sorry !! Im not admin here !!*",
      'zXxzA': function (_0x542ce2, _0x29c31f) {
        return _0x542ce2(_0x29c31f);
      }
    };
    function _0x122469(_0x455c6d, _0x4bacf2, _0x303de4, _0x195fa8, _0x48a368) {
      return _0x18a7(_0x195fa8 - 0x8a - 0x2b5, _0x4bacf2);
    }
    function _0x1bab20(_0x32862b, _0x1e3e8a, _0x3dd723, _0x4b5d0e, _0x615197) {
      return _0x18a7(_0x1e3e8a + 0xce + 0x2d2, _0x3dd723);
    }
    function _0x228cc2(_0xae3941, _0x2f6096, _0x868d65, _0x4fffd7, _0x44ad2b) {
      return _0x18a7(_0x44ad2b + 0x19d + 0x1a0, _0x4fffd7);
    }
    function _0x3de400(_0x4b97cf, _0x441b5a, _0x49c060, _0x3c3eed, _0x4d4b8b) {
      return _0x18a7(_0x3c3eed - 0xe5 - 0x22f, _0x4b97cf);
    }
    function _0x1fa89c(_0x3d476a, _0x20987b, _0x92df8b, _0x1cb8ee, _0x54e1fb) {
      return _0x18a7(_0x3d476a - 0x4af + 0x2d2, _0x92df8b);
    }
    try {
      if (!_0x27e343) {
        return _0x3b52b5("*This is not a group !*");
      }
      if (!_0x2ab3a6) {
        return _0x3b52b5(botAdmin);
      }
      if (!_0x3dff3c) {
        return _0x3b52b5("You are not an admin !");
      }
      let _0x26d561 = _0x1a4fd5.mentionedJid ? _0x1a4fd5.mentionedJid : _0x1a4fd5.quoted ? _0x1a4fd5.quoted.sender : _0x2fd242.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
      await _0x5881f8.groupParticipantsUpdate(_0x1a4fd5.chat, [_0x26d561], "promote").then(_0x408a83 => _0x3b52b5(jsonformat(_0x408a83)))["catch"](_0x5de8a8 => _0x3b52b5(jsonformat(_0x5de8a8)));
      _0x3b52b5("🛑 You were promoted as admin");
      const _0x22c99b = {
        'text': '✅',
        'key': _0x1a4fd5.key
      };
      const _0x4ac91e = {
        'react': _0x22c99b
      };
      await _0x5881f8.sendMessage(_0xa9c108, _0x4ac91e);
    } catch (_0x467c75) {
      _0x3b52b5("*Sorry !! Im not admin here !!*");
      _0x4d4bc1(_0x467c75);
    }
  });
  const _0x32b204 = {
    'pattern': "demote",
    'react': '🆗',
    'desc': "demote admin to a member",
    'category': 'group',
    'use': ".demote",
    'filename': __filename
  };
  cmd(_0x32b204, async (_0xe90244, _0x5a4fdd, _0x3b6d2e, {
    from: _0x17c749,
    prefix: _0x363527,
    l: _0x555984,
    quoted: _0x7eac34,
    body: _0x4d9104,
    isCmd: _0x5e382a,
    command: _0x6fbd76,
    args: _0x1e94bf,
    q: _0x13e2c3,
    isGroup: _0xba5154,
    sender: _0x5737d7,
    senderNumber: _0x54fbd8,
    botNumber2: _0x287a73,
    botNumber: _0x2b4da2,
    pushname: _0x8be5a0,
    isMe: _0x9f8af8,
    isOwner: _0x3cc478,
    groupMetadata: _0x5f0cb8,
    groupName: _0x51d9b1,
    participants: _0x1f5afe,
    groupAdmins: _0x3f42d9,
    isBotAdmins: _0x52352b,
    isAdmins: _0x374963,
    reply: _0x3e3555
  }) => {
    function _0xa953da(_0x32e3d4, _0x5174b3, _0x509588, _0x1c4ee2, _0x1b079a) {
      return _0x18a7(_0x1b079a - 0x327 + 0x14a, _0x1c4ee2);
    }
    const _0xa35c01 = {
      'yLZKl': function (_0x12bc42, _0x347482) {
        return _0x12bc42(_0x347482);
      },
      'RjQag': function (_0x3989af, _0x28f8c5) {
        return _0x3989af(_0x28f8c5);
      },
      'TWGzU': function (_0x228e5e, _0x1432aa) {
        return _0x228e5e + _0x1432aa;
      },
      'GFeDp': "@s.whatsapp.net",
      'raAky': "demote",
      'ojLIw': "🛑 You were demoted as normal member",
      'EzAvo': function (_0x3ba71e, _0x1867d7) {
        return _0x3ba71e(_0x1867d7);
      },
      'qXaHV': "*Sorry !! Im not admin here !!*",
      'VmXQk': function (_0x4fac08, _0x334697) {
        return _0x4fac08(_0x334697);
      }
    };
    function _0x5d41e1(_0x2ffd22, _0x13210b, _0x1e223e, _0x4cce00, _0x5cfc8b) {
      return _0x18a7(_0x13210b - 0x337 + 0x14a, _0x2ffd22);
    }
    function _0x16df14(_0xdec7fa, _0x43dcc1, _0x53e871, _0x111161, _0x5a2ae4) {
      return _0x18a7(_0x43dcc1 + 0x9 + 0x14a, _0x5a2ae4);
    }
    function _0x5c9990(_0x175390, _0xaa785c, _0x2025fd, _0x418b70, _0x255234) {
      return _0x18a7(_0x175390 + 0x2e8 - 0x22f, _0x418b70);
    }
    function _0x166c00(_0x5b3632, _0x3ea1cb, _0x21dd9c, _0x105915, _0x23e875) {
      return _0x18a7(_0x21dd9c - 0x2 + 0x2d2, _0x3ea1cb);
    }
    try {
      if (!_0xba5154) {
        return _0x3e3555("*This is not a group !*");
      }
      if (!_0x52352b) {
        return _0x3e3555(botAdmin);
      }
      if (!_0x374963) {
        return _0x3e3555("You are not an admin !");
      }
      let _0x878c02 = _0x5a4fdd.mentionedJid ? _0x5a4fdd.mentionedJid : _0x5a4fdd.quoted ? _0x5a4fdd.quoted.sender : _0x13e2c3.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
      await _0xe90244.groupParticipantsUpdate(_0x5a4fdd.chat, [_0x878c02], "demote").then(_0x7c4c46 => _0x3e3555(jsonformat(_0x7c4c46)))["catch"](_0x2a2811 => _0x3e3555(jsonformat(_0x2a2811)));
      _0x3e3555("🛑 You were demoted as normal member");
      const _0x155d16 = {
        'text': '✅',
        'key': _0x5a4fdd.key
      };
      const _0x3366b3 = {
        'react': _0x155d16
      };
      await _0xe90244.sendMessage(_0x17c749, _0x3366b3);
    } catch (_0x33f05a) {
      _0x3e3555("*Sorry !! Im not admin here !!*");
      _0x555984(_0x33f05a);
    }
  });
  const _0x221f3e = {
    'pattern': 'setname',
    'react': '🆗',
    'desc': "To change group name",
    'category': 'group',
    'use': ".setname",
    'filename': __filename
  };
  cmd(_0x221f3e, async (_0x58a7bb, _0x3da05e, _0x1684bb, {
    from: _0x5284e0,
    prefix: _0x44c22a,
    l: _0xa7dc7d,
    quoted: _0x1b96e0,
    body: _0x20b8c3,
    isCmd: _0x480257,
    command: _0x215582,
    args: _0x258e4c,
    q: _0x35bdfa,
    isGroup: _0x3bedc4,
    sender: _0x31eafb,
    senderNumber: _0x2aa34a,
    botNumber2: _0x27ccaf,
    botNumber: _0x2b73f0,
    pushname: _0x1861a3,
    isMe: _0x5a7315,
    isOwner: _0xcdc377,
    groupMetadata: _0x4435fe,
    groupName: _0x1adf8b,
    participants: _0x6e6aae,
    groupAdmins: _0x28a4a0,
    isBotAdmins: _0x36e1f8,
    isAdmins: _0x373bd4,
    reply: _0xc38940
  }) => {
    function _0x2e4c73(_0x40d557, _0x26409c, _0x514703, _0x51483c, _0x4da32d) {
      return _0x18a7(_0x4da32d + 0x45a - 0x22f, _0x514703);
    }
    function _0x4c747b(_0x19f26d, _0x1b34e5, _0x5f3d40, _0x45e132, _0x15cfa8) {
      return _0x18a7(_0x15cfa8 + 0x525 - 0x22f, _0x19f26d);
    }
    function _0x2a3ef1(_0x32c744, _0x2cfc3c, _0x533bab, _0x30110b, _0x4fab46) {
      return _0x18a7(_0x533bab + 0x288 - 0x22f, _0x2cfc3c);
    }
    function _0x1f5944(_0x202980, _0x3b3d4e, _0x3780c8, _0x4750e2, _0x4ab305) {
      return _0x18a7(_0x4750e2 + 0x667 - 0x2b5, _0x3b3d4e);
    }
    const _0x596d85 = {
      'lRwRF': "4|2|5|1|0|3",
      'LZcYP': function (_0x5bab0f, _0x1f8dfd) {
        return _0x5bab0f(_0x1f8dfd);
      },
      'mKGvu': "*✅ Group name successfully changed*",
      'bJqHT': function (_0x310a62, _0x18c9f1) {
        return _0x310a62(_0x18c9f1);
      },
      'zhugG': function (_0x33061b, _0x27fb30) {
        return _0x33061b(_0x27fb30);
      },
      'QToIy': function (_0x2c1f86, _0x53bea1) {
        return _0x2c1f86(_0x53bea1);
      },
      'ZagxC': function (_0x5d51ec, _0x35014f) {
        return _0x5d51ec(_0x35014f);
      },
      'iKFjV': "*Sorry !! Im not admin here !!*",
      'iWBPq': function (_0x174517, _0x485680) {
        return _0x174517(_0x485680);
      }
    };
    function _0x4802de(_0x418cbd, _0x17b437, _0x459b5e, _0x3b4d, _0x22ec48) {
      return _0x18a7(_0x418cbd + 0x2d + 0x2d2, _0x17b437);
    }
    try {
      if (!_0x3bedc4) {
        return _0xc38940("*This is not a group !*");
      }
      if (!_0x36e1f8) {
        return _0xc38940(botAdmin);
      }
      if (!_0x373bd4) {
        return _0xc38940("You are not an admin !");
      }
      await _0x58a7bb.groupUpdateSubject(_0x3da05e.chat, _0x35bdfa).then(_0x4feda5 => _0xc38940(mess.success))["catch"](_0x2edead => _0xc38940(jsonformat(_0x2edead)));
      _0xc38940("*✅ Group name successfully changed*");
      const _0x2f0760 = {
        'text': '✅',
        'key': _0x3da05e.key
      };
      const _0x33de8d = {
        'react': _0x2f0760
      };
      await _0x58a7bb.sendMessage(_0x5284e0, _0x33de8d);
    } catch (_0x1016db) {
      _0xc38940("*Sorry !! Im not admin here !!*");
      _0xa7dc7d(_0x1016db);
    }
  });
  const _0x5086b8 = {
    'pattern': "setdesc",
    'react': '🆗',
    'desc': "To change group description",
    'category': 'group',
    'use': ".setdesc",
    'filename': __filename
  };
  cmd(_0x5086b8, async (_0x13efeb, _0x5cc759, _0x510dae, {
    from: _0x59c46e,
    prefix: _0x4c5d02,
    l: _0x1840bf,
    quoted: _0x664e6f,
    body: _0x5f002e,
    isCmd: _0x2f8070,
    command: _0x42ac1c,
    args: _0x2801d5,
    q: _0x5974ee,
    isGroup: _0x109c4a,
    sender: _0x32e001,
    senderNumber: _0x719847,
    botNumber2: _0x170276,
    botNumber: _0x39be04,
    pushname: _0x1633cc,
    isMe: _0x4d8c32,
    isOwner: _0x329043,
    groupMetadata: _0xc89111,
    groupName: _0x4b11db,
    participants: _0x1a3192,
    groupAdmins: _0x87c422,
    isBotAdmins: _0xb90905,
    isAdmins: _0x2a0350,
    reply: _0x33e20d
  }) => {
    function _0x3ceb66(_0x480fe5, _0x41afb7, _0x4a2662, _0x2e8833, _0x1ec28b) {
      return _0x18a7(_0x1ec28b - 0xe6 + 0x1a0, _0x4a2662);
    }
    function _0x5be932(_0x13dd5f, _0x447c64, _0x1bb597, _0x1da2b4, _0x2cb603) {
      return _0x18a7(_0x1da2b4 + 0x21b - 0x2b5, _0x13dd5f);
    }
    const _0x3bc42f = {
      'KxKCW': "4|0|2|5|1|3",
      'bTNtH': function (_0x5b600f, _0x1690bd) {
        return _0x5b600f(_0x1690bd);
      },
      'tmsJg': function (_0x5b8cc7, _0x17034d) {
        return _0x5b8cc7(_0x17034d);
      },
      'MMCNe': "*✅ Group description successfully changed",
      'egPPh': function (_0x559e85, _0x26dea5) {
        return _0x559e85(_0x26dea5);
      },
      'OyhrP': "*Sorry !! Im not admin here !!*"
    };
    function _0x3a71a4(_0x18b390, _0x373394, _0x4209e1, _0x11d7eb, _0x239122) {
      return _0x18a7(_0x11d7eb + 0x1db + 0x14a, _0x18b390);
    }
    function _0x1fbdde(_0x387c26, _0x2af7a5, _0x50e16d, _0x4b8839, _0x391fcc) {
      return _0x18a7(_0x387c26 - 0x9 + 0x2d2, _0x50e16d);
    }
    function _0x4dc2b8(_0x45e030, _0x1662c2, _0x238bc3, _0x24e0ed, _0x11e6e6) {
      return _0x18a7(_0x45e030 - 0x24e + 0x1a0, _0x24e0ed);
    }
    try {
      if (!_0x109c4a) {
        return _0x33e20d("*This is not a group !*");
      }
      if (!_0xb90905) {
        return _0x33e20d(botAdmin);
      }
      if (!_0x2a0350) {
        return _0x33e20d("You are not an admin !");
      }
      await _0x13efeb.groupUpdateDescription(_0x5cc759.chat, _0x5974ee).then(_0x5177d4 => _0x33e20d(mess.success))["catch"](_0x179677 => _0x33e20d(jsonformat(_0x179677)));
      _0x33e20d("*✅ Group description successfully changed");
      const _0x596507 = {
        'text': '✅',
        'key': _0x5cc759.key
      };
      const _0x3b2c13 = {
        'react': _0x596507
      };
      await _0x13efeb.sendMessage(_0x59c46e, _0x3b2c13);
    } catch (_0x250d5a) {
      _0x33e20d("*Sorry !! Im not admin here !!*");
      _0x1840bf(_0x250d5a);
    }
  });
  function _0x6b374(_0x5acd40, _0x5a8a71, _0xd6139d, _0xc619bd, _0x1c166e) {
    return _0x18a7(_0xd6139d - 0x2b5, _0xc619bd);
  }
  const _0x2a5a9c = {
    'pattern': "ephemeral",
    'react': '🆗',
    'desc': "To desappear & appear messages",
    'category': "group",
    'use': ".ephemeral",
    'filename': __filename
  };
  cmd(_0x2a5a9c, async (_0x53ecc1, _0x3ebc55, _0x5679ad, {
    from: _0x581bcc,
    prefix: _0x281dd2,
    l: _0x4d5ab3,
    quoted: _0x446fd7,
    body: _0x2accff,
    isCmd: _0x11361,
    command: _0x435c0a,
    args: _0x52c203,
    q: _0x444d5a,
    isGroup: _0x444b53,
    sender: _0x3c74b0,
    senderNumber: _0x26fa0a,
    botNumber2: _0x5718c5,
    botNumber: _0x27142f,
    pushname: _0x4a4be7,
    isMe: _0x5a1dee,
    isOwner: _0x3ef3f3,
    groupMetadata: _0x11aeb8,
    groupName: _0x2b64f8,
    participants: _0x36fc56,
    groupAdmins: _0x1d97f6,
    isBotAdmins: _0x26c4fe,
    isAdmins: _0x5d8126,
    reply: _0x45e4a
  }) => {
    const _0x200d69 = {
      'rmEjQ': "4|5|2|1|3|0",
      'GvFLS': function (_0x3d5eeb, _0x2e7153) {
        return _0x3d5eeb(_0x2e7153);
      },
      'wPSbd': function (_0x482b23, _0xb0b746) {
        return _0x482b23 === _0xb0b746;
      },
      'xhhXX': "enable",
      'desKC': function (_0xf83f98, _0x3e96ca) {
        return _0xf83f98 === _0x3e96ca;
      },
      'BVSjL': 'disable',
      'ioVio': "*Error !!*",
      'NLdYc': function (_0x4082c4, _0x1439bb) {
        return _0x4082c4(_0x1439bb);
      }
    };
    function _0x486c95(_0x5547be, _0x71ed22, _0x494f63, _0x4db998, _0x3f0f95) {
      return _0x18a7(_0x4db998 - 0x429 + 0x2d2, _0x71ed22);
    }
    function _0x5bcb40(_0x1b32d0, _0x11b9cd, _0x394009, _0x16607b, _0x198b83) {
      return _0x18a7(_0x1b32d0 - 0x14f + 0x1a0, _0x394009);
    }
    function _0x47322f(_0x551521, _0x32cb24, _0x391cd9, _0x28ebb8, _0x442ebe) {
      return _0x18a7(_0x551521 - 0x22a + 0x2d2, _0x442ebe);
    }
    function _0x53c728(_0x46042e, _0x4e90d3, _0x552d76, _0x26671c, _0x3265f5) {
      return _0x18a7(_0x46042e - 0x560 + 0x2d2, _0x552d76);
    }
    function _0x5dc7b6(_0x4f013b, _0x24acc2, _0x1caf39, _0x51d284, _0x299723) {
      return _0x18a7(_0x4f013b + 0x297 + 0x14a, _0x24acc2);
    }
    try {
      if (!_0x444b53) {
        return _0x45e4a("*This is not a group !*");
      }
      if (!_0x26c4fe) {
        return _0x45e4a(botAdmin);
      }
      if (!_0x5d8126) {
        return _0x45e4a("You are not an admin !");
      }
      if (!_0x444d5a) {
        return await _0x45e4a(imgmsg);
      }
      if (_0x52c203[0x0] === "enable") {
        const _0x49c257 = {
          'disappearingMessagesInChat': WA_DEFAULT_EPHEMERAL
        };
        await _0x53ecc1.sendMessage(_0x3ebc55.chat, _0x49c257).then(_0x2cd0e5 => _0x45e4a(jsonformat(_0x2cd0e5)))["catch"](_0x1800e7 => _0x45e4a(jsonformat(_0x1800e7)));
      } else {
        if (_0x52c203[0x0] === "disable") {
          const _0x17454f = {
            'disappearingMessagesInChat': false
          };
          await _0x53ecc1.sendMessage(_0x3ebc55.chat, _0x17454f).then(_0x53f2f9 => _0x45e4a(jsonformat(_0x53f2f9)))["catch"](_0xf7a7aa => _0x45e4a(jsonformat(_0xf7a7aa)));
        }
      }
      const _0x80fca9 = {
        'text': '✅',
        'key': _0x3ebc55.key
      };
      const _0x31c981 = {
        'react': _0x80fca9
      };
      await _0x53ecc1.sendMessage(_0x581bcc, _0x31c981);
    } catch (_0x8c009) {
      _0x45e4a("*Error !!*");
      _0x4d5ab3(_0x8c009);
    }
  });
  const _0x55f421 = {
    'pattern': 'delete',
    'react': '🆗',
    'desc': "To delete message",
    'category': "main",
    'use': ".delete",
    'filename': __filename
  };
  cmd(_0x55f421, async (_0x537ccb, _0x36da6a, _0x673b79, {
    from: _0x58c608,
    prefix: _0xf06f99,
    l: _0x408d4c,
    quoted: _0x218b2e,
    body: _0x281f11,
    isCmd: _0x4c4328,
    command: _0x32bf2c,
    args: _0x1ac2f8,
    q: _0x5df89a,
    isGroup: _0x353c61,
    sender: _0x51afb8,
    senderNumber: _0x5b02ed,
    botNumber2: _0x23c28b,
    botNumber: _0x5ad90d,
    pushname: _0x358013,
    isMe: _0xe99279,
    isOwner: _0x488e9a,
    groupMetadata: _0x67eb8,
    groupName: _0x562e97,
    participants: _0x374a48,
    groupAdmins: _0x239387,
    isBotAdmins: _0x447636,
    isAdmins: _0x54c079,
    reply: _0x2a5297
  }) => {
    function _0x2552bd(_0xe11947, _0x4c9d80, _0x1148df, _0x3a0644, _0x49ad0e) {
      return _0x18a7(_0xe11947 - 0x79 - 0x2b5, _0x1148df);
    }
    function _0x5f3bc8(_0x12414, _0x58f727, _0x317699, _0x29a679, _0x34331d) {
      return _0x18a7(_0x34331d - 0x131 - 0x2b5, _0x12414);
    }
    function _0x4ca949(_0x3eb90b, _0x2c2dea, _0x40cb69, _0x26924c, _0x145680) {
      return _0x18a7(_0x145680 - 0xed - 0x22f, _0x2c2dea);
    }
    function _0x521e68(_0x9ba1b3, _0x90a189, _0x5e5d3e, _0x36edeb, _0x3a38bf) {
      return _0x18a7(_0x3a38bf - 0x266 + 0x2d2, _0x9ba1b3);
    }
    function _0x24d29b(_0x4f1c10, _0x13f4a9, _0xee85f1, _0x55e56c, _0x1c7567) {
      return _0x18a7(_0x4f1c10 - 0x170 + 0x14a, _0x1c7567);
    }
    const _0x201afd = {
      'TwySE': function (_0x15b93b, _0x1a3787) {
        return _0x15b93b(_0x1a3787);
      },
      'GBeZh': "*Error !!*"
    };
    try {
      if (!_0x673b79.quoted) {
        throw false;
      }
      let {
        chat: _0x4f3661,
        fromMe: _0x2dcc07,
        id: _0x3ea715,
        isBaileys: _0x44080e
      } = _0x673b79.quoted;
      _0x537ccb.sendMessage(_0x673b79.chat, {
        'delete': {
          'remoteJid': _0x673b79.chat,
          'fromMe': true,
          'id': _0x673b79.quoted.id,
          'participant': _0x673b79.quoted.sender
        }
      });
      const _0x368301 = {
        'text': '✅',
        'key': _0x36da6a.key
      };
      const _0x221670 = {
        'react': _0x368301
      };
      await _0x537ccb.sendMessage(_0x58c608, _0x221670);
    } catch (_0x3ca303) {
      _0x2a5297("*Error !!*");
      _0x408d4c(_0x3ca303);
    }
  });
  const _0x39b88d = {
    'pattern': "join",
    'react': '🆗',
    'desc': "To join a group",
    'category': "group",
    'use': ".join",
    'filename': __filename
  };
  cmd(_0x39b88d, async (_0x19ae65, _0x3abdd8, _0x5a78ea, {
    from: _0x47411c,
    prefix: _0x3ca843,
    l: _0x34b4fb,
    quoted: _0x5c62ae,
    body: _0x9d8f16,
    isCmd: _0x2dc76a,
    command: _0x19b665,
    args: _0x1c06d2,
    q: _0x297f5b,
    isGroup: _0x1e6621,
    sender: _0x16196e,
    senderNumber: _0x3cb267,
    botNumber2: _0x5e38c9,
    botNumber: _0x2253bb,
    pushname: _0x463095,
    isMe: _0x475585,
    isOwner: _0x526093,
    groupMetadata: _0xef84a0,
    groupName: _0x41f84d,
    participants: _0x539873,
    groupAdmins: _0x272652,
    isBotAdmins: _0xd85090,
    isAdmins: _0x43707b,
    reply: _0x23851f
  }) => {
    function _0x438a24(_0x1a5ce9, _0x2f8354, _0x1cc735, _0x1dad40, _0x5df1a9) {
      return _0x18a7(_0x5df1a9 + 0x1f4 - 0x22f, _0x1cc735);
    }
    function _0x38abb4(_0x38413d, _0x135c75, _0x4b6e8b, _0x23eaab, _0x3d8981) {
      return _0x18a7(_0x4b6e8b - 0x4e9 + 0x2d2, _0x135c75);
    }
    function _0x8522dd(_0x521767, _0x344686, _0x536e1f, _0x40809b, _0x3101df) {
      return _0x18a7(_0x40809b - 0x2cb + 0x1a0, _0x3101df);
    }
    function _0x29cd63(_0x9b9bdd, _0x248b83, _0xa02f5a, _0x27ff61, _0x26fba2) {
      return _0x18a7(_0x26fba2 - 0x3da + 0x14a, _0x9b9bdd);
    }
    const _0x6c4bee = {
      'HfHhW': function (_0x231678, _0x582f61) {
        return _0x231678(_0x582f61);
      },
      'gBnxO': "Enter the Group Link!",
      'bpzXU': function (_0x2354b7, _0x52c947) {
        return _0x2354b7(_0x52c947);
      },
      'iYUIv': "whatsapp.com",
      'KYrJp': "Invalid Link!",
      'CPRNa': function (_0x1a3831) {
        return _0x1a3831();
      },
      'bhADn': "https://chat.whatsapp.com/",
      'yrznN': "*Error !!*"
    };
    function _0x54b6ed(_0x4b516c, _0x1e848f, _0x3ce915, _0x4418f0, _0x5839c0) {
      return _0x18a7(_0x4418f0 - 0x663 + 0x2d2, _0x4b516c);
    }
    try {
      if (!_0x475585) {
        return await _0x23851f("*You are not bot's owner or moderator !*");
      }
      if (!_0x297f5b) {
        throw "Enter the Group Link!";
      }
      if (!isUrl(_0x1c06d2[0x0]) && !_0x1c06d2[0x0].includes("whatsapp.com")) {
        throw "Invalid Link!";
      }
      _0x23851f();
      let _0x137add = _0x1c06d2[0x0].split("https://chat.whatsapp.com/")[0x1];
      await _0x19ae65.groupAcceptInvite(_0x137add).then(_0x43d1ae => _0x23851f(jsonformat(_0x43d1ae)))["catch"](_0x3b4195 => _0x23851f(jsonformat(_0x3b4195)));
      const _0x4565cd = {
        'text': '✅',
        'key': _0x3abdd8.key
      };
      const _0x4dc628 = {
        'react': _0x4565cd
      };
      await _0x19ae65.sendMessage(_0x47411c, _0x4dc628);
    } catch (_0x2ebd40) {
      _0x23851f("*Error !!*");
      _0x34b4fb(_0x2ebd40);
    }
  });
  const _0x288336 = {
    'pattern': "leave",
    'react': '🆗',
    'desc': "To leave a group",
    'category': "group",
    'use': '.leave',
    'filename': __filename
  };
  cmd(_0x288336, async (_0x15e2d3, _0x2ec2d4, _0x129aa9, {
    from: _0x47ba3f,
    prefix: _0x2aa54e,
    l: _0xb10b31,
    quoted: _0x5edd73,
    body: _0x2e2702,
    isCmd: _0x5a33bc,
    command: _0x44493a,
    args: _0x193da4,
    q: _0x175fc0,
    isGroup: _0xc46f3f,
    sender: _0x174605,
    senderNumber: _0x19666b,
    botNumber2: _0x23d4ee,
    botNumber: _0x4b9f42,
    pushname: _0x26ce3a,
    isMe: _0xc6d6d3,
    isOwner: _0x25e41f,
    groupMetadata: _0x45ee2f,
    groupName: _0x219b6b,
    participants: _0x4e0fdb,
    groupAdmins: _0x324352,
    isBotAdmins: _0x4e959b,
    isAdmins: _0x2b9c89,
    reply: _0x273a4e
  }) => {
    function _0x59f742(_0xc0df6, _0x1acba4, _0x413703, _0x110899, _0x131957) {
      return _0x18a7(_0x1acba4 + 0x66a - 0x2b5, _0x110899);
    }
    function _0x5e3e70(_0xd70410, _0x29d3fe, _0x24dd01, _0x3f0229, _0x1e42a9) {
      return _0x18a7(_0x29d3fe - 0x5b1 + 0x2d2, _0xd70410);
    }
    function _0x2bea72(_0x4779de, _0x339dcf, _0x1df979, _0xcae251, _0x4cd63d) {
      return _0x18a7(_0x4779de + 0x49b - 0x22f, _0x339dcf);
    }
    const _0x9b6af2 = {
      'ahmfW': function (_0x405435, _0x559a36) {
        return _0x405435(_0x559a36);
      },
      'caMRN': function (_0x361af2, _0x5e2aad) {
        return _0x361af2(_0x5e2aad);
      },
      'PCpjW': "*Error !!*",
      'kXAoA': function (_0x561c69, _0x50f044) {
        return _0x561c69(_0x50f044);
      }
    };
    function _0x2cec6b(_0x46db0f, _0x132dde, _0x4c1cb2, _0xc6c553, _0x160347) {
      return _0x18a7(_0x132dde + 0x40 - 0x22f, _0x160347);
    }
    function _0x505abb(_0x2aac43, _0x2f4690, _0x50b022, _0x18eb1b, _0x57860a) {
      return _0x18a7(_0x2aac43 - 0x3e6 + 0x1a0, _0x2f4690);
    }
    try {
      if (!_0xc6d6d3) {
        return await _0x273a4e("*You are not bot's owner or moderator !*");
      }
      await _0x15e2d3.groupLeave(_0x2ec2d4.chat).then(_0x413e9b => _0x273a4e(jsonformat(_0x413e9b)))["catch"](_0x386f38 => _0x273a4e(jsonformat(_0x386f38)));
      const _0x51d1e4 = {
        'text': '✅',
        'key': _0x2ec2d4.key
      };
      const _0x587fb7 = {
        'react': _0x51d1e4
      };
      await _0x15e2d3.sendMessage(_0x47ba3f, _0x587fb7);
    } catch (_0x1a2488) {
      _0x273a4e("*Error !!*");
      _0xb10b31(_0x1a2488);
    }
  });
  const _0x380e82 = {
    'pattern': "joindevgc",
    'react': '🆗',
    'desc': "To join dev group",
    'category': 'main',
    'use': ".joindevgc",
    'filename': __filename
  };
  cmd(_0x380e82, async (_0x23e481, _0x5a18c7, _0x9a5a46, {
    from: _0xe5699c,
    prefix: _0x490ae2,
    l: _0x57c18a,
    quoted: _0x5582e2,
    body: _0x42de88,
    isCmd: _0x471d4e,
    command: _0x4657ec,
    args: _0x572ad4,
    q: _0x188f8a,
    isGroup: _0x57e9ba,
    sender: _0x55e4b1,
    senderNumber: _0x1cf039,
    botNumber2: _0x56c362,
    botNumber: _0x18d76d,
    pushname: _0x1c53ce,
    isMe: _0x34331b,
    isOwner: _0xf754b6,
    groupMetadata: _0x527e2c,
    groupName: _0x2e0277,
    participants: _0x2abaeb,
    groupAdmins: _0x5ace19,
    isBotAdmins: _0x57ab34,
    isAdmins: _0x4b08ae,
    reply: _0x166aed
  }) => {
    function _0x5947d5(_0x1fdb22, _0x250f38, _0xe9c1aa, _0xa65bfe, _0x4314da) {
      return _0x18a7(_0x250f38 - 0x3a7 + 0x2d2, _0x1fdb22);
    }
    const _0x462ee8 = {
      'XxCHt': function (_0x15d701, _0x41e36a) {
        return _0x15d701(_0x41e36a);
      },
      'FGsZt': "*You must be a bots owner frist*",
      'txBqw': '120363320416667582',
      'NOJAE': "✅ *You have successfully joined to our support group*",
      'xSwKU': "*You have already joined to our support group*"
    };
    function _0x3f3fad(_0x389f5f, _0x292e20, _0x290978, _0x4ca888, _0x395804) {
      return _0x18a7(_0x395804 - 0x7e + 0x14a, _0x4ca888);
    }
    function _0x560e6d(_0x420cb5, _0x13f1cd, _0xa0ec63, _0x1cca08, _0x1a70e3) {
      return _0x18a7(_0x1cca08 - 0x317 + 0x2d2, _0x1a70e3);
    }
    function _0x7900bb(_0x5f4c91, _0xe3605d, _0x21efdb, _0x1f8777, _0x504879) {
      return _0x18a7(_0x5f4c91 - 0x4fa + 0x1a0, _0x1f8777);
    }
    function _0xf08193(_0x197dac, _0x512c22, _0x5aa04f, _0x1d85f6, _0x47e4ac) {
      return _0x18a7(_0x512c22 + 0x58f - 0x22f, _0x5aa04f);
    }
    try {
      if (!_0xf754b6) {
        return await _0x166aed("*You must be a bots owner frist*");
      }
      await _0x23e481.groupAcceptInvite("120363320416667582");
      const _0x1f9397 = {
        'text': '✅',
        'key': _0x5a18c7.key
      };
      const _0x173c05 = {
        'react': _0x1f9397
      };
      await _0x23e481.sendMessage(_0xe5699c, _0x173c05);
      await _0x166aed("✅ *You have successfully joined to our support group*");
    } catch (_0x525a57) {
      _0x166aed("*You have already joined to our support group*");
      _0x57c18a(_0x525a57);
    }
  });
  const _0x14939e = {
    'pattern': "npm",
    'react': '🆗',
    'desc': "To search npm packages",
    'category': "main",
    'use': '.npm',
    'filename': __filename
  };
  cmd(_0x14939e, async (_0x2ce7bb, _0x34c502, _0x31a854, {
    from: _0x3ad73a,
    prefix: _0x301b01,
    l: _0x500829,
    quoted: _0x15d6f5,
    body: _0x21fa3f,
    isCmd: _0x473f21,
    command: _0x326c34,
    args: _0x449c57,
    q: _0x4d6ef9,
    isGroup: _0x1772f4,
    sender: _0xc58a6a,
    senderNumber: _0x3d1426,
    botNumber2: _0x53964a,
    botNumber: _0xdbaf30,
    pushname: _0x5b745a,
    isMe: _0x5a76bb,
    isOwner: _0x1b2a09,
    groupMetadata: _0x3a6e50,
    groupName: _0x3a3642,
    participants: _0x10a6c0,
    groupAdmins: _0x366c98,
    isBotAdmins: _0x1eb3e7,
    isAdmins: _0x27946f,
    reply: _0x5daec2
  }) => {
    function _0x473c7a(_0x397b6f, _0x291cae, _0x51732d, _0x4ac673, _0x128cba) {
      return _0x18a7(_0x291cae + 0x2b + 0x14a, _0x397b6f);
    }
    function _0x240fc7(_0x2021bc, _0x4a3cce, _0x5007c1, _0x2d36e0, _0x8f80c0) {
      return _0x18a7(_0x2d36e0 - 0x328 + 0x2d2, _0x8f80c0);
    }
    const _0x499e0a = {
      'WQXba': "Please give me package name.📦",
      'DEKbX': function (_0x4f7470, _0x2123d1) {
        return _0x4f7470 && _0x2123d1;
      },
      'RKGkj': "*No Result Found. Sorry!!*",
      'xVkTF': function (_0x1c5055, _0x25f51e) {
        return _0x1c5055(_0x25f51e);
      }
    };
    function _0x367661(_0x50360d, _0x53dd26, _0x1e426a, _0xe83b82, _0x5db6b8) {
      return _0x18a7(_0x50360d - 0x3e4 + 0x14a, _0x1e426a);
    }
    function _0x261fb2(_0x2a56f1, _0x320f15, _0x110475, _0x231009, _0x4131f9) {
      return _0x18a7(_0x110475 - 0x51d + 0x14a, _0x320f15);
    }
    function _0x558531(_0x5dc154, _0x781417, _0x406911, _0x17ac83, _0x102f38) {
      return _0x18a7(_0x406911 + 0x344 - 0x2b5, _0x5dc154);
    }
    try {
      if (!_0x4d6ef9) {
        return _0x34c502.reply("Please give me package name.📦");
      }
      const {
        data: _0x247c74
      } = await axios.get('https://api.npms.io/v2/search?q=' + _0x4d6ef9);
      let _0xb92e90 = _0x247c74.results.map(({
        package: _0xf33e7c
      }) => '*' + _0xf33e7c.name + "* (v" + _0xf33e7c.version + ")\n_" + _0xf33e7c.links.npm + "_\n_" + _0xf33e7c.description + '_').join("\n\n")?.["trim"]();
      if (_0x247c74 && _0xb92e90) {
        await _0x34c502.reply(_0xb92e90);
      } else {
        await _0x34c502.reply("*No Result Found. Sorry!!*");
      }
      const _0x50adf5 = {
        'text': '✅',
        'key': _0x34c502.key
      };
      const _0x46e3bb = {
        'react': _0x50adf5
      };
      await _0x2ce7bb.sendMessage(_0x3ad73a, _0x46e3bb);
    } catch (_0x404dff) {
      await console.error(_0x404dff + "\n\ncommand : npm", _0x404dff);
      _0x500829(_0x404dff);
    }
  });
  const _0x21813a = {
    'on': "body"
  };
  cmd(_0x21813a, async (_0x3662c5, _0x1fec7e, _0x5282af, {
    from: _0x463e7d,
    prefix: _0x1bb992,
    l: _0x1ac1c7,
    quoted: _0x5c56d2,
    body: _0xfae221,
    isCmd: _0x1aa82a,
    command: _0x16dc2c,
    args: _0x1d7770,
    q: _0x10186a,
    isGroup: _0x68e450,
    sender: _0x415b07,
    senderNumber: _0x489cac,
    botNumber2: _0x51cc60,
    botNumber: _0x5b2cd4,
    pushname: _0x4da6d8,
    isMe: _0x306ecd,
    isOwner: _0x38b319,
    groupMetadata: _0x346a3f,
    groupName: _0x34a4ae,
    participants: _0x12950c,
    groupAdmins: _0x3261e8,
    isBotAdmins: _0x1d6b32,
    isAdmins: _0x23ab8f,
    reply: _0x5eda6f
  }) => {
    function _0x65d110(_0x4fbda3, _0x2d2c8f, _0x1da4d9, _0x454fd1, _0x4e467b) {
      return _0x18a7(_0x2d2c8f + 0x189 - 0x2b5, _0x4e467b);
    }
    const _0x4fb58a = {
      'sYmCX': function (_0x5e5447, _0x3dd830) {
        return _0x5e5447 === _0x3dd830;
      }
    };
    function _0x53aa08(_0x1490eb, _0xb84053, _0x3cdc70, _0x13cf10, _0xbdfbd6) {
      return _0x18a7(_0xb84053 + 0x3d5 - 0x2b5, _0x13cf10);
    }
    function _0x126979(_0x4cc46a, _0x46abde, _0x529fda, _0x31b3cf, _0x4f0470) {
      return _0x18a7(_0x4f0470 - 0x262 + 0x2d2, _0x529fda);
    }
    _0x4fb58a.OVcLx = 'true';
    _0x4fb58a.CySkj = function (_0xce82fd, _0x37ffd1) {
      return _0xce82fd * _0x37ffd1;
    };
    function _0x334eaa(_0x3d4220, _0x44bb96, _0x7e779e, _0x531756, _0x46bec5) {
      return _0x18a7(_0x3d4220 - 0x1a4 - 0x22f, _0x44bb96);
    }
    function _0xccb985(_0x46c95d, _0xc32aa8, _0x3f9357, _0x75bab8, _0x16c33c) {
      return _0x18a7(_0x75bab8 + 0x55d - 0x2b5, _0xc32aa8);
    }
    if (config.AUTO_REACT === _0x4fb58a.OVcLx) {
      const _0x2f51d1 = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈', '👋'];
      const _0x2b1b91 = _0x2f51d1[Math.floor(_0x4fb58a.CySkj(Math.random(), _0x2f51d1.length))];
      const _0x2f4b1c = {
        'text': _0x2b1b91,
        'key': _0x1fec7e.key
      };
      const _0x8036f = {
        'react': _0x2f4b1c
      };
      _0x3662c5.sendMessage(_0x463e7d, _0x8036f);
    }
  });
  const _0x202275 = {
    'pattern': "device",
    'react': 'ℹ️',
    'alias': ["getdevice"],
    'desc': "X-BYTE User Checking Tool",
    'category': 'main',
    'use': ".device",
    'filename': __filename
  };
  cmd(_0x202275, async (_0x46bbb1, _0x1ffdf0, _0x4c1d31, {
    from: _0x27d4da,
    l: _0x2066da,
    quoted: _0x4a2b9d,
    body: _0x5d4527,
    isCmd: _0x2cb5e3,
    command: _0x18ae43,
    args: _0x425e3e,
    q: _0x2c1d5b,
    isGroup: _0x4bf35f,
    sender: _0x18590d,
    senderNumber: _0x5e8b4c,
    botNumber2: _0x3f16b1,
    botNumber: _0x4084b0,
    pushname: _0x2e6717,
    isMe: _0x46e12c,
    isOwner: _0x43975a,
    groupMetadata: _0x426926,
    groupName: _0x57cd14,
    participants: _0x29d6f1,
    groupAdmins: _0x47efe3,
    isBotAdmins: _0x115ee6,
    isCreator: _0x10d7b2,
    isDev: _0x318c31,
    isAdmins: _0x274c0a,
    reply: _0x1db7d9
  }) => {
    function _0x2c34c1(_0x31862e, _0x174ea1, _0x36ab7f, _0xdec926, _0x244e62) {
      return _0x18a7(_0x174ea1 + 0x331 - 0x2b5, _0x244e62);
    }
    const _0x20a53c = {
      'TZflT': function (_0x2cc305, _0x44f808) {
        return _0x2cc305(_0x44f808);
      },
      'HkDwR': "ℹ️ *Sorry ! This is Owner only Command..*",
      'vxbhP': "ℹ️ *Please reply a Message...*",
      'vnodc': '```',
      'FZXMk': "3EB",
      'jeQhg': "BAE",
      'PwNyT': 'QUEENAMDI',
      'amdIT': "CYBER2",
      'ZXLmc': "ZEROTWO",
      'VbFsR': "QUEENELISA",
      'WXdNE': function (_0x459a1c, _0x4a3660) {
        return _0x459a1c + _0x4a3660;
      },
      'nigov': "⛔ *Error accurated !!*\n\n"
    };
    function _0x41a64e(_0x2f8983, _0x176db0, _0x2fa57d, _0x541918, _0xea6881) {
      return _0x18a7(_0x2f8983 - 0x2b0 + 0x14a, _0xea6881);
    }
    function _0x5bdc69(_0x4af05b, _0x461d25, _0x59dfff, _0x18a0e5, _0x40ebcc) {
      return _0x18a7(_0x18a0e5 + 0x582 - 0x22f, _0x59dfff);
    }
    function _0x223df9(_0x5698fd, _0x2da992, _0x3fb00f, _0x585be7, _0x51d41b) {
      return _0x18a7(_0x3fb00f - 0x41a + 0x14a, _0x2da992);
    }
    function _0x205287(_0x2cb101, _0xdf47b3, _0xd8ddbf, _0x52ff4d, _0x5a8e4e) {
      return _0x18a7(_0x52ff4d - 0x20 + 0x1a0, _0x5a8e4e);
    }
    try {
      if (!_0x46e12c) {
        return _0x1db7d9("ℹ️ *Sorry ! This is Owner only Command..*");
      }
      if (!_0x4c1d31.quoted) {
        return _0x1db7d9("ℹ️ *Please reply a Message...*");
      }
      if (_0x4c1d31.quoted.id.startsWith('3A')) {
        var _0x5ec44f = "```";
        _0x46bbb1.sendMessage(_0x27d4da, {
          'text': '@' + _0x4c1d31.quoted.sender.split('@')[0x0] + "  *Is Using:* " + _0x5ec44f + "Ios WhatsApp(i Phone)" + _0x5ec44f,
          'mentions': [_0x4c1d31.quoted.sender]
        });
      } else {
        if (_0x4c1d31.quoted.id.startsWith("3EB")) {
          var _0x5ec44f = "```";
          _0x46bbb1.sendMessage(_0x27d4da, {
            'text': '@' + _0x4c1d31.quoted.sender.split('@')[0x0] + "  *Is Using:* " + _0x5ec44f + "Web WhatsApp" + _0x5ec44f,
            'mentions': [_0x4c1d31.quoted.sender]
          });
        } else {
          if (_0x4c1d31.quoted.id.startsWith("BAE")) {
            var _0x5ec44f = '```';
            _0x46bbb1.sendMessage(_0x27d4da, {
              'text': '@' + _0x4c1d31.quoted.sender.split('@')[0x0] + "  *Is Using:* " + _0x5ec44f + "Web WhatsApp(Wiskeysockets/Baileys-WA-Web-Api)" + _0x5ec44f,
              'mentions': [_0x4c1d31.quoted.sender]
            });
          } else {
            if (_0x4c1d31.quoted.id.startsWith("QUEENAMDI")) {
              var _0x5ec44f = "```";
              _0x46bbb1.sendMessage(_0x27d4da, {
                'text': '@' + _0x4c1d31.quoted.sender.split('@')[0x0] + "  *Is Using:* " + _0x5ec44f + "Web WhatsApp(QueenAmdi-Wa-Bot)" + _0x5ec44f,
                'mentions': [_0x4c1d31.quoted.sender]
              });
            } else {
              if (_0x4c1d31.quoted.id.startsWith("CYBER2")) {
                var _0x5ec44f = "```";
                _0x46bbb1.sendMessage(_0x27d4da, {
                  'text': '@' + _0x4c1d31.quoted.sender.split('@')[0x0] + "  *Is Using:* " + _0x5ec44f + "Web WhatsApp(Cyber-X-Wa-Bot)" + _0x5ec44f,
                  'mentions': [_0x4c1d31.quoted.sender]
                });
              } else {
                if (_0x4c1d31.quoted.id.startsWith("ZEROTWO")) {
                  var _0x5ec44f = "```";
                  _0x46bbb1.sendMessage(_0x27d4da, {
                    'text': '@' + _0x4c1d31.quoted.sender.split('@')[0x0] + "  *Is Using:* " + _0x5ec44f + "Web WhatsApp(ZeroTwo-Md-Wa-Bot)" + _0x5ec44f,
                    'mentions': [_0x4c1d31.quoted.sender]
                  });
                } else {
                  if (_0x4c1d31.quoted.id.startsWith("QUEENELISA")) {
                    var _0x5ec44f = "```";
                    _0x46bbb1.sendMessage(_0x27d4da, {
                      'text': '@' + _0x4c1d31.quoted.sender.split('@')[0x0] + "  *Is Using:* " + _0x5ec44f + "Web WhatsApp (QueenElisa-Wa-Bot)" + _0x5ec44f,
                      'mentions': [_0x4c1d31.quoted.sender]
                    });
                  } else {
                    var _0x5ec44f = '```';
                    _0x46bbb1.sendMessage(_0x27d4da, {
                      'text': '@' + _0x4c1d31.quoted.sender.split('@')[0x0] + "  *Is Using:* " + _0x5ec44f + "Android WhatsApp " + _0x5ec44f,
                      'mentions': [_0x4c1d31.quoted.sender]
                    });
                  }
                }
              }
            }
          }
        }
      }
    } catch (_0x3ae9bd) {
      _0x1db7d9("⛔ *Error accurated !!*\n\n" + _0x3ae9bd);
      _0x2066da(_0x3ae9bd);
    }
  });
  const _0x592d04 = {
    'pattern': 'id',
    'react': '📚',
    'alias': ["getdeviceid"],
    'desc': "X-BYTE User Checking Tool",
    'category': "main",
    'use': ".id",
    'filename': __filename
  };
  cmd(_0x592d04, async (_0x11a873, _0x24c40f, _0x28bf55, {
    from: _0x142bf6,
    l: _0x21ca08,
    quoted: _0x5e294d,
    body: _0x47c783,
    isCmd: _0x24cd38,
    command: _0x1093e1,
    args: _0x16e20d,
    q: _0x3c8d19,
    isGroup: _0x243b5a,
    sender: _0x1fca7c,
    senderNumber: _0x49a6c9,
    botNumber2: _0x1ac659,
    botNumber: _0x6a264e,
    pushname: _0x32d033,
    isMe: _0x4f3ad1,
    isOwner: _0x6559fc,
    groupMetadata: _0x3153be,
    groupName: _0x256832,
    participants: _0x8dbc62,
    groupAdmins: _0x4a0892,
    isBotAdmins: _0x2942d5,
    isCreator: _0x4ccd1f,
    isDev: _0x536cb1,
    isAdmins: _0x32299c,
    reply: _0x62cfed
  }) => {
    function _0x1f71f6(_0x1acd3d, _0x21d209, _0x1939b9, _0x5de765, _0x3383b8) {
      return _0x18a7(_0x1939b9 - 0x507 + 0x14a, _0x21d209);
    }
    function _0x5ad217(_0x3411bf, _0x2156fa, _0x5e1b51, _0x19f1a7, _0x717250) {
      return _0x18a7(_0x19f1a7 + 0x487 - 0x2b5, _0x3411bf);
    }
    function _0xbb88ac(_0x5430b9, _0x24e322, _0x329de9, _0x4affec, _0x48cbe0) {
      return _0x18a7(_0x48cbe0 - 0x33e + 0x1a0, _0x329de9);
    }
    const _0x55f695 = {
      'ygOLo': function (_0x55170d, _0x4dd458) {
        return _0x55170d(_0x4dd458);
      },
      'HQmKS': "🚫 *You must be a Moderator frist*",
      'vGlOH': function (_0xae6dae, _0x339244) {
        return _0xae6dae(_0x339244);
      },
      'TOZbC': "ℹ️ *Please reply a Message...*",
      'CiUJn': 'cta_copy',
      'CTUwH': "Copy Id",
      'hJXPq': 'copy_email',
      'ViCKO': 'https://telegra.ph/file/2bff9cb5c82eccfdeb7af.jpg',
      'GaTmD': "> Click Copy id in the below",
      'jJsRA': function (_0x39f59a, _0xec28ea) {
        return _0x39f59a + _0xec28ea;
      },
      'HiqgC': "⛔ *Error accurated !!*\n\n",
      'vXXJe': function (_0x138883, _0x1a6092) {
        return _0x138883(_0x1a6092);
      }
    };
    function _0x3d2b20(_0xf3c4d7, _0x148efa, _0x536f1a, _0x58f848, _0x430787) {
      return _0x18a7(_0xf3c4d7 + 0x199 + 0x14a, _0x430787);
    }
    function _0x53f5a6(_0x2aa622, _0xb05397, _0x1737c8, _0x38a362, _0x88c748) {
      return _0x18a7(_0x1737c8 + 0x501 - 0x22f, _0x88c748);
    }
    try {
      if (!_0x4f3ad1) {
        return _0x62cfed("🚫 *You must be a Moderator frist*");
      }
      if (!_0x28bf55.quoted) {
        return _0x62cfed("ℹ️ *Please reply a Message...*");
      }
      const _0xa70282 = _0x28bf55.quoted.id;
      const _0x33a765 = [{
        'name': "cta_copy",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Copy Id",
          'id': "copy_email",
          'copy_code': _0xa70282
        })
      }];
      const _0x3ebf41 = {
        'image': "https://telegra.ph/file/2bff9cb5c82eccfdeb7af.jpg",
        'header': '',
        'footer': "> Click Copy id in the below",
        'body': _0xa70282
      };
      return await _0x11a873.sendButtonMessage(_0x142bf6, _0x33a765, _0x28bf55, _0x3ebf41);
    } catch (_0x45e581) {
      _0x62cfed("⛔ *Error accurated !!*\n\n" + _0x45e581);
      _0x21ca08(_0x45e581);
    }
  });
  const _0x302557 = {
    'pattern': "restart",
    'react': '♻️',
    'desc': "restart bot",
    'category': "main",
    'use': ".restart",
    'filename': __filename
  };
  cmd(_0x302557, async (_0x3f89fb, _0x430249, _0x3cbd0d, {
    from: _0x10a02a,
    l: _0xbc14d1,
    quoted: _0xfcce70,
    body: _0x4e8217,
    isCmd: _0x5c76c3,
    isCreator: _0x6279b,
    isDev: _0x5ecdf4,
    command: _0x24389d,
    args: _0x2dfb51,
    q: _0x1681e1,
    isGroup: _0x11ae1d,
    sender: _0x31a123,
    senderNumber: _0x477981,
    botNumber2: _0x2dacec,
    botNumber: _0x461142,
    pushname: _0x4a4e05,
    isMe: _0x11644c,
    isOwner: _0x19fea5,
    groupMetadata: _0x48b996,
    groupName: _0x3c176f,
    participants: _0x4a6093,
    isItzcp: _0x5215a5,
    groupAdmins: _0x1c9897,
    isBotAdmins: _0x5d1e51,
    isAdmins: _0x5bdfa8,
    reply: _0x5c54bf,
    react: _0x1cd177
  }) => {
    function _0x1aafad(_0x1affc0, _0x1b8a18, _0x361241, _0x51300, _0x4c36d5) {
      return _0x18a7(_0x4c36d5 + 0x1e5 + 0x14a, _0x1affc0);
    }
    function _0x3c6d25(_0x3d02f7, _0x4e70a9, _0x55c664, _0x28e385, _0x416b05) {
      return _0x18a7(_0x3d02f7 - 0x492 + 0x1a0, _0x4e70a9);
    }
    function _0x5d9050(_0x5e04b7, _0x44a745, _0x1c7f1c, _0x523bee, _0xbd24f9) {
      return _0x18a7(_0x1c7f1c - 0x40f + 0x1a0, _0x44a745);
    }
    function _0xa84675(_0x54208e, _0x5b8a3a, _0x218882, _0x10a3c9, _0x37bac6) {
      return _0x18a7(_0x218882 - 0x530 + 0x2d2, _0x54208e);
    }
    function _0x5391be(_0x2e82d5, _0x5bd1dd, _0x574370, _0x17e684, _0x3fc8c5) {
      return _0x18a7(_0x2e82d5 + 0x3ca - 0x22f, _0x17e684);
    }
    const _0x32beb1 = {
      'vCfth': function (_0xf5341c, _0x243057) {
        return _0xf5341c(_0x243057);
      },
      'lCXsB': "🚫 *You must be a Moderator frist*",
      'eTwwA': "*Restarting the Bot....*",
      'JqRKH': function (_0x5d981b, _0x3bc1a0) {
        return _0x5d981b + _0x3bc1a0;
      },
      'JyuTB': "/apps/",
      'AMdWl': "/dynos",
      'jtNhH': "*Error !!*",
      'VvifE': function (_0x402bff, _0x4dd289) {
        return _0x402bff(_0x4dd289);
      }
    };
    try {
      if (!_0x11644c) {
        return _0x5c54bf("🚫 *You must be a Moderator frist*");
      }
      const _0xf8f7e9 = {
        'text': "*Restarting the Bot....*"
      };
      const _0x2fadff = {
        'quoted': _0x430249
      };
      await _0x3f89fb.sendMessage(_0x10a02a, _0xf8f7e9, _0x2fadff);
      let _0x2f2735 = '/apps/' + config.HEROKU_APP_NAME;
      await heroku["delete"](_0x2f2735 + "/dynos");
    } catch (_0x2e1860) {
      _0x5c54bf("*Error !!*");
      _0xbc14d1(_0x2e1860);
    }
  });
  const _0x50f716 = {
    'pattern': "shutdown",
    'react': '⚙️',
    'desc': "To shutdown the bot",
    'category': "main",
    'use': ".shutdown",
    'filename': __filename
  };
  cmd(_0x50f716, async (_0x22517b, _0x51532b, _0x35468a, {
    from: _0x16aec1,
    prefix: _0x5c0a3a,
    l: _0x4640e4,
    quoted: _0x3dd8a7,
    body: _0x2b3929,
    isCmd: _0x337f1b,
    command: _0x49a375,
    isCreator: _0x7c4620,
    isDev: _0x4bda65,
    args: _0x3c7f21,
    q: _0x5b6959,
    isGroup: _0x38cf40,
    sender: _0x2e22e9,
    senderNumber: _0x2d84ba,
    botNumber2: _0x1ba0d3,
    botNumber: _0x5c2cea,
    pushname: _0x299555,
    isMe: _0x1d2577,
    isOwner: _0xa224f6,
    groupMetadata: _0x18f16c,
    groupName: _0x23a5af,
    participants: _0x50656a,
    groupAdmins: _0x32f122,
    isBotAdmins: _0x3c063c,
    isAdmins: _0x48ccbf,
    reply: _0x3fd50d
  }) => {
    function _0x1ca22a(_0x11274c, _0x152dc3, _0x43fc19, _0x4230c8, _0x2f8a65) {
      return _0x18a7(_0x2f8a65 + 0x254 + 0x14a, _0x152dc3);
    }
    function _0x4dc655(_0x558cdc, _0x27326b, _0x123de0, _0x50140c, _0x603243) {
      return _0x18a7(_0x603243 + 0x3f0 - 0x22f, _0x50140c);
    }
    function _0x58cea1(_0x14542f, _0x59e94c, _0x418336, _0x59af43, _0x274784) {
      return _0x18a7(_0x418336 - 0x652 + 0x2d2, _0x59e94c);
    }
    const _0x45d865 = {
      'ItXRn': function (_0x3ec366, _0x3cd99d) {
        return _0x3ec366(_0x3cd99d);
      },
      'zQISj': "🚫 *You must be a Moderator frist*",
      'cAnAr': "*Shutting Down the Bot....*",
      'bkncG': function (_0x17d0d1, _0x38ce8e) {
        return _0x17d0d1 + _0x38ce8e;
      },
      'rNfDb': "/apps/",
      'gExUF': "/formation",
      'yJykJ': function (_0x4fde90, _0x41814a) {
        return _0x4fde90 + _0x41814a;
      },
      'cNzaT': "/formation/",
      'XLatR': function (_0x1a3ae8, _0x53673d) {
        return _0x1a3ae8(_0x53673d);
      },
      'WxMWK': "*🛑 This is an owner command...*"
    };
    function _0x33e3e6(_0x44b34b, _0x8cdd96, _0x2bb9eb, _0x47ea12, _0x411195) {
      return _0x18a7(_0x411195 + 0x102 - 0x2b5, _0x2bb9eb);
    }
    function _0x1ea3d7(_0x114d41, _0x2f15e6, _0x22b407, _0x176ac2, _0x19020c) {
      return _0x18a7(_0x22b407 + 0x63 + 0x2d2, _0x176ac2);
    }
    try {
      if (!_0x1d2577) {
        return _0x3fd50d("🚫 *You must be a Moderator frist*");
      }
      const _0x4d99ed = {
        'text': "*Shutting Down the Bot....*"
      };
      const _0x334729 = {
        'quoted': _0x51532b
      };
      await _0x22517b.sendMessage(_0x16aec1, _0x4d99ed, _0x334729);
      let _0x4e2afd = '/apps/' + config.HEROKU_APP_NAME;
      const _0x1c3db6 = await heroku.get(_0x4e2afd + "/formation");
      forID = _0x1c3db6[0x0].id;
      const _0x109ad0 = {
        'quantity': 0x0
      };
      const _0x497bf6 = {
        'body': _0x109ad0
      };
      await heroku.patch(_0x4e2afd + "/formation/" + forID, _0x497bf6);
      const _0x3f5227 = {
        'text': '✅',
        'key': _0x51532b.key
      };
      const _0x2889cd = {
        'react': _0x3f5227
      };
      await _0x22517b.sendMessage(_0x16aec1, _0x2889cd);
    } catch (_0x4afcdd) {
      _0x3fd50d("*🛑 This is an owner command...*");
      _0x4640e4(_0x4afcdd);
    }
  });

  const _0x152b98 = {
    'pattern': "bug",
    'react': '⚙️',
    'desc': "Contact to bot owner",
    'category': "main",
    'use': ".request",
    'filename': __filename
  };
  cmd(_0x152b98, async (_0x56fa37, _0x20a6d1, _0xba43db, {
    from: _0x558d07,
    l: _0xa551a5,
    prefix: _0x5397bb,
    quoted: _0x1cd6d0,
    body: _0x254692,
    isCmd: _0x57ea01,
    command: _0x3fc115,
    args: _0x5b256b,
    q: _0x265d62,
    isGroup: _0x22674e,
    sender: _0x438933,
    senderNumber: _0x1c5100,
    botNumber2: _0x8e5fce,
    botNumber: _0x2e9ad4,
    pushname: _0x45d9e5,
    isMe: _0x2e5d2a,
    isOwner: _0x2fea13,
    groupMetadata: _0x4079bd,
    groupName: _0xcbddaf,
    participants: _0x2a7d10,
    groupAdmins: _0x5c2272,
    isBotAdmins: _0x4a7bbc,
    isAdmins: _0x58a4ff,
    reply: _0x5823f6
  }) => {
    function _0x6209ab(_0x36d926, _0x30e10e, _0x5852d4, _0x2c7d87, _0x2045e1) {
      return _0x18a7(_0x2045e1 + 0x3fd - 0x22f, _0x2c7d87);
    }
    function _0xda529d(_0x379dc0, _0x414ffe, _0x3181f3, _0x32a78a, _0x462723) {
      return _0x18a7(_0x414ffe + 0xdc + 0x1a0, _0x462723);
    }
    function _0x679cdc(_0x58641a, _0x132089, _0x147285, _0x3f5d55, _0x533e01) {
      return _0x18a7(_0x533e01 - 0x36b + 0x2d2, _0x3f5d55);
    }
    function _0x1814b9(_0x340028, _0x4bad76, _0xc98489, _0x5de548, _0x47de88) {
      return _0x18a7(_0x5de548 + 0x3a7 - 0x2b5, _0xc98489);
    }
    function _0x141f8e(_0x1f9907, _0x149be1, _0x2758e6, _0x1e121b, _0x131e31) {
      return _0x18a7(_0x149be1 - 0x7a + 0x1a0, _0x131e31);
    }
    const _0x24a8b4 = {
      'onanB': "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
      'sqtuH': "《 ████▒▒▒▒▒▒▒▒》30%",
      'khmtZ': "《 ███████▒▒▒▒▒》50%",
      'nnMQv': "《 ██████████▒▒》80%",
      'rXpmh': "《 ████████████》100%",
      'tNPgB': "𝚁𝙴𝙿𝙾𝚁𝚃 𝚂𝙴𝙽𝙳 𝚃𝙾 𝚃𝙷𝙴 𝙾𝚆𝙽𝙴𝚁 🖥️...",
      'OZGjv': "ꜱᴇɴᴅɪɴɢ...",
      'QpZWn': function (_0x2c282d, _0x4230dc) {
        return _0x2c282d < _0x4230dc;
      },
      'akYFG': "blank",
      'YliMD': function (_0x1748a9, _0x1d126a) {
        return _0x1748a9(_0x1d126a);
      },
      // 'yuTHI': "🛑 This is an owner command...",
      'DZHqa': function (_0x32f5bd, _0xa195c7) {
        return _0x32f5bd(_0xa195c7);
      }
    };
    try {
      let _0x47f781 = "Enter The Bug Example\n\n" + _0x3fc115 + " < YOUR REPORT MASSAGE > ";
      var _0x3ed9a5 = ["《 █▒▒▒▒▒▒▒▒▒▒▒》10%", "《 ████▒▒▒▒▒▒▒▒》30%", "《 ███████▒▒▒▒▒》50%", "《 ██████████▒▒》80%", "《 ████████████》100%", "𝚁𝙴𝙿𝙾𝚁𝚃 𝚂𝙴𝙽𝙳 𝚃𝙾 𝚃𝙷𝙴 𝙾𝚆𝙽𝙴𝚁 🖥️..."];
      const _0xa1f557 = {
        'text': "ꜱᴇɴᴅɪɴɢ..."
      };
      let {
        key: _0x2e6375
      } = await _0x56fa37.sendMessage(_0x558d07, _0xa1f557);
      for (let _0x5c0c0c = 0x0; _0x5c0c0c < _0x3ed9a5.length; _0x5c0c0c++) {
        const _0x241a83 = {
          'text': _0x3ed9a5[_0x5c0c0c],
          'edit': _0x2e6375
        };
        await _0x56fa37.sendMessage(_0x558d07, _0x241a83);
      }
      await _0x56fa37.sendMessage('923072380380@s.whatsapp.net', {
        'text': "*Bug Report From:* wa.me/" + _0x20a6d1.sender.split('@')[0x0] + "\n\n*Bug Report*\n" + (_0x265d62 ? _0x265d62 : "blank")
      });
      const _0x3fcc08 = await _0x56fa37.sendMessage("*『 𝙱𝚄𝙶 𝚁𝙴𝙿𝙾𝚁𝚃 』*");
      const _0x403997 = {
        'text': '✅',
        'key': _0x20a6d1.key
      };
      const _0x2c9c80 = {
        'react': _0x403997
      };
      await _0x56fa37.sendMessage(_0x558d07, _0x2c9c80);
    } catch (_0x523374) {
      // _0x5823f6("🛑 This is an owner command...");
      _0xa551a5(_0x523374);
    }
  });
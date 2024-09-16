const config = require("../settings");
const {
  cmd,
  commands
} = require("../lib/command");
var {
  get_set,
  input_set
} = require("../lib/set_db");

const os = require('os');
var request = require("request");
var cheerio = require("cheerio");

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
  getsize,
  jsonformat
} = require("../lib/functions");
const dl2 = require("inrl-dl");
function _0x4a6c55(_0xe677f0, _0x29d106, _0x2ed56b, _0x306725) {
  return _0x3662(_0x2ed56b - 0x3d9, _0xe677f0);
}
let soundcloud = async _0x36886b => {
  return new Promise((_0x512697, _0x51aadc) => {
    const _0x1aad02 = {
      value: _0x36886b,
      "2311a6d881b099dc3820600739d52e64a1e6dcfe55097b5c7c649088c4e50c37": "710c08f2ba36bd969d1cbc68f59797421fcf90ca7cd398f78d67dfd8c3e554e3"
    };
    const _0x1d4791 = {
      method: 'POST'
    };
    _0x1d4791.url = "https://www.klickaud.co/download.php";
    _0x1d4791.headers = {};
    _0x1d4791.formData = _0x1aad02;
    _0x1d4791.headers["content-type"] = "application/x-www-form-urlencoded";
    request(_0x1d4791, async function (_0x1b1f99, _0xeaf1a4, _0x3dc1a9) {
      if (_0x1b1f99) {
        throw new Error(_0x1b1f99);
      }
      const _0x48426b = cheerio.load(_0x3dc1a9);
      _0x512697({
        'judul': _0x48426b("#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(2)").text(),
        'download_count': _0x48426b("#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(3)").text(),
        'thumb': _0x48426b("#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(1) > img").attr('src'),
        'link': _0x48426b("#dlMP3").attr("onclick").split("downloadFile('")[1].split("',")[0]
      });
    });
  });
};
let axios = require("axios");
async function ssearch(_0x2a1f1a) {
  const _0x5ecbba = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
  };
  const _0x35daec = {
    headers: _0x5ecbba
  };
  let _0x461edf = await axios.get("https://m.soundcloud.com/search?q=" + encodeURIComponent(_0x2a1f1a), _0x35daec);
  let _0x256fbc = cheerio.load(_0x461edf.data);
  let _0x2b73e7 = [];
  _0x256fbc("div > ul > li > div").each(function (_0x3bab26, _0xa9dd7c) {
    let _0x16b286 = _0x256fbc(_0xa9dd7c).find('a').attr('aria-label');
    let _0x474864 = "https://m.soundcloud.com" + _0x256fbc(_0xa9dd7c).find('a').attr("href");
    let _0x2b5cdf = _0x256fbc(_0xa9dd7c).find("a > div > div > div > picture > img").attr("src");
    let _0x283ac4 = _0x256fbc(_0xa9dd7c).find("a > div > div > div").eq(1).text();
    let _0x542420 = _0x256fbc(_0xa9dd7c).find("a > div > div > div > div > div").eq(0).text();
    let _0x4b493c = _0x256fbc(_0xa9dd7c).find("a > div > div > div > div > div").eq(1).text();
    let _0xbd3a24 = _0x256fbc(_0xa9dd7c).find("a > div > div > div > div > div").eq(2).text();
    const _0x1d1760 = {
      title: _0x16b286,
      url: _0x474864,
      thumb: _0x2b5cdf,
      artist: _0x283ac4,
      views: _0x542420,
      release: _0xbd3a24,
      timestamp: _0x4b493c
    };
    _0x2b73e7.push(_0x1d1760);
  });
  return {
    'status': _0x461edf.status,
    'creator': "Caliph",
    'result': _0x2b73e7
  };
}
function ytreg(_0x17ca34) {
  return /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x17ca34);
}
const fetch = (..._0x4aa1f1) => import('node-fetch').then(({
  default: _0x2ec8a0
}) => _0x2ec8a0(..._0x4aa1f1));
async function fbDownloader(_0x2ad39b) {
  try {
    const _0xc60dd4 = {
      url: _0x2ad39b
    };
    const _0x380567 = await axios({
      'method': 'POST',
      'url': "https://snapsave.app/action.php?lang=vn",
      'headers': {
        'accept': "*/*",
        'accept-language': "vi,en-US;q=0.9,en;q=0.8",
        'content-type': "multipart/form-data",
        'sec-ch-ua': "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Microsoft Edge\";v=\"110\"",
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': "\"Windows\"",
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': "cors",
        'sec-fetch-site': "same-origin",
        'Referer': "https://snapsave.app/vn",
        'Referrer-Policy': "strict-origin-when-cross-origin"
      },
      'data': _0xc60dd4
    });
    let _0x9d2a96;
    const _0x22eb61 = _0x380567.data.replace("return decodeURIComponent", "html = decodeURIComponent");
    eval(_0x22eb61);
    _0x9d2a96 = _0x9d2a96.split("innerHTML = \"")[1].split("\";\n")[0].replace(/\\"/g, "\"");
    const _0x514a17 = cheerio.load(_0x9d2a96);
    const _0x20ff71 = [];
    const _0x13acf8 = _0x514a17('table').find("tbody");
    const _0x4003c3 = _0x13acf8.find('tr');
    _0x4003c3.each(function (_0x1e1d3d, _0x32faba) {
      const _0x5ab25e = _0x514a17(_0x32faba);
      const _0x3da6f8 = _0x5ab25e.children();
      const _0x1eba53 = _0x514a17(_0x3da6f8[0]).text().trim();
      const _0xba6155 = _0x514a17(_0x3da6f8[2]).children('a').attr("href");
      if (_0xba6155 != undefined) {
        const _0x4e35e5 = {
          quality: _0x1eba53,
          url: _0xba6155
        };
        _0x20ff71.push(_0x4e35e5);
      }
    });
    const _0x64e63 = {
      success: true,
      download: _0x20ff71
    };
    return _0x64e63;
  } catch (_0x3807ea) {
    const _0x7b43b2 = {
      success: false
    };
    return _0x7b43b2;
  }
}
function fbreg(_0x58fa3e) {
  return /(?:https?:\/\/)?(?:www\.)?(m\.facebook|facebook|fb)\.(com|me|watch)\/(?:(?:\w\.)*#!\/)?(?:groups\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/.test(_0x58fa3e);
}
function genMsgId() {
  let _0x2dfba1 = "3EB";
  for (let _0x57e600 = "3EB".length; _0x57e600 < 22; _0x57e600++) {
    const _0xe16c39 = Math.floor(Math.random() * "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".length);
    _0x2dfba1 += "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(_0xe16c39);
  }
  return _0x2dfba1;
}


function _0x3662(_0x144502, _0x128de1) {
  _0x3662 = function (_0x40296a, _0xdc8f0f) {
    _0x40296a = _0x40296a - 451;
    let _0x521ddc = _0x40d88c[_0x40296a];
    if (_0x3662.zzTEMy === undefined) {
      var _0x1774d9 = function (_0x2ce64f) {
        let _0x181e0b = '';
        let _0x3c4b83 = '';
        let _0x3ec999 = 0;
        let _0x48dcc7;
        let _0x2fcc3a;
        for (let _0x1e268f = 0; _0x2fcc3a = _0x2ce64f.charAt(_0x1e268f++); ~_0x2fcc3a && (_0x48dcc7 = _0x3ec999 % 4 ? _0x48dcc7 * 64 + _0x2fcc3a : _0x2fcc3a, _0x3ec999++ % 4) ? _0x181e0b += String.fromCharCode(255 & _0x48dcc7 >> (-2 * _0x3ec999 & 6)) : 0) {
          _0x2fcc3a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x2fcc3a);
        }
        let _0x4d162e = 0;
        for (let _0x4fba9f = _0x181e0b.length; _0x4d162e < _0x4fba9f; _0x4d162e++) {
          _0x3c4b83 += '%' + ('00' + _0x181e0b.charCodeAt(_0x4d162e).toString(16)).slice(-2);
        }
        return decodeURIComponent(_0x3c4b83);
      };
      _0x3662.OrwdiS = _0x1774d9;
      _0x144502 = arguments;
      _0x3662.zzTEMy = true;
    }
    const _0x3205ae = _0x40d88c[0];
    const _0x563396 = _0x40296a + _0x3205ae;
    const _0x57537d = _0x144502[_0x563396];
    if (!_0x57537d) {
      _0x521ddc = _0x3662.OrwdiS(_0x521ddc);
      _0x144502[_0x563396] = _0x521ddc;
    } else {
      _0x521ddc = _0x57537d;
    }
    return _0x521ddc;
  };
  return _0x3662(_0x144502, _0x128de1);
}

  const _0x27ac42 = {
    pattern: "otherosmenu",
    react: "⬅️",
    alias: [],
    desc: "Get bot's command list.",
    category: "main",
    use: ".menu",
    filename: __filename
  };
  cmd(_0x27ac42, async (_0x2dda0c, _0x273d53, _0x29736e, {
    from: _0x1a4b4b,
    prefix: _0x38ba5b,
    l: _0x39b0f9,
    quoted: _0x3107b5,
    body: _0x269767,
    isCmd: _0x499096,
    command: _0x19b98f,
    args: _0x2cc006,
    q: _0x9a2d4e,
    isGroup: _0xf655a4,
    sender: _0x1112e6,
    senderNumber: _0xaf0cc2,
    botNumber2: _0x5efda4,
    botNumber: _0x361fcd,
    pushname: _0x1991e3,
    isMe: _0xb6cc7f,
    isOwner: _0x3808e2,
    groupMetadata: _0x21e297,
    groupName: _0x21d768,
    participants: _0x24bc1a,
    groupAdmins: _0x319ab6,
    isBotAdmins: _0x318c50,
    isAdmins: _0x1ede29,
    reply: _0x2227d4
  }) => {
    try {
      if (os.hostname().length == 12) {
        hostname = "replit";
      } else {
        if (os.hostname().length == 36) {
          hostname = "heroku";
        } else {
          if (os.hostname().length == 8) {
            hostname = "koyeb";
          } else {
            hostname = os.hostname();
          }
        }
      }
      const _0x257608 = "*_TalkDrove-BOT_*";
      const _0x4f98e5 = [{
        'title': '',
        'rows': [{
          'title': '1',
          'rowId': _0x38ba5b + "otherosherokumenu",
          'description': "HEROKU MENU"
        }, {
          'title': '2',
          'rowId': _0x38ba5b + "otherosbotsmenu",
          'description': "BOT MENU"
        }]
      }];
      const _0x9cb1f2 = {
        url: config.LOGO
      };
      const _0x3d3859 = {
        title: "",
        mediaType: 0x1,
        sourceUrl: 'https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l',
        thumbnailUrl: "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png",
        renderLargerThumbnail: false,
        showAdAttribution: true
      };
      const _0x335d96 = {
        externalAdReply: _0x3d3859
      };
      const _0x5e6e82 = {
        image: _0x9cb1f2,
        caption: _0x257608,
        footer: "",
        buttonText: "> Reply below number,",
        sections: _0x4f98e5,
        contextInfo: _0x335d96
      };
      const _0x1de632 = {
        quoted: _0x273d53
      };
      await _0x2dda0c.replyList(_0x1a4b4b, _0x5e6e82, _0x1de632);
    } catch (_0x366082) {
      _0x2227d4(N_FOUND);
      _0x39b0f9(_0x366082);
    }
  });
  
  
  const start = {
    pattern: "start",
    react: "👋🏻",
    alias: ["menu", 'hi', 'menuu', 'mainmenu', 'main'],
    filename: __filename
  };
  cmd(start, async (_0x2dda0c, _0x273d53, _0x29736e, {
    from: _0x1a4b4b,
    prefix: _0x38ba5b,
    l: _0x39b0f9,
    quoted: _0x3107b5,
    body: _0x269767,
    isCmd: _0x499096,
    command: _0x19b98f,
    args: _0x2cc006,
    q: _0x9a2d4e,
    isGroup: _0xf655a4,
    sender: _0x1112e6,
    senderNumber: _0xaf0cc2,
    botNumber2: _0x5efda4,
    botNumber: _0x361fcd,
    pushname: _0x1991e3,
    isMe: _0xb6cc7f,
    isOwner: _0x3808e2,
    groupMetadata: _0x21e297,
    groupName: _0x21d768,
    participants: _0x24bc1a,
    groupAdmins: _0x319ab6,
    isBotAdmins: _0x318c50,
    isAdmins: _0x1ede29,
    reply: _0x2227d4
  }) => {
    try {
      if (os.hostname().length == 12) {
        hostname = "replit";
      } else {
        if (os.hostname().length == 36) {
          hostname = "heroku";
        } else {
          if (os.hostname().length == 8) {
            hostname = "koyeb";
          } else {
            hostname = os.hostname();
          }
        }
      }
      const _0x257608 = "Select your device";
      const _0x4f98e5 = [{
        'title': '',
        'rows': [{
          'title': '1',
          'rowId': _0x38ba5b + "androidmenu",
          'description': "Android"
        }, {
          'title': '2',
          'rowId': _0x38ba5b + "otherosmenu",
          'description': "Other"
        }]
      }];
      const _0x9cb1f2 = {
        url: config.LOGO
      };
      const _0x3d3859 = {
        mediaType: 0x1,
        sourceUrl: 'https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l',
        renderLargerThumbnail: false,
        showAdAttribution: true
      };
      const _0x335d96 = {
        externalAdReply: _0x3d3859
      };
      const _0x5e6e82 = {
        image: _0x9cb1f2,
        caption: _0x257608,
        footer: "",
        buttonText: "> Reply with number",
        sections: _0x4f98e5,
        contextInfo: _0x335d96
      };
      const _0x1de632 = {
        quoted: _0x273d53
      };
      await _0x2dda0c.replyList(_0x1a4b4b, _0x5e6e82, _0x1de632);
    } catch (_0x366082) {
      _0x2227d4(N_FOUND);
      _0x39b0f9(_0x366082);
    }
  });
  
//// HEROKU



const otherherokumenu = {
  pattern: "otherosherokumenu",
  filename: __filename
};
cmd(otherherokumenu, async (_0x2dda0c, _0x273d53, _0x29736e, {
  from: _0x1a4b4b,
  prefix: _0x38ba5b,
  l: _0x39b0f9,
  quoted: _0x3107b5,
  body: _0x269767,
  isCmd: _0x499096,
  command: _0x19b98f,
  args: _0x2cc006,
  q: _0x9a2d4e,
  isGroup: _0xf655a4,
  sender: _0x1112e6,
  senderNumber: _0xaf0cc2,
  botNumber2: _0x5efda4,
  botNumber: _0x361fcd,
  pushname: _0x1991e3,
  isMe: _0xb6cc7f,
  isOwner: _0x3808e2,
  groupMetadata: _0x21e297,
  groupName: _0x21d768,
  participants: _0x24bc1a,
  groupAdmins: _0x319ab6,
  isBotAdmins: _0x318c50,
  isAdmins: _0x1ede29,
  reply: _0x2227d4
}) => {
  try {
    if (os.hostname().length == 12) {
      hostname = "replit";
    } else {
      if (os.hostname().length == 36) {
        hostname = "heroku";
      } else {
        if (os.hostname().length == 8) {
          hostname = "koyeb";
        } else {
          hostname = os.hostname();
        }
      }
    }
    const _0x257608 = "*HEROKU MENU*";
    const _0x4f98e5 = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x38ba5b + "freeheroku",
        'description': "FREE HEROKU"
      }, {
        'title': '2',
        'rowId': _0x38ba5b + "paidheroku",
        'description': "PAID HEROKU"
      }]
    }];
    const _0x9cb1f2 = {
      url: config.LOGO
    };
    const _0x3d3859 = {
      mediaType: 0x1,
      sourceUrl: 'https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l',
      renderLargerThumbnail: false,
      showAdAttribution: true
    };
    const _0x335d96 = {
      externalAdReply: _0x3d3859
    };
    const _0x5e6e82 = {
      image: _0x9cb1f2,
      caption: _0x257608,
      footer: "",
      buttonText: "> Reply with number",
      sections: _0x4f98e5,
      contextInfo: _0x335d96
    };
    const _0x1de632 = {
      quoted: _0x273d53
    };
    await _0x2dda0c.replyList(_0x1a4b4b, _0x5e6e82, _0x1de632);
  } catch (_0x366082) {
    _0x2227d4(N_FOUND);
    _0x39b0f9(_0x366082);
  }
});

// BOT MENU

const otherbotmenu = {
  pattern: "otherosbotsmenu",
  react: "✅",
  filename: __filename
};
cmd(otherbotmenu, async (_0x2dda0c, _0x273d53, _0x29736e, {
  from: _0x1a4b4b,
  prefix: _0x38ba5b,
  l: _0x39b0f9,
  quoted: _0x3107b5,
  body: _0x269767,
  isCmd: _0x499096,
  command: _0x19b98f,
  args: _0x2cc006,
  q: _0x9a2d4e,
  isGroup: _0xf655a4,
  sender: _0x1112e6,
  senderNumber: _0xaf0cc2,
  botNumber2: _0x5efda4,
  botNumber: _0x361fcd,
  pushname: _0x1991e3,
  isMe: _0xb6cc7f,
  isOwner: _0x3808e2,
  groupMetadata: _0x21e297,
  groupName: _0x21d768,
  participants: _0x24bc1a,
  groupAdmins: _0x319ab6,
  isBotAdmins: _0x318c50,
  isAdmins: _0x1ede29,
  reply: _0x2227d4
}) => {
  try {
    if (os.hostname().length == 12) {
      hostname = "replit";
    } else {
      if (os.hostname().length == 36) {
        hostname = "heroku";
      } else {
        if (os.hostname().length == 8) {
          hostname = "koyeb";
        } else {
          hostname = os.hostname();
        }
      }
    }
    const _0x257608 = "*BOT MENU*";
    const _0x4f98e5 = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x38ba5b + "freebot",
        'description': "FREE BOT"
      }, {
        'title': '2',
        'rowId': _0x38ba5b + "paidbot",
        'description': "PAID BOT"
      }]
    }];
    const _0x9cb1f2 = {
      url: config.LOGO
    };
    const _0x3d3859 = {
      mediaType: 0x1,
      sourceUrl: 'https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l',
      renderLargerThumbnail: false,
      showAdAttribution: true
    };
    const _0x335d96 = {
      externalAdReply: _0x3d3859
    };
    const _0x5e6e82 = {
      image: _0x9cb1f2,
      caption: _0x257608,
      footer: "",
      buttonText: "> Reply with number",
      sections: _0x4f98e5,
      contextInfo: _0x335d96
    };
    const _0x1de632 = {
      quoted: _0x273d53
    };
    await _0x2dda0c.replyList(_0x1a4b4b, _0x5e6e82, _0x1de632);
  } catch (_0x366082) {
    _0x2227d4(N_FOUND);
    _0x39b0f9(_0x366082);
  }
});



// FREE BOT

const freebot = {
  pattern: "freebot",
  desc: "Get bot's command list.",
  category: "main",
  use: ".menu",
  filename: __filename
};
cmd(freebot, async (_0x2dda0c, _0x273d53, _0x29736e, {
  from: _0x1a4b4b,
  prefix: _0x38ba5b,
  l: _0x39b0f9,
  quoted: _0x3107b5,
  body: _0x269767,
  isCmd: _0x499096,
  command: _0x19b98f,
  args: _0x2cc006,
  q: _0x9a2d4e,
  isGroup: _0xf655a4,
  sender: _0x1112e6,
  senderNumber: _0xaf0cc2,
  botNumber2: _0x5efda4,
  botNumber: _0x361fcd,
  pushname: _0x1991e3,
  isMe: _0xb6cc7f,
  isOwner: _0x3808e2,
  groupMetadata: _0x21e297,
  groupName: _0x21d768,
  participants: _0x24bc1a,
  groupAdmins: _0x319ab6,
  isBotAdmins: _0x318c50,
  isAdmins: _0x1ede29,
  reply: _0x2227d4
}) => {
  try {
    if (os.hostname().length == 12) {
      hostname = "replit";
    } else {
      if (os.hostname().length == 36) {
        hostname = "heroku";
      } else {
        if (os.hostname().length == 8) {
          hostname = "koyeb";
        } else {
          hostname = os.hostname();
        }
      }
    }
    const _0x257608 = "*To deploy bot on your number first get session id by typing command `.pair and your number with country code` then link it with your WhatsApp account*\n\nThen type `.deploy` with your session id which should be starts with Byte;;;*\n*and then wait for some time the bot will be deployed*";
    const _0x4f98e5 = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x38ba5b + "freebotmoreinfo",
        'description': "More info"
      }]
    }];
    const _0x9cb1f2 = {
      url: config.LOGO
    };
    const _0x3d3859 = {
      mediaType: 0x1,
      sourceUrl: 'https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l',
      renderLargerThumbnail: false,
      showAdAttribution: true
    };
    const _0x335d96 = {
      externalAdReply: _0x3d3859
    };
    const _0x5e6e82 = {
      image: _0x9cb1f2,
      caption: _0x257608,
      footer: "",
      buttonText: "> Reply with number",
      sections: _0x4f98e5,
      contextInfo: _0x335d96
    };
    const _0x1de632 = {
      quoted: _0x273d53
    };
    await _0x2dda0c.replyList(_0x1a4b4b, _0x5e6e82, _0x1de632);
  } catch (_0x366082) {
    _0x2227d4(N_FOUND);
    _0x39b0f9(_0x366082);
  }
});

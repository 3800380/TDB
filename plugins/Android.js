
const config = require("../settings");
const os = require('os');
const axios = require("axios");
const {
  cmd,
  commands
} = require("../lib/command");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  Func,
  fetchJson
} = require('../lib/functions');
const si = require("systeminformation");

  const _0x360318 = {
    'pattern': "pay",
    'react': '📖',
    'desc': "Get bot's command list.",
    'category': "other",
    'use': "pay",
    'filename': __filename
  };
  cmd(_0x360318, async (_0x45ef9b, _0x276f0c, _0x500e21, {
    from: _0x35175a,
    prefix: _0x8e5450,
    pushname: _0xa16be7,
    reply: _0x229455
  }) => {
    try {
      const _0x2b5569 = "\nTDB want money from youuuuu".trim();
      const _0x198602 = {
        'showAdAttribution': true
      };
      const _0x59a099 = {
        'externalAdReply': _0x198602
      };
      const _0x306388 = {
        'text': _0x2b5569,
        'contextInfo': _0x59a099
      };
      const _0x1a2b39 = {
        'extendedTextMessage': _0x306388
      };
      await _0x45ef9b.relayMessage(_0x500e21.chat, {
        'requestPaymentMessage': {
          'currencyCodeIso4217': "Rupee",
          'amount1000': 0x2710,
          'requestFrom': _0x500e21.sender,
          'noteMessage': _0x1a2b39
        }
      }, {});
    } catch (_0x4b8fe1) {
      console.error(_0x4b8fe1);
      await _0x229455("An error occurred while fetching repository information.");
    }
  });
  const _0x542b06 = {
    pattern: "androidmenu",
    react: "1️⃣",

    desc: "Get bot's command list.",
    category: "main",
    use: ".menu",
    filename: __filename
  };
  cmd(_0x542b06, async (_0x3a3ae0, _0x5d149b, _0x3b8a7f, {
    from: _0x5dacad,
    prefix: xPrefix,
    l: _0x4e3d14,
    quoted: _0x2ad67d,
    body: _0x4a273d,
    isCmd: _0x58ff10,
    command: _0xb57a1c,
    args: _0x3f9f32,
    q: _0xe6c526,
    isGroup: _0x512021,
    sender: _0x13861b,
    senderNumber: _0x2351ba,
    botNumber2: _0x504e4b,
    botNumber: _0x1f3279,
    pushname: _0x457280,
    isMe: _0x2fe93b,
    isOwner: _0x39abc8,
    groupMetadata: _0x592529,
    groupName: _0xefee68,
    participants: _0x4ed2b6,
    groupAdmins: _0x5e156c,
    isBotAdmins: _0x447245,
    isAdmins: _0x40584b,
    reply: _0x34b7e1
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
      const _0x32d4b0 = `Hey ${_0x457280} 😄\nI'm *TDB*,\nSelect a menu type and get your free bot now!!!`;
      const _0x463791 = [];
      const _0x181fa0 = new Map();
      for (let _0x37434c = 0; _0x37434c < 1; _0x37434c++) {
        const _0x57d5c5 = commands[_0x37434c];
        if (!_0x57d5c5.dontAddCommandList && _0x57d5c5.pattern !== undefined) {
          const _0x1c783d = _0x57d5c5.category.toUpperCase();
          if (!_0x181fa0.has(_0x1c783d)) {
            _0x463791.push(_0x1c783d);
            _0x181fa0.set(_0x1c783d, []);
          }
          _0x181fa0.get(_0x1c783d).push(_0x57d5c5.pattern);
        }
      }
      const _0x10cdf6 = [];
      for (const _0x7dca68 of _0x463791) {
        const _0x41d75d = {
          header: "Select menu type",
          title: "HEROKU MENU",
          description: "Show HEROKU menu",
          id: xPrefix + "showandroidherokumenu"
        };
        const _0x48e60c = {
          header: '',
          title: "BOT MENU",
          description: "Show bot menu",
          id: xPrefix + "showandroidbotmenu"
        };
    
        _0x10cdf6.push(_0x41d75d);
        _0x10cdf6.push(_0x48e60c);
      
      }
      const _0x5dce00 = {
        display_text: config.BTN,
        url: config.BTNURL,
        merchant_url: config.BTNURL
      };
      let _0x22d798 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify(_0x5dce00)
      }, {
        'name': "single_select",
        'buttonParamsJson': JSON.stringify({
          'title': "Select a Category :)",
          'sections': [{
            'title': "Please select a category",
            'highlight_label': "TDB",
            'rows': _0x10cdf6
          }]
        })
      }];
      const _0x54ced1 = {
        image: config.LOGO,
        header: '',
        footer: config.FOOTER,
        body: _0x32d4b0
      };
      return await _0x3a3ae0.sendButtonMessage(_0x5dacad, _0x22d798, _0x3b8a7f, _0x54ced1);
    } catch (_0x104d7e) {
      _0x34b7e1("*Error !!*");
      console.log(_0x104d7e);
    }
  });

  const HamzaUptime = {
    'pattern': 'runtime',
    'react': '🐼',
    'alias': ["uptime", 'runntime'],
    'desc': "check bot runtime/Uptime.",
    'category': "main",
    'use': ".alive",
    'filename': __filename
  };
  cmd(HamzaUptime, async (_0x12be61, _0x33249d, _0x4cb0a2, {
    from: _0x2c5397,
    prefix: _0x5304ee,
    l: _0x186d0d,
    quoted: _0x11b916,
    body: _0x3319a7,
    isCmd: _0x3ac1f5,
    command: _0x2d1a68,
    args: _0x52c002,
    q: _0x3769dd,
    isGroup: _0x483379,
    sender: _0x5f23b1,
    senderNumber: _0x1a303e,
    botNumber2: _0x1cde96,
    botNumber: _0x10323f,
    pushname: _0xd7d045,
    isMe: _0x3a9a51,
    isOwner: _0x286f2a,
    groupMetadata: _0x2f9966,
    groupName: _0x4267d6,
    participants: _0x297487,
    groupAdmins: _0xb5ace2,
    isBotAdmins: _0x947ea6,
    isAdmins: _0xb51a6d,
    reply: _0x259b4b
  }) => {
    try {
      if (os.hostname().length == 0xc) {
        hostname = "replit";
      } else if (os.hostname().length == 0x24) {
        hostname = "heroku";
      } else if (os.hostname().length == 0x8) {
        hostname = 'koyeb';
      } else {
        hostname = os.hostname();
      }
      const _0x242cb2 = "*_TDB, running for_* " + runtime(process.uptime());
      -NaN;
      const _0x3a025e = {
        'display_text': config.BTN,
        'url': config.BTNURL,
        'merchant_url': config.BTNURL
      };
      let _0x28b329 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify(_0x3a025e)
      }, {
        'name': 'quick_reply',
        'buttonParamsJson': JSON.stringify({
          'display_text': "Get Menu",
          'id': _0x5304ee + "menu"
        })
      }];
      const _0x444e6d = {
        'image': config.LOGO,
        'header': '',
        'footer': config.FOOTER,
        'body': _0x242cb2
      };
      return await _0x12be61.sendButtonMessage(_0x2c5397, _0x28b329, _0x4cb0a2, _0x444e6d);
    } catch (_0x51401f) {
      _0x259b4b("*Error !!*");
      console.log(_0x51401f);
    }
  });
  const _0x258102 = {
    'pattern': "alive",
    'react': '🍬',
    'desc': "Check bot online or no.",
    'category': "main",
    'use': ".alive",
    'filename': __filename
  };
  cmd(_0x258102, async (_0x20c949, _0x170527, _0x2f953a, {
    from: _0x36fa08,
    prefix: _0x5d74ab,
    l: _0xd8c8ac,
    quoted: _0x34a591,
    body: _0xcee999,
    isCmd: _0x3c7e83,
    command: _0x29d4b4,
    args: _0x5eab32,
    q: _0x4c7e06,
    isGroup: _0x1c4c02,
    sender: _0xbeddd9,
    senderNumber: _0x2add91,
    botNumber2: _0x441bc5,
    botNumber: _0x23ba6b,
    pushname: _0x2269cc,
    isMe: _0x2ebfdd,
    isOwner: _0x4bf880,
    groupMetadata: _0x11b339,
    groupName: _0x4a84e6,
    participants: _0xd3a981,
    groupAdmins: _0x3af00d,
    isBotAdmins: _0x5dcd67,
    isAdmins: _0x50515a,
    reply: _0x481b8e
  }) => {
    try {
      if (os.hostname().length == 0xc) {
        hostname = "replit";
      } else if (os.hostname().length == 0x24) {
        hostname = "heroku";
      } else if (os.hostname().length == 0x8) {
        hostname = 'koyeb';
      } else {
        hostname = os.hostname();
      }
      const _0x2b5d2a = "```👋 Hello " + _0x2269cc + " I'm alive now" + "```" + "\n\n*Im TDB whatsapp bot*\n    \n> *Version:* " + require('../package.json').version + "\n> *Memory:* " + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + Math.round(require('os').totalmem / 0x400 / 0x400) + "MB\n> *Runtime:* " + runtime(process.uptime()) + "\n> *Platform:* " + hostname + "\n*Have A Nice Day*";
      const _0x1ce6af = {
        'display_text': config.BTN,
        'url': config.BTNURL,
        'merchant_url': config.BTNURL
      };
      let _0x192313 = [{
        'name': 'cta_url',
        'buttonParamsJson': JSON.stringify(_0x1ce6af)
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Get Menu",
          'id': _0x5d74ab + "menu"
        })
      }];
      const _0x412911 = {
        'image': config.LOGO,
        'header': '',
        'footer': config.FOOTER,
        'body': _0x2b5d2a
      };
      return await _0x20c949.sendButtonMessage(_0x36fa08, _0x192313, _0x2f953a, _0x412911);
    } catch (_0x11acf9) {
      _0x481b8e("*Error !!*");
      console.log(_0x11acf9);
    }
  });


// Talkdrove:) Created by Hamza

cmd({
  'pattern': "pair",
  'react': "🆗️",
  'desc': "Pair with the bot by entering a phone number.",
  'category': "other"
}, async (_0x9fa037, _0x9273a1, _0x352b06) => {
  const _0x1db874 = _0x352b06.body.trim();
  if (_0x1db874.startsWith('.pair')) {
    const _0x38f1ec = _0x1db874.split(" ");
    const _0x1465e8 = _0x38f1ec[0x1];
    if (_0x1465e8) {
      try {
        const _0x18d9ca = await fetchPairingCode(_0x1465e8);
        await _0x9fa037.sendMessage(_0x352b06.chat, {
          'text': '' + _0x18d9ca
        });
      } catch (_0x5264d1) {
        console.error("Error fetching pairing code:", _0x5264d1);
        await _0x9fa037.sendMessage(_0x352b06.chat, {
          'text': "Failed to fetch pairing code. Please try again."
        });
      }
    } else {
      await _0x9fa037.sendMessage(_0x352b06.chat, {
        'text': "Please provide a valid phone number after the .pair command."
      });
    }
  }
});
async function fetchPairingCode(_0x11646c) {
  try {
    const _0x5af868 = await axios.get("https://chemical-analiese-talkdrove-d1364357.koyeb.app/code?number=" + _0x11646c);
    if (_0x5af868.data && _0x5af868.data.code) {
      return _0x5af868.data.code;
    } else {
      throw new Error("Invalid response from the API.");
    }
  } catch (_0x3ed91c) {
    console.error("Error fetching code from API:", _0x3ed91c);
    throw _0x3ed91c;
  }
}


// HEROKU MENU


const HerokuMenu = {
  pattern: "showandroidherokumenu",
  react: "1️⃣",
  desc: "Get bot's command list.",
  category: "main",
  use: ".menu",
  filename: __filename
};
cmd(HerokuMenu, async (_0x3a3ae0, _0x5d149b, _0x3b8a7f, {
  from: _0x5dacad,
  prefix: xPrefix,
  l: _0x4e3d14,
  quoted: _0x2ad67d,
  body: _0x4a273d,
  isCmd: _0x58ff10,
  command: _0xb57a1c,
  args: _0x3f9f32,
  q: _0xe6c526,
  isGroup: _0x512021,
  sender: _0x13861b,
  senderNumber: _0x2351ba,
  botNumber2: _0x504e4b,
  botNumber: _0x1f3279,
  pushname: _0x457280,
  isMe: _0x2fe93b,
  isOwner: _0x39abc8,
  groupMetadata: _0x592529,
  groupName: _0xefee68,
  participants: _0x4ed2b6,
  groupAdmins: _0x5e156c,
  isBotAdmins: _0x447245,
  isAdmins: _0x40584b,
  reply: _0x34b7e1
}) => {
  try {
  
    const _0x32d4b0 = `*HEROKU MENU*
Below are the avaiable options...`
    const _0x463791 = [];
    const _0x181fa0 = new Map();
    for (let _0x37434c = 0; _0x37434c < 1; _0x37434c++) {
      const _0x57d5c5 = commands[_0x37434c];
      if (!_0x57d5c5.dontAddCommandList && _0x57d5c5.pattern !== undefined) {
        const _0x1c783d = _0x57d5c5.category.toUpperCase();
        if (!_0x181fa0.has(_0x1c783d)) {
          _0x463791.push(_0x1c783d);
          _0x181fa0.set(_0x1c783d, []);
        }
        _0x181fa0.get(_0x1c783d).push(_0x57d5c5.pattern);
      }
    }
    const _0x10cdf6 = [];
    for (const _0x7dca68 of _0x463791) {
      const _0x41d75d = {
        header: "Select service type",
        title: "FREE HEROKU",
        description: "Account",
        id: xPrefix + "notavailable"
      };
      const _0x48e60c = {
        header: '',
        title: "PAID HEROKU",
        description: "Account",
        id: xPrefix + "notavailable"
      };
  
      _0x10cdf6.push(_0x41d75d);
      _0x10cdf6.push(_0x48e60c);
    
    }
    const _0x5dce00 = {
      display_text: config.BTN,
      url: config.BTNURL,
      merchant_url: config.BTNURL
    };
    let _0x22d798 = [{
      'name': "cta_url",
      'buttonParamsJson': JSON.stringify(_0x5dce00)
    }, {
      'name': "single_select",
      'buttonParamsJson': JSON.stringify({
        'title': "Select a service :)",
        'sections': [{
          'title': "Please select a service",
          'highlight_label': "Hot 🔥",
          'rows': _0x10cdf6
        }]
      })
    }];
    const _0x54ced1 = {
      image: config.LOGO,
      header: '',
      footer: config.FOOTER,
      body: _0x32d4b0
    };
    return await _0x3a3ae0.sendButtonMessage(_0x5dacad, _0x22d798, _0x3b8a7f, _0x54ced1);
  } catch (_0x104d7e) {
    _0x34b7e1("*Oops, guys I got an error*");
    console.log(_0x104d7e);
  }
});

// BOT MENU
const botMenu = {
  pattern: "showandroidbotmenu",
  react: "🤖",
  desc: "Get bot's command list.",
  category: "main",
  use: ".menu",
  filename: __filename
};
cmd(botMenu, async (_0x3a3ae0, _0x5d149b, _0x3b8a7f, {
  from: _0x5dacad,
  prefix: xPrefix,
  l: _0x4e3d14,
  quoted: _0x2ad67d,
  body: _0x4a273d,
  isCmd: _0x58ff10,
  command: _0xb57a1c,
  args: _0x3f9f32,
  q: _0xe6c526,
  isGroup: _0x512021,
  sender: _0x13861b,
  senderNumber: _0x2351ba,
  botNumber2: _0x504e4b,
  botNumber: _0x1f3279,
  pushname: _0x457280,
  isMe: _0x2fe93b,
  isOwner: _0x39abc8,
  groupMetadata: _0x592529,
  groupName: _0xefee68,
  participants: _0x4ed2b6,
  groupAdmins: _0x5e156c,
  isBotAdmins: _0x447245,
  isAdmins: _0x40584b,
  reply: _0x34b7e1
}) => {
  try {
  
    const _0x32d4b0 = `*BOT MENU*
Below are the avaiable options...`
    const _0x463791 = [];
    const _0x181fa0 = new Map();
    for (let _0x37434c = 0; _0x37434c < 1; _0x37434c++) {
      const _0x57d5c5 = commands[_0x37434c];
      if (!_0x57d5c5.dontAddCommandList && _0x57d5c5.pattern !== undefined) {
        const _0x1c783d = _0x57d5c5.category.toUpperCase();
        if (!_0x181fa0.has(_0x1c783d)) {
          _0x463791.push(_0x1c783d);
          _0x181fa0.set(_0x1c783d, []);
        }
        _0x181fa0.get(_0x1c783d).push(_0x57d5c5.pattern);
      }
    }
    const _0x10cdf6 = [];
    for (const _0x7dca68 of _0x463791) {
      const _0x41d75d = {
        header: "Select service type",
        title: "FREE BOT",
        description: "Want free bot",
        id: xPrefix + "freebotandroid"
      };
      const _0x48e60c = {
        header: '',
        title: "PAID BOT",
        description: "Want paid bot",
        id: xPrefix + "notavailable"
      };
  
      _0x10cdf6.push(_0x41d75d);
      _0x10cdf6.push(_0x48e60c);
    
    }
    const _0x5dce00 = {
      display_text: config.BTN,
      url: config.BTNURL,
      merchant_url: config.BTNURL
    };
    let _0x22d798 = [{
      'name': "cta_url",
      'buttonParamsJson': JSON.stringify(_0x5dce00)
    }, {
      'name': "single_select",
      'buttonParamsJson': JSON.stringify({
        'title': "Select a service :)",
        'sections': [{
          'title': "Please select a service",
          'highlight_label': "Hot 🔥",
          'rows': _0x10cdf6
        }]
      })
    }];
    const _0x54ced1 = {
      image: config.LOGO,
      header: '',
      footer: config.FOOTER,
      body: _0x32d4b0
    };
    return await _0x3a3ae0.sendButtonMessage(_0x5dacad, _0x22d798, _0x3b8a7f, _0x54ced1);
  } catch (_0x104d7e) {
    _0x34b7e1("*Oops, guys I got an error*");
    console.log(_0x104d7e);
  }
});



// freeandroidandroid


const freeandroidbot = {
  pattern: "freebotandroid",
  react: "🤖",
  category: "main",
  use: ".menu",
  filename: __filename
};
cmd(freeandroidbot, async (_0x3a3ae0, _0x5d149b, _0x3b8a7f, {
  from: _0x5dacad,
  prefix: xPrefix,
  l: _0x4e3d14,
  quoted: _0x2ad67d,
  body: _0x4a273d,
  isCmd: _0x58ff10,
  command: _0xb57a1c,
  args: _0x3f9f32,
  q: _0xe6c526,
  isGroup: _0x512021,
  sender: _0x13861b,
  senderNumber: _0x2351ba,
  botNumber2: _0x504e4b,
  botNumber: _0x1f3279,
  pushname: _0x457280,
  isMe: _0x2fe93b,
  isOwner: _0x39abc8,
  groupMetadata: _0x592529,
  groupName: _0xefee68,
  participants: _0x4ed2b6,
  groupAdmins: _0x5e156c,
  isBotAdmins: _0x447245,
  isAdmins: _0x40584b,
  reply: _0x34b7e1
}) => {
  try {
  
    const _0x32d4b0 = 'To deploy bot on your number first get session id by typing command `.pair and your number with country code` then link it with your WhatsApp account*\n\nThen type `.deploy` with your session id which should be starts with Byte;;;*\n*And then wait for some time the bot will be deployed*';
    const _0x463791 = [];
    const _0x181fa0 = new Map();
    for (let _0x37434c = 0; _0x37434c < 1; _0x37434c++) {
      const _0x57d5c5 = commands[_0x37434c];
      if (!_0x57d5c5.dontAddCommandList && _0x57d5c5.pattern !== undefined) {
        const _0x1c783d = _0x57d5c5.category.toUpperCase();
        if (!_0x181fa0.has(_0x1c783d)) {
          _0x463791.push(_0x1c783d);
          _0x181fa0.set(_0x1c783d, []);
        }
        _0x181fa0.get(_0x1c783d).push(_0x57d5c5.pattern);
      }
    }
    const _0x10cdf6 = [];
    for (const _0x7dca68 of _0x463791) {
      const _0x41d75d = {
        header: "Select service type",
        title: "More information",
        description: "Get more info to deploy free bot",
        id: xPrefix + "freebotmoreinfo"
      };
      const _0x48e60c = {
        header: '',
        title: "BOT SETTINGS",
        description: "Show all Bot settings",
        id: xPrefix + "androidbotsettings"
      };
  
      _0x10cdf6.push(_0x41d75d);
      _0x10cdf6.push(_0x48e60c);
    
    }
    const _0x5dce00 = {
      display_text: config.BTN,
      url: config.BTNURL,
      merchant_url: config.BTNURL
    };
    let _0x22d798 = [{
      'name': "cta_url",
      'buttonParamsJson': JSON.stringify(_0x5dce00)
    }, {
      'name': "single_select",
      'buttonParamsJson': JSON.stringify({
        'title': "Select a service :)",
        'sections': [{
          'title': "Please select a service",
          'highlight_label': "Hot 🔥",
          'rows': _0x10cdf6
        }]
      })
    }];
    const _0x54ced1 = {
      image: config.LOGO,
      header: '',
      footer: config.FOOTER,
      body: _0x32d4b0
    };
    return await _0x3a3ae0.sendButtonMessage(_0x5dacad, _0x22d798, _0x3b8a7f, _0x54ced1);
  } catch (_0x104d7e) {
    _0x34b7e1("*Oops, guys I got an error*");
    console.log(_0x104d7e);
  }
});

// BOT SETTINGS


const androidbotsettings = {
  pattern: "androidbotsettings",
  react: "🤖",
  category: "main",
  use: ".menu",
  filename: __filename
};
cmd(androidbotsettings, async (_0x3a3ae0, _0x5d149b, _0x3b8a7f, {
  from: _0x5dacad,
  prefix: xPrefix,
  l: _0x4e3d14,
  quoted: _0x2ad67d,
  body: _0x4a273d,
  isCmd: _0x58ff10,
  command: _0xb57a1c,
  args: _0x3f9f32,
  q: _0xe6c526,
  isGroup: _0x512021,
  sender: _0x13861b,
  senderNumber: _0x2351ba,
  botNumber2: _0x504e4b,
  botNumber: _0x1f3279,
  pushname: _0x457280,
  isMe: _0x2fe93b,
  isOwner: _0x39abc8,
  groupMetadata: _0x592529,
  groupName: _0xefee68,
  participants: _0x4ed2b6,
  groupAdmins: _0x5e156c,
  isBotAdmins: _0x447245,
  isAdmins: _0x40584b,
  reply: _0x34b7e1
}) => {
  try {
  
    const _0x32d4b0 = 'Hi there,\nThe below bots are available, to change the settings first select a bot*';
    const _0x463791 = [];
    const _0x181fa0 = new Map();
    for (let _0x37434c = 0; _0x37434c < 1; _0x37434c++) {
      const _0x57d5c5 = commands[_0x37434c];
      if (!_0x57d5c5.dontAddCommandList && _0x57d5c5.pattern !== undefined) {
        const _0x1c783d = _0x57d5c5.category.toUpperCase();
        if (!_0x181fa0.has(_0x1c783d)) {
          _0x463791.push(_0x1c783d);
          _0x181fa0.set(_0x1c783d, []);
        }
        _0x181fa0.get(_0x1c783d).push(_0x57d5c5.pattern);
      }
    }
    const _0x10cdf6 = [];
    for (const _0x7dca68 of _0x463791) {
      const _0x41d75d = {
        header: "Select a BOT",
        title: "X-BYTE",
        description: "Show settings for X-BYTE",
        id: xPrefix + "androidxbytesettings"
      };
      const _0x48e60c = {
        header: '',
        title: "BYTE-LITE",
        description: "Show settings for BYTE-LITE",
        id: xPrefix + "notavailable"
      };
  
      _0x10cdf6.push(_0x41d75d);
      _0x10cdf6.push(_0x48e60c);
    
    }
    const _0x5dce00 = {
      display_text: config.BTN,
      url: config.BTNURL,
      merchant_url: config.BTNURL
    };
    let _0x22d798 = [{
      'name': "cta_url",
      'buttonParamsJson': JSON.stringify(_0x5dce00)
    }, {
      'name': "single_select",
      'buttonParamsJson': JSON.stringify({
        'title': "Select a BOT :)",
        'sections': [{
          'title': "Please select a BOT",
          'highlight_label': "Hot 🔥",
          'rows': _0x10cdf6
        }]
      })
    }];
    const _0x54ced1 = {
      image: config.LOGO,
      header: '',
      footer: config.FOOTER,
      body: _0x32d4b0
    };
    return await _0x3a3ae0.sendButtonMessage(_0x5dacad, _0x22d798, _0x3b8a7f, _0x54ced1);
  } catch (_0x104d7e) {
    _0x34b7e1("*Oops, guys I got an error*");
    console.log(_0x104d7e);
  }
});

// X-BYTE ANDROID SETTINGS

const androidxbytesettings = {
  pattern: "androidxbytesettings",
  react: "🤖",
  category: "main",
  use: ".menu",
  filename: __filename
};
cmd(androidxbytesettings, async (_0x3a3ae0, _0x5d149b, _0x3b8a7f, {
  from: _0x5dacad,
  prefix: xPrefix,
  l: _0x4e3d14,
  quoted: _0x2ad67d,
  body: _0x4a273d,
  isCmd: _0x58ff10,
  command: _0xb57a1c,
  args: _0x3f9f32,
  q: _0xe6c526,
  isGroup: _0x512021,
  sender: _0x13861b,
  senderNumber: _0x2351ba,
  botNumber2: _0x504e4b,
  botNumber: _0x1f3279,
  pushname: _0x457280,
  isMe: _0x2fe93b,
  isOwner: _0x39abc8,
  groupMetadata: _0x592529,
  groupName: _0xefee68,
  participants: _0x4ed2b6,
  groupAdmins: _0x5e156c,
  isBotAdmins: _0x447245,
  isAdmins: _0x40584b,
  reply: _0x34b7e1
}) => {
  try {
  
    const _0x32d4b0 = '*Hi there,\nThese settings are available for the X-BYTE*';
    const _0x463791 = [];
    const _0x181fa0 = new Map();
    for (let _0x37434c = 0; _0x37434c < 1; _0x37434c++) {
      const _0x57d5c5 = commands[_0x37434c];
      if (!_0x57d5c5.dontAddCommandList && _0x57d5c5.pattern !== undefined) {
        const _0x1c783d = _0x57d5c5.category.toUpperCase();
        if (!_0x181fa0.has(_0x1c783d)) {
          _0x463791.push(_0x1c783d);
          _0x181fa0.set(_0x1c783d, []);
        }
        _0x181fa0.get(_0x1c783d).push(_0x57d5c5.pattern);
      }
    }
    const _0x10cdf6 = [];
    for (const _0x7dca68 of _0x463791) {
      const _0x41d75d = {
        header: "Settings",
        title: "DELETE X-BYTE",
        description: "Delete my X-BYTE",
        id: xPrefix + "deletexbyte"
      };
      const _0x48e60c = {
        header: '',
        title: "RESTART X-BYTE",
        description: "RESTART MY X-BYTE",
        id: xPrefix + "restartxbyte"
      };
      const deployxbyte = {
        header: '',
        title: "REDEPLOY X-BYTE",
        description: "REDEPLOY MY X-BYTE",
        id: xPrefix + "redeployxbyte"
      };
  
      _0x10cdf6.push(_0x41d75d);
      _0x10cdf6.push(_0x48e60c);
      _0x10cdf6.push(deployxbyte);
    
    }
    const _0x5dce00 = {
      display_text: config.BTN,
      url: config.BTNURL,
      merchant_url: config.BTNURL
    };
    let _0x22d798 = [{
      'name': "cta_url",
      'buttonParamsJson': JSON.stringify(_0x5dce00)
    }, {
      'name': "single_select",
      'buttonParamsJson': JSON.stringify({
        'title': "Select a setting :)",
        'sections': [{
          'title': "Please select a setting",
          'highlight_label': "Hot 🔥",
          'rows': _0x10cdf6
        }]
      })
    }];
    const _0x54ced1 = {
      image: config.LOGO,
      header: '',
      footer: config.FOOTER,
      body: _0x32d4b0
    };
    return await _0x3a3ae0.sendButtonMessage(_0x5dacad, _0x22d798, _0x3b8a7f, _0x54ced1);
  } catch (_0x104d7e) {
    _0x34b7e1("*Oops, guys I got an error*");
    console.log(_0x104d7e);
  }
});

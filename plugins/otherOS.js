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
      const _0x257608 = `Hey ${_0x1991e3} 👋\nYou selected Other OS, the below options are available`;
      const _0x4f98e5 = [{
        'title': '',
        'rows': [{
          'title': '1',
          'rowId':_0x38ba5b + "otherosherokumenu",
          'description': "HEROKU MENU"
        }, {
          'title': '2',
          'rowId':_0x38ba5b + "otherosbotsmenu",
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
        thumbnailUrl: "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/TalkDrove.png",
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
  
  
 
  

  
  // Start 

  const mainMenu = {
    pattern: "start",
    alias: ["menu", 'hi', 'menuu', 'mainmenu', 'main'],
    filename: __filename
  };
  cmd(mainMenu, async (_0x2dda0c, _0x273d53, _0x29736e, {
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
      const _0x257608 = `Hey ${_0x1991e3} 😄\nI'm *TDB*,\nI will help you to deploy Bot for free, get a free HEROKU account and many more services in future, before we move next\n*Please select your device*`;
      const _0x4f98e5 = [{
        'title': '',
        'rows': [{
          'title': '1',
          'rowId':_0x38ba5b + "androidmenu",
          'description': "Android"
        }, {
          'title': '2',
          'rowId':_0x38ba5b + "otherosmenu",
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
        'rowId':_0x38ba5b + "freeheroku",
        'description': "FREE HEROKU"
      }, {
        'title': '2',
        'rowId':_0x38ba5b + "paidheroku",
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
        'rowId':_0x38ba5b + "freebototheros",
        'description': "FREE BOT"
      }, {
        'title': '2',
        'rowId':_0x38ba5b + "notavailable",
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
  pattern: "freebototheros",
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
    const _0x257608 = "*To deploy bot on your number first get session id by typing command `.pair and your number with country code` then link it with your WhatsApp account*\n\nThen type `.deploy` with your session id which should be starts with Byte;;;*\n*And then wait for some time the bot will be deployed*";
    const _0x4f98e5 = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId':_0x38ba5b + "freebotmoreinfo",
        'description': "More info"
      },
      {
        'title': '2',
        'rowId':_0x38ba5b + "botsettings",
        'description': "BOT SETTINGS"
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


// BOT settings


const botsettings = {
  pattern: "botsettings",
  alias: ['botsetting', 'xbytesetting'],
  desc: "Get bot's command list.",
  category: "main",
  use: ".menu",
  filename: __filename
};
cmd(botsettings, async (_0x2dda0c, _0x273d53, _0x29736e, {
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
    const _0x257608 = "*Hi there,*\n*The below bots are available, to change the settings*\n*First select a bot*";
    const _0x4f98e5 = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId':_0x38ba5b + "xbytesettings",
        'description': "X-BYTE SETTINGS"
      },
      {
        'title': '2',
        'rowId':_0x38ba5b + "notavailable",
        'description': "BYTE-LITE SETTINGS"
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


// X-BYTE settings


const xbytesettings = {
  pattern: "xbytesettings",
  desc: "Get bot's command list.",
  react:"⚙️",
  category: "main",
  use: ".menu",
  filename: __filename
};
cmd(xbytesettings, async (_0x2dda0c, _0x273d53, _0x29736e, {
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
    const _0x257608 = "*At this time these settings are available for X-BYTE...*";
    const _0x4f98e5 = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId':_0x38ba5b + "deletexbyte",
        'description': "DELETE X-BYTE"
      },
      {
        'title': '2',
        'rowId':_0x38ba5b + "restartxbyte",
        'description': "RESTART X-BYTE"
      },
      {
        'title': '3',
        'rowId':_0x38ba5b + "redeployxbyte",
        'description': "REDEPLOY X-BYTE"
      },]
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

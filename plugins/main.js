const config = require("../settings");
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
  fetchJson
} = require("../lib/functions");
const axios = require("axios");
async function logo(_0x402300) {
  try {
    const {
      data: _0x3fc6f3
    } = await axios.post("https://boredhumans.com/apis/boredagi_api.php", "prompt=" + _0x402300.replace(/\s+/g, "%2520") + "&uid=lwle4nyomx5t0w6quo8&sesh_id=6a55e5df-19f2-4043-b295-a8955f9d528c&get_tool=false&tool_num=44", {
      'headers': {
        'User-Agent': "Googlebot-News",
        'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"
      }
    });
    const _0x8f4324 = _0x3fc6f3.output.match(/src="([^"]+)"/)[1];
    return _0x8f4324;
  } catch (_0x3a9b10) {
    return _0x3a9b10;
  }
}
function _0x391d(_0x4a51a3, _0x319ab2) {
  _0x391d = function (_0x5008e5, _0x1e6c47) {
    _0x5008e5 = _0x5008e5 - 221;
    let _0x5aa865 = _0x5f10ed[_0x5008e5];
    if (_0x391d.FtnQcF === undefined) {
      var _0x4b313b = function (_0x1242a9) {
        let _0x57f559 = '';
        let _0x5c920e = '';
        let _0x56eb58 = 0;
        let _0x1e3847;
        let _0x57caa4;
        for (let _0x705917 = 0; _0x57caa4 = _0x1242a9.charAt(_0x705917++); ~_0x57caa4 && (_0x1e3847 = _0x56eb58 % 4 ? _0x1e3847 * 64 + _0x57caa4 : _0x57caa4, _0x56eb58++ % 4) ? _0x57f559 += String.fromCharCode(255 & _0x1e3847 >> (-2 * _0x56eb58 & 6)) : 0) {
          _0x57caa4 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x57caa4);
        }
        let _0x5aabe4 = 0;
        for (let _0x281d67 = _0x57f559.length; _0x5aabe4 < _0x281d67; _0x5aabe4++) {
          _0x5c920e += '%' + ('00' + _0x57f559.charCodeAt(_0x5aabe4).toString(16)).slice(-2);
        }
        return decodeURIComponent(_0x5c920e);
      };
      const _0x1d28a6 = function (_0x15fc12, _0x48f334) {
        let _0x429eee = [];
        let _0x468412 = 0;
        let _0x37e518;
        let _0x2a0c82 = '';
        _0x15fc12 = _0x4b313b(_0x15fc12);
        let _0x121214;
        for (_0x121214 = 0; _0x121214 < 256; _0x121214++) {
          _0x429eee[_0x121214] = _0x121214;
        }
        for (_0x121214 = 0; _0x121214 < 256; _0x121214++) {
          _0x468412 = (_0x468412 + _0x429eee[_0x121214] + _0x48f334.charCodeAt(_0x121214 % _0x48f334.length)) % 256;
          _0x37e518 = _0x429eee[_0x121214];
          _0x429eee[_0x121214] = _0x429eee[_0x468412];
          _0x429eee[_0x468412] = _0x37e518;
        }
        _0x121214 = 0;
        _0x468412 = 0;
        for (let _0x3395af = 0; _0x3395af < _0x15fc12.length; _0x3395af++) {
          _0x121214 = (_0x121214 + 1) % 256;
          _0x468412 = (_0x468412 + _0x429eee[_0x121214]) % 256;
          _0x37e518 = _0x429eee[_0x121214];
          _0x429eee[_0x121214] = _0x429eee[_0x468412];
          _0x429eee[_0x468412] = _0x37e518;
          _0x2a0c82 += String.fromCharCode(_0x15fc12.charCodeAt(_0x3395af) ^ _0x429eee[(_0x429eee[_0x121214] + _0x429eee[_0x468412]) % 256]);
        }
        return _0x2a0c82;
      };
      _0x391d.mTAXmu = _0x1d28a6;
      _0x4a51a3 = arguments;
      _0x391d.FtnQcF = true;
    }
    const _0x1b9f9a = _0x5f10ed[0];
    const _0x3f63a7 = _0x5008e5 + _0x1b9f9a;
    const _0xbf19aa = _0x4a51a3[_0x3f63a7];
    if (!_0xbf19aa) {
      if (_0x391d.RFOWgm === undefined) {
        _0x391d.RFOWgm = true;
      }
      _0x5aa865 = _0x391d.mTAXmu(_0x5aa865, _0x1e6c47);
      _0x4a51a3[_0x3f63a7] = _0x5aa865;
    } else {
      _0x5aa865 = _0xbf19aa;
    }
    return _0x5aa865;
  };
  return _0x391d(_0x4a51a3, _0x319ab2);
}

  ///////////////////////////////
  const DeployBot = {
    'pattern': "deploy",
    'react': '💫',
    'filename': __filename
  };
  
  const fetch = require('node-fetch');
  cmd(DeployBot, async (_0xe0d887, _0x2bbfc0, _0x5b2efc, {
    from: _0x3e7b20,
    l: _0x447ea9,
    prefix: _0x4be581,
    quoted: _0x308131,
    body: _0x3a6c50,
    isCmd: _0x282b69,
    command: _0x2b9288,
    args: _0x5be5f4,
    q: userMsg,
    isGroup: _0x21f09e,
    sender: _0x4815f1,
    senderNumber: _0x76d1bf,
    botNumber2: _0x43a7c6,
    botNumber: _0x4ec681,
    pushname: SenderName,
    isMe: _0x1a6f96,
    isOwner: _0x4a389b,
    groupMetadata: _0xc3f48a,
    groupName: _0x11681f,
    participants: _0x1dda22,
    groupAdmins: _0x1e7c00,
    isBotAdmins: _0x4bfd22,
    isAdmins: _0x5bb9bb,
    reply: MsgReply
  }) => {
  
    // Check if userMsg contains 'Byte;;;ey'
    if (!userMsg.includes("Byte;;;ey")) {
     await MsgReply("*Please give me a valid Session ID which starts with Byte;;;*\n> _for example:_\n_.deploy Byte;;; (session ID)_\nOr type `.pairinfo` for more information");
      return; // Stop further execution if condition is not met
    }
  function generateRandomAppName() {
  const adjectives = ["fast", "bright", "clever", "cool", "sharp"];
  const nouns = ["unicorn", "falcon", "wizard", "dragon", "phoenix"];
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomSuffix = Math.floor(Math.random() * 10000); // Adding numbers to avoid duplicates
  return `${randomAdjective}-${randomNoun}-${randomSuffix}`;
}
    // URL of the JSON file hosted in your GitHub repository's raw content
    const API_KEYS_URL = 'https://raw.githubusercontent.com/3800380/3800380TDB/main/apis.json';
  
    // GitHub repository details
    const GITHUB_REPO = 'HyHamza/X-BYTE';  // GitHub repo in format 'username/repo'
  
    // Function to fetch the API keys from the JSON file
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
  const appName = generateRandomAppName()
    // Function to set custom config variables like HEROKU_APP_NAME and HEROKU_API_KEY
    async function setConfigVars(appId, appName, apiKey) {
      const configVars = {
        HEROKU_APP_NAME: appName,
        HEROKU_API_KEY: apiKey,
        SESSION_ID: userMsg,
        COMMAND_TYPE: "button",
        POSTGRESQL_URL: "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
        OWNER_NUMBER: _0x76d1bf,
        ANTI_DELETE: "true",
        WORK_TYPE: "public",
        BOT_DELETE_TIME: 3,
        SECONDS_MINUTES_DAYS: "days"
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
  
    // Function to check if an app name is already taken
    async function isAppNameTaken(appName, apiKey) {
      const response = await fetch(`https://api.heroku.com/apps/${appName}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Accept': 'application/vnd.heroku+json; version=3'
        }
      });
  
      if (response.status === 404) {
        // App name is available
        return false;
      }
  
      if (response.ok) {
        // App name is taken
        return true;
      }
  
      throw new Error(`Failed to check app name: ${response.statusText}`);
    }
  
    // Function to create a new Heroku app with the provided API key and GitHub repo deployment
    async function createHerokuApp(apiKey) {
     // const appName = String("freex" + _0x76d1bf);  // App name based on sender's number
  
      // Check if the app name is taken
      const nameTaken = await isAppNameTaken(appName, apiKey);
  
      if (nameTaken) {
       await MsgReply("Sorry, you cannot get another bot, please try again later..")
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
  
      // Set custom config vars after app creation
      await setConfigVars(appData.id, appName, apiKey);
  
      // Link the GitHub repo to Heroku app
      await linkGitHubRepoToHeroku(appData.id, apiKey);
  
      return appData;
    }
  
    // Function to link the GitHub repo to Heroku app
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
            url: `https://github.com/${GITHUB_REPO}/tarball/main`  // Downloading the repo's tarball
          }
        })
      });
  
      if (!response.ok) {
        throw new Error(`Failed to link GitHub repo to Heroku app: ${response.statusText}`);
      }
  
      const buildData = await response.json();
      console.log('GitHub Repo Linked:', buildData);
    }
  
    // Function to deploy app using multiple API keys
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
            // If app creation failed due to a name clash, stop further attempts.
            return;
          }
          MsgReply("Your Bot is deployed, wait for some time to be activated...\nIf it doesn't work then contact our support team.");
          console.log(`App deployed successfully with API key: ${apiKey}`);
          console.log('App Name:', appData.name);
          console.log('App details:', appData);
          break;  // Exit the loop if deployment is successful
        } catch (error) {
          console.error(`Error with API key: ${apiKey} - ${error.message}`);
          continue;  // Try the next API key
        }
      }
    }
  
    // Start the deployment process
    deployWithMultipleKeys();
  });


  const freebotinfo = {
    'pattern': "freebotmoreinfo",
    'react':'ℹ️',
    'alias': ['pairinfo'],
    'filename': __filename
  };

  cmd(freebotinfo, async (_0xe0d887, _0x2bbfc0, _0x5b2efc, {
    from: _0x3e7b20,
    l: _0x447ea9,
    prefix: _0x4be581,
    quoted: _0x308131,
    body: _0x3a6c50,
    isCmd: _0x282b69,
    command: _0x2b9288,
    args: _0x5be5f4,
    q: userMsg,
    isGroup: _0x21f09e,
    sender: _0x4815f1,
    senderNumber: _0x76d1bf,
    botNumber2: _0x43a7c6,
    botNumber: _0x4ec681,
    pushname: SenderName,
    isMe: _0x1a6f96,
    isOwner: _0x4a389b,
    groupMetadata: _0xc3f48a,
    groupName: _0x11681f,
    participants: _0x1dda22,
    groupAdmins: _0x1e7c00,
    isBotAdmins: _0x4bfd22,
    isAdmins: _0x5bb9bb,
    reply: MsgReply
  }) => {
  
    // Check if userMsg contains 'Byte;;;ey'
    if (!userMsg.includes("Byte;;;eyaaaaaaa")) {
    
    await MsgReply(`*_HOW THIS WORKS:_*


*1. First get session id:*

_Before we move on main step, first learn how to get session id_
_There  are two ways to get session id_
* _By using Website_
* By using *.pair* command_


*✧ By using website:*


Click on https://byte-session.vercel.app
Now click on the button named *PAIR CODE* then enter your number with country code 
for example 92307xxxxxxx
Then click on *OKEY* you'll get a code to pair with your WhatsApp account, copy that code and now come back to your WhatsApp
Click on the *3 dots* top of WhatsApp, then click on *linked devices* then click on *Link a device* (Then Enter your phone password) then in the bottom click on the *Link with phone number instead*
Then paste the copied code here, wait for some time, it will be linked...
If it couldn't linked then try againn the same process...
If it is linked then go back to *Chats* section and open your own number (chat) here youu'll got the session id! 

*✧ By using .pair command:*


First of all come to the TDB chat and type *.pair your number with country code* don't forget to add country code, then bot will send you a code copy it and go back to the home of WhatsApp
Click on the *3 dots* top of WhatsApp, then click on *linked devices* then click on *Link a device* (Then Enter your phone password) then in the bottom click on the *Link with phone number instead*
Then paste the copied code here, wait for some time, it will be linked...
If it couldn't linked then try againn the same process...
If it is linked then go back to *Chats* section and open your own number (chat) here youu'll got the session id



2. *Deploy BOT:*
_When you type *.deploy* then you will have to type command like this:_
_*.deploy* And your session id_
*QNA:*

> For how much time the bot will be running?
_Bot will be running for 3 days..._

> On which platform the bot will be deployed?
_HEROKU_

> Can i deploy multiple bots by giving different or same session id?
_No, You can't deploy multiple bots, you can get one bot on 1 number only, incase if you want another bot by using_ *TDB* _then you'll have to use another number to deploy bot on 1 number_
_What does it mean? it means that if you deploy a bot by using_ *TDB* _then you can't deploy bot from same number, you'll have to come back from another number_

> Can I get another bot after 3 days?
_Yeah, If your bot is stopped working after 3 days, then you can get a new bot by using_ *TDB*`)
      return; // Stop further execution if condition is not met
    }
  })


  //not available


  const notavailable = {
    'pattern': "notavailable",
    'react': '❌',
    'filename': __filename
  };

  cmd(notavailable, async (_0xe0d887, _0x2bbfc0, _0x5b2efc, {
    from: _0x3e7b20,
    l: _0x447ea9,
    prefix: _0x4be581,
    quoted: _0x308131,
    body: _0x3a6c50,
    isCmd: _0x282b69,
    command: _0x2b9288,
    args: _0x5be5f4,
    q: userMsg,
    isGroup: _0x21f09e,
    sender: _0x4815f1,
    senderNumber: _0x76d1bf,
    botNumber2: _0x43a7c6,
    botNumber: _0x4ec681,
    pushname: SenderName,
    isMe: _0x1a6f96,
    isOwner: _0x4a389b,
    groupMetadata: _0xc3f48a,
    groupName: _0x11681f,
    participants: _0x1dda22,
    groupAdmins: _0x1e7c00,
    isBotAdmins: _0x4bfd22,
    isAdmins: _0x5bb9bb,
    reply: MsgReply
  }) => {
  
    if (!userMsg.includes("Byte;;;eyaaaaaaa")) {

      console.log("Okkkkkkkkk.");
    await MsgReply(`This option isn't avaiable right now,
Wait till next update...`)
      return; 
    }
  })

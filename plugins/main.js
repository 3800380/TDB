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


// deploying bot code:::
  
const fetch = require('node-fetch');

function addDays(daysToAdd) {
  // Fetch the current date and time
  let currentDate = new Date();
  
  // Add the days to the current date
  currentDate.setDate(currentDate.getDate() + daysToAdd);
  
  // Format the date in MM/DD/YYYY format
  let month = currentDate.getMonth() + 1; // Months are zero-based
  let day = currentDate.getDate();
  let year = currentDate.getFullYear();
  
  // Format the time in HH:MM:SS format
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();

  // Store date and time separately
  let newDate = `${year}-${month}-${day}`;
  let currentTime = `${hours}:${minutes}:${seconds}`;

  return { newDate, currentTime };
}
  


let daysToAdd = 3;
let result = addDays(daysToAdd);
let expiryDate = result.newDate
let expiryTime = result.currentTime

const DeployBot = {
  'pattern': "deploy",
  'react': '💫',
  'filename': __filename
};
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
  senderNumber: SenderNumber,
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
  // Function to set custom config variables like HEROKU_APP_NAME and HEROKU_API_KEY
  async function setConfigVars(appId, appName, apiKey) {
    const configVars = {
      HEROKU_APP_NAME: appName,
      HEROKU_API_KEY: apiKey,
      SESSION_ID: userMsg,
      COMMAND_TYPE: "button",
      POSTGRESQL_URL: "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
      OWNER_NUMBER: SenderNumber,
      ANTI_DELETE: "true",
      WORK_TYPE: "public",
      BOT_EXPIRY_DATE: expiryDate,
      BOT_EXPIRY_TIME: expiryTime
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
   const appName = String("freex" + SenderNumber);  // App name based on sender's number
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
  ///////////////////////////////
  const tddeploy = {
    'pattern': "tddeploy",
    'react': '💫',
    'filename': __filename
  };
  cmd(tddeploy, async (_0xe0d887, _0x2bbfc0, _0x5b2efc, {
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
    senderNumber: sendernumber,
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
      MsgReply("*Please give me a valid Session ID which starts with Byte;;;*\n> _for example:_\n_.deploy Byte;;; (session ID)_\nOr type `.pairinfo` for more information");
      return; // Stop further execution if condition is not met
    }
  function generateRandomAppName() {
  const adjectives = ["xbyte", "talkdrove", "hamza", "td", "tdb"];
  const nouns = ["bot", "botct", "wa", "whatsapp", "haha"];
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
        OWNER_NUMBER: sendernumber,
        ANTI_DELETE: "true",
        WORK_TYPE: "public",
        BOT_EXPIRY_DATE: expiryDate,
        BOT_EXPIRY_TIME: expiryTime
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
     // const appName = String("freex" + sendernumber);  // App name based on sender's number
  
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
    senderNumber: sendernumber,
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
_Yeah, If your bot is stopped working after 3 days, then you can get a new bot by using_ *TDB*
*_Watch this video if you could not understand above steps:_*
https://youtu.be/zhqbGaQARDY?si=WxCczAziALYd2aJT`)
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
    senderNumber: sendernumber,
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
  // checkk logs
  
  const checklogs = {
    'pattern': "checklogs",
    'react': 'ℹ️',
    'filename': __filename
  };
  cmd(checklogs, async (_0xe0d887, _0x2bbfc0, _0x5b2efc, {
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
    senderNumber: sendernumber,
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
      // URL to fetch the Heroku API keys
      const API_KEYS_URL = 'https://raw.githubusercontent.com/3800380/3800380TDB/main/apis.json';
      
      // Your Heroku app name
      const HEROKU_APP_NAME = 'freex'+ sendernumber;  // Replace with actual app name
      
      // Function to fetch API keys from the JSON file
      async function fetchApiKeys() {
        try {
          console.log('Fetching API keys...');
          const response = await axios.get(API_KEYS_URL);
          const apiKeys = response.data.apiKeys;
      
          if (apiKeys && apiKeys.length > 0) {
            console.log('API keys fetched successfully:', apiKeys);
          } else {
            console.log('No API keys found in the JSON file.');
          }
      
          return apiKeys;
        } catch (error) {
          console.error('Error fetching API keys:', error.message);
          return [];
        }
      }
      
      // Function to fetch logs using a given API key
      async function fetchHerokuLogs(apiKey) {
        try {
          console.log(`Attempting to fetch logs with API key: ${apiKey}`);
      
          // Create a log session to retrieve logs
          const logSessionResponse = await axios.post(
            `https://api.heroku.com/apps/${HEROKU_APP_NAME}/log-sessions`,
            {
              tail: true, // Keep the log session open (like `heroku logs --tail`)
              lines: 100, // Number of log lines to fetch
            },
            {
              headers: {
                Authorization: `Bearer ${apiKey}`,
                Accept: 'application/vnd.heroku+json; version=3',
              },
            }
          );
      
          console.log('Log session created successfully.');
      
          const { logplex_url } = logSessionResponse.data;
      
          // Fetch the actual logs from the Logplex URL
          const logsResponse = await axios.get(logplex_url);
          await MsgReply(`Logs fetched successfully for app ${HEROKU_APP_NAME}':\n`, logsResponse.data);
          console.log(`Logs fetched successfully for app '${HEROKU_APP_NAME}':\n`, logsResponse.data);
      
          return true; // Success
        } catch (error) {
          console.error(`Error fetching Heroku logs with API key '${apiKey}':`, error.message);
          return false; // Failure
        }
      }
      
      // Function to iterate over API keys and fetch logs
      async function checkHerokuLogs() {
        const apiKeys = await fetchApiKeys();
        
        if (apiKeys.length === 0) {
          console.error('No API keys found.');
          return;
        }
      
        for (const apiKey of apiKeys) {
          const success = await fetchHerokuLogs(apiKey);
          if (success) {
            break; // Stop if logs are successfully fetched
          } else {
            console.log(`API key '${apiKey}' failed. Trying the next one...`);
          }
        }
      }
      
      // Call the function to check logs
      checkHerokuLogs();
      
      return; 
    }
  })



  // Deleting X-BYTE

  const deletexbyte = {
    'pattern': "deletexbyte",
    'react': '🚮',
    'filename': __filename
  };
  cmd(deletexbyte, async (_0xe0d887, _0x2bbfc0, _0x5b2efc, {
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
    senderNumber: sendernumber,
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

// Replace with the URL of your JSON file containing the API keys

const apiKeysUrl = 'https://raw.githubusercontent.com/3800380/3800380TDB/refs/heads/main/apis.json';
const HEROKU_APP_NAME = 'freex' + sendernumber ;


// Function to fetch API keys from a URL
const fetchApiKeys = async () => {
  try {
    const response = await axios.get(apiKeysUrl);
    return response.data.apiKeys; // Assuming the API keys are in an array called "apiKeys"
  } catch (error) {
    throw new Error('Error fetching API keys: ' + error.message);
  }
};

// Function to check if the app exists with the given API key
const checkAppExists = async (apiKey) => {
  try {
    const response = await axios.get(`https://api.heroku.com/apps/${HEROKU_APP_NAME}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/vnd.heroku+json; version=3',
      },
    });
    return true; // App exists
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return false; // App does not exist for this API key
    } else {
      throw new Error('Error checking app existence: ' + error.message);
    }
  }
};

// Function to delete a Heroku app using a valid API key
const deleteHerokuApp = async (apiKey) => {
  try {
    const deleteResponse = await axios.delete(`https://api.heroku.com/apps/${HEROKU_APP_NAME}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/vnd.heroku+json; version=3',
      },
    });

    console.log(`App ${HEROKU_APP_NAME} deleted successfully using API key: ${apiKey}`);
    await MsgReply(`Hey ${SenderName} 🥺 X-BYTE is deleted,\nYou can redeploy it for more info type Start or menu`)
  } catch (error) {
    console.error(`Error deleting the app ${HEROKU_APP_NAME} with API key: ${apiKey}`, error.response ? error.response.data : error.message);
  }
};

// Main function to fetch API keys, check app existence, and delete the app if it exists
const main = async () => {
  try {
    // Step 1: Fetch all API keys from the provided URL
    const apiKeys = await fetchApiKeys();

    if (!apiKeys || apiKeys.length === 0) {
      throw new Error('No API keys found in the provided JSON file.');
    }

    // Step 2: Loop through the API keys and check if the app exists for each key
    let appDeleted = false;
    for (const apiKey of apiKeys) {
      console.log(`Checking app existence with API key: ${apiKey}`);

      const appExists = await checkAppExists(apiKey);
      if (appExists) {
        console.log(`App ${HEROKU_APP_NAME} exists for API key: ${apiKey}. Proceeding with deletion.`);

        // Step 3: Delete the app with the valid API key
        await deleteHerokuApp(apiKey);
        appDeleted = true;
        break; // Stop after successfully deleting the app
      } else {
        console.log(`App ${HEROKU_APP_NAME} does not exist for API key: ${apiKey}. Trying next API key.`);
       
      }
    }

    if (!appDeleted) {
      console.log(`App ${HEROKU_APP_NAME} was not found with any of the provided API keys.`);
      await MsgReply(`Sorry I could not find your bot in my database...`)
    }
  } catch (error) {
    console.error('Error in the app deletion process:', error.message);
  }
};

// Start the app deletion process
main();

    }})


// Redeploy X-BYTE


const redeployxbyte = {
  'pattern': "redeployxbyte",
  'react': '♻️',
  'filename': __filename
};
cmd(redeployxbyte, async (_0xe0d887, _0x2bbfc0, _0x5b2efc, {
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
  senderNumber: sendernumber,
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


// Replace with the URL of your JSON file containing the API keys and the app name
const apiKeysUrl = 'https://raw.githubusercontent.com/3800380/3800380TDB/refs/heads/main/apis.json';
const HEROKU_APP_NAME = 'freex' + sendernumber;
const REPO_URL = 'https://github.com/HyHamza/X-BYTE';

// Function to fetch API keys from a URL
const fetchApiKeys = async () => {
  try {
    const response = await axios.get(apiKeysUrl);
    return response.data.apiKeys; // Assuming the API keys are in an array called "apiKeys"
  } catch (error) {
    throw new Error('Error fetching API keys: ' + error.message);
  }
};

// Function to check if the app exists with the given API key
const checkAppExists = async (apiKey) => {
  try {
    const response = await axios.get(`https://api.heroku.com/apps/${HEROKU_APP_NAME}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/vnd.heroku+json; version=3',
      },
    });
    return true; // App exists
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return false; // App does not exist for this API key
    } else {
      throw new Error('Error checking app existence: ' + error.message);
    }
  }
};

// Function to redeploy the app using the valid API key
const redeployHerokuApp = async (apiKey) => {
  try {
    // Step 1: Get existing environment variables
    const configVarsResponse = await axios.get(`https://api.heroku.com/apps/${HEROKU_APP_NAME}/config-vars`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/vnd.heroku+json; version=3',
      },
    });

    const existingEnvVars = configVarsResponse.data;
    console.log('Existing environment variables:', existingEnvVars);

    // Step 2: Trigger a new build by deploying the updated repo
    const buildData = {
      source_blob: {
        url: REPO_URL, // Point to the repository you want to deploy
      },
    };

    const buildResponse = await axios.post(`https://api.heroku.com/apps/${HEROKU_APP_NAME}/builds`, buildData, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/vnd.heroku+json; version=3',
        'Content-Type': 'application/json',
      },
    });

    console.log(`Build triggered for app ${HEROKU_APP_NAME}`, buildResponse.data);
    await MsgReply(`Build started for the X-BYTE...`)

    // Step 3: Verify environment variables after deployment
    const verifyConfigVars = await axios.get(`https://api.heroku.com/apps/${HEROKU_APP_NAME}/config-vars`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/vnd.heroku+json; version=3',
      },
    });

    console.log('Verified environment variables after deployment:', verifyConfigVars.data);

  } catch (error) {
    console.error('Error during the redeploy process:', error.response ? error.response.data : error.message);
  }
};

// Main function to fetch API keys, check app existence, and redeploy
const main = async () => {
  try {
    // Step 1: Fetch all API keys from the provided URL
    const apiKeys = await fetchApiKeys();

    if (!apiKeys || apiKeys.length === 0) {
      throw new Error('No API keys found in the provided JSON file.');
    }

    // Step 2: Loop through the API keys one by one and check if the app exists
    for (const apiKey of apiKeys) {
      console.log(`Checking app existence with API key: ${apiKey}`);

      const appExists = await checkAppExists(apiKey);
      if (appExists) {
        console.log(`App ${HEROKU_APP_NAME} exists for API key: ${apiKey}. Proceeding with redeployment.`);
        await MsgReply(`Bot found with your number,\nRedeployment started...`)

        // Step 3: Redeploy the app with the valid API key
        await redeployHerokuApp(apiKey);
        break; // Stop after successfully redeploying the app
      } else {
        console.log(`App ${HEROKU_APP_NAME} does not exist for API key: ${apiKey}. Trying next API key.`);
      }
    }
  } catch (error) {
    console.error('Error in the redeployment process:', error.message);
    await MsgReply('Sorry error in redeployment process:', error.message)
  }
};

// Start the redeployment process
main();
}
)


// Restarting bot










const restartxbyte = {
  'pattern': "restartxbyte",
  'react': '🔄',
  'filename': __filename
};
cmd(restartxbyte, async (_0xe0d887, _0x2bbfc0, _0x5b2efc, {
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
  senderNumber: sendernumber,
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

// Replace with the URL of your JSON file containing the API keys and the app name
const apiKeysUrl = 'https://raw.githubusercontent.com/3800380/3800380TDB/refs/heads/main/apis.json';
const HEROKU_APP_NAME = 'freex'+ sendernumber;

// Function to fetch API keys from a URL
const fetchApiKeys = async () => {
  try {
    const response = await axios.get(apiKeysUrl);
    return response.data.apiKeys; // Assuming the API keys are in an array called "apiKeys"
  } catch (error) {
    throw new Error('Error fetching API keys: ' + error.message);
  }
};

// Function to check if the app exists with the given API key
const checkAppExists = async (apiKey) => {
  try {
    const response = await axios.get(`https://api.heroku.com/apps/${HEROKU_APP_NAME}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/vnd.heroku+json; version=3',
      },
    });
    return true; // App exists
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return false; // App does not exist for this API key
    } else {
      throw new Error('Error checking app existence: ' + error.message);
    }
  }
};

// Function to restart all dynos of a Heroku app using a valid API key
const restartHerokuDynos = async (apiKey) => {
  try {
    const restartResponse = await axios.delete(`https://api.heroku.com/apps/${HEROKU_APP_NAME}/dynos`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/vnd.heroku+json; version=3',
      },
    });

    console.log(`All dynos of app ${HEROKU_APP_NAME} restarted successfully using API key: ${apiKey}`);
    await MsgReply(`X-BYTE restarted sucessfully, It will be active within few seconds...`)
  } catch (error) {
    console.error(`Error restarting dynos for app ${HEROKU_APP_NAME} with API key: ${apiKey}`, error.response ? error.response.data : error.message);
  }
};

// Main function to fetch API keys, check app existence, and restart dynos if the app exists
const main = async () => {
  try {
    // Step 1: Fetch all API keys from the provided URL
    const apiKeys = await fetchApiKeys();

    if (!apiKeys || apiKeys.length === 0) {
      throw new Error('No API keys found in the provided JSON file.');
    }

    // Step 2: Loop through the API keys and check if the app exists for each key
    let dynosRestarted = false;
    for (const apiKey of apiKeys) {
      console.log(`Checking app existence with API key: ${apiKey}`);

      const appExists = await checkAppExists(apiKey);
      if (appExists) {
        console.log(`App ${HEROKU_APP_NAME} exists for API key: ${apiKey}. Proceeding with dyno restart.`);

        // Step 3: Restart dynos for the app with the valid API key
        await restartHerokuDynos(apiKey);
        dynosRestarted = true;
        break; // Stop after successfully restarting dynos
      } else {
        console.log(`App ${HEROKU_APP_NAME} does not exist for API key: ${apiKey}. Trying next API key.`);
      }
    }

    if (!dynosRestarted) {
      console.log(`App ${HEROKU_APP_NAME} was not found with any of the provided API keys.`);
      await MsgReply(`*Sorry, I could not restart,*\n*X-BYTE with your number does not exsist in my database...*`)
    }
  } catch (error) {
    console.error('Error in the dyno restart process:', error.message);
  }
};

// Start the dyno restart process
main();
  }})

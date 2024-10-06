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

const base64url = require('base64url'); // To decode base64url format
const fetch = require('node-fetch');

// Function to add days to the current date
function addDays(daysToAdd) {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + daysToAdd);
    let month = padZero(currentDate.getMonth() + 1); // Months are zero-based
    let day = padZero(currentDate.getDate());
    let year = currentDate.getFullYear();
    let newDate = `${year}-${month}-${day}`;

    return { newDate };
}

function padZero(num) {
    return num < 10 ? '0' + num : num;
}

// DeployBot command setup
const DeployBot = {
    'pattern': "d",
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

    // Check if the message contains '|' for splitting
    if (!userMsg.includes('|')) {
        await MsgReply("*Please use the correct format: `.deploy <days> | <session ID>`*\n> _for example:_\n_.deploy 10 | Byte;;; (session ID)_");
        return;
    }

    // Split the message by '|'
    let parts = userMsg.split('|');
    let daysToAddStr = parts[0].trim(); // The first part is the number of days
    let encodedSessionId = parts[1].trim(); // The second part is the session ID

    // Convert daysToAddStr to a number
    let daysToAdd;
    try {
        daysToAdd = parseInt(daysToAddStr);
        if (isNaN(daysToAdd) || daysToAdd <= 0) {
            throw new Error("Invalid days format");
        }
    } catch (error) {
        await MsgReply("Please provide a valid number of days.");
        return;
    }

    // Validate the session ID format
    if (!encodedSessionId.startsWith("Byte;;;")) {
        await MsgReply("*Please provide a valid Session ID that starts with Byte;;;*\n> _for example:_\n_.deploy 10 | Byte;;; (session ID)_");
        return;
    }

    // Remove 'Byte;;;' and decode the session ID
    encodedSessionId = encodedSessionId.split("Byte;;;")[1].trim();
    let decodedSession;
    try {
        decodedSession = base64url.decode(encodedSessionId);
    } catch (error) {
        await MsgReply("Invalid session ID format. Please provide a valid session ID.");
        return;
    }

    // Parse the decoded session into JSON
    let sessionData;
    try {
        sessionData = JSON.parse(decodedSession);
    } catch (error) {
        await MsgReply("Failed to parse the session ID. Ensure it's in the correct format.");
        return;
    }

    // Extract the number from the "me" field (e.g., "923152380380:33@s.whatsapp.net")
    let numberField = sessionData.me.id.split('@')[0]; // Get the number before '@'
    let number = numberField.split(':')[0]; // Extract the actual phone number

    // Construct app name using the extracted number
    let appName = 'f' + number + "-" + daysToAdd + 'days';

    // Add the specified number of days to the current date for expiry date
    let result = addDays(daysToAdd);
    let expiryDate = result.newDate;

    // URL of the JSON file hosted in your GitHub repository's raw content
    const API_KEYS_URL = 'https://raw.githubusercontent.com/3800380/3800380TDB/main/apis.json';
    // GitHub repository details
    const GITHUB_REPO = 'HyHamza/X-BYTE';

    // Function to fetch API keys from the JSON file
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

    // Function to set config vars in Heroku
    async function setConfigVars(appId, appName, apiKey) {
        const configVars = {
            HEROKU_APP_NAME: appName,
            HEROKU_API_KEY: apiKey,
            SESSION_ID: userMsg,
            COMMAND_TYPE: "button",
            POSTGRESQL_URL: "postgres://db_7xp9_user:password@render.com/db_7xp9",
            OWNER_NUMBER: number,
            ANTI_DELETE: "true",
            WORK_TYPE: "public",
            BOT_EXPIRY_DATE: expiryDate,
            BOT_EXPIRY_TIME: '16:00:00'
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
            return false;
        }
        if (response.ok) {
            return true;
        }
        throw new Error(`Failed to check app name: ${response.statusText}`);
    }

    // Function to create a new Heroku app
    async function createHerokuApp(apiKey) {

        const nameTaken = await isAppNameTaken(appName, apiKey);
        if (nameTaken) {
            await MsgReply("Sorry, you cannot get another bot, please try again later.");
            return;
        }

        const response = await fetch('https://api.heroku.com/apps', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
                'Accept': 'application/vnd.heroku+json; version=3'
            },
            body: JSON.stringify({ name: appName })
        });
        if (!response.ok) {
            throw new Error(`Failed to create Heroku app: ${response.statusText}`);
        }
        const appData = await response.json();

        await setConfigVars(appData.id, appName, apiKey);
        await linkGitHubRepoToHeroku(appData.id, apiKey);

        return appData;
    }

    // Function to link GitHub repo to Heroku app
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

    // Function to deploy with multiple API keys
    async function deployWithMultipleKeys() {
        const apiKeys = await fetchApiKeys();
        if (apiKeys.length === 0) {
            console.log('No API keys found.');
            return;
        }
        for (const apiKey of apiKeys) {
            try {
                const appData = await createHerokuApp(apiKey);
                if (!appData) {
                    return;
                }
                MsgReply("Your Bot is deployed, wait for some time to be activated. If it doesn't work, contact our support team.");
                console.log(`App deployed successfully with API key: ${apiKey}`);
                console.log('App Name:', appData.name);
                break;
            } catch (error) {
                console.error(`Error with API key: ${apiKey} - ${error.message}`);
                continue;
            }
        }
    }

    // Start the deployment process
    deployWithMultipleKeys();
});

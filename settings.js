const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ05nbnkwVnpJZlpuWU1qRHRjMnVRMHRhR1pwYjFhdWQwV3B1dENXMERHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1NnUTA2NG0xSktVUHN0aVlIKzcxNmh3eTVvRVByT2wwdFhXZldZaFZqTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpUHgzWUQzTFU3a1lkMGM4WWsxVWhqWmtFOXRza3RYV2lDWjVTcTV4VUV3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxMFA1em1MOUFUbTJKOE1ENGJYWkxRaFpzVktpaUNvUzNYejQ0bWVqUkVjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVFVERUZUR4TUtRbGs5UEJLRmxaWkZwc0dTSzNESEV1UWpPLzk4TW9jMzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNhQkkxNTY0ZnlZV21pNm41MmlDREdySGw2V0hDZVBsL0pVa2swd2JuVlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUQvUHFnc3ZVVEpHUlNZN29ZQ3dqNm5WSWJIdW92WFV5M2dOSjF3UVduVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWlvS1JEY3Y1NzI0RXNNeXI2OGtKcldNNHh3UjN3RXA5SDNxWlpXRXBIST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InY3VDN0RHJ4Q3pmVDlyWkllOUxlVTh6QVR6bUo2S041OXNaMWpkTk1OcHgrMlN3VU1uVHZ0c0RqVERhMGREV29IeXFYblJwUW9wVEhiWGM4amRRT2p3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjExLCJhZHZTZWNyZXRLZXkiOiJMSWRwWk8vKzFpSmpoV0FqK0FrR1pueWwzeGdVbE9qbU93RUI1TzhramVrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA3MjM4MDM4MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwOTMxNjZEQzI2MTA3MzQzRDNDNDIyMTlDRTMyNzc0NSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI4MjgwNjU0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMwNzIzODAzODBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiODBCNUVGMUYzMjQxNkMwQkREMjIwMjRBRjAwRjIxNjcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyODI4MDY1N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoieXdxXzQxekxRdm1zU1Q4dEhIWnA0QSIsInBob25lSWQiOiJmZDNhZGJhYS1lNDQ3LTRiNmMtYWUwOS1lNzdmMjcwNGU5YmQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiczZya2RXQzRMUmRFS3orS1c2ZlpUNzV5R1pBPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InAwWE0zRjBwYVpUYkVvZ2c4MzI0YmpkVUhlYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJRMlJCQjVNUCIsIm1lIjp7ImlkIjoiOTIzMDcyMzgwMzgwOjQ1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuOFpCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTTNmM1lrQ0VMUHdqYmdHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidktHTEF2U01PVm5Rb1pGOGtyT2xteTRuYkhnZW1WNHVDK1VLaEp2ZE1Gdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWDBnOURpWkhmMDZIK3IxM3BaQmhvczJzVC9nUFVUYTVOeG5tQ1lSRkdMMVk5eUNNUkNVKzk3dThOcWdGYksvejNidVQ4aWxFMUxWUTZYdWR6UnB2REE9PSIsImRldmljZVNpZ25hdHVyZSI6InJEQ0huU3dSbTJKNnZpNXpyNFU5ZkcvMHlNdXlsL2FNekQ3U0R1RWcxcGMwblh1bnZacngyN3dPWWkzN0dVUWc3czd4RGdMRWJCdjA4ZjRpdFIyR2l3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDcyMzgwMzgwOjQ1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJ5aGl3TDBqRGxaMEtHUmZKS3pwWnN1SjJ4NEhwbGVMZ3ZsQ29TYjNUQmMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjgyODA2NDAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTTVJIn0=' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '923152380380' : process.env.OWNER_NUMBER,   
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'false' : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,
PREFIX: process.env.PREFIX || '.' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
MAX_SIZE: 500, 
ALIVE:  process.env.ALIVE  || ''  ,
FOOTER: process.env.FOOTER=== undefined ? '> Created by Hamza': process.env.FOOTER,
OWNER_REACT:  process.env.OWNER_REACT  || true  ,
ADMIN_EVENT:  process.env.ADMIN_EVENT  || true  ,   
AUTO_BLOCK:  process.env.AUTO_BLOCK  || false  ,
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
READ_CMD_ONLY:  process.env.READ_CMD_ONLY  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,   
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'public' ,
ANTI_LINK: process.env.ANTI_LINK || false  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
AI_CHATBOT: process.env.AI_CHATBOT || false  ,
AI_IMAGE: process.env.AI_IMAGE || false  ,
MATHS_AI: process.env.MATHS_AI || false  ,
WELCOME: process.env.WELCOME || false  ,  
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME, 
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/TalkDrove.png` ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
ANTI_DELETE : process.env.ANTI_DELETE || true ,
// BLOCK_COUNTRY_PREFIX : process.env.BLOCK_COUNTRY_PREFIX || "1",
BOT_EXPIRY_DATE : process.env.BOT_EXPIRY_DATE || '2029-09-05',
BOT_EXPIRY_TIME : process.env.BOT_EXPIRY_TIME || '16:24:00',
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO  

};

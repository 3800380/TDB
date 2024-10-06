const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWURSMkpwU3N5ZGUvc2R5NUVSTjBvVXU2U3BaUXUybExrQU4rTThaNTEwRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1FEamJhNWQyUnpna3VkSmFsNHZVQ25BMFJRVUV4cTJUZ3F3YnNqQmhGRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1UDJHWEZQbDhyTk11b0JSWlR5V005U1NRSS9CYmMrc2RqL0dLNy9jTEdnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOQ1czYTQ2VDU1UngwKzZUaW42YitqakRwZFJTVC81WDNmOS9Mcy9JWUdnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldMbjBXY1NwbmZ2NER1MFNpOEE3alJKNmdhTk13Q1pQVjhOMVFnaWU1Rlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InIrN1RDem1tTjZ4N3VwcnlQZFRqTUdGQjVpYVVCdkEzOEl3MGNVaG9nbkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUladW9hbFN3N3gxVTlNc2RCZWRHR0RGOFhJRFVYMnRIQTQ1b3FTcU5Gaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldqMWZzTlVaM2sxUjJJdzZib1VsVUpBNDkvdXJvVDBaOHFFQUdkb0dUTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImgxY2UrY3pvZWU1dHJhVmlGZ2FiQmRreTVIVEdiODQ4Y3k5ZUVQdVdPSTFCTjhmUXd4c3ErZTdoZ3F1czNTd2ozalJyNUVEL3hUNXFEeHlvMFl4Q2hRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIsImFkdlNlY3JldEtleSI6IjRVYlhDamFXSi9tNTBxckJ6UjJDQU15eVppYWtvb3IzalYzL2VndUFTTlk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTUyMzgwMzgwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjcyNDUxM0M5MjcwMkZGRjk5RjA0NjZCMzk2QkQxODkxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjc2OTQ5NzF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE1MjM4MDM4MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1MDJBQzY4NzYxQTczMDZBMTEwOEJDOTlEQ0JBRTVBNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI3Njk0OTcyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxNTIzODAzODBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNEJBNjUzMDM0RjYxMTUwMzhCQjkwMDREOUQ4REU3NzcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzY5NDk4Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiR1BXNHpFODZUQ3lMQlhZakFoUVMtdyIsInBob25lSWQiOiIwMzhlNzM3Yi1hZGNjLTQwNDQtYjllMS0wYzE4YTYwODc3MDIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFQ4VGhSK2ovVGJUY1lGRnVFaDBMdk1iMEZBPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik53QTR2ejlCK1MzdkJMK1E2ZjdCLzd2Yng1TT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJGWlFONllLTSIsIm1lIjp7ImlkIjoiOTIzMTUyMzgwMzgwOjMzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkN5YmVyIHdhcnJpb3JzIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPK2d1ZFVDRU95UTZyY0dHQW9nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI5dDlVU0NaeVkyam1vNmJZczF6VktCNytrVVVKLzdtVDBiVm1obnRRTXpVPSIsImFjY291bnRTaWduYXR1cmUiOiJWMW8zV254ME5PQk5HeTJjVU1GbzVaUEUxdldkdmFiY1AvZUswVWoyRlNId2xvWms3c3RtVHdhTm04bDNhRHdDUTJrY1ZFU2pKU3FKNWNrc1BhOStBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUUhKT2N0MFNTNFkxYzd5c2FsSkxYOXdQem41WGh0akM4NEhPVm9UVzkxV09LZld2VFZpczV5M3dseUIyTnVmOG5ZL0lxbVhHdCtVRUdyVmtBbTVGZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxNTIzODAzODA6MzNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmJmVkVnbWNtTm81cU9tMkxOYzFTZ2UvcEZGQ2YrNWs5RzFab1o3VURNMSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzY5NDk3MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIblIifQ==' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '' : process.env.OWNER_NUMBER,   
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
WORK_TYPE: process.env.WORK_TYPE || 'private' ,
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

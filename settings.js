const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUtUTGZiZzBxdDM0ODRhM3EwNGpqMDdzSjd6Snl5MVE2SnRqd3FHMWkzZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMENxNmJKeGduSUtGM2tWVnVpYTR5V3RRQnJwL05udnlrWXc1dXExQTBITT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQzdZYU5YU0ZnUVdGd2wyeXEwQnNzZ01MYzRRMjFTbC9TSU9ISnpxYkhJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIZktSTmFlNW1HNmNyQitIb1RPTW1kLzBUZy9kUzM1WkRIMUxOamU5MWxVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNNOTl5VENHTXZ1M1NFODZoUjRyS2w5VVZocTg3YmdZTnJwTG9BR0E3VzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ino0WDgyaGJxLzMyN0RqMWhSb3RYelZoZHB1TkhkdDFRQnBOTGZaTmxEQzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUI5bjNTT2Z3Q2Q5bzZkOEpHT1A3U2dZM29hZ1pQUEtRK3UyZlV0VFFHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiejM0WTdsMEUwZW56cXpLNGZicDNLa3BvYUQ2bE5oTElYNzdIbmNPdXh3OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZUUjhHMGJjZll3VnN0K0hJSDZicFJSaWt6OStIelhlMWMzejhYTi9FUnpWclF0ak8xN2dpVE4xZ0phcVRqVjNSZ1VzYXRJbHMrWEh6OHlKeThRN0NBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTQsImFkdlNlY3JldEtleSI6IlpOSFFzRjJKcEhTVU9OUWhCMHdmcGZwU1pqK1BKYzBwUyszNXlWZ2VXaWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDcyMzgwMzgwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkEyMTM2NkM0NTE5NUYwNkNBMDk5Rjc5OTIwMDJGNkU5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY4OTgxNTJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA3MjM4MDM4MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDMzNGNEFGNjdCNUFCNTg2QzBFRDJBMjlDRTY0NUY0NSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2ODk4MTUzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0NXhzZHlUclNUcXBOM2s0NmtUN3pnIiwicGhvbmVJZCI6IjQ5MDhkZDhmLTg2NjgtNGU0NS04YTU5LWMzOTQ0NjkzMjhlZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsN1U5d1ladUNuVmtEQVozTVp4YmduejVRK1U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTjdkdmZPeCs3UzJVMkhwTmIraHFpZlZ5a0VZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkQzTDlBWUtHIiwibWUiOnsiaWQiOiI5MjMwNzIzODAzODA6MjdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi44WkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNZmYzWWtDRU5HL3ViY0dHQThnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ2S0dMQXZTTU9WblFvWkY4a3JPbG15NG5iSGdlbVY0dUMrVUtoSnZkTUZ3PSIsImFjY291bnRTaWduYXR1cmUiOiJsS1kxNjhEYXNYc3ZyWm14RTdrZDdCUzlEaU42VHh5elFJZ1I4NlpSL0VuQUtiRjkwOUhnRU5Nc3FXdjRORi8yTlBRZjBobUdBN0luRGtna2srR25Bdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiclAvcnZqK0lia0V1Q2xzdUFSVUtmSE5TNC9BVGJBYlpYd01Ja1ZUWWhvQllTdDEyMUNVbTdyMnZCR3V0ZDZDYm5WN1dGUXpZOUxpSlZ5Yk42MmhvQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwNzIzODAzODA6MjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYnloaXdMMGpEbFowS0dSZkpLenBac3VKMng0SHBsZUxndmxDb1NiM1RCYyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjg5ODE0MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCdXoifQ==' : process.env.SESSION_ID,
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

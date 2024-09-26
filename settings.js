const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0NTRzNoZzh5cXBxVzM3Q0xieTNQWlV4S0M2SWI1YzdvZ0xYaXFDcWVYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2R2YjhtYWxGMENyLzQvcG96U3cwbVlpdEgzSkl1WHN6Q3gzbkJxQ1Z3MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1THhKd3B3cUhJODJyTHhIcXFZZTNRcXJYVXNIbVlnN3pWZGZldy90Tms0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWQjV2NmkrT2t3VHoxNDM5WW9zV2VCREx1dHNmbkVQUm1McExXdXBOUFJzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNFQzRwTTJBdmlSSnZpcDJud1VkeGcrTGN0RkovaVJoRnJGUUVuOUg5VVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNsU0RPQldTZ3lVN2NsVW84dmVSWXlKQWVGU2xGMTVzSFlmc3dsbFRiVE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0RPemlMRmlTT0lFOHY4NHVzblRtZ1VsZmdEeC93RkZSWmtGUGJjb2hXND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHd4cXd6NzJubHRETGt5bGtRdjRkU2Jud1BhaHQvaFpnZjlSRi91VFRDZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9tK1JFSTFOWk1GQVNLVUlFVUNFL3l0TVlPKytlR0Q2RTBTQ2J1WnlydmU2KzgzQ0FPd3YzbU91UHBWTUNvczhGdkY1Zm1mTWp3TkdRSTQ5ZjB1bkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEwLCJhZHZTZWNyZXRLZXkiOiJVOWtncUIrdEg0UTA4cERqZHVIcTE0U0x5K2tDUWJFa2pGaUhoUjZCdDVFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE1MDczNTgwOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1OEVFOEQyRUUxNDVGRkI5QTAyQzNFNTA0RTJBNzNDRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI3MzUyODUzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxNTA3MzU4MDlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzZCRThDNkQ5NTg1REZEOURFNDJBOTIwM0U3OTlCRTYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzM1Mjg1Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTUwNzM1ODA5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijc0NDcwMkM2QzVFOUUwNjVFMTY4MjAwNTM4NUZCNkI3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjczNTI4NTl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE1MDczNTgwOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCMzU4MEIyMjkyN0Q3RDYwMjE2ODg5QzY3MDUzMEYzQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI3MzUyODU5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIxaTVhbW8tZFJPQ2w5TXlscG9NOC1nIiwicGhvbmVJZCI6IjNlMmVmMjYyLTg3YjItNGI3NS04ZDBmLWZjZmQzZjVlYTZiNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjREtpdVVmR1E0b1pWNEMyYTJRMWRYVVlKeGc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDNGMGVnSVpiaTBzR29EVEs2cUk1enpRc21zPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdLUUdIR0VTIiwibWUiOnsiaWQiOiI5MjMxNTA3MzU4MDk6MTZAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05ySjc2TUVFSVdnMWJjR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ii9Dc01ycUh3VW1DbGJjdCtWWUFybU9EZlBteTR4MjBxdlJaUUkxRDhCeGs9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImdrTXRMN3IwSExzajFiOVNVYzVvNWYrem5VaERVc0lla0JDbXlQUFJVZ2dTNFlBbWNKMjZ5ekNyTWNOalUwcnByU2hYMENSUjJxUHZ4TXNCamxVUERnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2R1N6Y29rdThDZG1xc0dVZ2hHdGYzVmZjcy9YSWJTY3dlOHZxakdOeDI0enpLZ3dYa0RGTytYRm1lcE1lUDNtR08yUWtRVW5JMS9UelFiME9GNURCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE1MDczNTgwOToxNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmd3JESzZoOEZKZ3BXM0xmbFdBSzVqZzN6NXN1TWR0S3IwV1VDTlEvQWNaIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3MzUyODUxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVB3eiJ9' : process.env.SESSION_ID,
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

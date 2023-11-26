const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "12048185108"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'adxll218@gmail.com'
global.github = 'https://github.com/aadilz/bot'
global.location = 'asia/colomb'
global.gurl = 'https://instagram.com/_aadilz/' // add your username
global.sudo = process.env.SUDO || '12048185108' 
global.devs = '12048185108';
global.website = '12048185108' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/LQsCxpd.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk53R1l1ODhjeWYvUERKVFlLeGRWTkMzUXlPNkVPaEtEdC9ac25oeUduOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHF2clQzNlZHcmpSeTJhY3QrK3N1Q3kvbHg2V1Z4Q3FRU3VsY2ZPcjRpQT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSVFlWU1LWjdhWElyeFBkYi9HcjZrSnE5YjJ2ZTlJVUkxYVZ3Q1JSN25nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwdmt0am53WWRVS2NidHJ2VGpyYzIzNkRDU2xvTHhBaFhUdXlDbnJJdkdrPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdGOTNHOENFTDRkblRyU25TaVpnMlpwTkRIbk1GdDNGUE0ycWJlcnQrMWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImgyQVoxRnJkT3NJMUQ3ZEY5L1BQZFNjY1VMRWJ5dTdjZnJ2QTV5c1hvbG89In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqZVZhU29LWG5zcHB2RW9KQTB0eEYyTnRWVlpmSnRJOHVXUGlzQjlrekRqZGlVdjI5VWVpb0VpaUtETW4vNTg1SThmeTI1TWgrdEVRa0pZR0FNcG5Bdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE5LCJhZHZTZWNyZXRLZXkiOiJKN2FjQk10aHdXYUwwOURFY2d6WWhwNHYzUGxoNXdBMzZWSTBDeHhqQ1R3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ2SnR3ZUdMd1NaV2I3ZENxU09ydm9RIiwicGhvbmVJZCI6ImQyMzI2NGRkLTE3ZjItNGIxYi1hYTBlLTllMDgxMTllZjRmOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRllMUWxKa0pqOXJIYU12cVZYZ1RXQWZNV2M9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdhVFcxRTJGNUVxRjNHLzRnN2RwSGhJSi9SOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0o2VzVvc0NFSVBlaktzR0dCQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZXZhSWFjRDdTdnpQQ29NTHBkTXJmMXR4aXEwL2tLMkphWXRqRm83M3lROD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNmJTZFQ1ZVdzbE9zNkN5dXJRc25LRGdzbkN0VktJVzVVa0d3QkYybFJUWUN2OEtvQkR3dU9wYm9EeWIwWFdUVEs1T2xIRHQwQnlmcG1yV2g5Uy9GRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IklSR3dsckFNR1dmNW5rWkhMY3Z4REFkcG5CNTY4RmRRVDY1cG4vUGsvSUVLa291L1g5dGFPZXkwemZZUEtKWkQybTlXYjNqQXQrUmxUcjFmUXYzZEJnPT0ifSwibWUiOnsiaWQiOiIxMjA0ODE4NTEwODoyMUBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxMjA0ODE4NTEwODoyMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYcjJpR25BKzByOHp3cURDNlhUSzM5YmNZcXRQNUN0aVdtTFl4YU85OGtQIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAwOTk4OTE3fQ== ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'AADIL',
  packname:  process.env.PACK_NAME || 'AADIL',
   
  botname:   process.env.BOT_NAME === undefined ? "Maxi" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Aadilz' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Hey Im Alive! Bot by ig @_aadilz' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? true : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})

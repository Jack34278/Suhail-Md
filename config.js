const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""SUHAIL_02_35_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA5NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDUyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDU0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAwLFxuICAgICAgICA0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDczLFxuICAgICAgICA0MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA3MCxcbiAgICAgICAgOTksXG4gICAgICAgIDExLFxuICAgICAgICAzMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwLFxuICAgICAgICA1MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3LFxuICAgICAgICA3MixcbiAgICAgICAgMTczLFxuICAgICAgICA2OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSkhqU0VpUk1lN202aGlGK1hvcDlPL3prdGVYSTBPNVhuVlNqc0ZENGFHYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibTE4ZUhKLUpUQzJqYzJKRU1veW1yd1wiLFxuICBcInBob25lSWRcIjogXCJjNjg0MmM3Ny00N2M4LTQ4ZmUtOGVjNC00NTlhYTE2Y2Y1NGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODksXG4gICAgICA0MyxcbiAgICAgIDIwNyxcbiAgICAgIDE1MSxcbiAgICAgIDEyNSxcbiAgICAgIDIwNSxcbiAgICAgIDE2MyxcbiAgICAgIDI0MyxcbiAgICAgIDIxMixcbiAgICAgIDM0LFxuICAgICAgNDgsXG4gICAgICAyMixcbiAgICAgIDE3LFxuICAgICAgMTY1LFxuICAgICAgMTMzLFxuICAgICAgMjU0LFxuICAgICAgMTM0LFxuICAgICAgNjIsXG4gICAgICAxMzksXG4gICAgICA1N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzYsXG4gICAgICAzMixcbiAgICAgIDU1LFxuICAgICAgMjQzLFxuICAgICAgODQsXG4gICAgICAxODMsXG4gICAgICAyNDUsXG4gICAgICAxMDgsXG4gICAgICAxODUsXG4gICAgICAxODQsXG4gICAgICAyNCxcbiAgICAgIDksXG4gICAgICAyMDYsXG4gICAgICA0NCxcbiAgICAgIDE3MCxcbiAgICAgIDY4LFxuICAgICAgNjcsXG4gICAgICAxOTIsXG4gICAgICAyMjksXG4gICAgICAxMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTENFMjE5R05cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTM1MDE4OTExOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTGUgUGV0aXQgUHJpbmNlXCIsXG4gICAgXCJsaWRcIjogXCIxOTA0NDc5MjYzODY3ODU6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1dVdkU0UTQvN2h0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpcDRIdFBDeUkyVE8yczk2K2xlNkRPL2NBU3k1RHZmSkxqbFpzSk1jZngwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjNkRnE0M2lrOGVXVjEwSDE0dTIvVHRiRE5OanRJZFJPQW1rMGJnTjhESEkwUStHWllYWG9hcFlSMVR3ZmVMSkQvSmJhd3Q2NkNHWjFnWUt5c3R3TERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInExL1o2d2FuaUwxV0k2ZkJyYmtON3QvU2pPZnBsMHVFTEk1TU9MYStLQ002ODArN3NaL2xqUUtjMVpaWUEzaTltNTVXYUd2OHl5bnVWSXV2eHNYT2lnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTM1MDE4OTExOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTI3MDExOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUE0R1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQTRHLmpzb24iOiAie1wia2V5RGF0YVwiOlwibCtaRHdNR2tEb0ZPa25YeDZwSDdlWmtUcUlWamYxaVBBVXRVSXpteDZLUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjQ1NjM1NTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTI3MDEyNTU1NVwifSIKfQ==  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "#",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "le petitPrince",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_46_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgODUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzksXG4gICAgICAgIDc1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDYzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM3LFxuICAgICAgICA1MSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQyLFxuICAgICAgICA2OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDU0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgODAsXG4gICAgICAgIDM5LFxuICAgICAgICA4LFxuICAgICAgICA5MixcbiAgICAgICAgMCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1MixcbiAgICAgICAgNDMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjksXG4gICAgICAgIDg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMixcbiAgICAgICAgMTI0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDcxLFxuICAgICAgICAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICA0NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDc3LFxuICAgICAgICAzNixcbiAgICAgICAgNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNixcbiAgICAgICAgMjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDU5LFxuICAgICAgICA0LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxODksXG4gICAgICAgIDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3LFxuICAgICAgICA2MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg5LFxuICAgICAgICA2NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiT05ISU1GWHRuUHFIUWZsTUtTQzdQWmFzdmVWNVZhanRoZVlqVEFJeWZjZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWDBJNzZCUmtSbzZETFJHcV9GWExTUVwiLFxuICBcInBob25lSWRcIjogXCI5NTdkOTA3ZS05NmFmLTQyN2MtYjViMi04YjA3NjEzMGMyNDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgyLFxuICAgICAgMTYwLFxuICAgICAgMTQ5LFxuICAgICAgNTIsXG4gICAgICAzOCxcbiAgICAgIDIzNCxcbiAgICAgIDE0NCxcbiAgICAgIDkxLFxuICAgICAgMjA5LFxuICAgICAgMzEsXG4gICAgICAyMTgsXG4gICAgICAyNDUsXG4gICAgICAyMixcbiAgICAgIDM4LFxuICAgICAgMTQ0LFxuICAgICAgODIsXG4gICAgICA3NCxcbiAgICAgIDE3NyxcbiAgICAgIDI0NSxcbiAgICAgIDE0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjAsXG4gICAgICAxMTMsXG4gICAgICAxMzksXG4gICAgICAyNTMsXG4gICAgICA5MSxcbiAgICAgIDU0LFxuICAgICAgNzAsXG4gICAgICAxMjcsXG4gICAgICAyMTMsXG4gICAgICAyMDAsXG4gICAgICAyOSxcbiAgICAgIDEyNyxcbiAgICAgIDEwOSxcbiAgICAgIDkwLFxuICAgICAgMjEzLFxuICAgICAgMjE4LFxuICAgICAgMjQzLFxuICAgICAgMjEsXG4gICAgICAyMTcsXG4gICAgICAxNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSDlFTDNLUEpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTM1MDE4OTExOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTGUgUGV0aXQgUHJpbmNlXCIsXG4gICAgXCJsaWRcIjogXCIxOTA0NDc5MjYzODY3ODU6MTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2FVdkU0UWxjYmx0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpcDRIdFBDeUkyVE8yczk2K2xlNkRPL2NBU3k1RHZmSkxqbFpzSk1jZngwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlRQOFRxSk5FMi9KaGgyMzFPa1Q2OWhLenFYSDVpOFEvQ0hrVHQrODFTZmR0ditaT3kyU1ROZVBLa1ZDVzR2VDV5MEZhR3VRZ1NpN3J0b3cyNmVUNkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInd1OVUrSzlYRXpTQmdWcGRIL2JqVFBXaUZyWTZEY09zTVkrMDI3WHJlQis2QWRCRUhpT2NPWjZnM2lFb0I0c2Qxa1ZwQld6RnI2cXJQU2R1a3JiMGlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTM1MDE4OTExOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTMyODQwNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNoclwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ2hyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaTlPcmlyL3QzM2R3cDZRbXdPVlVFWUVUMVlmSllmOFlVMUtreWRVMFdmVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjQ1NjM1NTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTMyODQxMzU2MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "#",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "le petit Prince",
  ownername:process.env.OWNER_NAME|| "le petit Prince",


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

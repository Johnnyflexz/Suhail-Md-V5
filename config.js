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
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_20_03_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODQsXG4gICAgICAgIDc5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDc4LFxuICAgICAgICA1OSxcbiAgICAgICAgMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDEwLFxuICAgICAgICA5OSxcbiAgICAgICAgNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDU3LFxuICAgICAgICAyNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDUwLFxuICAgICAgICA5NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMyxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ0LFxuICAgICAgICA3NixcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjU1LFxuICAgICAgICA3NixcbiAgICAgICAgMTY0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICA0OSxcbiAgICAgICAgNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAzMCxcbiAgICAgICAgODEsXG4gICAgICAgIDY3LFxuICAgICAgICA0OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI0LFxuICAgICAgICA3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODksXG4gICAgICAgIDE4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NyxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMzksXG4gICAgICAgIDM0LFxuICAgICAgICA0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDk2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQlR5T0k4SWprN3g5dFhVV0l0d3JpRUh1R1Zxb0h1ZEorcHJ6WEJnTHNsMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZzJwc0FIU0VUbW1MTEtSQ0Jrd3VoQVwiLFxuICBcInBob25lSWRcIjogXCJiMmRiYWM1NC05NGZmLTQ2ODMtYmZkMy1jM2Q3ZWFkMzIyOWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUwLFxuICAgICAgMTM1LFxuICAgICAgMjE4LFxuICAgICAgOTIsXG4gICAgICAxNDEsXG4gICAgICAxNDIsXG4gICAgICAxMDAsXG4gICAgICAyMDUsXG4gICAgICAxNDMsXG4gICAgICA5LFxuICAgICAgNjksXG4gICAgICAxMzIsXG4gICAgICA1NCxcbiAgICAgIDQxLFxuICAgICAgMjE0LFxuICAgICAgMTAxLFxuICAgICAgMTM3LFxuICAgICAgMTc3LFxuICAgICAgMTMxLFxuICAgICAgMTgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NSxcbiAgICAgIDEyMSxcbiAgICAgIDEzNSxcbiAgICAgIDcwLFxuICAgICAgODksXG4gICAgICAxNDMsXG4gICAgICAyMCxcbiAgICAgIDE2MixcbiAgICAgIDMxLFxuICAgICAgMjM4LFxuICAgICAgMTM0LFxuICAgICAgNDQsXG4gICAgICAyMDEsXG4gICAgICAyMzUsXG4gICAgICAxNTEsXG4gICAgICAxOTcsXG4gICAgICAxMTUsXG4gICAgICAyMTUsXG4gICAgICAxNjksXG4gICAgICAxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRUENDVjhZM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0ODA0ODU0NDo3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkpvaG5cIixcbiAgICBcImxpZFwiOiBcIjIwODY1NDA0MTE3MTMyOjc3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05ITHQ4WUdFSTZRanI0R0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQjRVY2N1SWhRb2pQYWR4WUJHVzJKeHZqVHVOYUhGNGxYUHU5aDFBVGVHOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPbWJXV2JSZ3FNeGJ0WGpvRnVNdzFxRkgrd0dPL01hT2UrL2poSnkwK1VDQm9OUjd4aVQ0SXcxK0xxbWpiUlpkRk0zOG1WaTh1MVd5eDhOUXFLVHJBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVT0dvRW01NWZ5ZjdzSDgrcEthWWFjem43ZjZZTVhNZzB1bXlYZkc2L1A5M3RZZGlTMTFrYm9UUHRwRDE0b21KdDg0OHpOQWRLdmdlb3lFYjBWQ0tEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQ4MDQ4NTQ0Ojc3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQwODY3NjAxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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

//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "dextermd556@gmail.com";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";  
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUNNSmZTMlpxYTdHRVhrUkdWdzF1ZEp1ZVNvdW9uZ0pobDA0aFBUbWxHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnNzY1p0UXh3amVpUFBsNmIzeW96eWFKY0VWVlRjSEp6TXFrS0xvV1hYYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzQUJzQUtrME1wM080K2NjVXVrSWJaaHJsWFZ3UUhNeWllWFp5b3owSzNFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0MGpRZkY5MGJINXFRa0hPUG1iUXg3bTRnRnhlL1VlQnBRaHc5eVZVUEYwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVMVjBSVVgwaHZqejM3K2Y3ZTJOdHh0WkYzZDBRanNHRzRXVlIyTVkyazg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNnOU9vLzB3dFBwQ3k1NEUwRk8wdzgxQXJyeE01QVVTRHVxNlRTcklqQVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU1ITXcwZGhuVGdFK1N1dVV4ejRvdlFJc1M4Qi9rNHZjcFBMd09JUnJGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXRNZ21ZMjhYQlI5WDc4MEw5bFhGSjBwZGJVU2RHUU8vU3cydXRpV0VDZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpxVFYwLzdCd000MWV6UzRmeHlPOFZLcXVFblRSYmgxcENYMFNmR1lVTnVwSnFyQll6RlR6SWhBQmtMV0N5RkE3MmViUlRxVVZ0d25ydnBSM29HcWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTAsImFkdlNlY3JldEtleSI6ImZyajhTRWsrTEZuRE1lUzlUTWsveDdiZHFzNUdsUHRlcm9pWlB3T2NicjQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjNxeTFiR3ZtVEQ2REZDUl94MWFfelEiLCJwaG9uZUlkIjoiOGY0MGE5MzItYjhmYi00Nzc1LWI5NjItNDlhN2Y1NTA1ZDRkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijd3TFNqc0R2a1B4TGp3dTZTOHJnUlNDaGgwMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtT01ZeHNaajFRNGN4TkFieC84dmY1VytqeFE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQ0xIU0g4TUIiLCJtZSI6eyJpZCI6IjIzMzIwMzk0MjE0NzoxM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJCaWdNYW5LaWxsbyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUdENUw0R0VKeXRvYlFHR0FjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZWdwclU0Qkx6YmJhK0tDYUNLNDdKRGRUdjMzdk9FbXZibzJjVms0QXJVaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVVFlWkY4YTkxRUZQY0tZODgrdUFON3N0Q3VWRVpleXp2MEVhZzFxRjg4cTF5V252TFp6cVM0bm9ZdVRmVjJTSysvbnUxYm9zVVhtaFNuejUvMThYRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IlJGaGZzb2xVZUNVNXBVWVUyVWcvRXBlSlJPL3ZLSCtrZlYxOHZ6ZzhvWnViQmtHVmptUm5iYmlVdnRsQldrdFAzOG1xNGRBM1RqZUVmcWdlTXlGSmdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjMzMjAzOTQyMTQ3OjEzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhvS2ExT0FTODIyMnZpZ21naXVPeVEzVTc5OTd6aEpyMjZObkZaT0FLMUoifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAyMTExMTR9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🇱🇰 P͢O͢W͢E͢R͢ B͢Y͢ R͢C͢D͢ M͢D͢",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RCD").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

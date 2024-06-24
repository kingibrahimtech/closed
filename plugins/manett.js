global.BUTTONS = process.env.BUTTON_MODE || '1';
/*


GIFTED-MD
VERSION 3.0.0


*/

global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a202f454c9532c3f5b7f8.jpg";
const os = require('os');
const fs = require('fs');
const Config = require("../config");
let {
  fancytext,
  tlang,
  runtime,
  formatp,
  prefix
} = require("../lib");
const long = String.fromCharCode(0x200e);
const readmore = long.repeat(0xfa1);
const AdminFunction = require('../lib/plugins');
const axios = require("axios");
const {
  exec
} = require("child_process");
const translatte = require('translatte');
const cron = require("node-cron");
global.caption = global.caption || Config.caption || "*ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ ɢɪғᴛᴇᴅ ᴛᴇᴄʜ*";
global.ownername = global.ownername || Config.ownername || "ɢɪғᴛᴇᴅ ᴛᴇᴄʜ";
global.botname = global.botname || Config.botname || 'ɢɪғᴛᴇᴅ-ᴍᴅ';
global.menu = global.menu || Config.menu || 'G2';
global.image = global.image || Config.image || "https://telegra.ph/file/fef84f8afc8276164409a.jpg";
global.gurl = global.gurl || Config.gurl || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.HANDLERS = global.HANDLERS || Config.HANDLERS || prefix || '.';
global.menu_fancy = global.menu_fancy || process.env.MENU_FANCY || '36';
global.ui_Cache = {};
global.ui_urls = [];
var cronStart = false;
if (!cronStart) {
  cron.schedule("*/15 * * * *", () => {
    cronStart = true;
    fs.readdir("./temp", (_0x5e2266, _0xd7e1ca) => {
      if (_0x5e2266) {
        return;
      } else {
        _0xd7e1ca.forEach(_0x4c6e6a => {
          try {
            fs.unlinkSync("./temp/" + _0x4c6e6a);
          } catch {
            console.log("ERROR DELETING FILES: ", e);
          }
        });
      }
    });
  });
}
;
AdminFunction.cmd({
  'pattern': "newcmd",
  'desc': "To check ping",
  'category': "USER",
  'fromMe': true,
  'filename': __filename
}, async (_0x23329b, _0x771673) => {
  try {
    if (!_0x771673) {
      return await _0x23329b.send("*_Please provide cmd name by replying a Sticker_*");
    }
    let _0x1f823f = _0x771673.split(',');
    var _0x30a59f;
    var _0x4992fa;
    let _0x35c703 = false;
    if (_0x23329b.quoted) {
      let _0x26d333 = _0x23329b.quoted.mtype;
      if (_0x26d333 == 'stickerMessage' && _0x771673) {
        _0x35c703 = true;
        _0x30a59f = _0x771673.split(" ")[0x0];
        _0x4992fa = "sticker-" + _0x23329b.quoted.msg.fileSha256;
      }
    }
    if (!_0x35c703 && _0x1f823f.length > 0x1) {
      _0x4992fa = _0x1f823f[0x0].trim().toLowerCase();
      _0x30a59f = _0x1f823f[0x1].trim().toLowerCase();
    } else {
      if (!_0x35c703) {
        return await _0x23329b.send("*_Uhh Dear, Give Cmd With New Name_*\n*Eg: _.setcmd New_Name, Cmd_Name_*");
      }
    }
    if (_0x4992fa.length < 0x1) {
      return await _0x23329b.reply("*_Uhh Please, Provide New_Cmd Name First_*");
    }
    if (global.setCmdAlias[_0x4992fa]) {
      return await _0x23329b.send("*_\"" + (_0x35c703 ? "Given Sticker" : _0x4992fa) + "\" Already set for \"" + global.setCmdAlias[_0x4992fa] + "\" Cmd, Please try another " + (_0x35c703 ? "Sticker" : "Name") + '_*');
    }
    const _0x2b1556 = AdminFunction.commands.find(_0x3c5ae9 => _0x3c5ae9.pattern === _0x30a59f) || AdminFunction.commands.find(_0x23002d => _0x23002d.alias && _0x23002d.alias.includes(_0x30a59f));
    return _0x2b1556 ? (global.setCmdAlias[_0x4992fa] = _0x2b1556.pattern, await _0x23329b.send("*_Cmd \"" + global.setCmdAlias[_0x4992fa] + "\" Succesfully set to \"" + (_0x35c703 ? "Sticker" : _0x4992fa) + "\"._*\n*_These all names are reset, If bot restart_*")) : await _0x23329b.send("*_Provided Cmd( " + _0x30a59f + ") not found in bot cmds. Please Provide Valid cmd Name_*");
  } catch (_0x2afc48) {
    await _0x23329b.error(_0x2afc48 + "\nCommand:setcmd", _0x2afc48);
  }
});
AdminFunction.cmd({
  'pattern': "delcmd",
  'desc': "To check ping",
  'category': "USER",
  'fromMe': true,
  'filename': __filename
}, async (_0x5e62dd, _0x10ddeb) => {
  try {
    let _0x39b066 = _0x10ddeb ? _0x10ddeb.split(" ")[0x0].trim().toLowerCase() : '';
    let _0x30f27a = false;
    if (_0x5e62dd.quoted) {
      if (_0x5e62dd.quoted.mtype == 'stickerMessage') {
        _0x30f27a = true;
        _0x39b066 = 'sticker-' + _0x5e62dd.quoted.msg.fileSha256;
      } else {
        if (!_0x10ddeb) {
          return await _0x5e62dd.send("*_Please reply to a Sticker that set for a Cmd_*");
        }
      }
    } else {
      if (!_0x10ddeb) {
        return await _0x5e62dd.send("*_Uhh Dear, provide Name that set to a cmd_*\n*Eg: _.delcmd Cmd_Name_*");
      }
    }
    if (global.setCmdAlias[_0x39b066]) {
      await _0x5e62dd.send("*_\"" + (_0x30f27a ? "Given Sticker" : _0x39b066) + "\" deleted Succesfully at \"" + global.setCmdAlias[_0x39b066] + "\" cmd_*");
      delete global.setCmdAlias[_0x39b066];
      return;
    } else {
      return await _0x5e62dd.send("*_\"" + (_0x30f27a ? "Given Sticker" : _0x39b066) + "\" not Set for any cmd._*\n *_Please Provide Valid " + (_0x30f27a ? "Sticker" : "cmd Name") + " to delete_*");
    }
  } catch (_0x2f5bf1) {
    await _0x5e62dd.error(_0x2f5bf1 + "\nCommand:delcmd", _0x2f5bf1);
  }
});
AdminFunction.gift({
  'pattern': "ping",
  'desc': "To check ping",
  'category': 'USER',
  'filename': __filename
}, async _0x3439de => {
  var _0x40e291 = new Date().getTime();
  const {
    key: _0x5eadd5
  } = await _0x3439de.reply("*Server Check...*");
  var _0x599ed3 = new Date().getTime();
  return await _0x3439de.send("*ɢɪғᴛᴇᴅ-ᴍᴅ speed:  " + (_0x599ed3 - _0x40e291) + " ms*", {
    'edit': _0x5eadd5
  }, '', _0x3439de);
});
AdminFunction.cmd({
  'pattern': "uptime",
  'alias': ["runtime"],
  'desc': "Tells runtime/uptime of bot.",
  'category': "MISC",
  'filename': __filename
}, async _0x4c77e3 => {
  try {
    _0x4c77e3.reply("*ɢɪғᴛᴇᴅ-ᴍᴅ up for: " + runtime(process.uptime()) + " econds*");
  } catch (_0x2fc02b) {
    await _0x4c77e3.error(_0x2fc02b + "\n\ncommand : uptime", _0x2fc02b, false);
  }
});
global.create_UI = () => {
  if (!global.userImages || /text|txt|nothing|logo/.test(global.userImages)) {
    return {};
  }
  const _0x1d896a = [".jpg", '.jpeg', ".png", ".webp"];
  const _0x57abfe = [".mp4", ".avi", ".mov", ".mkv", ".gif", ".m4v"];
  if (!ui_urls || !ui_urls[0x0]) {
    ui_urls = global.userImages ? global.userImages.split(',') : [''];
    ui_urls = ui_urls.filter(_0x264c5c => _0x264c5c.trim() !== '');
  }
  let _0x18fc57 = (ui_urls[Math.floor(Math.random() * ui_urls.length)] || '').trim();
  if (/http/gi.test(_0x18fc57) && !ui_infoCache[_0x18fc57]) {
    const _0x2df403 = _0x18fc57.substring(_0x18fc57.lastIndexOf('.')).toLowerCase();
    if (_0x1d896a.includes(_0x2df403)) {
      ui_Cache[_0x18fc57] = "image";
    } else if (_0x57abfe.includes(_0x2df403)) {
      ui_Cache[_0x18fc57] = "video";
    }
  }
  return {
    [ui_Cache[_0x18fc57] || "Inavlid_Type_URL"]: {
      'url': _0x18fc57
    }
  };
};
global.createButtons = _0x2496a4 => {
  if (!_0x2496a4 || Array.isArray(_0x2496a4)) {
    return _0x2496a4 || [];
  }
  const _0x5db5c2 = [];
  let _0x12d924;
  while ((_0x12d924 = /#button\s*:\s*([^|]+)\s*\|\s*display_text\s*:\s*([^|]+)(?:\s*\|\s*(id)\s*:\s*([^|]+))?(?:\s*\|\s*(copy_code)\s*:\s*([^|]+))?\/#/ig.exec(_0x2496a4)) !== null) {
    try {
      const _0x52b1b0 = _0x12d924[0x1].trim();
      const _0x4c8a4b = _0x12d924[0x2].trim();
      const _0x6037e8 = _0x12d924[0x4] ? _0x12d924[0x4].trim() : '';
      let _0x318a99 = _0x12d924[0x6] ? _0x12d924[0x6].trim() : '';
      let _0x226452 = {
        'display_text': _0x4c8a4b
      };
      if (_0x52b1b0 === "cta_copy") {
        _0x226452 = {
          'display_text': _0x4c8a4b,
          'id': _0x6037e8,
          'copy_code': _0x318a99
        };
      } else if (_0x52b1b0 === "cta_url") {
        _0x226452 = {
          'display_text': _0x4c8a4b,
          'url': ('' + (_0x6037e8 || '')).replace(" /#", '').trim(),
          'merchant_url': _0x318a99 || "https://www.google.com"
        };
      } else {
        _0x226452 = {
          'display_text': _0x4c8a4b,
          'id': _0x6037e8
        };
      }
      if (_0x52b1b0) {
        _0x5db5c2.push({
          'name': _0x52b1b0,
          'buttonParamsJson': JSON.stringify(_0x226452)
        });
      } else {
        log("button_name missing in", _0x12d924[0x0]);
      }
    } catch (_0x18c3c7) {
      console.log(_0x18c3c7);
    }
  }
  return _0x5db5c2 || [];
};
global.sendButtons = async (_0x278c3e, _0x3a3efb = {}, _0x5a6c3d = [], _0x32a7e0 = false) => {
  if (!_0x278c3e) {
    throw "need m instance";
  }
  let _0x19d065 = _0x32a7e0 || _0x278c3e.jid;
  if (typeof _0x3a3efb != 'object') {
    _0x3a3efb = {};
  }
  _0x3a3efb.messageId = _0x3a3efb.messageId || _0x278c3e.bot.messageId();
  if (typeof _0x5a6c3d === "string") {
    _0x5a6c3d = createButtons(_0x5a6c3d);
  }
  if (typeof _0x3a3efb.buttons === "string" || Array.isArray(_0x3a3efb.buttons)) {
    _0x5a6c3d = [..._0x5a6c3d, ...(createButtons(_0x3a3efb.buttons) || [])];
  }
  let {
    generateWAMessageFromContent: _0x3faf23,
    proto: _0xffdd6d,
    prepareWAMessageMedia: _0x4e2051
  } = require("@whiskeysockets/baileys");
  let _0x4ac137 = {};
  try {
    if (typeof _0x3a3efb.imageMessage === 'object') {
      _0x4ac137 = {
        'imageMessage': _0x3a3efb.imageMessage
      };
    } else {
      if (typeof _0x3a3efb.videoMessage === 'object') {
        _0x4ac137 = {
          'videoMessage': _0x3a3efb.videoMessage
        };
      } else {
        let _0x56564d = false;
        let _0x4d31da = _0x3a3efb.image || _0x3a3efb.video ? _0x3a3efb : create_UI();
        if (_0x4d31da.image) {
          _0x56564d = (await _0x4e2051({
            'image': _0x4d31da.image || log0
          }, {
            'upload': _0x278c3e.bot.waUploadToServer
          })) || false;
        } else if (_0x4d31da.video) {
          _0x56564d = (await _0x4e2051({
            'image': _0x4d31da.video || log0
          }, {
            'upload': _0x278c3e.bot.waUploadToServer
          })) || false;
        }
        if (_0x56564d) {
          _0x4ac137 = _0x56564d.imageMessage ? {
            'imageMessage': _0x56564d.imageMessage
          } : _0x56564d.videoMessage ? {
            'videoMessage': _0x56564d.videoMessage
          } : {};
        }
      }
    }
  } catch (_0x499705) {
    _0x4ac137 = {};
  }
  let _0x26d0f1 = {
    ...(await _0x278c3e.bot.contextInfo(botname, _0x278c3e.senderName || ownername)),
    ...(_0x3a3efb.contextInfo || {})
  };
  let _0x1a4680 = _0x3faf23(_0x19d065, {
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': _0xffdd6d.Message.InteractiveMessage.create({
          'body': {
            'text': _0x3a3efb.text || _0x3a3efb.body || _0x3a3efb.caption || "*ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ ɢɪғᴛᴇᴅ ᴛᴇᴄʜ*"
          },
          'footer': {
            'text': _0x3a3efb.footer || "*ɢɪғᴛᴇᴅ-ᴍᴅ ᴠᴇʀsɪᴏɴ 4.0.0*"
          },
          'header': {
            ...(_0x4ac137 || {}),
            'hasMediaAttachment': !!(_0x4ac137.imageMessage || _0x4ac137.videoMessage),
            ...(_0x3a3efb.header || {})
          },
          'contextInfo': _0x26d0f1,
          'nativeFlowMessage': _0xffdd6d.Message.InteractiveMessage.NativeFlowMessage.create({
            'buttons': _0x5a6c3d
          })
        }),
        'messageContextInfo': {
          'deviceListMetadata': {},
          'deviceListMetadataVersion': 0x2
        }
      }
    }
  }, _0x3a3efb);
  await _0x278c3e.bot.relayMessage(_0x19d065, _0x1a4680.message, {
    'messageId': _0x3a3efb.messageId
  });
  return _0x1a4680;
};
AdminFunction.cmd({
  'cmdname': "menu",
  'desc': "Help list",
  'react': '🪀',
  'type': "USER",
  'filename': __filename
}, async (_0x37f402, _0x4781ab) => {
  try {
    const {
      commands: _0x236dc9
    } = require("../lib");
    if (_0x4781ab.split(" ")[0x0]) {
      let _0xa8f67b = [];
      const _0x1db651 = _0x236dc9.find(_0x19afd5 => _0x19afd5.pattern === _0x4781ab.split(" ")[0x0].toLowerCase());
      if (_0x1db651) {
        _0xa8f67b.push("*🍁Command:* " + _0x1db651.pattern);
        if (_0x1db651.category) {
          _0xa8f67b.push("*🧩Category:* " + _0x1db651.category);
        }
        if (_0x1db651.alias && _0x1db651.alias[0x0]) {
          _0xa8f67b.push("*🧩Alias:* " + _0x1db651.alias.join(", "));
        }
        if (_0x1db651.desc) {
          _0xa8f67b.push("*🧩Description:* " + _0x1db651.desc);
        }
        if (_0x1db651.use) {
          _0xa8f67b.push("*〽️Usa:*\n " + prefix + _0x1db651.pattern + " " + _0x1db651.use + '');
        }
        if (_0x1db651.usage) {
          _0xa8f67b.push("*〽️Usage:*\n " + _0x1db651.usage + '');
        }
        await _0x37f402.reply(_0xa8f67b.join("\n"));
      }
    }
    var _0x2095be;
    var _0x2c29ff;
    var _0x120a7c;
    var _0x440d8d;
    var _0x10d732;
    var _0x278e7c;
    var _0x52a130;
    let _0x521f70 = 0x0;
    if (menu === '') {
      _0x521f70 = Math.floor(Math.random() * 0x4) + 0x1;
    }
    if (_0x521f70 == 0x1 || menu.trim().startsWith('1') || menu.toLowerCase().includes('G1')) {
      _0x2095be = "╭━━〔 *〘 ɢɪғᴛᴇᴅ-ᴍᴅ 〙* 〕━┈⊷";
      _0x2c29ff = "┃▫│";
      _0x120a7c = "┃▫╰──────────────\n╰━━━━━━━━━━━━━━━┈⊷";
      _0x440d8d = "╭─────────────┈⊷\n│「";
      _0x10d732 = "」\n╰┬────────────┈⊷";
      _0x278e7c = "││◦➛";
      _0x52a130 = "│╰────────────┈⊷\n╰─────────────┈⊷";
    } else if (_0x521f70 == 0x2 || menu.trim().startsWith('2') || menu.toLowerCase().includes('G2')) {
      _0x2095be = "╭═══ *〘 ɢɪғᴛᴇᴅ-ᴍᴅ 〙*  ══⊷\n╭─────────────────";
      _0x2c29ff = '';
      _0x120a7c = "┃▪️\n╰═══════════════⊷\n";
      _0x440d8d = "╭─❏";
      _0x10d732 = '❏';
      _0x278e7c = "┃▪️";
      _0x52a130 = "┃▪️\n╰════════════════⊷";
    } else {
      _0x2095be = "╭══ *〘〘 ɢɪғᴛᴇᴅ-ᴍᴅ 〙〙* ═⊷";
      _0x2c29ff = "┃❍ ";
      _0x120a7c = "╰═════════════════⊷\n";
      _0x440d8d = "\n╭═══🔅";
      _0x10d732 = "🔅═══⊷";
      _0x278e7c = "┃▪️";
      _0x52a130 = "╰══════════════════⊷";
    }
    const _0x51c718 = {};
    _0x236dc9.map(async (_0x45a464, _0x769955) => {
      if (_0x45a464.dontAddCommandList === false && _0x45a464.pattern !== undefined) {
        if (!_0x51c718[_0x45a464.category]) {
          _0x51c718[_0x45a464.category] = [];
        }
        _0x51c718[_0x45a464.category].push(_0x45a464.pattern);
      }
    });
    let _0x42010f = [0x1, 0x16, 0x17, 0x1, 0x24, 0x23, 0x30, 0x1, 0x2a, 0x37, 0x38];
    let _0x587bf5 = parseInt(menu_fancy || '36') || _0x42010f[Math.floor(Math.random() * _0x42010f.length)];
    const _0x13cd03 = _0x37f402.time;
    let _0x188607 = _0x2095be + "\n" + _0x2c29ff + " *ᴏᴡɴᴇʀ:* " + ownername + "\n" + _0x2c29ff + " *ᴄᴏᴍᴍᴀɴᴅs:* " + _0x236dc9.length + "\n" + _0x2c29ff + " *ᴜᴘᴛɪᴍᴇ:* " + runtime(process.uptime()) + "\n" + _0x2c29ff + " *ʀᴀᴍ:* " + formatp(os.totalmem() - os.freemem()) + "\n" + _0x2c29ff + " *ᴛɪᴍᴇ-ɴᴏᴡ:* " + _0x13cd03 + "\n" + _0x120a7c + "\n\t *ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ ɢɪғᴛᴇᴅ ᴛᴇᴄʜ*\n " + readmore + "\n";
    for (const _0x377240 in _0x51c718) {
      _0x188607 += _0x440d8d + " *" + fancytext(_0x377240, _0x587bf5) + "* " + _0x10d732 + "\n";
      if (_0x4781ab.toLowerCase() == _0x377240.toLowerCase()) {
        _0x188607 = _0x440d8d + " *" + fancytext(_0x377240, _0x587bf5) + "* " + _0x10d732 + "\n";
        for (const _0xd08dce of _0x51c718[_0x377240]) {
          _0x188607 += _0x278e7c + " " + fancytext(_0xd08dce, _0x587bf5) + "\n";
        }
        _0x188607 += _0x52a130 + "\n";
        break;
      } else {
        for (const _0x1ec193 of _0x51c718[_0x377240]) {
          _0x188607 += _0x278e7c + " " + fancytext(_0x1ec193, _0x587bf5) + "\n";
        }
        _0x188607 += _0x52a130 + "\n";
      }
    }
    _0x188607 += caption;
    let _0x540c94 = {
      'caption': _0x188607
    };
    if (/1|buttons|btn/gi.test(BUTTONS) && _0x37f402.device !== "web") {
      await sendButtons(_0x37f402, {
        'caption': _0x188607,
        'buttons': "\n            #button:cta_url | display_text : Fork & Star Repo| id:" + github + " /# \n            #button:cta_url | display_text : Gifted-Md Website| id:" + "https://web.giftedtechnexus.co.ke" + " /# \n            #button:cta_url | display_text : Whatsapp Channel | id:" + "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l" + " /#                      #button:cta_url | display_text : Changelog (New Features) | id:" + "https://web.giftedtechnexus.co.ke/deploy/platforms/changelog" + " /#            \n           "
      });
    } else {
      await _0x37f402.sendUi(_0x37f402.chat, _0x540c94, _0x37f402);
    }
  } catch (_0x10fb27) {
    await _0x37f402.error(_0x10fb27 + "\nCommand:menu", _0x10fb27);
  }
});
AdminFunction.cmd({
  'pattern': "alive",
  'desc': "Shows system status with different designs.",
  'category': 'USER',
  'filename': __filename,
  'use': "alive"
}, async (_0x4d8f20, _0x56dc02) => {
  try {
    const _0x4d2aba = new Date().getTime();
    const _0x32719f = [async () => {
      const _0x4a11dc = await axios.get("https://i.imgur.com/z20pSwu.jpeg", {
        'responseType': "arraybuffer"
      });
      const _0x2ce98c = await axios.get("https://api.maher-zubair.tech/misc/quote");
      const _0x3c9492 = _0x2ce98c.data;
      if (!_0x3c9492 || _0x3c9492.status !== 0xc8) {
        return await _0x4d8f20.reply("*Failed to fetch a quote.*");
      }
      const _0x1f875d = "\n\n*\"" + _0x3c9492.result.body + "\"*\n_- " + _0x3c9492.result.author + '_';
      const _0x49e244 = new Date().getTime();
      const _0x2c3604 = (_0x49e244 - _0x4d2aba) / 0x3e8;
      const _0x8402df = "ɢɪғᴛᴇᴅ ᴍᴅ ᴠᴇʀsɪᴏɴ 4\n\n*Ping:* " + _0x2c3604 + " seconds" + _0x1f875d + "\n\nɢɪғᴛᴇᴅ ᴍᴅ";
      return {
        'image': _0x4a11dc.data,
        'caption': _0x8402df
      };
    }, async () => {
      const _0x251f69 = await axios.get("https://i.imgur.com/lIo3cM2.jpeg", {
        'responseType': "arraybuffer"
      });
      const _0x1efb7d = await axios.get("https://api.maher-zubair.tech/misc/fact");
      const _0x2f2342 = _0x1efb7d.data;
      if (!_0x2f2342 || _0x2f2342.status !== 0xc8) {
        return await _0x4d8f20.reply("*Failed to fetch a fact.*");
      }
      const _0x278b55 = new Date().getTime();
      const _0x1679dd = (_0x278b55 - _0x4d2aba) / 0x3e8;
      const _0x51d566 = "ɢɪғᴛᴇᴅ ᴍᴅ ᴠᴇʀsɪᴏɴ 4\n\n*Ping:* " + _0x1679dd + " seconds\n\n\n" + _0x2f2342.result.fact + "\n\nɢɪғᴛᴇᴅ ᴍᴅ";
      return {
        'image': _0x251f69.data,
        'caption': _0x51d566
      };
    }, async () => {
      const _0x3b8bde = await axios.get("https://i.imgur.com/OQOH4Gn.jpeg", {
        'responseType': "arraybuffer"
      });
      const _0x3c16ad = await axios.get("https://api.maher-zubair.tech/misc/lines");
      const _0x40d233 = _0x3c16ad.data;
      if (!_0x40d233 || _0x40d233.status !== 0xc8) {
        return await _0x4d8f20.reply("*Failed to fetch a line.*");
      }
      const _0x253ea7 = new Date().getTime();
      const _0x50f57a = (_0x253ea7 - _0x4d2aba) / 0x3e8;
      const _0x274091 = "ɢɪғᴛᴇᴅ ᴍᴅ ᴠᴇʀsɪᴏɴ 4\n\n*Ping:* " + _0x50f57a + " seconds\n\n\n" + _0x40d233.result + "\n\nɢɪғᴛᴇᴅ ᴍᴅ";
      return {
        'image': _0x3b8bde.data,
        'caption': _0x274091
      };
    }];
    const _0x5461d5 = _0x32719f[Math.floor(Math.random() * _0x32719f.length)];
    const _0x28ab75 = await _0x5461d5();
    const _0x24ce5e = {
      'quoted': _0x4d8f20,
      'contextInfo': {
        'forwardingScore': 0x3e7,
        'isForwarded': true
      }
    };
    return _0x4d8f20.bot.sendUi(_0x4d8f20.chat, _0x28ab75, _0x24ce5e);
  } catch (_0x335cc8) {
    await _0x4d8f20.error(_0x335cc8 + "\n\nCommand: alive", _0x335cc8, "*Failed to show status.*");
  }
});
AdminFunction.cmd({
  'pattern': "list",
  'desc': "list menu",
  'category': "USER"
}, async _0x2ad4fd => {
  try {
    const {
      commands: _0x3ebbc9
    } = require("../lib");
    let _0x1edd10 = "\n\tɢɪғᴛᴇᴅ ᴍᴅ ᴄᴏᴍᴍᴀɴᴅs ɪɴғᴏ\n \n";
    for (let _0x3406d6 = 0x0; _0x3406d6 < _0x3ebbc9.length; _0x3406d6++) {
      if (_0x3ebbc9[_0x3406d6].pattern == undefined) {
        continue;
      }
      _0x1edd10 += '*' + (_0x3406d6 + 0x1) + " " + fancytext(_0x3ebbc9[_0x3406d6].pattern, 0x1) + "*\n";
      _0x1edd10 += "  " + fancytext(_0x3ebbc9[_0x3406d6].desc, 0x1) + "\n";
    }
    return await _0x2ad4fd.sendUi(_0x2ad4fd.chat, {
      'caption': _0x1edd10 + Config.caption
    });
  } catch (_0x6700b8) {
    await _0x2ad4fd.error(_0x6700b8 + "\nCommand:list", _0x6700b8);
  }
});
AdminFunction.cmd({
  'pattern': "owner",
  'desc': "To check ping",
  'category': 'USER',
  'filename': __filename
}, async _0x4773cd => {
  try {
    const _0x3b57e7 = "BEGIN:VCARD\nVERSION:3.0\nFN:" + ownername + "\nORG:;\nTEL;type=CELL;type=VOICE;waid=" + global.owner?.["split"](',')[0x0] + ':+' + global.owner?.["split"](',')[0x0] + "\nEND:VCARD";
    let _0x8cfbc7 = {
      'contacts': {
        'displayName': ownername,
        'contacts': [{
          'vcard': _0x3b57e7
        }]
      },
      'contextInfo': {
        'externalAdReply': {
          'title': ownername,
          'body': "Message Gifted.",
          'renderLargerThumbnail': true,
          'thumbnailUrl': '',
          'thumbnail': log0,
          'mediaType': 0x1,
          'mediaUrl': '',
          'sourceUrl': "https://wa.me/+" + global.owner?.['split'](',')[0x0] + "?text=Hello+" + ownername
        }
      }
    };
    return await _0x4773cd.sendMessage(_0x4773cd.jid, _0x8cfbc7, {
      'quoted': _0x4773cd
    });
  } catch (_0x23d266) {
    await _0x4773cd.error(_0x23d266 + "\nCommand:owner", _0x23d266);
  }
});
AdminFunction.cmd({
  'pattern': "trt",
  'alias': ["translate"],
  'category': "USER",
  'filename': __filename,
  'use': "< text >",
  'desc': "Translate's given text in desird language."
}, async (_0x1d7e11, _0x525a54) => {
  try {
    let _0x2f8bba = _0x525a54 ? _0x525a54.split(" ")[0x0].toLowerCase() : 'en';
    if (!_0x1d7e11.reply_text) {
      var _0x251fbf = _0x525a54.replace(_0x2f8bba, '')?.["trim"]() || false;
    } else {
      var _0x251fbf = _0x1d7e11.reply_text;
    }
    if (!_0x251fbf) {
      return await _0x1d7e11.reply("*Please Give Me Text. Example: _" + prefix + "trt en Who are you_*");
    }
    var _0x3a2703 = await translatte(_0x251fbf, {
      'from': "auto",
      'to': _0x2f8bba
    });
    if ("text" in _0x3a2703) {
      return await _0x1d7e11.reply(_0x3a2703.text);
    }
  } catch (_0x97289c) {
    await _0x1d7e11.error(_0x97289c + "\n\ncommand trt", _0x97289c);
  }
});
const readDirectory = _0x234216 => {
  return new Promise((_0x4c22f5, _0x1fe951) => {
    fs.readdir(_0x234216, (_0x454f65, _0x24aff4) => {
      if (_0x454f65) {
        _0x1fe951("Error reading directory");
      } else {
        _0x4c22f5(_0x24aff4);
      }
    });
  });
};
AdminFunction.cmd({
  'pattern': 'file',
  'desc': "to get extact name where that command is in repo.\nSo user can edit that.",
  'category': 'USER',
  'fromMe': true,
  'filename': __filename
}, async (_0x4c3124, _0x45648a) => {
  try {
    if (!_0x45648a) {
      return _0x4c3124.reply("*Uhh PLease, Provide A Command/Directory*");
    }
    if (_0x45648a.startsWith('.')) {
      let _0x432adb = "*------------- FILE MANAGER -------------*\n";
      try {
        const _0x27d4c1 = await readDirectory(_0x45648a);
        _0x27d4c1.forEach(_0x4c9574 => {
          _0x432adb += _0x4c9574 + "\n";
        });
        await _0x4c3124.reply(_0x432adb.toString());
      } catch (_0x3bc017) {
        _0x4c3124.reply(_0x3bc017);
      }
      return;
    }
    let _0x590e62 = [];
    let _0x4d5c4e = _0x45648a.split(" ")[0x0].toLowerCase().trim();
    let _0x4fe66d = AdminFunction.commands.find(_0xa1ff80 => _0xa1ff80.pattern === _0x4d5c4e) || AdminFunction.commands.find(_0x26ef4b => _0x26ef4b.alias && _0x26ef4b.alias.includes(_0x4d5c4e));
    if (!_0x4fe66d) {
      return await _0x4c3124.reply("*❌No Such commands.*");
    }
    _0x590e62.push("*🍁Command:* " + _0x4fe66d.pattern);
    if (_0x4fe66d.category) {
      _0x590e62.push("*🧩Type:* " + _0x4fe66d.category);
    }
    if (_0x4fe66d.alias && _0x4fe66d.alias[0x0]) {
      _0x590e62.push("*🧩Alias:* " + _0x4fe66d.alias.join(", "));
    }
    if (_0x4fe66d.desc) {
      _0x590e62.push("*✨Description:* " + _0x4fe66d.desc);
    }
    if (_0x4fe66d.use) {
      _0x590e62.push("*〽️Usa:*\n ```" + prefix + _0x4fe66d.pattern + " " + _0x4fe66d.use + "```");
    }
    if (_0x4fe66d.usage) {
      _0x590e62.push("*〽️Usage:*\n ```" + _0x4fe66d.usage + "```");
    }
    if (_0x4fe66d.filename) {
      _0x590e62.push("*✨FileName:* " + _0x4fe66d.filename);
    }
    try {
      if (_0x45648a.includes("function") && _0x4fe66d["function"] && _0x4c3124.isSuhail && _0x4fe66d.pattern !== "file") {
        _0x590e62.push("*🧩Function:* " + _0x4fe66d['function'].toString());
      }
    } catch {}
    await _0x4c3124.reply(_0x590e62.join("\n"));
  } catch (_0x4b58d6) {
    await _0x4c3124.error(_0x4b58d6 + "\nCommand:file", _0x4b58d6);
  }
});
AdminFunction.cmd({
  'pattern': "eval",
  'alias': ['$'],
  'category': "OWNER",
  'filename': __filename,
  'fromMe': true,
  'desc': "Runs js code on node server.",
  'use': "< run code >",
  'dontAddCommandList': true
}, async (_0x13025d, _0xe7bdbf, {
  isCreator: _0x5e7971,
  cmdName: _0x50e84d,
  Void: _0x3713da
}) => {
  try {
    if (!_0xe7bdbf) {
      return _0x13025d.reply("*Provide A Query To Run Master*");
    }
    let _0x18252f = eval("const a = async()=>{\n" + _0xe7bdbf + "\n}\na()");
    if (typeof _0x18252f === "object") {
      await _0x13025d.reply(JSON.stringify(_0x18252f));
    } else {
      await _0x13025d.reply(_0x18252f.toString());
    }
  } catch (_0x24176d) {
    return await _0x13025d.reply(_0x24176d.toString());
  }
});
AdminFunction.cmd({
  'pattern': 'shell',
  'category': "OWNER",
  'filename': __filename,
  'fromMe': true,
  'desc': "Runs command in Heroku(server) shell.",
  'use': "<shell cmds | ls,cd >",
  'dontAddCommandList': true
}, async (_0x892cb1, _0x1a6c58) => {
  try {
    if (!_0x892cb1.isCreator) {
      return _0x892cb1.reply(tlang().owner);
    }
    if (!_0x1a6c58) {
      return _0x892cb1.reply("*Uhh PLease, Provide A Command to Run Heroku*");
    }
    exec(_0x1a6c58, (_0x48e34d, _0x1cac2d) => {
      if (_0x48e34d) {
        return _0x892cb1.reply('----' + tlang().title + "----\n\n" + _0x48e34d);
      }
      if (_0x1cac2d) {
        return _0x892cb1.reply('----' + tlang().title + "----\n\n" + _0x1cac2d);
      }
    });
  } catch (_0x1a6b2e) {
    await _0x892cb1.error(_0x1a6b2e + "\n\ncommand shell", _0x1a6b2e);
  }
});
AdminFunction.cmd({
  'pattern': "channel",
  'desc': "To check ping",
  'react': "🗨️",
  'category': "UPDATES",
  'filename': __filename
}, async _0x2f2db6 => {
  const _0x3009a0 = "𝗚𝗜𝗙𝗧𝗘𝗗 𝗠𝗗 𝗨𝗣𝗗𝗔𝗧𝗘𝗦 𝗖𝗛𝗔𝗡𝗡𝗘𝗟:\n\n _ʜᴇʏ ʜᴇʀᴇ's ᴏᴜʀ ᴄʜᴀɴɴᴇʟ ʟɪɴᴋ, ᴘʟᴇᴀsᴇ ғᴏʟʟᴏᴡ ᴀɴᴅ sᴜᴘᴘᴏʀᴛ ᴜs_\n *ʟɪɴᴋ:* https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l\n\n " + Config.botname + " ";
  const _0x45011b = {
    'forwardingScore': 0x3e7,
    'isForwarded': true
  };
  await _0x2f2db6.send(_0x3009a0, {
    'contextInfo': _0x45011b
  });
});
AdminFunction.cmd({
  'pattern': 'support',
  'desc': "To check ping",
  'react': "🗨️",
  'category': "UPDATES",
  'filename': __filename
}, async _0x31d542 => {
  const _0x3dbefb = "𝗚𝗜𝗙𝗧𝗘𝗗 𝗠𝗗 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗜𝗦𝗖𝗨𝗦𝗦𝗜𝗢𝗡 𝗚𝗥𝗢𝗨𝗣:\n\n *ʟɪɴᴋ:* https://chat.whatsapp.com/Czb6vkT4oaKLg80VN74QSA\n\n " + Config.botname + " ";
  const _0x895ca3 = {
    'forwardingScore': 0x3e7,
    'isForwarded': true
  };
  await _0x31d542.send(_0x3dbefb, {
    'contextInfo': _0x895ca3
  });
});

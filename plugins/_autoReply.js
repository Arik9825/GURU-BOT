export async function all(m) {

  // when someone sends a message to the bot's chat or group
  if ((m.mtype === 'personal' || m.isGroup) && !m.isBaileys && !m.isGroup) {
    this.sendMessage(m.chat, { text: `Hello @${m.sender.split('@')[0]}\nI am currently busy and will reply when I am free.\nFor urgent matters, please DM the owner.`.trim() }, { quoted: m });
    m.react('💎');
  }

  return !0;
  }

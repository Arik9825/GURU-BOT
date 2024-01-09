export async function all(m) {

  // when someone sends a message to the bot's chat or group
  if ((m.mtype === 'personal' || m.isGroup) && !m.isBaileys && !m.isGroup) {

    // Get the current time
    const currentTime = new Date().getTime();

    // Get the last message time for this user
    let lastMessageTime = this.db.data.users[m.sender].lastMessageTime || 0;

    // Check if 30 minutes have passed since the last message
    if (currentTime - lastMessageTime >= 1800000) {
      // Send the message
      this.sendMessage(
        m.chat,
        {
          text: `Hello @${m.sender.split('@')[0]}\nI am currently busy and will reply when I am free.\nFor urgent matters, please wait until I came online.`.trim()
        },
        { quoted: m }
      );

      // Update the last message time for this user
      this.db.data.users[m.sender].lastMessageTime = currentTime;

      // Save the updated database
      this.db.save();
    }

    m.react('🤖');
  }

  return !0;
          }

const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    config: {
        name: "leaderboard-leveling",
        description: "",
        usage: "<levels | messages>",
        category: "leveling",
        accessableby: "Members",
        aliases: ["lb"]
    },
    run: async (bot, message, args) => { 
  // if(!message.content.startsWith('m!'))return;  

    const embed = new Discord.RichEmbed()
    .setDescription(`Level Leaderboard: \`ts.leaderboard levels\` or Message Leaderboard: \`ts.leaderboard messages\` or Money Leaderboard: \`ts.leaderboard-money\``)
    .setColor("#FFFFFF")
 const rawData = db.all()
    .filter(data => data.ID.startsWith(`level_${message.guild.id}`))
    .sort((a, b) => b.data - a.data);
      const lvl2 = rawData.map((data2, i2) => `**${++i2}. <@${data2.ID.split('_')[2]}>** - Level: **${data2.data.toLocaleString()}**`).join("\n")
  if(!args[0]) return message.channel.send(embed)

    if (args[0] == 'levels' || args[0] == 'lvl') {
    rawData.length = 15;
   const embed = new Discord.RichEmbed()
    .setAuthor(`${message.guild.name} - Leaderboard!`, message.guild.iconURL)
    .setColor(message.member.displayHexColor)
    .setDescription(rawData.map((data2, i2) => `**${++i2}. <@${data2.ID.split('_')[2]}>** - Level: **${data2.data.toLocaleString()}**`).join("\n"))
    .setFooter(bot.user.tag, bot.user.displayAvatarURL)
    .setTimestamp()
   message.channel.send(embed)
  } else if(args[0] == 'messages' || args[0] == 'msg') {
   const rawData = db.all()
    .filter(data => data.ID.startsWith(`messages_${message.guild.id}`))
    .sort((a, b) => b.data - a.data);
    rawData.length = 15;
   const embed = new Discord.RichEmbed()
    .setAuthor(`${message.guild.name} - Leaderboard!`, message.guild.iconURL)
    .setColor(message.member.displayHexColor)
    .setDescription(rawData.map((data, i) => `**${++i}. <@${data.ID.split('_')[2]}>** - Messages: ${data.data.toLocaleString()}`).join("\n"))
    .setFooter(bot.user.tag, bot.user.displayAvatarURL)
    .setTimestamp()
   message.channel.send(embed)
  }
}
}
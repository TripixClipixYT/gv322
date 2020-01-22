const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    config: {
        name: "leaderboard-money",
        description: "",
        usage: "<money>",
        category: "economy",
        accessableby: "Members",
        aliases: ["leaders", "lb-money"]
    },
    run: async (bot, message, args) => { 
        // if (args[0] == 'money') {
const rawData = db.all()
    .filter(data => data.ID.startsWith(`money_${message.guild.id}`))
    .sort((a, b) => b.data - a.data);
    rawData.length = 10;
   const embed = new Discord.RichEmbed()
    .setAuthor(`Leaderboard!`, message.guild.iconURL)
    .setColor(message.member.displayHexColor)
    .setDescription(rawData.map((data, i) => `**${++i}. <@${data.ID.split('_')[2]}>** - ${data.data.toLocaleString()} :dollar:`).join("\n"))
    .setFooter(bot.user.tag, bot.user.displayAvatarURL)
    .setTimestamp()
   message.channel.send(embed)
        // }
}
}
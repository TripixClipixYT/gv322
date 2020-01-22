const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    config: {
        name: "level",
        description: "",
        usage: "(@user)",
        category: "leveling",
        accessableby: "Members",
        aliases: ["l", "lvl"]
    },
    run: async (bot, message, args) => { 
  // if(!message.content.startsWith('m!'))return;  
 const target = message.mentions.users.first() || bot.users.get(args[0]) || message.author;
     let messagefetch = db.fetch(`messages_${message.guild.id}_${message.author.id}`)
    let levelfetch = db.fetch(`level_${message.guild.id}_${message.author.id}`)

    if(messagefetch == null) messagefetch = '0';
    if(levelfetch == null) levelfetch = '0';

    const embed = new Discord.RichEmbed()
    .setDescription(`${target.username}, You Are Level: \`${levelfetch}\` & Have Sent: \`${messagefetch}\` Messages`)

    message.channel.send(embed)
}
}
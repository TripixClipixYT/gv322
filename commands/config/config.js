const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  config: {
    name: "config",
    description: "Shows the current server config",
    usage: "",
    category: "config",
    accessableby: "Members",
    aliases: ["cnfg"]
  },
  run: async (bot, message, args) => {
    let lgs = await db.fetch(`logs_${message.guild.id}`)
    if (lgs === null) lgs = "Not Set";
    if(lgs === true) lgs = `${lgs}`
    // console.log(md2)
    // console.log(lgs)
    let md2 = await db.fetch(`mdlogs_${message.guild.id}`)
     if (md2 === null) md2 = 'Not Set'
       if(md2 === true) md2 = `${md2}`
    let ms = await db.fetch(`mslogs_${message.guild.id}`)
     if (ms === null) ms = 'Not Set'
        let lvl = await db.fetch(`lvlogs_${message.guild.id}`)
     if (lvl === null) lvl = 'Not Set'
     if(lvl === true) lvl = `${ms}`
    let cprefix = await db.fetch(`cprefix_${message.guild.id}`)
    if(cprefix === null) cprefix = 'ts.'
    let embed = new Discord.RichEmbed()
      .setAuthor(bot.user.username, bot.user.displayAvatarURL)
      .setTitle(`${message.guild.name} Config`)
      .setColor("#436ef8")
      .addField("**Join/Leave Channel:**", `<#${lgs}>`)
      .addField(`**Prefix:**`, cprefix)
      .addField("**ModLog Channel:**", `<#${md2}>`)
      .addField("**MessageLog Channel:**", `<#${ms}>`)
      .addField("**Leveling Logs Channel:**", `<#${lvl}>`)
    message.channel.send(embed)
  }
}

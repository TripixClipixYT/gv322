const { RichEmbed } = require("discord.js")
// const { gold } = require("../../colours.json")
const fs = require("fs")
const db = require('quick.db')
// let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));
module.exports = {
    config: {
        name: "warn",
        aliases: ["w"],
        usage: "<user> <reason>",
        category: "moderation",
        description: "Warns a user",
        accessableby: "Moderators"
    },

    run: async (bot, message, args) => {
//message.reply("Disabled until further notice!")
            // let muteerle = smessage.guild.roles.find(r => r.name === 'Muted');
      if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("⛔ *You cannot execute the command due to invaild permissions.*")
        let wuser = message.mentions.users.first() || message.guild.members.get(args[0])
        if(!wuser) return message.reply("Couldn't find that user")
        // if(!wuser.hasPermission("MANAGE_MESSAGES")) return message.reply("The user has `MANAGE_MESSAGES` permissions")
        
let reason = args.slice(1).join(" ");
    // if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("⛔ *I cannot execute that command due to invaild permissions.*")    
      // if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("⛔ *You cannot execute the command due to invaild permissions.*")
       db.add(`warns_${message.guild.id}_${wuser.id}`, 1)
      let warns1 = await db.fetch(`warns_${message.guild.id}_${wuser.id}`)
      if(warns1 === null) warns1 = 0;
        wuser.send(`Hello, you have been warned in ${message.guild.name} for: ${reason}`)

        let wnrembed = new RichEmbed()
        .setColor("RED")
        .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
.addField("Moderation:", "warn")
.addField("Warned User:", wuser.user.username)
.addField("Moderator:", message.author.username)
.addField("Reason:", reason)
.addField("Current warns:", `${warns1}`)
.addField("Date:", message.createdAt.toLocaleString())
    let cchnnl2 = db.fetch(`mdlogs_${message.guild.id}`)
  message.guild.channels.get(cchnnl2).send(wnrembed);
    }    
}
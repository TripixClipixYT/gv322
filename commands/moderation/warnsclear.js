const db = require('quick.db')

const { RichEmbed } = require("discord.js")
// const { gold } = require("../../colours.json")
const fs = require("fs")
const ms = require("ms")
// let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));
module.exports = {
    config: {
        name: "warnclear",
        aliases: ["wclr", "wcl"],
        usage: "<user>",
        category: "moderation",
        description: "Clears a user's warns",
        accessableby: "Moderators"
    },

    run: async (bot, message, args) => {
    // message.reply("Disabled until further notice!")
        let wuser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1])
        if(!wuser) return message.reply("Couldn't find that user")
        // if(!wuser.hasPermission("MANAGE_MESSAGES")) return message.reply("The user has `MANAGE_MESSAGES` permissions")
//     if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("⛔ *I cannot execute that command due to invaild permissions.*")
    if(!message.member.hasPermission('MANAGE_MEMBERS')) return message.channel.send("⛔ *You cannot execute the command due to invaild permissions.*")
      db.set(`warns_${message.guild.id}_${wuser.id}`, 0)
        wuser.send(`Hello, your warns have been cleared in ${message.guild.name}`)

        let wnrembed = new RichEmbed()
        .setColor("RED")
        .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
.addField("Moderation:", "Clear Warns")
.addField("Warns Clear User:", `${wuser.user.username} (${wuser.id})`)
.addField("Moderator:", `${message.author.tag} (${message.author.id})`)
.addField("Date:", message.createdAt.toLocaleString())
    let cchnnl2 = db.fetch(`mdlogs_${message.guild.id}`)
  message.guild.channels.get(cchnnl2).send(wnrembed);
    }    
}
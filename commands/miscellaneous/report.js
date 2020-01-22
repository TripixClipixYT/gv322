const {RichEmbed} = require('discord.js');
const db = require("quick.db");

module.exports = { 
    config: {
        name: "report",
        description: "reports a user of the guild",
        usage: "<user> <reason>",
        accessableby: "Members",
    },
    run: async (bot, message, args) => {
        message.delete()
        // mentioned or grabbed user
        let target = message.mentions.members.first() || message.guild.members.get(args[0])
        if(!target) return message.channel.send("Please provide a valid user").then(m => m.delete(15000))

        // reasoning definition
        let reason = args.slice(1).join(" ")
        if(!reason) return message.channel.send(`Please provide a reason for reporting **${target.user.tag}**`).then(m => m.delete(15000))
        let repembed = new RichEmbed()
        .setColor('RED')
        .setDescription(`**A new report has landed in our lands!**\n_Reported From:_ ${message.author.tag}\n_Reported User:_ ${target.user.tag}\n**Reported For:**\n${reason}`)
        .setFooter(`Reporter ID: ${message.author.id} | Reported user ID: ${target.user.id}`)
        // grab reports channel
        let sChannel = message.guild.channels.find(x => x.name === "reports")

        // send to reports channel and add tick or cross
        message.channel.send("Your report has been filed to the staff team. Thank you!").then(m => m.delete(5000))
        sChannel.send(repembed).then(async msg => {
            await msg.react("✅")
            await msg.react("❌")
        })

  }
}

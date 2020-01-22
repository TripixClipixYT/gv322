const { RichEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const fetch = require('node-fetch');
const db = require("quick.db");

module.exports = { 
    config: {
        name: "trees",
        description: "",
        usage: "",
        category: "images",
        accessableby: "Members",
        aliases: ["tr"]
    },
    run: async (bot, message, args) => {
        let msg = await message.channel.send("Generating...")

       const { trees } = await fetch("http://api.chaosphoe.xyz/trees").then(res => res.json())
            // if(!body) return message.reply(" whoops. I broke, try again!")

            let embed = new RichEmbed()
            .setColor(cyan)
            .setAuthor(`${bot.user.username} Trees!`, message.guild.iconURL)
            .setDescription(`**Trees Count: 🌲**${trees.toLocaleString()}`)
            .setTimestamp()
            .setFooter(bot.user.username, bot.user.displayAvatarURL)

                msg.edit(embed)
        
    }
}
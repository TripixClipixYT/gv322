const { RichEmbed } = require('discord.js')
const db = require("quick.db");

module.exports = { 
    config: {
        name: "ping",
        description: "PONG! Displays the api & bot latency",
        usage: "",
        category: "miscellaneous",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {

    message.channel.send("Pinging...").then(m => {
        let ping = m.createdTimestamp - message.createdTimestamp
        let choices = ["Is this really my ping", "Is it okay? I cant look", "I hope it isnt bad"]
        let response = choices[Math.floor(Math.random() * choices.length)]
        let pingembed = new RichEmbed()
        .setColor('RANDOM')
        .setDescription(`${response}:\nBot Latency: \`${ping}\`\nAPI Latency: \`${Math.round(bot.ping)}\``)
            m.edit(pingembed)
        })
  }
}
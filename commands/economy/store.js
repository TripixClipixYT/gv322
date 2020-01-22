const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    config: {
        name: "store",
        description: "",
        usage: "",
        category: "economy",
        accessableby: "Members",
        aliases: ["shop"]
    },
    run: async (bot, message, args) => { 
          // if(!message.content.startsWith('m!'))return;  


    let embed = new Discord.RichEmbed()
    .setDescription("**VIP Ranks**\n\nBronze: 3500 Coins [ts.buy bronze]\n\nSilver: 5000 Coins [ts.buy silver]\n\nDiamond: 30000 Coins [ts.buy diamond]\n\n**Lifestyle Items**\n\nFresh Nikes: 600 [ts.buy nikes]\nCar: 800 [ts.buy car]\nMansion: 1200 [ts.buy mansion]")
    .setColor("#FFFFFF")
    message.channel.send(embed)
    }
}
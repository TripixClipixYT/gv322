const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    config: {
        name: "storeinfo",
        description: "",
        usage: "<bronze, silver, diamond, nikes, car, mansion>",
        category: "economy",
        accessableby: "Members",
        aliases: ["sti"]
    },
    run: async (bot, message, args) => { 

    // if(!message.content.startsWith('m!'))return;  
  
    if (args[0] == 'bronze') {
    
      let embed = new Discord.RichEmbed()
      .setDescription("**Bronze Rank**\n\nBenefits: Chance to get more coins from robbing someone")
      .setColor("#FFFFFF")
      message.channel.send(embed)
       } else if(args[0] == 'silver') {
      let embed = new Discord.RichEmbed()
      .setDescription("**Silver Rank**\n\nBenefits: Chance to win coins, roles on our Discord Server")
      .setColor("#FFFFFF")
      message.channel.send(embed)
       } else if(args[0] == 'diamond') {
          let embed = new Discord.RichEmbed()
      .setDescription("**Diamond VIP**\n\nBenefits: Chance to win coins, special role on our Discord Server + access to staff chat")
      .setColor("#FFFFFF")
      message.channel.send(embed)
    } else if(args[0] == 'nikes') {
      let embed = new Discord.RichEmbed()
      .setDescription("**Fresh Nikes**\n\nBenefits: Chance to win coins, roles on our Discord Server + More by leading the leaderboard")
      .setColor("#FFFFFF")
      message.channel.send(embed)
    } else if(args[0] == 'car') {
      let embed = new Discord.RichEmbed()
      .setDescription("**Car**\n\nBenefits: Chance to win coins, roles on our Discord Server + More by leading the leaderboard")
      .setColor("#FFFFFF")
      message.channel.send(embed)
  } else if(args[0] == 'mansion') {
    let embed = new Discord.RichEmbed()
    .setDescription("**Mansion**\n\nBenefits: Chance to win coins, roles on our Discord Server + More by leading the leaderboard")
    .setColor("#FFFFFF")
    message.channel.send(embed)
  }
if(!args[0]) return message.reply('OOops... use one of these arguments <bronze, silver, diamond, nikes, car, mansion>')
  }

    }
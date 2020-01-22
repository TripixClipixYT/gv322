const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    config: {
        name: "weekly",
        description: "",
        usage: "",
        category: "economy",
        accessableby: "Members",
        aliases: []
    },
    run: async (bot, message, args) => { 
       let user = message.author;
  let timeout = 604800000;
  let amount = 1500;

  let weekly = await db.fetch(`weekly_${message.guild.id}_${user.id}`);

  if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
    let time = ms(timeout - (Date.now() - weekly));
  
    let time4Embed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription(`You have already collected your weekly reward\n\nCollect it again in ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(time4Embed)
  } else {
    let money4Embed = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`You've collected your weekly reward of ${amount} coins`);
  message.channel.send(money4Embed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`weekly_${message.guild.id}_${user.id}`, Date.now())


  }
    }
}
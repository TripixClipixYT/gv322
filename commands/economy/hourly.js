const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    config: {
        name: "hourly",
        description: "",
        usage: "",
        category: "economy",
        accessableby: "Members",
        aliases: ['hly']
    },
    run: async (bot, message, args) => { 
  // if(!message.content.startsWith('m!'))return;  

  let user = message.author;

  let timeout = 3600000;
  let amount = 50;

  let hourly = await db.fetch(`hourly_${message.guild.id}_${user.id}`);

  if (hourly !== null && timeout - (Date.now() - hourly) > 0) {
    let time = ms(timeout - (Date.now() - hourly));
  
    let time2Embed = new Discord.RichEmbed()
    .setColor("RED")
    .setDescription(`You've already collected your hourly reward\n\nCollect it again in ${time.minutes} Minutes, ${time.seconds} Seconds `);
    message.channel.send(time2Embed)
  } else {
    let money2Embed = new Discord.RichEmbed()
  .setColor("GREEN")
  .setDescription(`You've collected your hourly reward of ${amount}$ coins`);
  message.channel.send(money2Embed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`hourly_${message.guild.id}_${user.id}`, Date.now())


  }
}
}
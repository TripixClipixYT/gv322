const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    config: {
        name: "monthly",
        description: "",
        usage: "",
        category: "economy",
        accessableby: "Members",
        aliases: ['mly']
    },
    run: async (bot, message, args) => { 
  // if(!message.content.startsWith('m!'))return;  

  let user = message.author;

  let timeout = 2592000000;
  let amount = 4000;

  let monthly = await db.fetch(`monthly_${message.guild.id}_${user.id}`);

  if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
    let time = ms(timeout - (Date.now() - monthly));
  
    let time3Embed = new Discord.RichEmbed()
    .setColor("RED")
    .setDescription(`You've already collected your monthly reward\n\nCollect it again in ${time.days} Days, ${time.hours} Hours, ${time.minutes} Minutes, ${time.seconds} Seconds `);
    message.channel.send(time3Embed)
  } else {
    let money3Embed = new Discord.RichEmbed()
  .setColor("GREEN")
  .setDescription(`You've collected your monthly reward of ${amount}$ coins`);
  message.channel.send(money3Embed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`monthly_${message.guild.id}_${user.id}`, Date.now())


  }
}
}
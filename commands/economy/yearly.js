const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    config: {
        name: "yearly",
        description: "",
        usage: "",
        category: "economy",
        accessableby: "Members",
        aliases: ['yly']
    },
    run: async (bot, message, args) => { 
  // if(!message.content.startsWith('m!'))return;  

  let user = message.author;

  let timeout = 31536000000;
  let amount = 20000;

  let yearly = await db.fetch(`yearly_${message.guild.id}_${user.id}`);

  if (yearly !== null && timeout - (Date.now() - yearly) > 0) {
    let time = ms(timeout - (Date.now() - yearly));
  
    let time5Embed = new Discord.RichEmbed()
    .setColor("RED")
    .setDescription(`You've already collected your yearly reward\n\nCollect it again in ${time.days} Days, ${time.hours} Hours, ${time.minutes} Minutes, ${time.seconds} Seconds `);
    message.channel.send(time5Embed)
  } else {
    let money5Embed = new Discord.RichEmbed()
  .setColor("GREEN")
  .setDescription(`You've collected your yearly reward of ${amount}$ coins`);
  message.channel.send(money5Embed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`yearly_${message.guild.id}_${user.id}`, Date.now())


  }
}
}
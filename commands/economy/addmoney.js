const Discord = require("discord.js");
const db = require("quick.db");
const { ownerid2 } = require('../../botconfig.json')

module.exports = {
    config: {
        name: "addmoney",
        description: "",
        usage: "<user> <amount>",
        category: "economy",
        accessableby: "Administrators",
        aliases: ["am"]
    },
    run: async (bot, message, args) => { 
  if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send("You need the `ADMINISTRATOR` permissions to use that command!")
  // if(!message.author.id == ownerid2) return;
  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.add(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setDescription(`Added ${args[1]}$ coins\n\nNew Balance: ${bal}$`);
    message.channel.send(moneyEmbed)

}
}

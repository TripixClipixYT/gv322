const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    config: {
        name: "removemoney",
        description: "",
        usage: "<user> <amount>",
        category: "economy",
        accessableby: "Administrators",
        aliases: ["rrm"]
    },
    run: async (bot, message, args) => {  
  if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send("You need the `ADMINISTRATOR` permissions to use that command!")


  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.subtract(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription(`Removed ${args[1]} coins\n\nNew Balance: ${bal}`);
    message.channel.send(moneyEmbed)
}
}
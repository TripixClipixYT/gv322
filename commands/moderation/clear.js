const { RichEmbed } = require("discord.js")
const db = require("quick.db");

module.exports = {
    config: {
        name: "purge",
        description: "",
        usage: "max amount = 100",
        category: "moderation",
        accessableby: "Administrators",
        aliases: ["b", "banish", "remove"]
    },
    run: async (bot, message, args) => {
      let casing = 1;
casing++;
if(!message.member.hasPermission(["MANAGE_MESSAGES"])) return;
    message.delete()
    if(!args[0]) return message.channel.send("specify amount 1-100").then(msg => msg.delete(10000));
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Cleared  ${args[0]} messages.`).then(msg => msg.delete(5000)).catch(err => message.reply(`Something went wrong ${err}`))
      let purgechannel = message.guild.channels.find(x => x.name === "modmails");
      let purgembed = new RichEmbed()
    .setColor("RED_LIGHT")
    .setTitle(`[ Case ${casing} ]`)
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderation:", "purge/clear messages")
    .addField("Moderator:", message.author.tag)
    .addField("Cleared Messages:", args[0])
    .addField("Channel:", message.channel)
    .addField("Date:", message.createdAt.toLocaleString())
    let cchnnl2 = db.fetch(`mdlogs_${message.guild.id}`)
  bot.guild.channels.get(cchnnl2).send(purgembed);
      
    })
    }
}
const { RichEmbed } = require("discord.js")
const { red_light } = require("../../colours.json");
const db = require("quick.db");

module.exports = {
    config: {
        name: "channelcreate",
        description: "Creates a channel in the guild!",
        usage: "<channel name>",
        category: "moderation",
        accessableby: "Administrators",
        aliases: ["chc", "c"]
    },
    run: async (bot, message, args) => {
      if(!message.member.hasPermissions("MANAGE_CHANNELS")) return message.reply("Sorry, you need the `MANAGE_CHANNELS` permissions to run that command")
            if(!message.guild.me.hasPermissions("MANAGE_CHANNELS")) return message.reply("Sorry, i need the `MANAGE_CHANNELS` permissions to run that command")
      let channel = args[0];
let guild = message.guild;
      guild.createChannel(channel, { type: 'text' })
  .then(console.log)
   .catch(err => message.channel.send(err));
    if(!channel) return message.reply("Please specify a name for the channel")
    let embed = new RichEmbed()
    .setColor(red_light)
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderation:", "Channel Create")
    .addField("Moderator:", message.author.username)
    .addField("Channel Name:", channel)
    .addField("Date:", message.createdAt.toLocaleString())
    
        let cchnnl2 = db.fetch(`mdlogs_${message.guild.id}`)
  bot.guild.channels.get(cchnnl2).send(embed);
    }
}
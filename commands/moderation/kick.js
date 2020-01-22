const { RichEmbed } = require("discord.js");
const { red_light } = require("../../colours.json");
const db = require("quick.db");

module.exports = {
  config: {
    name: "kick",
    description: "Kick a user from the guild!",
    usage: "",
    category: "moderation",
    accessableby: "Moderator",
    aliases: ["k"]
  },
  run: async (bot, message, args) => {
    let casing = 1;
casing++;
    if (!message.member.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"]))
      return message.channel.send(
        "You dont have permission to perform this command!"
      );

    let kickMember =
      message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!kickMember)
      return message.channel.send("Please provide a user to kick!");

    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reason given!";

    if (!message.guild.me.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"]))
      return message.channel.send("I dont have permission to do this!");

    kickMember
      .send(
        `Hello, you have been kicked from ${message.guild.name} for: ${reason}`
      )
      .then(() => kickMember.kick())
      .catch(err => console.log(err));

    message.channel
      .send(`**${kickMember.user.tag}** has been kicked`)
      .then(m => m.delete(5000));

    let embed = new RichEmbed()
      .setColor(red_light)
    .setTitle(`[ Case ${casing} ]`)
      .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
      .addField("Moderation:", "kick")
      .addField("Mutee:", kickMember.user.username)
      .addField("Moderator:", message.author.username)
      .addField("Reason:", reason)
      .addField("Date:", message.createdAt.toLocaleString());

    let cchnnl2 = db.fetch(`mdlogs_${message.guild.id}`)
  bot.guild.channels.get(cchnnl2).send(embed);
  }
};

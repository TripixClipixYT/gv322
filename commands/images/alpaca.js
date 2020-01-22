const { RichEmbed } = require("discord.js");
const { cyan } = require("../../colours.json");
const fetch = require("node-fetch");
const db = require("quick.db");

module.exports = {
  config: {
    name: "alpaca",
    description: "sends a picture of a alpaca!",
    usage: "",
    category: "images",
    accessableby: "Members",
    aliases: ["catto"]
  },
  run: async (bot, message, args) => {
    let msg = await message.channel.send("Generating...");

    fetch("https://apis.duncte123.me/alpaca")
      .then(res => res.json())
      .then(body => {
        if (!body) return message.reply(" whoops. I broke, try again!");

        let embed = new RichEmbed()
          .setColor(cyan)
          .setAuthor(`${bot.user.username} Alpaca!`, message.guild.iconURL)
          .setImage(body.data.file)
          .setTimestamp()
          .setFooter(
            bot.user.username.toUpperCase(),
            bot.user.displayAvatarURL
          );

        msg.edit(embed);
      });
  }
};

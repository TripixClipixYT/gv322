const { RichEmbed } = require("discord.js");
const { gold } = require("../../colours.json");
const db = require("quick.db");

module.exports = {
  config: {
    name: "suggest",
    description: "",
    usage: "<suggestion>",
    accessableby: "Owner",
    category: "miscellaneous"
  },
  run: async (bot, message, args) => {
    message.delete()
    // reasoning definition
    let reason = args.join(" ");
    if (!reason)
      return message.channel
        .send(`Please provide a suggestion!`)
        .then(m => m.delete(15000));

    // grab reports channel
    let suggestrole = message.guild.roles.find(r => r.name === "Suggester");
    let sChannel = message.guild.channels.find(x => x.name === "suggestions");
    if(!suggestrole){
        message.reply("I cant find a **Suggester** role!")      
    }
    // send to reports channel and add tick or cross
    message.member.addRole(suggestrole);
    message.channel
      .send("Your suggestion has been filled to the staff team. Thank you!")
      .then(m => m.delete(15000));
    let suggestembed = new RichEmbed()
      .setFooter(bot.user.username, bot.user.displayAvatarURL)
      .setTimestamp()
      .addField(`New Suggestion from:`, `**${message.author.tag}**`)
      .addField(`Suggestion:`, `${reason}\n**Its your choice!**`)
      .setColor(gold);
    sChannel.send(suggestembed).then(async msg => {
      await msg.react("✅");
      await msg.react("❌");
    });
    const filter = (reaction, user) => {
	return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
};

message.awaitReactions(filter, { max: 1, time: 86400000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '✅') {
			message.reply('you reacted with white check mark.');
		} else {
			message.reply('you reacted with negative cross mark.');
		}
	})
	.catch(collected => {
		message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
	});
  }
};

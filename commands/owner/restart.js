const { ownerid2, prefix, token2 } = require("../../botconfig.json");
const { RichEmbed } = require('discord.js')
const token3 = process.env.token3;
module.exports = { 
    config: {
        name: "restart",
        description: "Restarts the bot",
        accessableby: "Bot Owner",
        type: "owner",
        usage: ``,
        category: "owner",
    },
    run: async (bot, message, args) => {
      let restart = new RichEmbed()
      .setColor('GREEN')
      .setDescription('Restarted!')
 if(message.author.id == ownerid2){
        bot.destroy().then(_ => bot.login(token3)).then(message => {
          message.channel.send(restart)
        })     
    } else {
      message.reply("Only the **Bot Owner** can use that command.")
    }
}
}
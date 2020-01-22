const { ownerid2, prefix, token } = require("../../botconfig.json");
const { RichEmbed } = require('discord.js')
module.exports = { 
    config: {
        name: "guilds",
        description: "",
        accessableby: "Bot Owner",
        type: "owner",
        usage: ``,
        category: "owner",
    },
    run: async (bot, message, args) => {
      if(message.author.id != "473276250815856650") return message.channel.send("Only the **Bot Owner** can use this command")
  
    let guilds = bot.guilds.map(g => `${g.name.replace(/[^\x00-\x7F]/g, "")}${" ".repeat(Math.floor(Math.max(...bot.guilds.map(g => g.name.length)))+ - g.name.replace(/[^\x00-\x7F]/g, "").length)} | ${g.id}`).join('\n')
    const embed = new RichEmbed()
      .setColor("RED")
      .setAuthor(` Guild Name | Guild ID | Guild Membercount `)
      .setDescription(`\`\`\`js\n${guilds}\`\`\``)
      .addField('[**__Guild Count__**]', `\`\`\`js\n${bot.guilds.size}\`\`\``, true)
      .addField('[**__User Count__**] (excludes bots)', `\`\`\`js\n${bot.users.size}\`\`\``, true)
        return message.channel.send(embed);
    }
}
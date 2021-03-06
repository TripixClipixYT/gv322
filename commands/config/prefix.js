const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    config: {
        name: "setprefix",
        description: "Sets the bot prefix of the guild",
        usage: "<prefix>",
        category: "config",
        accessableby: "Admin",
        aliases: ["prfx", "prefix"]
    },
    run: async (bot, message, args) => { 
        // let permission = message.member.hasPermission("MANAGE_CHANNELS");

        if(!message.author.id == '473276250815856650' && message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You need the `ADMINISTRATOR` permissions to use that command!')
        
         let cArgs2 = args[0]
         
         // if(isNaN(cArgs2)) return message.channel.send("You must specify a valid id for the welcome channel!")
             
         // try{
             // bot.guilds.get(message.guild.id).channels.get(cArgs).send("Welcome channel set!")
             
         db.set(`cprefix_${message.guild.id}`, cArgs2)
         
         message.channel.send("You have successfully set the bot prefix to **" + cArgs2 + "**")
         }
}
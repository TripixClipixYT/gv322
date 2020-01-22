const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    config: {
        name: "setmsgchannel",
        description: "Sets the MessageDelete/MessageUpdate channel",
        usage: "<channel id>",
        category: "config",
        accessableby: "Admin",
        aliases: ["smsc"]
    },
    run: async (bot, message, args) => { 
        // let permission = message.member.hasPermission("MANAGE_CHANNELS");

        if(!message.author.id == '473276250815856650' && message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You need the `ADMINISTRATOR` permissions to use that command!')
        
         let cArgs = args[0]
         
         if(isNaN(cArgs)) return message.channel.send("You must specify a valid id for the welcome channel!")
             
         try{
             // bot.guilds.get(message.guild.id).channels.get(cArgs).send("Welcome channel set!")
             
         db.set(`mslogs_${message.guild.id}`, cArgs)
         
         message.channel.send("You have successfully set the message logs channel to <#" + cArgs + ">")
        return;
         }catch(e){
            return message.channel.send("Error: missing permissions or channel doesn't exist")
         }
         
         
}
}
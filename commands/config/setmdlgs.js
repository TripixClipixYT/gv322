const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    config: {
        name: "setmodlogchannel",
        description: "Sets the Mod logs channel",
        usage: "<channel id>",
        category: "config",
        accessableby: "Admin",
        aliases: ["smlgc"]
    },
    run: async (bot, message, args) => { 
        // let permission = message.member.hasPermission("MANAGE_CHANNELS");

        if(!message.author.id == '473276250815856650' && message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You need the `ADMINISTRATOR` permissions to use that command!')
        
         let cArgs2 = args[0]
         
         if(isNaN(cArgs2)) return message.channel.send("You must specify a valid id for the welcome channel!")
             
         try{
             // bot.guilds.get(message.guild.id).channels.get(cArgs).send("Welcome channel set!")
             
         db.set(`mdlogs_${message.guild.id}`, cArgs2)
         
         message.channel.send("You have successfully set the modlog channel to <#" + cArgs2 + ">")
        return;
         }catch(e){
            return message.channel.send("Error: missing permissions or channel doesn't exist")
         }
         
         
}
}
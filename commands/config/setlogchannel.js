const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    config: {
        name: "setlogchannel",
        description: "",
        usage: "<mentioned channel>",
        category: "config",
        accessableby: "Members",
        aliases: ["slgc"]
    },
    run: async (bot, message, args) => { 
        let permission = message.member.hasPermission("ADMINISTRATOR");
/*

client.on("messageDelete", (messageDelete) => {

  let DeleteEmbed = new Discord.RichEmbed()
  .setTitle("**DELETED MESSAGE**")
  .setColor("#fc3c3c")
  .addField("Author", messageDelete.author.tag)
  .addField("Channel", messageDelete.channel)
  .addField("Message", messageDelete.content)
  .setFooter(`Message ID: ${messageDelete.id} | Author ID: ${messageDelete.author.id}`);

  let DeleteChannel = messageDelete.guild.channels.find(x => x.name === "bot-logs");
  DeleteChannel.send(DeleteEmbed);
});
*/
        if(!permission) return message.channel.send("You are missing the permission `ADMINISTRATOR`")
        
         let cArgs = args[0]
         
         if(isNaN(cArgs)) return message.channel.send("You must specify a valid id for the welcome channel!")
             
         try{
             bot.guilds.get(message.guild.id).channels.get(cArgs).send("Welcome channel set!")
             
         db.set(`logs_${message.guild.id}`, cArgs)
         
         message.channel.send("You have successfully set the welcome channel to <#" + cArgs + ">")
        return;
         }catch(e){
            return message.channel.send("Error: missing permissions or channel doesn't exist")
         }
         
         
}
}
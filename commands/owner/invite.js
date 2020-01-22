const Discord = require('discord.js'), 
      arraySort = require('array-sort');
const table = require('table')
const send = require('quick.hook')
let invisible = '#36393e';
const { ownerid2, prefix, token } = require("../../botconfig.json");

exports.run = async (client, message, args, color) => {
if(message.author.id != "473276250815856650") return message.channel.send("Only the **Bot Owner** can use this command")
  
    let invites = await message.guild.fetchInvites().catch(error => {
      console.log(error);
    })

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true }); 

    let possibleinvites = [['User', 'Uses', 'User ID']];
    invites.forEach(function(invites) {
        possibleinvites.push([invites.inviter.username, invites.uses, message.author.id])
    })

    const embed = new Discord.RichEmbed()
        .setColor(invisible)
        .setDescription(`${table.table(possibleinvites)}`)
        .setTimestamp()
        .setFooter("• Requested by " + message.author.tag, message.author.displayAvatarURL)
// message.channel.send(embed)
message.channel.send(embed)
}

module.exports.config = {
  name: "invite",
  aliases: ["inv"],
  category: "owner"
}
const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    config: {
        name: "balance",
        description: "",
        usage: "(@user)",
        category: "economy",
        accessableby: "Members",
        aliases: ["bal"]
    },
    run: async (bot, message, args) => { 
  // if(!message.content.startsWith('m!'))return;  

  let user = message.mentions.members.first() || message.author;

  let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

        let vip = await db.fetch(`bronze_${message.guild.id}_${user.id}`)
    if(vip === null) vip = 'None'
    if(vip === true) vip = 'Bronze'
    
    let vip2 = await db.fetch(`silver_${message.guild.id}_${user.id}`)
    if(vip2 == null) vip2 = 'No Second Rank'
    if(vip2 === true) vip2 = 'Silver'
     
    let vip3 = await db.fetch(`diamond_${message.guild.id}_${user.id}`)
    if(vip3 == null) vip3 = 'No Third VIP Rank'
    if(vip3 === true) vip3 = 'Diamond'
  let shoes = await db.fetch(`nikes_${message.guild.id}_${user.id}`)
  if(shoes === null) shoes = '0'

  let newcar = await db.fetch(`car_${message.guild.id}_${user.id}`)
  if(newcar === null) newcar = '0'

  let newhouse = await db.fetch(`house_${message.guild.id}_${user.id}`)
  if(newhouse === null) newhouse = '0'
      
  let moneyEmbed = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`**${user}'s Balance**\n\n:moneybag: Pocket: ${bal.toLocaleString()}\n:credit_card: Bank: ${bank.toLocaleString()}`)
   .addField(`VIP Ranks: **${vip}** | **${vip2}** | **${vip3}**`, `**Inventory**\nNikes: **${shoes}**\nCars: **${newcar}**\nMansions: **${newhouse}**`, true)
  message.channel.send(moneyEmbed)
//   let money = await db.fetch(`money_${message.guild.id}_${member.id}`)
//   if (money === null) money = 0;

//   let bank = await db.fetch(`bank_${message.guild.id}_${member.id}`)
//   if (bank === null) bank = 0;

}
}
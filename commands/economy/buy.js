const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    config: {
        name: "buy",
        description: "",
        usage: "<input>",
        category: "economy",
        accessableby: "Members",
        aliases: []
    },
    run: async (bot, message, args) => {    
          let user = message.author;

    let author = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let Embed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription(`You need 2000 coins to purchase Bronze VIP`);

    if (args[0] == 'bronze') {
        if (author < 3500) return message.channel.send(Embed)
        
        db.fetch(`bronze_${message.guild.id}_${user.id}`);
        db.set(`bronze_${message.guild.id}_${user.id}`, true)

        let Embed2 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Purchased Bronze VIP For 3500 Coins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 3500)
        message.channel.send(Embed2)
    } else if(args[0] == 'silver'){
        db.fetch(`silver_${message.guild.id}_${user.id}`);
        db.set(`silver_${message.guild.id}_${user.id}`, true)
        db.subtract(`money_${message.guild.id}_${user.id}`, 5000)
        let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
        if(money < 5000){
          db.subtract(`bank_${message.guild.id}_${user.id}`, 5000)
        }
         let Embedw = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Purchased Silver VIP For 5000 Coins`);
      message.channel.send(Embedw)
    } else if(args[0] == 'nikes') {
        let Embed2 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`You need 600 coins to purchase some Nikes`);

        if (author < 600) return message.channel.send(Embed2)
              let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
        if(money < 600){
          db.subtract(`bank_${message.guild.id}_${user.id}`, 600)
        }
        db.fetch(`nikes_${message.guild.id}_${user.id}`)
        db.add(`nikes_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Purchased Fresh Nikes For 600 Coins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 600)
        message.channel.send(Embed3)
      
        } else if(args[0] == 'diamond') {
        let Embed2 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`You need 30000 coins to purchase some Nikes`);

        if (author < 30000) return message.channel.send(Embed2)
       
        db.fetch(`diamond_${message.guild.id}_${user.id}`)
        db.set(`diamond_${message.guild.id}_${user.id}`, true)

        let Embed4 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Purchased Diamond VIP Rank For 30000 Coins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 30000)
        message.channel.send(Embed4)
          
    } else if(args[0] == 'car') {
        let Embed2 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`You need 800 coins to purchase a new car`);

        if (author < 800) return message.channel.send(Embed2)
       
        db.fetch(`car_${message.guild.id}_${user.id}`)
        db.add(`car_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Purchased a New Car For 800 Coins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    } else if(args[0] == 'mansion') {
        let Embed2 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`You need 1200 coins to purchase a Mansion`);

        if (author < 1200) return message.channel.send(Embed2)
       
        db.fetch(`house_${message.guild.id}_${user.id}`)
        db.add(`house_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Purchased a Mansion For 1200 Coins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 1200)
        message.channel.send(Embed3)
    } else {
        let embed3 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription('Enter an item to buy')
        message.channel.send(embed3)
    }
    }
}
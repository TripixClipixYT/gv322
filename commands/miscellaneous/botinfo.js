const { RichEmbed, version } = require("discord.js")
const { cyan } = require("../../colours.json");
const { stripIndents } = require("common-tags")
const { ownerid, Version } = require("../../botconfig.json");
// const  name  = process.env.PROJECT_DOMAIN;
// const os = require('os')
let cpuStat = require("cpu-stat")
const moment = require('moment')
// const { discordjs } = require('../../package.json')
// const { Manager } = require("../../shards.js");
// const { duration } = require("./uptime.js")
const db = require("quick.db");

module.exports = {
    config: {
        name: "botinfo",
        description: "",
        usage: "",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["bi", "stats"]
    },
    run: async (bot, message, args) => {
           let cprefix = await db.fetch(`cprefix_${message.guild.id}`)
      if(cprefix === null) cprefix = 'ts.'
    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        return `${hrs.padStart(2, '0')} Hours, ${min.padStart(2, '0')} Minutes, ${sec.padStart(2, '0')} Seconds`
    }
    const body = {
         shards: 2,
      }         

        // const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]")
        // let startDate = Date.now();
        // let usage = process.cpuUsage(previousUsage);/
      // let result = 100 * (usage.user + usage.system) / ((Date.now() - startDate))
    // let cpupercent = Math.round((cpu * 100) / 100) / 100;
      //    ````css\n + Any suggestions or bugs must be reported in our Support Server!\nhttps://discord.gg/uHer6SE````
    let users = bot.users.size.toLocaleString()
    const botembed = new RichEmbed()
    .setColor("BLUE")
    .setDescription(`Updating stats. Please wait ...`)
    // message.channel.send(botembed).then(m => {
//     setInterval(function() => {
                    // let cpu = Math.round(process.cpuUsage().system / 100 / 100 / 10)
     let cpuLol;
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
//                 })
      let max = 100;
      let cpu = Math.round(process.cpuUsage().system)
let cpupercent = Math.round((cpu * max) / 1000) / 100 / 100;
    let biembed = new RichEmbed()
    .setColor('#436ef8')
    .setAuthor(bot.user.username, bot.user.displayAvatarURL)
    .setTimestamp()
    .setTitle(`${bot.user.tag}'s Info`)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("**General Statistics**", stripIndents`
    **Bot's Name:** ${bot.user.username}
    **Bot Owner:** ${ownerid}
    **Bot Version:** ${Version}
    **Bot ID:** ${bot.user.id}
    **Bot Discriminator:** ${bot.user.discriminator}
    **Guild Prefix:** ${cprefix}
    **Bot Default Prefix:** ts.
    **Server Count:** ${bot.guilds.size}
    **Users Count:** ${users}
    **Channels Count:** ${bot.channels.size.toLocaleString()}
    **Emojis Count:** ${bot.emojis.size.toLocaleString()}
    **Voice/Text Channels Count:** ${bot.channels.filter(channel => channel.type === 'voice').size} Voice Channels / ${bot.channels.filter(channel => channel.type    === 'text').size} Text Channels
    **Commands Size:** ${bot.commands.size}
    **Nickname:** ${message.guild.members.get(bot.user.id).nickname !== null ? `${message.guild.members.get(bot.user.id).nickname}` : 'None'}
    `, true)
    // **Memory Usage:** ${(process.memoryUsage().heapUsed 1024 / 1024).toFixed(2)} MB / 512 MB
    .addField("**System Statisctics**", stripIndents`
    **Developing Language:** JavaScript
    **Library Used:** discord.js
    **Memory Usage:** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / 512 MB
    **External Memory Usage:** ${(process.memoryUsage().external / 1024 / 1024).toFixed(2)} MB
    **RSS Memory Usage:** ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB
    **Bot was born at:** ${bot.user.createdAt.toDateString()}
    **Bot Status:** Online
    **Uptime:** ${duration(bot.uptime)}
    **Node:** ${process.version}
    **Discord.js Version:** v${version}
    **CPU Usage:** \`${cpupercent}%\`
    **Bot Reset Time:** Every 8-12 Hours
    `,
    true)
    .addField("**Changes:**", '```diff\n- 14.01.2020\n Fixed channel create command```')
    .addField("**Note:**", '```css\n- We will be moving the bot in a few hours... So expect some downtime And maybe data will be lost... :(```')
    .addField("**Note 2:**", '```css\n + Any suggestions or bugs must be reported in our Support Server!\nhttps://discord.gg/uHer6SE```')
        // .addField("**Leveling note:**", '```css\n - Disabled embed levels up to not cause spam```')
    // .addField("**Latest Changes are on:**", '```6.01.2020```')
    .setFooter(bot.user.username, bot.user.displayAvatarURL)
        // setTimeout(function() {
    message.channel.send(biembed)
          // }, 1000) }) 
    })
    }
}
const { RichEmbed } = require("discord.js");
const { red_light } = require("../../colours.json");
const db = require("quick.db")
const moment = require('moment')
module.exports = {
  config: {
    name: "userinfo",
    description: "Pulls the userinfo of yourself or a user!",
    usage: "(@mention)",
    category: "miscellaneous",
    accessableby: "Members",
    aliases: ["ui", "whois"]
  },
  run: async (bot, message, args) => {
      function resolveMember(member) {
        if (!member) return null;
        return message.guild.members.get(member) || message.guild.members.find(m => {
            let match = member.match(/<@!?(\d{17,19})>/);
            if (match && m.id === match[1]) return true;
            return m.displayName.toLowerCase().includes(member.toLowerCase()) || m.user.username.toLowerCase().includes(member.toLowerCase());
        });
    }
        const user = message.author;
        const member = resolveMember(args[0]) || message.member;
          // let user = message.mentions.members.first() || message.author

  let money = await db.fetch(`money_${message.guild.id}_${member.id}`)
  if (money === null) money = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${member.id}`)
  if (bank === null) bank = 0;

  let vip = await db.fetch(`bronze_${message.guild.id}_${member.id}`)
    if(vip === null) vip = 'None'
    if(vip === true) vip = 'Bronze'
    
    let vip2 = await db.fetch(`silver_${message.guild.id}_${member.id}`)
    if(vip2 == null) vip2 = 'No Second Rank'
    if(vip2 === true) vip2 = 'Silver'
     
    let vip3 = await db.fetch(`diamond_${message.guild.id}_${member.id}`)
    if(vip3 == null) vip3 = 'No Third VIP Rank'
    if(vip3 === true) vip3 = 'Diamond'
  let shoes = await db.fetch(`nikes_${message.guild.id}_${member.id}`)
  if(shoes === null) shoes = '0'

  let newcar = await db.fetch(`car_${message.guild.id}_${member.id}`)
  if(newcar === null) newcar = '0'

  let newhouse = await db.fetch(`house_${message.guild.id}_${member.id}`)
  if(newhouse === null) newhouse = '0'
    const status = {
      online: "<a:plexiOnline:478870259944783873> Online",
      idle: "<a:plexiAway:478870515730087939> Idle",
      dnd: "<a:plexiDnd:478869699455746049> Do Not Disturb",
      offline: "<a:plexiOffline:478870457848823818> Offline"
    }
    let uEmbed = new RichEmbed()
      .setColor(member.displayHexColor === "#000000" ? "#ffffff" : member.displayHexColor)
      .setTitle("User Info")
      .setThumbnail(member.user.displayAvatarURL)
      .setAuthor(`${member.user.username} Info`, member.user.displayAvatarURL)
      .addField("**Username:**", `${member.user.username}`, true)
      .addField("**Nickname in Server:**", `${message.guild.members.get(member.id).nickname !== null ? `${message.guild.members.get(member.id).nickname}` : 'None'}`, true)
      .addField("**Discriminator:**", `${member.user.discriminator}`, true)
      .addField("**ID:**", `${member.user.id}`, true)
      .addField("**Status:**", `${status[member.user.presence.status]}`, true)
      .addField("**Game:**", `${member.user.presence.game ? member.user.presence.game : "No Game"}`, true)
      .addField("**Created At:**", `${member.user.createdAt}`, true)
      .addField("**Joined At:**", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
      .addField("**Bot:**", `${member.user.bot ? "Yes ✅" : "No ❌"}`, true)
      // .addField("**Verified:**", member.user.verified)
      .addField("**Highest Role:**", `${member.highestRole}`, true)
     .addField(`**Roles: (${member.roles.filter(f => f.name !== "@everyone").size}) **`, `${member.roles.filter(f => f.name !== "@everyone").sort((a, b) => b.position > a.position).map(x => x).join(" >> ") ? member.roles.filter(f => f.name !== "@everyone").sort((a, b) => b.position > a.position).map(x => x).join(" >> ") : "None"}`, true)
      .addField("**Permissions:**", `\`\`\`${message.member.permissions.toArray().join(" | ")}\`\`\``)
      // .addField("**Economy Stats:**", `Pocket: ${money}\nBank: ${bank}\nVIP Rank: **${vip}**\nSecond VIP Rank: **${vip2}**\n\n**Inventory**\n\nNikes: ${shoes}\nCars: ${newcar}\nMansions: ${newhouse}`)
      .setFooter(bot.user.username, bot.user.displayAvatarURL);
    // if(!member.user.bot){
      // uEmbed.addField("**Economy Stats:**", `Pocket: **${money}$**\nBank: **${bank}$**\nVIP Ranks: **${vip}** | **${vip2}** | **${vip3}**\n\n**Inventory**\nNikes: **${shoes}**\nCars: **${newcar}**\nMansions: **${newhouse}**`, true)
    // }
    message.channel.send(uEmbed);
  }
};

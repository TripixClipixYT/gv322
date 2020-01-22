const { RichEmbed, version } = require("discord.js")
const { cyan } = require("../../colours.json");
const { stripIndents } = require("common-tags")
const { ownerid, Version } = require("../../botconfig.json");
// const getMember = require("../../functions.js")
const  name  = process.env.PROJECT_DOMAIN;
// const { discordjs } = require('../../package.json')
// const { Manager } = require("../../shards.js");
// const { duration } = require("./uptime.js")
const db = require("quick.db");

module.exports = {
    config: {
        name: "avatar",
        description: "Shows yours/others avatar",
        usage: "(mention)",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["av", "pfp"]
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
    const targetMember = resolveMember(args[0]) || message.member;
    const avatarEmbed = new RichEmbed()
      .setColor('#0099ff')
      .setAuthor(targetMember.user.username)
      .setImage(targetMember.user.displayAvatarURL)
    message.channel.send(avatarEmbed);
      
    }
}
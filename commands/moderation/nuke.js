const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    config: {
        name: "nuke",
        description: "Nukes a channel",
        usage: "",
        category: "moderation",
        accessableby: "Members",
        aliases: ["clone", "n"]
    },
    run: async (bot, message, args) => {
        if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.channel.send(`You don't have permission !`);
        const mClone = message.channel;
        mClone.clone(mClone.name, true, true, 'none').then(clone => {
            clone.setParent(mClone.parentID).then(() => {
                clone.edit({ position: mClone.position });
                   const embed = new Discord.RichEmbed()
                                               .setTitle('Channel has been NUKED!')
                                               .setColor(`#36393f`)
                                               .setImage(`https://images-ext-1.discordapp.net/external/rGT3vhB8xqYng_StlUaV3jNAgdIpo9SISDskCjxq5Ug/%3Fcid%3D790b7611e787b306d4cf5d03b88cc2c6870eb35b8f37e008%26rid%3Dgiphy.gif/https/media1.giphy.com/media/uSHMDTUL7lKso/giphy.gif`)
                   clone.send(embed)
            });
        });
        mClone.delete();
    }
}

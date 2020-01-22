const { RichEmbed } = require("discord.js");
const { prefix } = require("../../botconfig.json");
const { stripIndents } = require("common-tags")
const fetch = require('node-fetch')
const db = require("quick.db");

module.exports = {
    config: {
        name: "instagram",
        aliases: ["gram", "ig", "insta"],
        usage: "<username>",
        category: "miscellaneous",
        description: "Gets a Instagram user's information",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {
        const name = args.join(" ");

        if(!name){
           message.reply("Maybe search for someone...")
           .then(m => {
               m.delete(5000);
           })
        }
        const url = `https://instagram.com/${name}/?__a=1`;
        const res = await fetch(url).then(url => url.json());
        const acc = res.graphql.user;
        // console.log(res)
        if(!res.graphql.user.username)
            return message.reply("Couldn't find that user.... :(").then(m => {
                m.delete(5000)
            })

            let igembed = new RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(acc.profile_pic_url_hd)
            .setTimestamp()
            .setTitle('Instagram Account Information')
            .setURL(`https://instagram.com/${name}`)
            .addField("**Personal Information**", stripIndents` >_**Username**_: ${acc.username}
            >__**Full Name**__: ${acc.full_name}
            >__**Biography**__: ${acc.biography.length == 0 ? "No biography provided! ❎" : acc.biography}
            >__**Posts**__: ${acc.edge_owner_to_timeline_media.count.toLocaleString()}
            >__**Followers**__: ${acc.edge_followed_by.count.toLocaleString()}
            >__**Followed**__: ${acc.edge_follow.count.toLocaleString()}
            >__**Private Account**__: ${acc.is_private ? "Yes 🔐" : "No 🔓"}
            >__**Business Account**__: ${acc.is_bussiness_account ? "Yes" : "No"}
            >__**Verified**__: ${acc.is_verified ? "Yes" : "No"}
            `);
            message.channel.send(igembed);
    }
}
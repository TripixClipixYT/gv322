const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const db = require("quick.db");

const Client = require("fortnite");
const ft = new Client(process.env.FORTNITE);

module.exports = {
  config: {
    name: "fortnite-shop",
    aliases: ["fts"],
    description: "Display someone's stats, the current store, and challenges!!",
    usage: "",
    category: "miscellaneous"
  },
    run: async (bot, message, args) => {
        const platforms = ["pc", "xb1", "psn"];
        
            const store = await ft.store();

            const embed = new RichEmbed()
                .setColor("#9d4dbb")
                .setTitle("Fortnite store", message.author.displayAvatarURL)
                .setTimestamp();

            store.sort((a, b) => {
                return b.vbucks - a.vbucks;
            });

            store.forEach(el => {
                embed.addField(el.name, stripIndents`**- Rarity:** ${el.rarity}
                **- Price:** ${el.vbucks} v-bucks
                **- Image:** [Press Me](${el.image})`, true)
            });

            message.channel.send(embed);
        }
    }
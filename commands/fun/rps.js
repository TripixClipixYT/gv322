const { ownerid2, prefix, token } = require("../../botconfig.json");
const { RichEmbed } = require('discord.js')
const db = require("quick.db");

module.exports = { 
    config: {
        name: "rps",
        description: "Rock, Paper, Scissors. Who will win?",
        accessableby: "Member",
        // type: "fun",
        usage: `<reply>`,
        category: "fun",
    },
    run: async (bot, message, args) => {
let replies = ['rock', 'paper', 'scissors'];
        let result = Math.floor((Math.random() * replies.length)).toString();

        let uReply = args[0];
        if (!uReply) return message.channel.send(`Please play with one of these responses: \`${replies.join(', ')}\``);
        if (!replies.includes(uReply)) return message.channel.send(`Only these responses are accepted: \`${replies.join(', ')}\``);
let rpsembed = new RichEmbed()
.setColor("RED")
.setDescription(`I won! My Choice was **${replies[result]}**`)
let winembed = new RichEmbed()
.setColor("GREEN")
.setDescription('You won!')
let tieembed = new RichEmbed()
.setColor("WHITE")
.setDescription('It\'s a tie! We had the same choice.')
        if (replies[result] === uReply) {
            console.log(replies[result]);
            return message.channel.send(tieembed);
        } else if (uReply === 'rock') {
            console.log(replies[result]);
            if (replies[result] === 'paper') return message.channel.send(rpsembed);
            else return message.channel.send(winembed);
        } else if (uReply === 'scissors') {
            console.log(replies[result]);
            if (replies[result] === 'rock') return message.channel.send(rpsembed);
            else return message.channel.send(winembed);
        } else if (uReply === 'paper') {
            console.log(replies[result]);
            if (replies[result] === 'scissors') return message.channel.send(rpsembed);
            else return message.channel.send(winembed);
        }
    }
}

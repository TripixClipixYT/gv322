const { RichEmbed } = require('discord.js')
const db = require("quick.db");

module.exports = {
  config: {
     name: "amijoke",
     category: "miscellaneous",
     aliases: ["amij"]
  },
  run: async (bot, message, args) => {
    // let amimg = https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2Fa3%2F0f%2Fc6%2Fa30fc68a738a4cb8077ac6cb241eeb5f.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F793548396826865125%2F&tbnid=uNkwQursIB1DaM&vet=12ahUKEwiPtZO-_9jmAhVa4oUKHSGGCNoQMygEegUIARDRAQ..i&docid=7Hfd9Cwm82rvzM&w=663&h=593&q=am%20i%20a%20joke%20to%20you&ved=2ahUKEwiPtZO-_9jmAhVa4oUKHSGGCNoQMygEegUIARDRAQ
    let amiembed = new RichEmbed()
    .setImage('https://cdn.glitch.com/6b89475b-d5ab-472a-8558-105022d327f9%2Fdownload%20(1).jpg?v=1577563953194')
    message.channel.send(amiembed)
  }
}
const { ErelaClient, Utils } = require("erela.js")
const { nodes } = require("../../botconfig.json")
module.exports = async bot => {
     console.log(`${bot.user.username} is online`)
    // bot.user.setActivity("Hello", {type: "STREAMING", url:"https://twitch.tv/Strandable"});
    
//     bot.music = new ErelaClient(bot, nodes)
//     .on("nodeError", console.log)
//     .on("nodeConnect", () => console.log("Successfully created a new NODE"))
//     .on("queneEnd", player => {
//         player.textChannel.send("Quene has ended.")
//         return bot.music.players.destroy(player.guild.id)
//     })
//     .on("trackStart", ({textChannel}, {title, duration}) => textChannel.send(`Now playing **${title}** \`${Utils.formatTime(duration, true)}`))

//     bot.levels = new Map()
//     .set("off", 0.0)
//     .set("low", 0.10)
//     .set("medium", 0.15)
//     .set("high", 0.25)

    let statuses = [
      `ts.help`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "WATCHING"});

    }, 50000)

}
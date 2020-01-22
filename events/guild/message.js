const { prefix, bottag } = require("../../botconfig.json");
const db = require("quick.db")
module.exports = async (bot, message) => { 
    if(message.author.bot || message.channel.type === "dm") return;
    let cprefix = await db.fetch(`cprefix_${message.guild.id}`)
    if(cprefix === null) cprefix = 'ts.'
    let args = message.content.slice(cprefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    // if(message.content === '<@557948236376309780>') return message.channel.send(`My prefix here is ${cprefix}`)
    if(!message.content.startsWith(cprefix)) return;
    let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd))
    if(commandfile) commandfile.run(bot, message, args)
}
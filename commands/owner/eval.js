const { ownerid2, prefix, token2, token } = require("../../botconfig.json");
const { RichEmbed } = require("discord.js")
const { inspect } = require("util")
const db = require("quick.db")


module.exports = { 
    config: {
        name: "eval",
        description: "Evaluates code",
        accessableby: "Bot Owner",
        type: "owner",
        usage: `<input>`,
        category: "owner",
        aliases: ["e"],
    },
    run: async (bot, message, args) => {
      let inputembederr = new RichEmbed()
      .setColor("RED")
      .setDescription(`Error while evaluating: \`air\``)
    if(message.author.id == ownerid2) {
        try {
            let toEval = args.join(" ")
			let evaluated = inspect(eval(toEval, { depth: 0 }));
              if(message.content.includes('token')){
              evaluated = 'Are u kidding me??? I dont have permissions from the owner to send my token'; 
      }
            if (!toEval) {
                return message.channel.send(inputembederr);
            } else {
                let hrStart = process.hrtime()
                let hrDiff;
                hrDiff = process.hrtime(hrStart);
      //               let inputembed = new RichEmbed()
      // .setColor("GREEN")
      // .setDescription(`:inbox_tray: Input:\n\`\`\`js\n${toEval}\`\`\`\n:outbox_tray: Output:\n**Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms.**\n\`\`\`javascript\n${evaluated}\n\`\`\`\nType Of:\`\`\`${typeof(evaluated)}\n\`\`\``, { maxLength: 2048 })
                return message.channel.send(`Output:\n**Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms.**\n\`\`\`javascript\n${evaluated}\n\`\`\`\nType Of:\`\`\`${typeof(evaluated)}\n\`\`\``)
            }
            
        } catch (e) {
            return message.channel.send(`Error while evaluating: \`${e.message}\``);
        }

      } else {
        return message.reply("you are not the bot owner!").then(msg => msg.delete(5000))
      }
    }
}
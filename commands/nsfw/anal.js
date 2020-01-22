const superagent = require("superagent")
module.exports = {
    config: {
        name: "anal",
        description: "",
        usage: "",
        category: "nsfw",
        accessableby: "Members",
        aliases: []
    },  
   run: async (bot, message, args) => {
if (message.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'anal'})
    .end((err, response) => {
      message.channel.send({ file: response.body.message });
    });
  } else {
    message.channel.send("This isn't NSFW channel!")
  }
}
}
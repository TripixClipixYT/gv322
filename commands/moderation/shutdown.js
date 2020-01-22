const { ownerid2 } = require("../../botconfig.json");
module.exports = {
  config: {
    name: "shutdown",
    description: "shuts down the bot!",
    usage: "",
    category: "owner",
    accessableby: "Bot Owner",
    aliases: ["botstop", "exit"]
  },
  run: async (bot, message, args) => {
    if (message.author.id != ownerid2)
      return message.channel.send("You're not the bot owner!");

    try {
      await message.channel.send("Bot is shutting down...");
      process.exit();
    } catch (e) {
      message.channel.send(`ERROR: ${e.message}`);
    }
  }
};

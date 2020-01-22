let express = require("express");
let app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
// const http = require('http');
// http.createServer().listen(process.env.PORT);
const { Client, Collection, RichEmbed } = require("discord.js");
// const { Manager }
const { token, token2, prefix } = require("./botconfig.json");
const db = require("quick.db");
const bot = new Client();
const token3 = process.env.token3;

// bot.on("guildCreate", async guild => {
//       db.set(`guild_$}`,{
//                  trusted: false,
//              })
// });
bot.on("guildMemberAdd", member => {
  console.log(`New user has joined ${member.user.tag} in ${member.guild}`);

  // let sChannel = member.guild.channels.find(ch => ch.name === "member-log");
  let sayArray = [
    `\`${member.user.tag}\` just joined! Quick! Everyone, Look busy!`,
    `Got some more chips? \`${member.user.tag}\` just joined the party!`,
    `Welcome, \`${member.user.tag}\`, to the ${member.guild.name} Discord server!`,
    `Watch out! ${member.user.tag} just joined!`,
    `\`${member.user.tag}\` just joined! Everyone give them a fine welcome.`
  ];
  let math = Math.floor(Math.random() * sayArray.length);

  let embed = new RichEmbed()

    .setDescription(sayArray[math])
    .setColor("#42f450");

  // channel.send(embed)

  const memberRole = member.guild.roles.find(r => r.name === "Member");
  const channel = member.guild.channels
    .filter(x => x.type === "text")
    .find(c => c.name === "member-log");

  // if (!memberRole || !channel) return;

  member.addRole(memberRole);

  let cchnnl = db.fetch(`logs_${member.guild.id}`);
  member.guild.channels.get(cchnnl).send(embed);
  if (!memberRole || !cchnnl) return;
});
bot.on("guildMemberRemove", member => {
  db.set(`trusted_${member.id}`, false);
  console.log(`New user has joined ${member.user.username} in ${member.guild}`);

  let sChannel = member.guild.channels.find(ch => ch.name === "member-log");
  let sayArray = [
    `\`${member.user.tag}\` just left. Can you come back?`,
    `Commander, we've lost \`${member.user.tag}\`!`,
    `Whoopsies! \`${member.user.tag}\` left us!`,
    `Watch out! \`${member.user.tag}\` just left!`,
    `\`${member.user.tag}\` just left. Can you come back?`
  ];
  let math = Math.floor(Math.random() * sayArray.length);

  let embed = new RichEmbed().setDescription(sayArray[math]).setColor("RED");

  let cchnnl2 = db.fetch(`logs_${member.guild.id}`);
  member.guild.channels.get(cchnnl2).send(embed);
  if (!cchnnl2) return;
});
bot.on("messageDelete", messageDelete => {
  let DeleteEmbed = new RichEmbed()
    .setTitle("**DELETED MESSAGE**")
    .setColor("#fc3c3c")
    .addField("Author", messageDelete.author.tag)
    .addField("Channel", messageDelete.channel)
    .addField("Message", messageDelete.content)
    .setFooter(
      `Message ID: ${messageDelete.id} | Author ID: ${messageDelete.author.id}`
    );

  let cchnnl4 = db.fetch(`mslogs_${messageDelete.guild.id}`);
  messageDelete.guild.channels.get(cchnnl4).send(DeleteEmbed);
  if (!cchnnl4) return;
});
// bot.on("messageUpdate", (oldMessage, newMessage) => {

//   let Delete2Embed = new RichEmbed()
//   .setTitle("**Updated Message**")
//   .setColor("#fc3c3c")
//   .addField("Author", oldMessage.author.tag)
//   .addField("Channel", oldMessage.channel)
//   .addField("Message before", `${oldMessage.content}`)
//   .addField("Message now", `${newMessage.content}`)
//   .setFooter(`Message ID: ${newMessage.id} | Author ID: ${newMessage.author.id}`);

//   let cchnnl5 = db.fetch(`mslogs_${newMessage.guild.id}`)
//   newMessage.guild.channels.get(cchnnl5).send(Delete2Embed)
//    if (!cchnnl5) return;
// });
bot.on("message", async message => {
  if (message.author.bot) return;
  let cprefix = await db.fetch(`cprefix_${message.guild.id}`);
  if (!cprefix) return;
  if (
    message.content == "<@!557948236376309780>" ||
    message.content == "<@557948236376309780>"
  )
    return message.channel.send(`My prefix here is **${cprefix}**`);
  db.add(`messages_${message.guild.id}_${message.author.id}`, 1);
  let messagefetch = db.fetch(
    `messages_${message.guild.id}_${message.author.id}`
  );

  let messages;
  if (messagefetch == 25) messages = 25;
  //Level 1
  else if (messagefetch == 65) messages = 65;
  // Level 2
  else if (messagefetch == 105) messages = 105;
  // Level 3
  else if (messagefetch == 200) messages = 200;
  // Level 4
  else if (messagefetch == 300) messages = 300;
  // Level 5
  else if (messagefetch == 400) messages = 400;
  // Level 5
  else if (messagefetch == 500) messages = 500;
  // Level 6
  else if (messagefetch == 600) messages = 600;
  // Level 7
  else if (messagefetch == 700) messages = 700;
  // Level 8
  else if (messagefetch == 800) messages = 800;
  // Level 9
  else if (messagefetch == 900) messages = 900;
  // Level 10
  else if (messagefetch == 1000) messages = 1000;
  // Level 11
  else if (messagefetch == 1200) messages = 1200;
  // Level 12
  else if (messagefetch == 1400) messages = 1400;
  // Level 13
  else if (messagefetch == 1600) messages = 1600;
  // Level 14
  else if (messagefetch == 1800) messages = 1800;
  // Level 15
  else if (messagefetch == 2000) messages = 2000;
  // Level 16
  else if (messagefetch == 2200) messages = 2200;
  // Level 17
  else if (messagefetch == 2400) messages = 2400;
  // Level 18
  else if (messagefetch == 2600) messages = 2600;
  // Level 19
  else if (messagefetch == 2800) messages = 2800;
  // Level 20
  else if (messagefetch == 3000) messages = 3000;
  // Level 21
  else if (messagefetch == 3200) messages = 3200;
  // Level 22
  else if (messagefetch == 3400) messages = 3400;
  // Level 23
  else if (messagefetch == 3600) messages = 3600;
  // Level 24
  else if (messagefetch == 3800) messages = 3800;
  // Level 25
  else if (messagefetch == 4000) messages = 4000;
  // Level 26
  else if (messagefetch == 4200) messages = 4200;
  // Level 27
  else if (messagefetch == 4400) messages = 4400;
  // Level 28
  else if (messagefetch == 4600) messages = 4600;
  // Level 29
  else if (messagefetch == 4800) messages = 4800;
  // Level 30
  else if (messagefetch == 5000) messages = 5000;
  // Level 31
  else if (messagefetch == 5200) messages = 5200;
  // Level 32
  else if (messagefetch == 5400) messages = 5400;
  // Level 33
  else if (messagefetch == 5600) messages = 5600;
  // Level 34
  else if (messagefetch == 5800) messages = 5800;
  // Level 35
  else if (messagefetch == 6000) messages = 6000;
  // Level 36
  else if (messagefetch == 6200) messages = 6200;
  // Level 37
  else if (messagefetch == 6400) messages = 6400;
  // Level 38
  else if (messagefetch == 6600) messages = 6600;
  // Level 39
  else if (messagefetch == 6800) messages = 6800; // level 40

  if (!isNaN(messages)) {
    db.add(`level_${message.guild.id}_${message.author.id}`, 1);
    let levelfetch = db.fetch(`level_${message.guild.id}_${message.author.id}`);
    let lvlc = db.fetch(`lvlogs_${message.guild.id}`);
    let levelembed = new RichEmbed().setDescription(
      `${message.author}, You have leveled up to level ${levelfetch}`
    );
    // message.channel.send(levelembed)
    message.guild.channels.get(lvlc).send(levelembed);
  }
});
["aliases", "commands"].forEach(x => (bot[x] = new Collection()));
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));
// Manager.on('message', (shard, message) => {
// console.log(`Shard[${shard.id}] : ${message._eval} : ${message._result}`);
// });

bot.login(token3);

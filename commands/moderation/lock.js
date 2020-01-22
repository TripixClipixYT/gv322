const { ownerid2, prefix } = require("../../botconfig.json");
const db = require("quick.db");
const ms = require('ms');

module.exports = {
    config: {
        name: "lockdown",
        description: "Lock the Current Channel",
        usage: `${prefix}lockdown <time>`,
        category: "moderation",
        accessableby: "Moderator",
        aliases: ["lcd"]
    },
    run: async (bot, message, args) => {
    let time = args.join(' ').toLowerCase();
      let validUnlocks = ['release', 'unlock']; //type $lock release/unlock to set SEND_MESSAGES back to normal
      if(!time) return message.reply('You must set a duration for the lockdown in either hours, minutes or seconds');
      let name = validUnlocks.find(validness => validness == time)
      let whitelistedChannels = ['id1', 'id2', 'id3', 'etc']; //just add here the channels id that you want to be locked down
      if(name){
        message.guild.channels.forEach(c => {
          if(whitelistedChannels.find(ID => ID == c.id) == undefined) return;
          c.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          })
        })
          return message.channel.send('Lockdown lifted.');
      } else {
        message.guild.channels.forEach(c => {
          if(whitelistedChannels.find(ID => ID == c.id) == undefined) return;
          c.overwritePermissions(message.guild.defaultRole,{
            SEND_MESSAGES: false
          })
        })
        message.channel.send(`Channel locked down for ${ms(ms(time), {long: true})}`).then(() => {
          setTimeout(async function(){
            message.guild.channels.forEach(c => {
            if(whitelistedChannels.find(ID => ID == c.id) == undefined) return;
            c.overwritePermissions(message.guild.defaultRole,{
              SEND_MESSAGES: null
            })
          })
          message.channel.send('Lock Lifted.').catch(console.error)
          }, ms(time))
        })
      }
      
    }
}
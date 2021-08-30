const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setthumbnail",
  aliases: ["setnail", "st"],
  category: ":frame_photo: WELCOME",
  usage: "st <link>",
  description: "Set the img for welcome channel",
  run: (client, message, args) => {
   if (!message.member.hasPermission("ADMINISTRATION")) {
      return message.channel.send("You do not enough permission to use this command.");
    }
  const text = args.join(" ");

  if (!text || text.length > 1000) return message.channel.send(`**${message.author.username}** give me link or do \`?useravatar\ to discplay user avatar or \`?serveravatar\` to display server avatar in thumbnail`); 
  
  // This code is made by Supreme#2401
   
    db.set(`thumbnail_${message.guild.id}`, text)
    
    message.channel.send(`Now welcome thumbnail will be \n \`${text}\` `)
  }
}
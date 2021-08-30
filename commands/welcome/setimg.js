const Discord = require("discord.js")
const db = require("quick.db")
// This code is made by Supreme#2401
module.exports = {
  name: "setimage",
  aliases: ["setimg", "si"],
  category: ":frame_photo: WELCOME",
  usage: "si <link>",
  description: "Set the img for welcome channel",
  run: (client, message, args) => {
   if (!message.member.hasPermission("ADMINISTRATION")) {
      return message.channel.send("You do not enough permission to use this command.");
    }
  const text = args.join(" ");

  if (!text || text.length > 1000) return message.channel.send(`**${message.author.username}** give me link `); 
  
  
   
    db.set(`image_${message.guild.id}`, text)
    
    message.channel.send(`Now welcome image will be \n \`${text}\` `)
  }
}
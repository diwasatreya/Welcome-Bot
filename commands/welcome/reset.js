const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "reset",
  category: ":frame_photo: WELCOME",

  run: (client, message, args) => {
   if (!message.member.hasPermission("ADMINISTRATION")) {
      return message.channel.send("You do not enough permission to use this command.");
    }
 
  db.delete(`welcome_${message.guild.id}`);
  db.delete(`desc_${message.guild.id}`)
  db.delete(`image_${message.guild.id}`)
  db.delete(`thumbnail_${message.guild.id}`)

// This code is made by Supreme#2401
    
    message.channel.send(`Done`)
  }
}
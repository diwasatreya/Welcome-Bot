const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setimagewelcome",
  aliases: ["setimgwel", "siw"],
  usage: "siw <#channel>",
  category: ":frame_photo: WELCOME",
  description: "Set the welcome channel",
  run: (client, message, args) => {

  // This code is made by Supreme#2401
     if (!message.member.hasPermission("ADMINISTRATION")) {
      return message.channel.send("You do not enough permission to use this command.");
    }
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("You have to specify the channel")
    }
   
    db.set(`welcomeimg_${message.guild.id}`, channel.id)
    
    
    message.channel.send(`Welcome Image channel updated as ${channel}`)
  }
}
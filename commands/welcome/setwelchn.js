const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setwelcomechannel",
  aliases: ["setwelcome", "sw"],
  usage: "sw <#channel>",
  category: ":frame_photo: WELCOME",
  description: "Set the welcome channel",
  run: (client, message, args) => {

  
     if (!message.member.hasPermission("ADMINISTRATION")) {
      return message.channel.send("You do not enough permission to use this command.");
    }
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("You have to specify the channel")
    }
   // This code is made by Supreme#2401
    db.set(`welcome_${message.guild.id}`, channel.id)
    
    
    message.channel.send(`Welcome channel updated as ${channel}`)
  }
}
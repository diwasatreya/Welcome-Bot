const Discord = require("discord.js")
const db = require("quick.db")
// This code is made by Supreme#2401
module.exports = {
  name: "setdescription",
  aliases: ["setdesc", "sd"],
  category: ":frame_photo: WELCOME",
  usage: "sd <message>",
  description: "Set the desc for welcome channel",
  run: (client, message, args) => {
   if (!message.member.hasPermission("ADMINISTRATION")) {
      return message.channel.send("You do not enough permission to use this command.");
    }
  const text = args.join(" ");

  if (!text || text.length > 1024) return message.channel.send(`**${message.author.username}** give me description having less than 1024 character.`); 
  
    db.set(`desc_${message.guild.id}`, text)

    let mes = text.replace(/`?\?user`?/g, message.author.username).replace(/`?\?server`?/g, message.guild.name).replace(/`?\?tag`?/g, message.author.tag).replace(/`?\?mention`?/g, `<@${message.author.id}>`)
    
    message.channel.send(`Now in welcome message description will be \n \`${mes}\` `)
  }
}

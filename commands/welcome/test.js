const Discord = require("discord.js")
const db = require("quick.db")
const { Client, MessageEmbed }  = require('discord.js');

module.exports = {
  name: "test",
  category: ":frame_photo: WELCOME",

  run: async(client, message, args) => {
  const channel = db.get(`welcome_${message.guild.id}`);
  const text = db.get(`desc_${message.guild.id}`)
   const img = db.get(`image_${message.guild.id}`)
   const nail = db.get(`thumbnail_${message.guild.id}`)
   const me = db.get(`mention_${message.guild.id}`)


  
const mes = text.replace(/`?\?user`?/g, message.author.username).replace(/`?\?server`?/g, message.guild.name).replace(/`?\?tag`?/g, message.author.tag).replace(/`?\?mention`?/g, `<@${message.author.id}>`).replace(/`?\?rank`?/g, message.guild.members.cache.size);

const tnail = nail.replace(/`?\?useravatar`?/g, message.author.displayAvatarURL({ dynamic: true })).replace(/`?\?serveravatar`?/g, message.guild.iconURL({ dynamic: true }))

// This code is made by Atreya#2401

 

  const embed = new Discord.MessageEmbed()
.setTitle(`Welcome to ${message.guild.name}`)
.setDescription(`${mes} 

**Down message only visible for testing command**
To add more features join our official server and ask help from developers. 
[Join Server](https://discord.gg/gU7XAxTpX5)
 `)
.setColor("RANDOM")
.setImage(img)
.setThumbnail(tnail)


client.channels.cache.get(channel).send(embed)
        
  
    
  
  }
}
const Discord = require("discord.js")
const db = require("quick.db")
const { Client, MessageEmbed }  = require('discord.js');

module.exports = {
  name: "test",
  category: ":frame_photo: WELCOME",

  run: async(client, message, args) => {
  let channel = db.get(`welcome_${message.guild.id}`);
  let text = db.get(`desc_${message.guild.id}`)
   let img = db.get(`image_${message.guild.id}`)
   let nail = db.get(`thumbnail_${message.guild.id}`)
   let me = db.get(`mention_${message.guild.id}`)


  
let mes = text.replace(/`?\?user`?/g, message.author.username).replace(/`?\?server`?/g, message.guild.name).replace(/`?\?tag`?/g, message.author.tag).replace(/`?\?mention`?/g, `<@${message.author.id}>`).replace(/`?\?rank`?/g, message.guild.members.cache.size);

let tnail = nail.replace(/`?\?useravatar`?/g, message.author.displayAvatarURL({ dynamic: true })).replace(/`?\?serveravatar`?/g, message.guild.iconURL({ dynamic: true }))

// This code is made by Supreme#2401

 

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
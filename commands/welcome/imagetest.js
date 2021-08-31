const Discord = require('discord.js')
const fetch = require("node-fetch");
const { MessageEmbed } = require('discord.js')
const express = require('express')
const app = express()
const moment = require("moment")
const links = require('../../JSON/link.json')
const { Canvas, resolveImage } = require('canvas-constructor');
const canvas = require('canvas')
const { registerFont } = require('canvas');
registerFont('./fonts/Quicksand-SemiBold.ttf', { family: 'Quicksand-SemiBold' });




module.exports = {
  name: "testimage",
  aliases: ["ti"],
  category: ":frame_photo: WELCOME",
  usage: "it",
  description: "Test image welcome.",
  run: async (client, message, args) => {
   

    let m = await message.channel.send(`**${message.author.username}** please wait image welcome looks like this:`);
    let link = links.link[Math.floor((Math.random() * links.link.length))];

    const img = await canvas.loadImage(`${link}`);

 
let userPfp = await resolveImage(message.author.displayAvatarURL({
            format: "jpg",
            size: 1024
        }))

    let image = new Canvas(6912, 3456)
      .printImage(img, 0, 0, 6912, 3456)
      .setColor(`#FFFFFF`)
      .setTextFont('215px Quicksand-SemiBold')
      .setTextAlign("center")
      .printWrappedText(moment(message.author.createdAt).format("MMMM d, YYYY"), 2655, 1980)
      .setTextAlign("center")
      .setTextFont('215px Quicksand-SemiBold')
      .printWrappedText(message.author.tag, 1920, 1355)
      .printWrappedText(`${message.guild.members.cache.size}th member`, 2180, 2600)
      .setColor(`#FFFFFF`)
      .setTextAlign("center")
      .setTextFont('250px Quicksand-SemiBold')
      .setTextAlign("center")
      .printWrappedText(message.guild.name, 1900, 3100)
      .printCircularImage(userPfp, 5260, 1714, 1210, 1120)
      .toBuffer();
      
    
    m.delete({ timeout: 100 });
    return message.channel.send(new Discord.MessageAttachment((await image), "image.png"))
  }
}

const { MessageEmbed } = require("discord.js");
const { prefix, developerID } = require("../../config.json")
module.exports = {
  name: "help",
  description:
    "Get list of all command and even get to know every command detials",
  usage: "help <cmd>",
  category: ":frame_photo: WELCOME",
  run: async (client, message, args) => {
  
    if (args[0]) {
      const command = await client.commands.get(args[0]);

      if (!command) {
        return message.channel.send("Unknown Command: " + args[0]);
      }

      let embed = new MessageEmbed()
        .setAuthor(command.name, client.user.displayAvatarURL())
        .addField("Description", command.description || "Description is not provided join support server for help")
        .addField("Usage", "`" + command.usage + "`" || "Not Provied Join Support server for help")
        .addField("Aliases", "```" + command.aliases + "```"|| "There is no aliases")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("#000000")
        .setFooter(`Join our support server `);

      return message.channel.send(embed).then(m => m.delete({ timeout: 8000 }));
    } else {
      const commands = await client.commands;

      let emx = new MessageEmbed()
        .setDescription(`**Note:** You must set \`welcomechannel\` \`description\`, \`thumnail\` to start welcome and to use test command. 

      Only for \`${prefix}setwelcomechannel\` [ Compulsory ]
      setwelcomechannel <#channel>

      Only for \`${prefix}setdescription\` [ Compulsory ]
      **Tags** : **Info** : **Example**
      ?user : Display username only : Supreme
      ?tag : Display username with tag : Supreme#2401
      ?mention : Mention user in description : <@519666024220721152>
      ?server : Display server name : Supreme Club
      ?rank : Position to join server : 69th Member

      Only for \`${prefix}setthumbnail\` [ Compulsory ]
      **Tags** : **Info**
      ?serveravatar : Display server avatar in Thumnail
      ?useravatar : Display new member avatar in Thumnail

      Only for \`${prefix}setimage\` [ Optional ]
      You have to provide valid link 

      Only for \`${prefix}setimagewelcome\` [ Optional ]
      setimagewelcome <#channel> : Send message of image only 

      Only for \`${prefix}reset\` 
      It resets all the things of description, image, thumnail, welcome channel.

      Only for \`${prefix}test\`
      Use this command by completing all the [ Compulsory ] marked things.

       Do \`${prefix}help <command>\` to see aliases of that command`)
       
        .setColor("#FFFFF0")
        .setFooter(`Code Owner: Supreme#2401`)
    

      let com = {};
      for (let comm of commands.array()) {
        let category = comm.category || "Unknown";
        let name = comm.name;

        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }

      for(const [key, value] of Object.entries(com)) {
        let category = key;

        let desc = "`" + value.join("` • `") + "`";

        emx.addField(`${category}`, desc);
      }

     var msg = await message.channel.send(emx)
          
          

    }
  }
};

const { MessageEmbed } = require("discord.js");
const glob = require("glob");
const chalk = import("chalk");
const { clientname, clientavatar } = require("../../botconfig/main.json");
module.exports = {
   name: "reload",
   cooldowns: 3000,
   description: "Reload Commands",
   usage: "",
   toggleOff: false,
   developersOnly: true,
   userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
   botpermissions: ["SEND_MESSAGES"],
   run: async (client, message, args) => {
      client.commands.sweep(() => true);
      glob(`${__dirname}/../**/*.js`, async (err, filePaths) => {
         if (err) return console.log(err);
         filePaths.forEach((file) => {
            delete require.cache[require.resolve(file)];

            const pull = require(file);
            if (pull.name) {
               client.commands.set(pull.name, pull);
            }

            if (pull.aliases && Array.isArray(pull.aliases)) {
               pull.aliases.forEach((alias) => {
                  client.aliases.set(alias, pull.name);
               });
            }
         });
      });
      let reload_embed = new MessageEmbed()
         .setTitle(`:white_check_mark: | Reloaded All Commands`)
         .setColor("GREEN")
         .setFooter(`${clientname}`, `${clientavatar}`)
         .setTimestamp();
      message.reply({ embeds: [reload_embed] });
   },
};
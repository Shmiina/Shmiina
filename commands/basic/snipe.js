
const Discord = require("discord.js");

module.exports = {
  name: "botinfo",
  aliases: ["bi"],
  description: "",
  botpermissions:["SEND_MESSAGES"],
  usage: "get deleted messages",
  cooldowns: 1000,
  developersOnly: false,
  toggleOff: false,
  run: async (client, message, args, del, member) => {
   message.delete();
      message.channel.send(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`Automod bot ${version}`)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .addField('				**❯ Uptime:**', `${ms(client.uptime)}`, true)
            .addField('				**❯ WebSocket Ping:**', `${client.ws.ping}ms`, true)
            .addField('				**❯ Memory:**', `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap`, true)
            .addField('				**❯ Guild Count:**', `${client.guilds.cache.size} guilds`, true)
            .addField(`				Support server `,`[click](https://discord.gg/cwkhan`, true)
            .addField('				**❯ Commands:**', `${client.commands.size} cmds`,true)
            .addField('				**❯ Node:**', `${process.version} on ${process.platform} ${process.arch}`, true)
            .addField('				**❯ Cached Data:**', `${client.users.cache.size} users\n${client.emojis.cache.size} emojis`, true)
            .addField('				**❯ Discord.js:**', `${discordjsVersion}`, true)
            .setTimestamp()
        );
    }
}

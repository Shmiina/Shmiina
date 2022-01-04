const { Client, Collection } = require("discord.js");
// Import Discord.Js.
const client = new Client({ intents: 32767 });
// Make New Discord Client.
module.exports = client;
// Export Client To Give Other Files Access.
const chalk = import("chalk");

// ———————————————[Global Variables]———————————————
client.commands = new Collection();
client.aliases = new Collection();
client.cooldowns = new Collection();
client.slashCommands = new Collection();
client.config = require("./botconfig/main.json");
require("./handler")(client);
// Initializing the project.

// ———————————————[Logging Into Client]———————————————
const token = process.env["clienttoken"] || client.config.clienttoken;

// Login The Bot


//24/7 RUN TIME
let express = require('express')
let app = express();
let port = 3000

app.get('/', (req, res) => res.send('fucking awake ?!?!?!'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);
//24/7 run time
client.on("ready", () => { console.log(`${client.user.tag} is awake finally`) 
client.user.setActivity(`Looking at my coder and thinking WTF is he doing?`) })

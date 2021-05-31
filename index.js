//Ah ah ah ah stayin' alive stayin' alive
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('this is a cool bot'));

app.listen(port, () => console.log(`listening at port ${port}`));

const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
    console.log("The bot is ready.");
});

client.on("message", (message) => {
    if (message.author.bot) return;

    let sentence = message.content;
    if (sentence === `${process.env.PREFIX}help`) {
        message.channel.send(`${message.author} Commands: jaclyn or jacloon, shawn or shon, amun or amoon, ayub or aboob`);
    } else if (sentence === "SHAWN") {
        message.reply(" WHAT DO YOU WANTTTTTTT!");
    } else if (sentence.toLowerCase().includes("history time")) {
        message.channel.send("<@560591733302362112><@714507526074269808><@359833588226588685><@391333832533606403> History time!!! :)")
    } else if (sentence === `${process.env.PREFIX}jaclyn` || sentence === `${process.env.PREFIX}jacloon`) {
        message.channel.send("<@714507526074269808><@714507526074269808><@714507526074269808><@714507526074269808><@714507526074269808><@714507526074269808><@714507526074269808><@714507526074269808><@714507526074269808><@714507526074269808>");
    } else if (sentence === `${process.env.PREFIX}shawn` || sentence === `${process.env.PREFIX}shon`) {
        message.channel.send("<@560591733302362112><@560591733302362112><@560591733302362112><@560591733302362112><@560591733302362112><@560591733302362112><@560591733302362112><@560591733302362112><@560591733302362112><@560591733302362112>");
    } else if (sentence === `${process.env.PREFIX}amun` || sentence === `${process.env.PREFIX}amoon`) {
        message.channel.send("<@359833588226588685><@359833588226588685><@359833588226588685><@359833588226588685><@359833588226588685><@359833588226588685><@359833588226588685><@359833588226588685><@359833588226588685><@359833588226588685>");
    } else if (sentence === `${process.env.PREFIX}ayub` || sentence === `${process.env.PREFIX}aboob`) {
        message.channel.send("<@391333832533606403><@391333832533606403><@391333832533606403><@391333832533606403><@391333832533606403><@391333832533606403><@391333832533606403><@391333832533606403><@391333832533606403><@391333832533606403>");
    }
});

client.login(process.env.DISCORD_TOKEN)

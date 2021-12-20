var Profile = require ("./scraping")

const { Client, Intents } = require('discord.js');

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const token = 'OTIyNTk0MzI0MDM2ODY2MTEw.YcDu6w.Wp5YLPyxpfzVCqdKU5N7-2-R0iU';

bot.login(token);
bot.on('ready', () => {
    console.log('Rodando...');
})

bot.on('message', async msg => {
    msg.reply("Buscando suas informalções... Por favor, aguarde....")
    let inf = await Profile(`https://br.op.gg/summoner/userName=${msg.content}`)
    //msg.reply(`Èlo: ${inf[0]}\n PDL: ${inf[1]}`)
    msg.reply(`${inf}`)
})
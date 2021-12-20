var scrapElo = async function (url){
	const puppeteer = require('puppeteer')

	let infos = []; 

	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);

	const [el] = await page.$x('/html/body/div[2]/div[2]/div/div/div[5]/div[2]/div[1]/div[1]/div/div[2]/div[2]')
	const elo = await el.getProperty('textContent');
	const srcTxt = await elo.jsonValue();

	const [el1] = await page.$x('//html/body/div[2]/div[2]/div/div/div[5]/div[2]/div[1]/div[1]/div/div[2]/div[3]/span[1]')
	const pdl = await el1.getProperty('textContent');
	const pdlTxt = await pdl.jsonValue();

	browser.close();
	infos[0] = srcTxt;
	infos[1] = pdlTxt.toString().replace(/	/g, "").replace(/\n/g, "")
	
	return infos;
}

module.exports = scrapElo;

//scrapElo('https://br.op.gg/summoner/userName=Azecador')
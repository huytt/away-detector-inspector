import puppeteer from 'puppeteer';


// include lib
(async () => {                                    // declare function
  const browser = await puppeteer.launch();       // run browser
  const page = await browser.newPage();           // open new tab
  await page.goto('https://en.wikipedia.org/wiki/Women%27s_high_jump_world_record_progression');          // go to site
  await page.waitForSelector('.wikitable');// declare a variable with an ElementHandle
  const element = await page.$('table.wikitable ');
  await element.screenshot({path: './out/result.jpg'}); // snapshot
  await browser.close();                          // close browser
})();
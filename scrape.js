const request = require('request');
const cheerio = require('cheerio');

console.log('First console log');

request('http://codedemos.com/sampleblog', (error, response, html) => {
    if(!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        console.log('starting');
        const siteHeading = $('.site-heading');
        // console.log(siteHeading.html());
        // const output = siteHeading.find('h1').text();
        // const output = siteHeading.children('h1').text();
        // const output = siteHeading
        //     .children('h1')
        //     .next()
        //     .text();
        $('.nav-item a').each((i, el) => {
            const item = $(el).text();
            const link = $(el).attr('href');
            console.log(item);
            console.log(link);
        });
    }
});


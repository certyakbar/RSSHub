const got = require('@/utils/got');
const cheerio = require('cheerio');

module.exports = async (ctx) => {
    const query = 'tv shows';
    const url = `https://bt4gprx.com/search/${query}`;
    const { data } = await got(url);
    const $ = cheerio.load(data);

    const items = [];
    $('a[href^="magnet:?xt"]').each((_, el) => {
        const link = $(el).attr('href');
        const title = $(el).text().trim() || 'BT4G TV Torrent';
        items.push({ title, link });
    });

    ctx.state.data = {
        title: 'BT4G – TV Shows',
        link: url,
        item: items.map(i => ({
            title: i.title,
            link: i.link,
        })),
    };
};

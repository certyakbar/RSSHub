import got from '@/utils/got';
import { parseDate } from '@/utils/parse-date';

export const route = {
    path: '/bt4g-movies',
    name: 'BT4G Movies',
    maintainers: ['certyakbar'],
    example: '/bt4g-movies',
    description: 'Latest movie torrents from BT4G',
};

export async function handler(ctx) {
    const url = 'https://bt4g.org/api/v1/search?keyword=movies';
    const { data } = await got(url).json();

    if (!data || !data.results) throw new Error('No results returned from BT4G');

    ctx.state.data = {
        title: 'BT4G - Movies',
        link: 'https://bt4g.org/',
        description: 'Latest movie torrents from BT4G',
        item: data.results.map(item => ({
            title: item.name,
            link: item.magnet || item.torrent || '',
            pubDate: parseDate(item.created_at || Date.now()),
            description: Size:  | Seeders:  | Leechers: ,
        })),
    };
}

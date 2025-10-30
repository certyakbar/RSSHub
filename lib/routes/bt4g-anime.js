import got from '@/utils/got';
import { parseDate } from '@/utils/parse-date';

export const route = {
    path: '/bt4g-anime',
    name: 'BT4G Anime',
    maintainers: ['certyakbar'],
    example: '/bt4g-anime',
    description: 'Latest anime torrents from BT4G',
};

export async function handler(ctx) {
    const url = 'https://bt4g.org/api/v1/search?keyword=anime';
    const { data } = await got(url).json();

    if (!data || !data.results) throw new Error('No results returned from BT4G');

    ctx.state.data = {
        title: 'BT4G - Anime',
        link: 'https://bt4g.org/',
        description: 'Latest anime torrents from BT4G',
        item: data.results.map(item => ({
            title: item.name,
            link: item.magnet || item.torrent || '',
            pubDate: parseDate(item.created_at || Date.now()),
            description: Size:  | Seeders:  | Leechers: ,
        })),
    };
}

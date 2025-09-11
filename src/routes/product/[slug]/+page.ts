import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { CARDS } from '../../../lib/consts/cards';
import { generateSlug } from '../../../lib/utils/generateSlug';

export const load: PageLoad = ({ params }) => {
    console.log(params);

    const card = CARDS.find((c) => params.slug === generateSlug(c.title))
    if (card) {
        return card
    }

    error(404, 'Not found');
};
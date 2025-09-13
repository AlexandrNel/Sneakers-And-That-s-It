import { error } from '@sveltejs/kit';
import { CARDS } from '$lib/consts/cards';
import { generateSlug } from '$lib/utils/generateSlug';

export const load = ({ params }) => {
	const card = CARDS.find((c) => params.slug === generateSlug(c.title));
	if (!card) error(404, 'Not found');
	return card;
};

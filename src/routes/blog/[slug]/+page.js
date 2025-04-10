import { client } from '$lib/graphql-client';
import { postQuery } from '$lib/graphql-queries';
import { error } from '@sveltejs/kit';

export const load = async ({ params, url, data }) => {
	const { slug } = params;
	const variables = { slug };
	const { post } = await client.request(postQuery, variables);

	if (!post) {
		error(404, {
			message: 'Not found'
		});
	}

	return {
		post
	};
};

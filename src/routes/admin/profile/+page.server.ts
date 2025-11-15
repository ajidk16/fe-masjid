import { api } from '$lib/utils/api';

export const load = async ({ cookies }) => {
	const profile = await api('/auth/profile', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${cookies.get('auth_token')}`
		}
	});

	return { profile };
};

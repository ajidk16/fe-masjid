import { api } from '$lib/utils/api';
import { error, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');

		const res = await api('/auth/forgot-password', {
			method: 'POST',
			body: JSON.stringify({ email }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (res.type === 'validation' || res.status === 400) {
			throw error(res.status === 400 ? 400 : 500, {
				message: res.message
			});
		}

        console.log('Forgot password response:', res);

		return {
			status: res.status,
			message: res.message
		};
	}
};

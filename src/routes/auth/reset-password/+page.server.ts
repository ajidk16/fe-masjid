import { api } from '$lib/utils/api';
import { error } from '@sveltejs/kit';
import { fail, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request, url }) => {
		const data = await request.formData();
		const newPassword = data.get('newPassword');
		const token = url.searchParams.get('token')?.toString();

		if (!newPassword || !token) {
			return fail(400, { message: 'Missing required fields' });
		}

		// Verify the token and reset the password
		const res = await api('/auth/reset-password', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ token, newPassword })
		});
		console.log('Resetting password for token:', res);

		if (res.type === 'validation' || res.status === 400) {
			throw error(res.status === 400 ? 400 : 500, {
				message: res.message
			});
		}

		return {
			status: res.status,
			message: res.message
		};
	}
};

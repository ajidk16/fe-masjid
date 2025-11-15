import { api } from '$lib/utils/api';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const fullName = data.get('fullName');
		const email = data.get('email');
		const phone = data.get('phone');
		const password = data.get('password');

		const createUser = await api('/auth/sign-out', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				fullName,
				email,
				phone,
				password
			})
		});

		cookies.set('auth_token', createUser.data.emailVerificationToken.token, {
			httpOnly: true,
			sameSite: 'none',
			secure: true,
			partitioned: false,
			maxAge: 60 * 60 * 24 * 1, // 1 day
			path: '/'
		});

		return {
			status: createUser.status,
			message: createUser.message,
			data: createUser.data
		};
	}
};

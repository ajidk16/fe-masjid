import alovaInstance from '$lib/utils/instance-alova';
import { error, type Actions } from '@sveltejs/kit';

type SignInResponse = {
	status: number;
	message: string;
	token: string;
	fullName: string;
	user: {
		id: string;
		email: string;
		name: string;
		createdAt: string;
		updatedAt: string;
	};
	mosque: {
		id: string;
		name: string;
		address: string;
		createdAt: string;
		updatedAt: string;
	};
	role: {
		id: string;
		code: string;
		label: string;
	};
};

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		const register = await alovaInstance.Post<SignInResponse>('/auth/sign-in', {
			email,
			password
		});

		if (register.status !== 200) {
			return error(register.status, register.message);
		}

		cookies.set('auth_token', register.token, {
			httpOnly: true,
			sameSite: 'none',
			secure: true,
			partitioned: false,
			maxAge: 60 * 60 * 24 * 1, // 1 day
			path: '/'
		});

		cookies.set(
			'profile',
			JSON.stringify({
				fullName: register.fullName,
				user: register.user,
				mosque: register.mosque,
				role: register.role
			}),
			{
				httpOnly: true,
				sameSite: 'none',
				secure: true,
				partitioned: false,
				maxAge: 60 * 60 * 24 * 1, // 1 day
				path: '/'
			}
		);

		return register;
	}
};

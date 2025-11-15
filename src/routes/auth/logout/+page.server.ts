import { redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	logout: async ({ cookies }) => {
		cookies.delete('auth_token', { path: '/', expires: new Date(0) });
		cookies.delete('profile', { path: '/', expires: new Date(0) });
		throw redirect(302, '/beranda');
	}
};

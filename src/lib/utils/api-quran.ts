import { PUBLIC_API_QURAN } from '$env/static/public';

export const apiQuran = async (url: string, options: RequestInit = {}) => {
	const res = await fetch(`${PUBLIC_API_QURAN}${url}`, {
		...options,
		credentials: 'include'
	});

	return await res?.json();
};

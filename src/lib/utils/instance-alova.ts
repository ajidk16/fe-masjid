import { PUBLIC_BACKEND_URL } from '$env/static/public';
import { createAlova } from 'alova';
import { createClientTokenAuthentication } from 'alova/client';
import adapterFetch from 'alova/fetch';
import svelteHook from 'alova/svelte';

function getCookie(name: string): string | null {
	if (typeof document === 'undefined') return null; // cek apakah di browser
	const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
	return match ? decodeURIComponent(match[2]) : null;
}

const { onAuthRequired, onResponseRefreshToken } = createClientTokenAuthentication({
	assignToken: (method) => {
		if (typeof document === 'undefined') return; // cek apakah di browser
		const token = getCookie('auth_token');
		console.log('Fetching token from cookies', token);
		console.log('Assigning token:', token);
		if (token) method.config.headers.Authorization = `Bearer ${token}`;
	}
});

const alovaInstance = createAlova({
	baseURL: `${PUBLIC_BACKEND_URL}`,
	statesHook: svelteHook,
	requestAdapter: adapterFetch(),
	timeout: 3000,
	beforeRequest: onAuthRequired(),
	responded: onResponseRefreshToken({
		onSuccess: (response) => response.json()
	})
});
export default alovaInstance;

// import { redirect, type Handle } from '@sveltejs/kit';

// export const handle: Handle = async ({ event, resolve }) => {
// 	const { pathname } = event.url;

// 	if (pathname === '/') {
// 		throw redirect(307, '/beranda');
// 	}
// 	// Example: Add a custom header to all responses
// 	const response = await resolve(event);
// 	response.headers.set('X-Custom-Header', 'MyValue');
// 	return response;
// };

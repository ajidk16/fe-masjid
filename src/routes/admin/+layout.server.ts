export const load = async ({ cookies }) => {
	// localStorage is not available on the server
	// Use cookies instead, which are already being accessed

	return {
		profile: cookies.get('profile')
	};
};

export const load = async ({ cookies }) => {
	return {
		profile: cookies.get('profile')
	};
};

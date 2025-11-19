export const load = async ({ cookies }) => {
	const getLocation = cookies.get('location');

	let location = null;

	if (getLocation) {
		location = JSON.parse(getLocation);
	}

	return {
		location: location?.address?.town
	};
};

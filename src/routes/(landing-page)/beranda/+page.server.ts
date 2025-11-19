import { PUBLIC_WEATHER_API_KEY } from '$env/static/public';
import { apiQuran } from '$lib/utils/api-quran.js';
import { error } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
	const locationCookie = cookies.get('location');
	if (!locationCookie) {
		throw error(400, 'Location cookie not found');
	}

	const authHeader = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${cookies.get('auth_token') || ''}`
		}
	};
	const location = JSON.parse(locationCookie);

	const today = new Date();

	const county = location?.address?.county;
	console.log('Location county:', county);

	// const searching = await apiQuran(`/sholat/kota/cari/${location?.address?.county}`, authHeader);

	// console.log('Searching city result:', searching);

	const [tanggal, weatherData] = await Promise.all([
		await fetch(
			`https://service.unisayogya.ac.id/kalender/api/masehi2hijriah/muhammadiyah/${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`
		).then((res) => res.json()),
		await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${location?.lat}&lon=${location?.lon}&appid=${PUBLIC_WEATHER_API_KEY}&units=metric&lang=id`
		).then((res) => res.json())
	]);

	return {
		tanggal,
		weather: weatherData
	};
};

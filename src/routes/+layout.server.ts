import { apiQuran } from '$lib/utils/api-quran';
import { formatDateISO } from '$lib/utils/format.js';

export const load = async ({ cookies }) => {
	// const authToken = cookies.get('auth_token');
	// const locationStr = cookies.get('location');
	// const headers = {
	// 	Authorization: `Bearer ${authToken}`,
	// 	'Content-Type': 'application/json'
	// };

	// let jadwal = null;

	// if (locationStr) {
	// 	const location = JSON.parse(locationStr);
	// 	const county = location?.address?.county;
	// 	if (county) {
	// 		const searchRes = await apiQuran(`/sholat/kota/cari/${encodeURIComponent(county)}`, {
	// 			method: 'GET',
	// 			headers
	// 		});
	// 		const city = searchRes?.data?.[0];
	// 		if (city?.id) {
	// 			const today = formatDateISO(new Date().toISOString());
	// 			const jadwalRes = await apiQuran(`/sholat/jadwal/${city.id}/${today}`, {
	// 				method: 'GET',
	// 				headers
	// 			});
	// 			jadwal = jadwalRes?.data ?? null;
	// 		}
	// 	}
	// }

	// return { jadwal };
};

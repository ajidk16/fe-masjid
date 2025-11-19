import { api } from '$lib/utils/api.js';
import { fail } from '@sveltejs/kit';

export const load = async ({ url, cookies }) => {
	const authHeader = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${cookies.get('auth_token')}`
		}
	};

	const page = parseInt(url.searchParams.get('page') || '1');
	const limit = parseInt(url.searchParams.get('limit') || '10');

	const [categories, events] = await Promise.all([
		api('/references/categories', authHeader),
		api(`/beranda/events?page=${page}&limit=${limit}`, authHeader)
	]);

	if (!categories) {
		return fail(500, 'Failed to load categories');
	}

	return { categories, events };
};

const validatePartnerData = (formData: FormData) => {
	const id = formData.get('id') as string;
	const mosqueId = formData.get('mosqueId') as string;
	const title = formData.get('title') as string;
	const categoryId = formData.get('categoryId') as string;
	const date = formData.get('date') as string;
	const startAt = formData.get('startAt') as string;
	const endAt = formData.get('endAt') as string;
	const location = formData.get('location') as string;
	const speaker = formData.get('speaker') as string;
	const description = formData.get('description') as string;

	return { id, mosqueId, title, categoryId, date, startAt, endAt, location, speaker, description };
};

export const actions = {
	createEvent: async ({ request, cookies }) => {
		const formData = await request.formData();

		const partnerData = validatePartnerData(formData);
		if (!partnerData || !partnerData.date || !partnerData.startAt || !partnerData.endAt) {
			return fail(400, { message: 'Missing required event data' });
		}

		console.log('Creating event with data:', `${partnerData.endAt}:00`);
		// // 2025-11-18 06:04:04
		// return;

		const startAt = new Date(`${partnerData.date}T${partnerData.startAt}:00`);
		const endAt = new Date(`${partnerData.date}T${partnerData.endAt}:00`);

		const newEvent = await api('/beranda/events', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${cookies.get('auth_token')}`
			},
			body: JSON.stringify({
				mosqueId: partnerData.mosqueId,
				title: partnerData.title,
				categoryId: partnerData.categoryId,
				startAt: startAt.toISOString(),
				endAt: endAt.toISOString(),
				location: partnerData.location,
				speaker: partnerData.speaker,
				description: partnerData.description
			})
		});

		if (newEvent?.type == 'validation') {
			console.error('Validation error:', newEvent);
			return fail(400, {
				field: newEvent.property,
				message: newEvent.message
			});
		}

		return newEvent;

		// Here you would typically save the eventData to your database
		console.log('Event Data:', partnerData);
	}
};

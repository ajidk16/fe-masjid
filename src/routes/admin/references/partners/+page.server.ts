import { api } from '$lib/utils/api.js';
import { error } from '@sveltejs/kit';

const getAuthHeader = (token: string | undefined) => ({
	Authorization: `Bearer ${token}`,
	'Content-Type': 'application/json'
});

export const load = async ({ url, cookies }) => {
	const page = parseInt(url.searchParams.get('page') || '1');
	const limit = parseInt(url.searchParams.get('limit') || '10');

	const partners = await api(`/mosques/mosque?page=${page}&limit=${limit}`, {
		method: 'GET',
		headers: getAuthHeader(cookies.get('auth_token'))
	});

	if (!partners) {
		return error(500, 'Failed to fetch data');
	}

	return { partners };
};

const validatePartnerData = (formData: FormData, requireId = false) => {
	const id = formData.get('id') as string;
	const slug = formData.get('slug') as string;
	const name = formData.get('name') as string;
	const address = formData.get('address') as string;
	const city = formData.get('city') as string;
	const province = formData.get('province') as string;

	if ((requireId && !id) || !slug || !name || !address || !city || !province) {
		return null;
	}

	return { id, slug, name, address, city, province };
};

export const actions = {
	createPartner: async ({ request, cookies }) => {
		const formData = await request.formData();
		const partnerData = validatePartnerData(formData);

		if (!partnerData) return error(400, 'Missing partner data');

		const newPartner = await api('/mosques/mosque', {
			method: 'POST',
			headers: getAuthHeader(cookies.get('auth_token')),
			body: JSON.stringify({
				slug: partnerData.slug,
				name: partnerData.name,
				address: partnerData.address,
				city: partnerData.city,
				province: partnerData.province
			})
		});

		if (!newPartner) return error(500, 'Failed to create partner');
		return newPartner;
	},
	updatePartner: async ({ request, cookies }) => {
		const formData = await request.formData();
		const partnerData = validatePartnerData(formData, true);

		if (!partnerData) return error(400, 'Missing partner data');

		const updatedPartner = await api(`/mosques/mosque/${partnerData.id}`, {
			method: 'PUT',
			headers: getAuthHeader(cookies.get('auth_token')),
			body: JSON.stringify({
				slug: partnerData.slug,
				name: partnerData.name,
				address: partnerData.address,
				city: partnerData.city,
				province: partnerData.province
			})
		});

		if (!updatedPartner) return error(500, 'Failed to update partner');
		return updatedPartner;
	},
	deletePartner: async ({ request, cookies }) => {
		const formData = await request.formData();
		const id = formData.get('id') as string;

		if (!id) return error(400, 'Missing partner ID');

		const deletedPartner = await api(`/mosques/mosque/${id}`, {
			method: 'DELETE',
			headers: getAuthHeader(cookies.get('auth_token'))
		});

		if (!deletedPartner) return error(500, 'Failed to delete partner');
		return deletedPartner;
	}
};

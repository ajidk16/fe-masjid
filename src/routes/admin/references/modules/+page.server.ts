import { api } from '$lib/utils/api.js';
import { error } from '@sveltejs/kit';

const getAuthHeader = (token: string | undefined) => ({
	Authorization: `Bearer ${token}`,
	'Content-Type': 'application/json'
});

export const load = async ({ url, cookies }) => {
	const page = parseInt(url.searchParams.get('page') || '1');
	const limit = parseInt(url.searchParams.get('limit') || '10');

	const donations = await api(`/references/modules?page=${page}&limit=${limit}`, {
		method: 'GET',
		headers: getAuthHeader(cookies.get('auth_token'))
	});

	if (!donations) {
		return error(500, 'Failed to fetch data');
	}

	return { donations };
};

const validateDonationData = (formData: FormData, requireId = false) => {
	const id = formData.get('id') as string;
	const name = formData.get('name') as string;

	if ((requireId && !id) || !name) {
		return null;
	}

	return { id, name };
};

export const actions = {
	createDonation: async ({ request, cookies }) => {
		const formData = await request.formData();
		const donationData = validateDonationData(formData);

		if (!donationData) return error(400, 'Missing donation data');

		const newDonation = await api('/references/modules', {
			method: 'POST',
			headers: getAuthHeader(cookies.get('auth_token')),
			body: JSON.stringify({
				name: donationData.name
			})
		});

		if (!newDonation) return error(500, 'Failed to create donation');
		return newDonation;
	},
	updateDonation: async ({ request, cookies }) => {
		const formData = await request.formData();
		const donationData = validateDonationData(formData, true);

		if (!donationData) return error(400, 'Missing donation data');

		const updatedDonation = await api(`/references/modules/${donationData.id}`, {
			method: 'PUT',
			headers: getAuthHeader(cookies.get('auth_token')),
			body: JSON.stringify({
				name: donationData.name
			})
		});

		if (!updatedDonation) return error(500, 'Failed to update donation');
		return updatedDonation;
	},
	deleteDonation: async ({ request, cookies }) => {
		const formData = await request.formData();
		const id = formData.get('id') as string;

		if (!id) return error(400, 'Missing donation ID');

		const deletedDonation = await api(`/references/modules/${id}`, {
			method: 'DELETE',
			headers: getAuthHeader(cookies.get('auth_token'))
		});

		if (!deletedDonation) return error(500, 'Failed to delete donation');
		return deletedDonation;
	}
};

import { api } from '$lib/utils/api.js';
import { error } from '@sveltejs/kit';

const getAuthHeader = (token: string | undefined) => ({
	Authorization: `Bearer ${token}`,
	'Content-Type': 'application/json'
});

export const load = async ({ url, cookies }) => {
	const page = parseInt(url.searchParams.get('page') || '1');
	const limit = parseInt(url.searchParams.get('limit') || '10');

	const roles = await api(`/references/categories?page=${page}&limit=${limit}`, {
		method: 'GET',
		headers: getAuthHeader(cookies.get('auth_token'))
	});

	if (!roles) {
		return error(500, 'Failed to fetch data');
	}

	return { roles };
};

const validateRoleData = (formData: FormData, requireId = false) => {
	const id = formData.get('id') as string;
	const name = formData.get('name') as string;
	const description = formData.get('description') as string;

	if ((requireId && !id) || !name || !description) {
		return null;
	}

	return { id, name, description };
};

export const actions = {
	createRole: async ({ request, cookies }) => {
		const formData = await request.formData();
		const roleData = validateRoleData(formData);

		if (!roleData) return error(400, 'Missing role data');

		const newRole = await api('/references/categories', {
			method: 'POST',
			headers: getAuthHeader(cookies.get('auth_token')),
			body: JSON.stringify({
				name: roleData.name,
				description: roleData.description
			})
		});

		if (!newRole) return error(500, 'Failed to create role');
		return newRole;
	},
	updateRole: async ({ request, cookies }) => {
		const formData = await request.formData();
		const roleData = validateRoleData(formData, true);

		if (!roleData) return error(400, 'Missing role data');

		const updatedRole = await api(`/references/categories/${roleData.id}`, {
			method: 'PUT',
			headers: getAuthHeader(cookies.get('auth_token')),
			body: JSON.stringify({
				name: roleData.name,
				description: roleData.description
			})
		});

		if (!updatedRole) return error(500, 'Failed to update role');
		return updatedRole;
	},
	deleteRole: async ({ request, cookies }) => {
		const formData = await request.formData();
		const id = formData.get('id') as string;

		if (!id) return error(400, 'Missing role ID');

		const deletedRole = await api(`/references/categories/${id}`, {
			method: 'DELETE',
			headers: getAuthHeader(cookies.get('auth_token'))
		});

		if (!deletedRole) return error(500, 'Failed to delete role');
		return deletedRole;
	}
};

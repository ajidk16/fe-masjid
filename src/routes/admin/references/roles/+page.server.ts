import { api } from '$lib/utils/api.js';
import { error } from '@sveltejs/kit';

const getAuthHeader = (token: string | undefined) => ({
	Authorization: `Bearer ${token}`,
	'Content-Type': 'application/json'
});

export const load = async ({ url, cookies }) => {
	const page = parseInt(url.searchParams.get('page') || '1');
	const limit = parseInt(url.searchParams.get('limit') || '10');

	const roles = await api(`/references/roles?page=${page}&limit=${limit}`, {
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
	const code = formData.get('code') as string;
	const label = formData.get('label') as string;
	const description = formData.get('description') as string;

	if ((requireId && !id) || !code || !label || !description) {
		return null;
	}

	return { id, code, label, description };
};

export const actions = {
	createRole: async ({ request, cookies }) => {
		const formData = await request.formData();
		const roleData = validateRoleData(formData);

		if (!roleData) return error(400, 'Missing role data');

		const newRole = await api('/references/roles', {
			method: 'POST',
			headers: getAuthHeader(cookies.get('auth_token')),
			body: JSON.stringify({
				code: roleData.code,
				label: roleData.label,
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

		const updatedRole = await api(`/references/roles/${roleData.id}`, {
			method: 'PUT',
			headers: getAuthHeader(cookies.get('auth_token')),
			body: JSON.stringify({
				code: roleData.code,
				label: roleData.label,
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

		const deletedRole = await api(`/references/roles/${id}`, {
			method: 'DELETE',
			headers: getAuthHeader(cookies.get('auth_token'))
		});

		if (!deletedRole) return error(500, 'Failed to delete role');
		return deletedRole;
	}
};

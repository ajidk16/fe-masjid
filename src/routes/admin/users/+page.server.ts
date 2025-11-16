import { api } from '$lib/utils/api.js';
import { error } from '@sveltejs/kit';

export const load = async ({ url, cookies }) => {
	const authHeader = {
		Authorization: `Bearer ${cookies.get('auth_token')}`,
		'Content-Type': 'application/json'
	};

	const page = url.searchParams.get('page') ? parseInt(url.searchParams.get('page')!) : 1;
	const limit = url.searchParams.get('limit') ? parseInt(url.searchParams.get('limit')!) : 12;

	const [members, roles] = await Promise.all([
		api(`/mosques/members?page=${page}&limit=${limit}`, { method: 'GET', headers: authHeader }),
		api(`/references/roles?page=${page}&limit=${limit}`, { method: 'GET', headers: authHeader })
	]);

	if (!members || !roles) {
		return error(500, 'Failed to fetch data');
	}

	return {
		members,
		roles
	};
};

export const actions = {
	updateRoles: async ({ request, cookies }) => {
		const formData = await request.formData();

		// Extract all moduleId, roleId, and permission values from form data
		const moduleIds = formData.getAll('moduleId');
		const roleIds = formData.getAll('roleId');
		const canRead = formData.getAll('canRead');
		const canCreate = formData.getAll('canCreate');
		const canUpdate = formData.getAll('canUpdate');
		const canDelete = formData.getAll('canDelete');
		const canManage = formData.getAll('canManage');

		const permissions = moduleIds.map((moduleId, index) => ({
			id: String(formData.getAll('id')[index]),
			moduleId: String(moduleId),
			roleId: String(roleIds[index]),
			canRead: canRead.includes('on') && canRead[index] === 'on',
			canCreate: canCreate.includes('on') && canCreate[index] === 'on',
			canUpdate: canUpdate.includes('on') && canUpdate[index] === 'on',
			canDelete: canDelete.includes('on') && canDelete[index] === 'on',
			canManage: canManage.includes('on') && canManage[index] === 'on'
		}));

		const result = await Promise.all(
			permissions.map(async (p) => {
				const permission = await api('/references/permissions/' + p.id, {
					method: 'PUT',
					headers: {
						Authorization: `Bearer ${cookies.get('auth_token')}`,
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						moduleId: p.moduleId,
						roleId: p.roleId,
						canRead: p.canRead,
						canCreate: p.canCreate,
						canUpdate: p.canUpdate,
						canDelete: p.canDelete,
						canManage: p.canManage
					})
				});
				return permission;
			})
		);

		return result;
	},
	createRole: async ({ request, cookies }) => {
		const formData = await request.formData();
		const code = formData.get('code');
		const label = formData.get('label');
		const description = formData.get('description');

		if (!code || !label || !description) {
			return error(400, 'Missing role data');
		}

		const newRole = await api('/references/roles', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${cookies.get('auth_token')}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				code,
				label,
				description
			})
		});

		if (!newRole) {
			return error(500, 'Failed to create role');
		}

		return newRole;
	},
	updateRole: async ({ request, cookies }) => {
		const formData = await request.formData();
		const id = formData.get('id');
		const code = formData.get('code');
		const label = formData.get('label');
		const description = formData.get('description');

		if (!id || !code || !label || !description) {
			return error(400, 'Missing role data');
		}

		const updatedRole = await api('/references/roles/' + id, {
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${cookies.get('auth_token')}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				code,
				label,
				description
			})
		});

		if (!updatedRole) {
			return error(500, 'Failed to update role');
		}

		return updatedRole;
	},
	deleteRole: async ({ request, cookies }) => {
		const formData = await request.formData();
		const id = formData.get('id');

		if (!id) {
			return error(400, 'Missing role ID');
		}

		const deletedRole = await api('/references/roles/' + id, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${cookies.get('auth_token')}`,
				'Content-Type': 'application/json'
			}
		});

		if (!deletedRole) {
			return error(500, 'Failed to delete role');
		}

		return deletedRole;
	}
};

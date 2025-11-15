import { api } from '$lib/utils/api.js';
import { error } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
	const members = await api('/mosques/members', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${cookies.get('auth_token')}`,
			'Content-Type': 'application/json'
		}
	});

	if (!members) {
		return error(500, 'Failed to fetch members');
	}

	const roles = await api('/references/roles', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${cookies.get('auth_token')}`,
			'Content-Type': 'application/json'
		}
	});

	if (!roles) {
		return error(500, 'Failed to fetch roles');
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

		return result[0];
	}
};

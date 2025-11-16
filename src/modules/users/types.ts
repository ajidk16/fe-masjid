type Permission = {
	id: string;
	moduleId: string;
	roleId: string;
	canRead: boolean;
	canCreate: boolean;
	canUpdate: boolean;
	canDelete: boolean;
	canManage: boolean;
	module: {
		name: string;
	};
};

export type Role = {
	id: string;
	label: string;
	code: string;
	description: string;
	memberCount?: number;
	permission?: Permission[];
};

export type User = {
	id: string;
	name: string;
	email: string;
	phone: string;
	roles: Role[];
	createdAt: string;
	updatedAt: string;
};
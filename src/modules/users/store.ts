// buatk store untuk user
import { writable } from 'svelte/store';
import type { Role } from './types';

export const roleStore = writable<Role[]>([]);

export const setRoles = (role: Role[]) => {
	roleStore.set(role);
};

export const getRoles = () => {
    let roles: Role[] = [];
    roleStore.subscribe((value) => {
        roles = value;
    })();
    return roles;
}
<script lang="ts">
	import { cn } from '$lib/utils/cn.js';
	import { Copy, SquarePen, Trash2 } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import ModalPermission from '../modal/modal-permission.svelte';
	import ModalRemove from '../modal/modal-remove.svelte';
	import type { Role } from '../../types';
	import { getRoles } from '../../store';

	const { roles } = $props();

	let modalRole = $state(false);
	let modalPermission = $state(false);
	let modalRemove = $state(false);
	let selectedRoles: Role = $state({} as Role);
</script>

<main
	class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
>
	<h2 class="mb-4 text-lg font-medium">Daftar Peran & Izin</h2>
	<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
		<!-- sample role card -->
		{#each roles.data as role}
			<div class="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
				<div class="flex items-start justify-between">
					<div>
						<p class="font-medium capitalize">{role.code}</p>
						<p class="text-xs text-slate-500">{role.description}</p>
					</div>
					<span class="rounded-lg bg-brand-50 px-2 py-0.5 text-xs text-brand-900"
						>{role.memberCount} user</span
					>
				</div>

				<div class="mt-4 flex gap-2 text-sm">
					<button
						class="flex-1 rounded-xl bg-brand-600 px-3 py-2 text-white hover:bg-brand-700"
						onclick={() => {
							modalPermission = true;
							selectedRoles = role;
						}}>Edit Izin</button
					>
					<button
						class="rounded-xl bg-slate-100 px-3 py-2 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
						title="Duplikat"
					>
						<Copy size={16} />
					</button>
					<button
						class="rounded-xl bg-slate-100 px-3 py-2 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
						title="Edit Peran"
						onclick={() => {
							modalRole = true;
							selectedRoles = role;
						}}
					>
						<SquarePen size={16} />
					</button>
					<button
						class="btn rounded-xl bg-slate-100 px-3 py-2 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
						onclick={() => {
							modalRemove = true;
							selectedRoles = role;
						}}
					>
						<Trash2 size={16} />
					</button>
				</div>
			</div>
		{/each}
	</div>
	<div class="mt-4 flex flex-col gap-3 p-3 sm:flex-row sm:items-center sm:justify-between">
		<div class="text-xs text-slate-500">
			Menampilkan {roles.pagination.page}–{roles.pagination.page * roles.pagination.limit} dari
			{roles.pagination.total}
		</div>
		{#if roles.pagination.total > roles.pagination.limit}
			<div class="flex items-center gap-2">
				<button
					class={cn(
						'rounded-lg px-3 py-1.5 text-sm text-white',
						roles.pagination.page === 1
							? 'cursor-not-allowed bg-slate-400'
							: 'cursor-pointer bg-brand-600 hover:bg-brand-700'
					)}
					disabled={roles.pagination.page === 1}
					onclick={() => {
						goto('/admin/users?page=' + (roles.pagination.page - 1));
					}}>Sebelumnya</button
				>
				<button
					class={cn(
						'rounded-lg px-3 py-1.5 text-sm text-white',
						roles.pagination.page === roles.pagination.totalPages
							? 'cursor-not-allowed bg-slate-400'
							: 'cursor-pointer bg-brand-600 hover:bg-brand-700'
					)}
					disabled={roles.pagination.page === roles.pagination.totalPages}
					onclick={() => {
						goto('/admin/users?page=' + (roles.pagination.page + 1));
					}}>Berikutnya</button
				>
			</div>
		{/if}
	</div>
</main>

<ModalPermission
	isOpen={modalPermission}
	onClose={() => {
		modalPermission = false;
		selectedRoles = {} as Role;
	}}
	data={selectedRoles}
/>

<ModalRemove
	isOpen={modalRemove}
	onClose={() => {
		modalRemove = false;
		selectedRoles = {} as Role;
	}}
	item={'peran ' + selectedRoles?.label}
	data={selectedRoles}
/>

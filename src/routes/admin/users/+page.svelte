<script lang="ts">
	import { ModalPeran, ModalUser, TabUsers } from '../../../modules/users/index.js';
	import TabRoles from '../../../modules/users/components/tab/tab-roles.svelte';
	import type { Role } from '../../../modules/users/types.js';
	import { cn } from '$lib/utils/cn.js';

	let activeTab = $state('users');
	let modalUser = $state(false);
	let modalRole = $state(false);

	const { data } = $props();
	const roles = $derived(data.roles);
	const members = $derived(data.members);

	let selectedRoles: Role = $state({} as Role);

	const listTabs = [
		{ code: 'users', label: 'Pengguna' },
		{ code: 'roles', label: 'Peran & Izin' }
	];
</script>

<main class="space-y-6 p-4 lg:p-6">
	<!-- KPIs -->
	<section class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
		<div
			class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
		>
			<p class="text-sm text-slate-500">Total Pengguna</p>
			<p class="mt-1 text-2xl font-semibold">{members?.pagination?.total}</p>
			<p class="text-xs text-slate-500">+46 bulan ini</p>
		</div>
		<div
			class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
		>
			<p class="text-sm text-slate-500">Admin & Takmir</p>
			<p class="mt-1 text-2xl font-semibold">{members?.pagination?.totalAdmin}</p>
			<p class="text-xs text-slate-500">4 superadmin</p>
		</div>
		<div
			class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
		>
			<p class="text-sm text-slate-500">Jamaah Aktif</p>
			<p class="mt-1 text-2xl font-semibold">{members?.pagination?.totalActive}</p>
			<div class="mt-3 h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800">
				<div class="h-2 rounded-full bg-brand-600" style="width:72%"></div>
			</div>
		</div>
		<div
			class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
		>
			<p class="text-sm text-slate-500">Permintaan Akses</p>
			<p class="mt-1 text-2xl font-semibold">{members?.pagination?.totalInactive}</p>
			<p class="text-xs text-gold-700 dark:text-gold-400">Butuh verifikasi</p>
		</div>
	</section>

	<!-- Tabs -->
	<section>
		<div class="mb-4 flex items-center gap-2 border-slate-200 dark:border-slate-800">
			{#each listTabs as tab}
				<button
					onclick={() => (activeTab = tab.code)}
					class="cursor-pointer rounded-t-xl px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 {activeTab ===
					tab.code
						? 'border-brand-600 bg-slate-100 dark:bg-slate-800'
						: ''}"
				>
					{tab.label}
				</button>
			{/each}

			<div class="ml-auto flex gap-2">
				<button
					onclick={() => (modalRole = true)}
					class={cn(
						'cursor-pointer rounded-xl bg-brand-600 px-3 py-2 text-white hover:bg-brand-700',
						activeTab === 'roles' ? '' : 'hidden'
					)}>Buat Peran</button
				>
			</div>
		</div>

		<!-- Users table -->
		{#if activeTab === 'users'}
			<TabUsers {members} {roles} />
		{/if}

		<!-- Roles grid -->
		{#if activeTab === 'roles'}
			<TabRoles {roles} />
		{/if}
	</section>
</main>

<ModalUser {modalUser} {roles} />

<ModalPeran
	isOpen={modalRole}
	onClose={() => {
		modalRole = false;
		selectedRoles = {} as Role;
	}}
	data={selectedRoles}
/>

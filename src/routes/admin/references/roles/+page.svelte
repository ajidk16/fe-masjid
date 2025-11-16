<script lang="ts">
	import { goto } from '$app/navigation';
	import { cn } from '$lib/utils/cn.js';
	import { SquarePen, Trash2 } from 'lucide-svelte';
	import type { Role } from '../../../../modules/users/types.js';
	import { Modal, ModalRemove } from '$lib/shared/index.js';

	let { data } = $props();
	const roles = $derived(data.roles);

	let modalOpen = $state(false);
	let selectedRole = $state<Role>({} as Role);

	let modalRemove = $state(false);

	let selectedIds = $state<number[]>([]);

	// console.log('Roles Data:', selectedIds);

	// toggle all checkboxes
	const toggleAll = () => {
		const allIds = roles.data.map((role: Role) => role.id);
		if (selectedIds.length === allIds.length) {
			selectedIds = [];
		} else {
			selectedIds = [...allIds];
		}
	};

	const toggleRow = (id: number) => {
		if (selectedIds.includes(id)) {
			selectedIds = selectedIds.filter((selectedId) => selectedId !== id);
		} else {
			selectedIds = [...selectedIds, id];
		}
	};
</script>

<main class="space-y-5 px-4 pt-6">
	<section class="flex items-center justify-between">
		<h1 class="text-2xl font-semibold">Manajemen Pengguna</h1>
		<button class="btn rounded-xl btn-sm btn-primary" onclick={() => (modalOpen = true)}>
			Tambah Pengguna
		</button>
	</section>

	<section class="card">
		<div
			class="flex items-center justify-between border-b border-slate-200 p-4 dark:border-slate-800"
		>
			<p class="font-medium">Daftar Pengguna</p>
			<div class="text-sm text-slate-500">
				Total: <span id="totalCount">{roles.pagination.total}</span>
			</div>
		</div>

		<div class="thin overflow-x-auto">
			<table class="w-full text-sm">
				<thead class="bg-slate-50 text-left dark:bg-slate-950/40">
					<tr class="text-slate-600">
						<th class="w-10 p-3">
							<input
								id="checkAll"
								type="checkbox"
								class="size-4"
								checked={selectedIds.length === roles.data.length}
								onchange={toggleAll}
							/>
						</th>
						<th class="p-3">Kode</th>
						<th class="p-3">Label</th>
						<th class="p-3">Deskripsi</th>
						<th class="p-3 text-right">Aksi</th>
					</tr>
				</thead>
				<tbody id="tbody">
					{#each roles.data as role}
						<tr class="border-t border-slate-100 dark:border-slate-800">
							<td class="p-3">
								<input
									type="checkbox"
									class="rowcheck size-4"
									checked={selectedIds.includes(role.id)}
									onchange={() => toggleRow(role.id)}
								/>
							</td>
							<td class="p-3">{role.code}</td>
							<td class="p-3">{role.label}</td>
							<td class="p-3">
								{role.description}
							</td>
							<td class="p-3 text-right">
								<div class="flex justify-end gap-2">
									<button
										class="btn btn-circle btn-sm"
										onclick={() => {
											modalOpen = true;
											selectedRole = role;
										}}
									>
										<SquarePen size={16} />
									</button>
									<button
										class="btn btn-circle btn-sm btn-error"
										onclick={() => {
											modalRemove = true;
											selectedRole = role;
										}}
									>
										<Trash2 size={16} />
									</button>
								</div>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<!-- Pagination -->
		<div class="flex flex-col gap-3 p-3 sm:flex-row sm:items-center sm:justify-between">
			<div class="text-xs text-slate-500">
				Menampilkan {roles.pagination.page} - {roles.pagination.page * roles.pagination.limit} dari {roles
					.pagination.total}
			</div>

			<div class="flex items-center gap-2">
				{#if roles.pagination.total > roles.pagination.limit}
					<button
						class={cn(
							'rounded-lg px-3 py-1.5 text-sm text-white',
							roles.pagination.page === 1
								? 'cursor-not-allowed bg-slate-400'
								: 'cursor-pointer bg-brand-600 hover:bg-brand-700'
						)}
						disabled={roles.pagination.page === 1}
						onclick={() => goto(`/admin/references/roles?page=${roles.pagination.page - 1}`)}
					>
						Sebelumnya
					</button>
					<button
						class={cn(
							'rounded-lg px-3 py-1.5 text-sm text-white',
							roles.pagination.page === roles.pagination.totalPages
								? 'cursor-not-allowed bg-slate-400'
								: 'cursor-pointer bg-brand-600 hover:bg-brand-700'
						)}
						disabled={roles.pagination.page === roles.pagination.totalPages}
						onclick={() => goto(`/admin/references/roles?page=${roles.pagination.page + 1}`)}
					>
						Berikutnya
					</button>
				{/if}
			</div>
		</div>
	</section>
</main>

{#if modalOpen}
	<Modal
		isOpen={modalOpen}
		title={selectedRole?.id ? 'Perbarui Peran' : 'Buat Peran'}
		onClose={() => {
			modalOpen = false;
			selectedRole = {} as Role;
		}}
		action={selectedRole?.id ? '?/updateRole' : '?/createRole'}
	>
		<input type="hidden" name="id" value={selectedRole?.id} />
		<div>
			<label for="code">Kode</label>
			<input
				id="code"
				name="code"
				type="text"
				placeholder="Masukkan kode unik peran"
				bind:value={selectedRole.code}
				class="my-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
			/>
		</div>
		<div>
			<label for="label">Label</label>
			<input
				id="label"
				name="label"
				type="text"
				placeholder="Masukkan label peran"
				bind:value={selectedRole.label}
				class="my-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
			/>
		</div>
		<div>
			<label for="description">Deskripsi</label>
			<textarea
				id="description"
				name="description"
				placeholder="Masukkan deskripsi peran"
				bind:value={selectedRole.description}
				class="my-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
			></textarea>
		</div>
	</Modal>
{/if}

{#if modalRemove}
	<ModalRemove
		isOpen={modalRemove}
		onClose={() => {
			modalRemove = false;
			selectedRole = {} as Role;
		}}
		item={selectedRole?.label}
		data={selectedRole}
		action="?/deleteRole"
	/>
{/if}

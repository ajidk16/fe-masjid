<script lang="ts">
	import { enhance } from '$app/forms';
	import { cn } from '$lib/utils/cn.js';
	import { formatDate, formatDateTime } from '$lib/utils/format.js';
	import { X } from 'lucide-svelte';

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

	type Role = {
		code: string;
		description: string;
		memberCount: number;
		permission: Permission[];
	};

	let activeTab = $state('users');
	let modalUser = $state(false);
	let modalRole = $state(false);
	let selectedRoles: Role = $state({} as Role);
	let loading = $state(false);

	const modules = [
		'Donasi',
		'Zakat',
		'Kegiatan',
		'Marketplace',
		'Inventaris',
		'Laporan',
		'Pengguna'
	];

	const { data } = $props();
	const members = $derived(data.members);
	const roles = $derived(data.roles);

	const handleEdit = (role: Role) => {
		modalRole = true;
		selectedRoles = role;
	};
</script>

<main class="space-y-6 p-4 lg:p-6">
	<!-- KPIs -->
	<section class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
		<div
			class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
		>
			<p class="text-sm text-slate-500">Total Pengguna</p>
			<p class="mt-1 text-2xl font-semibold">1.284</p>
			<p class="text-xs text-slate-500">+46 bulan ini</p>
		</div>
		<div
			class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
		>
			<p class="text-sm text-slate-500">Admin & Takmir</p>
			<p class="mt-1 text-2xl font-semibold">18</p>
			<p class="text-xs text-slate-500">4 superadmin</p>
		</div>
		<div
			class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
		>
			<p class="text-sm text-slate-500">Jamaah Aktif</p>
			<p class="mt-1 text-2xl font-semibold">936</p>
			<div class="mt-3 h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800">
				<div class="h-2 rounded-full bg-brand-600" style="width:72%"></div>
			</div>
		</div>
		<div
			class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
		>
			<p class="text-sm text-slate-500">Permintaan Akses</p>
			<p class="mt-1 text-2xl font-semibold">7</p>
			<p class="text-xs text-gold-700 dark:text-gold-400">Butuh verifikasi</p>
		</div>
	</section>

	<!-- Tabs -->
	<section>
		<div class="mb-4 flex items-center gap-2 border-slate-200 dark:border-slate-800">
			<button
				onclick={() => (activeTab = 'users')}
				class="{activeTab === 'users'
					? 'border-brand-600 bg-slate-100 dark:bg-slate-800'
					: ''} rounded-t-xl px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800">Pengguna</button
			>
			<button
				onclick={() => (activeTab = 'roles')}
				id="tab-roles"
				class="{activeTab === 'roles'
					? 'border-brand-600 bg-slate-100 dark:bg-slate-800'
					: ''}  rounded-t-xl px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"
				>Peran & Izin</button
			>
			<div class="ml-auto flex gap-2">
				<button
					onclick={() => (modalUser = true)}
					class="rounded-xl bg-brand-600 px-3 py-2 text-white">Tambah Pengguna</button
				>
				<button
					onclick={() => (modalRole = true)}
					class="rounded-xl bg-slate-100 px-3 py-2 dark:bg-slate-800">Buat Peran</button
				>
			</div>
		</div>

		<!-- Users table -->
		{#if activeTab === 'users'}
			<main class="space-y-5">
				<section class="card p-4">
					<div class="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
						<div class="relative">
							<input
								id="search"
								type="search"
								placeholder="Cari nama/email…"
								class="w-full rounded-xl border border-slate-200 bg-white px-10 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:focus:ring-brand-700"
							/>
							<svg
								class="absolute top-1/2 left-3 size-5 -translate-y-1/2 text-slate-400"
								viewBox="0 0 24 24"
								fill="none"
								><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" /><path
									d="M20 20l-3-3"
									stroke="currentColor"
									stroke-width="2"
								/></svg
							>
						</div>
						<select
							id="roleFilter"
							class="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none dark:border-slate-800 dark:bg-slate-900"
						>
							<option value="">Semua Peran</option>
							<option>Admin</option>
							<option>Operator</option>
							<option>Jamaah</option>
						</select>
						<select
							id="statusFilter"
							class="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none dark:border-slate-800 dark:bg-slate-900"
						>
							<option value="">Semua Status</option>
							<option>Aktif</option>
							<option>Nonaktif</option>
						</select>
						<div class="flex gap-2">
							<button
								id="btn-bulk-activate"
								class="rounded-xl bg-slate-100 px-3 py-2 text-sm dark:bg-slate-800">Aktifkan</button
							>
							<button
								id="btn-bulk-deactivate"
								class="rounded-xl bg-slate-100 px-3 py-2 text-sm dark:bg-slate-800"
								>Nonaktifkan</button
							>
							<button
								id="btn-bulk-delete"
								class="rounded-xl bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-700"
								>Hapus</button
							>
						</div>
					</div>
					<div class="mt-3 flex flex-wrap gap-2">
						<button class="rounded-xl bg-slate-100 px-3 py-2 text-sm dark:bg-slate-800"
							>Impor CSV</button
						>
						<button class="rounded-xl bg-slate-100 px-3 py-2 text-sm dark:bg-slate-800"
							>Ekspor CSV</button
						>
						<button class="rounded-xl bg-slate-100 px-3 py-2 text-sm dark:bg-slate-800"
							>Unduh Template</button
						>
					</div>
				</section>

				<section class="card">
					<div
						class="flex items-center justify-between border-b border-slate-200 p-4 dark:border-slate-800"
					>
						<p class="font-medium">Daftar Pengguna</p>
						<div class="text-sm text-slate-500">Total: <span id="totalCount">8</span></div>
					</div>

					<div class="thin overflow-x-auto">
						<table class="w-full text-sm">
							<thead class="bg-slate-50 text-left dark:bg-slate-950/40">
								<tr class="text-slate-600">
									<th class="w-10 p-3"><input id="checkAll" type="checkbox" class="size-4" /></th>
									<th class="p-3">Pengguna</th>
									<th class="p-3">Email</th>
									<th class="p-3">Peran</th>
									<th class="p-3">Status</th>
									<th class="p-3">Terakhir Masuk</th>
									<th class="p-3 text-right">Aksi</th>
								</tr>
							</thead>
							<tbody id="tbody">
								{#each members.data as member}
									<tr class="border-t border-slate-100 dark:border-slate-800">
										<td class="p-3 text-center"
											><input type="checkbox" class="rowcheck size-4" /></td
										>
										<td class="p-3 text-center">
											<div class="flex items-center gap-3">
												<div
													class="grid size-9 place-items-center rounded-xl bg-brand-900 text-xs text-white"
												>
													{member.fullName.toUpperCase().slice(0, 2)}
												</div>
												<div>
													<p class="font-medium capitalize">{member.fullName}</p>
													<p class="text-xs text-slate-500">Takmir</p>
												</div>
											</div>
										</td>
										<td class="p-3 text-center">{member.user.email}</td>
										<td class="p-3 text-center">
											<span
												class={cn(
													'badge',
													member?.role?.code == 'admin' && 'badge-admin',
													member?.role?.code == 'operator' && 'badge-operator',
													member?.role?.code == 'jamaah' && 'badge-jamaah',
													member?.role?.code == 'relawan' && 'badge-relawan',
													member?.role?.code == null && 'badge-unknown'
												)}>{member?.role ? member.role.label : 'Unknown'}</span
											>
										</td>
										<td class="p-3 text-center"
											><span
												class={cn('badge', member.user.verifiedEmail ? 'status-on' : 'status-off')}
												>{member.user.verifiedEmail ? 'Aktif' : 'Tidak Aktif'}</span
											></td
										>
										<td class="p-3 text-center">{formatDateTime(member.user.createdAt)}</td>
										<td class="p-3 text-center">
											<div class="flex justify-end gap-2">
												<button
													class="rounded-lg bg-slate-100 px-2 py-1 dark:bg-slate-800"
													data-edit>Ubah</button
												>
												<button
													class="rounded-lg bg-red-600 px-2 py-1 text-white hover:bg-red-700"
													data-del>Hapus</button
												>
											</div>
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>

					<!-- Footer table -->
					<div class="flex flex-col gap-3 p-3 sm:flex-row sm:items-center sm:justify-between">
						<div class="text-xs text-slate-500">Menampilkan 1–6 dari 8</div>
						<div class="flex items-center gap-2">
							<button class="rounded-lg bg-slate-100 px-3 py-1.5 text-sm dark:bg-slate-800"
								>Sebelumnya</button
							>
							<button class="rounded-lg bg-brand-600 px-3 py-1.5 text-sm text-white"
								>Berikutnya</button
							>
						</div>
					</div>
				</section>
			</main>
		{/if}

		<!-- Roles grid -->
		{#if activeTab === 'roles'}
			<div
				class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
			>
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
							<div class="mt-3 flex flex-wrap gap-1 text-xs">
								<span class="rounded-lg bg-slate-100 px-2 py-1 dark:bg-slate-800">Baca</span>
								<span class="rounded-lg bg-slate-100 px-2 py-1 dark:bg-slate-800">Buat</span>
								<span class="rounded-lg bg-slate-100 px-2 py-1 dark:bg-slate-800">Ubah</span>
								<span class="rounded-lg bg-slate-100 px-2 py-1 dark:bg-slate-800">Hapus</span>
								<span class="rounded-lg bg-slate-100 px-2 py-1 dark:bg-slate-800">Kelola</span>
							</div>
							<div class="mt-4 flex gap-2">
								<button
									class="cursor-pointer rounded-xl bg-slate-100 px-3 py-2 text-sm dark:bg-slate-800"
									onclick={() => handleEdit(role)}>Edit Izin</button
								>
								<button
									class="cursor-pointer rounded-xl bg-slate-100 px-3 py-2 text-sm dark:bg-slate-800"
									>Duplikat</button
								>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</section>
</main>

{#if modalUser}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
		<div class="w-full max-w-xl rounded-2xl">
			<div class="absolute inset-0 bg-black/40"></div>
			<div
				class="relative rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
			>
				<div class="flex items-center justify-between">
					<p id="user-title" class="font-medium">Tambah Pengguna</p>
					<button
						onclick={() => (modalUser = false)}
						class="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
					>
						<X size={24} />
					</button>
				</div>
				<div class="mt-3 grid gap-3 md:grid-cols-2">
					<div>
						<label for="f-name" class="text-xs text-slate-500">Nama</label>
						<input
							id="f-name"
							class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:focus:ring-brand-700"
						/>
					</div>
					<div>
						<label for="f-email" class="text-xs text-slate-500">Email</label>
						<input
							id="f-email"
							type="email"
							class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 dark:border-slate-800 dark:bg-slate-900"
						/>
					</div>
					<div>
						<label for="f-phone" class="text-xs text-slate-500">Telepon</label>
						<input
							id="f-phone"
							class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 dark:border-slate-800 dark:bg-slate-900"
						/>
					</div>
					<div>
						<label for="f-status" class="text-xs text-slate-500">Status</label>
						<select
							id="f-status"
							class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-800 dark:bg-slate-900"
						>
							<option>Aktif</option>
							<option>Nonaktif</option>
							<option>Menunggu</option>
						</select>
					</div>
					<div class="md:col-span-2">
						<label for="to" class="text-xs text-slate-500">Peran</label>
						<div class="mt-1 flex flex-wrap gap-2">
							<button
								class="role-chip rounded-xl bg-slate-100 px-3 py-1.5 text-sm dark:bg-slate-800"
								data-role="Jamaah">Jamaah</button
							>
							<button
								class="role-chip rounded-xl bg-slate-100 px-3 py-1.5 text-sm dark:bg-slate-800"
								data-role="Relawan">Relawan</button
							>
							<button
								class="role-chip rounded-xl bg-slate-100 px-3 py-1.5 text-sm dark:bg-slate-800"
								data-role="Takmir">Takmir</button
							>
							<button
								class="role-chip rounded-xl bg-slate-100 px-3 py-1.5 text-sm dark:bg-slate-800"
								data-role="Bendahara">Bendahara</button
							>
							<button
								class="role-chip rounded-xl bg-slate-100 px-3 py-1.5 text-sm dark:bg-slate-800"
								data-role="Superadmin">Superadmin</button
							>
						</div>
						<div id="selected-roles" class="mt-2 flex flex-wrap gap-2 text-sm"></div>
					</div>
				</div>
				<div class="mt-4 flex justify-end gap-2">
					<button
						onclick={() => (modalUser = false)}
						class="rounded-xl bg-slate-100 px-3 py-2 dark:bg-slate-800">Batal</button
					>
					<button class="rounded-xl bg-brand-600 px-3 py-2 text-white">Simpan</button>
				</div>
			</div>
		</div>
	</div>
{/if}

{#if modalRole}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
		<form
			class="w-full max-w-xl rounded-2xl"
			method="POST"
			use:enhance={() => {
				return async ({ result }) => {
					loading = true;

					if (result.status === 200) {
						modalRole = false;
						loading = false;
					}
				};
			}}
			action="?/updateRoles"
		>
			<div class="absolute inset-0 bg-black/40"></div>
			<div
				class="relative rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
			>
				<div class="flex items-center justify-between">
					<p class="font-medium capitalize">
						Izin Peran: <span id="perm-role">{selectedRoles.code}</span>
					</p>
					<button
						onclick={() => (modalRole = false)}
						class="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
					>
						<X size={24} />
					</button>
				</div>

				<div class="thin-scrollbar mt-3 h-[70svh] overflow-x-auto overflow-y-auto">
					<table class="w-full text-sm">
						<thead class="bg-slate-50 dark:bg-slate-950/40">
							<tr>
								<th class="p-3 text-left font-medium">Modul</th>
								<th class="p-3 text-left font-medium">Baca</th>
								<th class="p-3 text-left font-medium">Buat</th>
								<th class="p-3 text-left font-medium">Ubah</th>
								<th class="p-3 text-left font-medium">Hapus</th>
								<th class="p-3 text-left font-medium">Kelola</th>
								<th class="p-3 text-left font-medium">Pilih semua</th>
							</tr>
						</thead>
						<tbody id="perm-body">
							{#each selectedRoles.permission as m, i}
								<tr class="border-t border-slate-100 dark:border-slate-800">
									<td class="p-3 font-medium capitalize">{m.module.name.replace('-', ' ')}</td>
									<td class="p-3 text-center">
										<div>
											<input type="hidden" name="id" value={m.id} />
											<input type="hidden" name={'moduleId'} value={m.moduleId} />

											<input type="hidden" name={'roleId'} value={m.roleId} />
											<input
												type="checkbox"
												class="perm-read"
												name={'canRead'}
												checked={m.canRead}
												onchange={() => (m.canRead = !m.canRead)}
											/>
										</div>
									</td>
									<td class="p-3 text-center">
										<input
											type="checkbox"
											class="perm-create"
											name={'canCreate'}
											checked={m.canCreate}
											onchange={() => (m.canCreate = !m.canCreate)}
										/>
									</td>
									<td class="p-3 text-center">
										<input
											type="checkbox"
											class="perm-update"
											name={'canUpdate'}
											checked={m.canUpdate}
											onchange={() => (m.canUpdate = !m.canUpdate)}
										/>
									</td>
									<td class="p-3 text-center">
										<input
											type="checkbox"
											class="perm-delete"
											name={'canDelete'}
											checked={m.canDelete}
											onchange={() => (m.canDelete = !m.canDelete)}
										/>
									</td>
									<td class="p-3 text-center">
										<input
											type="checkbox"
											class="perm-manage"
											name={'canManage'}
											checked={m.canManage}
											onchange={() => (m.canManage = !m.canManage)}
										/>
									</td>
									<td class="p-3 text-center">
										<!-- <input
											type="checkbox"
											class="perm-all"
											checked={m.canRead &&
												m.canCreate &&
												m.canUpdate &&
												m.canDelete &&
												m.canManage}
											onchange={() => {
												const allChecked =
													m.canRead && m.canCreate && m.canUpdate && m.canDelete && m.canManage;
												m.canRead = !allChecked;
												m.canCreate = !allChecked;
												m.canUpdate = !allChecked;
												m.canDelete = !allChecked;
												m.canManage = !allChecked;
											}}
										/> -->
										{#if m.canRead && m.canCreate && m.canUpdate && m.canDelete && m.canManage}
											<button
												onclick={() => {
													m.canRead = false;
													m.canCreate = false;
													m.canUpdate = false;
													m.canDelete = false;
													m.canManage = false;
												}}>❌</button
											>
										{:else}
											<button
												onclick={() => {
													m.canRead = true;
													m.canCreate = true;
													m.canUpdate = true;
													m.canDelete = true;
													m.canManage = true;
												}}>✅</button
											>
										{/if}
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>

				<div class="mt-4 flex justify-end gap-2">
					<button
						onclick={() => (modalRole = false)}
						class="rounded-xl bg-slate-100 px-3 py-2 dark:bg-slate-800">Tutup</button
					>
					<button type="submit" class="rounded-xl bg-brand-600 px-3 py-2 text-white">Simpan</button>
				</div>
			</div>
		</form>
	</div>
{/if}

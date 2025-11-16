<script lang="ts">
	import { enhance } from '$app/forms';
	import { Loader, X } from 'lucide-svelte';

	let { isOpen, onClose, data } = $props();

	let selectedRoles = $derived(data);

	function closeDrawer() {
		if (onClose) onClose();
	}

	let loading = $state(false);
</script>

{#if isOpen}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
		<form
			class="w-full max-w-xl rounded-2xl"
			method="POST"
			use:enhance={() => {
				loading = true;

				setTimeout(() => {
					loading = false;
					closeDrawer();
				}, 500);
			}}
			action="?/updatePermission"
		>
			<div class="absolute inset-0 bg-black/40"></div>
			<div
				class="relative rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
			>
				<div class="flex items-center justify-between">
					<p class="font-medium capitalize">
						Izin Peran: <span id="perm-role">{selectedRoles?.code}</span>
					</p>
					<button
						onclick={() => closeDrawer()}
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
							{#each selectedRoles?.permission as m, i}
								<tr class="border-t border-slate-100 dark:border-slate-800">
									<td class="p-3 font-medium capitalize">{m?.module?.name?.replace('-', ' ')}</td>
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
						onclick={() => closeDrawer()}
						class="rounded-xl bg-slate-100 px-3 py-2 dark:bg-slate-800">Tutup</button
					>
					<button
						type="submit"
						class="rounded-xl bg-brand-600 px-3 py-2 text-white disabled:opacity-50"
						disabled={loading}
					>
						{#if loading}
							<span class="flex items-center gap-2">
								<Loader size={16} class="animate-spin" />
								<span>Menyimpan...</span>
							</span>
						{:else}
							Simpan
						{/if}
					</button>
				</div>
			</div>
		</form>
	</div>
{/if}

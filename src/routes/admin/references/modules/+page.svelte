<script lang="ts">
	import { goto } from '$app/navigation';
	import { cn } from '$lib/utils/cn.js';
	import { SquarePen, Trash2 } from 'lucide-svelte';
	import { Modal, ModalRemove } from '$lib/shared/index.js';

	type Module = {
		id: number;
		name: string;
	};

	let { data } = $props();
	const donations = $derived(data.donations);

	let modalOpen = $state(false);
	let selectedDonation = $state<Module>({} as Module);

	let modalRemove = $state(false);

	let selectedIds = $state<number[]>([]);

	const toggleAll = () => {
		const allIds = donations.data.map((donation: Module) => donation.id);
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
		<h1 class="text-2xl font-semibold">Referensi Module</h1>
		<button class="btn rounded-xl btn-sm btn-primary" onclick={() => (modalOpen = true)}>
			Tambah Module
		</button>
	</section>

	<section class="card">
		<div
			class="flex items-center justify-between border-b border-slate-200 p-4 dark:border-slate-800"
		>
			<p class="font-medium">Daftar Module</p>
			<div class="text-sm text-slate-500">
				Total: <span id="totalCount">{donations.pagination.total}</span>
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
								checked={selectedIds.length === donations.data.length}
								onchange={toggleAll}
							/>
						</th>
						<th class="p-3">Nama</th>
						<th class="p-3 text-right">Aksi</th>
					</tr>
				</thead>
				<tbody id="tbody">
					{#each donations.data as donation}
						<tr class="border-t border-slate-100 dark:border-slate-800">
							<td class="p-3">
								<input
									type="checkbox"
									class="rowcheck size-4"
									checked={selectedIds.includes(donation.id)}
									onchange={() => toggleRow(donation.id)}
								/>
							</td>
							<td class="p-3">{donation.name}</td>
							<td class="p-3 text-right">
								<div class="flex justify-end gap-2">
									<button
										class="btn btn-circle btn-sm"
										onclick={() => {
											modalOpen = true;
											selectedDonation = donation;
										}}
									>
										<SquarePen size={16} />
									</button>
									<button
										class="btn btn-circle btn-sm btn-error"
										onclick={() => {
											modalRemove = true;
											selectedDonation = donation;
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
				Menampilkan {donations.pagination.page} - {donations.pagination.page *
					donations.pagination.limit} dari {donations.pagination.total}
			</div>

			<div class="flex items-center gap-2">
				{#if donations.pagination.total > donations.pagination.limit}
					<button
						class={cn(
							'rounded-lg px-3 py-1.5 text-sm text-white',
							donations.pagination.page === 1
								? 'cursor-not-allowed bg-slate-400'
								: 'cursor-pointer bg-brand-600 hover:bg-brand-700'
						)}
						disabled={donations.pagination.page === 1}
						onclick={() =>
							goto(`/admin/references/modules?page=${donations.pagination.page - 1}`)}
					>
						Sebelumnya
					</button>
					<button
						class={cn(
							'rounded-lg px-3 py-1.5 text-sm text-white',
							donations.pagination.page === donations.pagination.totalPages
								? 'cursor-not-allowed bg-slate-400'
								: 'cursor-pointer bg-brand-600 hover:bg-brand-700'
						)}
						disabled={donations.pagination.page === donations.pagination.totalPages}
						onclick={() =>
							goto(`/admin/references/modules?page=${donations.pagination.page + 1}`)}
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
		title={selectedDonation?.id ? 'Perbarui Module' : 'Buat Module'}
		onClose={() => {
			modalOpen = false;
			selectedDonation = {} as Module;
		}}
		action={selectedDonation?.id ? '?/updateDonation' : '?/createDonation'}
	>
		<input type="hidden" name="id" value={selectedDonation?.id} />
		<div>
			<label for="name">Kode</label>
			<input
				id="name"
				name="name"
				type="text"
				placeholder="Masukkan Nama"
				bind:value={selectedDonation.name}
				class="my-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
			/>
		</div>
	</Modal>
{/if}

{#if modalRemove}
	<ModalRemove
		isOpen={modalRemove}
		onClose={() => {
			modalRemove = false;
			selectedDonation = {} as Module;
		}}
		item={selectedDonation?.name}
		data={selectedDonation}
		action="?/deleteDonation"
	/>
{/if}

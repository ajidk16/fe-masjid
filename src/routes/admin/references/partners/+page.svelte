<script lang="ts">
	import { goto } from '$app/navigation';
	import { cn } from '$lib/utils/cn.js';
	import { SquarePen, Trash2 } from 'lucide-svelte';
	import { Modal, ModalRemove } from '$lib/shared/index.js';
	import type { LocationData } from '$lib/utils/get-location.js';

	let { data } = $props();
	const partners = $derived(data.partners);

	type Partner = {
		id?: number;
		slug?: string;
		name?: string;
		address?: string;
		city?: string;
		province?: string;
	};

	let modalOpen = $state(false);
	let selectedPartner = $state<Partner>({} as Partner);

	let modalRemove = $state(false);

	let selectedIds = $state<number[]>([]);

	const toggleAll = () => {
		const allIds = partners.data.map((partner: Partner) => partner.id);
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

	let position: { lat?: number; lng?: number; error?: string } = {};
	let location = $state<LocationData>({});

	const getLocation = async () => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				async (pos) => {
					position.lat = pos.coords.latitude;
					position.lng = pos.coords.longitude;

					const response = await fetch(
						`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.lat}&lon=${position.lng}`
					);

					const data = await response.json();
					// console.log('Lokasi Mitra Masjid:', data);
					location = data;
				},
				(err) => {
					position.error = err.message;
				},
				{ enableHighAccuracy: true }
			);
		} else {
			position.error = 'Geolocation tidak didukung di browser ini.';
		}
	};
</script>

<main class="space-y-5 px-4 pt-6">
	<section class="flex items-center justify-between">
		<h1 class="text-2xl font-semibold">Mitra Masjid</h1>
		<button
			class="btn rounded-xl btn-sm btn-primary"
			onclick={() => {
				modalOpen = true;
				getLocation();
			}}
		>
			Tambah Mitra Masjid
		</button>
	</section>

	<section class="card">
		<div
			class="flex items-center justify-between border-b border-slate-200 p-4 dark:border-slate-800"
		>
			<p class="font-medium">Daftar Mitra Masjid</p>
			<div class="text-sm text-slate-500">
				Total: <span id="totalCount">{partners.pagination.total}</span>
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
								checked={selectedIds.length === partners.data.length}
								onchange={toggleAll}
							/>
						</th>
						<th class="p-3">Slug</th>
						<th class="p-3">Nama</th>
						<th class="p-3">Alamat</th>
						<th class="p-3 text-right">Aksi</th>
					</tr>
				</thead>
				<tbody id="tbody">
					{#each partners.data as partner}
						<tr class="border-t border-slate-100 dark:border-slate-800">
							<td class="p-3">
								<input
									type="checkbox"
									class="rowcheck size-4"
									checked={selectedIds.includes(partner.id)}
									onchange={() => toggleRow(partner.id)}
								/>
							</td>
							<td class="p-3">{partner.slug}</td>
							<td class="p-3">{partner.name}</td>
							<td class="p-3">{partner.address}</td>
							<td class="p-3 text-right">
								<div class="flex justify-end gap-2">
									<button
										class="btn btn-circle btn-sm"
										onclick={() => {
											modalOpen = true;
											selectedPartner = partner;
										}}
									>
										<SquarePen size={16} />
									</button>
									<button
										class="btn btn-circle btn-sm btn-error"
										onclick={() => {
											modalRemove = true;
											selectedPartner = partner;
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
				Menampilkan {partners.pagination.page} - {partners.pagination.page *
					partners.pagination.limit} dari {partners.pagination.total}
			</div>

			<div class="flex items-center gap-2">
				{#if partners.pagination.total > partners.pagination.limit}
					<button
						class={cn(
							'rounded-lg px-3 py-1.5 text-sm text-white',
							partners.pagination.page === 1
								? 'cursor-not-allowed bg-slate-400'
								: 'cursor-pointer bg-brand-600 hover:bg-brand-700'
						)}
						disabled={partners.pagination.page === 1}
						onclick={() => goto(`/admin/references/partners?page=${partners.pagination.page - 1}`)}
					>
						Sebelumnya
					</button>
					<button
						class={cn(
							'rounded-lg px-3 py-1.5 text-sm text-white',
							partners.pagination.page === partners.pagination.totalPages
								? 'cursor-not-allowed bg-slate-400'
								: 'cursor-pointer bg-brand-600 hover:bg-brand-700'
						)}
						disabled={partners.pagination.page === partners.pagination.totalPages}
						onclick={() => goto(`/admin/references/partners?page=${partners.pagination.page + 1}`)}
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
		title={selectedPartner?.id ? 'Perbarui Peran' : 'Buat Peran'}
		onClose={() => {
			modalOpen = false;
			selectedPartner = {} as Partner;
		}}
		action={selectedPartner?.id ? '?/updatePartner' : '?/createPartner'}
	>
		<input type="hidden" name="id" value={selectedPartner?.id} />
		<div>
			<label for="slug">Slug</label>
			<input
				id="slug"
				name="slug"
				type="text"
				placeholder="Masukkan slug unik peran"
				bind:value={selectedPartner.slug}
				class="my-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
			/>
		</div>
		<div>
			<label for="name">Nama</label>
			<input
				id="name"
				name="name"
				type="text"
				placeholder="Masukkan nama peran"
				bind:value={selectedPartner.name}
				class="my-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
			/>
		</div>
		<div class={cn(selectedPartner.id ? '' : 'hidden')}>
			<label for="city">Kota</label>
			<input
				id="city"
				name="city"
				type="text"
				placeholder="Masukkan nama kota"
				value={selectedPartner.id ? selectedPartner.city : (location.address?.town ?? '')}
				oninput={(e) => {
					if (!location.address) location.address = {};
					selectedPartner.city = e.currentTarget.value;
				}}
				class="my-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
			/>
		</div>
		<div class={cn(selectedPartner.id ? '' : 'hidden')}>
			<label for="province">Provinsi</label>
			<input
				id="province"
				name="province"
				type="text"
				placeholder="Masukkan nama provinsi"
				value={selectedPartner.id ? selectedPartner.province : (location.address?.state ?? '')}
				oninput={(e) => {
					if (!location.address) location.address = {};
					selectedPartner.province = e.currentTarget.value;
				}}
				class="my-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
			/>
		</div>
		<div class={cn(selectedPartner.id ? '' : 'hidden')}>
			<label for="address">Alamat</label>
			<textarea
				id="address"
				name="address"
				placeholder="Masukkan alamat peran"
				value={selectedPartner.id ? selectedPartner.address : (location.display_name ?? '')}
				oninput={(e) => {
					if (!location.address) location.address = {};
					selectedPartner.address = e.currentTarget.value;
				}}
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
			selectedPartner = {} as Partner;
		}}
		item={selectedPartner?.name}
		data={selectedPartner}
		action="?/deletePartner"
	/>
{/if}

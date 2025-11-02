<script>
	import { X } from 'lucide-svelte';
	import { writable } from 'svelte/store';

	let modal = writable(false);

	function openModal() {
		modal.set(true);
	}
	function closeModal() {
		modal.set(false);
	}
</script>

<main class="mx-auto max-w-[90vw] space-y-6 p-4 lg:p-6">
	<!-- KPI Cards -->
	<section class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
		<div
			class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
		>
			<p class="text-sm text-slate-500">Total Donasi (bulan ini)</p>
			<p class="mt-2 text-2xl font-semibold">Rp 128.540.000</p>
			<p class="text-xs text-slate-500">+8% vs bulan lalu</p>
		</div>
		<div
			class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
		>
			<p class="text-sm text-slate-500">Transaksi Sukses</p>
			<p class="mt-2 text-2xl font-semibold">1.284</p>
			<p class="text-xs text-slate-500">Rasio sukses 96,1%</p>
		</div>
		<div
			class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
		>
			<p class="text-sm text-slate-500">Dana Disalurkan</p>
			<p class="mt-2 text-2xl font-semibold">Rp 89.210.000</p>
			<p class="text-xs text-slate-500">72 keluarga • 5 program</p>
		</div>
		<div
			class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
		>
			<p class="text-sm text-slate-500">Rata-rata Tiket</p>
			<p class="mt-2 text-2xl font-semibold">Rp 100.100</p>
			<p class="text-xs text-slate-500">Median Rp 50.000</p>
		</div>
	</section>

	<!-- Filter bar -->
	<section
		class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
	>
		<div class="grid grid-cols-1 gap-3 md:grid-cols-5">
			<div class="col-span-2 md:col-span-1">
				<label class="text-xs text-slate-500">Kata kunci</label>
				<div class="relative">
					<input
						id="q"
						type="search"
						placeholder="Nama donatur / ref / catatan"
						class="w-full rounded-xl border border-slate-200 bg-white px-10 py-2 text-sm focus:ring-2 focus:ring-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:focus:ring-brand-700"
					/>
					<svg
						class="absolute top-1/2 left-3 size-5 -translate-y-1/2 text-slate-400"
						viewBox="0 0 24 24"
						fill="none"
					>
						<circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
						<path d="M20 20l-3-3" stroke="currentColor" stroke-width="2" />
					</svg>
				</div>
			</div>
			<div class="col-span-2 md:col-span-1">
				<label class="text-xs text-slate-500">Jenis</label>
				<select
					id="jenis"
					class="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
				>
					<option value="">Semua</option>
					<option>Zakat</option>
					<option>Infak</option>
					<option>Wakaf</option>
					<option>Donasi Lain</option>
				</select>
			</div>
			<div class="col-span-2 md:col-span-1">
				<label class="text-xs text-slate-500">Status</label>
				<select
					id="status"
					class="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
				>
					<option value="">Semua</option>
					<option>Sukses</option>
					<option>Menunggu</option>
					<option>Gagal</option>
					<option>Refund</option>
				</select>
			</div>
			<div class="col-span-2">
				<label class="text-xs text-slate-500">Rentang tanggal</label>
				<div class="flex gap-2">
					<input
						id="from"
						type="date"
						class="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
					/>
					<input
						id="to"
						type="date"
						class="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
					/>
				</div>
			</div>
		</div>
		<div class="mt-3 flex flex-wrap items-center gap-2">
			<button class="rounded-xl bg-brand-600 px-4 py-2 text-white hover:bg-brand-700"
				>Terapkan</button
			>
			<button id="btn-reset" class="rounded-xl bg-slate-100 px-4 py-2 dark:bg-slate-800"
				>Reset</button
			>
			<div class="ml-auto flex flex-wrap gap-2 sm:flex-nowrap">
				<button class="rounded-xl bg-gold-500 px-4 py-2 text-white hover:bg-gold-600"
					>Export CSV</button
				>
				<button class="rounded-xl bg-slate-100 px-4 py-2 dark:bg-slate-800">Export PDF</button>
			</div>
		</div>
	</section>

	<!-- Tren mini chart + metode pembayaran -->
	<section class="grid grid-cols-1 gap-4 lg:grid-cols-3">
		<div
			class="rounded-2xl border border-slate-200 bg-white p-4 lg:col-span-2 dark:border-slate-800 dark:bg-slate-900"
		>
			<div class="flex items-center justify-between">
				<p class="font-medium">Tren Donasi 12 Bulan</p>
				<div class="flex items-center gap-2 text-sm">
					<button class="rounded-lg bg-slate-100 px-3 py-1 dark:bg-slate-800">12B</button>
					<button class="rounded-lg px-3 py-1 hover:bg-slate-100 dark:hover:bg-slate-800"
						>30H</button
					>
				</div>
			</div>
			<!-- Simple bar chart skeleton -->
			<div class="mt-4 grid h-44 grid-cols-12 items-end gap-2">
				<div class="h-12 rounded bg-brand-200"></div>
				<div class="h-16 rounded bg-brand-300"></div>
				<div class="h-24 rounded bg-brand-400"></div>
				<div class="h-20 rounded bg-brand-300"></div>
				<div class="h-28 rounded bg-brand-500"></div>
				<div class="h-32 rounded bg-brand-600"></div>
				<div class="h-24 rounded bg-brand-400"></div>
				<div class="h-36 rounded bg-brand-700"></div>
				<div class="h-28 rounded bg-brand-500"></div>
				<div class="h-20 rounded bg-brand-300"></div>
				<div class="h-24 rounded bg-brand-400"></div>
				<div class="h-40 rounded bg-brand-800"></div>
			</div>
			<div class="mt-3 grid grid-cols-12 gap-2 text-[10px] text-slate-500">
				<span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>Mei</span><span
					>Jun</span
				><span>Jul</span><span>Agu</span><span>Sep</span><span>Okt</span><span>Nov</span><span
					>Des</span
				>
			</div>
		</div>

		<div
			class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
		>
			<p class="mb-4 font-medium">Metode Pembayaran</p>
			<div class="space-y-3 text-sm">
				{#each [{ label: 'QRIS Syariah', color: 'bg-brand-600', percent: 58 }, { label: 'Transfer Bank', color: 'bg-gold-500', percent: 29 }, { label: 'Tunai', color: 'bg-slate-500', percent: 13 }] as { label, color, percent }}
					<div>
						<div class="mb-1 flex items-center justify-between">
							<div class="flex items-center gap-2">
								<span class={`size-2 rounded-full ${color}`}></span>{label}
							</div>
							<div>{percent}%</div>
						</div>
						<div class="h-2 rounded-full bg-slate-100 dark:bg-slate-800">
							<div class={`h-2 rounded-full ${color}`} style={`width: ${percent}%`}></div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Table transaksi -->
	<section
		class="overflow-x-auto rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
	>
		<div
			class="flex flex-col items-start justify-between gap-2 border-b border-slate-200 p-4 sm:flex-row sm:items-center dark:border-slate-800"
		>
			<p class="text-sm font-medium">Daftar Transaksi</p>
			<div class="flex flex-wrap gap-2">
				<button on:click={openModal} class="rounded-xl bg-brand-600 px-3 py-2 text-sm text-white"
					>Catat Manual</button
				>
				<label class="cursor-pointer rounded-xl bg-slate-100 px-3 py-2 text-sm dark:bg-slate-800">
					Import CSV
					<input type="file" accept=".csv" class="hidden" />
				</label>
			</div>
		</div>
		<table class="w-full min-w-[600px] text-sm">
			<thead class="bg-slate-50 text-left dark:bg-slate-950/40">
				<tr class="text-slate-500">
					<th class="p-3 font-medium">Ref</th>
					<th class="p-3 font-medium">Donatur</th>
					<th class="p-3 font-medium">Jenis</th>
					<th class="p-3 font-medium">Metode</th>
					<th class="p-3 font-medium">Nominal</th>
					<th class="p-3 font-medium">Waktu</th>
					<th class="p-3 font-medium">Status</th>
					<th class="p-3 font-medium">Aksi</th>
				</tr>
			</thead>
			<tbody>
				<!-- Contoh baris transaksi -->
				<tr class="border-t border-slate-100 dark:border-slate-800">
					<td class="p-3">INV-2025-1101-001</td>
					<td class="p-3">Ahmad Fauzi</td>
					<td class="p-3">Zakat</td>
					<td class="p-3">QRIS</td>
					<td class="p-3 font-semibold">Rp 2.500.000</td>
					<td class="p-3">01 Nov 2025 • 09:12</td>
					<td class="p-3">
						<span class="rounded-lg bg-brand-100 px-2 py-1 text-xs text-brand-900">Sukses</span>
					</td>
					<td class="p-3">
						<button class="rounded-lg bg-slate-100 px-2 py-1 text-xs dark:bg-slate-800"
							>Detail</button
						>
					</td>
				</tr>
				<!-- Tambah baris lain sesuai kebutuhan -->
			</tbody>
		</table>
		<div class="flex flex-col items-center justify-between gap-2 p-3 text-sm sm:flex-row">
			<p class="text-slate-500">Menampilkan 1–3 dari 1.284</p>
			<div class="flex gap-2">
				<button class="rounded-lg bg-slate-100 px-3 py-1.5 dark:bg-slate-800">Sebelumnya</button>
				<button class="rounded-lg bg-brand-600 px-3 py-1.5 text-white">Berikutnya</button>
			</div>
		</div>
	</section>
</main>

{#if $modal}
	<div class="fixed inset-0 z-30">
		<div class="absolute inset-0 bg-black/40"></div>
		<div class="absolute inset-0 grid place-items-center p-4">
			<form
				class="w-full max-w-xl rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
				on:submit|preventDefault={() => closeModal()}
			>
				<div
					class="flex items-center justify-between border-b border-slate-200 p-4 dark:border-slate-800"
				>
					<p class="font-medium">Catat Donasi Manual</p>
					<button
						type="button"
						class="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
						on:click={closeModal}
					>
						<X size={24} />
					</button>
				</div>
				<div class="grid gap-3 p-4 md:grid-cols-2">
					<div>
						<label class="text-xs text-slate-500">Nama Donatur</label>
						<input
							class="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
							placeholder="Opsional, boleh kosong"
						/>
					</div>
					<div>
						<label class="text-xs text-slate-500">Jenis</label>
						<select
							class="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
						>
							<option>Zakat</option>
							<option>Infak</option>
							<option>Wakaf</option>
							<option>Donasi Lain</option>
						</select>
					</div>
					<div class="md:col-span-2">
						<label class="text-xs text-slate-500">Nominal</label>
						<input
							type="number"
							class="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
							placeholder="Contoh: 2500000"
						/>
					</div>
					<div>
						<label class="text-xs text-slate-500">Metode</label>
						<select
							class="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
						>
							<option>QRIS Syariah</option>
							<option>Transfer Bank</option>
							<option>Tunai</option>
						</select>
					</div>
					<div>
						<label class="text-xs text-slate-500">Waktu</label>
						<input
							type="datetime-local"
							class="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
						/>
					</div>
					<div class="md:col-span-2">
						<label class="text-xs text-slate-500">Catatan</label>
						<textarea
							class="min-h-20 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
							placeholder="Tujuan donasi"
						></textarea>
					</div>
				</div>
				<div
					class="flex items-center justify-end gap-2 border-t border-slate-200 p-4 dark:border-slate-800"
				>
					<button
						type="button"
						class="rounded-xl bg-slate-100 px-4 py-2 dark:bg-slate-800"
						on:click={closeModal}>Batal</button
					>
					<button type="submit" class="rounded-xl bg-brand-600 px-4 py-2 text-white">Simpan</button>
				</div>
			</form>
		</div>
	</div>
{/if}

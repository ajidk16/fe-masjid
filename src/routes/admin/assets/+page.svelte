<script lang="ts">
	import { X } from 'lucide-svelte';

	let modalAset = $state(false);
	let modalMaintenance = $state(false);
</script>

<main class="space-y-6 p-4 lg:p-6">
	<!-- KPIs -->
	<section class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
		<div
			class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
		>
			<p class="text-sm text-slate-500">Total Aset</p>
			<p class="mt-2 text-2xl font-semibold">184 item</p>
			<p class="text-xs text-slate-500">7 kategori</p>
		</div>
		<div
			class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
		>
			<p class="text-sm text-slate-500">Nilai Buku</p>
			<p class="mt-2 text-2xl font-semibold">Rp 2.145.000.000</p>
			<p class="text-xs text-slate-500">Akumulasi depresiasi terhitung</p>
		</div>
		<div
			class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
		>
			<div class="flex items-center justify-between">
				<p class="text-sm text-slate-500">Siap Disewa</p>
				<span class="rounded-lg bg-brand-50 px-2 py-0.5 text-xs text-brand-900">+4</span>
			</div>
			<p class="mt-2 text-2xl font-semibold">23 unit</p>
			<p class="text-xs text-slate-500">Aula, tenda, kursi</p>
		</div>
		<div
			class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
		>
			<div class="flex items-center justify-between">
				<p class="text-sm text-slate-500">Maintenance Bulan Ini</p>
				<span class="rounded-lg bg-gold-100 px-2 py-0.5 text-xs text-gold-900">5 due</span>
			</div>
			<p class="mt-2 text-2xl font-semibold">12 pekerjaan</p>
			<p class="text-xs text-slate-500">Filter AC, sound system, genset</p>
		</div>
	</section>

	<!-- Tabs + Actions -->
	<section
		class="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
	>
		<div
			class="flex flex-col gap-3 border-b border-slate-200 p-4 lg:flex-row lg:items-center lg:justify-between dark:border-slate-800"
		>
			<div class="flex flex-wrap gap-2">
				<button class="rounded-xl bg-brand-600 px-3 py-1.5 text-sm text-white" data-tab="all"
					>Semua</button
				>
				<button
					class="rounded-xl bg-slate-100 px-3 py-1.5 text-sm dark:bg-slate-800"
					data-tab="bangunan">Bangunan</button
				>
				<button
					class="rounded-xl bg-slate-100 px-3 py-1.5 text-sm dark:bg-slate-800"
					data-tab="peralatan">Peralatan</button
				>
				<button
					class="rounded-xl bg-slate-100 px-3 py-1.5 text-sm dark:bg-slate-800"
					data-tab="kendaraan">Kendaraan</button
				>
				<button
					class="rounded-xl bg-slate-100 px-3 py-1.5 text-sm dark:bg-slate-800"
					data-tab="elektronik">Elektronik</button
				>
				<button
					class="rounded-xl bg-slate-100 px-3 py-1.5 text-sm dark:bg-slate-800"
					data-tab="inventaris">Inventaris</button
				>
			</div>
			<div class="flex flex-wrap gap-2">
				<button
					onclick={() => (modalAset = true)}
					class="rounded-xl bg-brand-600 px-3 py-2 text-sm text-white">Tambah Aset</button
				>

				<button class="rounded-xl bg-slate-100 px-3 py-2 text-sm dark:bg-slate-800"
					>Export CSV</button
				>
			</div>
		</div>

		<div class="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-4">
			<div class="relative">
				<label class="text-xs text-slate-500">Lokasi</label>
				<select
					class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
				>
					<option>Semua lokasi</option>
					<option>Aula Utama</option>
					<option>Gudang Barat</option>
					<option>Rooftop</option>
				</select>
			</div>
			<div>
				<label class="text-xs text-slate-500">Status</label>
				<select
					class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
				>
					<option>Semua</option>
					<option>Aktif</option>
					<option>Disewa</option>
					<option>Perbaikan</option>
					<option>Nonaktif</option>
				</select>
			</div>
			<div>
				<label class="text-xs text-slate-500">Kondisi</label>
				<select
					class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
				>
					<option>Semua</option>
					<option>Baik</option>
					<option>Cukup</option>
					<option>Rusak</option>
				</select>
			</div>
			<div>
				<label class="text-xs text-slate-500">Jatuh Tempo Maintenance</label>
				<input
					type="month"
					class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
				/>
			</div>
		</div>

		<!-- Table -->
		<div class="overflow-x-auto">
			<table class="w-full min-w-[800px] table-auto border-collapse text-sm">
				<thead class="bg-slate-50 text-left dark:bg-slate-950/40">
					<tr class="text-slate-500">
						<th class="p-3 font-medium">Kode</th>
						<th class="p-3 font-medium">Nama Aset</th>
						<th class="p-3 font-medium">Kategori</th>
						<th class="p-3 font-medium">Lokasi</th>
						<th class="p-3 font-medium">Kondisi</th>
						<th class="p-3 font-medium">Status</th>
						<th class="p-3 font-medium">Terakhir Servis</th>
						<th class="p-3 font-medium">Jadwal Berikutnya</th>
						<th class="p-3 text-right font-medium">Nilai Buku</th>
						<th class="p-3 font-medium">Aksi</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-t border-slate-100 dark:border-slate-800">
						<td class="p-3 font-medium">AST-001</td>
						<td class="p-3">Sound System Yamaha MG12</td>
						<td class="p-3">Elektronik</td>
						<td class="p-3">Aula Utama</td>
						<td class="p-3">
							<span class="rounded-lg bg-brand-100 px-2 py-1 text-xs text-brand-900">Baik</span>
						</td>
						<td class="p-3">Aktif</td>
						<td class="p-3">10 Okt 2025</td>
						<td class="p-3 text-gold-700 dark:text-gold-400">10 Des 2025</td>
						<td class="p-3 text-right font-semibold">Rp 12.500.000</td>
						<td class="p-3">
							<div class="flex gap-2">
								<button class="rounded-lg bg-slate-100 px-2 py-1 dark:bg-slate-800">Detail</button>
								<button class="rounded-lg bg-brand-600 px-2 py-1 text-white">Edit</button>
							</div>
						</td>
					</tr>
					<!-- Data tambahan -->
				</tbody>
			</table>
		</div>
		<div class="p-4">
			<div class="mt-3 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
				<p class="text-slate-500">Menampilkan 1–4 dari 184</p>
				<div class="flex items-center gap-2">
					<button class="flex-1 rounded-lg bg-slate-100 px-3 py-1.5 sm:flex-none dark:bg-slate-800"
						>Sebelumnya</button
					>
					<button class="flex-1 rounded-lg bg-brand-600 px-3 py-1.5 text-white sm:flex-none"
						>Berikutnya</button
					>
				</div>
			</div>
		</div>
	</section>

	<!-- Kanban Maintenance + Ringkasan -->
	<section class="grid gap-4 lg:grid-cols-3">
		<!-- Kanban -->
		<div
			class="rounded-2xl border border-slate-200 bg-white p-4 lg:col-span-2 dark:border-slate-800 dark:bg-slate-900"
		>
			<div class="flex items-center justify-between">
				<p class="font-medium">Pekerjaan Maintenance</p>
				<button
					class="rounded-lg bg-slate-100 px-3 py-1.5 text-sm dark:bg-slate-800"
					onclick={() => (modalMaintenance = true)}
				>
					Tambah</button
				>
			</div>
			<div class="mt-4 grid gap-3 sm:grid-cols-3">
				<!-- Column 1 -->
				<div class="rounded-xl bg-slate-50 p-3 dark:bg-slate-950/40">
					<p class="text-sm font-medium">Antrian</p>
					<div class="mt-2 space-y-2">
						<div
							class="rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900"
						>
							<p class="text-sm font-medium">Servis AC 2 PK</p>
							<p class="text-xs text-slate-500">AST-074 • Est. Rp 300k</p>
						</div>
						<div
							class="rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900"
						>
							<p class="text-sm font-medium">Cek kabel sound</p>
							<p class="text-xs text-slate-500">AST-001 • Est. Rp 50k</p>
						</div>
					</div>
				</div>
				<!-- Column 2 -->
				<div class="rounded-xl bg-slate-50 p-3 dark:bg-slate-950/40">
					<p class="text-sm font-medium">Proses</p>
					<div class="mt-2 space-y-2">
						<div
							class="rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900"
						>
							<p class="text-sm font-medium">Ganti oli genset</p>
							<p class="text-xs text-slate-500">AST-200 • Est. Rp 400k</p>
						</div>
					</div>
				</div>
				<!-- Column 3 -->
				<div class="rounded-xl bg-slate-50 p-3 dark:bg-slate-950/40">
					<p class="text-sm font-medium">Selesai</p>
					<div class="mt-2 space-y-2">
						<div
							class="rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900"
						>
							<p class="text-sm font-medium">Pengecatan kursi</p>
							<p class="text-xs text-slate-500">AST-129 • Real Rp 120k</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Ringkasan -->
		<div
			class="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
		>
			<p class="font-medium">Ringkasan Biaya Maintenance</p>
			<div class="space-y-2 text-sm">
				<div class="flex justify-between">
					<span>Bulanan berjalan</span><span class="font-semibold">Rp 1.240.000</span>
				</div>
				<div class="flex justify-between">
					<span>Rata-rata 6 bulan</span><span class="font-semibold">Rp 1.050.000</span>
				</div>
				<div class="flex justify-between">
					<span>Anggaran tersedia</span><span
						class="font-semibold text-brand-700 dark:text-brand-400">Rp 5.500.000</span
					>
				</div>
			</div>
			<div class="pt-3">
				<p class="text-sm text-slate-500">Utilisasi Aset</p>
				<div class="mt-2 space-y-2">
					<div>
						<div class="flex justify-between text-xs"><span>Aula</span><span>78%</span></div>
						<div class="h-2 rounded-full bg-slate-100 dark:bg-slate-800">
							<div class="h-2 rounded-full bg-brand-600" style="width:78%"></div>
						</div>
					</div>
					<div>
						<div class="flex justify-between text-xs"><span>Kursi</span><span>52%</span></div>
						<div class="h-2 rounded-full bg-slate-100 dark:bg-slate-800">
							<div class="h-2 rounded-full bg-gold-500" style="width:52%"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="pt-2">
				<p class="text-sm text-slate-500">Target Depresiasi</p>
				<input
					type="number"
					class="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
					value="25000000"
				/>
				<button class="mt-2 w-full rounded-xl bg-slate-100 px-3 py-2 text-sm dark:bg-slate-800"
					>Simpan Target</button
				>
			</div>
		</div>
	</section>
</main>

{#if modalAset}
	<div class="fixed inset-0 z-30">
		<div class="absolute inset-0 bg-black/40"></div>
		<div
			class="relative mx-auto my-auto flex h-screen w-[92%] max-w-2xl items-center justify-center"
		>
			<div
				class="w-full rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
			>
				<div class="flex items-center justify-between">
					<h2 id="modal-asset-title" class="font-semibold">Tambah Aset</h2>
					<button
						class="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
						onclick={() => (modalAset = false)}
					>
						<X size={24} />
					</button>
				</div>
				<div class="mt-3 grid gap-3 sm:grid-cols-2">
					<div>
						<label class="text-xs text-slate-500">Nama Aset</label>
						<input
							class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
							placeholder="Contoh: AC 2 PK"
						/>
					</div>
					<div>
						<label class="text-xs text-slate-500">Kategori</label>
						<select
							class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
						>
							<option>Peralatan</option><option>Elektronik</option><option>Bangunan</option><option
								>Kendaraan</option
							><option>Inventaris</option>
						</select>
					</div>
					<div>
						<label class="text-xs text-slate-500">Lokasi</label>
						<input
							class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
							placeholder="Aula Utama"
						/>
					</div>
					<div>
						<label class="text-xs text-slate-500">Nilai Perolehan</label>
						<input
							type="number"
							class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
							placeholder="0"
						/>
					</div>
					<div>
						<label class="text-xs text-slate-500">Kondisi</label>
						<select
							class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
						>
							<option>Baik</option><option>Cukup</option><option>Rusak</option>
						</select>
					</div>
					<div>
						<label class="text-xs text-slate-500">Status</label>
						<select
							class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
						>
							<option>Aktif</option><option>Disewa</option><option>Perbaikan</option><option
								>Nonaktif</option
							>
						</select>
					</div>
				</div>
				<div class="mt-4 flex justify-end gap-2">
					<button
						class="rounded-xl bg-slate-100 px-3 py-2 dark:bg-slate-800"
						data-close="#modal-asset">Batal</button
					>
					<button class="rounded-xl bg-brand-600 px-3 py-2 text-white">Simpan</button>
				</div>
			</div>
		</div>
	</div>
{/if}

{#if modalMaintenance}
	<div class="fixed inset-0 z-30" role="dialog">
		<div class="absolute inset-0 bg-black/40"></div>
		<div
			class="relative mx-auto my-auto flex h-screen w-[92%] max-w-2xl items-center justify-center"
		>
			<div
				class="w-full rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
			>
				<div class="flex items-center justify-between">
					<h2 id="modal-maint-title" class="font-semibold">Jadwalkan Maintenance</h2>
					<button
						class="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
						onclick={() => (modalMaintenance = false)}
					>
						<X size={24} />
					</button>
				</div>
				<div class="mt-3 grid gap-3 sm:grid-cols-2">
					<div>
						<label class="text-xs text-slate-500">Pilih Aset</label>
						<select
							class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
						>
							<option>AST-074 • AC 2 PK</option>
							<option>AST-200 • Genset 20 kVA</option>
							<option>AST-001 • Sound System</option>
						</select>
					</div>
					<div>
						<label class="text-xs text-slate-500">Tanggal</label>
						<input
							type="date"
							class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
						/>
					</div>
					<div class="sm:col-span-2">
						<label class="text-xs text-slate-500">Catatan</label>
						<textarea
							rows="3"
							class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
							placeholder="Detail pekerjaan, vendor, estimasi biaya"
						></textarea>
					</div>
				</div>
				<div class="mt-4 flex justify-end gap-2">
					<button
						class="rounded-xl bg-slate-100 px-3 py-2 dark:bg-slate-800"
						onclick={() => (modalMaintenance = false)}
					>
						Batal
					</button>
					<button class="rounded-xl bg-gold-500 px-3 py-2 text-white">Jadwalkan</button>
				</div>
			</div>
		</div>
	</div>
{/if}

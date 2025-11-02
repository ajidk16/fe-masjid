<script lang="ts">
	import { X } from 'lucide-svelte';

	let modal = $state(false);
</script>

<main class="mx-auto w-full max-w-7xl space-y-6 p-4 lg:p-6">
	<!-- Filters -->
	<section
		class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
	>
		<div class="grid items-end gap-3 md:grid-cols-5">
			<div class="md:col-span-2">
				<label class="text-xs text-slate-500">Rentang Tanggal</label>
				<div class="mt-1 grid grid-cols-2 gap-2">
					<input
						type="date"
						class="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300 dark:border-slate-800 dark:bg-slate-950 dark:focus:ring-brand-700"
					/>
					<input
						type="date"
						class="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300 dark:border-slate-800 dark:bg-slate-950 dark:focus:ring-brand-700"
					/>
				</div>
			</div>
			<div>
				<label class="text-xs text-slate-500">Jenis Laporan</label>
				<select
					class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300 dark:border-slate-800 dark:bg-slate-950 dark:focus:ring-brand-700"
				>
					<option>Keuangan: Pemasukan/Pengeluaran</option>
					<option>Donasi: Zakat/Infak/Wakaf</option>
					<option>Penyaluran Sosial</option>
					<option>Inventaris Aset</option>
					<option>Marketplace Halal</option>
					<option>Rekap Event & Kehadiran</option>
				</select>
			</div>
			<div>
				<label class="text-xs text-slate-500">Format</label>
				<select
					class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300 dark:border-slate-800 dark:bg-slate-950 dark:focus:ring-brand-700"
				>
					<option>PDF</option>
					<option>CSV</option>
					<option>XLSX</option>
				</select>
			</div>
			<div class="flex gap-2">
				<button
					onclick={() => (modal = true)}
					class="w-full rounded-xl bg-brand-600 px-4 py-2 text-sm text-white hover:bg-brand-700"
					>Generate</button
				>
				<button id="btn-reset" class="rounded-xl bg-slate-100 px-4 py-2 text-sm dark:bg-slate-800"
					>Reset</button
				>
			</div>
		</div>
		<div class="mt-3 flex flex-wrap gap-2 text-xs">
			<button class="rounded-lg bg-slate-100 px-3 py-1 dark:bg-slate-800">Bulan ini</button>
			<button class="rounded-lg px-3 py-1 hover:bg-slate-100 dark:hover:bg-slate-800"
				>Minggu ini</button
			>
			<button class="rounded-lg px-3 py-1 hover:bg-slate-100 dark:hover:bg-slate-800"
				>Hari ini</button
			>
			<button class="rounded-lg px-3 py-1 hover:bg-slate-100 dark:hover:bg-slate-800"
				>Tahun berjalan</button
			>
		</div>
	</section>

	<!-- KPIs -->
	<section class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
		<div
			class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
		>
			<p class="text-sm text-slate-500">Total Pemasukan</p>
			<p class="mt-2 text-2xl font-semibold">Rp 328.450.000</p>
			<p class="text-xs text-slate-500">1–30 Nov 2025</p>
		</div>
		<div
			class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
		>
			<p class="text-sm text-slate-500">Total Pengeluaran</p>
			<p class="mt-2 text-2xl font-semibold">Rp 196.120.000</p>
			<p class="text-xs text-slate-500">Operasional & sosial</p>
		</div>
		<div
			class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
		>
			<p class="text-sm text-slate-500">Donasi Tercatat</p>
			<p class="mt-2 text-2xl font-semibold">2.184 transaksi</p>
			<p class="text-xs text-slate-500">Rata-rata Rp 85.000</p>
		</div>
		<div
			class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
		>
			<p class="text-sm text-slate-500">Penyaluran Sosial</p>
			<p class="mt-2 text-2xl font-semibold">104 keluarga</p>
			<p class="text-xs text-slate-500">Zakat, beasiswa, sembako</p>
		</div>
	</section>

	<!-- Table + Preview -->
	<section class="grid gap-4 lg:grid-cols-3">
		<!-- Table -->
		<div
			class="flex flex-col rounded-2xl border border-slate-200 bg-white lg:col-span-2 dark:border-slate-800 dark:bg-slate-900"
		>
			<div
				class="flex items-center justify-between border-b border-slate-200 p-4 dark:border-slate-800"
			>
				<p class="font-medium">Rekap Transaksi</p>
				<div class="flex gap-2">
					<input
						id="q"
						type="text"
						placeholder="Cari nama/jenis…"
						class="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300 dark:border-slate-800 dark:bg-slate-950 dark:focus:ring-brand-700"
					/>
					<button class="rounded-xl bg-slate-100 px-3 py-2 text-sm dark:bg-slate-800">Filter</button
					>
				</div>
			</div>
			<div class="thin-scrollbar overflow-x-auto">
				<table class="w-full text-sm">
					<thead class="bg-slate-50 text-left dark:bg-slate-950/40">
						<tr class="text-slate-500">
							<th class="p-3 font-medium">Tanggal</th>
							<th class="p-3 font-medium">Donatur</th>
							<th class="p-3 font-medium">Jenis</th>
							<th class="p-3 font-medium">Nominal</th>
							<th class="p-3 font-medium">Status</th>
							<th class="p-3 font-medium"></th>
						</tr>
					</thead>
					<tbody id="tbody">
						<tr class="border-t border-slate-100 dark:border-slate-800">
							<td class="p-3">01 Nov 2025</td>
							<td class="p-3">Ahmad Fauzi</td>
							<td class="p-3">Zakat</td>
							<td class="p-3 font-semibold">Rp 2.500.000</td>
							<td class="p-3"
								><span class="rounded-lg bg-brand-100 px-2 py-1 text-xs text-brand-900">Sukses</span
								></td
							>
							<td class="p-3">
								<button
									class="rounded-lg bg-slate-100 px-3 py-1.5 text-xs dark:bg-slate-800"
									data-row="1">Detail</button
								>
							</td>
						</tr>
						<tr class="border-t border-slate-100 dark:border-slate-800">
							<td class="p-3">01 Nov 2025</td>
							<td class="p-3">Hamba Allah</td>
							<td class="p-3">Infak</td>
							<td class="p-3 font-semibold">Rp 300.000</td>
							<td class="p-3"
								><span class="rounded-lg bg-brand-100 px-2 py-1 text-xs text-brand-900">Sukses</span
								></td
							>
							<td class="p-3">
								<button
									class="rounded-lg bg-slate-100 px-3 py-1.5 text-xs dark:bg-slate-800"
									data-row="2">Detail</button
								>
							</td>
						</tr>
						<tr class="border-t border-slate-100 dark:border-slate-800">
							<td class="p-3">31 Okt 2025</td>
							<td class="p-3">Nur Aisyah</td>
							<td class="p-3">Wakaf</td>
							<td class="p-3 font-semibold">Rp 10.000.000</td>
							<td class="p-3"
								><span class="rounded-lg bg-gold-100 px-2 py-1 text-xs text-gold-900">Menunggu</span
								></td
							>
							<td class="p-3">
								<button
									class="rounded-lg bg-slate-100 px-3 py-1.5 text-xs dark:bg-slate-800"
									data-row="3">Detail</button
								>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="flex items-center justify-between p-3 text-sm">
				<p class="text-slate-500">Menampilkan 1–3 dari 2.184</p>
				<div class="flex items-center gap-2">
					<button class="rounded-lg bg-slate-100 px-3 py-1.5 dark:bg-slate-800">Sebelumnya</button>
					<button class="rounded-lg bg-brand-600 px-3 py-1.5 text-white">Berikutnya</button>
				</div>
			</div>
		</div>

		<!-- Preview + Actions -->
		<div
			class="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
		>
			<div class="flex items-center justify-between">
				<p class="font-medium">Preview Laporan</p>
				<div class="flex gap-2">
					<button
						class="rounded-xl bg-slate-100 px-3 py-2 text-sm dark:bg-slate-800"
						onclick={() => window.print()}>Print</button
					>
					<button class="rounded-xl bg-gold-500 px-3 py-2 text-sm text-white" id="btn-export"
						>Ekspor PDF</button
					>
				</div>
			</div>
			<div class="mt-3 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
				<!-- Mock PDF sheet -->
				<div
					id="sheet"
					class="thin-scrollbar aspect-[1/1.414] w-full overflow-auto bg-white p-6 text-slate-800 dark:bg-slate-950 dark:text-slate-100"
				>
					<header
						class="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-800"
					>
						<div>
							<p class="font-semibold">Laporan Donasi Bulanan</p>
							<p class="text-xs text-slate-500">Masjid Al-Muttaqin • Nov 2025</p>
						</div>
						<div class="text-right">
							<p class="text-xs text-slate-500">Dibuat: 2 Nov 2025</p>
							<p class="text-xs text-slate-500">Oleh: Takmir</p>
						</div>
					</header>
					<section class="mt-4 grid grid-cols-3 gap-3 text-xs">
						<div class="rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
							<p class="text-slate-500">Total Pemasukan</p>
							<p class="text-lg font-semibold">Rp 328.450.000</p>
						</div>
						<div class="rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
							<p class="text-slate-500">Total Pengeluaran</p>
							<p class="text-lg font-semibold">Rp 196.120.000</p>
						</div>
						<div class="rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
							<p class="text-slate-500">Saldo</p>
							<p class="text-lg font-semibold">Rp 132.330.000</p>
						</div>
					</section>
					<section class="mt-4">
						<p class="text-sm font-medium">Rincian Transaksi</p>
						<table class="mt-2 w-full text-[11px]">
							<thead class="bg-slate-50 text-left dark:bg-slate-900">
								<tr class="text-slate-500">
									<th class="p-2 font-medium">Tanggal</th>
									<th class="p-2 font-medium">Keterangan</th>
									<th class="p-2 font-medium">Jenis</th>
									<th class="p-2 text-right font-medium">Nominal</th>
								</tr>
							</thead>
							<tbody>
								<tr class="border-t border-slate-200 dark:border-slate-800">
									<td class="p-2">01/11</td>
									<td class="p-2">Infaq Jumat</td>
									<td class="p-2">Pemasukan</td>
									<td class="p-2 text-right">12.460.000</td>
								</tr>
								<tr class="border-t border-slate-200 dark:border-slate-800">
									<td class="p-2">01/11</td>
									<td class="p-2">Pembelian karpet</td>
									<td class="p-2">Pengeluaran</td>
									<td class="p-2 text-right">4.200.000</td>
								</tr>
								<tr class="border-t border-slate-200 dark:border-slate-800">
									<td class="p-2">31/10</td>
									<td class="p-2">Wakaf pembangunan</td>
									<td class="p-2">Pemasukan</td>
									<td class="p-2 text-right">10.000.000</td>
								</tr>
							</tbody>
						</table>
					</section>
					<section class="mt-4 grid grid-cols-2 gap-3 text-xs">
						<div class="rounded-lg border border-slate-200 p-3 dark:border-slate-800">
							<p class="font-medium">Catatan Takmir</p>
							<p class="mt-1 text-slate-600 dark:text-slate-300">
								Peningkatan donasi terlihat pada dua pekan terakhir. Fokus penggalangan dana
								renovasi wudhu.
							</p>
						</div>
						<div class="rounded-lg border border-slate-200 p-3 dark:border-slate-800">
							<p class="font-medium">Tanda Tangan</p>
							<div
								class="mt-6 h-12 border-t border-dashed border-slate-300 dark:border-slate-700"
							></div>
							<p class="mt-1 text-[10px] text-slate-500">Takmir Masjid</p>
						</div>
					</section>
					<footer
						class="mt-6 border-t border-slate-200 pt-3 text-[10px] text-slate-500 dark:border-slate-800"
					>
						Dokumen ini dihasilkan otomatis. Transparan. Halal.
					</footer>
				</div>
			</div>

			<div class="mt-4 grid grid-cols-2 gap-2">
				<button
					id="btn-save-template"
					class="rounded-xl bg-slate-100 px-3 py-2 text-sm dark:bg-slate-800"
					>Simpan Template</button
				>
				<button id="btn-schedule" class="rounded-xl bg-brand-600 px-3 py-2 text-sm text-white"
					>Jadwalkan Mingguan</button
				>
			</div>
		</div>
	</section>

	<!-- Saved reports -->
	<section
		class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
	>
		<div class="flex items-center justify-between">
			<p class="font-medium">Riwayat Laporan</p>
			<div class="flex gap-2">
				<button class="rounded-xl bg-slate-100 px-3 py-2 text-sm dark:bg-slate-800" id="btn-upload"
					>Upload PDF</button
				>
				<button class="rounded-xl bg-gold-500 px-3 py-2 text-sm text-white"
					>Ekspor Semua (ZIP)</button
				>
			</div>
		</div>
		<div class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
			<!-- card -->
			<article class="rounded-xl border border-slate-200 p-3 dark:border-slate-800">
				<p class="text-sm font-medium">Laporan Keuangan Okt 2025</p>
				<p class="text-xs text-slate-500">Dibuat 01 Nov 2025 • 09:10</p>
				<div class="mt-2 flex gap-2">
					<button class="rounded-lg bg-slate-100 px-3 py-1.5 text-xs dark:bg-slate-800"
						>Preview</button
					>
					<button class="rounded-lg bg-brand-600 px-3 py-1.5 text-xs text-white">Unduh PDF</button>
				</div>
			</article>
			<article class="rounded-xl border border-slate-200 p-3 dark:border-slate-800">
				<p class="text-sm font-medium">Rekap Penyaluran Q3 2025</p>
				<p class="text-xs text-slate-500">Dibuat 01 Okt 2025 • 10:22</p>
				<div class="mt-2 flex gap-2">
					<button class="rounded-lg bg-slate-100 px-3 py-1.5 text-xs dark:bg-slate-800"
						>Preview</button
					>
					<button class="rounded-lg bg-brand-600 px-3 py-1.5 text-xs text-white">Unduh PDF</button>
				</div>
			</article>
			<article class="rounded-xl border border-slate-200 p-3 dark:border-slate-800">
				<p class="text-sm font-medium">Inventaris Semester I 2025</p>
				<p class="text-xs text-slate-500">Dibuat 02 Jul 2025 • 08:05</p>
				<div class="mt-2 flex gap-2">
					<button class="rounded-lg bg-slate-100 px-3 py-1.5 text-xs dark:bg-slate-800"
						>Preview</button
					>
					<button class="rounded-lg bg-brand-600 px-3 py-1.5 text-xs text-white">Unduh PDF</button>
				</div>
			</article>
		</div>
	</section>
</main>

{#if modal}
	<div id="modal" class="fixed inset-0 z-20" aria-hidden="true">
		<div class="absolute inset-0 bg-black/30"></div>
		<div class="absolute inset-0 grid place-items-center p-4">
			<div
				class="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
			>
				<div class="flex items-center justify-between">
					<p class="font-medium">Generate Laporan</p>
					<button
						onclick={() => (modal = false)}
						class="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
					>
						<X size={24} />
					</button>
				</div>
				<div class="mt-3 grid gap-3">
					<div>
						<label class="text-xs text-slate-500">Nama Laporan</label>
						<input
							type="text"
							value="Laporan Donasi Bulanan"
							class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300 dark:border-slate-800 dark:bg-slate-950 dark:focus:ring-brand-700"
						/>
					</div>
					<div class="grid grid-cols-2 gap-2">
						<div>
							<label class="text-xs text-slate-500">Halaman</label>
							<select
								class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300 dark:border-slate-800 dark:bg-slate-950 dark:focus:ring-brand-700"
							>
								<option>A4</option><option>Letter</option><option>Legal</option>
							</select>
						</div>
						<div>
							<label class="text-xs text-slate-500">Orientasi</label>
							<select
								class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300 dark:border-slate-800 dark:bg-slate-950 dark:focus:ring-brand-700"
							>
								<option>Portrait</option><option>Landscape</option>
							</select>
						</div>
					</div>
					<div class="flex items-center gap-2">
						<input
							id="include-sign"
							type="checkbox"
							class="size-4 rounded border-slate-300 dark:border-slate-700"
						/>
						<label for="include-sign" class="text-sm">Sertakan kolom tanda tangan</label>
					</div>
				</div>
				<div class="mt-4 flex justify-end gap-2">
					<button
						onclick={() => (modal = false)}
						class="rounded-xl bg-slate-100 px-4 py-2 text-sm dark:bg-slate-800">Batal</button
					>
					<button id="btn-make" class="rounded-xl bg-brand-600 px-4 py-2 text-sm text-white"
						>Buat</button
					>
				</div>
			</div>
		</div>
	</div>
{/if}

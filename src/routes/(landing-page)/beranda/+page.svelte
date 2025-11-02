<script lang="ts">
	const prayers = [
		{ name: 'Subuh', time: '04:21' },
		{ name: 'Dzuhur', time: '11:40' },
		{ name: 'Ashar', time: '15:03' },
		{ name: 'Maghrib', time: '17:53' },
		{ name: 'Isya', time: '19:05' }
	];
</script>

<main>
	<!-- Hero -->
	<section class="bg-linear-to-b from-brand-900 to-brand-800 text-white">
		<div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
			<div class="grid items-stretch gap-6 lg:grid-cols-3">
				<!-- left: welcome + quick actions -->
				<div class="lg:col-span-2">
					<div class="card rounded-2xl bg-white/5 p-6 shadow-sm ring-1 ring-white/10">
						<div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
							<div>
								<p class="text-sm text-brand-100">Selamat datang</p>
								<h2 class="text-2xl font-semibold md:text-3xl">Al-Ikhlas Digital Hub</h2>
								<p class="mt-1 text-brand-100" id="today"></p>
							</div>
							<div class="flex items-center gap-3">
								<div class="rounded-xl bg-white/10 px-3 py-2 text-sm">
									<span id="weather">Cuaca: Berawan • 29°C</span>
								</div>
								<div class="rounded-xl bg-white/10 px-3 py-2 text-sm">
									<span id="hijri">Hijriyah: —</span>
								</div>
							</div>
						</div>
						<div class="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
							<a href="#donasi" class="card rounded-xl bg-white/10 p-4 hover:bg-white/15">
								<div class="flex items-center gap-3">
									<div class="grid h-9 w-9 place-content-center rounded-lg bg-white/20">
										<!-- donate icon -->
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="h-5 w-5"
											><path
												d="M12 21a9 9 0 119-9 9 9 0 01-9 9zm1-13h3l-4-4-4 4h3v6H8l4 4 4-4h-3z"
											/></svg
										>
									</div>
									<div>
										<p class="text-sm opacity-80">Aksi cepat</p>
										<p class="font-medium">Donasi</p>
									</div>
								</div>
							</a>
							<a href="#kajian" class="card rounded-xl bg-white/10 p-4 hover:bg-white/15">
								<div class="flex items-center gap-3">
									<div class="grid h-9 w-9 place-content-center rounded-lg bg-white/20">
										<!-- book icon -->
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="h-5 w-5"
											><path d="M6 2h9a3 3 0 013 3v14a3 3 0 00-3-3H6v5H4V4a2 2 0 012-2z" /></svg
										>
									</div>
									<div>
										<p class="text-sm opacity-80">Aksi cepat</p>
										<p class="font-medium">Kajian</p>
									</div>
								</div>
							</a>
							<a href="#market" class="card rounded-xl bg-white/10 p-4 hover:bg-white/15">
								<div class="flex items-center gap-3">
									<div class="grid h-9 w-9 place-content-center rounded-lg bg-white/20">
										<!-- cart icon -->
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="h-5 w-5"
											><path
												d="M7 18a2 2 0 11-2 2 2 2 0 012-2zm10 0a2 2 0 11-2 2 2 2 0 012-2zM7.2 6l.8 2h10.5l-1.6 6H8.6L6.5 5H3V3h3.6a1 1 0 01.96.72L8 5z"
											/></svg
										>
									</div>
									<div>
										<p class="text-sm opacity-80">Aksi cepat</p>
										<p class="font-medium">Marketplace</p>
									</div>
								</div>
							</a>
							<a href="#relawan" class="card rounded-xl bg-white/10 p-4 hover:bg-white/15">
								<div class="flex items-center gap-3">
									<div class="grid h-9 w-9 place-content-center rounded-lg bg-white/20">
										<!-- users icon -->
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											class="h-5 w-5"
											><path
												d="M16 11a4 4 0 10-4-4 4 4 0 004 4zM6 13a3 3 0 013-3h2a5 5 0 00-5 5v2H2v-2a3 3 0 013-3zm10 2a5 5 0 00-5 5h10a5 5 0 00-5-5z"
											/></svg
										>
									</div>
									<div>
										<p class="text-sm opacity-80">Aksi cepat</p>
										<p class="font-medium">Relawan</p>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>

				<!-- right: jadwal salat -->
				<div id="jadwal" class="card rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
					<div class="flex items-center justify-between">
						<h3 class="font-semibold text-slate-800">Jadwal Salat Hari Ini</h3>
						<span id="next-label" class="rounded-full bg-brand-100 px-2 py-1 text-xs text-brand-800"
							>Waktu terdekat</span
						>
					</div>
					<ul id="prayer-list" class="mt-4 space-y-2">
						{#each prayers as prayer, index}
							<li
								class="flex items-center justify-between rounded-xl border px-4 py-3 {index === 0
									? 'border-brand-300 bg-brand-50'
									: 'border-slate-200 bg-white'}"
							>
								<div class="flex items-center gap-3">
									<span
										class="h-2.5 w-2.5 rounded-full {index === 0 ? 'bg-brand-600' : 'bg-slate-300'}"
									></span>
									<span class="font-medium {index === 0 ? 'text-brand-800' : 'text-slate-800'}"
										>{prayer.name}</span
									>
								</div>
								<time class="tabular-nums {index === 0 ? 'text-brand-700' : 'text-slate-600'}"
									>{prayer.time} WIB</time
								>
							</li>
						{/each}
					</ul>
					<div class="mt-4 text-xs text-slate-500">
						*Waktu contoh statis. Integrasikan API jadwal salat untuk data nyata.
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Events & News -->
	<section class="py-10">
		<div class="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
			<!-- events -->
			<div class="lg:col-span-2">
				<div id="kajian" class="card rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
					<div class="flex items-center justify-between">
						<h3 class="font-semibold text-slate-800">Agenda & Kajian Pekan Ini</h3>
						<a href="/beranda" class="text-sm text-brand-700 hover:underline">Lihat semua</a>
					</div>
					<div class="mt-4 grid gap-4 sm:grid-cols-2">
						<!-- item 1 -->
						<article class="rounded-xl border border-slate-200 p-4">
							<div class="flex items-start justify-between gap-3">
								<div>
									<h4 class="font-medium text-slate-800">Kajian Fiqih Muamalah</h4>
									<p class="text-sm text-slate-500">Ahad, 03 Nov 2025 • 09:00 WIB • Aula Masjid</p>
								</div>
								<span class="rounded-full bg-accent-100 px-2 py-1 text-xs text-accent-800"
									>Offline</span
								>
							</div>
							<p class="mt-2 text-sm text-slate-600">
								Membedah transaksi halal: akad, bagi hasil, dan praktik UMKM.
							</p>
							<div class="mt-3 flex gap-2">
								<button class="rounded-lg bg-brand-700 px-3 py-2 text-sm text-white">Daftar</button>
								<button class="rounded-lg border border-slate-200 px-3 py-2 text-sm">Detail</button>
							</div>
						</article>
						<!-- item 2 -->
						<article class="rounded-xl border border-slate-200 p-4">
							<div class="flex items-start justify-between gap-3">
								<div>
									<h4 class="font-medium text-slate-800">Tahsin Al-Qur'an</h4>
									<p class="text-sm text-slate-500">
										Selasa, 04 Nov 2025 • 19:30 WIB • Ruang Kelas 1
									</p>
								</div>
								<span class="rounded-full bg-brand-100 px-2 py-1 text-xs text-brand-800"
									>Gratis</span
								>
							</div>
							<p class="mt-2 text-sm text-slate-600">
								Kelas pemula. Target: makhraj huruf dan mad wajib.
							</p>
							<div class="mt-3 flex gap-2">
								<button class="rounded-lg bg-brand-700 px-3 py-2 text-sm text-white">Ikut</button>
								<button class="rounded-lg border border-slate-200 px-3 py-2 text-sm">Detail</button>
							</div>
						</article>
					</div>
				</div>
			</div>
			<!-- news -->
			<aside class="card rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
				<h3 class="font-semibold text-slate-800">Info Terkini</h3>
				<ul class="mt-4 space-y-3 text-sm">
					<li class="flex gap-3">
						<span class="mt-1 h-2.5 w-2.5 rounded-full bg-brand-600"></span>
						Penggalangan dana renovasi wudhu: target 75% tercapai.
					</li>
					<li class="flex gap-3">
						<span class="mt-1 h-2.5 w-2.5 rounded-full bg-accent-500"></span>
						Relawan Jumat Berkah membutuhkan 12 orang lagi.
					</li>
					<li class="flex gap-3">
						<span class="mt-1 h-2.5 w-2.5 rounded-full bg-slate-400"></span>
						Update aplikasi: dukungan QRIS & riwayat donasi pribadi.
					</li>
				</ul>
			</aside>
		</div>
	</section>

	<!-- Donasi CTA -->
	<section id="donasi" class="py-10">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div
				class="card rounded-2xl bg-linear-to-r from-brand-800 to-brand-600 p-6 text-white md:p-10"
			>
				<div class="grid items-center gap-6 md:grid-cols-3">
					<div class="md:col-span-2">
						<h3 class="text-2xl font-semibold">Donasi Transparan, Manfaat Tepat Sasaran</h3>
						<p class="mt-2 text-brand-100">
							Pilih niat: Zakat, Infak, atau Wakaf. Dapatkan bukti donasi dan laporan berkala.
						</p>
						<div class="mt-4 flex flex-wrap gap-3">
							<button class="rounded-xl bg-white px-4 py-2 text-sm text-brand-800"
								>Donasi Sekarang</button
							>
							<button
								class="rounded-xl bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/30"
								>Lihat Laporan</button
							>
						</div>
					</div>
					<div class="rounded-xl bg-white/10 p-4">
						<p class="text-sm text-brand-100">Target Renovasi Wudhu</p>
						<div class="mt-2 h-3 w-full rounded-full bg-white/20">
							<div class="h-3 rounded-full bg-accent-300" style="width:72%"></div>
						</div>
						<div class="mt-2 flex justify-between text-sm">
							<span>Terkumpul</span>
							<span>72%</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Marketplace teaser -->
	<section id="market" class="py-10">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between">
				<h3 class="font-semibold text-slate-800">Produk Halal Jamaah</h3>
				<!-- svelte-ignore a11y_invalid_attribute -->
				<a href="#" class="text-sm text-brand-700 hover:underline">Lihat semua</a>
			</div>
			<div class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<!-- product card -->
				<div class="card rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
					<div class="aspect-4/3 rounded-xl bg-slate-100"></div>
					<div class="mt-3">
						<h4 class="font-medium">Kurma Ajwa 500g</h4>
						<div class="mt-1 flex items-center justify-between text-sm">
							<span class="font-semibold text-brand-700">Rp85.000</span>
							<span class="rounded-full bg-brand-100 px-2 py-1 text-xs text-brand-800">Halal</span>
						</div>
					</div>
				</div>
				<div class="card rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
					<div class="aspect-4/3 rounded-xl bg-slate-100"></div>
					<div class="mt-3">
						<h4 class="font-medium">Sajadah Travel</h4>
						<div class="mt-1 flex items-center justify-between text-sm">
							<span class="font-semibold text-brand-700">Rp45.000</span>
							<span class="rounded-full bg-brand-100 px-2 py-1 text-xs text-brand-800">Halal</span>
						</div>
					</div>
				</div>
				<div class="card rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
					<div class="aspect-4/3 rounded-xl bg-slate-100"></div>
					<div class="mt-3">
						<h4 class="font-medium">Mukena Katun</h4>
						<div class="mt-1 flex items-center justify-between text-sm">
							<span class="font-semibold text-brand-700">Rp120.000</span>
							<span class="rounded-full bg-brand-100 px-2 py-1 text-xs text-brand-800">Halal</span>
						</div>
					</div>
				</div>
				<div class="card rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
					<div class="aspect-4/3 rounded-xl bg-slate-100"></div>
					<div class="mt-3">
						<h4 class="font-medium">Pecel Lele Jumat</h4>
						<div class="mt-1 flex items-center justify-between text-sm">
							<span class="font-semibold text-brand-700">Rp20.000</span>
							<span class="rounded-full bg-brand-100 px-2 py-1 text-xs text-brand-800">Halal</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Footer -->
</main>

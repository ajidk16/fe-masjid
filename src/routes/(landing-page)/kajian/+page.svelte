<main class="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
	<!-- Hero / Search -->
	<section class="grid gap-6 lg:grid-cols-3">
		<div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft lg:col-span-2">
			<h2 class="text-xl font-semibold tracking-tight">Cari Kajian & Kelas</h2>
			<p class="mt-1 text-sm text-slate-500">
				Temukan pengajian, kelas tahsin, fiqih, hingga coding pemuda.
			</p>
			<form class="mt-4 grid gap-3 sm:grid-cols-5">
				<div class="sm:col-span-2">
					<label class="text-xs text-slate-600">Kata kunci</label>
					<input
						type="search"
						placeholder="contoh: fiqih zakat"
						class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 focus:ring-2 focus:ring-brand-400 focus:outline-none"
					/>
				</div>
				<div>
					<label class="text-xs text-slate-600">Kategori</label>
					<select
						class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 focus:ring-2 focus:ring-brand-400 focus:outline-none"
					>
						<option>Semua</option>
						<option>Tahsin</option>
						<option>Fiqih</option>
						<option>Akhlak</option>
						<option>Bisnis Syariah</option>
						<option>Keterampilan Digital</option>
					</select>
				</div>
				<div>
					<label class="text-xs text-slate-600">Format</label>
					<select
						class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 focus:ring-2 focus:ring-brand-400 focus:outline-none"
					>
						<option>Semua</option>
						<option>Offline</option>
						<option>Online</option>
						<option>Rekaman</option>
					</select>
				</div>
				<div class="flex items-end sm:col-span-1">
					<button
						type="button"
						class="w-full rounded-xl bg-brand-900 px-4 py-2 text-white shadow-soft hover:bg-brand-800"
						>Cari</button
					>
				</div>
			</form>
		</div>

		<div
			class="rounded-2xl border border-gold-200 bg-gradient-to-br from-gold-100 via-white to-gold-50 p-6 shadow-soft"
		>
			<p class="text-xs text-gold-700">Jadwal Terdekat</p>
			<h3 class="mt-1 text-lg font-semibold">Kajian Akbar: Adab Menuntut Ilmu</h3>
			<p class="mt-1 text-sm text-slate-600">
				Ahad, 3 Rabi'ul Akhir 1447 H • 19.30 WIB • Aula Utama
			</p>
			<div class="mt-4 flex flex-wrap gap-2">
				<span
					class="inline-flex items-center gap-1 rounded-full border border-gold-200 bg-white/70 px-3 py-1 text-xs text-gold-800"
				>
					<svg
						class="h-3.5 w-3.5"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M12 6v6l4 2"
						/></svg
					>
					90 menit
				</span>
				<span
					class="inline-flex items-center gap-1 rounded-full border border-gold-200 bg-white/70 px-3 py-1 text-xs text-gold-800"
					>Offline</span
				>
				<span
					class="inline-flex items-center gap-1 rounded-full border border-gold-200 bg-white/70 px-3 py-1 text-xs text-gold-800"
					>Gratis</span
				>
			</div>
			<button class="mt-4 w-full rounded-xl bg-gold-600 px-4 py-2 text-white hover:bg-gold-700"
				>Daftar Sekarang</button
			>
		</div>
	</section>

	<!-- Tabs: Offline / Online / Rekaman -->
	<section>
		<div class="flex items-center gap-2">
			<button
				data-tab="offline"
				class="tab-btn active rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm hover:bg-slate-100"
				>Offline</button
			>
			<button
				data-tab="online"
				class="tab-btn rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm hover:bg-slate-100"
				>Online</button
			>
			<button
				data-tab="rekaman"
				class="tab-btn rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm hover:bg-slate-100"
				>Rekaman</button
			>
		</div>

		<div class="mt-4 grid gap-6 lg:grid-cols-3">
			<!-- List Jadwal (kolom 1-2) -->
			<div class="space-y-4 lg:col-span-2" id="list">
				<!-- Item -->
				<article class="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
					<div class="grid w-16 shrink-0 place-items-center rounded-xl bg-brand-900 text-white">
						<div class="text-center leading-tight">
							<div class="text-xl font-bold">01</div>
							<div class="text-[10px] tracking-wider uppercase">Nov</div>
						</div>
					</div>
					<div class="flex-1">
						<div class="flex items-start gap-2">
							<h4 class="font-semibold">Fiqih Zakat: Fondasi & Praktik</h4>
							<span
								class="ms-auto inline-flex items-center gap-1 rounded-full bg-brand-100 px-2.5 py-1 text-xs text-brand-800"
								>Offline</span
							>
						</div>
						<p class="mt-1 text-sm text-slate-600">Ust. Ahmad Nawawi • 19.30–21.00 • Aula 1</p>
						<div class="mt-3 flex flex-wrap gap-2">
							<span class="badge">Intermediate</span>
							<span class="badge">Fiqih</span>
							<span class="badge">Gratis</span>
						</div>
						<div class="mt-4 flex items-center gap-2">
							<button class="btn-secondary">Daftar</button>
							<button class="btn-ghost">Simpan</button>
						</div>
					</div>
				</article>

				<article class="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
					<div class="grid w-16 shrink-0 place-items-center rounded-xl bg-brand-900 text-white">
						<div class="text-center leading-tight">
							<div class="text-xl font-bold">04</div>
							<div class="text-[10px] tracking-wider uppercase">Nov</div>
						</div>
					</div>
					<div class="flex-1">
						<div class="flex items-start gap-2">
							<h4 class="font-semibold">Tahsin Al-Qur'an: Makharijul Huruf</h4>
							<span
								class="ms-auto inline-flex items-center gap-1 rounded-full bg-brand-100 px-2.5 py-1 text-xs text-brand-800"
								>Offline</span
							>
						</div>
						<p class="mt-1 text-sm text-slate-600">Ustzh. Aisyah • 08.00–09.30 • Kelas Tahsin</p>
						<div class="mt-3 flex flex-wrap gap-2">
							<span class="badge">Pemula</span>
							<span class="badge">Tahsin</span>
							<span class="badge">Khusus Akhwat</span>
						</div>
						<div class="mt-4 flex items-center gap-2">
							<button class="btn-secondary">Daftar</button>
							<button class="btn-ghost">Simpan</button>
						</div>
					</div>
				</article>

				<article
					data-kind="online"
					class="flex hidden gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft"
				>
					<div class="grid w-16 shrink-0 place-items-center rounded-xl bg-brand-900 text-white">
						<div class="text-center leading-tight">
							<div class="text-xl font-bold">06</div>
							<div class="text-[10px] tracking-wider uppercase">Nov</div>
						</div>
					</div>
					<div class="flex-1">
						<div class="flex items-start gap-2">
							<h4 class="font-semibold">Akhlak: Adab Majelis Ilmu</h4>
							<span
								class="ms-auto inline-flex items-center gap-1 rounded-full bg-brand-100 px-2.5 py-1 text-xs text-brand-800"
								>Online</span
							>
						</div>
						<p class="mt-1 text-sm text-slate-600">Ust. Hasan • 20.00–21.00 • Zoom</p>
						<div class="mt-3 flex flex-wrap gap-2">
							<span class="badge">Semua</span>
							<span class="badge">Akhlak</span>
							<span class="badge">Link Zoom</span>
						</div>
						<div class="mt-4 flex items-center gap-2">
							<button class="btn-secondary">Daftar</button>
							<button class="btn-ghost">Simpan</button>
						</div>
					</div>
				</article>

				<article
					data-kind="rekaman"
					class="flex hidden gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft"
				>
					<div class="grid w-16 shrink-0 place-items-center rounded-xl bg-brand-900 text-white">
						<div class="text-center leading-tight">
							<div class="text-xl font-bold">17</div>
							<div class="text-[10px] tracking-wider uppercase">Okt</div>
						</div>
					</div>
					<div class="flex-1">
						<div class="flex items-start gap-2">
							<h4 class="font-semibold">Bisnis Syariah: Akad Jual Beli</h4>
							<span
								class="ms-auto inline-flex items-center gap-1 rounded-full bg-brand-100 px-2.5 py-1 text-xs text-brand-800"
								>Rekaman</span
							>
						</div>
						<p class="mt-1 text-sm text-slate-600">Ust. Farhan • 90 menit • Rekaman Video</p>
						<div class="mt-3 flex flex-wrap gap-2">
							<span class="badge">Menengah</span>
							<span class="badge">Muamalah</span>
							<span class="badge">Video</span>
						</div>
						<div class="mt-4 flex items-center gap-2">
							<button class="btn-secondary">Tonton</button>
							<button class="btn-ghost">Simpan</button>
						</div>
					</div>
				</article>
			</div>

			<!-- Player / Preview (kolom 3) -->
			<aside class="space-y-4">
				<div
					id="player"
					class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft"
				>
					<div class="grid aspect-video place-items-center bg-slate-200 text-slate-500">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-10 w-10"
							viewBox="0 0 24 24"
							fill="currentColor"><path d="M8 5v14l11-7z" /></svg
						>
					</div>
					<div class="p-4">
						<h5 class="font-semibold">Player Kajian</h5>
						<p class="text-sm text-slate-600">
							Pilih rekaman untuk diputar atau gabung sesi online saat live.
						</p>
						<div class="mt-3 flex gap-2">
							<button class="btn-secondary">Putar Contoh</button>
							<button class="btn-ghost">Bagikan</button>
						</div>
					</div>
				</div>

				<div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
					<h6 class="font-semibold">Kalender Kegiatan</h6>
					<div class="mt-3 grid grid-cols-7 gap-1 text-center text-xs">
						{#each Array.from({ length: 30 }, (_, i) => i + 1) as day}
							<div class="relative rounded-xl border border-slate-200 bg-white p-2">
								{day}
								{#if [1, 4, 6, 17].includes(day)}
									<span
										class="absolute -bottom-1.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-brand-600"
									></span>
								{/if}
							</div>
						{/each}
					</div>
					<p class="mt-3 text-xs text-slate-500">Titik hijau menandakan ada kegiatan.</p>
				</div>
			</aside>
		</div>
	</section>

	<!-- Kursus Online -->
	<section class="space-y-4">
		<div class="flex items-center justify-between">
			<h3 class="text-lg font-semibold tracking-tight">Kursus Online</h3>
			<a href="#" class="text-sm text-brand-900 hover:underline">Lihat semua</a>
		</div>
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			<!-- Card Kursus -->
			<div class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
				<div class="h-32 bg-gradient-to-br from-brand-100 to-white"></div>
				<div class="p-4">
					<h4 class="font-semibold">Tahsin Dasar: Tajwid Pemula</h4>
					<p class="text-sm text-slate-600">8 modul • Sertifikat</p>
					<div class="mt-3">
						<div class="h-2 w-full rounded-full bg-slate-200">
							<div class="h-2 w-[45%] rounded-full bg-brand-600"></div>
						</div>
						<p class="mt-1 text-xs text-slate-500">45% progres</p>
					</div>
					<div class="mt-3 flex gap-2">
						<button class="btn-secondary">Lanjutkan</button>
						<button class="btn-ghost">Detail</button>
					</div>
				</div>
			</div>

			<div class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
				<div class="h-32 bg-gradient-to-br from-gold-100 to-white"></div>
				<div class="p-4">
					<h4 class="font-semibold">Fiqih Muamalah Praktis</h4>
					<p class="text-sm text-slate-600">6 modul • Sertifikat</p>
					<div class="mt-3">
						<div class="h-2 w-full rounded-full bg-slate-200">
							<div class="h-2 w-[10%] rounded-full bg-brand-600"></div>
						</div>
						<p class="mt-1 text-xs text-slate-500">10% progres</p>
					</div>
					<div class="mt-3 flex gap-2">
						<button class="btn-secondary">Mulai</button>
						<button class="btn-ghost">Detail</button>
					</div>
				</div>
			</div>

			<div class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
				<div class="h-32 bg-gradient-to-br from-brand-50 to-white"></div>
				<div class="p-4">
					<h4 class="font-semibold">Dasar Akhlak Sehari-hari</h4>
					<p class="text-sm text-slate-600">5 modul • Gratis</p>
					<div class="mt-3">
						<div class="h-2 w-full rounded-full bg-slate-200">
							<div class="h-2 w-[80%] rounded-full bg-brand-600"></div>
						</div>
						<p class="mt-1 text-xs text-slate-500">80% progres</p>
					</div>
					<div class="mt-3 flex gap-2">
						<button class="btn-secondary">Lanjutkan</button>
						<button class="btn-ghost">Detail</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<main class="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
	<!-- HERO -->
	<section class="grid gap-6 lg:grid-cols-3">
		<div
			class="card rounded-2xl bg-linear-to-br from-brand-800 to-brand-700 p-6 text-white shadow-sm ring-1 ring-slate-200 lg:col-span-2"
		>
			<div class="flex items-center justify-between gap-4">
				<div>
					<h1 class="text-2xl font-semibold">Bantu Operasional & Program Sosial</h1>
					<p class="mt-1 text-sm text-white/80">Transparan, cepat, sesuai prinsip syariah.</p>
				</div>
				<div class="hidden rounded-xl bg-white/10 px-4 py-2 text-sm sm:block">
					Amanah • Tanpa riba • Audit berkala
				</div>
			</div>
			<dl class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
				<div class="rounded-xl bg-white/10 p-4">
					<dt class="text-xs text-white/70">Terkumpul Bulan Ini</dt>
					<dd class="text-lg font-semibold">Rp 128.450.000</dd>
				</div>
				<div class="rounded-xl bg-white/10 p-4">
					<dt class="text-xs text-white/70">Target Bulan Ini</dt>
					<dd class="text-lg font-semibold">Rp 200.000.000</dd>
				</div>
				<div class="rounded-xl bg-white/10 p-4">
					<dt class="text-xs text-white/70">Donatur Aktif</dt>
					<dd class="text-lg font-semibold">1.284</dd>
				</div>
				<div class="rounded-xl bg-white/10 p-4">
					<dt class="text-xs text-white/70">Program Berjalan</dt>
					<dd class="text-lg font-semibold">12</dd>
				</div>
			</dl>
			<!-- Progress -->
			<div class="mt-6">
				<div class="mb-2 flex items-center justify-between text-xs text-white/80">
					<span>Progres Target</span><span>64%</span>
				</div>
				<div class="h-2 w-full overflow-hidden rounded-full bg-white/20">
					<div class="bg-gold-500 h-full rounded-full" style="width:64%"></div>
				</div>
			</div>
		</div>

		<!-- Quick actions -->
		<div class="grid gap-4">
			<section class="card rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
				<div class="flex items-center gap-3">
					<div class="grid h-10 w-10 place-items-center rounded-xl bg-brand-800/10 text-brand-800">
						<svg
							viewBox="0 0 24 24"
							class="h-5 w-5"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								d="M12 21C12 21 4 13.5 4 8.5C4 5.46 6.46 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.54 3 24 5.46 24 8.5C24 13.5 16 21 16 21H12Z"
							/>
						</svg>
					</div>
					<div>
						<p class="font-semibold">Donasi Sekarang</p>
						<p class="text-sm text-slate-500">Zakat • Infak • Wakaf</p>
					</div>
				</div>
			</section>
			<section class="card rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
				<div class="flex items-center gap-3">
					<div class="bg-gold/10 text-gold grid h-10 w-10 place-items-center rounded-xl">
						<svg
							viewBox="0 0 24 24"
							class="h-5 w-5"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<path d="M3 3h18v4H3zM3 11h18v10H3z" />
							<path d="M7 11v10M12 11v10M17 11v10" />
						</svg>
					</div>
					<div>
						<p class="font-semibold">Laporan Transparan</p>
						<p class="text-sm text-slate-500">PDF mingguan • Real-time</p>
					</div>
				</div>
			</section>
		</div>
	</section>

	<!-- FORM DONASI -->
	<section id="form-donasi" class="grid gap-6 lg:grid-cols-3">
		<form
			class="card space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 lg:col-span-2"
		>
			<div class="flex items-center justify-between">
				<h2 class="text-lg font-semibold">Form Donasi</h2>
				<span class="rounded bg-brand-800/10 px-2 py-1 text-xs text-brand-800">Sesuai Syariah</span>
			</div>

			<!-- Jenis donasi -->
			<fieldset class="space-y-2">
				<legend class="text-sm font-medium">Jenis Donasi</legend>
				<div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
					<label
						class="flex cursor-pointer items-center gap-2 rounded-xl border-none p-3 ring-1 ring-slate-200 has-checked:border-brand-800 has-checked:bg-brand-800/5"
					>
						<input type="radio" name="jenis" value="zakat" class="accent-brand-800" checked />
						<span class="text-sm">Zakat</span>
					</label>
					<label
						class="flex cursor-pointer items-center gap-2 rounded-xl border-none p-3 ring-1 ring-slate-200 has-checked:border-brand-800 has-checked:bg-brand-800/5"
					>
						<input type="radio" name="jenis" value="infak" class="accent-brand-800" />
						<span class="text-sm">Infak</span>
					</label>
					<label
						class="flex cursor-pointer items-center gap-2 rounded-xl border-none p-3 ring-1 ring-slate-200 has-checked:border-brand-800 has-checked:bg-brand-800/5"
					>
						<input type="radio" name="jenis" value="sedekah" class="accent-brand-800" />
						<span class="text-sm">Sedekah</span>
					</label>
					<label
						class="flex cursor-pointer items-center gap-2 rounded-xl border-none p-3 ring-1 ring-slate-200 has-checked:border-brand-800 has-checked:bg-brand-800/5"
					>
						<input type="radio" name="jenis" value="wakaf" class="accent-brand-800" />
						<span class="text-sm">Wakaf</span>
					</label>
				</div>
			</fieldset>

			<!-- Jumlah -->
			<div class="grid gap-4 sm:grid-cols-2">
				<label class="block">
					<span class="block text-sm font-medium">Nominal</span>
					<div class="relative mt-1">
						<span class="absolute top-1/2 left-3 -translate-y-1/2 text-sm text-slate-400">Rp</span>
						<input
							required
							type="number"
							min="1000"
							placeholder="100000"
							class="w-full rounded-xl border-none px-10 py-3 ring-1 ring-slate-200 outline-none focus:ring-2 focus:ring-brand-800/20"
						/>
					</div>
					<div class="mt-2 flex gap-2">
						<button
							type="button"
							class="rounded-full border-none px-3 py-1 text-xs ring-1 ring-slate-200 hover:bg-slate-50"
							>50K</button
						>
						<button
							type="button"
							class="rounded-full border-none px-3 py-1 text-xs ring-1 ring-slate-200 hover:bg-slate-50"
							>100K</button
						>
						<button
							type="button"
							class="rounded-full border-none px-3 py-1 text-xs ring-1 ring-slate-200 hover:bg-slate-50"
							>500K</button
						>
					</div>
				</label>

				<label class="block">
					<span class="block text-sm font-medium">Niat / Catatan</span>
					<input
						type="text"
						placeholder="Untuk beasiswa santri"
						class="mt-1 w-full rounded-xl border-none px-4 py-3 ring-1 ring-slate-200 outline-none focus:ring-2 focus:ring-brand-800/20"
					/>
				</label>
			</div>

			<!-- Metode Pembayaran -->
			<div class="space-y-3">
				<p class="text-sm font-medium">Metode Pembayaran</p>
				<div class="grid gap-3 sm:grid-cols-3">
					<label
						class="flex cursor-pointer items-center gap-3 rounded-xl border-none p-3 ring-1 ring-slate-200 has-checked:border-brand-800 has-checked:bg-brand-800/5"
					>
						<input type="radio" name="bayar" value="qris" class="accent-brand-800" checked />
						<span class="text-sm">QRIS Syariah</span>
					</label>
					<label
						class="flex cursor-pointer items-center gap-3 rounded-xl border-none p-3 ring-1 ring-slate-200 has-checked:border-brand-800 has-checked:bg-brand-800/5"
					>
						<input type="radio" name="bayar" value="bank" class="accent-brand-800" />
						<span class="text-sm">Transfer Bank</span>
					</label>
					<label
						class="flex cursor-pointer items-center gap-3 rounded-xl border-none p-3 ring-1 ring-slate-200 has-checked:border-brand-800 has-checked:bg-brand-800/5"
					>
						<input type="radio" name="bayar" value="wallet" class="accent-brand-800" />
						<span class="text-sm">Dompet Digital</span>
					</label>
				</div>
			</div>

			<!-- Data Donatur -->
			<div class="grid gap-4 sm:grid-cols-3">
				<label class="block">
					<span class="block text-sm font-medium">Nama</span>
					<input
						type="text"
						placeholder="Hamba Allah"
						class="mt-1 w-full rounded-xl border-none px-4 py-3 ring-1 ring-slate-200 outline-none focus:ring-2 focus:ring-brand-800/20"
					/>
				</label>
				<label class="block">
					<span class="block text-sm font-medium">Email</span>
					<input
						type="email"
						placeholder="nama@email.com"
						class="mt-1 w-full rounded-xl border-none px-4 py-3 ring-1 ring-slate-200 outline-none focus:ring-2 focus:ring-brand-800/20"
					/>
				</label>
				<label class="block">
					<span class="block text-sm font-medium">Anonim</span>
					<select
						class="mt-1 w-full rounded-xl border-none px-4 py-3 ring-1 ring-slate-200 outline-none focus:ring-2 focus:ring-brand-800/20"
					>
						<option>Tidak</option>
						<option>Ya</option>
					</select>
				</label>
			</div>

			<div class="flex items-center justify-between gap-4">
				<div class="flex items-center gap-2 text-xs text-slate-500">
					<input id="tos" type="checkbox" class="accent-brand-800" checked />
					<label for="tos">Saya menyetujui ketentuan syariah dan kebijakan privasi</label>
				</div>
				<button
					type="submit"
					class="inline-flex items-center gap-2 rounded-xl bg-brand-800 px-5 py-3 text-white hover:bg-brand-700"
				>
					<svg
						viewBox="0 0 24 24"
						class="h-4 w-4"
						fill="none"
						stroke="currentColor"
						stroke-width="2"><path d="M12 5v14M5 12h14" /></svg
					>
					Donasi Sekarang
				</button>
			</div>

			<!-- Notif sukses -->
			<div
				id="notif"
				class="hidden rounded-xl border-none border-brand-800/30 bg-brand-800/5 p-4 text-sm ring-1 ring-slate-200"
			>
				Terima kasih. Instruksi pembayaran telah dikirim ke email Anda.
			</div>
		</form>

		<!-- Ringkasan & Program -->
		<aside class="card rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
			<h3 class="text-lg font-semibold">Program Terpilih</h3>
			<div class="space-y-4">
				<div class="rounded-xl border-none p-4 ring-1 ring-slate-200">
					<div class="flex items-start justify-between gap-3">
						<div>
							<p class="font-medium">Beasiswa Santri</p>
							<p class="mt-1 text-xs text-slate-500">Target Rp 80.000.000</p>
						</div>
						<span class="bg-gold-300/20 rounded px-2 py-1 text-[10px] text-brand-800">Prioritas</span>
					</div>
					<div class="mt-3 h-2 w-full overflow-hidden rounded bg-slate-100">
						<div class="bg-gold-500 h-full" style="width:72%"></div>
					</div>
					<p class="mt-2 text-xs text-slate-500">Terkumpul Rp 57.600.000 • 142 donatur</p>
				</div>

				<div class="rounded-xl border-none p-4 ring-1 ring-slate-200">
					<div class="flex items-start justify-between gap-3">
						<div>
							<p class="font-medium">Renovasi Wudhu</p>
							<p class="mt-1 text-xs text-slate-500">Target Rp 120.000.000</p>
						</div>
						<span class="rounded bg-brand-800/10 px-2 py-1 text-[10px] text-brand-800"
							>Sedang Berjalan</span
						>
					</div>
					<div class="mt-3 h-2 w-full overflow-hidden rounded bg-slate-100">
						<div class="h-full bg-brand-800" style="width:38%"></div>
					</div>
					<p class="mt-2 text-xs text-slate-500">Terkumpul Rp 45.600.000 • 320 donatur</p>
				</div>
			</div>
		</aside>
	</section>

	<!-- TRANSPARANSI -->
	<section id="transparansi" class="grid gap-6 lg:grid-cols-3">
		<!-- Grafik sederhana (SVG) -->
		<div class="card rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 lg:col-span-2">
			<div class="flex items-center justify-between">
				<h2 class="text-lg font-semibold">Transparansi Dana</h2>
				<a href="#" class="text-sm text-brand-800 hover:underline">Unduh Laporan PDF</a>
			</div>
			<div class="mt-6">
				<div class="flex items-center gap-4 text-xs">
					<span class="inline-flex items-center gap-2"
						><i class="inline-block h-2 w-2 rounded-full bg-brand-800"></i> Masuk</span
					>
					<span class="inline-flex items-center gap-2"
						><i class="bg-gold-500 inline-block h-2 w-2 rounded-full"></i> Keluar</span
					>
				</div>
				<div class="mt-4 rounded-xl border-none p-4 ring-1 ring-slate-200">
					<svg viewBox="0 0 600 200" class="h-48 w-full">
						<!-- grid -->
						<g stroke="#e2e8f0" stroke-width="1">
							<line x1="0" y1="170" x2="600" y2="170" /><line x1="0" y1="130" x2="600" y2="130" />
							<line x1="0" y1="90" x2="600" y2="90" /><line x1="0" y1="50" x2="600" y2="50" />
						</g>
						<!-- bars Masuk -->
						<g>
							<rect x="30" y="80" width="24" height="90" fill="#166534" />
							<rect x="130" y="60" width="24" height="110" fill="#166534" />
							<rect x="230" y="95" width="24" height="75" fill="#166534" />
							<rect x="330" y="70" width="24" height="100" fill="#166534" />
							<rect x="430" y="50" width="24" height="120" fill="#166534" />
							<rect x="530" y="40" width="24" height="130" fill="#166534" />
						</g>
						<!-- bars Keluar -->
						<g>
							<rect x="60" y="110" width="24" height="60" fill="#facc15" />
							<rect x="160" y="90" width="24" height="80" fill="#facc15" />
							<rect x="260" y="120" width="24" height="50" fill="#facc15" />
							<rect x="360" y="105" width="24" height="65" fill="#facc15" />
							<rect x="460" y="85" width="24" height="85" fill="#facc15" />
							<rect x="560" y="80" width="24" height="90" fill="#facc15" />
						</g>
						<!-- labels -->
						<g font-size="10" fill="#475569">
							<text x="24" y="185">Jan</text><text x="124" y="185">Feb</text><text x="224" y="185"
								>Mar</text
							>
							<text x="324" y="185">Apr</text><text x="424" y="185">Mei</text><text x="524" y="185"
								>Jun</text
							>
						</g>
					</svg>
				</div>
			</div>
			<!-- Ringkas -->
			<div class="mt-6 grid gap-4 sm:grid-cols-3">
				<div class="rounded-xl border-none p-4 ring-1 ring-slate-200">
					<p class="text-xs text-slate-500">Total Masuk (YTD)</p>
					<p class="mt-1 text-lg font-semibold">Rp 1.284.500.000</p>
				</div>
				<div class="rounded-xl border-none p-4 ring-1 ring-slate-200">
					<p class="text-xs text-slate-500">Total Keluar (YTD)</p>
					<p class="mt-1 text-lg font-semibold">Rp 932.100.000</p>
				</div>
				<div class="rounded-xl border-none p-4 ring-1 ring-slate-200">
					<p class="text-xs text-slate-500">Saldo Tersedia</p>
					<p class="mt-1 text-lg font-semibold">Rp 352.400.000</p>
				</div>
			</div>
		</div>

		<!-- Riwayat Donasi -->
		<div class="card rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
			<div class="flex items-center justify-between">
				<h3 class="text-lg font-semibold">Riwayat Donasi Terbaru</h3>
				<a href="#" class="text-sm text-brand-800 hover:underline">Lihat semua</a>
			</div>
			<ul class="mt-4 space-y-3 text-sm">
				<li
					class="flex items-center justify-between rounded-xl border-none p-3 ring-1 ring-slate-200"
				>
					<div>
						<p class="font-medium">Hamba Allah</p>
						<p class="text-xs text-slate-500">Zakat • 2 menit lalu</p>
					</div>
					<p class="font-semibold">Rp 250.000</p>
				</li>
				<li
					class="flex items-center justify-between rounded-xl border-none p-3 ring-1 ring-slate-200"
				>
					<div>
						<p class="font-medium">Siti Nur</p>
						<p class="text-xs text-slate-500">Infak • 10 menit lalu</p>
					</div>
					<p class="font-semibold">Rp 100.000</p>
				</li>
				<li
					class="flex items-center justify-between rounded-xl border-none p-3 ring-1 ring-slate-200"
				>
					<div>
						<p class="font-medium">Anonim</p>
						<p class="text-xs text-slate-500">Wakaf • 1 jam lalu</p>
					</div>
					<p class="font-semibold">Rp 1.000.000</p>
				</li>
			</ul>
		</div>
	</section>

	<!-- CATATAN SYARIAH -->
	<section class="card rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
		<h2 class="text-lg font-semibold">Kepatuhan Syariah</h2>
		<ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
			<li>Tanpa riba, gharar, dan maysir.</li>
			<li>Penyaluran sesuai asnaf zakat dan akad yang sah.</li>
			<li>Laporan diaudit dan diumumkan berkala.</li>
		</ul>
	</section>
</main>

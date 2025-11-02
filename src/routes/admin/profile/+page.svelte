<main class="thin space-y-6 p-4 lg:p-6">
	<!-- Header Profile -->
	<section class="card p-4">
		<div class="grid gap-4 md:grid-cols-[120px_1fr]">
			<div class="size-28 overflow-hidden rounded-2xl bg-slate-200 md:size-32 dark:bg-slate-800">
				<img
					src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&auto=format&fit=crop"
					alt="avatar"
					class="h-full w-full object-cover"
				/>
			</div>
			<div class="flex flex-col justify-center">
				<div class="flex flex-wrap items-center gap-2">
					<h2 class="text-xl font-semibold">Takmir Utama</h2>
					<span class="chip bg-brand-50 text-brand-900">Admin</span>
					<span class="chip">Operator</span>
					<span class="chip bg-gold-100 text-gold-900">Terverifikasi</span>
				</div>
				<p class="muted mt-1 text-sm">Mengelola donasi, laporan, dan program sosial</p>
				<div class="mt-3 grid grid-cols-3 gap-3 text-center">
					<div
						class="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900"
					>
						<p class="muted text-xs">Total Donasi Dicatat</p>
						<p class="text-lg font-semibold">1.284</p>
					</div>
					<div
						class="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900"
					>
						<p class="muted text-xs">Kegiatan Dibuat</p>
						<p class="text-lg font-semibold">43</p>
					</div>
					<div
						class="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900"
					>
						<p class="muted text-xs">Relawan Dibina</p>
						<p class="text-lg font-semibold">156</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Grid Detail -->
	<section class="grid gap-4 lg:grid-cols-3">
		<!-- Info Pribadi -->
		<div class="card p-4 lg:col-span-2">
			<div class="flex items-center justify-between">
				<p class="font-medium">Info Pribadi</p>
				<span class="chip">Publik</span>
			</div>
			<div class="mt-4 grid gap-4 md:grid-cols-2">
				<div>
					<p class="muted text-xs">Nama Lengkap</p>
					<p class="font-medium">Ahmad Fauzi</p>
				</div>
				<div>
					<p class="muted text-xs">Username</p>
					<p class="font-medium">@takmir</p>
				</div>
				<div>
					<p class="muted text-xs">Email</p>
					<p class="font-medium">admin@masjid.id</p>
				</div>
				<div>
					<p class="muted text-xs">Telepon</p>
					<p class="font-medium">+62 812-0000-0000</p>
				</div>
				<div>
					<p class="muted text-xs">Alamat</p>
					<p class="font-medium">Jl. Mawar No. 10, Lampung</p>
				</div>
				<div>
					<p class="muted text-xs">Bergabung</p>
					<p class="font-medium">12 Maret 2024</p>
				</div>
			</div>
			<div class="mt-4">
				<p class="muted text-xs">Bio</p>
				<p class="mt-1 text-sm">
					Fokus pada transparansi keuangan masjid, penguatan UMKM jamaah, dan program beasiswa
					santri.
				</p>
			</div>
		</div>

		<!-- Preferensi -->
		<div class="card p-4">
			<p class="font-medium">Preferensi Tampilan</p>
			<div class="mt-3 space-y-3 text-sm">
				<div class="flex items-center justify-between">
					<span>Mode</span>
					<span class="chip">Gelap</span>
				</div>
				<div class="flex items-center justify-between">
					<span>Bahasa</span>
					<span class="chip">Indonesia</span>
				</div>
				<div class="flex items-center justify-between">
					<span>Rangkuman Mingguan</span>
					<span class="chip">Jumat</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Kontak & Sosial -->
	<section class="grid gap-4 lg:grid-cols-3">
		<div class="card p-4 lg:col-span-2">
			<p class="font-medium">Kontak & Sosial</p>
			<div class="mt-3 grid gap-4 md:grid-cols-3">
				<div class="rounded-xl border border-slate-200 p-3 dark:border-slate-800">
					<p class="muted text-xs">Email</p>
					<p class="font-medium">admin@masjid.id</p>
				</div>
				<div class="rounded-xl border border-slate-200 p-3 dark:border-slate-800">
					<p class="muted text-xs">WhatsApp</p>
					<p class="font-medium">+62 812-0000-0000</p>
				</div>
				<div class="rounded-xl border border-slate-200 p-3 dark:border-slate-800">
					<p class="muted text-xs">Telegram</p>
					<p class="font-medium">@takmir_masjid</p>
				</div>
			</div>
		</div>

		<div class="card p-4">
			<p class="font-medium">Status Verifikasi</p>
			<div class="mt-3 space-y-2 text-sm">
				<div class="flex items-center justify-between">
					<span>Email</span><span class="chip bg-brand-50 text-brand-900">Terverifikasi</span>
				</div>
				<div class="flex items-center justify-between">
					<span>Nomor WA</span><span class="chip">Terverifikasi</span>
				</div>
				<div class="flex items-center justify-between">
					<span>Identitas</span><span class="chip bg-slate-200 dark:bg-slate-700">Proses</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Peran & Akses + Aktivitas -->
	<section class="grid gap-4 lg:grid-cols-3">
		<!-- Roles -->
		<div class="card p-4 lg:col-span-2">
			<div class="flex items-center justify-between">
				<p class="font-medium">Peran & Hak Akses</p>
				<span class="chip">RBAC</span>
			</div>
			<div class="thin mt-3 overflow-x-auto">
				<table class="w-full text-sm">
					<thead class="bg-slate-50 text-left dark:bg-slate-900">
						<tr class="muted">
							<th class="p-3 font-medium">Peran</th>
							<th class="p-3 font-medium">Hak</th>
							<th class="p-3 font-medium">Deskripsi</th>
						</tr>
					</thead>
					<tbody>
						<tr class="border-t border-slate-200 dark:border-slate-800">
							<td class="p-3 font-medium">Admin</td>
							<td class="p-3">read, create, update, delete</td>
							<td class="p-3">Akses penuh modul keuangan, aset, pengguna</td>
						</tr>
						<tr class="border-t border-slate-200 dark:border-slate-800">
							<td class="p-3 font-medium">Operator</td>
							<td class="p-3">read, create, update</td>
							<td class="p-3">Mengelola donasi dan kegiatan</td>
						</tr>
						<tr class="border-t border-slate-200 dark:border-slate-800">
							<td class="p-3 font-medium">Jamaah</td>
							<td class="p-3">read</td>
							<td class="p-3">Akses publik dan riwayat donasi pribadi</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- Activity -->
		<div class="card p-4">
			<p class="font-medium">Aktivitas Terbaru</p>
			<ol class="mt-3 space-y-3 text-sm">
				<li class="flex gap-3">
					<span class="grid size-8 place-items-center rounded-xl bg-brand-100 text-brand-900"
						>💳</span
					>
					<div>
						<p class="font-medium">Catat donasi Jumat</p>
						<p class="muted text-xs">02 Nov 2025 • 10:12</p>
					</div>
				</li>
				<li class="flex gap-3">
					<span class="grid size-8 place-items-center rounded-xl bg-gold-100 text-gold-900">📦</span
					>
					<div>
						<p class="font-medium">Distribusi sembako</p>
						<p class="muted text-xs">01 Nov 2025 • 16:40</p>
					</div>
				</li>
				<li class="flex gap-3">
					<span class="grid size-8 place-items-center rounded-xl bg-slate-100 dark:bg-slate-800"
						>🕌</span
					>
					<div>
						<p class="font-medium">Update jadwal kajian</p>
						<p class="muted text-xs">01 Nov 2025 • 08:15</p>
					</div>
				</li>
			</ol>
		</div>
	</section>

	<!-- Dokumen & Sertifikat -->
	<section class="card p-4">
		<div class="flex items-center justify-between">
			<p class="font-medium">Dokumen</p>
			<span class="chip">3 berkas</span>
		</div>
		<div class="mt-3 grid gap-3 md:grid-cols-3">
			<div class="rounded-xl border border-slate-200 p-3 dark:border-slate-800">
				<p class="text-sm font-medium">Sertifikat Pelatihan Tahsin.pdf</p>
				<p class="muted mt-1 text-xs">Ukuran 320KB • 2025-08-12</p>
			</div>
			<div class="rounded-xl border border-slate-200 p-3 dark:border-slate-800">
				<p class="text-sm font-medium">SK Pengurus 2025.pdf</p>
				<p class="muted mt-1 text-xs">Ukuran 540KB • 2025-06-01</p>
			</div>
			<div class="rounded-xl border border-slate-200 p-3 dark:border-slate-800">
				<p class="text-sm font-medium">KTP_AhmadFauzi.jpg</p>
				<p class="muted mt-1 text-xs">Ukuran 180KB • 2025-04-20</p>
			</div>
		</div>
	</section>
</main>

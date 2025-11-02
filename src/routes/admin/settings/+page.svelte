<main class="thin-scrollbar space-y-6 p-4 lg:p-6">
	<!-- Section helper component classes -->
	<!-- Gunakan pola yang konsisten: .card, .card-head, .card-body -->
	<!-- Card: Profil & Akun -->
	<section id="profil" class="rounded-2xl border border-slate-200 bg-white">
		<div class="flex items-center justify-between gap-3 border-b border-slate-200 p-4">
			<div>
				<h2 class="font-medium">Profil & Akun</h2>
				<p class="text-xs text-slate-500">Data pengguna dan preferensi tampilan</p>
			</div>
			<a href="#reset-profil" class="rounded-xl bg-slate-100 px-3 py-1.5 text-sm">Reset</a>
		</div>

		<div class="grid gap-6 p-4 md:grid-cols-[180px_1fr]">
			<!-- Avatar -->
			<div class="space-y-3">
				<div
					class="grid size-28 place-items-center rounded-2xl bg-slate-200 text-sm text-slate-500"
				>
					Avatar
				</div>
				<div class="text-xs text-slate-500">Unggah avatar di halaman upload file aplikasi.</div>
			</div>

			<!-- Form identitas -->
			<form class="grid gap-4 md:grid-cols-2">
				<label class="block">
					<span class="text-sm text-slate-600">Nama Lengkap</span>
					<input
						class="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
						placeholder="Takmir Masjid"
					/>
				</label>
				<label class="block">
					<span class="text-sm text-slate-600">Email</span>
					<input
						type="email"
						class="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
						placeholder="admin@masjid.id"
					/>
				</label>
				<label class="block">
					<span class="text-sm text-slate-600">Telepon (WA)</span>
					<input
						class="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
						placeholder="08xxxxxxxxxx"
					/>
				</label>
				<label class="block">
					<span class="text-sm text-slate-600">Bahasa</span>
					<select class="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2">
						<option>Indonesia</option>
						<option>English</option>
					</select>
				</label>

				<fieldset class="rounded-xl border border-slate-200 p-3 md:col-span-2">
					<legend class="px-1 text-sm text-slate-600">Preferensi Tampilan</legend>
					<div class="mt-2 grid gap-3 sm:grid-cols-2">
						<label
							class="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2"
						>
							<span class="text-sm">Mode Gelap</span>
							<input type="checkbox" class="size-4" />
						</label>
						<label
							class="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2"
						>
							<span class="text-sm">Kerapian Tabel Kompak</span>
							<input type="checkbox" class="size-4" checked />
						</label>
					</div>
				</fieldset>
			</form>
		</div>
	</section>

	<!-- Keamanan -->
	<section id="keamanan" class="rounded-2xl border border-slate-200 bg-white">
		<div class="flex items-center justify-between border-b border-slate-200 p-4">
			<div>
				<h2 class="font-medium">Keamanan</h2>
				<p class="text-xs text-slate-500">Kata sandi, 2FA, dan sesi</p>
			</div>
			<a href="#simpan-keamanan" class="rounded-xl bg-slate-100 px-3 py-1.5 text-sm">Simpan</a>
		</div>

		<div class="grid gap-6 p-4 md:grid-cols-2">
			<form class="space-y-3">
				<p class="text-sm font-medium">Ubah Kata Sandi</p>
				<label class="block"
					><span class="text-sm text-slate-600">Sandi Saat Ini</span><input
						type="password"
						class="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
					/></label
				>
				<label class="block"
					><span class="text-sm text-slate-600">Sandi Baru</span><input
						type="password"
						class="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
					/></label
				>
				<label class="block"
					><span class="text-sm text-slate-600">Ulangi Sandi Baru</span><input
						type="password"
						class="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
					/></label
				>
				<button class="rounded-xl bg-brand-600 px-4 py-2 text-white" type="button">
					Perbarui
				</button>
			</form>

			<div class="space-y-3">
				<p class="text-sm font-medium">Autentikasi Dua Faktor (2FA)</p>
				<div class="rounded-xl border border-slate-200 p-3">
					<div class="flex items-center justify-between">
						<div>
							<p class="text-sm">Aktifkan 2FA</p>
							<p class="text-xs text-slate-500">Gunakan aplikasi autentikator atau WhatsApp OTP</p>
						</div>
						<input type="checkbox" class="size-4" />
					</div>
				</div>

				<div class="rounded-xl border border-slate-200 p-3">
					<p class="text-sm font-medium">Sesi Aktif</p>
					<ul class="mt-2 space-y-2 text-sm">
						<li
							class="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2"
						>
							<span>Chrome • Lampung • 10.12</span><a
								href="#keluar"
								class="text-brand-700 underline">Keluar</a
							>
						</li>
						<li
							class="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2"
						>
							<span>Mobile • Android • 07.40</span><a
								href="#keluar"
								class="text-brand-700 underline">Keluar</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Notifikasi -->
	<section id="notifikasi" class="rounded-2xl border border-slate-200 bg-white">
		<div class="flex items-center justify-between border-b border-slate-200 p-4">
			<div>
				<h2 class="font-medium">Notifikasi</h2>
				<p class="text-xs text-slate-500">Email, WhatsApp, dan sistem</p>
			</div>
			<a href="#simpan-notifikasi" class="rounded-xl bg-slate-100 px-3 py-1.5 text-sm">Simpan</a>
		</div>

		<div class="grid gap-6 p-4 md:grid-cols-3">
			<fieldset class="space-y-3">
				<legend class="text-sm font-medium">Email</legend>
				<label
					class="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2"
				>
					<span class="text-sm">Bukti donasi</span><input type="checkbox" class="size-4" />
				</label>
				<label
					class="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2"
				>
					<span class="text-sm">Laporan bulanan</span><input
						type="checkbox"
						class="size-4"
						checked
					/>
				</label>
			</fieldset>
			<fieldset class="space-y-3">
				<legend class="text-sm font-medium">WhatsApp</legend>
				<label
					class="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2"
				>
					<span class="text-sm">Pengingat kajian</span><input
						type="checkbox"
						class="size-4"
						checked
					/>
				</label>
				<label
					class="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2"
				>
					<span class="text-sm">Pengumuman darurat</span><input type="checkbox" class="size-4" />
				</label>
			</fieldset>
			<div class="space-y-3">
				<label class="block">
					<span class="text-sm text-slate-600">Do Not Disturb</span>
					<select class="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2">
						<option>Nonaktif</option>
						<option>22.00–05.00</option>
					</select>
				</label>
				<label class="block">
					<span class="text-sm text-slate-600">Rangkuman mingguan</span>
					<select class="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2">
						<option>Setiap Jumat</option>
						<option>Setiap Senin</option>
					</select>
				</label>
			</div>
		</div>
	</section>

	<!-- Profil Masjid -->
	<section id="profil-masjid" class="rounded-2xl border border-slate-200 bg-white">
		<div class="flex items-center justify-between border-b border-slate-200 p-4">
			<div>
				<h2 class="font-medium">Profil Masjid</h2>
				<p class="text-xs text-slate-500">Identitas dan informasi publik</p>
			</div>
			<a href="#simpan-profil-masjid" class="rounded-xl bg-slate-100 px-3 py-1.5 text-sm">Simpan</a>
		</div>

		<div class="grid gap-4 p-4 md:grid-cols-2">
			<label class="block"
				><span class="text-sm text-slate-600">Nama Masjid</span><input
					class="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
					placeholder="Masjid Al-Ikhlas"
				/></label
			>
			<label class="block"
				><span class="text-sm text-slate-600">Alamat</span><input
					class="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
					placeholder="Jl. Contoh No. 123, Kota"
				/></label
			>
			<label class="block md:col-span-2"
				><span class="text-sm text-slate-600">Deskripsi</span><textarea
					class="mt-1 h-28 w-full rounded-xl border border-slate-200 px-3 py-2"
					placeholder="Profil singkat masjid..."
				></textarea>
			</label>
			<div class="grid gap-3 md:col-span-2 md:grid-cols-2">
				<label class="block"
					><span class="text-sm text-slate-600">Zona Waktu Salat</span><input
						class="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
						placeholder="Asia/Jakarta"
					/></label
				>
				<label class="block"
					><span class="text-sm text-slate-600">Lokasi (Lat,Lng)</span><input
						class="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
						placeholder="-6.2,106.8"
					/></label
				>
			</div>
			<div class="md:col-span-2">
				<span class="text-sm text-slate-600">Logo</span>
				<div class="mt-2 flex items-center gap-3">
					<div
						class="grid size-16 place-items-center rounded-xl bg-slate-200 text-xs text-slate-600"
					>
						Logo
					</div>
					<span class="text-xs text-slate-500">Unggah logo melalui halaman media.</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Pembayaran -->
	<section id="pembayaran" class="rounded-2xl border border-slate-200 bg-white">
		<div class="flex items-center justify-between border-b border-slate-200 p-4">
			<div>
				<h2 class="font-medium">Pembayaran</h2>
				<p class="text-xs text-slate-500">Metode dan kredensial gateway</p>
			</div>
			<a href="#simpan-pembayaran" class="rounded-xl bg-slate-100 px-3 py-1.5 text-sm">Simpan</a>
		</div>

		<div class="grid gap-4 p-4 md:grid-cols-3">
			<label class="block md:col-span-2">
				<span class="text-sm text-slate-600">QRIS (URL Gambar)</span>
				<input
					class="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
					placeholder="https://.../qris.png"
				/>
			</label>
			<label class="block">
				<span class="text-sm text-slate-600">Bank Transfer</span>
				<input
					class="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
					placeholder="BCA • 123456789 a.n. DKM"
				/>
			</label>
			<label class="block">
				<span class="text-sm text-slate-600">Midtrans Merchant ID</span>
				<input
					class="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
					placeholder="Gxxxxxx"
				/>
			</label>
			<label class="block">
				<span class="text-sm text-slate-600">Midtrans Client Key</span>
				<input
					class="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
					placeholder="SB-Mid-client-..."
				/>
			</label>
			<label class="block">
				<span class="text-sm text-slate-600">Midtrans Server Key</span>
				<input
					class="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
					placeholder="SB-Mid-server-..."
				/>
			</label>
		</div>
	</section>

	<!-- Integrasi -->
	<section id="integrasi" class="rounded-2xl border border-slate-200 bg-white">
		<div class="flex items-center justify-between border-b border-slate-200 p-4">
			<div>
				<h2 class="font-medium">Integrasi</h2>
				<p class="text-xs text-slate-500">WhatsApp, Email, dan Webhook</p>
			</div>
			<a href="#simpan-integrasi" class="rounded-xl bg-slate-100 px-3 py-1.5 text-sm">Simpan</a>
		</div>

		<div class="grid gap-4 p-4 md:grid-cols-3">
			<div class="rounded-xl border border-slate-200 p-3">
				<p class="text-sm font-medium">WhatsApp</p>
				<label class="mt-2 block"
					><span class="text-sm text-slate-600">API Key</span><input
						class="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
						placeholder="WA-API-KEY"
					/></label
				>
				<label class="mt-2 block"
					><span class="text-sm text-slate-600">Nomor Pengirim</span><input
						class="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
						placeholder="628xxxxxxx"
					/></label
				>
				<div class="mt-3 text-xs text-slate-500">Pengujian WA dilakukan dari modul notifikasi.</div>
			</div>
			<div class="rounded-xl border border-slate-200 p-3">
				<p class="text-sm font-medium">Email SMTP</p>
				<label class="mt-2 block"
					><span class="text-sm text-slate-600">Host</span><input
						class="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
						placeholder="smtp.gmail.com"
					/></label
				>
				<div class="mt-2 grid grid-cols-2 gap-3">
					<label class="block"
						><span class="text-sm text-slate-600">Port</span><input
							class="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
							placeholder="587"
						/></label
					>
					<label class="block"
						><span class="text-sm text-slate-600">TLS</span><select
							class="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
						>
							<option>StartTLS</option>
							<option>SSL</option>
						</select></label
					>
				</div>
				<label class="mt-2 block"
					><span class="text-sm text-slate-600">User</span><input
						class="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
						placeholder="no-reply@masjid.id"
					/></label
				>
				<label class="mt-2 block"
					><span class="text-sm text-slate-600">Password</span><input
						type="password"
						class="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
						placeholder="••••••"
					/></label
				>
			</div>
			<div class="rounded-xl border border-slate-200 p-3">
				<p class="text-sm font-medium">Webhooks</p>
				<label class="mt-2 block"
					><span class="text-sm text-slate-600">Endpoint</span><input
						class="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
						placeholder="https://api.masjid.id/webhook"
					/></label
				>
				<label class="mt-2 block"
					><span class="text-sm text-slate-600">Secret</span><input
						class="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
						placeholder="whsec_..."
					/></label
				>
				<div class="mt-3 text-xs text-slate-500">Kelola versi dan sign di server.</div>
			</div>
		</div>
	</section>

	<!-- Audit Log -->
	<section id="audit" class="rounded-2xl border border-slate-200 bg-white">
		<div class="flex items-center justify-between border-b border-slate-200 p-4">
			<div>
				<h2 class="font-medium">Audit Log</h2>
				<p class="text-xs text-slate-500">5 aktivitas terbaru</p>
			</div>
			<a href="#unduh-csv" class="rounded-xl bg-slate-100 px-3 py-1.5 text-sm">Unduh CSV</a>
		</div>

		<div class="thin-scrollbar overflow-x-auto p-4">
			<table class="w-full text-sm">
				<thead class="bg-slate-50 text-left">
					<tr class="text-slate-600">
						<th class="p-3 font-medium">Waktu</th>
						<th class="p-3 font-medium">Pengguna</th>
						<th class="p-3 font-medium">Aksi</th>
						<th class="p-3 font-medium">Entitas</th>
						<th class="p-3 font-medium">Status</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-t border-slate-100">
						<td class="p-3">02 Nov 2025 • 10:02</td>
						<td class="p-3">Takmir</td>
						<td class="p-3">Update profil masjid</td>
						<td class="p-3">settings</td>
						<td class="p-3">
							<span class="rounded-lg bg-brand-100 px-2 py-1 text-xs text-brand-900">OK</span>
						</td>
					</tr>
					<tr class="border-t border-slate-100">
						<td class="p-3">02 Nov 2025 • 09:54</td>
						<td class="p-3">Takmir</td>
						<td class="p-3">Ubah kata sandi</td>
						<td class="p-3">auth</td>
						<td class="p-3">
							<span class="rounded-lg bg-brand-100 px-2 py-1 text-xs text-brand-900">OK</span>
						</td>
					</tr>
					<tr class="border-t border-slate-100">
						<td class="p-3">01 Nov 2025 • 20:31</td>
						<td class="p-3">Operator</td>
						<td class="p-3">Tambah webhook</td>
						<td class="p-3">integrations</td>
						<td class="p-3">
							<span class="rounded-lg bg-gold-100 px-2 py-1 text-xs text-gold-900">Info</span>
						</td>
					</tr>
					<tr class="border-t border-slate-100">
						<td class="p-3">01 Nov 2025 • 18:07</td>
						<td class="p-3">Operator</td>
						<td class="p-3">Gagal kirim email tes</td>
						<td class="p-3">smtp</td>
						<td class="p-3">
							<span class="rounded-lg bg-slate-200 px-2 py-1 text-xs text-slate-700">Error</span>
						</td>
					</tr>
					<tr class="border-t border-slate-100">
						<td class="p-3">01 Nov 2025 • 12:45</td>
						<td class="p-3">Takmir</td>
						<td class="p-3">Aktifkan 2FA</td>
						<td class="p-3">auth</td>
						<td class="p-3">
							<span class="rounded-lg bg-brand-100 px-2 py-1 text-xs text-brand-900">OK</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>

	<!-- Zona Bahaya -->
	<section id="bahaya" class="rounded-2xl border border-slate-200 bg-white">
		<div class="border-b border-slate-200 p-4">
			<h2 class="font-medium">Zona Bahaya</h2>
			<p class="text-xs text-slate-500">Tindakan berisiko tinggi</p>
		</div>
		<div class="grid gap-3 p-4 md:grid-cols-2">
			<div class="rounded-xl border border-slate-200 p-4">
				<p class="text-sm font-medium">Putus Semua Sesi</p>
				<p class="text-xs text-slate-500">Paksa logout seluruh perangkat</p>
				<a href="#terminate" class="mt-3 inline-block rounded-xl bg-slate-100 px-3 py-2">Putuskan</a
				>
			</div>
			<div class="rounded-xl border border-slate-200 p-4">
				<p class="text-sm font-medium text-red-600">Hapus Akun</p>
				<p class="text-xs text-slate-500">Tindakan tidak dapat dibatalkan</p>
				<a href="#delete" class="mt-3 inline-block rounded-xl bg-red-600 px-3 py-2 text-white"
					>Hapus Permanen</a
				>
			</div>
		</div>
	</section>
</main>

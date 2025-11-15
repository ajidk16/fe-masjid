<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let showPassword = $state(false);
	let showConfirm = $state(false);

	let labels = ['Lemah', 'Cukup', 'Baik', 'Kuat'];

	onMount(() => {
		const pwd = document.getElementById('password') as HTMLInputElement;
		const bar = document.getElementById('bar') as HTMLElement;
		const barText = document.getElementById('bar-text') as HTMLElement;

		const score = (v: string) => {
			let s = 0;
			if (v.length >= 8) s++;
			if (/[A-Z]/.test(v)) s++;
			if (/[0-9]/.test(v)) s++;
			if (/[^A-Za-z0-9]/.test(v)) s++;
			return Math.min(s, 4);
		};

		pwd.addEventListener('input', () => {
			const s = Math.max(1, score(pwd.value));
			bar.style.width = ['25%', '50%', '75%', '100%'][s - 1];
			barText.textContent = `Kekuatan sandi: ${labels[s - 1]}`;
		});
	});
</script>

<main class="grid min-h-dvh lg:grid-cols-2">
	<section class="hidden flex-col justify-between bg-brand-900 p-10 text-white lg:flex">
		<button onclick={() => goto('/')} class="flex cursor-pointer items-center gap-3">
			<div class="grid size-10 place-items-center rounded-xl bg-white/10 text-lg font-bold">م</div>
			<div>
				<p class="leading-tight font-semibold">Masjid Digital</p>
				<p class="text-xs text-white/80">Ekosistem Ibadah • Sosial • Ekonomi Halal</p>
			</div>
		</button>

		<div>
			<h1 class="text-4xl leading-tight font-semibold tracking-tight">
				Gabung dan mulai membangun<br />transparansi dan kebermanfaatan.
			</h1>
			<ul class="mt-6 space-y-3 text-white/90">
				<li class="flex items-center gap-3">
					<span class="size-2 rounded-full bg-gold-400"></span>
					Donasi & laporan real-time
				</li>
				<li class="flex items-center gap-3">
					<span class="size-2 rounded-full bg-gold-400"></span>
					Marketplace halal jamaah
				</li>
				<li class="flex items-center gap-3">
					<span class="size-2 rounded-full bg-gold-400"></span>
					Jadwal salat & kajian terintegrasi
				</li>
			</ul>
		</div>

		<p class="text-xs text-white/70">© Komunitas Masjid • v1.0</p>
	</section>

	<!-- Right: Form -->
	<section class="flex items-center justify-center p-6 sm:p-10">
		<div class="w-full max-w-md">
			<!-- Brand mark -->
			<div
				class="mx-auto grid size-12 place-items-center rounded-2xl bg-brand-900 text-xl font-bold text-white"
			>
				م
			</div>
			<h2 class="mt-4 text-center text-2xl font-semibold">Daftar Akun</h2>
			<p class="mt-1 text-center text-sm text-slate-600 dark:text-slate-400">
				Buat akun baru untuk menjadi bagian dari ekosistem digital masjid.
			</p>

			<form id="form" method="POST" novalidate class="mt-6 space-y-4">
				<!-- Nama -->
				<div>
					<label for="fullName" class="block text-sm font-medium text-slate-700 dark:text-slate-300"
						>Nama Lengkap</label
					>
					<input
						id="fullName"
						name="fullName"
						autocomplete="name"
						required
						class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-[15px]
                     outline-none focus:ring-2 focus:ring-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:focus:ring-brand-700"
						placeholder="Nama Anda"
					/>
					<p id="err-name" class="mt-1 hidden text-xs text-red-600">Nama wajib diisi.</p>
				</div>

				<!-- Email -->
				<div>
					<label for="email" class="block text-sm font-medium text-slate-700 dark:text-slate-300"
						>Email</label
					>
					<input
						id="email"
						name="email"
						type="email"
						autocomplete="email"
						required
						class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-[15px]
                     outline-none focus:ring-2 focus:ring-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:focus:ring-brand-700"
						placeholder="nama@domain.com"
					/>
					<p id="err-email" class="mt-1 hidden text-xs text-red-600">Masukkan email yang valid.</p>
				</div>

				<!-- WA -->
				<div>
					<label for="phone" class="block text-sm font-medium text-slate-700 dark:text-slate-300"
						>No. WhatsApp</label
					>
					<input
						id="phone"
						name="phone"
						inputmode="numeric"
						class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-[15px]
                     outline-none focus:ring-2 focus:ring-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:focus:ring-brand-700"
						placeholder="08xxxxxxxxxx"
					/>
					<p class="mt-1 text-xs text-slate-500">Opsional. Untuk OTP atau notifikasi WA.</p>
				</div>

				<div class="grid gap-4 sm:grid-cols-2">
					<div class="relative">
						<label
							for="password"
							class="block text-sm font-medium text-slate-700 dark:text-slate-300">Kata Sandi</label
						>
						<input
							id="password"
							name="password"
							type={showPassword ? 'text' : 'password'}
							required
							class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 pr-10 text-[15px]
                       outline-none focus:ring-2 focus:ring-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:focus:ring-brand-700"
							placeholder="Minimal 8 karakter"
						/>
						<button
							type="button"
							onclick={() => (showPassword = !showPassword)}
							class="absolute top-8 right-2 grid size-7 place-items-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
							>{showPassword ? '🙈' : '👁️'}</button
						>
						<p id="err-password" class="mt-1 hidden text-xs text-red-600">
							Sandi minimal 8 karakter.
						</p>
					</div>

					<div class="relative">
						<label
							for="confirm"
							class="block text-sm font-medium text-slate-700 dark:text-slate-300"
							>Konfirmasi Sandi</label
						>
						<input
							id="confirm"
							name="confirm"
							type={showConfirm ? 'text' : 'password'}
							required
							class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 pr-10 text-[15px]
                       outline-none focus:ring-2 focus:ring-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:focus:ring-brand-700"
							placeholder="Ulangi sandi"
						/>
						<button
							type="button"
							onclick={() => (showConfirm = !showConfirm)}
							class="absolute top-8 right-2 grid size-7 place-items-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
							>{showConfirm ? '🙈' : '👁️'}</button
						>
						<p id="err-confirm" class="mt-1 hidden text-xs text-red-600">Konfirmasi tidak cocok.</p>
					</div>
				</div>
				<div class="mt-2">
					<div class="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800">
						<div id="bar" class="h-2 w-0 rounded-full bg-brand-600 transition-all"></div>
					</div>
					<p id="bar-text" class="mt-1 text-xs text-slate-500">Kekuatan sandi: Lemah</p>
				</div>

				<!-- TOS -->
				<div
					class="rounded-xl border border-slate-200 bg-white px-3 py-3 dark:border-slate-800 dark:bg-slate-900"
				>
					<label class="flex items-start gap-3">
						<input
							id="tos"
							type="checkbox"
							class="mt-0.5 size-4 rounded border-slate-300 text-brand-600 focus:ring-brand-400 dark:border-slate-700"
						/>
						<span class="text-sm">
							Saya setuju dengan
							<a href="/syarat-layanan" class="text-brand-700 hover:underline">Syarat Layanan</a>
							dan
							<a href="/kebijakan-privasi" class="text-brand-700 hover:underline"
								>Kebijakan Privasi</a
							>.
						</span>
					</label>
					<p id="err-tos" class="mt-1 hidden text-xs text-red-600">
						Anda harus menyetujui syarat layanan.
					</p>
				</div>

				<!-- Submit -->
				<button
					type="submit"
					class="w-full rounded-xl bg-brand-600 py-2.5 text-white shadow-sm hover:bg-brand-700 focus:ring-2 focus:ring-brand-300 focus:outline-none dark:focus:ring-brand-700"
				>
					Buat Akun
				</button>

				<p class="text-center text-sm text-slate-600 dark:text-slate-400">
					Sudah punya akun?
					<a href="/auth/sign-in" class="text-brand-700 hover:underline">Masuk</a>
				</p>
			</form>

			<p class="mt-6 text-center text-xs text-slate-500">
				Dengan mendaftar Anda menyetujui ketentuan yang berlaku.
			</p>
		</div>
	</section>
</main>

<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { Loader } from 'lucide-svelte';

	let showPassword = $state(false);
	let infoMessage = $state('');
	let loading = $state(false);
</script>

<main class="grid min-h-dvh lg:grid-cols-2">
	<section class="flex items-center justify-center p-6 sm:p-10">
		<div class="w-full max-w-md">
			<!-- Brand -->
			<button onclick={() => goto('/')} class="items-left mb-6 flex cursor-pointer gap-3">
				<div class="grid size-10 place-items-center rounded-xl bg-brand-900 font-bold text-white">
					م
				</div>
				<div>
					<p class="font-semibold">Masjid Digital</p>
					<p class="text-xs text-slate-500">Masuk ke dashboard</p>
				</div>
			</button>

			<!-- Card -->
			<div
				class="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 dark:border-slate-800 dark:bg-slate-900"
			>
				<h1 class="text-xl font-semibold">Masuk</h1>
				<p class="mt-1 text-sm text-slate-500">Gunakan email dan kata sandi terdaftar.</p>

				<!-- Alert (contoh error; sembunyikan jika tidak perlu) -->
				<div
					id="alert"
					class="mt-4 {infoMessage
						? ''
						: 'hidden'} rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
				>
					{infoMessage}
				</div>

				<form
					class="mt-5 space-y-4"
					use:enhance={() => {
						loading = true;
						return async ({ result }) => {
							setTimeout(() => {
								if (result.status === 200) {
									goto('/admin/board');
								} else {
									infoMessage = 'Email atau kata sandi salah.';
								}
								loading = false;
							}, 500);
						};
					}}
					method="POST"
				>
					<div>
						<label for="email" class="mb-1 block text-sm font-medium">Email</label>
						<input
							id="email"
							name="email"
							required
							placeholder="kamu@contoh.com"
							class="w-full rounded-xl border border-gray-300/80 bg-white px-3.5 py-2.5 text-sm ring-2 ring-transparent outline-none focus:border-brand-500 focus:ring-brand-200 dark:border-white/10 dark:bg-gray-900 dark:focus:ring-brand-800"
						/>
					</div>

					<div>
						<label for="password" class="mb-1 block text-sm font-medium">Kata Sandi</label>
						<div class="relative">
							<input
								id="password"
								name="password"
								type={showPassword ? 'text' : 'password'}
								placeholder="Masukkan kata sandi Anda"
								autocomplete="current-password"
								required
								class="w-full rounded-xl border border-gray-300/80 bg-white px-3.5 py-2.5 pr-11 text-sm ring-2 ring-transparent outline-none focus:border-brand-500 focus:ring-brand-200 dark:border-white/10 dark:bg-gray-900 dark:focus:ring-brand-800"
							/>
							<button
								onclick={() => {
									showPassword = !showPassword;
								}}
								type="button"
								aria-label="Tampilkan sandi"
								class="absolute inset-y-0 right-2.5 my-auto grid h-8 w-8 place-items-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10"
							>
								{showPassword ? '🙈' : '👁️'}
							</button>
						</div>
					</div>

					<div class="flex items-center justify-between">
						<label class="inline-flex items-center gap-2 text-sm">
							<input type="checkbox" class="size-4 rounded border-slate-300" name="remember" />
							Ingat saya
						</label>
						<a href="/auth/forgot-password" class="text-sm text-brand-700 hover:underline"
							>Lupa kata sandi?</a
						>
					</div>

					<button
						type="submit"
						class="w-full rounded-xl {loading
							? 'cursor-not-allowed bg-gray-400 text-gray-200 hover:bg-gray-400'
							: 'bg-brand-600 hover:bg-brand-700'} py-2.5 text-white transition-colors"
						disabled={loading}
					>
						{#if loading}
							<span class="inline-flex items-center gap-2">
								<Loader size={16} />
								Memproses...
							</span>
						{:else}
							Masuk
						{/if}
					</button>

					<div class="flex items-center gap-3 text-xs text-slate-500">
						<div class="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
						<span>atau</span>
						<div class="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
					</div>

					<div class="grid grid-cols-2 gap-3">
						<button
							type="button"
							class="rounded-xl border border-slate-200 px-3 py-2 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800"
						>
							<span class="sr-only">Masuk dengan Google</span>
							<div class="flex items-center justify-center gap-2 text-sm">
								<svg class="size-4" viewBox="0 0 24 24"
									><path
										fill="#EA4335"
										d="M12 10.2v3.9h5.4c-.2 1.3-1.6 3.8-5.4 3.8-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.2.8 4 1.5l2.7-2.6C16.8 3.1 14.6 2 12 2 6.9 2 2.8 6.1 2.8 11.2S6.9 20.4 12 20.4c7.1 0 8.8-5 8.2-8.2H12z"
									/></svg
								>
								Google
							</div>
						</button>
						<button
							type="button"
							class="rounded-xl border border-slate-200 px-3 py-2 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800"
						>
							<span class="sr-only">Masuk dengan Email Magic Link</span>
							<div class="flex items-center justify-center gap-2 text-sm">
								<svg class="size-4" viewBox="0 0 24 24" fill="none"
									><path d="M3 7h18v10H3z" stroke="currentColor" stroke-width="2" /><path
										d="M3 7l9 6 9-6"
										stroke="currentColor"
										stroke-width="2"
									/></svg
								>
								Magic Link
							</div>
						</button>
					</div>
				</form>

				<p class="mt-6 text-sm text-slate-500">
					Belum punya akun?
					<a href="/auth/sign-out" class="text-brand-700 hover:underline">Daftar</a>
				</p>
			</div>

			<p class="mt-4 text-xs text-slate-500">© Komunitas Masjid • Transparan • Halal</p>
		</div>
	</section>

	<!-- Right: visual -->
	<aside class="relative hidden overflow-hidden lg:block">
		<div class="absolute inset-0 bg-linear-to-br from-brand-900 via-brand-700 to-brand-600"></div>
		<div
			class="absolute inset-0 opacity-10"
			style="background-image: radial-gradient(white 1px, transparent 1px); background-size: 16px 16px;"
		></div>
		<div class="relative flex h-full w-full items-center justify-center p-10 text-white">
			<div class="max-w-md text-center">
				<div
					class="mx-auto grid size-16 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/20"
				>
					<svg class="size-8" viewBox="0 0 24 24" fill="none"
						><path d="M4 8l8-5 8 5v8l-8 5-8-5V8z" stroke="currentColor" stroke-width="2" /></svg
					>
				</div>
				<h2 class="mt-6 text-2xl font-semibold">Ekosistem Digital Masjid</h2>
				<p class="mt-2 text-sm text-white/80">
					Donasi, kajian, marketplace halal, dan laporan transparan dalam satu tempat.
				</p>
				<ul class="mt-6 space-y-2 text-left text-sm">
					<li class="flex items-start gap-2">
						<span class="mt-1 size-2 rounded-full bg-gold-400"></span>Keamanan OTP dan 2FA
					</li>
					<li class="flex items-start gap-2">
						<span class="mt-1 size-2 rounded-full bg-gold-400"></span>QRIS Syariah dan transfer bank
					</li>
					<li class="flex items-start gap-2">
						<span class="mt-1 size-2 rounded-full bg-gold-400"></span>Laporan otomatis PDF
					</li>
				</ul>
			</div>
		</div>
	</aside>
</main>

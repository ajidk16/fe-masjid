<script lang="ts">
	import { enhance } from '$app/forms';

	let showPassword = $state(false);
	let showConfirm = $state(false);
	let password = $state('');
	let confirm = $state('');
	let loading = $state(false);
	let infoMessage = $state('');

	const labels = ['Lemah', 'Cukup', 'Baik', 'Kuat'];
	const widths = ['25%', '50%', '75%', '100%'];

	// Reactive computed: hitung skor password
	const passwordScore = $derived(() => {
		let s = 0;
		if (password.length >= 8) s++;
		if (/[A-Z]/.test(password)) s++;
		if (/[0-9]/.test(password)) s++;
		if (/[^A-Za-z0-9]/.test(password)) s++;
		return Math.max(1, Math.min(s, 4));
	});

	const strengthLabel = $derived(labels[passwordScore() - 1]);
	const barWidth = $derived(widths[passwordScore() - 1]);

	// Validasi
	const passwordError = $derived(password.length > 0 && password.length < 8);
	const confirmError = $derived(confirm.length > 0 && confirm !== password);
</script>

<main class="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
	<div class="flex min-h-dvh flex-col items-center justify-center px-4">
		<!-- Card -->
		<div
			class="w-full max-w-md space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-900"
		>
			<!-- Header -->
			<div class="space-y-2 text-center">
				<div
					class="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-900 text-2xl font-bold text-white"
				>
					م
				</div>
				<h1 class="text-xl font-semibold">Atur Ulang Kata Sandi</h1>
				<p class="text-sm text-slate-500">Masukkan kata sandi baru untuk akun Anda</p>
			</div>

			{#if infoMessage}
				<p class="mb-4 rounded-lg bg-red-100 px-4 py-2 text-sm text-red-700">
					{infoMessage}
				</p>
			{/if}

			<!-- Form -->
			<form
				class="space-y-4"
				method="POST"
				use:enhance={() => {
					return async ({ result }: any) => {
						console.log(result);
						loading = false;
						if (result?.error) {
							infoMessage = result?.error?.message;
							loading = false;
						}
						if (result?.status === 200) {
							infoMessage = result.message;
							loading = false;
						}
					};
				}}
			>
				<div class="grid gap-4">
					<div class="relative">
						<label
							for="newPassword"
							class="block text-sm font-medium text-slate-700 dark:text-slate-300"
						>
							Kata Sandi
						</label>
						<input
							id="newPassword"
							name="newPassword"
							type={showPassword ? 'text' : 'password'}
							bind:value={password}
							required
							class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 pr-10 text-[15px]
                       outline-none focus:ring-2 focus:ring-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:focus:ring-brand-700"
							placeholder="Minimal 8 karakter"
						/>
						<button
							type="button"
							onclick={() => (showPassword = !showPassword)}
							class="absolute top-8 right-2 grid size-7 place-items-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
						>
							{showPassword ? '🙈' : '👁️'}
						</button>
						{#if passwordError}
							<p class="mt-1 text-xs text-red-600">Sandi minimal 8 karakter.</p>
						{/if}
					</div>

					<div class="relative">
						<label
							for="confirm"
							class="block text-sm font-medium text-slate-700 dark:text-slate-300"
						>
							Konfirmasi Sandi
						</label>
						<input
							id="confirm"
							name="confirm"
							type={showConfirm ? 'text' : 'password'}
							bind:value={confirm}
							required
							class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 pr-10 text-[15px]
                       outline-none focus:ring-2 focus:ring-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:focus:ring-brand-700"
							placeholder="Ulangi sandi"
						/>
						<button
							type="button"
							onclick={() => (showConfirm = !showConfirm)}
							class="absolute top-8 right-2 grid size-7 place-items-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
						>
							{showConfirm ? '🙈' : '👁️'}
						</button>
						{#if confirmError}
							<p class="mt-1 text-xs text-red-600">Konfirmasi tidak cocok.</p>
						{/if}
					</div>
				</div>

				{#if password.length > 0}
					<div class="mt-2">
						<div class="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800">
							<div
								class="h-2 rounded-full bg-brand-600 transition-all"
								style="width: {barWidth}"
							></div>
						</div>
						<p class="mt-1 text-xs text-slate-500">
							Kekuatan sandi: {strengthLabel}
						</p>
					</div>
				{/if}

				<button
					type="submit"
					disabled={passwordError || confirmError || password.length === 0}
					class="w-full rounded-xl bg-brand-600 py-2.5 font-medium text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
				>
					Simpan Kata Sandi
				</button>
			</form>

			<!-- Info -->
			<div class="text-center text-sm text-slate-500">
				<p>Sudah ingat kata sandi?</p>
				<a href="/aut/sign-in" class="font-medium text-brand-700 hover:underline"
					>Kembali ke Login</a
				>
			</div>
		</div>

		<!-- Footer -->
		<p class="mt-8 text-xs text-slate-400">© 2025 Masjid Digital • Aman dan Halal</p>
	</div>
</main>

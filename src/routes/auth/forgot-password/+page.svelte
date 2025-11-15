<script lang="ts">
	import { enhance } from '$app/forms';
	let infoMessage = $state('');
	let status = $state(false);
</script>

<main class="flex min-h-screen items-center justify-center bg-slate-50 px-4">
	{#if status}
		<!-- pesan email berhasil dikirim lewat gmail mohon cek  -->
		<div class="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-md">
			<div class="mb-6 flex flex-col items-center space-y-2">
				<div
					class="grid size-14 place-items-center rounded-2xl bg-brand-900 text-2xl font-bold text-white"
				>
					م
				</div>
				<p class="text-lg font-semibold">Masjid Digital</p>
				<p class="text-sm text-slate-500">Pemulihan Kata Sandi</p>
			</div>
			<div class="space-y-4">
				<p class="text-center text-sm text-slate-600">
					Tautan untuk mereset kata sandi telah dikirim ke email Anda. Silakan periksa inbox atau
					folder spam Anda.
				</p>
				<div class="mt-6 text-center">
					<a
						href="/auth/sign-in"
						class="inline-flex items-center text-sm text-brand-700 hover:underline"
					>
						<svg
							class="mr-1 size-4"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							viewBox="0 0 24 24"
							><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" /></svg
						>
						Kembali ke Login
					</a>
				</div>
			</div>
		</div>
	{:else}
		<div class="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-md">
			<div class="mb-6 flex flex-col items-center space-y-2">
				<div
					class="grid size-14 place-items-center rounded-2xl bg-brand-900 text-2xl font-bold text-white"
				>
					م
				</div>
				<p class="text-lg font-semibold">Masjid Digital</p>
				<p class="text-sm text-slate-500">Pemulihan Kata Sandi</p>
			</div>
			<form
				method="POST"
				class="space-y-4"
				use:enhance={() => {
					return async ({ result }: any) => {
						if (result?.error) {
							infoMessage = result?.error?.message;
						}

						if (result.status === 200) {
							status = true;
						}
					};
				}}
			>
				<div>
					<label for="email" class="text-sm font-medium text-slate-700">Alamat Email</label>
					<input
						id="email"
						type="email"
						name="email"
						placeholder="contoh@masjid.id"
						class="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-brand-300"
					/>
					<span class="text-sm text-red-500">{infoMessage !== '' ? infoMessage : ''}</span>
				</div>

				<button
					type="submit"
					class="w-full rounded-xl bg-brand-600 py-2.5 font-medium text-white transition hover:bg-brand-700"
				>
					Kirim Tautan Reset
				</button>
			</form>
			<div class="my-6 border-t border-slate-200"></div>
			<p class="text-center text-sm leading-relaxed text-slate-500">
				Masukkan email yang terdaftar. Kami akan mengirimkan tautan untuk mereset kata sandi Anda.
			</p>
			<div class="mt-6 text-center">
				<a
					href="/auth/sign-in"
					class="inline-flex items-center text-sm text-brand-700 hover:underline"
				>
					<svg
						class="mr-1 size-4"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						viewBox="0 0 24 24"
						><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" /></svg
					>
					Kembali ke Login
				</a>
			</div>
		</div>
	{/if}
</main>

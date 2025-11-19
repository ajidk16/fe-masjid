<script lang="ts">
	import { page } from '$app/state';
	import { formatDateTime } from '$lib/utils/format';

	const today = formatDateTime(new Date().toString());
	const year = new Date().getFullYear();
	const requestId = page.url.href;
</script>

<main class="grid min-h-full place-items-center p-6">
	<section class="relative w-full max-w-3xl">
		<!-- dekorasi -->
		<div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10 opacity-10">
			<div class="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-brand-400/40 blur-3xl"></div>
			<div
				class="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-gold-400/40 blur-3xl"
			></div>
		</div>

		<div
			class="overflow-hidden rounded-2xl border border-slate-200/60 bg-white/80 shadow-soft backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/60"
		>
			<!-- header kecil -->
			<div
				class="flex items-center justify-between border-b border-slate-200/70 px-5 py-3 dark:border-slate-800"
			>
				<div class="flex items-center gap-2">
					<span class="inline-flex size-2.5 rounded-full bg-brand-500"></span>
					<p class="text-sm font-medium text-slate-500 dark:text-slate-400">
						Ekosistem Digital Masjid
					</p>
				</div>
				<p class="text-xs text-slate-400 dark:text-slate-500">Status Halaman</p>
			</div>

			<!-- konten error -->
			<div class="px-8 py-12 sm:px-12">
				<div class="mx-auto max-w-none text-center">
					<!-- icon -->
					<div
						class="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-brand-50 ring-1 ring-brand-200 dark:bg-brand-900/20 dark:ring-brand-800"
					>
						<!-- Islamic-inspired geometric icon -->
						<svg
							viewBox="0 0 24 24"
							class="h-8 w-8 text-brand-700 dark:text-brand-300"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path
								d="M12 3l2.5 2.5L17 3l2.5 2.5L22 3v6l-2.5-2.5L17 9l-2.5-2.5L12 9 9.5 6.5 7 9 4.5 6.5 2 9V3l2.5 2.5L7 3l2.5 2.5L12 3z"
							/>
							<circle cx="12" cy="14" r="6" />
						</svg>
					</div>

					<!-- kode & judul -->
					<p class="text-sm tracking-widest text-brand-700 dark:text-brand-300">
						KODE: {page.status}
					</p>
					<h1 class="mt-2 text-3xl font-extrabold sm:text-4xl">
						{page.error?.message || 'Halaman tidak ditemukan'}
					</h1>
					<p class="mt-3 text-base text-slate-600 dark:text-slate-300">
						Maaf, halaman yang Anda cari tidak tersedia atau sudah dipindahkan. Silakan kembali ke
						beranda atau laporkan kendala.
					</p>

					<!-- aksi -->
					<div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
						<a
							href={page.url.origin}
							class="inline-flex items-center justify-center rounded-xl border border-brand-700 bg-brand-900 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:translate-y-0.5 hover:bg-brand-800 focus:ring-4 focus:ring-brand-300 focus:outline-none dark:border-brand-600 dark:bg-brand-700 dark:hover:bg-brand-600"
						>
							Kembali ke Beranda
						</a>
						<a
							href="/lapor"
							class="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:ring-4 focus:ring-slate-200 focus:outline-none dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
						>
							Laporkan Masalah
						</a>
					</div>

					<!-- detail teknis -->
					<div
						class="mx-auto mt-10 max-w-xl rounded-xl border border-slate-200 bg-slate-50 p-4 text-left text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-300"
					>
						<div class="flex items-center justify-between">
							<span class="font-semibold">Rincian</span>
							<span
								class="rounded-md bg-gold-100 px-2 py-0.5 text-xs text-gold-800 dark:bg-gold-900/30 dark:text-gold-300"
								>Trace singkat</span
							>
						</div>
						<div class="mt-2 space-y-1 font-mono text-xs">
							<p>request_id: <span class="text-slate-500">{requestId}</span></p>
							<p>path: <span class="text-slate-500">{page.url.pathname}</span></p>
							<p>timestamp: <span class="text-slate-500">{today}</span></p>
						</div>
						<p class="mt-3 text-xs text-slate-500">
							Jika masalah berulang, sertakan <em>request_id</em> saat menghubungi pengurus.
						</p>
					</div>

					<!-- tips -->
					<div class="mx-auto mt-6 max-w-xl text-left">
						<ul class="list-inside list-disc text-sm text-slate-600 dark:text-slate-300">
							<li>Periksa kembali URL atau gunakan pencarian situs.</li>
							<li>Hapus cache browser lalu muat ulang.</li>
							<li>
								Hubungi <a
									href="mailto:support@masjid.id"
									class="underline decoration-gold-400 underline-offset-4 hover:text-brand-700"
									>support@masjid.id</a
								> jika butuh bantuan.
							</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- footer -->
			<div
				class="flex items-center justify-between gap-4 border-t border-slate-200 px-5 py-3 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400"
			>
				<p>&copy; {year} Masjid Digital. Semua hak dilindungi.</p>
				<div class="flex items-center gap-3">
					<a href={page.url.origin} class="hover:text-brand-700 dark:hover:text-brand-300"
						>Beranda</a
					>
					<span aria-hidden="true">•</span>
					<a href="/kebijakan" class="hover:text-brand-700 dark:hover:text-brand-300">Kebijakan</a>
					<span aria-hidden="true">•</span>
					<a href="/status" class="hover:text-brand-700 dark:hover:text-brand-300">Status Layanan</a
					>
				</div>
			</div>
		</div>
	</section>
</main>

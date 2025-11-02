<script lang="ts">
	import { page } from '$app/state';
	import { User } from 'lucide-svelte';

	const listNavigation = [
		{ name: 'Jadwal Salat', href: '/beranda' },
		{ name: 'Donasi', href: '/donasi' },
		{ name: 'Kajian', href: '/kajian' },
		// { name: 'Marketplace', href: '/market' },
		{ name: 'Kontak', href: '/kontak' }
	];
</script>

<header class="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
	<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
		<div class="flex items-center gap-3">
			<div class="grid h-9 w-9 place-content-center rounded-xl bg-brand-600 text-white">
				<!-- mosque icon -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="h-5 w-5"
					><path d="M12 2l2 2 2-2 2 2v2h2v3h-2v11h-4V12H10v8H6V9H4V6h2V4l2-2 2 2 2-2z" /></svg
				>
			</div>
			<div>
				<p class="text-xs text-slate-500">Masjid</p>
				<h1 class="font-semibold text-slate-800">Al-Ikhlas Digital Hub</h1>
			</div>
		</div>
		<nav class="hidden items-center gap-6 text-sm md:flex">
			{#each listNavigation as nav}
				<a
					href={nav.href}
					class={`rounded-xl px-3 py-2 transition-colors duration-150 ${
						page.url.pathname === nav.href
							? 'bg-brand-50 font-semibold text-brand-700 ring-1 ring-brand-200'
							: 'text-slate-800 hover:bg-slate-100'
					}`}>{nav.name}</a
				>
			{/each}
		</nav>
		<div class="flex items-center gap-2">
			<button
				class="hidden items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm hover:bg-slate-100 sm:inline-flex"
			>
				<!-- location icon -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="h-4 w-4"
					><path
						d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 119.5 9 2.5 2.5 0 0112 11.5z"
					/></svg
				>
				<span id="loc">Lampung</span>
			</button>
			<a
				href="/admin/board"
				class="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700"
			>
				<User size={16} />
				Login
			</a>
			<!-- <a
				href="#donasi"
				class="inline-flex items-center gap-2 rounded-xl bg-brand-700 px-4 py-2 text-sm text-white hover:bg-brand-800"
			>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="h-4 w-4"
					><path
						d="M12 21s-7.5-4.35-10-8.5C.5 7.9 3.42 5 6.5 5A5.6 5.6 0 0112 7.09 5.6 5.6 0 0117.5 5C20.58 5 23.5 7.9 22 12.5 19.5 16.65 12 21 12 21z"
					/></svg
				>
				Donasi
			</a> -->
		</div>
	</div>
</header>

<script lang="ts">
	import { Footer } from '$lib/shared';
	import { page } from '$app/state';
	import { MapPin, Menu, Moon, Sun, User, X } from 'lucide-svelte';
	import { goto } from '$app/navigation';

	let sidemenuOpen = $state(false);
	let { data, children } = $props();

	const town = $derived(data.location);

	const listNavigation = [
		{ name: 'Jadwal Salat', href: '/beranda' },
		{ name: 'Donasi', href: '/donasi' },
		{ name: 'Kajian', href: '/kajian' },
		// { name: 'Marketplace', href: '/market' },
		{ name: 'Kontak', href: '/kontak' }
	];

	let loading = $state(false);

	const handleGetLocation = async () => {
		return new Promise((resolve) => {
			navigator.geolocation.getCurrentPosition(
				async (position) => {
					const latitude = position.coords.latitude;
					const longitude = position.coords.longitude;

					// Kirim ke server action
					const response = await fetch('/admin/users?/getLocation', {
						method: 'POST',
						body: new URLSearchParams({
							latitude: String(latitude),
							longitude: String(longitude)
						})
					});

					const result = await response.json();
					resolve(true);
				},
				() => resolve(false)
			);
		});
	};
</script>

<main class="bg-slate-25 text-slate-800">
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
				<label class="swap mr-1 swap-rotate">
					<input type="checkbox" class="hidden" />
					<Sun class="swap-on " size={20} />
					<Moon class="swap-off " size={20} />
				</label>

				<button
					type="button"
					class="hidden cursor-pointer items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm hover:bg-slate-100 sm:inline-flex"
					disabled={loading || town != null}
					onclick={() => {
						loading = true;
						setTimeout(async () => {
							handleGetLocation();
							loading = false;
						}, 300);
						setTimeout(() => {
							location.reload();
						}, 1000);
					}}
				>
					{#if loading}
						<span class="flex items-center gap-2">
							<span class="loading loading-sm loading-spinner"></span>
							<span>Memproses</span>
						</span>
					{:else if town}
						<MapPin size={16} />
						<span>{town}</span>
					{:else}
						<MapPin size={16} />
						<span>Cari lokasi...</span>
					{/if}
				</button>

				<a
					href="/auth/sign-in"
					class="hidden items-center gap-2 rounded-xl bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700 md:inline-flex"
				>
					<User size={16} />
					Login
				</a>
				<!-- for mobile -->
				<button
					class="rounded-xl border border-slate-200 p-2 hover:bg-slate-100 md:hidden"
					onclick={() => (sidemenuOpen = true)}
				>
					<Menu size={24} />
				</button>
			</div>
		</div>
	</header>

	<!-- <slot /> -->
	{@render children()}
	<Footer />
</main>

{#if sidemenuOpen}
	<div
		class="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
		role="button"
		tabindex="0"
		onclick={() => (sidemenuOpen = false)}
		onkeydown={(e) => (e.key === 'Enter' || e.key === ' ' ? (sidemenuOpen = false) : null)}
	></div>

	<!-- side menu -->
	<aside
		class="fixed inset-y-0 right-0 z-50 w-64 space-y-4 bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out"
		style="transform: translateX(0);"
	>
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-2">
				<div class="grid size-9 place-items-center rounded-xl bg-brand-900 font-bold text-white">
					م
				</div>
				<p class="font-semibold">Masjid Digital</p>
			</div>
			<button
				class="cursor-pointer rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
				onclick={() => (sidemenuOpen = false)}
				aria-label="Close menu"
			>
				<X size={24} />
			</button>
		</div>
		<nav class="flex flex-col gap-3">
			{#each listNavigation as nav}
				<button
					onclick={() => {
						sidemenuOpen = false;
						goto(nav.href);
					}}
					class={`rounded-xl px-3 py-2 text-left transition-colors duration-150 ${
						page.url.pathname === nav.href
							? 'bg-brand-50 font-semibold text-brand-700 ring-1 ring-brand-200'
							: 'text-slate-800 hover:bg-slate-100'
					}`}
				>
					{nav.name}
				</button>
			{/each}
			<a
				href="/admin/board"
				class="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700"
			>
				<User size={16} />
				Login
			</a>
		</nav>
	</aside>
{/if}

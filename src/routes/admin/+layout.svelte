<script lang="ts">
	import { page } from '$app/state';
	import { Clock, FileText, LayoutDashboard, Menu, Plus, Users, X } from 'lucide-svelte';

	let { children } = $props();

	let drawerOpen = $state(false);
	let userMenuOpen = $state(false);

	const listSidebar = [
		{
			name: 'Beranda',
			href: '/admin/board',
			icon: LayoutDashboard
		},
		{
			name: 'Jadwal & Kegiatan',
			href: '/admin/schedule',
			icon: Clock
		},
		{
			name: 'Donasi',
			href: '/admin/donations',
			icon: Menu
		},
		{
			name: 'Laporan',
			href: '/admin/reports',
			icon: FileText
		},
		// {
		// 	name: 'Marketplace Halal',
		// 	href: '/admin/marketplace',
		// 	icon: BadgeDollarSign
		// },
		{
			name: 'Manajemen Aset',
			href: '/admin/assets',
			icon: Plus
		},
		{
			name: 'Pengguna',
			href: '/admin/users',
			icon: Users
		}
	];

	const breadcrumbMap: Record<string, { title: string; subtitle: string }> = {
		'/admin/board': { title: 'Dashboard', subtitle: 'Ringkasan aktivitas, donasi, dan program' },
		'/admin/schedule': {
			title: 'Jadwal & Kegiatan',
			subtitle: 'Atur jadwal sholat dan kegiatan masjid'
		},
		'/admin/donations': { title: 'Donasi', subtitle: 'Kelola donasi masuk dan riwayat donasi' },
		'/admin/reports': { title: 'Laporan', subtitle: 'Laporan donasi dan pengeluaran masjid' },
		'/admin/assets': { title: 'Manajemen Aset', subtitle: 'Kelola aset dan inventaris masjid' },
		'/admin/users': { title: 'Pengguna', subtitle: 'Kelola akun takmir dan relawan masjid' }
	};

	const breadcrumb = $derived(breadcrumbMap[page.url.pathname] || breadcrumbMap['/admin/board']);
</script>

<div class="grid min-h-dvh lg:grid-cols-[280px_1fr]">
	<aside
		class="sticky top-0 hidden h-screen border-r border-slate-200 bg-white/90 backdrop-blur lg:block dark:border-slate-800 dark:bg-slate-900/80"
	>
		<div class="flex h-16 items-center gap-2 border-b border-slate-200 px-5 dark:border-slate-800">
			<div class="grid size-9 place-items-center rounded-xl bg-brand-900 font-bold text-white">
				م
			</div>
			<div>
				<p class="font-semibold">Masjid Digital</p>
				<p class="text-xs text-slate-500">Dashboard Takmir</p>
			</div>
		</div>
		<nav class="space-y-1 p-3">
			{#each listSidebar as item}
				<a
					class="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 {page
						.url.pathname === item.href
						? 'bg-brand-50 text-brand-900 dark:bg-slate-800/70'
						: ''}"
					href={item.href}
				>
					<item.icon size={20} />
					{item.name}
				</a>
			{/each}
		</nav>
		<div class="mt-auto p-4 text-xs text-slate-500">v1.0 • © Komunitas</div>
	</aside>

	<!-- Main -->
	<div class="flex flex-col">
		<!-- Topbar -->
		<header
			class="sticky top-0 z-10 flex h-16 items-center gap-3 border-b border-slate-200 bg-white/70 px-4 backdrop-blur lg:px-6 dark:border-slate-800 dark:bg-slate-900/70"
		>
			<button
				class="cursor-pointer rounded-xl p-2 hover:bg-slate-100 lg:hidden dark:hover:bg-slate-800"
				onclick={() => (drawerOpen = true)}
				aria-label="Open menu"
			>
				<Menu size={24} />
			</button>
			<div class="flex-1">
				<h1 class="font-semibold">{breadcrumb.title}</h1>
				<p class="text-xs text-slate-500">{breadcrumb.subtitle}</p>
			</div>
			<div class="hidden items-center gap-2 md:flex">
				<!-- <div class="relative">
					<input
						type="search"
						placeholder="Cari…"
						class="w-56 rounded-xl border border-slate-200 bg-white px-10 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300 md:w-72 dark:border-slate-800 dark:bg-slate-900 dark:focus:ring-brand-700"
					/>
					<svg
						class="absolute top-1/2 left-3 size-5 -translate-y-1/2 text-slate-400"
						viewBox="0 0 24 24"
						fill="none"
						><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" /><path
							d="M20 20l-3-3"
							stroke="currentColor"
							stroke-width="2"
						/></svg
					>
				</div> -->
				<button
					id="btn-theme"
					class="rounded-xl p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
					aria-label="Toggle theme"
				>
					<svg class="block size-6 dark:hidden" viewBox="0 0 24 24" fill="none"
						><path
							d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M3 12h2M19 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
							stroke="currentColor"
							stroke-width="2"
						/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2" /></svg
					>
					<svg class="hidden size-6 dark:block" viewBox="0 0 24 24" fill="none"
						><path
							d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
							stroke="currentColor"
							stroke-width="2"
						/></svg
					>
				</button>
				<button
					class="relative rounded-xl p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
					aria-label="Notifikasi"
				>
					<svg class="size-6" viewBox="0 0 24 24" fill="none"
						><path
							d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2a2 2 0 01-.6 1.4L4 17h5"
							stroke="currentColor"
							stroke-width="2"
						/><path d="M9 17a3 3 0 006 0" stroke="currentColor" stroke-width="2" /></svg
					>
					<span class="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-gold-400"></span>
				</button>
				<div class="relative">
					<button
						class="flex items-center gap-2 rounded-xl py-1.5 pr-3 pl-2 hover:bg-slate-100 dark:hover:bg-slate-800"
						onclick={() => (userMenuOpen = !userMenuOpen)}
						aria-label="User menu"
					>
						<div
							class="grid size-9 place-items-center rounded-xl bg-brand-900 font-semibold text-white"
						>
							TK
						</div>
						<div class="hidden md:block">
							<p class="text-sm leading-tight font-medium">Takmir</p>
							<p class="text-xs text-slate-500">admin@masjid.id</p>
						</div>
						<svg
							class="size-4 text-slate-400 transition-transform {userMenuOpen ? 'rotate-180' : ''}"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M6 9l6 6 6-6"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
							/>
						</svg>
					</button>
					{#if userMenuOpen}
						<div
							class="absolute top-full right-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white p-1 shadow-lg dark:border-slate-800 dark:bg-slate-900"
						>
							<a
								href="/admin/profile"
								class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
							>
								<svg class="size-4" viewBox="0 0 24 24" fill="none">
									<circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2" />
									<path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" stroke-width="2" />
								</svg>
								Profil
							</a>
							<a
								href="/admin/settings"
								class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
							>
								<svg class="size-4" viewBox="0 0 24 24" fill="none">
									<circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" />
									<path
										d="M12 1v6m0 6v6M1 12h6m6 0h6"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
									/>
								</svg>
								Pengaturan
							</a>
							<div class="my-1 h-px bg-slate-200 dark:bg-slate-800"></div>
							<button
								class="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20"
							>
								<svg class="size-4" viewBox="0 0 24 24" fill="none">
									<path
										d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4m7 14l5-5-5-5m5 5H9"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
									/>
								</svg>
								Keluar
							</button>
						</div>
					{/if}
				</div>
			</div>
		</header>

		<!-- Content -->
		{@render children()}

		<!-- Footer -->
		<footer class="px-6 py-4 text-xs text-slate-500">
			Dibangun untuk ekosistem masjid. Transparan. Halal.
		</footer>
	</div>
</div>

<!-- Drawer mobile -->
<div id="drawer" class="fixed inset-0 z-20 {drawerOpen ? 'block' : 'hidden'}" aria-hidden="true">
	<div class="absolute inset-0 bg-black/30" id="backdrop"></div>
	<div
		class="absolute top-0 left-0 h-full w-80 border-r border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
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
				onclick={() => (drawerOpen = false)}
				aria-label="Close menu"
			>
				<X size={24} />
			</button>
		</div>
		<nav class="mt-4 space-y-1">
			{#each listSidebar as item}
				<a
					class="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 {item.name ===
					'Beranda'
						? 'bg-brand-50 text-brand-900 dark:bg-slate-800/70'
						: ''}"
					href={item.href}
				>
					<item.icon size={20} />
					{item.name}
				</a>
			{/each}
		</nav>
	</div>
</div>

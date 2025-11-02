<script lang="ts">
	import { X } from 'lucide-svelte';
	import { writable, derived } from 'svelte/store';

	type EventCategory = 'Pengajian' | 'Sosial' | 'Remaja' | 'Umum';

	interface Event {
		date: string; // 'YYYY-MM-DD'
		time: string; // 'HH:MM'
		title: string;
		cat: EventCategory;
		loc: string;
	}

	let modal = $state(false);

	const monthNames = [
		'Januari',
		'Februari',
		'Maret',
		'April',
		'Mei',
		'Juni',
		'Juli',
		'Agustus',
		'September',
		'Oktober',
		'November',
		'Desember'
	] as const;

	const year = writable(2025);
	const month = writable(10); // November (0-indexed)

	const events = writable<Event[]>([
		{
			date: '2025-11-01',
			time: '19:30',
			title: 'Kajian Magrib',
			cat: 'Pengajian',
			loc: 'Aula Utama'
		},
		{ date: '2025-11-03', time: '08:00', title: 'Bakti Sosial', cat: 'Sosial', loc: 'RW 03' },
		{
			date: '2025-11-05',
			time: '20:00',
			title: 'Tahsin Dewasa',
			cat: 'Pengajian',
			loc: 'Ruang Kelas'
		},
		{
			date: '2025-11-08',
			time: '13:00',
			title: 'Remaja Masjid: Tech Class',
			cat: 'Remaja',
			loc: 'Ruang Multimedia'
		},
		{
			date: '2025-11-12',
			time: '19:30',
			title: 'Maulid & Santunan',
			cat: 'Umum',
			loc: 'Halaman Masjid'
		},
		{ date: '2025-11-15', time: '09:00', title: 'Pelatihan UMKM', cat: 'Umum', loc: 'Aula' },
		{
			date: '2025-11-20',
			time: '19:00',
			title: 'Halaqah Tafsir',
			cat: 'Pengajian',
			loc: 'Serambi'
		},
		{
			date: '2025-11-27',
			time: '07:30',
			title: 'Khitan Massal',
			cat: 'Sosial',
			loc: 'Klinik Mitra'
		}
	]);

	// Utility fungsi format tanggal YYYY-MM-DD
	function fmt(date: Date) {
		return date.toISOString().slice(0, 10);
	}

	// Badge CSS berdasarkan kategori
	function badgeByCat(cat: EventCategory) {
		switch (cat) {
			case 'Pengajian':
				return 'bg-brand-50 text-brand-900';
			case 'Sosial':
				return 'bg-gold-100 text-gold-900';
			case 'Remaja':
				return 'bg-slate-100 dark:bg-slate-800';
			default:
				return 'bg-slate-100 dark:bg-slate-800';
		}
	}

	// Store tanggal dan bulan sekarang
	let selectedDate = writable(fmt(new Date()));

	// Kalkulasi grid kalender setiap ubah tahun/bulan
	const calendarCells = derived([year, month], ([$year, $month]) => {
		const firstDay = new Date($year, $month, 1);
		const lastDay = new Date($year, $month + 1, 0);
		// Senin sebagai hari pertama (0)
		const startDay = (firstDay.getDay() + 6) % 7;
		const daysInPrevMonth = new Date($year, $month, 0).getDate();
		const totalCells = 42;
		const cells = [];

		for (let i = 0; i < totalCells; i++) {
			let dayNum: number;
			let inMonth = true;
			let dateObj: Date;
			if (i < startDay) {
				dayNum = daysInPrevMonth - (startDay - 1 - i);
				inMonth = false;
				dateObj = new Date($year, $month - 1, dayNum);
			} else if (i < startDay + lastDay.getDate()) {
				dayNum = i - startDay + 1;
				dateObj = new Date($year, $month, dayNum);
			} else {
				dayNum = i - (startDay + lastDay.getDate()) + 1;
				inMonth = false;
				dateObj = new Date($year, $month + 1, dayNum);
			}
			cells.push({ dayNum, inMonth, dateISO: fmt(dateObj) });
		}
		return cells;
	});

	// Events pada tanggal yang dipilih
	const eventsOnSelectedDate = derived([events, selectedDate], ([$events, $selectedDate]) =>
		$events.filter((e) => e.date === $selectedDate)
	);

	// Event mendatang: 8 event terdekat dari hari ini dan sesudahnya
	const upcomingEvents = derived(events, ($events) => {
		const now = new Date();
		return $events
			.map((e) => ({ ...e, d: new Date(e.date + 'T' + (e.time || '00:00')) }))
			.filter((e) => e.d >= new Date(now.getFullYear(), now.getMonth(), now.getDate()))
			.sort((a, b) => a.d.getTime() - b.d.getTime())
			.slice(0, 8);
	});

	// Format tampilan tanggal di UI
	function formatDate(iso: string) {
		const [y, m, d] = iso.split('-').map(Number);
		return `${d} ${monthNames[m - 1]} ${y}`;
	}

	// Pengaturan bulan sebelumnya
	function prevMonth() {
		month.update((m) => {
			if (m === 0) {
				year.update((y) => y - 1);
				return 11;
			}
			return m - 1;
		});
	}

	// Pengaturan bulan berikutnya
	function nextMonth() {
		month.update((m) => {
			if (m === 11) {
				year.update((y) => y + 1);
				return 0;
			}
			return m + 1;
		});
	}

	// Seleksi tanggal dari kalender
	function selectDate(dateISO: string) {
		selectedDate.set(dateISO);
		setTimeout(() => {
			document.getElementById('todayList')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}, 100);
	}
</script>

<main class="space-y-6 p-4 lg:p-6">
	<!-- Header dan navigasi bulan -->
	<section
		class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
	>
		<div class="flex flex-wrap items-center gap-3">
			<!-- <div class="inline-flex rounded-xl border border-slate-200 p-0.5 dark:border-slate-800">
				<button class="view-btn rounded-lg bg-slate-100 px-3 py-1.5 text-sm dark:bg-slate-800"
					>Hari</button
				>
				<button class="view-btn rounded-lg px-3 py-1.5 text-sm">Minggu</button>
				<button class="view-btn rounded-lg px-3 py-1.5 text-sm">Bulan</button>
			</div> -->
			<select
				class="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
			>
				<option value="">Semua Kategori</option>
				<option>Pengajian</option>
				<option>Sosial</option>
				<option>Remaja</option>
				<option>Umum</option>
			</select>
			<select
				class="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
			>
				<option value="">Semua Lokasi</option>
				<option>Offline</option>
				<option>Online</option>
			</select>
			<input
				type="date"
				class="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
			/>
			<button class="rounded-xl bg-slate-100 px-3 py-2 text-sm dark:bg-slate-800">Reset</button>
			<div class="ml-auto flex items-center gap-2">
				<button
					onclick={prevMonth}
					class="rounded-xl bg-slate-100 px-3 py-2 text-sm dark:bg-slate-800">Sebelumnya</button
				>
				<div class="text-sm font-medium">{monthNames[$month]} {$year}</div>
				<button
					onclick={nextMonth}
					class="rounded-xl bg-slate-100 px-3 py-2 text-sm dark:bg-slate-800">Berikutnya</button
				>
			</div>
		</div>
	</section>

	<!-- Kalender dan daftar kegiatan mendatang -->
	<section class="grid gap-4 xl:grid-cols-3">
		<div
			class="rounded-2xl border border-slate-200 bg-white p-4 xl:col-span-2 dark:border-slate-800 dark:bg-slate-900"
		>
			<div class="grid grid-cols-7 text-xs font-medium text-slate-500">
				<div class="p-2 text-center">Min</div>
				<div class="p-2 text-center">Sen</div>
				<div class="p-2 text-center">Sel</div>
				<div class="p-2 text-center">Rab</div>
				<div class="p-2 text-center">Kam</div>
				<div class="p-2 text-center">Jum</div>
				<div class="p-2 text-center">Sab</div>
			</div>
			<div class="mt-1 grid grid-cols-7 gap-1 text-sm">
				{#each $calendarCells as { dayNum, inMonth, dateISO }}
					<button
						onclick={() => selectDate(dateISO)}
						class={`group relative h-24 rounded-xl border p-2 text-left align-top
              ${
								inMonth
									? 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'
									: 'border-dashed border-slate-200/60 bg-slate-50/40 dark:border-slate-800/60 dark:bg-slate-950/30'
							}
              hover:ring-2 hover:ring-brand-300 dark:hover:ring-brand-700`}
					>
						<div class="flex items-center justify-between">
							<span class={`text-xs ${inMonth ? '' : 'text-slate-400'}`}>{dayNum}</span>
							{#if dateISO === $selectedDate}
								<span
									class="inline-flex size-5 items-center justify-center rounded-full bg-brand-600 text-[10px] text-white"
									>Now</span
								>
							{/if}
						</div>
						<div class="mt-1 space-y-1 overflow-hidden">
							{#each $events.filter((e) => e.date === dateISO).slice(0, 3) as e}
								<div class={`truncate rounded-lg px-2 py-1 text-[11px] ${badgeByCat(e.cat)}`}>
									{e.time} &bull; {e.title}
								</div>
							{/each}
							{#if $events.filter((e) => e.date === dateISO).length > 3}
								<div class="text-[10px] text-slate-500">
									+{$events.filter((e) => e.date === dateISO).length - 3} lainnya
								</div>
							{/if}
						</div>
					</button>
				{/each}
			</div>
			<p class="mt-3 text-xs text-slate-500">Kliktanggal untuk melihat kegiatan.</p>
		</div>

		<div
			class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
		>
			<div class="flex items-center justify-between">
				<p class="font-medium">KegiatanMendatang</p>
				<button class="rounded-lg bg-slate-100 px-3 py-1.5 text-sm dark:bg-slate-800"
					>LihatSemua</button
				>
			</div>
			<ol class="thin-scrollbar mt-4 max-h-[28rem] space-y-4 overflow-auto text-sm">
				{#each $upcomingEvents as event}
					<li class="flex gap-3">
						<span class={`grid size-9 place-items-center rounded-xl ${badgeByCat(event.cat)}`}>
							{event.time.split(':')[0]}<span class="text-[10px]">:{event.time.split(':')[1]}</span>
						</span>
						<div>
							<p class="font-medium">{event.title}</p>
							<p class="text-slate-500">{event.cat} &bull; {event.loc}</p>
							<p class="text-xs text-slate-500">{formatDate(event.date)}</p>
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</section>

	<!-- Agenda hari ini dan pengingat -->
	<section class="grid gap-4 lg:grid-cols-3">
		<div
			class="rounded-2xl border border-slate-200 bg-white lg:col-span-2 dark:border-slate-800 dark:bg-slate-900"
		>
			<div
				class="flex items-center justify-between border-b border-slate-200 p-4 dark:border-slate-800"
			>
				<p class="font-medium">Agenda Hari Ini</p>
				<span class="rounded-lg bg-brand-50 px-2 py-1 text-xs text-brand-900"
					>{$eventsOnSelectedDate.length} kegiatan</span
				>
			</div>
			<div id="todayList" class="space-y-3 p-4 text-sm">
				{#if $eventsOnSelectedDate.length === 0}
					<p class="text-slate-500">Tidakada kegiatan hari ini.</p>
				{:else}
					{#each $eventsOnSelectedDate as e}
						<div
							class="flex items-start gap-3 rounded-xl border border-slate-200 p-3 dark:border-slate-800"
						>
							<div class={`grid size-9 place-items-center rounded-xl ${badgeByCat(e.cat)}`}>
								{e.time.split(':')[0]}<span class="text-[10px]">:{e.time.split(':')[1]}</span>
							</div>
							<div class="flex-1">
								<p class="font-medium">{e.title}</p>
								<p class="text-xs text-slate-500">{e.cat} &bull; {e.loc}</p>
							</div>
							<button
								onclick={() => (modal = true)}
								class="rounded-lg bg-slate-100 px-2 py-1 text-xs dark:bg-slate-800">Detail</button
							>
						</div>
					{/each}
				{/if}
			</div>
		</div>

		<div
			class="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
		>
			<p class="font-medium">Pengingat Shalat</p>
			<div class="grid grid-cols-3 gap-2 text-center">
				<div class="rounded-xl border border-slate-200 p-3 dark:border-slate-800">
					<p class="text-xs text-slate-500">Subuh</p>
					<p class="font-semibold" id="subuh">04:30</p>
				</div>
				<div class="rounded-xl border border-slate-200 p-3 dark:border-slate-800">
					<p class="text-xs text-slate-500">Dzuhur</p>
					<p class="font-semibold" id="dzuhur">11:45</p>
				</div>
				<div class="rounded-xl border border-slate-200 p-3 dark:border-slate-800">
					<p class="text-xs text-slate-500">Ashar</p>
					<p class="font-semibold" id="ashar">15:05</p>
				</div>
				<div class="rounded-xl border border-slate-200 p-3 dark:border-slate-800">
					<p class="text-xs text-slate-500">Maghrib</p>
					<p class="font-semibold" id="maghrib">17:53</p>
				</div>
				<div class="rounded-xl border border-slate-200 p-3 dark:border-slate-800">
					<p class="text-xs text-slate-500">Isya</p>
					<p class="font-semibold" id="isya">19:05</p>
				</div>
				<div class="rounded-xl border border-slate-200 p-3 dark:border-slate-800">
					<p class="text-xs text-slate-500">Jumat</p>
					<p class="font-semibold" id="jumat">12:00</p>
				</div>
			</div>

			<div class="pt-2">
				<p class="font-medium">Aksi Cepat</p>
				<button
					class="mt-2 w-full rounded-xl bg-gold-500 px-4 py-2 text-white hover:bg-gold-600"
					onclick={() => (modal = true)}>Tambah Kegiatan</button
				>
				<button class="mt-2 w-full rounded-xl bg-slate-100 px-4 py-2 dark:bg-slate-800"
					>Export iCal</button
				>
			</div>
		</div>
	</section>
</main>

{#if modal}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
		<div class="w-full max-w-xl rounded-2xl">
			<form
				method="dialog"
				class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
			>
				<div class="flex items-center justify-between">
					<p class="font-medium">Tambah Kegiatan</p>
					<button
						class="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
						onclick={() => (modal = false)}
					>
						<X size={24} />
					</button>
				</div>
				<div class="mt-3 grid gap-3 sm:grid-cols-2">
					<div>
						<label class="text-xs text-slate-500">Judul</label>
						<input
							class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-800 dark:bg-slate-900"
							placeholder="Pengajian Malam Sabtu"
						/>
					</div>
					<div>
						<label class="text-xs text-slate-500">Kategori</label>
						<select
							class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-800 dark:bg-slate-900"
						>
							<option>Pengajian</option><option>Sosial</option><option>Remaja</option><option
								>Umum</option
							>
						</select>
					</div>
					<div>
						<label class="text-xs text-slate-500">Tanggal</label>
						<input
							type="date"
							class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-800 dark:bg-slate-900"
						/>
					</div>
					<div class="grid grid-cols-2 gap-2">
						<div>
							<label class="text-xs text-slate-500">Mulai</label>
							<input
								type="time"
								class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-800 dark:bg-slate-900"
							/>
						</div>
						<div>
							<label class="text-xs text-slate-500">Selesai</label>
							<input
								type="time"
								class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-800 dark:bg-slate-900"
							/>
						</div>
					</div>
					<div>
						<label class="text-xs text-slate-500">Lokasi</label>
						<input
							class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-800 dark:bg-slate-900"
							placeholder="Aula Utama / Zoom"
						/>
					</div>
					<div>
						<label class="text-xs text-slate-500">Pemateri/Koordinator</label>
						<input
							class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-800 dark:bg-slate-900"
							placeholder="Ust. Ahmad / Tim Sosial"
						/>
					</div>
					<div class="sm:col-span-2">
						<label class="text-xs text-slate-500">Deskripsi</label>
						<textarea
							class="mt-1 h-24 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-800 dark:bg-slate-900"
							placeholder="Ringkasan materi atau kebutuhan acara"
						></textarea>
					</div>
				</div>
				<div class="mt-4 flex justify-end gap-2">
					<button
						class="rounded-xl bg-slate-100 px-3 py-2 dark:bg-slate-800"
						onclick={() => (modal = false)}>Batal</button
					>
					<button class="rounded-xl bg-brand-600 px-3 py-2 text-white">Simpan</button>
				</div>
			</form>
		</div>
	</div>
{/if}

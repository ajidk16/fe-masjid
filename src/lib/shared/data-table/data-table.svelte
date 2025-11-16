<script lang="ts">
	import { goto } from '$app/navigation';
	import { cn } from '$lib/utils/cn.js';
	let { columns, data } = $props();
</script>

<main class="space-y-5 px-4 pt-6">
	<!-- <section class="flex items-center justify-between">
		<h1 class="text-2xl font-semibold">Manajemen Pengguna</h1>
		<button class="btn rounded-xl btn-sm btn-primary"> Tambah Pengguna </button>
	</section> -->

	<section class="card">
		<div
			class="flex items-center justify-between border-b border-slate-200 p-4 dark:border-slate-800"
		>
			<p class="font-medium">Daftar Pengguna</p>
			<div class="text-sm text-slate-500">
				Total: <span id="totalCount">{1}</span>
			</div>
		</div>

		<div class="thin overflow-x-auto">
			<table class="w-full text-sm">
				<thead class="bg-slate-50 text-left dark:bg-slate-950/40">
					<tr class="text-slate-600">
						{#each columns as column}
							<th class={cn('p-3', column.class)}>{@html column.name}</th>
						{/each}
					</tr>
				</thead>
				<tbody id="tbody">
					<tr class="border-t border-slate-100 dark:border-slate-800">
						{#each data as item}
							<td class={cn('p-3', item.class)}>{@html item.value}</td>
						{/each}
					</tr>
				</tbody>
			</table>
		</div>

		<!-- Pagination -->
		<div class="flex flex-col gap-3 p-3 sm:flex-row sm:items-center sm:justify-between">
			<div class="text-xs text-slate-500">Menampilkan 1 – 10 dari 100</div>

			<div class="flex items-center gap-2">
				<button
					class={cn(
						'rounded-lg px-3 py-1.5 text-sm text-white',
						true
							? 'cursor-not-allowed bg-slate-400'
							: 'cursor-pointer bg-brand-600 hover:bg-brand-700'
					)}
					disabled={true}
					onclick={() => goto(`/admin/users?page=${1}`)}
				>
					Sebelumnya
				</button>
				<button
					class={cn(
						'rounded-lg px-3 py-1.5 text-sm text-white',
						false
							? 'cursor-not-allowed bg-slate-400'
							: 'cursor-pointer bg-brand-600 hover:bg-brand-700'
					)}
					disabled={false}
					onclick={() => goto(`/admin/users?page=${2}`)}
				>
					Berikutnya
				</button>
			</div>
		</div>
	</section>
</main>

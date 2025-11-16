<script lang="ts">
	import { goto } from '$app/navigation';
	import { cn } from '$lib/utils/cn.js';
	import { formatDateTime } from '$lib/utils/format.js';
	import { SquarePen, Trash2 } from 'lucide-svelte';

	let { members, roles } = $props();

	// Mapping code role ke class badge
	const badgeClasses = [
		'badge-primary',
		'badge-info',
		'badge-accent',
		'badge-success',
		'badge-warning',
		'badge-error'
	];

	const roleBadgeMap = new Map<string, string>(
		roles.data.map((role: { code: string }, index: number) => [
			role.code,
			badgeClasses[index % badgeClasses.length]
		])
	);

	function getBadgeClass(roleCode: string) {
		return cn('badge badge-sm', roleBadgeMap.get(roleCode) ?? 'badge-neutral');
	}
</script>

<main class="space-y-5">
	<!-- Your filter and button sections above -->

	<section class="card">
		<div
			class="flex items-center justify-between border-b border-slate-200 p-4 dark:border-slate-800"
		>
			<p class="font-medium">Daftar Pengguna</p>
			<div class="text-sm text-slate-500">
				Total: <span id="totalCount">{members?.pagination?.total}</span>
			</div>
		</div>

		<div class="thin overflow-x-auto">
			<table class="w-full text-sm">
				<thead class="bg-slate-50 text-left dark:bg-slate-950/40">
					<tr class="text-slate-600">
						<th class="w-10 p-3"><input id="checkAll" type="checkbox" class="size-4" /></th>
						<th class="p-3">Pengguna</th>
						<th class="p-3">Email</th>
						<th class="p-3">Peran</th>
						<th class="p-3">Status</th>
						<th class="p-3">Terakhir Masuk</th>
						<th class="p-3 text-right">Aksi</th>
					</tr>
				</thead>
				<tbody id="tbody">
					{#each members.data as member}
						<tr class="border-t border-slate-100 dark:border-slate-800">
							<td class="p-3 text-center"><input type="checkbox" class="rowcheck size-4" /></td>
							<td class="p-3">
								<div class="flex items-center gap-3">
									<div
										class="grid size-9 place-items-center rounded-xl bg-brand-900 text-xs text-white"
									>
										{member.fullName.toUpperCase().slice(0, 2)}
									</div>
									<div>
										<p class="font-medium capitalize">{member.fullName}</p>
										<p class="text-xs text-slate-500">Takmir</p>
									</div>
								</div>
							</td>
							<td class="p-3">{member.user.email}</td>
							<td class="p-3">
								{#if member.role?.code}
									<div class={getBadgeClass(member.role.code)}>
										{member.role.code}
									</div>
								{:else}
									<div class="badge badge-sm badge-neutral">Unknown</div>
								{/if}
							</td>
							<td class="p-3">
								{#if member.user.verifiedEmail}
									<div class="badge badge-sm badge-success">Aktif</div>
								{:else}
									<div class="badge badge-sm badge-secondary">Tidak Aktif</div>
								{/if}
							</td>
							<td class="p-3">{formatDateTime(member.user.createdAt)}</td>
							<td class="p-3">
								<div class="flex justify-end gap-2">
									<button class="btn btn-circle">
										<SquarePen size={16} />
									</button>
									<button class="btn btn-circle btn-error">
										<Trash2 size={16} />
									</button>
								</div>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<!-- Pagination -->
		<div class="flex flex-col gap-3 p-3 sm:flex-row sm:items-center sm:justify-between">
			<div class="text-xs text-slate-500">
				Menampilkan {members?.pagination?.page}–{members?.pagination?.limit} dari {members
					?.pagination?.total}
			</div>
			{#if members.pagination.total > members.pagination.limit}
				<div class="flex items-center gap-2">
					<button
						class={cn(
							'rounded-lg px-3 py-1.5 text-sm text-white',
							members.pagination.page === 1
								? 'cursor-not-allowed bg-slate-400'
								: 'cursor-pointer bg-brand-600 hover:bg-brand-700'
						)}
						disabled={members.pagination.page === 1}
						onclick={() => goto(`/admin/users?page=${members.pagination.page - 1}`)}
					>
						Sebelumnya
					</button>
					<button
						class={cn(
							'rounded-lg px-3 py-1.5 text-sm text-white',
							members.pagination.page === members.pagination.totalPages
								? 'cursor-not-allowed bg-slate-400'
								: 'cursor-pointer bg-brand-600 hover:bg-brand-700'
						)}
						disabled={members.pagination.page === members.pagination.totalPages}
						onclick={() => goto(`/admin/users?page=${members.pagination.page + 1}`)}
					>
						Berikutnya
					</button>
				</div>
			{/if}
		</div>
	</section>
</main>

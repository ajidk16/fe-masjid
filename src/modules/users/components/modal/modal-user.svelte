<script lang="ts">
	import { X } from 'lucide-svelte';

	export let modalUser = false;
	export let roles;
</script>

{#if modalUser}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
		<div class="w-full max-w-xl rounded-2xl">
			<div class="absolute inset-0 bg-black/40"></div>
			<div
				class="relative rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
			>
				<div class="flex items-center justify-between">
					<p id="user-title" class="font-medium">Tambah Pengguna</p>
					<button
						onclick={() => (modalUser = false)}
						class="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
					>
						<X size={24} />
					</button>
				</div>
				<div class="mt-3 grid gap-3 md:grid-cols-2">
					<div>
						<label for="f-name" class="text-xs text-slate-500">Nama</label>
						<input
							id="f-name"
							name="fullName"
							placeholder="Masukkan nama lengkap"
							class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:focus:ring-brand-700"
						/>
					</div>
					<div>
						<label for="f-email" class="text-xs text-slate-500">Email</label>
						<input
							id="f-email"
							type="email"
							name="email"
							placeholder="Masukkan email pengguna"
							class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 dark:border-slate-800 dark:bg-slate-900"
						/>
					</div>
					<div>
						<label for="f-phone" class="text-xs text-slate-500">Telepon</label>
						<input
							id="f-phone"
							name="phone"
							placeholder="Masukkan nomor telepon"
							class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 dark:border-slate-800 dark:bg-slate-900"
						/>
					</div>
					<!-- <div>
						<label for="f-status" class="text-xs text-slate-500">Status</label>
						<select
							id="f-status"
							class="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-800 dark:bg-slate-900"
						>
							<option>Aktif</option>
							<option>Nonaktif</option>
							<option>Menunggu</option>
						</select>
					</div> -->
					<div class="md:col-span-2">
						<label for="to" class="text-xs text-slate-500">Peran</label>
						<div class="mt-1 flex flex-wrap gap-2">
							{#each roles.data as role}
								<button
									class="role-chip cursor-pointer rounded-xl bg-slate-100 px-3 py-1.5 text-sm capitalize dark:bg-slate-800"
									data-role={role.code}>{role.code}</button
								>
							{/each}
						</div>
						<div id="selected-roles" class="mt-2 flex flex-wrap gap-2 text-sm"></div>
					</div>
				</div>
				<div class="mt-4 flex justify-end gap-2">
					<button
						onclick={() => (modalUser = false)}
						class="rounded-xl bg-slate-100 px-3 py-2 dark:bg-slate-800">Batal</button
					>
					<button class="rounded-xl bg-brand-600 px-3 py-2 text-white">Simpan</button>
				</div>
			</div>
		</div>
	</div>
{/if}

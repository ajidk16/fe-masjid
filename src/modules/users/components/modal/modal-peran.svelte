<script lang="ts">
	import Modal from '$lib/shared/modal/modal.svelte';

	let { isOpen, onClose, data = undefined } = $props();

	function closeDrawer() {
		if (onClose) onClose();
	}

	const selectedRoles = $derived(data);
</script>

{#if isOpen}
	<Modal
		{isOpen}
		onClose={closeDrawer}
		title={selectedRoles?.id ? 'Perbarui Peran' : 'Buat Peran'}
		action={selectedRoles?.id ? '?/updateRole' : '?/createRole'}
	>
		<input type="hidden" name="id" value={selectedRoles?.id} />
		<div>
			<label for="code">Kode</label>
			<input
				id="code"
				name="code"
				type="text"
				placeholder="Masukkan kode unik peran"
				bind:value={selectedRoles.code}
				class="my-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
			/>
		</div>
		<div>
			<label for="label">Label</label>
			<input
				id="label"
				name="label"
				type="text"
				placeholder="Masukkan label peran"
				bind:value={selectedRoles.label}
				class="my-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
			/>
		</div>
		<div>
			<label for="description">Deskripsi</label>
			<textarea
				id="description"
				name="description"
				placeholder="Masukkan deskripsi peran"
				bind:value={selectedRoles.description}
				class="my-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
			></textarea>
		</div>
	</Modal>
{/if}

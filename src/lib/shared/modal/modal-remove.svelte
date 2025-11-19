<script lang="ts">
	import { enhance } from '$app/forms';
	import { cn } from '$lib/utils/cn';
	import { CircleAlert } from 'lucide-svelte';

	let { isOpen, onClose, action, item, data = undefined } = $props();

	const selectedRoles = $derived(data);
	const closeModal = () => {
		if (onClose) onClose();
	};

	let loading = $state(false);
	let showToast = $state(false);

	$effect(() => {
		if (showToast) {
			setTimeout(() => {
				showToast = false;
				closeModal();
			}, 3000);
		}
	});
</script>

{#if isOpen}
	<div
		class={cn(
			'fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4',
			showToast && 'hidden'
		)}
		onclick={closeModal}
		onkeydown={(e) => e.key === 'Escape' && closeModal()}
		role="button"
		tabindex="-1"
	>
		<div
			class="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => e.stopPropagation()}
			role="dialog"
			tabindex="0"
		>
			<div class="flex items-center gap-3 border-b px-5 py-4">
				<div class="grid h-9 w-9 place-items-center rounded-full bg-red-50 text-red-600">
					<CircleAlert size={24} />
				</div>
				<h2 id="modalTitle" class="text-lg font-semibold text-slate-900 capitalize">
					Hapus {item}?
				</h2>
			</div>

			<div class="space-y-3 px-5 py-4">
				<p id="modalDesc" class="text-sm text-slate-600">
					Tindakan ini bersifat permanen dan tidak dapat dibatalkan.
				</p>

				<div class="rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-700">
					<div class="flex items-center justify-between">
						<span>Nama item</span>
						<span class="font-medium">"{item}"</span>
					</div>
				</div>
			</div>

			<div class="flex items-center justify-end gap-3 border-t px-5 py-4">
				<form
					method="POST"
					{action}
					class="modal-action mt-6"
					use:enhance={() => {
						loading = true;
						setTimeout(() => {
							loading = false;
							showToast = true;
						}, 500);
					}}
				>
					<button
						type="button"
						onclick={() => closeModal()}
						class="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
					>
						Batal
					</button>

					<input type="hidden" name="id" value={selectedRoles?.id} />
					<button
						type="submit"
						class="inline-flex items-center justify-center rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-red-700"
						disabled={loading}
					>
						{#if loading}
							<span class="flex items-center gap-2">
								<span class="loading loading-sm loading-spinner"></span>
								<span>Memproses</span>
							</span>
						{:else}
							Hapus
						{/if}
					</button>
				</form>
			</div>
		</div>
	</div>
{/if}

{#if showToast}
	<div class="toast toast-end toast-top z-50 animate-bounce">
		<div class="alert alert-success">
			<span>Berhasil menghapus</span>
			<span class="font-bold"> {selectedRoles.label}.</span>
		</div>
	</div>
{/if}

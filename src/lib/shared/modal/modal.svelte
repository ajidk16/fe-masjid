<script lang="ts">
	import { enhance } from '$app/forms';
	import { resultStore, setResult } from '$lib/store/form-result';
	import { cn } from '$lib/utils/cn';
	import { X } from 'lucide-svelte';

	let { isOpen, onClose, height = false, title, action = undefined, children } = $props();

	function closeModal() {
		if (onClose) onClose();
	}

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
	>
		<div class="absolute inset-0 bg-black/40"></div>
		<form
			class="w-full max-w-xl rounded-2xl"
			method="POST"
			use:enhance={() => {
				loading = true;

				return async ({ result, update }) => {
					if (result.status == 400) {
						setResult(result);
						setTimeout(() => {
							loading = false;
						}, 500);
					} else {
						setTimeout(() => {
							loading = false;
							showToast = true;
						}, 500);
					}
					await update();
				};
			}}
			{action}
		>
			<div
				class="relative rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
			>
				<div class="flex items-center justify-between">
					<p class="font-medium capitalize">{title}</p>
					<button
						type="button"
						onclick={() => closeModal()}
						class="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
					>
						<X size={24} />
					</button>
				</div>

				<div
					class={cn(
						'thin-scrollbar mt-3  space-y-3 overflow-x-auto overflow-y-auto px-0.5',
						height && 'h-[70svh]'
					)}
				>
					{@render children()}
				</div>

				<div class="mt-4 flex justify-end gap-2">
					<button
						type="button"
						onclick={() => closeModal()}
						class="rounded-xl bg-slate-100 px-3 py-2 dark:bg-slate-800">Tutup</button
					>
					<button
						type="submit"
						class="rounded-xl bg-brand-600 px-3 py-2 text-white disabled:opacity-50"
						disabled={loading}
					>
						{#if loading}
							<span class="flex items-center gap-2">
								<span class="loading loading-sm loading-spinner"></span>
								<span>Memproses</span>
							</span>
						{:else}
							<span>Simpan</span>
						{/if}
					</button>
				</div>
			</div>
		</form>
	</div>
{/if}

{#if showToast}
	<div class="toast toast-end toast-top z-50 animate-bounce">
		<div class="alert alert-success">
			<span>Data Berhasil Disimpan</span>
		</div>
	</div>
{/if}

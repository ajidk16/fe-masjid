<script lang="ts">
	import { enhance } from '$app/forms';
	import { cn } from '$lib/utils/cn';
	import { Loader, X } from 'lucide-svelte';

	let {
		isOpen,
		onClose,
		height = false,
		title,
		action = undefined,
		children = undefined
	} = $props();

	function closeDrawer() {
		if (onClose) onClose();
	}

	let loading = $state(false);
</script>

{#if isOpen}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
		<form
			class="w-full max-w-xl rounded-2xl"
			method="POST"
			use:enhance={() => {
				loading = true;

				setTimeout(() => {
					loading = false;
					closeDrawer();
				}, 500);
			}}
			{action}
		>
			<div class="absolute inset-0 bg-black/40"></div>
			<div
				class="relative rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
			>
				<div class="flex items-center justify-between">
					<p class="font-medium capitalize">{title}</p>
					<button
						onclick={() => closeDrawer()}
						class="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
					>
						<X size={24} />
					</button>
				</div>

				<div
					class={cn(
						'"thin-scrollbar px-0.5" mt-3  space-y-3 overflow-x-auto px-0.5 overflow-y-auto',
						height && 'h-[70svh]'
					)}
				>
					{@render children()}
				</div>

				<div class="mt-4 flex justify-end gap-2">
					<button
						onclick={() => closeDrawer()}
						class="rounded-xl bg-slate-100 px-3 py-2 dark:bg-slate-800">Tutup</button
					>
					<button
						type="submit"
						class="rounded-xl bg-brand-600 px-3 py-2 text-white disabled:opacity-50"
						disabled={loading}
					>
						{#if loading}
							<span class="flex items-center gap-2">
								<Loader size={16} class="animate-spin" />
								<span>Menyimpan...</span>
							</span>
						{:else}
							Simpan
						{/if}
					</button>
				</div>
			</div>
		</form>
	</div>
{/if}

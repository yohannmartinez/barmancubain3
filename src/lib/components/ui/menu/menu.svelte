<script>
	import { isMenuOpen } from '$lib/stores/menu';
	import { fade, scale, slide } from 'svelte/transition';
	import IconX from '~icons/tabler/x';
	import IconHome from '~icons/tabler/building-pavilion';
	import IconServices from '~icons/tabler/glass-cocktail';
	import IconStar from '~icons/tabler/star';
	import IconContact from '~icons/tabler/message-circle';
</script>

{#if $isMenuOpen}
	<button
		transition:fade={{ duration: 200 }}
		class="fixed left-0 top-0 h-screen w-screen bg-slate-800 bg-opacity-50 p-6 backdrop-blur-sm"
		on:click={() => isMenuOpen.set(false)}
		aria-label="Fermer le menu"
	>
	</button>
{/if}

{#if $isMenuOpen}
	<div
		transition:scale={{ start: 0.8, duration: 300 }}
		class="absolute bottom-2 left-1/2 flex w-full max-w-80 -translate-x-1/2 flex-col items-center justify-center rounded-3xl border bg-white p-4 shadow-2xl"
	>
		<button class="mb-3 w-full rounded-2xl border border-gray-200 p-2">
			<div class="flex items-center">
				<div class="mr-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-black">
					<IconHome class="text-white" />
				</div>
				<div class="text-sm font-semibold">Accueil</div>
			</div>
		</button>

		<button class="mb-3 w-full rounded-2xl border border-gray-200 p-2">
			<div class="flex items-center">
				<div class="mr-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-black">
					<IconServices class="text-white" />
				</div>
				<div class="text-sm font-semibold">Préstations</div>
			</div>
		</button>

		<button class="mb-3 w-full rounded-2xl border border-gray-200 p-2">
			<div class="flex items-center">
				<div class="mr-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-black">
					<IconContact class="text-white" />
				</div>
				<div class="text-sm font-semibold">Contacts</div>
			</div>
		</button>

		<button class="mb-3 w-full rounded-2xl border border-gray-200 p-2">
			<div class="flex items-center">
				<div class="mr-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-black">
					<IconStar class="text-white" />
				</div>
				<div class="text-sm font-semibold">Avis</div>
			</div>
		</button>

		<button
			class="mt-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-200"
			on:click={() => isMenuOpen.set(false)}><IconX /></button
		>
	</div>
{/if}

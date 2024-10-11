<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { windowSize } from '$lib/stores/page';
	import { onDestroy } from 'svelte';

	let width: number;

	const unsubscribe = windowSize.subscribe((value) => {
		width = value.width;
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<div class="relative mx-[35px] flex w-[calc(100vw-70px)] border-x border-b px-4">
	<div class="flex w-full flex-col md:flex-row md:gap-8">
		<div class="top-0 my-20 flex h-screen w-full flex-1 items-center justify-center md:sticky">
			<div class="flex flex-col items-center md:items-start">
				<h1
					class=" text-center text-4xl font-semibold tracking-tighter sm:text-4xl md:text-left lg:text-5xl"
				>
					On fait les choses{#if width > 712}<br />{/if} avec coeur
				</h1>
				<p class="my-4 max-w-80 text-center text-sm tracking-tight md:text-left md:text-lg">
					Chez Barman Cubain la qualité de vos évènements est notre priorité
				</p>
				<Button class="sm:text-md w-min rounded-xl py-6 pr-6"
					><span class="pulse"></span>Réserver une prestation</Button
				>
			</div>
		</div>

		<div class="flex-1 pb-20 pt-2 md:pt-40">
			<div
				class="mb-10 rounded-3xl border p-2 shadow-[0_30px_56px_-18px_#17161f1f,_0_18px_32px_-24px_#0000000d] md:mb-20 lg:mx-10"
			>
				<div class="h-60 w-full rounded-2xl border border-dotted bg-gray-100 md:h-80"></div>
				<div class="m-6">
					<h2 class=" text-2xl font-semibold tracking-tighter sm:text-2xl lg:text-2xl">Mariage</h2>
					<p class="md:text-md mt-1 max-w-80 text-sm tracking-tight">
						Organisez vous un mariage de qualité à nos côtés, vous allez kiffer
					</p>
				</div>
			</div>

			<div
				class="mb-10 rounded-3xl border p-2 shadow-[0_30px_56px_-18px_#17161f1f,_0_18px_32px_-24px_#0000000d] md:mb-20 lg:mx-10"
			>
				<div class="h-60 w-full rounded-2xl border border-dotted bg-gray-100 md:h-80"></div>
				<div class="m-6">
					<h2 class=" text-2xl font-semibold tracking-tighter sm:text-2xl lg:text-2xl">
						Particulier
					</h2>
					<p class="md:text-md mt-1 max-w-80 text-sm tracking-tight">
						Organisez vous un mariage de qualité à nos côtés, vous allez kiffer
					</p>
				</div>
			</div>

			<div
				class="mb-10 rounded-3xl border p-2 shadow-[0_30px_56px_-18px_#17161f1f,_0_18px_32px_-24px_#0000000d] md:mb-20 lg:mx-10"
			>
				<div class="h-60 w-full rounded-2xl border border-dotted bg-gray-100 md:h-80"></div>
				<div class="m-6">
					<h2 class=" text-2xl font-semibold tracking-tighter sm:text-2xl lg:text-2xl">
						Fête d'entreprise
					</h2>
					<p class="md:text-md mt-1 max-w-80 text-sm tracking-tight">
						Organisez vous un mariage de qualité à nos côtés, vous allez kiffer
					</p>
				</div>
			</div>

			<div
				class="mb-10 rounded-3xl border p-2 shadow-[0_30px_56px_-18px_#17161f1f,_0_18px_32px_-24px_#0000000d] md:mb-20 lg:mx-10"
			>
				<div class="h-60 w-full rounded-2xl border border-dotted bg-gray-100 md:h-80"></div>
				<div class="m-6">
					<h2 class=" text-2xl font-semibold tracking-tighter sm:text-2xl lg:text-2xl">
						Séminaire
					</h2>
					<p class="md:text-md mt-1 max-w-80 text-sm tracking-tight">
						Organisez vous un mariage de qualité à nos côtés, vous allez kiffer
					</p>
				</div>
			</div>

			<div
				class="mb-10 rounded-3xl border p-2 shadow-[0_30px_56px_-18px_#17161f1f,_0_18px_32px_-24px_#0000000d] md:mb-20 lg:mx-10"
			>
				<div class="h-60 w-full rounded-2xl border border-dotted bg-gray-100 md:h-80"></div>
				<div class="m-6">
					<h2 class=" text-2xl font-semibold tracking-tighter sm:text-2xl lg:text-2xl">Atelier</h2>
					<p class="md:text-md mt-1 max-w-80 text-sm tracking-tight">
						Organisez vous un mariage de qualité à nos côtés, vous allez kiffer
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

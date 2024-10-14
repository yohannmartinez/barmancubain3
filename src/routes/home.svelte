<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import IconArrow from '~icons/tabler/arrow-narrow-right';
	import IconStar from '~icons/tabler/north-star';
	import { isBookFormOpened } from '$lib/stores/book';
	import { scrollToElement } from '$lib/utils';

	const words = ['mariage 💍', 'anniversaire 🎂', 'séminaire 🎉'];
	let wordIndex = 0;
	let interval: number;

	function updateWordIndex() {
		wordIndex = wordIndex === words.length - 1 ? 0 : wordIndex + 1;
	}

	onMount(() => {
		interval = setInterval(updateWordIndex, 3000);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div
	class="relative mx-[14px] flex w-[calc(100vw-28px)] border-x border-b px-4 sm:mx-[35px] sm:w-[calc(100vw-70px)]"
>
	<div class="flex w-full flex-col items-center justify-center py-20">
		<button
			class="mb-4 flex items-center rounded-xl bg-gray-100 p-[3px] text-sm"
			on:click={() => isBookFormOpened.set(true)}
		>
			<div class="hidden rounded-lg bg-black px-2 py-1 text-white sm:block">Nouveau</div>
			<span class="ml-4 mr-2 font-medium tracking-tight">Barman Cubain lance les ateliers</span>
			<IconArrow class="mr-2" />
		</button>

		<h1
			class=" text-center text-4xl font-semibold tracking-tighter md:text-6xl lg:text-8xl lg:leading-[6.5rem]"
		>
			<span>Fêtez avec nous<br />votre {words[wordIndex]}</span>
		</h1>

		<p class="my-5 text-center text-sm tracking-tight sm:max-w-md md:my-8 md:max-w-lg md:text-lg">
			Besoin d'un barman à domicile ? L'équipe de Barman Cubain s'occupe de votre évènement de A à Z
		</p>

		<div class="flex gap-4">
			<Button class="sm:text-md rounded-xl p-6" on:click={() => isBookFormOpened.set(true)}
				>✨ Réserver une prestation</Button
			>
			<Button
				class="sm:text-md hidden rounded-xl p-6 sm:flex"
				variant="outline"
				on:click={() => scrollToElement('services')}>🍹 Consulter nos prestations</Button
			>
		</div>
	</div>
	<IconStar class="absolute bottom-0 left-0 z-10 translate-x-[-50%] translate-y-[50%]" />
	<IconStar class="absolute bottom-0 right-0 z-10 translate-x-[50%] translate-y-[50%]" />
</div>

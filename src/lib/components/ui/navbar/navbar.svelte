<script lang="ts">
	import { isBookFormOpened } from '$lib/stores/book';
	import { scrollToElement } from '$lib/utils';
	import Button from '../button/button.svelte';
</script>

<div
	class="mx-[14px] flex w-[calc(100vw-28px)] items-center justify-between border-x border-b px-5 py-6 sm:mx-[35px] sm:w-[calc(100vw-70px)] sm:px-14"
>
	<div class="flex">
		<button class="text-xl font-bold tracking-tighter">BarmanCubain</button>
		<button class="ml-8 hidden tracking-tight md:block" on:click={() => scrollToElement('services')}
			>Prestations</button
		>
		<button class="ml-8 hidden tracking-tight md:block" on:click={() => scrollToElement('reviews')}
			>Avis</button
		>
		<button
			class="ml-8 hidden tracking-tight md:block"
			on:click={() => scrollToElement('questions')}>Questions</button
		>
	</div>
	<div class="flex">
		<div class="ml-5 mr-8 flex hidden items-center justify-center tracking-tight md:flex">
			<div class="pulse"></div>
			Disponible
		</div>
		<Button
			on:click={() => {
				isBookFormOpened.set(true);
			}}>Réserver</Button
		>
	</div>
</div>

<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { isBookFormOpened } from '$lib/stores/book';
</script>

<div
	class="w-full overflow-hidden rounded-3xl bg-[url('https://cocktailixir.com/wp-content/uploads/2023/07/choisir-atelier-cocktail-paris-evenement-prive-1.jpg')] bg-cover bg-center"
>
	<div class="bg-[linear-gradient(180deg,#0a0a0a_3%,#181a1d00_10%,#181a1d00_89%,#0a0a0a_97%);]">
		<div
			class="sm:py-30 flex w-full flex-col items-center justify-center bg-[radial-gradient(circle_farthest-corner_at_50%_50%,#0a0a0a_15%,#0a0a0a80)] px-10 py-24 md:py-40"
		>
			<h1
				class="text-center text-4xl font-semibold tracking-tighter text-white sm:text-4xl md:text-left lg:text-5xl"
			>
				Un partenaire de confiance
			</h1>
			<p
				class="my-5 text-center text-sm tracking-tight text-white sm:max-w-md md:my-8 md:max-w-lg md:text-lg"
			>
				Prenez rendez-vous avec nous pour une dégustation afin de voir de quoi on est capables
			</p>
			<div class="flex gap-4">
				<Button
					class="sm:text-md rounded-xl border border-gray-700 bg-black px-6 py-6"
					on:click={() => isBookFormOpened.set(true)}>✨ Réserver une dégustation</Button
				>
			</div>
		</div>
	</div>
</div>

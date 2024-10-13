<script lang="ts">
	import Button from '../button/button.svelte';
</script>

<div
	class="mx-[14px] flex w-[calc(100vw-28px)] items-center justify-between border-x border-b px-14 py-6 sm:mx-[35px] sm:w-[calc(100vw-70px)]"
>
	<div class="flex">
		<button class="text-xl font-bold tracking-tight">BarmanCubain</button>
		<button class="ml-8 hidden tracking-tight md:block">Accueil</button>
		<button class="ml-8 hidden tracking-tight md:block">Prestations</button>
		<button class="ml-8 hidden tracking-tight md:block">Avis</button>
	</div>
	<div class="flex">
		<div class="mr-8 flex hidden items-center justify-center tracking-tight md:flex">
			<div class="pulse"></div>
			Disponible
		</div>
		<Button on:click={() => {}}>Réserver</Button>
	</div>
</div>

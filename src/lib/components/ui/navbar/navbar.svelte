<script lang="ts">
	import Button from '../button/button.svelte';
</script>

<div
	class="ml-[35px] flex w-[calc(100vw-70px)] items-center justify-between border-x border-b px-14 py-6"
>
	<div class="flex">
		<div class="h-14 w-20 border"></div>
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

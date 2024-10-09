<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { isMenuOpen } from '$lib/stores/menu';
</script>

<Button on:click={() => isMenuOpen.set(true)}>menu</Button>

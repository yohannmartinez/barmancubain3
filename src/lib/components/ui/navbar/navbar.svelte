<script lang="ts">
	import IconMenu from '~icons/tabler/menu-3';
	import Button from '../button/button.svelte';
	import { isMenuOpen } from '$lib/stores/menu';
</script>

<div class="flex w-full items-center justify-between border-b border-white p-2">
	<Button variant="ghost" />
</div>

<div class="fixed left-0 top-0 flex w-full items-center justify-between border-b bg-white p-2">
	<Button variant="ghost" class="p-2" on:click={() => isMenuOpen.set(true)}><IconMenu /></Button>
	<Button on:click={() => isMenuOpen.set(true)}>Réserver</Button>
</div>

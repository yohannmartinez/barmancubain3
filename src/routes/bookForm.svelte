<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea/index';
	import { fade, slide } from 'svelte/transition';
	import IconClose from '~icons/tabler/x';
	import IconCheck from '~icons/tabler/circle-check';
	import { isBookFormOpened } from '$lib/stores/book';

	let text: string = '';
	let email: string = '';
	let date: string = '';
	let hasFailed: boolean = false;
	let stepLength: number = 3;
	let actualStep: number = 0;

	const sendEmail = async () => {
		try {
			const hasSend = await fetch('/api/sendEmail', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					text: `Email client: ${email}\ndate: ${date}\ndemande:${text}`
				})
			});

			if (hasSend.status === 200) actualStep = 2;

			if (hasSend.status >= 400) hasFailed = true;
		} catch {
			hasFailed = true;
		}
	};
</script>

{#if $isBookFormOpened}
	<button
		transition:fade={{ duration: 200 }}
		aria-label="Revenir à la page d'accueil"
		class="fixed left-0 top-0 z-10 h-screen w-screen bg-slate-800 bg-opacity-50 backdrop-blur-sm"
		on:click={() => isBookFormOpened.set(false)}
	>
	</button>
{/if}
{#if $isBookFormOpened}
	<div
		transition:slide={{ duration: 200, axis: 'y' }}
		class="fixed left-[50%] top-[50%] z-20 flex h-screen w-screen translate-x-[-50%] translate-y-[-50%] items-center justify-center bg-white sm:h-[calc(100vh-20px)] sm:max-w-[350px] sm:rounded-3xl"
	>
		<button
			class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-200"
			on:click={() => isBookFormOpened.set(false)}
			aria-label="Revenir à la page d'accueil"><IconClose /></button
		>

		<div
			class="left-0 top-[70px] flex h-full w-full max-w-[350px] flex-col items-center justify-center p-6"
		>
			{#if actualStep === 0}
				<h2
					class=" mb-4 text-center text-2xl font-semibold tracking-tighter sm:text-2xl lg:text-2xl"
				>
					C'est le moment d'en parler
				</h2>
				<p class="mb-6 max-w-96 text-center text-sm tracking-tight">
					Donnez nous le maximum d'informations à propos de votre évènement
				</p>
				<Textarea
					placeholder="Bonjour, j'organise mon mariage, pourriez vous me contacter au 06 XX XX XX XX"
					class="mb-4 rounded-xl py-3"
					bind:value={text}
				/>
				<Button class="w-full rounded-xl p-6" on:click={() => (actualStep = 1)} disabled={!text}
					>Suivant</Button
				>
			{/if}

			{#if actualStep === 1}
				<h2
					class=" mb-4 text-center text-2xl font-semibold tracking-tighter sm:text-2xl lg:text-2xl"
				>
					Quelques précisions
				</h2>

				<Input placeholder="Votre email" bind:value={email} class="mb-4 rounded-xl px-3 py-6" />
				<Input
					placeholder="Date de votre évènement"
					bind:value={date}
					class="mb-4 rounded-xl px-3 py-6"
				/>
				<Button
					class="mb-4 w-full rounded-xl p-6"
					variant="secondary"
					on:click={() => (actualStep = 0)}>Précèdant</Button
				>
				<Button
					class="w-full rounded-xl p-6"
					on:click={() => sendEmail()}
					disabled={!email || !date}>Suivant</Button
				>
			{/if}

			{#if actualStep === 2 && !hasFailed}
				<span class="mb-4 text-5xl"><IconCheck /></span>
				<h2
					class=" mb-2 text-center text-2xl font-semibold tracking-tighter sm:text-2xl lg:text-2xl"
				>
					Votre évènement est entre de bonnes mains
				</h2>
				<p class="mb-6 max-w-96 text-center text-sm tracking-tight">
					Notre équipe se charge d'étudier votre demande
				</p>
				<Button
					class="w-full rounded-xl p-6"
					on:click={() => {
						actualStep = 0;
						isBookFormOpened.set(false);
					}}>Terminer</Button
				>
			{/if}

			{#if actualStep === 2 && hasFailed}Quelque chose s'est mal passé, veuillez réessayer
				utlterieurement{/if}

			<div
				class="absolute bottom-2 left-[50%] flex translate-x-[-50%] gap-1 rounded-full bg-gray-200 px-2 py-1"
			>
				{#each Array(stepLength) as item, index}
					<div
						style="background-color:{actualStep >= index ? 'black' : '#999999'}"
						class="h-[5px] w-[5px] rounded-full"
						aria-label={item}
					></div>
				{/each}
			</div>
		</div>
	</div>
{/if}

<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { windowSize } from '$lib/stores/page';
	import { onDestroy } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import IconClose from '~icons/tabler/x';
	import IconArrow from '~icons/tabler/arrow-right';
	import { goto } from '$app/navigation';

	let width: number;

	const unsubscribe = windowSize.subscribe((value) => {
		width = value.width;
	});

	onDestroy(() => {
		unsubscribe();
	});

	let services = [
		{
			title: 'Mariage',
			text: 'Faites de votre mariage un événement inoubliable avec nos cocktails sur-mesure ! Nos services de barman ajoutent une touche de magie à votre grand jour. Vous ne voudrez plus partir de la piste de danse ! 💍✨',
			description:
				' Laissez-nous sublimer votre mariage avec des cocktails personnalisés et un service de qualité.',
			image: 'https://martinbeatz.com/wp-content/uploads/2018/03/martinbeatz-dj-mariage.png'
		},
		{
			title: 'Particulier',
			text: "Une soirée entre amis ou en famille ? Nous transformons votre salon en bar privé avec des cocktails exclusifs ! Faites-vous plaisir, et profitez de la soirée, on s'occupe du reste ! 🎉",
			description:
				'Réalisez une soirée unique et sur-mesure chez vous avec nos services de barman privé.',
			image: 'https://img.freepik.com/photos-premium/nouvelle-annee_1090658-8.jpg'
		},
		{
			title: "Fête d'entreprise",
			text: "Épatez vos collègues et vos clients avec des cocktails raffinés lors de votre prochaine soirée d'entreprise ! Offrez un moment de convivialité et de classe qui marquera les esprits. 🍸🎉",
			description: "Dynamisez vos événements d'entreprise avec nos cocktails et animations.",
			image: 'https://linstant-m.tn/uploads/8850ed77022ac372f0d96d11112ce26d2e2beda6.jpg'
		},
		{
			title: 'Séminaire',
			text: "Transformez vos séminaires en moments mémorables avec nos cocktails élaborés ! Un service chic et pro pour détendre l'atmosphère et créer du lien entre vos équipes. 🍷💼",
			description:
				'Faites de votre séminaire un succès avec notre service de bar élégant et professionnel.',
			image:
				'https://www.agence-evenementielle-innovevents.fr/wp-content/uploads/2022/06/animation-soiree-var.jpg'
		},
		{
			title: 'Atelier',
			text: "Découvrez l'art du cocktail lors de nos ateliers interactifs ! Apprenez à shaker, mélanger, et déguster des créations uniques dans une ambiance conviviale et festive. 🥳🍹",
			description: "Participez à nos ateliers et devenez un expert du cocktail en un clin d'oeil.",
			image:
				'https://www.labarmobile.com/public/img/big/Bartenderpouringcocktailjpg5bfe952439b4bjpg_5c18f68bacf7c.jpg'
		}
	];
	let selectedService: number | undefined;
</script>

<div
	class="relative mx-[14px] flex w-[calc(100vw-28px)] border-x border-b px-4 sm:mx-[35px] sm:w-[calc(100vw-70px)]"
>
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
				<Button
					class="sm:text-md w-min rounded-xl py-6 pr-6"
					aria-label="Réserver une prestation chez barman cubain"
					on:click={() => goto('/book')}><span class="pulse"></span>Réserver une prestation</Button
				>
			</div>
		</div>

		<div class="flex-1 pb-10 pt-2 md:pt-40">
			{#each services as service, serviceIndex}
				<div
					class="mb-10 rounded-3xl border p-2 shadow-[0_30px_56px_-18px_#17161f1f,_0_18px_32px_-24px_#0000000d] md:mb-20 lg:mx-10"
				>
					<div
						style="background-image: url('{service.image}')"
						class={`h-60 w-full rounded-2xl border bg-cover bg-center md:h-80`}
					></div>
					<div class="m-6">
						<h2 class=" text-2xl font-semibold tracking-tighter sm:text-2xl lg:text-2xl">
							{service.title}
						</h2>
						<p class="md:text-md mb-3 mt-1 max-w-80 text-sm tracking-tight">
							{service.description}
						</p>
						<Button
							variant="outline"
							aria-label="Voir les détails de la prestation"
							on:click={() => {
								selectedService = serviceIndex;
							}}>En savoir plus</Button
						>
					</div>
				</div>
			{/each}
		</div>

		{#if selectedService !== undefined}<button
				transition:fade={{ duration: 200 }}
				aria-label="Revenir à la page d'accueil"
				class="fixed left-0 top-0 z-10 h-screen w-screen bg-slate-800 bg-opacity-50 backdrop-blur-sm"
				on:click={() => (selectedService = undefined)}
			>
			</button>{/if}

		{#if selectedService !== undefined}<div
				transition:slide={{ duration: 200, axis: 'x' }}
				class="fixed right-0 top-0 z-20 h-screen w-screen bg-white sm:right-[10px] sm:top-[10px] sm:h-[calc(100vh-20px)] sm:max-w-96 sm:rounded-3xl"
			>
				<button
					class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-200"
					on:click={() => (selectedService = undefined)}
					aria-label="Revenir à la page d'accueil"><IconClose /></button
				>
				<button
					class="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white"
					on:click={() => goto('/book')}
					aria-label="Allez à la page de reservation"><IconArrow /></button
				>
				<div class=" left-0 top-[70px] w-full border-b">
					<h2 class="mx-5 my-5 text-2xl font-semibold tracking-tighter sm:text-2xl lg:text-2xl">
						{services[selectedService].title}
					</h2>
				</div>
				<div class="p-5">
					<div
						class={`h-60 w-full rounded-2xl border bg-gray-100 bg-[url('${services[selectedService].image}')] bg-cover bg-center`}
					></div>

					<p class="md:text-md my-6 max-w-80 leading-7 tracking-tight">
						{services[selectedService].text}
					</p>
				</div>
			</div>{/if}
	</div>
</div>

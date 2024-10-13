<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import IconStar from '~icons/tabler/north-star';
</script>

<div
	id="reviews"
	class="relative mx-[14px] flex w-[calc(100vw-28px)] justify-center border-x border-b px-4 sm:mx-[35px] sm:w-[calc(100vw-70px)]"
>
	<div class="flex w-full max-w-xl flex-col items-center justify-center px-4 py-36">
		<div
			class="mb-8 h-20 w-20 rounded-full bg-black bg-[url('https://cdn0.mariages.net/user/4953/1_1/80/jpg/gu_4443594.webp?r=86243')]
bg-cover bg-center"
		></div>
		<p
			class=" mb-8 text-center text-xl font-semibold tracking-tight sm:max-w-md md:max-w-lg md:text-2xl"
		>
			"L'animation qui a fait la différence à notre mariage ! Tout était parfait ! Installation
			magnifique, ambiance, musique , qualité des cocktails, relation humaine parfaite. Merci
			d'avoir rendu notre vin d'honneur aussi exceptionnel ! Nos invités ont adoré !!"
		</p>
		<Button
			class="text-md rounded-xl p-6"
			href="https://www.mariages.net/food-truck/animation-barman-cubain--e152420#reviews"
			target="_blank">Voir les autres avis</Button
		>
	</div>
	<IconStar class="absolute bottom-0 left-0 z-10 translate-x-[-50%] translate-y-[50%]" />
	<IconStar class="absolute bottom-0 right-0 z-10 translate-x-[50%] translate-y-[50%]" />
</div>

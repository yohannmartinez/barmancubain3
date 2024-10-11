<script lang="ts">
	import IconCocktail from '~icons/tabler/glass-cocktail';
	import IconCar from '~icons/tabler/car-suv';
	import IconHappy from '~icons/tabler/mood-happy';
	import IconStar from '~icons/tabler/north-star';
</script>

<div class="relative mx-[14px] w-[calc(100vw-28px)] sm:mx-[35px] sm:w-[calc(100vw-70px)]">
	<div class="carousel flex overflow-hidden border-x border-b">
		<div class="carousel-group border-r bg-gray-100">
			<div class="flex min-w-80 flex-1 items-center justify-center border-r bg-white p-5 sm:p-10">
				<div class="flex h-14 w-14 items-center justify-center rounded-lg bg-gray-200">
					<IconCocktail class="text-lg" />
				</div>
				<span class="ml-4 text-sm font-medium tracking-tight sm:text-lg">Cocktails frais</span>
			</div>
			<div class="flex min-w-80 flex-1 items-center justify-center border-r bg-white p-5 sm:p-10">
				<div class="flex h-14 w-14 items-center justify-center rounded-lg bg-gray-200">
					<IconCar class="text-lg" />
				</div>
				<span class="ml-4 text-sm font-medium tracking-tight sm:text-lg">Déplacement inclus</span>
			</div>
			<div class="flex min-w-80 flex-1 items-center justify-center border-r bg-white p-5 sm:p-10">
				<div class="flex h-14 w-14 items-center justify-center rounded-lg bg-gray-200">
					<IconHappy class="text-lg" />
				</div>
				<span class="ml-4 text-sm font-medium tracking-tight sm:text-lg">Sourires garantis</span>
			</div>
		</div>

		<div class="carousel-group border-r bg-gray-100">
			<div class="flex min-w-80 flex-1 items-center justify-center border-r bg-white p-10">
				<div class="flex h-14 w-14 items-center justify-center rounded-lg bg-gray-200">
					<IconCocktail class="text-lg" />
				</div>
				<span class="ml-4 text-sm font-medium tracking-tight sm:text-lg">Cocktails frais</span>
			</div>
			<div class="flex min-w-80 flex-1 items-center justify-center border-r bg-white p-10">
				<div class="flex h-14 w-14 items-center justify-center rounded-lg bg-gray-200">
					<IconCar class="text-lg" />
				</div>
				<span class="ml-4 text-sm font-medium tracking-tight sm:text-lg">Déplacement inclus</span>
			</div>
			<div class="flex min-w-80 flex-1 items-center justify-center border-r bg-white p-5 sm:p-10">
				<div class="flex h-14 w-14 items-center justify-center rounded-lg bg-gray-200">
					<IconHappy class="text-lg" />
				</div>
				<span class="ml-4 text-sm font-medium tracking-tight sm:text-lg">Sourires garantis</span>
			</div>
		</div>
	</div>

	<IconStar class="absolute bottom-0 left-0 z-10 translate-x-[-50%] translate-y-[50%]" />
	<IconStar class="absolute bottom-0 right-0 z-10 translate-x-[50%] translate-y-[50%]" />
</div>

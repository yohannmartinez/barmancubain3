<script lang="ts">
	import IconPlus from '~icons/tabler/plus';
	import IconMinus from '~icons/tabler/minus';

	let questions = [
		{
			showAnswer: false,
			question: 'Est-ce que vous travaillez sur paris uniquement?',
			answer:
				'Nos équipes travaillent sur le secteur parisien et les alentours, la distance pour venir à votre évènement ne pose aucun soucis.'
		},
		{
			showAnswer: false,
			question: 'Fournissez-vous également les verres et la verrerie?',
			answer:
				"Nous ramenons tout le materiel et le mobilier pour que vous puissiez avoir l'esprit tranquille et vous concentrer sur le fait de profiter avec vos convives."
		},
		{
			showAnswer: false,
			question: "Y a-t-il un nombre maximal d'invités?",
			answer:
				"Que vous soyez 20 ou 400, nous avons les épaules solides et sommes en mesure d'accueillir autant d'invités que vous souhaitez."
		},
		{
			showAnswer: false,
			question: 'Est-il possible de proposer un bar sans alcool?',
			answer:
				'Evidemment, nos barmans sont formés aux cocktails sans alcool et vous proposeront une variété de coktails softs !'
		},
		{
			showAnswer: false,
			question: "Combien de temps à l'avance dois-je réserver vos services?",
			answer:
				'La réactivité coule de source chez nous, même très peu avant votre fête, vous pouvez contacter notre équipe.'
		},
		{
			showAnswer: false,
			question: 'Quels sont les ingrédients utilisés dans vos cocktails?',
			answer:
				'Tous les produits sont achetés la veille ou dans la journée pour vous garantir une fraicheur et une hygiène parfaite.'
		},
		{
			showAnswer: false,
			question: 'Je ne vois pas de tarif dans la réservation?',
			answer:
				"C'est normal, beaucoup de facteurs affectent le cout de la prestation, venez en parler avec nous !"
		}
	];

	const toggleAnswer = (questionIndex: number) => {
		questions[questionIndex].showAnswer = !questions[questionIndex].showAnswer;
	};
</script>

<div
	class="relative mx-[14px] w-[calc(100vw-28px)] border-x border-b p-10 sm:mx-[35px] sm:w-[calc(100vw-70px)]"
>
	<h1
		class="text-center text-4xl font-semibold tracking-tighter sm:text-4xl md:text-left lg:text-5xl"
	>
		Vous avez encore <br />des questions ?
	</h1>

	<div class="my-6 flex flex-col">
		{#each questions as question, questionIndex}
			<button
				class={`mt-4 flex w-full items-center justify-between rounded-xl border ${question.showAnswer ? 'bg-white' : 'bg-gray-100'} p-6`}
				on:click={() => toggleAnswer(questionIndex)}
			>
				{#if !question.showAnswer}
					<h2 class="pr-10 text-left text-lg font-medium tracking-tight">
						{question.question}
					</h2>
					<IconPlus class="min-w-10" />
				{/if}

				{#if question.showAnswer}
					<h2 class="pr-10 text-left text-lg font-medium tracking-tight">
						{question.answer}
					</h2>
					<IconMinus class="min-w-10" />
				{/if}
			</button>
		{/each}
	</div>
</div>

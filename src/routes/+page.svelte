<script lang="ts">
	import './styles.css';
	import { CARDS, type Card } from '../shared/consts/cards';
	import { generateSlug } from '../shared/utils/generateSlug';
</script>

<div class="cards">
	<div class="container">
		<h2 class="subtitle">Коллекция. {'{'}октябрь:2023{'}'}</h2>
		<h2 class="subtitle__two">🔥Популярные модели</h2>
		<div class="cards__wrapper">

			{#snippet card({ title, desc, imgUrl }: Card)}
				<a href="/product/{generateSlug(generateSlug(title))}" class="sneaker">
					<img src={imgUrl} alt={title} />
					<div class="cards__text">
						<h3 class="cards__title">{title}</h3>
						<p class="cards__desc">{desc}</p>
					</div>
				</a>
			{/snippet}

			{#each CARDS as item}
				{@render card(item)}
			{/each}

		</div>
	</div>
</div>

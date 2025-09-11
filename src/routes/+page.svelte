<script lang="ts">
	import './styles.css';
	import { CARDS, type Card } from '$lib/consts/cards';
	import { generateSlug } from '$lib/utils/generateSlug';
</script>

<div class="cards">
	<div class="container">
		<h2 class="subtitle">Коллекция. {'{'}октябрь:2023{'}'}</h2>
		<h2 class="subtitle__two">🔥Популярные модели</h2>
		<div >

			{#snippet card({ title, desc, imgUrl }: Card)}
				<a href="/product/{generateSlug(generateSlug(title))}" class="sneaker">
					<img src={imgUrl} alt={title} />
					<div class="cards__text">
						<h3 class="cards__title">{title}</h3>
						<p class="cards__desc">{desc}</p>
					</div>
				</a>
			{/snippet}

			<ul class="card__list">
				{#each CARDS as item}
				<li class="card">
					{@render card(item)}
				</li>
				{/each}
			</ul>

		</div>
	</div>
</div>
<style>
	.card{
		width: 100%;
	}
	.card__list{
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
	}
	@media screen and (max-width: 1024px) {
		.card__list{
		grid-template-columns: repeat(2, 1fr);
	}
	}
	@media screen and (max-width: 470px) {
		.card__list{
		grid-template-columns: 1fr;
	}
	}
</style>
<script lang="ts">
	import './styles.css';
	import { CARDS, type Card } from '$lib/consts/cards';
	import { generateSlug } from '$lib/utils/generateSlug';
	import Button from '$lib/components/Button/Button.svelte';
</script>

<div class="cards">
	<div class="container">
		<h2 class="subtitle">Коллекция. {'{'}октябрь:2023{'}'}</h2>
		<h2 class="subtitle__two">🔥Популярные модели</h2>
		<div >

			{#snippet card({ title, desc, imgUrl, additional }: Card)}
			<div class="sneaker">
				<a class="sneaker__link" href="/product/{generateSlug(generateSlug(title))}" >
					<img src={imgUrl} alt={title} />
					<div class="cards__text">
						<h3 class="cards__title">{title}</h3>
						<span class="cards__desc">{desc}</span>
					</div>
				</a>
					<div class="cards__footer">
						<span class="cards__price">{additional?.price}{additional?.currency}</span>
						<Button className="font-bold">В корзину</Button>
					</div>
			</div>
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
	@media screen and (max-width: 425px) {
		.card__list{
			gap: 10px
		}
	}
</style>
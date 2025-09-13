<script lang="ts">
	import './styles.css';
	import { CARDS } from '$lib/consts/cards';
	import { addToCart, cashedDeleteByOne, getCountById } from '$lib/stores/cart.svelte';
	import Card from './card.svelte';
</script>

<div class="cards">
	<div class="container">
		<h2 class="subtitle">Коллекция. &#123;октябрь:2023&#125;</h2>
		<h2 class="subtitle__two">🔥Популярные модели</h2>
		<div>
			<ul class="card__list">
				{#each CARDS as item}
					<li class="card">
						<Card
							card={item}
							{addToCart}
							getCount={() => getCountById(item.id)}
							deleteFromCart={() => cashedDeleteByOne(item.id)}
						/>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style>
	.card {
		width: 100%;
	}
	.card__list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
	}
	@media screen and (max-width: 1024px) {
		.card__list {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media screen and (max-width: 425px) {
		.card__list {
			gap: 10px;
		}
	}
</style>

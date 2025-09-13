<script lang="ts">
	import Button from "$lib/components/Button/Button.svelte";
	import type { ICard } from "$lib/consts/cards";
	import { generateSlug } from "$lib/utils/generateSlug";

    let {card, addToCart, getCount, deleteFromCart}:{card: ICard, addToCart: (a: ICard)=>void, getCount: ()=>number, deleteFromCart: ()=>void} = $props()
    let count = $derived(getCount())

</script>
<div class="sneaker">
				<a class="sneaker__link" href="/product/{generateSlug(card.title)}" >
					<img src={card.imgUrl} alt={card.title} />
					<div class="cards__text">
						<h3 class="cards__title">{card.title}</h3>
						<span class="cards__desc">{card.desc}</span>
					</div>
				</a>
					<div class="cards__footer">
						<span class="cards__price">{card.additional?.price}{card.additional?.currency}</span>
                        <div class="flex items-center gap-2">
                            <Button onclick={()=>{addToCart(card)} } class="font-bold py-[12px] px-[14px] flex gap-2">
                                В корзину
                            </Button>
                            <div class="text-[16px] flex items-center gap-1">
                                  {#if count && count > 0}
                               <button onclick={()=>addToCart(card)} class="w-[20px] h-[20px] flex items-center justify-center text-white bg-amber-600 rounded-full"><span>+</span></button><span class="font-[600]">{count}</span><button onclick={()=>deleteFromCart()} class="w-[20px] h-[20px] flex items-center justify-center text-white bg-amber-600 rounded-full"><span>-</span></button>
                             {/if}
                            </div>
                        </div>
					</div>
			</div>
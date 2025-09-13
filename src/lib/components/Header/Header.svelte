<script lang="ts">
    import './header.css'
    import Logo from '$lib/assets/img/logo-header.svg'
	import Socials from '$lib/components/Socials/Socials.svelte';
    import CartSvg  from '$lib/assets/shopping-cart.svg'
	import { cartStore } from '$lib/stores/cart.svelte';


</script>

{#snippet Cart()}
	<div class="cart">
		<img class="cart__image" src={CartSvg} alt="" />
        <span class="cart__count">{cartStore.count}</span>
	</div>
{/snippet}

<header class="header">
        <div class="container">
            <nav class="header__nav">
                <div class="logo">
                    <a href="/">
                        <img src={Logo} alt="Логотип Кроссы и точка">
                    </a>
                </div>
                <div class="flex items-center gap-2">
                    {@render Cart()}
                    <Socials theme="dark" />
                </div>
                <div class="burger-menu">
                    <span class="burger__line"></span>
                </div>
            </nav>
        </div>
    </header>
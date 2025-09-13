<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header/Header.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import { cartStore, setCartStore} from '$lib/stores/cart.svelte';
	import { onMount } from 'svelte';
  
	let { children } = $props();


    onMount(()=>{
        const cart = localStorage.getItem('cart')
        if(cart)setCartStore(JSON.parse(cart))
        
    })
    $effect(()=>{
    localStorage.setItem('cart', JSON.stringify($state.snapshot(cartStore)))
    })

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header/>
<main class="main">
	{@render children?.()}
</main>
<Footer />

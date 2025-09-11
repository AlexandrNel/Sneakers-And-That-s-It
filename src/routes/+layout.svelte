<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header/Header.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/Footer/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
<main class="main">
	{@render children?.()}
</main>
<Footer />

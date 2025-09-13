<script lang="ts">
	let { theme = 'light' }: { theme?: 'light' | 'dark' } = $props();
</script>

<ul class="social-links" style="--t-color: {theme === 'light' ? '#fff' : '#000'}">
	<li><a target="_blank" rel="nofollow noreferrer" href="https://t.me/Anonimchk">💬 TG</a></li>
	<li><a target="_blank" rel="nofollow noreferrer" href="https://vk.com">😊 VK</a></li>
	<li><a target="_blank" rel="nofollow noreferrer" href="https://youtube.com">📺 YouTube</a></li>
</ul>

<style>
	.social-links {
		color: var(--t-color);
	}
</style>

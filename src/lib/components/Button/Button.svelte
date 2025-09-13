<script lang="ts">
	import type { WithElementRef } from '$lib/shared/types';
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type ButtonType = WithElementRef<HTMLButtonAttributes> & {
		children?: Snippet;
	};

	let { class: className, children, ref, ...restProps }: ButtonType = $props();
</script>

<button
	class="flex cursor-pointer rounded-[10px] bg-black px-[10px] py-[6px] text-[16px] text-[#fff] {className}"
	bind:this={ref}
	{...restProps}>{@render children?.()}</button
>

<script lang="ts">
	import type { WithElementRef } from '$lib/shared/types';
    import type { Snippet } from 'svelte';
    import type { HTMLButtonAttributes } from "svelte/elements";

    type ButtonType = WithElementRef<HTMLButtonAttributes> & {
        children?: Snippet,
    } 
    
   let {class: className, children, ref, ...restProps}: ButtonType = $props()

</script>
<button
 class="flex text-[16px] rounded-[10px] px-[10px] py-[6px] text-[#fff] bg-black cursor-pointer {className}" 
 bind:this={ref}
 {...restProps}
 >{@render children?.()}</button>
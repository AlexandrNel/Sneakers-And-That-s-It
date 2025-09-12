<script lang="ts">
    import type { Snippet } from 'svelte';
    let {className ,children}:{children: Snippet, className?: string} = $props()
</script>
<button class="flex text-[16px] rounded-[10px] px-[10px] py-[6px] text-[#fff] bg-black cursor-pointer {className}">{@render children()}</button>
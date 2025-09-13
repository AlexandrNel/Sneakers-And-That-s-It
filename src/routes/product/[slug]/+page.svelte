<script lang="ts">
    import type {PageProps} from './$types'
    import './styles.css'

    const MAX_HEIGHT = 250

    let {data}: PageProps = $props()
    let isOpen = $state(false);
    let isHideButton = $state(false)
    let textBlock:HTMLDivElement

    const handleOpenText = ()=>{
        isOpen = !isOpen
    }

    $effect(()=>{
    if(textBlock.clientHeight < MAX_HEIGHT){
        isOpen = true
        isHideButton = true
    }
    })
</script>
 <svelte:head>
    <title>{data.title}</title>
    <meta name="description" content={data.desc} />
    <meta name="keywords" content="sneakers" />
 </svelte:head>
 <div class="container">
            <div class="sneaker-big">
                <div class="sneaker-big__img">
                    <img src={data.imgUrl} alt={data.title}>
                </div>
                <div class="sneaker-big__info">
                    <h1 class="sneaker-big__title">{data.title}</h1>
                    <h2 class="sneaker-big__subtitle">{data.desc}</h2>
                    <div class="sneaker-big__additional-info">
                        <div class="sneaker-big__text">
                            <div bind:this={textBlock} style="--max-height:{MAX_HEIGHT}px" class={isOpen ? 'open' : 'hide'}>
                                {#if data.additional}
                                     {#each data.additional.desc.split('\n') as paragraph}
                                <p>{paragraph}</p>
                                {/each}
                                {/if}
                               
                            </div>
                           {#if !isHideButton}
                            <button style="cursor:pointer; border-bottom:1px solid black" onclick={handleOpenText}>{isOpen ? "Скрыть" : "Показать полностью"}</button>
                           {/if}
                        </div>
                        <div class="sneaker-big__parameters">
                            <h3 class="sneaker-big__parameters-title">О кроссах</h3>
                            <div class="sneaker-big__parameter-info">
                                <p>Дата выхода</p>
                                <p>{data.additional?.date}</p>
                            </div>
                            <div class="sneaker-big__parameter-info">
                                <p>Розничная цена</p>
                                <p>{data.additional?.price}{data.additional?.currency}</p>
                            </div>
                            <div class="sneaker-big__parameter-info">
                                <p>Материалы</p>
                                <p>{data.additional?.parameter}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


<script lang="ts">
    import type {PageProps} from './$types'
    let {data}: PageProps = $props()
</script>

<div class="container">
    <h1>{data.title}</h1>
    <p>{data.desc}</p>
    <img src={data.imgUrl} alt={data.title}>
</div>

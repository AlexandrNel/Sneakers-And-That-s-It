<script lang="ts">
    import './header.css'
    import Logo from '$lib/assets/img/logo-header.svg'
	import Socials from '$lib/components/Socials/Socials.svelte';
</script>
<header class="header">
        <div class="container">
            <nav class="header__nav">
                <div class="logo">
                    <a href="/">
                        <img src={Logo} alt="Логотип Кроссы и точка">
                    </a>
                </div>
                <Socials theme="dark" />
                <div class="burger-menu">
                    <span class="burger__line"></span>
                </div>
            </nav>
        </div>
    </header>
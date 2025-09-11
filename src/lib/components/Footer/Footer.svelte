<script lang="ts">
    import './footer.css'
    import LogoFooter from '$lib/assets/img/logo-footer.svg'
    import Socials from '$lib/components/Socials/Socials.svelte'
</script>
<footer class="footer">
        <div class="container">
            <nav class="footer__nav">
                <div class="footer__logo logo">
                    <a href="#top"><img src={LogoFooter} alt="Логотип Кроссы и точка"></a>
                </div>
                <Socials />
            </nav>
            <p class="footer__text">кроссы и точка ® 2023</p>
        </div>
    </footer>
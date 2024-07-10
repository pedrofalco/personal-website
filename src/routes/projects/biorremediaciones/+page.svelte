<script>
    export let data;
    let { t } = data;
</script>
<main class="space-y-6">
    <div class="space-y-2">
        <h1 class="text-2xl md:text-3xl font-bold">.Biorremediaciones de Juan Pablo Ferlat</h1>
        <h3 class="text-xs md:text-sm">Instalación, 2022</h3>
        <hr>
    </div>
    <p>{$t('biorremediaciones_0')}</p>

    <div class="text-xs italic space-y-1">
    <img loading="lazy" class="work" src="/media/ferlat-biorremediaciones-1.png" alt="biorremediaciones">
        <p>{$t('biorremediaciones_2')}</p>
        <p>{$t('biorremediaciones_3')}</p>
    </div>

    <p>{$t('biorremediaciones_1')}</p>

    <div class="space-y-2">
        <video class="md:h-screen" src="/media/ferlat-biorremediaciones.mp4" type="video/mp4" playsinline muted autoplay loop></video>
        <p class="text-xs italic">{$t('biorremediaciones_4')}</p>
    </div>
    
    

</main>
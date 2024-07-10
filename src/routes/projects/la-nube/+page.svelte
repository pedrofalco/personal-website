<script>
    export let data;
    let { t } = data;
</script>
<main class="space-y-6">
    <div class="space-y-2">
        <h1 class="text-2xl md:text-3xl font-bold">.La Nube</h1>
        <h3 class="text-xs md:text-sm">{$t('gen_art')}, 2022</h3>
        <hr>
    </div>

    <p>{$t('nube_0')}</p>
    <p>{$t('nube_1')}</p>

    <div class="w-full aspect-video">
        <iframe
            title="video"
          class="w-full h-full"
          src={`https://www.youtube.com/embed/ePOlRPMRxoA`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
    </div>

    <p>{$t('nube_2')}</p>
    <p>{$t('nube_3')}</p>
    <p>{$t('nube_4')}</p>

</main>
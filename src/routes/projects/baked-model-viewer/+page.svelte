
<script>
    export let data;
    let { t } = data;
</script>
<main class="space-y-6">
    <div class="space-y-2">
        <h1 class="text-2xl md:text-3xl font-bold">.baked-model-viewer</h1>
        <h3 class="text-xs md:text-sm">{$t('web_app')}, 2024</h3>
        <hr>
    </div>

    <p>{@html $t('viewer_0')}</p>
    <img loading="lazy" class="mx-auto w-full object-cover" src="/media/baked-model-viewer.webp" alt="demo"/>
    <p>{$t('viewer_1')}</p>
    <img loading="lazy" class="mx-auto" src="/media/baked-model-viewer.png" alt="demo"/>

</main>
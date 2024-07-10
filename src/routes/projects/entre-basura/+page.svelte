
<script>
    export let data;
    let { t } = data;
</script>
<main class="space-y-6">
    <div class="space-y-2">
        <h1 class="text-2xl md:text-3xl font-bold">.Entre la basura</h1>
        <h3 class="text-xs md:text-sm">{$t('web_app')}, 2022</h3>
        <hr>
    </div>

    <p>{$t('basura_0')}</p>
    <div class="w-full aspect-video space-y-1">
        <iframe class="w-full h-full" title="Entre la basura" src="https://entre-la-basura.glitch.me/" frameborder="0"></iframe>
    </div>
    <p>{$t('basura_1')}</p>

</main>
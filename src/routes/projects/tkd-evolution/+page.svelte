<script>
    export let data;
    let { t } = data;
</script>
<main class="space-y-6">
    <div class="space-y-2">
        <h1 class="text-2xl md:text-3xl font-bold">.Tae Kwon Do Evolution</h1>
        <h3 class="text-xs md:text-sm">{$t('web_app')}, 2023</h3>
        <hr>
    </div>

    <p>{$t('tkd_0')}</p>
    <video class="md:h-screen mx-auto rounded-md" src="/media/tkdevolution.mp4" muted autoplay loop playsinline></video>

    <p>{$t('tkd_1')}</p>

</main>
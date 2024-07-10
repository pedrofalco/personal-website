<script>
    export let data;
    let { t } = data;
</script>
<main class="space-y-6">
    <div class="space-y-2">
        <h1 class="text-2xl md:text-3xl font-bold">.SRCHERS</h1>
        <h3 class="text-xs md:text-sm">{$t('web_app')}, 2024</h3>
        <hr>
    </div>

    <p>{$t('srchers_0')}</p>
    <video src="/media/srchers.mp4" muted autoplay loop playsinline></video>
</main>
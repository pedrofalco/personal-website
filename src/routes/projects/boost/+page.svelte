<script>
    export let data;
    let { t } = data;
</script>
<main class="space-y-6">
    <div class="space-y-2">
        <h1 class="text-2xl md:text-3xl font-bold">.Boost</h1>
        <h3 class="text-xs md:text-sm">{$t('vr')}, 2018</h3>
        <hr>
    </div>
    <p>{$t('boost_0')}</p>
    <p>{$t('boost_1')}</p>
    <p>{$t('boost_2')}</p>
    
    <div class="w-full aspect-video space-y-1">
        <iframe class="w-full h-full" src="https://www.youtube.com/embed/bGFx4E5mjCk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p class="text-xs italic">{$t('boost_4')}</p>
    </div>
    
    <p>{$t('boost_3')}</p>

</main>
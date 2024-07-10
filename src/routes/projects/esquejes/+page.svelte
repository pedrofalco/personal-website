<script>
    const images = [
        '/media/esquejes/esquejes-9.png',
        '/media/esquejes/esquejes-2.png',
        '/media/esquejes/esquejes-3.png',
        '/media/esquejes/esquejes-4.png',
        '/media/esquejes/esquejes-5.png',
        '/media/esquejes/esquejes-6.png',
        '/media/esquejes/esquejes-7.png',
        '/media/esquejes/esquejes-8.png'
    ];

    export let data;
    let { t } = data;
</script>
<main class="space-y-6">
    <div class="space-y-2">
        <h1 class="text-2xl md:text-3xl font-bold">.Esquejes</h1>
        <h3 class="text-xs md:text-sm">{$t('gen_art')}, 2023</h3>
        <hr>
    </div>

    <p>{$t('esquejes_0')}</p>

        <div class="grid grid-cols-4 grid-rows-2 gap-4">
            {#each images as src}
                <img loading="lazy" src={src} alt="Esquejes">
            {/each}
        </div>
    <p>{$t('esquejes_1')}</p>
    <div class="grid grid-cols-2 grid-rows-2 gap-4">
        <img loading="lazy" class="h-full w-full object-cover" src="/media/esquejes/esquejes-bm-1.jpg" alt="Esquejes">
        <img loading="lazy" class="h-full w-full object-cover" src="/media/esquejes/esquejes-10.png" alt="Esquejes">
        <img loading="lazy" class="h-full w-full object-cover" src="/media/esquejes/esquejes-11.png" alt="Esquejes">
        <img loading="lazy" class="h-full w-full object-cover" src="/media/esquejes/esquejes-bm-3.jpg" alt="Esquejes">
    </div>
    <!-- <img loading="lazy" src="/media/esquejes/esquejes-bm-2.jpg" alt="Esquejes"> -->
    <p>{$t('esquejes_2')}</p>
    
    <img loading="lazy" src="/media/esquejes/esquejes-bm-4.jpg" alt="Esquejes">    
    <div class="text-xs space-y-1">
        <hr>
        <p>↳ {$t('project_complete')} <a href="https://app.brightmoments.io/collections/esquejes" target="_blank"><u>Esquejes en Bright Moments</u></a></p>
        <p>↳ {$t('contract_address')} <a href="https://etherscan.io/address/0x0a1bbd57033f57e7b6743621b79fcb9eb2ce3676#code" target="_blank"><u>0x0a1bbd57033f57e7b6743621b79fcb9eb2ce3676</u></a></p>
    </div>
    </main>
<script>
    import Asterisms from "/src/components/Asterisms.svelte";

    export let data;
    let { t } = data;
</script>
<main class="space-y-6">
    <div class="space-y-2">
        <h1 class="text-2xl md:text-3xl font-bold">.Asterisms</h1>
        <h3 class="text-xs md:text-sm">{$t('gen_art')}, {$t('inst')}, 2021</h3>
        <hr>
    </div>

    <p>{$t('asterisms_0')}</p>
    <p>{$t('asterisms_1')}</p>
    <p>{$t('asterisms_2')}</p>
    
    <div>
        <Asterisms/>
        <p class="text-xs mt-2 italic">{$t('asterisms_3')}</p>
    </div>

    <p>{$t('asterisms_4')}</p>
    <p>{$t('asterisms_5')}</p>
    <p>{$t('asterisms_6')}</p>
    <p>{$t('asterisms_7')}</p>
    
    <div class="text-xs space-y-1">
        <hr>
        <p>↳ {$t('project_complete')} <a href="https://www.artblocks.io/collections/presents/projects/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/47" target="_blank"><u>Asterisms en ArtBlocks</u></a></p>
        <p>↳ {$t('contract_address')} <a href="https://etherscan.io/address/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270#code" target="_blank"><u>0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270</u></a></p>
    </div>
    </main>
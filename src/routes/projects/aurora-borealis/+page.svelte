<script>
    export let data;
    let { t } = data;
</script>
<main class="space-y-6">
    <div class="space-y-2">
        <h1 class="text-2xl font-bold">.Aurora Borealis</h1>
        <h3 class="text-xs md:text-sm">{$t('gen_art')}, 2021</h3>
        <hr>
    </div>
    <video class="md:h-screen" src="https://ipfs.pixura.io/ipfs/Qmb8nyAcJ3ho7aUvvHy2xXBZFLHhnDZCa135jSW5gQYiqK/Aurora-Borealis.mp4" muted autoplay loop playsinline></video>
    <p>{$t('aurora_0')}</p>

    <div class="text-xs">
        <p>↳ {$t('project_complete')} <a href="https://superrare.com/artwork-v2/aurora-borealis-26906" target="_blank"><u>Aurora Borealis en SuperRare</u></a></p>
        <p>↳ {$t('contract_address')} <a href="https://etherscan.io/address/0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0" target="_blank"><u>0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0</u></a></p>
        <p>↳ Metadata:<a href="https://ipfs.pixura.io/ipfs/QmdvguGNgksto2Uux34TvuQDZp1hwsfRCntaA59Jep6Chg/metadata.json" target="_blank"><u>IPFS</u></a>
    </div>
</main>
<script>
    export let data;
    let { t } = data;
</script>
<main class="space-y-6">
    <div class="space-y-2">
        <h1 class="text-2xl md:text-3xl font-bold">.[meta]</h1>
        <h3 class="text-xs md:text-sm">{$t('gen_art')}, 2020</h3>
        <hr>
    </div>

    <img loading="lazy" class="h-screen mx-auto" src="https://ipfs.pixura.io/ipfs/QmSKvRnRwNHYY3h1QGNcvuhULUcVg7DJS18YC5MZQYk9eQ/metadata.jpg" alt="artwork">
    <p>{$t('meta_0')}</p>

    <div class="text-xs space-y-1">
        <hr>
        <p>↳ {$t('project_complete')} <a href="https://superrare.com/artwork-v2/[meta]-14228" target="_blank"><u>[meta] en SuperRare</u></a></p>
        <p>↳ {$t('contract_address')} <a href="https://etherscan.io/address/0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0" target="_blank"><u>0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0</u></a></p>
        <p>↳ Metadata: <a href="https://ipfs.pixura.io/ipfs/QmT3nwLu2QpMdg7HbwA1jPLfHYnkgfz6zVMuyUYNgmyGUq/metadata.json" target="_blank"><u>IPFS</u></a></p>
    </div>
</main>
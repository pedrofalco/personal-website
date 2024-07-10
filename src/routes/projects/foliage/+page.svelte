<script>
    export let data;
    let { t } = data;
</script>
<main class="space-y-6">
    <div class="space-y-2">
        <h1 class="text-2xl md:text-3xl font-bold">Foliage</h1>
        <h3 class="text-xs md:text-sm">{$t('gen_art')}, 2022</h3>
        <hr>
    </div>
    
    <p>{$t("foliage_0")}</p>
    <div class="grid grid-cols-2 gap-2">
        <img loading="lazy" class="w-full h-full object-cover" src="/media/foliage/intro/1200px-VectorField.svg.png" alt="">
        <img loading="lazy" class="w-full h-full object-cover" src="/media/foliage/intro/dataviz.png" alt="">
    </div>

    <p>{$t("foliage_1")}</p>
    <p>{$t("foliage_2")}</p>

    
    <!-- SURFACE ANALISYS -->

    <div class="grid grid-cols-4 gap-4">
        <div>
            <img loading="lazy" src="/media/foliage/surface-analisys/A vegetation near a river course-100000193.png" alt="surface-analisys">
            <p class="text-2xs">A vegetation near a river course<br>Ropsten #193</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/surface-analisys/Forgotten leaves on a hill-100000195.png" alt="surface-analisys">
            <p class="text-2xs">Forgotten leaves on a hill<br>Ropsten #195</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/surface-analisys/My mom's yard-100000176.png" alt="surface-analisys">
            <p class="text-2xs">My mom's yard<br>Ropsten #176</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/surface-analisys/my neighbors vineyard 100000196.png" alt="surface-analisys">
            <p class="text-2xs">My neighbors vineyard<br>Ropsten #196</p>
        </div>
    </div>
    
    <div class="grid grid-cols-5 gap-4">
        <div>
            <img loading="lazy" src="/media/foliage/surface-analisys/Petals on my grandpa's desk-100000080.png" alt="surface-analisys">
            <p class="text-2xs">Petals on my grandpa's desk<br>Ropsten #80</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/surface-analisys/Some plants a few blocks from a house-100000192.png" alt="surface-analisys">
            <p class="text-2xs">Some plants a few blocks from a house<br>Ropsten #192</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/surface-analisys/Spikes from a infected plant-100000186.png" alt="surface-analisys">
            <p class="text-2xs">Spikes from a infected plant<br>Ropsten #186</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/surface-analisys/The lawn of a noble garden-100000134.png" alt="surface-analisys">
            <p class="text-2xs">The lawn of a noble garden<br>Ropsten #134</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/surface-analisys/the weeds of an abandoned land-100000159.png" alt="surface-analisys">
            <p class="text-2xs">The weeds of an abandoned land<br>Ropsten #159</p>
        </div>
    </div>
    
    <p>{$t("foliage_3")}</p>

    <!-- PALETTE -->
    <!-- Row 5 -->
    <div class="grid grid-cols-2 gap-4">
        <div>
            <img loading="lazy" src="/media/foliage/palette/Ostro-100000144.png" alt="palette">
            <p class="text-2xs">Ostro<br>Ropsten #144</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/palette/Monzon-100000130.png" alt="palette">
            <p class="text-2xs">Monzon<br>Ropsten #130</p>
        </div>
    </div>
    <!-- Row 1 -->
    <div class="grid grid-cols-5 gap-4">
        <div>
            <img loading="lazy" src="/media/foliage/palette/Alisio-100000110.png" alt="palette">
            <p class="text-2xs">Alisio<br>Ropsten #110</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/palette/Bise-100000032.png" alt="palette">
            <p class="text-2xs">Bise<br>Ropsten #032</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/palette/Bora-100000156.png" alt="palette">
            <p class="text-2xs">Bora<br>Ropsten #156</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/palette/Cordonazo-100000142.png" alt="palette">
            <p class="text-2xs">Cordonazo<br>Ropsten #142</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/palette/Gregal-100000077.png" alt="palette">
            <p class="text-2xs">Gregal<br>Ropsten #77</p>
        </div>
    </div>

    <!-- Row 2 -->
    <div class="grid grid-cols-5 gap-4">
        <div>
            <img loading="lazy" src="/media/foliage/palette/Kóshkil-100000066.png" alt="palette">
            <p class="text-2xs">Kóshkil<br>Ropsten #66</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/palette/Lebeche-100000018.png" alt="palette">
            <p class="text-2xs">Lebeche<br>Ropsten #18</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/palette/Levante-100000118.png" alt="palette">
            <p class="text-2xs">Levante<br>Ropsten #118</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/palette/Minuano-100000152.png" alt="palette">
            <p class="text-2xs">Minuano<br>Ropsten #152</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/palette/Mistral-100000116.png" alt="palette">
            <p class="text-2xs">Mistral<br>Ropsten #116</p>
        </div>
    </div>

    <!-- Row 3 -->
    <div class="grid grid-cols-5 gap-4">
        <div>
            <img loading="lazy" src="/media/foliage/palette/anime.png" alt="palette">
            <p class="text-2xs">Anime<br>Out of bounds</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/palette/Sudestada-100000138.png" alt="palette">
            <p class="text-2xs">Sudestada<br>Ropsten #138</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/palette/Pampero-100000168.png" alt="palette">
            <p class="text-2xs">Pampero<br>Ropsten #168</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/palette/Passat-100000146.png" alt="palette">
            <p class="text-2xs">Passat<br>Ropsten #146</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/palette/Poniente-100000005.png" alt="palette">
            <p class="text-2xs">Poniente<br>Ropsten #5</p>
        </div>
    </div>

    <!-- Row 4 -->
    <div class="grid grid-cols-5 gap-4">
        <div>
            <img loading="lazy" src="/media/foliage/palette/Puelche-100000046.png" alt="palette">
            <p class="text-2xs">Puelche<br>Ropsten #46</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/palette/Rashabar-100000189.png" alt="palette">
            <p class="text-2xs">Rashabar<br>Ropsten #189</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/palette/Sirocco-100000128.png" alt="palette">
            <p class="text-2xs">Sirocco<br>Ropsten #128</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/palette/Zonda-100000002.png" alt="palette">
            <p class="text-2xs">Zonda<br>Ropsten #2</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/palette/Tramontana-100000109.png" alt="palette">
            <p class="text-2xs">Tramontana<br>Ropsten #109</p>
        </div>
    </div>


    <p>{$t("foliage_4")}</p>
    <!-- COLOR -->
    <div class="grid grid-cols-3 gap-4">
        <div>
            <img loading="lazy" src="/media/foliage/color/angle-100000145.png" alt="color1">
            <p class="text-2xs">Angle<br>Ropsten #145</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/color/grid-100000016.png" alt="color2">
            <p class="text-2xs">Grid<br>Ropsten #16</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/color/random-100000097.png" alt="color3">
            <p class="text-2xs">Random<br>Ropsten #97</p>
        </div>
    </div>

    <p>{$t("foliage_5")}</p>
    
    <!-- STYLE -->
    <div class="grid grid-cols-5 gap-4">
        <div>
            <img loading="lazy" src="/media/foliage/style/anime.png" alt="style">
            <p class="text-2xs">Anime<br>Out of band</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/style/clean-100000162.png" alt="style">
            <p class="text-2xs">Clean<br>Ropsten #162</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/style/magic-100000120.png" alt="style">
            <p class="text-2xs">Magic<br>Ropsten #120</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/style/shady-100000019.png" alt="style">
            <p class="text-2xs">Shady<br>Ropsten #19</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/style/veins-100000054.png" alt="style">
            <p class="text-2xs">Veins<br>Ropsten #54</p>
        </div>
    </div>

    <p>{$t("foliage_6")}</p>
    <!-- POLLEN -->
    <div class="grid grid-cols-3 gap-4">
        <div>
            <img loading="lazy" src="/media/foliage/pollen/hard-100000029.png" alt="pollen">
            <p class="text-2xs">Hard<br>Ropsten #29</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/pollen/light-100000153.png" alt="pollen">
            <p class="text-2xs">Light<br>Ropsten #153</p>
        </div>
        <div>
            <img loading="lazy" src="/media/foliage/pollen/off-100000167.png" alt="pollen">
            <p class="text-2xs">Off<br>Ropsten #167</p>
        </div>
    </div>

    <div class="text-xs space-y-1">
        <hr>
        <p>↳ {$t('project_complete')} <a href="https://www.artblocks.io/collections/presents/projects/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/270" target="_blank"><u>Foliage en ArtBlocks</u></a></p>
        <p>↳ {$t('contract_address')} <a href="https://etherscan.io/address/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270#code" target="_blank"><u>0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270</u></a></p>
    </div>
</main>
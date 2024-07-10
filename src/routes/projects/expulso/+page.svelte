<script>
    export let data;
    let { t } = data;
</script>
<main class="space-y-6">
    <div class="space-y-2">
        <h1 class="text-2xl md:text-3xl font-bold">.Expulso</h1>
        <h3 class="text-xs md:text-sm">Instalación Interactiva, 2019</h3>
        <hr>
    </div>
    <p>{$t("expulso_0")}</p>
    <p>{$t("expulso_1")}</p>
    <p>{$t("expulso_2")}</p>
    <p>{$t("expulso_3")}</p>
    <!-- <p>{$t("expulso_4")}</p> -->
    <!-- <p>{$t("expulso_5")}</p> -->
    <div class="w-full aspect-video space-y-1">
        <iframe
            title="Expulso"
          class="w-full h-full"
          src="https://www.youtube.com/embed/P3cKWjYzS64"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p class="text-xs italic">{$t("expulso_8")}</p>
    </div>
    <p>{$t("expulso_6")}</p>
    <p>{$t("expulso_7")}</p>
</main>
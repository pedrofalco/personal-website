<script>
    export let data;
    let { t } = data;
</script>

<main class="md:w-2/3 mx-auto flex flex-col justify-center gap-6 md:gap-10 px-1">
    <div>
        <h1 class="text-xl font-semibold">{$t('about_description')}</h1>
        <hr>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm md:text-base">
        <!-- First Paragraph -->
        <div class="md:col-span-2 order-1 md:order-none space-y-4">
            <p>{$t('bio_0')}</p>
            <p>{$t('bio_1')}</p>
            <p>{$t('bio_2')}</p>
        </div>
        <!-- Image -->
        <div class="md:col-span-1 order-2 md:order-none md:row-span-2 flex justify-center">
          <img loading="lazy" src="/pedro-falco-img-crop.png" alt="Pedro Falco" class="w-full h-auto object-cover">
        </div>
        <!-- Second Paragraph -->
        <div class="md:col-span-2 order-3 md:order-none space-y-1">
            <hr>
            <p>📮 {$t('contact')}</p>
            <p><a class="underline" href={"#"}>fpfalco@gmail.com</a></p>
            <p>CV: <a class="underline" href="../media/pedro-falco-cv-ES.pdf" target="_blank">ES</a> - <a class="underline" href="../media/pedro-falco-cv-EN.pdf" target="_blank">EN</a></p>
        </div>
      </div>
</main>
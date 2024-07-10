<script>
    import { t } from "$lib/i18n";
    import data from '$lib/project-data.json'

    let projects = data.Projects;
</script>

<main class="space-y-6 md:w-2/3 mx-auto px-1">
    <div>
        <h1 class="text-xl font-semibold">{$t('proj_description')}</h1>
        <hr>
    </div>
    {#each projects as { name, type, file, media, page }, index}
    <div>
        <p>.{index}</p>
        <a class="relative h-full w-full" href={page}>
            {#if media === 'image'}
                <img loading="lazy" class="w-full aspect-video object-cover" src={file} alt="media" />
            {:else if media === 'video'}
                <video class="object-cover" src={file} muted loop playsinline autoplay></video>
            {/if}                
                <div class="group absolute left-0 top-0 flex flex-col gap-2 justify-center items-center text-white hover:backdrop-brightness-[.25] transition duration-200 w-full h-full text-center">
                    <h1 class="text-4xl group-hover:opacity-100 transition duration-200 opacity-0 font-bold">{name}</h1>
                    <p class="group-hover:opacity-100 transition duration-200 opacity-0">{$t(type)}</p>
                </div>
        </a>
    </div>
    {/each}
</main>

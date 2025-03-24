<script>
	import { onMount } from "svelte";
    import { fly } from "svelte/transition";  
    import Icon from '@iconify/svelte';
    import "/src/style.css"

    export let data;

    let { t, locale, locales } = data;
    let cookies = false;

    onMount(()=> {
        $locale = navigator.language.startsWith('es') ? 'es' : 'en';
    });

</script>

<!-- 
    The svelte:head component injects content into the document's head dynamically.
    This is SvelteKit's way of managing <head> content from any component.
-->
<svelte:head>
    <!-- Primary Meta Tags - Basic SEO and browser display -->
    <title>Pedro Falco</title> <!-- Shows in browser tab -->
    <meta name="title" content="Pedro Falco - Creative Developer and Designer from Buenos Aires, Argentina." /> <!-- For search engines -->
    <meta name="description" content="Creative developer focused on interactive experiences, digital art, and web development" /> <!-- Shows in search results -->
    <meta name="keywords" content="creative developer, digital art, web development, interactive experiences, Pedro Falco" /> <!-- Search keywords -->
    <meta name="robots" content="index, follow" /> <!-- Allows search engines to index and follow links -->
    <meta name="language" content={$locale === 'es' ? 'Spanish' : 'English'} /> <!-- Dynamic language based on user selection -->
    <meta name="author" content="Pedro Falco" /> <!-- Website author -->
    
    <!-- Open Graph Tags - For Facebook and other social media platforms -->
    <meta property="og:type" content="website" /> <!-- Content type for social media -->
    <meta property="og:url" content="https://pedrofalco.com/" /> <!-- Your website URL -->
    <meta property="og:title" content="Pedro Falco - Creative Developer" /> <!-- Title in social shares -->
    <meta property="og:description" content="Creative developer focused on interactive experiences, digital art, and web development" /> <!-- Description in social shares -->
    <meta property="og:image" content="https://pedrofalco.com/og-image.png" /> <!-- Image shown in social shares (1200x630px recommended) -->

    <!-- Twitter Card Tags - Specifically for Twitter sharing -->
    <meta property="twitter:card" content="summary_large_image" /> <!-- Large image card style -->
    <meta property="twitter:url" content="https://pedrofalco.com/" /> <!-- Your website URL -->
    <meta property="twitter:title" content="Pedro Falco - Creative Developer and Designer from Buenos Aires, Argentina." /> <!-- Title in Twitter shares -->
    <meta property="twitter:description" content="Creative developer focused on interactive experiences, digital art, and web development" /> <!-- Description in Twitter shares -->
    <meta property="twitter:image" content="https://pedrofalco.com/og-image.png" /> <!-- Image for Twitter (1200x675px recommended) -->

    <!-- 
        Structured Data - Helps search engines understand your content
        This JSON-LD format tells search engines about you as a person
        and links your social profiles together
    -->
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Pedro Falco",
            "url": "https://pedrofalco.com",
            "jobTitle": "Creative Developer",
            "sameAs": [
                "https://github.com/pedrofalco",
                "https://www.linkedin.com/in/pedrofalco/",
                "https://twitter.com/_pedrofalco",
                "https://www.instagram.com/pedrofalco_/"
            ]
        }
    </script>
</svelte:head>

<div class="w-full 2xl:w-[1440px] min-h-screen mx-auto font-jet-brains-mono text-sm md:text-base flex flex-col justify-between gap-3 tracking-tight px-2 md:px-10">
    <nav class="sticky w-full top-0 bg-ivory flex items-center justify-between py-1 md:py-3 z-10">
        <div class="flex gap-4">
            <button class="outline-none hover:bg-black hover:text-ivory p-1 rounded-xs" on:click={() => { $locale = $locale === 'en' ? 'es' : 'en' }}>
                {#if $locale == "es"}
                    <span>.ES</span>
                {:else}
                    <span>.EN</span>
                {/if}
            </button>
        </div>

        <a class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:bg-black hover:text-ivory p-1 rounded-xs" href="/">
            💭
        </a>

        <ul class="flex md:gap-4 uppercase font-bold">
            <a class="hover:bg-black hover:text-ivory p-1 rounded-xs" href="/projects"><li>{$t("proyectos")}</li></a>
            <a class="hover:bg-black hover:text-ivory p-1 rounded-xs" href="/about"><li>{$t("bio")}</li></a>
        </ul>
    </nav>
    
    <slot/>

    <div class="flex justify-between items-center pb-2">
        <div class="outline-none flex items-center gap-1 w-full">
            <button on:click={() => cookies = !cookies}>
                🤝
            </button>
            {#if cookies}
                <span transition:fly={{ x: -25, duration: 250 }} class="text-2xs tracking-tighter -z-10">{$t("cookies")}</span>
            {/if}
        </div>

        <div class="flex justify-center gap-2">
            <a target="_blank" href={"https://github.com/pedrofalco"}><Icon height={18} icon="mdi:github" /></a>
            <a target="_blank" href={"https://www.linkedin.com/in/pedrofalco/"}><Icon height={18} icon="mdi:linkedin" /></a>
            <a target="_blank" href={"https://twitter.com/_pedrofalco"}><Icon height={18} icon="mdi:twitter" /></a>
            <a target="_blank" href={"https://www.instagram.com/pedrofalco_/"}><Icon height={18} icon="mdi:instagram" /></a>
        </div>
    </div>
</div>
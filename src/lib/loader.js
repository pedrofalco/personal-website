import { estilos } from '$lib/utils/config.js';
import { progress } from '$lib/store.js';

let assets = [];

const preloadAssets = async (urls) => {
    let loadedAssets = 0;
    let nAssets = estilos.length + urls.length;

    const promises = urls.map((url) => {
        return new Promise((resolve, reject) => {
            if (url.endsWith('.mp4')) {
                const video = document.createElement('video');
                video.src = url;
                video.onloadeddata = () => {
                    resolve(video.src);
                    loadedAssets++;
                    progress.set((loadedAssets / nAssets) * 100);
                };
                video.onerror = reject;
            } else {
                const img = new Image();
                img.src = url;
                img.onload = () => {
                    resolve(img.src);
                    loadedAssets++;
                    progress.set((loadedAssets / nAssets) * 100);
                };
                img.onerror = reject;
            }
        });
    });

    assets = await Promise.all(promises);

    return assets;
};

export default preloadAssets;

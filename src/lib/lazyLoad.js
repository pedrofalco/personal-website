// lazyLoad.js
export function lazyLoad(node) {
    const lazyLoadObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const media = entry.target;
                    if (media.tagName === 'IMG') {
                        media.src = media.dataset.src;
                    } else if (media.tagName === 'VIDEO') {
                        media.src = media.dataset.src;
                        media.load();
                    }
                    observer.unobserve(media);
                }
            });
        },
        {
            rootMargin: '0px 0px 50px 0px'
        }
    );

    lazyLoadObserver.observe(node);

    return {
        destroy() {
            lazyLoadObserver.unobserve(node);
        }
    };
}

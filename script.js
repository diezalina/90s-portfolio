document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    if (!track) return;

    const SPEED = 0.6; // pixels per frame (increase for faster scroll)
    let offset = 0;

    function step() {
        const first = track.firstElementChild;
        if (!first) return;

        const firstWidth =
            first.getBoundingClientRect().width +
            parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || 0);

        offset += SPEED;

        // move first image to the end once it has fully left the screen
        if (offset >= firstWidth) {
            offset -= firstWidth;
            track.appendChild(first);
        }

        track.style.transform = `translateX(-${offset}px)`;
        requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
});
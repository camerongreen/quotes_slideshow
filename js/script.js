/**
 * Reveal.js slideshow custom.
 * 
 * More info about initialization & config:
 * - https://revealjs.com/initialization/
 * - https://revealjs.com/config/
 */
Reveal.initialize({
    hash: true,
    autoSlide: 20000,
    loop: true,
    shuffle: true,
    transition: 'fade',

    // Learn about plugins: https://revealjs.com/plugins/
    plugins: [RevealMarkdown, RevealHighlight, RevealNotes, RandomColors]
});

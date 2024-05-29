/**
 * Reveal.js slideshow custom.
 * 
 * More info about initialization & config:
 * - https://revealjs.com/initialization/
 * - https://revealjs.com/config/
 */

const slide_ms = 15000;

let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        showQuotes(this);
        initRevealJs(slide_ms);
    }
};

// Get the list of quotes.
xmlhttp.open("GET", "data/quotes.xml", true);
xmlhttp.send();

/**
 * Take the XML doc and make elements out of the items. 
 * 
 * @param {*} xml 
 */
function showQuotes(xml) {

    const xmlDoc = xml.responseXML;
    let items = xmlDoc.getElementsByTagName('item');

    let container = document.querySelector('div.slides');

    for (let item of items) {
        let quote = item.querySelector('quote');
        let author = item.querySelector('author');

        let sectionEl = document.createElement('section');
        sectionEl.setAttribute('data-background-gradient', 'radial-gradient(' + getRandomColor() + ', ' + getRandomColor() + ')');

        let itemEl = document.createElement('div');
        itemEl.classList.add('item');
        sectionEl.appendChild(itemEl);

        let quoteEl = document.createElement('div');
        quoteEl.classList.add('quote');
        quoteEl.textContent = quote.textContent;
        itemEl.appendChild(quoteEl);

        let authorEl = document.createElement('div');
        authorEl.textContent = author.textContent;
        authorEl.classList.add('author');
        itemEl.appendChild(authorEl);

        container.appendChild(sectionEl);
    }
}

/**
 * Reveal yourself.
 * 
 * @param {Number} slide_ms
 *   Number of milliseconds to show each slide.
 */
function initRevealJs(slide_ms) {
    Reveal.initialize({
        hash: true,
        autoSlide: slide_ms,
        loop: true,
        shuffle: true,
        transition: 'fade',

        // Learn about plugins: https://revealjs.com/plugins/
        plugins: [RevealMarkdown, RevealHighlight, RevealNotes]
    });
}

/**
 * https://stackoverflow.com/questions/1484506/random-color-generator
 * 
 * @returns string
 *   Random colour.
 */
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
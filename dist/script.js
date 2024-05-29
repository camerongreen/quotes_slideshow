/**
 * Reveal.js slideshow custom.
 * 
 * More info about initialization & config:
 * - https://revealjs.com/initialization/
 * - https://revealjs.com/config/
 */

let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {

    // Request finished and response 
    // is ready and Status is "OK"
    if (this.readyState == 4 && this.status == 200) {
        showQuotes(this);
    }
};

// employee.xml is the external xml file
xmlhttp.open("GET", "data/quotes.xml", true);
xmlhttp.send();

function showQuotes(xml) {

    const xmlDoc = xml.responseXML;
    let items = xmlDoc.getElementsByTagName('item');

    let container = document.querySelector('div.slides');

    for (let item of items) {
        let quote = item.querySelector('quote');
        let author = item.querySelector('author');

        let sectionEl = document.createElement('section');

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

    Reveal.initialize({
        hash: true,
        autoSlide: 1000,
        loop: true,
        shuffle: true,
        transition: 'fade',

        // Learn about plugins: https://revealjs.com/plugins/
        plugins: [RevealMarkdown, RevealHighlight, RevealNotes]
    });
}

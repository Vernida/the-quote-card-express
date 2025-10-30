"use strict"

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
    source: document.getElementById("source"),
};

const quotes = [
    {
        quote: "All hands! Abandon ship!",
        author: "Captain Picard",
        source: "Star Trek: The Next Generation",
    },

    {
        quote: "Doh!",
        author: "Homer Simpson",
        source: "The Simpsons",
    },

    {
        quote: "...it ’s no use going back to yesterday, because I was a different person then.",
        author: "Lewis Carroll",
        source: "Alice's Adventures in Wonderland",
    }
]

function loopThroughQuotes() {
    let quoteIndex = 0;
    setInterval(() => {
        if (quoteIndex < quotes.length) {
            elements.quote.textContent = quotes[quoteIndex].quote;
            elements.author.textContent = quotes[quoteIndex].author;
            elements.source.textContent = quotes[quoteIndex].source;
            quoteIndex++;
        } else {
            quoteIndex = 0;
        }
    }, 3000)
}

setTimeout(loopThroughQuotes, 3000);
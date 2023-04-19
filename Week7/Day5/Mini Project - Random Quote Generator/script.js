const quotes = [
    { id: 0, author: "Woody Allen", quote: "Eighty percent of success is showing up."},
    { id: 2, author: "Rhett Butler", quote: "Frankly, my dear, I don't give a damn."},
    { id: 3, author: "Thomas Edison", quote: "Genius is one percent inspiration and ninety-nine percent perspiration."},
    { id: 4, author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance, you must keep moving."},
    { id: 5, author: "Oprah Winfrey", quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."},
    { id: 6, author: "Walt Disney", quote: "The way to get started is to quit talking and begin doing."},
    { id: 7, author: "Nelson Mandela", quote: "The greatest glory in living lies not in never falling, but in rising every time we fall."},
    { id: 9, author: "Mother Teresa", quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier."},
    { id: 9, author: "Eleanor Roosevelt", quote: "The future belongs to those who believe in the beauty of their dreams."},
    { id: 10, author: "Benjamin Franklin", quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn."},
    { id: 11, author: "Anne Frank", quote: "Whoever is happy will make others happy too."},
    { id: 12, author: "Tony Robbins", quote: "The only impossible journey is the one you never begin."},
    { id: 13, author: "Will Rogers", quote: "Don't let yesterday take up too much of today."},
    { id: 14, author: "Lao Tzu", quote: "A journey of a thousand miles begins with a single step."},
    { id: 15, author: "J.M. Power", quote: "If you want to make your dreams come true, the first thing you have to do is wake up."},
];

let previousQuote = null;

function getRandomQuote(){
    let quote = null;
    do {
        quote = quotes[Math.floor(Math.random() * quotes.length)]
    } while (quote === previousQuote);
    
    previousQuote = quote;
    return quote;
}

// function getRandomQuote(){
//     let quote = null;
//     if (quotes.length > 0) {
//         const index = Math.floor(Math.random() * quotes.length);
//         quote = quotes[index];
//         quotes.splice(index, 1);
//     }
//     return quote;
// }

function displayQuote(){
    const quoteContainer = document.getElementById("quote-container");
    const quote = getRandomQuote();

    quoteContainer.innerHTML = ` 
    <div>
    <h2>${quote.quote}</h2>
    <p>${quote.author}</p>
    </div> `;
}

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", displayQuote);

displayQuote();
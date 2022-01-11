const quotes = [
    {
        quotes: "Life is either a daring adventure or nothing",
        author: "Helen Keller",
    },
    {
        quotes: "Happiness gives us the energy which is the basis of health",
        author: "Henri-Frederic Amiel",
    },
    {
        quotes: "Opportunities are never lost. The other fellow takes those you miss",
        author: "Unknown",
    },
    {
        quotes: "Let me tell you the secret that has led me to my goal. My strength lies solely in my tenacity",
        author: "Louis Pasteur",
    },
    {
        quotes: "In the field of observation, chance favors only the prepared mind",
        author: "Louis Pasteur",
    },
    {
        quotes: "You create your opportunities by asking for them",
        author: "Patty Hansen",
    },
    {
        quotes: "A minute's success pays the failure of years",
        author: "Robert Browning    ",
    },
    {
        quotes: "I do not know what the future holds, but I know who holds the future",
        author: "Oprah Winfrey",
    },
    {
        quotes: "Ambition is a poor excuse for not having sense enough to be lazy",
        author: "Edgar Bergen",
    },
    {
        quotes: "If you want the present to be different from the past, study the past",
        author: "Baruch Spinoza",
    },
];

const quote = document.querySelector('#quotes span:first-child');
const author = document.querySelector('#quotes span:last-child');

const bunho = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = bunho.quotes;
author.innerText = bunho.author;
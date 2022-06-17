const quotes = [
    {
        quote: "Rather be dead than cool.",
        author: "Kurt Cobain",
    },
    {
        quote: "Wanting to be someone else is a waste of the person you are.",
        author: "Kurt Cobain",
    },
    {
        quote: "The duty of youth is to challenge corruption.",
        author: "Kurt Cobain",
    },
    {
        quote: "When your work speaks for itself, don't interrupt.",
        author: "Henry J. Kaiser",
    },
    {
        quote: "Life is a long lesson in humility.",
        author: "James M. Barrie",
    },
    {
        quote: "Victory belongs to the most persevering.",
        author: "Napoleon Bonaparte",
    },
    {
        quote: "We can draw lessons from the past, but we cannot live in it.",
        author: "Lyndon B. Jonhson",
    },
    {
        quote: "It is a bad plan that admits of no modification.",
        author: "Publilius Syrus",
    },
    {
        quote: "Weakness of attitude becomes weakness of character.",
        author: "Albert Einstein",
    },
    {
        quote: "Never leave that 'till tomorrow which you can do today.",
        author: "Benjamin Franklin",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
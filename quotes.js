const quotes = [
    {
        quote : "When you go through hardships and decide not to surrender, that is strength.",
        author : "A"
    },
    {
        quote : "It is kind of fun to do the impossible.",
        author : "B"
    },
    {
        quote : "Tough times never last, but tough people do.",
        author : "C"
    },
    {
        quote : "I’ve failed over and over and over again in my life and that is why I succeed.",
        author : "D"
    },
    {
        quote : "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
        author : "E"
    },
    {
        quote : "But I know, somehow, that only when it is dark enough can you see the stars.",
        author : "F"
    },
    {
        quote : "Grind Hard, Shine Hard.",
        author : "G"
    },
    {
        quote : "I didn’t get there by wishing for it or hoping for it, but by working for it.",
        author : "H"
    },
    {
        quote : "It is better to fail in originality than to succeed in imitation.",
        author : "I"
    },
    {
        quote : "Success is walking from failure to failure with no loss of enthusiasm.",
        author : "J"
    },
    {
        quote : "All progress takes place outside the comfort zone.",
        author : "K"
    },
    {
        quote : "The way to get started is to quit talking and begin doing.",
        author : "L"
    }
];
const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");
const randomQuotes = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = randomQuotes.quote;
author.innerText = randomQuotes.author;
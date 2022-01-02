const quotes = [
  
  {
    quote: "\"Also beschloss ich, ihn mir selber zu bauen.\"",
    author:"Ferry Porsche"
  }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

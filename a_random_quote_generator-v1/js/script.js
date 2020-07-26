/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
// declared varibles 
let randomQuote;
let randQuoteGen;
let quoteIndex;
let message;
let prntquote;  
// and array of quotes and their authors 
let quotes = [
  {Quote: 'You educate a man; you educate a man. You educate a woman; you educate a generation.', 
    Author: 'Brigham Young'},
  {Quote:'A woman without a man is like a fish without a bicycle.', 
    Author: 'Irena Dunn',
    Citation: 'January 1975'},
  {Quote: 'I know enough to know that no woman should ever marry a man who hated his mother.',
    Author:'Martha Gellhorn', 
         Citation:'Selected Letters'},
  {Quote:'The thing women have yet to learn is nobody gives you power. You just take it.',  
    Author: 'Roseanne Barr'},
  {Quote: 'A feminist is anyone who recognizes the equality and full humanity of women and men.', 
    Author: 'Gloria Steinem'}
];


/***
 * `getRandomQuote` function
***/
// function that randomly selects quotes 
function getRandomQuote () {
  quoteIndex = Math.floor(Math.random() * quotes.length);
    randomQuote = quotes[quoteIndex];
    return randomQuote;
  
}
randQuoteGen = getRandomQuote(quotes);

/***
 * `printQuote` function
***/
function printQuote () {
  randQuoteGen = getRandomQuote(quotes);
  message = "<p class = 'quote'> " + quotes.quote + "</p>" + "<p class='source'>" + quotes.source + "</p>";
  prntQuote = document.querySelector('quotes').innerHTML = message;
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false); 

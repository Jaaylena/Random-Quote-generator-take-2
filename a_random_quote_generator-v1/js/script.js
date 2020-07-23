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
var html = '';
var quotes = [
  {Quote:'You educate a man; you educate a man. You educate a woman; you educate a generation.', 
    Source: 'Brigham Young'},
  {Quote: 'A woman without a man is like a fish without a bicycle.', 
    Source:'Irena Dunn'},
  {Quote: 'I know enough to know that no woman should ever marry a man who hated his mother.',
    Source:'Martha Gellhorn', 
        Citation: 'Selected Letters'},
  {Quote: 'The thing women have yet to learn is nobody gives you power. You just take it.',  
    Source:'Roseanne Barr'},
  {Quote:'A feminist is anyone who recognizes the equality and full humanity of women and men.', 
    Source:'Gloria Steinem'}
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote () {
    var randomQuote, x, i;
    for (i = quotes.length - 1; i > 0; i--) {
        randomQuote = Math.floor(Math.random() * (quotes.length));
        x = getRandomQuote[i];
        getRandomQuote[i] = getRandomQuote[randomQuote];
        getRandomQuote[getRandomQuote] = x;
    }
    return getRandomQuote;
}


/***
 * `printQuote` function
***/

function printQuote () {
  for (var i = 0; i < quotes.length; i++) {
    html += '<div>' + i + '</div>';
  }
  document.getElementById('html').innerHTML = quotes[randomQuote];
}
console.log(quotes);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

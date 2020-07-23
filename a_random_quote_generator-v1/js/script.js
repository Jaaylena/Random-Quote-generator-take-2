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
  ['You educate a man; you educate a man. You educate a woman; you educate a generation.', 'Brigham Young'],
  ['A woman without a man is like a fish without a bicycle.', 'Irena Dunn'],
  ['I know enough to know that no woman should ever marry a man who hated his mother.','Martha Gellhorn', 'Selected Letters'],
  ['The thing women have yet to learn is nobody gives you power. You just take it.',  'Roseanne Barr'],
  ['A feminist is anyone who recognizes the equality and full humanity of women and men.', 'Gloria Steinem']
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote () {
  var randomQuote = Math.floor(Math.random() * (quotes.length));

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

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
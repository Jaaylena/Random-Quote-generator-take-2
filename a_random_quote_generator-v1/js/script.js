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
let randomQuote;
let randomNum;
const quotes = [
  {Quote: 'You educate a man; you educate a man. You educate a woman; you educate a generation.', 
    author: 'Brigham Young'},
  {Quote:'A woman without a man is like a fish without a bicycle.', 
    author: 'Irena Dunn',
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
function getRandomQuote (Quote, Author) {
  Quote = Math.ceil(Quote);
  Author = math.floor(Author);
  RandomNum = math.random() * quotes.length + 1;
  RandomQuote = randomNum;
  return Math.floor(math.random() * (quote - author + 1)) + Quote;
}


  

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

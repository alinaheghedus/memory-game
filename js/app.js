/*
 * Create a list that holds all of your cards
 */
const cards = [{
		
		name: 'diamond',
		class: 'card',
		type: 'fa fa-diamond'                                                                                                                                                  
	},
	{
		name: 'plane',
		class: 'card',
		type: 'fa fa-paper-plane-o'  
	},
	{
		name: 'anchor',
		class: 'card',
		type: 'fa fa-anchor'  
	},
	{
		name: 'bolt',
		class: 'card',
		type: 'fa fa-bolt'  
	},
	{
		name: 'cube',
		class: 'card',
		type: 'fa fa-cube'  
	},
	{
		name: 'leaf',
		class: 'card',
		type: 'fa fa-leaf'  
	},
	{
		name: 'bicycle',
		class: 'card',
		type: 'fa fa-bicycle'  
	},
	{
		name: 'bomb',
		class: 'card',
		type: 'fa fa-bomb'
	}
];

// other variables used
var eStop = 0;
var pairs = [];


// Create the cards list
const cardsList = [...cards, ...cards];
console.log (cardsList);
const deck = document.querySelector('.deck');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
 const shuffledCardsList = shuffle(cardsList); 

 // Load cards function
function loadCards () {
 	for (let card in shuffledCardsList) {
 		const element = `<i class='${shuffledCardsList[card].class} ${shuffledCardsList[card].type}'></i>`;
 		deck.innerHTML += element;
 	}
} 

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

// start game
loadCards();

deck.addEventListener ('click', function (event) {
	if (event.target.tagName === 'I' &&
		eStop < 2 ) {
			eStop += 1;
			event.target.classList.add('show');
		pairs.push(event.target.className);	
	}
	comparePairs();
}) 

function comparePairs () {
	if(pairs[0] === pairs[1]) {
		let seenCards = document.getElementsByClassName('show');
		seenCards[1].classList.replace('show', 'match');
		seenCards[0].classList.replace('show', 'match');
	}
}
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

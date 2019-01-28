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

// variables used
var eStop = 0;
var pairs = [];
var movesCount = 0;
var secondsCount = 0;
var minutesCount = 0;
var timeCount;
var time = document.querySelector ('.time');
var score = document.querySelector ('.stars');
var moves = document.querySelector ('.moves');
var restart = document.querySelector('.restart');


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

deck.addEventListener ('click', function (event) {
	if (event.target.tagName === 'I' &&
		eStop < 2 ) {
			eStop += 1;
			event.target.classList.add('show');
		pairs.push(event.target.className);	

	movesCount += 1;
	moves.textContent = `Moves: ${movesCount}`;
	
	if (movesCount === 1) {
			timer();
	} else if (movesCount <=20) {
		score.innerHTML = `Score: 
			<li><i class="fa fa-star"></i></li>
			<li><i class="fa fa-star"></i></li>
			<li><i class="fa fa-star"></i></li>`;
	} else if (movesCount <40) {
		score.innerHTML = `Score: 
			<li><i class="fa fa-star"></i></li>
			<li><i class="fa fa-star"></i></li>`;
	} else {
		score.innerHTML= `Score: 
			<li><i class="fa fa-star"></i></li>`;
		};

	if (pairs.length === 2) {
		comparePairs();
	}
	}	
}) 


const timer = function () {
	timeCount = setInterval(function () {
		secondsCount += 1;
		if (secondsCount === 60) {
			minutesCount += 1;
			secondsCount = 0;
		};	
		time.innerText = `Time:  ${minutesCount}:${secondsCount}`;
	}
	, 1000);
};

function comparePairs () {
	if(pairs[0] === pairs[1]) {
		let seenCards = document.getElementsByClassName('show');
		seenCards[1].classList.replace('show', 'match');
		seenCards[0].classList.replace('show', 'match');
		eStop = 0;
	} else {
		console.log('unmatch');
		setTimeout(function (){
				let seenCards = document.getElementsByClassName('show');
				seenCards[1].classList.remove('show');
				seenCards[0].classList.remove('show');
				eStop = 0;
			},
			1000
		);
	};
	pairs.pop();
	pairs.pop();
	let timeStop = `Time:  ${minutesCount}:${secondsCount}`;
	time.innerHTML = timeStop;
	successModal();
}

const successModal = function () {
	let container = document.getElementsByClassName('container');
	let matched = document.getElementsByClassName('match');
	let modal = document.createElement('div');
	let modalInfo = 
			`<h3>Great Success!</h3>
			<div>Your Time: ${minutesCount} : ${secondsCount}</div>
			<div class="bullet">${score.innerHTML}</div>
			<h4 id="restartButton"><a href="#" id="restartGame">Replay?</a></h4>`;
	modal.setAttribute('class', 'modal');
	modal.innerHTML = modalInfo;

	if (matched.length === 16) {
		clearInterval(timeCount);
		setTimeout (function () {
			container[0].appendChild(modal);
			let restartGame = document.getElementById ('restartGame');

			restartGame.addEventListener ('click', function(event) {
				event.preventDefault();
				window.location.reload(true);
			})
		}, 600)
	};
};

restart.addEventListener ('click', function (event) {
	event.preventDefault();
	window.location.reload(true);
});
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

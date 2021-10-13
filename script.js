'use strict';

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const randomNumber = Math.trunc(Math.random()*20)+ 1;
let score = 20;
let highScore = 0

checkBtn.addEventListener('click',function(){
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess);
	if (!guess) {
		document.querySelector('.message').textContent = `Enter a Number!!`;
		// When player wins
	} else if(guess === randomNumber){
		document.querySelector('.message').textContent = `You won the match`;
		const number = document.querySelector('.number');
		number.textContent = randomNumber;
		document.body.style.backgroundColor = `#60b347`;
		number.style.width = `30rem`;
		if (score>highScore) {
			highScore= score ;
			document.querySelector('.highscore').textContent = highScore
		}
	} else if(guess !== randomNumber){
		document.querySelector('.message').textContent = guess > randomNumber ? `Guess is too high!!` : `Guess is too low!!`;
		score--;
		document.querySelector('.score').textContent = score;
	} else{
		document.querySelector('.message').textContent = `You lost the game!!`;
		document.body.style.backgroundColor = `#60b347`;
	}
	// else if(guess> randomNumber) { 
	// 	// When Guess is too high
	// 	if(score > 1){
	// 		document.querySelector('.message').textContent = `Guess is too high!!`;
	// 		score--;
	// 		document.querySelector('.score').textContent = score;
	// 	} else{
	// 		document.querySelector('.message').textContent = `You lost the game!!`;
	// 		document.body.style.backgroundColor = `#60b347`;
	// 	}
	// } else if(guess<randomNumber){
	// 	// When Guess is too low
	// 	if(score > 1){
	// 		document.querySelector('.message').textContent = `Guess is too low!!`;
	// 		score--;
	// 		document.querySelector('.score').textContent = score;
	// 	} else{
	// 		document.querySelector('.message').textContent = `You lost the game!!`;
	// 		document.body.style.backgroundColor = `#60b347`;
	// 	}
	// }
});

// Again Functionality
againBtn.addEventListener('click',function(){
	document.querySelector('.message').textContent = `Enter a Number!!`;
	score = 20;
	document.querySelector('.score').textContent = score;
	document.querySelector('.guess').value = ' ';
	document.body.style.backgroundColor = `#222`;
	document.querySelector('.number').textContent = ' ? ';
})
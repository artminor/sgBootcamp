// 1.	As long as there is money, play the game.
// 2.	Each round, the program rolls a virtual pair of dice for the user.
// o	If the sum of the 2 dice is equal to 7, the player wins $4
// o	otherwise, the player loses $1.
// 1.	The game should be laid out like this:
// 2.	The program asks the user how many dollars they have to bet.
// o	If the starting bet is less than or equal to 0, display an error message.
// 3.	When the user clicks the Play button, the program then rolls the dice repeatedly until all the money is gone.
// o	Hint: Use a loop construct to keep playing until the money is gone.
// o	Hint: We created a rollDice() function in the Rolling Dice exercise.
// 4.	The program keeps track of how many rolls were taken before the money ran out.
// 5.	The program keeps track of the maximum amount of money held by the player.
// 6.	The program keeps track of how many rolls were taken at the point when the user held the most money.
// o	Hint: For steps 4, 5, and 6, declare some variables.
// 7.	When the game is over, display the following output:
// Note: Give your user the opportunity to play again.




var sum = 0;

function luckySevens() {

  var enteredNum = document.getElementById("userNum").value;
  if (enteredNum >= 0) {
    window.alert("playing1");
        // anotherFunction();
  } else {
    window.alert("Cannot play with less than 0");
  }
}

// function anotherFunction() {
//   var diceOne = Math.ceil(Math.random() * 6);
//   var diceTwo = Math.ceil(Math.random() * 6);
//   var sum = diceOne + diceTwo;
//   if (sum === 7) {
//     enteredNum += 4;
//   } else {
//     enteredNum -= 1;
//   }
// }

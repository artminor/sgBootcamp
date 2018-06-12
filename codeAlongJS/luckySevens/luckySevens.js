// 1.	As long as there is money, play the game.
// 2.	Each round, the program rolls a virtual pair of dice for the user.
// o	If the sum of the 2 dice is equal to 7, the player wins $4
// o	otherwise, the player loses $1.
// 1.	The game should be laid out like this:
// 2.	The program asks the user how many dollars they have to bet.
// o	If the starting bet is less than or equal to 0, display an error message.
// 3.	When the user clicks the Play button, the program then rolls the dice repeatedly until all the money is gone.
// o	Hint: Use a loop construct to keep playing until the money is gone.

// 4.	The program keeps track of how many rolls were taken before the money ran out.

// 6.	The program keeps track of how many rolls were taken at the point when the user held the most money.
// o	Hint: For steps 4, 5, and 6, declare some variables.
// 7.	When the game is over, display the following output:
// Note: Give your user the opportunity to play again.


var sum = 0;
var money = 0;
var allMoney = [];
var maxMoney;
var highestRollCount;
var totalRolls = 0;


function rollDice() {
  document.getElementById("play").innerHTML = "Play Again";

  var balance = document.getElementById("betAmount").value
  var diceOne = Math.ceil(Math.random() * 6);
  var diceTwo = Math.ceil(Math.random() * 6);
  var diceSum = diceOne + diceTwo;

  if (balance > 0) {
    if (diceSum === 7) {
      money += 4;
      allMoney.push(money);
      totalRolls++;
      console.log(money, allMoney);
    } else {
      money--;
      allMoney.push(money);
      console.log(money, allMoney);
    }

  } else {
    alert("Cannot play with less than 0");
  }


  maxMoney = Math.max.apply(Math, allMoney);
  totalRolls = maxMoney.length;

  return alert('program ran');

}

document.getElementById("startingBet").innerHTML = document.getElementById("betAmount").value;;
document.getElementById("totalRolls").innerHTML = totalRolls;
document.getElementById("highestAmount").innerHTML = allMoney;
document.getElementById("highestRollCount").innerHTML = rollCount;
function rollDice(minimum, maximum) {
    return Math.ceil(Math.random() * (1 + maximum - minimum));
}

for (var i = 0; i < 100; i++) {
    console.log(rollDice());
}


//
// In Chrome's Developer Tools Console, solve the following problem:
// You are given the following function:
// Add code to the function in the function body to return the sum of firstNumber and secondNumber.
//
// Do not change the name of the function or its parameters.

function addTwoNumbers(firstNumber, secondNumber){
    var sum = firstNumber+secondNumber;
    return sum;
}

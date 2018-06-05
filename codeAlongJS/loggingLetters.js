var sentence = "I love learning software development";

for (var i=0; i < sentence.length; i++) {
     if(sentence[i] !== " "){
      console.log(sentence[i]);
     }
}

// Using if and else, make decisions based on the values of n and result with the following rules:
// When n is even, set the value of result to result's current value plus 10.
// When n is odd, set the value of result to result's current value minus the value of n.
// Do not declare new variables.
// Be sure your solution works for all values of n and result.
var n = 25;
var result = 0;
if(n%2===1){
  result-=n;
  console.log(result);
}

// In Chrome's Developer Tools Console, solve the following problem:
// You are given one numeric variable:
// var n = 25;
// Its value may change when you submit.
// Declare a new variable named "sum" and initialize it to 0. Be sure to use the var keyword.
// Use a for loop to add every positive integer less than n to sum.
// Come up with a solution that works for all values of n.
var sum = 0;
for(var i = 0; i<n; i++){
  sum+=i;
  console.log("sum:" +sum+ " decrement:" + i);
}



//
// // Check to see if the user likes cake
// var likesCake = confirm("Do you like cake?");
// // If the user likes cake, find out what their favorite cake is
// if (likesCake) {
//     var favoriteCake = prompt("What is your favorite cake?");
//     // Alert them that their favorite cake is whatever they inputted
//     // from the prompt() function
//     alert("Your favorite cake is: " + favoriteCake);
// } else {
//     // If the user doesn't like cake, show an alert that the cake is a lie
//     alert("The cake is a lie anyhow.");
// }

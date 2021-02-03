let userNumber = 100;
let counter = 0;
let maxTries = 8;

let randomNumber = Math.floor(Math.random() * userNumber + 1);

let attempts = prompt(`please pick a number between 1 and ${userNumber}`);
while(attempts != randomNumber) {
   let attempts = prompt(`please pick a number between 1 and ${userNumber}`);
   counter += 1;
    
   if(counter > maxTries) {
       document.write("No more tries left.Press f5 to play again");
       break;
   }

   if(attempts == randomNumber) {
       document.write("Congrats, You guessed the correct number");
       document.write(`<p>The random number was ${randomNumber}</p>`);
       document.write(`<p>It took you ${counter} attempts</p>`);
   }
}

console.log("program complete");

// let button = document.getElementById('btn');
// let output = document.getElementById('guess');
 
// let randomNumber = Math.floor(Math.random() * 101);
// // console.log(randomNumber);

// // var guess;
// // guess = prompt('Enter a number here');

// // if(guess < randomNumber) {


// btn.addEventListener("click", function(){
//  let input = document.getElementById('userInput').value; //displays the input the user writes
// if(input == number) {
//    output.innerHTML = `You guessed right, your number was ${randomNumber}`; 
// } else if(input < number){
//        output.innerHTML = `You guessed too low!`
// };
// if(input > number) {
//     output.innerHTML = `You guessed too high`;
// };
// });
//  const guess = document.querySelector(".guess");
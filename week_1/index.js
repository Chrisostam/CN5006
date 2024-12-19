/*exercise 1
console.log("This is my first program")
console.log("Well come John your month salary is 500000")

//exercise 2
const num1 = 5;
const num2 = 3;
const sum = num1 + num2;
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

const prompt = require("prompt-sync")({sigint:true});

const number = parseInt(prompt("Enter a Number: "));

if (number > 0) {
    console.log("The number is positive");
   }
   else if (number == 0) {
    console.log("The number is zero");
   }

   else {
    console.log("The number is negative");
   }
*/

//program for  addition, subtraction, multiplication, and division of two or more numbers.
const prompt = require("prompt-sync")({sigint:true});
console.log("Enter number:: (enter 'x' to stop entering number)");

const numbers = [];
while (true) {
    const input = prompt('Enter a number :: ');
    if (input === 'x'){break}
    numbers.push(parseInt(input));
}

var sum = 0;
var diff = 0;
var prod = 1;
var div = 1;

for ( let i = 0; i < numbers.length; i++){
    sum += numbers[i];
    diff -= numbers[i];
    prod *= numbers[i];
    div /= numbers[i];
}
console.log("Addition :: " + sum)
console.log("Subtraction :: " + diff)
console.log("Multiplication :: " + prod)
console.log("Division :: " + div)




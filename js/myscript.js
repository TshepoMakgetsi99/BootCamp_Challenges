// TASK 1 Answer...........................................................................

// x = 0
// y = 1
// Print the value of x
// Print the value of y
// x = x + 3
// y = y + x
// Print the value of x
// Print the value of y


// answer........................................................................................
// part 1

let x = 0;
let y = 1;

console.log(x);
console.log(y);

// Part 2

let X = x + 3;
let Y = y + X;

console.log(X);
console.log(Y);


// TASK 2 Question........................................................................

// x = 1 + 1 * 2
// y = (1 + 1) * 2
// z = 1 + ( 1 * 2 )
// a =  1 + 1 * 2 / 2
// b =  (1 + 1 * 2 ) /  2

// answer................................................................................

let Resultx = 1 + 1 * 2;
let Resulty = (1 + 1) * 2;
let Resultz = 1 + ( 1 * 2 );
let Resulta =  1 + 1 * 2 / 2;
let Resultb =  (1 + 1 * 2 ) /  2;

console.log(Resultx);
console.log(Resulty);
console.log(Resultz);
console.log(Resulta);
console.log(Resultb);

// TASK 3 Question.........................................................................
// Write a function that takes 2 numbers as input. If either of the numbers is 65, OR if the sum of the numbers is 65 then return true. Otherwise return false

// Answer...............................................................................

const always = 65;
let numOne = 6;
let numTwo = 45;

let sum = numOne + numTwo ;

if (sum === always || numOne === always || numTwo === always){
    console.log("true");
}else{
    console.log("false");
};

// TASK 4 Question...............................................................
// Write a function that takes 2 numbers as input. If either of the numbers is 3 AND the sum of the numbers contains a 3 then return true. Otherwise return false

// Answer...............................................................................
const alwaysNow = 3;
let InputOne = 3;
let InputTwo = 0;

let Newsum = InputOne + InputTwo ;

if (InputOne === alwaysNow && Newsum === alwaysNow ){
    console.log("true");
}else if (InputTwo === alwaysNow && Newsum === alwaysNow ){
    console.log("true");
}else {
    console.log("false");
};

// Task 7
function Ftshe(celsius) 
{
  let fTemp = celsius;
  let fToFahr = fTemp * 9 / 5 + 32;
  let message = fTemp+'\xB0C is ' + fToFahr + ' \xB0F.';
    console.log(message);
}

function fDim(fahrenheit) 
{
  let dTemp = fahrenheit;
  let dToCel = (dTemp - 32) * 5 / 9;
  let message = dTemp+'\xB0F is ' + dToCel + '\xB0C.';
    console.log(message);
} 
Ftshe(60);
 fDim(145);
// Task 8
function timeConvertt(n) {
    let num = 71;
    let hours = (num / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
    }
    
    console.log(timeConvertt(200));

    // Task 8
// function timeConverter(n) {
//     var number = 133;
//     var hours = (number / 60);
//     var remainhours = Math.floor(hours);
//     var minutes = (hours - remainhours) * 60;
//     var remainingminutes = Math.round(minutes);
//     return number + " minutes = " + remainhours + " hour(s) and " + remainingminutes + " minute(s).";
//     }
    
//     console.log(timeConverter(200));


    // Task 9
    let multiples = function (n) {
        let sum = 0;
        for (let i = 1; i < n; i++) {
            if ((i % 3 == 0) || (i % 5 == 0)) {
                sum += i;
            }
        }
        document.write(sum);
    };
    
    
    multiples(1000);
    
    console.log(sum);
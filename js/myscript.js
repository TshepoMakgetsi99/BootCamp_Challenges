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

// Test 5
// Write a function that takes in three numbers. These numbers represent the lengths of the sides of a triangle. The function should return the area of a triangle.
    let b = 4;
    let h = 4;

    let area = (b*h)/2;
    console.log(area)

    // TASK 6
    // White a function that takes in three numbers and returns the maximum number. Do this without using any builtin methods. Write your own logic from scratch.

    const Newarray = [375,5000,150]

    Newarray.sort()
    
    Newarray.sort((a,b) => a-b)
    
    const highest = Newarray[Newarray.length-1]
    console.log(highest);
    

// Task 7
// Write a function that takes in a number representing the temperature in Celsius and returns the temperature in Fahrenheit. Write another function that does the opposite (Fereignheit to Celsius)
function Ftshe(celsius) 
{
  let fTem = celsius;
  let fToFahr = fTem * 9 / 5 + 32;
  let message = fTem+'\xB0C is ' + fToFahr + ' \xB0F.';
    console.log(message);
}

function fDim(fahrenheit) 
{
  let dTem = fahrenheit;
  let dToCel = (dTem - 32) * 5 / 9;
  let message = dTem+'\xB0F is ' + dToCel + '\xB0C.';
    console.log(message);
} 
Ftshe(40);
 fDim(45);
 
// Task 8
// Make a function to convert any number into hours and minutes. (For example, 71 will become “1 hour, 11 minutes”; 133 will become “2 hours, 13 minutes”.)
function timeConvertt(n) {
    let num = 100;
    let hours = (num / 60);
    let Thours = Math.floor(hours);
    let minutes = (hours - Thours) * 60;
    let Tminutes = Math.round(minutes);
    return num + " minutes = " + Thours + " hour(s) and " + Tminutes + " minute(s).";
    }
    
    console.log(timeConvertt());

    // Task 9
    // If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
        // Find the sum of all the multiples of 3 or 5 below 1000.

    let natural  = function (n) {
        let sum = 0;
        for (let i = 1; i < n; i++) {
            if ((i % 3 == 0) || (i % 5 == 0)) {
                sum += i;
            }
        }
        document.write(sum);
    };
    
    
    natural (10);

// Task 10
// Write a function that takes in a string and then prints out all the vowels in the string. Make sure it can deal with capital letters and small letters.

let vowels = "aeiouAEIOU";
let string = "HellO challenGe";

let array = "";
for (i = 0; i < string.length; i++){
    if(vowels.indexOf(string[i]) >= 0) array += string[i];

}
console.log(array);

// Task 11
// Make a function that takes two strings as input, and outputs the common characters/letters that they share. (For example, Input: ‘house’, ‘computers’ . Output: ‘Common letters: o, u, e, s’)

function findCommonLetter(string1, string2) {
    let string1ToArray = Array.from(string1);
    let string2ToArray = Array.from(string2);

let commonLetters = string2ToArray.filter(value => {
    return string1ToArray.indexOf(value) != -1;
});

console.log(`Common letters: ${commonLetters}`);
}

findCommonLetter('Tshepo', 'Makgetsi');


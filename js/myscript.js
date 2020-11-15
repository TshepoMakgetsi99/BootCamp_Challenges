// TASK 1 Answer...........................................................................

// x = 0
// y = 1
// Print the value of x
// Print the value of y
// x = x + 3
// y = y + x
// Print the value of x
// Print the value of y


// pseudocode
// a notation resembling a simplified programming language, used in program design.

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



let ltx = 1 + 1 * 2;
let lty = (1 + 1) * 2;
let ltz = 1 + ( 1 * 2 );
let lta =  1 + 1 * 2 / 2;
let ltb =  (1 + 1 * 2 ) /  2;

console.log(ltx);
console.log(lty);
console.log(ltz);
console.log(lta);
console.log(ltb);



// Write a function that takes 2 numbers as input. If either of the numbers is 65, OR if the sum of the numbers is 65 then return true. Otherwise return false.
function numbers(x,y){
  if (x == 65 || y == 65||(x + y)  == 65){
      return true;
  }
  else{
      return false;
  }
}

console.log(numbers(65,50));
console.log(numbers(30,6));




// TASK 4 Question...............................................................
// Write a function that takes 2 numbers as input. If either of the numbers is 3 AND the sum of the numbers contains a 3 then return true. Otherwise return false

// Answer...............................................................................
function three(x, y){
    //toString converts the sum to a string and .search searches for 3.
    //search returns a -1 if it is not found that's why !== -1 is used
    if((x == 3 || y == 3) && (x + y)
    .toString().search('3') !== -1){
        return true;
    }
    return false;
} 
console.log(three(3,5));
console.log(three(30,3));


// Test 5
// Write a function that takes in three numbers. These numbers represent the lengths of the sides of a triangle. The function should return the area of a triangle.
function TriangleArea(side1, side2, side3) {

    let s = (side1+side2+side3)/2;
    let area = Math.sqrt(s*(s - side1)*(s-side2)*(s-side3));

    console.log(area);

}
        TriangleArea(2,4,4);

    // TASK 6
    // White a function that takes in three numbers and returns the maximum number. Do this without using any builtin methods. Write your own logic from scratch.

        // Here we say return rather than console.log because we do not just want the value
        // to be displayed we want to store it so that we can use it later.
    // So now when we call this it won’t display on the console

function max(number1, number2, number3) {
      
    return Math.max(number1, number2, number3);
   }

    console.log(max(2,45,3));

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
function timeConvert(n){
    let hours = Math.floor(n / 60);
    let minutes = n % 60;
    return n + " = " + hours + " hour(s) and " + minutes + " minute(s).";
}
        console.log(timeConvert(71));

    // Task 9
    // If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
        // Find the sum of all the multiples of 3 or 5 below 1000.
        let sum = 0;
        for (let v = 0; v < 1000; v++)
        {
            if (v % 3 === 0 || v % 5 === 0)
            {
               sum += v;
            }
        }
        console.log(sum);

    // Task 10
    // Write a function that takes in a string and then prints out all the vowels in the string. Make sure it can deal with capital letters and small letters.
  function getVowels(word) {

    let vowels = /[aeiouAEIOU]/g;
//global search with regular expression for vowels
    console.log(word.match(vowels));
    }


    getVowels('TshepoEnestinahMakgetsi');

// Task 11
// Make a function that takes two strings as input, and outputs the common characters/letters that they share. (For example, Input: ‘house’, ‘computers’ . Output: ‘Common letters: o, u, e, s’)

function find(string1, string2) {
    let string1ToArray = Array.from(string1);
    let string2ToArray = Array.from(string2);

let common = string2ToArray.filter(value => {
    return string1ToArray.indexOf(value) != -1;
});

console.log(`Common letters: ${common}`);
}

find('Enestinah', 'Makgetsi');





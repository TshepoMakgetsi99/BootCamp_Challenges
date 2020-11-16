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

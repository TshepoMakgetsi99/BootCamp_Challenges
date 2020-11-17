// Task 7
// Write a function that takes in a number representing the temperature in Celsius and returns the temperature in Fahrenheit. Write another function that does the opposite (Fereignheit to Celsius)
function cTshe(celsius) 
{
  const cTemp = celsius;
  const cToFahr = cTemp * 9 / 5 + 32;
  const message = ` ${cToFahr} \xB0F.`;
    console.log(message);
}

function fTha(fahrenheit) 
{
  const fTemperature = fahrenheit;
  const fToCelsius = (fTemperature - 32) * 5 / 9;
  const message = ` ${fToCelsius}\xB0C.`;
    console.log(message);
} 
cTshe(80);
fTha(55);


// TASK 4 Question...............................................................
// Write a function that takes 2 numbers as input. If either of the numbers is 3 AND the sum of the numbers contains a 3 then return true. Otherwise return false

// Answer...............................................................................
function three(x, y) 
{
  return ((x == 3 || y == 3) || (x + y == 3));
}
console.log(three(3, 3))
console.log(three(5, 3))
console.log(three(15, 15))
console.log(three(20, 30))


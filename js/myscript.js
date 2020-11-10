// Task 3

// Write a function that takes 2 numbers as input. If either of the numbers is 65, OR if the sum of the numbers is 65 then return true. Otherwise return false.
function numbers(x,y)
{
  return ((x == 65 || y == 65)||(x + y == 65));
}
console.log(numbers(65, 65))
console.log(numbers(20, 20))




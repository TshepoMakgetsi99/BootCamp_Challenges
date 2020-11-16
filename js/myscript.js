
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

// Task 8
// Make a function to convert any number into hours and minutes. (For example, 71 will become “1 hour, 11 minutes”; 133 will become “2 hours, 13 minutes”.)
function timeConvert(n){
    let hours = Math.floor(n / 60);
    let minutes = n % 60;
    return n + " = " + hours + " hour(s) and " + minutes + " minute(s).";
}
        console.log(timeConvert(71));

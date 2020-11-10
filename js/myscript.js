
// Task 8
// Make a function to convert any number into hours and minutes. (For example, 71 will become “1 hour, 11 minutes”; 133 will become “2 hours, 13 minutes”.)

function timeConvertt(n) {
    let number = 100;
    let hours = (number / 60);
    let rehours = Math.floor(hours);
    let minutes = (hours - rehours) * 60;
    let remminutes = Math.round(minutes);
    return number + " minutes = " + rehours + " hour(s) and " + remminutes + " minute(s).";
    }
    
    console.log(timeConvertt());

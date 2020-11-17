
    // TASK 6
    // White a function that takes in three numbers and returns the maximum number. Do this without using any builtin methods. Write your own logic from scratch.

    function max_number(num1, num2, num3) 
    {
     max_num = 0;
     if (num1 > num2)
     {
       max_num = num1;
     } else
     {
       max_num = num2;
     }
     if (num3 > max_num) 
     {
       max_num = num3;
     }
     return max_num;
   }
   
   console.log(max_number(10, 1999,7));
		
    
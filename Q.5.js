function average(a, b) {
    return a + b / 2;
    }
    console.log(average(2, 1));
    
/*
In the above function the result of the average will be not right 
because as we know that according to the rule of the 
operators precedence division will perform first in above code
*/

//For the right answer we should apply this code syntax at return 
return (a + b) / 2;
/*
 Ques: what is looping ?
 Ans:
    Based on some conditon we can repeat (iterate) some statement is know as looping

    while loop : while loop will execute as long as the condition is true:

    the three important things that we need to know for every loop
    1. Initializaino ( Starting point )  
    2. How much value we need increase
    3. where to stop 

    while loop syntax:
        while(condition)
        {
            statement  
        }
 */

//  Example 1 : print 1....... 10 numbers using while loop

/*  let i : number = 1;  // first point this is initialzation whre we need to start
 while(i<11)
     {
      console.log(i);
      i++;       
 } */

// Example 2 : print only even numbers between 1 to 10
// first method

let i: number = 1;
while (i < 11) {
    if (i % 2 == 0) {
        console.log(`Even numbers are: ${i}`);
    }
    i++;
}


// second method 
i = 2;
while (i < 11) {
    console.log(`Even numbers are: ${i} using second method`);
    i += 2;  // i = i+ 2;
}

//  Print 1 to 10 numbers in decending order
i = 10;
 console.log(" Decrement values from 10 to 1 :");
while(i>=0){
    console.log(i);
    i--;
}

// infinite loop => when the condition never go flase it will go to infinite loop
/* 
while(true){
    console.log(1);
} */

    
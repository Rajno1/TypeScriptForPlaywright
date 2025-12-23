/* 
    We have 2 jumping statements 1. break 2 continue
 */
//break: when ever we want to skip execusion at some condition

/* for(let i = 1 ; i<=10 ; i++){
    console.log(i);
} */

// the above for loop will print the valuse from 1 to 10

// example 1 : But by using the same above for loop i want to come out of exectusion when i -6

/* for(let i = 1 ; i<=10 ; i++){
    if(i==5){
        break;
    }
    console.log(i); // now the output 1 2 3 4, when ever i become it came out of the loop
} */

// example 2: 

// Continue: when ever we want to skip some values we use continue

// Scenario 1: i want to print the number 1 to 10 WITHOUT number 5 

/* for(let i =1 ; i<=10; i++){
    if(i==5){
        continue;
    }
    console.log(i); // the out put will be 1 to 10 with out 5 
} 
    
// Scenario 2: i want to print the number 1 to 10 WITHOUT number 3,5,7 

for(let i =1 ; i<=10; i++){
    if(i==3 || i==5 || i==7){
        continue;
    }
    console.log(i); // the out put will be 1 to 10 with out 3,5,7 
} 
*/

    // example 3: print only even number using for loop from 1 to 10 

    for(let i =1 ; i<=10 ;i++){
        if(i%2==0){
            console.log(i);
        }
    }

    // by changing only one line from above code we can right odd number from 1 to 10

     for(let i =1 ; i<=10 ;i++){
        if(i%2==0){
            continue;
        }
        console.log(i);  // it will print odd number
    }
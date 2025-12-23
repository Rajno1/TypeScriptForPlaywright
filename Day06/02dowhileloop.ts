/* 
    Do while loop always executes at least once before checking the condtions

    syntax 
            do{
                statements
            }while(condtion);
*/

// print the numbers from 1 --- 5 using do while loop
export{}

// Example 1;
let i : number = 1;
do{
    console.log(i);
    i++;
}while(i<6); 
//output will be from 1 2 3 4 5 

// example 2
i = 10;
do{
    console.log(i);
    i++
}while(i<6); 
// output is 10 , after that it will check the condition which will get fail

// print numbers from 10 to 1 in decrement order using do while
i = 10;
do{
    console.log(i);
    i--;
}while(i>=1); // it will 


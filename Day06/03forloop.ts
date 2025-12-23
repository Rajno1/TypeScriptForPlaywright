/* 
    for loop is typically used when you know the iterations beforeahead.
    in whlie loop we do initialization, condition and increment/ decrement in three
    different steps but in for loop we can do all 3 in one place 

    syntax:

    for(initialzation ; condition ; inc/decremnet)
    {
     statement;
    }
 */

    //  print 1 to 10 numbers using for loop

    for(let i:number=10 ; i>=1 ; i--){
        console.log(i);
    }

    // print only even numbers from 1 to 10 using for loop

    for(let i=2 ; i<=10 ; i+=2){
        console.log(i);
    }

    /*
    lets see the concept of local and global variables in for loop 
     */

    export{}
    let i : number;  // this is global number
    for(i=1 ; i<=5 ; i ++){  

        /*
         above  i =2 represents the global num only 
        but if you declare let i = 2 it will local varible only belongs to the for loop 
         */

        console.log(i); // 1---5
    }
    console.log(i); // 6 

    // another example
    let a:number;
    for(a=1;a<=5;a++);
    console.log(a);

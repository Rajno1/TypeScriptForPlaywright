/* 
In Typescript we have 2 types of statements
    1. Conditional Statemts / Decision making statements
    2. Looping Statements /iterative statemen
 */

/*  
    1. if condition

    Syntax : if (condition)
                {
                    // Statement to execute
    
                        }
 */
// Example 1: if the age is greate than equal to 18 it should print " you are eligible for voting"

/* let age : number = 20;

if(age >= 18){
    console.log(`your age is ${age} so you are elibigle for voting`)
   }   */

/*  
    1. if else condition

    Syntax : if (condition)
                {
                    if condition is ture this session will execute
                 } else {
                    if the condition is false this bock will get execute
                    }
                    
 */
// Example 2: if a number is dived by 2 its is even if not odd
/* 
let num : number = 13;

if(num%2 == 0){
    console.log(`the ${num} is an even number`)
} else{
    console.log(`the ${num} is an odd number`)
}*/

// using else if print Grand value based on marks

/*
if
 marks >=90  Grade A
 marks >=75 Grade B
 marks >=60 Grade C
 else Grade D
 */

 /* let marks : number = 35;

 if( marks >= 90 && marks <= 100){
    console.log(`You got ${marks} marks you got Grade A`);
 }else if( marks >= 75 && marks <90){
    console.log(`You got ${marks} marks you got Grade B`);
 }else if( marks >= 60 && marks <75){
    console.log(`You got ${marks} marks you got Grade C`);
 } else {
    console.log(`You got ${marks} marks you got Grade D`);
 } */

  // another Scenario using else if  print the reslut based on the browse name
/* 
  let browser : string = "saaafari";

  if(browser === "chrome"){
    console.log(`browser name is chrome`)
  }else if(browser === "firefox"){
    console.log(`browser name is firefox`)
  }else if(browser === "safari"){
    console.log(`browser name is safari`)
  } else{
    console.log("Not a valid entry");
  }
 */

  /*
   if we have multiple conditions insted of using else if better to go switch statement
   
    swith case statement 

    syntax for switch case

        switch (expression) // here we are using expretsion insted condition why ?
        {
        case value 1 : statement;
                        break;
        case value 1 : statement;
                        break;
        case value 1 : statement;
                        break;
        default : statement ;    
        }
  
        Ques: What is the difference between condition and expression ?
        Ans:   
            Condition will always return either true or false but expression can written anything 
            like integer , string or boolean valuse
   */

   // print week name based on number entry
   
   let day : number = 8;

   switch (day)
   {
    case 1 :
        console.log(" Today is Sunday");
        break;
    case 2 :
        console.log(" Today is Monday");
    
    case 3 :
        console.log(" Today is Tuesday");
        break;    break;    
    case 4 :
        console.log(" Today is Wednesday");
        break;
    case 5 :
        console.log(" Today is Thursday");
        break; 
    case 6 :
        console.log(" Today is Friday");
        break;       
    case 7 :
        console.log(" Today is Saturday");
        break; 
    default :
           console.log(" wrong entry "); 
    }
/* 
    In Type script functions have special features like call back function and function overloading

    Callback function: it is a function that is passed as an argument to anothre function and get execute later
    (or) we can pass function itself as a parameter

    Why we use call back funciton ?
    * userful when you want to exectue a function after the execution of another function
    * common in asynchronous calls like API calls, file handling or event handling 
    * synchronou means the code runs in a perticular sequence of instructions given in the program 
    * where as asynchronous code execustion allows the execusion of upcoming instructions immediately

    Ques : what is the difference between parameters and arguments ?
    Ans: the values that we are passing to parameters are known as arguments 

      */

// Example 1:
// This is the fucntion that takes call back function as parameter
/* function greet(name:string,callback:(msg:string)=>void)
{
    console.log(name);
    callback("Welcome");
}

// This is call back function
function message(msg:string):void
{
    console.log(msg);
}
// calling the funciton 'message' by passing as an argument to greet function
greet("Raj",message);
 */
// example 2

function marks(a:number,b:number,showreslut:(reslut:number)=> void)
{
    
    let output = a+b;
    showreslut(output);

}

 function displayResult(result:number):void{
    console.log(result);
 }

 marks(10,20,displayResult);

 /* 
    Very IMP: In real time  to solve this Asynchronous nature in JavaScript and TypeScript we go for callback functions
    but in Playwright we have pre defind key words like "await & async()" methods to solve this Asynchronous nature.
    so developement point of you developer will use this callback function for Testting we dont use this callback function
  
 */
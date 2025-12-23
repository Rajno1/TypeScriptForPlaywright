/* 
    Ques: what is function ?
    Ans: a function is a block of code which we can re use by calling it.
    Ques: why we need to use the function ?
    Ans: Because of re usability

    we have mainly 3 types of functions like 
     1. Named funcations 
     2. Anonimus functions (no name)
     3. Arrow functions ( lamda )
 
 1. Named functions: creating a function with name 

 syntax:

 function function_name(parameters) : returnType 
 {
    block of code
 }
 
 we can call function by using name ex; function_name();
     */

//  function 1 : named function with no parameters and no returnd type 

function display():void
{
    console.log("Hello! Welcome to functions");
}
display(); // Here we are calling the funcation display()

// function 2: Named function with parameters and return value
/* 
    Qes: what is the difference between the function and method ?
    Ans: like function method is also a block of code which we can re use by calling
    BUT if a function with in the class then we call it as a method 
*/
function add(a:number, b:number): number {
    return a+b;
}
let result:number = add(5,7);
console.log(result);


// function 3: named function with Rest parameters
/* 
Ques: What is Rest Parameters ?
Ans: When we create a funcaiton with paramets at time of calling we should pass the values 
for all parameters that we declared , it will through compile time error if we pass more 
than that parameters or less than that parameters. BUT
it can be possible in Rest parameters to pass n numbers of parameters more or less than the decalared.

Reste parameters do not restrictt the number of values that you can pass to a function.

syntax: funcation function_name(...num:number[]): number
{
block of code
}

here (...num:number[])
...num is a variable name 
:number[] as we are having n number of variables we are storing in an array

 */

// Function 3:  function with Rest Parameter - with same type (number)

/* function addition(...nums:number[])
{

    let i;
    let sum:number = 0;

    for(i=0;i<nums.length;i++){
        sum += nums[i];
    }
   console.log("sum of numbers : ", sum)
}

addition(1,2,3); */

// Function 4: function with Rest Parameter - with multiple types (number,String,boolean---)

/* function findElements(...elements:(number | string )[]):number
{
    return elements.length;
}
console.log(findElements(2,3,"Raju",2,4,6,"Ravi","Rani"));
console.log(findElements(1,2,3,4,5,6,7,8,9,10,11,12));
console.log(findElements("One","two","three"));


// Function 5: function with option parameters - just add ' ? ' to any one argument to make option parameter
function details(id:number , name:string, email?:string):void{
    console.log(id);
    console.log(name);
    if(email!== undefined){
    console.log(email);
    }   
}
details(79,"Scotty@email.com"); */

//  function6: named function with default parameter

function discountCalculation(price:number , rate:number=0.50): void{
    let discount:number = price * rate;
    console.log("Discount amount is : ", discount);
}
discountCalculation(1000,0.30);
discountCalculation(1000);

/* 
    Ques : what are the functions with Rest parameters, Optional parameters and Default parameters 
    explain with example ?
    
 */
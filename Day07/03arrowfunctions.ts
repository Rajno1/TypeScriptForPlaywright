/* 
Arrow functions or lambda functions
* lambda function refers to the anonymous function in programing
* lambda function is a consic mechanisum (reduce code) of anonymous function 
* these functions are called Arrow functions

    There are 3 parts of Arrow function
    1. parameters
    2. Fat arrow notation or lambda notation ( => ) it is also called as the goes to operator
    3. statment 
syntax:
        let variable = (parameters) => 
        {
        }
        variable(); // calling arrow functions

*/

//  Example 1: Arrow function with no parameters and no return type 
let msg = ():void =>{
    console.log("Welcome to Arrow functions");
}
msg();


//  Example 2: Arrow function with parameters and return type 
let multiplication = (a:number , b:number): number =>
{
return a*b;
}

console.log(multiplication(5,10));


/* 
 Example 3: Arrow function with implicit return
 in arrow function if we have single statemnet the { } and retrun type optional no need 
// */ 

let mul = (a:number , b:number): number => a*b;
console.log(mul(3,2));

// Example 4: Arrow function with Optionla parameter

let details = (id:number , name:string, email?:string):void =>
{
    console.log(id);
    console.log(name);
    if(email!== undefined){
    console.log(email);
    }   
}
details(79,"Scotty@email.com");


// Example 5: Arrow function with default parameters

let discount =(price:number , rate:number=0.50): void =>
{
    let discount:number = price * rate;
    console.log("Discount amount is : ", discount);
}
discount(1000,0.30);
discount(1000);
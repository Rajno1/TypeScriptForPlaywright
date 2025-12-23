/* 
  Anonymous funciton is un named fuction
  Anonymous function is a function that does not have any name
  insted, it assigned to a variable , which acts as its name

  syntax:
            let variable = function(parameters)
            {
                code 
            }
                variable(); //calling the function
 */

// Example 1: simple anonymous founction 
let greetings = function(): string {
    return " Welcome to the topic of Anonymous function";
}
console.log(greetings());

// Example 2: Anonymous function with parameters

let add = function(x:number,y:number):number
{
    return x+y;
}
console.log(add(3,5));
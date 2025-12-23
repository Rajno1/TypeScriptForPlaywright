
/* Arithmatic operators - To Perform any mathamatical operation on multiple variable 
we can use Arithmatic opertor
 */
let a : number = 10, b : number =2;

console.log("Arithmatic Operators");

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);  // a to the powre of b - ** represents the exponential

/*
  Assignment Operator ( = ), with the help fo '=' we can use the other operators as well
  we can call it as 'Short Hand Operators'
 */

//   Short Hand Operators

 a = 10;
 b = 5;

 a = a + b;
 console.log(a) // we can also write the same line as console.log(a+=b);

console.log("Assinment Operators with short hand ");
console.log(a+=b);  // a = a + b;
console.log(a-=b);   // a = a - b;
console.log(a*=b);   // a = a * b;
console.log(a/b);   // a = a / b;
console.log(a%b);   // a = a % b;

 /* 
 Relational Operators : it will always returns boolean values (true or false).
 // <   >   =   !=  ==  ===(Strict equalto) etc.,
  */

a = 10;
b = 5;

console.log(" ****  Relational Operators **** ");

console.log(a>b);   // true
console.log(a<b);   // true
console.log(a!>b);  // false
console.log(a!<b);
console.log(a==b);
console.log(a!=b);               

/* 
Ques: What is the difference between == & === (strict equality) ?
Ans: 
    Double equal to compares only the values BUT Strict equal to will value compare 
    values along with their type
 */

    console.log(" **** Difference between == & === (Strict Equality ***** ")
    let num1:number = 10;
    let num2:String="10";

    console.log(num1==num2);    // true because it will compare values
    console.log(num1===num2);   // false because  it will compare values including with the types

    /* 
    Logical Operators :  && (and) || (or)   !(not)
    Like relatinoal Operators these logical operators will return  boolean value (true / false )
    and works between  only boolean variables. 
     */

    /* 
        b1      b2      &&      ||      !b1
    -------------------------------------------
        true    true    ture    true    false
        true    false   false   true    false
        false   true    false   true    true
        false   false   false   false   true
    */

        console.log(" **** Logical Operators ***** ")
   let b1:boolean= true;
   let b2:boolean= false;

   console.log(b1 && b2);  // false
   console.log(b1 || b2);  // true
   console.log(!b1);  // false
   console.log(!b2);  // true
   
   /* 
    Some times we use this logical operators with Relational operators {<   >   !< - - - }
    */
    console.log(" **** Combination of logical and relational operators ***** ")

    console.log(20>10 && 10>5); //true 
     console.log(5>10 || 10>5); //false
     
    //   alon with this operators we have another operators like increment and decremetn operators lets see
// Variable : is a container used to store data.
// we can create variables using 3 different keywords " var, let, const "
// in general we will specify the data type on variable declaraiont here 
// in TypeScript or JavaScript data type declaraion is OPTIONAL
// Syntax :  Keyword variablename : datatype = value


//example
// var age:number= 35;
// console.log(age);

// let age = 35;
// console.log(age);

/*
1. SCOPE OF var, let and const keywords
*/


// scope of var keyword we have 2 types of scopes 1 functional 2 Block
// The scope of var keyword is with in the functional scope not in Block scope

/*
// Scope of var keyword is with in the functional scope
function varScope()
{

    if(true){
        var msg = "Welcome";
       // console.log(msg);
    }
   // console.log(msg);
}

varScope();
*/


/*
// Scope of let and const keyword is with in the Block scope

function blockScope()
{

    if(true){
        let msg = "Hello let";
        const wishes = "Hello const";

        console.log(msg); // Only valid with in the lock
        console.log(wishes); // Only valid with in the lock
       
    }
    console.log(msg);  // out side the block not valid
    console.log(wishes); // out side the block not valid
       
}

blockScope();
*/


/*
2. DECLARATION AND INITIALIzATION OF var, let and const keywords
*/

// Declaration for var keyword
/*
var x; // var can be declared without initialization
console.log(x); // result : undefined

x=30; // it is initialization
console.log(x); // result : 30
*/


// Declaration for let keyword
/*
let x; // let can be declared without initialization
console.log(x); // result : undefined

x=30; // it is initialization
console.log(x); // result : 30
*/

// Declaration of const keyword
//const x;  // we should initialize const at the time of declaraion ONLY
// console.lot(x) // it will thorough an error.
/*
const x = 50; // valid
console.log(x);
*/


/*
3. RE-DECLARATOIN: var can allow re-declaration but let and const NOT Allow
*/

/*
var city = "New York";
var city = "California";

console.log(city);  // restul will be California

// Cannot redeclare block-scoped variable 'city'.
*/
/*
let city = "New York";
let city = "California";

console.log(city); 
*/

/*
4. REINITIALIZATION - var and let re-initialize or re-assignment allowed
BUT cor const re initialization not allowed.
*/

/* var age = 30;   // re assignment allowed
age = 35;
console.log(age); */

/* 
let city = "Hyderabad";
city = "Bangalore";
console.log(city);
 */

// But const the value is FIXED so re initialisex not allowed

/* 
5.HOSTION - Accessing the value before declaration and initialization is known as hosting
 */

/* console.log(a); // here we are trying to access before declaration and assignment it will restul to undefine
var a = 10;
console.log(a);
 */

/* console.log(b); // here we are trying to access before declaration and assignment it will restul to an error
let b = 10;
console.log(b); */

/* console.log(b); // here we are trying to access before declaration and assignment it will restul to an error
const b = 10;
console.log(b); */


/* IMP: we can differentiate the difference between var, let and const using 5 parameters 
1.	Scope => the scope of ‘var’ keyword is limited to only functional scope and the scope of “ let and const “ is limited to only block scope
2.	Declaration => ‘var and let’ can be declared without initialization but NOT ‘const’
3.	Re-Declaration => only ‘var’ can accept re declaration NOT ‘ let and const’
4.	Re-Initialization => ‘var and let’ allows re-initializaiton NOT ‘const’
5.	Hosting => {Doing access before declaration and initialization} will show ‘undefined ‘ for ‘var’ and will through initialization error for ‘let and const’
 */
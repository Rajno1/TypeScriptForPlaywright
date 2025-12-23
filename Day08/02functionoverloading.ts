/* 
Function overloading in TypeScript:
function overloading will allows you to define mutliple versions of functions with same name
but different parameters or return types

Why to use function overloading?
* to create functions that works differently based on input types
* Improves code readability and reusability
]
Basic rules for function overloading:
1. Define overload signatures: List all possible ways that function can be called
2. Single Implementation Signature : There must be one actual function implementation
that handles all cases.
3. Ensure compatability (calling function ): the implementation must be compatable with all overload signatures.

*/

//  Example 1: function overloaing with same return and DifferentType(Data type)

console.log("function overloaing with same return and DifferentType(Data type)");
// step:1 Define all method signatures 

function getInfo(id:number):string;
function getInfo(name:string):string;

// Step:2 implement the function that hanels all method signatures

function getInfo(params:(number|String)):string
{
    if(typeof(params)==="number"){
        return(`User id is ${params}`);
    }else{
        return(`User name is ${params}`);
    }
}

// Step 3: calling function
console.log(getInfo(12));
console.log(getInfo("Johon"));


//  Example 2: function overloaing with Differnent return and Type(Data type)
console.log("function overloaing with Differnent return and Type(Data type)");
// step:1 Define all method signatures 

function getData(id:number):number;
function getData(name:string):string;
function getData(statu:boolean):boolean;

// Step:2 implement the function that hanels all method signatures

function getData(param:(number|string|boolean)):(number|string|boolean)
{
    if(typeof param === "number"){
        return(`User id is ${param}`);
    }else if(typeof param === "string"){
        return(`user name is ${param}`);
    }else{
        return(`User is a QA lead ${param}`);
    }
}

// Step 3: calling function
console.log(getData(143));
console.log(getData("Sekhar"));
console.log(getData(true));


//  Example 3: Different parameter in method overloading
console.log("Different parameter in method overloading");
// step:1 Define all method signatures 
export{}
function add(a:number,b:number):number;
function add(a:number,b:number,c:number):number;

// Step:2 implement the function that hanels all method signatures

function add(a:number, b:number,c?:number):number{
    if(c!= undefined){
        return a+b+c;
    }else{
        return a+b;
    }
}

// Step 3: calling function
console.log(add(5,6));
console.log(add(5,6,8));


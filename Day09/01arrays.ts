/* 
In JavaScript and TypeScript we have 'Array' concepet same like java but the main difference is 
in Java we have two Array concepts lie 'Array' and 'Arraylist' BUT for these two 
in JavaScript and TypeScript we have only on called Array. i.e this Array is having the
same properties like Arraylist.

What is an Array?
* Array is a special type of variable that can store multiple values of same data type or different data type
* Arrays are delcared using [] , or generic type is Array<T>
* starting from index 0
* Arrays are an ordered collection of elements, the order in which you will incert in same order it will be

*/
//   write a logic to reverse a string
/* let names:string[] =["Sony","Samsung","Apple","Panasonic","LG"];
console.log(names[3]);
console.log("logic to reverse the above string")
let result:string="";
let i;
for(i=names[3].length-1;i>=0;i--){
    result += names[3][i];
}

console.log(result);
 */
//  lets see the different approaches to declare an Array

//  Approach 1: using literal
/* let names:string[] =["Sony","Samsung","Apple","Panasonic","LG"]; // This is array declaration and initialization
console.log(names);  // output : [ 'Sony', 'Samsung', 'Apple', 'Panasonic', 'LG' ]
 */

//  Arroach 2: using generic way. ( Array<T>)
// Array with string values
let names: Array<string> = ["Sony", "Samsung", "Apple", "Panasonic", "LG"]; // This is array declaration and initialization
console.log(names);
// Array with interger values
let ids: Array<number> = [1, 2, 3, 4, 5];
console.log(ids);

// Arrays to store both numbers and strings
let data: Array<(number | string)> = ["Apple", 101, 102, "samsung", 103, "Sony"];
console.log(data);

//  now lets see different types of operation on Arrays

// to extract any one specific value from array we use index

// Example 1: Iterating an Array using treditional for loop

const nameSize = names.length;
console.log("Size of names array : ", nameSize);
// now write a login to get value at each index in an array
for (let i = 0; i < nameSize; i++) {
    console.log(names[i]);
}

//  Example 2: Iterating using for... in loop

console.log(" Iteration using for...in loop ");

for (let i in ids) {
    console.log(ids[i])

}

//  Example 3: Iterating using for...of loop (where index is not needed)
console.log("Iteration using for..of loop");
for (let value of data) {
    console.log(value);
}

/* 
 the differnce in for..in and for..of loop , in for..in 'i' represents index
 but in for..of loop 'value' is not an index its a variable. 
 */

//  Example 4: passing an array to a founction as an argument
//  Search an element in an array using function

function searchElement(ele: number, arr: number[]): boolean {
    for (let i = 0; i < arr.length; i++) {
        if (ele === arr[i]){

            return true;
        }

    }
    return false;
}

let arr:number[]=[10,20,30,40,50];

console.log(searchElement(30,arr));
console.log(searchElement(60,arr));

//  Example 5: function returns an array
//  passa a string arra with lower case characters and return an array with upper case

function converToUpperCase(arr:Array<string>):Array<string>
{
    let result:Array<string>=[];

    for(let i=0; i<arr.length; i++){
       result[i] = arr[i].toUpperCase();
    }

    return result;
}
let word:string[]=["Hello","Welcome"];
console.log(converToUpperCase(word));


// next we will see about the another type of array called 'Tuple' 
/* 
Ques: What is the difference between Array and tuple ?
Ans: 
    Array are dynamice not with fixed size and we can store n number of values 
    but tuple are fixed in size we store value in fixeed


*/ 
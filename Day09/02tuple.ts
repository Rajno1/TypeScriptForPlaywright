/* 
    Tuples in TypeScript:
    1. Tuple is a fixed length of array where each element has a specific type
    2. It helps in sorting multiple fields of different data types together
 */

//  Example 1: tuple with 2 values(data types) string , number 

let person: [string, number] = ["john", 102];
console.log(person[0])  // output : john
console.log(person[1])  // outpu : 102

//  Example 2: tuple with multiple values(data types) string , number 

let user: [string, number, string, number, boolean] = ["name", 12, "email", 34, true];
console.log(user);
// for loop for tuple 
console.log("using treditional for loop");
for (let i = 0; i < user.length; i++) {
    console.log(user[i]);
}

// same thing using for of loop
console.log("using for of loop");
for (let value of user) {
    console.log(value);
}

// same thing using for in loop

console.log("using for in loop");
for (let i in user) {
    console.log(user[i]);
}

// Example 3: Tuple Array (Array of Tuples)
let students: [string, number][] = [["jonh", 12], ["Steave", 13], ["peter", 14], ["joseph", 15]];


console.log(students[2]);

let tp = students[2];
console.log(tp[0]);
console.log(tp[1]);

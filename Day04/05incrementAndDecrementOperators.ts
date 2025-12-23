/* 
increment - ++
decremetn - --
 */

let x : number = 10


//console.log(x++);   // x = x + 1;   OR x += 1 output is 11

// x++ is post increment
// ++x is pre increment

/* let res : number = x++;
console.log(res); // 10  first value will be assigned here later it wil get increment
console.log(x) // 11 */

let res : number = ++x;
console.log(res); // 11  fist value wil get increment and will assign
console.log(x) // 11

// same thing will be applicable for decrement also

/* let res : number = x--;
console.log(res); // 10  first value will be assigned here later it wil get increment
console.log(x) // 11 

let res : number = --x;
console.log(res); // 11  fist value wil get increment and will assign
console.log(x) // 11 */
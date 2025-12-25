/* 
Mainly we have 6 important array methods that will take functions as parameters (this is common for these methods)
forEach(), map(), filter() reduce(), some() and every()
*/

/*
    1. forEach() : Executes a function once for each array element
    it takes function as a parameter
    Syntax:   array.forEach(function(currentvalue, index, array){})

    currentValue = The current element being processed in an array (simple the lements in array)
    index(optional) = the index of currnet elemetn being processed in an array
    array(optional) = The array the current element belongs to 

    IMP: forEach() method wont return any thing it will execute the function with each element
 */
 
//  Ex: 1 Get index of all fruites along with vlaues
let fruites:string[] = ["Mango","Apple","Banana","Pramogranate","Kiwi","Poppaya","Grapes"];
/* console.log("*** index with values using for loop *** ")
for(let i=0; i<fruites.length; i++){
    let value = fruites[i];
    console.log(`index of ${value} is ` ,fruites.indexOf(value))
}

console.log("*** index with values using for in loop *** ")
for(let i in fruites){
    console.log(`index of ${fruites[i]} is ${i}`)
}
 */
console.log("*** index with value using for each loop ***")
fruites.forEach(function(element,index){
    console.log(`${element},${index}`);
})

console.log("*** index with value using for each loop and Arrow function ***")
fruites.forEach((element,index)=>{
    console.log(`${element},${index}`);
})


console.log("*** Print all values in upper case ***")
fruites.forEach(element=>{
    let str = element.toUpperCase();
    console.log(str);
})

/* 
    2.map():  will create a new array with the resulf of calling the funciton on every element of array
    it takes function as parameter
    syntax: array.map(function(continueelement,index,array){})

    it returns the same number of elements compared to the original array (i.e the number of element will be same in output like original array)
*/

// Ex:1 Get square of all the numbers in an array Ex[1,2,3] result sould be [1,4,9]

let numbers:number[] = [1,2,3,4,5];
let squaredElements = numbers.map(function(element){ // as map() returns an array we need to store in output in variable
    return(element*element);
})

console.log("Squared Elemtns are : " , squaredElements); // output : [ 1, 4, 9, 16, 25 ]

// Ex2: double the value i.e [2,4,6,8,10]
let doubleOuput = numbers.map((element)=>{
    return(element*2);
})
// Note: in arrow function if we have only one statment inside the function the {} & return statement are optional

// let doubleOuput = numbers.map((element)=> (element*2))


console.log("Double ouput : " , doubleOuput ) // output : [ 2, 4, 6, 8, 10 ]


/* 
    3.filter():  will create a new array with all the elements that pass/satisfy the function condition
        it takes function as parameter
    syntax: array.map(function(continueelement,index,array){})
it returns either same or few number of elements compared to the original array 

syntax : array.filter(function(currentValue,index, array){})
*/

// get even numbers from 1 to 10

let values: number[] = [1,2,3,4,5,6,7,8,9,10]
let evenNumbers = values.filter(function(num){
    if(num%2==0){
        return num;
    }
})
console.log("even numbers are : " , evenNumbers) //output: [ 2, 4, 6, 8, 10 ] see output array is not having same number of elements as original array

// Get the numbers greater than 2

let greaterThanTwo =values.filter((num)=> num>2)
console.log(greaterThanTwo)

/* 
    4. reduce():  Applies for every element of an array and returns a single value
    syntax: array.reduce(function(accumulator, continueelement,index,array){})
    Here accumulate is the one where the result will get store
*/

// get sum of elements in array
let totalValue = values.reduce(function(total,num){ // Here 'total' is accumulator and its default value is 0 here
    return total += num;
},0) // if you want to sepeciy any default value to this accumulatore you add it after the function '{'
// explicitly assigning 0 as value to the accumulatore (total)
console.log("reduce() output : ", totalValue)

/* 
    5. some():  check at least element satisfy condition or not
    syntax: array.sum(function(accumulator, continueelement,index,array){})
   it returns boolean value ,
   if one element satisficy the conditon it will return true, if all elements NOT satisfy condition it returns false
*/

// chcek array contain negative elemen or not 

    let hasNegative = values.some((num)=> num<0)
    console.log("Has Nevagive values ", hasNegative)

    let hasPositve = values.some((num)=> num>0)
    console.log("Has Nevagive values ", hasPositve)


/* 
    6. every():  check all element satisfy condition or not
    syntax: array.every(function(accumulator, continueelement,index,array){})
   it returns boolean value ,if one element is NOT satisfy conditon it will retun false
   */

   // all elements are even or not 
   let hasEven = values.every((num)=> num%2==0)
   console.log("every() output : ", hasEven)
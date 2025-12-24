/* 

*/

let numbers: number[]=[1,2,3,4,5];
let fruits: string[]=["Apple","Banana","Mango","Orange"];

console.log("numbers arrays : ", numbers);  // Output :numbers arrays :  [ 1, 2, 3, 4, 5 ]
console.log("fruites arrays : ", fruits);  // Output :fruites arrays :  [ 'Apple', 'Banana', 'Mango', 'Orange' ] 


// legth - attribute (not a method )
console.log("number array size : ", numbers.length); // Output: number array size :  5
console.log("fruites array size : ", fruits.length); // fruites array size :  4

// Methods for Arrays
 /* 1: push() - Add single/multiple elements to the end of an array
 Syntax ; array.push(element1, element2,....elementN);
 if you dont know the last indext but still you want to add some values then better to go push method
  */ 

numbers.push(6,7)
console.log("number array size after push : ", numbers.length); // output: number array size after push :  7
console.log("numbers arrays on push : ", numbers); // output: numbers arrays on push :  [1, 2, 3, 4,5, 6, 7]


/* 2: pop() - it removes the last element from an array and it will return the removed element
Syntax : array.pop() 
 */

let removedNumber = numbers.pop(); 
console.log("numbers size after pop : ", numbers.length); // OuptPut numbers size after pop :  6
console.log("numbers arrays afer pop : ", numbers); // Output : numbers arrays afer pop :  [ 1, 2, 3, 4, 5, 6 ]
console.log("removed element afer pop : ", removedNumber); // output; removed element afer pop :  7

/* 3: shift() - it removes the first element from an array and it will return the removed element
Syntax : array.shift() 
 */

let fruitremoved = fruits.shift();
console.log("fruits size after shift : ", fruits.length); // Output: fruits size after shift :  3
console.log("Fruits arrays afer shift : ", fruits); // Output : Fruits arrays afer shift :  [ 'Banana', 'Mango', 'Orange' ]
console.log("removed element afer shift : ", fruitremoved); // Output: removed element afer shift :  Apple


/* 4: unshift() - Add single/multiple elements to the begining of an array
 Syntax ; array.unshift(element1, element2,....elementN);
  */ 

 fruits.unshift("Apple","Kiwi","Avacado");
 console.log("fruits size after unshift",fruits.length); //Output: fruits size after unshift 6
 console.log("fruits after unshift",fruits); //output: fruits after unshift [ 'Apple', 'Kiwi', 'Avacado', 'Banana', 'Mango', 'Orange' ]
 
 let returnTypeOfunshift = fruits.unshift();
 /* the unshift method  will returnt the lenght of an array */ 
 console.log("return Type Of unshift Is  ", returnTypeOfunshift); // Output : return Type Of unshift Is  6 (the length of the array)

 /*
  Ques: What is the differece between push , unshift & pop & shift ?
  Ans: 
    push() - is a method to add single / multiple elements to the end of an array, 
    unshift() - is a metod to add single / multiple elements to the begining of an array
    IMP: push() & unshift() methods will return the lenght of the array 
    
    pop() - is a method used to remove last element of an array
    shift() - is a method used to remove first element of an array
    IMP: pop() and shift() methods will return the value they added
  */

    /*  5 . concat() - used to combine two or more arrays of same data type
      syntax: array.concat(array1,array2...);
     */ 

      let concatedNumbers = numbers.concat([7,8],[9,10]);
      console.log(concatedNumbers); //Output : [ 1, 2, 3, 4,5,6, 7, 8, 9, 10]

      /* 6. slice() - extracts a session of array
        syntax : array.slice(startindex, endindex);
        ending index = n-1;  
       */

        let fuitsSlice = fruits.slice(0,3);
        console.log("slice result", fuitsSlice);

      /* 7. splice() - Add/ remove elements of an array from anywhere
        syntax : array.splice(start, deletecount, item1...itemN);
       */

       console.log(fruits); // output: [ 'Apple', 'Kiwi', 'Avacado', 'Banana', 'Mango', 'Orange' ]

      //  Ex:1 remove elements using splilce
      let removedElements = fruits.splice(1,2); 
      /*
        Here 1 is starting index and 2 represents how many elements to be removed
        i.e from index 1 to 2 elements so the reslut should be   [ 'Apple','Banana', 'Mango', 'Orange' ]
      */ 
      console.log("after slice(1,2)", fruits); // output : [ 'Apple', 'Banana', 'Mango', 'Orange' ]
      console.log("Removed elements in slice(1,2)", removedElements); //Output: [ 'Kiwi', 'Avacado' ]

      // Ex2: Using 'splice()' not removed but added
      fruits.splice(0,0,'DragonFruit','Apple'); 
      console.log("After splice(0,0,'DragonFruit','Apple') ", fruits); // output : [ 'DragonFruit', 'Apple', 'Apple', 'Banana', 'Mango', 'Orange' ]


      // Ex:3 both adding and remove using splice
      fruits.splice(1,2,"Cherry","BlueBerry","Kiwi")
      /* 
      splice(1,2,"Cherry","BlueBerry") => in this process from index 1 to two elements will get removed
      and from index 1 the new elements will get add
       */
    console.log("splice(1,2,'Cherry','BlueBerry','Kiwi') ", fruits);
    // output : [ 'DragonFruit', 'Cherry','BlueBerry','Kiwi','Banana', 'Mango', 'Orange' ]

    /* 
      8. indexof: identifies the index of an element, it element not found it returns -1
      syntax: array.indexOf(serachElement); or array.indexOf(searchElement,startingindex)
     */
    // Ex:1
    console.log("Index of Banana is :", fruits.indexOf('Banana'))//output : Index of Banana is : 4

    //Ex: 2
    console.log("Index of Pappaya is :", fruits.indexOf('Pappaya'))//output : Index of Pappaya is : -1


    //EX:3
    console.log("Index of Banana is :", fruits.indexOf('Banana',2))//output : Index of Banana is : 4
    //  in above request the index searching will start from index 2 before values will get ignore


    /*
      9: includes() -it will check if the elemnt is exisit or not and it will return ture or false
      syntax: array.includes(searchElement,fromindex) 
     */
  
    let reslut = fruits.includes("BlueBerry",1); // it will search for "BlueBerry" from index 1 if exisit will return true 
    console.log("is Blueberry exisit from index 1 ", reslut );
    console.log("Actual index of BlueBerry", fruits.indexOf('BlueBerry') );
    // let me serach for BlueBerry indext 3 it should return false 
    console.log("is Blueberry exisit from index 3 ", fruits.includes("BlueBerry",3) );
    
    /* 
    10. tostring(); converts array to string 
    syntax: array.toString()    
    */

    let arryToString = numbers.toString();
    console.log("converted array numbers: ", arryToString);

    /* 
    All the above methods are one category , these methos sometime will take parameters or not 
    it takes premative values as parameters , we do have some methods which take only 'functions' as parameters 
    we see those type of methods in next session
    */
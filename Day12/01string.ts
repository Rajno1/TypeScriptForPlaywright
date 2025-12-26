/* 
    String ia a group of characters define in ""/ '' / ``
*/

//  Declaration of Strings

let str1 : string = 'Sting with single quote';
let str2 : string = "Sting with single double quote";
let str3 : string = `Sting with single back tick`;

console.log(str1);
console.log(str2);
console.log(str3);

// String Methods
let str : string = "Hello, TypeScript!";

// 1. Find the lenght of a string  (space and special symbols also included)
console.log("lenghth of string " , str.length) // out put including with space and special symbols is 18

// 2. to uppercase and lowercase
console.log("upper case : ", str.toUpperCase())

console.log("lower case : ", str.toLowerCase())

/* 3. charAt(index) and indexOf(string)
    charAt method will take index as parameter
    indexOf method will take sting as parameter
 */

console.log(str.charAt(3)) // output l
console.log(str.indexOf("Type")) // 7 will pirint starting index

/*
    4. substring(starting index, ending index) last index will be exluded
 */
//Hello, TypeScript!
console.log("sub string is ", str.substring(0,5)) // Hello
console.log("sub string is ", str.substring(7,11)) // Type

/*  5. includes("value") - it returns boolean if the value is the part of main sting it rerutns true 
if not it returns false 
IMP: Sring value is case sensitive 
*/

console.log(str.includes("abc")) // false
console.log(str.includes("Type")) // true if you do (type) it will enter false 
console.log(str.includes("!")) // true

/* 
    6. startsWith() and endsWith() it returns a boolean value 
    it will verify 
*/
//Hello, TypeScript!
console.log("start with : ",str.startsWith("Hello")) // as our sting is starting with Hello it is true
console.log("start with : ",str.startsWith("Type")) // as our sting is starting with Hello it is false

console.log("start with : ",str.startsWith("hello")) // as our sting is casesensitive it is true

/*
7. replace() - it replace the string from original string it return a value

 */

let replacedValue = str.replace("TypeScript","Welcome");
console.log("Replaced value ; ", replacedValue) //Hello, Welcome!

/*
7. split() - it will split the entari string into multiple parts based on delimerter  and store as an array
i.e split() returns an array
 */
let splitWords:string[] = str.split(" ");
console.log(splitWords) // output :[ 'Hello,', 'TypeScript!' ]

let details = "abc@gmail.com,Welcome123";
let loginDetails:string[] = details.split(",");
console.log("username is : " , loginDetails[0])
console.log("password is : " , loginDetails[1])
/*
    Output:
    username is :  abc@gmail.com
    password is :  Welcome123
 */

/*
    9. trim(), trimStart(), trimEnd()

    trim() - will remove the spaces at begining and ending of the string
    trimStart() - it will remove the spaces at the begining of the string
    trimEnd() - it will remove the spaces at the ending of the string

 */

    let mystring = "    Welcome to typescript   ";


    console.log("Original String : " , mystring); //Output :       Welcome to typescript   
    console.log("trimEnd() String : " , mystring.trimEnd());
    console.log("trimStart() String : " , mystring.trimStart());
    console.log(" trim() string : ", mystring.trim())

    /*
    10. concat()- i will join two strings
 */
    let stri1 = "Hello";
    let stri2 = "Welcome";
    let stri3 = "to Typescript";
    

    console.log("concat result : ", stri1.concat(stri2)); //output : HelloWelcome

    console.log("concat result : ", stri1+stri2); //output : HelloWelcome this is alternative but not recommended

    console.log("Welcome".concat("To TypeScript")); //output : WelcomeTo TypeScript here directly we are passing string values
    // how to concat with mutliple strings

    console.log((stri1.concat(stri2)).concat(stri3)) //output: HelloWelcometo Typescript

    /* 
        String immutablality: what ever the opation we do on a variable it can not impact 
        the original value this is called immutability

    */

    let num = 10;
    let rest = num + 5;
    console.log(rest) // output is 15 but the original value of num is 10 this is called immutabulity

    let firstname :string = "Rajasekhar";
    let lastname :string = "Maddigalla";

    let strres: string = firstname.concat(lastname);
    console.log(strres); //output : RajasekharMaddigalla but it wont impact on varialbes
    
    // Multiline string - with the help of back tick (` `) we can define multi line string 
    let multiline : string = `Welcome to 
                                    TypeScript`;
/* 
    Object -is a group of properties (variables) and behaviour (methods)
    function inside an object is called method
    Object - is a collections of key or value pairs 
*/

//  How to create an object
/*
Different ways to create an objects
    1. using 'Object' Type - Directly define the values for varibles(JS/TS)
    2. Inline type object - we also define the datatype of the key (supporst only TypeScript)
    3. using type aliases- (JS/TS)
    4. using the classes - (JS ES16/TS)
 */
/*
    using 'Object' Type - Directly define the values for varibles
    The TypeScript object type represents all values that are not in premitive type 
 */

// let employee : object = { name:"john",age:23,salary:50000,job:"Engineer"}
/*
    the above method is one way of creating object here 
    name,age,salary,job are properties or variables and we are directly defining 
    the values to these properties or variables.
    we can also create methods inside this { } flower brases BUT when you defin the 
    data type of employee object as 'object' it will allow only Key value pairs 
    this is one limitation 
 */

// Lets create a method for the same employee object
let employee = {
    name: "john",
    age: 23,
    salary: 50000,
    job: "Engineer",
    // Creating a function inside an object is known as method
    getDetails: function () {
        // console.log(this.name, this.age ,this.salary, this.job);
        //return `${this.name} age is ${this.age} and he is earning ${this.salary}`;
        console.log(`${this.name} age is ${this.age} and he is earning ${this.salary}`);
    }
}

console.log(" employee type is : ", typeof (employee)); // Object
// accessing object approach 1 : using . (dot) notation
console.log(`employee name is : `, employee.name) //output : employee name is :  john
console.log(`employee age is : `, employee.age) //output : employee age is :  23
// to invoke/execute the method 
employee.getDetails(); // getDetails is method name


// accessing object approach 2 : using square brackets notation
console.log(`employee name is : `, employee["name"]) //output : employee name is :  john
console.log(employee["getDetails"]()) // this is the way to call method using brackets

// to modify the value inside the object 
employee.age = 32;
console.log(`modified age of employee is : `, employee.age);



// 2 .Inline type object - we also define the datatype of the key (supporst only TypeScript)

// first we do object declaration later we assgine the values
let student: {
    name: string,
    age: number,
    salary: number,
    job: string,
    // Creating a function inside an object is known as method
    getSummary: () => string //we are declaring retun type here at implimentaion no need to add retun type
} = { // now we are doing initialization
    name: "Ravi",
    age: 31,
    salary: 35000,
    job: "Developer",
    // Creating a function inside an object is known as method
    getSummary() {
        return (`${this.name} is ${this.age} years old`)
    }
}

console.log(student.getSummary()); // output : Ravi is 31 years old
/*
   The limitaion in this Inline method is , if we want to create another student Object 
   eventhough if the structure is same we need to do the same declaraion and initialization for 
   second student we need to repeat the same structure multiple times to avoid this 
   we can use type aliases 
 */

/* 
 accessing object approach 3 : Type aliases
 in this approach we can overcome the limitation of inline approach 
 in this 'type' aliases approach we can use the same structure for multiple objects 

*/

//  Exampler 1:
//  single declaration or structure
type product = {
    name: string,
    price: number,
    getInfo: () => string
};

// 1st object initialization
let book: product =
{
    name: "Geetha",
    price: 540,
    getInfo() {
        return (`${this.name} book cost is ${this.price}`)
    }
};

// 2nd object initialization
let book1: product = {
    name: "HarryPotter",
    price: 150,
    getInfo() {
        return (`${this.name} book cost is ${this.price}`)
    }
}

console.log(book.getInfo()); //output : Geetha book cost is 540
console.log(book1.getInfo()); // output : HarryPotter book cost is 150

// Ex:2 Intersection Type - means we can combine multiple types
type personal = {
    name: string,
    age: number,
};

type contact = {
    email: string,
    phone: number,
};

type candidate = personal & contact &
{
    getContactInfo: () => string;
}

// now we are creating object for above types

let cand: candidate = {
    name: "peter",
    age: 39,
    email: "peter@email.com",
    phone: 12342325,
    getContactInfo() {
        return (` ${this.name} email id is ${this.email}`) // output : peter email id is peter@email.com
    }
}

console.log(cand.getContactInfo());




// Next we will see the most important way of creating object using class 

// ======================================================================

class person {
    firstname: string;
    lastname: string;
    email: string;
    phone: number;

    /* 
    Constructore can not return anything 
    constructore is used to assigne the values to class variables 
    At the time of object creation we will pass the values to the construcore 
    and the constructor will get invoke at the time of object creation
*/

    constructor(firstname: string, lastname: string, email: string, phone: number) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
    }

    /*
        Ques: what is the difference between constructor and method ?
        Ans: 
            Constructor will never return any value constructore is used to assigne the values to class variables 
        and the constructor will get invoke at the time of object creation BUT for methods we need to call the methods 
        using objects and methods can return a value 
     */
    getFullName(): string {
        return (`Fullname is ${this.firstname} ${this.lastname}`)
    }

    getDetails() {
        return (`${this.getFullName()} and phone is ${this.phone}`)
    }
}

/*
    Creating an object for a class
 */
//  at the time of object creation as constructor auto invoke we need to pass the parameters for class object
let person1 = new person("John", "White", "john@email.com", 123456789);
console.log(person1.getDetails()); //Ouput :Fullname is John White and phone is 123456789

/*
    * for one class we can create multiple objects ,objects are independent but derieved from same class 
 */
let person2 = new person("Reena", "James", "reena@email.com", 9796969);
console.log(person2.getDetails()); //Ouput :Fullname is Reena James and phone is 9796969


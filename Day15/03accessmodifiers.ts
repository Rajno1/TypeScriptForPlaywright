/* 
    In TypeScript we have only 3 types of modifiers
    1. Pulic 
    2. Private
    3. Protect

    we can use these access modifies for both properties and methods
*/

// Parent class
class Person {
    //  properties 
    public name: string; // public property access any where
    protected age: number; // accessable withing the class and child class
    private ssn: number; // accessable only within the class NOT evenin child class 

    //     construcor
    constructor(name: string, age: number, ssn: number) {
        this.name = name;
        this.age = age;
        this.ssn = ssn;
    }

    //     method
    displayInfo() {
        console.log("Name:", this.name);
        console.log("age:",this.age);
        console.log("ssn",this.ssn);
    }

}
 
// child class
class Employee extends Person{
 
    private empid:number;

    constructor(name: string, age: number, ssn: number,empid:number){
        super(name,age,ssn);
        this.empid = empid;
    }

    showEmpDetails(){
        console.log(this.name) // public
        console.log(this.age) // protected
        // console.log(this.ssn) // Property 'ssn' is private and only accessible within class 'Person'
        console.log(this.empid) // child class private propert
    }
    
}

let emp = new Employee("john",34,1234567,101);
emp.displayInfo();
emp.showEmpDetails();

console.log(emp.name); // accessable
//console.log(emp.age) // not accessable
//console.log(emp.empid) // not accessable



/* 
    1. Interface: An interface in TypeScript is a way to define the structure of an object
    2. it tells the compiler what properties and types an object should have 
    3. it like a blue print of object 

    interface is one type of class But class contains properties , constuctor and methods
    BUT interface contains only properies and methods (methods are abstract in nature)

    Abstract methods: method with only signatue there is no implimentation.

    Syntax: 
    interface interfaceName
    {
        Properties
        abstract methods
    }

    1. Regular properties
    2. Optional properties
    3. Readonly properties
    4. Extending interfaces
    5. class implements interfaces

    for class by using 'new' we will create object BUT for interface we wont use 'new' keyword to 
    create interface object

    it wont allow static properties in interface , static is only for classes
 */

    //  Ex1: Basic interface (Regular properties)
    interface person 
    {
        name:string;
        age:number;
    }

    // Creating object for this person interface 

    let student:person = {
        name:"john",
        age:34
    }

    //  how to access  
    console.log(student.name);
    console.log(student.age);
       
    // 2. Optional properties (?)
    
    interface Employee
    {
        id:number;
        name:string;
        department?:string;  // this is optional property value is not mandatory
    }

    let emp : Employee = 
    {
        id:33,
        name:"Peter"
    }
    
    console.log(emp.id);
    console.log(emp.name);
    console.log(emp.department);


    let emp1 : Employee = 
    {
        id:23,
        name:"stella",
        department:"QA"
    }

    console.log(emp1.id);
    console.log(emp1.name);
    console.log(emp1.department);

    // 3. Readonly properties (is to prevent modification)
    interface Book 
    {
         title:string;
        readonly isbn:string;

        display():void; //abstract method
    }

    let b1:Book=
    {
        title:"LeardPlaywright",
        isbn:"abc",
        display(){
            console.log(b1.title,b1.isbn);
        }
    }
    //  Before changing 
    console.log(b1.title);
    console.log(b1.isbn);
    b1.display();

     console.log("Value After changing ");
     b1.title = "TypeScript";
     //b1.isbn ="New Value";  // Cannot assign to 'isbn' because it is a read-only property.


    //  4. Extending interfaces
    
    //parent interface
    interface Animal {
        name:string;
    }

    // child interface
    interface Dog extends Animal{
        color:string;
    }

    // Create an object 
     
    let mydog:Dog={
        name:"Buddy",
        color:"white"
    }

    console.log(mydog.name);
    console.log(mydog.color);


    //  5. class implements interfaces
    /*
        A class can extends another class
        An Interface extends another interfce
        
    BUT a class CANNOT extends an interface, insted
    a class can impliments an interface
     */

    interface vehical
    {
        name:string;
        type:string;
        details():void;
    }

    class Car implements vehical{
        name:string;  
        type:string;
        //  we need to redefine all parent class properties in child class and as they are from inerfce we cannot make them static.

        constructor(name:string,type:string){
            this.name=name;
            this.type=type;
        }

        details(): void {
            console.log(this.name);
            console.log(this.type);
        }
    }

    let veh = new Car("Jaguar","Higerend");
    veh.details();

    //  if you want to skip the method declarion you need to redfine that method in class like how it is in interface 
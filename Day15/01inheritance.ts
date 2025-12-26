/* 
    Inheritance:
        * a class can reuse the properties and methos of another class
        * it is a kind of mechanisam once class (chlil) can acquires the properties of 
        another class (parent)
        * inheritance allow the code reusability
 */

        /* 
            Method Overriding : child class having parent class method with same method 
            signature and different in implimentation this is called method overriding 
         */

    class Car {

        // class parameters
        name:string;
        color:string;
        model:string;
        
        // constructor
        constructor(name:string,color:string,model:string){
            this.name=name;
            this.color=color;
            this.model=model;
        }

        //methods
        start(){
            console.log("Car Started....")
        }

        stop(){
            console.log("Car Stopped....")
        }

        displayInformation(){
            console.log(`Name:${this.name}, Color:${this.color}, model:${this.model}`)
        }

    }

    class Honda extends Car{

        year:number;

        constructor(name:string,color:string,model:string,year:number){ // after doing extends child class constructor should expet all parent class properties
            super(name,color,model); 
            /*
            passing these parameters to parent class constructor using 'super' keyword
            by using 'super' keywored we invoke the parent class constructor
            in the same way by using ' super ' keyword we invoke method but CANNOT invoke parent class variable.  
            */ 
            this.year=year;
        }

        // Method overriding 
        start(){
            console.log("Honda Started....")
        }
        /*
        start() both parent and child classes have same method but implimentation is different
        This is called method overriding concept 
         */
        yom(){
            console.log(`Year of Manufactured: ${this.year}`)
            console.log(`Name:${this.name}, Color:${this.color}, model:${this.model},${this.year}`)// using parent class properties 
        }
    }


    class Jaguar extends Car{

        year:number;

        constructor(name:string,color:string,model:string,year:number){ // after doing extends child class constructor should expet all parent class properties
            super(name,color,model); // passing these parameters to parent class constructor using 'super' keyword
            this.year=year;
        }

        start(){
            console.log("Jaguar Started....")
        }
        /*
        start() both parent and child classes have same method but implimentation is different
        This is called method overriding concept 
         */
        yom(){
            console.log(`Year of Manufactured: ${this.year}`)
            console.log(`Name:${this.name}, Color:${this.color}, model:${this.model},${this.year}`)// using parent class properties 
        }
    }

    /*
     Here Honda and Jaguar two child classes having same parent class Car, lets create an
     object for two classes 

    if we have overrided method in child class , when we call method using child class object overriden method will execute 
    if we don't have overrided method in child class , when we call method using child class object parent class method will execute 

     */

    let obj1 = new Honda("Honda","RoyalBlack","HN2026",2025);
    obj1.yom();  // from child class
    obj1.start(); // will call child class overridden method
    obj1.stop(); // from parent class

    console.log(obj1.name); 
    console.log(obj1.color); 
    console.log(obj1.model);
    console.log(obj1.year);

    let obj2 = new Jaguar("Jaguar","RoyalMaroon","JG2026",2026);
    obj2.yom();  // from child class
    obj2.start(); // will call child class overridden method
    obj2.stop(); // from parent class
    
    
    console.log(obj2.name);
    console.log(obj2.color);
    console.log(obj2.model);
    console.log(obj2.year);  

    /*
       Ques: how to we invoke the parent class method even though if we have a overriden method to it?
       Ans: By using 'super' keyword. 
     */



       let car: Car = new Honda("Honda","RoyalBlack","HN2026",2025);
        /*  
            Here we are giving parent class variable to the child class object
            i.e Parent class variable is holding child class object, in this case 
            we have certaion limitations while accessing properties and methods 
            
            1. By using parent class variable we can access only the methods belongs to the 
            child class that exisit only in parent class along with parent class methods
            ex: yom() is exist in honda class but not in parent(Car) class
            so we can't access this yom() method using this parent class variable.
        */

        car.displayInformation();
        car.start();
        car.stop();

        /*
            Now lets see about the ' super ' keyword 
         */
        

/* 
    super() - this super method is used to invoke immidate parent class constuctor
    super - this super key worked is used to invoke immidate parent class method.
    But using this super key word we CAN'T inovke class variable
 */


    class Parent{

        num:number =10;

        constructor(){
           console.log("This is parent class constructor ")     
        }

        display(){
            console.log("This is display() method from parent class ")     
        }
    }

    class Child extends Parent{
        num:number =20;

        constructor(){
            super() // to invoke parent class constructor
           console.log("This is child class constructor ")     
        }

        show(){
            console.log("This is show() method from child class ")     
        }

        display(){
            super.display() // it will invoke the display () from parent class
            console.log("This is display() method from child class ")     
        }
    }

    let c1 = new Child();
    c1.display(); 
    /* 
        by default it will call display() from child class BUT if you 
        use super.display() it will inovke first paent class display() method 
        leter it will print child class display() method.
    */
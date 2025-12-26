/* 
    Method Overloading & Constructor Overloading:
    we have multiple signatrue but there should be one common implimentation that is method overloading 
    we have multiple signatrue but there should be one common implimentation for constructor
    that is constructor overloading 
 */

    class Calculator{

        //  constructore over loading

        // constructor signatures
        constructor() // if we dont pass any value to the constructore it is called default constructor
        constructor(a:number,b:number) // parameterised constructore

        // constructor common implimentation for signatures 
        constructor(a?:number,b?:number){
            if(a!=undefined && b!=undefined){
                console.log(`sum of ${a} and ${b} is : `, a+b)
            }else{
                console.log(" Default constructor called...");
            }

        }


        // Method overloading
       add(a:number,b:number):number;
       add(a:number,b:number,c:number):number;

       add(a:number,b:number,c?:number):number{
            if(c!=undefined){
                return a+b+c;
            }else{
                return a+b;
            }
       }

     
    }


    //usage
    //  constructore calling
    let obj1 = new Calculator(); //Default constructor called...
    let obj2 = new Calculator(2,6); // sum of 2 and 6 is :  8
    

    //  method calling
    console.log(obj1.add(3,4));
    console.log(obj1.add(3,4,5));
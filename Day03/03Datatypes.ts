/* 
    We have 2 types of Datatypes 
        1. Premitive Datatype (built in Datatypes)
        2. Non-Premitive Datatype ( Objects)

    Primitive DataTypes:      Non-Primitive Datatypes
        * number                * Array
        * string                * class
        * boolean               * interface
        * null                  * function
        * undefined             * touple
        * any
        * union type
        * void
 */

    //  number - Data type
    export {}
    /* 
    TypeScript treats all .ts files as part of the same global scope unless they are modules.
    so I am declaring file as module by adding ' export{} 'at begining or end
     */
    // let age : number = 35;
    // let price  = 25.50;
    // let big = 9739238583;

    // console.log("Age : ",age);
    // console.log("Type of age is :" , typeof(age));
    // console.log("Price : ", price);
    // console.log("Type of Price is :" , typeof(price));
    // console.log("Big ",big);
    // console.log("Type of big is :" , typeof(big));

    // Sring - Data Type
    /*
        We can declare Sting in 3 different wasy 
            1. single quote (' ')
            2. Double quote (" ")
            2. Backtick ( ` `) 

        if we want to do pareametering i.e want to pass value to variable we use this Backtick
     */

        // let firstname = "Rajasekhar";
        // let lastname = "Maddigalla";

        // let message = `Hello ${firstname} ${lastname}`;

        // console.log(message)

        // 3. Boolean - we can represent only true or false 

        // let isstudent:boolean= true;
        // let hasJob:boolean= false;

        // 4. Null & Undefined 

        // let emptyValue :null = null;
        // let notAssigned :undefined = undefined;

        // 5 Any Type - it losses the Typescript Statically typed nature 
        // if you have a plan to change the data in future you can use any

        // let value : any = "welcome";
        // value = 35;
        // value = true

        // console.log(value)

        /* 
            6- Union Type it is not a key word its a combination of all types 
            with typesafty
         */

            // let id : number | string | boolean ;
            // id = 79;
            // console.log("Type of Id : ", typeof(id))
            // console.log(" Output : ",id)

            // id = "Number";
            // console.log("Type of Id : ", typeof(id))
            // console.log(" Output : ",id)

            // id = true;
            // console.log("Type of Id : ", typeof(id))
            // console.log(" Output : ",id)

            // 7: void - is used for functions not for variables 


            function sum():void{
                console.log(10+20);
            }
            sum();

            function add (x:number,y:number):number{
                return x+y;
            }
        
            console.log(add(8,9));
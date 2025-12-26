/* 
1. Class
2. Read only property
3. Optional property 
4. Static Variables and methods
 */

class Student {
    readonly school:string; // using 'readonly' we can assign the value only once thorugh construcotr 
    name:string; // regular property
    id:number; 
    static gender:string ="female";
    email?:string; // Optiona property: eventhough if we dont assign any value it is accepeted

    // to initialize the data to varilable we use constructor

    constructor(school:string, name:string, id:number,email?:string){
        this.school = school;
        this.name = name;
        this.id = id;
        this.email = email;
    
    }

    displayInfo(){
        console.log("School:", this.school);
        console.log("Name : ", this.name);
        console.log("id : ", this.id);
        if(this.email==undefined){
            console.log("Email is not provided")
        } else{
        console.log("email : ", this.email);    
        }
        console.log("Gender : ", Student.gender);
        
    }


    /*
    Static Variables and methods
    1. Static properties/method are common/shared across all the obejects
    2. Static properties/methods can be access directly using class name
    3. Static properties/methods can be modified using class name
    4. Static properties/methods can NOT be access using object
    5. we cannot use 'this' for static poperties/ method insted using class name

    we can define static property when it is a common for every object ex: if school name is same for all student then   
    school we can define as static and it will be share among all properties you create
    
 */



    // static method
    static changeGender(newGender:string):void{
        Student.gender=newGender;
    }
}

let s1 = new Student("Pavika School","Vinuthna",1);
let s2 = new Student("Pavika School","Panvika",2,"panvika@email.com");
let s3 = new Student("Pavika School","Shanmukh",3,"shanmukh@email.com");

s1.displayInfo();
console.log("Read only propery : ", s1.school);
console.log("**** Student Details ******");
s3.displayInfo()

// try to modify readony property  
// s1.school="GreatMinds";//we get erro like : Cannot assign to 'school' because it is a read-only property.

Student.changeGender("male");
console.log("**** Student Details after changing static value ******");
s3.displayInfo()
/* 
moduel is file ( it is utility file ) that contanin reusable content (mehods, functions, classes, properties )
 */

export let appname = "calculator";

export function add(a:number,b:number):number{
    return a+b;
}

export class  Formatter
{
    toUpper(str:string):string{
        return str.toUpperCase();
    }
}
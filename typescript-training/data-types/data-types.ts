let num1:number=10;
let num2:number=10;
console.log(num1)
console.log(num2)

let empName: string="sajiya"
console.log(empName)

let u: undefined;
console.log(u);

let n: null = null;
console.log(n);

//union ==> Union represents more than one data type assigned to the variable. 

let empAddress: string|number|boolean="pune";
console.log(empAddress);

//any ==> The data type used to store any type of value

let data:any="abc";
console.log(data);

/********************************************/
/**********Non-primitive Datatypes***********/
/********************************************/


//1.Object ==> The data type used to store collection of key-value pairs

interface personInfo{
    name:string,
    empId:number,
    visaStatus:boolean,
    address:{
        city:string,
        state:string,
        zip:number
    }
}

let person:personInfo= {
    name:"sajiya",
    empId:1234,
    visaStatus:true,
    address:{
        city:"pune",
        state:"Maharashtra",
        zip: 412101
    }
}

console.log(person),

console.log(person.empId)
console.log(person.address.city)
console.log(person.address)


//2. Array ==> The data type used to store collection of similar/different data types
let fruit:string[]=["mango","kivi","jackfruit"]
console.log(fruit)

let fruitAndPrice:(string|number)[]=[100,"mango","kivi",234]
console.log(fruitAndPrice);
console.log(fruitAndPrice[3]);

//3. tuple ==> Tuple represents storing multiple values,
//  different data types together at one place with a restriction on the order
//  along with the number of values.

//Array  vs Tuple

//Store employee name, employee phone number, and employee visa status within the array. 
let empInfo: (string | number | boolean)[] = [9553220022, "Bharath Reddy", true, "hyderabad"];
console.log(empInfo)

//Store employee name, employee phone number, and employee visa status within the tuple. 
let newEmpInfo: [string, number, boolean, string] = ["Bharath Reddy", 9553220022, true, "hyderabad"];
let nei:[number,string,number,boolean]=[123,"sajiya",7972200878,true]
console.log(nei)

//4. function ==> The data type used to store a block of code that performs a specific task.

function logoutAndCloseBrowser(): void {
    console.log("Logout from the application");
    console.log("Close the browser");
}
logoutAndCloseBrowser();
function getBalance(): number {
    console.log("Navigate to the account balance page");
    let accountBalance:number = 100000;
    console.log(accountBalance);
    return accountBalance;
}
getBalance();


//5. Map ==> Map represents a collection of key-value pairs with JavaScript class data type. 

let empData:Map<number,string>=new Map();
empData.set(123,"sajiya");
empData.set(234,"sam");
empData.set(345,"Aliza");
console.log(empData);
console.log(empData.size);
console.log(empData.get(234));

//6. Set ==> Set represents a collection of unique values.
let empIds:Set<number> = new Set();
empIds.add(1234);
empIds.add(5678);
empIds.add(1234);//duplicate value will not be added to the set
console.log(empIds);

let ei:Set<number>=new Set();
ei.add(1);
ei.add(2);
ei.add(1);
console.log(ei);

//Primitive - Immutable
let a=10;
a+10;
console.log(a);

//Non primitive- Mutable 
let obj={
    name:"sajiya",
    city:"pune"
}
obj.id=34
console.log(obj)


let num1=10.10
let num2= 100
console.log(typeof num1)
console.log(typeof num2)

let name= "Sajiya"
let city="pune"
console.log("Employee name is "+ name +" City is "+ city)
console.log(`Employee name is ${name} and City is ${city}`)

let x=10;
let y=20;
console.log(x>y)

 let salary=null;
 console.log(salary)

 let person={
    name:'sam',
    age:32,
    addres:{
        city:"pune",
        zip:412101
    }
 }

 console.log(person.name)
 console.log(person["name"])
 console.log(person.addres.city)
 console.log(person.addres['zip'])
 console.log(person)

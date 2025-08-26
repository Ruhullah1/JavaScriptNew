//Variables

let Myname = "My Name is Ruhullah,";
const Age = 30;
var city = "Hyderabad";
console.log(Myname,Age,city);

//Datatypes
let number = 10; //number
let text = "Hello world";  //String
let isActive = true; //Boolean
let Fruits = ["Apple","orange"]; //Array
let Person = {name:"Ali",age:40}; //object
console.log(typeof number);
console.log(typeof Person);

//Operators

let a =10;
let b =3;

console.log("Addition:", a+b);
console.log("Subtraction:", a-b);
console.log("multiplication:", a*b);
console.log("Division:", a/b);
console.log("Reminder:", a%b);

//functions

function greet(user){
    return "Hello," + user + "!";
}
console.log(greet("Ruhullah"));

//Conditions

let marks = 30;

if (marks>90) {
console.log("Grade: A+");
 } else if (marks >= 75){
    console.log("Grade: A");
} else{
    console.log("Grade: B");
}


// console.log('Hello world')
// console.log(21)
// console.log(10+20) 
//  varisble are container which stores value 
//  there are three kind of variable 
// var
//  let 
//  const 
// {
// let name = "Isha"
// let lastname = "gaurav"

//  console.log(name)
//  console.log(lastname)
// lastname = "priya"
//  console.log(lastname)
// }
// let username creates a variable
// = assigns a value to it 
// "Isha" is an string 
// age = 23 is an number 
// const name = "Isha"
// const fruits = {name:"apple" , type:"FRUITS"}
// fruits.name = "mongo"
//  fruits.stock = 200
//  console.log(fruits) 

//  data types 
// There are 8 basic data types which are divided into two main categories:
// divided into 2 parts 
// Primitive types and Object (Refrence) types
// String - Text 
// Number - Numeric Values 
// Boolean - true or false 
// undefined - No value assigned
// Null - Intentially empty
// Array - A collection of values 
// object - Related Information

const a = 10;
const b = 3;

// console.log(a+b)
// console.log(a-b)

// console.log(a*b)
// console.log(a/b)
// console.log(a%b)
// console.log(a**b)

// console.log(10>5)
// console.log(10<5)
// console.log(10===10)
// console.log(10!==5)
// console.log(10>=10)

// console.log(5=="5")
// console.log(5==="5")



const isLoggedIn = true;
if(isLoggedIn) {
    // console.log("Welcome Back")
}else{
  
}


const marks = 0;
if(marks<0){
    // console.log("Why are you giving negative number")
}
else if(marks>100){
    // console.log("please enter correct number")
}
else if(marks>=90){
    // console.log("Grade A");
}else if (marks>=75){
    // console.log("Grade B")
}else{
    // console.log("Average marks")
}



// for (initialization;consition;update){
//     console.log("")
// }
// for(let i =0; i<=5; i++){
//     console.log(i)
// }

// for of loop 
// const pets = ["Dog", "Cat", "Rabbit"];
// for(const pet of pets){
//     console.log(pet)
// }
for (let i=1; i<=5;i++){
  if(i===3){
    break;
  }
//   console.log(i)
}
// break stops the loop 
// continue skips the current iteration and proceeds to the next one.


// simple function 
// function greet(){
//     console.log("hi this is my new function")
// }
// greet();

// functions with parameters 
// parameters let you provide infomation to a function.
function greetUser(name){
    console.log('User name is '+ name)
}
// greetUser("Gaurav")
// greetUser("BABY")

function add(a,b){
    return a+b;
}
const result = add(10,20)
// console.log(result)

function sub(a,b){
    return a-b;
}
const result1 = sub(20,10)
// console.log(result1)


function calculateTotal(price, quantity){
    return price * quantity
}
const result2 = calculateTotal(20,10);
// console.log(result2 , "this is the total ")

// Arrow functions 
// mordern javascript often uses arrow functions , especially in react

const multiply = (a,b) =>{
    return a*b
}
// console.log(multiply(4,5))
// more shorten way 
const multiplyy = (c,d) => c*d;
// console.log(multiplyy(4,5))

const sayHello = () => "Hello!";
// console.log(sayHello())

const products = [
    "Dog Food",
    "Cat Toy",
    "Pet Toy",
    "Dog Collar",
    "Pet Bed"
];
// console.log(products.length)
const fruits = ['Apple','Banana'];
fruits.push('Mango');
fruits.push('Pineapple')
fruits.pop()
// console.log(fruits)

// const prices = [299,799,999,1499];

// Important array methods
// these methods appear frequently in real javascipt applications and React.
// const prices = [100, 200, 300];
// const updatedPrices = prices.map(
//     price =>price*2
// )
// console.log(updatedPrices)
const prices = [100, 200,300]
for(let i = 0; i<prices.length; i++){
  return prices*2
}
// console.log(prices)

// ! Callback Function
// function that is passed as a parameter of an another function is called a callback function

function ghotok(callback, patriName) {
  callback(patriName);
}

function patri(patriName) {
  console.log("first marriage patri 1 will ", patriName);
}

function patri2(patriName) {
  console.log("first marriage patri 2 will", patriName);
}

function patri3(patriName) {
  console.log("first marriage patri 3 will", patriName);
}

ghotok(patri, "hena"); //first marriage patri 1 will  hena
ghotok(patri2, "rohima"); //first marriage patri 2 will rohima
ghotok(patri3, "Karina"); //first marriage patri 3 will Karina

//! 1. Function arguments

// to check the length of arguments

function sum(a, b, c, d) {
  //To check the passed arguments length
  console.log(arguments.length);
  console.log(arguments);
  //arguments is array like object you cannot use loops directly. To loop over arguments you have to convert it following:
  let newArg = [...arguments];
  for (const element of newArg) {
    console.log(element);
  }
}

sum(10, 20, 25, 15, 18, 22);

//To check the function parameter length
console.log(sum.length); //4

//! 2. Function arguments pass by value & pass by reference

// Pass by value
const pname = "Firoz";

function callName(name) {
  console.log(name); //Firoz
  name = "Sunny";
  console.log(name); //Sunny
}

console.log(pname); //Firoz
callName(pname);
/* 
Note: Primitive data types only passes the copy of the value to the function parameter that's why it doesn't change the main value after passing in the function parameter.
*/

// pass by reference

const myObj = {
  name: "Hasib",
  age: 32,
};

function callTheName(obj) {
  console.log(obj.name); //Hasib

  obj.name = "Rakib";

  console.log(obj.name); //Rakib
}
console.log(myObj.name); //Hasib

callTheName(myObj);

console.log(myObj.name); //Rakib

/* 
Note: Non Primitive data types are passed by reference i.e values passed the memory address. That's why when change the value in the function it will change the main value. 
*/

//! Pre Increment, Pre Decrement, Post Increment & Post Decrement

// post increment
let increment = 0;

console.log("Post Increment", increment++); //0 //এই line এ value টা বৃদ্ধি পাইসে কিন্তু console এ তা print না হয়ে পরের console এ increment value টা show হচ্ছে কারণ post increment current line এ increase করে পরের line এ show করে ।
console.log("Post Increment", increment); //1

// pre increment
let preIncrement = 0;

console.log("Pre Increment", ++preIncrement); //1 //pre increment এর ক্ষেত্রে increment টা current line এই হয়ে যায় তাই console এ সাথে সাথেই increment value টা show করে।

// post decrement
let postDecrement = 5;

console.log("Post Decrement", postDecrement--); //5 same as post increment
console.log("Post Decrement", postDecrement--); //4

//pre decrement

let preDecrement = 8;

console.log("Pre Decrement", --preDecrement); //7 //same as pre increment

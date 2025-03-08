// ! Primitive Data type
let person = "Ammar";
let newPerson = person;
console.log("Primitive: ", newPerson); //Ammar

person = "Hero Alam"; //এখানে person কে change করার পরেও console এ Ammar print হবে।

console.log("Primitive: ", newPerson); //Ammar

// ! Non-Primitive Data type
const employee = {
  name: "Arham",
};

let newEmployee = employee;
console.log("Non-Primitive: ", newEmployee); //{name: 'Arham'}

newEmployee.name = "Ammar"; //এখানে name change করার পর employee name টা update হয়ে যায় কারণ non-primitive data type হচ্ছে reference type যা reference memory টাকে point করে। এখানে newEmployee change করার সাথে সাথে ওই reference এর value টা change হয়ে জায়।
console.log("Non-Primitive: ", newEmployee); //{name: 'Ammar'}

// ! Truthy and falsy value
/* Truthy value (evaluate to true) 
'Hello' -> Non-empty string
42 -> Any non zero number
-1 -> Negative number
[] -> Empty array
{} -> Empty object
 Infinity -> Positive infinity
 -Infinity -> Negative infinity
 function(){} -> Any function
 new Date() -> A valid date object
 true -> The Boolean value true
*/

/* 
Falsy value (evaluate to false)
"" -> Empty string
0 -> zero
-0 -> negative zero
null -> null value
undefined -> undefined value
NaN -> not a number
false -> the boolean value false
0n -> BigInt Zero
document.all -> A special falsy value in browser
null == undefined -> Both are falsy in comparison
*/

let input = 0n;

if (input) {
  console.log(input, " is a truthy value");
} else {
  console.log(input, "Falsy value");
}

// ! using double bang (!!) or single bang(!) for truthy or falsy value

// ! Double equal (==) vs Triple Equal (===)

// an exceptional example using ==

let num1 = true;
let num2 = 1;

if (num1 == num2) {
  console.log("This is equal value"); //This is equal value
} else {
  console.log("Noo this is not equal value");
}

/* 
Note: এখানে (==) value check করে। তাই এখানে true কে 1 এ convert করে এবং 1==1 যা true return করে। So best practice is to check with ===।
*/

// another exceptional example using ===
let num3 = [];
let num4 = [];

if (num3 === num4) {
  console.log("This is equal value");
} else {
  console.log("Noo this is not equal value"); //Noo this is not equal value
}
/* 
Note: primitive data types are reference type so they cannot be compared because both num3 and num4 points different memory location and returns false. but if you assign num4 = num3 it will return true due to pointing same memory location.
*/

// ! Closure
// Inner function can access the variable from it's parent scope after outer function has been closed

function counter() {
  let counter = 0;
  return function updateCount() {
    counter++;
    console.log(counter);
  };
}
/* 
Note: এখানে outer function counter কে call করার পর counter এর value 0 থাকে এবং একটা inner function "updateCount()" return করে এবং count নামের variable এ set করা হয়। এরপর count() দিয়ে পরবর্তী line এ inner function টাকে call করা হয়।
*/
let count = counter();
count(); //1
count(); //2
count(); //3

let count2 = counter();
count2(); //1
count2(); //2
count2(); //3
count2(); //4

// but

count(); //4
// এখানে previous count() এর value টাও memory তে থেকে যায় i.e outer function close হয়ে যাওয়ার পরেও inner function টা outer function এর value টা মেমোরি করে রাখে। একেই closure বলে।

// Primitive 
//It's 7 categories, it always, CALL BY VALUE
// 7 TYPES : String, Number, Boolean, null, undefined, Symbol, BigInt.

// JavaScript is a dynamically typed language

const score = 100
const scoreValue = 100.2

const isLoggedIn = false
const outsideTemp = null

//Below both one is undefined
let userEmail; //Undefined
let UserAcccount = undefined;

const id = Symbol('123');

const anotherId = Symbol('123');

console.log(id === anotherId); //false

console.log(typeof id);         //Symbol
console.log(typeof anotherId);  //Symbol

//BigInt
const bigNumber = 23434556765432n;



//**********************************************************/



// Non-primitive or Reference type
//Array , Objects, Functions, 


//Array
const heroes = ["Shankar", "Rajeev", "Vivek"]

//objects

let myObj = {
    name : "nagen",
    age: 22,
}


//Function , treat like a variable

const myFunction = function(){
    console.log("Hello World!! ")
}


//To know the data type.
console.log(typeof score); //number
console.log(typeof outsideTemp); //Object


console.log(typeof myFunction); //Function


//Link
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof


/*
Type	Result
Undefined	"undefined"
Null	"object" (reason)
Boolean	"boolean"
Number	"number"
BigInt	"bigint"
String	"string"
Symbol	"symbol"
Function (implements [[Call]] in ECMA-262 terms; classes are functions as well)	"function"
Any other object	"object"other object	                    "object"



*/
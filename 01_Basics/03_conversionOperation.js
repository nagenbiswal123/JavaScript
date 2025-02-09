let score = "23abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(valueInNumber) //

console.log(typeof valueInNumber) //

// let score2 = null
// let score2 = undefined 
let score2 = "Nagen";


let valueInNumber2 = Number(score2)

console.log(typeof score2)


// "33" => 33
// "33abc" => NaN
// true => 1, false =>0
// " " =>false

// "Nagen" => false

// let isLoggedIn = 1
// let isLoggedIn = ""
let isLoggedIn = " Nagen"

let booleanisLoggedIn  = Boolean(isLoggedIn)

console.log(booleanisLoggedIn)


// 1 => true; 0 => false
// " " => false
// " Nagen" =>true c 


let someNumber  = 23 //
let stringNumber = String(someNumber); //it's converted to string.
console.log(stringNumber); //23

console.log(typeof stringNumber) //string

//*************Operations **************/

let value  = 3
let negValue = -value 
console.log(negValue)

console.log(2+2);
console.log(2-2);
console.log(2**2);
console.log(2%3);
console.log(10/2);

let str1 = "hello"
let str2 = " nagen"
let str3 = str1 + str2 
console.log(str3)

console.log("1" + 2); //12

console.log(1 +"2"); //12

console.log("1" + 2 + 2); //122

console.log(1 + 2 + "2"); //32


console.log((3 + 4) * 5 % 3)

console.log(true)

console.log(+true) // console.lopg(true+) //unexpected error, 

console.log(+" ");



let num1 , num2, num3 
num1 = num2 = num3 =  2 + 2;
console.log(num1)




let gameCounter = 100
gameCounter++;
console.log(gameCounter); //101


let gamevalue = 200;
++gamevalue
console.log(gamevalue); //102


let x = 3;
const y = x++;
console.log("X:", x,"Y:", y)  //X: 4 Y: 3


let a = 3; 
const b = ++a;
console.log("a: ", a, "b: ", b); //a:  4 b:  4

//Link to study

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
// Functions
function sayMyName() {
    console.log("Hi");
    console.log("Hi");
}
sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

// let ans2 = addTwoNumber(23,34);
// console.log(ans2);

//Don't write above way, it will though undefined error
/*
The reason the output is undefined is that the function addTwoNumber doesn't explicitly return any value. In JavaScript, if a function does not return anything, it implicitly returns undefined.
*/

function addTwoNumber(number1, number2){
    // let sum = number1 + number2;
    // return sum;  
    return number1 + number2;
    console.log("NAGEN");  //Unreachable code detected., because after return , you are trying printing the name
}

let ans = addTwoNumber(12, 867);
console.log("Result: ", ans);


// Scopes 
// function loginUserMessage(username = "sam") {

function loginUserMessage(username) {
    if(username === undefined){
    // if(!username){
        console.log("Please enter a user name: ");
        return
        
    }
    return `${username} just logged in`
}


// let value = loginUserMessage("nagen");
// console.log(value);

// console.log(loginUserMessage("nagen"));


console.log(loginUserMessage());

// Shopping Card


//...  Rest and spread operator we call it, it depend on work and cretieria


//Rest operator here.

function CalculateCartPrice(val1, val2, ...num1) {
    return num1;
}


console.log(CalculateCartPrice(123, 323, 176 )); //[] 123, 323, 176 ]
console.log(CalculateCartPrice(123, 323, 176, 897, 567, 4565, 9876 ))



const user = {
    username : "Nagen",
    prices : 199

}

function handleObject(anyobject) {

    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}


// handleObject(user);
handleObject({
    username: " sam",
    price: 399

})


const myNewArray = [2334, 232, 243];

function returnSecondValue(getArray){
    return getArray[2];
}

console.log(returnSecondValue(myNewArray)); // 243


console.log(returnSecondValue([12,34,465,12]));  //465


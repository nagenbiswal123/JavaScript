const userEmail = []


if(userEmail){
    console.log("Git user email");
} else {
    console.log("Don't have user email");
}



// Falsy Values

// false, 0, -0, BitInt 0n, "", null, undefined, NaN(Not a number) ---??>Apart from these number all are truthy value


// Truthy

// "0", 'false', " ", [], {}, function(){} -->Empty fujction, 

if (userEmail.length === 0) {
    console.log("Array is empty!");
    
}


// 

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}



// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10      


val1 = null ?? 10

console.log(val1); // 5


val2 = undefined ?? 15

console.log(val2); // 5


val3 = null ?? 10 ?? 15

console.log(val3);


//  Terninary Operation.

// Condition ? true : false


const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Less than 80") : console.log("Greater than 80");


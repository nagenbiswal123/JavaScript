//Iterations


for (let i = 0; i <= 10; i++) {
    const element = i;
    
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
}


// console.log(element); --> Wrong printing the output, out of the block

let num1 = "";

console.log(num1);



for (let j = 1; j <= 10; j++) {
    console.log(`Outer Loop value: ${j}`);
    for(let k = 1; k <= 10; k++) {
        // console.log(`Inner Loop Value: ${k} and outer loop is ${j}`);
        // console.log(j + '*' + k + ' = ' + j * k); 
    }
}



//Array declare 
let myArray = ["flsh", "batman", "superman", "Shaktiman"]

console.log(myArray.length);


for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


// break and continue.

for (let index = 0; index <= 20; index++) {
    if ( index == 5) {
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${index}`);
}


console.log("+++++++++++++++++++++++++");


for (let index = 0; index <= 20; index++) {
    if ( index == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
}




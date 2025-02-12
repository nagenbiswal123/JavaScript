// Immediately Involked Function Expressions (IIFE)

function chai() {
    console.log(`DB CONNECTED`);
}

chai();


(function job(){
    console.log(`Thanks Bhai Log !!`);
})();    //This is called IIFE



( (name) => {
    console.log(`ARROW Function!! ${name}`); //ARROW Function!! nagen
    
})("nagen");

//

let val1 = 123;
let val2 = 376;


function addTwo(num1, nmum2) {
    let sum = num1 + nmum2;
    return sum;
}

let result = addTwo(val1, val2);

let resul23 = addTwo(23,12);

console.log(result);

console.log((resul23));

console.log(typeof val1);


console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");



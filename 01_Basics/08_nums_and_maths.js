const score = 400;
console.log(score); //400

console.log(typeof score); //number

const balance = new Number(1200);
console.log(balance); //[Number: 1200]
console.log(typeof balance); //

console.log(balance.toString().length); //1200, 4
console.log(typeof balance); //Object


//Use toFix it in during ecommerece website making.
console.log(balance.toFixed(2)); //1200.00


//precised value
const otherNumber = 23.7657;
console.log(otherNumber.toPrecision(3)); //23.8

console.log(otherNumber.toPrecision(2)); //24


function precise(x) {
    return x.toPrecision(4);
}

console.log(precise(123.434)); //123.4
//Expected output: "123.4"

console.log([precise(0.004)]);
//Expected output: "0.00400"

console.log(precise(1.23e5));
//Expected output: 1.230e+5


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
//Expected Output : 10,00,000


//+++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++//

console.log(Math);
//Expected Output : Object [Math] {}

console.log(Math.abs(-4)); //Expected Output : 4
console.log(Math.abs(4)); //4
console.log(Math.round(4.2343)); //4


console.log(Math.round(9.5)); //10, it will round off the value .5 or above decimal values.


console.log(Math.ceil(4.2)); //Upper value, if the .upper value will be there then it will printint round of upper value.

console.log(Math.floor(8.9)); //8 will come, becuase we used floor, in floor, if the .value if there then it will come lower one.

let num = 15;
console.log(Math.sqrt(num)); //4

console.log(Math.pow(num, 5)); //759375

console.log(Math.min(2,34,56,2,45,7,2,1)); //1

console.log(Math.max(87,2,3,5,7,89,6,23)); //89


console.log(Math.random()); //Randomly it will change the value..

console.log((Math.random()*10) + 1 ); 

console.log(Math.floor(Math.random()*10) + 1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min * 1)) + min);

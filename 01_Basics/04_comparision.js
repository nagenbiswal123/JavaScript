console.log(2 > 1); //true
console.log(2 >= 1); //true
console.log(2 < 1); //false
console.log(2 == 1); //false
console.log(2 != 1); //true

console.log("*********************");

console.log("2" > 1); //true, it will be not predictable, because the type is not same.
console.log("02" > 1); //true

console.log("*********************");
//These type of comparision , we should avoid always, it gives confisuions

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false


console.log("*********************");


// ===, it will not check only the value, but it. check value and datatype also
console.log("2" == 2);


//
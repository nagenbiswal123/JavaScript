// Array //
//mdn link - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myArr = [ 2, 23, 34, 34, "Nagen", "Biswal"];

console.log(myArr[0]);

const myHeroes =  ["Shaktiman", "Nagaarjun"];

console.log(myHeroes[1]);

//Another way to declare the array
const myArray2 = new Array(1,32,44,56,6);
console.log(myArray2[2]);

// Array Methods
myArr.push(7);
console.log(myArr); // [ 2, 23, 34, 34, 'Nagen', 'Biswal', 7 ]

myArr.push(43);
myArr.push(34);
console.log(myArr);  //[ 2, 23, 34, 34, 'Nagen', 'Biswal', 7, 43, 34 ]

//pop
myArr.pop();         //Pop will delete the last element in the array
console.log(myArr);  //[ 2, 23, 34, 34, 'Nagen', 'Biswal', 7, 43 ]


//unshift, it will add the element in starting
myArr.unshift(90);
console.log(myArr); // [ 90, 2, 23, 34, 34, 'Nagen', 'Biswal', 7, 43 ]
//Expected Output : [ 90, 2, 23, 34, 34, 'Nagen', 'Biswal', 7, 43 ]

//Shift , it delete the element from starting....

myArr.shift();
console.log(myArr);
//Expected Output : [ 2, 23, 34, 34, 'Nagen', 'Biswal', 7, 43 ]

myArr.shift();
console.log(myArr);
//Expected Output : 23, 34, 34, 'Nagen', 'Biswal', 7, 43 ]


console.log(myArr.includes(878)); //false
console.log(typeof myArr);       //object


console.log(myArr.indexOf(9)); //-1, means it doesn't exist

console.log(myArr.indexOf(23)); //0, It means , the value is available in the array.


const newArr = myArr.join();
console.log(myArr);   //[ 23, 34, 34, 'Nagen', 'Biswal', 7, 43 ]
console.log(newArr);  //3,34,34,Nagen,Biswal,7,43


console.log(typeof newArr); //String


console.log("+++++++++++++++++++++++++++++++++");

// Slice, Splice 

console.log("A",myArr); // A

const myn1 = myArr.slice(1,3);
console.log(myArr); // [ 23, 34, 34, 'Nagen', 'Biswal', 7, 43 ]
console.log(myn1);  // [ 34, 34 ]



const myn2 = myArr.splice(1,3);
console.log(myn1);
console.log(myn2);


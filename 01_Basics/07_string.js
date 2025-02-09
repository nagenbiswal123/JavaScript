//String
let str1 = "hello";
let str2 = " world ";


let str3 = str1 + str2;
console.log(str3);


const name = "nagen";
const repoCount = 50;

//Dont use this types, it's old techniques
console.log(name + repoCount + "value "); //Concatination

//Use this backticks
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


//String declare

const gameName = new String("nbis-wal"); 


console.log(gameName); //[String: 'nbiswal']
console.log(typeof gameName); //Objects


console.log(gameName[0]); //n
console.log(gameName.__proto__); //{}


console.log(gameName.length); //7
console.log(gameName.toUpperCase()); //NBIS-WAL
console.log(gameName.charAt(2)); //i


console.log(gameName.indexOf('i')); //2

console.log(gameName.toLowerCase()); //n-biswal

const newString = gameName.substring(0,2);

console.log(newString); //nb



const value8 = gameName.slice(-4, 1);
console.log(value8);

//TREAM and replace 

const newStringOne = "  nagen    ";

console.log(newStringOne);// nagen

console.log(newStringOne.trim()); //nagen, trim it removes the extra spaces

//trimstart =>It removes the starting spaces, 
//trimend =>It removes the end spaces.

console.log(newStringOne.trimEnd()); //  nagen
console.log(newStringOne.trimStart()); //nagen


console.log(newStringOne.valueOf()); //  nagen

//*****************************************/

//Replace 
//Browser doesn't understand the space in url..

// const url = "https://www.goog le.com";
const url = "https://www.goog%20le.com";
//brower will replcae it to https://www.goog%20le.com
console.log(url);     //https://www.goog%20le.com
console.log(url.replace('%20', '_')) //https://www.goog_le.com


console.log(url.includes('goo')); //true
console.log(url.includes('g757')); //false


const gameName3 = new String('nagen-biswal-com');
console.log(gameName3.split('-'));

console.log(gameName3.split("-"));
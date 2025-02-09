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

const gameName = new String("nbiswal"); 


console.log(gameName); //[String: 'nbiswal']
console.log(typeof gameName); //Objects


console.log(gameName[0]); //n
console.log(gameName.__proto__); //{}


console.log(gameName.length); //7
console.log(gameName.toUpperCase()); //NBISWAL
console.log(gameName.charAt(2)); //i


console.log(gameName.indexOf('i'));







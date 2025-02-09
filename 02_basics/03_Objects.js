// Objects
// Singleton

// Object.create  --->singleton way
const mySym = Symbol("key1");

//Object literals 
const JsUser = {
    name : "Nagen",
    mySym : "myKey1",
    "fullname" : " NAGEN BISWAL",
    age : 29,
    email : "nagen.google.com",
    location : "BANGLORE",
    isLoggedIn : false,
    lastLogInDays : ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);

console.log(JsUser.fullname);
console.log(JsUser["fullname"]);
console.log(JsUser.mySym); //myKey1


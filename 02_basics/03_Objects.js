// Objects
// Singleton

// Object.create  --->singleton way
const mySym = Symbol("key1");

//Object literals 
const JsUser = {
    name : "Nagen",
    [mySym] : "myKey1",
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


JsUser.email = "biswalnagen02@gmail.com";

// Object.freeze(JsUser); //It will freeze the value.
JsUser.email = " google@gmail.com"
console.log(JsUser);



// Functions 
// Getting add

JsUser.greeting = function() {
    console.log("Hello JS user");
}


console.log(JsUser.greeting)  //[Function (anonymous)]
console.log(JsUser.greeting()) //Hello JS user

console.log("++++++++++++******************++++++++++++");


JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetingTwo());
console.log(JsUser.greetingTwo());



// JsUser.name
// JsUser[username]
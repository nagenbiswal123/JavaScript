//Stack (Primitive), Head (Non-Primitive)

let myYoutubename = "Nagenbiswal02dotcom"

let anothername = myYoutubename
anothername = "biswaldev";

console.log(myYoutubename); //Nagenbiswal02dotcom
console.log(anothername); //biswaldev

let user1 = {
    email : "userdotgoogle.com",
    upi : "user@ybl"
}


let user2 = user1;
console.log(user2);

user1.email = "nagenbiswal92738.com"

console.log(user1.email); //nagenbiswal92738.com
console.log(user2.email); //nagenbiswal92738.com



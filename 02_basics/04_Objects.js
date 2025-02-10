// const tinderUser = new Object();  => Singleton Objects
// const tinderUser = {}.        => Non-Single ton objects 

const tinderUser = { };

tinderUser.id  = "1234abc";
tinderUser.name = "Sammy";
tinderUser.loggedIn = false


console.log(tinderUser);
//Expected Output :  { id: '1234abc', name: 'Sammy', loggedIn: false }


const regularUser = {
    email : "biswal02@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Vivek",
            lastname : "Biswal"
        }

    }
}


console.log(regularUser);
//Expected OUrput : 
/*
{
  email: 'biswal02@gmail.com',
  fullname: { userfullname: { firstname: 'Vivek', lastname: 'Biswal' } }
}

*/

console.log(regularUser.fullname.userfullname.firstname); //Vivek

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "c", 4 : "d"};
const obj31 = {5 : "e", 6 : "f"}


//Below one is problematic
//console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }


const obj3 = Object.assign(obj1, obj2);
console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const obj4 = Object.assign({},obj1, obj2)
console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const obj5 = Object.assign({},obj1, obj2, obj31)
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


const obj6  = {...obj1, ...obj2, ...obj3};
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }




//Database values.

const users = [{
    id : 10,
    email : "nagenbiswak23@gmail.com"
},{

},{

},{

},{

}
]

console.log(users[0].email); // nagenbiswak23@gmail.com

console.log(tinderUser);

console.log(Object.keys(tinderUser));  // [ 'id', 'name', 'loggedIn' ] -->Very important this one.

console.log(Object.values(tinderUser));  // [ '1234abc', 'Sammy', false ]




console.log(Object.entries(tinderUser));  //[ [ 'id', '1234abc' ], [ 'name', 'Sammy' ], [ 'loggedIn', false ] ]


console.log(tinderUser.hasOwnProperty('loggedIn')); //true


console.log(tinderUser.hasOwnProperty('isloggedIn'));  //false
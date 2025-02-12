// FLOW CONTROL
// If

// if (condition) {
//     //Code
// }


// if (false) {
//     //Code
// }


const isUserloggedIn = true;


if(isUserloggedIn) {
    console.log("Yes, User is loggedIn");
    
}

// <, >, <=, >=, == , ====


if(2>8){
    console.log("Not greater than");
}

else{
    console.log("Yes, greater than!");
    
} //else statement will execute it..



if( 3 != 4) {
    console.log("Yes, true");
    
} //True


if( 2 === "23"){
    console.log("Yes, 2 is equal to 2: ");
    
}  //False statement 



const temeratutre = 41;

if(temeratutre < 50) {
    console.log(" <50 ");
}

else{
    console.log("Temperature is greater than 50");
    
}



const score = 200;

if (score > 100) {
    let power  = "fly";
    console.log(`User Power ${power}`);
    
}

// Var scope is Global level

// But let and const is Block scope.

//  console.log(`User Power ${power}`);   -->Don't try to execute console.log in outside, if the block level variable is defined as var..



const balance = 1000;

if (balance > 500) {
    console.log("True ");
}

// OR


//Don't write below way
// if (balance > 500) console.log("test"),     //This way also we can write it....
// console.log("test2");

//Correct way

if (balance > 500) console.log("This is correct way to write the if condition");


//Nested If


if (balance < 500) {
    console.log("Less than");
} else if(balance < 750){
    console.log("Less than 750");
} else if(balance < 900){
    console.log("Less than 900 ");
}else {
    console.log("Less than 1200");
}


//


const userLoggedIn = true;
const debitCard  = true;
const loggedInFromGoogle = false;
const loggedInFromEmail =true;

if(userLoggedIn && debitCard && 2 == 2 ) {
    console.log("Allow to Buy the course!!");
}



if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged In");
    
}


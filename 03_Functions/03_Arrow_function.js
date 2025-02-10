// Arrow Function

const user = {
    username : "nagen",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);  
        console.log(this);
             
    }
}

// user.welcomeMessage()
// user.username = "sam";

// user.welcomeMessage()

console.log(this);   // {}

//Function


// function chai() {
//     // let username = "nagen";
//     console.log(this.username);
    
// }

// chai()


const chai = () => {
    let username = "Nagen";
    console.log(this);
}
chai()

// Arrow Function Syntax

/*

() => {}

*/


// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(3, 5));




const addThree = (num1, num2, num3) => {
    return num1 + num2 + num3;
}


console.log(addThree(3, 4, 56));



//Implicit Return 

const addFour = (num1, num2, num3, num4) =>  num1 + num2 + num3 + num4;

console.log(addFour(1, 2, 3, 54));



const addfive = (num1, num2, num3, num4, num5) =>  (num1 + num2 + num3 + num4 + num5);

console.log(addfive(1, 2, 3, 54, 123));


//Return Object

// const addTwo = (num1, num2) =>  {username : "nagen"};

// console.log(addTwo(34,87)); //undefined

const addTwo = (num1, num2) =>  ({username : "nagen"});

console.log(addTwo(34,87));  // username: 'nagen' }



const myArray = [3, 45, 67 ,545];

// myArray.forEach(() => {})

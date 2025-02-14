//Loop - Array Specific Loop.

[" ", " "]

[{}, {}, {}]


const arr = [1, 23, 34, 67, 34,323]

//forof loop
for (const num of arr) {
    console.log(num);   
}



const greetings = "Hello World!!";

for (const num2 of greetings) {
    if (num2 ==" ") {
        break;
    }
    console.log(`Each char is ${num2}`);   
}



//Maps -->


const map = new Map()

map.set('IN', "India");

map.set('US', "United state of america");

map.set('FR', "FRance");

console.log(map);

/*
Expected OutPut..
Map(3) {
    'IN' => 'India',
    'US' => 'United state of america',
    'FR' => 'FRance'
  }

*/

// for (const key of map) {
//     console.log(key);
// }
/*
Expected Value

[ 'IN', 'India' ]
[ 'US', 'United state of america' ]
[ 'FR', 'FRance' ]
*/


for (const [key, value] of map) {
    console.log(key, ':-', value);
}

//Expected output:

// IN :- India
// US :- United state of america
// FR :- FRance



const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

//Object will not with below method for forof 
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }
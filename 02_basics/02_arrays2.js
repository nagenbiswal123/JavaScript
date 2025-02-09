const marvel_heros = ["Thor", "ironman","spiderman"]

const dc_heros = ["superman", "flshh", "batman"]

marvel_heros.push(dc_heros);

console.log(marvel_heros); 
//Expected Output: [ 'Thor', 'ironman', 'spiderman', [ 'superman', 'flshh', 'batman' ] ]

console.log(marvel_heros[3]);    //[ 'superman', 'flshh', 'batman' ]
console.log(marvel_heros[3][1]);  //flshh


const allHoros = marvel_heros.concat(dc_heros)
console.log(marvel_heros);  //[ 'Thor', 'ironman', 'spiderman', [ 'superman', 'flshh', 'batman' ] ]


const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);
//Expected Output:
/*
[
  'Thor',
  'ironman',
  'spiderman',
  [ 'superman', 'flshh', 'batman' ],
  'superman',
  'flshh',
  'batman'
]
*/

const another_array  = [1,2,3,[4,5,6], 7, [6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);
/*
Expected OutPut:

[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]

*/


console.log(Array.isArray("Nagen")); //false
// console.log();

console.log(Array.from("Nagen")); 
//Expected Output : [ 'N', 'a', 'g', 'e', 'n' ]

console.log(Array.from({name: "Nagen"}));  //[] -- >Intresting and important Q.




let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
//Expected Array : [ 100, 200, 300 ]

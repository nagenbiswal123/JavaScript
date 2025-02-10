// Scopes //

// {} --> This is called scopes

//Global scopes 
// var c = 5676
let a = 234


if (true) {
    //Block scopes 
    let a = 23
    const b = 34
    console.log("Inner: ", a);
    

}

console.log(a);
// console.log(b);
// console.log(c);    // 87




for(let i = 0; i < 10; i++){
    if(i == 5){
        break;
    }
    console.log(i);
}



let arr = [1, 2, 3, 5, 6];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element); // This will print each element in the array
}

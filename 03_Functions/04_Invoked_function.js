// Immediately Involked Function Expressions (IIFE)

function chai() {
    console.log(`DB CONNECTED`);
}

chai();



(function job(){
    console.log(`Thanks Bhai Log !!`);
})();    //This is called IIFE



( (name) => {
    console.log(`ARROW Function!! ${name}`); //ARROW Function!! nagen
    
})("nagen");

//
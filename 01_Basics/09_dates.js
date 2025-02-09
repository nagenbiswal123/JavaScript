// Dates
let myDate = new Date();

console.log(myDate); 
//Expected Output: 2025-02-09T12:44:58.803Z

console.log(myDate.toString());
//Expected Output 
//un Feb 09 2025 12:45:54 GMT+0000 (Coordinated Universal Time)

console.log(myDate.getDate());           //9
console.log(myDate.getDay());            //0
console.log(myDate.getFullYear());       //2025
console.log(myDate.getHours());          //12
console.log(myDate.getMilliseconds());   //13
console.log(myDate.getMinutes());        //50
console.log(myDate.getMonth());          //1


console.log(myDate.getSeconds());       //55
console.log(myDate.getTime());          //1739105534770
console.log(myDate.getTimezoneOffset()); //0
console.log(myDate.getUTCDate());       //9

console.log(myDate.getUTCDay());        //0


console.log(myDate.toDateString());   //Sun Feb 09 2025
console.log(myDate.toISOString());    //2025-02-09T12:54:27.199Z
console.log(myDate.toJSON());         //025-02-09T12:54:50.805Z

console.log(myDate.toLocaleDateString()); // 2/9/2025
console.log(myDate.toLocaleString()); // 2/9/2025, 1:22:18 PM
console.log(myDate.toLocaleTimeString()); //1:22:45 PM
console.log(myDate.toString()); //Sun Feb 09 2025 13:23:32 GMT+0000 (Coordinated Universal Time)
console.log("********");

console.log(myDate.toTimeString()); //13:24:02 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString()); //Sun, 09 Feb 2025 13:24:35 GMT


console.log(typeof myDate); // object

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
console.log("+++++++++++++++++");

let myCreatedDate = new Date(2025, 0, 9);  //In javascript month start in 0, 0 => January

console.log(myCreatedDate.toDateString()); // Thu Jan 09 2025


// let myCreatedDate2 = new Date(2025, 0, 9); 
// let myCreatedDate2 = new Date(2025, 0, 9, 5, 3); 
// let myCreatedDate2 = new Date("2023-01-09");  // 1/9/2023, 12:00:00 AM

let myCreatedDate2 = new Date("09-01-2024");  // 9/1/2024, 12:00:00 AM

console.log(myCreatedDate2.toLocaleString()); // 1/9/2025, 5:03:00 AM
console.log(myCreatedDate2.getTime()); // 1725148800000


let myTimeStamp =  Date.now();
console.log(myTimeStamp); // 1739113945320

console.log(Math.floor(Date.now()/1000));


let newDate = new Date();

console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMilliseconds());
console.log(newDate.getMinutes());
console.log(newDate.getMonth());
console.log(newDate.getSeconds());
console.log(newDate.getTime());

console.log(newDate.getTimezoneOffset());
console.log(newDate.getUTCDate());

console.log(newDate.getUTCDay());
console.log(newDate.getUTCFullYear());


newDate.toLocaleString('default', {
    weekday: "long"
})

console.log(newDate);


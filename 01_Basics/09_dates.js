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


















const accountId = 12345;
let accountEmail = "biswalnagen02@gamil.com";
var accountPassword = "343445";
accountCity = "Jaipur";

// accountId = 2334; //Not allowed in JavaScript..

accountEmail = "hc@hc.com";
accountPassword = "765HVGD";
accountCity = "Banglore";
let accountstate; //Undefined value.
/*
Prefer not to use var..
Because of issue in block and functional scope...
*/

console.log(accountId);

console.table([accountEmail,accountId,accountPassword,accountCity, accountstate]);


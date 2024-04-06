const accountId = 144
let accountEmail = "vs@gmail.com"
var accountPassword = "2490"
accountCity = "Jaipur"
let accountState;

//accountId = 2 //not allowed

/*javascript  prefer not to use var 
because of issue in block scope and functional scope*/

accountEmail = "vsa@gmail.com"
accountPassword = "121444"
accountCity = "delhi"
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
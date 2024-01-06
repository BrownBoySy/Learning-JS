const accountId = 1998748
let accountEmail = "Satyam@gmail.com"
var accountPassword = "1234"
accountCity = "Delhi"

// accountId = 34 not allowed

accountEmail = "sat@gahgs.com"
accountPassword = "11111"
accountCity = "uttrakhand"

/*
do not use var 
beacuase of block scope and functional scope
*/

let accountState;

console.log(accountId);

console.table([accountEmail, accountPassword, accountCity, accountState])
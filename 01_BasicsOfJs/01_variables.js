const mySalary = 15000
let myEmail = "samarth@google.com"
var myPassword = "1234"
myCity = "Mumbai"
let accountState;

// mySalary = 1000 TypeError: Assignment to constant variable.
// console.log(mySalary);

myEmail = "sam@123.com" //Allowed to change when LET is used
console.log(myEmail);

myPassword = "789" //Allowed to change
// console.log(myPassword);

myCity = "Pune"
console.log(myCity)

console.table([mySalary, myEmail, myPassword, myCity, accountState])

/*
Multiline comment
Prefer not to use 'var' beacuse of block scope and functional scope issue
*/






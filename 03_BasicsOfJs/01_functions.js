// console.log("S");
// console.log("A");
// console.log("M");
// console.log("A");
// console.log("R");
// console.log("T");
// console.log("H"); //iNEFFICIENT WAY TO PRINT ALL LETTERS OF MY NAME

function sayMyName(){
  console.log("S");
  console.log("A");
  console.log("M");
  console.log("A");
  console.log("R");
  console.log("T");
  console.log("H");
}
// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
    
// }
function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
    
}
// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

// function userLoggedIn(username = "sam"){ // = "sam", default value
//     if(!username) {
//       // username === undefined
//       console.log("Please enter a username");
//       return;
//     }
//     return `${username} just logged in!`
// }
// console.log(userLoggedIn());


// function calculateCartPrice(num1) {
//     return num1
// }
// console.log(calculateCartPrice(200, 300)); // Returns only 200

function calculateCartPrice(...num1) {     //Rest operator ...
    return num1
}
// console.log(calculateCartPrice(200, 300, 400)); // Returns  [ 200, 300, 400 ]

function calculateCartPrice2(value1, value2, ...num1) {
    return num1
}
// console.log(calculateCartPrice2(100, 200, 300, 400)); // Returns [300, 400], 100 goes to value1 and 200 goes to value2

const user = {
    username : "Samarth",
    salary : 10000
}
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and the salary is ${anyObject.salary}`);
    
}
// handleObject(user) 
handleObject({
    username : "Sam",
    salary :"788"
}) // Other way to call the function

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1, 555, 748, 59]));






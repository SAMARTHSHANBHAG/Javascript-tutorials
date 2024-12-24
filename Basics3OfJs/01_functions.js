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

function userLoggedIn(username = "sam"){ // = "sam", default value
    if(!username) {
      // username === undefined
      console.log("Please enter a username");
      return;
    }
    return `${username} just logged in!`
}
console.log(userLoggedIn());

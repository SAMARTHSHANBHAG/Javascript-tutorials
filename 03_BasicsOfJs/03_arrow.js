const user = {
    username : "Samarth",
    price : 199,

    welcomeMessage : function() {
      console.log(`Hello ${this.username}, welcome to the website!`);
      console.log(this); // Has context,prints the object info and this welcomeMessage: [Function: welcomeMessage] 
    }
}
// user.welcomeMessage() // Hello Samarth, welcome to the website!
// user.username = "Sam"
// user.welcomeMessage() // Hello Samarth, welcome to the website! and prints the object info
// console.log(this); // {} NO Context

// function chai() {
//     let username = "Sasa"
//     console.log(this.username); // Undefined, 'this' does not work directly on functions
    
// }
// chai()

// const chai1 = function() {
//     let username = "Sasa";
//       console.log(this.username); // Undefined
// }
// chai1()


// ARROW FUNCTION
// const chai1 = () => {
//     let username = "Sasa";
//       console.log(this.username); // Undefined
//       console.log(this); // {}
// }
// chai1()

// Arrow function to add two numbers
const addTwoNums1 = (num1, num2) => {
    return num1 + num2
}
console.log(addTwoNums1(3, 4));

// Arrow function to add two numbers with implicit return
// const addTwoNums = (num1, num2) =>  num1 + num2 //No curly braces, no return keyword    
// const addTwoNums = (num1, num2) =>  (num1 + num2) //No curly braces, no return keyword    
// console.log(addTwoNums(3, 4));


const addTwoNums = (num1, num2) =>  ({username : "Samarth"}) 
console.log(addTwoNums(3, 4)); // {username : "Samarth"}





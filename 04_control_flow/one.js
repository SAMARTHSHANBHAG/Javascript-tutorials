// If

const IsLoggedIn = true
const temperature = 27

if(temperature == 28) {
    console.log("The temperature is exact1");
    
} else {
    console.log("The temperature is not exact");
    
}
console.log("Execute"); // Will be executed in all cases as it is out of the condition
// Types of comparisons : <, >, <=, >=, ==, ===, !=, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
    
// }
// console.log(`User power: ${power}`); // ReferenceError: power is not defined. Not in scope
// If var had been used to define power then it could have been accessed here as 'var' has global scope

// Implicit scope
const balance = 1000
// if (balance > 500) console.log("There is enough balance"), console.log("End"); // Bad code readablity

// if (balance < 500) {
//     console.log("Less than 500");
    
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("Less than 900");
    
// } else {
//     console.log("Less than 1200");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInByGoogle = false
const loggedInByEmail = true

if (userLoggedIn && debitCard) { //In AND condition, both cases must be true
    console.log("Allowed to buy courses");
    
}

if (loggedInByGoogle || loggedInByEmail) { // In OR condition, any one should be true
    console.log("User logged in");
    
}










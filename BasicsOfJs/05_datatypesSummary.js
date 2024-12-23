//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsidetemp = null
let userEmail = undefined // let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId); //False

const bigNumber = 2379827381n



// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["Superman", "Spiderman", "Batman"]

let myObj = {
    name: "Samarth",
    age: 21
}

const myFunc = function(){
    console.log("Hello world!");
    
}

console.log(typeof bigNumber);

// ----------------------------------------------------------------------------------------------------------------------

//  Stack memory(Primitive types), heap memory(Non primitive types)

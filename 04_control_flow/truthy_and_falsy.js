const useremail = "s@ai.com"

if (useremail) {
    console.log("got user email");
    
} else {
    console.log("did not get user email");
    
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (useremail.length === 0) {
//     console.log("Array is empty!");
    
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) { // Object.keys(emptyObj) will return an array of keys available
    console.log("It is an empty object bhai!");
    
}

// Nullish Coalescing Operator (??): null, undefined

let val1;
val1 = 5 ?? 10 // 5 is assigned
val2 = null ?? 1 // 1 is assigned
val3 = undefined ?? 234 // 234 is assigned
val4 = null ?? 10 ?? 25 // 10 is assigned


// console.log(val1);
// console.log(val2);
// console.log(val3);
// console.log(val4);

// Ternary operator
// condition ? true : false

const teaPrice = 30
teaPrice <= 25 ? console.log("Tea is cheap") : console.log("Tea is expensive"); //Tea is expensive



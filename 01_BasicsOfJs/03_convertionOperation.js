let score = "33"

// console.log(typeof score); //string

let valueInNumber = Number(score)
// console.log(typeof valueInNumber); //number

let a = "22abc"
let numOfA = Number(a)
// console.log(numOfA); //Output: NaN

let b = null
let numOfB = Number(b)
// console.log(numOfB); //Output: 0

let bool = true
let numOfBool = Number(bool)
// console.log(numOfBool); //Output: 1 for true, 0 for false

let name = "Samarth"
let numOfName = Number(name)
// console.log(numOfName); // NaN

// Note : "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = false
let booleanIsLoggedIn = Number(isLoggedIn)
// console.log(booleanIsLoggedIn); // output 0

let emptyString = ""
let boolOfEmptyString = Boolean(emptyString)
// console.log(boolOfEmptyString); //Output: False

let isLoggedOff = "Java"
let booleanIsLoggedOff = Boolean(isLoggedOff)
// console.log(booleanIsLoggedOff); //Output : True

// Note: 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// *********************** Operations ***********************

let val = 3
let negVal = -val // Basic negation
// console.log(negVal); // -3

// Basic arithmatic operations
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Samarth"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(true); //Output : true
// console.log(+true); //Output : 1
// console.log(+""); //Output : 0

// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2; Bad code practices, we need good code readablity

let gameCounter = 100
gameCounter++; //Increment
// console.log(gameCounter);















// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); //true
// console.log("02" > 1); //true

// console.log(null > 0);
console.log(null == 0); // null == 0 is false since null is only equal to undefined in loose equality (==).
console.log(null >= 0); // null >= 0 is true because null is converted to 0 in comparison operations (>=), making 0 >= 0 evaluate to true.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

// console.log("2" === 2);//False
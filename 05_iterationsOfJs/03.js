// for of

// ["", "", ""]
//[{}, {}, {}]

const arr2 = [1, 2, 3, 4, 5]

for (const i of arr2) {
    // console.log(i);
    
}

const greetings = "Hello bhai"

for (const greet of greetings) {
    // console.log(greet);
    
}

// Maps

const myMap = new Map()

myMap.set('IN', "India")
myMap.set('USA', "United States of America")
myMap.set('FR', "France")
myMap.set('FR', "France") // When printed, only unique values are considered

// console.log(myMap);
//  Output :- Map(3) {
//   'IN' => 'India',
//   'USA' => 'United States of America',
//   'FR' => 'France'
// }

for (const [key, value] of myMap) {
    // console.log(key, ':-', value);
    
}
//  output : IN :- India
// USA :- United States of America
// FR :- France

const Myobj7 = {
    game1 : "Counter Strike",
    game2 : "Temple Run 2"
}

// for (const [key, value] of Myobj7) {
//     console.log(key, ":-", value);
    
// }  Give an error. Objects are not iterable by for of loop



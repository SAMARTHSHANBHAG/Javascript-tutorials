const marvel_heroes = ["ironman", "spiderman", "thor"]
const dc_heroes = ["Flash", "Superman", "Batman"]

marvel_heroes.push(dc_heroes)
console.log(marvel_heroes); // [ 'ironman', 'spiderman', 'thor', [ 'Flash', 'Superman', 'Batman' ] ]
console.log(marvel_heroes[3]); // [ 'Flash', 'Superman', 'Batman' ]
console.log(marvel_heroes[3][1]); // Superman

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes); // [ 'ironman', 'spiderman', 'thor', 'Flash', 'Superman', 'Batman' ]

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes); // [ 'ironman', 'spiderman', 'thor', 'Flash', 'Superman', 'Batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const usable_another_array = another_array.flat(Infinity)
// console.log(usable_another_array); // [1, 2, 3, 4, 5,6, 7, 6, 7, 4, 5]


console.log(Array.isArray("Samarth")); // false
console.log(Array.from("Samarth")); //["S", "a", "m", "a", "r", "t", "h"]
console.log(Array.from({name : "Samarth"})); // Returns an empty array []. Does not know how to make an array from a key value pair

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ]












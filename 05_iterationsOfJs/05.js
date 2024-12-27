const coding = ["java", "cpp", "python", "ruby", "swift"]

// coding.forEach( function (i) {
//      console.log(i);
    
// } ) Different syntax for looping through the array

// coding.forEach( (item) => {
//     console.log(item);
    
// }) // Same concept of looping through the array but using arrow function

// Way of looping through an array by declaring a function

function printMe(val) {
    console.log(val);
    
}
// coding.forEach(printMe) // DO NOT call the function by writing printMe(). Just refer it

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// } )

const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    }
]

myCoding.forEach( (items) => {
    console.log(items.languageName);
    
    
} )

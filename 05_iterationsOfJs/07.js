const myNewnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const myNewnums = myNewnumbers.map( (num) => num + 10 )
// console.log(myNewnums); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const myNewnumbers1 = myNewnumbers
                        .map((num) => num * 10) // Output of this map function will be passed to the next function
                        .map((num) => num + 1) // This shows the chain like behaviour
                        .filter((num) => num > 40)
                    
// console.log(myNewnumbers1); //[41, 51, 61, 71, 81, 91, 101]


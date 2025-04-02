// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number");
        
    }
    // console.log(element);
}
// console.log(element); //ReferenceError: element is not defined

// Loop inside a loop
// for (let j = 1; j <= 10; j++) {
//     console.log(`Multiplication table of: ${j}`);
    
//     for (let k = 1; k <= 10; k++) {
//         //console.log(`Inner loop: ${k} and inner loop value ${j}`);
//         console.log(j + '*' + k + ' = ' + j*k);
        
        
//     }
    
// }

let myArray = ["Sam", "Fam", "Mam"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const anything1 = myArray[index];
    // console.log(anything1);
    
    
}

// Break and continue keywords

for (let index = 0; index <= 20; index++) {
    if (index == 5) {
    //    console.log("detected 5");
        break
    }
    // console.log(`Value of i is ${index}`);
    
    
}


for (let index = 0; index <= 20; index++) {
    if (index == 5) {
    //    console.log("detected 5");
        continue
    }
    // console.log(`Value of i is ${index}`);
    
    
}


  

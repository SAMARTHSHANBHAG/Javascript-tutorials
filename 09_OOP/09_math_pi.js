const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter); // writebale : false

// console.log(Math.PI); // 3.141592653589793
// Math.PI = 4 // Not overritable
// console.log(Math.PI); // 3.141592653589793

const tea = {
    name : "ginger tea",
    price : 250,
    isAvailable : true,

    orderTea : function(){
        console.log("Tea not available");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(tea, "name"));

Object.defineProperty(tea, "name", {
    // writable : false,
    enumerable : false
})
console.log(Object.getOwnPropertyDescriptor(tea, "name"));

for (let [key, value] of Object.entries(tea)) {
    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`);
    }  
}





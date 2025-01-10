const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // Db calls, cryptography, network calls
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
        
    }, 1000)
})

promiseOne.then(function() {
    console.log("Promise has been consumed");
    
})

// Creating a promise without holding it in a variable

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 completed!");
        resolve()
        
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})
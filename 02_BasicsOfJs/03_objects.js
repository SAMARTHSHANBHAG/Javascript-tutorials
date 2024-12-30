// singleton
// Object.create

// object literals

mySym = Symbol("Key1")

const jsUser = {
    name : "Samarth",
    "full name" : "Samarth Shanbhag",
    [mySym] : "Key1", // Syntax for including a symbol in an object
    age : 21,
    location : "Mumbai",
    email : "sam@gamil.com",
    isLoggedIn : true,
    lastLogindays : ["monday", "saturday"]

}
// Accessing an object
// console.log(jsUser.email); // not wrong but not preffered
// console.log(jsUser["email"]); // better way
// console.log(jsUser["full name"]); 

// console.log(jsUser.mySym); // Key1 
// console.log(typeof jsUser.mySym); //String type. This is a wrong syntax
// console.log(jsUser[mySym]); // Syntax for accessing a symbol

jsUser.email = "samarth@gpt.com"
// Object.freeze(jsUser) // No changes will be possible in the object, but no error will be given
// jsUser.email = "sam@tcs.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js coder!");
    
}
// console.log(jsUser.greeting); // [Function (anonymous)]
// console.log(jsUser.greeting()); // Hello js coder!

jsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);
    
}
console.log(jsUser.greeting2()); // hello js user, Samarth











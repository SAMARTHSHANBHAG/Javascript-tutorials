// basic object
const user = {
    username : "Sammy",
    logincount : 7,
    signedIn : true,

    getUserdetails : function() {
        // console.log("Got user details");
        // console.log(`Username : ${this.username}`);
        console.log(this); // returns you the entire object
        
        
        
    }
}
console.log(user.username);
// console.log(user.getUserdetails());
// console.log(this) // empty object, has no context

function User(username, logincount, isLoggedIn) {
    this.username = username;
    this.lologincount =logincount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this

}

const userOne = new User("Samarth", 11, true)
const userTwo = new User("Ayush", 11, true)
console.log(userOne.constructor);
// console.log(userTwo);


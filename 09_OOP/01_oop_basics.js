// basic object
const user = {
    username : "Sammy",
    logincount : 7,
    signedIn : true,

    getUserdetails : function() {
        // console.log("Got user details");
        console.log(`Username : ${this.username}`);
        
        
    }
}
console.log(user.username);
console.log(user.getUserdetails());

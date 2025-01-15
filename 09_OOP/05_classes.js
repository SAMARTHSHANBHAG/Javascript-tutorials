// ES6

// class user {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const user1 = new user("Sam", "samgmail@2.com", "123")

// console.log(user1); // user { username: 'Sam', email: 'samgmail@2.com', password: '123' }
// console.log(user1.encryptPassword()); // 23abc
// console.log(user1.changeUsername()); // SAM

// BEHIND THE SCENE

function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}
user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const user2 = new user("raghu", "rags@gmail.com", "abcd")

console.log(user2.encryptPassword());
console.log(user2.changeUsername());


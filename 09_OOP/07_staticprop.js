class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }

    static createID(){
    return `123`
  }
}

const sam = new User("sammy")
// console.log(sam.createID()); // TypeError: sam.createID is not a function
// console.log(User.createID()); // 123

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const tim = new Teacher("tim", "i@g.com")
// tim.logMe()
// console.log(tim.createID()); // ERROR






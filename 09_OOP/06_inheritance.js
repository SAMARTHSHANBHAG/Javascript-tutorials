class User {
    constructor(username){
        this.username = username
        
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const b = new Teacher("Sanjay", "sanjaytsec.com", "1234")
b.logMe() // Username is Sanjay
b.addCourse() // A new course was added by Sanjay

const c = new User("Kk")
c.logMe()

console.log(b instanceof User);

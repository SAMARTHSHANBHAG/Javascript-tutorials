function setUsername(){
    // Complex db calls
    this.username = this.username
    console.log("called");
    
}

function createUser(username, email, password){
    setUsername.call(this, username)
    
    this.email = email
    this.password = password
}

const a = new createUser("Samu", "sam@gpt2.com", "abc123")
console.log(a);

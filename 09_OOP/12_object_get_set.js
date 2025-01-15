const User = {
    _email :"s@sgmail.com",
    _password : "abcd",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea1 = Object.create(User)
console.log(tea1.email);

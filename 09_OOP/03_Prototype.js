// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myheros = ["Batman", "Superman"]

let heropower = {
    batman : "mask",
    superman : "fly",

    getBatPower : function(){
        console.log(`Batman's power is his ${this.batman}`);
        
    }

}
Object.prototype.samarth = function(){
    console.log("Samarth is present in all objects");
    
}
Array.prototype.heySamarth = function(){
    console.log(`Hello Samarth Shanbhag`);
    
}

// heropower.samarth() // Samarth is present in all objects
// myheros.samarth() // Samarth is present in all objects
// heropower.heySamarth() // ERROR, only array has been given that method. Not the object which is higher in heirarchy
// myheros.heySamarth() // Hello Samarth Shanbhag



// Inheritance

const User = {
    name : "Sam",
    email : "sam@g.com"
}
const teacher = {
    makeVideo : true
}
const teachingSupport = {
    isAvailable : false
}
const TAsupport = {
    makeAssignment : 'Js codes',
    fullTime : true,
    __proto__: teachingSupport
}
teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(teachingSupport, teacher) // 2 params: - (Kiska, Kiske paas)

let anotherUsername = "Raghuveer    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
    
}
anotherUsername.trueLength()
// Raghuveer    
// True length is: 9

"hitesh".trueLength()
// hitesh
// True length is: 6

"backend".trueLength()
// backend
// True length is: 7

// Remember : - this ke paas context hai. 'Jis' ne bulaaya hai, uska context 'this' ke paas hai


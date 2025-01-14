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


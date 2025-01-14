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

heropower.samarth()
myheros.samarth()
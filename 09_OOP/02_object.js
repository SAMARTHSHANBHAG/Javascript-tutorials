function multiplyBy5(num) {
    return num * 5
}
multiplyBy5.power = 2

console.log(multiplyBy5(6)); // 30
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.prototype); // {}

function createUser(teaType, price) {
    this.teaType = teaType
    this.price = price
}

createUser.prototype.increment = function() {
    this.price++
}

createUser.prototype.printMe = function(){
    console.log(`Price is: ${this.price}`);
    
}

const chai = new createUser("chai", 10)
const tea = new createUser("tea", 25)

chai.printMe()



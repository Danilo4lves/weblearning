const ferrari = {
    model: "F40",
    maxVel: 324
}

const volvo = {
    model: "V49",
    maxVel: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(ferrari.__proto__ === volvo.__proto__)
console.log(Object.prototype.__proto__)

function MyFunction() {}
console.log(MyFunction.prototype)
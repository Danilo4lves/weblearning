// Dynamic collection of pairs of keys/values
const product = new Object
product.name = "chair"
product["brand of the product"] = "generic"
product.price = 220

console.log(product)
delete product.price
delete product["brand of the product"]

console.log(product)

const car = {
    model: "A4",
    value: 89000,
    owner: {
        name: "Raul",
        age: 56,
        address: {
            street: "ABC Street",
            number: 123
        }
    },
    drivers: [{
        name: "Junior",
        age: 19
    }, {
        name: "Ana",
        age: 42
    }],
    calculateSecurityValue: function(){
        // ...
    }
}

car.owner.address.number = 1000
car["owner"]["address"]["street"] = "Tancredo Neves"
console.log(car)

delete car.drivers
delete car.owner.address
delete car.calculateSecurityValue
console.log(car)
console.log(car.drivers)
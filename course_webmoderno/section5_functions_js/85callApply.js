function getPrice(taxes = 0, money = "R$") {
    return `${money} ${this.price * (1 - this.desc) * (1 + taxes)}`
}

const product = {
    name: "Notebook",
    price: 4589,
    desc: 0.15,
    getPrice
}

console.log(product.getPrice())

const car = {price: 49990, desc: 0.20}
console.log(getPrice.call(car))
console.log(getPrice.apply(car))

console.log(getPrice.call(car, 0.17, '$'))
console.log(getPrice.apply(car, [0.17, '$']))
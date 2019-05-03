// using literal notation
const obj1 = {}
console.log(obj1)

// Object in JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Constructor functions
function Product(name, price, discount){
    this.name = name
    this.getPriceWithDiscount = () => price * (1 - discount)
}
const p1 = new Product("Pen", 7.99, 0.15)
const p2 = new Product("Notebook", 2998.99, 0.25)
console.log(p1.getPriceWithDiscount(), p2.getPriceWithDiscount())

// Factory function
function createWorker(name, salary, absence){
    return {
        name,
        salary,
        absence,
        getSalary(){
            return (salary / 30) * (30 - absence)
        }
    }
}

const f1 = new createWorker("João", 7980, 4)
const f2 = new createWorker("Maria", 11400, 1)
console.log(f1.getSalary(), f2.getSalary())

// Object.create
const daughter = Object.create(null)
daughter.name = "Ana"
console.log(daughter)

// JSON.parse
const fromJSON = JSON.parse('{"info": "Sou um json"}')
console.log(fromJSON.info)
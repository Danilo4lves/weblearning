// prototype chain
Object.prototype.attr0 = '0' // Not recommended to be done
const grandfather = {attr1: 'A'}
const father = {__proto__: grandfather, attr2: 'B'}
const son = {__proto__: father, attr3: 'C'}
console.log(son.attr0, son.attr1, son.attr2, son.attr3)
console.log(grandfather.attr0, grandfather.attr2)

const car = {
    velNow: 0,
    maxVel: 200,
    accelerate(delta){
        if (this.velNow + delta <= this.maxVel){
            this.velNow += delta
        } else {
            this.velNow = maxVel
        }
    },
    status(){
        return `${this.velNow}Km/h de ${this.maxVel}Km/h`
    }
}

const ferrari = {
    model: "F40",
    maxVel: 324, // shadowing
    status(){
        return `${this.model}: ${super.status()}`
    }
}

const volvo = {
    model: "V40",
    status(){
        return `${this.model}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, car)
Object.setPrototypeOf(volvo, car)

console.log(ferrari)
console.log(volvo)

volvo.accelerate(100)
console.log(volvo.status())

ferrari.accelerate(300)
console.log(ferrari.status())
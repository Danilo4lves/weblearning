function Car(maxSpeed = 200, delta = 5){
    // Private attribute
    let currentSpeed = 0

    // Public method
    this.accelerate = function() {
        if (currentSpeed + delta <= maxSpeed){
            currentSpeed += delta
        } else {
            currentSpeed = maxSpeed
        }
    }

    // Public method
    this.getSpeed = () => currentSpeed
}

const uno = new Car
console.log(uno.getSpeed())
uno.accelerate()
console.log(uno.getSpeed())

const ferrari = new Car(350, 20)
console.log(ferrari.getSpeed())
ferrari.accelerate()
console.log(ferrari.getSpeed())
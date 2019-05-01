function Person(name){

    this.speak = () => console.log(`My name is ${name}`)
}

const p1 = new Person("Danilo")
p1.speak()

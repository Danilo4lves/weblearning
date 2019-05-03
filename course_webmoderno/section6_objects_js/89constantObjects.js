// person -> 123 -> {...}
const person = {name: "Ana"}
person.name = "Danilo"
console.log(person)

// person -> 456 -> {...}
// person = {name: "Pedro"}

Object.freeze(person)

person.name = "Maria"
delete person.name
console.log(person)


const personConstant = Object.freeze({name: "Paulo"})
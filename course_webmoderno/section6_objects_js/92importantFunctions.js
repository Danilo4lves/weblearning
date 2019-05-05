const person = {
    name: "Rebeca",
    age: 2,
    weight: 13
}

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

Object.entries(person).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)
});
console.log()
Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`)
});

Object.defineProperty(person, "birth", {
    enumerable: true,
    writable: false,
    value: "01/01/2019"
})

person.birth = "02/02/2018"
console.log(person.birth)

// Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
console.log(obj)

Object.freeze(obj)
obj.c = 123
console.log(obj)
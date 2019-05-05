const father = {name: "Pedro", hairColor: "black"}

const daughter = Object.create(father)
daughter.name = "Ana"
console.log(daughter)

const daughter2 = Object.create(father, {
    name: {value: "Bia", writable: false, enumerable: true}
})

console.log(daughter2.name)
daughter2.name = "Carla"
console.log(`${daughter2.name}'s hair color is ${daughter2.hairColor}`)

console.log(Object.keys(daughter))
console.log(Object.keys(daughter2))

for (let it in daughter2) {
    if (daughter2.hasOwnProperty(it)){
        console.log(it
    } else {
        console.log(`By inheritance: ${it}`)
    }
}
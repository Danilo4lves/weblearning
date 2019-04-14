const test = "test1" //Lexic context 1

function exec() {
    const test = "test2" //Lexic context 2
    return test
}

// Objects are groups of pairs keys and values
const client = {
    name: "Danilo",
    age: 18,
    weight: 54,
    address: {
        street: "A very cool one",
        number: 123
    }
}

console.log(test)
console.log(exec())
console.log(client)
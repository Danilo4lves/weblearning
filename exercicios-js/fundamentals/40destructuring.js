// New feature from ES2015

const person = {
    name: "Ana",
    age: 34,
    address: {
        street: "ABC Street",
        number: 123
    }
}

const {name, age} = person // Takes the atributes with it's original names
/*
* This feature called destructuring enable us to retain some atributes
* of objects and arrays in a simpler way.
*/
console.log(name, age)

const {name: n1, age: a1} = person 
// Changes the names of the variables which retains the values of the atributes
console.log(n1, a1)

const {nickname, married = true} = person
/*
* Pay attention that neither of these two atributes were defined within the object
* so, as they haven't been defined they will return undefined. But, I explicitly
* told to consider "married" as true if it has no value.
*/
console.log(nickname, married)

const {address: {street, number}} = person
console.log(street, number)
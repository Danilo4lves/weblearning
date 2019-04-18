const degree = [6.7, 5, 2, 9.6, 10, 5.4]
for (let i in degree) {
    console.log(i, degree[i])
}

const person = {
    name: "Danilo",
    lastname: "Alves",
    age: 18,
    weight: 54
}

for (let feature in person) {
    console.log(`${feature} = ${person[feature]}`)
}
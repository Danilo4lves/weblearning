// Creating a function inside a variable
const printSum = function (a,b){
    console.log(a+b)
}

printSum(2,5)

// Creating an arrow function inside a variable
const sum = (a, b) => {
    return a+b
}

console.log(sum(2,5))

// Implicity return
const sub = (a, b) => a - b
console.log(sub(3,2))

const print = a => console.log(a)
print("Test!!!")
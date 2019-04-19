function sum() {
    let sum = 0
    for (i in arguments){
        sum += arguments[i]
    }
    return sum
}

console.log(sum(1, 2, 3, 4, 5, 6, 7))
console.log(sum(1, 2, "test"))
console.log(sum('a', 'b', 'c'))
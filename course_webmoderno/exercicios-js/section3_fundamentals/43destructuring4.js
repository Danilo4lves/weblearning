function rand([min = 0, max = 1000]){
    if (min > max) { [min, max] = [max, min] }
    const val = Math.random() * (max - min) + min
    return Math.floor(val)
}

console.log(rand([50, 100]))
console.log(rand([100, 50]))
console.log(rand([992]))
console.log(rand([, 20]))
console.log(rand([]))
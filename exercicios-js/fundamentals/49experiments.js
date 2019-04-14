let a = 1

global.b = 143
this.c = 321
this.d = false
this.e = "test"

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(this.d)
console.log(this.e)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// Creating a variable without let, var or const
abc = 3 // Shouldn't do this cause it will be assigned to global
console.log(global.abc)

module.exports = {f: 1, g: 2, h: 3}
console.log(module.exports)
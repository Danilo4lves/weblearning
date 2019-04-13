console.log("a = ", a)
var a = 2
console.log("a = ", a)

/*
* What happens here is that when the compiler runs the code, it reads a
* var variable and puts it in the top of the program, which is just the same
* as declaring it right in the beggining.
*/

console.log("b = ", b)
let b = 3
console.log("b = ", b)

/* 
* A let variable doesn't have this feature called hoisting, so, in this
* case it will return an error.
*/
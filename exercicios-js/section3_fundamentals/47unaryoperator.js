let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 // This way has a higher preference
console.log(num1)

console.log(++num1 === num2--)
/* 
* It returns true because the unary operator ++ prefixed occurs as fast as
* it is found, so, it happens fast. But the operator ++ posfixed doesn't 
* have such a preference, so, it happens after the comparation
*/
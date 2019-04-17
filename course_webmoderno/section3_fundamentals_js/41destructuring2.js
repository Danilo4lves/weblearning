const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const b = [1, 2, 3, 4, 5, 6, 7]
const [a1, , a3, , , a6, a7] = b
console.log(a1, a3, a6, a7)

/*
* Just like with objects, here, we can retain some atributes
* from within the arrays in an easy but not very good way.
*/
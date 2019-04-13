console.log(typeof Object) // An Object is actually a function
console.log(typeof new Object) // Now it's type is object cause it's been instanciated

const Cliente = function() {}
console.log(typeof Cliente) // Returns function
console.log(typeof new Cliente) // Returns object

class Produto {}
console.log(typeof Produto) // Function
console.log(typeof new Produto) // Object

let valor //Not initialized
console.log(valor)
/*
* console.log(valor2) != undefined.
* In this case the variable (valor2) is not declared (not defined)
* which differs from a variable which has been previously declared (valor1)
* and just hasn't been initialized.
*/

valor = null; //Absence of value
console.log(valor)
/*
* Here, the variable has been previously initialized and it's value
* has been set to null. Which means that it doesn't hold any value
* nor any address.
*/

/*
* console.log(valor.toString()) is going to return a TypeError, which in
* this case is because properties cannot be acessed within a null variable.
*/
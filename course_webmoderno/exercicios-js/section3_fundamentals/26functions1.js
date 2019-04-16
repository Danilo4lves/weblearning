// Function without return
function printSum(a, b){
    console.log(a+b)
}

printSum(5, 7)
printSum(2) 
/*
* In this case it will print NaN because I'm just
* passing one parameter, so, the other one will be
* undefined. 2 + undefined = Not a Number (NaN)
*/
printSum(4, 6, 7, 8, 9, 10)
/*
* If I have more parameters than what was defined to have
* the function will only use the first n numbers that it 
* has as parameters. Here, it will only use 4 and 6.
*/
printSum()
/*
* Prints NaN because I'm not passing any parameters, so
* it will be undefined + undefined = NaN
*/

//Function with return
function printSumr(a, b = 0){
    return a + b
}

console.log(printSumr(2, 3))
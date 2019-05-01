console.log(sum(3, 5)) // Can be called before the function declaration

// function declaration
function sum(x, y){
    return x + y
}

// function expression
const sub = function(x, y){
    return x - y
}

// named function expression
const mult = function mult(x, y){
    return x * y
}
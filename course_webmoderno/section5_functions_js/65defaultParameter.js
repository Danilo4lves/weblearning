// strategy 1 to generate a default value on a function
function sum(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(sum(), sum(3), sum(1, 2, 3), sum(0, 0, 0))

// strategy 2
function sum2(a, b, c) {
    a = a !== undefined ? a : 1
    b = b !== undefined ? b : 1
    c = c !== undefined ? c : 1
    return a + b + c
}

console.log(sum2(), sum2(3), sum2(1, 2, 3), sum2(0, 0, 0))

// strategy 3
function sum3(a, b, c) {
    a = 0 in arguments ? a : 1
    b = 1 in arguments ? b : 1
    c = 2 in arguments ? c : 1
    return a + b + c
}

console.log(sum3(), sum3(3), sum3(1, 2, 3), sum3(0, 0, 0))

// strategy 4
function sum4(a, b, c) {
    a = isNaN(a) ? 1 : a
    b = isNaN(b) ? 1 : b
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(sum3(), sum3(3), sum3(1, 2, 3), sum3(0, 0, 0))

// strategy 5 - default value ES2015
function sum5(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(sum3(), sum3(3), sum3(1, 2, 3), sum3(0, 0, 0))
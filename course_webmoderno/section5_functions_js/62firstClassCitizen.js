// Create a function in a literal way
function func1(){

}

// Store it in a variable
const func2 = function(){

}

// Store it in an array
const array = [function(a, b) {return a+b}, func1, func2]
console.log(array[0](5, 7))

// Store it in an attribute of an object
const obj = {}
obj.speak = function() {return "Hello!"}
console.log(obj.speak())

// Pass it as a parameter of another function
function func3(func){
    func()
}

func3(function(){console.log("Running...")})

// A function can return/contain another function
function sum(a, b) {
    return function(c){
        console.log(a+b+c)
    }
}

sum(3,3)(3)
const sumTest = sum(3,3)
sumTest(3)
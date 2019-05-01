/* 
* Closure is a scope created when a function is declared. This scope lets the function access
* and manipulate variables from outside of the function.
*/

const x = "Global"

function outside(){
    const x = "Local"
    function inside(){
        return x
    }
    return inside
}

const myFunction = outside()
console.log(myFunction())
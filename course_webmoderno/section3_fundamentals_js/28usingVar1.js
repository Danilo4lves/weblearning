{
    {
        {
            var test = "Testing..."
        }
    }
}

console.log(test)
/*
* In some programming languages the variable test could not
* be acessed because it is within a different scope. But here
* on javascript geranerally there are only two kinds of scopes:
* the global one (normal) and a function scope.
*/

function funcTest(){
    var local = 123
}

/*
* The command console.log(local) returns an error because the
* variable local is within a function scope, so, it cannot be
* accessed outside that function.
*/
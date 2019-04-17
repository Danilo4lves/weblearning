const printResult = function(grade){
    if (grade >= 7){
        console.log("Approved!")
    // } else { this would return "Not approved!" if passed any other type of variable
    } else if (grade < 7){
        console.log("Not approved!")
    }
}

printResult(8)
printResult(6)
printResult("Test")
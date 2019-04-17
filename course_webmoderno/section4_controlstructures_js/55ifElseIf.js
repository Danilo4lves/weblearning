Number.prototype.between = function(first, last){
    return this >= first && this <= last
}

const printResult = function(grade){
    if (grade.between(9, 10)){
        console.log("Board of honor")
    } else if (grade.between(7, 8.99)){
        console.log("Approved")
    }
}

printResult(9.4)
printResult(7.5)
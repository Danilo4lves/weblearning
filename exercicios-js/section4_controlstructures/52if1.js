function showApproval(nota){
    if (nota >= 7){
        console.log("Approved with", nota)
    }
}

showApproval(7.5)
showApproval(6)

function checkIfItsTrue(value){
    if (value){
        console.log("It's true " + value)
    }
}

checkIfItsTrue()
checkIfItsTrue(undefined)
checkIfItsTrue(null)
checkIfItsTrue(0)
checkIfItsTrue(false)
checkIfItsTrue('')
checkIfItsTrue(-3)
checkIfItsTrue(" ")
checkIfItsTrue(true)
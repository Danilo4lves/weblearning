const printResult = function (grade) {
    switch (Math.floor(grade)) {
        case 10: case 9:
            console.log("Board of Honor!")
            break
        case 8: case 7:
            console.log("Approved!")
            break
        case 6: case 5: case 4:
            console.log("Exam 2!")
            break
        case 3: case 2: case 1: case 0:
            console.log("Repproved!")
            break
        default:
            console.log("Invalid grade!")
    }
}

printResult(5)
printResult(10)
printResult(7.5)
printResult(1.9)
printResult(0)
printResult(-1)
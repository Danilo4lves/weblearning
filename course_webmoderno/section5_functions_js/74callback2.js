const grades = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Without callback
let lowGrades = []
for (let i in grades){
    if (grades[i] < 7)
        lowGrades.push(grades[i])
}

console.log(lowGrades)

// With callback
const lowGrades2 = grades.filter(x => x < 7)
console.log(lowGrades2)
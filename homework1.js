// Homework 1

function sumOfSquaresAreas(a, b) {
    return (a * a) + (b * b)
}
var sum1 = sumOfSquaresAreas(9, 3)
var sum2 = sumOfSquaresAreas(4, 6)
var sum3 = sumOfSquaresAreas(2, 12)
console.log(sum1)
console.log(sum2)
console.log(sum3)

function gradeCalculator(homeworkAvg, quizAvg, examAvg) {
    return (homeworkAvg * .1) + (quizAvg * .15) + (examAvg *.75)
}
var grade1 = gradeCalculator(91, 88, 85)
var grade2 = gradeCalculator(74, 79, 68)
var grade3 = gradeCalculator(99, 92, 95)
console.log(grade1)
console.log(grade2)
console.log(grade3)
// Values, Variables, and Functions

//  Creating variable and printing
var output = "Hello, world!"
console.log(output)

// Another example
var firstName = "Graesen"
var lastName = "Redding"
console.log(firstName, lastName)

// One does not have to specify the type of the variable
var types = "Hello"
types = 21
types = true
console.log(types)

// * is the operator for multiplication in JavaScript
var length = 3
var width = 9
console.log(length * width) // area of rectangle

// example function
function calculateArea(length, width) { 
    console.log(length * width);
}
console.log(calculateArea(9,4))

// returning values
// the 'return' keyword is effectively the stopping point of a function
function calculateArea(length, width) { 
    return length * width;
}
var area = calculateArea(8,6)
var doubledArea = area * 2
console.log(area)
console.log(doubledArea)

// demo, function for area of triangle
function triangleArea(base, height) {
    return (base * height) * 0.5;
}
triArea = triangleArea(3, 6)
console.log(triArea)
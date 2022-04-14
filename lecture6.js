// Advanced Object_oriented Programming

// Modifying obejcts
// objectName.propertyName = newValue
// objectName[“propertyName”] = newValue

var broccoli = {
	name: 'broccoli',
	price: 2.00,
	inventory: 30
}
console.log(broccoli)

broccoli.price = 2.50
broccoli['inventory'] += 50
console.log(broccoli)

// Adding Properties to Objects
// objectName.newPropertyName = newValue
// objectName[“newPropertyName”] = newValue

broccoli.brand = 'Broccoli Inc.'
console.log(broccoli)

// Prototypes
// functions, arrays, and every other object
// inherits from their respective prototypes like
// function.prototype and array.prototype

// Car Example
var vehicle = {
	numWheels: 4
}
var car = {
	mpg: 33.3
}
console.log(car.numWheels) // undefined
car.__proto__ = vehicle;
console.log(car.numWheels) // 4
// In this example, car’s prototype is vehicle.

// This
// The JavaScript this keyword refers to the 
// object it belongs to
const test = {
	prop: 42,
	func: function() {
	  return this.prop;
	}
  }

  // Building Objects in Loops
var names = ['Jonathan', 'Aten', 'Brayden', 'Jeffrey'];
var ages = [5, 7, 6, 5];
var favoriteColors = ['beaver', 'apricot', 'maroon', 'periwinkle'];

var students = [];

for (var i = 0; i < names.length; i++) {
	students[i] = {
		name: names[i],
		age: ages[i],
		favoriteColor: favoriteColors[i],
		num: i
	}
}
console.log(students)

// Multidimensional Arrays
// Multidimensional arrays are arrays that contain
// even more arrays! 2D arrays are commonly used.
// Declaring an empty multidimensional array is
// the same as a normal array

// Demo
function Exam(questionsCorrect, totalQuestions) {
	this.questionsCorrect = questionsCorrect
	this.totalQuestions = totalQuestions
}

var examList = []
var questionsCorrect = [15, 25, 18, 20, 12, 6, 18, 21, 9]
var totalQuestions = 25

// creating exam objects in the array
for (var i = 0; i < questionsCorrect.length; i++) {
	examList.push(new Exam(questionsCorrect[i], totalQuestions))
}

// adding new property, grade, to every exam object in the array
for (var i = 0; i < examList.length; i++) {
	var currentExam = examList[i]
	currentExam.grade = examList[i].questionsCorrect / totalQuestions * 100
}

var average = 0
for (var i = 0; i < examList.length; i++) {
	average += examList[i].grade
}
average /= examList.length

console.log(average)
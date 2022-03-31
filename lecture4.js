// Object-Oriented Programming

// Objects are named abstractions for a collection of properties
// You can assign an object to a var, just like a string, boolean, etc...

// {
//     propertyKey1: propertyValue1,
//     propertyKey2: propertyValue2,
//     ...
// }

var burger = { 
    buns: "sesame",
    cheeseSlices: 2,
    pickles: true,
    tomatos: true,
    patty: 1
}
console.log(burger["buns"])
console.log(burger.buns)

var course = {
	subject: "JavaScript",
	location: "GDC 6.302",
	instructors: "TPEO",
	startTime: 6,
	endTime: 7
}
console.log(course.subject)
console.log(course["location"])

// Constructors are functions that will allow us to create objects of the 
// same type quickly.

// function ObjectType(property1, …, propertyN) {
//	 this.property1 = property1;
//   ...
//	 this.propertyN = propertyN;
// }

function GroceryItem(name, price, inventory) {
    this.name = name
    this.price = price
    this.inventory = inventory
}
var apple = new GroceryItem("apple", 0.50, 90)
console.log(apple.inventory)

// Inheritance refers to the process of defining the relationship between
// different objects so that one object (child object) inherits properties from
// another object (parent object)

// Nested Objects
var burger = {
    price: 2.22,
    name: "Big Mac",  
        ingredients: {
            buns: "sesame",
            cheeseSlices: 2,
            pickles: true,
            tomato: true,
            patties: 1
    }
}
console.log(burger.ingredients.tomato)

// Demo
function Student(firstName, lastName, university, major, graduationYear) {
    this.firstName = firstName
    this.lastName = lastName
    this.university = university
    this.major = major
    this.graduationYear = graduationYear
    this.hasGraduated = graduationYear <= 2021
}
var graesen = new Student("Graesen", "Redding", "UT Austin", "Economics", 2025)
var thomas = new Student("Thomas", "Le", "UT Austin", "Health Informatics", 2025)
var jacob = new Student("Jacob", "Khan", "UT Austin", "Mechanical Engineering", 2025)

console.log(graesen["major"])
console.log(thomas.major)
console.log(jacob.major)
console.log(graesen.hasGraduated)

// Nested Objects Demo
function Course(student, name, location) {
    this.student = student
    this.name = name
    this.location = location
}

var introToJavaScript = new Course(graesen, "Intro to JavaScript", "GDC 6.302")
console.log(introToJavaScript.student.graduationYear)
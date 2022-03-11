// Lecture 2

// Conditionals
// if (condition) {
//      do_something    
// } else {
//      do_something_else
// }

// Conditionals with Operators
// if ("expression" operator "expression") {
//      do_something    
// } else {
//      do_something_else
// }

// Switch Statement
// switch (expression) {
// 	case value1:
// 		<code here>
// 		break;
// 	case value2:
//		<code here>
//		break; 
//	...
//	default:
//		<code here>
// }

// For Loop
// for (var  i = 0; i < count; i++) {
//      <code here>    
// }
// i++ increments i by 1 after each iteration

for (var  i = 0; i < 5; i++) {
    console.log(i)
}

for (var num = 1; num <= 1024; num *= 2) {
	console.log(num)
} 

// While Loop
// while (expression) {
//      <code here>   
// }

var newAge = 20
var i = 0
while (i < newAge) {
	console.log("Happy Birthday")
	i++
}

// Demo
function findTreasure(x, y) {
    var treasureX = 3
    var treasureY = 9

    if (x == treasureX && y == treasureY) {
        console.log("You found the treasure!")
        return
    }

    while (x != treasureX) {
        if (x < treasureX) {
            console.log("Stepping to the right.")
            x++
        } else if (x > treasureX) {
            console.log("Stepping to the left.")
            x--
        }
    }

    while (y != treasureY) {
        if (y < treasureY) {
            console.log("Stepping up.")
            y++
        } else if (y > treasureY) {
            console.log("Stepping down.")
            y--
        }
    }

    console.log("You found the treasure!")
}

findTreasure(3, 9)
findTreasure(6, 3)
findTreasure(3, 8)
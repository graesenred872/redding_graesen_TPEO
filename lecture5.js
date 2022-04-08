// Strings, Primitives, Arrays, and Numbers

// Strings
// In JavaScript, you can define strings literally (known as string primitives):
var string = "hello!"
// You can also define strings as objects explicitly by using the String() constructor:
var stringObject = new String("hello!")

// Concatenation also allows us to append other values to strings.
var number = 21
console.log("My favorite number is: " + number)

var string = "JavaScript"
console.log(string[0] + string.charAt(4))

// strings are immutable, attempting to change contents of string will have no effect
var string = "JavaScript";
string[0] = "j"
string[4] = "s";
console.log(string)

// Substrings
// string.slice(beginIndex)
// string.slice(beginIndex, endIndex)
// Indexes can also be negative and represent indexes (zero-indexed) starting from
// the end of a string going backwards. endIndex can be greater than the length of the string.


// string.substring(beginIndex)
// string.substring(beginIndex, endIndex)
// Again, both parameters are optional. However:
// Negative values are treated as 0
// If beginIndex > endIndex, the two are swapped

// Finding Something Inside Strings
// string.indexOf(“characters”) - returns index of first occurrence of “characters” in string,
//  -1 if not found
//string.lastIndexOf(“characters”) - returns index of last occurrence of “characters” in string,
//  -1 if not found
var string = "Hello!"
console.log(string.indexOf("e"))

// Changing String Casing
var string = "hElLo eVeRyOnE!";
console.log(string.toUpperCase())
console.log(string.toLowerCase())

// Arrays
// Arrays are an ordered list of values. In JavaScript, the array values / elements in a single
// array can be of any type, and the length of an array is not fixed.
// empty array
var brands = []
// non-empty array
var brands = ["gucci", "dior", "louis vuitton", "balenciaga"]

for (var i = 0; i < brands.length; i++) {
	console.log(brands[i])
}

// Adding Items to Arrays
// add an item to the end of an array
brands.push("fendi")
// add an item to the beginning of an array
brands.unshift("prada")

console.log(brands)

// Removing Items in Arrays
// remove an item from the end of an array
// var lastItem = brands.pop()
// remove an item from the beginning of an array
// var firstItem = flowers.shift()

//Slicing an Array
var lessBrands = brands.slice(1, 4)
console.log(lessBrands)

// Merging Arrays
var oneCars = ["ford", "honda"]
var twoCars = ["toyota", "bmw"]
var cars = oneCars.concat(twoCars)
console.log(cars)

// Useful Math Methods
// For rounding there are Math.round(), Math.ceil(), and Math.floor(). These functions
//  always round to an integer
// For trigonometric functions there are Math.cos(), Math.sin(), Math.tan(), Math.acos(),
// Math.asin(), Math.atan(). These functions take in radian values for arguments
// For powers and square roots there are Math.pow(), Math.exp(), and Math.sqrt()
// For absolute values there is Math.abs()
// For random numbers there is Math.random(). This method will generate a random number
// between 0 and less than 1

// Demo
function truncate(string, number){
    return string.substring(0, string.length - number)
}

console.log(truncate("San Diego", 5))
console.log(truncate("Texas at Austin", 10))
console.log(truncate("Hello!", 1))

function capitalizeAllFirstLetters(strings) {
    for (var i = 0; i < string.length; i++) {
        strings[i] = strings[i][0].toUpperCase + string[i].substring(1)
    }
    return strings
}

console.log(capitalizeAllFirstLetters(["graesen", "thomas", "landon"]))

function swapcase(string){
    var lowercase = string.toLowerCase()
    var uppercase = string.toUpperCase()
    var newString = ""
    for (var i = 0; i < string.length; i++){
        if (string[i] == uppercase[i]){
            newString += lowercase[i]
        } else { 
            newString += uppercase[i]
        }
    }
    return newString
}

console.log(swapcase(aBc))
// Homework 3

i = 0
n = 0
function powersOfThree() {
    while (i < 19683){
        i = 3 ** n
        console.log(i)
        if (i == 27){
            console.log("This is my favorite power of three!")
        }
        n += 1
    }
}

powersOfThree()

function everyTenSeconds() {
    console.log("Hello World!")
}
var intervalCount = setInterval(everyTenSeconds, 10000)
setTimeout(clearInterval, 120000, intervalCount)
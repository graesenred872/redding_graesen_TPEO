// Homework 2

i = 0
function countUpwardsByThree() { 
    while (i <= 30) {
        console.log(i)
        i += 3
    }
}
countUpwardsByThree()

favoriteNumber = 21
function guessMyFavoriteNumber(guess) {
    if (guess != favoriteNumber) {
        console.log("Try again!")
    } else {
        console.log("You guesses my favorite number!")
    }
}
guessMyFavoriteNumber(99)
guessMyFavoriteNumber(34)
guessMyFavoriteNumber(21)

function convertNumberToDay(number) { 
    switch (number) { 
        case 0:
            console.log("Sunday")
            break
        case 1:
            console.log("Monday")
            break
        case 2:
            console.log("Tuesday")
            break
        case 3:
            console.log("Wednesday")
            break
        case 4:
            console.log("Thursday")
            break
        case 5:
            console.log("Friday")
            break
        case 6:
            console.log("Saturday")
            break
        default:
            console.log("Not a day.")
    }
}
convertNumberToDay(0)
convertNumberToDay(4)
convertNumberToDay(12)
convertNumberToDay(2)
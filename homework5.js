function reverse(string) {
    var reversedString = "";
    for (var i = string.length - 1; i >= 0; i = i - 1) {
        reversedString += string[i];
    }
    return reversedString;
}
console.log(reverse("Texas"))
console.log(reverse("Graesen"))
console.log(reverse("Redding"))

function numVowels(string) {
    var numVowels = 0;
    string = string.toLowerCase();
    for (var i = 0; i < string.length; i++) {
        var currentCharacter = string[i];
        if (currentCharacter === "a" || currentCharacter === "e" || currentCharacter === "i"
            || currentCharacter === "o" || currentCharacter === "u") {
                numVowels++;
            }
    }
    return numVowels;
}
console.log(numVowels("alphabet"))
console.log(numVowels("dry"))
console.log(numVowels("vowels"))

function numStringsShorterThanLength(strings, length) {
    var numStringsShorterThanLength = 0;
    for (var i = 0; i < strings.length; i++) {
        if (strings[i].length < length) {
            numStringsShorterThanLength++;
        }
    }
    return numStringsShorterThanLength;
}
console.log(numStringsShorterThanLength(["one", "computer"], 4))
console.log(numStringsShorterThanLength(["fur", "den"], 3))
console.log(numStringsShorterThanLength(["ten", "two", "alphabet"], 4))
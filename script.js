/*

let myString = "apple"
let inputLetter = "P"

function searchString(inputLetter, inputString) {
    let InputString = myString.toLowerCase();
    let lowerInputLetter = inputLetter.toLowerCase();
    let count = 0

    for (let i = 0; i < inputString.length; i++){
        if (inputString[i] == lowerInputLetter) {
        count++;
        }
    }

    return count;
}

console.log(searchString(inputLetter, myString))

*/

numberArray = [1, 6, 3, 6, 5]

console.log(numberArray[0])
// 0 is the first value of an array. In this case 1
console.log(numberArray[4])
//Because we start at 0 the last number of an array is one less than the amount of objects. Object 5 in this case the number 5 uses the value 4 in the array

numberArray.push(7, 8, 9, 0)
/*When this push is declared 7 8 9 0 is added to array and will appear when logged by the function below.
If the push is declared below the for loop then the array being looped will not have the new pusshe content*/
numberArray.pop(1, 3, 5)
//The 1, 3, and 5 values are gone and the array values move accordingly (because 1 is gone 6 becomes the new 0)

for (let i = 0; i < numberArray.length; i++) {
    console.log(numberArray[i])
}

myString = "Mississippi"
console.log(myString.length)

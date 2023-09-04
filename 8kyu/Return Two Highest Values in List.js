/*
In this kata, your job is to return the two distinct
highest values in a list. If there're less than 2
unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []
*/

function twoHighest(arr) {
    if (arr.length === 0) {
        return []
    } else if (arr.length === 1) {
        return arr
    }
    let arrSortHigh = arr.sort((a, b) => {
        return b - a
    })
    arrSortHigh = [...new Set(arrSortHigh)]
    console.log([...new Set(arrSortHigh)])
    const lastsNumbersOfSortedArr = []
    console.log(arrSortHigh[0], arrSortHigh[1])
    if (arrSortHigh[0] !== arrSortHigh[1]) {
        lastsNumbersOfSortedArr.push(arrSortHigh[0])
        lastsNumbersOfSortedArr.push(arrSortHigh[1])
    } else {
        lastsNumbersOfSortedArr.push(arrSortHigh[0])
    }
    return lastsNumbersOfSortedArr
}

console.log(twoHighest([15, 20, 20, 17]))
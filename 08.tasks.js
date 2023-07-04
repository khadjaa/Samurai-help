//1. Напишите функцию, которая находит сумму всех элементов массива.

// function sumArray(arr) {}
// const nums = [1, 2, 3, 4, 5];
// console.log(sumArray(nums)); // Выведет 15

// 2. Напишите функцию, которая находит наименьшее число в массиве.
// function findMin(arr) {
//     let smallest = arr[0]
//     for(let i = 0; i< arr.length; i++) {
//         if (arr[i] < smallest) {
//             smallest = arr[i]
//         }
//     }
//     return smallest
// }
// const nums = [3, 6, 1, 8, 2];
// console.log(findMin(nums)); // Выведет 1

//3. Напишите функцию, которая находит все числа в диапазоне от start до end, которые делятся на заданное число divisor.
// function findDivisible(start, end, divisor) {
//
// }
// console.log(findDivisible(1, 10, 2)); // Выведет [2, 4, 6, 8, 10]

// 4. Напишите функцию, которая находит все перестановки заданной строки.
//function permutations(str) {}
//console.log(permutations('abc')); // Выведет ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

//5. Напишите функцию, которая находит самое часто встречающееся значение в массиве.
//function findMode(arr) {}
//const arr = [1, 2, 3, 4, 5, 2, 3, 2];
//console.log(findMode(arr)); // Выведет 2

//6. Задача на цикл for: Напишите функцию, которая выводит на экран все элементы массива, кроме первого и последнего.
//function printArrayWithoutFirstAndLast(arr) {}
//const arr = [1, 2, 3, 4, 5];
//printArrayWithoutFirstAndLast(arr); // Выведет 2, 3, 4

//7. Задача на цикл for in: Напишите функцию, которая принимает объект и выводит все его свойства и значения.
//function printObject(obj) {}
//const obj = { name: 'John', age: 30, city: 'New York' };
//printObject(obj); // Выведет name: John, age: 30, city: New York

//8. Задача на цикл for of: Напишите функцию, которая находит сумму всех элементов массива.
//function sumArray(arr) {}
//const arr = [1, 2, 3, 4, 5];
//console.log(sumArray(arr)); // Выведет 15

//9. Задача на цикл while: Напишите функцию, которая находит первый положительный элемент в массиве.
//function findFirstPositiveElement(arr) {}
//const arr = [-2, -1, 0, 1, 2];
//console.log(findFirstPositiveElement(arr)); // Выведет 1

//10.Задача на цикл do while: Напишите функцию, которая запрашивает у пользователя числа с клавиатуры до тех пор,
//пока он не введет отрицательное число.
//function getNumbersFromUser() {}
//const numbers = getNumbersFromUser();
//console.log(numbers); // Выведет массив введенных пользователем чисел

// const sumSquareEvenRootOdd = ns => {
//     let sum = 0
//     ns.map(n => n % 2 === 0 ? sum += n ** 2 : sum += Math.sqrt(n))
//     return +sum.toFixed(2)
//     // your code goes here
// };
//
// console.log(sumSquareEvenRootOdd([4, 5, 7, 8, 1, 2, 3, 0]))


// function twoSum(numbers, target) {
//     let indexes = [];
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             if (numbers[i] + numbers[j] === target) {
//                 indexes.push(i);
//                 indexes.push(j);
//                 return indexes; // Выходим из функции после нахождения первой пары
//             }
//         }
//     }
//     return indexes;
//     // ...
// }
//
// console.log(twoSum([1, 2, 3], 4))
// console.log(twoSum([2, 2, 3], 4))
// console.log(twoSum([2, 3, 1], 4))

// function spacey(array){
//     let noSpace = []
//     let str =''
//     for (let i = 0; i < array.length; i++) {
//         str += array[i]
//         noSpace.push(str)
//     }
//     return noSpace
// }
//
// console.log(spacey(['i', 'have','no','space']))

// function stringsConstruction(a, b) {
//     let count = 0;
//     let finding = true;
//     let pos;
//     b = b.split("");
//     while (finding) {
//         for (let i = 0; i < a.length; i++) {
//             pos = b.indexOf(a[i]);
//             if (pos >= 0) {
//                 b.splice(pos, 1);
//             } else {
//                 finding = false;
//                 break;
//             }
//         }
//         if (finding) {
//             count++;
//         }
//     }
//     return count;
// }
//
// console.log(stringsConstruction('hnccv', 'hncvohcjhdfnhonxddcocjncchnvohchnjohcvnhjdhihsn'))

// let number = function(array){
//     return array.map((el, i) => ++i + ': ' +el)
//     //your awesome code here
// }
//
// console.log(number(["a", "b", "c"])) // ["1: a", "2: b", "3: c"]
//
// function solution(start, finish) {
//     let jumps = 0;
//     let iFinish = 0;
//     for (let i = start; i < finish; i+=3) {
//         jumps ++
//         iFinish = i;
//     }
//     if ((iFinish+3) - finish === 1) {jumps++}
//     return jumps;
// }
//
// console.log(solution(1, 98))

// const reverseSeq = n => {
//     let arr = []
//     for (let i = n; i >= 1; i--) {
//         arr.push(i)
//     }
//     return arr;
// };
//
// console.log(reverseSeq(5))

// function arrayPlusArray(arr1, arr2) {
//     let count = 0
//     arr1.concat(arr2).map(el => count += el)
//     return count
// }
//
// console.log(arrayPlusArray([1,2 ,3], [4,5,6]))

// function noIfsNoButs(a, b) {
//     switch (true) {
//         case a > b: {
//             return `${a} is greater than ${b}`
//         }
//         case a < b: {
//             return `${a} is smaller than ${b}`
//         }
//         default:
//             return `${a} is equal to ${b}`
//     }
// }
//
// console.log(noIfsNoButs(4, 5))

// function eliminateUnsetBits(number) {
//     // your code here
//     const num = number.split('').filter(el => el !== '0').join('')
//     return num ? parseInt(num, 2) : 0
// }
//
// console.log(eliminateUnsetBits('000'))

// function solve(arr) {
//     let duplicate = {}
//     let arrDup = []
//
//     for (let i = 0; i < arr.length; i++) {
//         if (duplicate[arr[i]]) {
//             duplicate[arr[i]]++
//         } else {
//             duplicate[arr[i]] = 1
//         }
//     }
//     const arrKeys = Object.keys(duplicate)
//     for (let i = 0; i < arrKeys.length; i++) {
//         arrDup.push(+arrKeys[i])
//     }
//
//     return arrDup;
// }

// function solveChat(arr) {
//     const map = new Map();
//
//     return arr.reduceRight((acc, curr) => {
//         if (!map.has(curr)) {
//             map.set(curr, true);
//             acc.unshift(curr);
//         }
//         return acc;
//     }, []);
// }
//
// console.log(solveChat([3, 4, 4, 3, 6, 3])) //[ 4, 6, 3 ]

// const find_average = (array) => {
//     return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
// }

// function dropWhile(arr, pred) {
//     for (let i = 0; i < arr.length; i++) {
//         if (!pred(arr[i])) {
//             return arr.slice(i, arr.length)
//         }
//     }
//     return []
//     // Your Kafkaesque code here, plox...
// }
//
// function isEven(num) {
//     return num % 2 === 0;
// }
//
// let seq = [2, 4, 6, 8, 1, 2, 5, 4, 3, 2];
//
// console.log(dropWhile(seq, isEven))

// function makeLatinSquare(n) {
//     const square = [];
//     for (let i = 0; i < n; i++) {
//         square[i] = [];
//         for (let j = 0; j < n; j++) {
//             square[i][j] = (i + j) % n + 1;
//         }
//     }
//     return square;
// }
//
// console.log(makeLatinSquare(4))

// function integrate(coefficient, exponent) {
//     return `${coefficient/(exponent+1)}x^${exponent+1}`
// }

// function position(letter) {
//     for (let i = 97; i <= 122; i++) {
//         if (letter.charCodeAt(0) === i) {
//             // return `Position of alphabet: ${i - 96}`
//             return i - 96
//         }
//     }
// }
//
// position('v')

// const resultElement = document.getElementById('result');
//
// var Calculator = {
//     add(a, b) {
//         return a + b
//     },
//     subtract(a, b) {
//         return a - b
//     },
//     multiple(a, b) {
//         return a * b
//     },
//     divide(a, b) {
//         if (a === 0 || b === 0) {
//             return false
//         }
//         return a / b
//     }
// };

// function squareDigitsSequence(a0) {
//     //coding and coding...
//     let count = check(a0)
//     if (a0 === 1) {
//         return 2
//     }
//     let pos = []
//     let dig = 1
//     while (!pos.includes(count)) {
//         debugger
//         count = check(count)
//         pos.push(count)
//         dig++
//     }
//     return dig
// }
//
// const check = (count) => {
//     let str = count.toString().split('').reduce((sum, digit) => sum + digit ** 2, 0);
//     console.log('check', str)
//     return str
// }

// const squareDigitsSequence = (a0) => {
//   const seen = new Set(); // создаем множество для хранения уже сгенерированных чисел последовательности
//   let count = a0;
//   let length = 1;
//
//   while (!seen.has(count)) { // продолжаем генерировать числа до тех пор, пока не найдем число, которое уже было сгенерировано
//     seen.add(count);
//     count = String(count).split('').reduce((sum, digit) => sum + digit ** 2, 0);
//     length++;
//   }
//     console.log(seen)
//   return length;
// };
//
// console.log(squareDigitsSequence(21))

// function contamination(text, char){
//   return char.repeat(text.length)
// }

// function countDiceThrows(n) {
//   const dp = new Array(n + 1).fill(0);
//   dp[0] = 1;
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= 6; j++) {
//       if (j <= i) {
//         dp[i] += dp[i - j];
//       }
//     }
//   }
//   return dp[n];
// }
//
// console.log(countDiceThrows(4)); // Output: 8

// function tapCodeTranslation(text) {
//   const tapCodeTable = {
//     a: [1, 1], b: [1, 2], c: [1, 3], k: [1, 3], d: [1, 4], e: [1, 5],
//     f: [2, 1], g: [2, 2], h: [2, 3], i: [2, 4], j: [2, 5],
//     l: [3, 1], m: [3, 2], n: [3, 3], o: [3, 4], p: [3, 5],
//     q: [4, 1], r: [4, 2], s: [4, 3], t: [4, 4], u: [4, 5],
//     v: [5, 1], w: [5, 2], x: [5, 3], y: [5, 4], z: [5, 5]
//   };
//
//   const encodedText = [];
//
//   for (let i = 0; i < text.length; i++) {
//     const letter = text[i];
//     const [row, column] = tapCodeTable[letter];
//     encodedText.push('.'.repeat(row) + ' ' + '.'.repeat(column));
//   }
//
//   return encodedText.join(' ');
// }

// function triangular( n ) {
//   if ( n <= 0) {
//     return 0
//   }
//   let sum = 0
//   for (let i = n; i > 0; i--) {
//     sum += i
//   }
//   return sum
// }
//
// console.log(triangular(3));

// function xor(a, b) {
//   // TODO: Program Me
//   return a !== b;
// }
//
// console.log(xor(false, false))
//
// function sortByLength (array) {
//   // Return an array containing the same strings, ordered from shortest to longest
//   return array.sort((a, b) => a.length - b.length)
// }
//
// console.log(sortByLength(["Beg", "Life", "I", "To"]))

// function solve(s) {
//     const alphabet = {
//         a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10,
//         k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19,
//         t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
//     };
//
//     let maxCount = 0
//     let currentCount = 0
//
//     for (let i = 0; i < s.length; i++) {
//         if ('aeiou'.indexOf(s[i]) === -1) {
//             currentCount += alphabet[s[i]]
//             if (currentCount > maxCount) {
//                 maxCount = currentCount
//             }
//         } else {
//             if (currentCount > maxCount) {
//                 maxCount = currentCount
//             }
//             currentCount = 0
//         }
//     }
//
//     return maxCount
// }
//
// console.log(solve('ashovvvvvvvvvvv'))

// function findArray(arr1, arr2) {
//     if (arr1.length === 0 || arr2.length === 0) {
//         return []
//     }
//     let arr = []
//     for (let i = 0; i < arr2.length; i++) {
//         arr.push(arr1[arr2[i]])
//     }
//     return arr
// }
//
// console.log(findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [2, 2, 2]))
//
// const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;

// function columnize(items, n) {
//     // let count = 1
//     // for (let i = 0; i < items.length; i++) {
//     //     if (count === n) {
//     //         count = 0
//     //         console.log(items[i] + '||\n')
//     //
//     //     } else {
//     //         console.log(items[i] + '|')
//     //     }
//     //     count++
//     // }
//     const longestLength = items.reduce((max, str) => Math.max(max, str.length), 0);
//
//     const columns = items.map(str => str.padEnd(longestLength, " "));
//     const numRows = Math.ceil(columns.length / n);
//
//     let output = "";
//     for (let i = 0; i < numRows; i++) {
//         for (let j = 0; j < n; j++) {
//             const index = i + j * numRows;
//             if (index < columns.length) {
//                 output += columns[index];
//                 if (j < n - 1) {
//                     output += " | ";
//                 }
//             }
//         }
//         output += "\n";
//     }
//
//     return output;
// }
//
// console.log(columnize(["1", "12", "123", "1234", "12345", "123456"], 2))

// function XO(str) {
//     let o = 0
//     let x = 0
//
//     str.toLowerCase().split('').reduce((acc, curr) => {
//         if (curr === 'x') {
//             x++
//         } else if (curr === 'o'){
//             o++
//         }
//     },'')
//
//     return x === o
// }
//
// console.log(XO('zpzpzpp'))

// function toDayOfYear(arr) {
//     // return a number
//     let daysInMonth
//     let count = 0
//
//     let isLeap = (arr[2] % 4 === 0 && arr[2] % 100 !== 0) || arr[2] % 400 === 0
//
//     if (isLeap) {
//         daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
//     } else {
//         daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
//     }
//
//     for (let i = 0; i < arr[1] - 1; i++) {
//         count += daysInMonth[i]
//     }
//
//     return count + arr[0]
// }
//
// console.log(toDayOfYear([31, 12, 2000]))
// console.log(toDayOfYear([1, 5, 3000]))
// console.log(toDayOfYear([5, 11, 1604]))

// function plural(n) {
//     return n !== 1
// }
//
// function sortArray(a1, a2) {
//     let arr = []
//     for (let i = 0; i < a1.length; i++) {
//         for(let j = 0; j < a2.length; j++) {
//             if (a2[j][0] === a1[i][0]) {
//                 arr.push(a2[j])
//             }
//         }
//     }
//     return arr
// }

// function findNeedle(haystack) {
//     return `found the needle at position ${haystack.indexOf('needle')}`
// }
//
// console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))

// function solve(compasses, gears, tablets) {
//     if (compasses < 0 && gears < 0 && tablets < 0) {
//         return 0
//     }
//     let countOnFirstStep = Math.min(compasses, gears, tablets) * 7;
//     let countOnSecondStep = (compasses ** 2 + gears ** 2 + tablets ** 2);
//
//     return countOnFirstStep + countOnSecondStep;
// }
//
// console.log(solve(-1, 2, 2))

// function betterThanAverage(classPoints, yourPoints) {
//     // Your code here
//     let middle = 0
//     for (let i = 0; i < classPoints.length; i++) {
//         middle += classPoints[i]
//     }
//     return yourPoints >  (middle / classPoints.length)
// }
//
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))

// function f(x, cc) {
//     return x === cc.a ? cc.b : x === cc.b ? cc.c : cc.a
// }
//
// console.log(f( 3, { a:3, b:4, c:5 } ))
//
// function getChar(c){
//     return String.fromCharCode(c);
// }
//
// console.log(getChar(55))

// function peopleWithAgeDrink(old) {
//     if (old < 14) {
//         return "drink toddy"
//     } else if (old >= 14 && old < 18) {
//         return "drink coke"
//     } else if (old >= 18 && old < 21) {
//         return "drink beer"
//     } else {
//         return 'drink whisky'
//     }
// }
//
// console.log(peopleWithAgeDrink(22))
// // function sumMul(n, m) {
// //     if (n > 0 && m > 0) {
// //         let sum = 0
// //         for (let i = 0; i < m; i += n) {
// //                 sum += i
// //         }
// //         return sum
// //     }
// //     return "INVALID"
// // }
// //
// // console.log(sumMul(2, -9))

// function hero(bullets, dragons){
// //Get Coding!
//     return dragons * 2 <= bullets
// }
//
// console.log(hero(10, 5))

// function fakeBin(x){
//     return x.toString().split('').map(el => el >= 5 ? '1' : '0').join('')
// }
//
// console.log(fakeBin(45385593107843568))

// function consonantCount(str) {
//     // ... a, e, i, o, u
//     return str.toLowerCase().split('').reduce((acc, el) => {
//         if ('aeiou'.indexOf(el) === -1) {
//             if (el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122) {
//                 acc++
//             }
//         }
//         return acc
//     }, 0)
// }

// console.log(consonantCount('qweq'))

// function tripleTrouble(one, two, three){
//     let st = ''
//     for (let i = 0; i < one.length; i++) {
//       st += one[i] + two[i] + three[i]
//     }
//     return st
// }

// function noBoringZeros(n) {
//     if (n === 0) {
//         return 0;
//     }
//     while (n % 10 === 0) {
//         n = n / 10;
//     }
//     return n;
// }
//
// console.log(noBoringZeros(4002))

// function getFreeUrinals(urinals) {
//     if (urinals.includes('11')) {
//         return -1
//     }
//     if (urinals === '0') {
//         return 1
//     }
//     let count = 0
//
//     for (let i = 0; i < urinals.length; i++) {
//         if (urinals[i] === '0') {
//             if ((i === 0 || urinals[i - 1] === '0') && (i === urinals.length - 1 || urinals[i + 1] === '0')) {
//                 count++;
//                 i++; // Пропускаем следующий унитаз, так как он должен быть оставлен свободным
//             }
//         }
//     }
//     return count
// }
//
// console.log(getFreeUrinals("000000000"))

// function binaryPyramid(m,n){
//     let sum = 0
//     for (let i = m; i <= n; i++) {
//         sum += +i.toString(2)
//     }
//     return sum.toString(2)
// }
//
// console.log(binaryPyramid(1, 4))

function rgbToGrayscale(color){
    const r = parseInt(color.substring(1, 3), 16);
    const g = parseInt(color.substring(3, 5), 16);
    const b = parseInt(color.substring(5, 7), 16);

    const y = Math.round(0.299 * r + 0.587 * g + 0.114 * b);

    const grayscaleColor = y.toString(16).padStart(2, '0').repeat(3);

    return `#${grayscaleColor}`;
}

console.log(rgbToGrayscale('#000028'))

function smash (words) {
    return words.join(' ')
};
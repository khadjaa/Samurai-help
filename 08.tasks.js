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

function triangular( n ) {
  if ( n <= 0) {
    return 0
  }
  let sum = 0
  for (let i = n; i > 0; i--) {
    sum += i
  }
  return sum
}

console.log(triangular(3));
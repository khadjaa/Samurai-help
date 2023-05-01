// 1. Создайте функцию, которая будет принимать массив элементов и функцию обратного вызова (callback), и для каждого элемента массива
// будет применять функцию обратного вызова(функция вывода).
// const applyCallback = (array, callback) => {
//     array.forEach(element => {
//         callback(element)
//     })
// }
// const array = [1, 2, 3];
// applyCallback(array, console.log);


//2 Напишите функцию, которая принимает массив чисел и функцию обратного (которая умножает каждый элемент массива на 2)
// вызова и возвращает новый массив, содержащий результат применения функции
// обратного вызова к каждому элементу исходного массива.
// const applyCallback = (array, callback) => {
//     return array.map(element => {
//         return callback(element)
//     })
// }
//
// const multiplyElementByTwo = (element) => {
//     return element * 2
// }
//
// const array = [1, 2, 3];
// const callbackFunc = applyCallback(array, multiplyElementByTwo); // что-то нужно прописать
// console.log(callbackFunc);// [2, 4, 6]


//3 Создайте функцию, которая принимает два числа и функцию обратного вызова, которая выполняет арифметическую операцию  сложения между ними.
const applyOperation = (x, y, operation) => {
    return operation(x, y)
}

const add = addFunction = (x, y) => {
    return x + y
}

const result = applyOperation(2, 3, add);
console.log(result);


// 4 Создайте функцию, которая принимает массив строк и функцию обратного вызова, которая фильтрует строки, если длинна строки меньше 7.
// const filterStrings = (array, callback) => {}
// const array = ['hello', 'world', 'javascript', 'callback'];
// const sortFunc = //написать функцию
// const filtered = filterStrings(array, sortFunc); // что- добавить
// console.log(filtered);


//5 Напишите функцию, которая принимает два массива и функцию обратного вызова, которая складывает элементы двух массивов.
const zipArrays = (array1, array2, callback) => {
    return callback(array1, array2)
}
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const zippedFunc = (array1, array2) => {
    let newArray = []
    for (let i = 0; i < array1.length; i++) {
        newArray.push(array1[i] + array2[i])
    }
    return newArray
}
console.log(zipArrays(array1, array2, zippedFunc))


//6 Создайте функцию, которая принимает массив объектов и функцию обратного вызова, которая возвращает массив значений свойства age.
const pluck = (array, property) => {
    return property(array)
}

const arrayOfAges = (array) => {
    return array.map(el => el.age)
}

const people = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 30},
    {name: 'Bob', age: 20}
];
console.log(pluck(people, arrayOfAges));


// 7. Создать функцию которая будет проверять является ли строка полиндромом
//Палиндро́м — число, буквосочетание, слово или текст, одинаково читающееся в обоих направлениях.
const isPolindrom = (word) => {
    const reversedStr = word.split("").reverse().join("");
    return word === reversedStr;
}
console.log(isPolindrom("шабаш АшА шабаш"))


// 8. Вывести самое короткое слово в консоль
const findShort = (sentence) => {
    const words = sentence.split(" ");
    let shortest = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortest.length) {
            shortest = words[i];
        }
    }

    return shortest
}
console.log(findShort('The smallest word in sentence'))


// 9. Вывести в консоль инициалы (Александр Петров - А.В.)
const toInitials = (name) => {
    return name.split(' ').map(el => el.charAt(0)).join('.') + '.'
}
console.log(toInitials("Bill Gates vfr"))


// 10. Создание дубликатов символов строки ("abcd") => "A-Bb-Ccc-Dddd"

function duplicate(s) {
    return [...s].map((elem,ind)=> elem.toUpperCase() + (elem.repeat(ind).toLocaleLowerCase())).join('-')
}

console.log(duplicate('abcd'));


// 11. Отформатировать цифры в телефонный номер (123456789) => (123) 456-789
const phoneNumber = (number) => {
    return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6, 9)}`
}
console.log(phoneNumber('123456789'))



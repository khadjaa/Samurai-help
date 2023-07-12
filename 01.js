const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        id: 5,
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        id: 6,
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    id: 7,
    name: "Rick",
    age: 23,
    isMarried: false,
    scores: 135,
}

function checkUserAge (age) {
    if(age > 18) {
        return 'yes you can sel alcohol for this person'
    } else {
        return 'call to police you have a big problem'
    }
}

// console.log(checkUserAge(user.age) + ' ---- user before copy')
// let copyUser = user
// copyUser.age = 16
// console.log(checkUserAge(user.age)  + ' ---- user after copy')
// console.log(checkUserAge(copyUser.age) + ' ---- new person')

//1. Вывести массив с именами, в котором все имена будут прописаны большими буквами
console.log(students.map(el => el.name.toUpperCase()))

// 2. Вывести данные студентов с баллами >= 100
console.log(students.filter(el => el.scores >= 100))

//3. Сформируйте массив холостых студентов
console.log(students.filter(el => !el.isMarried ))

//4. Объект user добавить в массив
let copyStudents = [...students]
console.log(typeof copyStudents.push(user))
console.log(copyStudents)

// 5. Удалить студента "John"
console.log(students.filter(el => el.name !== 'John'))

//6***. Ник женился и в списке нужно заменить его статус на true
console.log(students.map(el => el.name === 'Nick' ? {...el, isMarried: true} : el))


//7. Проверка на четнотность или не четность, вывод: "Четный" или "Нечетный"
const evenOrOdd = (number) => number % 2 === 0 ? 'odd' : 'even'
console.log(evenOrOdd(7))
console.log(evenOrOdd(8))

//8. Создайте функцию, делится ли число n на оба числа x и y без остатка, return true or false.

function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0;
}
console.log(isDivisible(3,3,4))
console.log(isDivisible(12,3,4))


const doAfter = (second) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let number = Math.random()
            resolve(number)
        }, second * 1000)
    })
}

let pr = doAfter(2)

setTimeout(() => {
    pr.then(() => {
        console.log('pr')
    })
}, 1000)

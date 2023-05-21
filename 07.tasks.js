//1. Вы пишете код для управления светофорами в вашем городе. Вам нужна функция для обработки каждого изменения с green,
// на yellow, на red, а затем green снова.
// Завершите функцию, которая принимает строку в качестве аргумента, представляющую текущее состояние
// источника света, и возвращает строку, представляющую состояние, в которое свет должен измениться.
// Например, когда вход равен green, вывод должен быть yellow.
// но без использования if else

function updateLight(current) {
    return current === 'green'
        ? 'yellow'
        : 'yellow' === current
            ? 'red'
            : 'green'
}

console.log(updateLight("green"))//"yellow"
console.log(updateLight("yellow"))/// "red"
console.log(updateLight("red"))//"green"

const colorMap = {
    'green': 'yellow',
    'yellow': 'red',
    'red': 'green'
};

function getNextLightColor(currentColor) {
    return colorMap[currentColor];
}

console.log(getNextLightColor('green'))


//2. Ты в зоопарке... все сурикаты выглядят странно. Что-то пошло не так — кто-то поменял местами головы и хвосты!
// Спасите животных, переключив их обратно. Вам будет предоставлен массив, который будет иметь три значения (хвост, тело, голова).
// Ваша задача — переупорядочить массив так, чтобы животное располагалось в правильном порядке (голова, тело, хвост).
// То же самое касается всех других массивов/списков, которые вы получите в тестах: вы должны изменить позиции элементов
// с той же точной логикой.

function fixTheMeerkat(arr) {
    return arr.reverse()
}

console.log(fixTheMeerkat(["tail", "body", "head"]) ) //["head", "body", "tail"]);
console.log(fixTheMeerkat(["tails", "body", "heads"]))  // ["heads", "body", "tails"]);
console.log(fixTheMeerkat(["bottom", "middle", "top"])) // ["top", "middle", "bottom"]);


//3. Функция должна возвращает количество (количество) гласных в заданной строке.
// Мы будем рассматривать a, e, i, o, u как гласные для этой Ката (но не y).
// Входная строка будет состоять только из строчных букв и/или пробелов.

function getCount(str) {
    let count = 0
    let arr = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < str.length; i++) {
        if(arr.includes(str[i])){
            count++
        }
    }
    return count
}

console.log(getCount("abracadabra"))
// 5

//4.Чтобы найти объем (в кубических сантиметрах) прямоугольного параллелепипеда, используйте формулу:
// volume = Length * Width * Height
// Но кто-то забыл использовать надлежащий учет, поэтому у нас есть только объем и длина одной стороны!
// Вы должны выяснить, равны ли стороны прямоугольного параллелепипеда (= является кубом).
// Возврат true, если кубоид может иметь равные стороны, возврат false в противном случае.
// Возврат false также для недопустимых чисел (например, объем или сторона меньше или равна 0).
// Примечание: сторона будет целым числом

let cubeChecker = function (volume, side) {
    return (volume <= 0 || side <=0) ? false : side === Math.cbrt(volume)
};

console.log(cubeChecker(56.3, 1))// false
console.log(cubeChecker(-1, 2))// false
console.log(cubeChecker(8, 3))// false
console.log(cubeChecker(8, 2))// true
console.log(cubeChecker(-8, -2)) //false


//5.Функция должна возвращать словарь/объект/хэш с ключом "status", значение которого может: "busy" или "available" в
// зависимости от значения истинности аргумента is_busy.
// Но, как вы увидите после нажатия RUN или ATTEMPT в этом коде есть несколько ошибок, пожалуйста, исправьте их.

function getStatus(isBusy) {
    let msg = (isBusy ? "busy" : "available");
    return {
        status: msg
    }
}

console.log(getStatus(''))





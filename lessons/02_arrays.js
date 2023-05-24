let animeArray = [
    {
        title: "Death Note",
        genre: "Psychological thriller",
        episodes: 38,
        mainCharacter: "Light Yagami"
    },
    {
        title: "Attack on Titan",
        genre: "Action, dark fantasy",
        episodes: 74,
        mainCharacter: "Eren Yeager"
    },
    {
        title: "Naruto",
        genre: "Action, adventure",
        episodes: 720,
        mainCharacter: "Naruto Uzumaki"
    },
    {
        title: "Fullmetal Alchemist: Brotherhood",
        genre: "Action, fantasy",
        episodes: 64,
        mainCharacter: "Edward Elric"
    },
    {
        title: "One Piece",
        genre: "Action, adventure",
        episodes: 1002,
        mainCharacter: "Monkey D. Luffy"
    },
    {
        title: "Demon Slayer: Kimetsu no Yaiba",
        genre: "Action, dark fantasy",
        episodes: 26,
        mainCharacter: "Tanjiro Kamado"
    },
    {
        title: "Hunter x Hunter",
        genre: "Action, adventure",
        episodes: 148,
        mainCharacter: "Gon Freecss"
    },
    {
        title: "My Hero Academia",
        genre: "Action, superhero",
        episodes: 116,
        mainCharacter: "Izuku Midoriya"
    },
    {
        title: "Sword Art Online",
        genre: "Action, adventure",
        episodes: 96,
        mainCharacter: "Kirito"
    },
    {
        title: "Fairy Tail",
        genre: "Action, fantasy",
        episodes: 328,
        mainCharacter: "Natsu Dragneel"
    },
    {
        title: "Cowboy Bebop",
        genre: "Action, sci-fi",
        episodes: 26,
        mainCharacter: "Spike Spiegel"
    },
    {
        title: "Dragon Ball Z",
        genre: "Action, martial arts",
        episodes: 290,
        mainCharacter: "Goku"
    },
    {
        title: "Bleach",
        genre: "Action, supernatural",
        episodes: 366,
        mainCharacter: "Ichigo Kurosaki"
    },
    {
        title: "Code Geass",
        genre: "Action, mecha",
        episodes: 50,
        mainCharacter: "Lelouch Lamperouge"
    }
];

// let jojoObject = {
//     title: "JoJo's Bizarre Adventure",
//     genre: "Action, supernatural",
//     episodes: 152,
//     mainCharacter: "Various"
// }

// 1. some()

// Этот метод проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.
// Он вернет значение true, если хотя бы один элемент совпадет с проверяемой функцией, и значение false — если нет.

//Задание: Нужно проверить есть ли объект, который имеет title: "Attack on Titan"

let some = animeArray.some(el => el.title === "Attack on Titan")
console.log(some)

// 2. reduce()
// Этот метод принимает функцию, которая имеет в качестве аргумента аккумулятор и значение. Он применяет функцию к
// аккумулятору и каждому значению массива, чтобы в результате вернуть только одно значение.

//Задание: Найти среднее колличетво эпизодов всех аниме

let reduce = animeArray.reduce((acc, curr) => {
    return acc + curr.episodes
}, 0)

let middleSum = reduce / animeArray.length

console.log(middleSum)

// 3. every()
// Этот метод проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции. Он вернет значение
// true, если каждый элемент совпадет с проверяемой функцией, и значение false — если нет.

// Задание: Нужно проверить являются ли эпизоды четными числами.
let every = animeArray.every(el => el.episodes % 2 === 0)
console.log(every)

// 4. map()
// Этот метод принимает функцию в качестве параметра и создает новый массив с результатом вызова указанной функции для
// каждого элемента массива. Он всегда будет возвращать одинаковое количество элементов.

//Задание: На данный момент вышли новые эпизоды в аниме title: "Demon Slayer: Kimetsu no Yaiba", замените старое
// знаечение на 28
let map = animeArray.map(el => el.title === 'Demon Slayer: Kimetsu no Yaiba'
    ? {...el, episodes: 28}
    : el)

console.log(map)

// 5. flat()
// Этот метод принимает в качестве аргумента массив массивов и сглаживает вложенные массивы в массив верхнего уровня.
// Обратите внимание, что этот метод работает только для одного уровня.

//Задание: Мы имеем массив массивов anime, необходимо сделать массив объектов
let anime = [
    [
        {
            title: "Death Note",
            genre: "Psychological thriller",
            episodes: 38,
            mainCharacter: "Light Yagami"
        }
    ],
    [
        {
            title: "Attack on Titan",
            genre: "Action, dark fantasy",
            episodes: 74,
            mainCharacter: "Eren Yeager"
        }
    ],
    [
        {
            title: "Naruto",
            genre: "Action, adventure",
            episodes: 720,
            mainCharacter: "Naruto Uzumaki"
        }
    ]
]

let flat = anime.flat()
console.log(flat)

//6. filter()
//Этот метод принимает функцию в качестве параметра и возвращает новый массив, содержащий все элементы массива,
// для которого функция фильтрации передавалась в качестве аргумента, и возвращает ее со значением true.

//Задание: убрать аниме, в которых название состоит из трех и более слов.
let filteredAnimeArray = animeArray.filter((anime) => {
    let words = anime.title.split(" ");
    return words.length < 3;
});

console.log(filteredAnimeArray)
// 7. forEach()
// Этот метод применяет функцию к каждому элементу массива.

//Задание: Найти все аниме в жанре которых "Action", и добавить их в отдельный массив.
let newArray = []
animeArray.forEach(el => el.genre.includes('Action') ? newArray.push(el) : null)



//8. findIndex()
//Задание: 1) Найти индекс объекта в массиве, который соответствует аниме с названием "One Piece" и количеством эпизодов больше 500,
//в противном случае "такого объекта в массиве нет"
//2) Найти индекс первого объекта в массиве, который соответствует аниме с количеством эпизодов больше 100.

const findInd = animeArray.findIndex((el, ind) => el.episodes > 100)
console.log(findInd)

const findInd2 = animeArray.findIndex(el => el.title === 'One Piece' && el.episodes > 500)
console.log(findInd2)

//9.find()
// Задание: Найти первое аниме, у которого главный персонаж начинается на букву "L".
const findEl = animeArray.find(el => el.mainCharacter[0] === 'L')
console.log(findEl)
//10. sort()

//Задание:
//1) Отсортировать аниме в порядке убывания количества эпизодов.
//2) Отсортировать аниме в порядке возрастания длины названия.
//3) Отсортировать аниме в порядке убывания количества слов в жанре.


//11. concat()
//Задание: Объеденить animeArray и newAnimeArray

let newAnimeArray = [
    {
        title: "Your Lie in April",
        genre: "Romance, Drama, Music",
        episodes: 22,
        mainCharacter: "Kosei Arima"
    },
    {
        title: "The Town Where Only I Am Missing",
        genre: "Mystery, Psychological, Supernatural",
        episodes: 12,
        mainCharacter: "Satoru Fujinuma"
    },
    {
        title: "Death Parade",
        genre: "Psychological, Drama, Mystery",
        episodes: 12,
        mainCharacter: "Decim"
    }
];

const concatArray = animeArray.concat(newAnimeArray)
console.log(concatArray)

//12. includes()
//Задание: Напишите функцию hasMainCharacter(array, character), которая будет принимать массив объектов animeArray и
// имя главного персонажа (character) в качестве аргументов и возвращать true, если хотя бы один аниме в массиве имеет
// указанного главного персонажа, и false, если нет.

// console.log(hasMainCharacter(animeArray, "Gon Freecss")); // true
// console.log(hasMainCharacter(animeArray, "Monkey D. Luffy")); // true
// console.log(hasMainCharacter(animeArray, "Sakura Haruno")); // false


//13 reverse()
//Задание: Отфильтровать аниме, у которых жанр содержит слово "action", и перевернуть порядок следования объектов в отфильтрованном массиве.

//14. flatMap()
//Задание:
// 1)Создайте новый массив, который будет содержать все главных героев аниме из animeArray в одном массиве.
// 2) Создайте новый массив, который будет содержать все эпизоды из animeArray в одном массиве и отсортированы по возрастанию. Используйте метод flatMap() и sort().
console.log('---------------------')

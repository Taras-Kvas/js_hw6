// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let array = []
// function random (number) {
//     for (let i = 0; i < number; i++) {
//         array[i] = Math.floor(Math.random() * 100)
//     }
//     return array
// }
// console.log (random(10))


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//     Відсортувати його за допомоги sort

// let array = []
// function random (number) {
//     for (let i = 0; i < number; i++) {
//         array[i] = Math.floor(Math.random() * 100)
//     }
//     return array.sort((a,b)=> a - b);
// }
// console.log (random(2))


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//     відфільтрувати  його за допомоги filter, залишивши тільки парні числа


// let array = []
// function random (number) {
//     for (let i = 0; i < number; i++) {
//         array[i] = Math.floor(Math.random() * 100)
//     }
//     return array.filter(chyslo => chyslo % 2 === 0)
// }
// console.log (random(10))


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.


// let array = []
// function random (number) {
//     for (let i = 0; i < number; i++) {
//         array[i] = Math.floor(Math.random() * 100)
//     }
//     return array.map(str => str.toString())
// }
// console.log (random(10))

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//     або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let nums = [11,21,3]
// function sortNums (direction) {
//    nums.sort((a,b) => a - b)
//     nums.sort((a,b)=> b - a)
//     return nums
// }
// console.log (sortNums())

//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let sort = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);
// console.log(sort);

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let filter = coursesAndDurationArray.filter (str => str.monthDuration > 5)
// console.log (filter);

// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців


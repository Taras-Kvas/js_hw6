// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості
// символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру
// у верхній.
//
//
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let str = 'hello word';
// console.log (str.length);

// let str = 'lorem ipsun';
// console.log (str.length);

// let str = 'javascript is cool'
// console.log (str.length);

// let str = 'hello word';
// let toUpperCase = str.toUpperCase();
// console.log (toUpperCase)

// let str = 'lorem ipsun';
// let toUpperCase = str.toUpperCase();
// console.log (toUpperCase)

// let str = 'javascript is cool';
// let toUpperCase = str.toUpperCase();
// console.log (toUpperCase)

// let str = 'HELLO WORD'
// let toLowerCase = str.toLowerCase();
// console.log (toLowerCase)

// let str = 'LOREM IPSUN';
// let toLowerCase = str.toLowerCase();
// console.log (toLowerCase)

// let str = 'JAVASCRIPT IS COOL'
// let toLowerCase = str.toLowerCase();
// console.log (toLowerCase)


// let str = ' dirty string   '
// let trim = str.trim();
// console.log (trim);
// console.log (trim.length)


// function stringToarray(str) {
//     return  str.split('  ');
// }
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr);

// function delete_characters(str, length) {
//     return str.substr(7, length)
// }
// let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// function insert_dash(str) {
//   return str.toUpperCase().replaceAll(' ', '-')
// }
// let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str));

// Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру
// у верхній.
// function s(str) {
//  return str[0].toUpperCase() + str.slice(1);
// }
// console.log (s('taras kvas'))


// Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери

// let capitalize = str => {
//  return str.split('  ').map(str=>str.charAt(0).toUpperCase()+str.slice(1))
// }
// document.write (capitalize('hello word taras kvas'))
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function s(a,b) {
//     return a * b;
// }
// document.write(s(2,4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function s(r) {
//     return Math.PI * Math.pow(r, 2);
// }
// document.write(s(3));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function s(h, r) {
//     return 2 * Math.PI * r * (r + h);
// }
// document.write(s(5,10));

// - створити функцію яка приймає масив та виводить кожен його елемент
// function arr (){
//     for (const argument of arguments) {
//         document.write(`${argument}</br>`);
//     }
// }
// arr(1,2,3,4,5,6);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function text(a){
//     document.write(`<p>${a}</p>`);
// }
// text('Hello');
// text('world');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function ulli(li){
//     document.write(`<ul>`)
//     document.write(`<li> ${li} </li>`)
//     document.write(`<li> ${li} </li>`)
//     document.write(`<li> ${li} </li>`)
//     document.write(`</ul>`)
// }
// ulli('some text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function forli(li, number) {
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//         document.write(`<li> ${li} </li>`);
//     }
//     document.write(`</ul>`);
// }
// forli('some text', 6);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function arr2 (){
// document.write(`<ul>`);
//     for (const argument of arguments) {
//         document.write(`<li>${argument}</li>`);
//     }
//     document.write(`</ul>`);
// }
// arr2(1,2,true,false,'wekjn','jwyhb');

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let masssssiv = [
//     {
//         id:1,
//         name:'Ivan',
//         age: 32,
//     },
//     {
//         id:2,
//         name:'Navi',
//         age: 23,
//     },
//     {
//         id:3,
//         name:'Vani',
//         age: 50,
//     }
// ]
//
// function navi(arr){
//     for (const masiv of masssssiv){
//         document.write(`<div>id - ${masiv.id}, Name is ${masiv.name}, age - ${masiv.age}</div>`)
//     }
// }
// navi(masssssiv);
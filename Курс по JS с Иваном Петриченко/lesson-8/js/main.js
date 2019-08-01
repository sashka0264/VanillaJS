// touchstart - чаще всего используется на мобильных устройствах, аналош клика
// touchmove - после того, как пользователь нажал и начал водить
// touchend - когда палец отодвигается, то есть перестает соприкасаться с нашей 
// поверхностью. проще говоря, когда я отпускаю палец
// click так же будет нормально отображаться на моб устройствах
// touchenter - когда наш палец заходит на какой-то элемент
// touchleave - когда наш палец покинул пределы элемента
// touchcancel - когда точка соприкосновения не регистрируется на поверхности
// окна - так может быть на планшете
// когда открыто 2 окна одновременно, по окну браузера я веду палец и он выходит
// за пределы

window.addEventListener("DOMContentLoaded", function () {
  'use strict';

  let box = document.querySelector(".box");

  // box.addEventListener("touchstart", function(event) {
  //     event.preventDefault();
  //     console.log("Red box: touchstart");
  // });

  // box.addEventListener("touchstart", function(event) {
  //     event.preventDefault();
  //     console.log("Red box: touchstart");

  //     console.log(event.target);
  //     console.log(event.touches[0].target);
  //     // первый палец
  //     console.log(event.changedTouches);
  //     console.log(event.targetTouches);
  // });

  // box.addEventListener("touchmove", function(event) {
  //     event.preventDefault();
  //     console.log("Red box: " + event.touches[0].pageX);
  // });

  // box.addEventListener("touchend", function(event) {
  //     event.preventDefault();
  //     console.log("Red box: touchend");
  // });

  // new RegExp("pattern", "flags");
  // второй способ записи:
  // /pattern/flags
  // pattern - это то, что мы хотим найти, знаки, пробелы и т.д.

  // let ans = prompt("Введите ваше имя");

  // let reg = /n/i;
  // let reg = /n/;
  // let reg = /n/g;
  // let reg = /n/ig;
  // получаем шаблон(паттерн)
  // теперь можем что-то сделать
  // регулярные выражения помогают нам работать со строками

  // console.log(ans.search(reg));
  // выведет в консоль позицию первой буквы n в строке, 
  // этот метод слаб и не может искать глобально
  // console.log(ans.match(reg));
  // может получить все свойства, так как результат в виде массива

  // i - мы ищем что-то вне зависимости большая и маленькая буква
  // то есть вне зависимости от регистра
  // g - мы ищем глобально, то есть не что-то одно, а все

  // let pass = prompt("Введите пароль");

  // console.log(pass.replace(/./g, "*"));
  // alert("12-34-42".replace(/-/g, ":"));

  // let ans = prompt("Введите ваше имя");

  // let reg = /n/ig;

  // console.log(reg.test(ans));
  // так мы проверяем при помощи test на наличие, мы получим
  // true

  // \d - если надо найти цифры \D - большие...
  // \w - если надо найти буквы \W
  // \s - если надо найти пробелы \S

  // let ans = prompt("Введите число");

  // let reg = /\d/ig;
  // так мы будем искать все числа

  // console.log(ans.match(reg));
  // найдет все цифры

  // let str = "Me name/ is R2F3";


  "use strict";

  let a = 1;
let b = { toString() {return '1'} };
let c = 1;

console.log(a+b+c);
});
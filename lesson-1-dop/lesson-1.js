'use strict';

//  Стандарт es6 - это всегда должно быть написано вверху, как doctype и некоторые ошибки прошлого работать не будут:

// Если бы верхнего стандарта не было, то код внизу сработал бы, а не выдавал ошибку, что так делать нельзя:
// a = 5;
// console.log(a);



// console.log(leftBorderWidth)
// Появляется надпись underfind - это значит, что переменная leftBorderWidth не имеет пока никакого значения, 
// но существует еще до выполнения скрипта

// var leftBorderWidth = 1;
// console.log(leftBorderWidth)
// Значение появляется = 1 

// console.log(second);
// Появится ошибка
// let second = 2; 
// Создается только тогда, когда код до нее доходит, var же - создается сразу, 
// но значение еще может быть не присвоено, если код не дошел

// const pi = 3.14;
// Аналогично let, только это значение нельзя поменять в процессе работы с кодом

// 7 типов данных:

// var number = 5; 
// (целые и дробные)
// console.log(4/0)
// Это значение infinity (вечность)
// console.log("string"*9)
// Это числовое значение Note Number 
// var string = "Hello!";
// Каждая строка пишется в кавычках
// var sym = Symbol();
// Новый тип
// var boolean = true;
// Логически, либо да, либо нет
// var j = null;
// Это когда чего-то в коде вообще не существует, это ошибка
// undefined;
// Это когда переменная обьявлена, но к ней ничего не присвоено
// var obj = {};
// Это комплексный тип данных, здесь можно хранить все типы 

// let persone = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(persone.name);
//  Получаем значение первого свойства, либо можно так:
// console.log(persone["name"]);

// Создаем массив, его фишка в том, что каждому элементу в последовательности присваивается порядковый номер

// let arr = ["plum.png", "orange.jpg", "apple.bmp"]

// console.log(arr[0]);
// Счет начинается с 0 до бесконечности

// alert ("Hellow, world!")
// Работает только в браузере и работать тут не будет, при появлении такого alert все скрипты останавливаются
// При нажатии ok код идет дальше

// let answer = confirm("Are you here?");
// Появляется модальное окно с возможностью выбрать да - или нет

// console.log(answer);
//  Наш ответ 

// let answer = prompt("Есть ли вам 18 :D?", "Да");
// console.log(typeof(answer));
// Мы все равно получаем тип данных - строка
// console.log(typeof(null));
// Получаем тип данных - object

// console.log("arr" + " - object")
// Сложение двух строк
// console.log(typeof("arr" + " - object"));
// Получим строку
// console.log(typeof(5 + " - object"));
// Получим все равно строку

// Если от promt мы хотим получить число от пользователя, то перед его значнием надо поставить +, например:
// let answer = +prompt("Сколько вам лет?", "21");  
// console.log(typeof(answer));

// let incr = 10,
//     decr = 10;

// incr++;
// Увеличиваем на 1
// decr--;
// Уменьшаем на 1

// console.log(incr);
// console.log(decr); 

// Либо можно сделать проще:

// console.log(++incr);
// console.log(--decr);

// console.log(incr++);
// console.log(decr--);
// ++ - это оператор
// Если написать так, то новое значение, полученное сложением и вычитанием, будет уже после ввода старого в консоли

// console.log(5%2);
// Получим остаток от деления равный 1

// console.log("2" == 2)
// Тут два типа данных, но мы получим true, так как == сравнивает значения, но если написать так:

// console.log("2" === 2)
// То мы получим false, так как здесь идет сравнение по типам данных, а "2" - это строка

// let isChecked = true,
    // isClose = true;

// console.log(isChecked && isClose);
// && - значит и

// let isChecked2 = true,
//     isClose2 = false,
//     me = true;

// console.log(isChecked2 && isClose2 && me);
// Теперь получим false, так как одно из значений неверно
// Значение будет положительным только в том случае, если все! элементы будут true

// || - оператор или

// let isChecked2 = false,
    // isClose2 = false,
    // me = true;

// console.log(isChecked2 || isClose2 || me);
// Значение будет положительным, если !хотя бы один! элемент будет положительным
// false будет только если оба элемента будут неверными

//  Оператор ! обращает значение в обратное, правду в ложь и наоборот, например:
// console.log(isChecked2 || isClose2 || !me);
// Теперь мы получим false



let num = 33721;
let multiplication = num*num;
console.log("Умножение:", multiplication);
let cube = (BigInt(multiplication ** 3));
console.log("Возводим в 3 степень", cube);



console.log(String(cube));
let string = String(cube);

var decision = string.slice(0, 2); 

console.log(decision);
alert(decision);



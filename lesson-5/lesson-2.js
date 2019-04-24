'use strict';

// Чтобы превратить любой тип данных в строку пишем String
// Число стало строкой
// 1)
// console.log(typeof(String(4)));
// 2)
// а 5 - уже не число, это строка
// console.log("ww" + 5);
// console.log(typeof("q" + false));

// Можно использовать пустую строку, это такая конкатенация - 
// как способ превращения в строку любого элемента
// let money, time, a, b;
// console.log("https://vk.com/sasha_who" + 5);

// Чтобы превратить любой тип данных в число пишем String
// 1)
// console.log(typeof(Number("какой-то текст")));
// 2) + -это унарный плюс
// console.log(typeof(+("какой-то текст")));
// console.log(typeof((+"какой-то текст")));
// console.log(typeof(5 + +'5'));
// 3)
// console.log(typeof(parseInt("15px", 10)));
// Все данные, получаемые от пользователя - это всегда строка

// let ans = +prompt("hello?", "");

// 0 - это всегда false
// пустая строка - это тоже всегда false
// null и undefined, NaN
// 0, "", null и undefined, NaN

// 1
let switcher = null;

if (switcher) {
    console.log("Работает!");
    // Это условие никогда не выполнится, так как оно
    // всегда false, так как null - всегда false
}

switcher = 1;

if (switcher) {
    console.log("Оп! Теперь заработало");
    // так как значение 1 - true
    // условие выполнится, потому что 1 - проверяется
    //  как булиновое значение и так как true, так как 1,
    // число, это true  
}
// 2
console.log(typeof(Boolean("Какой-то текст")));
// 3
console.log(typeof(!!("Какой-то текст")));



// function start() {
//     money = +prompt("Ваш бюджет на месяц?", '');
//     time = prompt("Введите дату в формате YYYY-MM-DD", '');

//     while (isNaN(money) || money == "" || money == null) {
//         money = +prompt("Ваш бюджет на месяц? Введите корректный ответ.", '');
//     }
// }
// start();



// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: true,
//     chooseExpenses: function () {
//         for (let i = 0; i < 1; i++) {

//             a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//                 b = prompt("Во сколько обойдется?", '');

//             if ((typeof (a)) === 'string' && (typeof (b)) === 'string' &&
//                 (typeof (a)) != null && (typeof (b)) != null &&
//                 a != '' && b != '' && a.length < 50) {

//                 console.log("done");
//                 appData.expenses[a] = b;
//             } else {
//                 alert("Ваши ответы не должны быть пустыми, " +
//                     "больше 50 символов, а числовое значение суммы " +
//                     "расходов должно быть больше 0");
//                 i--;
//             }
//         }
//     },
//     detectDayBudget: function () {
//         appData.moneyPerDay = (money / 30).toFixed();
//         alert("Ваш бюджет на 1 день: " + appData.moneyPerDay);
//         console.log(appData);
//     },
//     detectLevel: function () {
//         if (appData.moneyPerDay < 100) {
//             console.log("Минимальный уровень достатка");
//         } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//             console.log("Средний уровень достатка");
//         } else if (appData.moneyPerDay > 2000) {
//             console.log("Высокий уровень достатка");
//         } else {
//             console.log("Что-то пошло не так")
//         }
//     },
//     checkSavings: function () {
//         if (appData.savings == true) {
//             let save = +prompt("Какова сумма накоплений?"),
//                 percent = +prompt("Под какой процент?");

//             appData.monthIncome = save / 100 / 12 * percent;
//             alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
//         }
//     },
//     chooseOptExpenses: function () {
//         for (let i = 1; i < 4; i++) {
//             appData.optionalExpenses[i] =
//                 prompt("Статья необязательных расходов?");
//         }
//     },
//     // Теперь эти функции хранятся в виде методов обьекта appData
//     chooseIncome: function () {
//         for (let i = 0; i < 1; i++) {
//             let items = prompt("Что принесет дополнительный доход?" +
//                 "(Перечислите через запятую)", "");

//             if (!isNaN(items) || items === null) {
//                 alert("Аргумент передан не как строка");
//                 i--;
//             } else {
//                 appData.income = items.split(", ");
//             }
//         }
//         for (let i = 0; i < 1; i++) {
//             let others = prompt("Может что-то еще? (только одно)", "");
//             // ВОТ ТУТ У МЕНЯ ВОПРОС - КАК СДЕЛАТЬ ТАК, ЧТОБЫ МОЖНО БЫЛО
//             // ВВЕСТИ НЕ ТОЛЬКО 1 И ПРОИСХОДИЛА СОРТИРОВКА?
//             if (!isNaN(others) || others === null) {
//                 alert("Аргумент передан не как строка");
//                 i--;
//             } else {
//                 appData.income.push(others);
//             }

//         }
//         appData.income.sort();

//         appData.income.forEach(function(item, i) {
//             alert("Способы доп. заработка: " + (i+1) + " - " + item );
//         });
//     },

//     showAll: function() {
//         for (let key in appData) {
//             console.log("Свойство " + key + " имеет значение " + appData[key]);
//         }
//     }
// };


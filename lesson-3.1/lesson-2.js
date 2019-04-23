'use strict';

let str = "урок-3-был слишком легким";


str = str[0].toUpperCase() + str.substring(1);
console.log("1)" + str);

// console.log(str.replace("-", " "));
/* Так заберет самую первую черту */

str = str.replace(/-/g, " ");
/* Теперь поисr глобальный и замена происходит 
всех элементов */
console.log("2)" + str);

let x = str.slice(19);
str = str.replace(/легким/g, "");

console.log("3)" + str);


x = x.replace(/им/g, "о");
console.log(x);

let arr = [20, 33, 1, "Человек", 2, 3];

let output = 0;

arr.forEach(function (item) {
    if (typeof (item) == "number" && !isNaN(item)) {
        /* output = output + , но можно записать вот так, т.к. тоже самое:*/

        output += item ** 3;
    }
});
output = Math.sqrt(output);
console.log("4)" + output);


function check() {
    let text;
    for (let i = 0; i < 1; i++) {
        text = prompt("Введите что-нибудь");
        if (typeof (text) == "string") {} else {
            alert("Аргумент передан не как строка");
            i--;
        }
    }
    text = text.trim();

    if (text.length > 50) {
        text = text.slice(0, 50) + "...";
    }
    console.log(text);
}

check();
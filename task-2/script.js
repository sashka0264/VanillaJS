// 1 Сосчитать сумму всех элементов массива, если они являются числами:

/* let arr1 = [1, 2, '3x', 5];

let result = 0;

arr1.forEach( (item, i) => {
    if (typeof(item) === "number") {
        result = result + item;
    }
    if (i == arr1.length - 1) {
        console.log(result);
    }
}); */

// 2 Цель: создать функцию, которая проверяет, является ли строка палиндромом:

/* let str1 = '1abcdedcba1',
    str2 = 'abScded';

str1 = str1.toLowerCase();
str2 = str2.toLowerCase();
// Обязательно! Не забываей об этом!
    
let sortFunc = (str) => {
    let arr = str.split("");
    
    let arr1 = arr.reverse().join();

    arr = str.split("").join();
    // Только так можно обойти reverse,
    // так как он отражает массив и все, что с ним связано


    if (arr1 == arr) {
        console.log("true");
    } else {
        console.log("false");
    }
};
sortFunc(str1); */

// 3 Дан массив a c целыми элементами. Необходимо "сжать" а , выбросив из него 0

/*let arr = [1, 5, 4, 0, 0, 0, 3, 1, 10, 142];

let clear = (arr) => {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == 0) {
            arr.splice(i, 1);
            i--;
        } else if (i == arr.length - 1) {
            console.log(arr);
        }
    }
};
clear(arr);*/

// 4 Использование метода .join() и ! после каждого, кроме последнего

/*let x = ['!', 1, 0, 5, -11];

for (let i = 0; i < x.length; i++) {
    
    if (i !== x.length - 1) {
        if (x[i] !== "!") {
            x.splice((i+1), 0, "!");
            i++;
        }
    } else {
        console.log(x.join(""));
    }
}*/

// 5 Проверка массива на монотонность

/*let arr3 = [0, 1, 5, 9, 15],
    arr4 = [0, 1, 1, 5, 9, 9, 15],
    arr2 = [15, 8, 4, 2, 1],
    arr1 = [0, 1, 5, 15, 4],
    arr5 = [10, 0, 0, -20];

let x = "", z = "", y = "значения одинаковы";

for (let i = 0; i < arr1.length; i++) {
    if (i !== 0) {

        if (arr1[i] >= arr1[i-1]) {
           
        } else {
            x = "не возрастает";
            i = (arr1.lenght - 1);
        }
    } 
}
// Проверка, возрастает ли массив

for (let i = 0; i < arr1.length; i++) {
    if (i !== 0) {
        if (arr1[i] > arr1[i-1]) {
            z = "не убывает";
            i = (arr1.lenght - 1);
        }
    } 
}
// Проверка, убывает ли массив

for (let i = 0; i < arr1.length; i++) {
    if (i !== 0) {
        if (arr1[i] !== arr1[i-1]) {
            y = "значения разные";
            i = (arr1.lenght - 1);
        }
    } 
}

if (x == "не возрастает" && z == "не убывает" && y == "значения разные") {
    console.log("Массив НЕ монотонный");
} else {
    console.log("Массив монотонный");
}*/

// 6 Изучение конструкторов в игровом формате

/*class Soldier {
    constructor(name, weapon, damage, armor) {
        this.name = name;
        this.health = 300;
        this.weapon = weapon;
        this.damage = damage;
        this.armor = armor;
    }
}

let user1 = new Soldier("Санек", "СВД 1963", 1000, 0),
    user2 = new Soldier("Rudolf", "Люгер 1901", 200, 800);

let game = () => {
    let x = Math.floor((Math.random() * 10));

    if (x > 4) {
        console.log(`${user1.name} целится из ${user1.weapon}`);
        setTimeout(() => {
            console.log("Раздался громкий выстрел");
            user2.health = (user2.health + user2.armor) - user1.damage;
            setTimeout(() => {
                if (user2.health <= 0) {
                    console.log(`${user2.name} был убит`);
                } else {
                    console.log(`${user2.name} ранен`);
                    setTimeout(() => {
                        game();
                    }, 3000);
                }
            }, 2000);
        }, 3000);
    }

    if (x <= 4) {
        console.log(`${user2.name} целится из ${user2.weapon}`);
        setTimeout(() => {
            console.log("Раздался громкий выстрел");
            user1.health = (user1.health + user1.armor) - user2.damage;
            setTimeout(() => {
                if (user1.health <= 0) {
                    console.log(`${user1.name} был убит`);
                } else {
                    console.log(`${user1.name} ранен`);
                    setTimeout(() => {
                        game();
                    }, 3000);
                }
            }, 2000);
        }, 3000);
    }
};
game();*/

// 7 Создать массив arr = [] и записать в него 7 любых многозначных 
// чисел. Вывести в консоль только те, что начинаются с цифры 3 или 7
// (Должны присутствовать в массиве) 

/*let arr = [243, 11, 35, 0, 3000, 776, 910],
    arr2 = [];

let sortFunc = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toString()[0] == "3" || arr[i].toString()[0] == "7") {
            arr2.push(arr[i]);
        }
    }
};
sortFunc(arr);*/

// 8 У вас есть str = “урок-3-был слишком легким”. Сделать так, чтобы строка 
// начиналась с большой буквы. Замените все “-” на пробелы. Вывести в консоль 
// то, что получилось. Из получившейся строки вырезать слово “легким”, в этом 
// же слове заменить 2 последние буквы на букву “о”. Вывести на экран то, что 
// получилось 

/*let str = "урок-3-был слишком легким"; 
str = str[0].toUpperCase() + str.slice(1); 
str = str.replace(/-/g, " "); 
str = str.slice(19); 
str = str.replace("им", "о"); 
console.log(str);*/

// 9 У вас есть массив arr = [20, 33, 1, “Человек”, 2, 3]. Вывести в консоль 
// квадратный корень из суммы кубов его элементов (Да, человека нужно исключить) 

/*let arr = [20, 33, "1", "Человек", 2, 3];

let account = (arr) => {
    for (let i = 0; i < arr.length; i++) {

        if (typeof (+arr[i]) == "number" && isNaN(arr[i]) !== true) {
            arr[i] = arr[i] ** 3;
        } else {
            arr.splice(i, 1);
            i--;
        }
    }
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        result = result + arr[i];
    }
    console.log(Math.sqrt(result));
};
account(arr);*/

// 10 Создайте функцию, которая принимает 1 аргумент (название произвольное) 
// Если как аргумент передана не строка - функция оповещает об этом 
// пользователя. В полученной (как аргумент) строке функция должна убрать все 
// пробелы в начале и в конце. Если строка более 50 знаков - то после 50-го 
// символа часть текста скрывается и вместо них появляются три точки (...) 

/*let x = " 1234512345123451234512345123451234512345123451234512345 ";

let clearFucn = (x) => {
    if (typeof (x) == "string") {

        x = x.split("");
        x.reverse();

        let revFunc = () => {
            for (let i = 0; i < x.length; i++) {
                if (x[i] == " ") {
                    x.splice(i, 1);
                    i--;
                } else {
                    i = x.length - 1;
                }
            }
        };

        revFunc(x);
        x.reverse();
        revFunc(x);

        if (x[50] !== undefined) {

            x = x.slice(0, 50);
            x.push(".", ".", ".");
        }
        x = x.join("");
        console.log(x);
    } else {
        console.log("Аргумент передан не как строка");
    }
};
clearFucn(x);*/
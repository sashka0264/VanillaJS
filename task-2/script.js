// Сосчитать сумму всех элементов массива, если они являются числами:

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

// Цель: создать функцию, которая проверяет, является ли строка палиндромом:

/* let str1 = 'abcdedcba',
    str2 = 'abScded';
    
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

// Дан массив a c целыми элементами. Необходимо "сжать" а , выбросив из него 0

let arr = [1, 5, 4, 0, 0, 0, 3, 1, 10, 142];

arr.forEach( (item, i) => {
    
});
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

// 3 Дан массив a c целыми элементами. Необходимо "сжать" а , выбросив из него 0

/* let arr = [1, 5, 4, 0, 0, 0, 3, 1, 10, 142];

let clear = (arr) => {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == 0) {
    
            arr.splice(i, 1);
            i--;
            
        } 
        
        if (i == arr.length - 1) {
            console.log(arr);
        }
    
    }

};
clear(arr); */

// 4 Использование метода .join() и ! после каждого, кроме последнего

/* let x = ['!', 1, 0, 5, -11];

for (let i = 0; i < x.length; i++) {
    
    if (i !== x.length - 1) {

        if (x[i] == "!") {
            console.log("fuck you, user");
        } else {
            x.splice((i+1), 0, "!");
            i++;
        }
    
    } else {
        console.log(x.join());
    }
} */

// 5 Проверка массива на монотонность

let arr1 = [0, 1, 5, 9, 15], 
    arr2 = [0, 1, 1, 5, 9, 9, 15], 
    arr3 = [15, 8, 4, 2, 1], 
    arr4 = [0, 1, 5, 15, 4], 
    x = true;

let sortFunc = (arr) => {
    arr.forEach( (item, i) => {

        if (i !== 0) {
            if ( arr[i] >= arr[i-1] ) {
                
            } else {
                x = false;
            }
        } 

        if (i == arr.length-1) {
            console.log(x);
        }
    });
};

sortFunc(arr1);
sortFunc(arr2);
sortFunc(arr3);
sortFunc(arr4);
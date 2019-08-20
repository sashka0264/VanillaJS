// 1 Вывести все ключи/значения обьекта через цикл for in и добавить их в 
// новый обьект y.

/*let x = {
    x1: 5,
    x2: 323,
    x3: 0,
};

let y = {};

for (let key in x) {
    console.log(key, x[key]);
}

for (let key in x) {
    y[key] = x[key];
}
console.log(y);*/

// 2 Пусть x - это целое рандомное число от 0 до 59. Используя switch, в какую
//  четверть часа попадает это число (в первую, вторую, третью или четвертую)? 

/*let x = (Math.random()*59).toFixed();

switch (true) {
    case x < 15:
        console.log(`${x} < 15, значит первая четверть часа`);
        break;
    case (x >= 15) && (x < 30):
        console.log(`30 > ${x} >= 15, значит вторая четверть часа`);
        break;  
    case (x >= 30) && (x < 45):
        console.log(`45 > ${x} >= 30, значит третья четверть часа`);
        break;  
    case (x >= 45) && (x < 60):
        console.log(`60 > ${x} >= 45, значит четвертая четверть часа`);
        break;  
    default: 
        console.log(`Произошла ошибка, ${x}`);
}*/

// 3 В переменной day лежит какое-то число из интервала от 1 до 31. В переменной
// month лежит какое-то число из интервала от 1 до 12. Определите в какую декаду
//  месяца попадает это число (в первую, вторую или третью). И выпишите время 
// года, используя switch.

/*let day = ((Math.random() * 30) + 1).toFixed(),
    month = ((Math.random() * 11) + 1).toFixed(),
    resultM,
    resultD;

switch (true) {
    case (day >= 1) && (day <= 10):
        resultD = `Первая декада ${month} месяца`;
        break;
    case (day >= 11) && (day <= 20):
        resultD = `Вторая декада ${month} месяца`;
        break;
    case (day >= 21) && (day <= 31):
        resultD = `Третья декада ${month} месяца`;
        break;
    default: 
        resultD = "Ошибка";
        break;
}

switch (true) {
    case (month <= 11) && (month >= 9):
        resultM = "осень";
        break;
    case (month == 12) || ( (month >= 1) && (month <= 2) ):
        resultM = "зима";
        break;
    case (month <= 5) && (month >= 3):
        resultM = "весна";
        break;
    case (month <= 8) && (month >= 6):
        resultM = "лето";
        break;
    default: 
        resultM = "Ошибка";
        break;
}

console.log(`${resultD}, на дворе ${resultM}.`);*/

// 4 С помощью цикла while найдите сумму четных чисел от 1 до 1000.

/*let x = 0, result = 0;

while (x < 1000) {
    x++;

    if (x % 2 == 0) {
        result += x;
    }
}
console.log(result);*/

// 5 Дано число n = 1000. Делите его на 2 столько раз, пока результат деления 
// не станет меньше 50. Какое число получится? Посчитайте количество итераций,
// необходимых для этого (итерация - это проход цикла), и запишите его в 
// переменную num. 

/*let n = 1000,
    num = 0;

let x = () => {
    num++;
    n = n / 2;

    if (n > 50) {
        setTimeout(() => {
            x();
        }, 0);
    } else {
        console.log(num + " итераций, получится число " + n);
    }
};
x();*/

// 6 Даны переменные a и b. Отнимите от a переменную b и результат присвойте
// переменной c. Сделайте так, чтобы в любом случае в переменную c записалось 
// положительное значение. 

/*let a = (Math.random()*10 ).toFixed(),
    b = (Math.random()*10 ).toFixed(), 
    c;
c = Math.abs(a - b);
console.log(`|${a} - ${b}| = ${c}`);*/

// 7 Напишите функцию, которая будет находить факториал числа.

/*let factorialis = () => {
    let x = +prompt("Введите число для расчета:"),
        arr = [],
        result = 1;

    for (let i = 1; i <= x; i++) {
        arr.push(i);
    }
    arr.forEach( (i) => {
        if (i !== 0) {
            result = result * arr[i-1];
        }
    });
    console.log(`!${x} = ${result}`);
};
factorialis();*/

// 8 Дан объект. Получите массив его ключей.

/*let obj = {js:'test', jq: 'hello', css: 'world'};
let result,
    result2 = [];

result = Object.keys(obj);
console.log(result);

for (let key in obj) {
    result2.push(key);
}
console.log(result2);*/

// 9 Дано рандомное число от 1 до 10. Проверьте, простое ли оно.

/*let x = (Math.random()*9 + 1).toFixed(),
    result = `Число ${x} простое`;


for (let i = 2; i < x; i++) {
    
    if (x % i !== 0) {
        
    } else {
        result = `Число ${x} НЕ простое`;
    }   
}

if (x == 1) {
    result = `Число ${x} НЕ простое`;
}

console.log(result);*/

// 10 Найдите все года от 1 до 2019, сумма цифр которых равна 13. 

/*let arr = [];

for (let i = 1; i <= 2019; i++) {
    let result;
    result = (i + "").split("");

    let sum = 0;

    for (let y = 0; y < result.length; y++) {
        sum = sum + (+result[y]);
        if (sum == 13) {
            arr.push(i);
        }
    }
}
console.log(arr);*/



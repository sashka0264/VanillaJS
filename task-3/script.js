// 1 Дан массив с числами. Выведите его элементы, не используя цикл.

/*let arr = [12, 3, 231, 300, 342], 
    i = 0;

let cycle = () => {
    if (i < arr.length) {
       
       console.log(arr[i]);
       ++i;
       cycle();
    }
};
cycle();*/

// 2 Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
// опять сложите его цифры. И так, пока сумма не станет однозначным 
// числом (9 и менее).

/*let x = 999999;

let cycle = () => {
    let arr = (x + "").split("");
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = +sum + (+arr[i]);
    }

    x = sum;

    if (x >= 10) {
        cycle();
    } else {
        console.log(x + " - последнее число.");
    }
};
cycle();*/

// 3 Дана строка "ahb acb aeb aeeb adcb axeb". Напишите регулярку, которая 
// найдет строки ahb, acb, aeb по шаблону: буква a, любой символ, буква b.

/*let str = "ahb acb aeb aeeb adcb axeb";

str = str.replace(/a.b/g, "true");
console.log(str);*/

// 4 Дана строка 'aba aca aea abba adca abea'. Напишите регулярку, которая 
// найдет строки abba adca abea по шаблону: буква a, 2 любых символа, буква a.

/*let str = "aba aca aea abba adca abea";

str = str.replace(/a..a/g, "true");
console.log(str);*/

// 5 Дана строка 'aba aca aea abba adca abea'. Напишите регулярку, которая 
// найдет строки abba и abea, не захватив adca

/*let str = 'aba aca aea abba adca abea';

str = str.replace(/ab.a/g, "true");
console.log(str);*/

// 6 Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая 
// найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое 
// количество раз, буква 'a'.

/*let str = 'aa aba abba abbba abca abea';

str = str.replace(/ab+a/g, "true");
console.log(str);*/

// 7 Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая 
// найдет строки aa, aba, abba, abbba по шаблону: буква 'a', буква 'b' любое 
// количество раз (в том числе ниодного раза), буква 'a'.

/*let str = 'aa aba abba abbba abca abea';

str = str.replace(/ab*a/g, "true");
console.log(str);*/

// 8 Дана строка '*+ *q+ *qq+ *qqq+ *qqq qqq+'. Напишите регулярку, которая 
// найдет строки *q+, *qq+, *qqq+, не захватив остальные.

/*let str = '*+ *q+ *qq+ *qqq+ *qqq qqq+';

str = str.replace(/\*q+\+/g, "true");
console.log(str);*/

// 9 Дана строка 'aba accca azzza wwwwa'. Напишите регулярку, которая найдет 
// все строки по краям которых стоят буквы 'a', и заменит каждую из них на '!'.
// Между буквами a может быть любой символ (кроме a).

// let str = 'aba accca azzza wwwwa';

// str = str.replace(/a/g, "true");
// console.log(str);

// 10 Дана JSON строка '["Коля", "Вася", "Петя"]'. Преобразуйте ее в массив JavaScript 
// и выведите на экран элемент "Петя"
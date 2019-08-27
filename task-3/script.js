// 1 Дан массив с числами. Выведите его элементы, не используя цикл.

/*let arr = [12, 3, 231, 300, 342], 
    i = 0, 
    
    cycle = () => {
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

/*let x = 999999,

    cycle = () => {
        let arr = (x.toString()).split(""),
            sum = 0;

        for (let i = 0; i < arr.length; i++) {
            sum += (+arr[i]);
        }     
        
        x = sum;

        if (x >= 10) {
            cycle();
        } else {
            console.log(x + " - последнее число.");
        }
    };
cycle();*/

// 3 Дана строка 'aba aca aea abba adca abea'. Напишите регулярку, которая 
// найдет строки abba и abea, не захватив adca

/*let str = 'aba aca aea abba adca abea';

str = str.replace(/ab.a/g, "true");
console.log(str);*/

// 4 Создать переменную num = 266219. Вывести в консоль произведение цифр
// этого числа. Полученный результат возвести в степень 3, используя только 
// один оператор (Math.pow не подходит). Вывести на экран первые 2 цифры.

/*let num = 266219,
    arr = String(num).split(''),
    
	mult = arr.reduce( (previous, current) => {
		return (previous * current);
    }),
    
    exp = mult ** 3;

console.log(String(exp).substr(0, 2));*/

// 5 Есть 4 бутылки с жидкостями, в одной из них смертельный яд, так же есть 2 
// лабораторные мыши. Нужно определить в какой из бутылок яд за 24 часа. 
// Известно, что яд действует в течение 18 часов (может подействовать через час,
// а может и через 18 часов).

/*let mouse1 = [],
    mouse2 = [],
    bottle = [1, 2, 3, 4],
    toxic = Math.floor(Math.random() * 4) + 1;

bottle.forEach((item, i) => {
    if (item == toxic) {
        bottle[i] = "toxic";
    }
});

console.log(bottle);
mouse1.push(bottle[0], bottle[3]);
mouse2.push(bottle[2], bottle[3]);

if ((mouse1[0] == "toxic" || mouse1[1] == "toxic") &&
    (mouse2[0] == "toxic" || mouse2[1] == "toxic")) {
    console.log("Обе умерли, яд в 4-й бутылке");
} else if ((mouse1[0] !== "toxic" && mouse1[1] !== "toxic") &&
    (mouse2[0] !== "toxic" && mouse2[1] !== "toxic")) {
    console.log("Обе живы, яд во 2-й бутылке");
} else if (mouse1[0] == "toxic" || mouse1[1] == "toxic") {
    console.log("Яд в 1-й бутылке");
} else if (mouse2[0] == "toxic" || mouse2[1] == "toxic") {
    console.log("Яд в 3-й бутылке");
}*/

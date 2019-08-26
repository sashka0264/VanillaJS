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

// 5 
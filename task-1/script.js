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

// 3
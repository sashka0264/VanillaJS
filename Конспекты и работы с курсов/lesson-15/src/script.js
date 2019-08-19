window.addEventListener("DOMContentLoaded", function () {

// function User(name, age) {
//     this.name = name;
//     // this.age = age;
//     let userAge = age;

//     this.say = function() {
//         console.log(`Имя пользователя ${this.name}, возраст - ${userAge}`);
//     };

//     this.getAge = function() {
//         return userAge;
//     };

//     this.setAge = function(age) {
//         if (typeof(age) === "number" && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log("Недопустимое значение")
//         }
//     };
// }

// let ivan = new User("Ivan", 25);

// console.log(ivan.name);
// console.log(ivan.age);

// ivan.age = 30;

// console.log(ivan.getAge());
// ivan.setAge(50);
// console.log(ivan.getAge());

// ivan.say();

// Вторая тема - модули

// 1 метод

// let number = 1;

// ( function() {
//     let number = 2;
//     console.log(number);
//     return console.log(number + 3);
// }() );

// console.log(number);

// 2 метод

// Использование обьектного интерфейса
// Пишем модуль, записываем его в переменную и в нем возвращаем методы
// которые будут доступны снаружи

// let user = (function() {
//     let privat = function() {
//          console.log("I am privat");
//     };

//     return {
//         sayHello : function() {
//             console.log("Hello");
//         }
//     };
// }());

// console.log(user);
// console.log(user.sayHello());

// 3 метод 

// let user = (function() {
//     let privat = function() {
//          console.log("I am privat");
//     };

//     let sayHello = function() {
//         console.log("Hello");
//     }

//     return {
//         sayHello : sayHello
//     };
//     // таким способом я возвращаю функцию sayHello во внешний мир,
//     // иначе - он недоступен
// }());

// console.log(user);
// console.log(user.sayHello());


// Web Pack

function myModule() {
    this.hello = function() {
        return "Hello";
    };

    this.goodbye = function() {
        return "goodbye!";
    };
}

module.exports = myModule;

});
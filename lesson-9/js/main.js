window.addEventListener("DOMContentLoaded", function () {
  // 'use strict';

  // function User(name, id) {
  //   this.name = name;
  //   this.id = id;
  //   this.human = true;
  //   this.hello = function () {
  //     console.log("hello " + this.name);
  //   };
  // }

  // User.prototype.exit = function(name) {
  //   console.log("Пользователь " + this.name + " ушел");
  // };

  // let ivan = new User('Иван', 25),
  //   alex = new User("Алекс", 20);

  // console.log(User);



  // function showThis(a, b) {
  //   console.log(this);
  //   function sum() {
  //     console.log(this);
  //     // в строгом режиме не могут найти свой контекст вызова
  //     return a + b;
  //   }
  //   console.log(sum());
  // }
  // showThis(4,5);
  // showThis(5,5);

  // 1) Просто вызов функции, либо window, либо undefined, если строгий режим

  // let obj = {
  //   a : 20,
  //   b: 15,
  //   sum: function() {
  //     console.log(this);
  //     function shout() {
  //       console.log(this);
  //     }
  //     shout();
  //   }
  // };
  // obj.sum();



  // 2) Метод обьекта - this = обьект
  // 3) Конструктор (new) - this = новый созданный обьект


  // let user = {
  //   name: "John"
  // };

  // function sayName(surname){
  //   console.log(this);
  //   // получаем обьект john, так как функция ссылается на него 
  //   console.log(this.name + surname);

  // }

  // console.log(sayName.call(user, "Smith"));
  // console.log(sayName.apply(user, ["Snow"]));
  // // с помощью этих двух методов мы можем насильно привязать контекст вызова

  // function count(number) {
  //   return this * number;
  // }

  // let double = count.bind(2);
  // console.log(double(3));
  // console.log(double(10));
  // 4) указание конкретного контекста - call apply и bind

  let inputAge = document.getElementById('age');

  inputAge.addEventListener("input", function () {
    inputAge.value = inputAge.value.replace(/[^0-9+]/, '');
  });
// Вводить можно только цифры

  inputAge.addEventListener("blur", function () {
    showUser.call(this, "kolesnikov", "sasha");
  });

  function showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " +
      this.value);
  }

});
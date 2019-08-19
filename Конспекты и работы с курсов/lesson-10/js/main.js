window.addEventListener("DOMContentLoaded", function () {
  // 'use strict';

  class Options {
    constructor(height = 100, width = 200, bg = "red", fontSize = "20px", 
    textAlign = "center") {
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
      this.textAlign = textAlign;
    }
    getElement() {
      let newDiv = document.createElement('div'),
          text = "Какой-то текст";

      newDiv.innerHTML = `${text}`;
      document.body.appendChild(newDiv);

      newDiv.style.cssText =
        `border: 1px solid black; margin: auto;` +
        `height: ${this.height}px;` +
        `width: ${this.width}px;` +
        `background-color: ${this.bg};` +
        `font-size: ${this.fontSize}px;` +
        `text-align: ${this.textAlign};`;
    }
  }

  let input = document.querySelector("#input"),
      btn = document.querySelector("#btn");

  btn.addEventListener("click", () => {
    let arr = input.value.split(", ");
    console.log(arr);
    let result = new Options(...arr);
    result.getElement();
  });



  // `${какая-то переменная в коде}`
  // Интерполяция

  // function makeArray() {
  //   var items = [];

  //   for (let i = 0; i < 10; i++) {
  //     var item = function () {
  //       console.log(i);
  //     };
  //     items.push(item);
  //   }

  //   return items;
  // }

  // var arr = makeArray();
  // console.log(arr);
  // arr[1]();
  // // так мы вызываем вторую функцию
  // arr[3]();
  // arr[7]();

  // let, const


  // () => {};
  // let fun = () => {
  //   console.log(this);
  // };
  // fun();
  // // это пример стрелочной функции, она всегда анонимна, ей нельзя дать
  // // название, поэтому запустить ее внутри себя тоже нельзя

  // let obj = {
  //   number: 5,
  //   sayNumber: function () {
  //     let say = () => {
  //       console.log(this);
  //     };
  //     say();
  //   }
  // };
  // // У стрелочной функции нет своего контекста, его вообще НЕТ, он наследуется
  // // У РОДИТЕЛЯ ФУНКЦИИ
  // obj.sayNumber();



  // let btn = document.querySelector("#button");

  // btn.addEventListener("click", function () {
  //   let show = () => {
  //     console.log(this);
  //   };
  //   show();
  //   // Так как устрелочной функции нет своего контеста вызова, то она
  //   // выполняется непосредтсвенно по отношению к элементу, который мы 
  //   // кликнули, то есть this - это наш button
  // });


  // function calcOrDouble(number, basis) {
  //   basis = basis || 2; 
  //   console.log(number*basis);
  // }
  // calcOrDouble(3,5);
  // calcOrDouble(6);
  // // этот код в первом случе выведет 15, а во втором, так
  // // как basis не обьявлен, то он равен 2 автоматом
  // // это es5 формат

  // function calcOrDouble(number, basis = 2) {
  //   console.log(number * basis);
  // }
  // calcOrDouble(3, 5);
  // calcOrDouble(6);
  // // в es6 можно сделать проще, как вверху


  // class Rectangle {
  //   constructor(height, width = 20) {
  //     this.height = height;
  //     this.width = width;
  //   }
  //   //  тут точно так же, если width не будет передан как аргумент, то он
  //   // будет равен 20 по умолчанию
  //   calcArea() {
  //     return this.height * this.width;
  //   }
  // }

  // // const square = new Rectangle(10, 10);
  // const square = new Rectangle(10);
  // console.log(square.calcArea());

  // let video = ["youtube", "vimeo", "rutube"],
  //     blogs = ["wordpress", "blogger", "livejournal"],
  //     internet = [video, blogs, "vk", "facebook"];

  // console.log(internet);
  // в новом es6 есть оператор разворота - ...  Это Spread оператор

  // let video = ["youtube", "vimeo", "rutube"],
  //     blogs = ["wordpress", "blogger", "livejournal"],
  //     internet = [...video, ...blogs, "vk", "facebook"];

  // console.log(internet);



  // function log(a, b, c) {
  //   console.log(a);
  //   console.log(b);
  //   console.log(c);
  // }
  // let numbers = [2, 5, 7];

  // log(...numbers);
  // с помощью Spread оператора мы можем разворачивать массив
  // в функции
});
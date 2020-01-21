/* Типы данных в JavaScript?

1 булевый тип, строка, число, undefined, null, символ, BigInt

2 обьекты

Как работает цепочка протовипов?

у объектов нет prototype, только у Функций: str.__proto__ === String.prototype



*/


const person = new Object ({
  age: 10,
  speak: () => {
    console.log('Speak!')
  }
})

const lena = Object.create(person)

console.log(lena.__proto__);
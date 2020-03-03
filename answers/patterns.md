Паттерны бывают порождающие, структурные и поведенческие. В примерах ниже приведены не все, а самые простые для запоминания.

### Порождающие 

* Singleton - обьект, который существует в системе в единственном экземпляре.
```
const instance1 = {name: 'singleton'}, instance2 = {name: 'singleton'};
instance1 !== instance2 // создание обьектов с помощью литерала в JS - singleton

let instance;
class Counter {
  constructor() {
    if (!instance) instance = this;
    return instance;
  }
}
```
* Factory method - создание класса, который будет создавать обьекты на основании каких-то входных данных.
```
class CatsFactory {
  create(type) {
    if (type === "active") return new Cat("black", 15, "male");
    if (type === "calm") return new Cat("orange", 7, "female");
  }
}
class Cat {
  constructor(color, weight, gender) {
    this.color = color;
    this.weight = weight;
    this.gender = gender;
  }
}
const catsFactory = new CatsFactory();
const barsik = catsFactory.create("active");
console.log(barsik);
```
* Absract Factory - надстройка над другими фабриками (создание обьектов разных фабрик)
* Prototype - копирование обьектов с минимальными затратами памяти
```
class Cat {
  constructor(color) {
    this.color = color;
  }
  copy() {
    return new Cat(this.color)
  }
}
const prototypeCat = new Cat("black");
const cat2 = prototypeCat.copy();
console.log(cat2);
```
* Builder - создание надстройки над классом для вноса модификаций в обьект со стандартными свойствами
```
class Cat {
  constructor() {
    this.color = "black";
  }
}
class CatBuilder {
  constructor() {
     this.cat = new Cat();  
  }
  setColor(color) {
    this.cat.color = color;
    return this;
  }
  build() {
    return this.cat;
  }
}
const newCat = new CatBuilder()
  .setColor("white")
  .build();
console.log(newCat);
```
* Module - сокрытие данных с помощью новой области видимости
```
const module = (() => {
  let number = 0;
  const setNumber = () => {
    number += 1;
  }
  const getNumber = () => number;
  return {
    setNumber, 
    getNumber
  }
})()
module.setNumber();
module.getNumber();
```
* Decorator

### Поведенческие 

* Observer - создание механизма подписки, когда одни обьекты могут следить за состоянием других обьектов
```
class News {
  constructor(news) {
    this.news = news;
  }
  setNews(value) {
    this.news = value;
    this.notifyAll();
  }
  notifyAll() {...} // Метод, оповещающий всех о новой новости
}
```

### ФП
* Каррирование - приведение функций к одному аргументу.
* Композиция - передача функции вызов другой функции с определенным результатом (желательно написать функцию высокого порядка compose).
```
const upperCase = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const repeat = str => `${str} `.repeat(3);
const compose = (...fns) => {
  return init => {
    return fns.reduceRight((lastFuncRes, nowItem) => nowItem(lastFuncRes), init);
  } // init заносится автоматически в lastFuncRes при первом вызове
}
const withСompose = compose(
  repeat,
  exclaim,
  upperCase
);
console.log(withСompose("I love codings"));
```
* Функция высокого порядка - функция, которая либо принимает функцию, либо возвращает.
* Чистая функция - иммутабельная функция (не мутирует данные из внешнего мира), которая при одинаковых входных данных возвращает одинаковый результат соответственно.

### Специфика React 

* Render Props - передача в качестве пропа функцию на рендеринг какого-либо элемента.
```
const App = () => <Greet render={(name) => <h2>Привет, {name}</h2>} />
const Greet = ({ render }) => <>
  <h1>Привет, Маша</h1>
  { render("Саша") }
</>
```
* Lift state up - поднятие состояние компонентов до ближайшего общего предка, если оно нужно нескольким компонентам (вспомни, как ты поднимал state до уровень App на все приложение).

* Container/Component - отделение логики от представления.

## Flux
Flux - методология, идея которой в отделении состояния компонентов от UI. Любой компонент может взаимодействовать с этим состоянием. Flux - это VIEW, STORE, DISPATCHER - ACTION. Все это составляет один поток.

**Паттерны проектирования - MVC, MVVM, MVP.**
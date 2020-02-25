### Основные виды
Структурные, порождающие и поведенческие.

### Примеры
* Singleton (обьект, который существует в системе в единственном экземпляре)
```
const instance1 = {name: 'singleton'}, instance2 = {name: 'singleton'};
instance1 !== instance2 // true

class ShredengersCat {
  constructor(state = true) {
    this.alive = state;
  }
}
function getCat(cat) {
  if (cat) return cat;
  return new ShredengersCat();
}
let cat = new ShredengersCat();
getCat(cat);
```
* Factory method (создание класса, который будет создавать обьекты на основании каких-то входных данных)
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
* Module
* Decorator

### ФП

* Каррирование - приведение функций к одному аргументу.
* Композиция функций - передача функции вызов другой функции с определенным результатом.
* Функция высшего порядка - функция, которая либо принимает функцию, либо возвращает.
* Чистая функция - иммутабельная функция (не мутирует данные из внешнего мира), которая при одинаковых входных данных возвращает одинаковый результат соответственно.

### React 

* Render Props - передача в качестве пропа функцию на рендеринг какого-либо элемента.
```
const App = () => <Greet render={(name) => <h2>Привет, {name}</h2>} />
const Greet = ({ render }) => <>
  <h1>Привет, Маша</h1>
  { render("Саша") }
</>
```
* Lift state up - поднятие состояние компонентов до ближайшего общего предка, если оно нужно нескольким компонентам (вспомни, как ты поднимал state до уровень App на все приложение).

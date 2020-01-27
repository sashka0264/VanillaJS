/* Типы данных в JavaScript?

1 булевый тип, строка, число, undefined, null, символ, BigInt

2 обьекты

Как работает цепочка протовипов?

у объектов нет prototype, только у Функций: str.__proto__ === String.prototype



*/

const createProgrammer = (name) => {
  const programmer = {name: name}
  return {
    ...programmer,
    ...canCode(programmer)
  }
}
const canCode = ({name}) => {
  return {
    code: () => console.log(`${name} is coding...`)
  }
}
const canReact = (name) => {
  return {
    react: () => console.log(`${name} knows React...`)
  }
}
const canNode = (name) => {
  return {
    node: () => console.log(`${name} knows Node...`)
  }
}
const createFullStack = (name) => {
  return {
    ...createProgrammer(name),
    ...canReact(name),
    ...canNode(name),
  }
}

const sasha = createFullStack("Sasha");
sasha.react();
sasha.node();
sasha.code();
let myModule = require('./script');
// наша коробка для того, что экспортируется

// 

let newModule = new myModule();

console.log(newModule.hello());
console.log(newModule.goodbye());


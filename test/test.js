function sayName(name) {
    let message = "My name is" + name;
    return message;
}

let arr = [5, 3, -1];
let result = arr.reduce(function(sum, elem) {
    return sum + elem;
});

// Сам тест

// let assert = require('chai').assert;


describe("sayName", function() {
    
    it("Получаем фразу с новым именем", function() {
        assert.typeOf(sayName("DSsimon"), "string");
    });
});

describe("arr", function() {
    
    it("Получаем сумму чисел массива", function() {
        assert.equal(result, 7);
    });
});
// Сам тест 


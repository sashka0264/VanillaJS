function main() {
    'use strict';

    let firstInput = document.querySelector("#firstInput"),
        secondInput = document.querySelector("#secondInput"),
        thirdInput = document.querySelector("#thirdInput"),
        fourthInput = document.querySelector("#fourthInput"),
        date = new Date(),
        days = [
        'воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 
        'суббота'],
        fifthInput = document.querySelector("#fifthInput"),
        button1 = document.querySelector("#button1");
    

    var day = date.getDay();

    
    function showDay(day) {
        return days[day];
    }
    

    secondInput.value = showDay(day);


    function addZero(num) {
        if (num >= 0 && num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }
    

    firstInput.value = (date.getHours() + ':' + 
    date.getMinutes() + ':' + 
    addZero(date.getSeconds()) + ' ' + 
    addZero(date.getDate()) + '.' + 
    addZero(date.getMonth() + 1) + '.' + 
    date.getFullYear());
    days = date.getDate();


    button1.addEventListener("click", function(){
        let a = thirdInput.value;
        a = a.replace(/"."/, "-");
        a = a.replace(/" "/, "T");
        let b = fourthInput.value;
        b = b.replace(/"."/, "-");
        b = b.replace(/" "/, "T");
        
        a = Date.parse(a); 
        b = Date.parse(b); 
    
        var result = a - b; //найдем разницу в миллисекундах
        result = result / (1000 * 60 * 60); //переведем миллисекунды в часы
        fifthInput.value = result + " часов";
    });
}
main();
setInterval(main, 500);
 
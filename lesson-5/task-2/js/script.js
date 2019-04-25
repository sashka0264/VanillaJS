function main(){
    'use strict';

    // let box = document.getElementById("box"),
    // btn = document.getElementsByTagName("button"),
    // circle = document.getElementsByClassName("circle"),
    // heart = document.querySelectorAll(".wrapper .heart"),
    // таким способом, мы будем искать .heart только внутри класса .wrapper
    // также можно использовать метод forEach и перебирать наши элементы
    // oneHeart = document.querySelector(".heart");
    
    
    // console.log(btn[2]);
    // console.log(heart[1]);
    
    // box.style.backgroundColor = "blue";
    // btn[0].style.borderRadius = "100%";
    // btn[1].style.backgroundColor = "red";
    // btn[2].style.backgroundColor = "green";
    
    // for (let i = 0; i < heart.length; i++) {
    //  i < heart.length - таким кодом, мы ставим условие, что цикл будет идти
    // пока элементы не закончатся
        // heart[i].style.backgroundColor = "blue";
    // цикл окрасит каждый элемент в синий
    // }
    
    // вместо цикла проще использовать этот метод:
    // heart.forEach(function(item, i, hearts) {
        // hearts нужно называть иначе, это массив, не heart
        // item.style.backgroundColor = "blue";
    // });
    
    // let div = document.createElement("div"),
    //     text = document.createTextNode("Тут какой-то текст");
        // Это не тег, а просто текстовый узел
    // console.log(text);
    // console.log(div);
    
    // div.classList.add("black");
    // так можно какому-то элементу добавить класс
    // document.body.appendChild(div);
    // wrapper.appendChild(div);
    // мы берем родителя и добовляем наш элемент в конец этого элемента
    // document.body.insertBefore(div, cirle[0]);
    // так можно поменять элементы местами
    // document.body.removeChild(cirle[1]);
    // удаляем элемент
    // document.body.replaceChild(btn[1], cirlce[1]);
    // Замена одного элемента на другой, меняем кнопку на кружек
    // div.innerHTML = "Hello world!";
    // div.innerHTML = "<h1>Hello world!</h1>";
    //  так можно написать что-либо в html
    // div.textContent = "тут будет только текст";
    
    let menu = document.querySelector(".menu"),
        menuItemFive = document.createElement("li"),
        menuItem = document.querySelectorAll(".menu-item"),
        title = document.querySelector("#title"),
        adv = document.querySelector(".adv"),
        column = document.querySelectorAll(".column"),
        promptInDoc = document.querySelector("#prompt");
    // тут мы просто создали какой-то элемент
    
    

    menu.appendChild(menuItemFive);
    // ставим этот элемент в конец нашего меню
    
    menuItemFive.textContent = "Пятый пункт";
    menuItemFive.classList.add("menu-item");
    // пишем текст и добавляем нужные классы
    
    menu.insertBefore(menuItem[2], menuItem[1]);
    // replaceChild тут не сработал, почему не понимаю
    
    title.innerHTML = "Мы продаем только <br> <b>подлинную</b> технику Apple";
    
    column[1].removeChild(adv);
    
    
    
    let x = prompt("Введите свое отношение к технике Apple");
    promptInDoc.textContent = x;
}

main();




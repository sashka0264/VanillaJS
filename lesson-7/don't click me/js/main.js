function main() {
    'use strict';
    
    // setTimeout(функция запуска,  задержка);
    // let timerId = setTimeout(sayhello, 3000);
    // clearTimeout(timerId);
    // так мы удаляем наш таймер 

    // let timerId = setInterval(sayhello, 3000);

    // function sayhello(){
    //     console.log("hello")
    // }

    // let timerId = setTimeout(function log() {
    //     console.log("hello");

    //     setTimeout(log, 2000);
        // функция вызывает сама себя через 2 сек спустя, после
        // выполняения предыдущих действий
    // });

    let btn = document.querySelector("#btn"),
        cube = document.querySelector("#cube");

    function bemind() {
        let pos = 0;

        let id = setInterval(frame, 10);

        function frame() {
            if (pos == 249) {
                clearInterval(id);
                bemind2();
            } else {
                pos++;
                cube.style.top = pos + "px";
                cube.style.left = pos + "px";
            }
        }
    }

    function bemind2() {
        let pos =249;

        let id = setInterval(frame, 10);

        function frame() {
            if (pos == 0) {
                clearInterval(id);
                
                bemind();
            } else {
                pos--;
                cube.style.top = pos + "px";
                cube.style.left = pos + "px";
            }
        }

    }

    
    btn.addEventListener("click", bemind);
}
main();
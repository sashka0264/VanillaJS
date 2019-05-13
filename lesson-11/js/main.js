window.addEventListener("DOMContentLoaded", function () {

  // let options = {
  //   width: 1366,
  //   height: 768,
  //   background: "red",
  //   font: {
  //     size: "16px",
  //     color: "white"
  //   }
  // };
  
  // // console.log(JSON.stringify(options));
  // // JSON - встроенный обьект, который есть в JS
  // // все наши свойства/строки записываются в двойные ковычки, а ключи нет
  // // к тому же все превращается в одну строку с помощью
  // // stringify, а обратно:
  // console.log( JSON.parse(JSON.stringify(options)) );
  // // теперь мы получили обьект

  let inputRub = document.querySelector("#rub"),
      inputUsd = document.querySelector("#usd");

  inputRub.addEventListener("input", () => {
    let request = new XMLHttpRequest();

    // request.open(method, url, async, login, pass);
    // может принимать 5 различных аргументов
    // он производит настройку нашего ajax запроса 
    // async по умолчанию стоит true, но если поставить false
    // то пока сервер не ответит, ничего не будет дальше работать

    request.open("GET", "js/main.json");
    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    request.send();

    // status
    // statusText
    // responseText 
    // response
    // readyState 

    request.addEventListener("readystatechange", function() {
      // можно было использовать load, но оно менее гибкое
      if (request.readyState === 4 && request.status == 200) {
        let data = JSON.parse(request.response);

        inputUsd.value = (inputRub.value / data.usd).toFixed(2);
        
      } else {
        inputUsd.value = "Что-то пошло не так";
      }
      // readyState возвращает текущее состояние объекта XMLHttpRequest
      // request.status определяет, в каком состоянии наш сервер
      // нас интересует двухсотый статус
      // .response - это ответ от сервера
    });
  });

  inputUsd.addEventListener("input", () => {
    let request = new XMLHttpRequest();
    request.open("GET", "js/main.json");
    // request.open(method, url, async, login, pass);
    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    request.send();

    request.addEventListener("readystatechange", function() {
  
      if (request.readyState === 4 && request.status == 200) {
        let data = JSON.parse(request.response);

        inputRub.value = (data.usd / inputUsd.value).toFixed(2);
        
      } else {
        inputRub.value = "Что-то пошло не так";
      }

    });
  });

});
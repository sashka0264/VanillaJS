window.addEventListener("DOMContentLoaded", function () {

  let input = document.querySelector('#input');

  input.addEventListener("input", function() {
    if (input.value.length == 2) {
      input.value = input.value + "(";
    }
    if (input.value.length == 6) {
      input.value = input.value + ")";

    }
    // Как этот баг исправить? Когда пытаюсь стереть скобки, сделать этого я уже
    // не могу
  });

  input.addEventListener("focus", () => {
    input.value = '+';
    // Вставляю + как значение вместо всего, что внутри
  });

  input.addEventListener("keypress", event => {
    // Событие нажатия каждой клавиши 

    if (!/\d/.test(event.key)) {
      event.preventDefault();
    }
    // то есть мы проверяем соответствия наш шаблон символов, которые
    // можно использовать - с нажатой клавишей, точнее, с ее ключем event.key 
    // и, если соответствия этого нет, то мы отменяем обычное действие браузера,
    // то есть, мы отменяем ввод символа. Простыми словами, мы возвращаем false 
    // для event
  });
});
window.addEventListener('DOMContentLoaded', () => {

  let alphabet = ["а", "б", "в", "г", "д", "е", "ё", "ж",
    "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с",
    "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я"
  ];

  const createAlphabet = () => {
    let placeForABC = document.querySelector("#ABC"),
      elemUl = document.createElement("ul");

    for (let i = 0; i < alphabet.length; i++) {
      elemUl.id = "alphabet";

      let elemLi = document.createElement("li");
      elemLi.innerHTML = alphabet[i];
      check();
      elemUl.appendChild(elemLi);
      placeForABC.appendChild(elemUl);
    }
  };

  let topic,
    chosenTopic,
    word,
    invent = [],
    lives,
    counter,
    // количество угаданных букв
    space;

  let showLives = document.querySelector("#lives"),
    showTopic = document.querySelector("#topicName"),
    getHelp = document.querySelector("#help"),
    showKey = document.querySelector("#key"),
    reset = document.querySelector("#reset");

  const selectTopic = () => {

    if (chosenTopic === topic[0]) {

      let newText = document.createElement("span");
      newText.textContent = "Страны";
      showTopic.appendChild(newText);

    } else if (chosenTopic === topic[1]) {

      let newText = document.createElement("span");
      newText.textContent = "Животные";
      showTopic.appendChild(newText);

    } else if (chosenTopic === topic[2]) {

      let newText = document.createElement("span");
      newText.textContent = "Одежда";
      showTopic.appendChild(newText);

    }
  };

  const result = () => {
    let wordHolder = document.querySelector("#word"),
      correct = document.createElement("ul");

    for (let i = 0; i < word.length; i++) {
      correct.id = "my-word";
      // guess - это наш li, содержащий букву
      let guess = document.createElement("li");
      guess.classList.add("guess");

      if (word[i] === "-") {
        // если наша буква равна "-", то есть это наш пробел, то:
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }
      invent.push(guess);

      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  };
  /* С помощью этой функции мы перебираем буквы в слове через цикл и помещаем
  каждую букву в li
  li помещаем в ul, 
  а ul в наш div на странице с id="word", 
  потом пушим наши буквы в invent = [] и 
  шифруем от пользователя*/

  const commentLives = () => {
    showLives = `У Вас ${lives} жизней`;
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }

    for (let i = 0; i < invent.length; i++) {
      if ((counter + space) === invent.length) {
        showLives.innerHTML = "Victory";
      }
    }
  };










  // CANVAS

  let canvas = () => {
    let myStickman = document.querySelector("#stickman"),
      context = myStickman.getContext("2d");
    // Так превращаем элемент myStickman в полотно для рисования 2d
    context.beginPath();
    // мы начинаем рисовать
    context.strokeStyle = "white";
    // указываем цвет линий
    context.lineWidth = 2;
    // указываем ширину линий в px
  };
  // Основные настройки canvas



  const animate = () => {
    let drawMe = lives;
    drawArray[drawMe](drawMe);
  };



  const head = () => {
    let myStickman = document.querySelector("#stickman"),
      context = myStickman.getContext("2d");

    context.beginPath();

    context.arc(60, 25, 10, 0, Math.PI * 2, true);

    context.stroke();
    // отрисовка головы
  };


  const draw = ($pathFromx, $pathFromy, $pathTox, $pathToy) => {
    let myStickman = document.querySelector("#stickman"),
      context = myStickman.getContext("2d");

    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
  };

  const frame1 = () => {
    draw(0, 150, 150, 150);
  };

  const frame2 = () => {
    draw(10, 0, 10, 600);
  };

  const frame3 = () => {
    draw(0, 5, 70, 5);
  };

  const frame4 = () => {
    draw(60, 5, 60, 15);
  };

  const torso = () => {
    draw(60, 36, 60, 70);
  };

  const rightArm = () => {
    draw(60, 46, 100, 50);
  };

  const leftArm = () => {
    draw(60, 46, 20, 50);
  };

  const rightLeg = () => {
    draw(60, 70, 100, 100);
  };

  const leftLeg = () => {
    draw(60, 70, 20, 100);
  };

  let drawArray = [rightLeg, leftLeg, rightArm, leftArm, torso,
    head, frame4, frame3, frame2, frame1
  ];


  // CANVAS


  const check = () => {

    let elemLi = document.querySelectorAll("li");

    elemLi.forEach((item) => {

      item.addEventListener("click", (e) => {
        // console.log(e.target)
        let context = ((e.target).innerHTML);

        (e.target).classList.add("active");

        for (let i = 0; i < word.length; i++) {
          // проверяем каждую букву слова на наличие нашей буквы
          if (word[i] === context) {
            invent[i].innerHTML = context;
            counter += 1;
          }
        }

        let j = word.indexOf(context);
        // проверяем наличие буквы в слове
        if (j === -1) {
          lives -= 1;
          commentLives();
          animate();
        } else {
          commentLives();
        }
      });
    });


  };



  let arr = [2, 3, 4];
  arr.push(2);
  console.log(arr);






  const play = () => {
    topic = [
      ["Америка", "Африка", "Россия", "Исландия", "Австралия"],
      ["Суслик", "Лошадь", "Кабан", "Кошка", "Скунс"],
      ["Джинсы", "Рубашка", "Юбка", "Свитер", "Пижама"]
    ];

    chosenTopic = topic[Math.floor(Math.random() * topic.length)];
    word = chosenTopic[Math.floor(Math.random() * chosenTopic.length)];
    word = word.replace(/ /g, "-");

    console.log(word);
    lives = 10;
    counter = 0;
    space = 0;

    createAlphabet();
    selectTopic();
    result();
    commentLives();
    canvas();
  };
  play();

  // getHelp.addEventListener('click', function () {

  //   hints = [
  //     ["Подсказка", "Подсказка", "Подсказка", "Подсказка", "Подсказка", "Подсказка", "Подсказка"],
  //     ["Подсказка", "Подсказка", "Подсказка", "Подсказка", "Подсказка"],
  //     ["Подсказка", "Подсказка", "Подсказка", "Подсказка", "Подсказка"]
  //   ];

  //   // Определяем выбранную категорию и выбранное слово
  //   let categoryIndex = categories.indexOf(chosenCategory);
  //   let hintIndex = chosenCategory.indexOf(word);
  //   // И из этих параметров берем нужную подсказку
  //   showClue.innerHTML = "Подсказка: - " + hints[categoryIndex][hintIndex];
  // });

  // // Сброс игры
  // reset.addEventListener('click', function () {
  //   // Удаляем старое слово
  //   correct.parentNode.removeChild(correct);
  //   letters.parentNode.removeChild(letters);
  //   // Убираем подсказку
  //   showClue.innerHTML = "";
  //   // Очищаем поле для рисования
  //   context.clearRect(0, 0, 400, 400);
  //   // Опять вызываем функцию игры
  //   play();
  // });

});
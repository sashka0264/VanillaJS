window.addEventListener('DOMContentLoaded', function() {

let alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж',
        'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с',
        'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', "щ", "ъ", "ы", "ь", "э", "ю", "я"];
  
let categories,         // Массив с категориями
    chosenCategory,     // Выбранная категория
    word,              // Выбранное слово
    geusses = [ ],      // Массив с бквами слова
    lives,             // Количество жизней
    counter,           // Количество правильных угадываний
    space;              // Количество пробелов в слове

  // Получаем элементы со страницы
  let showLives = document.getElementById("mylives"),
      showCatagory = document.getElementById("scatagory"),
      getHint = document.getElementById("hint"),
      showClue = document.getElementById("clue"),
      reset = document.getElementById('reset');

  // Создаем алфавит на странице
  function buttons () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (let i = 0; i < alphabet.length; i++) {
      // Перебираем буквы алфавита и помещаем их в <li> 
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.innerHTML = alphabet[i];
      check();
      //Все это помещаем на страницу
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
    
  
  // Определяем выбранную категорию
  function selectCat() {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "Выбранная категория: Животные";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "Выбранная категория: Страны";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "Выбранная категория: Деревья";
    }
  }

  // Создаем слово для угадывания на странице
  function result () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (let i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      //если слово содержит пробел - ставим тире, если нет - псевдо _
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      //пушим буквы в массив
      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // Показываем состояние игры на экране
   function comments() {
    showLives.innerHTML = `У вас ${lives} жизней`;
    if (lives < 1) {
      showLives.innerHTML = "Игра окончена";
    }
    //Если пробелы+угаданные равны длине слова - победа
    for (let i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "Вы победили!";
      }
    }
  }

  //Рисуем человечка
  function animate() {
    var drawMe = lives ;
    drawArray[drawMe]();
  }

  
   // Создаем поле для рисования
  canvas =  function(){

    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };
  //Используем функциональные выражения для передачи в массив
    head = function(){
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
    }
    
  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke(); 
}

   frame1 = function() {
     draw (0, 150, 150, 150);
   };
   
   frame2 = function() {
     draw (10, 0, 10, 600);
   };
  
   frame3 = function() {
     draw (0, 5, 70, 5);
   };
  
   frame4 = function() {
     draw (60, 5, 60, 15);
   };
  
   torso = function() {
     draw (60, 36, 60, 70);
   };
  
   rightArm = function() {
     draw (60, 46, 100, 50);
   };
  
   leftArm = function() {
     draw (60, 46, 20, 50);
   };
  
   rightLeg = function() {
     draw (60, 70, 100, 100);
   };
  
   leftLeg = function() {
     draw (60, 70, 20, 100);
   };
  //Это массив функций для отрисовки элементов
  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 


  // Проверяем буквы на наличие при клике
  function check() {
    list.addEventListener('click', function() {
      // ПОлучаем именно ту букву, на которую нажали
      let context = (this.innerHTML);
      this.setAttribute("class", "active");
      for (let i = 0; i < word.length; i++) {
        // Если в слове есть такая буква - вставляем её на страницу
        if (word[i] === context) {
          geusses[i].innerHTML = context;
          counter += 1;
        } 
      }
      let j = word.indexOf(context);
      //Если буква не найдена
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    })
  }
  
    
  // Главная функция, которая запускает все дополнительные и содержит стартовые параметры
  function play(){
    categories = [
        ["Жираф", "медведь","заяц", "зебра"],
        ["австралия", "албания", "марокко", "коста-рика", "уругвай"],
        ["лох серебристый", "остролист", "береза", "осина", "пальма"]
    ];

    // Случайным образом выбираем категорию и слово
    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-"); //все пробелы глобально меняем на -
    console.log(word);
    buttons();

    geusses = [ ]; //Выбранное слово
    lives = 10;
    counter = 0; //Угаданные
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  }

  play();
  
  // Подсказка

    hint.addEventListener('click',function() {

    hints = [
        ["Подсказка", "Подсказка", "Подсказка", "Подсказка", "Подсказка", "Подсказка", "Подсказка"],
        ["Подсказка", "Подсказка", "Подсказка", "Подсказка", "Подсказка"],
        ["Подсказка", "Подсказка", "Подсказка", "Подсказка", "Подсказка"]
    ];

    // Определяем выбранную категорию и выбранное слово
    let categoryIndex = categories.indexOf(chosenCategory);
    let hintIndex = chosenCategory.indexOf(word);
    // И из этих параметров берем нужную подсказку
    showClue.innerHTML = "Подсказка: - " +  hints [categoryIndex][hintIndex];
  });

   // Сброс игры
  reset.addEventListener('click', function() {
    // Удаляем старое слово
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    // Убираем подсказку
    showClue.innerHTML = "";
    // Очищаем поле для рисования
    context.clearRect(0, 0, 400, 400);
    // Опять вызываем функцию игры
    play();
  });

})



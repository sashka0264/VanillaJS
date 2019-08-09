let map = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
	[1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1],
	[1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1],
	[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
	[1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
	[1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
	[1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 1, 1, 1, 1, 1],
	[1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 4, 2, 2, 1, 2, 2, 5, 2, 2, 2, 2, 2, 1],
	[1, 1, 1, 1, 1, 2, 1, 2, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1],
	[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
	[1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1],
	[1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1],
	[1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
	[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

let pacman = {
	x: 16,
	y: 10
}
// 10 строка, 16 элемент

let ghost = {
	x: 10,
	y: 10
}



var el = document.getElementById('world');
// находим по id наш div с картой

function drawWorld() {
	el.innerHTML = '';
	// сначала очищаем все

	for (let i = 0; i < map.length; i++) {
		// запусаем цикл, пока не перем все массивы в массиве, их 18

		for (let x = 0; x < map[i].length; x++) {
			// запускаем еще один цикл, он переберает содержимое каждого 
			// массива в массиве map
			if (i == 1) {
				// console.log(map[i][x]);
			}
			// получим 3 единицы, остальные 2, т.к. выбрали вторую строку
			
			if (map[i][x] == 1) {
				// 1 - блок, по которому нельзя пройти
				el.innerHTML = el.innerHTML + "<div class='wall'></div>";
			} else if (map[i][x] == 2) {
				// 2 - квадрат с монеткой
				el.innerHTML = el.innerHTML + "<div class='coin'></div>";
			} else if (map[i][x] == 3) {
				// 3 - это пустой квадрат
				el.innerHTML = el.innerHTML + "<div class='ground'></div>";
			} else if (map[i][x] == 4) {
				// 4 - это наш монстр
				el.innerHTML = el.innerHTML + "<div class='ghost'></div>";
			} else if (map[i][x] == 5) {
				// 5 - это мы
				el.innerHTML = el.innerHTML + "<div class='pacman'></div>";
			}
		}
		el.innerHTML = el.innerHTML + "<br>";
		// После выполненного цикла над одной строкой строкой
		// ставим br 
		// и делаем перенос br
	}
}
// Рисуем наш мир
drawWorld();
console.log(map[pacman.y][pacman.x - 4]);

document.addEventListener("keydown", function (event) {
	// console.log(event);
	if (event.keyCode === 37) { // PACMAN MOVE LEFT
		// если нажата клавиша влево

		if (map[pacman.y][pacman.x - 1] !== 1 && map[pacman.y][pacman.x - 1] !== 4) {
			// если цифра, в которой находится пакмен - 1, то есть смещение влево
			// не равно 1 - блок, по которому нельзя пройти
			// И
			// не равно 4 - это наш монстр, то 

			map[pacman.y][pacman.x] = 3;
			// бывшее положение пакмена теперь пустой квадрат
			pacman.x--;
			// координата х меньше на 1
			map[pacman.y][pacman.x] = 5;
			// пакмен - это квадрат, где мы находимся
			drawWorld();
			// эта функция перерисовывает координаты
		}
	} else if (event.keyCode === 38) { // PACMAN MOVE UP
		if (map[pacman.y - 1][pacman.x] !== 1 && map[pacman.y - 1][pacman.x] !== 4) {
			map[pacman.y][pacman.x] = 3;
			pacman.y = pacman.y - 1;
			map[pacman.y][pacman.x] = 5;
			drawWorld();
		}
	} else if (event.keyCode === 39) { // PACMAN MOVE RIGHT
		if (map[pacman.y][pacman.x + 1] !== 1 && map[pacman.y][pacman.x + 1] !== 4) {
			map[pacman.y][pacman.x] = 3;
			pacman.x = pacman.x + 1;
			map[pacman.y][pacman.x] = 5;
			drawWorld();
		}
	} else if (event.keyCode === 40) { // PACMAN MOVE DOWN
		if (map[pacman.y + 1][pacman.x] !== 1 && map[pacman.y + 1][pacman.x] !== 4) {
			map[pacman.y][pacman.x] = 3;
			pacman.y = pacman.y + 1;
			map[pacman.y][pacman.x] = 5;
			drawWorld();
		}
	}

});


// document.onkeyup = function (event) {
// 	if (event.keyCode === 37) { //Ghost move on Pacman left
// 		if (map[ghost.y][ghost.x - 1] !== 1) {
// 			map[ghost.y][ghost.x] = 2;
// 			ghost.x = ghost.x - 1;
// 			map[ghost.y][ghost.x] = 4;
// 			drawWorld();
// 		}
// 	} else if (event.keyCode === 38) { //Ghost move on Pacman up
// 		if (map[ghost.y - 1][ghost.x] !== 1) {
// 			map[ghost.y][ghost.x] = 2;
// 			ghost.y = ghost.y - 1;
// 			map[ghost.y][ghost.x] = 4;
// 			drawWorld();
// 		}
// 	} else if (event.keyCode === 39) { //Ghost move on Pacman right
// 		if (map[ghost.y][ghost.x + 1] !== 1) {
// 			map[ghost.y][ghost.x] = 2;
// 			ghost.x = ghost.x + 1;
// 			map[ghost.y][ghost.x] = 4;
// 			drawWorld();
// 		}
// 	} else if (event.keyCode === 34) { //Ghost move on Pacman down
// 		if (map[ghost.y + 1][ghost.x] !== 1) {
// 			map[ghost.y][ghost.x] = 2;
// 			ghost.y = ghost.y + 1;
// 			map[ghost.y][ghost.x] = 4;
// 			drawWorld();
// 		}
// 	}
// 	console.log(map)
// };

// function addScore(nScore) { 
// 	score += nScore;
// 	if (score >= 10000 && score - nScore < 10000) { 
// 		lives += 1;
// 	}
// };

// function theScore() { 
// 	return score;
// };
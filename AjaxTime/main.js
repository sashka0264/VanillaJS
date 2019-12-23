let input = document.querySelector("#time"),
    mode = document.querySelector("#mode"),
    divDate = document.querySelector(".date"),
    country = document.querySelector("#country");

let addZero = (num) => {
  if (num >= 0 && num < 10) {
    return '0' + num;
  } else {
    return num;
  }
};

let liveTime = () => {
  let request = new XMLHttpRequest();
  // главный обьект для работы с запросом

  if (country.options[country.selectedIndex].value == "Россия") {
    request.open("GET", "http://worldtimeapi.org/api/timezone/Europe/Moscow");
  }

  if (country.options[country.selectedIndex].value == "Токио") {
    request.open("GET", "http://worldtimeapi.org/api/timezone/Asia/Tokyo");
  }

  if (country.options[country.selectedIndex].value == "Нью-Йорк") {
    request.open("GET", "http://worldtimeapi.org/api/timezone/America/New_York");
  }


  request.send();
  // выполняем запрос

  request.addEventListener("readystatechange", function () {

    if (request.readyState === 4 && request.status == 200) {
      let data = JSON.parse(request.response);

      // data = Date.parse(data);
      
      data = data.datetime.substring(0, data.datetime.length - 6);

      // console.log(Date.parse(data));
      // input.value = Date.parse(data);

      let nowDate = new Date(Date.parse(data));

      let hours = nowDate.getHours();
      
      if (mode.options[mode.selectedIndex].value == "24 hours") {
          hours = nowDate.getHours();
      }

      if (mode.options[mode.selectedIndex].value == "12 hours") {
        hours = nowDate.getHours();

        if (hours >= 12) {
          hours = hours - 12;
        } else {
          hours = hours;
        }
      }

      input.value = nowDate.getFullYear() + " год " + (nowDate.getMonth()+1) + " месяц " +
        nowDate.getDate() + " день, " + addZero(hours) + ":" +
        addZero(nowDate.getMinutes()) + ":" + addZero(nowDate.getSeconds());

    } else {

      // console.log("Что-то пошло не так");
    }
  });
  setTimeout(liveTime, 10000);
};
liveTime();

let timer = () => {
  let date = new Date();
  date = addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + ":" + addZero(date.getSeconds());
  
  divDate.textContent = date;

  setTimeout(timer, 1000)
};
timer();
// end
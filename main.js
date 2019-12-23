let input = document.querySelector("#time"),
  mode = document.querySelector("#mode"),
  left = document.querySelector("#left"),
  country = document.querySelector("#country");

class timeService {
  request = new XMLHttpRequest();
  timerSeconds = 10;

  start = () => {
    this.connectTime();
    this.listenTime();
  }

  connectTime = () => {
    let timerId = setInterval(() => {
      this.timerSeconds--;
      left.textContent = (!!this.timerSeconds) ? `${this.zeroHelper(this.timerSeconds)} сек.` : "connecting...";
    }, 1000);
    switch (country.options[country.selectedIndex].value) {
      case "Россия": {
        this.openRequest("Europe/Moscow");
        break;
      }
      case "Токио": {
        this.openRequest("Asia/Tokyo");
        break;
      }
      case "Нью-Йорк": {
        this.openRequest("America/New_York");
        break;
      }
      default: {
        console.err("Что-то пошло не так...")
        break;
      }
    }
    setTimeout(() => {
      clearInterval(timerId);
      this.timerSeconds = 10;
      this.connectTime()
    }, 10000);
  }
  // done

  openRequest = (state) => {
    this.request.open("GET", `http://worldtimeapi.org/api/timezone/${state}`);
    this.request.send();
  }
  // done


  listenTime = () => {
    this.request.addEventListener("readystatechange", () => {
      if (this.request.readyState === 4 && this.request.status == 200) {
        let data = JSON.parse(this.request.response);
        data = data.datetime.substring(0, data.datetime.length - 6);
        this.dateHelper(
          new Date(Date.parse(data))
        )
      }
    });
  }

  zeroHelper = (n) => {
    if (n >= 0 && n < 10) return '0' + n;
    else return n;
  }

  dateHelper = (date) => {
    let hours = date.getHours();

    if (mode.options[mode.selectedIndex].value == "24 hours") {
      hours = date.getHours();
    }

    if (mode.options[mode.selectedIndex].value == "12 hours") {
      hours = date.getHours();

      if (hours >= 12) {
        hours = hours - 12;
      } else {
        hours = hours;
      }
    }

    input.value = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}
    ${this.zeroHelper(hours)}:${this.zeroHelper(date.getMinutes())}:${this.zeroHelper(date.getSeconds())}`
  }
}
let service = new timeService();
service.start();
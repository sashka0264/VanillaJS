const input = document.querySelector("#time"),
  mode = document.querySelector("#mode"),
  left = document.querySelector("#left"),
  country = document.querySelector("#country");

class timeService {
  request = new XMLHttpRequest();
  timerSeconds = 10;
  
  start = () => {
    const timerId = setInterval(() => {
      this.timerSeconds--;
      left.textContent = (!!this.timerSeconds) ? `${this.zeroHelper(this.timerSeconds)} сек.` : "connecting...";
    }, 1000);
    switch (country.options[country.selectedIndex].value) {
      case "Россия": {
        this.requestHelper("Europe/Moscow");
        break;
      }
      case "Токио": {
        this.requestHelper("Asia/Tokyo");
        break;
      }
      case "Нью-Йорк": {
        this.requestHelper("America/New_York");
        break;
      }
      default: {
        console.err("Что-то пошло не так...")
        break;
      }
    }

    this.request.addEventListener("readystatechange", () => {
      if (this.request.readyState === 4 && this.request.status == 200) {
        let data = JSON.parse(this.request.response);
        data = data.datetime.substring(0, data.datetime.length - 6);
        this.dateHelper(
          new Date(Date.parse(data))
        )
      }
    });

    setTimeout(() => {
      clearInterval(timerId);
      this.timerSeconds = 10;
      this.start()
    }, 10000);
  }

  requestHelper = (state) => {
    this.request.open("GET", `http://worldtimeapi.org/api/timezone/${state}`);
    this.request.send();
  }

  zeroHelper = (n) => {
    if (n >= 0 && n < 10) return '0' + n;
    else return n;
  }

  dateHelper = (date) => {
    let hours = date.getHours();
    switch (mode.options[mode.selectedIndex].value) {
      case "12 hours": {
        hours = (hours >= 12) ? (hours - 12) : hours;
        break;
      }
      case "24 hours": {
        break;
      }
      default: {
        console.error("Что-то пошло не так...")
      }
    }
    input.textContent = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}
    ${this.zeroHelper(hours)}:${this.zeroHelper(date.getMinutes())}:${this.zeroHelper(date.getSeconds())}`
  }
}

const service = new timeService();
service.start();


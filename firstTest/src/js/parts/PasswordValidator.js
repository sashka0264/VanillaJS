export default class PasswordValidator {
  constructor(input, error, className, minLength) {
    this.error = error;
    this.input = input;
    this.containsLetters = /^.*[a-zA-Z]+.*$/;
    this.beginWithoutDigit = /^\D.*$/;
    this.className = className;
    this.status = false;
    this.minLength = minLength;
  }

  listener() {
    this.input.addEventListener('input', (e) => {
      if (this.containsLetters.test(e.target.value) && this.beginWithoutDigit.test(e.target.value) && e.target.value.length >= this.minLength) {
        this.status = true;
        this.error.classList.remove(this.className);
      } else {
        this.status = false;
        this.error.classList.add(this.className);
      }
    });
  }

  verify() {
    if (!this.status) {
      this.error.classList.add(this.className);
      return 0;
    }
    return 1;
  }

  restart() {
    this.status = false;
  }
}

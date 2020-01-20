export default class EmailValidator {
  constructor(input, error, className) {
    this.input = input;
    this.error = error;
    this.className = className;
    this.model = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    this.status = false;
  }

  listener() {
    this.input.addEventListener('input', (e) => {
      if (this.model.test(e.target.value)) {
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

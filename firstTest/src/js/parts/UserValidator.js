export default class UserValidator {
  constructor(input, min, max, error, className) {
    this.input = input;
    this.minlength = min;
    this.maxlength = max;
    this.status = false;
    this.error = error;
    this.className = className;
  }

  listener() {
    this.input.addEventListener('input', (e) => {
      if (e.target.value[0] === ' ') e.target.value = e.target.value.replace(/ /g, '');
      e.target.value = e.target.value.replace(/[^А-я- ]/g, ' ');
      if (this.input.value.length < this.minlength && this.input.value !== ' ') {
        this.status = false;
        this.error.classList.add(this.className);
      } else if (this.input.value.length > this.maxlength) {
        this.status = false;
        this.error.classList.add(this.className);
      } else if (this.input.value.length >= this.minlength) {
        this.status = true;
        this.error.classList.remove(this.className);
      }
    });

    this.input.addEventListener('blur', () => {
      if (this.input.value.length >= this.minlength) {
        if (this.input.value.length <= this.maxlength) {
          this.status = true;
        } else {
          this.status = false;
        }
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

export default class Validator {
  constructor(input, error, className) {
    this._input = input;
    this._error = error;
    this._className = className;
    this._status = false;
  }

  set status(status) {
    this._status = status;
  }

  get status() {
    return this._status;
  }

  verify() {
    if (this.status) {
      this._error.classList.remove(this._className);
    } else {
      this._error.classList.add(this._className);
      return this.status;
    }
    return this.status;
  }
}

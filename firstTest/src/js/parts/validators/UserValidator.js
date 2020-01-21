import Validator from './Validator';

export default class UserValidator extends Validator {
  constructor(input, error, className, min, max) {
    super(input, error, className);
    this._minlength = min;
    this._maxlength = max;
  }

  listener() {
    this._input.addEventListener('input', (e) => {
      if (e.target.value[0] === ' ') {
        e.target.value = e.target.value.replace(/ /g, '');
      }
      e.target.value = e.target.value.replace(/[^А-я- ]/g, '');

      this.status = !!(
        e.target.value.length >= this._minlength
        && e.target.value.length <= this._maxlength
      );
      this.verify();
    });
  }
}

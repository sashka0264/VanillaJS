import Validator from './Validator';

export default class PasswordValidator extends Validator {
  constructor(input, error, className, minLength) {
    super(input, error, className);
    this._minLength = minLength;
    this._containsLetters = /^.*[a-zA-Z]+.*$/;
    this._beginWithoutDigit = /^\D.*$/;
  }

  listener() {
    this._input.addEventListener('input', ({ target: { value } }) => {
      this.status = !!(
        this._containsLetters.test(value)
        && this._beginWithoutDigit.test(value)
        && value.length >= this._minLength
      );
      this.verify();
    });
  }
}

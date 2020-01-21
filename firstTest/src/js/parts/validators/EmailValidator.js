import Validator from './Validator';

export default class EmailValidator extends Validator {
  constructor(input, error, className) {
    super(input, error, className);
    this._model = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  }

  listener() {
    this._input.addEventListener('input', ({ target: { value } }) => {
      this.status = !!this._model.test(value);
      this.verify();
    });
  }
}

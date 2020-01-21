import Validator from './Validator';

export default class DateValidator extends Validator {
  listener() {
    this._input.addEventListener('change', ({ target: { value } }) => {
      this.status = !!value;
      this.verify();
    });
  }
}

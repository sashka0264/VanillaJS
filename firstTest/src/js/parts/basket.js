export default class Basket {
  constructor() {
    if (localStorage['beers-basket']) {
      this._checklist = JSON.parse(localStorage['beers-basket']);
    } else {
      this._checklist = [];
    }
    this._status = false;
  }

  get status() {
    return this._status;
  }

  set status(status) {
    this._status = status;
  }

  addProduct(newProduct) {
    this.checklist = [...this._checklist, newProduct];
    localStorage.setItem('beers-basket', JSON.stringify(this._checklist));
  }

  get checklist() {
    return this._checklist;
  }

  removeProduct(id) {
    this._checklist = this._checklist.filter((item) => item.id !== id);
    localStorage.setItem('beers-basket', JSON.stringify(this._checklist));
  }
}

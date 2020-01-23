import { getStorage, setStorage } from '../common/storage';

class Basket {
  constructor() {
    this._checklist = getStorage();
    this._status = false;
  }

  get status() {
    return this._status;
  }

  set status(status) {
    this._status = status;
  }

  addProduct(newProduct) {
    this._checklist = [...this._checklist, newProduct];
    setStorage(this._checklist);
  }

  get checklist() {
    return this._checklist;
  }

  removeProduct(id) {
    this._checklist = this._checklist.filter((item) => item.id !== id);
    setStorage(this._checklist);
  }
}

const basket = new Basket();

export default basket;

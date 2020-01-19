class Basket {
  constructor() {
    if (localStorage['beers-basket']) {
      this.checklist = JSON.parse(localStorage['beers-basket']);
    } else {
      this.checklist = [];
    }
    this.active = false;
  }

  getBasketStatus() {
    return this.active;
  }

  setBasketStatus(status) {
    this.active = status;
  }

  addProduct(newProduct) {
    this.checklist = [...this.checklist, newProduct];
    localStorage.setItem('beers-basket', JSON.stringify(this.checklist));
  }

  getChecklist() {
    return this.checklist;
  }

  removeProduct(id) {
    this.checklist = this.checklist.filter((item) => item.id !== id);
    localStorage.setItem('beers-basket', JSON.stringify(this.checklist));
  }
}

export default Basket;

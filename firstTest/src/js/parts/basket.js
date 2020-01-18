class Basket {
  constructor() {
    if (localStorage['beers-basket'] === undefined) {
      this.checklist = [];
    } else {
      this.checklist = JSON.parse(localStorage['beers-basket']);
    }
    console.log(this.checklist);
  }

  addProduct(newProduct) {
    this.checklist = [
      ...this.checklist,
      newProduct,
    ];
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

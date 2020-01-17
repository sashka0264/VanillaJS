class DataAPI {
  constructor() {
    this.base = 'https://api.punkapi.com/v2/beers';
    this.name = '';
    this.minABV = '';
    this.maxABV = '';
  }

  setBeerName(newName) {
    if (newName) {
      this.name = `?beer_name=${newName}`;
    } else {
      this.name = '';
    }
  }

  setMinABV(newABV) {
    if (newABV) {
      this.minABV = `?abv_gt=${newABV}`;
    } else {
      this.minABV = '';
    }
  }

  setMaxABV(newABV) {
    if (newABV) {
      if (this.minABV) {
        this.maxABV = `&abv_lt=${newABV}`;
      } else {
        this.maxABV = `?abv_lt=${newABV}`;
      }
    } else {
      this.maxABV = '';
    }
  }

  getData() {
    return fetch(`${this.base}${this.name}${this.minABV}${this.maxABV}`)
      .then((data) => data.json())
      .then((data) => data);
  }

  getDataS() {
    return fetch(`${this.base}${this.name}${this.minABV}?abv_lt=41&abv_gt=30`)
      .then((data) => data.json())
      .then((data) => data);
  }
}

export default DataAPI;

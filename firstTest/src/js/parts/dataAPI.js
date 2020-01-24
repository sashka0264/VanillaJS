export default class DataAPI {
  constructor() {
    this._dataLength = 325;
    this._pageLength = 25;
    this._usePage = 1;
    this._base = `https://api.punkapi.com/v2/beers?page=${this._usePage}&per_page=${this._pageLength}`;
    this._name = '';
    this._minABV = '';
    this._maxABV = '';
    this._minIBU = '';
    this._maxIBU = '';
    this._minEBC = '';
    this._maxEBC = '';
    this._yeast = '';
    this._food = '';
    this._malt = '';
    this._hops = '';
    this._periodTo = '';
    this._periodFrom = '';
  }

  restart() {
    this._name = '';
    this._minABV = '';
    this._maxABV = '';
    this._minIBU = '';
    this._maxIBU = '';
    this._minEBC = '';
    this._maxEBC = '';
    this._yeast = '';
    this._food = '';
    this._malt = '';
    this._hops = '';
    this._periodTo = '';
    this._periodFrom = '';
  }

  set usePage(nextPage) {
    this._usePage = nextPage;
    this._base = `https://api.punkapi.com/v2/beers?page=${this._usePage}&per_page=${this._pageLength}`;
  }

  set periodFrom(period) {
    if (period) {
      this._periodFrom = `&brewed_after=${period}`;
    } else {
      this._periodFrom = '';
    }
  }

  set periodTo(period) {
    if (period) {
      this._periodTo = `&brewed_before=${period}`;
    } else {
      this._periodTo = '';
    }
  }

  set hops(newHops) {
    if (newHops) {
      this._hops = `&hops=${newHops}`;
    } else {
      this._hops = '';
    }
  }

  set malt(newMalt) {
    if (newMalt) {
      this._malt = `&malt=${newMalt}`;
    } else {
      this._malt = '';
    }
  }

  set food(newFood) {
    if (newFood) {
      this._food = `&food=${newFood}`;
    } else {
      this._food = '';
    }
  }

  set yeast(newYeast) {
    if (newYeast) {
      this._yeast = `&yeast=${newYeast}`;
    } else {
      this._yeast = '';
    }
  }

  get usePage() {
    return this._usePage;
  }

  get pages() {
    return this._dataLength / this._pageLength;
  }

  set minEBC(newEBC) {
    if (newEBC) {
      this._minEBC = `&ebc_gt=${newEBC}`;
    } else {
      this._minEBC = '';
    }
  }

  set maxEBC(newEBC) {
    if (newEBC) {
      this._maxEBC = `&ebc_lt=${newEBC}`;
    } else {
      this._maxEBC = '';
    }
  }

  set beerName(newName) {
    if (newName) {
      this._name = `&beer_name=${newName}`;
    } else {
      this._name = '';
    }
  }

  set minABV(newABV) {
    if (newABV) {
      this._minABV = `&abv_gt=${newABV}`;
    } else {
      this._minABV = '';
    }
  }

  set maxABV(newABV) {
    if (newABV) {
      this._maxABV = `&abv_lt=${newABV}`;
    } else {
      this._maxABV = '';
    }
  }

  set minIBU(newIBU) {
    if (newIBU) {
      this._minIBU = `&ibu_gt=${newIBU}`;
    } else {
      this._minIBU = '';
    }
  }

  set maxIBU(newIBU) {
    if (newIBU) {
      this._maxIBU = `&ibu_lt=${newIBU}`;
    } else {
      this._maxIBU = '';
    }
  }

  getBasketData(str = '') {
    console.log(`${this._base}&ids=${str}${this._name}${this._minABV}${this._maxABV}${this._minIBU}${this._maxIBU}${this._minEBC}`
    + `${this._maxEBC}${this._yeast}${this._food}${this._malt}${this._hops}${this._periodTo}${this._periodFrom}`)
    return fetch(`${this._base}&ids=${str}${this._name}${this._minABV}${this._maxABV}${this._minIBU}${this._maxIBU}${this._minEBC}`
    + `${this._maxEBC}${this._yeast}${this._food}${this._malt}${this._hops}${this._periodTo}${this._periodFrom}`)
      .then((data) => data.json())
      .then((data) => data);
  }

  getData() {
    return fetch(`${this._base}${this._name}${this._minABV}${this._maxABV}${this._minIBU}${this._maxIBU}${this._minEBC}`
    + `${this._maxEBC}${this._yeast}${this._food}${this._malt}${this._hops}${this._periodTo}${this._periodFrom}`)
      .then((data) => data.json())
      .then((data) => data);
  }
}

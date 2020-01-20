export default class DataAPI {
  constructor() {
    this.dataLength = 325;
    this.pageLength = 25;
    this.usePage = 1;
    this.base = `https://api.punkapi.com/v2/beers?page=${this.usePage}&per_page=${this.pageLength}`;
    this.name = '';
    this.minABV = '';
    this.maxABV = '';
    this.minIBU = '';
    this.maxIBU = '';
    this.minEBC = '';
    this.maxEBC = '';
    this.yeast = '';
    this.food = '';
    this.malt = '';
    this.hops = '';
    this.periodTo = '';
    this.periodFrom = '';
  }

  restart() {
    this.name = '';
    this.minABV = '';
    this.maxABV = '';
    this.minIBU = '';
    this.maxIBU = '';
    this.minEBC = '';
    this.maxEBC = '';
    this.yeast = '';
    this.food = '';
    this.malt = '';
    this.hops = '';
    this.periodTo = '';
    this.periodFrom = '';
  }

  setUsePage(nextPage) {
    this.usePage = nextPage;
    this.base = `https://api.punkapi.com/v2/beers?page=${this.usePage}&per_page=${this.pageLength}`;
  }

  setPeriodFrom(period) {
    if (period) {
      this.periodFrom = `&brewed_after=${period}`;
    } else {
      this.periodFrom = '';
    }
  }

  setPeriodTo(period) {
    if (period) {
      this.periodTo = `&brewed_before=${period}`;
    } else {
      this.periodTo = '';
    }
  }

  setHops(newHops) {
    if (newHops) {
      this.hops = `&hops=${newHops}`;
    } else {
      this.hops = '';
    }
  }

  setMalt(newMalt) {
    if (newMalt) {
      this.malt = `&malt=${newMalt}`;
    } else {
      this.malt = '';
    }
  }

  setFood(newFood) {
    if (newFood) {
      this.food = `&food=${newFood}`;
    } else {
      this.food = '';
    }
  }

  setYeast(newYeast) {
    if (newYeast) {
      this.yeast = `&yeast=${newYeast}`;
    } else {
      this.yeast = '';
    }
  }

  getUsePage() {
    return this.usePage;
  }

  getPages() {
    return this.dataLength / this.pageLength;
  }

  setMinEBC(newEBC) {
    if (newEBC) {
      this.minEBC = `&ebc_gt=${newEBC}`;
    } else {
      this.minEBC = '';
    }
  }

  setMaxEBC(newEBC) {
    if (newEBC) {
      this.maxEBC = `&ebc_lt=${newEBC}`;
    } else {
      this.maxEBC = '';
    }
  }

  setBeerName(newName) {
    if (newName) {
      this.name = `&beer_name=${newName}`;
    } else {
      this.name = '';
    }
  }

  setMinABV(newABV) {
    if (newABV) {
      this.minABV = `&abv_gt=${newABV}`;
    } else {
      this.minABV = '';
    }
  }

  setMaxABV(newABV) {
    if (newABV) {
      this.maxABV = `&abv_lt=${newABV}`;
    } else {
      this.maxABV = '';
    }
  }

  setMinIBU(newIBU) {
    if (newIBU) {
      this.minIBU = `&ibu_gt=${newIBU}`;
    } else {
      this.minIBU = '';
    }
  }

  setMaxIBU(newIBU) {
    if (newIBU) {
      this.maxIBU = `&ibu_lt=${newIBU}`;
    } else {
      this.maxIBU = '';
    }
  }

  getBasketData(str = '') {
    return fetch(`${this.base}&ids=${str}${this.name}${this.minABV}${this.maxABV}${this.minIBU}${this.maxIBU}${this.minEBC}`
    + `${this.maxEBC}${this.yeast}${this.food}${this.malt}${this.hops}${this.periodTo}${this.periodFrom}`)
      .then((data) => data.json())
      .then((data) => data);
  }


  getData() {
    return fetch(`${this.base}${this.name}${this.minABV}${this.maxABV}${this.minIBU}${this.maxIBU}${this.minEBC}`
    + `${this.maxEBC}${this.yeast}${this.food}${this.malt}${this.hops}${this.periodTo}${this.periodFrom}`)
      .then((data) => data.json())
      .then((data) => data);
  }
}

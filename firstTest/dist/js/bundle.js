/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/cardCreator.js":
/*!*************************************!*\
  !*** ./src/js/parts/cardCreator.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cardCreator = function cardCreator(arr) {
  return arr.map(function (item) {
    var card = document.createElement('div');
    card.classList.add('cards-card');
    Object.keys(item).forEach(function (value) {
      // console.log(value, item[value])
      if (value === 'contributed_by') {
        return;
      }

      var el;

      if (value === 'image_url') {
        el = document.createElement('img');
        el.src = item[value];
      } else {
        el = document.createElement('div');

        if (value === 'volume') {
          el.textContent = "\u041E\u0431\u044C\u0435\u043C: ".concat(item[value].value, " ").concat(item[value].unit);
        } else if (value === 'ingredients') {
          var malt = '(MALT): ';
          var hops = '(HOPS): ';
          var yeast = "(YEAST): ".concat(item[value].yeast);
          item[value].malt.forEach(function (item) {
            malt += "".concat(item.name, " ").concat(item.amount.value, " ").concat(item.amount.unit, "; ");
          });
          item[value].hops.forEach(function (item) {
            hops += "".concat(item.name, " ").concat(item.amount.value, " ").concat(item.amount.unit, "; ");
          });
          el.textContent = "\u0421\u043E\u0441\u0442\u0430\u0432: ".concat(malt, " ").concat(hops, " ").concat(yeast);
        } else if (value === 'brewers_tips') {
          el.textContent = "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: ".concat(item[value]);
        } else {
          el.textContent = "".concat(value, ": ").concat(item[value]);
        }
      }

      card.appendChild(el);
    });
    return card;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (cardCreator);

/***/ }),

/***/ "./src/js/parts/dataAPI.js":
/*!*********************************!*\
  !*** ./src/js/parts/dataAPI.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DataAPI =
/*#__PURE__*/
function () {
  function DataAPI() {
    _classCallCheck(this, DataAPI);

    this.dataLength = 325;
    this.pageLength = 25;
    this.usePage = 1;
    this.base = "https://api.punkapi.com/v2/beers?page=1&per_page=".concat(this.pageLength);
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
  }

  _createClass(DataAPI, [{
    key: "setHops",
    value: function setHops(newHops) {
      if (newHops) {
        this.hops = "&hops=".concat(newHops);
      } else {
        this.hops = '';
      }
    }
  }, {
    key: "setMalt",
    value: function setMalt(newMalt) {
      if (newMalt) {
        this.malt = "&malt=".concat(newMalt);
      } else {
        this.malt = '';
      }
    }
  }, {
    key: "setFood",
    value: function setFood(newFood) {
      if (newFood) {
        this.food = "&food=".concat(newFood);
      } else {
        this.food = '';
      }
    }
  }, {
    key: "setYeast",
    value: function setYeast(newYeast) {
      if (newYeast) {
        this.yeast = "&yeast=".concat(newYeast);
      } else {
        this.yeast = '';
      }
    }
  }, {
    key: "getUsePage",
    value: function getUsePage() {
      return this.usePage;
    }
  }, {
    key: "getPages",
    value: function getPages() {
      return this.dataLength / this.pageLength;
    }
  }, {
    key: "setMinEBC",
    value: function setMinEBC(newEBC) {
      if (newEBC) {
        this.minEBC = "&ebc_gt=".concat(newEBC);
      } else {
        this.minEBC = '';
      }
    }
  }, {
    key: "setMaxEBC",
    value: function setMaxEBC(newEBC) {
      if (newEBC) {
        this.maxEBC = "&ebc_lt=".concat(newEBC);
      } else {
        this.maxEBC = '';
      }
    }
  }, {
    key: "setBeerName",
    value: function setBeerName(newName) {
      if (newName) {
        this.name = "&beer_name=".concat(newName);
      } else {
        this.name = '';
      }
    }
  }, {
    key: "setMinABV",
    value: function setMinABV(newABV) {
      if (newABV) {
        this.minABV = "&abv_gt=".concat(newABV);
      } else {
        this.minABV = '';
      }
    }
  }, {
    key: "setMaxABV",
    value: function setMaxABV(newABV) {
      if (newABV) {
        this.maxABV = "&abv_lt=".concat(newABV);
      } else {
        this.maxABV = '';
      }
    }
  }, {
    key: "setMinIBU",
    value: function setMinIBU(newIBU) {
      if (newIBU) {
        this.minIBU = "&ibu_gt=".concat(newIBU);
      } else {
        this.minIBU = '';
      }
    }
  }, {
    key: "setMaxIBU",
    value: function setMaxIBU(newIBU) {
      if (newIBU) {
        this.maxIBU = "&ibu_lt=".concat(newIBU);
      } else {
        this.maxIBU = '';
      }
    }
  }, {
    key: "getData",
    value: function getData() {
      return fetch("".concat(this.base).concat(this.name).concat(this.minABV).concat(this.maxABV) + "".concat(this.minIBU).concat(this.maxIBU).concat(this.minEBC).concat(this.maxEBC).concat(this.yeast).concat(this.food).concat(this.malt).concat(this.hops)).then(function (data) {
        return data.json();
      }).then(function (data) {
        return data;
      });
    }
  }, {
    key: "getDataS",
    value: function getDataS() {
      return fetch("https://api.punkapi.com/v2/beers?food=Spicy chicken").then(function (data) {
        return data.json();
      }).then(function (data) {
        return data;
      });
    }
  }]);

  return DataAPI;
}();

/* harmony default export */ __webpack_exports__["default"] = (DataAPI);

/***/ }),

/***/ "./src/js/parts/pages.js":
/*!*******************************!*\
  !*** ./src/js/parts/pages.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var pages = function pages(dataAPI) {
  var parent = document.getElementById('pages');
  var pagesLength = dataAPI.getPages();
  var usePage = dataAPI.getUsePage();

  for (var i = 1; i <= pagesLength; i += 1) {
    var li = document.createElement('li');
    li.textContent = i;
    if (i === usePage) li.classList.add('pages_activePage');
    parent.appendChild(li);
  }

  parent.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
      console.log(e.target.textContent);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (pages);

/***/ }),

/***/ "./src/js/parts/renderControl.js":
/*!***************************************!*\
  !*** ./src/js/parts/renderControl.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var renderControl = function renderControl() {
  var oldCards = document.getElementById('cards');
  if (oldCards) oldCards.remove();
  var cards = document.createElement('div');
  cards.classList.add('cards');
  cards.id = 'cards';
  return cards;
};

/* harmony default export */ __webpack_exports__["default"] = (renderControl);

/***/ }),

/***/ "./src/js/parts/searchPanel.js":
/*!*************************************!*\
  !*** ./src/js/parts/searchPanel.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var searchPanel = function searchPanel(dataAPI) {
  var sortByName = document.getElementById('sortByName');
  var sortByMinABV = document.getElementById('sortByMinABV');
  var sortByMaxABV = document.getElementById('sortByMaxABV');
  var sortByMinIBU = document.getElementById('sortByMinIBU');
  var sortByMaxIBU = document.getElementById('sortByMaxIBU');
  var sortByMinEBC = document.getElementById('sortByMinEBC');
  var sortByMaxEBC = document.getElementById('sortByMaxEBC');
  var sortByYeast = document.getElementById('sortByYeast');
  var sortByFood = document.getElementById('sortByFood');
  var sortByMalt = document.getElementById('sortByMalt');
  var sortByHops = document.getElementById('sortByHops');
  sortByName.addEventListener('input', function (e) {
    return dataAPI.setBeerName(e.target.value);
  });
  sortByMinABV.addEventListener('input', function (e) {
    return dataAPI.setMinABV(e.target.value);
  });
  sortByMaxABV.addEventListener('input', function (e) {
    return dataAPI.setMaxABV(e.target.value);
  });
  sortByMinIBU.addEventListener('input', function (e) {
    return dataAPI.setMinIBU(e.target.value);
  });
  sortByMinIBU.addEventListener('input', function (e) {
    return dataAPI.setMinIBU(e.target.value);
  });
  sortByMaxIBU.addEventListener('input', function (e) {
    return dataAPI.setMaxIBU(e.target.value);
  });
  sortByMinEBC.addEventListener('input', function (e) {
    return dataAPI.setMinEBC(e.target.value);
  });
  sortByMaxEBC.addEventListener('input', function (e) {
    return dataAPI.setMaxEBC(e.target.value);
  });
  sortByYeast.addEventListener('input', function (e) {
    return dataAPI.setYeast(e.target.value);
  });
  sortByFood.addEventListener('input', function (e) {
    return dataAPI.setFood(e.target.value);
  });
  sortByMalt.addEventListener('input', function (e) {
    return dataAPI.setMalt(e.target.value);
  });
  sortByHops.addEventListener('input', function (e) {
    return dataAPI.setHops(e.target.value);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (searchPanel);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parts_dataAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/dataAPI */ "./src/js/parts/dataAPI.js");
/* harmony import */ var _parts_searchPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/searchPanel */ "./src/js/parts/searchPanel.js");
/* harmony import */ var _parts_cardCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/cardCreator */ "./src/js/parts/cardCreator.js");
/* harmony import */ var _parts_renderControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/renderControl */ "./src/js/parts/renderControl.js");
/* harmony import */ var _parts_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/pages */ "./src/js/parts/pages.js");





document.addEventListener('DOMContentLoaded', function () {
  var dataAPI = new _parts_dataAPI__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var sortButton = document.getElementById('sortButton');
  var block = document.querySelector('.container');
  Object(_parts_searchPanel__WEBPACK_IMPORTED_MODULE_1__["default"])(dataAPI);
  Object(_parts_pages__WEBPACK_IMPORTED_MODULE_4__["default"])(dataAPI);
  sortButton.addEventListener('click', function () {
    var cards = Object(_parts_renderControl__WEBPACK_IMPORTED_MODULE_3__["default"])();
    dataAPI.getData().then(function (data) {
      return Object(_parts_cardCreator__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
    }).then(function (data) {
      return data.forEach(function (item) {
        cards.appendChild(item);
        block.appendChild(cards);
      });
    });
  });
  var cards = Object(_parts_renderControl__WEBPACK_IMPORTED_MODULE_3__["default"])();
  dataAPI.getDataS().then(function (data) {
    return Object(_parts_cardCreator__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
  }).then(function (data) {
    return data.forEach(function (item) {
      cards.appendChild(item);
      block.appendChild(cards);
    });
  });
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
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

/***/ "./src/js/parts/Basket.js":
/*!********************************!*\
  !*** ./src/js/parts/Basket.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Basket =
/*#__PURE__*/
function () {
  function Basket() {
    _classCallCheck(this, Basket);

    if (localStorage['beers-basket']) {
      this.checklist = JSON.parse(localStorage['beers-basket']);
    } else {
      this.checklist = [];
    }

    this.active = false;
  }

  _createClass(Basket, [{
    key: "getBasketStatus",
    value: function getBasketStatus() {
      return this.active;
    }
  }, {
    key: "setBasketStatus",
    value: function setBasketStatus(status) {
      this.active = status;
    }
  }, {
    key: "addProduct",
    value: function addProduct(newProduct) {
      this.checklist = [].concat(_toConsumableArray(this.checklist), [newProduct]);
      localStorage.setItem('beers-basket', JSON.stringify(this.checklist));
    }
  }, {
    key: "getChecklist",
    value: function getChecklist() {
      return this.checklist;
    }
  }, {
    key: "removeProduct",
    value: function removeProduct(id) {
      this.checklist = this.checklist.filter(function (item) {
        return item.id !== id;
      });
      localStorage.setItem('beers-basket', JSON.stringify(this.checklist));
    }
  }]);

  return Basket;
}();

/* harmony default export */ __webpack_exports__["default"] = (Basket);

/***/ }),

/***/ "./src/js/parts/DataAPI.js":
/*!*********************************!*\
  !*** ./src/js/parts/DataAPI.js ***!
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
    key: "getBasketData",
    value: function getBasketData() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      console.log("".concat(this.base, "&ids=").concat(str));
      return fetch("".concat(this.base, "&ids=").concat(str)).then(function (data) {
        return data.json();
      }).then(function (data) {
        return data;
      });
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

/***/ "./src/js/parts/basketShow.js":
/*!************************************!*\
  !*** ./src/js/parts/basketShow.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var basketShow = function basketShow(basket, dataAPI, cardCreator, block, renderControl) {
  var basketElement = document.getElementById('basket-show');
  basketElement.addEventListener('click', function () {
    basket.setBasketStatus(true);
    var cards = renderControl();
    var basketList = basket.getChecklist();
    var basketTransformed = basketList.map(function (item) {
      return item.id;
    }).join('|');
    dataAPI.getBasketData(basketTransformed).then(function (data) {
      return cardCreator(data, basketList);
    }).then(function (data) {
      return data.forEach(function (item) {
        cards.appendChild(item);
        block.appendChild(cards);
      });
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (basketShow);

/***/ }),

/***/ "./src/js/parts/cardCreator.js":
/*!*************************************!*\
  !*** ./src/js/parts/cardCreator.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cardCreator = function cardCreator(arr, basketList) {
  return arr.map(function (item) {
    var card = document.createElement('div');
    card.classList.add('sort-cards__card');
    var checked = false;
    Object.keys(item).forEach(function (value) {
      // console.log(value, item[value])
      if (value === 'id') {
        card.id = item[value];
        basketList.forEach(function (el) {
          if (el.id === card.id) {
            checked = true;
          }
        });
      }

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
    var checkBlock = document.createElement('div');
    checkBlock.textContent = 'Добавить товар';
    var check = document.createElement('input');
    check.type = 'checkbox';
    check.checked = checked;
    checkBlock.classList.add('sort-cards__card-add');
    checkBlock.appendChild(check);
    card.appendChild(checkBlock);
    return card;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (cardCreator);

/***/ }),

/***/ "./src/js/parts/login.js":
/*!*******************************!*\
  !*** ./src/js/parts/login.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var login = function login() {};

/* harmony default export */ __webpack_exports__["default"] = (login);

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

/***/ "./src/js/parts/popup.js":
/*!*******************************!*\
  !*** ./src/js/parts/popup.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var popup = function popup() {
  var popupElement = document.getElementById('popup');
  var loginButton = document.getElementById('login');
  popupElement.addEventListener('click', function (e) {
    if (e.target.id === 'popup-close' || e.target === popup) {
      popup.classList.remove('popup_active');
    }
  });
  loginButton.addEventListener('click', function () {
    popup.classList.add('popup_active');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (popup);

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
  cards.classList.add('sort-cards');
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
var searchPanel = function searchPanel(dataAPI, basket, updateDomBasket) {
  var sort = document.getElementById('sort');
  sort.addEventListener('input', function (e) {
    var _e$target = e.target,
        value = _e$target.value,
        checked = _e$target.checked;

    switch (e.target.id) {
      case 'sortByName':
        dataAPI.setBeerName(value);
        break;

      case 'sortByMinABV':
        dataAPI.setMinABV(value);
        break;

      case 'sortByMaxABV':
        dataAPI.setMaxABV(value);
        break;

      case 'sortByMinIBU':
        dataAPI.setMinIBU(value);
        break;

      case 'sortByMaxIBU':
        dataAPI.setMaxIBU(value);
        break;

      case 'sortByMinEBC':
        dataAPI.setMinEBC(value);
        break;

      case 'sortByMaxEBC':
        dataAPI.setMaxEBC(value);
        break;

      case 'sortByYeast':
        dataAPI.setYeast(value);
        break;

      case 'sortByFood':
        dataAPI.setFood(value);
        break;

      case 'sortByMalt':
        dataAPI.setMalt(value);
        break;

      case 'sortByHops':
        dataAPI.setHops(value);
        break;

      default:
        if (checked) {
          basket.addProduct({
            id: e.target.parentElement.parentElement.id
          });
        } else {
          basket.removeProduct(e.target.parentElement.parentElement.id);
        }

        updateDomBasket(basket);
        if (basket.getBasketStatus()) e.target.parentElement.parentElement.remove();
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (searchPanel);

/***/ }),

/***/ "./src/js/parts/updateDomBasket.js":
/*!*****************************************!*\
  !*** ./src/js/parts/updateDomBasket.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var updateDomBasket = function updateDomBasket(basket) {
  var count = document.getElementById('basket-count');
  var basketList = basket.getChecklist();
  count.textContent = basketList.length;
};

/* harmony default export */ __webpack_exports__["default"] = (updateDomBasket);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parts_DataAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/DataAPI */ "./src/js/parts/DataAPI.js");
/* harmony import */ var _parts_Basket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/Basket */ "./src/js/parts/Basket.js");
/* harmony import */ var _parts_updateDomBasket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/updateDomBasket */ "./src/js/parts/updateDomBasket.js");
/* harmony import */ var _parts_basketShow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/basketShow */ "./src/js/parts/basketShow.js");
/* harmony import */ var _parts_searchPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/searchPanel */ "./src/js/parts/searchPanel.js");
/* harmony import */ var _parts_cardCreator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/cardCreator */ "./src/js/parts/cardCreator.js");
/* harmony import */ var _parts_renderControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parts/renderControl */ "./src/js/parts/renderControl.js");
/* harmony import */ var _parts_pages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parts/pages */ "./src/js/parts/pages.js");
/* harmony import */ var _parts_popup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parts/popup */ "./src/js/parts/popup.js");
/* harmony import */ var _parts_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parts/login */ "./src/js/parts/login.js");










document.addEventListener('DOMContentLoaded', function () {
  var dataAPI = new _parts_DataAPI__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var basket = new _parts_Basket__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var sortButton = document.getElementById('sortButton');
  var block = document.getElementById('sort');
  Object(_parts_searchPanel__WEBPACK_IMPORTED_MODULE_4__["default"])(dataAPI, basket, _parts_updateDomBasket__WEBPACK_IMPORTED_MODULE_2__["default"]);
  Object(_parts_pages__WEBPACK_IMPORTED_MODULE_7__["default"])(dataAPI);
  Object(_parts_updateDomBasket__WEBPACK_IMPORTED_MODULE_2__["default"])(basket);
  Object(_parts_basketShow__WEBPACK_IMPORTED_MODULE_3__["default"])(basket, dataAPI, _parts_cardCreator__WEBPACK_IMPORTED_MODULE_5__["default"], block, _parts_renderControl__WEBPACK_IMPORTED_MODULE_6__["default"]);
  Object(_parts_popup__WEBPACK_IMPORTED_MODULE_8__["default"])();
  Object(_parts_login__WEBPACK_IMPORTED_MODULE_9__["default"])();
  sortButton.addEventListener('click', function () {
    basket.setBasketStatus(false);
    console.log(basket.getBasketStatus());
    var cards = Object(_parts_renderControl__WEBPACK_IMPORTED_MODULE_6__["default"])();
    dataAPI.getData().then(function (data) {
      return Object(_parts_cardCreator__WEBPACK_IMPORTED_MODULE_5__["default"])(data, basket.getChecklist());
    }).then(function (data) {
      return data.forEach(function (item) {
        cards.appendChild(item);
        block.appendChild(cards);
      });
    });
  });
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
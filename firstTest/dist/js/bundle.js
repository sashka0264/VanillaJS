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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Basket; });
/* harmony import */ var _helpers_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/storage */ "./src/js/parts/helpers/storage.js");
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

    this._checklist = Object(_helpers_storage__WEBPACK_IMPORTED_MODULE_0__["getStorage"])();
    this._status = false;
  }

  _createClass(Basket, [{
    key: "addProduct",
    value: function addProduct(newProduct) {
      this._checklist = [].concat(_toConsumableArray(this._checklist), [newProduct]);
      Object(_helpers_storage__WEBPACK_IMPORTED_MODULE_0__["setStorage"])(this._checklist);
    }
  }, {
    key: "removeProduct",
    value: function removeProduct(id) {
      this._checklist = this._checklist.filter(function (item) {
        return item.id !== id;
      });
      Object(_helpers_storage__WEBPACK_IMPORTED_MODULE_0__["setStorage"])(this._checklist);
    }
  }, {
    key: "status",
    get: function get() {
      return this._status;
    },
    set: function set(status) {
      this._status = status;
    }
  }, {
    key: "checklist",
    get: function get() {
      return this._checklist;
    }
  }]);

  return Basket;
}();



/***/ }),

/***/ "./src/js/parts/DataAPI.js":
/*!*********************************!*\
  !*** ./src/js/parts/DataAPI.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataAPI; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DataAPI =
/*#__PURE__*/
function () {
  function DataAPI() {
    _classCallCheck(this, DataAPI);

    this._dataLength = 325;
    this._pageLength = 25;
    this._usePage = 1;
    this._base = "https://api.punkapi.com/v2/beers?page=".concat(this._usePage, "&per_page=").concat(this._pageLength);
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

  _createClass(DataAPI, [{
    key: "restart",
    value: function restart() {
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
  }, {
    key: "getBasketData",
    value: function getBasketData() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      console.log("".concat(this._base, "&ids=").concat(str).concat(this._name).concat(this._minABV).concat(this._maxABV).concat(this._minIBU).concat(this._maxIBU).concat(this._minEBC) + "".concat(this._maxEBC).concat(this._yeast).concat(this._food).concat(this._malt).concat(this._hops).concat(this._periodTo).concat(this._periodFrom));
      return fetch("".concat(this._base, "&ids=").concat(str).concat(this._name).concat(this._minABV).concat(this._maxABV).concat(this._minIBU).concat(this._maxIBU).concat(this._minEBC) + "".concat(this._maxEBC).concat(this._yeast).concat(this._food).concat(this._malt).concat(this._hops).concat(this._periodTo).concat(this._periodFrom)).then(function (data) {
        return data.json();
      }).then(function (data) {
        return data;
      });
    }
  }, {
    key: "getData",
    value: function getData() {
      return fetch("".concat(this._base).concat(this._name).concat(this._minABV).concat(this._maxABV).concat(this._minIBU).concat(this._maxIBU).concat(this._minEBC) + "".concat(this._maxEBC).concat(this._yeast).concat(this._food).concat(this._malt).concat(this._hops).concat(this._periodTo).concat(this._periodFrom)).then(function (data) {
        return data.json();
      }).then(function (data) {
        return data;
      });
    }
  }, {
    key: "usePage",
    set: function set(nextPage) {
      this._usePage = nextPage;
      this._base = "https://api.punkapi.com/v2/beers?page=".concat(this._usePage, "&per_page=").concat(this._pageLength);
    },
    get: function get() {
      return this._usePage;
    }
  }, {
    key: "periodFrom",
    set: function set(period) {
      if (period) {
        this._periodFrom = "&brewed_after=".concat(period);
      } else {
        this._periodFrom = '';
      }
    }
  }, {
    key: "periodTo",
    set: function set(period) {
      if (period) {
        this._periodTo = "&brewed_before=".concat(period);
      } else {
        this._periodTo = '';
      }
    }
  }, {
    key: "hops",
    set: function set(newHops) {
      if (newHops) {
        this._hops = "&hops=".concat(newHops);
      } else {
        this._hops = '';
      }
    }
  }, {
    key: "malt",
    set: function set(newMalt) {
      if (newMalt) {
        this._malt = "&malt=".concat(newMalt);
      } else {
        this._malt = '';
      }
    }
  }, {
    key: "food",
    set: function set(newFood) {
      if (newFood) {
        this._food = "&food=".concat(newFood);
      } else {
        this._food = '';
      }
    }
  }, {
    key: "yeast",
    set: function set(newYeast) {
      if (newYeast) {
        this._yeast = "&yeast=".concat(newYeast);
      } else {
        this._yeast = '';
      }
    }
  }, {
    key: "pages",
    get: function get() {
      return this._dataLength / this._pageLength;
    }
  }, {
    key: "minEBC",
    set: function set(newEBC) {
      if (newEBC) {
        this._minEBC = "&ebc_gt=".concat(newEBC);
      } else {
        this._minEBC = '';
      }
    }
  }, {
    key: "maxEBC",
    set: function set(newEBC) {
      if (newEBC) {
        this._maxEBC = "&ebc_lt=".concat(newEBC);
      } else {
        this._maxEBC = '';
      }
    }
  }, {
    key: "beerName",
    set: function set(newName) {
      if (newName) {
        this._name = "&beer_name=".concat(newName);
      } else {
        this._name = '';
      }
    }
  }, {
    key: "minABV",
    set: function set(newABV) {
      if (newABV) {
        this._minABV = "&abv_gt=".concat(newABV);
      } else {
        this._minABV = '';
      }
    }
  }, {
    key: "maxABV",
    set: function set(newABV) {
      if (newABV) {
        this._maxABV = "&abv_lt=".concat(newABV);
      } else {
        this._maxABV = '';
      }
    }
  }, {
    key: "minIBU",
    set: function set(newIBU) {
      if (newIBU) {
        this._minIBU = "&ibu_gt=".concat(newIBU);
      } else {
        this._minIBU = '';
      }
    }
  }, {
    key: "maxIBU",
    set: function set(newIBU) {
      if (newIBU) {
        this._maxIBU = "&ibu_lt=".concat(newIBU);
      } else {
        this._maxIBU = '';
      }
    }
  }]);

  return DataAPI;
}();



/***/ }),

/***/ "./src/js/parts/basketShow.js":
/*!************************************!*\
  !*** ./src/js/parts/basketShow.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var basketShow = function basketShow(basket, dataAPI, cardCreator, block, renderControl, searchCleaner, requestDirect, requestBasket) {
  var basketElement = document.getElementById('basket-show'),
      pageList = document.querySelectorAll('#pages li');
  basketElement.addEventListener('click', function () {
    var cards = renderControl();
    dataAPI.usePage = 1;

    for (var i = 0; i < pageList.length; i += 1) {
      if (i === 0) {
        pageList[i].classList.add('sort-list_activePage');
      } else {
        pageList[i].classList.remove('sort-list_activePage');
      }
    }

    searchCleaner();
    dataAPI.restart();

    if (basket.status) {
      basketElement.src = './img/basket.png';
      requestDirect(dataAPI, cardCreator, basket, cards, block);
      basket.status = false;
    } else {
      basketElement.src = './img/close.png';
      requestBasket(dataAPI, cardCreator, basket, cards, block);
      basket.status = true;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (basketShow);

/***/ }),

/***/ "./src/js/parts/helpers/cardCreator.js":
/*!*********************************************!*\
  !*** ./src/js/parts/helpers/cardCreator.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cardCreator = function cardCreator(arr, basketList) {
  var createTemplate = function createTemplate(parent, tag, text, src, create) {
    var el = document.createElement(tag);
    if (text) el.textContent = text;
    if (src) el.src = src;
    if (create) parent.appendChild(el);
  };

  return arr.map(function (itemCard) {
    var checked = false,
        malt,
        hops,
        yeast;
    var card = document.createElement('div'),
        checkBlock = document.createElement('div'),
        check = document.createElement('input'),
        config = {
      boil_volume: function boil_volume() {
        return null;
      },
      method: function method() {
        return null;
      },
      contributed_by: function contributed_by() {
        return null;
      },
      id: function id(item, value) {
        card.id = item[value];
        basketList.forEach(function (element) {
          if (element.id === card.id) {
            checked = true;
          }
        });
      },
      image_url: function image_url(item, value) {
        createTemplate(card, 'img', false, item[value], true);
      },
      volume: function volume(item, value) {
        createTemplate(card, 'div', "".concat((value[0].toUpperCase() + value.slice(1)).replace(/_/g, ''), ": ").concat(item[value].value, " ").concat(item[value].unit), false, true);
      },
      name: function name(item, value) {
        createTemplate(card, 'div', "Name: ".concat(item[value]), false, true);
      },
      tagline: function tagline(item, value) {
        createTemplate(card, 'div', "".concat(item[value]), false, true);
      },
      first_brewed: function first_brewed(item, value) {
        createTemplate(card, 'div', "The first brewed was ".concat(item[value]), false, true);
      },
      ingredients: function ingredients(item, value) {
        malt = '(MALT): ';
        hops = '(HOPS): ';
        yeast = "(YEAST): ".concat(item[value].yeast);
        item[value].malt.forEach(function (element) {
          malt += "".concat(element.name, " ").concat(element.amount.value, " ").concat(element.amount.unit, "; ");
        });
        item[value].hops.forEach(function (element) {
          hops += "".concat(element.name, " ").concat(element.amount.value, " ").concat(element.amount.unit, "; ");
        });
        createTemplate(card, 'div', "Structure: ".concat(malt, " ").concat(hops, " ").concat(yeast), false, true);
      }
    };
    card.classList.add('sort-cards__card');
    Object.keys(itemCard).forEach(function (value) {
      var method = config[value];

      if (method) {
        method(itemCard, value);
      } else {
        createTemplate(card, 'div', "".concat((value[0].toUpperCase() + value.slice(1)).replace(/_/g, ' '), ": ").concat(itemCard[value]), false, true);
      }
    });
    checkBlock.textContent = 'Добавить в корзину';
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

/***/ "./src/js/parts/helpers/renderControl.js":
/*!***********************************************!*\
  !*** ./src/js/parts/helpers/renderControl.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var renderControl = function renderControl() {
  var oldCards = document.getElementById('cards'),
      cards = document.createElement('div');
  if (oldCards) oldCards.remove();
  cards.classList.add('sort-cards');
  cards.id = 'cards';
  return cards;
};

/* harmony default export */ __webpack_exports__["default"] = (renderControl);

/***/ }),

/***/ "./src/js/parts/helpers/requestBasket.js":
/*!***********************************************!*\
  !*** ./src/js/parts/helpers/requestBasket.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var requestBasket = function requestBasket(dataAPI, cardCreator, basket, cards, block) {
  var error = document.getElementById('requestError'),
      basketTransformed = basket.checklist.map(function (item) {
    return item.id;
  }).join('|');

  if (error.classList.contains('sort-error_active')) {
    error.classList.remove('sort-error_active');
  }

  dataAPI.getBasketData(basketTransformed).then(function (data) {
    return cardCreator(data, basket.checklist);
  }).then(function (data) {
    return data.forEach(function (item) {
      cards.appendChild(item);
      block.appendChild(cards);
    });
  }).catch(function (err) {
    error.classList.add('sort-error_active');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (requestBasket);

/***/ }),

/***/ "./src/js/parts/helpers/requestDirect.js":
/*!***********************************************!*\
  !*** ./src/js/parts/helpers/requestDirect.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var requestDirect = function requestDirect(dataAPI, cardCreator, basket, cards, block) {
  var error = document.getElementById('requestError');

  if (error.classList.contains('sort-error_active')) {
    error.classList.remove('sort-error_active');
  }

  dataAPI.getData().then(function (data) {
    return cardCreator(data, basket.checklist);
  }).then(function (data) {
    return data.forEach(function (item) {
      cards.appendChild(item);
      block.appendChild(cards);
    });
  }).catch(function (err) {
    error.classList.add('sort-error_active');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (requestDirect);

/***/ }),

/***/ "./src/js/parts/helpers/searchCleaner.js":
/*!***********************************************!*\
  !*** ./src/js/parts/helpers/searchCleaner.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var searchCleaner = function searchCleaner() {
  var sort = document.querySelectorAll('#sort input');

  for (var i = 0; i < sort.length - 1; i += 1) {
    sort[i].value = '';
  }
};

/* harmony default export */ __webpack_exports__["default"] = (searchCleaner);

/***/ }),

/***/ "./src/js/parts/helpers/storage.js":
/*!*****************************************!*\
  !*** ./src/js/parts/helpers/storage.js ***!
  \*****************************************/
/*! exports provided: getStorage, setStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorage", function() { return getStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStorage", function() { return setStorage; });
var getStorage = function getStorage() {
  if (localStorage['beers-basket']) {
    return JSON.parse(localStorage['beers-basket']);
  }

  return [];
},
    setStorage = function setStorage(checklist) {
  localStorage.setItem('beers-basket', JSON.stringify(checklist));
};



/***/ }),

/***/ "./src/js/parts/login.js":
/*!*******************************!*\
  !*** ./src/js/parts/login.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validators_UserValidator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validators/UserValidator */ "./src/js/parts/validators/UserValidator.js");
/* harmony import */ var _validators_DateValidator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validators/DateValidator */ "./src/js/parts/validators/DateValidator.js");
/* harmony import */ var _validators_PasswordValidator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validators/PasswordValidator */ "./src/js/parts/validators/PasswordValidator.js");
/* harmony import */ var _validators_EmailValidator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validators/EmailValidator */ "./src/js/parts/validators/EmailValidator.js");





var login = function login() {
  var message = {
    loading: 'Загрузка...',
    success: 'Спасибо. Мы с Вами свяжемся.',
    failure: 'Произошла ошибка. Пожалуйста, повторите попытку позже.'
  },
      form = document.getElementById('popupForm'),
      username = form.querySelector('#popup-username'),
      usernameError = form.querySelector('#popup-userError'),
      date = form.querySelector('#popup-date'),
      dateError = form.querySelector('#popup-dateError'),
      password = form.querySelector('#popup-password'),
      passwordError = form.querySelector('#popup-passwordError'),
      email = form.querySelector('#popup-email'),
      emailError = form.querySelector('#popup-emailError'),
      formMessage = form.querySelector('#popup-message'),
      emailValidator = new _validators_EmailValidator__WEBPACK_IMPORTED_MODULE_3__["default"](email, emailError, 'popup-content__emailError_active'),
      userValidator = new _validators_UserValidator__WEBPACK_IMPORTED_MODULE_0__["default"](username, usernameError, 'popup-content__userError_active', 3, 31),
      dateValidator = new _validators_DateValidator__WEBPACK_IMPORTED_MODULE_1__["default"](date, dateError, 'popup-content__dateError_active'),
      passwordValidator = new _validators_PasswordValidator__WEBPACK_IMPORTED_MODULE_2__["default"](password, passwordError, 'popup-content__passwordError_active', 7);
  userValidator.listener();
  dateValidator.listener();
  passwordValidator.listener();
  emailValidator.listener();
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var userStatus = userValidator.verify(),
        dateStatus = dateValidator.verify(),
        passwordStatus = passwordValidator.verify(),
        emailStatus = emailValidator.verify();

    if (userStatus && dateStatus && passwordStatus && emailStatus) {
      var formData = new FormData(e.target),
          body = {},
          del = function del() {
        return setTimeout(function () {
          formMessage.classList.remove('popup-content__message_active');
        }, 4000);
      };

      formData.forEach(function (item, i) {
        body[i] = item;
      });
      fetch('server.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then(function (res) {
        if (res.status === 200) {
          formMessage.classList.add('popup-content__message_active');
          userValidator.status = false;
          dateValidator.status = false;
          passwordValidator.status = false;
          emailValidator.status = false;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = form[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var el = _step.value;
              el.tagName === "INPUT" && (el.value = "");
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          formMessage.textContent = message.success;
          del();
        } else {
          throw new Error('status network not 200');
        }
      }).catch(function () {
        formMessage.textContent = message.failure;
        del();
      });
    }
  });
};

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
var pages = function pages(dataAPI, basket, cardCreator, renderControl, block, requestDirect, requestBasket) {
  var parent = document.getElementById('pages');

  for (var i = 1; i <= dataAPI.pages; i += 1) {
    var li = document.createElement('li');
    li.textContent = i;
    if (i === dataAPI.usePage) li.classList.add('sort-list_activePage');
    parent.appendChild(li);
  }

  parent.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
      for (var _i = 0; _i < dataAPI.pages; _i += 1) {
        if (parent.children[_i].textContent !== e.target.textContent) {
          parent.children[_i].classList.remove('sort-list_activePage');
        } else {
          parent.children[_i].classList.add('sort-list_activePage');
        }
      }

      dataAPI.usePage = e.target.textContent;
      var cards = renderControl(),
          basketStatus = basket.status;

      if (basketStatus) {
        requestBasket(dataAPI, cardCreator, basket, cards, block);
      } else {
        requestDirect(dataAPI, cardCreator, basket, cards, block);
      }
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
  var popupElement = document.getElementById('popup'),
      loginButton = document.getElementById('login');
  popupElement.addEventListener('click', function (e) {
    if (e.target.id === 'popup-close' || e.target === popupElement) {
      popupElement.classList.remove('popup_active');
      document.body.style.overflow = '';
    }
  });
  loginButton.addEventListener('click', function () {
    popupElement.classList.add('popup_active');
    document.body.style.overflow = 'hidden';
  });
};

/* harmony default export */ __webpack_exports__["default"] = (popup);

/***/ }),

/***/ "./src/js/parts/searchPanel.js":
/*!*************************************!*\
  !*** ./src/js/parts/searchPanel.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var searchPanel = function searchPanel(dataAPI, basket, updateDomBasket, renderControl, cardCreator, block, requestDirect, requestBasket) {
  var sort = document.getElementById('sort'),
      sortButton = document.getElementById('sortButton');
  sortButton.addEventListener('click', function () {
    var cards = renderControl();

    if (basket.status) {
      requestBasket(dataAPI, cardCreator, basket, cards, block);
    } else {
      requestDirect(dataAPI, cardCreator, basket, cards, block);
    }
  });
  sort.addEventListener('input', function (e) {
    var _e$target = e.target,
        value = _e$target.value,
        checked = _e$target.checked;

    switch (e.target.id) {
      case 'sortByName':
        dataAPI.beerName = value;
        break;

      case 'sortByMinABV':
        dataAPI.minABV = value;
        break;

      case 'sortByMaxABV':
        dataAPI.maxABV = value;
        break;

      case 'sortByMinIBU':
        dataAPI.minIBU = value;
        break;

      case 'sortByMaxIBU':
        dataAPI.maxIBU = value;
        break;

      case 'sortByMinEBC':
        dataAPI.minEBC = value;
        break;

      case 'sortByMaxEBC':
        dataAPI.maxEBC = value;
        break;

      case 'sortByYeast':
        dataAPI.yeast = value;
        break;

      case 'sortByFood':
        dataAPI.food = value;
        break;

      case 'sortByMalt':
        dataAPI.malt = value;
        break;

      case 'sortByHops':
        dataAPI.hops = value;
        break;

      case 'periodTo':
        dataAPI.periodTo = value;
        break;

      case 'periodFrom':
        dataAPI.periodFrom = value;
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
        if (basket.status) e.target.parentElement.parentElement.remove();
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
  count.textContent = basket.checklist.length;
};

/* harmony default export */ __webpack_exports__["default"] = (updateDomBasket);

/***/ }),

/***/ "./src/js/parts/validators/DateValidator.js":
/*!**************************************************!*\
  !*** ./src/js/parts/validators/DateValidator.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateValidator; });
/* harmony import */ var _Validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Validator */ "./src/js/parts/validators/Validator.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var DateValidator =
/*#__PURE__*/
function (_Validator) {
  _inherits(DateValidator, _Validator);

  function DateValidator() {
    _classCallCheck(this, DateValidator);

    return _possibleConstructorReturn(this, _getPrototypeOf(DateValidator).apply(this, arguments));
  }

  _createClass(DateValidator, [{
    key: "listener",
    value: function listener() {
      var _this = this;

      this._input.addEventListener('change', function (_ref) {
        var value = _ref.target.value;
        _this.status = !!value;

        _this.verify();
      });
    }
  }]);

  return DateValidator;
}(_Validator__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/parts/validators/EmailValidator.js":
/*!***************************************************!*\
  !*** ./src/js/parts/validators/EmailValidator.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EmailValidator; });
/* harmony import */ var _Validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Validator */ "./src/js/parts/validators/Validator.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var EmailValidator =
/*#__PURE__*/
function (_Validator) {
  _inherits(EmailValidator, _Validator);

  function EmailValidator(input, error, className) {
    var _this;

    _classCallCheck(this, EmailValidator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EmailValidator).call(this, input, error, className));
    _this._model = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return _this;
  }

  _createClass(EmailValidator, [{
    key: "listener",
    value: function listener() {
      var _this2 = this;

      this._input.addEventListener('input', function (_ref) {
        var value = _ref.target.value;
        _this2.status = !!_this2._model.test(value);

        _this2.verify();
      });
    }
  }]);

  return EmailValidator;
}(_Validator__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/parts/validators/PasswordValidator.js":
/*!******************************************************!*\
  !*** ./src/js/parts/validators/PasswordValidator.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PasswordValidator; });
/* harmony import */ var _Validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Validator */ "./src/js/parts/validators/Validator.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var PasswordValidator =
/*#__PURE__*/
function (_Validator) {
  _inherits(PasswordValidator, _Validator);

  function PasswordValidator(input, error, className, minLength) {
    var _this;

    _classCallCheck(this, PasswordValidator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PasswordValidator).call(this, input, error, className));
    _this._minLength = minLength;
    _this._containsLetters = /^.*[a-zA-Z]+.*$/;
    _this._beginWithoutDigit = /^\D.*$/;
    return _this;
  }

  _createClass(PasswordValidator, [{
    key: "listener",
    value: function listener() {
      var _this2 = this;

      this._input.addEventListener('input', function (_ref) {
        var value = _ref.target.value;
        _this2.status = !!(_this2._containsLetters.test(value) && _this2._beginWithoutDigit.test(value) && value.length >= _this2._minLength);

        _this2.verify();
      });
    }
  }]);

  return PasswordValidator;
}(_Validator__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/parts/validators/UserValidator.js":
/*!**************************************************!*\
  !*** ./src/js/parts/validators/UserValidator.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserValidator; });
/* harmony import */ var _Validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Validator */ "./src/js/parts/validators/Validator.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var UserValidator =
/*#__PURE__*/
function (_Validator) {
  _inherits(UserValidator, _Validator);

  function UserValidator(input, error, className, min, max) {
    var _this;

    _classCallCheck(this, UserValidator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserValidator).call(this, input, error, className));
    _this._minlength = min;
    _this._maxlength = max;
    return _this;
  }

  _createClass(UserValidator, [{
    key: "listener",
    value: function listener() {
      var _this2 = this;

      this._input.addEventListener('input', function (e) {
        if (e.target.value[0] === ' ') {
          e.target.value = e.target.value.replace(/ /g, '');
        }

        e.target.value = e.target.value.replace(/[^А-я- ]/g, '');
        _this2.status = !!(e.target.value.length >= _this2._minlength && e.target.value.length <= _this2._maxlength);

        _this2.verify();
      });
    }
  }]);

  return UserValidator;
}(_Validator__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/parts/validators/Validator.js":
/*!**********************************************!*\
  !*** ./src/js/parts/validators/Validator.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Validator; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Validator =
/*#__PURE__*/
function () {
  function Validator(input, error, className) {
    _classCallCheck(this, Validator);

    this._input = input;
    this._error = error;
    this._className = className;
    this._status = false;
  }

  _createClass(Validator, [{
    key: "verify",
    value: function verify() {
      if (this.status) {
        this._error.classList.remove(this._className);
      } else {
        this._error.classList.add(this._className);

        return this.status;
      }

      return this.status;
    }
  }, {
    key: "status",
    set: function set(status) {
      this._status = status;
    },
    get: function get() {
      return this._status;
    }
  }]);

  return Validator;
}();



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
/* harmony import */ var _parts_helpers_cardCreator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/helpers/cardCreator */ "./src/js/parts/helpers/cardCreator.js");
/* harmony import */ var _parts_helpers_renderControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parts/helpers/renderControl */ "./src/js/parts/helpers/renderControl.js");
/* harmony import */ var _parts_pages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parts/pages */ "./src/js/parts/pages.js");
/* harmony import */ var _parts_popup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parts/popup */ "./src/js/parts/popup.js");
/* harmony import */ var _parts_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parts/login */ "./src/js/parts/login.js");
/* harmony import */ var _parts_helpers_searchCleaner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parts/helpers/searchCleaner */ "./src/js/parts/helpers/searchCleaner.js");
/* harmony import */ var _parts_helpers_requestDirect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parts/helpers/requestDirect */ "./src/js/parts/helpers/requestDirect.js");
/* harmony import */ var _parts_helpers_requestBasket__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parts/helpers/requestBasket */ "./src/js/parts/helpers/requestBasket.js");













document.addEventListener('DOMContentLoaded', function () {
  var dataAPI = new _parts_DataAPI__WEBPACK_IMPORTED_MODULE_0__["default"](),
      basket = new _parts_Basket__WEBPACK_IMPORTED_MODULE_1__["default"](),
      block = document.getElementById('sort'),
      cards = Object(_parts_helpers_renderControl__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_parts_helpers_requestDirect__WEBPACK_IMPORTED_MODULE_11__["default"])(dataAPI, _parts_helpers_cardCreator__WEBPACK_IMPORTED_MODULE_5__["default"], basket, cards, block);
  Object(_parts_searchPanel__WEBPACK_IMPORTED_MODULE_4__["default"])(dataAPI, basket, _parts_updateDomBasket__WEBPACK_IMPORTED_MODULE_2__["default"], _parts_helpers_renderControl__WEBPACK_IMPORTED_MODULE_6__["default"], _parts_helpers_cardCreator__WEBPACK_IMPORTED_MODULE_5__["default"], block, _parts_helpers_requestDirect__WEBPACK_IMPORTED_MODULE_11__["default"], _parts_helpers_requestBasket__WEBPACK_IMPORTED_MODULE_12__["default"]);
  Object(_parts_pages__WEBPACK_IMPORTED_MODULE_7__["default"])(dataAPI, basket, _parts_helpers_cardCreator__WEBPACK_IMPORTED_MODULE_5__["default"], _parts_helpers_renderControl__WEBPACK_IMPORTED_MODULE_6__["default"], block, _parts_helpers_requestDirect__WEBPACK_IMPORTED_MODULE_11__["default"], _parts_helpers_requestBasket__WEBPACK_IMPORTED_MODULE_12__["default"]);
  Object(_parts_updateDomBasket__WEBPACK_IMPORTED_MODULE_2__["default"])(basket);
  Object(_parts_basketShow__WEBPACK_IMPORTED_MODULE_3__["default"])(basket, dataAPI, _parts_helpers_cardCreator__WEBPACK_IMPORTED_MODULE_5__["default"], block, _parts_helpers_renderControl__WEBPACK_IMPORTED_MODULE_6__["default"], _parts_helpers_searchCleaner__WEBPACK_IMPORTED_MODULE_10__["default"], _parts_helpers_requestDirect__WEBPACK_IMPORTED_MODULE_11__["default"], _parts_helpers_requestBasket__WEBPACK_IMPORTED_MODULE_12__["default"]);
  Object(_parts_popup__WEBPACK_IMPORTED_MODULE_8__["default"])();
  Object(_parts_login__WEBPACK_IMPORTED_MODULE_9__["default"])();
});
console.log(Array);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
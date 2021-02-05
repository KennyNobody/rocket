/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/articles/articles.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/articles/articles.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isotope-layout */ "./node_modules/isotope-layout/js/isotope.js");
/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isotope_layout__WEBPACK_IMPORTED_MODULE_0__);

window.addEventListener('load', function () {
  var parentElem = document.querySelector('.isotope');

  if (parentElem) {
    (function () {
      var tabs = parentElem.querySelectorAll('.btn--tab');
      var elem = parentElem.querySelector('.articles__content');
      var iso = new isotope_layout__WEBPACK_IMPORTED_MODULE_0___default.a(elem, {
        itemSelector: '.articles__item',
        percentPosition: true,
        filter: '.type-1'
      });
      $('.isotope').on('click', '.btn--tab', function () {
        var filterValue = this.getAttribute('data-filter');
        iso.arrange({
          filter: filterValue
        });
      });
      $('.isotope').on('change', '.select', function () {
        var filterValue = this.value;
        iso.arrange({
          filter: filterValue
        });
      });

      var _loop = function _loop(i) {
        tabs[i].addEventListener('click', function () {
          removeActiveClasses();
          tabs[i].classList.add('btn--tab-active');
        });
      };

      for (var i = 0; i < tabs.length; i++) {
        _loop(i);
      }

      var removeActiveClasses = function removeActiveClasses() {
        for (var n = 0; n < tabs.length; n++) {
          tabs[n].classList.remove('btn--tab-active');
        }
      };
    })();
  }

  $('.btn--load').on('click', function () {
    var _this = $(this);

    var data = {
      'action': 'loadmore',
      'query': _this.attr('data-param-posts'),
      'page': _this.attr('data-page'),
      'tpl': _this.attr('data-tpl')
    };

    _this.html("<span class=\"btn__text\">\n\t\t\t\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...\n\t\t\t</span>");

    var tempPage = _this.attr('data-page');

    $.ajax({
      url: '/wp-admin/admin-ajax.php',
      data: data,
      type: 'POST',
      success: function success(data) {
        if (data) {
          _this.html("<span class=\"btn__text\">\n\t\t\t\t\t\t\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0435\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<svg class=\"btn__icon-load\">\n\t\t\t\t\t\t<use xlink:href=\"" + _this.attr('data-icon') + "\"></use>\n\t\t\t\t\t\t</svg>");

          _this.parent().parent().find('.articles__item--clear').first().before(data);

          tempPage++;

          _this.attr('data-page', tempPage++);

          if (_this.attr('data-page') == _this.attr('data-max-pages')) {
            _this.parent().remove();
          }
        } else {
          _this.parent().remove();
        }
      }
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  fixHeader();
});
document.addEventListener('scroll', function () {
  fixHeader();
});

function fixHeader() {
  var header = document.querySelector('.header');

  if (header) {
    var section = header.querySelector('.section--header-bottom');
    var main = document.querySelector('.main');
    var fixRange = header.querySelector('.section--header-top').clientHeight;
    var marginTop = window.pageYOffset;

    if (marginTop > 70 && section.classList.contains != 'section--fixed') {
      section.classList.add('section--fixed');
      main.classList.add('main--fixed');
    } else {
      section.classList.remove('section--fixed');
      main.classList.remove('main--fixed');
    }
  }
}

/***/ }),

/***/ "./src/blocks/modules/intro-slider/intro-slider.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/intro-slider/intro-slider.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");

window.addEventListener('DOMContentLoaded', function () {
  var sliderDirection;
  var sliderTouch;
  var sliderEffect;

  if (document.body.clientWidth > 1200) {
    sliderDirection = 'vertical';
    sliderTouch = false;
    sliderEffect = 'fade';
  } else {
    sliderDirection = 'horizontal';
    sliderTouch = true;
    sliderEffect = null;
  }

  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.intro-slider', {
    direction: sliderDirection,
    speed: 500,
    effect: sliderEffect,
    allowTouchMove: sliderTouch,
    autoplay: true,
    delay: 5000,
    pagination: {
      el: '.intro-slider__pagintaion',
      clickable: true,
      bulletClass: 'intro-slider__bullet',
      bulletActiveClass: 'intro-slider__bullet--active',
      hiddenClass: 'intro-slider__bullet--disable'
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/mmenu/mmenu.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/mmenu/mmenu.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mmenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mmenu-js */ "./node_modules/mmenu-js/src/mmenu.js");

document.addEventListener("DOMContentLoaded", function () {
  var content = window.mmenuContent || null;
  new mmenu_js__WEBPACK_IMPORTED_MODULE_0__["default"]("#mmenu", {
    "extensions": ["pagedim-black", "theme-dark"],
    "navbar": {
      "title": content.title
    },
    "navbars": [{
      "position": "bottom",
      "content": content.links
    }]
  });
});

/***/ }),

/***/ "./src/blocks/modules/modal-menu/modal-menu.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/modal-menu/modal-menu.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener('load', function () {
  (function initModalLinks() {
    var links = document.querySelectorAll('.modal-menu__nav-link');
    var blocks = document.querySelectorAll('.modal-menu__content');

    if (links && blocks && links.length == blocks.length) {
      var _loop = function _loop(i) {
        links[i].addEventListener('click', function (e) {
          e.preventDefault();
          console.log(links[i]);
          toggleBlocks(links[i]);
        });
      };

      for (var i = 0; i < links.length; i++) {
        _loop(i);
      }
    }

    function toggleBlocks(item) {
      var link = item.hash;

      for (var z = 0; z < links.length; z++) {
        if (links[z].hash == link) {
          links[z].classList.add('modal-menu__nav-link--active');
        } else {
          links[z].classList.remove('modal-menu__nav-link--active');
        }
      }

      for (var n = 0; n < blocks.length; n++) {
        if ('#' + blocks[n].id == link) {
          blocks[n].classList.add('modal-menu__content--active');
        } else {
          blocks[n].classList.remove('modal-menu__content--active');
        }
      }
    }

    toggleBlocks(document.querySelectorAll('.modal-menu__nav-link')[0]);
  })();
});

/***/ }),

/***/ "./src/blocks/modules/preview-work/preview-work.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/preview-work/preview-work.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fancyapps/fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/modules/table/table.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/table/table.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener('DOMContentLoaded', function () {
  (function toggleTable() {
    var table = document.querySelectorAll('.table-btn');

    for (var i = 0; i < table.length; i++) {
      toggle(table[i]);
    }

    function toggle(block) {
      block.addEventListener('click', function () {
        var table = document.getElementById(block.getAttribute('data-for'));
        table.classList.toggle('table--visible');
      });
    }
  })();

  (function toggleMobileTable() {
    var caption = document.querySelectorAll('.table__caption');

    for (var i = 0; i < caption.length; i++) {
      toggle(caption[i]);
    }

    function toggle(block) {
      block.addEventListener('click', function () {
        block.parentNode.classList.toggle('table--visible');
      });
    }
  })();
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_articles_articles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/articles/articles */ "./src/blocks/modules/articles/articles.js");
/* harmony import */ var _modules_table_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/table/table */ "./src/blocks/modules/table/table.js");
/* harmony import */ var _modules_table_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_table_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_intro_slider_intro_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/intro-slider/intro-slider */ "./src/blocks/modules/intro-slider/intro-slider.js");
/* harmony import */ var _modules_preview_work_preview_work__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/preview-work/preview-work */ "./src/blocks/modules/preview-work/preview-work.js");
/* harmony import */ var _modules_modal_menu_modal_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/modal-menu/modal-menu */ "./src/blocks/modules/modal-menu/modal-menu.js");
/* harmony import */ var _modules_modal_menu_modal_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_modal_menu_modal_menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_mmenu_mmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/mmenu/mmenu */ "./src/blocks/modules/mmenu/mmenu.js");








/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map
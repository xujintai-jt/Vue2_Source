/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./module/Observer.js":
/*!****************************!*\
  !*** ./module/Observer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ observer)\n/* harmony export */ });\n/* harmony import */ var _defineReactive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineReactive.js */ \"./module/defineReactive.js\");\n/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array.js */ \"./module/array.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./module/utils.js\");\n/* harmony import */ var _observe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observe.js */ \"./module/observe.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\nvar observer = /*#__PURE__*/function () {\n  function observer(value) {\n    _classCallCheck(this, observer);\n\n    //为observe的对象添加key为__ob__、value为observer实例的属性。\n    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.def)(value, \"__ob__\", this, false);\n\n    if (value instanceof Array) {\n      Object.setPrototypeOf(value, _array_js__WEBPACK_IMPORTED_MODULE_1__.default);\n      this.arrayWalk(value);\n    } else {\n      this.walk(value);\n    }\n  }\n\n  _createClass(observer, [{\n    key: \"walk\",\n    value: function walk(targetObj) {\n      for (var key in targetObj) {\n        (0,_defineReactive_js__WEBPACK_IMPORTED_MODULE_0__.default)(targetObj, key, targetObj[key]);\n      }\n    }\n  }, {\n    key: \"arrayWalk\",\n    value: function arrayWalk(targetArray) {\n      for (var i = 0; i < targetArray.length; i++) {\n        (0,_observe_js__WEBPACK_IMPORTED_MODULE_3__.default)(targetArray[i]);\n      }\n    }\n  }]);\n\n  return observer;\n}();\n\n\n\n//# sourceURL=webpack:///./module/Observer.js?");

/***/ }),

/***/ "./module/array.js":
/*!*************************!*\
  !*** ./module/array.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./module/utils.js\");\n //使arrayMethods对象的__proto__指向Array.prototype\n\nvar arrayMethods = Object.setPrototypeOf({}, Array.prototype);\nvar ChangeMethods = [\"push\", \"pop\", \"unshift\", \"shift\", \"sort\", \"splice\", \"reverse\"];\nChangeMethods.forEach(function (item) {\n  //保存数组原始方法\n  var originalMethods = arrayMethods[item]; //改写数组方法\n\n  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.def)(arrayMethods, item, function () {\n    //恢复数组之前的功能\n    var result = originalMethods.apply(this, arguments);\n    var ob = this.__ob__; //定义添加的数组项\n\n    var inserterd = [];\n\n    switch (item) {\n      case \"push\":\n        inserterd = Array.prototype.slice.call(arguments);\n        break;\n\n      case \"splice\":\n        //splice的格式是(index,删除目标,增加目标...)\n        inserterd = Array.prototype.slice.call(arguments).slice(2);\n        break;\n\n      case \"unshift\":\n        inserterd = Array.prototype.slice.call(arguments);\n        break;\n    }\n\n    if (inserterd.length > 0) {\n      ob.arrayWalk(inserterd);\n    }\n\n    console.log(\"我是被改写的数组方法\"); //恢复数组之前的功能(返回值)\n\n    return result;\n  }, false);\n});\nconsole.log(arrayMethods);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayMethods);\n\n//# sourceURL=webpack:///./module/array.js?");

/***/ }),

/***/ "./module/defineReactive.js":
/*!**********************************!*\
  !*** ./module/defineReactive.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ defineReactive)\n/* harmony export */ });\n/* harmony import */ var _observe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observe.js */ \"./module/observe.js\");\n\nfunction defineReactive(targetObj, key, value) {\n  (0,_observe_js__WEBPACK_IMPORTED_MODULE_0__.default)(value);\n  Object.defineProperty(targetObj, key, {\n    get: function get() {\n      console.log(\"\".concat(key, \"\\u5C5E\\u6027\\u88AB\\u8BFB\\u53D6\\u4E86\"));\n      return value;\n    },\n    set: function set(newValue) {\n      if (newValue === value) {\n        return;\n      }\n\n      console.log(\"\".concat(key, \"\\u5C5E\\u6027\\u88AB\\u4FEE\\u6539\\u4E86\"));\n      (0,_observe_js__WEBPACK_IMPORTED_MODULE_0__.default)(newValue);\n      value = newValue;\n    }\n  });\n}\n\n//# sourceURL=webpack:///./module/defineReactive.js?");

/***/ }),

/***/ "./module/index.js":
/*!*************************!*\
  !*** ./module/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _observe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observe.js */ \"./module/observe.js\");\n\nvar obj = {\n  sneakers: {\n    nike: {\n      shoesname1: \"dunk SB\",\n      shoesname2: \"air jordan\"\n    },\n    adidas: \"Yeezy\"\n  },\n  name: \"小明\",\n  arr: [1, 2, 3]\n};\n(0,_observe_js__WEBPACK_IMPORTED_MODULE_0__.default)(obj);\nobj.name;\nobj.sneakers.nike.shoesname1;\nobj.sneakers.nike.shoesname2 = \"air force 1\";\nconsole.log(obj.sneakers.nike.shoesname2);\nconsole.log(obj.__ob__.walk);\nconsole.log(obj);\nobj.arr[0] = 100;\nobj.arr.push(9999);\nobj.arr.push({\n  a: 1\n});\nobj.arr.splice(2, 1, {\n  a: 999\n});\nobj.arr.unshift({\n  b: 99\n});\nobj.arr.push();\nconsole.log(obj.arr);\n\n//# sourceURL=webpack:///./module/index.js?");

/***/ }),

/***/ "./module/observe.js":
/*!***************************!*\
  !*** ./module/observe.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ observe)\n/* harmony export */ });\n/* harmony import */ var _Observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observer.js */ \"./module/Observer.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\nfunction observe(value) {\n  if (_typeof(value) !== \"object\" || typeof value === \"null\") {\n    return value;\n  }\n\n  var ob;\n\n  if (typeof value.__ob__ !== 'undefined') {\n    ob = __ob__;\n  } else {\n    ob = new _Observer_js__WEBPACK_IMPORTED_MODULE_0__.default(value);\n  }\n\n  return ob;\n}\n\n//# sourceURL=webpack:///./module/observe.js?");

/***/ }),

/***/ "./module/utils.js":
/*!*************************!*\
  !*** ./module/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"def\": () => (/* binding */ def)\n/* harmony export */ });\nfunction def(obj, key, value, enumerable) {\n  Object.defineProperty(obj, key, {\n    value: value,\n    configurable: true,\n    enumerable: enumerable\n  });\n}\n\n\n\n//# sourceURL=webpack:///./module/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./module/index.js");
/******/ 	
/******/ })()
;
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/testContact.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FtestContact&absolutePagePath=%2FUsers%2Fshotanaka%2Fproject%2FLerning%2Fnextjs%2Fnextjs-test%2Fsrc%2Fpages%2FtestContact.js&hotRouterUpdates=true!./":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FtestContact&absolutePagePath=%2FUsers%2Fshotanaka%2Fproject%2FLerning%2Fnextjs%2Fnextjs-test%2Fsrc%2Fpages%2FtestContact.js&hotRouterUpdates=true ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/testContact",
      function () {
        var mod = __webpack_require__(/*! ./src/pages/testContact.js */ "./src/pages/testContact.js");
        if (true) {
          module.hot.accept(/*! ./src/pages/testContact.js */ "./src/pages/testContact.js", function () {
            if (!next.router.components["/testContact"]) return;
            var updatedPage = __webpack_require__(/*! ./src/pages/testContact.js */ "./src/pages/testContact.js");
            next.router.update("/testContact", updatedPage);
          });
        }
        return mod;
      }
    ]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/react/index.js");

/***/ }),

/***/ "./src/pages/testContact.js":
/*!**********************************!*\
  !*** ./src/pages/testContact.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/shotanaka/project/Lerning/nextjs/nextjs-test/src/pages/testContact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ContactForm() {
  return __jsx("form", {
    name: "contact",
    action: "/success",
    method: "POST",
    "data-netlify": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "hidden",
    name: "form-name",
    value: "contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "text",
    name: "firstname",
    id: "firstname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }), __jsx("label", {
    htmlFor: "yourname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, "Your Name:"), " ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 62
    }
  }), __jsx("input", {
    type: "text",
    name: "name",
    id: "yourname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  })), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "youremail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "Your Email:"), " ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 64
    }
  }), __jsx("input", {
    type: "email",
    name: "email",
    id: "youremail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  })), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "yourmessage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "Message:"), " ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 63
    }
  }), __jsx("textarea", {
    name: "message",
    id: "yourmessage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  })), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("button", {
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, "Send")));
}

/***/ }),

/***/ 3:
/*!************************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2FtestContact&absolutePagePath=%2FUsers%2Fshotanaka%2Fproject%2FLerning%2Fnextjs%2Fnextjs-test%2Fsrc%2Fpages%2FtestContact.js&hotRouterUpdates=true ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2FtestContact&absolutePagePath=%2FUsers%2Fshotanaka%2Fproject%2FLerning%2Fnextjs%2Fnextjs-test%2Fsrc%2Fpages%2FtestContact.js&hotRouterUpdates=true! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FtestContact&absolutePagePath=%2FUsers%2Fshotanaka%2Fproject%2FLerning%2Fnextjs%2Fnextjs-test%2Fsrc%2Fpages%2FtestContact.js&hotRouterUpdates=true!./");


/***/ }),

/***/ "dll-reference dll_c2e10d183b950a67d9e7":
/*!*******************************************!*\
  !*** external "dll_c2e10d183b950a67d9e7" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_c2e10d183b950a67d9e7;

/***/ })

},[[3,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=testContact.js.map
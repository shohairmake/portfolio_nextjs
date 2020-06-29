webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/index/AboutContainer.js":
/*!************************************************!*\
  !*** ./src/components/index/AboutContainer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AboutContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_Lottie_programingMan_programingMan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Lottie/programingMan/programingMan */ "./src/components/Lottie/programingMan/programingMan.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/shotanaka/project/Lerning/nextjs/nextjs-test/src/components/index/AboutContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function AboutContainer(_ref) {
  var isActiveAboutInner = _ref.isActiveAboutInner;
  var classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    justify: "space-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: isActiveAboutInner ? classes.about : classes.hide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, "What is the Hair and Web designer?", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }), "How does that work ??", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }), "Let's go to the About page \u2192")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/about",
    passHref: true,
    prefetch: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: isActiveAboutInner ? classes.lottie : classes.hide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, __jsx(_components_Lottie_programingMan_programingMan__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }))));
}
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  hide: {
    opacity: 0
  },
  about: {
    marginLeft: '3em',
    marginTop: '3em',
    '& p': {
      fontSize: '1.3rem',
      fontWeight: '400',
      lineHeight: '3.5',
      color: '#fff',
      letterSpacing: '0.3em',
      animation: '$fade-in-top 2s cubic-bezier(0.390, 0.575, 0.565, 1.000)',
      '@media (max-width:600px)': {
        color: '#fff',
        fontSize: '1rem',
        letterSpacing: '0.2em'
      }
    }
  },
  lottie: {
    width: '30%',
    marginTop: '10em',
    cursor: 'pointer',
    animation: '$fade-in-top 2s cubic-bezier(0.390, 0.575, 0.565, 1.000)',
    '@media (max-width:600px)': {
      width: 'auto',
      margin: '0 auto'
    }
  },
  '@keyframes fade-in-top': {
    '0%': {
      transform: 'translateY(-20px)',
      opacity: 0
    },
    '100%': {
      transform: 'translateY(0)',
      opacity: 0.7
    }
  }
});

/***/ })

})
//# sourceMappingURL=index.js.327d186ad738ca7f5656.hot-update.js.map
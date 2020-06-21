webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Lottie/postbox/postbox.js":
/*!**************************************************!*\
  !*** ./src/components/Lottie/postbox/postbox.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LottiePostBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lottie */ "./node_modules/react-lottie/dist/index.js");
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _postbox_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./postbox.json */ "./src/components/Lottie/postbox/postbox.json");
var _postbox_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./postbox.json */ "./src/components/Lottie/postbox/postbox.json", 1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/shotanaka/project/Lerning/nextjs/nextjs-test/src/components/Lottie/postbox/postbox.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  hide: {
    opacity: 0
  },
  container: {
    cursor: 'pointer',
    animation: '$fade-in-top 2s cubic-bezier(0.390, 0.575, 0.565, 1.000)'
  },
  font: {
    fontSize: '3rem',
    color: '#fff',
    fontWeight: '300',
    lineHeight: '2.5',
    '@media (max-width:600px)': {
      fontSize: '2em',
      lineHeight: '4.5'
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
function LottiePostBox(_ref) {
  var isMaxWidth = _ref.isMaxWidth,
      isActiveContact = _ref.isActiveContact;
  var classes = useStyles();
  var defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: _postbox_json__WEBPACK_IMPORTED_MODULE_4__,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/contact",
    passHref: true,
    prefetch: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    direction: "column",
    justify: "center",
    alignItems: "center",
    className: isActiveContact ? classes.container : classes.hide,
    style: {
      filter: 'grayscale(70%)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.font,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, "Go to Contact Page !!"), __jsx(react_lottie__WEBPACK_IMPORTED_MODULE_1___default.a, {
    options: defaultOptions,
    height: isMaxWidth ? 200 : 250,
    width: isMaxWidth ? 200 : 250,
    clickToPause: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.77373aa1132ab52bd341.hot-update.js.map
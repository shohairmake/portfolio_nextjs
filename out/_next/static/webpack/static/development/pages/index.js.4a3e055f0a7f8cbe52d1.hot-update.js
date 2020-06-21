webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/index/Album/Album.js":
/*!*********************************************!*\
  !*** ./src/components/index/Album/Album.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Album; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper_animationHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/animationHelper */ "./src/components/helper/animationHelper.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/shotanaka/project/Lerning/nextjs/nextjs-test/src/components/index/Album/Album.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      cursor: 'pointer',
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      width: '100%',
      height: 865,
      overflow: 'hidden'
    },
    line: {
      opacity: 0,
      position: 'absolute',
      left: 0,
      height: '100%',
      width: '5px',
      backgroundColor: '#000',
      transformOrigin: '0 50%',
      zIndex: 100
    }
  };
});
function Album(_ref) {
  var _this = this;

  var isActive = _ref.isActive,
      images = _ref.images;
  var classes = useStyles();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    console.log(images, 'yobareta');
    Object(_helper_animationHelper__WEBPACK_IMPORTED_MODULE_4__["ImageAnimation"])('.line', '.img', 1, 0);
  }, [isActive]);
  var hair = images.filter(function (hair) {
    return hair.imageTags[0].tags == 'Black_and_White' && !undefined;
  });
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/work",
    passHref: true,
    prefetch: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["GridList"], {
    cellHeight: 300,
    className: classes.gridList,
    cols: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, hair.map(function (img) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["GridListTile"], {
      className: 'imgBox',
      key: img.id,
      cols: 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: "".concat(classes.line, " line"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 29
      }
    }), __jsx("img", {
      className: "".concat(classes.img, " img"),
      src: "".concat(img.image.url, "?fit=crop&w=400&h=400"),
      alt: img.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 29
      }
    }));
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.4a3e055f0a7f8cbe52d1.hot-update.js.map
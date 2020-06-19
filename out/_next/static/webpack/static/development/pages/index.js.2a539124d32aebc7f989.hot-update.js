webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Album/Album.js":
/*!***************************************!*\
  !*** ./src/components/Album/Album.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Album; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _tileData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tileData */ "./src/components/Album/tileData.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
var _jsxFileName = "/Users/shotanaka/project/Lerning/nextjs/nextjs-test/src/components/Album/Album.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // import { ImageAnimation } from '../helper/animationHelper'

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

var ImageAnimation = function ImageAnimation(line, element) {
  animejs__WEBPACK_IMPORTED_MODULE_5__["default"].timeline({
    loop: true
  }).add({
    targets: line,
    scaleY: [0, 1],
    opacity: [0.5, 1],
    easing: 'easeOutExpo',
    duration: 700
  }).add({
    targets: line,
    left: 0,
    width: '100%',
    easing: 'easeOutExpo',
    duration: 700,
    delay: 100
  }).add({
    targets: line,
    right: 0,
    translateX: '100%',
    easing: 'easeOutExpo',
    duration: 700,
    delay: 100
  }).add({
    targets: element,
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 600
  }, '-=1000').add({
    targets: line,
    opacity: 0,
    duration: 1000,
    easing: 'easeOutExpo',
    delay: 1000
  });
};

function Album(props) {
  var _this = this;

  var classes = useStyles();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    if (props.isActive) {
      ImageAnimation('.line', '.img');
    }
  }, [props.isActive]);
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/work",
    passHref: true,
    prefetch: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["GridList"], {
    cellHeight: 300,
    className: classes.gridList,
    cols: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, _tileData__WEBPACK_IMPORTED_MODULE_3__["tileData"].map(function (tile) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["GridListTile"], {
      className: 'imgBox',
      key: tile.img,
      cols: tile.cols || 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: "".concat(classes.line, " line"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 29
      }
    }), __jsx("img", {
      className: "".concat(tile.title, " img"),
      src: tile.img,
      alt: tile.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 29
      }
    }));
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.2a539124d32aebc7f989.hot-update.js.map
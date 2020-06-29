webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/index/TopContainer.js":
/*!**********************************************!*\
  !*** ./src/components/index/TopContainer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopContainer; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _svg_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../svg/Logo */ "./src/components/svg/Logo.js");
/* harmony import */ var _Lottie_ball_LottieBall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Lottie/ball/LottieBall */ "./src/components/Lottie/ball/LottieBall.js");
/* harmony import */ var _helper_animationHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helper/animationHelper */ "./src/components/helper/animationHelper.js");
/* harmony import */ var _public_static_img_hair2_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../public/static/img/hair2.jpg */ "./public/static/img/hair2.jpg");
/* harmony import */ var _public_static_img_hair2_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_static_img_hair2_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_static_img_uyuniSaltLakemono_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../public/static/img/uyuniSaltLakemono.jpg */ "./public/static/img/uyuniSaltLakemono.jpg");
/* harmony import */ var _public_static_img_uyuniSaltLakemono_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_static_img_uyuniSaltLakemono_jpg__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/Users/shotanaka/project/Lerning/nextjs/nextjs-test/src/components/index/TopContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function TopContainer() {
  var classes = useStyles();
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    Object(_helper_animationHelper__WEBPACK_IMPORTED_MODULE_6__["svgAnimation"])();
    Object(_helper_animationHelper__WEBPACK_IMPORTED_MODULE_6__["ImageAnimation"])('.line', '.text', 1, 1000);
  }, []);
  return __jsx("div", {
    className: classes.heroContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.HeroInner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    className: classes.topUnderCard,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    className: classes.topSecondUnderCard,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    className: classes.topCard,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, __jsx(_svg_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.iconLogo,
    width: 140,
    height: 60,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 29
    }
  }), __jsx(_Lottie_ball_LottieBall__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Hidden"], {
    xsDown: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h2",
    className: classes.textAnime,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, "Hair and Web designer")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Hidden"], {
    smUp: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h2",
    className: classes.spTextAnime,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, "Hair and Web designer")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    justify: "flex-end",
    className: classes.nameWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx(_helper_animationHelper__WEBPACK_IMPORTED_MODULE_6__["ImageAnimationWrapper"], {
    width: "60%",
    height: "100%",
    color: "#d3d3d3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: 'h5',
    className: "".concat(classes.name, " text"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, "S H O T A N A K A")))));
}
var textAnime = {
  textAlign: 'end',
  paddingRight: '3em',
  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  animation: '$fadeInFromTop 4s'
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    heroContent: {
      backgroundColor: theme.palette.background["default"],
      backgroundImage: "url(".concat(_public_static_img_uyuniSaltLakemono_jpg__WEBPACK_IMPORTED_MODULE_8___default.a, ")"),
      padding: theme.spacing(8, 0, 6),
      minHeight: '800px',
      width: '100%',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      opacity: '0.8',
      overflow: 'hidden',
      animation: '$fadeIn ease-in-out'
    },
    HeroInner: {
      padding: '100px 0',
      width: '100%',
      height: '100%'
    },
    topUnderCard: {
      height: '400px',
      width: '300px',
      backgroundColor: '#fff',
      margin: '0 auto',
      boxShadow: '0 0 8px #696969',
      borderRadius: '10px',
      position: 'relative',
      '@media (max-width:600px)': {
        height: '350px',
        width: '250px'
      }
    },
    topSecondUnderCard: {
      height: '100%',
      width: '100%',
      backgroundColor: '#fff',
      margin: '0 auto',
      transform: 'rotate(20deg)',
      borderRadius: '10px',
      position: 'relative',
      backgroundImage: "url(".concat(_public_static_img_hair2_jpg__WEBPACK_IMPORTED_MODULE_7___default.a, ")"),
      backgroundSize: 'cover',
      animation: '$fadeIn ease-in-out 2s'
    },
    topCard: {
      height: '85%',
      width: '80%',
      backgroundColor: '#fff',
      position: 'absolute',
      transform: 'rotate(-20deg) translate(-22%,-60%)',
      top: '50%',
      left: '50%',
      boxShadow: '0 0 8px #696969',
      animation: '$fadeIn ease-in-out 5s'
    },
    iconLogo: {
      position: 'absolute',
      top: '20%',
      left: '50%'
    },
    textAnime: _objectSpread({}, textAnime, {
      fontSize: '1em',
      marginTop: '-230px'
    }),
    spTextAnime: _objectSpread({}, textAnime, {
      fontSize: '1em',
      marginTop: '80px'
    }),
    nameWrapper: {
      marginTop: '3.5em'
    },
    name: {
      textAlign: 'end',
      marginRight: '3.5rem',
      '@media (max-width:600px)': {
        marginRight: '3rem',
        fontSize: '1.2rem'
      }
    },
    '@keyframes fadeIn': {
      from: {
        opacity: '0'
      },
      to: {
        opacity: '1'
      }
    },
    '@keyframes fadeInFromTop': {
      '0%': {
        opacity: '0',
        transform: 'translateY(-30px)'
      },
      '100%': {
        transform: 'translateY(0px)',
        opacity: '1'
      }
    }
  };
});

/***/ })

})
//# sourceMappingURL=index.js.80fe71d0a95ee31935a4.hot-update.js.map
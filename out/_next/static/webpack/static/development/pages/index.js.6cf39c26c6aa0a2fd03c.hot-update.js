webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_header_HeaderList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header/HeaderList */ "./src/components/header/HeaderList.js");
/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header/Header */ "./src/components/header/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _components_index_TopContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/index/TopContainer */ "./src/components/index/TopContainer.js");
/* harmony import */ var _components_header_SwipeDrawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/header/SwipeDrawer */ "./src/components/header/SwipeDrawer.js");
/* harmony import */ var _components_index_Album_Album__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/index/Album/Album */ "./src/components/index/Album/Album.js");
/* harmony import */ var _components_index_AboutContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/index/AboutContainer */ "./src/components/index/AboutContainer.js");
/* harmony import */ var _components_Lottie_postbox_postbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Lottie/postbox/postbox */ "./src/components/Lottie/postbox/postbox.js");
/* harmony import */ var _public_static_img_uyuniSaltLakemono_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../public/static/img/uyuniSaltLakemono.jpg */ "./public/static/img/uyuniSaltLakemono.jpg");
/* harmony import */ var _public_static_img_uyuniSaltLakemono_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_static_img_uyuniSaltLakemono_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_static_img_WORK_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../public/static/img/WORK.png */ "./public/static/img/WORK.png");
/* harmony import */ var _public_static_img_WORK_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_static_img_WORK_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _public_static_img_ABOUT_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../public/static/img/ABOUT.png */ "./public/static/img/ABOUT.png");
/* harmony import */ var _public_static_img_ABOUT_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_public_static_img_ABOUT_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _public_static_img_CONTACT_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../public/static/img/CONTACT.png */ "./public/static/img/CONTACT.png");
/* harmony import */ var _public_static_img_CONTACT_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_static_img_CONTACT_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_helper_animationHelper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/helper/animationHelper */ "./src/components/helper/animationHelper.js");

var _jsxFileName = "/Users/shotanaka/project/Lerning/nextjs/nextjs-test/src/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










 // image file






var __N_SSG = true;
function Index(_ref) {
  var images = _ref.images;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    fadeInWork: classes.hide,
    fadeInAbout: classes.hide,
    fadeInContact: classes.hide
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      isActive = _React$useState4[0],
      setIsActive = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      isActiveAboutInner = _React$useState6[0],
      setIsActiveAboutInner = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState7, 2),
      isMaxWidth = _React$useState8[0],
      setIsMaxWith = _React$useState8[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (window.innerWidth < 600) {
      setIsMaxWith(true);
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_header_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Hidden"], {
    smUp: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx(_components_header_SwipeDrawer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Hidden"], {
    xsDown: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx(_components_header_HeaderList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }))), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx(_components_index_TopContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: classes.gap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: state.fadeInWork,
    src: _public_static_img_WORK_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    alt: "work_logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 29
    }
  }))), __jsx(_components_helper_animationHelper__WEBPACK_IMPORTED_MODULE_16__["VisibleContainer"], {
    state: isActive,
    setState: setIsActive,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, __jsx(_components_index_Album_Album__WEBPACK_IMPORTED_MODULE_9__["default"], {
    isActive: isActive,
    images: images,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: classes.gap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: state.fadeInAbout,
    src: _public_static_img_ABOUT_png__WEBPACK_IMPORTED_MODULE_14___default.a,
    alt: "about_logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, __jsx(_components_helper_animationHelper__WEBPACK_IMPORTED_MODULE_16__["VisibleContainer"], {
    state: isActiveAboutInner,
    setState: setIsActiveAboutInner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, __jsx(_components_index_AboutContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    isActiveAboutInner: isActiveAboutInner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 29
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: classes.gap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: state.fadeInContact,
    src: _public_static_img_CONTACT_png__WEBPACK_IMPORTED_MODULE_15___default.a,
    alt: "contact_logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: classes.inner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }, __jsx(_components_Lottie_postbox_postbox__WEBPACK_IMPORTED_MODULE_11__["default"], {
    isMaxWidth: isMaxWidth,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 29
    }
  }))))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    description: "Hair and Web designer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }));
}
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8)
    },
    gap: {
      width: '100%',
      height: '200px',
      display: 'table',
      textAlign: 'center',
      '& div': {
        display: 'table-cell',
        verticalAlign: 'middle'
      }
    },
    container: {
      width: '100%',
      height: 'auto'
    },
    inner: {
      backgroundImage: "url(".concat(_public_static_img_uyuniSaltLakemono_jpg__WEBPACK_IMPORTED_MODULE_12___default.a, ")"),
      minHeight: '400px'
    },
    imgLogo: {
      width: '14em',
      height: 'auto',
      '@media (max-width:600px)': {
        width: '11em'
      }
    },
    imgLogoContact: {
      width: '18em',
      height: 'auto',
      '@media (max-width:600px)': {
        width: '15em'
      }
    },
    fadeInDown: {
      animation: '$fade-in-top 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'
    },
    hide: {
      opacity: 0
    },
    '@keyframes fade-in-top': {
      '0%': {
        transform: 'translateY(-50px)',
        opacity: 0
      },
      '100%': {
        transform: 'translateY(0)',
        opacity: 0.7
      }
    }
  };
});

/***/ })

})
//# sourceMappingURL=index.js.6cf39c26c6aa0a2fd03c.hot-update.js.map
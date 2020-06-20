webpackHotUpdate("static/development/pages/test.js",{

/***/ "./src/pages/test.js":
/*!***************************!*\
  !*** ./src/pages/test.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return contact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header_HeaderList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header/HeaderList */ "./src/components/header/HeaderList.js");
/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/Header */ "./src/components/header/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _components_header_SwipeDrawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header/SwipeDrawer */ "./src/components/header/SwipeDrawer.js");
/* harmony import */ var _public_static_img_CONTACT_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/static/img/CONTACT.png */ "./public/static/img/CONTACT.png");
/* harmony import */ var _public_static_img_CONTACT_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_static_img_CONTACT_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_form_Success__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/form/Success */ "./src/components/form/Success.js");
var _jsxFileName = "/Users/shotanaka/project/Lerning/nextjs/nextjs-test/src/pages/test.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return {
    heroContent: {
      padding: theme.spacing(8, 0, 6),
      minHeight: '800px',
      width: '100%',
      background: 'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
      overflow: 'hidden'
    },
    mainContent: {
      backgroundColor: '#f8f8f8',
      width: '100%',
      height: '100%',
      borderRadius: '20px',
      boxShadow: '1px 1px 5px #fff'
    },
    gap: {
      width: '100%',
      height: '13rem',
      display: 'table',
      textAlign: 'center',
      '@media (max-width:600px)': {
        height: '8rem'
      },
      '& div': {
        display: 'table-cell',
        verticalAlign: 'middle',
        '& img': {
          zIndex: 1,
          position: 'relative',
          opacity: 0.7,
          animation: '$fade-in-top 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'
        },
        '& hr': {
          width: '100%',
          height: '1.5em',
          backgroundColor: '#fff',
          borderWidth: 'inherit',
          borderStyle: 'none',
          transform: 'translateY(-65px)',
          zIndex: 0,
          opacity: 0.7,
          '@media (max-width:600px)': {
            height: '1em',
            transform: 'translateY(-50px)'
          }
        }
      }
    },
    imgLogo: {
      width: '18em',
      height: 'auto',
      '@media (max-width:600px)': {
        width: '13em'
      }
    },
    '@keyframes fade-in-top': {
      '0%': {
        transform: 'translateY(-30px)',
        opacity: 0
      },
      '100%': {
        transform: 'translateY(0)',
        opacity: 0.7
      }
    }
  };
});
function contact() {
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Hidden"], {
    smUp: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, __jsx(_components_header_SwipeDrawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Hidden"], {
    xsDown: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, __jsx(_components_header_HeaderList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }))), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.heroContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    className: classes.gap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: classes.imgLogo,
    src: _public_static_img_CONTACT_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "contact_logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 29
    }
  }), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 29
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    className: classes.mainContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 25
    }
  }, __jsx("div", {
    style: {
      paddingTop: '50px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    direction: "row",
    justify: "space-evenly",
    alignItems: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 33
    }
  }, __jsx(_components_form_Success__WEBPACK_IMPORTED_MODULE_8__["Success"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 37
    }
  }))))))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    description: "Hair and Web designer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }));
}

/***/ })

})
//# sourceMappingURL=test.js.2e98d11d41d84818bf11.hot-update.js.map
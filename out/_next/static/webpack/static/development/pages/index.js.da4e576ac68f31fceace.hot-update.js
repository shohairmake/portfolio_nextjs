webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/header/HeaderList.js":
/*!*********************************************!*\
  !*** ./src/components/header/HeaderList.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomizedMenus; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var react_useanimations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-useanimations */ "./node_modules/react-useanimations/index.js");
/* harmony import */ var react_useanimations__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_useanimations__WEBPACK_IMPORTED_MODULE_7__);



var _this = undefined,
    _jsxFileName = "/Users/shotanaka/project/Lerning/nextjs/nextjs-test/src/components/header/HeaderList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var StyledMenu = function StyledMenu(props) {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Menu"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    elevation: 0,
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }));
};

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  menu: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    color: '#4d4d4d'
  },
  menuIcon: {
    display: 'inline',
    textAlign: 'center',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontSize: '0.8em',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    cursor: 'pointer'
  },
  icon: {
    color: '#4d4d4d',
    marginTop: '10px',
    cursor: 'pointer'
  }
});
function CustomizedMenus() {
  var _this2 = this;

  var initAnchorEl = null;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(initAnchorEl),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(initAnchorEl);
  };

  var Content = function Content(_ref) {
    var _ref$href = _ref.href,
        href = _ref$href === void 0 ? {} : _ref$href,
        _ref$text = _ref.text,
        text = _ref$text === void 0 ? {} : _ref$text,
        _ref$icon = _ref.icon,
        icon = _ref$icon === void 0 ? {} : _ref$icon;
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: href,
      passHref: true,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
      onClick: handleClose,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ListItemIcon"], {
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }, icon), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ListItemText"], {
      primary: text,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    })));
  };

  var Icon = function Icon(_ref2) {
    var _ref2$href = _ref2.href,
        href = _ref2$href === void 0 ? {} : _ref2$href,
        _ref2$animationKey = _ref2.animationKey,
        animationKey = _ref2$animationKey === void 0 ? {} : _ref2$animationKey;
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: href,
      passHref: true,
      prefetch: false,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }
    }, __jsx("a", {
      className: classes.icon,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }
    }, __jsx(react_useanimations__WEBPACK_IMPORTED_MODULE_7___default.a, {
      animationKey: animationKey,
      size: 40,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }
    })));
  };

  return __jsx("div", {
    className: classes.menu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.menuIcon,
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx(react_useanimations__WEBPACK_IMPORTED_MODULE_7___default.a, {
    animationKey: "archive",
    size: 40,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }), "Menu"), __jsx(StyledMenu, {
    anchorEl: anchorEl,
    open: Boolean(anchorEl),
    onClose: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, __jsx(Content, {
    href: "/",
    text: "Home",
    icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["Home"], {
      fontSize: "small",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 31
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }), __jsx(Content, {
    href: "/work",
    text: "Work",
    icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["BurstMode"], {
      fontSize: "small",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 31
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }), __jsx(Content, {
    href: "/about",
    text: "About",
    icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["Info"], {
      fontSize: "small",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 31
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }), __jsx(Content, {
    href: "/contact",
    text: "Contact",
    icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["Mail"], {
      fontSize: "small",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 31
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }))), __jsx(Icon, {
    href: "https://www.instagram.com/shotanaka.hair/",
    animationKey: "instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }), __jsx(Icon, {
    href: "https://www.facebook.com/taku.hair",
    animationKey: "facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }), __jsx(Icon, {
    href: "https://twitter.com/shoon75443247",
    animationKey: "twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.da4e576ac68f31fceace.hot-update.js.map
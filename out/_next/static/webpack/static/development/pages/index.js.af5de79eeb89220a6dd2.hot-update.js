webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/common/header/SwipeDrawer.js":
/*!*****************************************************!*\
  !*** ./src/components/common/header/SwipeDrawer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SwipeDrawer; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/SwipeableDrawer */ "./node_modules/@material-ui/core/esm/SwipeableDrawer/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var react_animated_burgers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-animated-burgers */ "./node_modules/react-animated-burgers/lib/index.js");
/* harmony import */ var react_animated_burgers__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_animated_burgers__WEBPACK_IMPORTED_MODULE_11__);


var _this = undefined,
    _jsxFileName = "/Users/shotanaka/project/Lerning/nextjs/nextjs-test/src/components/common/header/SwipeDrawer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  paper: {
    background: 'linear-gradient(to left, #fafafa, #eef2f3)',
    opacity: '0.8'
  }
});

var Contet = function Contet(_ref) {
  var _ref$href = _ref.href,
      href = _ref$href === void 0 ? {} : _ref$href,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? {} : _ref$text,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? {} : _ref$icon;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href,
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    button: true,
    key: text,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, icon), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    primary: text,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  })));
};

function SwipeDrawer(_ref2) {
  var _this2 = this;

  var children = _ref2.children;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      isActive = _React$useState2[0],
      setIsActive = _React$useState2[1];

  var toggleDrawer = function toggleDrawer(open) {
    return function (event) {
      setIsActive(open);
    };
  };

  var list = function list() {
    return __jsx("div", {
      className: classes.list,
      role: "presentation",
      onClick: toggleDrawer(false),
      onKeyDown: toggleDrawer(false),
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, __jsx(Contet, {
      href: "/",
      text: "Home",
      icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__["Home"], {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 52
        }
      }),
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }
    }), __jsx(Contet, {
      href: "/work",
      text: "Work",
      icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__["BurstMode"], {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 56
        }
      }),
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    }), __jsx(Contet, {
      href: "/blog",
      text: "blog",
      icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__["MenuBook"], {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 56
        }
      }),
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }
    }), __jsx(Contet, {
      href: "/about",
      text: "About",
      icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__["Info"], {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 58
        }
      }),
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }
    }), __jsx(Contet, {
      href: "/contact",
      text: "Contact",
      icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__["Mail"], {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 62
        }
      }),
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    })), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }
    }, __jsx(Contet, {
      href: "/",
      text: "Instagram",
      icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__["Instagram"], {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 57
        }
      }),
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }), __jsx(Contet, {
      href: "/",
      text: "Facebook",
      icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__["Facebook"], {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 56
        }
      }),
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }
    }), __jsx(Contet, {
      href: "/",
      text: "Twitter",
      icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__["Twitter"], {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 55
        }
      }),
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    })));
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    onClick: toggleDrawer(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx(react_animated_burgers__WEBPACK_IMPORTED_MODULE_11__["HamburgerSlider"], {
    onClick: function onClick() {
      return setIsActive(!isActive);
    },
    isActive: isActive,
    buttonStyle: {
      margin: '0 auto'
    },
    barColor: "white",
    buttonWidth: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    anchor: "right",
    open: isActive,
    onClose: toggleDrawer(false),
    onOpen: toggleDrawer(true),
    classes: {
      paper: classes.paper
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, list())));
}

/***/ })

})
//# sourceMappingURL=index.js.af5de79eeb89220a6dd2.hot-update.js.map
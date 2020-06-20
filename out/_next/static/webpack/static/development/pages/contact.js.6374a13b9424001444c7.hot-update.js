webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./src/components/form/Confirm.js":
/*!****************************************!*\
  !*** ./src/components/form/Confirm.js ***!
  \****************************************/
/*! exports provided: Confirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Confirm", function() { return Confirm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "/Users/shotanaka/project/Lerning/nextjs/nextjs-test/src/components/form/Confirm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    textCenter: {
      textAlign: 'center',
      margin: theme.spacing(1)
    },
    button: {
      margin: theme.spacing(1)
    }
  };
});
var Confirm = function Confirm(_ref) {
  var formData = _ref.formData,
      prevStep = _ref.prevStep,
      nextStep = _ref.nextStep;
  var classes = useStyles();
  var firstName = formData.firstName,
      lastName = formData.lastName,
      email = formData.email,
      message = formData.message;

  var onClickHandler = function onClickHandler(e) {
    e.preventDefault();
    var data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message
    };
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("".concat("https://strad.microcms.io/api/v1", "/contacts"), {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'X-WRITE-API-KEY': "47f7ff96-fa81-4df3-9892-c593eecdfd9f"
      }
    })["catch"](function (err) {
      console.log(err);
    });
    nextStep();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["List"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: 'h4',
    className: classes.textCenter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 29
    }
  }, "First Name"), __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: 'h6',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  }, firstName))), __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: 'h4',
    className: classes.textCenter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 29
    }
  }, "Last Name"), __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: 'h6',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 29
    }
  }, lastName))), __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: 'h4',
    className: classes.textCenter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 29
    }
  }, "Email"), __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: 'h6',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  }, email))), __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: 'h4',
    className: classes.textCenter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  }, "Message"), __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: 'h6',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  }, message)))), __jsx("div", {
    className: classes.textCenter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["Button"], {
    color: "secondary",
    variant: "contained",
    className: classes.button,
    onClick: function onClick() {
      return prevStep();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }, "Back"), __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_3__["Button"], {
    color: "primary",
    variant: "contained",
    className: classes.button,
    onClick: onClickHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, "Confirm & Continue"))));
};
Confirm.propTypes = {
  formData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  prevStep: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  nextStep: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ })

})
//# sourceMappingURL=contact.js.6374a13b9424001444c7.hot-update.js.map
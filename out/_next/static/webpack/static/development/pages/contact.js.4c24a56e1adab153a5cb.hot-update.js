webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./src/components/form/FormPersonalDetails.js":
false,

/***/ "./src/components/form/UserForm.js":
/*!*****************************************!*\
  !*** ./src/components/form/UserForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormUserDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormUserDetails */ "./src/components/form/FormUserDetails.js");
/* harmony import */ var _Confirm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Confirm */ "./src/components/form/Confirm.js");
/* harmony import */ var _Success__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Success */ "./src/components/form/Success.js");
var _jsxFileName = "/Users/shotanaka/project/Lerning/nextjs/nextjs-test/src/components/form/UserForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function UserForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      step = _useState[0],
      setStep = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  }),
      formData = _useState2[0],
      setFormData = _useState2[1];

  var nextStep = function nextStep() {
    return setStep(function (prev) {
      return prev + 1;
    });
  };

  var prevStep = function prevStep() {
    return setStep(function (prev) {
      return prev - 1;
    });
  };

  switch (step) {
    case 1:
      return __jsx(_FormUserDetails__WEBPACK_IMPORTED_MODULE_1__["FormUserDetails"], {
        formData: formData,
        setFormData: setFormData,
        nextStep: nextStep,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 17
        }
      });

    case 2:
      return __jsx(_Confirm__WEBPACK_IMPORTED_MODULE_2__["Confirm"], {
        formData: formData,
        nextStep: nextStep,
        prevStep: prevStep,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }
      });

    default:
      return __jsx(_Success__WEBPACK_IMPORTED_MODULE_3__["Success"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 20
        }
      });
  }
}

/***/ })

})
//# sourceMappingURL=contact.js.4c24a56e1adab153a5cb.hot-update.js.map
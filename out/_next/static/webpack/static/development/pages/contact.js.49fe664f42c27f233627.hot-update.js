webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./src/components/form/FormUserDetails.js":
/*!************************************************!*\
  !*** ./src/components/form/FormUserDetails.js ***!
  \************************************************/
/*! exports provided: FormUserDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormUserDetails", function() { return FormUserDetails; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
var _this = undefined,
    _jsxFileName = "/Users/shotanaka/project/Lerning/nextjs/nextjs-test/src/components/form/FormUserDetails.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    hello: {
      fontSize: '3em',
      fontWeight: '100',
      letterSpacing: '0.5em',
      '@media (max-width:600px)': {
        fontSize: '2em',
        letterSpacing: '0.1em'
      }
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '80%',
      '& div': {
        marginTop: '36px',
        marginBottom: '16px'
      }
    },
    button: {
      fontSize: '1.5em',
      fontWeight: '100',
      opacity: '0.7',
      margin: theme.spacing(3)
    }
  };
});
var validationSchema = yup__WEBPACK_IMPORTED_MODULE_6__["object"]({
  firstName: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().required('First Name is required').max(20),
  lastName: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().required('Last Name is required').max(20),
  email: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().email('Invalid email').required('Email is required'),
  message: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().required('Message is required')
});
var FormUserDetails = function FormUserDetails(_ref) {
  var formData = _ref.formData,
      setFormData = _ref.setFormData,
      nextStep = _ref.nextStep;
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    className: classes.hello,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, "Please Say Hello"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: formData,
    onSubmit: function onSubmit(values) {
      setFormData(values);
      nextStep();
    },
    validationSchema: validationSchema,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, function (_ref2) {
    var errors = _ref2.errors,
        touched = _ref2.touched;
    return __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      className: classes.form,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "firstName",
      label: "First Name *",
      margin: "normal",
      fullWidth: true,
      as: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"],
      error: touched.firstName && errors.firstName,
      helperText: touched.firstName && errors.firstName,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 25
      }
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "lastName",
      label: "Last Name *",
      margin: "normal",
      fullWidth: true,
      as: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"],
      error: touched.lastName && errors.lastName,
      helperText: touched.lastName && errors.lastName,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 25
      }
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      type: "email",
      name: "email",
      label: "Email *",
      margin: "normal",
      fullWidth: true,
      as: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"],
      error: touched.email && errors.email,
      helperText: touched.email && errors.email,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 25
      }
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      type: "message",
      name: "message",
      label: "message *",
      margin: "normal",
      as: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"],
      multiline: true,
      rows: 5,
      fullWidth: true,
      error: touched.message && errors.message,
      helperText: touched.message && errors.message,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 25
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      type: "submit",
      variant: "contained",
      color: "primary",
      className: classes.button,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 25
      }
    }, "Continue"));
  }));
};
FormUserDetails.propTypes = {
  formData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  setFormData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  nextStep: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ })

})
//# sourceMappingURL=contact.js.49fe664f42c27f233627.hot-update.js.map
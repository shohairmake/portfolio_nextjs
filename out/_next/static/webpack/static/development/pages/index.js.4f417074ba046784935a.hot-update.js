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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_index_TopContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/index/TopContainer */ "./src/components/index/TopContainer.js");
/* harmony import */ var _components_index_WorkContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/index/WorkContainer */ "./src/components/index/WorkContainer.js");
/* harmony import */ var _components_index_AboutContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/index/AboutContainer */ "./src/components/index/AboutContainer.js");
/* harmony import */ var _components_index_LogoContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/index/LogoContainer */ "./src/components/index/LogoContainer.js");
/* harmony import */ var _components_Lottie_postbox_postbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Lottie/postbox/postbox */ "./src/components/Lottie/postbox/postbox.js");
/* harmony import */ var _components_common_Template__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/common/Template */ "./src/components/common/Template.js");
/* harmony import */ var _components_helper_animationHelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/helper/animationHelper */ "./src/components/helper/animationHelper.js");
/* harmony import */ var _components_blog_BlogContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/blog/BlogContainer */ "./src/components/blog/BlogContainer.js");
/* harmony import */ var _public_static_img_WORK_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../public/static/img/WORK.png */ "./public/static/img/WORK.png");
/* harmony import */ var _public_static_img_WORK_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_static_img_WORK_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_static_img_BLOG_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../public/static/img/BLOG.png */ "./public/static/img/BLOG.png");
/* harmony import */ var _public_static_img_BLOG_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_static_img_BLOG_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _public_static_img_ABOUT_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../public/static/img/ABOUT.png */ "./public/static/img/ABOUT.png");
/* harmony import */ var _public_static_img_ABOUT_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_public_static_img_ABOUT_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _public_static_img_CONTACT_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../public/static/img/CONTACT.png */ "./public/static/img/CONTACT.png");
/* harmony import */ var _public_static_img_CONTACT_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_static_img_CONTACT_png__WEBPACK_IMPORTED_MODULE_15__);

var _jsxFileName = "/Users/shotanaka/project/Lerning/nextjs/nextjs-test/src/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 //components








 // image file





var __N_SSG = true;
function Index(_ref) {
  var images = _ref.images,
      blogs = _ref.blogs;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    fadeInWork: classes.hide,
    fadeInBlog: classes.hide,
    fadeInAbout: classes.hide,
    fadeInContact: classes.hide
  }),
      state = _useState[0],
      setState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isActiveWorkInner = _useState2[0],
      setIsActiveWorkInner = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isActiveAboutInner = _useState3[0],
      setIsActiveAboutInner = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isActiveContact = _useState4[0],
      setIsActiveContact = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isMaxWidth = _useState5[0],
      setIsMaxWith = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (window.innerWidth < 600) {
      setIsMaxWith(true);
    }

    console.log(document.documentElement.scrollTop);

    var scrollAction = function scrollAction() {
      if (document.documentElement.scrollTop > 240 || document.body.scrollTop > 240) {
        setState(_objectSpread({}, state, {
          fadeInWork: classes.imgLogo
        }));
      }

      if (document.documentElement.scrollTop > 1200 || document.body.scrollTop > 1200) {
        setState(_objectSpread({}, state, {
          fadeInAbout: classes.imgLogo,
          fadeInBlog: classes.imgLogo
        }));
      }

      if (document.documentElement.scrollTop > 1800 || document.body.scrollTop > 1800) {
        setState(_objectSpread({}, state, {
          fadeInContact: classes.imgLogoContact
        }));
      }
    };

    window.addEventListener('scroll', scrollAction);
    return function cleanup() {
      window.removeEventListener('scroll', scrollAction);
    };
  });
  var filterBlogs = blogs.filter(function (blog, index) {
    return index < 3;
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_common_Template__WEBPACK_IMPORTED_MODULE_9__["IndexTemplate"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx(_components_index_TopContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, __jsx(_components_index_LogoContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    logo: _public_static_img_WORK_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "work_logo",
    state: state.fadeInWork,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }), __jsx(_components_helper_animationHelper__WEBPACK_IMPORTED_MODULE_10__["VisibleContainer"], {
    state: isActiveWorkInner,
    setState: setIsActiveWorkInner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 25
    }
  }, __jsx(_components_index_WorkContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    images: images,
    isActiveWorkInner: isActiveWorkInner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 29
    }
  })), __jsx(_components_index_LogoContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    logo: _public_static_img_BLOG_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    alt: "blog_logo",
    state: state.fadeInBlog,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }, __jsx(_components_blog_BlogContainer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    blogs: filterBlogs,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 29
    }
  })), __jsx(_components_index_LogoContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    logo: _public_static_img_ABOUT_png__WEBPACK_IMPORTED_MODULE_14___default.a,
    alt: "about_logo",
    state: state.fadeInAbout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }, __jsx(_components_helper_animationHelper__WEBPACK_IMPORTED_MODULE_10__["VisibleContainer"], {
    state: isActiveAboutInner,
    setState: setIsActiveAboutInner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 29
    }
  }, __jsx(_components_index_AboutContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isActiveAboutInner: isActiveAboutInner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 33
    }
  }))), __jsx(_components_index_LogoContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    logo: _public_static_img_CONTACT_png__WEBPACK_IMPORTED_MODULE_15___default.a,
    alt: "contact_logo",
    state: state.fadeInContact,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 25
    }
  }, __jsx(_components_helper_animationHelper__WEBPACK_IMPORTED_MODULE_10__["VisibleContainer"], {
    state: isActiveContact,
    setState: setIsActiveContact,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 29
    }
  }, __jsx(_components_Lottie_postbox_postbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isMaxWidth: isMaxWidth,
    isActiveContact: isActiveContact,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 33
    }
  })))))));
}
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  container: {
    width: '100%',
    height: 'auto',
    minHeight: '400px',
    backgroundColor: '#c8c8c8'
  },
  imgLogo: {
    width: '14em',
    height: 'auto',
    animation: '$fade-in-top 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
    '@media (max-width:600px)': {
      width: '11em'
    }
  },
  imgLogoContact: {
    width: '18em',
    height: 'auto',
    animation: '$fade-in-top 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
    '@media (max-width:600px)': {
      width: '15em'
    }
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
});

/***/ })

})
//# sourceMappingURL=index.js.4f417074ba046784935a.hot-update.js.map
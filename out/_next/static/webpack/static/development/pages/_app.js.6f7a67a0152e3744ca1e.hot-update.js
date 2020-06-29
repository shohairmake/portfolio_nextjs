webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StradApp; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../theme */ "./src/theme.js");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-page-transitions */ "./node_modules/next-page-transitions/lib/index.js");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_page_transitions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _next_seo_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../next-seo.config */ "./next-seo.config.js");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_10__);


var _this = undefined,
    _jsxFileName = "/Users/shotanaka/project/Lerning/nextjs/nextjs-test/src/pages/_app.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










var DEFAULT_SEO = function DEFAULT_SEO() {
  return __jsx(next_seo__WEBPACK_IMPORTED_MODULE_8__["DefaultSeo"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: "StraD Home",
    description: "web site of Sho Tanaka who is hair artist and web programer ",
    keywords: "hair make,hair Style,programing,react,next.js,"
  }, _next_seo_config__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }));
};

var __N_SSG = true;
function StradApp(_ref) {
  var images = _ref.images,
      blogs = _ref.blogs,
      Component = _ref.Component,
      pageProps = _ref.pageProps,
      router = _ref.router;
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    // Remove the server-side injected CSS.
    var jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx(DEFAULT_SEO, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }), __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, "StraD inc.")), __jsx(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["StylesProvider"], {
    injectFirst: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }), __jsx(next_page_transitions__WEBPACK_IMPORTED_MODULE_7__["PageTransition"], {
    timeout: 100,
    classNames: "page-transition",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    key: router.route,
    images: images,
    blogs: blogs,
    className: "jsx-1698676647" + " " + (pageProps && pageProps.className != null && pageProps.className || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1698676647",
    __self: this
  }, ".page-transition-enter{opacity:0;}.page-transition-enter-active{opacity:1;-webkit-transition:opacity 200ms;transition:opacity 200ms;}.page-transition-exit{opacity:1;}.page-transition-exit-active{opacity:0;-webkit-transition:opacity 200ms;transition:opacity 200ms;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaG90YW5ha2EvcHJvamVjdC9MZXJuaW5nL25leHRqcy9uZXh0anMtdGVzdC9zcmMvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRHVDLEFBR3VDLEFBR0EsQUFJQSxBQUdBLFVBVGQsQUFHNkIsQUFJN0IsQUFHNkIsMERBTjdCLEFBT0EiLCJmaWxlIjoiL1VzZXJzL3Nob3RhbmFrYS9wcm9qZWN0L0xlcm5pbmcvbmV4dGpzL25leHRqcy10ZXN0L3NyYy9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgU3R5bGVzUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJ1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJ1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3RoZW1lJ1xuaW1wb3J0IHsgUGFnZVRyYW5zaXRpb24gfSBmcm9tICduZXh0LXBhZ2UtdHJhbnNpdGlvbnMnXG5pbXBvcnQgeyBEZWZhdWx0U2VvIH0gZnJvbSAnbmV4dC1zZW8nXG5pbXBvcnQgc2VvQ29uZmlnIGZyb20gJy4uLy4uL25leHQtc2VvLmNvbmZpZydcblxuaW1wb3J0ICdhbmltYXRlLmNzcydcblxuY29uc3QgREVGQVVMVF9TRU8gPSAoKSA9PiAoXG4gICAgPERlZmF1bHRTZW9cbiAgICAgICAgdGl0bGU9XCJTdHJhRCBIb21lXCJcbiAgICAgICAgZGVzY3JpcHRpb249XCJ3ZWIgc2l0ZSBvZiBTaG8gVGFuYWthIHdobyBpcyBoYWlyIGFydGlzdCBhbmQgd2ViIHByb2dyYW1lciBcIlxuICAgICAgICBrZXl3b3Jkcz1cImhhaXIgbWFrZSxoYWlyIFN0eWxlLHByb2dyYW1pbmcscmVhY3QsbmV4dC5qcyxcIlxuICAgICAgICB7Li4uc2VvQ29uZmlnfVxuICAgIC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0cmFkQXBwKHtcbiAgICBpbWFnZXMsXG4gICAgYmxvZ3MsXG4gICAgQ29tcG9uZW50LFxuICAgIHBhZ2VQcm9wcyxcbiAgICByb3V0ZXIsXG59KSB7XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1MuXG4gICAgICAgIGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc3Mtc2VydmVyLXNpZGUnKVxuICAgICAgICBpZiAoanNzU3R5bGVzKSB7XG4gICAgICAgICAgICBqc3NTdHlsZXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChqc3NTdHlsZXMpXG4gICAgICAgIH1cbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8REVGQVVMVF9TRU8gLz5cbiAgICAgICAgICAgICAgICA8dGl0bGU+U3RyYUQgaW5jLjwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8U3R5bGVzUHJvdmlkZXIgaW5qZWN0Rmlyc3Q+XG4gICAgICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgICAgICAgICAgICAgIDxQYWdlVHJhbnNpdGlvbiB0aW1lb3V0PXsxMDB9IGNsYXNzTmFtZXM9XCJwYWdlLXRyYW5zaXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cm91dGVyLnJvdXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcz17aW1hZ2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2dzPXtibG9nc31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFnZVRyYW5zaXRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgICAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWVudGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1lbnRlci1hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZXhpdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZXhpdC1hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgICAgICAgIDwvU3R5bGVzUHJvdmlkZXI+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgIGNvbnN0IGtleSA9IHtcbiAgICAgICAgaGVhZGVyczogeyAnWC1BUEktS0VZJzogcHJvY2Vzcy5lbnYuQVBJX0tFWSB9LFxuICAgIH1cbiAgICBjb25zdCBpbWFnZVJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgJHtwcm9jZXNzLmVudi5BUElfRU5EX1BPSU5UfS9pbWFnZT9saW1pdD0zMGAsXG4gICAgICAgIGtleVxuICAgIClcbiAgICBjb25zdCBibG9nUmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQVBJX0VORF9QT0lOVH0vYmxvZ3NgLCBrZXkpXG4gICAgY29uc3QgaW1hZ2VEYXRhID0gYXdhaXQgaW1hZ2VSZXMuanNvbigpXG4gICAgY29uc3QgYmxvZ0RhdGEgPSBhd2FpdCBibG9nUmVzLmpzb24oKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGltYWdlczogaW1hZ2VEYXRhLmNvbnRlbnRzLFxuICAgICAgICAgICAgYmxvZ3M6IGJsb2dEYXRhLmNvbnRlbnRzLFxuICAgICAgICB9LFxuICAgIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/shotanaka/project/Lerning/nextjs/nextjs-test/src/pages/_app.js */"))));
}

/***/ })

})
//# sourceMappingURL=_app.js.6f7a67a0152e3744ca1e.hot-update.js.map
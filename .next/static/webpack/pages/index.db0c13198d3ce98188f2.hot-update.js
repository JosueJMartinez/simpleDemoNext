webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ListPosts.jsx":
/*!**********************************!*\
  !*** ./components/ListPosts.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListPosts; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");


var _jsxFileName = "C:\\Node.js_projs\\Next_projs\\firstNextPracticeApp\\components\\ListPosts.jsx";



function ListPosts(_ref) {
  var _this = this;

  var posts = _ref.posts;

  var errorHandling = function errorHandling() {
    return typeof posts === "string" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "\"Error\""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 33
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: list()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 52
    }, _this);
  };

  var returnList = function returnList() {
    return errorHandling();
  }; // console.log(errorHandling);


  var list = function list() {
    return posts.map(function (_ref2) {
      var title = _ref2.title,
          id = _ref2.id;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/post?postId=".concat(id),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 9
        }, _this)
      }, Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(), false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [" ", returnList()]
  }, void 0, true);
}
_c = ListPosts;

var _c;

$RefreshReg$(_c, "ListPosts");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0UG9zdHMuanN4Il0sIm5hbWVzIjpbIkxpc3RQb3N0cyIsInBvc3RzIiwiZXJyb3JIYW5kbGluZyIsImxpc3QiLCJyZXR1cm5MaXN0IiwibWFwIiwidGl0bGUiLCJpZCIsInV1aWR2NCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsT0FBOEI7QUFBQTs7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQzNDLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxXQUNwQixPQUFPRCxLQUFQLEtBQWlCLFFBQWpCLGdCQUE0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUE1QixnQkFBK0M7QUFBQSxnQkFBS0UsSUFBSTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEM0I7QUFBQSxHQUF0Qjs7QUFHQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFdBQU1GLGFBQWEsRUFBbkI7QUFBQSxHQUFuQixDQUoyQyxDQUszQzs7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxXQUNYRixLQUFLLENBQUNJLEdBQU4sQ0FBVTtBQUFBLFVBQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFVBQVVDLEVBQVYsU0FBVUEsRUFBVjtBQUFBLDBCQUNSO0FBQUEsK0JBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLHlCQUFrQkEsRUFBbEIsQ0FBVjtBQUFBLGlDQUNFO0FBQUEsc0JBQUlEO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQUFTRSwrQ0FBTSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUTtBQUFBLEtBQVYsQ0FEVztBQUFBLEdBQWI7O0FBU0Esc0JBQU87QUFBQSxvQkFBSUosVUFBVSxFQUFkO0FBQUEsa0JBQVA7QUFDRDtLQWhCdUJKLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGIwYzEzMTk4ZDNjZTk4MTg4ZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L0xpbmtcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdFBvc3RzKHsgcG9zdHMgfSkge1xyXG4gIGNvbnN0IGVycm9ySGFuZGxpbmcgPSAoKSA9PlxyXG4gICAgdHlwZW9mIHBvc3RzID09PSBcInN0cmluZ1wiID8gPGgxPlwiRXJyb3JcIjwvaDE+IDogPHVsPntsaXN0KCl9PC91bD47XHJcblxyXG4gIGNvbnN0IHJldHVybkxpc3QgPSAoKSA9PiBlcnJvckhhbmRsaW5nKCk7XHJcbiAgLy8gY29uc29sZS5sb2coZXJyb3JIYW5kbGluZyk7XHJcbiAgY29uc3QgbGlzdCA9ICgpID0+XHJcbiAgICBwb3N0cy5tYXAoKHsgdGl0bGUsIGlkIH0pID0+IChcclxuICAgICAgPGxpIGtleT17dXVpZHY0KCl9PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdD9wb3N0SWQ9JHtpZH1gfT5cclxuICAgICAgICAgIDxhPnt0aXRsZX08L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKSk7XHJcblxyXG4gIHJldHVybiA8PiB7cmV0dXJuTGlzdCgpfTwvPjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
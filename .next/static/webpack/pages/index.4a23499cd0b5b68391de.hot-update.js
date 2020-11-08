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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "C:\\Node.js_projs\\Next_projs\\firstNextPracticeApp\\components\\ListPosts.jsx",
    _s = $RefreshSig$();





function ListPosts(_ref) {
  _s();

  var _this = this;

  var posts = _ref.posts;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var errorHandling = function errorHandling() {
    return typeof posts === "string" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "\"Error\""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 33
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: list()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          onClick: function onClick() {
            router.push({
              pathname: "http://localhost:3000/post/[pid]",
              query: {
                pid: id,
                test: "hello"
              }
            });
          },
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }, _this)
      }, Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(), false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [" ", returnList()]
  }, void 0, true);
}

_s(ListPosts, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0UG9zdHMuanN4Il0sIm5hbWVzIjpbIkxpc3RQb3N0cyIsInBvc3RzIiwicm91dGVyIiwidXNlUm91dGVyIiwiZXJyb3JIYW5kbGluZyIsImxpc3QiLCJyZXR1cm5MaXN0IiwibWFwIiwidGl0bGUiLCJpZCIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwicGlkIiwidGVzdCIsInV1aWR2NCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULE9BQThCO0FBQUE7O0FBQUE7O0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQzNDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtBQUFBLFdBQ3BCLE9BQU9ILEtBQVAsS0FBaUIsUUFBakIsZ0JBQTRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQTVCLGdCQUErQztBQUFBLGdCQUFLSSxJQUFJO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUQzQjtBQUFBLEdBQXRCOztBQUdBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsV0FBTUYsYUFBYSxFQUFuQjtBQUFBLEdBQW5CLENBTDJDLENBTTNDOzs7QUFDQSxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFdBQ1hKLEtBQUssQ0FBQ00sR0FBTixDQUFVO0FBQUEsVUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsVUFBVUMsRUFBVixTQUFVQSxFQUFWO0FBQUEsMEJBQ1I7QUFBQSwrQkFDRTtBQUNFLGlCQUFPLEVBQUUsbUJBQU07QUFDYlAsa0JBQU0sQ0FBQ1EsSUFBUCxDQUFZO0FBQ1ZDLHNCQUFRLG9DQURFO0FBRVZDLG1CQUFLLEVBQUU7QUFBRUMsbUJBQUcsRUFBRUosRUFBUDtBQUFXSyxvQkFBSSxFQUFFO0FBQWpCO0FBRkcsYUFBWjtBQUlELFdBTkg7QUFBQSxvQkFRR047QUFSSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FBU08sK0NBQU0sRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFE7QUFBQSxLQUFWLENBRFc7QUFBQSxHQUFiOztBQWdCQSxzQkFBTztBQUFBLG9CQUFJVCxVQUFVLEVBQWQ7QUFBQSxrQkFBUDtBQUNEOztHQXhCdUJOLFM7VUFDUEcscUQ7OztLQURPSCxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRhMjM0OTljZDBiNWI2ODM5MWRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9MaW5rXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0UG9zdHMoeyBwb3N0cyB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZXJyb3JIYW5kbGluZyA9ICgpID0+XHJcbiAgICB0eXBlb2YgcG9zdHMgPT09IFwic3RyaW5nXCIgPyA8aDE+XCJFcnJvclwiPC9oMT4gOiA8dWw+e2xpc3QoKX08L3VsPjtcclxuXHJcbiAgY29uc3QgcmV0dXJuTGlzdCA9ICgpID0+IGVycm9ySGFuZGxpbmcoKTtcclxuICAvLyBjb25zb2xlLmxvZyhlcnJvckhhbmRsaW5nKTtcclxuICBjb25zdCBsaXN0ID0gKCkgPT5cclxuICAgIHBvc3RzLm1hcCgoeyB0aXRsZSwgaWQgfSkgPT4gKFxyXG4gICAgICA8bGkga2V5PXt1dWlkdjQoKX0+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgIHBhdGhuYW1lOiBgaHR0cDovL2xvY2FsaG9zdDozMDAwL3Bvc3QvW3BpZF1gLFxyXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7IHBpZDogaWQsIHRlc3Q6IFwiaGVsbG9cIiB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9saT5cclxuICAgICkpO1xyXG5cclxuICByZXR1cm4gPD4ge3JldHVybkxpc3QoKX08Lz47XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
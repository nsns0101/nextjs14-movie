"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(Movies)/movies/[id]/page",{

/***/ "(app-pages-browser)/./app/(Movies)/movies/[id]/page.tsx":
/*!*******************************************!*\
  !*** ./app/(Movies)/movies/[id]/page.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MoveDetail; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// export const metadata = {\n//     title: \"Movedetail\"\n// }\nfunction MoveDetail() {\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getMovies = async ()=>{\n        const response = await fetch(\"https://nomad-movies.nomadcoders.workers.dev/movies\");\n        const json = await response.json();\n        setMovies(json);\n        setIsLoading(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getMovies();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: isLoading ? \"Loading...\" : JSON.stringify(movies)\n    }, void 0, false, {\n        fileName: \"C:\\\\develop\\\\nextjs\\\\nextjs14-movie\\\\app\\\\(Movies)\\\\movies\\\\[id]\\\\page.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n}\n_s(MoveDetail, \"BLz+Dza675Lqh5QFvDsUJLyjzvs=\");\n_c = MoveDetail;\nvar _c;\n$RefreshReg$(_c, \"MoveDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oTW92aWVzKS9tb3ZpZXMvW2lkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDMkM7QUFFM0MsNEJBQTRCO0FBQzVCLDBCQUEwQjtBQUMxQixJQUFJO0FBRVcsU0FBU0U7O0lBQ3BCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNJLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUN2QyxNQUFNTSxZQUFZO1FBQ2QsTUFBTUMsV0FBVyxNQUFNQyxNQUNuQjtRQUVKLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0UsSUFBSTtRQUNoQ0osVUFBVUk7UUFDVk4sYUFBYTtJQUNqQjtJQUVBSixnREFBU0EsQ0FBQztRQUNOTztJQUNKLEdBQUcsRUFBRTtJQUNMLHFCQUNJLDhEQUFDSTtrQkFFT1IsWUFBWSxlQUFlUyxLQUFLQyxTQUFTLENBQUNSOzs7Ozs7QUFJMUQ7R0F0QndCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKE1vdmllcykvbW92aWVzL1tpZF0vcGFnZS50c3g/ZDA5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBtZXRhZGF0YSA9IHtcclxuLy8gICAgIHRpdGxlOiBcIk1vdmVkZXRhaWxcIlxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZlRGV0YWlsKCl7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgZ2V0TW92aWVzID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgICAgXCJodHRwczovL25vbWFkLW1vdmllcy5ub21hZGNvZGVycy53b3JrZXJzLmRldi9tb3ZpZXNcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBzZXRNb3ZpZXMoanNvbik7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICAgICAgZ2V0TW92aWVzKCk7XHJcbiAgICB9LCBbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nID8gXCJMb2FkaW5nLi4uXCIgOiBKU09OLnN0cmluZ2lmeShtb3ZpZXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1vdmVEZXRhaWwiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJtb3ZpZXMiLCJzZXRNb3ZpZXMiLCJnZXRNb3ZpZXMiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImRpdiIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(Movies)/movies/[id]/page.tsx\n"));

/***/ })

});
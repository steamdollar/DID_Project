"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./utils/axios.js":
/*!************************!*\
  !*** ./utils/axios.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"request\": function() { return /* binding */ request; }\n/* harmony export */ });\n/* harmony import */ var _Users_chronica_Desktop_lsj_blockchain5_project_DID_dao_distribution_Team_DAO_oAuth_Server_front_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_Users_chronica_Desktop_lsj_blockchain5_project_DID_dao_distribution_Team_DAO_oAuth_Server_front_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nvar axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _require = __webpack_require__(/*! ./ip.js */ \"./utils/ip.js\"),\n    backend = _require.backend,\n    frontend = _require.frontend;\n\nvar config = {\n  baseURL: backend,\n  headers: {\n    withCredentials: true,\n    'Content-Type': 'application/json' // 'Access-Control-Allow-Origin': '*',\n\n  }\n};\nvar request = axios.create(_objectSpread({}, config));\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9heGlvcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFyQjs7QUFDQSxlQUE4QkEsbUJBQU8sQ0FBQyw4QkFBRCxDQUFyQztBQUFBLElBQVFDLE9BQVIsWUFBUUEsT0FBUjtBQUFBLElBQWlCQyxRQUFqQixZQUFpQkEsUUFBakI7O0FBRUEsSUFBTUMsTUFBTSxHQUFHO0VBQ2JDLE9BQU8sRUFBRUgsT0FESTtFQUViSSxPQUFPLEVBQUU7SUFDUEMsZUFBZSxFQUFFLElBRFY7SUFFUCxnQkFBZ0Isa0JBRlQsQ0FHUDs7RUFITztBQUZJLENBQWY7QUFTTyxJQUFNQyxPQUFPLEdBQUdSLEtBQUssQ0FBQ1MsTUFBTixtQkFDbEJMLE1BRGtCLEVBQWhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2F4aW9zLmpzP2E3MjMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuY29uc3QgeyBiYWNrZW5kLCBmcm9udGVuZCB9ID0gcmVxdWlyZSgnLi9pcC5qcycpO1xuXG5jb25zdCBjb25maWcgPSB7XG4gIGJhc2VVUkw6IGJhY2tlbmQsXG4gIGhlYWRlcnM6IHtcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAvLyAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IHJlcXVlc3QgPSBheGlvcy5jcmVhdGUoe1xuICAuLi5jb25maWcsXG59KTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJiYWNrZW5kIiwiZnJvbnRlbmQiLCJjb25maWciLCJiYXNlVVJMIiwiaGVhZGVycyIsIndpdGhDcmVkZW50aWFscyIsInJlcXVlc3QiLCJjcmVhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/axios.js\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/sites/createSiteGroup/route";
exports.ids = ["app/api/sites/createSiteGroup/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsites%2FcreateSiteGroup%2Froute&page=%2Fapi%2Fsites%2FcreateSiteGroup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsites%2FcreateSiteGroup%2Froute.tsx&appDir=%2FUsers%2Fdelta%2FDMTS%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdelta%2FDMTS&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsites%2FcreateSiteGroup%2Froute&page=%2Fapi%2Fsites%2FcreateSiteGroup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsites%2FcreateSiteGroup%2Froute.tsx&appDir=%2FUsers%2Fdelta%2FDMTS%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdelta%2FDMTS&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _Users_delta_DMTS_src_app_api_sites_createSiteGroup_route_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/app/api/sites/createSiteGroup/route.tsx */ \"(rsc)/./src/app/api/sites/createSiteGroup/route.tsx\");\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/sites/createSiteGroup/route\",\n        pathname: \"/api/sites/createSiteGroup\",\n        filename: \"route\",\n        bundlePath: \"app/api/sites/createSiteGroup/route\"\n    },\n    resolvedPagePath: \"/Users/delta/DMTS/src/app/api/sites/createSiteGroup/route.tsx\",\n    nextConfigOutput,\n    userland: _Users_delta_DMTS_src_app_api_sites_createSiteGroup_route_tsx__WEBPACK_IMPORTED_MODULE_2__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/sites/createSiteGroup/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzaXRlcyUyRmNyZWF0ZVNpdGVHcm91cCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGc2l0ZXMlMkZjcmVhdGVTaXRlR3JvdXAlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZzaXRlcyUyRmNyZWF0ZVNpdGVHcm91cCUyRnJvdXRlLnRzeCZhcHBEaXI9JTJGVXNlcnMlMkZkZWx0YSUyRkRNVFMlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGZGVsdGElMkZETVRTJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUMyQjtBQUMxRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNpSjs7QUFFakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kbXRzLz8yN2Q3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9kZWx0YS9ETVRTL3NyYy9hcHAvYXBpL3NpdGVzL2NyZWF0ZVNpdGVHcm91cC9yb3V0ZS50c3hcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3NpdGVzL2NyZWF0ZVNpdGVHcm91cC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3NpdGVzL2NyZWF0ZVNpdGVHcm91cFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc2l0ZXMvY3JlYXRlU2l0ZUdyb3VwL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2RlbHRhL0RNVFMvc3JjL2FwcC9hcGkvc2l0ZXMvY3JlYXRlU2l0ZUdyb3VwL3JvdXRlLnRzeFwiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9zaXRlcy9jcmVhdGVTaXRlR3JvdXAvcm91dGVcIjtcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsites%2FcreateSiteGroup%2Froute&page=%2Fapi%2Fsites%2FcreateSiteGroup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsites%2FcreateSiteGroup%2Froute.tsx&appDir=%2FUsers%2Fdelta%2FDMTS%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdelta%2FDMTS&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/sites/createSiteGroup/route.tsx":
/*!*****************************************************!*\
  !*** ./src/app/api/sites/createSiteGroup/route.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _dbConfig_dbConfig_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../dbConfig/dbConfig.js */ \"(rsc)/./src/dbConfig/dbConfig.js\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _models_siteGroupMode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/siteGroupMode.js */ \"(rsc)/./src/models/siteGroupMode.js\");\n\n\n\n(0,_dbConfig_dbConfig_js__WEBPACK_IMPORTED_MODULE_0__.connect)();\nasync function POST(request) {\n    try {\n        const body = await request.json();\n        const { groupName, sites } = body;\n        console.log(\"THIS IS MY BODY\", body);\n        const existingGroup = await _models_siteGroupMode_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n            groupName\n        });\n        console.log(existingGroup);\n        if (existingGroup) {\n            throw new Error(\"Group Exists!\");\n        }\n        console.log(typeof sites[0].siteId);\n        const group = await _models_siteGroupMode_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create({\n            groupName,\n            sites,\n            creationDate: new Date(Date.now())\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            message: \"Group has beed created successfully!\"\n        });\n    } catch (err) {\n        console.log(\"E NDD\");\n        console.log(err);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            message: err.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zaXRlcy9jcmVhdGVTaXRlR3JvdXAvcm91dGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0Q7QUFDSDtBQUNXO0FBRWhFQSw4REFBT0E7QUFDQSxlQUFlRyxLQUFNQyxPQUFxQjtJQUM3QyxJQUFJO1FBQ0EsTUFBTUMsT0FBTyxNQUFNRCxRQUFRRSxJQUFJO1FBQy9CLE1BQU0sRUFBQ0MsU0FBUyxFQUFFQyxLQUFLLEVBQUMsR0FBR0g7UUFDM0JJLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJMO1FBRy9CLE1BQU1NLGdCQUFnQixNQUFNVCxnRUFBY0EsQ0FBQ1UsT0FBTyxDQUFDO1lBQUNMO1FBQVM7UUFDN0RFLFFBQVFDLEdBQUcsQ0FBQ0M7UUFDWixJQUFHQSxlQUFlO1lBQ2QsTUFBTSxJQUFJRSxNQUFNO1FBQ3BCO1FBQ0FKLFFBQVFDLEdBQUcsQ0FBQyxPQUFPRixLQUFLLENBQUMsRUFBRSxDQUFDTSxNQUFNO1FBQ2xDLE1BQU1DLFFBQVEsTUFBTWIsZ0VBQWNBLENBQUNjLE1BQU0sQ0FBQztZQUN0Q1Q7WUFDQUM7WUFDQVMsY0FBYyxJQUFJQyxLQUFLQSxLQUFLQyxHQUFHO1FBQ25DO1FBRUEsT0FBT2xCLGtGQUFZQSxDQUFDSyxJQUFJLENBQUM7WUFDdkJjLFNBQVM7UUFDWDtJQUNKLEVBQUUsT0FBT0MsS0FBVztRQUNoQlosUUFBUUMsR0FBRyxDQUFDO1FBQ1pELFFBQVFDLEdBQUcsQ0FBQ1c7UUFDWixPQUFPcEIsa0ZBQVlBLENBQUNLLElBQUksQ0FBQztZQUNyQmMsU0FBVUMsSUFBSUQsT0FBTztRQUN6QjtJQUNKO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kbXRzLy4vc3JjL2FwcC9hcGkvc2l0ZXMvY3JlYXRlU2l0ZUdyb3VwL3JvdXRlLnRzeD9mZjcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29ubmVjdH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RiQ29uZmlnL2RiQ29uZmlnLmpzXCJcbmltcG9ydCB7TmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZX0gZnJvbSBcIm5leHQvc2VydmVyXCJcbmltcG9ydCBzaXRlR3JvdXBNb2RlbCBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvc2l0ZUdyb3VwTW9kZS5qcydcblxuY29ubmVjdCgpXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVCAocmVxdWVzdCA6IE5leHRSZXF1ZXN0KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgICAgICBjb25zdCB7Z3JvdXBOYW1lLCBzaXRlc30gPSBib2R5O1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRISVMgSVMgTVkgQk9EWVwiLCBib2R5KVxuICAgIFxuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nR3JvdXAgPSBhd2FpdCBzaXRlR3JvdXBNb2RlbC5maW5kT25lKHtncm91cE5hbWV9KTtcbiAgICAgICAgY29uc29sZS5sb2coZXhpc3RpbmdHcm91cClcbiAgICAgICAgaWYoZXhpc3RpbmdHcm91cCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdHcm91cCBFeGlzdHMhJylcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2Ygc2l0ZXNbMF0uc2l0ZUlkKVxuICAgICAgICBjb25zdCBncm91cCA9IGF3YWl0IHNpdGVHcm91cE1vZGVsLmNyZWF0ZSh7XG4gICAgICAgICAgICBncm91cE5hbWUsXG4gICAgICAgICAgICBzaXRlcyxcbiAgICAgICAgICAgIGNyZWF0aW9uRGF0ZTogbmV3IERhdGUoRGF0ZS5ub3coKSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgICAgIG1lc3NhZ2U6IFwiR3JvdXAgaGFzIGJlZWQgY3JlYXRlZCBzdWNjZXNzZnVsbHkhXCJcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyIDogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRSBORERcIilcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgICAgICAgbWVzc2FnZSA6IGVyci5tZXNzYWdlXG4gICAgICAgIH0pXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImNvbm5lY3QiLCJOZXh0UmVzcG9uc2UiLCJzaXRlR3JvdXBNb2RlbCIsIlBPU1QiLCJyZXF1ZXN0IiwiYm9keSIsImpzb24iLCJncm91cE5hbWUiLCJzaXRlcyIsImNvbnNvbGUiLCJsb2ciLCJleGlzdGluZ0dyb3VwIiwiZmluZE9uZSIsIkVycm9yIiwic2l0ZUlkIiwiZ3JvdXAiLCJjcmVhdGUiLCJjcmVhdGlvbkRhdGUiLCJEYXRlIiwibm93IiwibWVzc2FnZSIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/sites/createSiteGroup/route.tsx\n");

/***/ }),

/***/ "(rsc)/./src/dbConfig/dbConfig.js":
/*!**********************************!*\
  !*** ./src/dbConfig/dbConfig.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connect: () => (/* binding */ connect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connect() {\n    try {\n        mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.DB);\n        const connection = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);\n        connection.on(\"connected\", ()=>{\n            console.log(\"MongoDb Connected Successfully\");\n        });\n        connection.on(\"error\", (err)=>{\n            console.log(\"Connection Error\", err.message);\n            process.exit();\n        });\n    } catch (error) {\n        console.log(\"Something went wrong\", error.message);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGJDb25maWcvZGJDb25maWcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBQ3pCLGVBQWVDO0lBQ2xCLElBQUk7UUFDQUQsdURBQWdCLENBQUNFLFFBQVFDLEdBQUcsQ0FBQ0MsRUFBRTtRQUMvQixNQUFNQyxhQUFhTCw0REFBbUI7UUFDdENLLFdBQVdDLEVBQUUsQ0FBQyxhQUFhO1lBQ3ZCQyxRQUFRQyxHQUFHLENBQUM7UUFDaEI7UUFDQUgsV0FBV0MsRUFBRSxDQUFDLFNBQVMsQ0FBQ0c7WUFDcEJGLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JDLElBQUlDLE9BQU87WUFDM0NSLFFBQVFTLElBQUk7UUFDaEI7SUFDSixFQUFFLE9BQU9DLE9BQU87UUFDWkwsUUFBUUMsR0FBRyxDQUFDLHdCQUF3QkksTUFBTUYsT0FBTztJQUNyRDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG10cy8uL3NyYy9kYkNvbmZpZy9kYkNvbmZpZy5qcz84ZDFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgIHRyeSB7XG4gICAgICAgIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuREIpO1xuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gbW9uZ29vc2UuY29ubmVjdGlvbjtcbiAgICAgICAgY29ubmVjdGlvbi5vbignY29ubmVjdGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJNb25nb0RiIENvbm5lY3RlZCBTdWNjZXNzZnVsbHlcIilcbiAgICAgICAgfSlcbiAgICAgICAgY29ubmVjdGlvbi5vbignZXJyb3InLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3Rpb24gRXJyb3JcIiwgZXJyLm1lc3NhZ2UpXG4gICAgICAgICAgICBwcm9jZXNzLmV4aXQoKVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiREIiLCJjb25uZWN0aW9uIiwib24iLCJjb25zb2xlIiwibG9nIiwiZXJyIiwibWVzc2FnZSIsImV4aXQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/dbConfig/dbConfig.js\n");

/***/ }),

/***/ "(rsc)/./src/models/siteGroupMode.js":
/*!*************************************!*\
  !*** ./src/models/siteGroupMode.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! os */ \"os\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { mongoose } = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst Schema = mongoose.Schema;\n//const ED = rootRequire('utils/encry_decry')\nconst schema = new Schema({\n    groupName: {\n        type: String,\n        required: true\n    },\n    sites: {\n        type: Array\n    },\n    creationDate: {\n        type: Date,\n        default: Date.now // Use a function to get the current date and time\n    },\n    isEmergency: {\n        type: Boolean,\n        default: false\n    }\n}, {\n    collection: \"siteGroupModel\"\n});\nschema.pre(\"save\", function(next) {\n    if (!this.creationDate) {\n        this.creationDate = new Date();\n    }\n    next();\n});\nconst siteGroupModel = mongoose.models.siteGroupModel || mongoose.model(\"siteGroupModel\", schema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (siteGroupModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL3NpdGVHcm91cE1vZGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRTFCLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdDLG1CQUFPQSxDQUFDO0FBQzdCLE1BQU1DLFNBQVNGLFNBQVNFLE1BQU07QUFDOUIsNkNBQTZDO0FBRTdDLE1BQU1DLFNBQVMsSUFBSUQsT0FBTztJQUN0QkUsV0FBWTtRQUNSTCxNQUFPTTtRQUNQQyxVQUFXO0lBQ2Y7SUFDQUMsT0FBTztRQUNIUixNQUFPUztJQUNYO0lBQ0FDLGNBQWM7UUFDVlYsTUFBTVc7UUFDTkMsU0FBU0QsS0FBS0UsR0FBRyxDQUFDLGtEQUFrRDtJQUN4RTtJQUNBQyxhQUFjO1FBQ1ZkLE1BQU9lO1FBQ1BILFNBQVU7SUFDZDtBQUNKLEdBQUc7SUFDQ0ksWUFBWTtBQUNoQjtBQUVBWixPQUFPYSxHQUFHLENBQUMsUUFBUSxTQUFVQyxJQUFJO0lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUNSLFlBQVksRUFBRTtRQUNwQixJQUFJLENBQUNBLFlBQVksR0FBRyxJQUFJQztJQUM1QjtJQUNBTztBQUNKO0FBRUEsTUFBTUMsaUJBQWlCbEIsU0FBU21CLE1BQU0sQ0FBQ0QsY0FBYyxJQUFJbEIsU0FBU29CLEtBQUssQ0FBQyxrQkFBa0JqQjtBQUUxRixpRUFBZWUsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RtdHMvLi9zcmMvbW9kZWxzL3NpdGVHcm91cE1vZGUuanM/MzQ4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlIH0gZnJvbSBcIm9zXCI7XG5cbmNvbnN0IHsgbW9uZ29vc2UgfSA9IHJlcXVpcmUoJ21vbmdvb3NlJylcbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYVxuLy9jb25zdCBFRCA9IHJvb3RSZXF1aXJlKCd1dGlscy9lbmNyeV9kZWNyeScpXG4gIFxuY29uc3Qgc2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gICAgZ3JvdXBOYW1lIDoge1xuICAgICAgICB0eXBlIDogU3RyaW5nLCBcbiAgICAgICAgcmVxdWlyZWQgOiB0cnVlXG4gICAgfSxcbiAgICBzaXRlczoge1xuICAgICAgICB0eXBlIDogQXJyYXlcbiAgICB9LFxuICAgIGNyZWF0aW9uRGF0ZToge1xuICAgICAgICB0eXBlOiBEYXRlLFxuICAgICAgICBkZWZhdWx0OiBEYXRlLm5vdyAvLyBVc2UgYSBmdW5jdGlvbiB0byBnZXQgdGhlIGN1cnJlbnQgZGF0ZSBhbmQgdGltZVxuICAgIH0sXG4gICAgaXNFbWVyZ2VuY3kgOiB7XG4gICAgICAgIHR5cGUgOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0IDogZmFsc2VcbiAgICB9XG59LCB7XG4gICAgY29sbGVjdGlvbjogJ3NpdGVHcm91cE1vZGVsJ1xufSlcblxuc2NoZW1hLnByZSgnc2F2ZScsIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgaWYgKCF0aGlzLmNyZWF0aW9uRGF0ZSkge1xuICAgICAgICB0aGlzLmNyZWF0aW9uRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgfVxuICAgIG5leHQoKTtcbn0pO1xuXG5jb25zdCBzaXRlR3JvdXBNb2RlbCA9IG1vbmdvb3NlLm1vZGVscy5zaXRlR3JvdXBNb2RlbCB8fCBtb25nb29zZS5tb2RlbChcInNpdGVHcm91cE1vZGVsXCIsIHNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNpdGVHcm91cE1vZGVsO1xuIl0sIm5hbWVzIjpbInR5cGUiLCJtb25nb29zZSIsInJlcXVpcmUiLCJTY2hlbWEiLCJzY2hlbWEiLCJncm91cE5hbWUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInNpdGVzIiwiQXJyYXkiLCJjcmVhdGlvbkRhdGUiLCJEYXRlIiwiZGVmYXVsdCIsIm5vdyIsImlzRW1lcmdlbmN5IiwiQm9vbGVhbiIsImNvbGxlY3Rpb24iLCJwcmUiLCJuZXh0Iiwic2l0ZUdyb3VwTW9kZWwiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/siteGroupMode.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsites%2FcreateSiteGroup%2Froute&page=%2Fapi%2Fsites%2FcreateSiteGroup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsites%2FcreateSiteGroup%2Froute.tsx&appDir=%2FUsers%2Fdelta%2FDMTS%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdelta%2FDMTS&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
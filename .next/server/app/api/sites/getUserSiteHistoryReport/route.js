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
exports.id = "app/api/sites/getUserSiteHistoryReport/route";
exports.ids = ["app/api/sites/getUserSiteHistoryReport/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsites%2FgetUserSiteHistoryReport%2Froute&page=%2Fapi%2Fsites%2FgetUserSiteHistoryReport%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsites%2FgetUserSiteHistoryReport%2Froute.tsx&appDir=%2FUsers%2Fdelta%2FDMTS%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdelta%2FDMTS&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsites%2FgetUserSiteHistoryReport%2Froute&page=%2Fapi%2Fsites%2FgetUserSiteHistoryReport%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsites%2FgetUserSiteHistoryReport%2Froute.tsx&appDir=%2FUsers%2Fdelta%2FDMTS%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdelta%2FDMTS&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _Users_delta_DMTS_src_app_api_sites_getUserSiteHistoryReport_route_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/app/api/sites/getUserSiteHistoryReport/route.tsx */ \"(rsc)/./src/app/api/sites/getUserSiteHistoryReport/route.tsx\");\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/sites/getUserSiteHistoryReport/route\",\n        pathname: \"/api/sites/getUserSiteHistoryReport\",\n        filename: \"route\",\n        bundlePath: \"app/api/sites/getUserSiteHistoryReport/route\"\n    },\n    resolvedPagePath: \"/Users/delta/DMTS/src/app/api/sites/getUserSiteHistoryReport/route.tsx\",\n    nextConfigOutput,\n    userland: _Users_delta_DMTS_src_app_api_sites_getUserSiteHistoryReport_route_tsx__WEBPACK_IMPORTED_MODULE_2__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/sites/getUserSiteHistoryReport/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzaXRlcyUyRmdldFVzZXJTaXRlSGlzdG9yeVJlcG9ydCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGc2l0ZXMlMkZnZXRVc2VyU2l0ZUhpc3RvcnlSZXBvcnQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZzaXRlcyUyRmdldFVzZXJTaXRlSGlzdG9yeVJlcG9ydCUyRnJvdXRlLnRzeCZhcHBEaXI9JTJGVXNlcnMlMkZkZWx0YSUyRkRNVFMlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGZGVsdGElMkZETVRTJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNvQztBQUNuRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNpSjs7QUFFakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kbXRzLz8zYzUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9kZWx0YS9ETVRTL3NyYy9hcHAvYXBpL3NpdGVzL2dldFVzZXJTaXRlSGlzdG9yeVJlcG9ydC9yb3V0ZS50c3hcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3NpdGVzL2dldFVzZXJTaXRlSGlzdG9yeVJlcG9ydC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3NpdGVzL2dldFVzZXJTaXRlSGlzdG9yeVJlcG9ydFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc2l0ZXMvZ2V0VXNlclNpdGVIaXN0b3J5UmVwb3J0L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2RlbHRhL0RNVFMvc3JjL2FwcC9hcGkvc2l0ZXMvZ2V0VXNlclNpdGVIaXN0b3J5UmVwb3J0L3JvdXRlLnRzeFwiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9zaXRlcy9nZXRVc2VyU2l0ZUhpc3RvcnlSZXBvcnQvcm91dGVcIjtcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsites%2FgetUserSiteHistoryReport%2Froute&page=%2Fapi%2Fsites%2FgetUserSiteHistoryReport%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsites%2FgetUserSiteHistoryReport%2Froute.tsx&appDir=%2FUsers%2Fdelta%2FDMTS%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdelta%2FDMTS&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/sites/getUserSiteHistoryReport/route.tsx":
/*!**************************************************************!*\
  !*** ./src/app/api/sites/getUserSiteHistoryReport/route.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _dbConfig_dbConfig_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../dbConfig/dbConfig.js */ \"(rsc)/./src/dbConfig/dbConfig.js\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _models_userSiteHistoryModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/userSiteHistoryModel.js */ \"(rsc)/./src/models/userSiteHistoryModel.js\");\n\n\n\n(0,_dbConfig_dbConfig_js__WEBPACK_IMPORTED_MODULE_0__.connect)();\nasync function GET(request) {\n    try {\n        const info = await _models_userSiteHistoryModel_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find().sort({\n            creationDate: -1\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            message: info\n        });\n    } catch (err) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            error: err.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zaXRlcy9nZXRVc2VyU2l0ZUhpc3RvcnlSZXBvcnQvcm91dGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0Q7QUFDSDtBQUNjO0FBRW5FQSw4REFBT0E7QUFDQSxlQUFlRyxJQUFLQyxPQUFxQjtJQUM1QyxJQUFJO1FBQ0EsTUFBTUMsT0FBTyxNQUFNSCx1RUFBb0JBLENBQUNJLElBQUksR0FBR0MsSUFBSSxDQUFDO1lBQUNDLGNBQWUsQ0FBQztRQUFDO1FBQ3RFLE9BQU9QLGtGQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFDckJDLFNBQVVMO1FBQ2Q7SUFDSixFQUFFLE9BQU9NLEtBQVc7UUFDaEIsT0FBT1Ysa0ZBQVlBLENBQUNRLElBQUksQ0FBQztZQUNyQkcsT0FBUUQsSUFBSUQsT0FBTztRQUN2QjtJQUNKO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kbXRzLy4vc3JjL2FwcC9hcGkvc2l0ZXMvZ2V0VXNlclNpdGVIaXN0b3J5UmVwb3J0L3JvdXRlLnRzeD9mZTdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29ubmVjdH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RiQ29uZmlnL2RiQ29uZmlnLmpzXCJcbmltcG9ydCB7TmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZX0gZnJvbSBcIm5leHQvc2VydmVyXCJcbmltcG9ydCB1c2VyU2l0ZUhpc3RvcnlNb2RlbCBmcm9tIFwiQC9tb2RlbHMvdXNlclNpdGVIaXN0b3J5TW9kZWwuanNcIlxuXG5jb25uZWN0KClcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQgKHJlcXVlc3QgOiBOZXh0UmVxdWVzdCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGluZm8gPSBhd2FpdCB1c2VyU2l0ZUhpc3RvcnlNb2RlbC5maW5kKCkuc29ydCh7Y3JlYXRpb25EYXRlIDogLTF9KTtcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgICAgICAgIG1lc3NhZ2UgOiBpbmZvXG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZXJyIDogYW55KSB7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICAgICAgICBlcnJvciA6IGVyci5tZXNzYWdlXG4gICAgICAgIH0pXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImNvbm5lY3QiLCJOZXh0UmVzcG9uc2UiLCJ1c2VyU2l0ZUhpc3RvcnlNb2RlbCIsIkdFVCIsInJlcXVlc3QiLCJpbmZvIiwiZmluZCIsInNvcnQiLCJjcmVhdGlvbkRhdGUiLCJqc29uIiwibWVzc2FnZSIsImVyciIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/sites/getUserSiteHistoryReport/route.tsx\n");

/***/ }),

/***/ "(rsc)/./src/dbConfig/dbConfig.js":
/*!**********************************!*\
  !*** ./src/dbConfig/dbConfig.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connect: () => (/* binding */ connect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connect() {\n    try {\n        mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.DB);\n        const connection = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);\n        connection.on(\"connected\", ()=>{\n            console.log(\"MongoDb Connected Successfully\");\n        });\n        connection.on(\"error\", (err)=>{\n            console.log(\"Connection Error\", err.message);\n            process.exit();\n        });\n    } catch (error) {\n        console.log(\"Something went wrong\", error.message);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGJDb25maWcvZGJDb25maWcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBQ3pCLGVBQWVDO0lBQ2xCLElBQUk7UUFDQUQsdURBQWdCLENBQUNFLFFBQVFDLEdBQUcsQ0FBQ0MsRUFBRTtRQUMvQixNQUFNQyxhQUFhTCw0REFBbUI7UUFDdENLLFdBQVdDLEVBQUUsQ0FBQyxhQUFhO1lBQ3ZCQyxRQUFRQyxHQUFHLENBQUM7UUFDaEI7UUFDQUgsV0FBV0MsRUFBRSxDQUFDLFNBQVMsQ0FBQ0c7WUFDcEJGLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JDLElBQUlDLE9BQU87WUFDM0NSLFFBQVFTLElBQUk7UUFDaEI7SUFDSixFQUFFLE9BQU9DLE9BQU87UUFDWkwsUUFBUUMsR0FBRyxDQUFDLHdCQUF3QkksTUFBTUYsT0FBTztJQUNyRDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG10cy8uL3NyYy9kYkNvbmZpZy9kYkNvbmZpZy5qcz84ZDFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgIHRyeSB7XG4gICAgICAgIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuREIpO1xuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gbW9uZ29vc2UuY29ubmVjdGlvbjtcbiAgICAgICAgY29ubmVjdGlvbi5vbignY29ubmVjdGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJNb25nb0RiIENvbm5lY3RlZCBTdWNjZXNzZnVsbHlcIilcbiAgICAgICAgfSlcbiAgICAgICAgY29ubmVjdGlvbi5vbignZXJyb3InLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3Rpb24gRXJyb3JcIiwgZXJyLm1lc3NhZ2UpXG4gICAgICAgICAgICBwcm9jZXNzLmV4aXQoKVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiREIiLCJjb25uZWN0aW9uIiwib24iLCJjb25zb2xlIiwibG9nIiwiZXJyIiwibWVzc2FnZSIsImV4aXQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/dbConfig/dbConfig.js\n");

/***/ }),

/***/ "(rsc)/./src/models/userSiteHistoryModel.js":
/*!********************************************!*\
  !*** ./src/models/userSiteHistoryModel.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! os */ \"os\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { mongoose, mongo } = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst Schema = mongoose.Schema;\nconst schema = new Schema({\n    groupName: {\n        type: String,\n        required: true\n    },\n    groupId: {\n        type: mongoose.Schema.Types.ObjectId,\n        required: true\n    },\n    userId: {\n        type: mongoose.Schema.Types.ObjectId\n    },\n    userName: {\n        type: String\n    },\n    status: {\n        type: String,\n        enum: [\n            \"completed\",\n            \"pending\"\n        ],\n        required: true,\n        default: \"pending\"\n    },\n    creationDate: {\n        type: Date,\n        default: Date.now // Use a function to get the current date and time\n    }\n}, {\n    collection: \"userSiteHistoryModel\"\n});\nschema.pre(\"save\", function(next) {\n    if (!this.creationDate) {\n        this.creationDate = new Date();\n    }\n    next();\n});\nconst userSiteHistoryModel = mongoose.models.userSiteHistoryModel || mongoose.model(\"userSiteHistoryModel\", schema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSiteHistoryModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL3VzZXJTaXRlSGlzdG9yeU1vZGVsLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUUxQixNQUFNLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFLEdBQUdDLG1CQUFPQSxDQUFDO0FBQ3BDLE1BQU1DLFNBQVNILFNBQVNHLE1BQU07QUFFOUIsTUFBTUMsU0FBUyxJQUFJRCxPQUFPO0lBQ3RCRSxXQUFZO1FBQ1JOLE1BQU9PO1FBQ1BDLFVBQVc7SUFDZjtJQUNBQyxTQUFVO1FBQ05ULE1BQU9DLFNBQVNHLE1BQU0sQ0FBQ00sS0FBSyxDQUFDQyxRQUFRO1FBQ3JDSCxVQUFXO0lBQ2Y7SUFDQUksUUFBUztRQUNMWixNQUFPQyxTQUFTRyxNQUFNLENBQUNNLEtBQUssQ0FBQ0MsUUFBUTtJQUN6QztJQUNBRSxVQUFXO1FBQ1BiLE1BQU9PO0lBQ1g7SUFDQU8sUUFBUTtRQUNKZCxNQUFNTztRQUNOUSxNQUFNO1lBQUM7WUFBYTtTQUFVO1FBQzlCUCxVQUFVO1FBQ1ZRLFNBQVU7SUFDZDtJQUNBQyxjQUFjO1FBQ1ZqQixNQUFNa0I7UUFDTkYsU0FBU0UsS0FBS0MsR0FBRyxDQUFDLGtEQUFrRDtJQUN4RTtBQUNKLEdBQUc7SUFDQ0MsWUFBWTtBQUNoQjtBQUVBZixPQUFPZ0IsR0FBRyxDQUFDLFFBQVEsU0FBVUMsSUFBSTtJQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDTCxZQUFZLEVBQUU7UUFDcEIsSUFBSSxDQUFDQSxZQUFZLEdBQUcsSUFBSUM7SUFDNUI7SUFDQUk7QUFDSjtBQUVBLE1BQU1DLHVCQUF1QnRCLFNBQVN1QixNQUFNLENBQUNELG9CQUFvQixJQUFJdEIsU0FBU3dCLEtBQUssQ0FBQyx3QkFBd0JwQjtBQUU1RyxpRUFBZWtCLG9CQUFvQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RtdHMvLi9zcmMvbW9kZWxzL3VzZXJTaXRlSGlzdG9yeU1vZGVsLmpzPzRiMzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHlwZSB9IGZyb20gXCJvc1wiO1xuXG5jb25zdCB7IG1vbmdvb3NlLCBtb25nbyB9ID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hXG4gIFxuY29uc3Qgc2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gICAgZ3JvdXBOYW1lIDoge1xuICAgICAgICB0eXBlIDogU3RyaW5nLCBcbiAgICAgICAgcmVxdWlyZWQgOiB0cnVlXG4gICAgfSxcbiAgICBncm91cElkIDoge1xuICAgICAgICB0eXBlIDogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgICAgICByZXF1aXJlZCA6IHRydWVcbiAgICB9LFxuICAgIHVzZXJJZCA6IHtcbiAgICAgICAgdHlwZSA6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICB9LFxuICAgIHVzZXJOYW1lIDoge1xuICAgICAgICB0eXBlIDogU3RyaW5nXG4gICAgfSxcbiAgICBzdGF0dXM6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBlbnVtOiBbJ2NvbXBsZXRlZCcsICdwZW5kaW5nJ10sXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBkZWZhdWx0IDogJ3BlbmRpbmcnXG4gICAgfSxcbiAgICBjcmVhdGlvbkRhdGU6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgZGVmYXVsdDogRGF0ZS5ub3cgLy8gVXNlIGEgZnVuY3Rpb24gdG8gZ2V0IHRoZSBjdXJyZW50IGRhdGUgYW5kIHRpbWVcbiAgICB9XG59LCB7XG4gICAgY29sbGVjdGlvbjogJ3VzZXJTaXRlSGlzdG9yeU1vZGVsJ1xufSlcblxuc2NoZW1hLnByZSgnc2F2ZScsIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgaWYgKCF0aGlzLmNyZWF0aW9uRGF0ZSkge1xuICAgICAgICB0aGlzLmNyZWF0aW9uRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgfVxuICAgIG5leHQoKTtcbn0pO1xuXG5jb25zdCB1c2VyU2l0ZUhpc3RvcnlNb2RlbCA9IG1vbmdvb3NlLm1vZGVscy51c2VyU2l0ZUhpc3RvcnlNb2RlbCB8fCBtb25nb29zZS5tb2RlbChcInVzZXJTaXRlSGlzdG9yeU1vZGVsXCIsIHNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJTaXRlSGlzdG9yeU1vZGVsO1xuIl0sIm5hbWVzIjpbInR5cGUiLCJtb25nb29zZSIsIm1vbmdvIiwicmVxdWlyZSIsIlNjaGVtYSIsInNjaGVtYSIsImdyb3VwTmFtZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZ3JvdXBJZCIsIlR5cGVzIiwiT2JqZWN0SWQiLCJ1c2VySWQiLCJ1c2VyTmFtZSIsInN0YXR1cyIsImVudW0iLCJkZWZhdWx0IiwiY3JlYXRpb25EYXRlIiwiRGF0ZSIsIm5vdyIsImNvbGxlY3Rpb24iLCJwcmUiLCJuZXh0IiwidXNlclNpdGVIaXN0b3J5TW9kZWwiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/userSiteHistoryModel.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsites%2FgetUserSiteHistoryReport%2Froute&page=%2Fapi%2Fsites%2FgetUserSiteHistoryReport%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsites%2FgetUserSiteHistoryReport%2Froute.tsx&appDir=%2FUsers%2Fdelta%2FDMTS%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdelta%2FDMTS&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
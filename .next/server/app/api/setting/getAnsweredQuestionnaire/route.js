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
exports.id = "app/api/setting/getAnsweredQuestionnaire/route";
exports.ids = ["app/api/setting/getAnsweredQuestionnaire/route"];
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

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsetting%2FgetAnsweredQuestionnaire%2Froute&page=%2Fapi%2Fsetting%2FgetAnsweredQuestionnaire%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsetting%2FgetAnsweredQuestionnaire%2Froute.tsx&appDir=%2FUsers%2Fdelta%2FDMTS%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdelta%2FDMTS&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsetting%2FgetAnsweredQuestionnaire%2Froute&page=%2Fapi%2Fsetting%2FgetAnsweredQuestionnaire%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsetting%2FgetAnsweredQuestionnaire%2Froute.tsx&appDir=%2FUsers%2Fdelta%2FDMTS%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdelta%2FDMTS&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _Users_delta_DMTS_src_app_api_setting_getAnsweredQuestionnaire_route_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/app/api/setting/getAnsweredQuestionnaire/route.tsx */ \"(rsc)/./src/app/api/setting/getAnsweredQuestionnaire/route.tsx\");\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/setting/getAnsweredQuestionnaire/route\",\n        pathname: \"/api/setting/getAnsweredQuestionnaire\",\n        filename: \"route\",\n        bundlePath: \"app/api/setting/getAnsweredQuestionnaire/route\"\n    },\n    resolvedPagePath: \"/Users/delta/DMTS/src/app/api/setting/getAnsweredQuestionnaire/route.tsx\",\n    nextConfigOutput,\n    userland: _Users_delta_DMTS_src_app_api_setting_getAnsweredQuestionnaire_route_tsx__WEBPACK_IMPORTED_MODULE_2__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/setting/getAnsweredQuestionnaire/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZXR0aW5nJTJGZ2V0QW5zd2VyZWRRdWVzdGlvbm5haXJlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzZXR0aW5nJTJGZ2V0QW5zd2VyZWRRdWVzdGlvbm5haXJlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc2V0dGluZyUyRmdldEFuc3dlcmVkUXVlc3Rpb25uYWlyZSUyRnJvdXRlLnRzeCZhcHBEaXI9JTJGVXNlcnMlMkZkZWx0YSUyRkRNVFMlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGZGVsdGElMkZETVRTJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNzQztBQUNyRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNpSjs7QUFFakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kbXRzLz8zODc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9kZWx0YS9ETVRTL3NyYy9hcHAvYXBpL3NldHRpbmcvZ2V0QW5zd2VyZWRRdWVzdGlvbm5haXJlL3JvdXRlLnRzeFwiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc2V0dGluZy9nZXRBbnN3ZXJlZFF1ZXN0aW9ubmFpcmUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zZXR0aW5nL2dldEFuc3dlcmVkUXVlc3Rpb25uYWlyZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc2V0dGluZy9nZXRBbnN3ZXJlZFF1ZXN0aW9ubmFpcmUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvZGVsdGEvRE1UUy9zcmMvYXBwL2FwaS9zZXR0aW5nL2dldEFuc3dlcmVkUXVlc3Rpb25uYWlyZS9yb3V0ZS50c3hcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvc2V0dGluZy9nZXRBbnN3ZXJlZFF1ZXN0aW9ubmFpcmUvcm91dGVcIjtcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsetting%2FgetAnsweredQuestionnaire%2Froute&page=%2Fapi%2Fsetting%2FgetAnsweredQuestionnaire%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsetting%2FgetAnsweredQuestionnaire%2Froute.tsx&appDir=%2FUsers%2Fdelta%2FDMTS%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdelta%2FDMTS&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/setting/getAnsweredQuestionnaire/route.tsx":
/*!****************************************************************!*\
  !*** ./src/app/api/setting/getAnsweredQuestionnaire/route.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var _dbConfig_dbConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../dbConfig/dbConfig */ \"(rsc)/./src/dbConfig/dbConfig.js\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models_questionnaireMaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/questionnaireMaster */ \"(rsc)/./src/models/questionnaireMaster.js\");\n\n\n\n\n(0,_dbConfig_dbConfig__WEBPACK_IMPORTED_MODULE_0__.connect)();\nasync function decodeImagesToBase64(images) {\n    const decodedImages = [];\n    for (const image of images){\n        const imageData = await (0,fs_promises__WEBPACK_IMPORTED_MODULE_2__.readFile)(image.answer, {\n            encoding: \"base64\"\n        });\n        decodedImages.push({\n            ...image,\n            answer: imageData\n        });\n    }\n    return decodedImages;\n}\nconst dynamic = \"force-dynamic\";\nasync function GET(request) {\n    try {\n        // Save the document to the database\n        const info = await _models_questionnaireMaster__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find({\n            type: \"answer\"\n        }).lean();\n        const decodedInfo = [];\n        for (const questionnaire of info){\n            console.log(questionnaire.images);\n            const decodedImages = await decodeImagesToBase64(questionnaire.images);\n            decodedInfo.push({\n                ...questionnaire,\n                images: decodedImages\n            });\n        }\n        console.log(decodedInfo);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            message: decodedInfo\n        });\n    } catch (err) {\n        console.log(err.message);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            error: err.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zZXR0aW5nL2dldEFuc3dlcmVkUXVlc3Rpb25uYWlyZS9yb3V0ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN3RDtBQUNBO0FBQ2pCO0FBRWlDO0FBRXhFQSwyREFBT0E7QUFDUCxlQUFlSSxxQkFBcUJDLE1BQVk7SUFDOUMsTUFBTUMsZ0JBQWdCLEVBQUU7SUFDeEIsS0FBSyxNQUFNQyxTQUFTRixPQUFRO1FBQzFCLE1BQU1HLFlBQVksTUFBTU4scURBQVFBLENBQUNLLE1BQU1FLE1BQU0sRUFBRTtZQUFFQyxVQUFVO1FBQVM7UUFDcEVKLGNBQWNLLElBQUksQ0FBQztZQUNqQixHQUFHSixLQUFLO1lBQ1JFLFFBQVFEO1FBQ1Y7SUFDRjtJQUNBLE9BQU9GO0FBQ1Q7QUFDTyxNQUFNTSxVQUFVLGdCQUFlO0FBQy9CLGVBQWVDLElBQUlDLE9BQW9CO0lBQzVDLElBQUk7UUFDRixvQ0FBb0M7UUFDcEMsTUFBTUMsT0FBTyxNQUFNWixtRUFBa0JBLENBQUNhLElBQUksQ0FBQztZQUFFQyxNQUFNO1FBQVMsR0FBR0MsSUFBSTtRQUVuRSxNQUFNQyxjQUFjLEVBQUU7UUFFdEIsS0FBSyxNQUFNQyxpQkFBaUJMLEtBQU07WUFDOUJNLFFBQVFDLEdBQUcsQ0FBQ0YsY0FBY2YsTUFBTTtZQUNsQyxNQUFNQyxnQkFBZ0IsTUFBTUYscUJBQXFCZ0IsY0FBY2YsTUFBTTtZQUNyRWMsWUFBWVIsSUFBSSxDQUFDO2dCQUNmLEdBQUdTLGFBQWE7Z0JBQ2hCZixRQUFRQztZQUNWO1FBQ0Y7UUFFQWUsUUFBUUMsR0FBRyxDQUFDSDtRQUVaLE9BQU9sQixrRkFBWUEsQ0FBQ3NCLElBQUksQ0FBQztZQUN2QkMsU0FBU0w7UUFDWDtJQUNGLEVBQUUsT0FBT00sS0FBVTtRQUNqQkosUUFBUUMsR0FBRyxDQUFDRyxJQUFJRCxPQUFPO1FBQ3ZCLE9BQU92QixrRkFBWUEsQ0FBQ3NCLElBQUksQ0FBQztZQUN2QkcsT0FBT0QsSUFBSUQsT0FBTztRQUNwQjtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kbXRzLy4vc3JjL2FwcC9hcGkvc2V0dGluZy9nZXRBbnN3ZXJlZFF1ZXN0aW9ubmFpcmUvcm91dGUudHN4P2ViMGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICcuLi8uLi8uLi8uLi9kYkNvbmZpZy9kYkNvbmZpZyc7XG5pbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgcmVhZEZpbGUgfSBmcm9tICdmcy9wcm9taXNlcyc7XG5cbmltcG9ydCBxdWVzdGlvbm5haXJlTW9kZWwgZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzL3F1ZXN0aW9ubmFpcmVNYXN0ZXInO1xuXG5jb25uZWN0KCk7XG5hc3luYyBmdW5jdGlvbiBkZWNvZGVJbWFnZXNUb0Jhc2U2NChpbWFnZXMgOiBhbnkpIHtcbiAgY29uc3QgZGVjb2RlZEltYWdlcyA9IFtdO1xuICBmb3IgKGNvbnN0IGltYWdlIG9mIGltYWdlcykge1xuICAgIGNvbnN0IGltYWdlRGF0YSA9IGF3YWl0IHJlYWRGaWxlKGltYWdlLmFuc3dlciwgeyBlbmNvZGluZzogJ2Jhc2U2NCcgfSk7XG4gICAgZGVjb2RlZEltYWdlcy5wdXNoKHtcbiAgICAgIC4uLmltYWdlLFxuICAgICAgYW5zd2VyOiBpbWFnZURhdGEsXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGRlY29kZWRJbWFnZXM7XG59XG5leHBvcnQgY29uc3QgZHluYW1pYyA9ICdmb3JjZS1keW5hbWljJ1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICB0cnkge1xuICAgIC8vIFNhdmUgdGhlIGRvY3VtZW50IHRvIHRoZSBkYXRhYmFzZVxuICAgIGNvbnN0IGluZm8gPSBhd2FpdCBxdWVzdGlvbm5haXJlTW9kZWwuZmluZCh7IHR5cGU6ICdhbnN3ZXInIH0pLmxlYW4oKTtcblxuICAgIGNvbnN0IGRlY29kZWRJbmZvID0gW107XG5cbiAgICBmb3IgKGNvbnN0IHF1ZXN0aW9ubmFpcmUgb2YgaW5mbykge1xuICAgICAgICBjb25zb2xlLmxvZyhxdWVzdGlvbm5haXJlLmltYWdlcylcbiAgICAgIGNvbnN0IGRlY29kZWRJbWFnZXMgPSBhd2FpdCBkZWNvZGVJbWFnZXNUb0Jhc2U2NChxdWVzdGlvbm5haXJlLmltYWdlcyk7XG4gICAgICBkZWNvZGVkSW5mby5wdXNoKHtcbiAgICAgICAgLi4ucXVlc3Rpb25uYWlyZSxcbiAgICAgICAgaW1hZ2VzOiBkZWNvZGVkSW1hZ2VzLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coZGVjb2RlZEluZm8pO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgIG1lc3NhZ2U6IGRlY29kZWRJbmZvLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgZXJyb3I6IGVyci5tZXNzYWdlLFxuICAgIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiY29ubmVjdCIsIk5leHRSZXNwb25zZSIsInJlYWRGaWxlIiwicXVlc3Rpb25uYWlyZU1vZGVsIiwiZGVjb2RlSW1hZ2VzVG9CYXNlNjQiLCJpbWFnZXMiLCJkZWNvZGVkSW1hZ2VzIiwiaW1hZ2UiLCJpbWFnZURhdGEiLCJhbnN3ZXIiLCJlbmNvZGluZyIsInB1c2giLCJkeW5hbWljIiwiR0VUIiwicmVxdWVzdCIsImluZm8iLCJmaW5kIiwidHlwZSIsImxlYW4iLCJkZWNvZGVkSW5mbyIsInF1ZXN0aW9ubmFpcmUiLCJjb25zb2xlIiwibG9nIiwianNvbiIsIm1lc3NhZ2UiLCJlcnIiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/setting/getAnsweredQuestionnaire/route.tsx\n");

/***/ }),

/***/ "(rsc)/./src/dbConfig/dbConfig.js":
/*!**********************************!*\
  !*** ./src/dbConfig/dbConfig.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connect: () => (/* binding */ connect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connect() {\n    try {\n        mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.DB);\n        const connection = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);\n        connection.on(\"connected\", ()=>{\n            console.log(\"MongoDb Connected Successfully\");\n        });\n        connection.on(\"error\", (err)=>{\n            console.log(\"Connection Error\", err.message);\n            process.exit();\n        });\n    } catch (error) {\n        console.log(\"Something went wrong\", error.message);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGJDb25maWcvZGJDb25maWcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBQ3pCLGVBQWVDO0lBQ2xCLElBQUk7UUFDQUQsdURBQWdCLENBQUNFLFFBQVFDLEdBQUcsQ0FBQ0MsRUFBRTtRQUMvQixNQUFNQyxhQUFhTCw0REFBbUI7UUFDdENLLFdBQVdDLEVBQUUsQ0FBQyxhQUFhO1lBQ3ZCQyxRQUFRQyxHQUFHLENBQUM7UUFDaEI7UUFDQUgsV0FBV0MsRUFBRSxDQUFDLFNBQVMsQ0FBQ0c7WUFDcEJGLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JDLElBQUlDLE9BQU87WUFDM0NSLFFBQVFTLElBQUk7UUFDaEI7SUFDSixFQUFFLE9BQU9DLE9BQU87UUFDWkwsUUFBUUMsR0FBRyxDQUFDLHdCQUF3QkksTUFBTUYsT0FBTztJQUNyRDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG10cy8uL3NyYy9kYkNvbmZpZy9kYkNvbmZpZy5qcz84ZDFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgIHRyeSB7XG4gICAgICAgIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuREIpO1xuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gbW9uZ29vc2UuY29ubmVjdGlvbjtcbiAgICAgICAgY29ubmVjdGlvbi5vbignY29ubmVjdGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJNb25nb0RiIENvbm5lY3RlZCBTdWNjZXNzZnVsbHlcIilcbiAgICAgICAgfSlcbiAgICAgICAgY29ubmVjdGlvbi5vbignZXJyb3InLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3Rpb24gRXJyb3JcIiwgZXJyLm1lc3NhZ2UpXG4gICAgICAgICAgICBwcm9jZXNzLmV4aXQoKVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiREIiLCJjb25uZWN0aW9uIiwib24iLCJjb25zb2xlIiwibG9nIiwiZXJyIiwibWVzc2FnZSIsImV4aXQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/dbConfig/dbConfig.js\n");

/***/ }),

/***/ "(rsc)/./src/models/questionnaireMaster.js":
/*!*******************************************!*\
  !*** ./src/models/questionnaireMaster.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst { mongoose } = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst Schema = mongoose.Schema;\n//const ED = rootRequire('utils/encry_decry')\nconst schema = new Schema({\n    type: {\n        type: String,\n        enum: [\n            \"question\",\n            \"answer\"\n        ],\n        default: \"question\"\n    },\n    userId: mongoose.Types.ObjectId,\n    userName: String,\n    isApproved: Boolean,\n    formType: {\n        type: String,\n        required: true\n    },\n    creationDate: {\n        type: Date,\n        default: new Date().toISOString()\n    },\n    questionnaireName: {\n        type: String\n    },\n    // Fields for questionModel\n    questions: [\n        {\n            questionText: {\n                type: String,\n                required: true\n            },\n            answerType: {\n                type: String,\n                enum: [\n                    \"rating\",\n                    \"yesno\",\n                    \"text\"\n                ],\n                required: true\n            },\n            answer: String\n        }\n    ],\n    // Fields for imageModel\n    images: [\n        {\n            imageName: {\n                type: String,\n                required: true\n            },\n            latitude: String,\n            longitude: String,\n            answer: String\n        }\n    ]\n}, {\n    collection: \"questionnaireModel\"\n});\nconst questionnaireModel = mongoose.models.questionnaireModel || mongoose.model(\"questionnaireModel\", schema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (questionnaireModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL3F1ZXN0aW9ubmFpcmVNYXN0ZXIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU0sRUFBRUEsUUFBUSxFQUFFLEdBQUdDLG1CQUFPQSxDQUFDO0FBQzdCLE1BQU1DLFNBQVNGLFNBQVNFLE1BQU07QUFDOUIsNkNBQTZDO0FBQzdDLE1BQU1DLFNBQVMsSUFBSUQsT0FBTztJQUN0QkUsTUFBTztRQUNIQSxNQUFPQztRQUNQQyxNQUFPO1lBQUM7WUFBWTtTQUFTO1FBQzdCQyxTQUFVO0lBQ2Q7SUFDQUMsUUFBU1IsU0FBU1MsS0FBSyxDQUFDQyxRQUFRO0lBQ2hDQyxVQUFXTjtJQUNYTyxZQUFhQztJQUNiQyxVQUFVO1FBQ05WLE1BQU1DO1FBQ0xVLFVBQVU7SUFDZjtJQUNBQyxjQUFjO1FBQ1ZaLE1BQU1hO1FBQ05WLFNBQVMsSUFBSVUsT0FBT0MsV0FBVztJQUNuQztJQUNBQyxtQkFBb0I7UUFDaEJmLE1BQU9DO0lBQ1g7SUFDQSwyQkFBMkI7SUFDM0JlLFdBQVc7UUFDUDtZQUNJQyxjQUFjO2dCQUNWakIsTUFBTUM7Z0JBQ05VLFVBQVU7WUFDZDtZQUNBTyxZQUFZO2dCQUNSbEIsTUFBTUM7Z0JBQ05DLE1BQU07b0JBQUM7b0JBQVU7b0JBQVM7aUJBQU87Z0JBQ2pDUyxVQUFVO1lBQ2Q7WUFDQVEsUUFBU2xCO1FBQ2I7S0FDSDtJQUNELHdCQUF3QjtJQUN4Qm1CLFFBQVE7UUFDSjtZQUNJQyxXQUFXO2dCQUNQckIsTUFBTUM7Z0JBQ05VLFVBQVU7WUFDZDtZQUNBVyxVQUFXckI7WUFDWHNCLFdBQVl0QjtZQUNaa0IsUUFBU2xCO1FBQ2I7S0FDSDtBQUNMLEdBQUc7SUFDQ3VCLFlBQVk7QUFDaEI7QUFFQSxNQUFNQyxxQkFBcUI3QixTQUFTOEIsTUFBTSxDQUFDRCxrQkFBa0IsSUFBSTdCLFNBQVMrQixLQUFLLENBQUMsc0JBQXNCNUI7QUFFdEcsaUVBQWUwQixrQkFBa0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kbXRzLy4vc3JjL21vZGVscy9xdWVzdGlvbm5haXJlTWFzdGVyLmpzPzA4YjYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBtb25nb29zZSB9ID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hXG4vL2NvbnN0IEVEID0gcm9vdFJlcXVpcmUoJ3V0aWxzL2VuY3J5X2RlY3J5JylcbmNvbnN0IHNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICAgIHR5cGUgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgICAgIGVudW0gOiBbJ3F1ZXN0aW9uJywgJ2Fuc3dlciddLFxuICAgICAgICBkZWZhdWx0IDogJ3F1ZXN0aW9uJ1xuICAgIH0sXG4gICAgdXNlcklkIDogbW9uZ29vc2UuVHlwZXMuT2JqZWN0SWQsXG4gICAgdXNlck5hbWUgOiBTdHJpbmcsXG4gICAgaXNBcHByb3ZlZCA6IEJvb2xlYW4sXG4gICAgZm9ybVR5cGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBjcmVhdGlvbkRhdGU6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgZGVmYXVsdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgIH0sXG4gICAgcXVlc3Rpb25uYWlyZU5hbWUgOiB7XG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXG4gICAgfSxcbiAgICAvLyBGaWVsZHMgZm9yIHF1ZXN0aW9uTW9kZWxcbiAgICBxdWVzdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcXVlc3Rpb25UZXh0OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFuc3dlclR5cGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZW51bTogWydyYXRpbmcnLCAneWVzbm8nLCAndGV4dCddLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFuc3dlciA6IFN0cmluZ1xuICAgICAgICB9XG4gICAgXSxcbiAgICAvLyBGaWVsZHMgZm9yIGltYWdlTW9kZWxcbiAgICBpbWFnZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2VOYW1lOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxhdGl0dWRlIDogU3RyaW5nLFxuICAgICAgICAgICAgbG9uZ2l0dWRlIDogU3RyaW5nLFxuICAgICAgICAgICAgYW5zd2VyIDogU3RyaW5nXG4gICAgICAgIH1cbiAgICBdLFxufSwge1xuICAgIGNvbGxlY3Rpb246ICdxdWVzdGlvbm5haXJlTW9kZWwnLFxufSk7XG5cbmNvbnN0IHF1ZXN0aW9ubmFpcmVNb2RlbCA9IG1vbmdvb3NlLm1vZGVscy5xdWVzdGlvbm5haXJlTW9kZWwgfHwgbW9uZ29vc2UubW9kZWwoXCJxdWVzdGlvbm5haXJlTW9kZWxcIiwgc2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlc3Rpb25uYWlyZU1vZGVsO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIlNjaGVtYSIsInNjaGVtYSIsInR5cGUiLCJTdHJpbmciLCJlbnVtIiwiZGVmYXVsdCIsInVzZXJJZCIsIlR5cGVzIiwiT2JqZWN0SWQiLCJ1c2VyTmFtZSIsImlzQXBwcm92ZWQiLCJCb29sZWFuIiwiZm9ybVR5cGUiLCJyZXF1aXJlZCIsImNyZWF0aW9uRGF0ZSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInF1ZXN0aW9ubmFpcmVOYW1lIiwicXVlc3Rpb25zIiwicXVlc3Rpb25UZXh0IiwiYW5zd2VyVHlwZSIsImFuc3dlciIsImltYWdlcyIsImltYWdlTmFtZSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiY29sbGVjdGlvbiIsInF1ZXN0aW9ubmFpcmVNb2RlbCIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/questionnaireMaster.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsetting%2FgetAnsweredQuestionnaire%2Froute&page=%2Fapi%2Fsetting%2FgetAnsweredQuestionnaire%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsetting%2FgetAnsweredQuestionnaire%2Froute.tsx&appDir=%2FUsers%2Fdelta%2FDMTS%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdelta%2FDMTS&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
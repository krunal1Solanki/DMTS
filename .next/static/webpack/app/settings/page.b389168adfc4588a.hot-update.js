"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/settings/page",{

/***/ "(app-pages-browser)/./src/Components/ImeiApproval.jsx":
/*!*****************************************!*\
  !*** ./src/Components/ImeiApproval.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/card/dist/chunk-YQO7BFFX.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/card/dist/chunk-2EW3JUUD.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-KRPLQIP4.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-7OLJDQMT.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/card/dist/chunk-FHHZMTWR.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/table/dist/chunk-GEJVU65N.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/table/dist/chunk-J4QO5GAJ.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/table/dist/chunk-GIQFRSD6.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/table/dist/chunk-T2WCTPDH.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/switch/dist/chunk-VTV6N5LE.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ImeiApproval = ()=>{\n    _s();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.userReducer.value.users.filter((item)=>typeof item.imeiPMSC == \"string\")) || []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"Users\", users);\n    }, [\n        users\n    ]);\n    const handleSwitchChange = (index)=>{\n        setUsers((prevUsers)=>{\n            const updatedUsers = [\n                ...prevUsers\n            ];\n            const updatedUser = {\n                ...updatedUsers[index],\n                approved: !updatedUsers[index].approved\n            };\n            updatedUsers[index] = updatedUser;\n            return updatedUsers;\n        });\n    };\n    const handleUpdateClick = (userId)=>{\n        const apiEndpoint = \"YOUR_API_ENDPOINT\"; // Replace with the actual API endpoint\n        const userToUpdate = users.find((user)=>user._id === userId);\n        fetch(apiEndpoint, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                userId: userToUpdate._id,\n                approved: userToUpdate.approved\n            })\n        }).then((response)=>response.json()).then((data)=>{\n            console.log(\"Update response:\", data);\n        // You can handle the response as needed\n        }).catch((error)=>{\n            console.error(\"Error updating user:\", error);\n        // Handle errors\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.CardHeader, {\n                bg: \"teal.500\",\n                borderBottomWidth: \"1px\",\n                borderColor: \"teal.600\",\n                color: \"white\",\n                textAlign: \"center\",\n                padding: \"4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                        size: \"md\",\n                        textTransform: \"uppercase\",\n                        children: \"IMEI Approval\"\n                    }, void 0, false, {\n                        fileName: \"/Users/delta/DMTS/src/Components/ImeiApproval.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/delta/DMTS/src/Components/ImeiApproval.jsx\",\n                    lineNumber: 75,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/delta/DMTS/src/Components/ImeiApproval.jsx\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.CardBody, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table, {\n                    variant: \"striped\",\n                    colorScheme: \"teal\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Tbody, {\n                        children: users.map((user, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Tr, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Td, {\n                                        children: user.pmscUserData.employeeId\n                                    }, void 0, false, {\n                                        fileName: \"/Users/delta/DMTS/src/Components/ImeiApproval.jsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Td, {\n                                        children: user.OperatorName\n                                    }, void 0, false, {\n                                        fileName: \"/Users/delta/DMTS/src/Components/ImeiApproval.jsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Td, {\n                                        children: user.imeiPMSC\n                                    }, void 0, false, {\n                                        fileName: \"/Users/delta/DMTS/src/Components/ImeiApproval.jsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Td, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Switch, {\n                                            isChecked: user.approved || false,\n                                            onChange: ()=>handleSwitchChange(index)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/delta/DMTS/src/Components/ImeiApproval.jsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/delta/DMTS/src/Components/ImeiApproval.jsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Td, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Button, {\n                                            onClick: ()=>handleUpdateClick(user._id),\n                                            children: \"Update\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/delta/DMTS/src/Components/ImeiApproval.jsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/delta/DMTS/src/Components/ImeiApproval.jsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/delta/DMTS/src/Components/ImeiApproval.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 29\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/delta/DMTS/src/Components/ImeiApproval.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/delta/DMTS/src/Components/ImeiApproval.jsx\",\n                    lineNumber: 82,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/delta/DMTS/src/Components/ImeiApproval.jsx\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/delta/DMTS/src/Components/ImeiApproval.jsx\",\n        lineNumber: 66,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ImeiApproval, \"q7fnP6lbgHxdrnzy5Evmn8EcK/c=\");\n_c = ImeiApproval;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImeiApproval);\nvar _c;\n$RefreshReg$(_c, \"ImeiApproval\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Db21wb25lbnRzL0ltZWlBcHByb3ZhbC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ21EO0FBYXpCO0FBQ2dCO0FBRTFDLE1BQU1lLGVBQWU7O0lBRWpCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHZiwrQ0FBUUEsQ0FBQ1ksd0RBQVdBLENBQUMsQ0FBQ0ksUUFBVSxNQUFPQyxXQUFXLENBQUNDLEtBQUssQ0FBQ0osS0FBSyxDQUFFSyxNQUFNLENBQUMsQ0FBQ0MsT0FBUyxPQUFPQSxLQUFLQyxRQUFRLElBQUksY0FBYyxFQUFFO0lBRW5KdEIsZ0RBQVNBLENBQUM7UUFDTnVCLFFBQVFDLEdBQUcsQ0FBQyxTQUFTVDtJQUN6QixHQUFHO1FBQUNBO0tBQU07SUFFVixNQUFNVSxxQkFBcUIsQ0FBQ0M7UUFDeEJWLFNBQVMsQ0FBQ1c7WUFDTixNQUFNQyxlQUFlO21CQUFJRDthQUFVO1lBQ25DLE1BQU1FLGNBQWM7Z0JBQ2hCLEdBQUdELFlBQVksQ0FBQ0YsTUFBTTtnQkFDdEJJLFVBQVUsQ0FBQ0YsWUFBWSxDQUFDRixNQUFNLENBQUNJLFFBQVE7WUFDM0M7WUFDQUYsWUFBWSxDQUFDRixNQUFNLEdBQUdHO1lBQ3RCLE9BQU9EO1FBQ1g7SUFDSjtJQUdBLE1BQU1HLG9CQUFvQixDQUFDQztRQUN2QixNQUFNQyxjQUFjLHFCQUFxQix1Q0FBdUM7UUFFaEYsTUFBTUMsZUFBZW5CLE1BQU1vQixJQUFJLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsR0FBRyxLQUFLTDtRQUV2RE0sTUFBTUwsYUFBYTtZQUNmTSxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ0wsZ0JBQWdCO1lBQ3BCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFDakJYLFFBQVFFLGFBQWFHLEdBQUc7Z0JBQ3hCUCxVQUFVSSxhQUFhSixRQUFRO1lBQ25DO1FBQ0osR0FDQ2MsSUFBSSxDQUFDLENBQUNDLFdBQWFBLFNBQVNDLElBQUksSUFDaENGLElBQUksQ0FBQyxDQUFDRztZQUNIeEIsUUFBUUMsR0FBRyxDQUFDLG9CQUFvQnVCO1FBQ2hDLHdDQUF3QztRQUM1QyxHQUNDQyxLQUFLLENBQUMsQ0FBQ0M7WUFDSjFCLFFBQVEwQixLQUFLLENBQUMsd0JBQXdCQTtRQUN0QyxnQkFBZ0I7UUFDcEI7SUFDSjtJQUVBLHFCQUNJLDhEQUFDMUMsa0RBQUlBOzswQkFDRCw4REFBQ0Usd0RBQVVBO2dCQUNQeUMsSUFBSTtnQkFDSkMsbUJBQWtCO2dCQUNsQkMsYUFBYTtnQkFDYkMsT0FBTTtnQkFDTkMsV0FBVTtnQkFDVkMsU0FBUTswQkFFUiw0RUFBQzVDLGtEQUFJQTs4QkFDRCw0RUFBQ0QscURBQU9BO3dCQUFDOEMsTUFBSzt3QkFBS0MsZUFBYztrQ0FDNUI7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSWIsOERBQUNqRCxzREFBUUE7MEJBQ0wsNEVBQUNOLG1EQUFLQTtvQkFBQ3dELFNBQVE7b0JBQVVDLGFBQVk7OEJBQ2pDLDRFQUFDeEQsbURBQUtBO2tDQUNEWSxNQUFNNkMsR0FBRyxDQUFDLENBQUN4QixNQUFNVixzQkFDZCw4REFBQ3RCLGlEQUFFQTs7a0RBQ0MsOERBQUNDLGlEQUFFQTtrREFBRStCLEtBQUt5QixZQUFZLENBQUNDLFVBQVU7Ozs7OztrREFDakMsOERBQUN6RCxpREFBRUE7a0RBQUUrQixLQUFLMkIsWUFBWTs7Ozs7O2tEQUN0Qiw4REFBQzFELGlEQUFFQTtrREFBRStCLEtBQUtkLFFBQVE7Ozs7OztrREFDbEIsOERBQUNqQixpREFBRUE7a0RBQ0MsNEVBQUNDLHFEQUFNQTs0Q0FDSDBELFdBQVc1QixLQUFLTixRQUFRLElBQUk7NENBQzVCbUMsVUFBVSxJQUFNeEMsbUJBQW1CQzs7Ozs7Ozs7Ozs7a0RBRzNDLDhEQUFDckIsaURBQUVBO2tEQUNDLDRFQUFDTyxxREFBTUE7NENBQUNzRCxTQUFTLElBQU1uQyxrQkFBa0JLLEtBQUtDLEdBQUc7c0RBQUc7Ozs7Ozs7Ozs7OzsrQkFYbkRYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCckM7R0F6Rk1aO0tBQUFBO0FBMkZOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL0ltZWlBcHByb3ZhbC5qc3g/NzU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgICBUYWJsZSxcbiAgICBUYm9keSxcbiAgICBUcixcbiAgICBUZCxcbiAgICBTd2l0Y2gsXG4gICAgQ2FyZCxcbiAgICBDYXJkQm9keSxcbiAgICBDYXJkSGVhZGVyLFxuICAgIEhlYWRpbmcsXG4gICAgRmxleCxcbiAgICBCdXR0b24sIC8vIEltcG9ydCBDaGFrcmEgVUkgQnV0dG9uXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNvbnN0IEltZWlBcHByb3ZhbCA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gKHN0YXRlLnVzZXJSZWR1Y2VyLnZhbHVlLnVzZXJzKS5maWx0ZXIoKGl0ZW0pID0+IHR5cGVvZiBpdGVtLmltZWlQTVNDID09ICdzdHJpbmcnKSkgfHwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJVc2Vyc1wiLCB1c2Vycyk7XG4gICAgfSwgW3VzZXJzXSk7XG5cbiAgICBjb25zdCBoYW5kbGVTd2l0Y2hDaGFuZ2UgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgc2V0VXNlcnMoKHByZXZVc2VycykgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFVzZXJzID0gWy4uLnByZXZVc2Vyc107XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkVXNlciA9IHtcbiAgICAgICAgICAgICAgICAuLi51cGRhdGVkVXNlcnNbaW5kZXhdLFxuICAgICAgICAgICAgICAgIGFwcHJvdmVkOiAhdXBkYXRlZFVzZXJzW2luZGV4XS5hcHByb3ZlZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB1cGRhdGVkVXNlcnNbaW5kZXhdID0gdXBkYXRlZFVzZXI7XG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlZFVzZXJzO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFxuXG4gICAgY29uc3QgaGFuZGxlVXBkYXRlQ2xpY2sgPSAodXNlcklkKSA9PiB7XG4gICAgICAgIGNvbnN0IGFwaUVuZHBvaW50ID0gJ1lPVVJfQVBJX0VORFBPSU5UJzsgLy8gUmVwbGFjZSB3aXRoIHRoZSBhY3R1YWwgQVBJIGVuZHBvaW50XG5cbiAgICAgICAgY29uc3QgdXNlclRvVXBkYXRlID0gdXNlcnMuZmluZCgodXNlcikgPT4gdXNlci5faWQgPT09IHVzZXJJZCk7XG5cbiAgICAgICAgZmV0Y2goYXBpRW5kcG9pbnQsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCAvLyBvciAnUFVUJyBkZXBlbmRpbmcgb24geW91ciBBUElcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHVzZXJUb1VwZGF0ZS5faWQsXG4gICAgICAgICAgICAgICAgYXBwcm92ZWQ6IHVzZXJUb1VwZGF0ZS5hcHByb3ZlZCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVcGRhdGUgcmVzcG9uc2U6JywgZGF0YSk7XG4gICAgICAgICAgICAvLyBZb3UgY2FuIGhhbmRsZSB0aGUgcmVzcG9uc2UgYXMgbmVlZGVkXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHVzZXI6JywgZXJyb3IpO1xuICAgICAgICAgICAgLy8gSGFuZGxlIGVycm9yc1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICA8Q2FyZEhlYWRlclxuICAgICAgICAgICAgICAgIGJnPXsndGVhbC41MDAnfVxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoPVwiMXB4XCJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcj17J3RlYWwuNjAwJ31cbiAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIHBhZGRpbmc9XCI0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmxleD5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cIm1kXCIgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgeydJTUVJIEFwcHJvdmFsJ31cbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8VGFibGUgdmFyaWFudD1cInN0cmlwZWRcIiBjb2xvclNjaGVtZT1cInRlYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJzLm1hcCgodXNlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZD57dXNlci5wbXNjVXNlckRhdGEuZW1wbG95ZWVJZH08L1RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGQ+e3VzZXIuT3BlcmF0b3JOYW1lfTwvVGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZD57dXNlci5pbWVpUE1TQ308L1RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDaGVja2VkPXt1c2VyLmFwcHJvdmVkIHx8IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVTd2l0Y2hDaGFuZ2UoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVcGRhdGVDbGljayh1c2VyLl9pZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ucj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L1Rib2R5PlxuICAgICAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICA8L0NhcmQ+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltZWlBcHByb3ZhbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVGFibGUiLCJUYm9keSIsIlRyIiwiVGQiLCJTd2l0Y2giLCJDYXJkIiwiQ2FyZEJvZHkiLCJDYXJkSGVhZGVyIiwiSGVhZGluZyIsIkZsZXgiLCJCdXR0b24iLCJ1c2VTZWxlY3RvciIsIkltZWlBcHByb3ZhbCIsInVzZXJzIiwic2V0VXNlcnMiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwidmFsdWUiLCJmaWx0ZXIiLCJpdGVtIiwiaW1laVBNU0MiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3dpdGNoQ2hhbmdlIiwiaW5kZXgiLCJwcmV2VXNlcnMiLCJ1cGRhdGVkVXNlcnMiLCJ1cGRhdGVkVXNlciIsImFwcHJvdmVkIiwiaGFuZGxlVXBkYXRlQ2xpY2siLCJ1c2VySWQiLCJhcGlFbmRwb2ludCIsInVzZXJUb1VwZGF0ZSIsImZpbmQiLCJ1c2VyIiwiX2lkIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJiZyIsImJvcmRlckJvdHRvbVdpZHRoIiwiYm9yZGVyQ29sb3IiLCJjb2xvciIsInRleHRBbGlnbiIsInBhZGRpbmciLCJzaXplIiwidGV4dFRyYW5zZm9ybSIsInZhcmlhbnQiLCJjb2xvclNjaGVtZSIsIm1hcCIsInBtc2NVc2VyRGF0YSIsImVtcGxveWVlSWQiLCJPcGVyYXRvck5hbWUiLCJpc0NoZWNrZWQiLCJvbkNoYW5nZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Components/ImeiApproval.jsx\n"));

/***/ })

});
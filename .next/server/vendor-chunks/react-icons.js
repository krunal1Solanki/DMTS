/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-icons";
exports.ids = ["vendor-chunks/react-icons"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-icons/fa/index.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/react-icons/fa/index.esm.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

/***/ }),

/***/ "(ssr)/./node_modules/react-icons/lib/cjs/iconBase.js":
/*!******************************************************!*\
  !*** ./node_modules/react-icons/lib/cjs/iconBase.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.IconBase = exports.GenIcon = void 0;\nvar React = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\nvar iconContext_1 = __webpack_require__(/*! ./iconContext */ \"(ssr)/./node_modules/react-icons/lib/cjs/iconContext.js\");\nfunction Tree2Element(tree) {\n    return (tree &&\n        tree.map(function (node, i) {\n            return React.createElement(node.tag, __assign({ key: i }, node.attr), Tree2Element(node.child));\n        }));\n}\nfunction GenIcon(data) {\n    // eslint-disable-next-line react/display-name\n    return function (props) { return (React.createElement(IconBase, __assign({ attr: __assign({}, data.attr) }, props), Tree2Element(data.child))); };\n}\nexports.GenIcon = GenIcon;\nfunction IconBase(props) {\n    var elem = function (conf) {\n        var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, [\"attr\", \"size\", \"title\"]);\n        var computedSize = size || conf.size || \"1em\";\n        var className;\n        if (conf.className)\n            className = conf.className;\n        if (props.className)\n            className = (className ? className + \" \" : \"\") + props.className;\n        return (React.createElement(\"svg\", __assign({ stroke: \"currentColor\", fill: \"currentColor\", strokeWidth: \"0\" }, conf.attr, attr, svgProps, { className: className, style: __assign(__assign({ color: props.color || conf.color }, conf.style), props.style), height: computedSize, width: computedSize, xmlns: \"http://www.w3.org/2000/svg\" }),\n            title && React.createElement(\"title\", null, title),\n            props.children));\n    };\n    return iconContext_1.IconContext !== undefined ? (React.createElement(iconContext_1.IconContext.Consumer, null, function (conf) { return elem(conf); })) : (elem(iconContext_1.DefaultContext));\n}\nexports.IconBase = IconBase;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtaWNvbnMvbGliL2Nqcy9pY29uQmFzZS5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0E7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxjQUFjO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZ0JBQWdCLEdBQUcsZUFBZTtBQUNsQyxZQUFZLG1CQUFPLENBQUMsd0dBQU87QUFDM0Isb0JBQW9CLG1CQUFPLENBQUMsOEVBQWU7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsNERBQTRELFFBQVE7QUFDcEUsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixpREFBaUQsaUJBQWlCLGNBQWM7QUFDOUc7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELGdFQUFnRSwrQkFBK0IsaURBQWlELGtDQUFrQyw2R0FBNkc7QUFDclY7QUFDQTtBQUNBO0FBQ0Esc0lBQXNJLG9CQUFvQjtBQUMxSjtBQUNBLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL2RtdHMvLi9ub2RlX21vZHVsZXMvcmVhY3QtaWNvbnMvbGliL2Nqcy9pY29uQmFzZS5qcz8yOTQwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSWNvbkJhc2UgPSBleHBvcnRzLkdlbkljb24gPSB2b2lkIDA7XG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgaWNvbkNvbnRleHRfMSA9IHJlcXVpcmUoXCIuL2ljb25Db250ZXh0XCIpO1xuZnVuY3Rpb24gVHJlZTJFbGVtZW50KHRyZWUpIHtcbiAgICByZXR1cm4gKHRyZWUgJiZcbiAgICAgICAgdHJlZS5tYXAoZnVuY3Rpb24gKG5vZGUsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KG5vZGUudGFnLCBfX2Fzc2lnbih7IGtleTogaSB9LCBub2RlLmF0dHIpLCBUcmVlMkVsZW1lbnQobm9kZS5jaGlsZCkpO1xuICAgICAgICB9KSk7XG59XG5mdW5jdGlvbiBHZW5JY29uKGRhdGEpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkJhc2UsIF9fYXNzaWduKHsgYXR0cjogX19hc3NpZ24oe30sIGRhdGEuYXR0cikgfSwgcHJvcHMpLCBUcmVlMkVsZW1lbnQoZGF0YS5jaGlsZCkpKTsgfTtcbn1cbmV4cG9ydHMuR2VuSWNvbiA9IEdlbkljb247XG5mdW5jdGlvbiBJY29uQmFzZShwcm9wcykge1xuICAgIHZhciBlbGVtID0gZnVuY3Rpb24gKGNvbmYpIHtcbiAgICAgICAgdmFyIGF0dHIgPSBwcm9wcy5hdHRyLCBzaXplID0gcHJvcHMuc2l6ZSwgdGl0bGUgPSBwcm9wcy50aXRsZSwgc3ZnUHJvcHMgPSBfX3Jlc3QocHJvcHMsIFtcImF0dHJcIiwgXCJzaXplXCIsIFwidGl0bGVcIl0pO1xuICAgICAgICB2YXIgY29tcHV0ZWRTaXplID0gc2l6ZSB8fCBjb25mLnNpemUgfHwgXCIxZW1cIjtcbiAgICAgICAgdmFyIGNsYXNzTmFtZTtcbiAgICAgICAgaWYgKGNvbmYuY2xhc3NOYW1lKVxuICAgICAgICAgICAgY2xhc3NOYW1lID0gY29uZi5jbGFzc05hbWU7XG4gICAgICAgIGlmIChwcm9wcy5jbGFzc05hbWUpXG4gICAgICAgICAgICBjbGFzc05hbWUgPSAoY2xhc3NOYW1lID8gY2xhc3NOYW1lICsgXCIgXCIgOiBcIlwiKSArIHByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9fYXNzaWduKHsgc3Ryb2tlOiBcImN1cnJlbnRDb2xvclwiLCBmaWxsOiBcImN1cnJlbnRDb2xvclwiLCBzdHJva2VXaWR0aDogXCIwXCIgfSwgY29uZi5hdHRyLCBhdHRyLCBzdmdQcm9wcywgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHsgY29sb3I6IHByb3BzLmNvbG9yIHx8IGNvbmYuY29sb3IgfSwgY29uZi5zdHlsZSksIHByb3BzLnN0eWxlKSwgaGVpZ2h0OiBjb21wdXRlZFNpemUsIHdpZHRoOiBjb21wdXRlZFNpemUsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgfSksXG4gICAgICAgICAgICB0aXRsZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGl0bGVcIiwgbnVsbCwgdGl0bGUpLFxuICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW4pKTtcbiAgICB9O1xuICAgIHJldHVybiBpY29uQ29udGV4dF8xLkljb25Db250ZXh0ICE9PSB1bmRlZmluZWQgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChpY29uQ29udGV4dF8xLkljb25Db250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29uZikgeyByZXR1cm4gZWxlbShjb25mKTsgfSkpIDogKGVsZW0oaWNvbkNvbnRleHRfMS5EZWZhdWx0Q29udGV4dCkpO1xufVxuZXhwb3J0cy5JY29uQmFzZSA9IEljb25CYXNlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-icons/lib/cjs/iconBase.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-icons/lib/cjs/iconContext.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-icons/lib/cjs/iconContext.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.IconContext = exports.DefaultContext = void 0;\nvar React = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\nexports.DefaultContext = {\n    color: undefined,\n    size: undefined,\n    className: undefined,\n    style: undefined,\n    attr: undefined,\n};\nexports.IconContext = React.createContext && React.createContext(exports.DefaultContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtaWNvbnMvbGliL2Nqcy9pY29uQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBbUIsR0FBRyxzQkFBc0I7QUFDNUMsWUFBWSxtQkFBTyxDQUFDLHdHQUFPO0FBQzNCLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kbXRzLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWljb25zL2xpYi9janMvaWNvbkNvbnRleHQuanM/YzYyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSWNvbkNvbnRleHQgPSBleHBvcnRzLkRlZmF1bHRDb250ZXh0ID0gdm9pZCAwO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuZXhwb3J0cy5EZWZhdWx0Q29udGV4dCA9IHtcbiAgICBjb2xvcjogdW5kZWZpbmVkLFxuICAgIHNpemU6IHVuZGVmaW5lZCxcbiAgICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgICBzdHlsZTogdW5kZWZpbmVkLFxuICAgIGF0dHI6IHVuZGVmaW5lZCxcbn07XG5leHBvcnRzLkljb25Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCAmJiBSZWFjdC5jcmVhdGVDb250ZXh0KGV4cG9ydHMuRGVmYXVsdENvbnRleHQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-icons/lib/cjs/iconContext.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-icons/lib/cjs/iconsManifest.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-icons/lib/cjs/iconsManifest.js ***!
  \***********************************************************/
/***/ ((module) => {

eval("module.exports.IconsManifest = [\n  {\n    \"id\": \"ci\",\n    \"name\": \"Circum Icons\",\n    \"projectUrl\": \"https://circumicons.com/\",\n    \"license\": \"MPL-2.0 license\",\n    \"licenseUrl\": \"https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE\"\n  },\n  {\n    \"id\": \"fa\",\n    \"name\": \"Font Awesome 5\",\n    \"projectUrl\": \"https://fontawesome.com/\",\n    \"license\": \"CC BY 4.0 License\",\n    \"licenseUrl\": \"https://creativecommons.org/licenses/by/4.0/\"\n  },\n  {\n    \"id\": \"fa6\",\n    \"name\": \"Font Awesome 6\",\n    \"projectUrl\": \"https://fontawesome.com/\",\n    \"license\": \"CC BY 4.0 License\",\n    \"licenseUrl\": \"https://creativecommons.org/licenses/by/4.0/\"\n  },\n  {\n    \"id\": \"io\",\n    \"name\": \"Ionicons 4\",\n    \"projectUrl\": \"https://ionicons.com/\",\n    \"license\": \"MIT\",\n    \"licenseUrl\": \"https://github.com/ionic-team/ionicons/blob/master/LICENSE\"\n  },\n  {\n    \"id\": \"io5\",\n    \"name\": \"Ionicons 5\",\n    \"projectUrl\": \"https://ionicons.com/\",\n    \"license\": \"MIT\",\n    \"licenseUrl\": \"https://github.com/ionic-team/ionicons/blob/master/LICENSE\"\n  },\n  {\n    \"id\": \"md\",\n    \"name\": \"Material Design icons\",\n    \"projectUrl\": \"http://google.github.io/material-design-icons/\",\n    \"license\": \"Apache License Version 2.0\",\n    \"licenseUrl\": \"https://github.com/google/material-design-icons/blob/master/LICENSE\"\n  },\n  {\n    \"id\": \"ti\",\n    \"name\": \"Typicons\",\n    \"projectUrl\": \"http://s-ings.com/typicons/\",\n    \"license\": \"CC BY-SA 3.0\",\n    \"licenseUrl\": \"https://creativecommons.org/licenses/by-sa/3.0/\"\n  },\n  {\n    \"id\": \"go\",\n    \"name\": \"Github Octicons icons\",\n    \"projectUrl\": \"https://octicons.github.com/\",\n    \"license\": \"MIT\",\n    \"licenseUrl\": \"https://github.com/primer/octicons/blob/master/LICENSE\"\n  },\n  {\n    \"id\": \"fi\",\n    \"name\": \"Feather\",\n    \"projectUrl\": \"https://feathericons.com/\",\n    \"license\": \"MIT\",\n    \"licenseUrl\": \"https://github.com/feathericons/feather/blob/master/LICENSE\"\n  },\n  {\n    \"id\": \"lu\",\n    \"name\": \"Lucide\",\n    \"projectUrl\": \"https://lucide.dev/\",\n    \"license\": \"ISC\",\n    \"licenseUrl\": \"https://github.com/lucide-icons/lucide/blob/main/LICENSE\"\n  },\n  {\n    \"id\": \"gi\",\n    \"name\": \"Game Icons\",\n    \"projectUrl\": \"https://game-icons.net/\",\n    \"license\": \"CC BY 3.0\",\n    \"licenseUrl\": \"https://creativecommons.org/licenses/by/3.0/\"\n  },\n  {\n    \"id\": \"wi\",\n    \"name\": \"Weather Icons\",\n    \"projectUrl\": \"https://erikflowers.github.io/weather-icons/\",\n    \"license\": \"SIL OFL 1.1\",\n    \"licenseUrl\": \"http://scripts.sil.org/OFL\"\n  },\n  {\n    \"id\": \"di\",\n    \"name\": \"Devicons\",\n    \"projectUrl\": \"https://vorillaz.github.io/devicons/\",\n    \"license\": \"MIT\",\n    \"licenseUrl\": \"https://opensource.org/licenses/MIT\"\n  },\n  {\n    \"id\": \"ai\",\n    \"name\": \"Ant Design Icons\",\n    \"projectUrl\": \"https://github.com/ant-design/ant-design-icons\",\n    \"license\": \"MIT\",\n    \"licenseUrl\": \"https://opensource.org/licenses/MIT\"\n  },\n  {\n    \"id\": \"bs\",\n    \"name\": \"Bootstrap Icons\",\n    \"projectUrl\": \"https://github.com/twbs/icons\",\n    \"license\": \"MIT\",\n    \"licenseUrl\": \"https://opensource.org/licenses/MIT\"\n  },\n  {\n    \"id\": \"ri\",\n    \"name\": \"Remix Icon\",\n    \"projectUrl\": \"https://github.com/Remix-Design/RemixIcon\",\n    \"license\": \"Apache License Version 2.0\",\n    \"licenseUrl\": \"http://www.apache.org/licenses/\"\n  },\n  {\n    \"id\": \"fc\",\n    \"name\": \"Flat Color Icons\",\n    \"projectUrl\": \"https://github.com/icons8/flat-color-icons\",\n    \"license\": \"MIT\",\n    \"licenseUrl\": \"https://opensource.org/licenses/MIT\"\n  },\n  {\n    \"id\": \"gr\",\n    \"name\": \"Grommet-Icons\",\n    \"projectUrl\": \"https://github.com/grommet/grommet-icons\",\n    \"license\": \"Apache License Version 2.0\",\n    \"licenseUrl\": \"http://www.apache.org/licenses/\"\n  },\n  {\n    \"id\": \"hi\",\n    \"name\": \"Heroicons\",\n    \"projectUrl\": \"https://github.com/tailwindlabs/heroicons\",\n    \"license\": \"MIT\",\n    \"licenseUrl\": \"https://opensource.org/licenses/MIT\"\n  },\n  {\n    \"id\": \"hi2\",\n    \"name\": \"Heroicons 2\",\n    \"projectUrl\": \"https://github.com/tailwindlabs/heroicons\",\n    \"license\": \"MIT\",\n    \"licenseUrl\": \"https://opensource.org/licenses/MIT\"\n  },\n  {\n    \"id\": \"si\",\n    \"name\": \"Simple Icons\",\n    \"projectUrl\": \"https://simpleicons.org/\",\n    \"license\": \"CC0 1.0 Universal\",\n    \"licenseUrl\": \"https://creativecommons.org/publicdomain/zero/1.0/\"\n  },\n  {\n    \"id\": \"sl\",\n    \"name\": \"Simple Line Icons\",\n    \"projectUrl\": \"https://thesabbir.github.io/simple-line-icons/\",\n    \"license\": \"MIT\",\n    \"licenseUrl\": \"https://opensource.org/licenses/MIT\"\n  },\n  {\n    \"id\": \"im\",\n    \"name\": \"IcoMoon Free\",\n    \"projectUrl\": \"https://github.com/Keyamoon/IcoMoon-Free\",\n    \"license\": \"CC BY 4.0 License\",\n    \"licenseUrl\": \"https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt\"\n  },\n  {\n    \"id\": \"bi\",\n    \"name\": \"BoxIcons\",\n    \"projectUrl\": \"https://github.com/atisawd/boxicons\",\n    \"license\": \"CC BY 4.0 License\",\n    \"licenseUrl\": \"https://github.com/atisawd/boxicons/blob/master/LICENSE\"\n  },\n  {\n    \"id\": \"cg\",\n    \"name\": \"css.gg\",\n    \"projectUrl\": \"https://github.com/astrit/css.gg\",\n    \"license\": \"MIT\",\n    \"licenseUrl\": \"https://opensource.org/licenses/MIT\"\n  },\n  {\n    \"id\": \"vsc\",\n    \"name\": \"VS Code Icons\",\n    \"projectUrl\": \"https://github.com/microsoft/vscode-codicons\",\n    \"license\": \"CC BY 4.0\",\n    \"licenseUrl\": \"https://creativecommons.org/licenses/by/4.0/\"\n  },\n  {\n    \"id\": \"tb\",\n    \"name\": \"Tabler Icons\",\n    \"projectUrl\": \"https://github.com/tabler/tabler-icons\",\n    \"license\": \"MIT\",\n    \"licenseUrl\": \"https://opensource.org/licenses/MIT\"\n  },\n  {\n    \"id\": \"tfi\",\n    \"name\": \"Themify Icons\",\n    \"projectUrl\": \"https://github.com/lykmapipo/themify-icons\",\n    \"license\": \"MIT\",\n    \"licenseUrl\": \"https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE\"\n  },\n  {\n    \"id\": \"rx\",\n    \"name\": \"Radix Icons\",\n    \"projectUrl\": \"https://icons.radix-ui.com\",\n    \"license\": \"MIT\",\n    \"licenseUrl\": \"https://github.com/radix-ui/icons/blob/master/LICENSE\"\n  },\n  {\n    \"id\": \"pi\",\n    \"name\": \"Phosphor Icons\",\n    \"projectUrl\": \"https://github.com/phosphor-icons/core\",\n    \"license\": \"MIT\",\n    \"licenseUrl\": \"https://github.com/phosphor-icons/core/blob/main/LICENSE\"\n  },\n  {\n    \"id\": \"lia\",\n    \"name\": \"Icons8 Line Awesome\",\n    \"projectUrl\": \"https://icons8.com/line-awesome\",\n    \"license\": \"MIT\",\n    \"licenseUrl\": \"https://github.com/icons8/line-awesome/blob/master/LICENSE.md\"\n  }\n]//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtaWNvbnMvbGliL2Nqcy9pY29uc01hbmlmZXN0LmpzIiwibWFwcGluZ3MiOiJBQUFBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG10cy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pY29ucy9saWIvY2pzL2ljb25zTWFuaWZlc3QuanM/NTUyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cy5JY29uc01hbmlmZXN0ID0gW1xuICB7XG4gICAgXCJpZFwiOiBcImNpXCIsXG4gICAgXCJuYW1lXCI6IFwiQ2lyY3VtIEljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9jaXJjdW1pY29ucy5jb20vXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiTVBMLTIuMCBsaWNlbnNlXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0tsYXJyLUFnZW5jeS9DaXJjdW0tSWNvbnMvYmxvYi9tYWluL0xJQ0VOU0VcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImZhXCIsXG4gICAgXCJuYW1lXCI6IFwiRm9udCBBd2Vzb21lIDVcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJDQyBCWSA0LjAgTGljZW5zZVwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS80LjAvXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJmYTZcIixcbiAgICBcIm5hbWVcIjogXCJGb250IEF3ZXNvbWUgNlwiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL1wiLFxuICAgIFwibGljZW5zZVwiOiBcIkNDIEJZIDQuMCBMaWNlbnNlXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LzQuMC9cIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImlvXCIsXG4gICAgXCJuYW1lXCI6IFwiSW9uaWNvbnMgNFwiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vaW9uaWNvbnMuY29tL1wiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljb25zL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImlvNVwiLFxuICAgIFwibmFtZVwiOiBcIklvbmljb25zIDVcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2lvbmljb25zLmNvbS9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pY29ucy9ibG9iL21hc3Rlci9MSUNFTlNFXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJtZFwiLFxuICAgIFwibmFtZVwiOiBcIk1hdGVyaWFsIERlc2lnbiBpY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHA6Ly9nb29nbGUuZ2l0aHViLmlvL21hdGVyaWFsLWRlc2lnbi1pY29ucy9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvbWF0ZXJpYWwtZGVzaWduLWljb25zL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcInRpXCIsXG4gICAgXCJuYW1lXCI6IFwiVHlwaWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwOi8vcy1pbmdzLmNvbS90eXBpY29ucy9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJDQyBCWS1TQSAzLjBcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMy4wL1wiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiZ29cIixcbiAgICBcIm5hbWVcIjogXCJHaXRodWIgT2N0aWNvbnMgaWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL29jdGljb25zLmdpdGh1Yi5jb20vXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ByaW1lci9vY3RpY29ucy9ibG9iL21hc3Rlci9MSUNFTlNFXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJmaVwiLFxuICAgIFwibmFtZVwiOiBcIkZlYXRoZXJcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2ZlYXRoZXJpY29ucy5jb20vXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ZlYXRoZXJpY29ucy9mZWF0aGVyL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImx1XCIsXG4gICAgXCJuYW1lXCI6IFwiTHVjaWRlXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9sdWNpZGUuZGV2L1wiLFxuICAgIFwibGljZW5zZVwiOiBcIklTQ1wiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sdWNpZGUtaWNvbnMvbHVjaWRlL2Jsb2IvbWFpbi9MSUNFTlNFXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJnaVwiLFxuICAgIFwibmFtZVwiOiBcIkdhbWUgSWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2dhbWUtaWNvbnMubmV0L1wiLFxuICAgIFwibGljZW5zZVwiOiBcIkNDIEJZIDMuMFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS8zLjAvXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJ3aVwiLFxuICAgIFwibmFtZVwiOiBcIldlYXRoZXIgSWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2VyaWtmbG93ZXJzLmdpdGh1Yi5pby93ZWF0aGVyLWljb25zL1wiLFxuICAgIFwibGljZW5zZVwiOiBcIlNJTCBPRkwgMS4xXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cDovL3NjcmlwdHMuc2lsLm9yZy9PRkxcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImRpXCIsXG4gICAgXCJuYW1lXCI6IFwiRGV2aWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL3ZvcmlsbGF6LmdpdGh1Yi5pby9kZXZpY29ucy9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiYWlcIixcbiAgICBcIm5hbWVcIjogXCJBbnQgRGVzaWduIEljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi1pY29uc1wiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJic1wiLFxuICAgIFwibmFtZVwiOiBcIkJvb3RzdHJhcCBJY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2ljb25zXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcInJpXCIsXG4gICAgXCJuYW1lXCI6IFwiUmVtaXggSWNvblwiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9SZW1peC1EZXNpZ24vUmVtaXhJY29uXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjBcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJmY1wiLFxuICAgIFwibmFtZVwiOiBcIkZsYXQgQ29sb3IgSWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vaWNvbnM4L2ZsYXQtY29sb3ItaWNvbnNcIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiZ3JcIixcbiAgICBcIm5hbWVcIjogXCJHcm9tbWV0LUljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2dyb21tZXQvZ3JvbW1ldC1pY29uc1wiLFxuICAgIFwibGljZW5zZVwiOiBcIkFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL1wiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiaGlcIixcbiAgICBcIm5hbWVcIjogXCJIZXJvaWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL2hlcm9pY29uc1wiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJoaTJcIixcbiAgICBcIm5hbWVcIjogXCJIZXJvaWNvbnMgMlwiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvaGVyb2ljb25zXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcInNpXCIsXG4gICAgXCJuYW1lXCI6IFwiU2ltcGxlIEljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9zaW1wbGVpY29ucy5vcmcvXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiQ0MwIDEuMCBVbml2ZXJzYWxcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvcHVibGljZG9tYWluL3plcm8vMS4wL1wiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwic2xcIixcbiAgICBcIm5hbWVcIjogXCJTaW1wbGUgTGluZSBJY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vdGhlc2FiYmlyLmdpdGh1Yi5pby9zaW1wbGUtbGluZS1pY29ucy9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiaW1cIixcbiAgICBcIm5hbWVcIjogXCJJY29Nb29uIEZyZWVcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vS2V5YW1vb24vSWNvTW9vbi1GcmVlXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiQ0MgQlkgNC4wIExpY2Vuc2VcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vS2V5YW1vb24vSWNvTW9vbi1GcmVlL2Jsb2IvbWFzdGVyL0xpY2Vuc2UudHh0XCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJiaVwiLFxuICAgIFwibmFtZVwiOiBcIkJveEljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2F0aXNhd2QvYm94aWNvbnNcIixcbiAgICBcImxpY2Vuc2VcIjogXCJDQyBCWSA0LjAgTGljZW5zZVwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hdGlzYXdkL2JveGljb25zL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImNnXCIsXG4gICAgXCJuYW1lXCI6IFwiY3NzLmdnXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FzdHJpdC9jc3MuZ2dcIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwidnNjXCIsXG4gICAgXCJuYW1lXCI6IFwiVlMgQ29kZSBJY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvdnNjb2RlLWNvZGljb25zXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiQ0MgQlkgNC4wXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LzQuMC9cIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcInRiXCIsXG4gICAgXCJuYW1lXCI6IFwiVGFibGVyIEljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3RhYmxlci90YWJsZXItaWNvbnNcIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwidGZpXCIsXG4gICAgXCJuYW1lXCI6IFwiVGhlbWlmeSBJY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9seWttYXBpcG8vdGhlbWlmeS1pY29uc1wiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS90aGVjcmVhdGlvbi9zdGFuZGFyZC1pY29ucy9ibG9iL21hc3Rlci9tb2R1bGVzL3RoZW1pZnktaWNvbnMvTElDRU5TRVwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwicnhcIixcbiAgICBcIm5hbWVcIjogXCJSYWRpeCBJY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vaWNvbnMucmFkaXgtdWkuY29tXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3JhZGl4LXVpL2ljb25zL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcInBpXCIsXG4gICAgXCJuYW1lXCI6IFwiUGhvc3Bob3IgSWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vcGhvc3Bob3ItaWNvbnMvY29yZVwiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9waG9zcGhvci1pY29ucy9jb3JlL2Jsb2IvbWFpbi9MSUNFTlNFXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJsaWFcIixcbiAgICBcIm5hbWVcIjogXCJJY29uczggTGluZSBBd2Vzb21lXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9pY29uczguY29tL2xpbmUtYXdlc29tZVwiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9pY29uczgvbGluZS1hd2Vzb21lL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWRcIlxuICB9XG5dIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-icons/lib/cjs/iconsManifest.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-icons/lib/cjs/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-icons/lib/cjs/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./iconsManifest */ \"(ssr)/./node_modules/react-icons/lib/cjs/iconsManifest.js\"), exports);\n__exportStar(__webpack_require__(/*! ./iconBase */ \"(ssr)/./node_modules/react-icons/lib/cjs/iconBase.js\"), exports);\n__exportStar(__webpack_require__(/*! ./iconContext */ \"(ssr)/./node_modules/react-icons/lib/cjs/iconContext.js\"), exports);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtaWNvbnMvbGliL2Nqcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxhQUFhLG1CQUFPLENBQUMsa0ZBQWlCO0FBQ3RDLGFBQWEsbUJBQU8sQ0FBQyx3RUFBWTtBQUNqQyxhQUFhLG1CQUFPLENBQUMsOEVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kbXRzLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWljb25zL2xpYi9janMvaW5kZXguanM/YjlkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2ljb25zTWFuaWZlc3RcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2ljb25CYXNlXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9pY29uQ29udGV4dFwiKSwgZXhwb3J0cyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-icons/lib/cjs/index.js\n");

/***/ })

};
;
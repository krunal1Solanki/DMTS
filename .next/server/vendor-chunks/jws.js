/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/jws";
exports.ids = ["vendor-chunks/jws"];
exports.modules = {

/***/ "(rsc)/./node_modules/jws/index.js":
/*!***********************************!*\
  !*** ./node_modules/jws/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("/*global exports*/ var SignStream = __webpack_require__(/*! ./lib/sign-stream */ \"(rsc)/./node_modules/jws/lib/sign-stream.js\");\nvar VerifyStream = __webpack_require__(/*! ./lib/verify-stream */ \"(rsc)/./node_modules/jws/lib/verify-stream.js\");\nvar ALGORITHMS = [\n    \"HS256\",\n    \"HS384\",\n    \"HS512\",\n    \"RS256\",\n    \"RS384\",\n    \"RS512\",\n    \"PS256\",\n    \"PS384\",\n    \"PS512\",\n    \"ES256\",\n    \"ES384\",\n    \"ES512\"\n];\nexports.ALGORITHMS = ALGORITHMS;\nexports.sign = SignStream.sign;\nexports.verify = VerifyStream.verify;\nexports.decode = VerifyStream.decode;\nexports.isValid = VerifyStream.isValid;\nexports.createSign = function createSign(opts) {\n    return new SignStream(opts);\n};\nexports.createVerify = function createVerify(opts) {\n    return new VerifyStream(opts);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvandzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQixHQUNoQixJQUFJQSxhQUFhQyxtQkFBT0EsQ0FBQztBQUN6QixJQUFJQyxlQUFlRCxtQkFBT0EsQ0FBQztBQUUzQixJQUFJRSxhQUFhO0lBQ2Y7SUFBUztJQUFTO0lBQ2xCO0lBQVM7SUFBUztJQUNsQjtJQUFTO0lBQVM7SUFDbEI7SUFBUztJQUFTO0NBQ25CO0FBRURDLGtCQUFrQixHQUFHRDtBQUNyQkMsWUFBWSxHQUFHSixXQUFXSyxJQUFJO0FBQzlCRCxjQUFjLEdBQUdGLGFBQWFJLE1BQU07QUFDcENGLGNBQWMsR0FBR0YsYUFBYUssTUFBTTtBQUNwQ0gsZUFBZSxHQUFHRixhQUFhTSxPQUFPO0FBQ3RDSixrQkFBa0IsR0FBRyxTQUFTSyxXQUFXQyxJQUFJO0lBQzNDLE9BQU8sSUFBSVYsV0FBV1U7QUFDeEI7QUFDQU4sb0JBQW9CLEdBQUcsU0FBU08sYUFBYUQsSUFBSTtJQUMvQyxPQUFPLElBQUlSLGFBQWFRO0FBQzFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG10cy8uL25vZGVfbW9kdWxlcy9qd3MvaW5kZXguanM/ZTIxMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKmdsb2JhbCBleHBvcnRzKi9cbnZhciBTaWduU3RyZWFtID0gcmVxdWlyZSgnLi9saWIvc2lnbi1zdHJlYW0nKTtcbnZhciBWZXJpZnlTdHJlYW0gPSByZXF1aXJlKCcuL2xpYi92ZXJpZnktc3RyZWFtJyk7XG5cbnZhciBBTEdPUklUSE1TID0gW1xuICAnSFMyNTYnLCAnSFMzODQnLCAnSFM1MTInLFxuICAnUlMyNTYnLCAnUlMzODQnLCAnUlM1MTInLFxuICAnUFMyNTYnLCAnUFMzODQnLCAnUFM1MTInLFxuICAnRVMyNTYnLCAnRVMzODQnLCAnRVM1MTInXG5dO1xuXG5leHBvcnRzLkFMR09SSVRITVMgPSBBTEdPUklUSE1TO1xuZXhwb3J0cy5zaWduID0gU2lnblN0cmVhbS5zaWduO1xuZXhwb3J0cy52ZXJpZnkgPSBWZXJpZnlTdHJlYW0udmVyaWZ5O1xuZXhwb3J0cy5kZWNvZGUgPSBWZXJpZnlTdHJlYW0uZGVjb2RlO1xuZXhwb3J0cy5pc1ZhbGlkID0gVmVyaWZ5U3RyZWFtLmlzVmFsaWQ7XG5leHBvcnRzLmNyZWF0ZVNpZ24gPSBmdW5jdGlvbiBjcmVhdGVTaWduKG9wdHMpIHtcbiAgcmV0dXJuIG5ldyBTaWduU3RyZWFtKG9wdHMpO1xufTtcbmV4cG9ydHMuY3JlYXRlVmVyaWZ5ID0gZnVuY3Rpb24gY3JlYXRlVmVyaWZ5KG9wdHMpIHtcbiAgcmV0dXJuIG5ldyBWZXJpZnlTdHJlYW0ob3B0cyk7XG59O1xuIl0sIm5hbWVzIjpbIlNpZ25TdHJlYW0iLCJyZXF1aXJlIiwiVmVyaWZ5U3RyZWFtIiwiQUxHT1JJVEhNUyIsImV4cG9ydHMiLCJzaWduIiwidmVyaWZ5IiwiZGVjb2RlIiwiaXNWYWxpZCIsImNyZWF0ZVNpZ24iLCJvcHRzIiwiY3JlYXRlVmVyaWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/jws/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/jws/lib/data-stream.js":
/*!*********************************************!*\
  !*** ./node_modules/jws/lib/data-stream.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/*global module, process*/ \nvar Buffer = (__webpack_require__(/*! safe-buffer */ \"(rsc)/./node_modules/safe-buffer/index.js\").Buffer);\nvar Stream = __webpack_require__(/*! stream */ \"stream\");\nvar util = __webpack_require__(/*! util */ \"util\");\nfunction DataStream(data) {\n    this.buffer = null;\n    this.writable = true;\n    this.readable = true;\n    // No input\n    if (!data) {\n        this.buffer = Buffer.alloc(0);\n        return this;\n    }\n    // Stream\n    if (typeof data.pipe === \"function\") {\n        this.buffer = Buffer.alloc(0);\n        data.pipe(this);\n        return this;\n    }\n    // Buffer or String\n    // or Object (assumedly a passworded key)\n    if (data.length || typeof data === \"object\") {\n        this.buffer = data;\n        this.writable = false;\n        process.nextTick((function() {\n            this.emit(\"end\", data);\n            this.readable = false;\n            this.emit(\"close\");\n        }).bind(this));\n        return this;\n    }\n    throw new TypeError(\"Unexpected data type (\" + typeof data + \")\");\n}\nutil.inherits(DataStream, Stream);\nDataStream.prototype.write = function write(data) {\n    this.buffer = Buffer.concat([\n        this.buffer,\n        Buffer.from(data)\n    ]);\n    this.emit(\"data\", data);\n};\nDataStream.prototype.end = function end(data) {\n    if (data) this.write(data);\n    this.emit(\"end\", data);\n    this.emit(\"close\");\n    this.writable = false;\n    this.readable = false;\n};\nmodule.exports = DataStream;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvandzL2xpYi9kYXRhLXN0cmVhbS5qcyIsIm1hcHBpbmdzIjoiQUFBQSx3QkFBd0I7QUFDeEIsSUFBSUEsU0FBU0MsNEZBQTZCO0FBQzFDLElBQUlDLFNBQVNELG1CQUFPQSxDQUFDO0FBQ3JCLElBQUlFLE9BQU9GLG1CQUFPQSxDQUFDO0FBRW5CLFNBQVNHLFdBQVdDLElBQUk7SUFDdEIsSUFBSSxDQUFDQyxNQUFNLEdBQUc7SUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBRztJQUNoQixJQUFJLENBQUNDLFFBQVEsR0FBRztJQUVoQixXQUFXO0lBQ1gsSUFBSSxDQUFDSCxNQUFNO1FBQ1QsSUFBSSxDQUFDQyxNQUFNLEdBQUdOLE9BQU9TLEtBQUssQ0FBQztRQUMzQixPQUFPLElBQUk7SUFDYjtJQUVBLFNBQVM7SUFDVCxJQUFJLE9BQU9KLEtBQUtLLElBQUksS0FBSyxZQUFZO1FBQ25DLElBQUksQ0FBQ0osTUFBTSxHQUFHTixPQUFPUyxLQUFLLENBQUM7UUFDM0JKLEtBQUtLLElBQUksQ0FBQyxJQUFJO1FBQ2QsT0FBTyxJQUFJO0lBQ2I7SUFFQSxtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLElBQUlMLEtBQUtNLE1BQU0sSUFBSSxPQUFPTixTQUFTLFVBQVU7UUFDM0MsSUFBSSxDQUFDQyxNQUFNLEdBQUdEO1FBQ2QsSUFBSSxDQUFDRSxRQUFRLEdBQUc7UUFDaEJLLFFBQVFDLFFBQVEsQ0FBQztZQUNmLElBQUksQ0FBQ0MsSUFBSSxDQUFDLE9BQU9UO1lBQ2pCLElBQUksQ0FBQ0csUUFBUSxHQUFHO1lBQ2hCLElBQUksQ0FBQ00sSUFBSSxDQUFDO1FBQ1osR0FBRUMsSUFBSSxDQUFDLElBQUk7UUFDWCxPQUFPLElBQUk7SUFDYjtJQUVBLE1BQU0sSUFBSUMsVUFBVSwyQkFBMEIsT0FBT1gsT0FBTztBQUM5RDtBQUNBRixLQUFLYyxRQUFRLENBQUNiLFlBQVlGO0FBRTFCRSxXQUFXYyxTQUFTLENBQUNDLEtBQUssR0FBRyxTQUFTQSxNQUFNZCxJQUFJO0lBQzlDLElBQUksQ0FBQ0MsTUFBTSxHQUFHTixPQUFPb0IsTUFBTSxDQUFDO1FBQUMsSUFBSSxDQUFDZCxNQUFNO1FBQUVOLE9BQU9xQixJQUFJLENBQUNoQjtLQUFNO0lBQzVELElBQUksQ0FBQ1MsSUFBSSxDQUFDLFFBQVFUO0FBQ3BCO0FBRUFELFdBQVdjLFNBQVMsQ0FBQ0ksR0FBRyxHQUFHLFNBQVNBLElBQUlqQixJQUFJO0lBQzFDLElBQUlBLE1BQ0YsSUFBSSxDQUFDYyxLQUFLLENBQUNkO0lBQ2IsSUFBSSxDQUFDUyxJQUFJLENBQUMsT0FBT1Q7SUFDakIsSUFBSSxDQUFDUyxJQUFJLENBQUM7SUFDVixJQUFJLENBQUNQLFFBQVEsR0FBRztJQUNoQixJQUFJLENBQUNDLFFBQVEsR0FBRztBQUNsQjtBQUVBZSxPQUFPQyxPQUFPLEdBQUdwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2RtdHMvLi9ub2RlX21vZHVsZXMvandzL2xpYi9kYXRhLXN0cmVhbS5qcz82Yjc5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qZ2xvYmFsIG1vZHVsZSwgcHJvY2VzcyovXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKS5CdWZmZXI7XG52YXIgU3RyZWFtID0gcmVxdWlyZSgnc3RyZWFtJyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcblxuZnVuY3Rpb24gRGF0YVN0cmVhbShkYXRhKSB7XG4gIHRoaXMuYnVmZmVyID0gbnVsbDtcbiAgdGhpcy53cml0YWJsZSA9IHRydWU7XG4gIHRoaXMucmVhZGFibGUgPSB0cnVlO1xuXG4gIC8vIE5vIGlucHV0XG4gIGlmICghZGF0YSkge1xuICAgIHRoaXMuYnVmZmVyID0gQnVmZmVyLmFsbG9jKDApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gU3RyZWFtXG4gIGlmICh0eXBlb2YgZGF0YS5waXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5idWZmZXIgPSBCdWZmZXIuYWxsb2MoMCk7XG4gICAgZGF0YS5waXBlKHRoaXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gQnVmZmVyIG9yIFN0cmluZ1xuICAvLyBvciBPYmplY3QgKGFzc3VtZWRseSBhIHBhc3N3b3JkZWQga2V5KVxuICBpZiAoZGF0YS5sZW5ndGggfHwgdHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgdGhpcy5idWZmZXIgPSBkYXRhO1xuICAgIHRoaXMud3JpdGFibGUgPSBmYWxzZTtcbiAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuZW1pdCgnZW5kJywgZGF0YSk7XG4gICAgICB0aGlzLnJlYWRhYmxlID0gZmFsc2U7XG4gICAgICB0aGlzLmVtaXQoJ2Nsb3NlJyk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ1VuZXhwZWN0ZWQgZGF0YSB0eXBlICgnKyB0eXBlb2YgZGF0YSArICcpJyk7XG59XG51dGlsLmluaGVyaXRzKERhdGFTdHJlYW0sIFN0cmVhbSk7XG5cbkRhdGFTdHJlYW0ucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUoZGF0YSkge1xuICB0aGlzLmJ1ZmZlciA9IEJ1ZmZlci5jb25jYXQoW3RoaXMuYnVmZmVyLCBCdWZmZXIuZnJvbShkYXRhKV0pO1xuICB0aGlzLmVtaXQoJ2RhdGEnLCBkYXRhKTtcbn07XG5cbkRhdGFTdHJlYW0ucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uIGVuZChkYXRhKSB7XG4gIGlmIChkYXRhKVxuICAgIHRoaXMud3JpdGUoZGF0YSk7XG4gIHRoaXMuZW1pdCgnZW5kJywgZGF0YSk7XG4gIHRoaXMuZW1pdCgnY2xvc2UnKTtcbiAgdGhpcy53cml0YWJsZSA9IGZhbHNlO1xuICB0aGlzLnJlYWRhYmxlID0gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFTdHJlYW07XG4iXSwibmFtZXMiOlsiQnVmZmVyIiwicmVxdWlyZSIsIlN0cmVhbSIsInV0aWwiLCJEYXRhU3RyZWFtIiwiZGF0YSIsImJ1ZmZlciIsIndyaXRhYmxlIiwicmVhZGFibGUiLCJhbGxvYyIsInBpcGUiLCJsZW5ndGgiLCJwcm9jZXNzIiwibmV4dFRpY2siLCJlbWl0IiwiYmluZCIsIlR5cGVFcnJvciIsImluaGVyaXRzIiwicHJvdG90eXBlIiwid3JpdGUiLCJjb25jYXQiLCJmcm9tIiwiZW5kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/jws/lib/data-stream.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/jws/lib/sign-stream.js":
/*!*********************************************!*\
  !*** ./node_modules/jws/lib/sign-stream.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/*global module*/ \nvar Buffer = (__webpack_require__(/*! safe-buffer */ \"(rsc)/./node_modules/safe-buffer/index.js\").Buffer);\nvar DataStream = __webpack_require__(/*! ./data-stream */ \"(rsc)/./node_modules/jws/lib/data-stream.js\");\nvar jwa = __webpack_require__(/*! jwa */ \"(rsc)/./node_modules/jwa/index.js\");\nvar Stream = __webpack_require__(/*! stream */ \"stream\");\nvar toString = __webpack_require__(/*! ./tostring */ \"(rsc)/./node_modules/jws/lib/tostring.js\");\nvar util = __webpack_require__(/*! util */ \"util\");\nfunction base64url(string, encoding) {\n    return Buffer.from(string, encoding).toString(\"base64\").replace(/=/g, \"\").replace(/\\+/g, \"-\").replace(/\\//g, \"_\");\n}\nfunction jwsSecuredInput(header, payload, encoding) {\n    encoding = encoding || \"utf8\";\n    var encodedHeader = base64url(toString(header), \"binary\");\n    var encodedPayload = base64url(toString(payload), encoding);\n    return util.format(\"%s.%s\", encodedHeader, encodedPayload);\n}\nfunction jwsSign(opts) {\n    var header = opts.header;\n    var payload = opts.payload;\n    var secretOrKey = opts.secret || opts.privateKey;\n    var encoding = opts.encoding;\n    var algo = jwa(header.alg);\n    var securedInput = jwsSecuredInput(header, payload, encoding);\n    var signature = algo.sign(securedInput, secretOrKey);\n    return util.format(\"%s.%s\", securedInput, signature);\n}\nfunction SignStream(opts) {\n    var secret = opts.secret || opts.privateKey || opts.key;\n    var secretStream = new DataStream(secret);\n    this.readable = true;\n    this.header = opts.header;\n    this.encoding = opts.encoding;\n    this.secret = this.privateKey = this.key = secretStream;\n    this.payload = new DataStream(opts.payload);\n    this.secret.once(\"close\", (function() {\n        if (!this.payload.writable && this.readable) this.sign();\n    }).bind(this));\n    this.payload.once(\"close\", (function() {\n        if (!this.secret.writable && this.readable) this.sign();\n    }).bind(this));\n}\nutil.inherits(SignStream, Stream);\nSignStream.prototype.sign = function sign() {\n    try {\n        var signature = jwsSign({\n            header: this.header,\n            payload: this.payload.buffer,\n            secret: this.secret.buffer,\n            encoding: this.encoding\n        });\n        this.emit(\"done\", signature);\n        this.emit(\"data\", signature);\n        this.emit(\"end\");\n        this.readable = false;\n        return signature;\n    } catch (e) {\n        this.readable = false;\n        this.emit(\"error\", e);\n        this.emit(\"close\");\n    }\n};\nSignStream.sign = jwsSign;\nmodule.exports = SignStream;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvandzL2xpYi9zaWduLXN0cmVhbS5qcyIsIm1hcHBpbmdzIjoiQUFBQSxlQUFlO0FBQ2YsSUFBSUEsU0FBU0MsNEZBQTZCO0FBQzFDLElBQUlDLGFBQWFELG1CQUFPQSxDQUFDO0FBQ3pCLElBQUlFLE1BQU1GLG1CQUFPQSxDQUFDO0FBQ2xCLElBQUlHLFNBQVNILG1CQUFPQSxDQUFDO0FBQ3JCLElBQUlJLFdBQVdKLG1CQUFPQSxDQUFDO0FBQ3ZCLElBQUlLLE9BQU9MLG1CQUFPQSxDQUFDO0FBRW5CLFNBQVNNLFVBQVVDLE1BQU0sRUFBRUMsUUFBUTtJQUNqQyxPQUFPVCxPQUNKVSxJQUFJLENBQUNGLFFBQVFDLFVBQ2JKLFFBQVEsQ0FBQyxVQUNUTSxPQUFPLENBQUMsTUFBTSxJQUNkQSxPQUFPLENBQUMsT0FBTyxLQUNmQSxPQUFPLENBQUMsT0FBTztBQUNwQjtBQUVBLFNBQVNDLGdCQUFnQkMsTUFBTSxFQUFFQyxPQUFPLEVBQUVMLFFBQVE7SUFDaERBLFdBQVdBLFlBQVk7SUFDdkIsSUFBSU0sZ0JBQWdCUixVQUFVRixTQUFTUSxTQUFTO0lBQ2hELElBQUlHLGlCQUFpQlQsVUFBVUYsU0FBU1MsVUFBVUw7SUFDbEQsT0FBT0gsS0FBS1csTUFBTSxDQUFDLFNBQVNGLGVBQWVDO0FBQzdDO0FBRUEsU0FBU0UsUUFBUUMsSUFBSTtJQUNuQixJQUFJTixTQUFTTSxLQUFLTixNQUFNO0lBQ3hCLElBQUlDLFVBQVVLLEtBQUtMLE9BQU87SUFDMUIsSUFBSU0sY0FBY0QsS0FBS0UsTUFBTSxJQUFJRixLQUFLRyxVQUFVO0lBQ2hELElBQUliLFdBQVdVLEtBQUtWLFFBQVE7SUFDNUIsSUFBSWMsT0FBT3BCLElBQUlVLE9BQU9XLEdBQUc7SUFDekIsSUFBSUMsZUFBZWIsZ0JBQWdCQyxRQUFRQyxTQUFTTDtJQUNwRCxJQUFJaUIsWUFBWUgsS0FBS0ksSUFBSSxDQUFDRixjQUFjTDtJQUN4QyxPQUFPZCxLQUFLVyxNQUFNLENBQUMsU0FBU1EsY0FBY0M7QUFDNUM7QUFFQSxTQUFTRSxXQUFXVCxJQUFJO0lBQ3RCLElBQUlFLFNBQVNGLEtBQUtFLE1BQU0sSUFBRUYsS0FBS0csVUFBVSxJQUFFSCxLQUFLVSxHQUFHO0lBQ25ELElBQUlDLGVBQWUsSUFBSTVCLFdBQVdtQjtJQUNsQyxJQUFJLENBQUNVLFFBQVEsR0FBRztJQUNoQixJQUFJLENBQUNsQixNQUFNLEdBQUdNLEtBQUtOLE1BQU07SUFDekIsSUFBSSxDQUFDSixRQUFRLEdBQUdVLEtBQUtWLFFBQVE7SUFDN0IsSUFBSSxDQUFDWSxNQUFNLEdBQUcsSUFBSSxDQUFDQyxVQUFVLEdBQUcsSUFBSSxDQUFDTyxHQUFHLEdBQUdDO0lBQzNDLElBQUksQ0FBQ2hCLE9BQU8sR0FBRyxJQUFJWixXQUFXaUIsS0FBS0wsT0FBTztJQUMxQyxJQUFJLENBQUNPLE1BQU0sQ0FBQ1csSUFBSSxDQUFDLFNBQVM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQ2xCLE9BQU8sQ0FBQ21CLFFBQVEsSUFBSSxJQUFJLENBQUNGLFFBQVEsRUFDekMsSUFBSSxDQUFDSixJQUFJO0lBQ2IsR0FBRU8sSUFBSSxDQUFDLElBQUk7SUFFWCxJQUFJLENBQUNwQixPQUFPLENBQUNrQixJQUFJLENBQUMsU0FBUztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDWCxNQUFNLENBQUNZLFFBQVEsSUFBSSxJQUFJLENBQUNGLFFBQVEsRUFDeEMsSUFBSSxDQUFDSixJQUFJO0lBQ2IsR0FBRU8sSUFBSSxDQUFDLElBQUk7QUFDYjtBQUNBNUIsS0FBSzZCLFFBQVEsQ0FBQ1AsWUFBWXhCO0FBRTFCd0IsV0FBV1EsU0FBUyxDQUFDVCxJQUFJLEdBQUcsU0FBU0E7SUFDbkMsSUFBSTtRQUNGLElBQUlELFlBQVlSLFFBQVE7WUFDdEJMLFFBQVEsSUFBSSxDQUFDQSxNQUFNO1lBQ25CQyxTQUFTLElBQUksQ0FBQ0EsT0FBTyxDQUFDdUIsTUFBTTtZQUM1QmhCLFFBQVEsSUFBSSxDQUFDQSxNQUFNLENBQUNnQixNQUFNO1lBQzFCNUIsVUFBVSxJQUFJLENBQUNBLFFBQVE7UUFDekI7UUFDQSxJQUFJLENBQUM2QixJQUFJLENBQUMsUUFBUVo7UUFDbEIsSUFBSSxDQUFDWSxJQUFJLENBQUMsUUFBUVo7UUFDbEIsSUFBSSxDQUFDWSxJQUFJLENBQUM7UUFDVixJQUFJLENBQUNQLFFBQVEsR0FBRztRQUNoQixPQUFPTDtJQUNULEVBQUUsT0FBT2EsR0FBRztRQUNWLElBQUksQ0FBQ1IsUUFBUSxHQUFHO1FBQ2hCLElBQUksQ0FBQ08sSUFBSSxDQUFDLFNBQVNDO1FBQ25CLElBQUksQ0FBQ0QsSUFBSSxDQUFDO0lBQ1o7QUFDRjtBQUVBVixXQUFXRCxJQUFJLEdBQUdUO0FBRWxCc0IsT0FBT0MsT0FBTyxHQUFHYiIsInNvdXJjZXMiOlsid2VicGFjazovL2RtdHMvLi9ub2RlX21vZHVsZXMvandzL2xpYi9zaWduLXN0cmVhbS5qcz82ZjA4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qZ2xvYmFsIG1vZHVsZSovXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKS5CdWZmZXI7XG52YXIgRGF0YVN0cmVhbSA9IHJlcXVpcmUoJy4vZGF0YS1zdHJlYW0nKTtcbnZhciBqd2EgPSByZXF1aXJlKCdqd2EnKTtcbnZhciBTdHJlYW0gPSByZXF1aXJlKCdzdHJlYW0nKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9zdHJpbmcnKTtcbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xuXG5mdW5jdGlvbiBiYXNlNjR1cmwoc3RyaW5nLCBlbmNvZGluZykge1xuICByZXR1cm4gQnVmZmVyXG4gICAgLmZyb20oc3RyaW5nLCBlbmNvZGluZylcbiAgICAudG9TdHJpbmcoJ2Jhc2U2NCcpXG4gICAgLnJlcGxhY2UoLz0vZywgJycpXG4gICAgLnJlcGxhY2UoL1xcKy9nLCAnLScpXG4gICAgLnJlcGxhY2UoL1xcLy9nLCAnXycpO1xufVxuXG5mdW5jdGlvbiBqd3NTZWN1cmVkSW5wdXQoaGVhZGVyLCBwYXlsb2FkLCBlbmNvZGluZykge1xuICBlbmNvZGluZyA9IGVuY29kaW5nIHx8ICd1dGY4JztcbiAgdmFyIGVuY29kZWRIZWFkZXIgPSBiYXNlNjR1cmwodG9TdHJpbmcoaGVhZGVyKSwgJ2JpbmFyeScpO1xuICB2YXIgZW5jb2RlZFBheWxvYWQgPSBiYXNlNjR1cmwodG9TdHJpbmcocGF5bG9hZCksIGVuY29kaW5nKTtcbiAgcmV0dXJuIHV0aWwuZm9ybWF0KCclcy4lcycsIGVuY29kZWRIZWFkZXIsIGVuY29kZWRQYXlsb2FkKTtcbn1cblxuZnVuY3Rpb24gandzU2lnbihvcHRzKSB7XG4gIHZhciBoZWFkZXIgPSBvcHRzLmhlYWRlcjtcbiAgdmFyIHBheWxvYWQgPSBvcHRzLnBheWxvYWQ7XG4gIHZhciBzZWNyZXRPcktleSA9IG9wdHMuc2VjcmV0IHx8IG9wdHMucHJpdmF0ZUtleTtcbiAgdmFyIGVuY29kaW5nID0gb3B0cy5lbmNvZGluZztcbiAgdmFyIGFsZ28gPSBqd2EoaGVhZGVyLmFsZyk7XG4gIHZhciBzZWN1cmVkSW5wdXQgPSBqd3NTZWN1cmVkSW5wdXQoaGVhZGVyLCBwYXlsb2FkLCBlbmNvZGluZyk7XG4gIHZhciBzaWduYXR1cmUgPSBhbGdvLnNpZ24oc2VjdXJlZElucHV0LCBzZWNyZXRPcktleSk7XG4gIHJldHVybiB1dGlsLmZvcm1hdCgnJXMuJXMnLCBzZWN1cmVkSW5wdXQsIHNpZ25hdHVyZSk7XG59XG5cbmZ1bmN0aW9uIFNpZ25TdHJlYW0ob3B0cykge1xuICB2YXIgc2VjcmV0ID0gb3B0cy5zZWNyZXR8fG9wdHMucHJpdmF0ZUtleXx8b3B0cy5rZXk7XG4gIHZhciBzZWNyZXRTdHJlYW0gPSBuZXcgRGF0YVN0cmVhbShzZWNyZXQpO1xuICB0aGlzLnJlYWRhYmxlID0gdHJ1ZTtcbiAgdGhpcy5oZWFkZXIgPSBvcHRzLmhlYWRlcjtcbiAgdGhpcy5lbmNvZGluZyA9IG9wdHMuZW5jb2Rpbmc7XG4gIHRoaXMuc2VjcmV0ID0gdGhpcy5wcml2YXRlS2V5ID0gdGhpcy5rZXkgPSBzZWNyZXRTdHJlYW07XG4gIHRoaXMucGF5bG9hZCA9IG5ldyBEYXRhU3RyZWFtKG9wdHMucGF5bG9hZCk7XG4gIHRoaXMuc2VjcmV0Lm9uY2UoJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5wYXlsb2FkLndyaXRhYmxlICYmIHRoaXMucmVhZGFibGUpXG4gICAgICB0aGlzLnNpZ24oKTtcbiAgfS5iaW5kKHRoaXMpKTtcblxuICB0aGlzLnBheWxvYWQub25jZSgnY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLnNlY3JldC53cml0YWJsZSAmJiB0aGlzLnJlYWRhYmxlKVxuICAgICAgdGhpcy5zaWduKCk7XG4gIH0uYmluZCh0aGlzKSk7XG59XG51dGlsLmluaGVyaXRzKFNpZ25TdHJlYW0sIFN0cmVhbSk7XG5cblNpZ25TdHJlYW0ucHJvdG90eXBlLnNpZ24gPSBmdW5jdGlvbiBzaWduKCkge1xuICB0cnkge1xuICAgIHZhciBzaWduYXR1cmUgPSBqd3NTaWduKHtcbiAgICAgIGhlYWRlcjogdGhpcy5oZWFkZXIsXG4gICAgICBwYXlsb2FkOiB0aGlzLnBheWxvYWQuYnVmZmVyLFxuICAgICAgc2VjcmV0OiB0aGlzLnNlY3JldC5idWZmZXIsXG4gICAgICBlbmNvZGluZzogdGhpcy5lbmNvZGluZ1xuICAgIH0pO1xuICAgIHRoaXMuZW1pdCgnZG9uZScsIHNpZ25hdHVyZSk7XG4gICAgdGhpcy5lbWl0KCdkYXRhJywgc2lnbmF0dXJlKTtcbiAgICB0aGlzLmVtaXQoJ2VuZCcpO1xuICAgIHRoaXMucmVhZGFibGUgPSBmYWxzZTtcbiAgICByZXR1cm4gc2lnbmF0dXJlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdGhpcy5yZWFkYWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlKTtcbiAgICB0aGlzLmVtaXQoJ2Nsb3NlJyk7XG4gIH1cbn07XG5cblNpZ25TdHJlYW0uc2lnbiA9IGp3c1NpZ247XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnblN0cmVhbTtcbiJdLCJuYW1lcyI6WyJCdWZmZXIiLCJyZXF1aXJlIiwiRGF0YVN0cmVhbSIsImp3YSIsIlN0cmVhbSIsInRvU3RyaW5nIiwidXRpbCIsImJhc2U2NHVybCIsInN0cmluZyIsImVuY29kaW5nIiwiZnJvbSIsInJlcGxhY2UiLCJqd3NTZWN1cmVkSW5wdXQiLCJoZWFkZXIiLCJwYXlsb2FkIiwiZW5jb2RlZEhlYWRlciIsImVuY29kZWRQYXlsb2FkIiwiZm9ybWF0IiwiandzU2lnbiIsIm9wdHMiLCJzZWNyZXRPcktleSIsInNlY3JldCIsInByaXZhdGVLZXkiLCJhbGdvIiwiYWxnIiwic2VjdXJlZElucHV0Iiwic2lnbmF0dXJlIiwic2lnbiIsIlNpZ25TdHJlYW0iLCJrZXkiLCJzZWNyZXRTdHJlYW0iLCJyZWFkYWJsZSIsIm9uY2UiLCJ3cml0YWJsZSIsImJpbmQiLCJpbmhlcml0cyIsInByb3RvdHlwZSIsImJ1ZmZlciIsImVtaXQiLCJlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/jws/lib/sign-stream.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/jws/lib/tostring.js":
/*!******************************************!*\
  !*** ./node_modules/jws/lib/tostring.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/*global module*/ \nvar Buffer = (__webpack_require__(/*! buffer */ \"buffer\").Buffer);\nmodule.exports = function toString(obj) {\n    if (typeof obj === \"string\") return obj;\n    if (typeof obj === \"number\" || Buffer.isBuffer(obj)) return obj.toString();\n    return JSON.stringify(obj);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvandzL2xpYi90b3N0cmluZy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxlQUFlO0FBQ2YsSUFBSUEsU0FBU0Msb0RBQXdCO0FBRXJDQyxPQUFPQyxPQUFPLEdBQUcsU0FBU0MsU0FBU0MsR0FBRztJQUNwQyxJQUFJLE9BQU9BLFFBQVEsVUFDakIsT0FBT0E7SUFDVCxJQUFJLE9BQU9BLFFBQVEsWUFBWUwsT0FBT00sUUFBUSxDQUFDRCxNQUM3QyxPQUFPQSxJQUFJRCxRQUFRO0lBQ3JCLE9BQU9HLEtBQUtDLFNBQVMsQ0FBQ0g7QUFDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kbXRzLy4vbm9kZV9tb2R1bGVzL2p3cy9saWIvdG9zdHJpbmcuanM/MjNhMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKmdsb2JhbCBtb2R1bGUqL1xudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpLkJ1ZmZlcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0b1N0cmluZyhvYmopIHtcbiAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKVxuICAgIHJldHVybiBvYmo7XG4gIGlmICh0eXBlb2Ygb2JqID09PSAnbnVtYmVyJyB8fCBCdWZmZXIuaXNCdWZmZXIob2JqKSlcbiAgICByZXR1cm4gb2JqLnRvU3RyaW5nKCk7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopO1xufTtcbiJdLCJuYW1lcyI6WyJCdWZmZXIiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsInRvU3RyaW5nIiwib2JqIiwiaXNCdWZmZXIiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/jws/lib/tostring.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/jws/lib/verify-stream.js":
/*!***********************************************!*\
  !*** ./node_modules/jws/lib/verify-stream.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/*global module*/ \nvar Buffer = (__webpack_require__(/*! safe-buffer */ \"(rsc)/./node_modules/safe-buffer/index.js\").Buffer);\nvar DataStream = __webpack_require__(/*! ./data-stream */ \"(rsc)/./node_modules/jws/lib/data-stream.js\");\nvar jwa = __webpack_require__(/*! jwa */ \"(rsc)/./node_modules/jwa/index.js\");\nvar Stream = __webpack_require__(/*! stream */ \"stream\");\nvar toString = __webpack_require__(/*! ./tostring */ \"(rsc)/./node_modules/jws/lib/tostring.js\");\nvar util = __webpack_require__(/*! util */ \"util\");\nvar JWS_REGEX = /^[a-zA-Z0-9\\-_]+?\\.[a-zA-Z0-9\\-_]+?\\.([a-zA-Z0-9\\-_]+)?$/;\nfunction isObject(thing) {\n    return Object.prototype.toString.call(thing) === \"[object Object]\";\n}\nfunction safeJsonParse(thing) {\n    if (isObject(thing)) return thing;\n    try {\n        return JSON.parse(thing);\n    } catch (e) {\n        return undefined;\n    }\n}\nfunction headerFromJWS(jwsSig) {\n    var encodedHeader = jwsSig.split(\".\", 1)[0];\n    return safeJsonParse(Buffer.from(encodedHeader, \"base64\").toString(\"binary\"));\n}\nfunction securedInputFromJWS(jwsSig) {\n    return jwsSig.split(\".\", 2).join(\".\");\n}\nfunction signatureFromJWS(jwsSig) {\n    return jwsSig.split(\".\")[2];\n}\nfunction payloadFromJWS(jwsSig, encoding) {\n    encoding = encoding || \"utf8\";\n    var payload = jwsSig.split(\".\")[1];\n    return Buffer.from(payload, \"base64\").toString(encoding);\n}\nfunction isValidJws(string) {\n    return JWS_REGEX.test(string) && !!headerFromJWS(string);\n}\nfunction jwsVerify(jwsSig, algorithm, secretOrKey) {\n    if (!algorithm) {\n        var err = new Error(\"Missing algorithm parameter for jws.verify\");\n        err.code = \"MISSING_ALGORITHM\";\n        throw err;\n    }\n    jwsSig = toString(jwsSig);\n    var signature = signatureFromJWS(jwsSig);\n    var securedInput = securedInputFromJWS(jwsSig);\n    var algo = jwa(algorithm);\n    return algo.verify(securedInput, signature, secretOrKey);\n}\nfunction jwsDecode(jwsSig, opts) {\n    opts = opts || {};\n    jwsSig = toString(jwsSig);\n    if (!isValidJws(jwsSig)) return null;\n    var header = headerFromJWS(jwsSig);\n    if (!header) return null;\n    var payload = payloadFromJWS(jwsSig);\n    if (header.typ === \"JWT\" || opts.json) payload = JSON.parse(payload, opts.encoding);\n    return {\n        header: header,\n        payload: payload,\n        signature: signatureFromJWS(jwsSig)\n    };\n}\nfunction VerifyStream(opts) {\n    opts = opts || {};\n    var secretOrKey = opts.secret || opts.publicKey || opts.key;\n    var secretStream = new DataStream(secretOrKey);\n    this.readable = true;\n    this.algorithm = opts.algorithm;\n    this.encoding = opts.encoding;\n    this.secret = this.publicKey = this.key = secretStream;\n    this.signature = new DataStream(opts.signature);\n    this.secret.once(\"close\", (function() {\n        if (!this.signature.writable && this.readable) this.verify();\n    }).bind(this));\n    this.signature.once(\"close\", (function() {\n        if (!this.secret.writable && this.readable) this.verify();\n    }).bind(this));\n}\nutil.inherits(VerifyStream, Stream);\nVerifyStream.prototype.verify = function verify() {\n    try {\n        var valid = jwsVerify(this.signature.buffer, this.algorithm, this.key.buffer);\n        var obj = jwsDecode(this.signature.buffer, this.encoding);\n        this.emit(\"done\", valid, obj);\n        this.emit(\"data\", valid);\n        this.emit(\"end\");\n        this.readable = false;\n        return valid;\n    } catch (e) {\n        this.readable = false;\n        this.emit(\"error\", e);\n        this.emit(\"close\");\n    }\n};\nVerifyStream.decode = jwsDecode;\nVerifyStream.isValid = isValidJws;\nVerifyStream.verify = jwsVerify;\nmodule.exports = VerifyStream;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvandzL2xpYi92ZXJpZnktc3RyZWFtLmpzIiwibWFwcGluZ3MiOiJBQUFBLGVBQWU7QUFDZixJQUFJQSxTQUFTQyw0RkFBNkI7QUFDMUMsSUFBSUMsYUFBYUQsbUJBQU9BLENBQUM7QUFDekIsSUFBSUUsTUFBTUYsbUJBQU9BLENBQUM7QUFDbEIsSUFBSUcsU0FBU0gsbUJBQU9BLENBQUM7QUFDckIsSUFBSUksV0FBV0osbUJBQU9BLENBQUM7QUFDdkIsSUFBSUssT0FBT0wsbUJBQU9BLENBQUM7QUFDbkIsSUFBSU0sWUFBWTtBQUVoQixTQUFTQyxTQUFTQyxLQUFLO0lBQ3JCLE9BQU9DLE9BQU9DLFNBQVMsQ0FBQ04sUUFBUSxDQUFDTyxJQUFJLENBQUNILFdBQVc7QUFDbkQ7QUFFQSxTQUFTSSxjQUFjSixLQUFLO0lBQzFCLElBQUlELFNBQVNDLFFBQ1gsT0FBT0E7SUFDVCxJQUFJO1FBQUUsT0FBT0ssS0FBS0MsS0FBSyxDQUFDTjtJQUFRLEVBQ2hDLE9BQU9PLEdBQUc7UUFBRSxPQUFPQztJQUFXO0FBQ2hDO0FBRUEsU0FBU0MsY0FBY0MsTUFBTTtJQUMzQixJQUFJQyxnQkFBZ0JELE9BQU9FLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFO0lBQzNDLE9BQU9SLGNBQWNiLE9BQU9zQixJQUFJLENBQUNGLGVBQWUsVUFBVWYsUUFBUSxDQUFDO0FBQ3JFO0FBRUEsU0FBU2tCLG9CQUFvQkosTUFBTTtJQUNqQyxPQUFPQSxPQUFPRSxLQUFLLENBQUMsS0FBSyxHQUFHRyxJQUFJLENBQUM7QUFDbkM7QUFFQSxTQUFTQyxpQkFBaUJOLE1BQU07SUFDOUIsT0FBT0EsT0FBT0UsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQzdCO0FBRUEsU0FBU0ssZUFBZVAsTUFBTSxFQUFFUSxRQUFRO0lBQ3RDQSxXQUFXQSxZQUFZO0lBQ3ZCLElBQUlDLFVBQVVULE9BQU9FLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUNsQyxP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QUFJLENBQUNHLElBQUksQ0FBQztRQUNWLElBQUksQ0FBQ1IsUUFBUSxHQUFHO1FBQ2hCLE9BQU9LO0lBQ1QsRUFBRSxPQUFPekMsR0FBRztRQUNWLElBQUksQ0FBQ29DLFFBQVEsR0FBRztRQUNoQixJQUFJLENBQUNRLElBQUksQ0FBQyxTQUFTNUM7UUFDbkIsSUFBSSxDQUFDNEMsSUFBSSxDQUFDO0lBQ1o7QUFDRjtBQUVBYixhQUFhYyxNQUFNLEdBQUduQjtBQUN0QkssYUFBYWUsT0FBTyxHQUFHakM7QUFDdkJrQixhQUFhTixNQUFNLEdBQUdUO0FBRXRCK0IsT0FBT0MsT0FBTyxHQUFHakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kbXRzLy4vbm9kZV9tb2R1bGVzL2p3cy9saWIvdmVyaWZ5LXN0cmVhbS5qcz80MDA3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qZ2xvYmFsIG1vZHVsZSovXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKS5CdWZmZXI7XG52YXIgRGF0YVN0cmVhbSA9IHJlcXVpcmUoJy4vZGF0YS1zdHJlYW0nKTtcbnZhciBqd2EgPSByZXF1aXJlKCdqd2EnKTtcbnZhciBTdHJlYW0gPSByZXF1aXJlKCdzdHJlYW0nKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9zdHJpbmcnKTtcbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xudmFyIEpXU19SRUdFWCA9IC9eW2EtekEtWjAtOVxcLV9dKz9cXC5bYS16QS1aMC05XFwtX10rP1xcLihbYS16QS1aMC05XFwtX10rKT8kLztcblxuZnVuY3Rpb24gaXNPYmplY3QodGhpbmcpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0aGluZykgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuXG5mdW5jdGlvbiBzYWZlSnNvblBhcnNlKHRoaW5nKSB7XG4gIGlmIChpc09iamVjdCh0aGluZykpXG4gICAgcmV0dXJuIHRoaW5nO1xuICB0cnkgeyByZXR1cm4gSlNPTi5wYXJzZSh0aGluZyk7IH1cbiAgY2F0Y2ggKGUpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfVxufVxuXG5mdW5jdGlvbiBoZWFkZXJGcm9tSldTKGp3c1NpZykge1xuICB2YXIgZW5jb2RlZEhlYWRlciA9IGp3c1NpZy5zcGxpdCgnLicsIDEpWzBdO1xuICByZXR1cm4gc2FmZUpzb25QYXJzZShCdWZmZXIuZnJvbShlbmNvZGVkSGVhZGVyLCAnYmFzZTY0JykudG9TdHJpbmcoJ2JpbmFyeScpKTtcbn1cblxuZnVuY3Rpb24gc2VjdXJlZElucHV0RnJvbUpXUyhqd3NTaWcpIHtcbiAgcmV0dXJuIGp3c1NpZy5zcGxpdCgnLicsIDIpLmpvaW4oJy4nKTtcbn1cblxuZnVuY3Rpb24gc2lnbmF0dXJlRnJvbUpXUyhqd3NTaWcpIHtcbiAgcmV0dXJuIGp3c1NpZy5zcGxpdCgnLicpWzJdO1xufVxuXG5mdW5jdGlvbiBwYXlsb2FkRnJvbUpXUyhqd3NTaWcsIGVuY29kaW5nKSB7XG4gIGVuY29kaW5nID0gZW5jb2RpbmcgfHwgJ3V0ZjgnO1xuICB2YXIgcGF5bG9hZCA9IGp3c1NpZy5zcGxpdCgnLicpWzFdO1xuICByZXR1cm4gQnVmZmVyLmZyb20ocGF5bG9hZCwgJ2Jhc2U2NCcpLnRvU3RyaW5nKGVuY29kaW5nKTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEp3cyhzdHJpbmcpIHtcbiAgcmV0dXJuIEpXU19SRUdFWC50ZXN0KHN0cmluZykgJiYgISFoZWFkZXJGcm9tSldTKHN0cmluZyk7XG59XG5cbmZ1bmN0aW9uIGp3c1ZlcmlmeShqd3NTaWcsIGFsZ29yaXRobSwgc2VjcmV0T3JLZXkpIHtcbiAgaWYgKCFhbGdvcml0aG0pIHtcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKFwiTWlzc2luZyBhbGdvcml0aG0gcGFyYW1ldGVyIGZvciBqd3MudmVyaWZ5XCIpO1xuICAgIGVyci5jb2RlID0gXCJNSVNTSU5HX0FMR09SSVRITVwiO1xuICAgIHRocm93IGVycjtcbiAgfVxuICBqd3NTaWcgPSB0b1N0cmluZyhqd3NTaWcpO1xuICB2YXIgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbUpXUyhqd3NTaWcpO1xuICB2YXIgc2VjdXJlZElucHV0ID0gc2VjdXJlZElucHV0RnJvbUpXUyhqd3NTaWcpO1xuICB2YXIgYWxnbyA9IGp3YShhbGdvcml0aG0pO1xuICByZXR1cm4gYWxnby52ZXJpZnkoc2VjdXJlZElucHV0LCBzaWduYXR1cmUsIHNlY3JldE9yS2V5KTtcbn1cblxuZnVuY3Rpb24gandzRGVjb2RlKGp3c1NpZywgb3B0cykge1xuICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgandzU2lnID0gdG9TdHJpbmcoandzU2lnKTtcblxuICBpZiAoIWlzVmFsaWRKd3MoandzU2lnKSlcbiAgICByZXR1cm4gbnVsbDtcblxuICB2YXIgaGVhZGVyID0gaGVhZGVyRnJvbUpXUyhqd3NTaWcpO1xuXG4gIGlmICghaGVhZGVyKVxuICAgIHJldHVybiBudWxsO1xuXG4gIHZhciBwYXlsb2FkID0gcGF5bG9hZEZyb21KV1MoandzU2lnKTtcbiAgaWYgKGhlYWRlci50eXAgPT09ICdKV1QnIHx8IG9wdHMuanNvbilcbiAgICBwYXlsb2FkID0gSlNPTi5wYXJzZShwYXlsb2FkLCBvcHRzLmVuY29kaW5nKTtcblxuICByZXR1cm4ge1xuICAgIGhlYWRlcjogaGVhZGVyLFxuICAgIHBheWxvYWQ6IHBheWxvYWQsXG4gICAgc2lnbmF0dXJlOiBzaWduYXR1cmVGcm9tSldTKGp3c1NpZylcbiAgfTtcbn1cblxuZnVuY3Rpb24gVmVyaWZ5U3RyZWFtKG9wdHMpIHtcbiAgb3B0cyA9IG9wdHMgfHwge307XG4gIHZhciBzZWNyZXRPcktleSA9IG9wdHMuc2VjcmV0fHxvcHRzLnB1YmxpY0tleXx8b3B0cy5rZXk7XG4gIHZhciBzZWNyZXRTdHJlYW0gPSBuZXcgRGF0YVN0cmVhbShzZWNyZXRPcktleSk7XG4gIHRoaXMucmVhZGFibGUgPSB0cnVlO1xuICB0aGlzLmFsZ29yaXRobSA9IG9wdHMuYWxnb3JpdGhtO1xuICB0aGlzLmVuY29kaW5nID0gb3B0cy5lbmNvZGluZztcbiAgdGhpcy5zZWNyZXQgPSB0aGlzLnB1YmxpY0tleSA9IHRoaXMua2V5ID0gc2VjcmV0U3RyZWFtO1xuICB0aGlzLnNpZ25hdHVyZSA9IG5ldyBEYXRhU3RyZWFtKG9wdHMuc2lnbmF0dXJlKTtcbiAgdGhpcy5zZWNyZXQub25jZSgnY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLnNpZ25hdHVyZS53cml0YWJsZSAmJiB0aGlzLnJlYWRhYmxlKVxuICAgICAgdGhpcy52ZXJpZnkoKTtcbiAgfS5iaW5kKHRoaXMpKTtcblxuICB0aGlzLnNpZ25hdHVyZS5vbmNlKCdjbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuc2VjcmV0LndyaXRhYmxlICYmIHRoaXMucmVhZGFibGUpXG4gICAgICB0aGlzLnZlcmlmeSgpO1xuICB9LmJpbmQodGhpcykpO1xufVxudXRpbC5pbmhlcml0cyhWZXJpZnlTdHJlYW0sIFN0cmVhbSk7XG5WZXJpZnlTdHJlYW0ucHJvdG90eXBlLnZlcmlmeSA9IGZ1bmN0aW9uIHZlcmlmeSgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgdmFsaWQgPSBqd3NWZXJpZnkodGhpcy5zaWduYXR1cmUuYnVmZmVyLCB0aGlzLmFsZ29yaXRobSwgdGhpcy5rZXkuYnVmZmVyKTtcbiAgICB2YXIgb2JqID0gandzRGVjb2RlKHRoaXMuc2lnbmF0dXJlLmJ1ZmZlciwgdGhpcy5lbmNvZGluZyk7XG4gICAgdGhpcy5lbWl0KCdkb25lJywgdmFsaWQsIG9iaik7XG4gICAgdGhpcy5lbWl0KCdkYXRhJywgdmFsaWQpO1xuICAgIHRoaXMuZW1pdCgnZW5kJyk7XG4gICAgdGhpcy5yZWFkYWJsZSA9IGZhbHNlO1xuICAgIHJldHVybiB2YWxpZDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRoaXMucmVhZGFibGUgPSBmYWxzZTtcbiAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZSk7XG4gICAgdGhpcy5lbWl0KCdjbG9zZScpO1xuICB9XG59O1xuXG5WZXJpZnlTdHJlYW0uZGVjb2RlID0gandzRGVjb2RlO1xuVmVyaWZ5U3RyZWFtLmlzVmFsaWQgPSBpc1ZhbGlkSndzO1xuVmVyaWZ5U3RyZWFtLnZlcmlmeSA9IGp3c1ZlcmlmeTtcblxubW9kdWxlLmV4cG9ydHMgPSBWZXJpZnlTdHJlYW07XG4iXSwibmFtZXMiOlsiQnVmZmVyIiwicmVxdWlyZSIsIkRhdGFTdHJlYW0iLCJqd2EiLCJTdHJlYW0iLCJ0b1N0cmluZyIsInV0aWwiLCJKV1NfUkVHRVgiLCJpc09iamVjdCIsInRoaW5nIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY2FsbCIsInNhZmVKc29uUGFyc2UiLCJKU09OIiwicGFyc2UiLCJlIiwidW5kZWZpbmVkIiwiaGVhZGVyRnJvbUpXUyIsImp3c1NpZyIsImVuY29kZWRIZWFkZXIiLCJzcGxpdCIsImZyb20iLCJzZWN1cmVkSW5wdXRGcm9tSldTIiwiam9pbiIsInNpZ25hdHVyZUZyb21KV1MiLCJwYXlsb2FkRnJvbUpXUyIsImVuY29kaW5nIiwicGF5bG9hZCIsImlzVmFsaWRKd3MiLCJzdHJpbmciLCJ0ZXN0IiwiandzVmVyaWZ5IiwiYWxnb3JpdGhtIiwic2VjcmV0T3JLZXkiLCJlcnIiLCJFcnJvciIsImNvZGUiLCJzaWduYXR1cmUiLCJzZWN1cmVkSW5wdXQiLCJhbGdvIiwidmVyaWZ5IiwiandzRGVjb2RlIiwib3B0cyIsImhlYWRlciIsInR5cCIsImpzb24iLCJWZXJpZnlTdHJlYW0iLCJzZWNyZXQiLCJwdWJsaWNLZXkiLCJrZXkiLCJzZWNyZXRTdHJlYW0iLCJyZWFkYWJsZSIsIm9uY2UiLCJ3cml0YWJsZSIsImJpbmQiLCJpbmhlcml0cyIsInZhbGlkIiwiYnVmZmVyIiwib2JqIiwiZW1pdCIsImRlY29kZSIsImlzVmFsaWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/jws/lib/verify-stream.js\n");

/***/ })

};
;
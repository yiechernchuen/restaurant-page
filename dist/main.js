/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.jpg */ \"./src/images/background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/backgroundClipText.jpg */ \"./src/images/backgroundClipText.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    margin: 0;\\n    padding: 0;\\n}\\n\\nhtml {\\n    box-sizing: border-box;\\n}\\n*,\\n*:before,\\n*:after {\\n    box-sizing: inherit;\\n}\\n\\n#content {\\n    display: flex;\\n    flex-direction: column;\\n    min-height: 100vh;\\n}\\n\\n.nav {\\n    background-color: rgb(41, 39, 39);\\n}\\n\\n.header {\\n    text-align: center;\\n    font-family: Arial Black, Arial Bold, Gadget, sans-serif;\\n    color: rgb(58, 245, 98);\\n    font-style: italic;\\n    font-size: 45px;\\n    align-self: stretch;\\n    padding: 15px;\\n}\\n\\n.buttonDiv {\\n    display: flex;\\n    justify-content: center;\\n    gap: 30px;\\n    padding: 10px;\\n}\\n.navButton {\\n    border: none;\\n    background-color: transparent;\\n    cursor: pointer;\\n    color: white;\\n    text-decoration: underline;\\n    text-underline-offset: 5px;\\n    font-size: larger;\\n    transition: transform 0.5s;\\n}\\n\\n.navButton:hover {\\n    color: rgb(182, 247, 182);\\n    transform: translateY(-3px);\\n}\\n.home {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    gap: 20px;\\n    flex-grow: 1;\\n    background-size: cover;\\n    padding-top: 30px;\\n    padding-bottom: 30px;\\n    position: relative;\\n}\\n\\n.home::after {\\n    --blur-background: 6px;\\n    content: '';\\n    filter: blur(var(--blur-background));\\n    width: calc(100% + var(--blur-background));\\n    height: calc(100% + calc(var(--blur-background) * 3));\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    position: absolute;\\n    z-index: -100;\\n}\\n.introduction {\\n    width: 500px;\\n    text-align: center;\\n    font-size: large;\\n    color: rgb(0, 0, 0);\\n    background-color: rgba(255, 255, 255, 0.8);\\n    backdrop-filter: blur(10px);\\n    padding: 15px 30px;\\n    border-radius: 8px;\\n}\\n.logo {\\n    width: 400px;\\n    height: 400px;\\n    border-radius: 50%;\\n    object-fit: cover;\\n}\\n\\n.menu {\\n    display: none;\\n    align-items: center;\\n    justify-content: center;\\n    flex-direction: column;\\n    gap: 30px;\\n    background-color: antiquewhite;\\n    padding-top: 30px;\\n    padding-bottom: 30px;\\n}\\n\\n.menuContainer {\\n    display: flex;\\n    align-items: center;\\n    gap: 15px;\\n}\\n\\n.menuImg {\\n    width: 350px;\\n    height: 350px;\\n    object-fit: cover;\\n    border: 5px solid rgb(207, 231, 72);\\n}\\n\\n.menuDiv {\\n    width: 570px;\\n}\\n.menuHeader {\\n    margin-bottom: 20px;\\n    text-decoration: underline;\\n    text-decoration-color: rgb(0, 0, 0, 0.5);\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    background-clip: text;\\n    -webkit-background-clip: text;\\n    color: transparent;\\n}\\n.menuDesc {\\n    font-size: large;\\n}\\n\\n.contact {\\n    display: none;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    flex-grow: 1;\\n    gap: 50px;\\n    padding-top: 30px;\\n    padding-bottom: 30px;\\n    background-color: rgb(192, 192, 192);\\n}\\n.contactDiv {\\n    border: 2px solid RGB(173, 216, 230);\\n    padding: 10px;\\n    background-color: white;\\n}\\n.contactDetails {\\n    white-space: pre-wrap;\\n    font-size: 25px;\\n    line-height: 2;\\n}\\n.hoursDiv {\\n    border: 2px solid RGB(173, 216, 230);\\n    text-align: center;\\n    padding: 20px;\\n    background-color: white;\\n}\\n.hoursHeader {\\n    padding: 0;\\n    margin: 0;\\n    text-decoration: underline;\\n    font-size: 35px;\\n}\\n.hours {\\n    text-align: center;\\n    font-size: 25px;\\n    line-height: 2;\\n}\\n.footer {\\n    margin-top: auto;\\n    height: 30px;\\n    background-color: rgb(41, 39, 39);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ \"./src/webpage.js\");\n\n\n_webpage__WEBPACK_IMPORTED_MODULE_0__.contactButton.textContent = 'Contact';\n\nfunction createContact() {\n    const div = document.createElement('div');\n    div.classList.add('contactDiv');\n    for (let i = 0; i < 3; i++) {\n        const paragraph = document.createElement('p');\n        paragraph.classList.add('contactDetails');\n        div.appendChild(paragraph);\n    }\n    _webpage__WEBPACK_IMPORTED_MODULE_0__.contactContent.appendChild(div);\n    const paragraph = document.querySelectorAll('.contactDiv .contactDetails');\n    paragraph[0].textContent = '☎️  123-456-7890';\n    paragraph[1].textContent = '📍    999 Lenox Rd, Brooklyn, KSA 11203, ASU';\n    paragraph[2].textContent = '📧  FlavorfulGrind@email.com';\n}\n\nfunction createHours() {\n    const div = document.createElement('div');\n    const header = document.createElement('h1');\n    const paragraph = document.createElement('p');\n    div.classList.add('hoursDiv');\n    header.classList.add('hoursHeader');\n    paragraph.classList.add('hours');\n    header.textContent = 'Hours';\n    paragraph.innerHTML = `Monday: 8:00 a.m. - 6:00 p.m <br>\n    Tuesday: 8:00 a.m. - 6:00 p.m <br>\n    Wednesday: 8:00 a.m. - 6:00 p.m <br>\n    Thursday: Closed <br>\n    Friday: 8:00 a.m. - 6:00 p.m <br>\n    Saturday: 8:00 a.m. - 10:00 p.m <br>\n    Sunday: 8:00 a.m. - 10:00 p.m `;\n    div.append(header, paragraph);\n    _webpage__WEBPACK_IMPORTED_MODULE_0__.contactContent.appendChild(div);\n}\n\ncreateContact();\ncreateHours();\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ \"./src/webpage.js\");\n/* harmony import */ var _images_logo_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/logo.jpg */ \"./src/images/logo.jpg\");\n/* harmony import */ var _images_logo_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/logo.webp */ \"./src/images/logo.webp\");\n\n\n\n\n_webpage__WEBPACK_IMPORTED_MODULE_0__.homeButton.textContent = 'Home';\n\nconst paragraph = document.createElement('p');\nparagraph.classList.add('introduction');\n_webpage__WEBPACK_IMPORTED_MODULE_0__.homeContent.appendChild(paragraph);\nparagraph.textContent =\n    'Welcome to Flavorful Grind, where taste and quality collide! We are passionate about crafting delectable burgers that satisfy your cravings and ignite your taste buds. Our vibrant and inviting ambiance, coupled with exceptional service, creates an unforgettable dining experience. Join us and embark on a culinary journey filled with mouthwatering flavors that will leave you wanting more!';\nconst picture = document.createElement('picture');\nconst sourceWebp = document.createElement('source');\nconst sourceJpg = document.createElement('source');\nsourceWebp.setAttribute('srcset', _images_logo_webp__WEBPACK_IMPORTED_MODULE_2__);\nsourceJpg.setAttribute('srcset', _images_logo_jpg__WEBPACK_IMPORTED_MODULE_1__);\nconst logo = new Image();\nlogo.src = _images_logo_jpg__WEBPACK_IMPORTED_MODULE_1__;\nlogo.alt = 'Logo';\nlogo.classList.add('logo');\npicture.append(sourceWebp, sourceJpg, logo);\n_webpage__WEBPACK_IMPORTED_MODULE_0__.homeContent.appendChild(picture);\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _webpage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webpage.js */ \"./src/webpage.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n\nfunction switchTab() {\n    const button = document.querySelectorAll('.navButton');\n    const background = document.querySelector('#content');\n    button.forEach((item) => {\n        item.addEventListener('click', (e) => {\n            if (e.target.textContent === 'Home') {\n                _webpage_js__WEBPACK_IMPORTED_MODULE_1__.homeContent.style.display = 'flex';\n                _webpage_js__WEBPACK_IMPORTED_MODULE_1__.menuContent.style.display = 'none';\n                _webpage_js__WEBPACK_IMPORTED_MODULE_1__.contactContent.style.display = 'none';\n            } else if (e.target.textContent === 'Menu') {\n                _webpage_js__WEBPACK_IMPORTED_MODULE_1__.homeContent.style.display = 'none';\n                _webpage_js__WEBPACK_IMPORTED_MODULE_1__.menuContent.style.display = 'flex';\n                _webpage_js__WEBPACK_IMPORTED_MODULE_1__.contactContent.style.display = 'none';\n            } else if (e.target.textContent === 'Contact') {\n                _webpage_js__WEBPACK_IMPORTED_MODULE_1__.homeContent.style.display = 'none';\n                _webpage_js__WEBPACK_IMPORTED_MODULE_1__.menuContent.style.display = 'none';\n                _webpage_js__WEBPACK_IMPORTED_MODULE_1__.contactContent.style.display = 'flex';\n            }\n        });\n    });\n}\n\nswitchTab();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ \"./src/webpage.js\");\n/* harmony import */ var _images_burgers_Classic_BBQ_Bacon_Burger_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/burgers/Classic_BBQ_Bacon_Burger.jpg */ \"./src/images/burgers/Classic_BBQ_Bacon_Burger.jpg\");\n/* harmony import */ var _images_burgers_Gourmet_Truffle_Burger_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/burgers/Gourmet_Truffle_Burger.jpg */ \"./src/images/burgers/Gourmet_Truffle_Burger.jpg\");\n/* harmony import */ var _images_burgers_Mediterranean_Veggie_Burger_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/burgers/Mediterranean_Veggie_Burger.jpg */ \"./src/images/burgers/Mediterranean_Veggie_Burger.jpg\");\n/* harmony import */ var _images_burgers_Southwest_Fiesta_Burger_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/burgers/Southwest_Fiesta_Burger.jpg */ \"./src/images/burgers/Southwest_Fiesta_Burger.jpg\");\n/* harmony import */ var _images_burgers_Umami_Teriyaki_Chicken_Burger_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/burgers/Umami_Teriyaki_Chicken_Burger.jpg */ \"./src/images/burgers/Umami_Teriyaki_Chicken_Burger.jpg\");\n\n\n\n\n\n\n\n_webpage__WEBPACK_IMPORTED_MODULE_0__.menuButton.textContent = 'Menu';\nconst burgers = [_images_burgers_Classic_BBQ_Bacon_Burger_jpg__WEBPACK_IMPORTED_MODULE_1__, _images_burgers_Gourmet_Truffle_Burger_jpg__WEBPACK_IMPORTED_MODULE_2__, _images_burgers_Mediterranean_Veggie_Burger_jpg__WEBPACK_IMPORTED_MODULE_3__, _images_burgers_Southwest_Fiesta_Burger_jpg__WEBPACK_IMPORTED_MODULE_4__, _images_burgers_Umami_Teriyaki_Chicken_Burger_jpg__WEBPACK_IMPORTED_MODULE_5__];\nfor (let i = 0; i < 5; i++) {\n    let div1 = document.createElement('div');\n    let div2 = document.createElement('div');\n    let header = document.createElement('h1');\n    let paragraph = document.createElement('p');\n    let img = new Image();\n    div1.classList.add('menuContainer');\n    div2.classList.add('menuDiv');\n    header.classList.add('menuHeader');\n    paragraph.classList.add('menuDesc');\n    img.classList.add('menuImg');\n    img.src = burgers[i];\n    div2.append(header, paragraph);\n    div1.append(img, div2);\n    _webpage__WEBPACK_IMPORTED_MODULE_0__.menuContent.append(div1);\n}\n\nconst menuHeader = document.querySelectorAll('.menuHeader');\nmenuHeader[0].textContent = 'Classic BBQ Bacon Burger';\nmenuHeader[1].textContent = 'Gourmet Truffle Burger';\nmenuHeader[2].textContent = 'Mediterranean Veggie Burger';\nmenuHeader[3].textContent = 'Southwest Fiesta Burger';\nmenuHeader[4].textContent = 'Umami Teriyaki Chicken Burger';\n\nconst menuDesc = document.querySelectorAll('.menuDesc');\nmenuDesc[0].textContent =\n    'A timeless favorite with a smoky twist. Our Classic BBQ Bacon Burger features a juicy beef patty smothered in tangy barbecue sauce, topped with crispy bacon, melted cheddar cheese, crispy onion straws, lettuce, and tomato.';\nmenuDesc[1].textContent =\n    'Indulge in the ultimate luxury with our gourmet truffle burger. A succulent Wagyu beef patty infused with black truffle oil, topped with melted Gruyere cheese, caramelized onions, sautéed mushrooms, arugula, and truffle aioli.';\nmenuDesc[2].textContent =\n    'A vegetarian delight inspired by the flavors of the Mediterranean. A homemade falafel patty topped with tangy tzatziki sauce, crumbled feta cheese, sliced cucumbers, roasted red peppers, mixed greens, and a drizzle of lemon-dill dressing.';\nmenuDesc[3].textContent =\n    'Take your taste buds on a zesty adventure with our Southwest Fiesta Burger. A juicy Angus beef patty topped with melted pepper jack cheese, guacamole, roasted corn salsa, crispy tortilla strips, chipotle mayo, and fresh cilantro. ';\nmenuDesc[4].textContent =\n    'Experience the umami explosion of our Teriyaki Chicken Burger. Grilled chicken breast marinated in a savory teriyaki glaze, topped with grilled pineapple, Swiss cheese, lettuce, tomato, and teriyaki mayo. ';\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/webpage.js":
/*!************************!*\
  !*** ./src/webpage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactButton: () => (/* binding */ contactButton),\n/* harmony export */   contactContent: () => (/* binding */ contactContent),\n/* harmony export */   homeButton: () => (/* binding */ homeButton),\n/* harmony export */   homeContent: () => (/* binding */ homeContent),\n/* harmony export */   menuButton: () => (/* binding */ menuButton),\n/* harmony export */   menuContent: () => (/* binding */ menuContent)\n/* harmony export */ });\nconst header = document.createElement('div');\nconst navDiv = document.createElement('div');\nconst buttonDiv = document.createElement('div');\nconst homeButton = document.createElement('button');\nconst menuButton = document.createElement('button');\nconst contactButton = document.createElement('button');\nconst homeContent = document.createElement('div');\nconst menuContent = document.createElement('div');\nconst contactContent = document.createElement('div');\nconst footer = document.createElement('div');\nconst container = document.querySelector('#content');\nheader.classList.add('header');\nnavDiv.classList.add('nav');\nfooter.classList.add('footer');\nbuttonDiv.classList.add('buttonDiv');\nhomeButton.classList.add('navButton');\nmenuButton.classList.add('navButton');\ncontactButton.classList.add('navButton');\nhomeContent.classList.add('home');\nmenuContent.classList.add('menu');\ncontactContent.classList.add('contact');\nnavDiv.appendChild(header);\nnavDiv.appendChild(buttonDiv);\ncontainer.appendChild(navDiv);\ncontainer.appendChild(homeContent);\ncontainer.appendChild(menuContent);\ncontainer.appendChild(contactContent);\ncontainer.appendChild(footer);\nbuttonDiv.appendChild(homeButton);\nbuttonDiv.appendChild(menuButton);\nbuttonDiv.appendChild(contactButton);\n\nheader.textContent = 'Flavorful Grind';\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/webpage.js?");

/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/d710e4ea5607d667e113.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/background.jpg?");

/***/ }),

/***/ "./src/images/backgroundClipText.jpg":
/*!*******************************************!*\
  !*** ./src/images/backgroundClipText.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/fd5e4a4c1e227af0de10.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/backgroundClipText.jpg?");

/***/ }),

/***/ "./src/images/burgers/Classic_BBQ_Bacon_Burger.jpg":
/*!*********************************************************!*\
  !*** ./src/images/burgers/Classic_BBQ_Bacon_Burger.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/702e168b647228122f31.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/burgers/Classic_BBQ_Bacon_Burger.jpg?");

/***/ }),

/***/ "./src/images/burgers/Gourmet_Truffle_Burger.jpg":
/*!*******************************************************!*\
  !*** ./src/images/burgers/Gourmet_Truffle_Burger.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/ce8a6dfdab428f661071.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/burgers/Gourmet_Truffle_Burger.jpg?");

/***/ }),

/***/ "./src/images/burgers/Mediterranean_Veggie_Burger.jpg":
/*!************************************************************!*\
  !*** ./src/images/burgers/Mediterranean_Veggie_Burger.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/bc040e8767a28ffb2afc.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/burgers/Mediterranean_Veggie_Burger.jpg?");

/***/ }),

/***/ "./src/images/burgers/Southwest_Fiesta_Burger.jpg":
/*!********************************************************!*\
  !*** ./src/images/burgers/Southwest_Fiesta_Burger.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/75f2a8e10a9db2edaa20.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/burgers/Southwest_Fiesta_Burger.jpg?");

/***/ }),

/***/ "./src/images/burgers/Umami_Teriyaki_Chicken_Burger.jpg":
/*!**************************************************************!*\
  !*** ./src/images/burgers/Umami_Teriyaki_Chicken_Burger.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/343e040626c502969549.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/burgers/Umami_Teriyaki_Chicken_Burger.jpg?");

/***/ }),

/***/ "./src/images/logo.jpg":
/*!*****************************!*\
  !*** ./src/images/logo.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/f81fe2285d9b3c972a79.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/logo.jpg?");

/***/ }),

/***/ "./src/images/logo.webp":
/*!******************************!*\
  !*** ./src/images/logo.webp ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/06fb2366c44f1d6c8d88.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/logo.webp?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
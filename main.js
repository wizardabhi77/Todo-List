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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    gap: 15px;\n}\n\n.sidebar{\n    background-color: aqua;\n    border: 10px blue ridge;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n.profile{\n    display: flex;\n\n}\n.blackboard{\n    background-color: black;\n    border: 20px brown groove;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: 20px;\n}\n\n.project {\n    border: 2px whitesmoke dotted;\n    color: white;\n    font-size: 20px;\n    min-height: 20px;\n    min-width: 550px;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n}\n\n.task {\n    background-color: whitesmoke;\n    border: 5px black solid;\n    border-radius : 20px;\n    color: black;\n    display: flex;\n    justify-content: space-between;\n    gap: 10px;\n}\n\n.taskButton {\n    height: 30px;\n    width: 30px;\n    background-color: aqua; \n\n}\n\n.task button{\n    border-radius: 10px;\n    background-color: cyan; \n    height: 50px;\n    align-self: center;\n}\n\n\n.task h2 {\n    font-size: 40px;\n    font-weight: bolder;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n\n#del-project {\n    background-color: red;\n    width :30px;\n}\n\nimg {\n    height: 40px;\n}\n\nform {\n    border: 2px red groove;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n\nform button {\n    height: 20px;\n    width: 50px;\n}\n\nform input {\n    background-color: cadetblue;\n}\n\nul {\n    list-style-type: none;\n}\n\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   blackBoard: () => (/* binding */ blackBoard)\n/* harmony export */ });\n\nclass Project {\n    constructor(title, description, dueDate) {\n        this.tasks = [];\n        this.uuid = crypto.randomUUID();\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.checkBox = false;\n    }\n    \n    addTask(inputArray) {\n\n        let [title,description,dueDate,priority] = inputArray;\n        let task = new Task(title, description, dueDate, priority);\n        this.tasks.push(task);\n        blackBoard.populateStorage();\n    }\n\n    deleteTask(delTask) {\n        \n       let changeArr = this.tasks.filter(task => task !== delTask);\n       this.tasks = changeArr;\n        blackBoard.populateStorage();\n    }\n    \n    setCheckBox(){\n        this.checkBox = true;\n        blackBoard.populateStorage();\n    }\n\n\n    display() {\n        console.log(`Project:${this.title} ${this.description} Date:${this.dueDate} Done Status:${this.checkBox} Task List:${this.tasks}`);\n    }\n}\n\nclass Task {\n    constructor(title, description, dueDate, priority) {\n        this.uuid = crypto.randomUUID();\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.notes = \"\";\n        this.checkBox = false;\n    }\n\n    setCheckBox(check){\n        this.checkBox = check;\n        blackBoard.populateStorage();\n    }\n\n    setNotes(text){\n        this.notes = text;\n        blackBoard.populateStorage();\n    }\n    \n    delete(){\n\n    }\n\n    display() {\n        console.log(`Task:${this.title} ${this.description} Date:${this.dueDate} Priority: ${this.priority} Done Status:${this.checkBox} Notes:${this.notes}`);\n    }\n}\n\n\n\nconst blackBoard = function () {\n    \n    let projects = [];\n    \n    const addProject = function (inputArray) {\n        \n        let [title,description,dueDate] = inputArray.slice(0,3);\n        let project = new Project(title, description, dueDate);\n        projects.push(project);\n        populateStorage();\n    }\n\n    const deleteProject = function (delProject) {\n        \n        let changeArr = this.projects.filter(project => project !== delProject);\n        projects = changeArr;\n        \n        populateStorage();\n        \n    }\n\n    const populateStorage = function (){\n        \n        localStorage.setItem(\"projects\",JSON.stringify(projects));\n    }\n\n    return { projects, addProject, deleteProject, populateStorage};\n}();\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/app.js?\n}");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\nlet board = document.querySelector('.blackboard');\nlet projectList = document.querySelector('.project-list');\nlet projectButton = document.querySelector('#add-project');\n\n\nconst domMaker = function () {\n    \n    \n    const domInit = function () {\n       let projectArray = JSON.parse(localStorage.getItem(\"projects\"));\n        \n        console.log(projectArray);\n       projectArray.forEach((project) => {\n\n            //addProject Redundant\n            let inputArray = [project.title, project.description, project.dueDate];\n            _app__WEBPACK_IMPORTED_MODULE_0__.blackBoard.addProject(inputArray);\n\n            let projectObject = _app__WEBPACK_IMPORTED_MODULE_0__.blackBoard.projects[_app__WEBPACK_IMPORTED_MODULE_0__.blackBoard.projects.length-1];\n\n            let taskButton = document.createElement('button');\n            taskButton.setAttribute('class','taskButton');\n            taskButton.innerHTML = '+';\n            taskButton.addEventListener('click',userInput);\n            let projectElement = document.createElement('div');\n            board.appendChild(projectElement);\n\n            let deleteProject = document.createElement('button');\n            deleteProject.id = 'del-project';\n            deleteProject.innerHTML = 'X';\n            deleteProject.addEventListener('click',handleDelete);\n\n            let listItem = document.createElement('li');\n            \n            let id = projectObject.uuid;\n            projectElement.setAttribute('class','project');\n            projectElement.innerHTML = `${projectObject.title}`;\n            projectElement.id = id;\n            projectElement.appendChild(taskButton);\n\n            projectElement.appendChild(deleteProject);\n\n            listItem.innerHTML = `<h2>${projectObject.title}</h2>`;\n            projectList.appendChild(listItem);\n\n\n\n\n            //addTask Redundant\n            project.tasks.forEach((task)=>{\n                \n                let inputArray = [task.title,task.description,task.dueDate,task.priority];\n                projectObject.addTask(inputArray);\n\n                let taskElement = document.createElement('div');\n                \n                let done = document.createElement('input');\n                done.type = 'checkbox';\n                \n                let expandButton = document.createElement('button');\n                expandButton.innerHTML= '>>>';\n                expandButton.setAttribute('class','expand');\n\n                let editButton = document.createElement('button');\n                editButton.setAttribute('class','edit');\n                editButton.innerHTML= 'EDIT';\n                editButton.addEventListener('click',handleEdit);\n\n                let delButton = document.createElement('button');\n                delButton.setAttribute('class','delete');\n                delButton.innerHTML = 'DELETE';\n                delButton.addEventListener('click',handleDelete);\n\n                done.addEventListener('change',(e) => {\n                    if(e.target.checked) {\n                        task.setCheckBox(true);\n                    }\n                    else {\n                        task.setCheckBox(false);\n                    }\n                });\n                \n                taskElement.setAttribute('class','task');\n                setColor(taskElement,task.priority);\n                taskElement.innerHTML = ` <h2>${task.title}</h2> <br> ${task.dueDate}`;\n                \n                taskElement.appendChild(expandButton);\n                taskElement.appendChild(editButton);\n                taskElement.appendChild(delButton);\n                taskElement.appendChild(done);\n\n                expandButton.addEventListener('click',() => {\n            \n                    let expandByID = document.getElementById('expand');\n                    \n                    if(taskElement.contains(expandByID)){\n                        taskElement.removeChild(expandByID);\n                    }\n\n                    else{\n                        let expand = document.createElement('div');\n                        expand.id = 'expand';\n                        expand.innerHTML = `<br>Description : ${task.description}<br>Priority: ${task.priority}<br>Notes: ${task.notes}<br>Did u finish the task?: ${task.checkBox}`;\n                        taskElement.appendChild(expand);\n                    }\n                });\n\n                projectElement.appendChild(taskElement);\n                \n            })\n        })\n    } \n\n\n//Two functions for Dom Manipulation to create Project and add tasks to it\n    const addProject = function (e) {\n        \n        e.preventDefault();\n        \n        \n        _app__WEBPACK_IMPORTED_MODULE_0__.blackBoard.addProject(setInput());\n    \n        let form = document.querySelector('form');\n        board.removeChild(form);\n        \n        let taskButton = document.createElement('button');\n        taskButton.setAttribute('class','taskButton');\n        taskButton.innerHTML = '+';\n        taskButton.addEventListener('click',userInput);\n        let project = document.createElement('div');\n        board.appendChild(project);\n\n        let deleteProject = document.createElement('button');\n        deleteProject.id = 'del-project';\n        deleteProject.innerHTML = 'X';\n        deleteProject.addEventListener('click',handleDelete);\n        \n        let listItem = document.createElement('li');\n        let projectObject = _app__WEBPACK_IMPORTED_MODULE_0__.blackBoard.projects[_app__WEBPACK_IMPORTED_MODULE_0__.blackBoard.projects.length-1];\n        let id = projectObject.uuid;\n        \n        project.setAttribute('class','project');\n        project.innerHTML = `${projectObject.title}`;\n        project.id = id;\n        project.appendChild(taskButton);\n        project.appendChild(deleteProject);\n        \n\n        listItem.innerHTML = `<h2>${projectObject.title}</h2>`;\n        projectList.appendChild(listItem);\n\n        \n    } \n\n    const addTask = function (e) {\n        \n        e.preventDefault();\n\n        let projectElement = (e.target.parentElement).parentElement;\n        let projectID = projectElement.id;\n        console.log(_app__WEBPACK_IMPORTED_MODULE_0__.blackBoard.projects[0]);\n        let project = _app__WEBPACK_IMPORTED_MODULE_0__.blackBoard.projects.find((project)=> project.uuid == projectID);\n\n        project.addTask(setInput());\n\n        let form = document.querySelector('form');\n        projectElement.removeChild(form);\n\n        let task = document.createElement('div');\n        let id = (project.tasks[project.tasks.length-1]).uuid;\n        task.id = id;\n\n        let done = document.createElement('input');\n        done.type = 'checkbox';\n        \n        let expandButton = document.createElement('button');\n        expandButton.innerHTML= '>>>';\n        expandButton.setAttribute('class','expand');\n\n        let editButton = document.createElement('button');\n        editButton.setAttribute('class','edit');\n        editButton.innerHTML= 'EDIT';\n        editButton.addEventListener('click',handleEdit);\n\n        let delButton = document.createElement('button');\n        delButton.setAttribute('class','delete');\n        delButton.innerHTML = 'DELETE';\n        delButton.addEventListener('click',handleDelete);\n        \n        let taskObject = project.tasks[project.tasks.length-1];\n        \n        done.addEventListener('change',(e) => {\n            if(e.target.checked) {\n                taskObject.setCheckBox(true);\n            }\n            else {\n                taskObject.setCheckBox(false);\n            }\n        });\n        \n        task.setAttribute('class','task');\n        setColor(task,taskObject.priority);\n        task.innerHTML = ` <h2>${taskObject.title}</h2> <br> ${taskObject.dueDate}`;\n        \n        task.appendChild(expandButton);\n        task.appendChild(editButton);\n        task.appendChild(delButton);\n        task.appendChild(done);\n        \n        expandButton.addEventListener('click',() => {\n            \n            let expandByID = document.getElementById('expand');\n            \n            if(task.contains(expandByID)){\n                task.removeChild(expandByID);\n            }\n\n            else{\n                let expand = document.createElement('div');\n                expand.id = 'expand';\n                expand.innerHTML = `<br>Description : ${taskObject.description}<br>Priority: ${taskObject.priority}<br>Notes: ${taskObject.notes}<br>Did u finish the task?: ${taskObject.checkBox}`;\n                task.appendChild(expand);\n            }\n        });\n\n        projectElement.appendChild(task);\n\n        \n\n    }\n\n// Two functions take Input from the User as a 'form' Element and set it to the Objects\n    const userInput = function (e) {\n        \n        let form = document.createElement('form');\n        let currDate = new Date();\n        let priorityList = document.createElement('select');\n        let submit = document.createElement('button');\n\n        submit.innerHTML='ADD';\n\n        if(e.target.id == 'add-project'){\n            submit.addEventListener('click',addProject);\n\n            form.innerHTML = `Title:<input id=\"title\" type=\"text\"> <br> Description:<input id=\"desc\" type=\"text\"> <br> dueDate:<input id=\"date\" min=\"${currDate}\" type=\"date\"><input type=\"hidden\" id=\"priority\">`; \n            \n            form.style.color = 'white';\n            form.appendChild(submit);\n            board.appendChild(form);\n        \n        }\n        else {\n\n            submit.addEventListener('click',addTask);\n            form.innerHTML = `Title:<input id=\"title\" type=\"text\"> <br> Description:<input id=\"desc\" type=\"text\"> <br> dueDate:<input id=\"date\" min=\"${currDate}\" type=\"date\">`;\n\n            priorityList.id = 'priority';\n            priorityList.innerHTML = '<option value=\"very high\">VERY HIGH</option><option value=\"high\">HIGH</option><option value=\"medium\">MEDIUM</option><option value=\"low\">LOW</option>';\n\n            form.appendChild(priorityList);\n            form.appendChild(submit);\n\n            e.target.parentElement.appendChild(form);\n\n        }\n    \n        \n\n    }\n\n\n    function setInput () {\n        let title = document.querySelector('#title').value;\n        let desc = document.querySelector('#desc').value;\n        let date = document.querySelector('#date').value;\n        let priority = document.querySelector('#priority').value;\n        \n        let inputArray = [title,desc,date,priority];\n        return inputArray;\n    }\n\n    function setColor (task,priority) {\n\n        switch(priority) {\n\n            case \"very high\" : task.style.backgroundColor = 'red';\n                            break;\n            case \"high\" : task.style.backgroundColor = 'orange';\n                            break;\n            case \"medium\" : task.style.backgroundColor = 'yellow';\n                            break;\n            case \"low\" : task.style.backgroundColor = 'green';\n                            break;\n        }\n    }\n\n//Button handlers for task Object\n    function handleEdit(e) {\n        \n        if(e.target.parentElement.contains(document.getElementById('notes'))){\n            return null;\n        }\n\n        else{\n\n        \n            //getting project and taske element and object\n            let taskElement = e.target.parentElement;\n            let projectElement = taskElement.parentElement;\n            let projectObject = _app__WEBPACK_IMPORTED_MODULE_0__.blackBoard.projects.find((project)=> project.uuid == projectElement.id);\n            let taskObject = projectObject.tasks.find((task) => task.uuid == taskElement.id);\n            \n            let notes = document.createElement('textarea');\n            notes.id = 'notes';\n            notes.style.backgroundColor = 'white';\n            let endButton = document.createElement('button');\n            endButton.innerHTML = 'END';\n            endButton.addEventListener('click', (e)=>{\n                taskObject.setNotes(notes.value);\n                e.target.parentElement.removeChild(notes);\n                e.target.parentElement.removeChild(endButton);\n            })\n            taskElement.appendChild(notes);\n            taskElement.appendChild(endButton);\n        }\n        \n    }\n\n    function handleDelete(e) {\n\n        if(e.target.id == 'del-project'){\n            let projectElement = e.target.parentElement;\n            let projectObject = _app__WEBPACK_IMPORTED_MODULE_0__.blackBoard.projects.find((project)=> project.uuid == projectElement.id);\n            \n\n            _app__WEBPACK_IMPORTED_MODULE_0__.blackBoard.deleteProject(projectObject);\n            board.removeChild(projectElement);\n            \n        }\n        else{\n            //getting project and task element and object\n            let taskElement = e.target.parentElement;\n            let projectElement = taskElement.parentElement;\n            let projectObject = _app__WEBPACK_IMPORTED_MODULE_0__.blackBoard.projects.find((project)=> project.uuid == projectElement.id);\n            let taskObject = projectObject.tasks.find((task) => task.uuid == taskElement.id);\n\n            projectObject.deleteTask(taskObject);\n            projectElement.removeChild(taskElement); \n\n        }\n    }\n\n    return {addProject,addTask,userInput,domInit};\n}();\n\nprojectButton.addEventListener('click', domMaker.userInput);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domMaker);\n\n//# sourceURL=webpack://restaurant-page/./src/dom.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n\nif(_app__WEBPACK_IMPORTED_MODULE_1__.blackBoard.projects) {\n    _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].domInit();\n}\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?\n}");

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
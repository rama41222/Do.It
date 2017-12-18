/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var devConfig = {
    MONGO_URL: 'mongodb://localhost/doit-dev'
};

var prodConfig = {
    MONGO_URL: 'mongodb://localhost/doit-prod'
};

var testConfig = {
    MONGO_URL: 'mongodb://localhost/doit-test'
};

var defaultConfig = {
    PORT: process.env.PORT || 8080
};

function getConfig(env) {
    switch (env) {
        case 'development':
            return devConfig;
        case 'test':
            return testConfig;
        default:
            return prodConfig;
    }
}

exports.default = _extends({}, defaultConfig, getConfig(process.env.NODE_ENV));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(4);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _middleware = __webpack_require__(5);

var _middleware2 = _interopRequireDefault(_middleware);

var _index = __webpack_require__(9);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(13);

var _constants = __webpack_require__(1);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
(0, _middleware2.default)(app);
(0, _index2.default)(app);

app.listen(_constants2.default.PORT, function (e) {
    if (e) {
        console.log(e.message);
    }
    console.log('\n                Server running on port ' + _constants2.default.PORT + '\n                Environment: ' + process.env.NODE_ENV + '\n    ');
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cors = __webpack_require__(6);

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = __webpack_require__(7);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = __webpack_require__(8);

var _morgan2 = _interopRequireDefault(_morgan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isProd = process.env.NODE_ENV === 'production';
var isDev = process.env.NODE_ENV === 'development';

exports.default = function (app) {

    app.use((0, _cors2.default)());
    app.use(_bodyParser2.default.json());
    app.use(_bodyParser2.default.urlencoded({ extended: true }));

    if (isDev) {
        app.use((0, _morgan2.default)('dev'));
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _todo = __webpack_require__(10);

var _todo2 = _interopRequireDefault(_todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
  app.use('/api/v1/todo', _todo2.default);
}; /*
    * Created by rama41222 on 12/15/17 11:08 PM
    * Copyright(c) 2017. All rights reserved
    *
    * Last Modified: 12/15/17 11:00 PM by Rama41222
    */

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _todo = __webpack_require__(11);

var TodoController = _interopRequireWildcard(_todo);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
 * Created by rama41222 on 12/16/17 9:35 AM
 * Copyright(c) 2017. All rights reserved
 *
 * Last Modified: 12/16/17 9:35 AM by Rama41222
 */

var routes = new _express.Router();

routes.post('/', TodoController.create);
routes.get('/', TodoController.list);
routes.get('/:id', TodoController.get);

exports.default = routes;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.get = exports.list = exports.create = undefined;

var create = exports.create = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        console.log(req.body);
                        res.status(_httpStatus2.default.OK).json({ sum: 0 });

                    case 2:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function create(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var list = exports.list = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var todos;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return _todo2.default.list();

                    case 2:
                        todos = _context2.sent;

                        res.status(_httpStatus2.default.OK).send(todos);

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function list(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var get = exports.get = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        res.status(_httpStatus2.default.OK).json({});

                    case 1:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function get(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

var _httpStatus = __webpack_require__(12);

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _todo = __webpack_require__(15);

var _todo2 = _interopRequireDefault(_todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by rama41222 on 12/16/17 9:28 AM
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Copyright(c) 2017. All rights reserved
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Last Modified: 12/16/17 9:28 AM by Rama41222
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("http-status");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mongoose = __webpack_require__(14);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _constants = __webpack_require__(1);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect(_constants2.default.MONGO_URL, { useMongoClient: true }).then(function () {
    console.log('\n                Connected to the DB @ : ' + _constants2.default.MONGO_URL + '\n    ');
}).catch(function (e) {
    console.log('\n                Error Connecting to DB: ' + e.message + '            \n    ');
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(14);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _constants = __webpack_require__(1);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodoSchema = new _mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    todo: {
        type: String,
        default: ''
    }
});

TodoSchema.statics = {
    list: function list() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$skip = _ref.skip,
            skip = _ref$skip === undefined ? 0 : _ref$skip,
            _ref$limit = _ref.limit,
            limit = _ref$limit === undefined ? 50 : _ref$limit;

        return this.find().sort({ createdAt: -1 }).skip(+skip).limit(+limit).exec();
    }
};

exports.default = _mongoose2.default.model('Todo', TodoSchema);

/***/ })
/******/ ]);
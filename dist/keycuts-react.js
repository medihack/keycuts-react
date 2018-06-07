(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["keycuts-react"] = factory();
	else
		root["keycutsReact"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../keycuts/dist/keycuts.js":
/*!**********************************!*\
  !*** ../keycuts/dist/keycuts.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Keys.js":
/*!*********************!*\
  !*** ./src/Keys.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generateId = __webpack_require__(/*! ./generateId */ "./src/generateId.js");

var _generateId2 = _interopRequireDefault(_generateId);

var _cleanShortcut = __webpack_require__(/*! ./cleanShortcut */ "./src/cleanShortcut.js");

var _cleanShortcut2 = _interopRequireDefault(_cleanShortcut);

var _parseShortcut = __webpack_require__(/*! ./parseShortcut */ "./src/parseShortcut.js");

var _parseShortcut2 = _interopRequireDefault(_parseShortcut);

var _stringifyShortcut = __webpack_require__(/*! ./stringifyShortcut */ "./src/stringifyShortcut.js");

var _stringifyShortcut2 = _interopRequireDefault(_stringifyShortcut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The main class to access the features of the KeyCuts library.
 * @param {HTMLElement} element The HTML element that should listen to
 *   keyboard shortcuts (if not provided then Window object is used).
 * @param {Object} options - Additional options (optional).
 * @param {boolean} options.triggerOncePerKey - If a key is kept down then
 *   the shortcut will be triggered multiple times when set to false and
 *   only once when set to true (default: false)
 * @param {boolean} options.useCodeInsteadKey - If set to false then
 *   KeyboardEvent.key is evaluated for triggering shortcuts, otherwise
 *   KeyboardEvent.code (default: false)
 * @param {number} options.maxSequenceLength - The maximum sequence of
 *   key or combos that should be tracked (default: 3)
 * @param {Function} options.filter - A filter function. If the filter
 *   returns false the event will be filtered out and no bound handler
 *   or watcher will be triggered. The filter function will be called
 *   with the key event. The default filter will always return true.
 */
var Keys =
/** The name of the default scope. */
function Keys(element, options) {
  var _this = this;

  _classCallCheck(this, Keys);

  this._stopped = true;
  this._currentScope = Keys.DEFAULT_SCOPE;
  this._currentCombo = [];
  this._sequence = [];
  this._handlers = [];
  this._watchers = [];
  this.options = {
    triggerOncePerKey: false,
    useCodeInsteadKey: false,
    maxSequenceLength: 3,
    filter: function filter() {
      return true;
    }
  };

  this._onKeyDown = function (event) {
    if (!_this.options.filter.call(_this, event)) return;

    var key = _this.options.useCodeInsteadKey ? event.code : event.key;

    if (key.length === 1) {
      key = key.toLowerCase();
      if (key === ' ') key = 'Space';
    }

    var alreadyTriggered = _this._currentCombo.includes(key);

    if (!alreadyTriggered) {
      _this._currentCombo.push(key);
      _this._currentCombo.sort();

      if (_this._sequence.length === 0 || _this._sequence[_this._sequence.length - 1] !== _this._currentCombo) {
        if (_this._sequence.length === _this.options.maxSequenceLength) _this._sequence.shift();

        _this._sequence.push(_this._currentCombo);
      }
    }

    if (!alreadyTriggered || !_this.options.triggerOncePerKey) {
      _this._notifyWatchers(event);
      _this._dispatchHandlers(event);
    }
  };

  this._onKeyUp = function (event) {
    if (!_this.options.filter.call(_this, event)) return;

    var key = _this.options.useCodeInsteadKey ? event.code : event.key;

    if (key.length === 1) {
      key = key.toLowerCase();
      if (key === ' ') key = 'Space';
    }

    _this._currentCombo = [].concat(_toConsumableArray(_this._currentCombo));

    var index = _this._currentCombo.indexOf(key);
    if (index !== -1) {
      _this._currentCombo.splice(index, 1);
      _this._currentCombo.sort();
    }

    _this._notifyWatchers(event);
  };

  this._resetKeys = function () {
    _this._currentCombo = [];
    _this._sequence = [];
  };

  this._notifyWatchers = function (event) {
    var sequence = JSON.parse(JSON.stringify(_this._sequence));

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _this._watchers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var watcher = _step.value;

        watcher.callback(sequence, event);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };

  this._dispatchHandlers = function (event) {
    var sequence = JSON.parse(JSON.stringify(_this._sequence));

    var signatures = [];

    var signatureSequence = [];
    for (var i = _this._sequence.length - 1; i >= 0; i--) {
      signatureSequence = [_this._sequence[i]].concat(_toConsumableArray(signatureSequence));
      signatures.push((0, _stringifyShortcut2.default)(signatureSequence));
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = _this._handlers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var handler = _step2.value;

        if (_this._currentScope === handler.scope && signatures.includes(handler.signature)) {
          handler.callback(sequence, event);
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  };

  this.bind = function (shortcut, scope, callback) {
    if (callback === undefined) {
      callback = scope;
      scope = Keys.DEFAULT_SCOPE;
    }

    if (typeof shortcut === 'string') shortcut = (0, _parseShortcut2.default)(shortcut);

    shortcut = (0, _cleanShortcut2.default)(shortcut);

    var handlerId = (0, _generateId2.default)();
    _this._handlers.push({
      id: handlerId,
      signature: (0, _stringifyShortcut2.default)(shortcut),
      shortcut: shortcut,
      scope: scope,
      callback: callback
    });

    return handlerId;
  };

  this.unbind = function (handlerId) {
    var index = _this._handlers.findIndex(function (handler) {
      return handler.id === handlerId;
    });

    if (index === -1) throw new Error('Invalid handler ID: ' + handlerId);

    _this._handlers.splice(index, 1);
  };

  this.unbindScope = function (scope) {
    var indices = [];
    _this._handlers.forEach(function (handler, index) {
      if (handler.scope === scope) indices.push(index);
    });

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = indices[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var index = _step3.value;

        _this._handlers.splice(index, 1);
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  };

  this.unbindAll = function () {
    _this._handlers = [];
  };

  this.watch = function (callback) {
    var watcherId = (0, _generateId2.default)();
    _this._watchers.push({
      id: watcherId,
      callback: callback
    });

    return watcherId;
  };

  this.unwatch = function (watcherId) {
    var index = _this._watchers.findIndex(function (watcher) {
      return watcher.id === watcherId;
    });

    if (index === -1) throw new Error('Invalid watcher ID: ' + watcherId);

    _this._watchers.splice(index, 1);
  };

  this.unwatchAll = function () {
    _this._watchers = [];
  };

  this.switchScope = function (scope) {
    _this._currentScope = scope;
  };

  this.stop = function () {
    if (!_this._stopped) {
      _this._element.removeEventListener('keydown', _this._onKeyDown);
      _this._element.removeEventListener('keyup', _this._onKeyUp);
      _this._element.removeEventListener('focus', _this._resetKeys);
      _this._element.removeEventListener('blur', _this._resetKeys);

      _this._resetKeys();

      _this._stopped = true;
    }
  };

  this.resume = function () {
    if (_this._stopped) {
      _this._element.addEventListener('keydown', _this._onKeyDown);
      _this._element.addEventListener('keyup', _this._onKeyUp);
      _this._element.addEventListener('focus', _this._resetKeys);
      _this._element.addEventListener('blur', _this._resetKeys);

      _this._stopped = false;
    }
  };

  this.reset = function () {
    _this._resetKeys();
    _this.unbindAll();
    _this.unwatchAll();
  };

  if (!element) element = window;
  this._element = element;

  Object.assign(this.options, options);

  this.resume();
}

/**
 * Bind a keyboard shortcut. A shortcut can be in string or array format.
 * @param {string|string[]|Array.<string[]>} shortcut - The shortcut to bind.
 * @param {string} scope - An optional scope.
 * @param {Function} callback - The callback that should be triggered.
 *   The callback gets called with the current key or combo sequence
 *   and the key event.
 * @return {number} The unique ID of the bound handler.
 */


/**
 * Unbind a specific keyboard shortcut handler using its ID.
 * @param {number} handlerId - The ID returned by the {@link bind} method.
 * @throws Throws an error when the ID is invalid.
 */


/**
 * Unbind keyboard shortcut handlers having the specified scope.
 * @param {String} scope - The scope.
 */


/**
 * Unbind all keyboard shortcut handlers.
 */


/**
 * Watch keyboard events (keydown and keyup).
 * @param {Function} callback - The callback that should be triggered.
 *   when a keydown or keyup event occurs. The callback gets called with
 *   the current key or combo sequence and the key event.
 * @return {number} The unique ID of the added watcher.
 */


/**
 * Unbind a specific watcher using its ID.
 * @param {number} watcherId - The ID returned by the {@link watch} method.
 * @throws Throws an error when the ID is invalid.
 */


/**
 * Unbind all watchers.
 */


/**
 * Switch the scope. Only bound handlers get triggered that have the new
 * scope. The default scope can be accessed by {@link Keys.DEFAULT_SCOPE}.
 * @param {number} scope - The scope.
 */


/**
 * Stop listening to key events and reset the key sequence.
 */


/**
 * Resume listening to key events.
 */


/* Reset this instance by unbinding all handlers, removing all watchers
 * and resetting the key sequence.
 */
;

Keys.DEFAULT_SCOPE = 'DEFAULT_SCOPE';
exports.default = Keys;

/***/ }),

/***/ "./src/cleanShortcut.js":
/*!******************************!*\
  !*** ./src/cleanShortcut.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (shortcut) {
  if (!Array.isArray(shortcut) || shortcut.length === 0) throw new Error('Invalid array shortcut to clean: ' + shortcut);

  var isSequence = typeof shortcut[0] !== 'string';

  if (isSequence && shortcut.length === 1) {
    shortcut = shortcut[0];
    isSequence = false;
  }

  if (isSequence) cleanSequence(shortcut);else cleanCombo(shortcut);

  return shortcut;
};

function cleanSequence(sequence) {
  for (var i = 0; i < sequence.length; i++) {
    if (!Array.isArray(sequence[i])) throw new Error('Invalid shortcut sequence ' + sequence + '.');

    cleanCombo(sequence[i]);
  }
}

function cleanCombo(combo) {
  for (var i = 0; i < combo.length; i++) {
    if (typeof combo[i] !== 'string') throw new Error('Invalid shortcut combo ' + combo + '.');

    var cleanedKey = cleanKey(combo[i]);
    if (!cleanedKey) throw new Error('Invalid key ' + cleanedKey + ' in shortcut combo ' + combo + '.');

    combo[i] = cleanedKey;
  }
  combo.sort();
}

function cleanKey(key) {
  key = key.replace(/\s+/g, ' ');
  if (key === ' ') key = 'Space';
  key = key.trim();
  if (key.length === 1) key = key.toLowerCase();
  return key;
}

/**
 * Clean an array shortcut. The array is cleaned in-place and also returned.
 * Unnecessary white space is removed, key combinations are sorted and
 * single chars converted to lower case.
 * @param {string[]|Array.<string[]>} shortcut - The array shortcut to clean.
 * @return {string[]|Array.<string[]>} The cleaned array shortcut.
 */

/***/ }),

/***/ "./src/generateId.js":
/*!***************************!*\
  !*** ./src/generateId.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return nextId++;
};

var nextId = 1;

/**
 * Create a unique ID every time it is called.
 * @return {number} A unique ID.
 */

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Keys = __webpack_require__(/*! ./Keys */ "./src/Keys.js");

Object.defineProperty(exports, 'Keys', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Keys).default;
  }
});

var _cleanShortcut = __webpack_require__(/*! ./cleanShortcut */ "./src/cleanShortcut.js");

Object.defineProperty(exports, 'cleanShortcut', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cleanShortcut).default;
  }
});

var _generateId = __webpack_require__(/*! ./generateId */ "./src/generateId.js");

Object.defineProperty(exports, 'generateId', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_generateId).default;
  }
});

var _parseShortcut = __webpack_require__(/*! ./parseShortcut */ "./src/parseShortcut.js");

Object.defineProperty(exports, 'parseShortcut', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_parseShortcut).default;
  }
});

var _stringifyShortcut = __webpack_require__(/*! ./stringifyShortcut */ "./src/stringifyShortcut.js");

Object.defineProperty(exports, 'stringifyShortcut', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_stringifyShortcut).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/parseShortcut.js":
/*!******************************!*\
  !*** ./src/parseShortcut.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (shortcut) {
  if (typeof shortcut !== 'string') throw new Error('Invalid string shortcut to parse: ' + shortcut);

  shortcut = shortcut.replace(/\s+/g, '');

  if (typeof shortcut !== 'string' || shortcut.length === 0) throw new Error('Invalid shortcut (must be non empty string): ' + shortcut);

  var key = [];
  var combo = [];
  var sequence = [];

  for (var i = 0; i < shortcut.length; i++) {
    var c = shortcut.charAt(i);
    if (!key.length) {
      key.push(c);
    } else {
      if (c === COMBINE_WITH) {
        combo.push(convertKey(key));
        key = [];
      } else if (c === FOLLOWED_BY) {
        combo.push(convertKey(key));
        key = [];
        combo.sort();
        sequence.push(combo);
        combo = [];
      } else {
        key.push(c);
      }
    }
  }

  if (key.length) {
    combo.push(convertKey(key));
    combo.sort();
    sequence.push(combo);
  } else {
    throw new Error('Invalid shortcut (must end with key): ' + shortcut);
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = sequence[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _combo = _step.value;

      var duplicates = getDuplicates(_combo);
      if (duplicates.length > 0) throw new Error('Invalid shortcut (duplicate keys):' + shortcut);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (sequence.length === 1) return sequence[0];else return sequence;
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var COMBINE_WITH = '+';
var FOLLOWED_BY = '>';

function getDuplicates(combo) {
  var count = function count(combo) {
    return combo.reduce(function (k1, k2) {
      return Object.assign(k1, _defineProperty({}, k2, (k1[k2] || 0) + 1));
    }, {});
  };
  var duplicates = function duplicates(dict) {
    return Object.keys(dict).filter(function (k) {
      return dict[k] > 1;
    });
  };
  return duplicates(count(combo));
}

function convertKey(key) {
  key = key.join('');
  if (key.length === 1) key = key.toLowerCase();
  return key;
}

/**
 * Parse a string shortcut and return the equivalent array shortcut.
 * @param {string} shortcut - The string shortcut to convert.
 * @return {string[]|Array.<string[]>} The converted array shortcut.
 */

/***/ }),

/***/ "./src/stringifyShortcut.js":
/*!**********************************!*\
  !*** ./src/stringifyShortcut.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (shortcut) {
  if (!Array.isArray(shortcut)) throw new Error('Invalid array shortcut to stringify: ' + shortcut);

  var isSequence = typeof shortcut[0] !== 'string';

  if (!isSequence) {
    return shortcut.join(COMBINE_WITH);
  } else {
    return shortcut.map(function (part) {
      return part.join(COMBINE_WITH);
    }).join(FOLLOWED_BY);
  }
};

var COMBINE_WITH = ' + ';
var FOLLOWED_BY = ' > ';

/**
 * Create equivalent string shortcut of an array shortcut.
 * @param {string[]|Array.<string[]>} shortcut - The array shortcut to convert.
 * @return {string} The converted string shortcurt.
 */

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvS2V5cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY2xlYW5TaG9ydGN1dC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZ2VuZXJhdGVJZC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3BhcnNlU2hvcnRjdXQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3N0cmluZ2lmeVNob3J0Y3V0LmpzIl0sIm5hbWVzIjpbIktleXMiLCJlbGVtZW50Iiwib3B0aW9ucyIsIl9zdG9wcGVkIiwiX2N1cnJlbnRTY29wZSIsIkRFRkFVTFRfU0NPUEUiLCJfY3VycmVudENvbWJvIiwiX3NlcXVlbmNlIiwiX2hhbmRsZXJzIiwiX3dhdGNoZXJzIiwidHJpZ2dlck9uY2VQZXJLZXkiLCJ1c2VDb2RlSW5zdGVhZEtleSIsIm1heFNlcXVlbmNlTGVuZ3RoIiwiZmlsdGVyIiwiX29uS2V5RG93biIsImNhbGwiLCJldmVudCIsImtleSIsImNvZGUiLCJsZW5ndGgiLCJ0b0xvd2VyQ2FzZSIsImFscmVhZHlUcmlnZ2VyZWQiLCJpbmNsdWRlcyIsInB1c2giLCJzb3J0Iiwic2hpZnQiLCJfbm90aWZ5V2F0Y2hlcnMiLCJfZGlzcGF0Y2hIYW5kbGVycyIsIl9vbktleVVwIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiX3Jlc2V0S2V5cyIsInNlcXVlbmNlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwid2F0Y2hlciIsImNhbGxiYWNrIiwic2lnbmF0dXJlcyIsInNpZ25hdHVyZVNlcXVlbmNlIiwiaSIsImhhbmRsZXIiLCJzY29wZSIsInNpZ25hdHVyZSIsImJpbmQiLCJzaG9ydGN1dCIsInVuZGVmaW5lZCIsImhhbmRsZXJJZCIsImlkIiwidW5iaW5kIiwiZmluZEluZGV4IiwiRXJyb3IiLCJ1bmJpbmRTY29wZSIsImluZGljZXMiLCJmb3JFYWNoIiwidW5iaW5kQWxsIiwid2F0Y2giLCJ3YXRjaGVySWQiLCJ1bndhdGNoIiwidW53YXRjaEFsbCIsInN3aXRjaFNjb3BlIiwic3RvcCIsIl9lbGVtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlc3VtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNldCIsIndpbmRvdyIsIk9iamVjdCIsImFzc2lnbiIsIkFycmF5IiwiaXNBcnJheSIsImlzU2VxdWVuY2UiLCJjbGVhblNlcXVlbmNlIiwiY2xlYW5Db21ibyIsImNvbWJvIiwiY2xlYW5lZEtleSIsImNsZWFuS2V5IiwicmVwbGFjZSIsInRyaW0iLCJuZXh0SWQiLCJkZWZhdWx0IiwiYyIsImNoYXJBdCIsIkNPTUJJTkVfV0lUSCIsImNvbnZlcnRLZXkiLCJGT0xMT1dFRF9CWSIsImR1cGxpY2F0ZXMiLCJnZXREdXBsaWNhdGVzIiwiY291bnQiLCJyZWR1Y2UiLCJrMSIsImsyIiwia2V5cyIsImRpY3QiLCJrIiwiam9pbiIsIm1hcCIsInBhcnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFkLENBQVA7QUFDRCxHQUZELE1BRU87QUFDTCxXQUFPdkMsU0FBU29ELEdBQVQsQ0FBYTtBQUFBLGFBQVFDLEtBQUtGLElBQUwsQ0FBVVosWUFBVixDQUFSO0FBQUEsS0FBYixFQUE4Q1ksSUFBOUMsQ0FBbURWLFdBQW5ELENBQVA7QUFDRDtBQUNGLEM7O0FBbkJELElBQU1GLGVBQWUsS0FBckI7QUFDQSxJQUFNRSxjQUFjLEtBQXBCOztBQUVBIiwiZmlsZSI6ImtleWN1dHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJrZXljdXRzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImtleWN1dHNcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGdlbmVyYXRlSWQgZnJvbSAnLi9nZW5lcmF0ZUlkJ1xuaW1wb3J0IGNsZWFuU2hvcnRjdXQgZnJvbSAnLi9jbGVhblNob3J0Y3V0J1xuaW1wb3J0IHBhcnNlU2hvcnRjdXQgZnJvbSAnLi9wYXJzZVNob3J0Y3V0J1xuaW1wb3J0IHN0cmluZ2lmeVNob3J0Y3V0IGZyb20gJy4vc3RyaW5naWZ5U2hvcnRjdXQnXG5cbi8qKlxuICogVGhlIG1haW4gY2xhc3MgdG8gYWNjZXNzIHRoZSBmZWF0dXJlcyBvZiB0aGUgS2V5Q3V0cyBsaWJyYXJ5LlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgSFRNTCBlbGVtZW50IHRoYXQgc2hvdWxkIGxpc3RlbiB0b1xuICogICBrZXlib2FyZCBzaG9ydGN1dHMgKGlmIG5vdCBwcm92aWRlZCB0aGVuIFdpbmRvdyBvYmplY3QgaXMgdXNlZCkuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIEFkZGl0aW9uYWwgb3B0aW9ucyAob3B0aW9uYWwpLlxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLnRyaWdnZXJPbmNlUGVyS2V5IC0gSWYgYSBrZXkgaXMga2VwdCBkb3duIHRoZW5cbiAqICAgdGhlIHNob3J0Y3V0IHdpbGwgYmUgdHJpZ2dlcmVkIG11bHRpcGxlIHRpbWVzIHdoZW4gc2V0IHRvIGZhbHNlIGFuZFxuICogICBvbmx5IG9uY2Ugd2hlbiBzZXQgdG8gdHJ1ZSAoZGVmYXVsdDogZmFsc2UpXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMudXNlQ29kZUluc3RlYWRLZXkgLSBJZiBzZXQgdG8gZmFsc2UgdGhlblxuICogICBLZXlib2FyZEV2ZW50LmtleSBpcyBldmFsdWF0ZWQgZm9yIHRyaWdnZXJpbmcgc2hvcnRjdXRzLCBvdGhlcndpc2VcbiAqICAgS2V5Ym9hcmRFdmVudC5jb2RlIChkZWZhdWx0OiBmYWxzZSlcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLm1heFNlcXVlbmNlTGVuZ3RoIC0gVGhlIG1heGltdW0gc2VxdWVuY2Ugb2ZcbiAqICAga2V5IG9yIGNvbWJvcyB0aGF0IHNob3VsZCBiZSB0cmFja2VkIChkZWZhdWx0OiAzKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gb3B0aW9ucy5maWx0ZXIgLSBBIGZpbHRlciBmdW5jdGlvbi4gSWYgdGhlIGZpbHRlclxuICogICByZXR1cm5zIGZhbHNlIHRoZSBldmVudCB3aWxsIGJlIGZpbHRlcmVkIG91dCBhbmQgbm8gYm91bmQgaGFuZGxlclxuICogICBvciB3YXRjaGVyIHdpbGwgYmUgdHJpZ2dlcmVkLiBUaGUgZmlsdGVyIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkXG4gKiAgIHdpdGggdGhlIGtleSBldmVudC4gVGhlIGRlZmF1bHQgZmlsdGVyIHdpbGwgYWx3YXlzIHJldHVybiB0cnVlLlxuICovXG5jbGFzcyBLZXlzIHtcbiAgLyoqIFRoZSBuYW1lIG9mIHRoZSBkZWZhdWx0IHNjb3BlLiAqL1xuICBzdGF0aWMgREVGQVVMVF9TQ09QRSA9ICdERUZBVUxUX1NDT1BFJ1xuXG4gIF9zdG9wcGVkID0gdHJ1ZVxuICBfY3VycmVudFNjb3BlID0gS2V5cy5ERUZBVUxUX1NDT1BFXG4gIF9jdXJyZW50Q29tYm8gPSBbXVxuICBfc2VxdWVuY2UgPSBbXVxuICBfaGFuZGxlcnMgPSBbXVxuICBfd2F0Y2hlcnMgPSBbXVxuXG4gIG9wdGlvbnMgPSB7XG4gICAgdHJpZ2dlck9uY2VQZXJLZXk6IGZhbHNlLFxuICAgIHVzZUNvZGVJbnN0ZWFkS2V5OiBmYWxzZSxcbiAgICBtYXhTZXF1ZW5jZUxlbmd0aDogMyxcbiAgICBmaWx0ZXI6ICgpID0+IHRydWVcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIWVsZW1lbnQpIGVsZW1lbnQgPSB3aW5kb3dcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpXG5cbiAgICB0aGlzLnJlc3VtZSgpXG4gIH1cblxuICBfb25LZXlEb3duID0gZXZlbnQgPT4ge1xuICAgIGlmICghdGhpcy5vcHRpb25zLmZpbHRlci5jYWxsKHRoaXMsIGV2ZW50KSkgcmV0dXJuXG5cbiAgICBsZXQga2V5ID0gdGhpcy5vcHRpb25zLnVzZUNvZGVJbnN0ZWFkS2V5ID8gZXZlbnQuY29kZSA6IGV2ZW50LmtleVxuXG4gICAgaWYgKGtleS5sZW5ndGggPT09IDEpIHtcbiAgICAgIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpXG4gICAgICBpZiAoa2V5ID09PSAnICcpIGtleSA9ICdTcGFjZSdcbiAgICB9XG5cbiAgICBjb25zdCBhbHJlYWR5VHJpZ2dlcmVkID0gdGhpcy5fY3VycmVudENvbWJvLmluY2x1ZGVzKGtleSlcblxuICAgIGlmICghYWxyZWFkeVRyaWdnZXJlZCkge1xuICAgICAgdGhpcy5fY3VycmVudENvbWJvLnB1c2goa2V5KVxuICAgICAgdGhpcy5fY3VycmVudENvbWJvLnNvcnQoKVxuXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX3NlcXVlbmNlLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgICB0aGlzLl9zZXF1ZW5jZVt0aGlzLl9zZXF1ZW5jZS5sZW5ndGggLSAxXSAhPT0gdGhpcy5fY3VycmVudENvbWJvXG4gICAgICApIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlcXVlbmNlLmxlbmd0aCA9PT0gdGhpcy5vcHRpb25zLm1heFNlcXVlbmNlTGVuZ3RoKVxuICAgICAgICAgIHRoaXMuX3NlcXVlbmNlLnNoaWZ0KClcblxuICAgICAgICB0aGlzLl9zZXF1ZW5jZS5wdXNoKHRoaXMuX2N1cnJlbnRDb21ibylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWFscmVhZHlUcmlnZ2VyZWQgfHwgIXRoaXMub3B0aW9ucy50cmlnZ2VyT25jZVBlcktleSkge1xuICAgICAgdGhpcy5fbm90aWZ5V2F0Y2hlcnMoZXZlbnQpXG4gICAgICB0aGlzLl9kaXNwYXRjaEhhbmRsZXJzKGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIF9vbktleVVwID0gZXZlbnQgPT4ge1xuICAgIGlmICghdGhpcy5vcHRpb25zLmZpbHRlci5jYWxsKHRoaXMsIGV2ZW50KSkgcmV0dXJuXG5cbiAgICBsZXQga2V5ID0gdGhpcy5vcHRpb25zLnVzZUNvZGVJbnN0ZWFkS2V5ID8gZXZlbnQuY29kZSA6IGV2ZW50LmtleVxuXG4gICAgaWYgKGtleS5sZW5ndGggPT09IDEpIHtcbiAgICAgIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpXG4gICAgICBpZiAoa2V5ID09PSAnICcpIGtleSA9ICdTcGFjZSdcbiAgICB9XG5cbiAgICB0aGlzLl9jdXJyZW50Q29tYm8gPSBbLi4udGhpcy5fY3VycmVudENvbWJvXVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9jdXJyZW50Q29tYm8uaW5kZXhPZihrZXkpXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5fY3VycmVudENvbWJvLnNwbGljZShpbmRleCwgMSlcbiAgICAgIHRoaXMuX2N1cnJlbnRDb21iby5zb3J0KClcbiAgICB9XG5cbiAgICB0aGlzLl9ub3RpZnlXYXRjaGVycyhldmVudClcbiAgfVxuXG4gIF9yZXNldEtleXMgPSAoKSA9PiB7XG4gICAgdGhpcy5fY3VycmVudENvbWJvID0gW11cbiAgICB0aGlzLl9zZXF1ZW5jZSA9IFtdXG4gIH1cblxuICBfbm90aWZ5V2F0Y2hlcnMgPSBldmVudCA9PiB7XG4gICAgY29uc3Qgc2VxdWVuY2UgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX3NlcXVlbmNlKSlcblxuICAgIGZvciAobGV0IHdhdGNoZXIgb2YgdGhpcy5fd2F0Y2hlcnMpIHtcbiAgICAgIHdhdGNoZXIuY2FsbGJhY2soc2VxdWVuY2UsIGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIF9kaXNwYXRjaEhhbmRsZXJzID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHNlcXVlbmNlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLl9zZXF1ZW5jZSkpXG5cbiAgICBjb25zdCBzaWduYXR1cmVzID0gW11cblxuICAgIGxldCBzaWduYXR1cmVTZXF1ZW5jZSA9IFtdXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuX3NlcXVlbmNlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBzaWduYXR1cmVTZXF1ZW5jZSA9IFt0aGlzLl9zZXF1ZW5jZVtpXSwgLi4uc2lnbmF0dXJlU2VxdWVuY2VdXG4gICAgICBzaWduYXR1cmVzLnB1c2goc3RyaW5naWZ5U2hvcnRjdXQoc2lnbmF0dXJlU2VxdWVuY2UpKVxuICAgIH1cblxuICAgIGZvciAobGV0IGhhbmRsZXIgb2YgdGhpcy5faGFuZGxlcnMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5fY3VycmVudFNjb3BlID09PSBoYW5kbGVyLnNjb3BlICYmXG4gICAgICAgIHNpZ25hdHVyZXMuaW5jbHVkZXMoaGFuZGxlci5zaWduYXR1cmUpXG4gICAgICApIHtcbiAgICAgICAgaGFuZGxlci5jYWxsYmFjayhzZXF1ZW5jZSwgZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgYSBrZXlib2FyZCBzaG9ydGN1dC4gQSBzaG9ydGN1dCBjYW4gYmUgaW4gc3RyaW5nIG9yIGFycmF5IGZvcm1hdC5cbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118QXJyYXkuPHN0cmluZ1tdPn0gc2hvcnRjdXQgLSBUaGUgc2hvcnRjdXQgdG8gYmluZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjb3BlIC0gQW4gb3B0aW9uYWwgc2NvcGUuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gVGhlIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIHRyaWdnZXJlZC5cbiAgICogICBUaGUgY2FsbGJhY2sgZ2V0cyBjYWxsZWQgd2l0aCB0aGUgY3VycmVudCBrZXkgb3IgY29tYm8gc2VxdWVuY2VcbiAgICogICBhbmQgdGhlIGtleSBldmVudC5cbiAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgdW5pcXVlIElEIG9mIHRoZSBib3VuZCBoYW5kbGVyLlxuICAgKi9cbiAgYmluZCA9IChzaG9ydGN1dCwgc2NvcGUsIGNhbGxiYWNrKSA9PiB7XG4gICAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNhbGxiYWNrID0gc2NvcGVcbiAgICAgIHNjb3BlID0gS2V5cy5ERUZBVUxUX1NDT1BFXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzaG9ydGN1dCA9PT0gJ3N0cmluZycpIHNob3J0Y3V0ID0gcGFyc2VTaG9ydGN1dChzaG9ydGN1dClcblxuICAgIHNob3J0Y3V0ID0gY2xlYW5TaG9ydGN1dChzaG9ydGN1dClcblxuICAgIGNvbnN0IGhhbmRsZXJJZCA9IGdlbmVyYXRlSWQoKVxuICAgIHRoaXMuX2hhbmRsZXJzLnB1c2goe1xuICAgICAgaWQ6IGhhbmRsZXJJZCxcbiAgICAgIHNpZ25hdHVyZTogc3RyaW5naWZ5U2hvcnRjdXQoc2hvcnRjdXQpLFxuICAgICAgc2hvcnRjdXQsXG4gICAgICBzY29wZSxcbiAgICAgIGNhbGxiYWNrXG4gICAgfSlcblxuICAgIHJldHVybiBoYW5kbGVySWRcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgYSBzcGVjaWZpYyBrZXlib2FyZCBzaG9ydGN1dCBoYW5kbGVyIHVzaW5nIGl0cyBJRC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGhhbmRsZXJJZCAtIFRoZSBJRCByZXR1cm5lZCBieSB0aGUge0BsaW5rIGJpbmR9IG1ldGhvZC5cbiAgICogQHRocm93cyBUaHJvd3MgYW4gZXJyb3Igd2hlbiB0aGUgSUQgaXMgaW52YWxpZC5cbiAgICovXG4gIHVuYmluZCA9IGhhbmRsZXJJZCA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9oYW5kbGVycy5maW5kSW5kZXgoaGFuZGxlciA9PiBoYW5kbGVyLmlkID09PSBoYW5kbGVySWQpXG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaGFuZGxlciBJRDogJyArIGhhbmRsZXJJZClcblxuICAgIHRoaXMuX2hhbmRsZXJzLnNwbGljZShpbmRleCwgMSlcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQga2V5Ym9hcmQgc2hvcnRjdXQgaGFuZGxlcnMgaGF2aW5nIHRoZSBzcGVjaWZpZWQgc2NvcGUuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzY29wZSAtIFRoZSBzY29wZS5cbiAgICovXG4gIHVuYmluZFNjb3BlID0gc2NvcGUgPT4ge1xuICAgIGNvbnN0IGluZGljZXMgPSBbXVxuICAgIHRoaXMuX2hhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaGFuZGxlci5zY29wZSA9PT0gc2NvcGUpIGluZGljZXMucHVzaChpbmRleClcbiAgICB9KVxuXG4gICAgZm9yIChsZXQgaW5kZXggb2YgaW5kaWNlcykge1xuICAgICAgdGhpcy5faGFuZGxlcnMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgYWxsIGtleWJvYXJkIHNob3J0Y3V0IGhhbmRsZXJzLlxuICAgKi9cbiAgdW5iaW5kQWxsID0gKCkgPT4ge1xuICAgIHRoaXMuX2hhbmRsZXJzID0gW11cbiAgfVxuXG4gIC8qKlxuICAgKiBXYXRjaCBrZXlib2FyZCBldmVudHMgKGtleWRvd24gYW5kIGtleXVwKS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBUaGUgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgdHJpZ2dlcmVkLlxuICAgKiAgIHdoZW4gYSBrZXlkb3duIG9yIGtleXVwIGV2ZW50IG9jY3Vycy4gVGhlIGNhbGxiYWNrIGdldHMgY2FsbGVkIHdpdGhcbiAgICogICB0aGUgY3VycmVudCBrZXkgb3IgY29tYm8gc2VxdWVuY2UgYW5kIHRoZSBrZXkgZXZlbnQuXG4gICAqIEByZXR1cm4ge251bWJlcn0gVGhlIHVuaXF1ZSBJRCBvZiB0aGUgYWRkZWQgd2F0Y2hlci5cbiAgICovXG4gIHdhdGNoID0gY2FsbGJhY2sgPT4ge1xuICAgIGNvbnN0IHdhdGNoZXJJZCA9IGdlbmVyYXRlSWQoKVxuICAgIHRoaXMuX3dhdGNoZXJzLnB1c2goe1xuICAgICAgaWQ6IHdhdGNoZXJJZCxcbiAgICAgIGNhbGxiYWNrXG4gICAgfSlcblxuICAgIHJldHVybiB3YXRjaGVySWRcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgYSBzcGVjaWZpYyB3YXRjaGVyIHVzaW5nIGl0cyBJRC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHdhdGNoZXJJZCAtIFRoZSBJRCByZXR1cm5lZCBieSB0aGUge0BsaW5rIHdhdGNofSBtZXRob2QuXG4gICAqIEB0aHJvd3MgVGhyb3dzIGFuIGVycm9yIHdoZW4gdGhlIElEIGlzIGludmFsaWQuXG4gICAqL1xuICB1bndhdGNoID0gd2F0Y2hlcklkID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX3dhdGNoZXJzLmZpbmRJbmRleCh3YXRjaGVyID0+IHdhdGNoZXIuaWQgPT09IHdhdGNoZXJJZClcblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB3YXRjaGVyIElEOiAnICsgd2F0Y2hlcklkKVxuXG4gICAgdGhpcy5fd2F0Y2hlcnMuc3BsaWNlKGluZGV4LCAxKVxuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCBhbGwgd2F0Y2hlcnMuXG4gICAqL1xuICB1bndhdGNoQWxsID0gKCkgPT4ge1xuICAgIHRoaXMuX3dhdGNoZXJzID0gW11cbiAgfVxuXG4gIC8qKlxuICAgKiBTd2l0Y2ggdGhlIHNjb3BlLiBPbmx5IGJvdW5kIGhhbmRsZXJzIGdldCB0cmlnZ2VyZWQgdGhhdCBoYXZlIHRoZSBuZXdcbiAgICogc2NvcGUuIFRoZSBkZWZhdWx0IHNjb3BlIGNhbiBiZSBhY2Nlc3NlZCBieSB7QGxpbmsgS2V5cy5ERUZBVUxUX1NDT1BFfS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjb3BlIC0gVGhlIHNjb3BlLlxuICAgKi9cbiAgc3dpdGNoU2NvcGUgPSBzY29wZSA9PiB7XG4gICAgdGhpcy5fY3VycmVudFNjb3BlID0gc2NvcGVcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIGxpc3RlbmluZyB0byBrZXkgZXZlbnRzIGFuZCByZXNldCB0aGUga2V5IHNlcXVlbmNlLlxuICAgKi9cbiAgc3RvcCA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuX3N0b3BwZWQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5RG93bilcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9vbktleVVwKVxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX3Jlc2V0S2V5cylcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX3Jlc2V0S2V5cylcblxuICAgICAgdGhpcy5fcmVzZXRLZXlzKClcblxuICAgICAgdGhpcy5fc3RvcHBlZCA9IHRydWVcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVzdW1lIGxpc3RlbmluZyB0byBrZXkgZXZlbnRzLlxuICAgKi9cbiAgcmVzdW1lID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLl9zdG9wcGVkKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24pXG4gICAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fb25LZXlVcClcbiAgICAgIHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9yZXNldEtleXMpXG4gICAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9yZXNldEtleXMpXG5cbiAgICAgIHRoaXMuX3N0b3BwZWQgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIC8qIFJlc2V0IHRoaXMgaW5zdGFuY2UgYnkgdW5iaW5kaW5nIGFsbCBoYW5kbGVycywgcmVtb3ZpbmcgYWxsIHdhdGNoZXJzXG4gICAqIGFuZCByZXNldHRpbmcgdGhlIGtleSBzZXF1ZW5jZS5cbiAgICovXG4gIHJlc2V0ID0gKCkgPT4ge1xuICAgIHRoaXMuX3Jlc2V0S2V5cygpXG4gICAgdGhpcy51bmJpbmRBbGwoKVxuICAgIHRoaXMudW53YXRjaEFsbCgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgS2V5c1xuIiwiZnVuY3Rpb24gY2xlYW5TZXF1ZW5jZShzZXF1ZW5jZSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcXVlbmNlLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHNlcXVlbmNlW2ldKSlcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzaG9ydGN1dCBzZXF1ZW5jZSAke3NlcXVlbmNlfS5gKVxuXG4gICAgY2xlYW5Db21ibyhzZXF1ZW5jZVtpXSlcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhbkNvbWJvKGNvbWJvKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29tYm8ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHlwZW9mIGNvbWJvW2ldICE9PSAnc3RyaW5nJylcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzaG9ydGN1dCBjb21ibyAke2NvbWJvfS5gKVxuXG4gICAgY29uc3QgY2xlYW5lZEtleSA9IGNsZWFuS2V5KGNvbWJvW2ldKVxuICAgIGlmICghY2xlYW5lZEtleSlcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBrZXkgJHtjbGVhbmVkS2V5fSBpbiBzaG9ydGN1dCBjb21ibyAke2NvbWJvfS5gKVxuXG4gICAgY29tYm9baV0gPSBjbGVhbmVkS2V5XG4gIH1cbiAgY29tYm8uc29ydCgpXG59XG5cbmZ1bmN0aW9uIGNsZWFuS2V5KGtleSkge1xuICBrZXkgPSBrZXkucmVwbGFjZSgvXFxzKy9nLCAnICcpXG4gIGlmIChrZXkgPT09ICcgJykga2V5ID0gJ1NwYWNlJ1xuICBrZXkgPSBrZXkudHJpbSgpXG4gIGlmIChrZXkubGVuZ3RoID09PSAxKSBrZXkgPSBrZXkudG9Mb3dlckNhc2UoKVxuICByZXR1cm4ga2V5XG59XG5cbi8qKlxuICogQ2xlYW4gYW4gYXJyYXkgc2hvcnRjdXQuIFRoZSBhcnJheSBpcyBjbGVhbmVkIGluLXBsYWNlIGFuZCBhbHNvIHJldHVybmVkLlxuICogVW5uZWNlc3Nhcnkgd2hpdGUgc3BhY2UgaXMgcmVtb3ZlZCwga2V5IGNvbWJpbmF0aW9ucyBhcmUgc29ydGVkIGFuZFxuICogc2luZ2xlIGNoYXJzIGNvbnZlcnRlZCB0byBsb3dlciBjYXNlLlxuICogQHBhcmFtIHtzdHJpbmdbXXxBcnJheS48c3RyaW5nW10+fSBzaG9ydGN1dCAtIFRoZSBhcnJheSBzaG9ydGN1dCB0byBjbGVhbi5cbiAqIEByZXR1cm4ge3N0cmluZ1tdfEFycmF5LjxzdHJpbmdbXT59IFRoZSBjbGVhbmVkIGFycmF5IHNob3J0Y3V0LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzaG9ydGN1dCkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoc2hvcnRjdXQpIHx8IHNob3J0Y3V0Lmxlbmd0aCA9PT0gMClcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJyYXkgc2hvcnRjdXQgdG8gY2xlYW46ICcgKyBzaG9ydGN1dClcblxuICBsZXQgaXNTZXF1ZW5jZSA9IHR5cGVvZiBzaG9ydGN1dFswXSAhPT0gJ3N0cmluZydcblxuICBpZiAoaXNTZXF1ZW5jZSAmJiBzaG9ydGN1dC5sZW5ndGggPT09IDEpIHtcbiAgICBzaG9ydGN1dCA9IHNob3J0Y3V0WzBdXG4gICAgaXNTZXF1ZW5jZSA9IGZhbHNlXG4gIH1cblxuICBpZiAoaXNTZXF1ZW5jZSkgY2xlYW5TZXF1ZW5jZShzaG9ydGN1dClcbiAgZWxzZSBjbGVhbkNvbWJvKHNob3J0Y3V0KVxuXG4gIHJldHVybiBzaG9ydGN1dFxufVxuIiwibGV0IG5leHRJZCA9IDFcblxuLyoqXG4gKiBDcmVhdGUgYSB1bmlxdWUgSUQgZXZlcnkgdGltZSBpdCBpcyBjYWxsZWQuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgdW5pcXVlIElELlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5leHRJZCsrXG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEtleXMgfSBmcm9tICcuL0tleXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNsZWFuU2hvcnRjdXQgfSBmcm9tICcuL2NsZWFuU2hvcnRjdXQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdlbmVyYXRlSWQgfSBmcm9tICcuL2dlbmVyYXRlSWQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhcnNlU2hvcnRjdXQgfSBmcm9tICcuL3BhcnNlU2hvcnRjdXQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0cmluZ2lmeVNob3J0Y3V0IH0gZnJvbSAnLi9zdHJpbmdpZnlTaG9ydGN1dCdcbiIsImNvbnN0IENPTUJJTkVfV0lUSCA9ICcrJ1xuY29uc3QgRk9MTE9XRURfQlkgPSAnPidcblxuZnVuY3Rpb24gZ2V0RHVwbGljYXRlcyhjb21ibykge1xuICBjb25zdCBjb3VudCA9IGNvbWJvID0+XG4gICAgY29tYm8ucmVkdWNlKChrMSwgazIpID0+IE9iamVjdC5hc3NpZ24oazEsIHsgW2syXTogKGsxW2syXSB8fCAwKSArIDEgfSksIHt9KVxuICBjb25zdCBkdXBsaWNhdGVzID0gZGljdCA9PiBPYmplY3Qua2V5cyhkaWN0KS5maWx0ZXIoayA9PiBkaWN0W2tdID4gMSlcbiAgcmV0dXJuIGR1cGxpY2F0ZXMoY291bnQoY29tYm8pKVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0S2V5KGtleSkge1xuICBrZXkgPSBrZXkuam9pbignJylcbiAgaWYgKGtleS5sZW5ndGggPT09IDEpIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpXG4gIHJldHVybiBrZXlcbn1cblxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBzaG9ydGN1dCBhbmQgcmV0dXJuIHRoZSBlcXVpdmFsZW50IGFycmF5IHNob3J0Y3V0LlxuICogQHBhcmFtIHtzdHJpbmd9IHNob3J0Y3V0IC0gVGhlIHN0cmluZyBzaG9ydGN1dCB0byBjb252ZXJ0LlxuICogQHJldHVybiB7c3RyaW5nW118QXJyYXkuPHN0cmluZ1tdPn0gVGhlIGNvbnZlcnRlZCBhcnJheSBzaG9ydGN1dC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2hvcnRjdXQpIHtcbiAgaWYgKHR5cGVvZiBzaG9ydGN1dCAhPT0gJ3N0cmluZycpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZyBzaG9ydGN1dCB0byBwYXJzZTogJyArIHNob3J0Y3V0KVxuXG4gIHNob3J0Y3V0ID0gc2hvcnRjdXQucmVwbGFjZSgvXFxzKy9nLCAnJylcblxuICBpZiAodHlwZW9mIHNob3J0Y3V0ICE9PSAnc3RyaW5nJyB8fCBzaG9ydGN1dC5sZW5ndGggPT09IDApXG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNob3J0Y3V0IChtdXN0IGJlIG5vbiBlbXB0eSBzdHJpbmcpOiAnICsgc2hvcnRjdXQpXG5cbiAgbGV0IGtleSA9IFtdXG4gIGxldCBjb21ibyA9IFtdXG4gIGNvbnN0IHNlcXVlbmNlID0gW11cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNob3J0Y3V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYyA9IHNob3J0Y3V0LmNoYXJBdChpKVxuICAgIGlmICgha2V5Lmxlbmd0aCkge1xuICAgICAga2V5LnB1c2goYylcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGMgPT09IENPTUJJTkVfV0lUSCkge1xuICAgICAgICBjb21iby5wdXNoKGNvbnZlcnRLZXkoa2V5KSlcbiAgICAgICAga2V5ID0gW11cbiAgICAgIH0gZWxzZSBpZiAoYyA9PT0gRk9MTE9XRURfQlkpIHtcbiAgICAgICAgY29tYm8ucHVzaChjb252ZXJ0S2V5KGtleSkpXG4gICAgICAgIGtleSA9IFtdXG4gICAgICAgIGNvbWJvLnNvcnQoKVxuICAgICAgICBzZXF1ZW5jZS5wdXNoKGNvbWJvKVxuICAgICAgICBjb21ibyA9IFtdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrZXkucHVzaChjKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChrZXkubGVuZ3RoKSB7XG4gICAgY29tYm8ucHVzaChjb252ZXJ0S2V5KGtleSkpXG4gICAgY29tYm8uc29ydCgpXG4gICAgc2VxdWVuY2UucHVzaChjb21ibylcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2hvcnRjdXQgKG11c3QgZW5kIHdpdGgga2V5KTogJyArIHNob3J0Y3V0KVxuICB9XG5cbiAgZm9yIChsZXQgY29tYm8gb2Ygc2VxdWVuY2UpIHtcbiAgICBjb25zdCBkdXBsaWNhdGVzID0gZ2V0RHVwbGljYXRlcyhjb21ibylcbiAgICBpZiAoZHVwbGljYXRlcy5sZW5ndGggPiAwKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNob3J0Y3V0IChkdXBsaWNhdGUga2V5cyk6JyArIHNob3J0Y3V0KVxuICB9XG5cbiAgaWYgKHNlcXVlbmNlLmxlbmd0aCA9PT0gMSkgcmV0dXJuIHNlcXVlbmNlWzBdXG4gIGVsc2UgcmV0dXJuIHNlcXVlbmNlXG59XG4iLCJjb25zdCBDT01CSU5FX1dJVEggPSAnICsgJ1xuY29uc3QgRk9MTE9XRURfQlkgPSAnID4gJ1xuXG4vKipcbiAqIENyZWF0ZSBlcXVpdmFsZW50IHN0cmluZyBzaG9ydGN1dCBvZiBhbiBhcnJheSBzaG9ydGN1dC5cbiAqIEBwYXJhbSB7c3RyaW5nW118QXJyYXkuPHN0cmluZ1tdPn0gc2hvcnRjdXQgLSBUaGUgYXJyYXkgc2hvcnRjdXQgdG8gY29udmVydC5cbiAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGNvbnZlcnRlZCBzdHJpbmcgc2hvcnRjdXJ0LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzaG9ydGN1dCkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoc2hvcnRjdXQpKVxuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcnJheSBzaG9ydGN1dCB0byBzdHJpbmdpZnk6ICcgKyBzaG9ydGN1dClcblxuICBsZXQgaXNTZXF1ZW5jZSA9IHR5cGVvZiBzaG9ydGN1dFswXSAhPT0gJ3N0cmluZydcblxuICBpZiAoIWlzU2VxdWVuY2UpIHtcbiAgICByZXR1cm4gc2hvcnRjdXQuam9pbihDT01CSU5FX1dJVEgpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNob3J0Y3V0Lm1hcChwYXJ0ID0+IHBhcnQuam9pbihDT01CSU5FX1dJVEgpKS5qb2luKEZPTExPV0VEX0JZKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyObject.js":
/*!**********************************************!*\
  !*** ./node_modules/fbjs/lib/emptyObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (true) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),

/***/ "./node_modules/fbjs/lib/invariant.js":
/*!********************************************!*\
  !*** ./node_modules/fbjs/lib/invariant.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "./node_modules/fbjs/lib/warning.js":
/*!******************************************!*\
  !*** ./node_modules/fbjs/lib/warning.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(/*! ./emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "./node_modules/fbjs/lib/invariant.js");
  var warning = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js");
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");
var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "./node_modules/fbjs/lib/invariant.js");
var warning = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.4.0
 * react.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "./node_modules/fbjs/lib/invariant.js");
var emptyObject = __webpack_require__(/*! fbjs/lib/emptyObject */ "./node_modules/fbjs/lib/emptyObject.js");
var warning = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js");
var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.4.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_TIMEOUT_TYPE = hasSymbol ? Symbol.for('react.timeout') : 0xead1;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable === 'undefined') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

// Relying on the `invariant()` implementation lets us
// have preserve the format and params in the www builds.

// Exports ReactDOM.createRoot


// Experimental error-boundary API that can recover from errors within a single
// render phase

// Suspense
var enableSuspense = false;
// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:


// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.


// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:


// Warn about legacy context API


// Gather advanced timing metrics for Profiler subtrees.


// Fires getDerivedStateFromProps for state *or* props changes


// Only used in www builds.

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warning(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };
  {
    Object.seal(refObject);
  }
  return refObject;
}

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown = void 0;
var specialPropRefWarningShown = void 0;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;

  var propName = void 0;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps = void 0;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var ReactDebugCurrentFrame = {};

{
  // Component that is being worked on
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      return impl();
    }
    return null;
  };
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child = void 0;
  var nextName = void 0;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          !didWarnAboutMaps ? warning(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', ReactDebugCurrentFrame.getStackAddendum()) : void 0;
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step = void 0;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children) {
  return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warning(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    _defaultValue: defaultValue,
    _currentValue: defaultValue,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue2: defaultValue,
    _changedBits: 0,
    _changedBits2: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };

  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  context.Consumer = context;

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function forwardRef(render) {
  {
    !(typeof render === 'function') ? warning(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render) : void 0;

    if (render != null) {
      !(render.defaultProps == null && render.propTypes == null) ? warning(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

var describeComponentFrame = function (name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
};

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_ASYNC_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_TIMEOUT_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

function getComponentName(fiber) {
  var type = fiber.type;

  if (typeof type === 'function') {
    return type.displayName || type.name;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_ASYNC_MODE_TYPE:
      return 'AsyncMode';
    case REACT_CONTEXT_TYPE:
      return 'Context.Consumer';
    case REACT_FRAGMENT_TYPE:
      return 'ReactFragment';
    case REACT_PORTAL_TYPE:
      return 'ReactPortal';
    case REACT_PROFILER_TYPE:
      return 'Profiler(' + fiber.pendingProps.id + ')';
    case REACT_PROVIDER_TYPE:
      return 'Context.Provider';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_TIMEOUT_TYPE:
      return 'Timeout';
  }
  if (typeof type === 'object' && type !== null) {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        var functionName = type.render.displayName || type.render.name || '';
        return functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
    }
  }
  return null;
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

var currentlyValidatingElement = void 0;
var propTypesMisspellWarningShown = void 0;

var getDisplayName = function () {};
var getStackAddendum = function () {};

{
  currentlyValidatingElement = null;

  propTypesMisspellWarningShown = false;

  getDisplayName = function (element) {
    if (element == null) {
      return '#empty';
    } else if (typeof element === 'string' || typeof element === 'number') {
      return '#text';
    } else if (typeof element.type === 'string') {
      return element.type;
    } else if (element.type === REACT_FRAGMENT_TYPE) {
      return 'React.Fragment';
    } else {
      return element.type.displayName || element.type.name || 'Unknown';
    }
  };

  getStackAddendum = function () {
    var stack = '';
    if (currentlyValidatingElement) {
      var name = getDisplayName(currentlyValidatingElement);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
    }
    stack += ReactDebugCurrentFrame.getStackAddendum() || '';
    return stack;
  };
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
  }

  currentlyValidatingElement = element;
  {
    warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum());
  }
  currentlyValidatingElement = null;
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step = void 0;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  var propTypes = componentClass.propTypes;
  if (propTypes) {
    currentlyValidatingElement = element;
    checkPropTypes(propTypes, element.props, 'prop', name, getStackAddendum);
    currentlyValidatingElement = null;
  } else if (componentClass.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warning(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    !componentClass.getDefaultProps.isReactClassApproved ? warning(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  currentlyValidatingElement = fragment;

  var keys = Object.keys(fragment.props);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key !== 'children' && key !== 'key') {
      warning(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.%s', key, getStackAddendum());
      break;
    }
  }

  if (fragment.ref !== null) {
    warning(false, 'Invalid attribute `ref` supplied to `React.Fragment`.%s', getStackAddendum());
  }

  currentlyValidatingElement = null;
}

function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    info += getStackAddendum() || '';

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else {
      typeString = typeof type;
    }

    warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;
  // Legacy hook: remove it
  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  createRef: createRef,
  Component: Component,
  PureComponent: PureComponent,

  createContext: createContext,
  forwardRef: forwardRef,

  Fragment: REACT_FRAGMENT_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  unstable_AsyncMode: REACT_ASYNC_MODE_TYPE,
  unstable_Profiler: REACT_PROFILER_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentOwner: ReactCurrentOwner,
    // Used by renderers to avoid bundling object-assign twice in UMD bundles:
    assign: _assign
  }
};

if (enableSuspense) {
  React.Timeout = REACT_TIMEOUT_TYPE;
}

{
  _assign(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3.default ? React$3.default : React$3;

module.exports = react;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./src/components/KeyCuts.js":
/*!***********************************!*\
  !*** ./src/components/KeyCuts.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _keycuts = __webpack_require__(/*! keycuts */ "../keycuts/dist/keycuts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KeyCuts = function (_Component) {
  _inherits(KeyCuts, _Component);

  function KeyCuts() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, KeyCuts);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = KeyCuts.__proto__ || Object.getPrototypeOf(KeyCuts)).call.apply(_ref, [this].concat(args))), _this), _this.pauseResume = function () {
      if (_this.props.paused) _this.keys.stop();else _this.keys.resume();
    }, _this.updateBindings = function () {
      _this.keys.unbindAll();

      var bindings = _this.props.bind;

      if (!bindings) return;

      if ((typeof bindings === 'undefined' ? 'undefined' : _typeof(bindings)) !== 'object') throw new Error('Invalid bind parameter value: ' + bindings);

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.entries(bindings)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var binding = _step.value;

          var _binding = _slicedToArray(binding, 2),
              shortcut = _binding[0],
              callback = _binding[1];

          _this.keys.bind(shortcut, callback);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }, _this.updateWatchers = function () {
      _this.keys.unwatchAll();

      var callbacks = _this.props.watch;

      if (!callbacks) return;

      if (!Array.isArray(callbacks)) throw new Error('Invalid watch parameter value: ' + callbacks);

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = callbacks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var callback = _step2.value;

          _this.keys.watch(callback);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(KeyCuts, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var options = this.props.options;
      var children = this.props.children;

      if (children) this.keys = new _keycuts.Keys(this._el, options);else this.keys = new _keycuts.Keys(document, options);

      this.updateBindings();
      this.updateWatchers();

      this.pauseResume();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.keys.stop();
      this.keys.reset();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.bind !== this.props.bind) this.updateBindings();
      if (prevProps.watch !== this.props.watch) this.updateWatchers();
      if (prevProps.paused !== this.props.paused) this.pauseResume();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      // eslint-disable-next-line no-unused-vars
      var _props = this.props,
          children = _props.children,
          options = _props.options,
          other = _objectWithoutProperties(_props, ['children', 'options']);

      if (children) {
        // TODO: Switch from div to Fragment later on, but Fragments
        // currently can't have event listeners attached.
        // See https://github.com/facebook/react/issues/12051
        return _react2.default.createElement(
          'div',
          _extends({ ref: function ref(el) {
              return _this2._el = el;
            } }, other),
          this.props.children
        );
      }

      return null;
    }
  }]);

  return KeyCuts;
}(_react.Component);

KeyCuts.propTypes = {
  children: _propTypes2.default.element,
  options: _propTypes2.default.object,
  bind: _propTypes2.default.object,
  watch: _propTypes2.default.array,
  paused: _propTypes2.default.bool
};

exports.default = KeyCuts;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _KeyCuts = __webpack_require__(/*! ./components/KeyCuts */ "./src/components/KeyCuts.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_KeyCuts).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZXljdXRzUmVhY3Qvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2tleWN1dHNSZWFjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rZXljdXRzUmVhY3QvLi4va2V5Y3V0cy9kaXN0L2tleWN1dHMuanMiLCJ3ZWJwYWNrOi8va2V5Y3V0c1JlYWN0Ly4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8va2V5Y3V0c1JlYWN0Ly4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5T2JqZWN0LmpzIiwid2VicGFjazovL2tleWN1dHNSZWFjdC8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8va2V5Y3V0c1JlYWN0Ly4vbm9kZV9tb2R1bGVzL2ZianMvbGliL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8va2V5Y3V0c1JlYWN0Ly4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8va2V5Y3V0c1JlYWN0Ly4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8va2V5Y3V0c1JlYWN0Ly4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8va2V5Y3V0c1JlYWN0Ly4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8va2V5Y3V0c1JlYWN0Ly4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovL2tleWN1dHNSZWFjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8va2V5Y3V0c1JlYWN0Ly4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL2tleWN1dHNSZWFjdC8uL3NyYy9jb21wb25lbnRzL0tleUN1dHMuanMiLCJ3ZWJwYWNrOi8va2V5Y3V0c1JlYWN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIktleUN1dHMiLCJwYXVzZVJlc3VtZSIsInByb3BzIiwicGF1c2VkIiwia2V5cyIsInN0b3AiLCJyZXN1bWUiLCJ1cGRhdGVCaW5kaW5ncyIsInVuYmluZEFsbCIsImJpbmRpbmdzIiwiYmluZCIsIkVycm9yIiwiT2JqZWN0IiwiZW50cmllcyIsImJpbmRpbmciLCJzaG9ydGN1dCIsImNhbGxiYWNrIiwidXBkYXRlV2F0Y2hlcnMiLCJ1bndhdGNoQWxsIiwiY2FsbGJhY2tzIiwid2F0Y2giLCJBcnJheSIsImlzQXJyYXkiLCJvcHRpb25zIiwiY2hpbGRyZW4iLCJLZXlzIiwiX2VsIiwiZG9jdW1lbnQiLCJyZXNldCIsInByZXZQcm9wcyIsIm90aGVyIiwiZWwiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50Iiwib2JqZWN0IiwiYXJyYXkiLCJib29sIiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsNkJBQTZCO0FBQzdCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsZ0NBQWdDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3aEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFFBSUQ7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQSxrREFBa0Q7OztBQUdsRDs7O0FBR0E7OztBQUdBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esc0ZBQXNGLGFBQWE7QUFDbkc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEZBQTRGLGVBQWU7QUFDM0c7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdU5BQXVOO0FBQ3ZOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCLGFBQWEsVUFBVTtBQUN2QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCLGFBQWEsT0FBTztBQUNwQixhQUFhLFVBQVU7QUFDdkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsVUFBVTtBQUN2QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdCQUFnQjtBQUMzQjtBQUNBLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7QUFJQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNqOENBOztBQUVBLGFBRUM7QUFDRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEF5QkpDLFcsR0FBYyxZQUFNO0FBQ2xCLFVBQUksTUFBS0MsS0FBTCxDQUFXQyxNQUFmLEVBQXVCLE1BQUtDLElBQUwsQ0FBVUMsSUFBVixHQUF2QixLQUNLLE1BQUtELElBQUwsQ0FBVUUsTUFBVjtBQUNOLEssUUFFREMsYyxHQUFpQixZQUFNO0FBQ3JCLFlBQUtILElBQUwsQ0FBVUksU0FBVjs7QUFFQSxVQUFNQyxXQUFXLE1BQUtQLEtBQUwsQ0FBV1EsSUFBNUI7O0FBRUEsVUFBSSxDQUFDRCxRQUFMLEVBQWU7O0FBRWYsVUFBSSxRQUFPQSxRQUFQLHlDQUFPQSxRQUFQLE9BQW9CLFFBQXhCLEVBQ0UsTUFBTSxJQUFJRSxLQUFKLENBQVUsbUNBQW1DRixRQUE3QyxDQUFOOztBQVJtQjtBQUFBO0FBQUE7O0FBQUE7QUFVckIsNkJBQW9CRyxPQUFPQyxPQUFQLENBQWVKLFFBQWYsQ0FBcEIsOEhBQThDO0FBQUEsY0FBckNLLE9BQXFDOztBQUFBLHdDQUNmQSxPQURlO0FBQUEsY0FDckNDLFFBRHFDO0FBQUEsY0FDM0JDLFFBRDJCOztBQUU1QyxnQkFBS1osSUFBTCxDQUFVTSxJQUFWLENBQWVLLFFBQWYsRUFBeUJDLFFBQXpCO0FBQ0Q7QUFib0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWN0QixLLFFBRURDLGMsR0FBaUIsWUFBTTtBQUNyQixZQUFLYixJQUFMLENBQVVjLFVBQVY7O0FBRUEsVUFBTUMsWUFBWSxNQUFLakIsS0FBTCxDQUFXa0IsS0FBN0I7O0FBRUEsVUFBSSxDQUFDRCxTQUFMLEVBQWdCOztBQUVoQixVQUFJLENBQUNFLE1BQU1DLE9BQU4sQ0FBY0gsU0FBZCxDQUFMLEVBQ0UsTUFBTSxJQUFJUixLQUFKLENBQVUsb0NBQW9DUSxTQUE5QyxDQUFOOztBQVJtQjtBQUFBO0FBQUE7O0FBQUE7QUFVckIsOEJBQXFCQSxTQUFyQixtSUFBZ0M7QUFBQSxjQUF2QkgsUUFBdUI7O0FBQzlCLGdCQUFLWixJQUFMLENBQVVnQixLQUFWLENBQWdCSixRQUFoQjtBQUNEO0FBWm9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhdEIsSzs7Ozs7d0NBMURtQjtBQUNsQixVQUFNTyxVQUFVLEtBQUtyQixLQUFMLENBQVdxQixPQUEzQjtBQUNBLFVBQU1DLFdBQVcsS0FBS3RCLEtBQUwsQ0FBV3NCLFFBQTVCOztBQUVBLFVBQUlBLFFBQUosRUFBYyxLQUFLcEIsSUFBTCxHQUFZLElBQUlxQixhQUFKLENBQVMsS0FBS0MsR0FBZCxFQUFtQkgsT0FBbkIsQ0FBWixDQUFkLEtBQ0ssS0FBS25CLElBQUwsR0FBWSxJQUFJcUIsYUFBSixDQUFTRSxRQUFULEVBQW1CSixPQUFuQixDQUFaOztBQUVMLFdBQUtoQixjQUFMO0FBQ0EsV0FBS1UsY0FBTDs7QUFFQSxXQUFLaEIsV0FBTDtBQUNEOzs7MkNBRXNCO0FBQ3JCLFdBQUtHLElBQUwsQ0FBVUMsSUFBVjtBQUNBLFdBQUtELElBQUwsQ0FBVXdCLEtBQVY7QUFDRDs7O3VDQUVrQkMsUyxFQUFXO0FBQzVCLFVBQUlBLFVBQVVuQixJQUFWLEtBQW1CLEtBQUtSLEtBQUwsQ0FBV1EsSUFBbEMsRUFBd0MsS0FBS0gsY0FBTDtBQUN4QyxVQUFJc0IsVUFBVVQsS0FBVixLQUFvQixLQUFLbEIsS0FBTCxDQUFXa0IsS0FBbkMsRUFBMEMsS0FBS0gsY0FBTDtBQUMxQyxVQUFJWSxVQUFVMUIsTUFBVixLQUFxQixLQUFLRCxLQUFMLENBQVdDLE1BQXBDLEVBQTRDLEtBQUtGLFdBQUw7QUFDN0M7Ozs2QkFzQ1E7QUFBQTs7QUFDUDtBQURPLG1CQUVpQyxLQUFLQyxLQUZ0QztBQUFBLFVBRUNzQixRQUZELFVBRUNBLFFBRkQ7QUFBQSxVQUVXRCxPQUZYLFVBRVdBLE9BRlg7QUFBQSxVQUV1Qk8sS0FGdkI7O0FBSVAsVUFBSU4sUUFBSixFQUFjO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsZUFDRTtBQUFBO0FBQUEscUJBQUssS0FBSztBQUFBLHFCQUFPLE9BQUtFLEdBQUwsR0FBV0ssRUFBbEI7QUFBQSxhQUFWLElBQXFDRCxLQUFyQztBQUNHLGVBQUs1QixLQUFMLENBQVdzQjtBQURkLFNBREY7QUFLRDs7QUFFRCxhQUFPLElBQVA7QUFDRDs7OztFQTdFbUJRLGdCOztBQWdGdEJoQyxRQUFRaUMsU0FBUixHQUFvQjtBQUNsQlQsWUFBVVUsb0JBQVVDLE9BREY7QUFFbEJaLFdBQVNXLG9CQUFVRSxNQUZEO0FBR2xCMUIsUUFBTXdCLG9CQUFVRSxNQUhFO0FBSWxCaEIsU0FBT2Msb0JBQVVHLEtBSkM7QUFLbEJsQyxVQUFRK0Isb0JBQVVJO0FBTEEsQ0FBcEI7O2tCQVFldEMsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NENDNUZOdUMsTyIsImZpbGUiOiJrZXljdXRzLXJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wia2V5Y3V0cy1yZWFjdFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJrZXljdXRzUmVhY3RcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wia2V5Y3V0c1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJrZXljdXRzXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9zcmMvS2V5cy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL0tleXMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2dlbmVyYXRlSWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2dlbmVyYXRlSWQgKi8gXCIuL3NyYy9nZW5lcmF0ZUlkLmpzXCIpO1xuXG52YXIgX2dlbmVyYXRlSWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2VuZXJhdGVJZCk7XG5cbnZhciBfY2xlYW5TaG9ydGN1dCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2xlYW5TaG9ydGN1dCAqLyBcIi4vc3JjL2NsZWFuU2hvcnRjdXQuanNcIik7XG5cbnZhciBfY2xlYW5TaG9ydGN1dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGVhblNob3J0Y3V0KTtcblxudmFyIF9wYXJzZVNob3J0Y3V0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9wYXJzZVNob3J0Y3V0ICovIFwiLi9zcmMvcGFyc2VTaG9ydGN1dC5qc1wiKTtcblxudmFyIF9wYXJzZVNob3J0Y3V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcnNlU2hvcnRjdXQpO1xuXG52YXIgX3N0cmluZ2lmeVNob3J0Y3V0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9zdHJpbmdpZnlTaG9ydGN1dCAqLyBcIi4vc3JjL3N0cmluZ2lmeVNob3J0Y3V0LmpzXCIpO1xuXG52YXIgX3N0cmluZ2lmeVNob3J0Y3V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZ2lmeVNob3J0Y3V0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogVGhlIG1haW4gY2xhc3MgdG8gYWNjZXNzIHRoZSBmZWF0dXJlcyBvZiB0aGUgS2V5Q3V0cyBsaWJyYXJ5LlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgSFRNTCBlbGVtZW50IHRoYXQgc2hvdWxkIGxpc3RlbiB0b1xuICogICBrZXlib2FyZCBzaG9ydGN1dHMgKGlmIG5vdCBwcm92aWRlZCB0aGVuIFdpbmRvdyBvYmplY3QgaXMgdXNlZCkuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIEFkZGl0aW9uYWwgb3B0aW9ucyAob3B0aW9uYWwpLlxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLnRyaWdnZXJPbmNlUGVyS2V5IC0gSWYgYSBrZXkgaXMga2VwdCBkb3duIHRoZW5cbiAqICAgdGhlIHNob3J0Y3V0IHdpbGwgYmUgdHJpZ2dlcmVkIG11bHRpcGxlIHRpbWVzIHdoZW4gc2V0IHRvIGZhbHNlIGFuZFxuICogICBvbmx5IG9uY2Ugd2hlbiBzZXQgdG8gdHJ1ZSAoZGVmYXVsdDogZmFsc2UpXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMudXNlQ29kZUluc3RlYWRLZXkgLSBJZiBzZXQgdG8gZmFsc2UgdGhlblxuICogICBLZXlib2FyZEV2ZW50LmtleSBpcyBldmFsdWF0ZWQgZm9yIHRyaWdnZXJpbmcgc2hvcnRjdXRzLCBvdGhlcndpc2VcbiAqICAgS2V5Ym9hcmRFdmVudC5jb2RlIChkZWZhdWx0OiBmYWxzZSlcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLm1heFNlcXVlbmNlTGVuZ3RoIC0gVGhlIG1heGltdW0gc2VxdWVuY2Ugb2ZcbiAqICAga2V5IG9yIGNvbWJvcyB0aGF0IHNob3VsZCBiZSB0cmFja2VkIChkZWZhdWx0OiAzKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gb3B0aW9ucy5maWx0ZXIgLSBBIGZpbHRlciBmdW5jdGlvbi4gSWYgdGhlIGZpbHRlclxuICogICByZXR1cm5zIGZhbHNlIHRoZSBldmVudCB3aWxsIGJlIGZpbHRlcmVkIG91dCBhbmQgbm8gYm91bmQgaGFuZGxlclxuICogICBvciB3YXRjaGVyIHdpbGwgYmUgdHJpZ2dlcmVkLiBUaGUgZmlsdGVyIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkXG4gKiAgIHdpdGggdGhlIGtleSBldmVudC4gVGhlIGRlZmF1bHQgZmlsdGVyIHdpbGwgYWx3YXlzIHJldHVybiB0cnVlLlxuICovXG52YXIgS2V5cyA9XG4vKiogVGhlIG5hbWUgb2YgdGhlIGRlZmF1bHQgc2NvcGUuICovXG5mdW5jdGlvbiBLZXlzKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgS2V5cyk7XG5cbiAgdGhpcy5fc3RvcHBlZCA9IHRydWU7XG4gIHRoaXMuX2N1cnJlbnRTY29wZSA9IEtleXMuREVGQVVMVF9TQ09QRTtcbiAgdGhpcy5fY3VycmVudENvbWJvID0gW107XG4gIHRoaXMuX3NlcXVlbmNlID0gW107XG4gIHRoaXMuX2hhbmRsZXJzID0gW107XG4gIHRoaXMuX3dhdGNoZXJzID0gW107XG4gIHRoaXMub3B0aW9ucyA9IHtcbiAgICB0cmlnZ2VyT25jZVBlcktleTogZmFsc2UsXG4gICAgdXNlQ29kZUluc3RlYWRLZXk6IGZhbHNlLFxuICAgIG1heFNlcXVlbmNlTGVuZ3RoOiAzLFxuICAgIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuX29uS2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmICghX3RoaXMub3B0aW9ucy5maWx0ZXIuY2FsbChfdGhpcywgZXZlbnQpKSByZXR1cm47XG5cbiAgICB2YXIga2V5ID0gX3RoaXMub3B0aW9ucy51c2VDb2RlSW5zdGVhZEtleSA/IGV2ZW50LmNvZGUgOiBldmVudC5rZXk7XG5cbiAgICBpZiAoa2V5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAga2V5ID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAoa2V5ID09PSAnICcpIGtleSA9ICdTcGFjZSc7XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlUcmlnZ2VyZWQgPSBfdGhpcy5fY3VycmVudENvbWJvLmluY2x1ZGVzKGtleSk7XG5cbiAgICBpZiAoIWFscmVhZHlUcmlnZ2VyZWQpIHtcbiAgICAgIF90aGlzLl9jdXJyZW50Q29tYm8ucHVzaChrZXkpO1xuICAgICAgX3RoaXMuX2N1cnJlbnRDb21iby5zb3J0KCk7XG5cbiAgICAgIGlmIChfdGhpcy5fc2VxdWVuY2UubGVuZ3RoID09PSAwIHx8IF90aGlzLl9zZXF1ZW5jZVtfdGhpcy5fc2VxdWVuY2UubGVuZ3RoIC0gMV0gIT09IF90aGlzLl9jdXJyZW50Q29tYm8pIHtcbiAgICAgICAgaWYgKF90aGlzLl9zZXF1ZW5jZS5sZW5ndGggPT09IF90aGlzLm9wdGlvbnMubWF4U2VxdWVuY2VMZW5ndGgpIF90aGlzLl9zZXF1ZW5jZS5zaGlmdCgpO1xuXG4gICAgICAgIF90aGlzLl9zZXF1ZW5jZS5wdXNoKF90aGlzLl9jdXJyZW50Q29tYm8pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghYWxyZWFkeVRyaWdnZXJlZCB8fCAhX3RoaXMub3B0aW9ucy50cmlnZ2VyT25jZVBlcktleSkge1xuICAgICAgX3RoaXMuX25vdGlmeVdhdGNoZXJzKGV2ZW50KTtcbiAgICAgIF90aGlzLl9kaXNwYXRjaEhhbmRsZXJzKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5fb25LZXlVcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmICghX3RoaXMub3B0aW9ucy5maWx0ZXIuY2FsbChfdGhpcywgZXZlbnQpKSByZXR1cm47XG5cbiAgICB2YXIga2V5ID0gX3RoaXMub3B0aW9ucy51c2VDb2RlSW5zdGVhZEtleSA/IGV2ZW50LmNvZGUgOiBldmVudC5rZXk7XG5cbiAgICBpZiAoa2V5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAga2V5ID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAoa2V5ID09PSAnICcpIGtleSA9ICdTcGFjZSc7XG4gICAgfVxuXG4gICAgX3RoaXMuX2N1cnJlbnRDb21ibyA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoX3RoaXMuX2N1cnJlbnRDb21ibykpO1xuXG4gICAgdmFyIGluZGV4ID0gX3RoaXMuX2N1cnJlbnRDb21iby5pbmRleE9mKGtleSk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgX3RoaXMuX2N1cnJlbnRDb21iby5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgX3RoaXMuX2N1cnJlbnRDb21iby5zb3J0KCk7XG4gICAgfVxuXG4gICAgX3RoaXMuX25vdGlmeVdhdGNoZXJzKGV2ZW50KTtcbiAgfTtcblxuICB0aGlzLl9yZXNldEtleXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgX3RoaXMuX2N1cnJlbnRDb21ibyA9IFtdO1xuICAgIF90aGlzLl9zZXF1ZW5jZSA9IFtdO1xuICB9O1xuXG4gIHRoaXMuX25vdGlmeVdhdGNoZXJzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIHNlcXVlbmNlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShfdGhpcy5fc2VxdWVuY2UpKTtcblxuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gX3RoaXMuX3dhdGNoZXJzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICB2YXIgd2F0Y2hlciA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgIHdhdGNoZXIuY2FsbGJhY2soc2VxdWVuY2UsIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdGhpcy5fZGlzcGF0Y2hIYW5kbGVycyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBzZXF1ZW5jZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoX3RoaXMuX3NlcXVlbmNlKSk7XG5cbiAgICB2YXIgc2lnbmF0dXJlcyA9IFtdO1xuXG4gICAgdmFyIHNpZ25hdHVyZVNlcXVlbmNlID0gW107XG4gICAgZm9yICh2YXIgaSA9IF90aGlzLl9zZXF1ZW5jZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgc2lnbmF0dXJlU2VxdWVuY2UgPSBbX3RoaXMuX3NlcXVlbmNlW2ldXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHNpZ25hdHVyZVNlcXVlbmNlKSk7XG4gICAgICBzaWduYXR1cmVzLnB1c2goKDAsIF9zdHJpbmdpZnlTaG9ydGN1dDIuZGVmYXVsdCkoc2lnbmF0dXJlU2VxdWVuY2UpKTtcbiAgICB9XG5cbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjIgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBfdGhpcy5faGFuZGxlcnNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDI7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSAoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWUpIHtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBfc3RlcDIudmFsdWU7XG5cbiAgICAgICAgaWYgKF90aGlzLl9jdXJyZW50U2NvcGUgPT09IGhhbmRsZXIuc2NvcGUgJiYgc2lnbmF0dXJlcy5pbmNsdWRlcyhoYW5kbGVyLnNpZ25hdHVyZSkpIHtcbiAgICAgICAgICBoYW5kbGVyLmNhbGxiYWNrKHNlcXVlbmNlLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvcjIgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgJiYgX2l0ZXJhdG9yMi5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3IyLnJldHVybigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuYmluZCA9IGZ1bmN0aW9uIChzaG9ydGN1dCwgc2NvcGUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNhbGxiYWNrID0gc2NvcGU7XG4gICAgICBzY29wZSA9IEtleXMuREVGQVVMVF9TQ09QRTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNob3J0Y3V0ID09PSAnc3RyaW5nJykgc2hvcnRjdXQgPSAoMCwgX3BhcnNlU2hvcnRjdXQyLmRlZmF1bHQpKHNob3J0Y3V0KTtcblxuICAgIHNob3J0Y3V0ID0gKDAsIF9jbGVhblNob3J0Y3V0Mi5kZWZhdWx0KShzaG9ydGN1dCk7XG5cbiAgICB2YXIgaGFuZGxlcklkID0gKDAsIF9nZW5lcmF0ZUlkMi5kZWZhdWx0KSgpO1xuICAgIF90aGlzLl9oYW5kbGVycy5wdXNoKHtcbiAgICAgIGlkOiBoYW5kbGVySWQsXG4gICAgICBzaWduYXR1cmU6ICgwLCBfc3RyaW5naWZ5U2hvcnRjdXQyLmRlZmF1bHQpKHNob3J0Y3V0KSxcbiAgICAgIHNob3J0Y3V0OiBzaG9ydGN1dCxcbiAgICAgIHNjb3BlOiBzY29wZSxcbiAgICAgIGNhbGxiYWNrOiBjYWxsYmFja1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhhbmRsZXJJZDtcbiAgfTtcblxuICB0aGlzLnVuYmluZCA9IGZ1bmN0aW9uIChoYW5kbGVySWQpIHtcbiAgICB2YXIgaW5kZXggPSBfdGhpcy5faGFuZGxlcnMuZmluZEluZGV4KGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gaGFuZGxlci5pZCA9PT0gaGFuZGxlcklkO1xuICAgIH0pO1xuXG4gICAgaWYgKGluZGV4ID09PSAtMSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGhhbmRsZXIgSUQ6ICcgKyBoYW5kbGVySWQpO1xuXG4gICAgX3RoaXMuX2hhbmRsZXJzLnNwbGljZShpbmRleCwgMSk7XG4gIH07XG5cbiAgdGhpcy51bmJpbmRTY29wZSA9IGZ1bmN0aW9uIChzY29wZSkge1xuICAgIHZhciBpbmRpY2VzID0gW107XG4gICAgX3RoaXMuX2hhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZXIsIGluZGV4KSB7XG4gICAgICBpZiAoaGFuZGxlci5zY29wZSA9PT0gc2NvcGUpIGluZGljZXMucHVzaChpbmRleCk7XG4gICAgfSk7XG5cbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjMgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IzID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvcjMgPSBpbmRpY2VzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAzOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gKF9zdGVwMyA9IF9pdGVyYXRvcjMubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IF9zdGVwMy52YWx1ZTtcblxuICAgICAgICBfdGhpcy5faGFuZGxlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yMyA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvcjMgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgJiYgX2l0ZXJhdG9yMy5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3IzLnJldHVybigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IzKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHRoaXMudW5iaW5kQWxsID0gZnVuY3Rpb24gKCkge1xuICAgIF90aGlzLl9oYW5kbGVycyA9IFtdO1xuICB9O1xuXG4gIHRoaXMud2F0Y2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICB2YXIgd2F0Y2hlcklkID0gKDAsIF9nZW5lcmF0ZUlkMi5kZWZhdWx0KSgpO1xuICAgIF90aGlzLl93YXRjaGVycy5wdXNoKHtcbiAgICAgIGlkOiB3YXRjaGVySWQsXG4gICAgICBjYWxsYmFjazogY2FsbGJhY2tcbiAgICB9KTtcblxuICAgIHJldHVybiB3YXRjaGVySWQ7XG4gIH07XG5cbiAgdGhpcy51bndhdGNoID0gZnVuY3Rpb24gKHdhdGNoZXJJZCkge1xuICAgIHZhciBpbmRleCA9IF90aGlzLl93YXRjaGVycy5maW5kSW5kZXgoZnVuY3Rpb24gKHdhdGNoZXIpIHtcbiAgICAgIHJldHVybiB3YXRjaGVyLmlkID09PSB3YXRjaGVySWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgd2F0Y2hlciBJRDogJyArIHdhdGNoZXJJZCk7XG5cbiAgICBfdGhpcy5fd2F0Y2hlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcblxuICB0aGlzLnVud2F0Y2hBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgX3RoaXMuX3dhdGNoZXJzID0gW107XG4gIH07XG5cbiAgdGhpcy5zd2l0Y2hTY29wZSA9IGZ1bmN0aW9uIChzY29wZSkge1xuICAgIF90aGlzLl9jdXJyZW50U2NvcGUgPSBzY29wZTtcbiAgfTtcblxuICB0aGlzLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFfdGhpcy5fc3RvcHBlZCkge1xuICAgICAgX3RoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIF90aGlzLl9vbktleURvd24pO1xuICAgICAgX3RoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBfdGhpcy5fb25LZXlVcCk7XG4gICAgICBfdGhpcy5fZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIF90aGlzLl9yZXNldEtleXMpO1xuICAgICAgX3RoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIF90aGlzLl9yZXNldEtleXMpO1xuXG4gICAgICBfdGhpcy5fcmVzZXRLZXlzKCk7XG5cbiAgICAgIF90aGlzLl9zdG9wcGVkID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5yZXN1bWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKF90aGlzLl9zdG9wcGVkKSB7XG4gICAgICBfdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgX3RoaXMuX29uS2V5RG93bik7XG4gICAgICBfdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIF90aGlzLl9vbktleVVwKTtcbiAgICAgIF90aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgX3RoaXMuX3Jlc2V0S2V5cyk7XG4gICAgICBfdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgX3RoaXMuX3Jlc2V0S2V5cyk7XG5cbiAgICAgIF90aGlzLl9zdG9wcGVkID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgX3RoaXMuX3Jlc2V0S2V5cygpO1xuICAgIF90aGlzLnVuYmluZEFsbCgpO1xuICAgIF90aGlzLnVud2F0Y2hBbGwoKTtcbiAgfTtcblxuICBpZiAoIWVsZW1lbnQpIGVsZW1lbnQgPSB3aW5kb3c7XG4gIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuXG4gIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKTtcblxuICB0aGlzLnJlc3VtZSgpO1xufVxuXG4vKipcbiAqIEJpbmQgYSBrZXlib2FyZCBzaG9ydGN1dC4gQSBzaG9ydGN1dCBjYW4gYmUgaW4gc3RyaW5nIG9yIGFycmF5IGZvcm1hdC5cbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfEFycmF5LjxzdHJpbmdbXT59IHNob3J0Y3V0IC0gVGhlIHNob3J0Y3V0IHRvIGJpbmQuXG4gKiBAcGFyYW0ge3N0cmluZ30gc2NvcGUgLSBBbiBvcHRpb25hbCBzY29wZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gVGhlIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIHRyaWdnZXJlZC5cbiAqICAgVGhlIGNhbGxiYWNrIGdldHMgY2FsbGVkIHdpdGggdGhlIGN1cnJlbnQga2V5IG9yIGNvbWJvIHNlcXVlbmNlXG4gKiAgIGFuZCB0aGUga2V5IGV2ZW50LlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgdW5pcXVlIElEIG9mIHRoZSBib3VuZCBoYW5kbGVyLlxuICovXG5cblxuLyoqXG4gKiBVbmJpbmQgYSBzcGVjaWZpYyBrZXlib2FyZCBzaG9ydGN1dCBoYW5kbGVyIHVzaW5nIGl0cyBJRC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBoYW5kbGVySWQgLSBUaGUgSUQgcmV0dXJuZWQgYnkgdGhlIHtAbGluayBiaW5kfSBtZXRob2QuXG4gKiBAdGhyb3dzIFRocm93cyBhbiBlcnJvciB3aGVuIHRoZSBJRCBpcyBpbnZhbGlkLlxuICovXG5cblxuLyoqXG4gKiBVbmJpbmQga2V5Ym9hcmQgc2hvcnRjdXQgaGFuZGxlcnMgaGF2aW5nIHRoZSBzcGVjaWZpZWQgc2NvcGUuXG4gKiBAcGFyYW0ge1N0cmluZ30gc2NvcGUgLSBUaGUgc2NvcGUuXG4gKi9cblxuXG4vKipcbiAqIFVuYmluZCBhbGwga2V5Ym9hcmQgc2hvcnRjdXQgaGFuZGxlcnMuXG4gKi9cblxuXG4vKipcbiAqIFdhdGNoIGtleWJvYXJkIGV2ZW50cyAoa2V5ZG93biBhbmQga2V5dXApLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBUaGUgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgdHJpZ2dlcmVkLlxuICogICB3aGVuIGEga2V5ZG93biBvciBrZXl1cCBldmVudCBvY2N1cnMuIFRoZSBjYWxsYmFjayBnZXRzIGNhbGxlZCB3aXRoXG4gKiAgIHRoZSBjdXJyZW50IGtleSBvciBjb21ibyBzZXF1ZW5jZSBhbmQgdGhlIGtleSBldmVudC5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHVuaXF1ZSBJRCBvZiB0aGUgYWRkZWQgd2F0Y2hlci5cbiAqL1xuXG5cbi8qKlxuICogVW5iaW5kIGEgc3BlY2lmaWMgd2F0Y2hlciB1c2luZyBpdHMgSUQuXG4gKiBAcGFyYW0ge251bWJlcn0gd2F0Y2hlcklkIC0gVGhlIElEIHJldHVybmVkIGJ5IHRoZSB7QGxpbmsgd2F0Y2h9IG1ldGhvZC5cbiAqIEB0aHJvd3MgVGhyb3dzIGFuIGVycm9yIHdoZW4gdGhlIElEIGlzIGludmFsaWQuXG4gKi9cblxuXG4vKipcbiAqIFVuYmluZCBhbGwgd2F0Y2hlcnMuXG4gKi9cblxuXG4vKipcbiAqIFN3aXRjaCB0aGUgc2NvcGUuIE9ubHkgYm91bmQgaGFuZGxlcnMgZ2V0IHRyaWdnZXJlZCB0aGF0IGhhdmUgdGhlIG5ld1xuICogc2NvcGUuIFRoZSBkZWZhdWx0IHNjb3BlIGNhbiBiZSBhY2Nlc3NlZCBieSB7QGxpbmsgS2V5cy5ERUZBVUxUX1NDT1BFfS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzY29wZSAtIFRoZSBzY29wZS5cbiAqL1xuXG5cbi8qKlxuICogU3RvcCBsaXN0ZW5pbmcgdG8ga2V5IGV2ZW50cyBhbmQgcmVzZXQgdGhlIGtleSBzZXF1ZW5jZS5cbiAqL1xuXG5cbi8qKlxuICogUmVzdW1lIGxpc3RlbmluZyB0byBrZXkgZXZlbnRzLlxuICovXG5cblxuLyogUmVzZXQgdGhpcyBpbnN0YW5jZSBieSB1bmJpbmRpbmcgYWxsIGhhbmRsZXJzLCByZW1vdmluZyBhbGwgd2F0Y2hlcnNcbiAqIGFuZCByZXNldHRpbmcgdGhlIGtleSBzZXF1ZW5jZS5cbiAqL1xuO1xuXG5LZXlzLkRFRkFVTFRfU0NPUEUgPSAnREVGQVVMVF9TQ09QRSc7XG5leHBvcnRzLmRlZmF1bHQgPSBLZXlzO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9jbGVhblNob3J0Y3V0LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvY2xlYW5TaG9ydGN1dC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzaG9ydGN1dCkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoc2hvcnRjdXQpIHx8IHNob3J0Y3V0Lmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFycmF5IHNob3J0Y3V0IHRvIGNsZWFuOiAnICsgc2hvcnRjdXQpO1xuXG4gIHZhciBpc1NlcXVlbmNlID0gdHlwZW9mIHNob3J0Y3V0WzBdICE9PSAnc3RyaW5nJztcblxuICBpZiAoaXNTZXF1ZW5jZSAmJiBzaG9ydGN1dC5sZW5ndGggPT09IDEpIHtcbiAgICBzaG9ydGN1dCA9IHNob3J0Y3V0WzBdO1xuICAgIGlzU2VxdWVuY2UgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChpc1NlcXVlbmNlKSBjbGVhblNlcXVlbmNlKHNob3J0Y3V0KTtlbHNlIGNsZWFuQ29tYm8oc2hvcnRjdXQpO1xuXG4gIHJldHVybiBzaG9ydGN1dDtcbn07XG5cbmZ1bmN0aW9uIGNsZWFuU2VxdWVuY2Uoc2VxdWVuY2UpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXF1ZW5jZS5sZW5ndGg7IGkrKykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShzZXF1ZW5jZVtpXSkpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzaG9ydGN1dCBzZXF1ZW5jZSAnICsgc2VxdWVuY2UgKyAnLicpO1xuXG4gICAgY2xlYW5Db21ibyhzZXF1ZW5jZVtpXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYW5Db21ibyhjb21ibykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbWJvLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHR5cGVvZiBjb21ib1tpXSAhPT0gJ3N0cmluZycpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzaG9ydGN1dCBjb21ibyAnICsgY29tYm8gKyAnLicpO1xuXG4gICAgdmFyIGNsZWFuZWRLZXkgPSBjbGVhbktleShjb21ib1tpXSk7XG4gICAgaWYgKCFjbGVhbmVkS2V5KSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQga2V5ICcgKyBjbGVhbmVkS2V5ICsgJyBpbiBzaG9ydGN1dCBjb21ibyAnICsgY29tYm8gKyAnLicpO1xuXG4gICAgY29tYm9baV0gPSBjbGVhbmVkS2V5O1xuICB9XG4gIGNvbWJvLnNvcnQoKTtcbn1cblxuZnVuY3Rpb24gY2xlYW5LZXkoa2V5KSB7XG4gIGtleSA9IGtleS5yZXBsYWNlKC9cXHMrL2csICcgJyk7XG4gIGlmIChrZXkgPT09ICcgJykga2V5ID0gJ1NwYWNlJztcbiAga2V5ID0ga2V5LnRyaW0oKTtcbiAgaWYgKGtleS5sZW5ndGggPT09IDEpIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4ga2V5O1xufVxuXG4vKipcbiAqIENsZWFuIGFuIGFycmF5IHNob3J0Y3V0LiBUaGUgYXJyYXkgaXMgY2xlYW5lZCBpbi1wbGFjZSBhbmQgYWxzbyByZXR1cm5lZC5cbiAqIFVubmVjZXNzYXJ5IHdoaXRlIHNwYWNlIGlzIHJlbW92ZWQsIGtleSBjb21iaW5hdGlvbnMgYXJlIHNvcnRlZCBhbmRcbiAqIHNpbmdsZSBjaGFycyBjb252ZXJ0ZWQgdG8gbG93ZXIgY2FzZS5cbiAqIEBwYXJhbSB7c3RyaW5nW118QXJyYXkuPHN0cmluZ1tdPn0gc2hvcnRjdXQgLSBUaGUgYXJyYXkgc2hvcnRjdXQgdG8gY2xlYW4uXG4gKiBAcmV0dXJuIHtzdHJpbmdbXXxBcnJheS48c3RyaW5nW10+fSBUaGUgY2xlYW5lZCBhcnJheSBzaG9ydGN1dC5cbiAqL1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9nZW5lcmF0ZUlkLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvZ2VuZXJhdGVJZC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5leHRJZCsrO1xufTtcblxudmFyIG5leHRJZCA9IDE7XG5cbi8qKlxuICogQ3JlYXRlIGEgdW5pcXVlIElEIGV2ZXJ5IHRpbWUgaXQgaXMgY2FsbGVkLlxuICogQHJldHVybiB7bnVtYmVyfSBBIHVuaXF1ZSBJRC5cbiAqL1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0tleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0tleXMgKi8gXCIuL3NyYy9LZXlzLmpzXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0tleXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9LZXlzKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9jbGVhblNob3J0Y3V0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jbGVhblNob3J0Y3V0ICovIFwiLi9zcmMvY2xlYW5TaG9ydGN1dC5qc1wiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjbGVhblNob3J0Y3V0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xlYW5TaG9ydGN1dCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfZ2VuZXJhdGVJZCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZ2VuZXJhdGVJZCAqLyBcIi4vc3JjL2dlbmVyYXRlSWQuanNcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZ2VuZXJhdGVJZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dlbmVyYXRlSWQpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX3BhcnNlU2hvcnRjdXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3BhcnNlU2hvcnRjdXQgKi8gXCIuL3NyYy9wYXJzZVNob3J0Y3V0LmpzXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3BhcnNlU2hvcnRjdXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJzZVNob3J0Y3V0KS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9zdHJpbmdpZnlTaG9ydGN1dCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vc3RyaW5naWZ5U2hvcnRjdXQgKi8gXCIuL3NyYy9zdHJpbmdpZnlTaG9ydGN1dC5qc1wiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdzdHJpbmdpZnlTaG9ydGN1dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZ2lmeVNob3J0Y3V0KS5kZWZhdWx0O1xuICB9XG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvcGFyc2VTaG9ydGN1dC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3BhcnNlU2hvcnRjdXQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc2hvcnRjdXQpIHtcbiAgaWYgKHR5cGVvZiBzaG9ydGN1dCAhPT0gJ3N0cmluZycpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcgc2hvcnRjdXQgdG8gcGFyc2U6ICcgKyBzaG9ydGN1dCk7XG5cbiAgc2hvcnRjdXQgPSBzaG9ydGN1dC5yZXBsYWNlKC9cXHMrL2csICcnKTtcblxuICBpZiAodHlwZW9mIHNob3J0Y3V0ICE9PSAnc3RyaW5nJyB8fCBzaG9ydGN1dC5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzaG9ydGN1dCAobXVzdCBiZSBub24gZW1wdHkgc3RyaW5nKTogJyArIHNob3J0Y3V0KTtcblxuICB2YXIga2V5ID0gW107XG4gIHZhciBjb21ibyA9IFtdO1xuICB2YXIgc2VxdWVuY2UgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNob3J0Y3V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGMgPSBzaG9ydGN1dC5jaGFyQXQoaSk7XG4gICAgaWYgKCFrZXkubGVuZ3RoKSB7XG4gICAgICBrZXkucHVzaChjKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGMgPT09IENPTUJJTkVfV0lUSCkge1xuICAgICAgICBjb21iby5wdXNoKGNvbnZlcnRLZXkoa2V5KSk7XG4gICAgICAgIGtleSA9IFtdO1xuICAgICAgfSBlbHNlIGlmIChjID09PSBGT0xMT1dFRF9CWSkge1xuICAgICAgICBjb21iby5wdXNoKGNvbnZlcnRLZXkoa2V5KSk7XG4gICAgICAgIGtleSA9IFtdO1xuICAgICAgICBjb21iby5zb3J0KCk7XG4gICAgICAgIHNlcXVlbmNlLnB1c2goY29tYm8pO1xuICAgICAgICBjb21ibyA9IFtdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAga2V5LnB1c2goYyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGtleS5sZW5ndGgpIHtcbiAgICBjb21iby5wdXNoKGNvbnZlcnRLZXkoa2V5KSk7XG4gICAgY29tYm8uc29ydCgpO1xuICAgIHNlcXVlbmNlLnB1c2goY29tYm8pO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzaG9ydGN1dCAobXVzdCBlbmQgd2l0aCBrZXkpOiAnICsgc2hvcnRjdXQpO1xuICB9XG5cbiAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gc2VxdWVuY2VbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICB2YXIgX2NvbWJvID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgIHZhciBkdXBsaWNhdGVzID0gZ2V0RHVwbGljYXRlcyhfY29tYm8pO1xuICAgICAgaWYgKGR1cGxpY2F0ZXMubGVuZ3RoID4gMCkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNob3J0Y3V0IChkdXBsaWNhdGUga2V5cyk6JyArIHNob3J0Y3V0KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHNlcXVlbmNlLmxlbmd0aCA9PT0gMSkgcmV0dXJuIHNlcXVlbmNlWzBdO2Vsc2UgcmV0dXJuIHNlcXVlbmNlO1xufTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIENPTUJJTkVfV0lUSCA9ICcrJztcbnZhciBGT0xMT1dFRF9CWSA9ICc+JztcblxuZnVuY3Rpb24gZ2V0RHVwbGljYXRlcyhjb21ibykge1xuICB2YXIgY291bnQgPSBmdW5jdGlvbiBjb3VudChjb21ibykge1xuICAgIHJldHVybiBjb21iby5yZWR1Y2UoZnVuY3Rpb24gKGsxLCBrMikge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oazEsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgazIsIChrMVtrMl0gfHwgMCkgKyAxKSk7XG4gICAgfSwge30pO1xuICB9O1xuICB2YXIgZHVwbGljYXRlcyA9IGZ1bmN0aW9uIGR1cGxpY2F0ZXMoZGljdCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhkaWN0KS5maWx0ZXIoZnVuY3Rpb24gKGspIHtcbiAgICAgIHJldHVybiBkaWN0W2tdID4gMTtcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIGR1cGxpY2F0ZXMoY291bnQoY29tYm8pKTtcbn1cblxuZnVuY3Rpb24gY29udmVydEtleShrZXkpIHtcbiAga2V5ID0ga2V5LmpvaW4oJycpO1xuICBpZiAoa2V5Lmxlbmd0aCA9PT0gMSkga2V5ID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiBrZXk7XG59XG5cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgc2hvcnRjdXQgYW5kIHJldHVybiB0aGUgZXF1aXZhbGVudCBhcnJheSBzaG9ydGN1dC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzaG9ydGN1dCAtIFRoZSBzdHJpbmcgc2hvcnRjdXQgdG8gY29udmVydC5cbiAqIEByZXR1cm4ge3N0cmluZ1tdfEFycmF5LjxzdHJpbmdbXT59IFRoZSBjb252ZXJ0ZWQgYXJyYXkgc2hvcnRjdXQuXG4gKi9cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvc3RyaW5naWZ5U2hvcnRjdXQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvc3RyaW5naWZ5U2hvcnRjdXQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHNob3J0Y3V0KSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShzaG9ydGN1dCkpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcnJheSBzaG9ydGN1dCB0byBzdHJpbmdpZnk6ICcgKyBzaG9ydGN1dCk7XG5cbiAgdmFyIGlzU2VxdWVuY2UgPSB0eXBlb2Ygc2hvcnRjdXRbMF0gIT09ICdzdHJpbmcnO1xuXG4gIGlmICghaXNTZXF1ZW5jZSkge1xuICAgIHJldHVybiBzaG9ydGN1dC5qb2luKENPTUJJTkVfV0lUSCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNob3J0Y3V0Lm1hcChmdW5jdGlvbiAocGFydCkge1xuICAgICAgcmV0dXJuIHBhcnQuam9pbihDT01CSU5FX1dJVEgpO1xuICAgIH0pLmpvaW4oRk9MTE9XRURfQlkpO1xuICB9XG59O1xuXG52YXIgQ09NQklORV9XSVRIID0gJyArICc7XG52YXIgRk9MTE9XRURfQlkgPSAnID4gJztcblxuLyoqXG4gKiBDcmVhdGUgZXF1aXZhbGVudCBzdHJpbmcgc2hvcnRjdXQgb2YgYW4gYXJyYXkgc2hvcnRjdXQuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfEFycmF5LjxzdHJpbmdbXT59IHNob3J0Y3V0IC0gVGhlIGFycmF5IHNob3J0Y3V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBjb252ZXJ0ZWQgc3RyaW5nIHNob3J0Y3VydC5cbiAqL1xuXG4vKioqLyB9KVxuXG4vKioqKioqLyB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk5YmJtRnRaVjB2ZDJWaWNHRmpheTkxYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVJaXdpZDJWaWNHRmphem92TDF0dVlXMWxYUzkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0lzSW5kbFluQmhZMnM2THk5YmJtRnRaVjB2TGk5emNtTXZTMlY1Y3k1cWN5SXNJbmRsWW5CaFkyczZMeTliYm1GdFpWMHZMaTl6Y21NdlkyeGxZVzVUYUc5eWRHTjFkQzVxY3lJc0luZGxZbkJoWTJzNkx5OWJibUZ0WlYwdkxpOXpjbU12WjJWdVpYSmhkR1ZKWkM1cWN5SXNJbmRsWW5CaFkyczZMeTliYm1GdFpWMHZMaTl6Y21NdmFXNWtaWGd1YW5NaUxDSjNaV0p3WVdOck9pOHZXMjVoYldWZEx5NHZjM0pqTDNCaGNuTmxVMmh2Y25SamRYUXVhbk1pTENKM1pXSndZV05yT2k4dlcyNWhiV1ZkTHk0dmMzSmpMM04wY21sdVoybG1lVk5vYjNKMFkzVjBMbXB6SWwwc0ltNWhiV1Z6SWpwYklrdGxlWE1pTENKbGJHVnRaVzUwSWl3aWIzQjBhVzl1Y3lJc0lsOXpkRzl3Y0dWa0lpd2lYMk4xY25KbGJuUlRZMjl3WlNJc0lrUkZSa0ZWVEZSZlUwTlBVRVVpTENKZlkzVnljbVZ1ZEVOdmJXSnZJaXdpWDNObGNYVmxibU5sSWl3aVgyaGhibVJzWlhKeklpd2lYM2RoZEdOb1pYSnpJaXdpZEhKcFoyZGxjazl1WTJWUVpYSkxaWGtpTENKMWMyVkRiMlJsU1c1emRHVmhaRXRsZVNJc0ltMWhlRk5sY1hWbGJtTmxUR1Z1WjNSb0lpd2labWxzZEdWeUlpd2lYMjl1UzJWNVJHOTNiaUlzSW1OaGJHd2lMQ0psZG1WdWRDSXNJbXRsZVNJc0ltTnZaR1VpTENKc1pXNW5kR2dpTENKMGIweHZkMlZ5UTJGelpTSXNJbUZzY21WaFpIbFVjbWxuWjJWeVpXUWlMQ0pwYm1Oc2RXUmxjeUlzSW5CMWMyZ2lMQ0p6YjNKMElpd2ljMmhwWm5RaUxDSmZibTkwYVdaNVYyRjBZMmhsY25NaUxDSmZaR2x6Y0dGMFkyaElZVzVrYkdWeWN5SXNJbDl2Ymt0bGVWVndJaXdpYVc1a1pYZ2lMQ0pwYm1SbGVFOW1JaXdpYzNCc2FXTmxJaXdpWDNKbGMyVjBTMlY1Y3lJc0luTmxjWFZsYm1ObElpd2lTbE5QVGlJc0luQmhjbk5sSWl3aWMzUnlhVzVuYVdaNUlpd2lkMkYwWTJobGNpSXNJbU5oYkd4aVlXTnJJaXdpYzJsbmJtRjBkWEpsY3lJc0luTnBaMjVoZEhWeVpWTmxjWFZsYm1ObElpd2lhU0lzSW1oaGJtUnNaWElpTENKelkyOXdaU0lzSW5OcFoyNWhkSFZ5WlNJc0ltSnBibVFpTENKemFHOXlkR04xZENJc0luVnVaR1ZtYVc1bFpDSXNJbWhoYm1Sc1pYSkpaQ0lzSW1sa0lpd2lkVzVpYVc1a0lpd2labWx1WkVsdVpHVjRJaXdpUlhKeWIzSWlMQ0oxYm1KcGJtUlRZMjl3WlNJc0ltbHVaR2xqWlhNaUxDSm1iM0pGWVdOb0lpd2lkVzVpYVc1a1FXeHNJaXdpZDJGMFkyZ2lMQ0ozWVhSamFHVnlTV1FpTENKMWJuZGhkR05vSWl3aWRXNTNZWFJqYUVGc2JDSXNJbk4zYVhSamFGTmpiM0JsSWl3aWMzUnZjQ0lzSWw5bGJHVnRaVzUwSWl3aWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpSXNJbkpsYzNWdFpTSXNJbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSWlMQ0p5WlhObGRDSXNJbmRwYm1SdmR5SXNJazlpYW1WamRDSXNJbUZ6YzJsbmJpSXNJa0Z5Y21GNUlpd2lhWE5CY25KaGVTSXNJbWx6VTJWeGRXVnVZMlVpTENKamJHVmhibE5sY1hWbGJtTmxJaXdpWTJ4bFlXNURiMjFpYnlJc0ltTnZiV0p2SWl3aVkyeGxZVzVsWkV0bGVTSXNJbU5zWldGdVMyVjVJaXdpY21Wd2JHRmpaU0lzSW5SeWFXMGlMQ0p1WlhoMFNXUWlMQ0prWldaaGRXeDBJaXdpWXlJc0ltTm9ZWEpCZENJc0lrTlBUVUpKVGtWZlYwbFVTQ0lzSW1OdmJuWmxjblJMWlhraUxDSkdUMHhNVDFkRlJGOUNXU0lzSW1SMWNHeHBZMkYwWlhNaUxDSm5aWFJFZFhCc2FXTmhkR1Z6SWl3aVkyOTFiblFpTENKeVpXUjFZMlVpTENKck1TSXNJbXN5SWl3aWEyVjVjeUlzSW1ScFkzUWlMQ0pySWl3aWFtOXBiaUlzSW0xaGNDSXNJbkJoY25RaVhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03UVVGRFJDeFBPMEZEVmtFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hyUkVGQk1FTXNaME5CUVdkRE8wRkJRekZGTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWjBWQlFYZEVMR3RDUVVGclFqdEJRVU14UlR0QlFVTkJMSGxFUVVGcFJDeGpRVUZqTzBGQlF5OUVPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHBSRUZCZVVNc2FVTkJRV2xETzBGQlF6RkZMSGRJUVVGblNDeHRRa0ZCYlVJc1JVRkJSVHRCUVVOeVNUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHMURRVUV5UWl3d1FrRkJNRUlzUlVGQlJUdEJRVU4yUkN4NVEwRkJhVU1zWlVGQlpUdEJRVU5vUkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTdzRSRUZCYzBRc0swUkJRU3RFT3p0QlFVVnlTRHRCUVVOQk96czdRVUZIUVR0QlFVTkJPenM3T3pzN096czdPenM3T3pzN096czdPMEZEYkVaQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN096czdPenM3TzBGQlJVRTdPenM3T3pzN096czdPenM3T3pzN096dEpRV3RDVFVFc1NUdEJRVU5LTzBGQmFVSkJMR05CUVZsRExFOUJRVm9zUlVGQmNVSkRMRTlCUVhKQ0xFVkJRVGhDTzBGQlFVRTdPMEZCUVVFN08wRkJRVUVzVDBGa09VSkRMRkZCWXpoQ0xFZEJaRzVDTEVsQlkyMUNPMEZCUVVFc1QwRmlPVUpETEdGQllUaENMRWRCWW1SS0xFdEJRVXRMTEdGQllWTTdRVUZCUVN4UFFWbzVRa01zWVVGWk9FSXNSMEZhWkN4RlFWbGpPMEZCUVVFc1QwRllPVUpETEZOQlZ6aENMRWRCV0d4Q0xFVkJWMnRDTzBGQlFVRXNUMEZXT1VKRExGTkJWVGhDTEVkQlZteENMRVZCVld0Q08wRkJRVUVzVDBGVU9VSkRMRk5CVXpoQ0xFZEJWR3hDTEVWQlUydENPMEZCUVVFc1QwRlFPVUpRTEU5QlR6aENMRWRCVUhCQ08wRkJRMUpSTEhWQ1FVRnRRaXhMUVVSWU8wRkJSVkpETEhWQ1FVRnRRaXhMUVVaWU8wRkJSMUpETEhWQ1FVRnRRaXhEUVVoWU8wRkJTVkpETEZsQlFWRTdRVUZCUVN4aFFVRk5MRWxCUVU0N1FVRkJRVHRCUVVwQkxFZEJUMjlDT3p0QlFVRkJMRTlCVXpsQ1F5eFZRVlE0UWl4SFFWTnFRaXhwUWtGQlV6dEJRVU53UWl4UlFVRkpMRU5CUVVNc1RVRkJTMW9zVDBGQlRDeERRVUZoVnl4TlFVRmlMRU5CUVc5Q1JTeEpRVUZ3UWl4RFFVRjVRaXhMUVVGNlFpeEZRVUVyUWtNc1MwRkJMMElzUTBGQlRDeEZRVUUwUXpzN1FVRkZOVU1zVVVGQlNVTXNUVUZCVFN4TlFVRkxaaXhQUVVGTUxFTkJRV0ZUTEdsQ1FVRmlMRWRCUVdsRFN5eE5RVUZOUlN4SlFVRjJReXhIUVVFNFEwWXNUVUZCVFVNc1IwRkJPVVE3TzBGQlJVRXNVVUZCU1VFc1NVRkJTVVVzVFVGQlNpeExRVUZsTEVOQlFXNUNMRVZCUVhOQ08wRkJRM0JDUml4WlFVRk5RU3hKUVVGSlJ5eFhRVUZLTEVWQlFVNDdRVUZEUVN4VlFVRkpTQ3hSUVVGUkxFZEJRVm9zUlVGQmFVSkJMRTFCUVUwc1QwRkJUanRCUVVOc1FqczdRVUZGUkN4UlFVRk5TU3h0UWtGQmJVSXNUVUZCUzJZc1lVRkJUQ3hEUVVGdFFtZENMRkZCUVc1Q0xFTkJRVFJDVEN4SFFVRTFRaXhEUVVGNlFqczdRVUZGUVN4UlFVRkpMRU5CUVVOSkxHZENRVUZNTEVWQlFYVkNPMEZCUTNKQ0xGbEJRVXRtTEdGQlFVd3NRMEZCYlVKcFFpeEpRVUZ1UWl4RFFVRjNRazRzUjBGQmVFSTdRVUZEUVN4WlFVRkxXQ3hoUVVGTUxFTkJRVzFDYTBJc1NVRkJia0k3TzBGQlJVRXNWVUZEUlN4TlFVRkxha0lzVTBGQlRDeERRVUZsV1N4TlFVRm1MRXRCUVRCQ0xFTkJRVEZDTEVsQlEwRXNUVUZCUzFvc1UwRkJUQ3hEUVVGbExFMUJRVXRCTEZOQlFVd3NRMEZCWlZrc1RVRkJaaXhIUVVGM1FpeERRVUYyUXl4TlFVRTRReXhOUVVGTFlpeGhRVVp5UkN4RlFVZEZPMEZCUTBFc1dVRkJTU3hOUVVGTFF5eFRRVUZNTEVOQlFXVlpMRTFCUVdZc1MwRkJNRUlzVFVGQlMycENMRTlCUVV3c1EwRkJZVlVzYVVKQlFUTkRMRVZCUTBVc1RVRkJTMHdzVTBGQlRDeERRVUZsYTBJc1MwRkJaanM3UVVGRlJpeGpRVUZMYkVJc1UwRkJUQ3hEUVVGbFowSXNTVUZCWml4RFFVRnZRaXhOUVVGTGFrSXNZVUZCZWtJN1FVRkRSRHRCUVVOR096dEJRVVZFTEZGQlFVa3NRMEZCUTJVc1owSkJRVVFzU1VGQmNVSXNRMEZCUXl4TlFVRkxia0lzVDBGQlRDeERRVUZoVVN4cFFrRkJka01zUlVGQk1FUTdRVUZEZUVRc1dVRkJTMmRDTEdWQlFVd3NRMEZCY1VKV0xFdEJRWEpDTzBGQlEwRXNXVUZCUzFjc2FVSkJRVXdzUTBGQmRVSllMRXRCUVhaQ08wRkJRMFE3UVVGRFJpeEhRWGhETmtJN08wRkJRVUVzVDBFd1F6bENXU3hSUVRGRE9FSXNSMEV3UTI1Q0xHbENRVUZUTzBGQlEyeENMRkZCUVVrc1EwRkJReXhOUVVGTE1VSXNUMEZCVEN4RFFVRmhWeXhOUVVGaUxFTkJRVzlDUlN4SlFVRndRaXhEUVVGNVFpeExRVUY2UWl4RlFVRXJRa01zUzBGQkwwSXNRMEZCVEN4RlFVRTBRenM3UVVGRk5VTXNVVUZCU1VNc1RVRkJUU3hOUVVGTFppeFBRVUZNTEVOQlFXRlRMR2xDUVVGaUxFZEJRV2xEU3l4TlFVRk5SU3hKUVVGMlF5eEhRVUU0UTBZc1RVRkJUVU1zUjBGQk9VUTdPMEZCUlVFc1VVRkJTVUVzU1VGQlNVVXNUVUZCU2l4TFFVRmxMRU5CUVc1Q0xFVkJRWE5DTzBGQlEzQkNSaXhaUVVGTlFTeEpRVUZKUnl4WFFVRktMRVZCUVU0N1FVRkRRU3hWUVVGSlNDeFJRVUZSTEVkQlFWb3NSVUZCYVVKQkxFMUJRVTBzVDBGQlRqdEJRVU5zUWpzN1FVRkZSQ3hWUVVGTFdDeGhRVUZNTEdkRFFVRjVRaXhOUVVGTFFTeGhRVUU1UWpzN1FVRkZRU3hSUVVGTmRVSXNVVUZCVVN4TlFVRkxka0lzWVVGQlRDeERRVUZ0UW5kQ0xFOUJRVzVDTEVOQlFUSkNZaXhIUVVFelFpeERRVUZrTzBGQlEwRXNVVUZCU1Zrc1ZVRkJWU3hEUVVGRExFTkJRV1lzUlVGQmEwSTdRVUZEYUVJc1dVRkJTM1pDTEdGQlFVd3NRMEZCYlVKNVFpeE5RVUZ1UWl4RFFVRXdRa1lzUzBGQk1VSXNSVUZCYVVNc1EwRkJha003UVVGRFFTeFpRVUZMZGtJc1lVRkJUQ3hEUVVGdFFtdENMRWxCUVc1Q08wRkJRMFE3TzBGQlJVUXNWVUZCUzBVc1pVRkJUQ3hEUVVGeFFsWXNTMEZCY2tJN1FVRkRSQ3hIUVRkRU5rSTdPMEZCUVVFc1QwRXJSRGxDWjBJc1ZVRXZSRGhDTEVkQkswUnFRaXhaUVVGTk8wRkJRMnBDTEZWQlFVc3hRaXhoUVVGTUxFZEJRWEZDTEVWQlFYSkNPMEZCUTBFc1ZVRkJTME1zVTBGQlRDeEhRVUZwUWl4RlFVRnFRanRCUVVORUxFZEJiRVUyUWpzN1FVRkJRU3hQUVc5Rk9VSnRRaXhsUVhCRk9FSXNSMEZ2UlZvc2FVSkJRVk03UVVGRGVrSXNVVUZCVFU4c1YwRkJWME1zUzBGQlMwTXNTMEZCVEN4RFFVRlhSQ3hMUVVGTFJTeFRRVUZNTEVOQlFXVXNUVUZCU3pkQ0xGTkJRWEJDTEVOQlFWZ3NRMEZCYWtJN08wRkJSSGxDTzBGQlFVRTdRVUZCUVRzN1FVRkJRVHRCUVVkNlFpd3lRa0ZCYjBJc1RVRkJTMFVzVTBGQmVrSXNPRWhCUVc5RE8wRkJRVUVzV1VGQk0wSTBRaXhQUVVFeVFqczdRVUZEYkVOQkxHZENRVUZSUXl4UlFVRlNMRU5CUVdsQ1RDeFJRVUZxUWl4RlFVRXlRbXBDTEV0QlFUTkNPMEZCUTBRN1FVRk1kMEk3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVMHhRaXhIUVRGRk5rSTdPMEZCUVVFc1QwRTBSVGxDVnl4cFFrRTFSVGhDTEVkQk5FVldMR2xDUVVGVE8wRkJRek5DTEZGQlFVMU5MRmRCUVZkRExFdEJRVXRETEV0QlFVd3NRMEZCVjBRc1MwRkJTMFVzVTBGQlRDeERRVUZsTEUxQlFVczNRaXhUUVVGd1FpeERRVUZZTEVOQlFXcENPenRCUVVWQkxGRkJRVTFuUXl4aFFVRmhMRVZCUVc1Q096dEJRVVZCTEZGQlFVbERMRzlDUVVGdlFpeEZRVUY0UWp0QlFVTkJMRk5CUVVzc1NVRkJTVU1zU1VGQlNTeE5RVUZMYkVNc1UwRkJUQ3hEUVVGbFdTeE5RVUZtTEVkQlFYZENMRU5CUVhKRExFVkJRWGREYzBJc1MwRkJTeXhEUVVFM1F5eEZRVUZuUkVFc1IwRkJhRVFzUlVGQmNVUTdRVUZEYmtSRUxESkNRVUZ4UWl4TlFVRkxha01zVTBGQlRDeERRVUZsYTBNc1EwRkJaaXhEUVVGeVFpdzBRa0ZCTWtORUxHbENRVUV6UXp0QlFVTkJSQ3hwUWtGQlYyaENMRWxCUVZnc1EwRkJaMElzYVVOQlFXdENhVUlzYVVKQlFXeENMRU5CUVdoQ08wRkJRMFE3TzBGQlZEQkNPMEZCUVVFN1FVRkJRVHM3UVVGQlFUdEJRVmN6UWl3MFFrRkJiMElzVFVGQlMyaERMRk5CUVhwQ0xHMUpRVUZ2UXp0QlFVRkJMRmxCUVROQ2EwTXNUMEZCTWtJN08wRkJRMnhETEZsQlEwVXNUVUZCUzNSRExHRkJRVXdzUzBGQmRVSnpReXhSUVVGUlF5eExRVUV2UWl4SlFVTkJTaXhYUVVGWGFrSXNVVUZCV0N4RFFVRnZRbTlDTEZGQlFWRkZMRk5CUVRWQ0xFTkJSa1lzUlVGSFJUdEJRVU5CUml4clFrRkJVVW9zVVVGQlVpeERRVUZwUWt3c1VVRkJha0lzUlVGQk1rSnFRaXhMUVVFelFqdEJRVU5FTzBGQlEwWTdRVUZzUWpCQ08wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZ0UWpWQ0xFZEJMMFkyUWpzN1FVRkJRU3hQUVRCSE9VSTJRaXhKUVRGSE9FSXNSMEV3UjNaQ0xGVkJRVU5ETEZGQlFVUXNSVUZCVjBnc1MwRkJXQ3hGUVVGclFrd3NVVUZCYkVJc1JVRkJLMEk3UVVGRGNFTXNVVUZCU1VFc1lVRkJZVk1zVTBGQmFrSXNSVUZCTkVJN1FVRkRNVUpVTEdsQ1FVRlhTeXhMUVVGWU8wRkJRMEZCTEdOQlFWRXpReXhMUVVGTFN5eGhRVUZpTzBGQlEwUTdPMEZCUlVRc1VVRkJTU3hQUVVGUGVVTXNVVUZCVUN4TFFVRnZRaXhSUVVGNFFpeEZRVUZyUTBFc1YwRkJWeXcyUWtGQlkwRXNVVUZCWkN4RFFVRllPenRCUVVWc1EwRXNaVUZCVnl3MlFrRkJZMEVzVVVGQlpDeERRVUZZT3p0QlFVVkJMRkZCUVUxRkxGbEJRVmtzTWtKQlFXeENPMEZCUTBFc1ZVRkJTM2hETEZOQlFVd3NRMEZCWldVc1NVRkJaaXhEUVVGdlFqdEJRVU5zUWpCQ0xGVkJRVWxFTEZOQlJHTTdRVUZGYkVKS0xHbENRVUZYTEdsRFFVRnJRa1VzVVVGQmJFSXNRMEZHVHp0QlFVZHNRa0VzZDBKQlNHdENPMEZCU1d4Q1NDeHJRa0ZLYTBJN1FVRkxiRUpNTzBGQlRHdENMRXRCUVhCQ096dEJRVkZCTEZkQlFVOVZMRk5CUVZBN1FVRkRSQ3hIUVRsSU5rSTdPMEZCUVVFc1QwRnhTVGxDUlN4TlFYSkpPRUlzUjBGeFNYSkNMSEZDUVVGaE8wRkJRM0JDTEZGQlFVMXlRaXhSUVVGUkxFMUJRVXR5UWl4VFFVRk1MRU5CUVdVeVF5eFRRVUZtTEVOQlFYbENPMEZCUVVFc1lVRkJWMVFzVVVGQlVVOHNSVUZCVWl4TFFVRmxSQ3hUUVVFeFFqdEJRVUZCTEV0QlFYcENMRU5CUVdRN08wRkJSVUVzVVVGQlNXNUNMRlZCUVZVc1EwRkJReXhEUVVGbUxFVkJRV3RDTEUxQlFVMHNTVUZCU1hWQ0xFdEJRVW9zUTBGQlZTeDVRa0ZCZVVKS0xGTkJRVzVETEVOQlFVNDdPMEZCUld4Q0xGVkJRVXQ0UXl4VFFVRk1MRU5CUVdWMVFpeE5RVUZtTEVOQlFYTkNSaXhMUVVGMFFpeEZRVUUyUWl4RFFVRTNRanRCUVVORUxFZEJNMGsyUWpzN1FVRkJRU3hQUVdsS09VSjNRaXhYUVdwS09FSXNSMEZwU21oQ0xHbENRVUZUTzBGQlEzSkNMRkZCUVUxRExGVkJRVlVzUlVGQmFFSTdRVUZEUVN4VlFVRkxPVU1zVTBGQlRDeERRVUZsSzBNc1QwRkJaaXhEUVVGMVFpeFZRVUZEWWl4UFFVRkVMRVZCUVZWaUxFdEJRVllzUlVGQmIwSTdRVUZEZWtNc1ZVRkJTV0VzVVVGQlVVTXNTMEZCVWl4TFFVRnJRa0VzUzBGQmRFSXNSVUZCTmtKWExGRkJRVkV2UWl4SlFVRlNMRU5CUVdGTkxFdEJRV0k3UVVGRE9VSXNTMEZHUkRzN1FVRkdjVUk3UVVGQlFUdEJRVUZCT3p0QlFVRkJPMEZCVFhKQ0xEUkNRVUZyUW5sQ0xFOUJRV3hDTEcxSlFVRXlRanRCUVVGQkxGbEJRV3hDZWtJc1MwRkJhMEk3TzBGQlEzcENMR05CUVV0eVFpeFRRVUZNTEVOQlFXVjFRaXhOUVVGbUxFTkJRWE5DUml4TFFVRjBRaXhGUVVFMlFpeERRVUUzUWp0QlFVTkVPMEZCVW05Q08wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZUZEVJc1IwRXhTalpDT3p0QlFVRkJMRTlCSzBvNVFqSkNMRk5CTDBvNFFpeEhRU3RLYkVJc1dVRkJUVHRCUVVOb1FpeFZRVUZMYUVRc1UwRkJUQ3hIUVVGcFFpeEZRVUZxUWp0QlFVTkVMRWRCYWtzMlFqczdRVUZCUVN4UFFUQkxPVUpwUkN4TFFURkxPRUlzUjBFd1MzUkNMRzlDUVVGWk8wRkJRMnhDTEZGQlFVMURMRmxCUVZrc01rSkJRV3hDTzBGQlEwRXNWVUZCUzJwRUxGTkJRVXdzUTBGQlpXTXNTVUZCWml4RFFVRnZRanRCUVVOc1FqQkNMRlZCUVVsVExGTkJSR003UVVGRmJFSndRanRCUVVaclFpeExRVUZ3UWpzN1FVRkxRU3hYUVVGUGIwSXNVMEZCVUR0QlFVTkVMRWRCYkV3MlFqczdRVUZCUVN4UFFYbE1PVUpETEU5QmVrdzRRaXhIUVhsTWNFSXNjVUpCUVdFN1FVRkRja0lzVVVGQlRUbENMRkZCUVZFc1RVRkJTM0JDTEZOQlFVd3NRMEZCWlRCRExGTkJRV1lzUTBGQmVVSTdRVUZCUVN4aFFVRlhaQ3hSUVVGUldTeEZRVUZTTEV0QlFXVlRMRk5CUVRGQ08wRkJRVUVzUzBGQmVrSXNRMEZCWkRzN1FVRkZRU3hSUVVGSk4wSXNWVUZCVlN4RFFVRkRMRU5CUVdZc1JVRkJhMElzVFVGQlRTeEpRVUZKZFVJc1MwRkJTaXhEUVVGVkxIbENRVUY1UWswc1UwRkJia01zUTBGQlRqczdRVUZGYkVJc1ZVRkJTMnBFTEZOQlFVd3NRMEZCWlhOQ0xFMUJRV1lzUTBGQmMwSkdMRXRCUVhSQ0xFVkJRVFpDTEVOQlFUZENPMEZCUTBRc1IwRXZURFpDT3p0QlFVRkJMRTlCYjAwNVFpdENMRlZCY0UwNFFpeEhRVzlOYWtJc1dVRkJUVHRCUVVOcVFpeFZRVUZMYmtRc1UwRkJUQ3hIUVVGcFFpeEZRVUZxUWp0QlFVTkVMRWRCZEUwMlFqczdRVUZCUVN4UFFUWk5PVUp2UkN4WFFUZE5PRUlzUjBFMlRXaENMR2xDUVVGVE8wRkJRM0pDTEZWQlFVdDZSQ3hoUVVGTUxFZEJRWEZDZFVNc1MwRkJja0k3UVVGRFJDeEhRUzlOTmtJN08wRkJRVUVzVDBGdlRqbENiVUlzU1VGd1RqaENMRWRCYjA1MlFpeFpRVUZOTzBGQlExZ3NVVUZCU1N4RFFVRkRMRTFCUVVzelJDeFJRVUZXTEVWQlFXOUNPMEZCUTJ4Q0xGbEJRVXMwUkN4UlFVRk1MRU5CUVdORExHMUNRVUZrTEVOQlFXdERMRk5CUVd4RExFVkJRVFpETEUxQlFVdHNSQ3hWUVVGc1JEdEJRVU5CTEZsQlFVdHBSQ3hSUVVGTUxFTkJRV05ETEcxQ1FVRmtMRU5CUVd0RExFOUJRV3hETEVWQlFUSkRMRTFCUVV0d1F5eFJRVUZvUkR0QlFVTkJMRmxCUVV0dFF5eFJRVUZNTEVOQlFXTkRMRzFDUVVGa0xFTkJRV3RETEU5QlFXeERMRVZCUVRKRExFMUJRVXRvUXl4VlFVRm9SRHRCUVVOQkxGbEJRVXNyUWl4UlFVRk1MRU5CUVdORExHMUNRVUZrTEVOQlFXdERMRTFCUVd4RExFVkJRVEJETEUxQlFVdG9ReXhWUVVFdlF6czdRVUZGUVN4WlFVRkxRU3hWUVVGTU96dEJRVVZCTEZsQlFVczNRaXhSUVVGTUxFZEJRV2RDTEVsQlFXaENPMEZCUTBRN1FVRkRSaXhIUVM5T05rSTdPMEZCUVVFc1QwRnZUemxDT0VRc1RVRndUemhDTEVkQmIwOXlRaXhaUVVGTk8wRkJRMklzVVVGQlNTeE5RVUZMT1VRc1VVRkJWQ3hGUVVGdFFqdEJRVU5xUWl4WlFVRkxORVFzVVVGQlRDeERRVUZqUnl4blFrRkJaQ3hEUVVFclFpeFRRVUV2UWl4RlFVRXdReXhOUVVGTGNFUXNWVUZCTDBNN1FVRkRRU3haUVVGTGFVUXNVVUZCVEN4RFFVRmpSeXhuUWtGQlpDeERRVUVyUWl4UFFVRXZRaXhGUVVGM1F5eE5RVUZMZEVNc1VVRkJOME03UVVGRFFTeFpRVUZMYlVNc1VVRkJUQ3hEUVVGalJ5eG5Ra0ZCWkN4RFFVRXJRaXhQUVVFdlFpeEZRVUYzUXl4TlFVRkxiRU1zVlVGQk4wTTdRVUZEUVN4WlFVRkxLMElzVVVGQlRDeERRVUZqUnl4blFrRkJaQ3hEUVVFclFpeE5RVUV2UWl4RlFVRjFReXhOUVVGTGJFTXNWVUZCTlVNN08wRkJSVUVzV1VGQlN6ZENMRkZCUVV3c1IwRkJaMElzUzBGQmFFSTdRVUZEUkR0QlFVTkdMRWRCTjA4MlFqczdRVUZCUVN4UFFXdFFPVUpuUlN4TFFXeFFPRUlzUjBGclVIUkNMRmxCUVUwN1FVRkRXaXhWUVVGTGJrTXNWVUZCVER0QlFVTkJMRlZCUVV0M1FpeFRRVUZNTzBGQlEwRXNWVUZCUzBrc1ZVRkJURHRCUVVORUxFZEJkRkEyUWpzN1FVRkROVUlzVFVGQlNTeERRVUZETTBRc1QwRkJUQ3hGUVVGalFTeFZRVUZWYlVVc1RVRkJWanRCUVVOa0xFOUJRVXRNTEZGQlFVd3NSMEZCWjBJNVJDeFBRVUZvUWpzN1FVRkZRVzlGTEZOQlFVOURMRTFCUVZBc1EwRkJZeXhMUVVGTGNFVXNUMEZCYmtJc1JVRkJORUpCTEU5QlFUVkNPenRCUVVWQkxFOUJRVXNyUkN4TlFVRk1PMEZCUTBRN08wRkJNRVpFT3pzN096czdPenM3T3p0QlFTdENRVHM3T3pzN096dEJRV0ZCT3pzN096czdRVUZsUVRzN096czdRVUZQUVRzN096czdPenM3TzBGQmFVSkJPenM3T3pzN08wRkJZVUU3T3pzN08wRkJUMEU3T3pzN096czdRVUZUUVRzN096czdRVUZuUWtFN096czdPMEZCWTBFN096czdPMEZCYWxGSmFrVXNTU3hEUVVWSFN5eGhMRWRCUVdkQ0xHVTdhMEpCZVZGV1RDeEpPenM3T3pzN096czdPenM3T3pzN096czdhMEpETlZCQkxGVkJRVk00UXl4UlFVRlVMRVZCUVcxQ08wRkJRMmhETEUxQlFVa3NRMEZCUTNsQ0xFMUJRVTFETEU5QlFVNHNRMEZCWXpGQ0xGRkJRV1FzUTBGQlJDeEpRVUUwUWtFc1UwRkJVek5DTEUxQlFWUXNTMEZCYjBJc1EwRkJjRVFzUlVGRFJTeE5RVUZOTEVsQlFVbHBReXhMUVVGS0xFTkJRVlVzYzBOQlFYTkRUaXhSUVVGb1JDeERRVUZPT3p0QlFVVkdMRTFCUVVreVFpeGhRVUZoTEU5QlFVOHpRaXhUUVVGVExFTkJRVlFzUTBGQlVDeExRVUYxUWl4UlFVRjRRenM3UVVGRlFTeE5RVUZKTWtJc1kwRkJZek5DTEZOQlFWTXpRaXhOUVVGVUxFdEJRVzlDTEVOQlFYUkRMRVZCUVhsRE8wRkJRM1pETWtJc1pVRkJWMEVzVTBGQlV5eERRVUZVTEVOQlFWZzdRVUZEUVRKQ0xHbENRVUZoTEV0QlFXSTdRVUZEUkRzN1FVRkZSQ3hOUVVGSlFTeFZRVUZLTEVWQlFXZENReXhqUVVGak5VSXNVVUZCWkN4RlFVRm9RaXhMUVVOTE5rSXNWMEZCVnpkQ0xGRkJRVmc3TzBGQlJVd3NVMEZCVDBFc1VVRkJVRHRCUVVORUxFTTdPMEZCY2tSRUxGTkJRVk0wUWl4aFFVRlVMRU5CUVhWQ2VrTXNVVUZCZGtJc1JVRkJhVU03UVVGREwwSXNUMEZCU3l4SlFVRkpVU3hKUVVGSkxFTkJRV0lzUlVGQlowSkJMRWxCUVVsU0xGTkJRVk5rTEUxQlFUZENMRVZCUVhGRGMwSXNSMEZCY2tNc1JVRkJNRU03UVVGRGVFTXNVVUZCU1N4RFFVRkRPRUlzVFVGQlRVTXNUMEZCVGl4RFFVRmpka01zVTBGQlUxRXNRMEZCVkN4RFFVRmtMRU5CUVV3c1JVRkRSU3hOUVVGTkxFbEJRVWxYTEV0QlFVb3NaME5CUVhWRGJrSXNVVUZCZGtNc1QwRkJUanM3UVVGRlJqQkRMR1ZCUVZjeFF5eFRRVUZUVVN4RFFVRlVMRU5CUVZnN1FVRkRSRHRCUVVOR096dEJRVVZFTEZOQlFWTnJReXhWUVVGVUxFTkJRVzlDUXl4TFFVRndRaXhGUVVFeVFqdEJRVU42UWl4UFFVRkxMRWxCUVVsdVF5eEpRVUZKTEVOQlFXSXNSVUZCWjBKQkxFbEJRVWx0UXl4TlFVRk5la1FzVFVGQk1VSXNSVUZCYTBOelFpeEhRVUZzUXl4RlFVRjFRenRCUVVOeVF5eFJRVUZKTEU5QlFVOXRReXhOUVVGTmJrTXNRMEZCVGl4RFFVRlFMRXRCUVc5Q0xGRkJRWGhDTEVWQlEwVXNUVUZCVFN4SlFVRkpWeXhMUVVGS0xEWkNRVUZ2UTNkQ0xFdEJRWEJETEU5QlFVNDdPMEZCUlVZc1VVRkJUVU1zWVVGQllVTXNVMEZCVTBZc1RVRkJUVzVETEVOQlFVNHNRMEZCVkN4RFFVRnVRanRCUVVOQkxGRkJRVWtzUTBGQlEyOURMRlZCUVV3c1JVRkRSU3hOUVVGTkxFbEJRVWw2UWl4TFFVRktMR3RDUVVGNVFubENMRlZCUVhwQ0xESkNRVUY1UkVRc1MwRkJla1FzVDBGQlRqczdRVUZGUmtFc1ZVRkJUVzVETEVOQlFVNHNTVUZCVjI5RExGVkJRVmc3UVVGRFJEdEJRVU5FUkN4UlFVRk5jRVFzU1VGQlRqdEJRVU5FT3p0QlFVVkVMRk5CUVZOelJDeFJRVUZVTEVOQlFXdENOMFFzUjBGQmJFSXNSVUZCZFVJN1FVRkRja0pCTEZGQlFVMUJMRWxCUVVrNFJDeFBRVUZLTEVOQlFWa3NUVUZCV2l4RlFVRnZRaXhIUVVGd1FpeERRVUZPTzBGQlEwRXNUVUZCU1RsRUxGRkJRVkVzUjBGQldpeEZRVUZwUWtFc1RVRkJUU3hQUVVGT08wRkJRMnBDUVN4UlFVRk5RU3hKUVVGSkswUXNTVUZCU2l4RlFVRk9PMEZCUTBFc1RVRkJTUzlFTEVsQlFVbEZMRTFCUVVvc1MwRkJaU3hEUVVGdVFpeEZRVUZ6UWtZc1RVRkJUVUVzU1VGQlNVY3NWMEZCU2l4RlFVRk9PMEZCUTNSQ0xGTkJRVTlJTEVkQlFWQTdRVUZEUkRzN1FVRkZSRHM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08ydENRM3BDWlN4WlFVRlhPMEZCUTNoQ0xGTkJRVTluUlN4UlFVRlFPMEZCUTBRc1F6czdRVUZTUkN4SlFVRkpRU3hUUVVGVExFTkJRV0k3TzBGQlJVRTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08zbERRMFpUUXl4UE96czdPenM3T3pzN2EwUkJRMEZCTEU4N096czdPenM3T3pzclEwRkRRVUVzVHpzN096czdPenM3TzJ0RVFVTkJRU3hQT3pzN096czdPenM3YzBSQlEwRkJMRTg3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN2EwSkRhVUpOTEZWQlFWTndReXhSUVVGVUxFVkJRVzFDTzBGQlEyaERMRTFCUVVrc1QwRkJUMEVzVVVGQlVDeExRVUZ2UWl4UlFVRjRRaXhGUVVORkxFMUJRVTBzU1VGQlNVMHNTMEZCU2l4RFFVRlZMSFZEUVVGMVEwNHNVVUZCYWtRc1EwRkJUanM3UVVGRlJrRXNZVUZCVjBFc1UwRkJVMmxETEU5QlFWUXNRMEZCYVVJc1RVRkJha0lzUlVGQmVVSXNSVUZCZWtJc1EwRkJXRHM3UVVGRlFTeE5RVUZKTEU5QlFVOXFReXhSUVVGUUxFdEJRVzlDTEZGQlFYQkNMRWxCUVdkRFFTeFRRVUZUTTBJc1RVRkJWQ3hMUVVGdlFpeERRVUY0UkN4RlFVTkZMRTFCUVUwc1NVRkJTV2xETEV0QlFVb3NRMEZCVlN4clJFRkJhMFJPTEZGQlFUVkVMRU5CUVU0N08wRkJSVVlzVFVGQlNUZENMRTFCUVUwc1JVRkJWanRCUVVOQkxFMUJRVWt5UkN4UlFVRlJMRVZCUVZvN1FVRkRRU3hOUVVGTk0wTXNWMEZCVnl4RlFVRnFRanM3UVVGRlFTeFBRVUZMTEVsQlFVbFJMRWxCUVVrc1EwRkJZaXhGUVVGblFrRXNTVUZCU1Vzc1UwRkJVek5DTEUxQlFUZENMRVZCUVhGRGMwSXNSMEZCY2tNc1JVRkJNRU03UVVGRGVFTXNVVUZCVFRCRExFbEJRVWx5UXl4VFFVRlRjME1zVFVGQlZDeERRVUZuUWpORExFTkJRV2hDTEVOQlFWWTdRVUZEUVN4UlFVRkpMRU5CUVVONFFpeEpRVUZKUlN4TlFVRlVMRVZCUVdsQ08wRkJRMlpHTEZWQlFVbE5MRWxCUVVvc1EwRkJVelJFTEVOQlFWUTdRVUZEUkN4TFFVWkVMRTFCUlU4N1FVRkRUQ3hWUVVGSlFTeE5RVUZOUlN4WlFVRldMRVZCUVhkQ08wRkJRM1JDVkN4alFVRk5ja1FzU1VGQlRpeERRVUZYSzBRc1YwRkJWM0pGTEVkQlFWZ3NRMEZCV0R0QlFVTkJRU3hqUVVGTkxFVkJRVTQ3UVVGRFJDeFBRVWhFTEUxQlIwOHNTVUZCU1d0RkxFMUJRVTFKTEZkQlFWWXNSVUZCZFVJN1FVRkROVUpZTEdOQlFVMXlSQ3hKUVVGT0xFTkJRVmNyUkN4WFFVRlhja1VzUjBGQldDeERRVUZZTzBGQlEwRkJMR05CUVUwc1JVRkJUanRCUVVOQk1rUXNZMEZCVFhCRUxFbEJRVTQ3UVVGRFFWTXNhVUpCUVZOV0xFbEJRVlFzUTBGQlkzRkVMRXRCUVdRN1FVRkRRVUVzWjBKQlFWRXNSVUZCVWp0QlFVTkVMRTlCVGswc1RVRk5RVHRCUVVOTU0wUXNXVUZCU1Uwc1NVRkJTaXhEUVVGVE5FUXNRMEZCVkR0QlFVTkVPMEZCUTBZN1FVRkRSanM3UVVGRlJDeE5RVUZKYkVVc1NVRkJTVVVzVFVGQlVpeEZRVUZuUWp0QlFVTmtlVVFzVlVGQlRYSkVMRWxCUVU0c1EwRkJWeXRFTEZkQlFWZHlSU3hIUVVGWUxFTkJRVmc3UVVGRFFUSkVMRlZCUVUxd1JDeEpRVUZPTzBGQlEwRlRMR0ZCUVZOV0xFbEJRVlFzUTBGQlkzRkVMRXRCUVdRN1FVRkRSQ3hIUVVwRUxFMUJTVTg3UVVGRFRDeFZRVUZOTEVsQlFVbDRRaXhMUVVGS0xFTkJRVlVzTWtOQlFUSkRUaXhSUVVGeVJDeERRVUZPTzBGQlEwUTdPMEZCZGtNclFqdEJRVUZCTzBGQlFVRTdPMEZCUVVFN1FVRjVRMmhETEhsQ1FVRnJRbUlzVVVGQmJFSXNPRWhCUVRSQ08wRkJRVUVzVlVGQmJrSXlReXhOUVVGdFFqczdRVUZETVVJc1ZVRkJUVmtzWVVGQllVTXNZMEZCWTJJc1RVRkJaQ3hEUVVGdVFqdEJRVU5CTEZWQlFVbFpMRmRCUVZkeVJTeE5RVUZZTEVkQlFXOUNMRU5CUVhoQ0xFVkJRMFVzVFVGQlRTeEpRVUZKYVVNc1MwRkJTaXhEUVVGVkxIVkRRVUYxUTA0c1VVRkJha1FzUTBGQlRqdEJRVU5JTzBGQk4wTXJRanRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCT3p0QlFTdERhRU1zVFVGQlNXSXNVMEZCVTJRc1RVRkJWQ3hMUVVGdlFpeERRVUY0UWl4RlFVRXlRaXhQUVVGUFl5eFRRVUZUTEVOQlFWUXNRMEZCVUN4RFFVRXpRaXhMUVVOTExFOUJRVTlCTEZGQlFWQTdRVUZEVGl4RE96czdPMEZCZEVWRUxFbEJRVTF2UkN4bFFVRmxMRWRCUVhKQ08wRkJRMEVzU1VGQlRVVXNZMEZCWXl4SFFVRndRanM3UVVGRlFTeFRRVUZUUlN4aFFVRlVMRU5CUVhWQ1lpeExRVUYyUWl4RlFVRTRRanRCUVVNMVFpeE5RVUZOWXl4UlFVRlJMRk5CUVZKQkxFdEJRVkU3UVVGQlFTeFhRVU5hWkN4TlFVRk5aU3hOUVVGT0xFTkJRV0VzVlVGQlEwTXNSVUZCUkN4RlFVRkxReXhGUVVGTU8wRkJRVUVzWVVGQldYaENMRTlCUVU5RExFMUJRVkFzUTBGQlkzTkNMRVZCUVdRc2MwSkJRWEZDUXl4RlFVRnlRaXhGUVVFd1FpeERRVUZEUkN4SFFVRkhReXhGUVVGSUxFdEJRVlVzUTBGQldDeEpRVUZuUWl4RFFVRXhReXhGUVVGYU8wRkJRVUVzUzBGQllpeEZRVUY1UlN4RlFVRjZSU3hEUVVSWk8wRkJRVUVzUjBGQlpEdEJRVVZCTEUxQlFVMU1MR0ZCUVdFc1UwRkJZa0VzVlVGQllUdEJRVUZCTEZkQlFWRnVRaXhQUVVGUGVVSXNTVUZCVUN4RFFVRlpReXhKUVVGYUxFVkJRV3RDYkVZc1RVRkJiRUlzUTBGQmVVSTdRVUZCUVN4aFFVRkxhMFlzUzBGQlMwTXNRMEZCVEN4SlFVRlZMRU5CUVdZN1FVRkJRU3hMUVVGNlFpeERRVUZTTzBGQlFVRXNSMEZCYmtJN1FVRkRRU3hUUVVGUFVpeFhRVUZYUlN4TlFVRk5aQ3hMUVVGT0xFTkJRVmdzUTBGQlVEdEJRVU5FT3p0QlFVVkVMRk5CUVZOVkxGVkJRVlFzUTBGQmIwSnlSU3hIUVVGd1FpeEZRVUY1UWp0QlFVTjJRa0VzVVVGQlRVRXNTVUZCU1dkR0xFbEJRVW9zUTBGQlV5eEZRVUZVTEVOQlFVNDdRVUZEUVN4TlFVRkphRVlzU1VGQlNVVXNUVUZCU2l4TFFVRmxMRU5CUVc1Q0xFVkJRWE5DUml4TlFVRk5RU3hKUVVGSlJ5eFhRVUZLTEVWQlFVNDdRVUZEZEVJc1UwRkJUMGdzUjBGQlVEdEJRVU5FT3p0QlFVVkVPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzJ0Q1ExSmxMRlZCUVZNMlFpeFJRVUZVTEVWQlFXMUNPMEZCUTJoRExFMUJRVWtzUTBGQlEzbENMRTFCUVUxRExFOUJRVTRzUTBGQll6RkNMRkZCUVdRc1EwRkJUQ3hGUVVORkxFMUJRVTBzU1VGQlNVMHNTMEZCU2l4RFFVRlZMREJEUVVFd1EwNHNVVUZCY0VRc1EwRkJUanM3UVVGRlJpeE5RVUZKTWtJc1lVRkJZU3hQUVVGUE0wSXNVMEZCVXl4RFFVRlVMRU5CUVZBc1MwRkJkVUlzVVVGQmVFTTdPMEZCUlVFc1RVRkJTU3hEUVVGRE1rSXNWVUZCVEN4RlFVRnBRanRCUVVObUxGZEJRVTh6UWl4VFFVRlRiVVFzU1VGQlZDeERRVUZqV2l4WlFVRmtMRU5CUVZBN1FVRkRSQ3hIUVVaRUxFMUJSVTg3UVVGRFRDeFhRVUZQZGtNc1UwRkJVMjlFTEVkQlFWUXNRMEZCWVR0QlFVRkJMR0ZCUVZGRExFdEJRVXRHTEVsQlFVd3NRMEZCVlZvc1dVRkJWaXhEUVVGU08wRkJRVUVzUzBGQllpeEZRVUU0UTFrc1NVRkJPVU1zUTBGQmJVUldMRmRCUVc1RUxFTkJRVkE3UVVGRFJEdEJRVU5HTEVNN08wRkJia0pFTEVsQlFVMUdMR1ZCUVdVc1MwRkJja0k3UVVGRFFTeEpRVUZOUlN4alFVRmpMRXRCUVhCQ096dEJRVVZCSWl3aVptbHNaU0k2SW10bGVXTjFkSE11YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SW9ablZ1WTNScGIyNGdkMlZpY0dGamExVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0b2NtOXZkQ3dnWm1GamRHOXllU2tnZTF4dVhIUnBaaWgwZVhCbGIyWWdaWGh3YjNKMGN5QTlQVDBnSjI5aWFtVmpkQ2NnSmlZZ2RIbHdaVzltSUcxdlpIVnNaU0E5UFQwZ0oyOWlhbVZqZENjcFhHNWNkRngwYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtWVdOMGIzSjVLQ2s3WEc1Y2RHVnNjMlVnYVdZb2RIbHdaVzltSUdSbFptbHVaU0E5UFQwZ0oyWjFibU4wYVc5dUp5QW1KaUJrWldacGJtVXVZVzFrS1Z4dVhIUmNkR1JsWm1sdVpTaGJYU3dnWm1GamRHOXllU2s3WEc1Y2RHVnNjMlVnYVdZb2RIbHdaVzltSUdWNGNHOXlkSE1nUFQwOUlDZHZZbXBsWTNRbktWeHVYSFJjZEdWNGNHOXlkSE5iWENKclpYbGpkWFJ6WENKZElEMGdabUZqZEc5eWVTZ3BPMXh1WEhSbGJITmxYRzVjZEZ4MGNtOXZkRnRjSW10bGVXTjFkSE5jSWwwZ1BTQm1ZV04wYjNKNUtDazdYRzU5S1NoM2FXNWtiM2NzSUdaMWJtTjBhVzl1S0NrZ2UxeHVjbVYwZFhKdUlDSXNJaUJjZEM4dklGUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkSFpoY2lCcGJuTjBZV3hzWldSTmIyUjFiR1Z6SUQwZ2UzMDdYRzVjYmlCY2RDOHZJRlJvWlNCeVpYRjFhWEpsSUdaMWJtTjBhVzl1WEc0Z1hIUm1kVzVqZEdsdmJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRzF2WkhWc1pVbGtLU0I3WEc1Y2JpQmNkRngwTHk4Z1EyaGxZMnNnYVdZZ2JXOWtkV3hsSUdseklHbHVJR05oWTJobFhHNGdYSFJjZEdsbUtHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZEtTQjdYRzRnWEhSY2RGeDBjbVYwZFhKdUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtVjRjRzl5ZEhNN1hHNGdYSFJjZEgxY2JpQmNkRngwTHk4Z1EzSmxZWFJsSUdFZ2JtVjNJRzF2WkhWc1pTQW9ZVzVrSUhCMWRDQnBkQ0JwYm5SdklIUm9aU0JqWVdOb1pTbGNiaUJjZEZ4MGRtRnlJRzF2WkhWc1pTQTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRJRDBnZTF4dUlGeDBYSFJjZEdrNklHMXZaSFZzWlVsa0xGeHVJRngwWEhSY2RHdzZJR1poYkhObExGeHVJRngwWEhSY2RHVjRjRzl5ZEhNNklIdDlYRzRnWEhSY2RIMDdYRzVjYmlCY2RGeDBMeThnUlhobFkzVjBaU0IwYUdVZ2JXOWtkV3hsSUdaMWJtTjBhVzl1WEc0Z1hIUmNkRzF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbU5oYkd3b2JXOWtkV3hsTG1WNGNHOXlkSE1zSUcxdlpIVnNaU3dnYlc5a2RXeGxMbVY0Y0c5eWRITXNJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThwTzF4dVhHNGdYSFJjZEM4dklFWnNZV2NnZEdobElHMXZaSFZzWlNCaGN5QnNiMkZrWldSY2JpQmNkRngwYlc5a2RXeGxMbXdnUFNCMGNuVmxPMXh1WEc0Z1hIUmNkQzh2SUZKbGRIVnliaUIwYUdVZ1pYaHdiM0owY3lCdlppQjBhR1VnYlc5a2RXeGxYRzRnWEhSY2RISmxkSFZ5YmlCdGIyUjFiR1V1Wlhod2IzSjBjenRjYmlCY2RIMWNibHh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaWE1nYjJKcVpXTjBJQ2hmWDNkbFluQmhZMnRmYlc5a2RXeGxjMTlmS1Z4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV0SUQwZ2JXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVZeUE5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdSbFptbHVaU0JuWlhSMFpYSWdablZ1WTNScGIyNGdabTl5SUdoaGNtMXZibmtnWlhod2IzSjBjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtJRDBnWm5WdVkzUnBiMjRvWlhod2IzSjBjeXdnYm1GdFpTd2daMlYwZEdWeUtTQjdYRzRnWEhSY2RHbG1LQ0ZmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04b1pYaHdiM0owY3l3Z2JtRnRaU2twSUh0Y2JpQmNkRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dibUZ0WlN3Z2V5QmxiblZ0WlhKaFlteGxPaUIwY25WbExDQm5aWFE2SUdkbGRIUmxjaUI5S1R0Y2JpQmNkRngwZlZ4dUlGeDBmVHRjYmx4dUlGeDBMeThnWkdWbWFXNWxJRjlmWlhOTmIyUjFiR1VnYjI0Z1pYaHdiM0owYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV5SUQwZ1puVnVZM1JwYjI0b1pYaHdiM0owY3lrZ2UxeHVJRngwWEhScFppaDBlWEJsYjJZZ1UzbHRZbTlzSUNFOVBTQW5kVzVrWldacGJtVmtKeUFtSmlCVGVXMWliMnd1ZEc5VGRISnBibWRVWVdjcElIdGNiaUJjZEZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnVTNsdFltOXNMblJ2VTNSeWFXNW5WR0ZuTENCN0lIWmhiSFZsT2lBblRXOWtkV3hsSnlCOUtUdGNiaUJjZEZ4MGZWeHVJRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dKMTlmWlhOTmIyUjFiR1VuTENCN0lIWmhiSFZsT2lCMGNuVmxJSDBwTzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnWTNKbFlYUmxJR0VnWm1GclpTQnVZVzFsYzNCaFkyVWdiMkpxWldOMFhHNGdYSFF2THlCdGIyUmxJQ1lnTVRvZ2RtRnNkV1VnYVhNZ1lTQnRiMlIxYkdVZ2FXUXNJSEpsY1hWcGNtVWdhWFJjYmlCY2RDOHZJRzF2WkdVZ0ppQXlPaUJ0WlhKblpTQmhiR3dnY0hKdmNHVnlkR2xsY3lCdlppQjJZV3gxWlNCcGJuUnZJSFJvWlNCdWMxeHVJRngwTHk4Z2JXOWtaU0FtSURRNklISmxkSFZ5YmlCMllXeDFaU0IzYUdWdUlHRnNjbVZoWkhrZ2JuTWdiMkpxWldOMFhHNGdYSFF2THlCdGIyUmxJQ1lnT0h3eE9pQmlaV2hoZG1VZ2JHbHJaU0J5WlhGMWFYSmxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuUWdQU0JtZFc1amRHbHZiaWgyWVd4MVpTd2diVzlrWlNrZ2UxeHVJRngwWEhScFppaHRiMlJsSUNZZ01Ta2dkbUZzZFdVZ1BTQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLSFpoYkhWbEtUdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlEZ3BJSEpsZEhWeWJpQjJZV3gxWlR0Y2JpQmNkRngwYVdZb0tHMXZaR1VnSmlBMEtTQW1KaUIwZVhCbGIyWWdkbUZzZFdVZ1BUMDlJQ2R2WW1wbFkzUW5JQ1ltSUhaaGJIVmxJQ1ltSUhaaGJIVmxMbDlmWlhOTmIyUjFiR1VwSUhKbGRIVnliaUIyWVd4MVpUdGNiaUJjZEZ4MGRtRnlJRzV6SUQwZ1QySnFaV04wTG1OeVpXRjBaU2h1ZFd4c0tUdGNiaUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXlLRzV6S1R0Y2JpQmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHNXpMQ0FuWkdWbVlYVnNkQ2NzSUhzZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN3Z2RtRnNkV1U2SUhaaGJIVmxJSDBwTzF4dUlGeDBYSFJwWmlodGIyUmxJQ1lnTWlBbUppQjBlWEJsYjJZZ2RtRnNkV1VnSVQwZ0ozTjBjbWx1WnljcElHWnZjaWgyWVhJZ2EyVjVJR2x1SUhaaGJIVmxLU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1Rb2JuTXNJR3RsZVN3Z1puVnVZM1JwYjI0b2EyVjVLU0I3SUhKbGRIVnliaUIyWVd4MVpWdHJaWGxkT3lCOUxtSnBibVFvYm5Wc2JDd2dhMlY1S1NrN1hHNGdYSFJjZEhKbGRIVnliaUJ1Y3p0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdkbGRFUmxabUYxYkhSRmVIQnZjblFnWm5WdVkzUnBiMjRnWm05eUlHTnZiWEJoZEdsaWFXeHBkSGtnZDJsMGFDQnViMjR0YUdGeWJXOXVlU0J0YjJSMWJHVnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtNGdQU0JtZFc1amRHbHZiaWh0YjJSMWJHVXBJSHRjYmlCY2RGeDBkbUZ5SUdkbGRIUmxjaUE5SUcxdlpIVnNaU0FtSmlCdGIyUjFiR1V1WDE5bGMwMXZaSFZzWlNBL1hHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBSR1ZtWVhWc2RDZ3BJSHNnY21WMGRYSnVJRzF2WkhWc1pWc25aR1ZtWVhWc2RDZGRPeUI5SURwY2JpQmNkRngwWEhSbWRXNWpkR2x2YmlCblpYUk5iMlIxYkdWRmVIQnZjblJ6S0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsT3lCOU8xeHVJRngwWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUW9aMlYwZEdWeUxDQW5ZU2NzSUdkbGRIUmxjaWs3WEc0Z1hIUmNkSEpsZEhWeWJpQm5aWFIwWlhJN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd4Y2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlBOUlHWjFibU4wYVc5dUtHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcElIc2djbVYwZFhKdUlFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaHZZbXBsWTNRc0lIQnliM0JsY25SNUtUc2dmVHRjYmx4dUlGeDBMeThnWDE5M1pXSndZV05yWDNCMVlteHBZMTl3WVhSb1gxOWNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNDQTlJRndpWENJN1hHNWNibHh1SUZ4MEx5OGdURzloWkNCbGJuUnllU0J0YjJSMWJHVWdZVzVrSUhKbGRIVnliaUJsZUhCdmNuUnpYRzRnWEhSeVpYUjFjbTRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuTWdQU0JjSWk0dmMzSmpMMmx1WkdWNExtcHpYQ0lwTzF4dUlpd2lhVzF3YjNKMElHZGxibVZ5WVhSbFNXUWdabkp2YlNBbkxpOW5aVzVsY21GMFpVbGtKMXh1YVcxd2IzSjBJR05zWldGdVUyaHZjblJqZFhRZ1puSnZiU0FuTGk5amJHVmhibE5vYjNKMFkzVjBKMXh1YVcxd2IzSjBJSEJoY25ObFUyaHZjblJqZFhRZ1puSnZiU0FuTGk5d1lYSnpaVk5vYjNKMFkzVjBKMXh1YVcxd2IzSjBJSE4wY21sdVoybG1lVk5vYjNKMFkzVjBJR1p5YjIwZ0p5NHZjM1J5YVc1bmFXWjVVMmh2Y25SamRYUW5YRzVjYmk4cUtseHVJQ29nVkdobElHMWhhVzRnWTJ4aGMzTWdkRzhnWVdOalpYTnpJSFJvWlNCbVpXRjBkWEpsY3lCdlppQjBhR1VnUzJWNVEzVjBjeUJzYVdKeVlYSjVMbHh1SUNvZ1FIQmhjbUZ0SUh0SVZFMU1SV3hsYldWdWRIMGdaV3hsYldWdWRDQlVhR1VnU0ZSTlRDQmxiR1Z0Wlc1MElIUm9ZWFFnYzJodmRXeGtJR3hwYzNSbGJpQjBiMXh1SUNvZ0lDQnJaWGxpYjJGeVpDQnphRzl5ZEdOMWRITWdLR2xtSUc1dmRDQndjbTkyYVdSbFpDQjBhR1Z1SUZkcGJtUnZkeUJ2WW1wbFkzUWdhWE1nZFhObFpDa3VYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnYjNCMGFXOXVjeUF0SUVGa1pHbDBhVzl1WVd3Z2IzQjBhVzl1Y3lBb2IzQjBhVzl1WVd3cExseHVJQ29nUUhCaGNtRnRJSHRpYjI5c1pXRnVmU0J2Y0hScGIyNXpMblJ5YVdkblpYSlBibU5sVUdWeVMyVjVJQzBnU1dZZ1lTQnJaWGtnYVhNZ2EyVndkQ0JrYjNkdUlIUm9aVzVjYmlBcUlDQWdkR2hsSUhOb2IzSjBZM1YwSUhkcGJHd2dZbVVnZEhKcFoyZGxjbVZrSUcxMWJIUnBjR3hsSUhScGJXVnpJSGRvWlc0Z2MyVjBJSFJ2SUdaaGJITmxJR0Z1WkZ4dUlDb2dJQ0J2Ym14NUlHOXVZMlVnZDJobGJpQnpaWFFnZEc4Z2RISjFaU0FvWkdWbVlYVnNkRG9nWm1Gc2MyVXBYRzRnS2lCQWNHRnlZVzBnZTJKdmIyeGxZVzU5SUc5d2RHbHZibk11ZFhObFEyOWtaVWx1YzNSbFlXUkxaWGtnTFNCSlppQnpaWFFnZEc4Z1ptRnNjMlVnZEdobGJseHVJQ29nSUNCTFpYbGliMkZ5WkVWMlpXNTBMbXRsZVNCcGN5QmxkbUZzZFdGMFpXUWdabTl5SUhSeWFXZG5aWEpwYm1jZ2MyaHZjblJqZFhSekxDQnZkR2hsY25kcGMyVmNiaUFxSUNBZ1MyVjVZbTloY21SRmRtVnVkQzVqYjJSbElDaGtaV1poZFd4ME9pQm1ZV3h6WlNsY2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQnZjSFJwYjI1ekxtMWhlRk5sY1hWbGJtTmxUR1Z1WjNSb0lDMGdWR2hsSUcxaGVHbHRkVzBnYzJWeGRXVnVZMlVnYjJaY2JpQXFJQ0FnYTJWNUlHOXlJR052YldKdmN5QjBhR0YwSUhOb2IzVnNaQ0JpWlNCMGNtRmphMlZrSUNoa1pXWmhkV3gwT2lBektWeHVJQ29nUUhCaGNtRnRJSHRHZFc1amRHbHZibjBnYjNCMGFXOXVjeTVtYVd4MFpYSWdMU0JCSUdacGJIUmxjaUJtZFc1amRHbHZiaTRnU1dZZ2RHaGxJR1pwYkhSbGNseHVJQ29nSUNCeVpYUjFjbTV6SUdaaGJITmxJSFJvWlNCbGRtVnVkQ0IzYVd4c0lHSmxJR1pwYkhSbGNtVmtJRzkxZENCaGJtUWdibThnWW05MWJtUWdhR0Z1Wkd4bGNseHVJQ29nSUNCdmNpQjNZWFJqYUdWeUlIZHBiR3dnWW1VZ2RISnBaMmRsY21Wa0xpQlVhR1VnWm1sc2RHVnlJR1oxYm1OMGFXOXVJSGRwYkd3Z1ltVWdZMkZzYkdWa1hHNGdLaUFnSUhkcGRHZ2dkR2hsSUd0bGVTQmxkbVZ1ZEM0Z1ZHaGxJR1JsWm1GMWJIUWdabWxzZEdWeUlIZHBiR3dnWVd4M1lYbHpJSEpsZEhWeWJpQjBjblZsTGx4dUlDb3ZYRzVqYkdGemN5QkxaWGx6SUh0Y2JpQWdMeW9xSUZSb1pTQnVZVzFsSUc5bUlIUm9aU0JrWldaaGRXeDBJSE5qYjNCbExpQXFMMXh1SUNCemRHRjBhV01nUkVWR1FWVk1WRjlUUTA5UVJTQTlJQ2RFUlVaQlZVeFVYMU5EVDFCRkoxeHVYRzRnSUY5emRHOXdjR1ZrSUQwZ2RISjFaVnh1SUNCZlkzVnljbVZ1ZEZOamIzQmxJRDBnUzJWNWN5NUVSVVpCVlV4VVgxTkRUMUJGWEc0Z0lGOWpkWEp5Wlc1MFEyOXRZbThnUFNCYlhWeHVJQ0JmYzJWeGRXVnVZMlVnUFNCYlhWeHVJQ0JmYUdGdVpHeGxjbk1nUFNCYlhWeHVJQ0JmZDJGMFkyaGxjbk1nUFNCYlhWeHVYRzRnSUc5d2RHbHZibk1nUFNCN1hHNGdJQ0FnZEhKcFoyZGxjazl1WTJWUVpYSkxaWGs2SUdaaGJITmxMRnh1SUNBZ0lIVnpaVU52WkdWSmJuTjBaV0ZrUzJWNU9pQm1ZV3h6WlN4Y2JpQWdJQ0J0WVhoVFpYRjFaVzVqWlV4bGJtZDBhRG9nTXl4Y2JpQWdJQ0JtYVd4MFpYSTZJQ2dwSUQwK0lIUnlkV1ZjYmlBZ2ZWeHVYRzRnSUdOdmJuTjBjblZqZEc5eUtHVnNaVzFsYm5Rc0lHOXdkR2x2Ym5NcElIdGNiaUFnSUNCcFppQW9JV1ZzWlcxbGJuUXBJR1ZzWlcxbGJuUWdQU0IzYVc1a2IzZGNiaUFnSUNCMGFHbHpMbDlsYkdWdFpXNTBJRDBnWld4bGJXVnVkRnh1WEc0Z0lDQWdUMkpxWldOMExtRnpjMmxuYmloMGFHbHpMbTl3ZEdsdmJuTXNJRzl3ZEdsdmJuTXBYRzVjYmlBZ0lDQjBhR2x6TG5KbGMzVnRaU2dwWEc0Z0lIMWNibHh1SUNCZmIyNUxaWGxFYjNkdUlEMGdaWFpsYm5RZ1BUNGdlMXh1SUNBZ0lHbG1JQ2doZEdocGN5NXZjSFJwYjI1ekxtWnBiSFJsY2k1allXeHNLSFJvYVhNc0lHVjJaVzUwS1NrZ2NtVjBkWEp1WEc1Y2JpQWdJQ0JzWlhRZ2EyVjVJRDBnZEdocGN5NXZjSFJwYjI1ekxuVnpaVU52WkdWSmJuTjBaV0ZrUzJWNUlEOGdaWFpsYm5RdVkyOWtaU0E2SUdWMlpXNTBMbXRsZVZ4dVhHNGdJQ0FnYVdZZ0tHdGxlUzVzWlc1bmRHZ2dQVDA5SURFcElIdGNiaUFnSUNBZ0lHdGxlU0E5SUd0bGVTNTBiMHh2ZDJWeVEyRnpaU2dwWEc0Z0lDQWdJQ0JwWmlBb2EyVjVJRDA5UFNBbklDY3BJR3RsZVNBOUlDZFRjR0ZqWlNkY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JqYjI1emRDQmhiSEpsWVdSNVZISnBaMmRsY21Wa0lEMGdkR2hwY3k1ZlkzVnljbVZ1ZEVOdmJXSnZMbWx1WTJ4MVpHVnpLR3RsZVNsY2JseHVJQ0FnSUdsbUlDZ2hZV3h5WldGa2VWUnlhV2RuWlhKbFpDa2dlMXh1SUNBZ0lDQWdkR2hwY3k1ZlkzVnljbVZ1ZEVOdmJXSnZMbkIxYzJnb2EyVjVLVnh1SUNBZ0lDQWdkR2hwY3k1ZlkzVnljbVZ1ZEVOdmJXSnZMbk52Y25Rb0tWeHVYRzRnSUNBZ0lDQnBaaUFvWEc0Z0lDQWdJQ0FnSUhSb2FYTXVYM05sY1hWbGJtTmxMbXhsYm1kMGFDQTlQVDBnTUNCOGZGeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5elpYRjFaVzVqWlZ0MGFHbHpMbDl6WlhGMVpXNWpaUzVzWlc1bmRHZ2dMU0F4WFNBaFBUMGdkR2hwY3k1ZlkzVnljbVZ1ZEVOdmJXSnZYRzRnSUNBZ0lDQXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11WDNObGNYVmxibU5sTG14bGJtZDBhQ0E5UFQwZ2RHaHBjeTV2Y0hScGIyNXpMbTFoZUZObGNYVmxibU5sVEdWdVozUm9LVnh1SUNBZ0lDQWdJQ0FnSUhSb2FYTXVYM05sY1hWbGJtTmxMbk5vYVdaMEtDbGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxsOXpaWEYxWlc1alpTNXdkWE5vS0hSb2FYTXVYMk4xY25KbGJuUkRiMjFpYnlsY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb0lXRnNjbVZoWkhsVWNtbG5aMlZ5WldRZ2ZId2dJWFJvYVhNdWIzQjBhVzl1Y3k1MGNtbG5aMlZ5VDI1alpWQmxja3RsZVNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVmYm05MGFXWjVWMkYwWTJobGNuTW9aWFpsYm5RcFhHNGdJQ0FnSUNCMGFHbHpMbDlrYVhOd1lYUmphRWhoYm1Sc1pYSnpLR1YyWlc1MEtWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lGOXZia3RsZVZWd0lEMGdaWFpsYm5RZ1BUNGdlMXh1SUNBZ0lHbG1JQ2doZEdocGN5NXZjSFJwYjI1ekxtWnBiSFJsY2k1allXeHNLSFJvYVhNc0lHVjJaVzUwS1NrZ2NtVjBkWEp1WEc1Y2JpQWdJQ0JzWlhRZ2EyVjVJRDBnZEdocGN5NXZjSFJwYjI1ekxuVnpaVU52WkdWSmJuTjBaV0ZrUzJWNUlEOGdaWFpsYm5RdVkyOWtaU0E2SUdWMlpXNTBMbXRsZVZ4dVhHNGdJQ0FnYVdZZ0tHdGxlUzVzWlc1bmRHZ2dQVDA5SURFcElIdGNiaUFnSUNBZ0lHdGxlU0E5SUd0bGVTNTBiMHh2ZDJWeVEyRnpaU2dwWEc0Z0lDQWdJQ0JwWmlBb2EyVjVJRDA5UFNBbklDY3BJR3RsZVNBOUlDZFRjR0ZqWlNkY2JpQWdJQ0I5WEc1Y2JpQWdJQ0IwYUdsekxsOWpkWEp5Wlc1MFEyOXRZbThnUFNCYkxpNHVkR2hwY3k1ZlkzVnljbVZ1ZEVOdmJXSnZYVnh1WEc0Z0lDQWdZMjl1YzNRZ2FXNWtaWGdnUFNCMGFHbHpMbDlqZFhKeVpXNTBRMjl0WW04dWFXNWtaWGhQWmloclpYa3BYRzRnSUNBZ2FXWWdLR2x1WkdWNElDRTlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVmWTNWeWNtVnVkRU52YldKdkxuTndiR2xqWlNocGJtUmxlQ3dnTVNsY2JpQWdJQ0FnSUhSb2FYTXVYMk4xY25KbGJuUkRiMjFpYnk1emIzSjBLQ2xjYmlBZ0lDQjlYRzVjYmlBZ0lDQjBhR2x6TGw5dWIzUnBabmxYWVhSamFHVnljeWhsZG1WdWRDbGNiaUFnZlZ4dVhHNGdJRjl5WlhObGRFdGxlWE1nUFNBb0tTQTlQaUI3WEc0Z0lDQWdkR2hwY3k1ZlkzVnljbVZ1ZEVOdmJXSnZJRDBnVzExY2JpQWdJQ0IwYUdsekxsOXpaWEYxWlc1alpTQTlJRnRkWEc0Z0lIMWNibHh1SUNCZmJtOTBhV1o1VjJGMFkyaGxjbk1nUFNCbGRtVnVkQ0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdjMlZ4ZFdWdVkyVWdQU0JLVTA5T0xuQmhjbk5sS0VwVFQwNHVjM1J5YVc1bmFXWjVLSFJvYVhNdVgzTmxjWFZsYm1ObEtTbGNibHh1SUNBZ0lHWnZjaUFvYkdWMElIZGhkR05vWlhJZ2IyWWdkR2hwY3k1ZmQyRjBZMmhsY25NcElIdGNiaUFnSUNBZ0lIZGhkR05vWlhJdVkyRnNiR0poWTJzb2MyVnhkV1Z1WTJVc0lHVjJaVzUwS1Z4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUY5a2FYTndZWFJqYUVoaGJtUnNaWEp6SUQwZ1pYWmxiblFnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJSE5sY1hWbGJtTmxJRDBnU2xOUFRpNXdZWEp6WlNoS1UwOU9Mbk4wY21sdVoybG1lU2gwYUdsekxsOXpaWEYxWlc1alpTa3BYRzVjYmlBZ0lDQmpiMjV6ZENCemFXZHVZWFIxY21WeklEMGdXMTFjYmx4dUlDQWdJR3hsZENCemFXZHVZWFIxY21WVFpYRjFaVzVqWlNBOUlGdGRYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJSFJvYVhNdVgzTmxjWFZsYm1ObExteGxibWQwYUNBdElERTdJR2tnUGowZ01Ec2dhUzB0S1NCN1hHNGdJQ0FnSUNCemFXZHVZWFIxY21WVFpYRjFaVzVqWlNBOUlGdDBhR2x6TGw5elpYRjFaVzVqWlZ0cFhTd2dMaTR1YzJsbmJtRjBkWEpsVTJWeGRXVnVZMlZkWEc0Z0lDQWdJQ0J6YVdkdVlYUjFjbVZ6TG5CMWMyZ29jM1J5YVc1bmFXWjVVMmh2Y25SamRYUW9jMmxuYm1GMGRYSmxVMlZ4ZFdWdVkyVXBLVnh1SUNBZ0lIMWNibHh1SUNBZ0lHWnZjaUFvYkdWMElHaGhibVJzWlhJZ2IyWWdkR2hwY3k1ZmFHRnVaR3hsY25NcElIdGNiaUFnSUNBZ0lHbG1JQ2hjYmlBZ0lDQWdJQ0FnZEdocGN5NWZZM1Z5Y21WdWRGTmpiM0JsSUQwOVBTQm9ZVzVrYkdWeUxuTmpiM0JsSUNZbVhHNGdJQ0FnSUNBZ0lITnBaMjVoZEhWeVpYTXVhVzVqYkhWa1pYTW9hR0Z1Wkd4bGNpNXphV2R1WVhSMWNtVXBYRzRnSUNBZ0lDQXBJSHRjYmlBZ0lDQWdJQ0FnYUdGdVpHeGxjaTVqWVd4c1ltRmpheWh6WlhGMVpXNWpaU3dnWlhabGJuUXBYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRUpwYm1RZ1lTQnJaWGxpYjJGeVpDQnphRzl5ZEdOMWRDNGdRU0J6YUc5eWRHTjFkQ0JqWVc0Z1ltVWdhVzRnYzNSeWFXNW5JRzl5SUdGeWNtRjVJR1p2Y20xaGRDNWNiaUFnSUNvZ1FIQmhjbUZ0SUh0emRISnBibWQ4YzNSeWFXNW5XMTE4UVhKeVlYa3VQSE4wY21sdVoxdGRQbjBnYzJodmNuUmpkWFFnTFNCVWFHVWdjMmh2Y25SamRYUWdkRzhnWW1sdVpDNWNiaUFnSUNvZ1FIQmhjbUZ0SUh0emRISnBibWQ5SUhOamIzQmxJQzBnUVc0Z2IzQjBhVzl1WVd3Z2MyTnZjR1V1WEc0Z0lDQXFJRUJ3WVhKaGJTQjdSblZ1WTNScGIyNTlJR05oYkd4aVlXTnJJQzBnVkdobElHTmhiR3hpWVdOcklIUm9ZWFFnYzJodmRXeGtJR0psSUhSeWFXZG5aWEpsWkM1Y2JpQWdJQ29nSUNCVWFHVWdZMkZzYkdKaFkyc2daMlYwY3lCallXeHNaV1FnZDJsMGFDQjBhR1VnWTNWeWNtVnVkQ0JyWlhrZ2IzSWdZMjl0WW04Z2MyVnhkV1Z1WTJWY2JpQWdJQ29nSUNCaGJtUWdkR2hsSUd0bGVTQmxkbVZ1ZEM1Y2JpQWdJQ29nUUhKbGRIVnliaUI3Ym5WdFltVnlmU0JVYUdVZ2RXNXBjWFZsSUVsRUlHOW1JSFJvWlNCaWIzVnVaQ0JvWVc1a2JHVnlMbHh1SUNBZ0tpOWNiaUFnWW1sdVpDQTlJQ2h6YUc5eWRHTjFkQ3dnYzJOdmNHVXNJR05oYkd4aVlXTnJLU0E5UGlCN1hHNGdJQ0FnYVdZZ0tHTmhiR3hpWVdOcklEMDlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUdOaGJHeGlZV05ySUQwZ2MyTnZjR1ZjYmlBZ0lDQWdJSE5qYjNCbElEMGdTMlY1Y3k1RVJVWkJWVXhVWDFORFQxQkZYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFI1Y0dWdlppQnphRzl5ZEdOMWRDQTlQVDBnSjNOMGNtbHVaeWNwSUhOb2IzSjBZM1YwSUQwZ2NHRnljMlZUYUc5eWRHTjFkQ2h6YUc5eWRHTjFkQ2xjYmx4dUlDQWdJSE5vYjNKMFkzVjBJRDBnWTJ4bFlXNVRhRzl5ZEdOMWRDaHphRzl5ZEdOMWRDbGNibHh1SUNBZ0lHTnZibk4wSUdoaGJtUnNaWEpKWkNBOUlHZGxibVZ5WVhSbFNXUW9LVnh1SUNBZ0lIUm9hWE11WDJoaGJtUnNaWEp6TG5CMWMyZ29lMXh1SUNBZ0lDQWdhV1E2SUdoaGJtUnNaWEpKWkN4Y2JpQWdJQ0FnSUhOcFoyNWhkSFZ5WlRvZ2MzUnlhVzVuYVdaNVUyaHZjblJqZFhRb2MyaHZjblJqZFhRcExGeHVJQ0FnSUNBZ2MyaHZjblJqZFhRc1hHNGdJQ0FnSUNCelkyOXdaU3hjYmlBZ0lDQWdJR05oYkd4aVlXTnJYRzRnSUNBZ2ZTbGNibHh1SUNBZ0lISmxkSFZ5YmlCb1lXNWtiR1Z5U1dSY2JpQWdmVnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQlZibUpwYm1RZ1lTQnpjR1ZqYVdacFl5QnJaWGxpYjJGeVpDQnphRzl5ZEdOMWRDQm9ZVzVrYkdWeUlIVnphVzVuSUdsMGN5QkpSQzVjYmlBZ0lDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlHaGhibVJzWlhKSlpDQXRJRlJvWlNCSlJDQnlaWFIxY201bFpDQmllU0IwYUdVZ2UwQnNhVzVySUdKcGJtUjlJRzFsZEdodlpDNWNiaUFnSUNvZ1FIUm9jbTkzY3lCVWFISnZkM01nWVc0Z1pYSnliM0lnZDJobGJpQjBhR1VnU1VRZ2FYTWdhVzUyWVd4cFpDNWNiaUFnSUNvdlhHNGdJSFZ1WW1sdVpDQTlJR2hoYm1Sc1pYSkpaQ0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdhVzVrWlhnZ1BTQjBhR2x6TGw5b1lXNWtiR1Z5Y3k1bWFXNWtTVzVrWlhnb2FHRnVaR3hsY2lBOVBpQm9ZVzVrYkdWeUxtbGtJRDA5UFNCb1lXNWtiR1Z5U1dRcFhHNWNiaUFnSUNCcFppQW9hVzVrWlhnZ1BUMDlJQzB4S1NCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjBsdWRtRnNhV1FnYUdGdVpHeGxjaUJKUkRvZ0p5QXJJR2hoYm1Sc1pYSkpaQ2xjYmx4dUlDQWdJSFJvYVhNdVgyaGhibVJzWlhKekxuTndiR2xqWlNocGJtUmxlQ3dnTVNsY2JpQWdmVnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQlZibUpwYm1RZ2EyVjVZbTloY21RZ2MyaHZjblJqZFhRZ2FHRnVaR3hsY25NZ2FHRjJhVzVuSUhSb1pTQnpjR1ZqYVdacFpXUWdjMk52Y0dVdVhHNGdJQ0FxSUVCd1lYSmhiU0I3VTNSeWFXNW5mU0J6WTI5d1pTQXRJRlJvWlNCelkyOXdaUzVjYmlBZ0lDb3ZYRzRnSUhWdVltbHVaRk5qYjNCbElEMGdjMk52Y0dVZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUdsdVpHbGpaWE1nUFNCYlhWeHVJQ0FnSUhSb2FYTXVYMmhoYm1Sc1pYSnpMbVp2Y2tWaFkyZ29LR2hoYm1Sc1pYSXNJR2x1WkdWNEtTQTlQaUI3WEc0Z0lDQWdJQ0JwWmlBb2FHRnVaR3hsY2k1elkyOXdaU0E5UFQwZ2MyTnZjR1VwSUdsdVpHbGpaWE11Y0hWemFDaHBibVJsZUNsY2JpQWdJQ0I5S1Z4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYVc1a1pYZ2diMllnYVc1a2FXTmxjeWtnZTF4dUlDQWdJQ0FnZEdocGN5NWZhR0Z1Wkd4bGNuTXVjM0JzYVdObEtHbHVaR1Y0TENBeEtWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQlZibUpwYm1RZ1lXeHNJR3RsZVdKdllYSmtJSE5vYjNKMFkzVjBJR2hoYm1Sc1pYSnpMbHh1SUNBZ0tpOWNiaUFnZFc1aWFXNWtRV3hzSUQwZ0tDa2dQVDRnZTF4dUlDQWdJSFJvYVhNdVgyaGhibVJzWlhKeklEMGdXMTFjYmlBZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCWFlYUmphQ0JyWlhsaWIyRnlaQ0JsZG1WdWRITWdLR3RsZVdSdmQyNGdZVzVrSUd0bGVYVndLUzVjYmlBZ0lDb2dRSEJoY21GdElIdEdkVzVqZEdsdmJuMGdZMkZzYkdKaFkyc2dMU0JVYUdVZ1kyRnNiR0poWTJzZ2RHaGhkQ0J6YUc5MWJHUWdZbVVnZEhKcFoyZGxjbVZrTGx4dUlDQWdLaUFnSUhkb1pXNGdZU0JyWlhsa2IzZHVJRzl5SUd0bGVYVndJR1YyWlc1MElHOWpZM1Z5Y3k0Z1ZHaGxJR05oYkd4aVlXTnJJR2RsZEhNZ1kyRnNiR1ZrSUhkcGRHaGNiaUFnSUNvZ0lDQjBhR1VnWTNWeWNtVnVkQ0JyWlhrZ2IzSWdZMjl0WW04Z2MyVnhkV1Z1WTJVZ1lXNWtJSFJvWlNCclpYa2daWFpsYm5RdVhHNGdJQ0FxSUVCeVpYUjFjbTRnZTI1MWJXSmxjbjBnVkdobElIVnVhWEYxWlNCSlJDQnZaaUIwYUdVZ1lXUmtaV1FnZDJGMFkyaGxjaTVjYmlBZ0lDb3ZYRzRnSUhkaGRHTm9JRDBnWTJGc2JHSmhZMnNnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJSGRoZEdOb1pYSkpaQ0E5SUdkbGJtVnlZWFJsU1dRb0tWeHVJQ0FnSUhSb2FYTXVYM2RoZEdOb1pYSnpMbkIxYzJnb2UxeHVJQ0FnSUNBZ2FXUTZJSGRoZEdOb1pYSkpaQ3hjYmlBZ0lDQWdJR05oYkd4aVlXTnJYRzRnSUNBZ2ZTbGNibHh1SUNBZ0lISmxkSFZ5YmlCM1lYUmphR1Z5U1dSY2JpQWdmVnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQlZibUpwYm1RZ1lTQnpjR1ZqYVdacFl5QjNZWFJqYUdWeUlIVnphVzVuSUdsMGN5QkpSQzVjYmlBZ0lDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlIZGhkR05vWlhKSlpDQXRJRlJvWlNCSlJDQnlaWFIxY201bFpDQmllU0IwYUdVZ2UwQnNhVzVySUhkaGRHTm9mU0J0WlhSb2IyUXVYRzRnSUNBcUlFQjBhSEp2ZDNNZ1ZHaHliM2R6SUdGdUlHVnljbTl5SUhkb1pXNGdkR2hsSUVsRUlHbHpJR2x1ZG1Gc2FXUXVYRzRnSUNBcUwxeHVJQ0IxYm5kaGRHTm9JRDBnZDJGMFkyaGxja2xrSUQwK0lIdGNiaUFnSUNCamIyNXpkQ0JwYm1SbGVDQTlJSFJvYVhNdVgzZGhkR05vWlhKekxtWnBibVJKYm1SbGVDaDNZWFJqYUdWeUlEMCtJSGRoZEdOb1pYSXVhV1FnUFQwOUlIZGhkR05vWlhKSlpDbGNibHh1SUNBZ0lHbG1JQ2hwYm1SbGVDQTlQVDBnTFRFcElIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnblNXNTJZV3hwWkNCM1lYUmphR1Z5SUVsRU9pQW5JQ3NnZDJGMFkyaGxja2xrS1Z4dVhHNGdJQ0FnZEdocGN5NWZkMkYwWTJobGNuTXVjM0JzYVdObEtHbHVaR1Y0TENBeEtWeHVJQ0I5WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRlZ1WW1sdVpDQmhiR3dnZDJGMFkyaGxjbk11WEc0Z0lDQXFMMXh1SUNCMWJuZGhkR05vUVd4c0lEMGdLQ2tnUFQ0Z2UxeHVJQ0FnSUhSb2FYTXVYM2RoZEdOb1pYSnpJRDBnVzExY2JpQWdmVnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQlRkMmwwWTJnZ2RHaGxJSE5qYjNCbExpQlBibXg1SUdKdmRXNWtJR2hoYm1Sc1pYSnpJR2RsZENCMGNtbG5aMlZ5WldRZ2RHaGhkQ0JvWVhabElIUm9aU0J1WlhkY2JpQWdJQ29nYzJOdmNHVXVJRlJvWlNCa1pXWmhkV3gwSUhOamIzQmxJR05oYmlCaVpTQmhZMk5sYzNObFpDQmllU0I3UUd4cGJtc2dTMlY1Y3k1RVJVWkJWVXhVWDFORFQxQkZmUzVjYmlBZ0lDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlITmpiM0JsSUMwZ1ZHaGxJSE5qYjNCbExseHVJQ0FnS2k5Y2JpQWdjM2RwZEdOb1UyTnZjR1VnUFNCelkyOXdaU0E5UGlCN1hHNGdJQ0FnZEdocGN5NWZZM1Z5Y21WdWRGTmpiM0JsSUQwZ2MyTnZjR1ZjYmlBZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCVGRHOXdJR3hwYzNSbGJtbHVaeUIwYnlCclpYa2daWFpsYm5SeklHRnVaQ0J5WlhObGRDQjBhR1VnYTJWNUlITmxjWFZsYm1ObExseHVJQ0FnS2k5Y2JpQWdjM1J2Y0NBOUlDZ3BJRDArSUh0Y2JpQWdJQ0JwWmlBb0lYUm9hWE11WDNOMGIzQndaV1FwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVYMlZzWlcxbGJuUXVjbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaWduYTJWNVpHOTNiaWNzSUhSb2FYTXVYMjl1UzJWNVJHOTNiaWxjYmlBZ0lDQWdJSFJvYVhNdVgyVnNaVzFsYm5RdWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpZ25hMlY1ZFhBbkxDQjBhR2x6TGw5dmJrdGxlVlZ3S1Z4dUlDQWdJQ0FnZEdocGN5NWZaV3hsYldWdWRDNXlaVzF2ZG1WRmRtVnVkRXhwYzNSbGJtVnlLQ2RtYjJOMWN5Y3NJSFJvYVhNdVgzSmxjMlYwUzJWNWN5bGNiaUFnSUNBZ0lIUm9hWE11WDJWc1pXMWxiblF1Y21WdGIzWmxSWFpsYm5STWFYTjBaVzVsY2lnbllteDFjaWNzSUhSb2FYTXVYM0psYzJWMFMyVjVjeWxjYmx4dUlDQWdJQ0FnZEdocGN5NWZjbVZ6WlhSTFpYbHpLQ2xjYmx4dUlDQWdJQ0FnZEdocGN5NWZjM1J2Y0hCbFpDQTlJSFJ5ZFdWY2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNBdktpcGNiaUFnSUNvZ1VtVnpkVzFsSUd4cGMzUmxibWx1WnlCMGJ5QnJaWGtnWlhabGJuUnpMbHh1SUNBZ0tpOWNiaUFnY21WemRXMWxJRDBnS0NrZ1BUNGdlMXh1SUNBZ0lHbG1JQ2gwYUdsekxsOXpkRzl3Y0dWa0tTQjdYRzRnSUNBZ0lDQjBhR2x6TGw5bGJHVnRaVzUwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJ0bGVXUnZkMjRuTENCMGFHbHpMbDl2Ymt0bGVVUnZkMjRwWEc0Z0lDQWdJQ0IwYUdsekxsOWxiR1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oydGxlWFZ3Snl3Z2RHaHBjeTVmYjI1TFpYbFZjQ2xjYmlBZ0lDQWdJSFJvYVhNdVgyVnNaVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblptOWpkWE1uTENCMGFHbHpMbDl5WlhObGRFdGxlWE1wWEc0Z0lDQWdJQ0IwYUdsekxsOWxiR1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oySnNkWEluTENCMGFHbHpMbDl5WlhObGRFdGxlWE1wWEc1Y2JpQWdJQ0FnSUhSb2FYTXVYM04wYjNCd1pXUWdQU0JtWVd4elpWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lDOHFJRkpsYzJWMElIUm9hWE1nYVc1emRHRnVZMlVnWW5rZ2RXNWlhVzVrYVc1bklHRnNiQ0JvWVc1a2JHVnljeXdnY21WdGIzWnBibWNnWVd4c0lIZGhkR05vWlhKelhHNGdJQ0FxSUdGdVpDQnlaWE5sZEhScGJtY2dkR2hsSUd0bGVTQnpaWEYxWlc1alpTNWNiaUFnSUNvdlhHNGdJSEpsYzJWMElEMGdLQ2tnUFQ0Z2UxeHVJQ0FnSUhSb2FYTXVYM0psYzJWMFMyVjVjeWdwWEc0Z0lDQWdkR2hwY3k1MWJtSnBibVJCYkd3b0tWeHVJQ0FnSUhSb2FYTXVkVzUzWVhSamFFRnNiQ2dwWEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnUzJWNWMxeHVJaXdpWm5WdVkzUnBiMjRnWTJ4bFlXNVRaWEYxWlc1alpTaHpaWEYxWlc1alpTa2dlMXh1SUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElITmxjWFZsYm1ObExteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdhV1lnS0NGQmNuSmhlUzVwYzBGeWNtRjVLSE5sY1hWbGJtTmxXMmxkS1NsY2JpQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWhnU1c1MllXeHBaQ0J6YUc5eWRHTjFkQ0J6WlhGMVpXNWpaU0FrZTNObGNYVmxibU5sZlM1Z0tWeHVYRzRnSUNBZ1kyeGxZVzVEYjIxaWJ5aHpaWEYxWlc1alpWdHBYU2xjYmlBZ2ZWeHVmVnh1WEc1bWRXNWpkR2x2YmlCamJHVmhia052YldKdktHTnZiV0p2S1NCN1hHNGdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnWTI5dFltOHViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0JwWmlBb2RIbHdaVzltSUdOdmJXSnZXMmxkSUNFOVBTQW5jM1J5YVc1bkp5bGNiaUFnSUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2loZ1NXNTJZV3hwWkNCemFHOXlkR04xZENCamIyMWlieUFrZTJOdmJXSnZmUzVnS1Z4dVhHNGdJQ0FnWTI5dWMzUWdZMnhsWVc1bFpFdGxlU0E5SUdOc1pXRnVTMlY1S0dOdmJXSnZXMmxkS1Z4dUlDQWdJR2xtSUNnaFkyeGxZVzVsWkV0bGVTbGNiaUFnSUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2loZ1NXNTJZV3hwWkNCclpYa2dKSHRqYkdWaGJtVmtTMlY1ZlNCcGJpQnphRzl5ZEdOMWRDQmpiMjFpYnlBa2UyTnZiV0p2ZlM1Z0tWeHVYRzRnSUNBZ1kyOXRZbTliYVYwZ1BTQmpiR1ZoYm1Wa1MyVjVYRzRnSUgxY2JpQWdZMjl0WW04dWMyOXlkQ2dwWEc1OVhHNWNibVoxYm1OMGFXOXVJR05zWldGdVMyVjVLR3RsZVNrZ2UxeHVJQ0JyWlhrZ1BTQnJaWGt1Y21Wd2JHRmpaU2d2WEZ4ekt5OW5MQ0FuSUNjcFhHNGdJR2xtSUNoclpYa2dQVDA5SUNjZ0p5a2dhMlY1SUQwZ0oxTndZV05sSjF4dUlDQnJaWGtnUFNCclpYa3VkSEpwYlNncFhHNGdJR2xtSUNoclpYa3ViR1Z1WjNSb0lEMDlQU0F4S1NCclpYa2dQU0JyWlhrdWRHOU1iM2RsY2tOaGMyVW9LVnh1SUNCeVpYUjFjbTRnYTJWNVhHNTlYRzVjYmk4cUtseHVJQ29nUTJ4bFlXNGdZVzRnWVhKeVlYa2djMmh2Y25SamRYUXVJRlJvWlNCaGNuSmhlU0JwY3lCamJHVmhibVZrSUdsdUxYQnNZV05sSUdGdVpDQmhiSE52SUhKbGRIVnlibVZrTGx4dUlDb2dWVzV1WldObGMzTmhjbmtnZDJocGRHVWdjM0JoWTJVZ2FYTWdjbVZ0YjNabFpDd2dhMlY1SUdOdmJXSnBibUYwYVc5dWN5QmhjbVVnYzI5eWRHVmtJR0Z1WkZ4dUlDb2djMmx1WjJ4bElHTm9ZWEp6SUdOdmJuWmxjblJsWkNCMGJ5QnNiM2RsY2lCallYTmxMbHh1SUNvZ1FIQmhjbUZ0SUh0emRISnBibWRiWFh4QmNuSmhlUzQ4YzNSeWFXNW5XMTArZlNCemFHOXlkR04xZENBdElGUm9aU0JoY25KaGVTQnphRzl5ZEdOMWRDQjBieUJqYkdWaGJpNWNiaUFxSUVCeVpYUjFjbTRnZTNOMGNtbHVaMXRkZkVGeWNtRjVManh6ZEhKcGJtZGJYVDU5SUZSb1pTQmpiR1ZoYm1Wa0lHRnljbUY1SUhOb2IzSjBZM1YwTGx4dUlDb3ZYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpaHphRzl5ZEdOMWRDa2dlMXh1SUNCcFppQW9JVUZ5Y21GNUxtbHpRWEp5WVhrb2MyaHZjblJqZFhRcElIeDhJSE5vYjNKMFkzVjBMbXhsYm1kMGFDQTlQVDBnTUNsY2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KMGx1ZG1Gc2FXUWdZWEp5WVhrZ2MyaHZjblJqZFhRZ2RHOGdZMnhsWVc0NklDY2dLeUJ6YUc5eWRHTjFkQ2xjYmx4dUlDQnNaWFFnYVhOVFpYRjFaVzVqWlNBOUlIUjVjR1Z2WmlCemFHOXlkR04xZEZzd1hTQWhQVDBnSjNOMGNtbHVaeWRjYmx4dUlDQnBaaUFvYVhOVFpYRjFaVzVqWlNBbUppQnphRzl5ZEdOMWRDNXNaVzVuZEdnZ1BUMDlJREVwSUh0Y2JpQWdJQ0J6YUc5eWRHTjFkQ0E5SUhOb2IzSjBZM1YwV3pCZFhHNGdJQ0FnYVhOVFpYRjFaVzVqWlNBOUlHWmhiSE5sWEc0Z0lIMWNibHh1SUNCcFppQW9hWE5UWlhGMVpXNWpaU2tnWTJ4bFlXNVRaWEYxWlc1alpTaHphRzl5ZEdOMWRDbGNiaUFnWld4elpTQmpiR1ZoYmtOdmJXSnZLSE5vYjNKMFkzVjBLVnh1WEc0Z0lISmxkSFZ5YmlCemFHOXlkR04xZEZ4dWZWeHVJaXdpYkdWMElHNWxlSFJKWkNBOUlERmNibHh1THlvcVhHNGdLaUJEY21WaGRHVWdZU0IxYm1seGRXVWdTVVFnWlhabGNua2dkR2x0WlNCcGRDQnBjeUJqWVd4c1pXUXVYRzRnS2lCQWNtVjBkWEp1SUh0dWRXMWlaWEo5SUVFZ2RXNXBjWFZsSUVsRUxseHVJQ292WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdjbVYwZFhKdUlHNWxlSFJKWkNzclhHNTlYRzRpTENKbGVIQnZjblFnZXlCa1pXWmhkV3gwSUdGeklFdGxlWE1nZlNCbWNtOXRJQ2N1TDB0bGVYTW5YRzVsZUhCdmNuUWdleUJrWldaaGRXeDBJR0Z6SUdOc1pXRnVVMmh2Y25SamRYUWdmU0JtY205dElDY3VMMk5zWldGdVUyaHZjblJqZFhRblhHNWxlSEJ2Y25RZ2V5QmtaV1poZFd4MElHRnpJR2RsYm1WeVlYUmxTV1FnZlNCbWNtOXRJQ2N1TDJkbGJtVnlZWFJsU1dRblhHNWxlSEJ2Y25RZ2V5QmtaV1poZFd4MElHRnpJSEJoY25ObFUyaHZjblJqZFhRZ2ZTQm1jbTl0SUNjdUwzQmhjbk5sVTJodmNuUmpkWFFuWEc1bGVIQnZjblFnZXlCa1pXWmhkV3gwSUdGeklITjBjbWx1WjJsbWVWTm9iM0owWTNWMElIMGdabkp2YlNBbkxpOXpkSEpwYm1kcFpubFRhRzl5ZEdOMWRDZGNiaUlzSW1OdmJuTjBJRU5QVFVKSlRrVmZWMGxVU0NBOUlDY3JKMXh1WTI5dWMzUWdSazlNVEU5WFJVUmZRbGtnUFNBblBpZGNibHh1Wm5WdVkzUnBiMjRnWjJWMFJIVndiR2xqWVhSbGN5aGpiMjFpYnlrZ2UxeHVJQ0JqYjI1emRDQmpiM1Z1ZENBOUlHTnZiV0p2SUQwK1hHNGdJQ0FnWTI5dFltOHVjbVZrZFdObEtDaHJNU3dnYXpJcElEMCtJRTlpYW1WamRDNWhjM05wWjI0b2F6RXNJSHNnVzJzeVhUb2dLR3N4VzJzeVhTQjhmQ0F3S1NBcklERWdmU2tzSUh0OUtWeHVJQ0JqYjI1emRDQmtkWEJzYVdOaGRHVnpJRDBnWkdsamRDQTlQaUJQWW1wbFkzUXVhMlY1Y3loa2FXTjBLUzVtYVd4MFpYSW9heUE5UGlCa2FXTjBXMnRkSUQ0Z01TbGNiaUFnY21WMGRYSnVJR1IxY0d4cFkyRjBaWE1vWTI5MWJuUW9ZMjl0WW04cEtWeHVmVnh1WEc1bWRXNWpkR2x2YmlCamIyNTJaWEowUzJWNUtHdGxlU2tnZTF4dUlDQnJaWGtnUFNCclpYa3VhbTlwYmlnbkp5bGNiaUFnYVdZZ0tHdGxlUzVzWlc1bmRHZ2dQVDA5SURFcElHdGxlU0E5SUd0bGVTNTBiMHh2ZDJWeVEyRnpaU2dwWEc0Z0lISmxkSFZ5YmlCclpYbGNibjFjYmx4dUx5b3FYRzRnS2lCUVlYSnpaU0JoSUhOMGNtbHVaeUJ6YUc5eWRHTjFkQ0JoYm1RZ2NtVjBkWEp1SUhSb1pTQmxjWFZwZG1Gc1pXNTBJR0Z5Y21GNUlITm9iM0owWTNWMExseHVJQ29nUUhCaGNtRnRJSHR6ZEhKcGJtZDlJSE5vYjNKMFkzVjBJQzBnVkdobElITjBjbWx1WnlCemFHOXlkR04xZENCMGJ5QmpiMjUyWlhKMExseHVJQ29nUUhKbGRIVnliaUI3YzNSeWFXNW5XMTE4UVhKeVlYa3VQSE4wY21sdVoxdGRQbjBnVkdobElHTnZiblpsY25SbFpDQmhjbkpoZVNCemFHOXlkR04xZEM1Y2JpQXFMMXh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNG9jMmh2Y25SamRYUXBJSHRjYmlBZ2FXWWdLSFI1Y0dWdlppQnphRzl5ZEdOMWRDQWhQVDBnSjNOMGNtbHVaeWNwWEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZEpiblpoYkdsa0lITjBjbWx1WnlCemFHOXlkR04xZENCMGJ5QndZWEp6WlRvZ0p5QXJJSE5vYjNKMFkzVjBLVnh1WEc0Z0lITm9iM0owWTNWMElEMGdjMmh2Y25SamRYUXVjbVZ3YkdGalpTZ3ZYRnh6S3k5bkxDQW5KeWxjYmx4dUlDQnBaaUFvZEhsd1pXOW1JSE5vYjNKMFkzVjBJQ0U5UFNBbmMzUnlhVzVuSnlCOGZDQnphRzl5ZEdOMWRDNXNaVzVuZEdnZ1BUMDlJREFwWEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZEpiblpoYkdsa0lITm9iM0owWTNWMElDaHRkWE4wSUdKbElHNXZiaUJsYlhCMGVTQnpkSEpwYm1jcE9pQW5JQ3NnYzJodmNuUmpkWFFwWEc1Y2JpQWdiR1YwSUd0bGVTQTlJRnRkWEc0Z0lHeGxkQ0JqYjIxaWJ5QTlJRnRkWEc0Z0lHTnZibk4wSUhObGNYVmxibU5sSUQwZ1cxMWNibHh1SUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElITm9iM0owWTNWMExteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdZMjl1YzNRZ1l5QTlJSE5vYjNKMFkzVjBMbU5vWVhKQmRDaHBLVnh1SUNBZ0lHbG1JQ2doYTJWNUxteGxibWQwYUNrZ2UxeHVJQ0FnSUNBZ2EyVjVMbkIxYzJnb1l5bGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnYVdZZ0tHTWdQVDA5SUVOUFRVSkpUa1ZmVjBsVVNDa2dlMXh1SUNBZ0lDQWdJQ0JqYjIxaWJ5NXdkWE5vS0dOdmJuWmxjblJMWlhrb2EyVjVLU2xjYmlBZ0lDQWdJQ0FnYTJWNUlEMGdXMTFjYmlBZ0lDQWdJSDBnWld4elpTQnBaaUFvWXlBOVBUMGdSazlNVEU5WFJVUmZRbGtwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXRZbTh1Y0hWemFDaGpiMjUyWlhKMFMyVjVLR3RsZVNrcFhHNGdJQ0FnSUNBZ0lHdGxlU0E5SUZ0ZFhHNGdJQ0FnSUNBZ0lHTnZiV0p2TG5OdmNuUW9LVnh1SUNBZ0lDQWdJQ0J6WlhGMVpXNWpaUzV3ZFhOb0tHTnZiV0p2S1Z4dUlDQWdJQ0FnSUNCamIyMWlieUE5SUZ0ZFhHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCclpYa3VjSFZ6YUNoaktWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHbG1JQ2hyWlhrdWJHVnVaM1JvS1NCN1hHNGdJQ0FnWTI5dFltOHVjSFZ6YUNoamIyNTJaWEowUzJWNUtHdGxlU2twWEc0Z0lDQWdZMjl0WW04dWMyOXlkQ2dwWEc0Z0lDQWdjMlZ4ZFdWdVkyVXVjSFZ6YUNoamIyMWlieWxjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KMGx1ZG1Gc2FXUWdjMmh2Y25SamRYUWdLRzExYzNRZ1pXNWtJSGRwZEdnZ2EyVjVLVG9nSnlBcklITm9iM0owWTNWMEtWeHVJQ0I5WEc1Y2JpQWdabTl5SUNoc1pYUWdZMjl0WW04Z2IyWWdjMlZ4ZFdWdVkyVXBJSHRjYmlBZ0lDQmpiMjV6ZENCa2RYQnNhV05oZEdWeklEMGdaMlYwUkhWd2JHbGpZWFJsY3loamIyMWlieWxjYmlBZ0lDQnBaaUFvWkhWd2JHbGpZWFJsY3k1c1pXNW5kR2dnUGlBd0tWeHVJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0NkSmJuWmhiR2xrSUhOb2IzSjBZM1YwSUNoa2RYQnNhV05oZEdVZ2EyVjVjeWs2SnlBcklITm9iM0owWTNWMEtWeHVJQ0I5WEc1Y2JpQWdhV1lnS0hObGNYVmxibU5sTG14bGJtZDBhQ0E5UFQwZ01Ta2djbVYwZFhKdUlITmxjWFZsYm1ObFd6QmRYRzRnSUdWc2MyVWdjbVYwZFhKdUlITmxjWFZsYm1ObFhHNTlYRzRpTENKamIyNXpkQ0JEVDAxQ1NVNUZYMWRKVkVnZ1BTQW5JQ3NnSjF4dVkyOXVjM1FnUms5TVRFOVhSVVJmUWxrZ1BTQW5JRDRnSjF4dVhHNHZLaXBjYmlBcUlFTnlaV0YwWlNCbGNYVnBkbUZzWlc1MElITjBjbWx1WnlCemFHOXlkR04xZENCdlppQmhiaUJoY25KaGVTQnphRzl5ZEdOMWRDNWNiaUFxSUVCd1lYSmhiU0I3YzNSeWFXNW5XMTE4UVhKeVlYa3VQSE4wY21sdVoxdGRQbjBnYzJodmNuUmpkWFFnTFNCVWFHVWdZWEp5WVhrZ2MyaHZjblJqZFhRZ2RHOGdZMjl1ZG1WeWRDNWNiaUFxSUVCeVpYUjFjbTRnZTNOMGNtbHVaMzBnVkdobElHTnZiblpsY25SbFpDQnpkSEpwYm1jZ2MyaHZjblJqZFhKMExseHVJQ292WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaWh6YUc5eWRHTjFkQ2tnZTF4dUlDQnBaaUFvSVVGeWNtRjVMbWx6UVhKeVlYa29jMmh2Y25SamRYUXBLVnh1SUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnblNXNTJZV3hwWkNCaGNuSmhlU0J6YUc5eWRHTjFkQ0IwYnlCemRISnBibWRwWm5rNklDY2dLeUJ6YUc5eWRHTjFkQ2xjYmx4dUlDQnNaWFFnYVhOVFpYRjFaVzVqWlNBOUlIUjVjR1Z2WmlCemFHOXlkR04xZEZzd1hTQWhQVDBnSjNOMGNtbHVaeWRjYmx4dUlDQnBaaUFvSVdselUyVnhkV1Z1WTJVcElIdGNiaUFnSUNCeVpYUjFjbTRnYzJodmNuUmpkWFF1YW05cGJpaERUMDFDU1U1RlgxZEpWRWdwWEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnY21WMGRYSnVJSE5vYjNKMFkzVjBMbTFoY0Nod1lYSjBJRDArSUhCaGNuUXVhbTlwYmloRFQwMUNTVTVGWDFkSlZFZ3BLUzVxYjJsdUtFWlBURXhQVjBWRVgwSlpLVnh1SUNCOVhHNTlYRzRpWFN3aWMyOTFjbU5sVW05dmRDSTZJaUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogXG4gKi9cblxuZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFyZztcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcbiAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG4gKi9cbnZhciBlbXB0eUZ1bmN0aW9uID0gZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9O1xuXG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcztcbn07XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiBhcmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgT2JqZWN0LmZyZWV6ZShlbXB0eU9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlPYmplY3Q7IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCk7XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCcuL2VtcHR5RnVuY3Rpb24nKTtcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5pbmRleE9mKCdGYWlsZWQgQ29tcG9zaXRlIHByb3BUeXBlOiAnKSA9PT0gMCkge1xuICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgQ29tcG9zaXRlQ29tcG9uZW50IHByb3B0eXBlIGNoZWNrLlxuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7IiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG4gIHZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKHR5cGVTcGVjcy5oYXNPd25Qcm9wZXJ0eSh0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGludmFyaWFudCh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gPT09ICdmdW5jdGlvbicsICclczogJXMgdHlwZSBgJXNgIGlzIGludmFsaWQ7IGl0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tICcgKyAndGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCVzYC4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSk7XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIHdhcm5pbmcoIWVycm9yIHx8IGVycm9yIGluc3RhbmNlb2YgRXJyb3IsICclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvcik7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICB3YXJuaW5nKGZhbHNlLCAnRmFpbGVkICVzIHR5cGU6ICVzJXMnLCBsb2NhdGlvbiwgZXJyb3IubWVzc2FnZSwgc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgaW52YXJpYW50KFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAlc2AgcHJvcCBvbiBgJXNgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJyxcbiAgICAgICAgICAgICAgcHJvcEZ1bGxOYW1lLFxuICAgICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzKTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBwcm9wVmFsdWUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKHByb3BWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJXMgYXQgaW5kZXggJXMuJyxcbiAgICAgICAgICBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlciksXG4gICAgICAgICAgaVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIFN5bWJvbC5mb3IgJiZcbiAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG4gICAgMHhlYWM3O1xuXG4gIHZhciBpc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgb2JqZWN0ICE9PSBudWxsICYmXG4gICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuNC4wXG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciBlbXB0eU9iamVjdCA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5T2JqZWN0Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcycpO1xuXG4vLyBUT0RPOiB0aGlzIGlzIHNwZWNpYWwgYmVjYXVzZSBpdCBnZXRzIGltcG9ydGVkIGR1cmluZyBidWlsZC5cblxudmFyIFJlYWN0VmVyc2lvbiA9ICcxNi40LjAnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcblxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTtcbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfVElNRU9VVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QudGltZW91dCcpIDogMHhlYWQxO1xuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5cbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBSZWx5aW5nIG9uIHRoZSBgaW52YXJpYW50KClgIGltcGxlbWVudGF0aW9uIGxldHMgdXNcbi8vIGhhdmUgcHJlc2VydmUgdGhlIGZvcm1hdCBhbmQgcGFyYW1zIGluIHRoZSB3d3cgYnVpbGRzLlxuXG4vLyBFeHBvcnRzIFJlYWN0RE9NLmNyZWF0ZVJvb3RcblxuXG4vLyBFeHBlcmltZW50YWwgZXJyb3ItYm91bmRhcnkgQVBJIHRoYXQgY2FuIHJlY292ZXIgZnJvbSBlcnJvcnMgd2l0aGluIGEgc2luZ2xlXG4vLyByZW5kZXIgcGhhc2VcblxuLy8gU3VzcGVuc2VcbnZhciBlbmFibGVTdXNwZW5zZSA9IGZhbHNlO1xuLy8gSGVscHMgaWRlbnRpZnkgc2lkZSBlZmZlY3RzIGluIGJlZ2luLXBoYXNlIGxpZmVjeWNsZSBob29rcyBhbmQgc2V0U3RhdGUgcmVkdWNlcnM6XG5cblxuLy8gSW4gc29tZSBjYXNlcywgU3RyaWN0TW9kZSBzaG91bGQgYWxzbyBkb3VibGUtcmVuZGVyIGxpZmVjeWNsZXMuXG4vLyBUaGlzIGNhbiBiZSBjb25mdXNpbmcgZm9yIHRlc3RzIHRob3VnaCxcbi8vIEFuZCBpdCBjYW4gYmUgYmFkIGZvciBwZXJmb3JtYW5jZSBpbiBwcm9kdWN0aW9uLlxuLy8gVGhpcyBmZWF0dXJlIGZsYWcgY2FuIGJlIHVzZWQgdG8gY29udHJvbCB0aGUgYmVoYXZpb3I6XG5cblxuLy8gVG8gcHJlc2VydmUgdGhlIFwiUGF1c2Ugb24gY2F1Z2h0IGV4Y2VwdGlvbnNcIiBiZWhhdmlvciBvZiB0aGUgZGVidWdnZXIsIHdlXG4vLyByZXBsYXkgdGhlIGJlZ2luIHBoYXNlIG9mIGEgZmFpbGVkIGNvbXBvbmVudCBpbnNpZGUgaW52b2tlR3VhcmRlZENhbGxiYWNrLlxuXG5cbi8vIFdhcm4gYWJvdXQgZGVwcmVjYXRlZCwgYXN5bmMtdW5zYWZlIGxpZmVjeWNsZXM7IHJlbGF0ZXMgdG8gUkZDICM2OlxuXG5cbi8vIFdhcm4gYWJvdXQgbGVnYWN5IGNvbnRleHQgQVBJXG5cblxuLy8gR2F0aGVyIGFkdmFuY2VkIHRpbWluZyBtZXRyaWNzIGZvciBQcm9maWxlciBzdWJ0cmVlcy5cblxuXG4vLyBGaXJlcyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgZm9yIHN0YXRlICpvciogcHJvcHMgY2hhbmdlc1xuXG5cbi8vIE9ubHkgdXNlZCBpbiB3d3cgYnVpbGRzLlxuXG4vKipcbiAqIEZvcmtlZCBmcm9tIGZianMvd2FybmluZzpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvZTY2YmEyMGFkNWJlNDMzZWI1NDQyM2YyYjA5N2Q4MjkzMjRkOWRlNi9wYWNrYWdlcy9mYmpzL3NyYy9fX2ZvcmtzX18vd2FybmluZy5qc1xuICpcbiAqIE9ubHkgY2hhbmdlIGlzIHdlIHVzZSBjb25zb2xlLndhcm4gaW5zdGVhZCBvZiBjb25zb2xlLmVycm9yLFxuICogYW5kIGRvIG5vdGhpbmcgd2hlbiAnY29uc29sZScgaXMgbm90IHN1cHBvcnRlZC5cbiAqIFRoaXMgcmVhbGx5IHNpbXBsaWZpZXMgdGhlIGNvZGUuXG4gKiAtLS1cbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgbG93UHJpb3JpdHlXYXJuaW5nID0gZnVuY3Rpb24gKCkge307XG5cbntcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgbG93UHJpb3JpdHlXYXJuaW5nID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyQxID0gbG93UHJpb3JpdHlXYXJuaW5nO1xuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgKF9jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBfY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArICcuJyArIGNhbGxlck5hbWU7XG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3YXJuaW5nKGZhbHNlLCBcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuICAgIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoaXMgY29tcG9zaXRlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB3ZSB3YW50IHRvIHRlc3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBmaW5hbFxuICAgKi9cbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAgICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAgICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAgICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAqXG4gICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdyZXBsYWNlU3RhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIFRoaXMgb25seSBleGlzdHMgYmVjYXVzZSBfcGVuZGluZ1N0YXRlIGlzXG4gICAqIGludGVybmFsLiBUaGlzIHByb3ZpZGVzIGEgbWVyZ2luZyBzdHJhdGVneSB0aGF0IGlzIG5vdCBhdmFpbGFibGUgdG8gZGVlcFxuICAgKiBwcm9wZXJ0aWVzIHdoaWNoIGlzIGNvbmZ1c2luZy4gVE9ETzogRXhwb3NlIHBlbmRpbmdTdGF0ZSBvciBkb24ndCB1c2UgaXRcbiAgICogZHVyaW5nIHRoZSBtZXJnZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IE5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gIH1cbn07XG5cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG5cbi8qKlxuICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyB0byBtdXRhdGVcbiAqIHN0YXRlLiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCB3aWxsIHJ1biBzeW5jaHJvbm91c2x5LFxuICogYXMgdGhleSBtYXkgZXZlbnR1YWxseSBiZSBiYXRjaGVkIHRvZ2V0aGVyLiAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsXG4gKiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgY2FsbCB0byBzZXRTdGF0ZSBpcyBhY3R1YWxseVxuICogY29tcGxldGVkLlxuICpcbiAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwcm92aWRlZCB0byBzZXRTdGF0ZSwgaXQgd2lsbCBiZSBjYWxsZWQgYXQgc29tZSBwb2ludCBpblxuICogdGhlIGZ1dHVyZSAobm90IHN5bmNocm9ub3VzbHkpLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSB1cCB0byBkYXRlXG4gKiBjb21wb25lbnQgYXJndW1lbnRzIChzdGF0ZSwgcHJvcHMsIGNvbnRleHQpLiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGRpZmZlcmVudFxuICogZnJvbSB0aGlzLiogYmVjYXVzZSB5b3VyIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgYWZ0ZXIgcmVjZWl2ZVByb3BzIGJ1dCBiZWZvcmVcbiAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgYW5kIHRoaXMgbmV3IHN0YXRlLCBwcm9wcywgYW5kIGNvbnRleHQgd2lsbCBub3QgeWV0IGJlXG4gKiBhc3NpZ25lZCB0byB0aGlzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIG9yIGZ1bmN0aW9uIHRvXG4gKiAgICAgICAgcHJvZHVjZSBuZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgISh0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnZnVuY3Rpb24nIHx8IHBhcnRpYWxTdGF0ZSA9PSBudWxsKSA/IGludmFyaWFudChmYWxzZSwgJ3NldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLicpIDogdm9pZCAwO1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssICdzZXRTdGF0ZScpO1xufTtcblxuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLCBjYWxsYmFjaywgJ2ZvcmNlVXBkYXRlJyk7XG59O1xuXG4vKipcbiAqIERlcHJlY2F0ZWQgQVBJcy4gVGhlc2UgQVBJcyB1c2VkIHRvIGV4aXN0IG9uIGNsYXNzaWMgUmVhY3QgY2xhc3NlcyBidXQgc2luY2VcbiAqIHdlIHdvdWxkIGxpa2UgdG8gZGVwcmVjYXRlIHRoZW0sIHdlJ3JlIG5vdCBnb2luZyB0byBtb3ZlIHRoZW0gb3ZlciB0byB0aGlzXG4gKiBtb2Rlcm4gYmFzZSBjbGFzcy4gSW5zdGVhZCwgd2UgZGVmaW5lIGEgZ2V0dGVyIHRoYXQgd2FybnMgaWYgaXQncyBhY2Nlc3NlZC5cbiAqL1xue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG4gIHZhciBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgaW5mbykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG93UHJpb3JpdHlXYXJuaW5nJDEoZmFsc2UsICclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBmb3IgKHZhciBmbk5hbWUgaW4gZGVwcmVjYXRlZEFQSXMpIHtcbiAgICBpZiAoZGVwcmVjYXRlZEFQSXMuaGFzT3duUHJvcGVydHkoZm5OYW1lKSkge1xuICAgICAgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKGZuTmFtZSwgZGVwcmVjYXRlZEFQSXNbZm5OYW1lXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudER1bW15KCkge31cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ29udmVuaWVuY2UgY29tcG9uZW50IHdpdGggZGVmYXVsdCBzaGFsbG93IGVxdWFsaXR5IGNoZWNrIGZvciBzQ1UuXG4gKi9cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7XG4vLyBBdm9pZCBhbiBleHRyYSBwcm90b3R5cGUganVtcCBmb3IgdGhlc2UgbWV0aG9kcy5cbl9hc3NpZ24ocHVyZUNvbXBvbmVudFByb3RvdHlwZSwgQ29tcG9uZW50LnByb3RvdHlwZSk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG4gIHtcbiAgICBPYmplY3Quc2VhbChyZWZPYmplY3QpO1xuICB9XG4gIHJldHVybiByZWZPYmplY3Q7XG59XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcblxudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdm9pZCAwO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuICAgICAgd2FybmluZyhmYWxzZSwgJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9mYi5tZS9yZWFjdC1zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICB9XG4gIH07XG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICAgIHdhcm5pbmcoZmFsc2UsICclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vZmIubWUvcmVhY3Qtc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgfVxuICB9O1xuICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgbm8gaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBpbnRlcm5hbFxuICovXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9O1xuXG4gICAgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7XG4gICAgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pO1xuICAgIC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IG9mIHRoZSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWUgPSB2b2lkIDA7XG5cbiAgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuICB2YXIgcHJvcHMgPSB7fTtcblxuICB2YXIga2V5ID0gbnVsbDtcbiAgdmFyIHJlZiA9IG51bGw7XG4gIHZhciBzZWxmID0gbnVsbDtcbiAgdmFyIHNvdXJjZSA9IG51bGw7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgfVxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTtcbiAgICAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cbiAgICB7XG4gICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgfVxuICAgIH1cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB7XG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvcHMuJCR0eXBlb2YgPT09ICd1bmRlZmluZWQnIHx8IHByb3BzLiQkdHlwZW9mICE9PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVmKSB7XG4gICAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzIFJlYWN0RWxlbWVudHMgb2YgYSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVmYWN0b3J5XG4gKi9cblxuXG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KG9sZEVsZW1lbnQudHlwZSwgbmV3S2V5LCBvbGRFbGVtZW50LnJlZiwgb2xkRWxlbWVudC5fc2VsZiwgb2xkRWxlbWVudC5fc291cmNlLCBvbGRFbGVtZW50Ll9vd25lciwgb2xkRWxlbWVudC5wcm9wcyk7XG5cbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICAhIShlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkgPyBpbnZhcmlhbnQoZmFsc2UsICdSZWFjdC5jbG9uZUVsZW1lbnQoLi4uKTogVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCAlcy4nLCBlbGVtZW50KSA6IHZvaWQgMDtcblxuICB2YXIgcHJvcE5hbWUgPSB2b2lkIDA7XG5cbiAgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuICB2YXIgcHJvcHMgPSBfYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTtcblxuICAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmO1xuICAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7XG4gIC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlO1xuXG4gIC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cbiAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICB9XG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB2b2lkIDA7XG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcyk7XG59XG5cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgdmFsaWQgY29tcG9uZW50LlxuICogQGZpbmFsXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xuXG57XG4gIC8vIENvbXBvbmVudCB0aGF0IGlzIGJlaW5nIHdvcmtlZCBvblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjayA9IG51bGw7XG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHJldHVybiBpbXBsKCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xufVxuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6JztcblxuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5mdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XG4gIHZhciBlc2NhcGVyTG9va3VwID0ge1xuICAgICc9JzogJz0wJyxcbiAgICAnOic6ICc9MidcbiAgfTtcbiAgdmFyIGVzY2FwZWRTdHJpbmcgPSAoJycgKyBrZXkpLnJlcGxhY2UoZXNjYXBlUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBlc2NhcGVyTG9va3VwW21hdGNoXTtcbiAgfSk7XG5cbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG5cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG5cbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gKCcnICsgdGV4dCkucmVwbGFjZSh1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCwgJyQmLycpO1xufVxuXG52YXIgUE9PTF9TSVpFID0gMTA7XG52YXIgdHJhdmVyc2VDb250ZXh0UG9vbCA9IFtdO1xuZnVuY3Rpb24gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG1hcFJlc3VsdCwga2V5UHJlZml4LCBtYXBGdW5jdGlvbiwgbWFwQ29udGV4dCkge1xuICBpZiAodHJhdmVyc2VDb250ZXh0UG9vbC5sZW5ndGgpIHtcbiAgICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gdHJhdmVyc2VDb250ZXh0UG9vbC5wb3AoKTtcbiAgICB0cmF2ZXJzZUNvbnRleHQucmVzdWx0ID0gbWFwUmVzdWx0O1xuICAgIHRyYXZlcnNlQ29udGV4dC5rZXlQcmVmaXggPSBrZXlQcmVmaXg7XG4gICAgdHJhdmVyc2VDb250ZXh0LmZ1bmMgPSBtYXBGdW5jdGlvbjtcbiAgICB0cmF2ZXJzZUNvbnRleHQuY29udGV4dCA9IG1hcENvbnRleHQ7XG4gICAgdHJhdmVyc2VDb250ZXh0LmNvdW50ID0gMDtcbiAgICByZXR1cm4gdHJhdmVyc2VDb250ZXh0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICByZXN1bHQ6IG1hcFJlc3VsdCxcbiAgICAgIGtleVByZWZpeDoga2V5UHJlZml4LFxuICAgICAgZnVuYzogbWFwRnVuY3Rpb24sXG4gICAgICBjb250ZXh0OiBtYXBDb250ZXh0LFxuICAgICAgY291bnQ6IDBcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KSB7XG4gIHRyYXZlcnNlQ29udGV4dC5yZXN1bHQgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQua2V5UHJlZml4ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmZ1bmMgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuY29udGV4dCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5jb3VudCA9IDA7XG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCA8IFBPT0xfU0laRSkge1xuICAgIHRyYXZlcnNlQ29udGV4dFBvb2wucHVzaCh0cmF2ZXJzZUNvbnRleHQpO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0geyFzdHJpbmd9IG5hbWVTb0ZhciBOYW1lIG9mIHRoZSBrZXkgcGF0aCBzbyBmYXIuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gaW52b2tlIHdpdGggZWFjaCBjaGlsZCBmb3VuZC5cbiAqIEBwYXJhbSB7Pyp9IHRyYXZlcnNlQ29udGV4dCBVc2VkIHRvIHBhc3MgaW5mb3JtYXRpb24gdGhyb3VnaG91dCB0aGUgdHJhdmVyc2FsXG4gKiBwcm9jZXNzLlxuICogQHJldHVybiB7IW51bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbiBpbiB0aGlzIHN1YnRyZWUuXG4gKi9cbmZ1bmN0aW9uIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCBuYW1lU29GYXIsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGlmIChjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgc3dpdGNoIChjaGlsZHJlbi4kJHR5cGVvZikge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayh0cmF2ZXJzZUNvbnRleHQsIGNoaWxkcmVuLFxuICAgIC8vIElmIGl0J3MgdGhlIG9ubHkgY2hpbGQsIHRyZWF0IHRoZSBuYW1lIGFzIGlmIGl0IHdhcyB3cmFwcGVkIGluIGFuIGFycmF5XG4gICAgLy8gc28gdGhhdCBpdCdzIGNvbnNpc3RlbnQgaWYgdGhlIG51bWJlciBvZiBjaGlsZHJlbiBncm93cy5cbiAgICBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkcmVuLCAwKSA6IG5hbWVTb0Zhcik7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQgPSB2b2lkIDA7XG4gIHZhciBuZXh0TmFtZSA9IHZvaWQgMDtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB7XG4gICAgICAgIC8vIFdhcm4gYWJvdXQgdXNpbmcgTWFwcyBhcyBjaGlsZHJlblxuICAgICAgICBpZiAoaXRlcmF0b3JGbiA9PT0gY2hpbGRyZW4uZW50cmllcykge1xuICAgICAgICAgICFkaWRXYXJuQWJvdXRNYXBzID8gd2FybmluZyhmYWxzZSwgJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgdW5zdXBwb3J0ZWQgYW5kIHdpbGwgbGlrZWx5IHlpZWxkICcgKyAndW5leHBlY3RlZCByZXN1bHRzLiBDb252ZXJ0IGl0IHRvIGEgc2VxdWVuY2UvaXRlcmFibGUgb2Yga2V5ZWQgJyArICdSZWFjdEVsZW1lbnRzIGluc3RlYWQuJXMnLCBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKSkgOiB2b2lkIDA7XG4gICAgICAgICAgZGlkV2FybkFib3V0TWFwcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKGNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwID0gdm9pZCAwO1xuICAgICAgdmFyIGlpID0gMDtcbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgY2hpbGQgPSBzdGVwLnZhbHVlO1xuICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGFkZGVuZHVtID0gJyc7XG4gICAgICB7XG4gICAgICAgIGFkZGVuZHVtID0gJyBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgKyAnaW5zdGVhZC4nICsgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG4gICAgICB9XG4gICAgICB2YXIgY2hpbGRyZW5TdHJpbmcgPSAnJyArIGNoaWxkcmVuO1xuICAgICAgaW52YXJpYW50KGZhbHNlLCAnT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiAlcykuJXMnLCBjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcsIGFkZGVuZHVtKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuXG4vKipcbiAqIFRyYXZlcnNlcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAsIGJ1dFxuICogbWlnaHQgYWxzbyBiZSBzcGVjaWZpZWQgdGhyb3VnaCBhdHRyaWJ1dGVzOlxuICpcbiAqIC0gYHRyYXZlcnNlQWxsQ2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbiwgLi4uKWBcbiAqIC0gYHRyYXZlcnNlQWxsQ2hpbGRyZW4odGhpcy5wcm9wcy5sZWZ0UGFuZWxDaGlsZHJlbiwgLi4uKWBcbiAqXG4gKiBUaGUgYHRyYXZlcnNlQ29udGV4dGAgaXMgYW4gb3B0aW9uYWwgYXJndW1lbnQgdGhhdCBpcyBwYXNzZWQgdGhyb3VnaCB0aGVcbiAqIGVudGlyZSB0cmF2ZXJzYWwuIEl0IGNhbiBiZSB1c2VkIHRvIHN0b3JlIGFjY3VtdWxhdGlvbnMgb3IgYW55dGhpbmcgZWxzZSB0aGF0XG4gKiB0aGUgY2FsbGJhY2sgbWlnaHQgZmluZCByZWxldmFudC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIG9iamVjdC5cbiAqIEBwYXJhbSB7IWZ1bmN0aW9ufSBjYWxsYmFjayBUbyBpbnZva2UgdXBvbiB0cmF2ZXJzaW5nIGVhY2ggY2hpbGQuXG4gKiBAcGFyYW0gez8qfSB0cmF2ZXJzZUNvbnRleHQgQ29udGV4dCBmb3IgdHJhdmVyc2FsLlxuICogQHJldHVybiB7IW51bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbiBpbiB0aGlzIHN1YnRyZWUuXG4gKi9cbmZ1bmN0aW9uIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHJldHVybiB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZHJlbiwgJycsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBjb21wb25lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gY29tcG9uZW50IEEgY29tcG9uZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldENvbXBvbmVudEtleShjb21wb25lbnQsIGluZGV4KSB7XG4gIC8vIERvIHNvbWUgdHlwZWNoZWNraW5nIGhlcmUgc2luY2Ugd2UgY2FsbCB0aGlzIGJsaW5kbHkuIFdlIHdhbnQgdG8gZW5zdXJlXG4gIC8vIHRoYXQgd2UgZG9uJ3QgYmxvY2sgcG90ZW50aWFsIGZ1dHVyZSBFUyBBUElzLlxuICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ29iamVjdCcgJiYgY29tcG9uZW50ICE9PSBudWxsICYmIGNvbXBvbmVudC5rZXkgIT0gbnVsbCkge1xuICAgIC8vIEV4cGxpY2l0IGtleVxuICAgIHJldHVybiBlc2NhcGUoY29tcG9uZW50LmtleSk7XG4gIH1cbiAgLy8gSW1wbGljaXQga2V5IGRldGVybWluZWQgYnkgdGhlIGluZGV4IGluIHRoZSBzZXRcbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaFNpbmdsZUNoaWxkKGJvb2tLZWVwaW5nLCBjaGlsZCwgbmFtZSkge1xuICB2YXIgZnVuYyA9IGJvb2tLZWVwaW5nLmZ1bmMsXG4gICAgICBjb250ZXh0ID0gYm9va0tlZXBpbmcuY29udGV4dDtcblxuICBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xufVxuXG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3QuY2hpbGRyZW4uZm9yZWFjaFxuICpcbiAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmb3JFYWNoRnVuY1xuICogQHBhcmFtIHsqfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IGZvciBmb3JFYWNoQ29udGV4dC5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChudWxsLCBudWxsLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpO1xuICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoU2luZ2xlQ2hpbGQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gbWFwU2luZ2xlQ2hpbGRJbnRvQ29udGV4dChib29rS2VlcGluZywgY2hpbGQsIGNoaWxkS2V5KSB7XG4gIHZhciByZXN1bHQgPSBib29rS2VlcGluZy5yZXN1bHQsXG4gICAgICBrZXlQcmVmaXggPSBib29rS2VlcGluZy5rZXlQcmVmaXgsXG4gICAgICBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuXG5cbiAgdmFyIG1hcHBlZENoaWxkID0gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBib29rS2VlcGluZy5jb3VudCsrKTtcbiAgaWYgKEFycmF5LmlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChtYXBwZWRDaGlsZCwgcmVzdWx0LCBjaGlsZEtleSwgZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50KTtcbiAgfSBlbHNlIGlmIChtYXBwZWRDaGlsZCAhPSBudWxsKSB7XG4gICAgaWYgKGlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgbWFwcGVkQ2hpbGQgPSBjbG9uZUFuZFJlcGxhY2VLZXkobWFwcGVkQ2hpbGQsXG4gICAgICAvLyBLZWVwIGJvdGggdGhlIChtYXBwZWQpIGFuZCBvbGQga2V5cyBpZiB0aGV5IGRpZmZlciwganVzdCBhc1xuICAgICAgLy8gdHJhdmVyc2VBbGxDaGlsZHJlbiB1c2VkIHRvIGRvIGZvciBvYmplY3RzIGFzIGNoaWxkcmVuXG4gICAgICBrZXlQcmVmaXggKyAobWFwcGVkQ2hpbGQua2V5ICYmICghY2hpbGQgfHwgY2hpbGQua2V5ICE9PSBtYXBwZWRDaGlsZC5rZXkpID8gZXNjYXBlVXNlclByb3ZpZGVkS2V5KG1hcHBlZENoaWxkLmtleSkgKyAnLycgOiAnJykgKyBjaGlsZEtleSk7XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKG1hcHBlZENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCBhcnJheSwgcHJlZml4LCBmdW5jLCBjb250ZXh0KSB7XG4gIHZhciBlc2NhcGVkUHJlZml4ID0gJyc7XG4gIGlmIChwcmVmaXggIT0gbnVsbCkge1xuICAgIGVzY2FwZWRQcmVmaXggPSBlc2NhcGVVc2VyUHJvdmlkZWRLZXkocHJlZml4KSArICcvJztcbiAgfVxuICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KGFycmF5LCBlc2NhcGVkUHJlZml4LCBmdW5jLCBjb250ZXh0KTtcbiAgdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgbWFwU2luZ2xlQ2hpbGRJbnRvQ29udGV4dCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG4vKipcbiAqIE1hcHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3QuY2hpbGRyZW4ubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBrZXksIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmMsIGNvbnRleHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhc1xuICogYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0LmNoaWxkcmVuLmNvdW50XG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4uXG4gKi9cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsLCBudWxsKTtcbn1cblxuLyoqXG4gKiBGbGF0dGVuIGEgY2hpbGRyZW4gb2JqZWN0ICh0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmApIGFuZFxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0LmNoaWxkcmVuLnRvYXJyYXlcbiAqL1xuZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIHJlc3VsdCwgbnVsbCwgZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBjaGlsZCBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4gYW5kIHZlcmlmaWVzIHRoYXQgdGhlcmVcbiAqIGlzIG9ubHkgb25lIGNoaWxkIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3QuY2hpbGRyZW4ub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgIWlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSA/IGludmFyaWFudChmYWxzZSwgJ1JlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLicpIDogdm9pZCAwO1xuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykge1xuICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB7XG4gICAgICAhKGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSBudWxsIHx8IHR5cGVvZiBjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gJ2Z1bmN0aW9uJykgPyB3YXJuaW5nKGZhbHNlLCAnY3JlYXRlQ29udGV4dDogRXhwZWN0ZWQgdGhlIG9wdGlvbmFsIHNlY29uZCBhcmd1bWVudCB0byBiZSBhICcgKyAnZnVuY3Rpb24uIEluc3RlYWQgcmVjZWl2ZWQ6ICVzJywgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIDogdm9pZCAwO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250ZXh0ID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjYWxjdWxhdGVDaGFuZ2VkQml0cyxcbiAgICBfZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXG4gICAgLy8gc29tZSByZW5kZXJlcnMgYXMgcHJpbWFyeSBhbmQgb3RoZXJzIGFzIHNlY29uZGFyeS4gV2Ugb25seSBleHBlY3RcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cbiAgICAvLyBTZWNvbmRhcnkgcmVuZGVyZXJzIHN0b3JlIHRoZWlyIGNvbnRleHQgdmFsdWVzIG9uIHNlcGFyYXRlIGZpZWxkcy5cbiAgICBfY3VycmVudFZhbHVlMjogZGVmYXVsdFZhbHVlLFxuICAgIF9jaGFuZ2VkQml0czogMCxcbiAgICBfY2hhbmdlZEJpdHMyOiAwLFxuICAgIC8vIFRoZXNlIGFyZSBjaXJjdWxhclxuICAgIFByb3ZpZGVyOiBudWxsLFxuICAgIENvbnN1bWVyOiBudWxsXG4gIH07XG5cbiAgY29udGV4dC5Qcm92aWRlciA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfUFJPVklERVJfVFlQRSxcbiAgICBfY29udGV4dDogY29udGV4dFxuICB9O1xuICBjb250ZXh0LkNvbnN1bWVyID0gY29udGV4dDtcblxuICB7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyID0gbnVsbDtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIyID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICB7XG4gICAgISh0eXBlb2YgcmVuZGVyID09PSAnZnVuY3Rpb24nKSA/IHdhcm5pbmcoZmFsc2UsICdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCB3YXMgZ2l2ZW4gJXMuJywgcmVuZGVyID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJlbmRlcikgOiB2b2lkIDA7XG5cbiAgICBpZiAocmVuZGVyICE9IG51bGwpIHtcbiAgICAgICEocmVuZGVyLmRlZmF1bHRQcm9wcyA9PSBudWxsICYmIHJlbmRlci5wcm9wVHlwZXMgPT0gbnVsbCkgPyB3YXJuaW5nKGZhbHNlLCAnZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKSA6IHZvaWQgMDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG59XG5cbnZhciBkZXNjcmliZUNvbXBvbmVudEZyYW1lID0gZnVuY3Rpb24gKG5hbWUsIHNvdXJjZSwgb3duZXJOYW1lKSB7XG4gIHJldHVybiAnXFxuICAgIGluICcgKyAobmFtZSB8fCAnVW5rbm93bicpICsgKHNvdXJjZSA/ICcgKGF0ICcgKyBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpICsgJzonICsgc291cmNlLmxpbmVOdW1iZXIgKyAnKScgOiBvd25lck5hbWUgPyAnIChjcmVhdGVkIGJ5ICcgKyBvd25lck5hbWUgKyAnKScgOiAnJyk7XG59O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8XG4gIC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9USU1FT1VUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKGZpYmVyKSB7XG4gIHZhciB0eXBlID0gZmliZXIudHlwZTtcblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWU7XG4gIH1cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdBc3luY01vZGUnO1xuICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgcmV0dXJuICdDb250ZXh0LkNvbnN1bWVyJztcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ1JlYWN0RnJhZ21lbnQnO1xuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1JlYWN0UG9ydGFsJztcbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyKCcgKyBmaWJlci5wZW5kaW5nUHJvcHMuaWQgKyAnKSc7XG4gICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgcmV0dXJuICdDb250ZXh0LlByb3ZpZGVyJztcbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuICAgIGNhc2UgUkVBQ1RfVElNRU9VVF9UWVBFOlxuICAgICAgcmV0dXJuICdUaW1lb3V0JztcbiAgfVxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgdmFyIGZ1bmN0aW9uTmFtZSA9IHR5cGUucmVuZGVyLmRpc3BsYXlOYW1lIHx8IHR5cGUucmVuZGVyLm5hbWUgfHwgJyc7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbk5hbWUgIT09ICcnID8gJ0ZvcndhcmRSZWYoJyArIGZ1bmN0aW9uTmFtZSArICcpJyA6ICdGb3J3YXJkUmVmJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogUmVhY3RFbGVtZW50VmFsaWRhdG9yIHByb3ZpZGVzIGEgd3JhcHBlciBhcm91bmQgYSBlbGVtZW50IGZhY3RvcnlcbiAqIHdoaWNoIHZhbGlkYXRlcyB0aGUgcHJvcHMgcGFzc2VkIHRvIHRoZSBlbGVtZW50LiBUaGlzIGlzIGludGVuZGVkIHRvIGJlXG4gKiB1c2VkIG9ubHkgaW4gREVWIGFuZCBjb3VsZCBiZSByZXBsYWNlZCBieSBhIHN0YXRpYyB0eXBlIGNoZWNrZXIgZm9yIGxhbmd1YWdlc1xuICogdGhhdCBzdXBwb3J0IGl0LlxuICovXG5cbnZhciBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IHZvaWQgMDtcbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHZvaWQgMDtcblxudmFyIGdldERpc3BsYXlOYW1lID0gZnVuY3Rpb24gKCkge307XG52YXIgZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gbnVsbDtcblxuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xuXG4gIGdldERpc3BsYXlOYW1lID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyNlbXB0eSc7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGVsZW1lbnQgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gJyN0ZXh0JztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50LnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC50eXBlO1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudC50eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFKSB7XG4gICAgICByZXR1cm4gJ1JlYWN0LkZyYWdtZW50JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVsZW1lbnQudHlwZS5kaXNwbGF5TmFtZSB8fCBlbGVtZW50LnR5cGUubmFtZSB8fCAnVW5rbm93bic7XG4gICAgfVxuICB9O1xuXG4gIGdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7XG4gICAgaWYgKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldERpc3BsYXlOYW1lKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KTtcbiAgICAgIHZhciBvd25lciA9IGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50Ll9vd25lcjtcbiAgICAgIHN0YWNrICs9IGRlc2NyaWJlQ29tcG9uZW50RnJhbWUobmFtZSwgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQuX3NvdXJjZSwgb3duZXIgJiYgZ2V0Q29tcG9uZW50TmFtZShvd25lcikpO1xuICAgIH1cbiAgICBzdGFjayArPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKSB8fCAnJztcbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCk7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMpIHtcbiAgaWYgKGVsZW1lbnRQcm9wcyAhPT0gbnVsbCAmJiBlbGVtZW50UHJvcHMgIT09IHVuZGVmaW5lZCAmJiBlbGVtZW50UHJvcHMuX19zb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBzb3VyY2UgPSBlbGVtZW50UHJvcHMuX19zb3VyY2U7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcbiAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgaW5mbyA9ICdcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDwnICsgcGFyZW50TmFtZSArICc+Lic7XG4gICAgfVxuICB9XG4gIHJldHVybiBpbmZvO1xufVxuXG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuXG4gIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlO1xuXG4gIC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuICB2YXIgY2hpbGRPd25lciA9ICcnO1xuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgIGNoaWxkT3duZXIgPSAnIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tICcgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyKSArICcuJztcbiAgfVxuXG4gIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gZWxlbWVudDtcbiAge1xuICAgIHdhcm5pbmcoZmFsc2UsICdFYWNoIGNoaWxkIGluIGFuIGFycmF5IG9yIGl0ZXJhdG9yIHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLiVzJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lciwgZ2V0U3RhY2tBZGRlbmR1bSgpKTtcbiAgfVxuICBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IG51bGw7XG59XG5cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXAgPSB2b2lkIDA7XG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAgdmFyIGNvbXBvbmVudENsYXNzID0gZWxlbWVudC50eXBlO1xuICBpZiAodHlwZW9mIGNvbXBvbmVudENsYXNzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuYW1lID0gY29tcG9uZW50Q2xhc3MuZGlzcGxheU5hbWUgfHwgY29tcG9uZW50Q2xhc3MubmFtZTtcbiAgdmFyIHByb3BUeXBlcyA9IGNvbXBvbmVudENsYXNzLnByb3BUeXBlcztcbiAgaWYgKHByb3BUeXBlcykge1xuICAgIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gZWxlbWVudDtcbiAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZ2V0U3RhY2tBZGRlbmR1bSk7XG4gICAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBudWxsO1xuICB9IGVsc2UgaWYgKGNvbXBvbmVudENsYXNzLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICB3YXJuaW5nKGZhbHNlLCAnQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgbmFtZSB8fCAnVW5rbm93bicpO1xuICB9XG4gIGlmICh0eXBlb2YgY29tcG9uZW50Q2xhc3MuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgIWNvbXBvbmVudENsYXNzLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCA/IHdhcm5pbmcoZmFsc2UsICdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJykgOiB2b2lkIDA7XG4gIH1cbn1cblxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBmcmFnbWVudDtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLiVzJywga2V5LCBnZXRTdGFja0FkZGVuZHVtKCkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgIHdhcm5pbmcoZmFsc2UsICdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiVzJywgZ2V0U3RhY2tBZGRlbmR1bSgpKTtcbiAgfVxuXG4gIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpO1xuXG4gIC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG4gIGlmICghdmFsaWRUeXBlKSB7XG4gICAgdmFyIGluZm8gPSAnJztcbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHByb3BzKTtcbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIGluZm8gKz0gZ2V0U3RhY2tBZGRlbmR1bSgpIHx8ICcnO1xuXG4gICAgdmFyIHR5cGVTdHJpbmcgPSB2b2lkIDA7XG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHdhcm5pbmcoZmFsc2UsICdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcbiAgLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuICB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbGlkYXRlZEZhY3RvcnksICd0eXBlJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG93UHJpb3JpdHlXYXJuaW5nJDEoZmFsc2UsICdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICB2YWx1ZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVkRmFjdG9yeTtcbn1cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCBuZXdFbGVtZW50LnR5cGUpO1xuICB9XG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxudmFyIFJlYWN0ID0ge1xuICBDaGlsZHJlbjoge1xuICAgIG1hcDogbWFwQ2hpbGRyZW4sXG4gICAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxuICAgIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICAgIHRvQXJyYXk6IHRvQXJyYXksXG4gICAgb25seTogb25seUNoaWxkXG4gIH0sXG5cbiAgY3JlYXRlUmVmOiBjcmVhdGVSZWYsXG4gIENvbXBvbmVudDogQ29tcG9uZW50LFxuICBQdXJlQ29tcG9uZW50OiBQdXJlQ29tcG9uZW50LFxuXG4gIGNyZWF0ZUNvbnRleHQ6IGNyZWF0ZUNvbnRleHQsXG4gIGZvcndhcmRSZWY6IGZvcndhcmRSZWYsXG5cbiAgRnJhZ21lbnQ6IFJFQUNUX0ZSQUdNRU5UX1RZUEUsXG4gIFN0cmljdE1vZGU6IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUsXG4gIHVuc3RhYmxlX0FzeW5jTW9kZTogUkVBQ1RfQVNZTkNfTU9ERV9UWVBFLFxuICB1bnN0YWJsZV9Qcm9maWxlcjogUkVBQ1RfUFJPRklMRVJfVFlQRSxcblxuICBjcmVhdGVFbGVtZW50OiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24sXG4gIGNsb25lRWxlbWVudDogY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24sXG4gIGNyZWF0ZUZhY3Rvcnk6IGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbixcbiAgaXNWYWxpZEVsZW1lbnQ6IGlzVmFsaWRFbGVtZW50LFxuXG4gIHZlcnNpb246IFJlYWN0VmVyc2lvbixcblxuICBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDoge1xuICAgIFJlYWN0Q3VycmVudE93bmVyOiBSZWFjdEN1cnJlbnRPd25lcixcbiAgICAvLyBVc2VkIGJ5IHJlbmRlcmVycyB0byBhdm9pZCBidW5kbGluZyBvYmplY3QtYXNzaWduIHR3aWNlIGluIFVNRCBidW5kbGVzOlxuICAgIGFzc2lnbjogX2Fzc2lnblxuICB9XG59O1xuXG5pZiAoZW5hYmxlU3VzcGVuc2UpIHtcbiAgUmVhY3QuVGltZW91dCA9IFJFQUNUX1RJTUVPVVRfVFlQRTtcbn1cblxue1xuICBfYXNzaWduKFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVELCB7XG4gICAgLy8gVGhlc2Ugc2hvdWxkIG5vdCBiZSBpbmNsdWRlZCBpbiBwcm9kdWN0aW9uLlxuICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWU6IFJlYWN0RGVidWdDdXJyZW50RnJhbWUsXG4gICAgLy8gU2hpbSBmb3IgUmVhY3QgRE9NIDE2LjAuMCB3aGljaCBzdGlsbCBkZXN0cnVjdHVyZWQgKGJ1dCBub3QgdXNlZCkgdGhpcy5cbiAgICAvLyBUT0RPOiByZW1vdmUgaW4gUmVhY3QgMTcuMC5cbiAgICBSZWFjdENvbXBvbmVudFRyZWVIb29rOiB7fVxuICB9KTtcbn1cblxuXG5cbnZhciBSZWFjdCQyID0gT2JqZWN0LmZyZWV6ZSh7XG5cdGRlZmF1bHQ6IFJlYWN0XG59KTtcblxudmFyIFJlYWN0JDMgPSAoIFJlYWN0JDIgJiYgUmVhY3QgKSB8fCBSZWFjdCQyO1xuXG4vLyBUT0RPOiBkZWNpZGUgb24gdGhlIHRvcC1sZXZlbCBleHBvcnQgZm9ybS5cbi8vIFRoaXMgaXMgaGFja3kgYnV0IG1ha2VzIGl0IHdvcmsgd2l0aCBib3RoIFJvbGx1cCBhbmQgSmVzdC5cbnZhciByZWFjdCA9IFJlYWN0JDMuZGVmYXVsdCA/IFJlYWN0JDMuZGVmYXVsdCA6IFJlYWN0JDM7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVhY3Q7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IEtleXMgfSBmcm9tICdrZXljdXRzJ1xuXG5jbGFzcyBLZXlDdXRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMucHJvcHMub3B0aW9uc1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlblxuXG4gICAgaWYgKGNoaWxkcmVuKSB0aGlzLmtleXMgPSBuZXcgS2V5cyh0aGlzLl9lbCwgb3B0aW9ucylcbiAgICBlbHNlIHRoaXMua2V5cyA9IG5ldyBLZXlzKGRvY3VtZW50LCBvcHRpb25zKVxuXG4gICAgdGhpcy51cGRhdGVCaW5kaW5ncygpXG4gICAgdGhpcy51cGRhdGVXYXRjaGVycygpXG5cbiAgICB0aGlzLnBhdXNlUmVzdW1lKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMua2V5cy5zdG9wKClcbiAgICB0aGlzLmtleXMucmVzZXQoKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmIChwcmV2UHJvcHMuYmluZCAhPT0gdGhpcy5wcm9wcy5iaW5kKSB0aGlzLnVwZGF0ZUJpbmRpbmdzKClcbiAgICBpZiAocHJldlByb3BzLndhdGNoICE9PSB0aGlzLnByb3BzLndhdGNoKSB0aGlzLnVwZGF0ZVdhdGNoZXJzKClcbiAgICBpZiAocHJldlByb3BzLnBhdXNlZCAhPT0gdGhpcy5wcm9wcy5wYXVzZWQpIHRoaXMucGF1c2VSZXN1bWUoKVxuICB9XG5cbiAgcGF1c2VSZXN1bWUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMucGF1c2VkKSB0aGlzLmtleXMuc3RvcCgpXG4gICAgZWxzZSB0aGlzLmtleXMucmVzdW1lKClcbiAgfVxuXG4gIHVwZGF0ZUJpbmRpbmdzID0gKCkgPT4ge1xuICAgIHRoaXMua2V5cy51bmJpbmRBbGwoKVxuXG4gICAgY29uc3QgYmluZGluZ3MgPSB0aGlzLnByb3BzLmJpbmRcblxuICAgIGlmICghYmluZGluZ3MpIHJldHVyblxuXG4gICAgaWYgKHR5cGVvZiBiaW5kaW5ncyAhPT0gJ29iamVjdCcpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYmluZCBwYXJhbWV0ZXIgdmFsdWU6ICcgKyBiaW5kaW5ncylcblxuICAgIGZvciAobGV0IGJpbmRpbmcgb2YgT2JqZWN0LmVudHJpZXMoYmluZGluZ3MpKSB7XG4gICAgICBjb25zdCBbc2hvcnRjdXQsIGNhbGxiYWNrXSA9IGJpbmRpbmdcbiAgICAgIHRoaXMua2V5cy5iaW5kKHNob3J0Y3V0LCBjYWxsYmFjaylcbiAgICB9XG4gIH1cblxuICB1cGRhdGVXYXRjaGVycyA9ICgpID0+IHtcbiAgICB0aGlzLmtleXMudW53YXRjaEFsbCgpXG5cbiAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLnByb3BzLndhdGNoXG5cbiAgICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuXG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2FsbGJhY2tzKSlcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB3YXRjaCBwYXJhbWV0ZXIgdmFsdWU6ICcgKyBjYWxsYmFja3MpXG5cbiAgICBmb3IgKGxldCBjYWxsYmFjayBvZiBjYWxsYmFja3MpIHtcbiAgICAgIHRoaXMua2V5cy53YXRjaChjYWxsYmFjaylcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgY29uc3QgeyBjaGlsZHJlbiwgb3B0aW9ucywgLi4ub3RoZXIgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgLy8gVE9ETzogU3dpdGNoIGZyb20gZGl2IHRvIEZyYWdtZW50IGxhdGVyIG9uLCBidXQgRnJhZ21lbnRzXG4gICAgICAvLyBjdXJyZW50bHkgY2FuJ3QgaGF2ZSBldmVudCBsaXN0ZW5lcnMgYXR0YWNoZWQuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMjA1MVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiByZWY9e2VsID0+ICh0aGlzLl9lbCA9IGVsKX0gey4uLm90aGVyfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5LZXlDdXRzLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LFxuICBvcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuICBiaW5kOiBQcm9wVHlwZXMub2JqZWN0LFxuICB3YXRjaDogUHJvcFR5cGVzLmFycmF5LFxuICBwYXVzZWQ6IFByb3BUeXBlcy5ib29sXG59XG5cbmV4cG9ydCBkZWZhdWx0IEtleUN1dHNcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL2NvbXBvbmVudHMvS2V5Q3V0cydcbiJdLCJzb3VyY2VSb290IjoiIn0=
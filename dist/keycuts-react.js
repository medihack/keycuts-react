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

          console.log('here');

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

      if (children) this.keys = new _keycuts.Keys(this._el, options);else this.keys = new _keycuts.Keys(window, options);

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

Object.defineProperty(exports, 'KeyCuts', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_KeyCuts).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZXljdXRzUmVhY3Qvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2tleWN1dHNSZWFjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rZXljdXRzUmVhY3QvLi4va2V5Y3V0cy9kaXN0L2tleWN1dHMuanMiLCJ3ZWJwYWNrOi8va2V5Y3V0c1JlYWN0Ly4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8va2V5Y3V0c1JlYWN0Ly4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5T2JqZWN0LmpzIiwid2VicGFjazovL2tleWN1dHNSZWFjdC8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8va2V5Y3V0c1JlYWN0Ly4vbm9kZV9tb2R1bGVzL2ZianMvbGliL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8va2V5Y3V0c1JlYWN0Ly4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8va2V5Y3V0c1JlYWN0Ly4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8va2V5Y3V0c1JlYWN0Ly4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8va2V5Y3V0c1JlYWN0Ly4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8va2V5Y3V0c1JlYWN0Ly4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovL2tleWN1dHNSZWFjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8va2V5Y3V0c1JlYWN0Ly4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL2tleWN1dHNSZWFjdC8uL3NyYy9jb21wb25lbnRzL0tleUN1dHMuanMiLCJ3ZWJwYWNrOi8va2V5Y3V0c1JlYWN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIktleUN1dHMiLCJwYXVzZVJlc3VtZSIsInByb3BzIiwicGF1c2VkIiwia2V5cyIsInN0b3AiLCJyZXN1bWUiLCJ1cGRhdGVCaW5kaW5ncyIsInVuYmluZEFsbCIsImJpbmRpbmdzIiwiYmluZCIsIkVycm9yIiwiT2JqZWN0IiwiZW50cmllcyIsImJpbmRpbmciLCJjb25zb2xlIiwibG9nIiwic2hvcnRjdXQiLCJjYWxsYmFjayIsInVwZGF0ZVdhdGNoZXJzIiwidW53YXRjaEFsbCIsImNhbGxiYWNrcyIsIndhdGNoIiwiQXJyYXkiLCJpc0FycmF5Iiwib3B0aW9ucyIsImNoaWxkcmVuIiwiS2V5cyIsIl9lbCIsIndpbmRvdyIsInJlc2V0IiwicHJldlByb3BzIiwib3RoZXIiLCJlbCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnQiLCJvYmplY3QiLCJhcnJheSIsImJvb2wiLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURB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OztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViw2QkFBNkI7QUFDN0IsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUIsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixnQ0FBZ0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsUUFJRDs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBLGtEQUFrRDs7O0FBR2xEOzs7QUFHQTs7O0FBR0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzRkFBc0YsYUFBYTtBQUNuRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBNEYsZUFBZTtBQUMzRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1TkFBdU47QUFDdk47QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsV0FBVztBQUN4QixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsVUFBVTtBQUN2QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsV0FBVztBQUN4QixhQUFhLE9BQU87QUFDcEIsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0JBQWdCO0FBQzNCO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLGNBQWM7QUFDekIsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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TCxDQUFXd0I7QUFEZCxTQURGO0FBS0Q7O0FBRUQsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUE5RW1CUSxnQjs7QUFpRnRCbEMsUUFBUW1DLFNBQVIsR0FBb0I7QUFDbEJULFlBQVVVLG9CQUFVQyxPQURGO0FBRWxCWixXQUFTVyxvQkFBVUUsTUFGRDtBQUdsQjVCLFFBQU0wQixvQkFBVUUsTUFIRTtBQUlsQmhCLFNBQU9jLG9CQUFVRyxLQUpDO0FBS2xCcEMsVUFBUWlDLG9CQUFVSTtBQUxBLENBQXBCOztrQkFRZXhDLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRDQzdGTnlDLE8iLCJmaWxlIjoia2V5Y3V0cy1yZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImtleWN1dHMtcmVhY3RcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wia2V5Y3V0c1JlYWN0XCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImtleWN1dHNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wia2V5Y3V0c1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyBcIi4vc3JjL0tleXMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9LZXlzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZW5lcmF0ZUlkID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9nZW5lcmF0ZUlkICovIFwiLi9zcmMvZ2VuZXJhdGVJZC5qc1wiKTtcblxudmFyIF9nZW5lcmF0ZUlkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dlbmVyYXRlSWQpO1xuXG52YXIgX2NsZWFuU2hvcnRjdXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NsZWFuU2hvcnRjdXQgKi8gXCIuL3NyYy9jbGVhblNob3J0Y3V0LmpzXCIpO1xuXG52YXIgX2NsZWFuU2hvcnRjdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xlYW5TaG9ydGN1dCk7XG5cbnZhciBfcGFyc2VTaG9ydGN1dCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcGFyc2VTaG9ydGN1dCAqLyBcIi4vc3JjL3BhcnNlU2hvcnRjdXQuanNcIik7XG5cbnZhciBfcGFyc2VTaG9ydGN1dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJzZVNob3J0Y3V0KTtcblxudmFyIF9zdHJpbmdpZnlTaG9ydGN1dCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vc3RyaW5naWZ5U2hvcnRjdXQgKi8gXCIuL3NyYy9zdHJpbmdpZnlTaG9ydGN1dC5qc1wiKTtcblxudmFyIF9zdHJpbmdpZnlTaG9ydGN1dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJpbmdpZnlTaG9ydGN1dCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiAqIFRoZSBtYWluIGNsYXNzIHRvIGFjY2VzcyB0aGUgZmVhdHVyZXMgb2YgdGhlIEtleUN1dHMgbGlicmFyeS5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIEhUTUwgZWxlbWVudCB0aGF0IHNob3VsZCBsaXN0ZW4gdG9cbiAqICAga2V5Ym9hcmQgc2hvcnRjdXRzIChpZiBub3QgcHJvdmlkZWQgdGhlbiBXaW5kb3cgb2JqZWN0IGlzIHVzZWQpLlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBBZGRpdGlvbmFsIG9wdGlvbnMgKG9wdGlvbmFsKS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy50cmlnZ2VyT25jZVBlcktleSAtIElmIGEga2V5IGlzIGtlcHQgZG93biB0aGVuXG4gKiAgIHRoZSBzaG9ydGN1dCB3aWxsIGJlIHRyaWdnZXJlZCBtdWx0aXBsZSB0aW1lcyB3aGVuIHNldCB0byBmYWxzZSBhbmRcbiAqICAgb25seSBvbmNlIHdoZW4gc2V0IHRvIHRydWUgKGRlZmF1bHQ6IGZhbHNlKVxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLnVzZUNvZGVJbnN0ZWFkS2V5IC0gSWYgc2V0IHRvIGZhbHNlIHRoZW5cbiAqICAgS2V5Ym9hcmRFdmVudC5rZXkgaXMgZXZhbHVhdGVkIGZvciB0cmlnZ2VyaW5nIHNob3J0Y3V0cywgb3RoZXJ3aXNlXG4gKiAgIEtleWJvYXJkRXZlbnQuY29kZSAoZGVmYXVsdDogZmFsc2UpXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5tYXhTZXF1ZW5jZUxlbmd0aCAtIFRoZSBtYXhpbXVtIHNlcXVlbmNlIG9mXG4gKiAgIGtleSBvciBjb21ib3MgdGhhdCBzaG91bGQgYmUgdHJhY2tlZCAoZGVmYXVsdDogMylcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wdGlvbnMuZmlsdGVyIC0gQSBmaWx0ZXIgZnVuY3Rpb24uIElmIHRoZSBmaWx0ZXJcbiAqICAgcmV0dXJucyBmYWxzZSB0aGUgZXZlbnQgd2lsbCBiZSBmaWx0ZXJlZCBvdXQgYW5kIG5vIGJvdW5kIGhhbmRsZXJcbiAqICAgb3Igd2F0Y2hlciB3aWxsIGJlIHRyaWdnZXJlZC4gVGhlIGZpbHRlciBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZFxuICogICB3aXRoIHRoZSBrZXkgZXZlbnQuIFRoZSBkZWZhdWx0IGZpbHRlciB3aWxsIGFsd2F5cyByZXR1cm4gdHJ1ZS5cbiAqL1xudmFyIEtleXMgPVxuLyoqIFRoZSBuYW1lIG9mIHRoZSBkZWZhdWx0IHNjb3BlLiAqL1xuZnVuY3Rpb24gS2V5cyhlbGVtZW50LCBvcHRpb25zKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEtleXMpO1xuXG4gIHRoaXMuX3N0b3BwZWQgPSB0cnVlO1xuICB0aGlzLl9jdXJyZW50U2NvcGUgPSBLZXlzLkRFRkFVTFRfU0NPUEU7XG4gIHRoaXMuX2N1cnJlbnRDb21ibyA9IFtdO1xuICB0aGlzLl9zZXF1ZW5jZSA9IFtdO1xuICB0aGlzLl9oYW5kbGVycyA9IFtdO1xuICB0aGlzLl93YXRjaGVycyA9IFtdO1xuICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgdHJpZ2dlck9uY2VQZXJLZXk6IGZhbHNlLFxuICAgIHVzZUNvZGVJbnN0ZWFkS2V5OiBmYWxzZSxcbiAgICBtYXhTZXF1ZW5jZUxlbmd0aDogMyxcbiAgICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLl9vbktleURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoIV90aGlzLm9wdGlvbnMuZmlsdGVyLmNhbGwoX3RoaXMsIGV2ZW50KSkgcmV0dXJuO1xuXG4gICAgdmFyIGtleSA9IF90aGlzLm9wdGlvbnMudXNlQ29kZUluc3RlYWRLZXkgPyBldmVudC5jb2RlIDogZXZlbnQua2V5O1xuXG4gICAgaWYgKGtleS5sZW5ndGggPT09IDEpIHtcbiAgICAgIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKGtleSA9PT0gJyAnKSBrZXkgPSAnU3BhY2UnO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5VHJpZ2dlcmVkID0gX3RoaXMuX2N1cnJlbnRDb21iby5pbmNsdWRlcyhrZXkpO1xuXG4gICAgaWYgKCFhbHJlYWR5VHJpZ2dlcmVkKSB7XG4gICAgICBfdGhpcy5fY3VycmVudENvbWJvLnB1c2goa2V5KTtcbiAgICAgIF90aGlzLl9jdXJyZW50Q29tYm8uc29ydCgpO1xuXG4gICAgICBpZiAoX3RoaXMuX3NlcXVlbmNlLmxlbmd0aCA9PT0gMCB8fCBfdGhpcy5fc2VxdWVuY2VbX3RoaXMuX3NlcXVlbmNlLmxlbmd0aCAtIDFdICE9PSBfdGhpcy5fY3VycmVudENvbWJvKSB7XG4gICAgICAgIGlmIChfdGhpcy5fc2VxdWVuY2UubGVuZ3RoID09PSBfdGhpcy5vcHRpb25zLm1heFNlcXVlbmNlTGVuZ3RoKSBfdGhpcy5fc2VxdWVuY2Uuc2hpZnQoKTtcblxuICAgICAgICBfdGhpcy5fc2VxdWVuY2UucHVzaChfdGhpcy5fY3VycmVudENvbWJvKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWFscmVhZHlUcmlnZ2VyZWQgfHwgIV90aGlzLm9wdGlvbnMudHJpZ2dlck9uY2VQZXJLZXkpIHtcbiAgICAgIF90aGlzLl9ub3RpZnlXYXRjaGVycyhldmVudCk7XG4gICAgICBfdGhpcy5fZGlzcGF0Y2hIYW5kbGVycyhldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuX29uS2V5VXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoIV90aGlzLm9wdGlvbnMuZmlsdGVyLmNhbGwoX3RoaXMsIGV2ZW50KSkgcmV0dXJuO1xuXG4gICAgdmFyIGtleSA9IF90aGlzLm9wdGlvbnMudXNlQ29kZUluc3RlYWRLZXkgPyBldmVudC5jb2RlIDogZXZlbnQua2V5O1xuXG4gICAgaWYgKGtleS5sZW5ndGggPT09IDEpIHtcbiAgICAgIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKGtleSA9PT0gJyAnKSBrZXkgPSAnU3BhY2UnO1xuICAgIH1cblxuICAgIF90aGlzLl9jdXJyZW50Q29tYm8gPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KF90aGlzLl9jdXJyZW50Q29tYm8pKTtcblxuICAgIHZhciBpbmRleCA9IF90aGlzLl9jdXJyZW50Q29tYm8uaW5kZXhPZihrZXkpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIF90aGlzLl9jdXJyZW50Q29tYm8uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIF90aGlzLl9jdXJyZW50Q29tYm8uc29ydCgpO1xuICAgIH1cblxuICAgIF90aGlzLl9ub3RpZnlXYXRjaGVycyhldmVudCk7XG4gIH07XG5cbiAgdGhpcy5fcmVzZXRLZXlzID0gZnVuY3Rpb24gKCkge1xuICAgIF90aGlzLl9jdXJyZW50Q29tYm8gPSBbXTtcbiAgICBfdGhpcy5fc2VxdWVuY2UgPSBbXTtcbiAgfTtcblxuICB0aGlzLl9ub3RpZnlXYXRjaGVycyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBzZXF1ZW5jZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoX3RoaXMuX3NlcXVlbmNlKSk7XG5cbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF90aGlzLl93YXRjaGVyc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgdmFyIHdhdGNoZXIgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICB3YXRjaGVyLmNhbGxiYWNrKHNlcXVlbmNlLCBldmVudCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuX2Rpc3BhdGNoSGFuZGxlcnMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgc2VxdWVuY2UgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KF90aGlzLl9zZXF1ZW5jZSkpO1xuXG4gICAgdmFyIHNpZ25hdHVyZXMgPSBbXTtcblxuICAgIHZhciBzaWduYXR1cmVTZXF1ZW5jZSA9IFtdO1xuICAgIGZvciAodmFyIGkgPSBfdGhpcy5fc2VxdWVuY2UubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHNpZ25hdHVyZVNlcXVlbmNlID0gW190aGlzLl9zZXF1ZW5jZVtpXV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShzaWduYXR1cmVTZXF1ZW5jZSkpO1xuICAgICAgc2lnbmF0dXJlcy5wdXNoKCgwLCBfc3RyaW5naWZ5U2hvcnRjdXQyLmRlZmF1bHQpKHNpZ25hdHVyZVNlcXVlbmNlKSk7XG4gICAgfVxuXG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yMiA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gX3RoaXMuX2hhbmRsZXJzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAyOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gKF9zdGVwMiA9IF9pdGVyYXRvcjIubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlKSB7XG4gICAgICAgIHZhciBoYW5kbGVyID0gX3N0ZXAyLnZhbHVlO1xuXG4gICAgICAgIGlmIChfdGhpcy5fY3VycmVudFNjb3BlID09PSBoYW5kbGVyLnNjb3BlICYmIHNpZ25hdHVyZXMuaW5jbHVkZXMoaGFuZGxlci5zaWduYXR1cmUpKSB7XG4gICAgICAgICAgaGFuZGxlci5jYWxsYmFjayhzZXF1ZW5jZSwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvcjIgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjIucmV0dXJuKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yMi5yZXR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMikge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB0aGlzLmJpbmQgPSBmdW5jdGlvbiAoc2hvcnRjdXQsIHNjb3BlLCBjYWxsYmFjaykge1xuICAgIGlmIChjYWxsYmFjayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjYWxsYmFjayA9IHNjb3BlO1xuICAgICAgc2NvcGUgPSBLZXlzLkRFRkFVTFRfU0NPUEU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzaG9ydGN1dCA9PT0gJ3N0cmluZycpIHNob3J0Y3V0ID0gKDAsIF9wYXJzZVNob3J0Y3V0Mi5kZWZhdWx0KShzaG9ydGN1dCk7XG5cbiAgICBzaG9ydGN1dCA9ICgwLCBfY2xlYW5TaG9ydGN1dDIuZGVmYXVsdCkoc2hvcnRjdXQpO1xuXG4gICAgdmFyIGhhbmRsZXJJZCA9ICgwLCBfZ2VuZXJhdGVJZDIuZGVmYXVsdCkoKTtcbiAgICBfdGhpcy5faGFuZGxlcnMucHVzaCh7XG4gICAgICBpZDogaGFuZGxlcklkLFxuICAgICAgc2lnbmF0dXJlOiAoMCwgX3N0cmluZ2lmeVNob3J0Y3V0Mi5kZWZhdWx0KShzaG9ydGN1dCksXG4gICAgICBzaG9ydGN1dDogc2hvcnRjdXQsXG4gICAgICBzY29wZTogc2NvcGUsXG4gICAgICBjYWxsYmFjazogY2FsbGJhY2tcbiAgICB9KTtcblxuICAgIHJldHVybiBoYW5kbGVySWQ7XG4gIH07XG5cbiAgdGhpcy51bmJpbmQgPSBmdW5jdGlvbiAoaGFuZGxlcklkKSB7XG4gICAgdmFyIGluZGV4ID0gX3RoaXMuX2hhbmRsZXJzLmZpbmRJbmRleChmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgcmV0dXJuIGhhbmRsZXIuaWQgPT09IGhhbmRsZXJJZDtcbiAgICB9KTtcblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBoYW5kbGVyIElEOiAnICsgaGFuZGxlcklkKTtcblxuICAgIF90aGlzLl9oYW5kbGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xuXG4gIHRoaXMudW5iaW5kU2NvcGUgPSBmdW5jdGlvbiAoc2NvcGUpIHtcbiAgICB2YXIgaW5kaWNlcyA9IFtdO1xuICAgIF90aGlzLl9oYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVyLCBpbmRleCkge1xuICAgICAgaWYgKGhhbmRsZXIuc2NvcGUgPT09IHNjb3BlKSBpbmRpY2VzLnB1c2goaW5kZXgpO1xuICAgIH0pO1xuXG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IzID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yMyA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0gaW5kaWNlc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMzsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IChfc3RlcDMgPSBfaXRlcmF0b3IzLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZSkge1xuICAgICAgICB2YXIgaW5kZXggPSBfc3RlcDMudmFsdWU7XG5cbiAgICAgICAgX3RoaXMuX2hhbmRsZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvcjMgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3IzID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zICYmIF9pdGVyYXRvcjMucmV0dXJuKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yMy5yZXR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMykge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB0aGlzLnVuYmluZEFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfdGhpcy5faGFuZGxlcnMgPSBbXTtcbiAgfTtcblxuICB0aGlzLndhdGNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgdmFyIHdhdGNoZXJJZCA9ICgwLCBfZ2VuZXJhdGVJZDIuZGVmYXVsdCkoKTtcbiAgICBfdGhpcy5fd2F0Y2hlcnMucHVzaCh7XG4gICAgICBpZDogd2F0Y2hlcklkLFxuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrXG4gICAgfSk7XG5cbiAgICByZXR1cm4gd2F0Y2hlcklkO1xuICB9O1xuXG4gIHRoaXMudW53YXRjaCA9IGZ1bmN0aW9uICh3YXRjaGVySWQpIHtcbiAgICB2YXIgaW5kZXggPSBfdGhpcy5fd2F0Y2hlcnMuZmluZEluZGV4KGZ1bmN0aW9uICh3YXRjaGVyKSB7XG4gICAgICByZXR1cm4gd2F0Y2hlci5pZCA9PT0gd2F0Y2hlcklkO1xuICAgIH0pO1xuXG4gICAgaWYgKGluZGV4ID09PSAtMSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHdhdGNoZXIgSUQ6ICcgKyB3YXRjaGVySWQpO1xuXG4gICAgX3RoaXMuX3dhdGNoZXJzLnNwbGljZShpbmRleCwgMSk7XG4gIH07XG5cbiAgdGhpcy51bndhdGNoQWxsID0gZnVuY3Rpb24gKCkge1xuICAgIF90aGlzLl93YXRjaGVycyA9IFtdO1xuICB9O1xuXG4gIHRoaXMuc3dpdGNoU2NvcGUgPSBmdW5jdGlvbiAoc2NvcGUpIHtcbiAgICBfdGhpcy5fY3VycmVudFNjb3BlID0gc2NvcGU7XG4gIH07XG5cbiAgdGhpcy5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghX3RoaXMuX3N0b3BwZWQpIHtcbiAgICAgIF90aGlzLl9lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBfdGhpcy5fb25LZXlEb3duKTtcbiAgICAgIF90aGlzLl9lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgX3RoaXMuX29uS2V5VXApO1xuICAgICAgX3RoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBfdGhpcy5fcmVzZXRLZXlzKTtcbiAgICAgIF90aGlzLl9lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBfdGhpcy5fcmVzZXRLZXlzKTtcblxuICAgICAgX3RoaXMuX3Jlc2V0S2V5cygpO1xuXG4gICAgICBfdGhpcy5fc3RvcHBlZCA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMucmVzdW1lID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChfdGhpcy5fc3RvcHBlZCkge1xuICAgICAgX3RoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIF90aGlzLl9vbktleURvd24pO1xuICAgICAgX3RoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBfdGhpcy5fb25LZXlVcCk7XG4gICAgICBfdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIF90aGlzLl9yZXNldEtleXMpO1xuICAgICAgX3RoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIF90aGlzLl9yZXNldEtleXMpO1xuXG4gICAgICBfdGhpcy5fc3RvcHBlZCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIF90aGlzLl9yZXNldEtleXMoKTtcbiAgICBfdGhpcy51bmJpbmRBbGwoKTtcbiAgICBfdGhpcy51bndhdGNoQWxsKCk7XG4gIH07XG5cbiAgaWYgKCFlbGVtZW50KSBlbGVtZW50ID0gd2luZG93O1xuICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcblxuICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgdGhpcy5yZXN1bWUoKTtcbn1cblxuLyoqXG4gKiBCaW5kIGEga2V5Ym9hcmQgc2hvcnRjdXQuIEEgc2hvcnRjdXQgY2FuIGJlIGluIHN0cmluZyBvciBhcnJheSBmb3JtYXQuXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxBcnJheS48c3RyaW5nW10+fSBzaG9ydGN1dCAtIFRoZSBzaG9ydGN1dCB0byBiaW5kLlxuICogQHBhcmFtIHtzdHJpbmd9IHNjb3BlIC0gQW4gb3B0aW9uYWwgc2NvcGUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIFRoZSBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSB0cmlnZ2VyZWQuXG4gKiAgIFRoZSBjYWxsYmFjayBnZXRzIGNhbGxlZCB3aXRoIHRoZSBjdXJyZW50IGtleSBvciBjb21ibyBzZXF1ZW5jZVxuICogICBhbmQgdGhlIGtleSBldmVudC5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHVuaXF1ZSBJRCBvZiB0aGUgYm91bmQgaGFuZGxlci5cbiAqL1xuXG5cbi8qKlxuICogVW5iaW5kIGEgc3BlY2lmaWMga2V5Ym9hcmQgc2hvcnRjdXQgaGFuZGxlciB1c2luZyBpdHMgSUQuXG4gKiBAcGFyYW0ge251bWJlcn0gaGFuZGxlcklkIC0gVGhlIElEIHJldHVybmVkIGJ5IHRoZSB7QGxpbmsgYmluZH0gbWV0aG9kLlxuICogQHRocm93cyBUaHJvd3MgYW4gZXJyb3Igd2hlbiB0aGUgSUQgaXMgaW52YWxpZC5cbiAqL1xuXG5cbi8qKlxuICogVW5iaW5kIGtleWJvYXJkIHNob3J0Y3V0IGhhbmRsZXJzIGhhdmluZyB0aGUgc3BlY2lmaWVkIHNjb3BlLlxuICogQHBhcmFtIHtTdHJpbmd9IHNjb3BlIC0gVGhlIHNjb3BlLlxuICovXG5cblxuLyoqXG4gKiBVbmJpbmQgYWxsIGtleWJvYXJkIHNob3J0Y3V0IGhhbmRsZXJzLlxuICovXG5cblxuLyoqXG4gKiBXYXRjaCBrZXlib2FyZCBldmVudHMgKGtleWRvd24gYW5kIGtleXVwKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gVGhlIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIHRyaWdnZXJlZC5cbiAqICAgd2hlbiBhIGtleWRvd24gb3Iga2V5dXAgZXZlbnQgb2NjdXJzLiBUaGUgY2FsbGJhY2sgZ2V0cyBjYWxsZWQgd2l0aFxuICogICB0aGUgY3VycmVudCBrZXkgb3IgY29tYm8gc2VxdWVuY2UgYW5kIHRoZSBrZXkgZXZlbnQuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSB1bmlxdWUgSUQgb2YgdGhlIGFkZGVkIHdhdGNoZXIuXG4gKi9cblxuXG4vKipcbiAqIFVuYmluZCBhIHNwZWNpZmljIHdhdGNoZXIgdXNpbmcgaXRzIElELlxuICogQHBhcmFtIHtudW1iZXJ9IHdhdGNoZXJJZCAtIFRoZSBJRCByZXR1cm5lZCBieSB0aGUge0BsaW5rIHdhdGNofSBtZXRob2QuXG4gKiBAdGhyb3dzIFRocm93cyBhbiBlcnJvciB3aGVuIHRoZSBJRCBpcyBpbnZhbGlkLlxuICovXG5cblxuLyoqXG4gKiBVbmJpbmQgYWxsIHdhdGNoZXJzLlxuICovXG5cblxuLyoqXG4gKiBTd2l0Y2ggdGhlIHNjb3BlLiBPbmx5IGJvdW5kIGhhbmRsZXJzIGdldCB0cmlnZ2VyZWQgdGhhdCBoYXZlIHRoZSBuZXdcbiAqIHNjb3BlLiBUaGUgZGVmYXVsdCBzY29wZSBjYW4gYmUgYWNjZXNzZWQgYnkge0BsaW5rIEtleXMuREVGQVVMVF9TQ09QRX0uXG4gKiBAcGFyYW0ge251bWJlcn0gc2NvcGUgLSBUaGUgc2NvcGUuXG4gKi9cblxuXG4vKipcbiAqIFN0b3AgbGlzdGVuaW5nIHRvIGtleSBldmVudHMgYW5kIHJlc2V0IHRoZSBrZXkgc2VxdWVuY2UuXG4gKi9cblxuXG4vKipcbiAqIFJlc3VtZSBsaXN0ZW5pbmcgdG8ga2V5IGV2ZW50cy5cbiAqL1xuXG5cbi8qIFJlc2V0IHRoaXMgaW5zdGFuY2UgYnkgdW5iaW5kaW5nIGFsbCBoYW5kbGVycywgcmVtb3ZpbmcgYWxsIHdhdGNoZXJzXG4gKiBhbmQgcmVzZXR0aW5nIHRoZSBrZXkgc2VxdWVuY2UuXG4gKi9cbjtcblxuS2V5cy5ERUZBVUxUX1NDT1BFID0gJ0RFRkFVTFRfU0NPUEUnO1xuZXhwb3J0cy5kZWZhdWx0ID0gS2V5cztcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvY2xlYW5TaG9ydGN1dC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2NsZWFuU2hvcnRjdXQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc2hvcnRjdXQpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHNob3J0Y3V0KSB8fCBzaG9ydGN1dC5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcnJheSBzaG9ydGN1dCB0byBjbGVhbjogJyArIHNob3J0Y3V0KTtcblxuICB2YXIgaXNTZXF1ZW5jZSA9IHR5cGVvZiBzaG9ydGN1dFswXSAhPT0gJ3N0cmluZyc7XG5cbiAgaWYgKGlzU2VxdWVuY2UgJiYgc2hvcnRjdXQubGVuZ3RoID09PSAxKSB7XG4gICAgc2hvcnRjdXQgPSBzaG9ydGN1dFswXTtcbiAgICBpc1NlcXVlbmNlID0gZmFsc2U7XG4gIH1cblxuICBpZiAoaXNTZXF1ZW5jZSkgY2xlYW5TZXF1ZW5jZShzaG9ydGN1dCk7ZWxzZSBjbGVhbkNvbWJvKHNob3J0Y3V0KTtcblxuICByZXR1cm4gc2hvcnRjdXQ7XG59O1xuXG5mdW5jdGlvbiBjbGVhblNlcXVlbmNlKHNlcXVlbmNlKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2VxdWVuY2UubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2VxdWVuY2VbaV0pKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2hvcnRjdXQgc2VxdWVuY2UgJyArIHNlcXVlbmNlICsgJy4nKTtcblxuICAgIGNsZWFuQ29tYm8oc2VxdWVuY2VbaV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFuQ29tYm8oY29tYm8pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21iby5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0eXBlb2YgY29tYm9baV0gIT09ICdzdHJpbmcnKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2hvcnRjdXQgY29tYm8gJyArIGNvbWJvICsgJy4nKTtcblxuICAgIHZhciBjbGVhbmVkS2V5ID0gY2xlYW5LZXkoY29tYm9baV0pO1xuICAgIGlmICghY2xlYW5lZEtleSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGtleSAnICsgY2xlYW5lZEtleSArICcgaW4gc2hvcnRjdXQgY29tYm8gJyArIGNvbWJvICsgJy4nKTtcblxuICAgIGNvbWJvW2ldID0gY2xlYW5lZEtleTtcbiAgfVxuICBjb21iby5zb3J0KCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFuS2V5KGtleSkge1xuICBrZXkgPSBrZXkucmVwbGFjZSgvXFxzKy9nLCAnICcpO1xuICBpZiAoa2V5ID09PSAnICcpIGtleSA9ICdTcGFjZSc7XG4gIGtleSA9IGtleS50cmltKCk7XG4gIGlmIChrZXkubGVuZ3RoID09PSAxKSBrZXkgPSBrZXkudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuIGtleTtcbn1cblxuLyoqXG4gKiBDbGVhbiBhbiBhcnJheSBzaG9ydGN1dC4gVGhlIGFycmF5IGlzIGNsZWFuZWQgaW4tcGxhY2UgYW5kIGFsc28gcmV0dXJuZWQuXG4gKiBVbm5lY2Vzc2FyeSB3aGl0ZSBzcGFjZSBpcyByZW1vdmVkLCBrZXkgY29tYmluYXRpb25zIGFyZSBzb3J0ZWQgYW5kXG4gKiBzaW5nbGUgY2hhcnMgY29udmVydGVkIHRvIGxvd2VyIGNhc2UuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfEFycmF5LjxzdHJpbmdbXT59IHNob3J0Y3V0IC0gVGhlIGFycmF5IHNob3J0Y3V0IHRvIGNsZWFuLlxuICogQHJldHVybiB7c3RyaW5nW118QXJyYXkuPHN0cmluZ1tdPn0gVGhlIGNsZWFuZWQgYXJyYXkgc2hvcnRjdXQuXG4gKi9cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvZ2VuZXJhdGVJZC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2dlbmVyYXRlSWQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXh0SWQrKztcbn07XG5cbnZhciBuZXh0SWQgPSAxO1xuXG4vKipcbiAqIENyZWF0ZSBhIHVuaXF1ZSBJRCBldmVyeSB0aW1lIGl0IGlzIGNhbGxlZC5cbiAqIEByZXR1cm4ge251bWJlcn0gQSB1bmlxdWUgSUQuXG4gKi9cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9LZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9LZXlzICovIFwiLi9zcmMvS2V5cy5qc1wiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdLZXlzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfS2V5cykuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfY2xlYW5TaG9ydGN1dCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2xlYW5TaG9ydGN1dCAqLyBcIi4vc3JjL2NsZWFuU2hvcnRjdXQuanNcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2xlYW5TaG9ydGN1dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsZWFuU2hvcnRjdXQpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2dlbmVyYXRlSWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2dlbmVyYXRlSWQgKi8gXCIuL3NyYy9nZW5lcmF0ZUlkLmpzXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2dlbmVyYXRlSWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZW5lcmF0ZUlkKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9wYXJzZVNob3J0Y3V0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9wYXJzZVNob3J0Y3V0ICovIFwiLi9zcmMvcGFyc2VTaG9ydGN1dC5qc1wiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdwYXJzZVNob3J0Y3V0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyc2VTaG9ydGN1dCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfc3RyaW5naWZ5U2hvcnRjdXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3N0cmluZ2lmeVNob3J0Y3V0ICovIFwiLi9zcmMvc3RyaW5naWZ5U2hvcnRjdXQuanNcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnc3RyaW5naWZ5U2hvcnRjdXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJpbmdpZnlTaG9ydGN1dCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3BhcnNlU2hvcnRjdXQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wYXJzZVNob3J0Y3V0LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHNob3J0Y3V0KSB7XG4gIGlmICh0eXBlb2Ygc2hvcnRjdXQgIT09ICdzdHJpbmcnKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nIHNob3J0Y3V0IHRvIHBhcnNlOiAnICsgc2hvcnRjdXQpO1xuXG4gIHNob3J0Y3V0ID0gc2hvcnRjdXQucmVwbGFjZSgvXFxzKy9nLCAnJyk7XG5cbiAgaWYgKHR5cGVvZiBzaG9ydGN1dCAhPT0gJ3N0cmluZycgfHwgc2hvcnRjdXQubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2hvcnRjdXQgKG11c3QgYmUgbm9uIGVtcHR5IHN0cmluZyk6ICcgKyBzaG9ydGN1dCk7XG5cbiAgdmFyIGtleSA9IFtdO1xuICB2YXIgY29tYm8gPSBbXTtcbiAgdmFyIHNlcXVlbmNlID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaG9ydGN1dC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjID0gc2hvcnRjdXQuY2hhckF0KGkpO1xuICAgIGlmICgha2V5Lmxlbmd0aCkge1xuICAgICAga2V5LnB1c2goYyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjID09PSBDT01CSU5FX1dJVEgpIHtcbiAgICAgICAgY29tYm8ucHVzaChjb252ZXJ0S2V5KGtleSkpO1xuICAgICAgICBrZXkgPSBbXTtcbiAgICAgIH0gZWxzZSBpZiAoYyA9PT0gRk9MTE9XRURfQlkpIHtcbiAgICAgICAgY29tYm8ucHVzaChjb252ZXJ0S2V5KGtleSkpO1xuICAgICAgICBrZXkgPSBbXTtcbiAgICAgICAgY29tYm8uc29ydCgpO1xuICAgICAgICBzZXF1ZW5jZS5wdXNoKGNvbWJvKTtcbiAgICAgICAgY29tYm8gPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleS5wdXNoKGMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChrZXkubGVuZ3RoKSB7XG4gICAgY29tYm8ucHVzaChjb252ZXJ0S2V5KGtleSkpO1xuICAgIGNvbWJvLnNvcnQoKTtcbiAgICBzZXF1ZW5jZS5wdXNoKGNvbWJvKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2hvcnRjdXQgKG11c3QgZW5kIHdpdGgga2V5KTogJyArIHNob3J0Y3V0KTtcbiAgfVxuXG4gIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHNlcXVlbmNlW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgdmFyIF9jb21ibyA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICB2YXIgZHVwbGljYXRlcyA9IGdldER1cGxpY2F0ZXMoX2NvbWJvKTtcbiAgICAgIGlmIChkdXBsaWNhdGVzLmxlbmd0aCA+IDApIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzaG9ydGN1dCAoZHVwbGljYXRlIGtleXMpOicgKyBzaG9ydGN1dCk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzZXF1ZW5jZS5sZW5ndGggPT09IDEpIHJldHVybiBzZXF1ZW5jZVswXTtlbHNlIHJldHVybiBzZXF1ZW5jZTtcbn07XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBDT01CSU5FX1dJVEggPSAnKyc7XG52YXIgRk9MTE9XRURfQlkgPSAnPic7XG5cbmZ1bmN0aW9uIGdldER1cGxpY2F0ZXMoY29tYm8pIHtcbiAgdmFyIGNvdW50ID0gZnVuY3Rpb24gY291bnQoY29tYm8pIHtcbiAgICByZXR1cm4gY29tYm8ucmVkdWNlKGZ1bmN0aW9uIChrMSwgazIpIHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGsxLCBfZGVmaW5lUHJvcGVydHkoe30sIGsyLCAoazFbazJdIHx8IDApICsgMSkpO1xuICAgIH0sIHt9KTtcbiAgfTtcbiAgdmFyIGR1cGxpY2F0ZXMgPSBmdW5jdGlvbiBkdXBsaWNhdGVzKGRpY3QpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZGljdCkuZmlsdGVyKGZ1bmN0aW9uIChrKSB7XG4gICAgICByZXR1cm4gZGljdFtrXSA+IDE7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiBkdXBsaWNhdGVzKGNvdW50KGNvbWJvKSk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRLZXkoa2V5KSB7XG4gIGtleSA9IGtleS5qb2luKCcnKTtcbiAgaWYgKGtleS5sZW5ndGggPT09IDEpIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4ga2V5O1xufVxuXG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIHNob3J0Y3V0IGFuZCByZXR1cm4gdGhlIGVxdWl2YWxlbnQgYXJyYXkgc2hvcnRjdXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gc2hvcnRjdXQgLSBUaGUgc3RyaW5nIHNob3J0Y3V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJuIHtzdHJpbmdbXXxBcnJheS48c3RyaW5nW10+fSBUaGUgY29udmVydGVkIGFycmF5IHNob3J0Y3V0LlxuICovXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3N0cmluZ2lmeVNob3J0Y3V0LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3N0cmluZ2lmeVNob3J0Y3V0LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzaG9ydGN1dCkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoc2hvcnRjdXQpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJyYXkgc2hvcnRjdXQgdG8gc3RyaW5naWZ5OiAnICsgc2hvcnRjdXQpO1xuXG4gIHZhciBpc1NlcXVlbmNlID0gdHlwZW9mIHNob3J0Y3V0WzBdICE9PSAnc3RyaW5nJztcblxuICBpZiAoIWlzU2VxdWVuY2UpIHtcbiAgICByZXR1cm4gc2hvcnRjdXQuam9pbihDT01CSU5FX1dJVEgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzaG9ydGN1dC5tYXAoZnVuY3Rpb24gKHBhcnQpIHtcbiAgICAgIHJldHVybiBwYXJ0LmpvaW4oQ09NQklORV9XSVRIKTtcbiAgICB9KS5qb2luKEZPTExPV0VEX0JZKTtcbiAgfVxufTtcblxudmFyIENPTUJJTkVfV0lUSCA9ICcgKyAnO1xudmFyIEZPTExPV0VEX0JZID0gJyA+ICc7XG5cbi8qKlxuICogQ3JlYXRlIGVxdWl2YWxlbnQgc3RyaW5nIHNob3J0Y3V0IG9mIGFuIGFycmF5IHNob3J0Y3V0LlxuICogQHBhcmFtIHtzdHJpbmdbXXxBcnJheS48c3RyaW5nW10+fSBzaG9ydGN1dCAtIFRoZSBhcnJheSBzaG9ydGN1dCB0byBjb252ZXJ0LlxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgY29udmVydGVkIHN0cmluZyBzaG9ydGN1cnQuXG4gKi9cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OWJibUZ0WlYwdmQyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aWQyVmljR0ZqYXpvdkwxdHVZVzFsWFM5M1pXSndZV05yTDJKdmIzUnpkSEpoY0NJc0luZGxZbkJoWTJzNkx5OWJibUZ0WlYwdkxpOXpjbU12UzJWNWN5NXFjeUlzSW5kbFluQmhZMnM2THk5YmJtRnRaVjB2TGk5emNtTXZZMnhsWVc1VGFHOXlkR04xZEM1cWN5SXNJbmRsWW5CaFkyczZMeTliYm1GdFpWMHZMaTl6Y21NdloyVnVaWEpoZEdWSlpDNXFjeUlzSW5kbFluQmhZMnM2THk5YmJtRnRaVjB2TGk5emNtTXZhVzVrWlhndWFuTWlMQ0ozWldKd1lXTnJPaTh2VzI1aGJXVmRMeTR2YzNKakwzQmhjbk5sVTJodmNuUmpkWFF1YW5NaUxDSjNaV0p3WVdOck9pOHZXMjVoYldWZEx5NHZjM0pqTDNOMGNtbHVaMmxtZVZOb2IzSjBZM1YwTG1weklsMHNJbTVoYldWeklqcGJJa3RsZVhNaUxDSmxiR1Z0Wlc1MElpd2liM0IwYVc5dWN5SXNJbDl6ZEc5d2NHVmtJaXdpWDJOMWNuSmxiblJUWTI5d1pTSXNJa1JGUmtGVlRGUmZVME5QVUVVaUxDSmZZM1Z5Y21WdWRFTnZiV0p2SWl3aVgzTmxjWFZsYm1ObElpd2lYMmhoYm1Sc1pYSnpJaXdpWDNkaGRHTm9aWEp6SWl3aWRISnBaMmRsY2s5dVkyVlFaWEpMWlhraUxDSjFjMlZEYjJSbFNXNXpkR1ZoWkV0bGVTSXNJbTFoZUZObGNYVmxibU5sVEdWdVozUm9JaXdpWm1sc2RHVnlJaXdpWDI5dVMyVjVSRzkzYmlJc0ltTmhiR3dpTENKbGRtVnVkQ0lzSW10bGVTSXNJbU52WkdVaUxDSnNaVzVuZEdnaUxDSjBiMHh2ZDJWeVEyRnpaU0lzSW1Gc2NtVmhaSGxVY21sbloyVnlaV1FpTENKcGJtTnNkV1JsY3lJc0luQjFjMmdpTENKemIzSjBJaXdpYzJocFpuUWlMQ0pmYm05MGFXWjVWMkYwWTJobGNuTWlMQ0pmWkdsemNHRjBZMmhJWVc1a2JHVnljeUlzSWw5dmJrdGxlVlZ3SWl3aWFXNWtaWGdpTENKcGJtUmxlRTltSWl3aWMzQnNhV05sSWl3aVgzSmxjMlYwUzJWNWN5SXNJbk5sY1hWbGJtTmxJaXdpU2xOUFRpSXNJbkJoY25ObElpd2ljM1J5YVc1bmFXWjVJaXdpZDJGMFkyaGxjaUlzSW1OaGJHeGlZV05ySWl3aWMybG5ibUYwZFhKbGN5SXNJbk5wWjI1aGRIVnlaVk5sY1hWbGJtTmxJaXdpYVNJc0ltaGhibVJzWlhJaUxDSnpZMjl3WlNJc0luTnBaMjVoZEhWeVpTSXNJbUpwYm1RaUxDSnphRzl5ZEdOMWRDSXNJblZ1WkdWbWFXNWxaQ0lzSW1oaGJtUnNaWEpKWkNJc0ltbGtJaXdpZFc1aWFXNWtJaXdpWm1sdVpFbHVaR1Y0SWl3aVJYSnliM0lpTENKMWJtSnBibVJUWTI5d1pTSXNJbWx1WkdsalpYTWlMQ0ptYjNKRllXTm9JaXdpZFc1aWFXNWtRV3hzSWl3aWQyRjBZMmdpTENKM1lYUmphR1Z5U1dRaUxDSjFibmRoZEdOb0lpd2lkVzUzWVhSamFFRnNiQ0lzSW5OM2FYUmphRk5qYjNCbElpd2ljM1J2Y0NJc0lsOWxiR1Z0Wlc1MElpd2ljbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaUlzSW5KbGMzVnRaU0lzSW1Ga1pFVjJaVzUwVEdsemRHVnVaWElpTENKeVpYTmxkQ0lzSW5kcGJtUnZkeUlzSWs5aWFtVmpkQ0lzSW1GemMybG5iaUlzSWtGeWNtRjVJaXdpYVhOQmNuSmhlU0lzSW1selUyVnhkV1Z1WTJVaUxDSmpiR1ZoYmxObGNYVmxibU5sSWl3aVkyeGxZVzVEYjIxaWJ5SXNJbU52YldKdklpd2lZMnhsWVc1bFpFdGxlU0lzSW1Oc1pXRnVTMlY1SWl3aWNtVndiR0ZqWlNJc0luUnlhVzBpTENKdVpYaDBTV1FpTENKa1pXWmhkV3gwSWl3aVl5SXNJbU5vWVhKQmRDSXNJa05QVFVKSlRrVmZWMGxVU0NJc0ltTnZiblpsY25STFpYa2lMQ0pHVDB4TVQxZEZSRjlDV1NJc0ltUjFjR3hwWTJGMFpYTWlMQ0puWlhSRWRYQnNhV05oZEdWeklpd2lZMjkxYm5RaUxDSnlaV1IxWTJVaUxDSnJNU0lzSW1zeUlpd2lhMlY1Y3lJc0ltUnBZM1FpTENKcklpd2lhbTlwYmlJc0ltMWhjQ0lzSW5CaGNuUWlYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN1FVRkRSQ3hQTzBGRFZrRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4clJFRkJNRU1zWjBOQlFXZERPMEZCUXpGRk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1owVkJRWGRFTEd0Q1FVRnJRanRCUVVNeFJUdEJRVU5CTEhsRVFVRnBSQ3hqUVVGak8wRkJReTlFT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hwUkVGQmVVTXNhVU5CUVdsRE8wRkJRekZGTEhkSVFVRm5TQ3h0UWtGQmJVSXNSVUZCUlR0QlFVTnlTVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFEUVVFeVFpd3dRa0ZCTUVJc1JVRkJSVHRCUVVOMlJDeDVRMEZCYVVNc1pVRkJaVHRCUVVOb1JEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3c0UkVGQmMwUXNLMFJCUVN0RU96dEJRVVZ5U0R0QlFVTkJPenM3UVVGSFFUdEJRVU5CT3pzN096czdPenM3T3pzN096czdPenM3TzBGRGJFWkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPenM3T3pzN08wRkJSVUU3T3pzN096czdPenM3T3pzN096czdPenRKUVd0Q1RVRXNTVHRCUVVOS08wRkJhVUpCTEdOQlFWbERMRTlCUVZvc1JVRkJjVUpETEU5QlFYSkNMRVZCUVRoQ08wRkJRVUU3TzBGQlFVRTdPMEZCUVVFc1QwRmtPVUpETEZGQll6aENMRWRCWkc1Q0xFbEJZMjFDTzBGQlFVRXNUMEZpT1VKRExHRkJZVGhDTEVkQlltUktMRXRCUVV0TExHRkJZVk03UVVGQlFTeFBRVm81UWtNc1lVRlpPRUlzUjBGYVpDeEZRVmxqTzBGQlFVRXNUMEZZT1VKRExGTkJWemhDTEVkQldHeENMRVZCVjJ0Q08wRkJRVUVzVDBGV09VSkRMRk5CVlRoQ0xFZEJWbXhDTEVWQlZXdENPMEZCUVVFc1QwRlVPVUpETEZOQlV6aENMRWRCVkd4Q0xFVkJVMnRDTzBGQlFVRXNUMEZRT1VKUUxFOUJUemhDTEVkQlVIQkNPMEZCUTFKUkxIVkNRVUZ0UWl4TFFVUllPMEZCUlZKRExIVkNRVUZ0UWl4TFFVWllPMEZCUjFKRExIVkNRVUZ0UWl4RFFVaFlPMEZCU1ZKRExGbEJRVkU3UVVGQlFTeGhRVUZOTEVsQlFVNDdRVUZCUVR0QlFVcEJMRWRCVDI5Q096dEJRVUZCTEU5QlV6bENReXhWUVZRNFFpeEhRVk5xUWl4cFFrRkJVenRCUVVOd1FpeFJRVUZKTEVOQlFVTXNUVUZCUzFvc1QwRkJUQ3hEUVVGaFZ5eE5RVUZpTEVOQlFXOUNSU3hKUVVGd1FpeERRVUY1UWl4TFFVRjZRaXhGUVVFclFrTXNTMEZCTDBJc1EwRkJUQ3hGUVVFMFF6czdRVUZGTlVNc1VVRkJTVU1zVFVGQlRTeE5RVUZMWml4UFFVRk1MRU5CUVdGVExHbENRVUZpTEVkQlFXbERTeXhOUVVGTlJTeEpRVUYyUXl4SFFVRTRRMFlzVFVGQlRVTXNSMEZCT1VRN08wRkJSVUVzVVVGQlNVRXNTVUZCU1VVc1RVRkJTaXhMUVVGbExFTkJRVzVDTEVWQlFYTkNPMEZCUTNCQ1JpeFpRVUZOUVN4SlFVRkpSeXhYUVVGS0xFVkJRVTQ3UVVGRFFTeFZRVUZKU0N4UlFVRlJMRWRCUVZvc1JVRkJhVUpCTEUxQlFVMHNUMEZCVGp0QlFVTnNRanM3UVVGRlJDeFJRVUZOU1N4dFFrRkJiVUlzVFVGQlMyWXNZVUZCVEN4RFFVRnRRbWRDTEZGQlFXNUNMRU5CUVRSQ1RDeEhRVUUxUWl4RFFVRjZRanM3UVVGRlFTeFJRVUZKTEVOQlFVTkpMR2RDUVVGTUxFVkJRWFZDTzBGQlEzSkNMRmxCUVV0bUxHRkJRVXdzUTBGQmJVSnBRaXhKUVVGdVFpeERRVUYzUWs0c1IwRkJlRUk3UVVGRFFTeFpRVUZMV0N4aFFVRk1MRU5CUVcxQ2EwSXNTVUZCYmtJN08wRkJSVUVzVlVGRFJTeE5RVUZMYWtJc1UwRkJUQ3hEUVVGbFdTeE5RVUZtTEV0QlFUQkNMRU5CUVRGQ0xFbEJRMEVzVFVGQlMxb3NVMEZCVEN4RFFVRmxMRTFCUVV0QkxGTkJRVXdzUTBGQlpWa3NUVUZCWml4SFFVRjNRaXhEUVVGMlF5eE5RVUU0UXl4TlFVRkxZaXhoUVVaeVJDeEZRVWRGTzBGQlEwRXNXVUZCU1N4TlFVRkxReXhUUVVGTUxFTkJRV1ZaTEUxQlFXWXNTMEZCTUVJc1RVRkJTMnBDTEU5QlFVd3NRMEZCWVZVc2FVSkJRVE5ETEVWQlEwVXNUVUZCUzB3c1UwRkJUQ3hEUVVGbGEwSXNTMEZCWmpzN1FVRkZSaXhqUVVGTGJFSXNVMEZCVEN4RFFVRmxaMElzU1VGQlppeERRVUZ2UWl4TlFVRkxha0lzWVVGQmVrSTdRVUZEUkR0QlFVTkdPenRCUVVWRUxGRkJRVWtzUTBGQlEyVXNaMEpCUVVRc1NVRkJjVUlzUTBGQlF5eE5RVUZMYmtJc1QwRkJUQ3hEUVVGaFVTeHBRa0ZCZGtNc1JVRkJNRVE3UVVGRGVFUXNXVUZCUzJkQ0xHVkJRVXdzUTBGQmNVSldMRXRCUVhKQ08wRkJRMEVzV1VGQlMxY3NhVUpCUVV3c1EwRkJkVUpZTEV0QlFYWkNPMEZCUTBRN1FVRkRSaXhIUVhoRE5rSTdPMEZCUVVFc1QwRXdRemxDV1N4UlFURkRPRUlzUjBFd1EyNUNMR2xDUVVGVE8wRkJRMnhDTEZGQlFVa3NRMEZCUXl4TlFVRkxNVUlzVDBGQlRDeERRVUZoVnl4TlFVRmlMRU5CUVc5Q1JTeEpRVUZ3UWl4RFFVRjVRaXhMUVVGNlFpeEZRVUVyUWtNc1MwRkJMMElzUTBGQlRDeEZRVUUwUXpzN1FVRkZOVU1zVVVGQlNVTXNUVUZCVFN4TlFVRkxaaXhQUVVGTUxFTkJRV0ZUTEdsQ1FVRmlMRWRCUVdsRFN5eE5RVUZOUlN4SlFVRjJReXhIUVVFNFEwWXNUVUZCVFVNc1IwRkJPVVE3TzBGQlJVRXNVVUZCU1VFc1NVRkJTVVVzVFVGQlNpeExRVUZsTEVOQlFXNUNMRVZCUVhOQ08wRkJRM0JDUml4WlFVRk5RU3hKUVVGSlJ5eFhRVUZLTEVWQlFVNDdRVUZEUVN4VlFVRkpTQ3hSUVVGUkxFZEJRVm9zUlVGQmFVSkJMRTFCUVUwc1QwRkJUanRCUVVOc1FqczdRVUZGUkN4VlFVRkxXQ3hoUVVGTUxHZERRVUY1UWl4TlFVRkxRU3hoUVVFNVFqczdRVUZGUVN4UlFVRk5kVUlzVVVGQlVTeE5RVUZMZGtJc1lVRkJUQ3hEUVVGdFFuZENMRTlCUVc1Q0xFTkJRVEpDWWl4SFFVRXpRaXhEUVVGa08wRkJRMEVzVVVGQlNWa3NWVUZCVlN4RFFVRkRMRU5CUVdZc1JVRkJhMEk3UVVGRGFFSXNXVUZCUzNaQ0xHRkJRVXdzUTBGQmJVSjVRaXhOUVVGdVFpeERRVUV3UWtZc1MwRkJNVUlzUlVGQmFVTXNRMEZCYWtNN1FVRkRRU3haUVVGTGRrSXNZVUZCVEN4RFFVRnRRbXRDTEVsQlFXNUNPMEZCUTBRN08wRkJSVVFzVlVGQlMwVXNaVUZCVEN4RFFVRnhRbFlzUzBGQmNrSTdRVUZEUkN4SFFUZEVOa0k3TzBGQlFVRXNUMEVyUkRsQ1owSXNWVUV2UkRoQ0xFZEJLMFJxUWl4WlFVRk5PMEZCUTJwQ0xGVkJRVXN4UWl4aFFVRk1MRWRCUVhGQ0xFVkJRWEpDTzBGQlEwRXNWVUZCUzBNc1UwRkJUQ3hIUVVGcFFpeEZRVUZxUWp0QlFVTkVMRWRCYkVVMlFqczdRVUZCUVN4UFFXOUZPVUp0UWl4bFFYQkZPRUlzUjBGdlJWb3NhVUpCUVZNN1FVRkRla0lzVVVGQlRVOHNWMEZCVjBNc1MwRkJTME1zUzBGQlRDeERRVUZYUkN4TFFVRkxSU3hUUVVGTUxFTkJRV1VzVFVGQlN6ZENMRk5CUVhCQ0xFTkJRVmdzUTBGQmFrSTdPMEZCUkhsQ08wRkJRVUU3UVVGQlFUczdRVUZCUVR0QlFVZDZRaXd5UWtGQmIwSXNUVUZCUzBVc1UwRkJla0lzT0VoQlFXOURPMEZCUVVFc1dVRkJNMEkwUWl4UFFVRXlRanM3UVVGRGJFTkJMR2RDUVVGUlF5eFJRVUZTTEVOQlFXbENUQ3hSUVVGcVFpeEZRVUV5UW1wQ0xFdEJRVE5DTzBGQlEwUTdRVUZNZDBJN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVTB4UWl4SFFURkZOa0k3TzBGQlFVRXNUMEUwUlRsQ1Z5eHBRa0UxUlRoQ0xFZEJORVZXTEdsQ1FVRlRPMEZCUXpOQ0xGRkJRVTFOTEZkQlFWZERMRXRCUVV0RExFdEJRVXdzUTBGQlYwUXNTMEZCUzBVc1UwRkJUQ3hEUVVGbExFMUJRVXMzUWl4VFFVRndRaXhEUVVGWUxFTkJRV3BDT3p0QlFVVkJMRkZCUVUxblF5eGhRVUZoTEVWQlFXNUNPenRCUVVWQkxGRkJRVWxETEc5Q1FVRnZRaXhGUVVGNFFqdEJRVU5CTEZOQlFVc3NTVUZCU1VNc1NVRkJTU3hOUVVGTGJFTXNVMEZCVEN4RFFVRmxXU3hOUVVGbUxFZEJRWGRDTEVOQlFYSkRMRVZCUVhkRGMwSXNTMEZCU3l4RFFVRTNReXhGUVVGblJFRXNSMEZCYUVRc1JVRkJjVVE3UVVGRGJrUkVMREpDUVVGeFFpeE5RVUZMYWtNc1UwRkJUQ3hEUVVGbGEwTXNRMEZCWml4RFFVRnlRaXcwUWtGQk1rTkVMR2xDUVVFelF6dEJRVU5CUkN4cFFrRkJWMmhDTEVsQlFWZ3NRMEZCWjBJc2FVTkJRV3RDYVVJc2FVSkJRV3hDTEVOQlFXaENPMEZCUTBRN08wRkJWREJDTzBGQlFVRTdRVUZCUVRzN1FVRkJRVHRCUVZjelFpdzBRa0ZCYjBJc1RVRkJTMmhETEZOQlFYcENMRzFKUVVGdlF6dEJRVUZCTEZsQlFUTkNhME1zVDBGQk1rSTdPMEZCUTJ4RExGbEJRMFVzVFVGQlMzUkRMR0ZCUVV3c1MwRkJkVUp6UXl4UlFVRlJReXhMUVVFdlFpeEpRVU5CU2l4WFFVRlhha0lzVVVGQldDeERRVUZ2UW05Q0xGRkJRVkZGTEZOQlFUVkNMRU5CUmtZc1JVRkhSVHRCUVVOQlJpeHJRa0ZCVVVvc1VVRkJVaXhEUVVGcFFrd3NVVUZCYWtJc1JVRkJNa0pxUWl4TFFVRXpRanRCUVVORU8wRkJRMFk3UVVGc1FqQkNPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGdFFqVkNMRWRCTDBZMlFqczdRVUZCUVN4UFFUQkhPVUkyUWl4SlFURkhPRUlzUjBFd1IzWkNMRlZCUVVORExGRkJRVVFzUlVGQlYwZ3NTMEZCV0N4RlFVRnJRa3dzVVVGQmJFSXNSVUZCSzBJN1FVRkRjRU1zVVVGQlNVRXNZVUZCWVZNc1UwRkJha0lzUlVGQk5FSTdRVUZETVVKVUxHbENRVUZYU3l4TFFVRllPMEZCUTBGQkxHTkJRVkV6UXl4TFFVRkxTeXhoUVVGaU8wRkJRMFE3TzBGQlJVUXNVVUZCU1N4UFFVRlBlVU1zVVVGQlVDeExRVUZ2UWl4UlFVRjRRaXhGUVVGclEwRXNWMEZCVnl3MlFrRkJZMEVzVVVGQlpDeERRVUZZT3p0QlFVVnNRMEVzWlVGQlZ5dzJRa0ZCWTBFc1VVRkJaQ3hEUVVGWU96dEJRVVZCTEZGQlFVMUZMRmxCUVZrc01rSkJRV3hDTzBGQlEwRXNWVUZCUzNoRExGTkJRVXdzUTBGQlpXVXNTVUZCWml4RFFVRnZRanRCUVVOc1FqQkNMRlZCUVVsRUxGTkJSR003UVVGRmJFSktMR2xDUVVGWExHbERRVUZyUWtVc1VVRkJiRUlzUTBGR1R6dEJRVWRzUWtFc2QwSkJTR3RDTzBGQlNXeENTQ3hyUWtGS2EwSTdRVUZMYkVKTU8wRkJUR3RDTEV0QlFYQkNPenRCUVZGQkxGZEJRVTlWTEZOQlFWQTdRVUZEUkN4SFFUbElOa0k3TzBGQlFVRXNUMEZ4U1RsQ1JTeE5RWEpKT0VJc1IwRnhTWEpDTEhGQ1FVRmhPMEZCUTNCQ0xGRkJRVTF5UWl4UlFVRlJMRTFCUVV0eVFpeFRRVUZNTEVOQlFXVXlReXhUUVVGbUxFTkJRWGxDTzBGQlFVRXNZVUZCVjFRc1VVRkJVVThzUlVGQlVpeExRVUZsUkN4VFFVRXhRanRCUVVGQkxFdEJRWHBDTEVOQlFXUTdPMEZCUlVFc1VVRkJTVzVDTEZWQlFWVXNRMEZCUXl4RFFVRm1MRVZCUVd0Q0xFMUJRVTBzU1VGQlNYVkNMRXRCUVVvc1EwRkJWU3g1UWtGQmVVSktMRk5CUVc1RExFTkJRVTQ3TzBGQlJXeENMRlZCUVV0NFF5eFRRVUZNTEVOQlFXVjFRaXhOUVVGbUxFTkJRWE5DUml4TFFVRjBRaXhGUVVFMlFpeERRVUUzUWp0QlFVTkVMRWRCTTBrMlFqczdRVUZCUVN4UFFXbEtPVUozUWl4WFFXcEtPRUlzUjBGcFNtaENMR2xDUVVGVE8wRkJRM0pDTEZGQlFVMURMRlZCUVZVc1JVRkJhRUk3UVVGRFFTeFZRVUZMT1VNc1UwRkJUQ3hEUVVGbEswTXNUMEZCWml4RFFVRjFRaXhWUVVGRFlpeFBRVUZFTEVWQlFWVmlMRXRCUVZZc1JVRkJiMEk3UVVGRGVrTXNWVUZCU1dFc1VVRkJVVU1zUzBGQlVpeExRVUZyUWtFc1MwRkJkRUlzUlVGQk5rSlhMRkZCUVZFdlFpeEpRVUZTTEVOQlFXRk5MRXRCUVdJN1FVRkRPVUlzUzBGR1JEczdRVUZHY1VJN1FVRkJRVHRCUVVGQk96dEJRVUZCTzBGQlRYSkNMRFJDUVVGclFubENMRTlCUVd4Q0xHMUpRVUV5UWp0QlFVRkJMRmxCUVd4Q2VrSXNTMEZCYTBJN08wRkJRM3BDTEdOQlFVdHlRaXhUUVVGTUxFTkJRV1YxUWl4TlFVRm1MRU5CUVhOQ1JpeExRVUYwUWl4RlFVRTJRaXhEUVVFM1FqdEJRVU5FTzBGQlVtOUNPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGVGRFSXNSMEV4U2paQ096dEJRVUZCTEU5QkswbzVRakpDTEZOQkwwbzRRaXhIUVN0S2JFSXNXVUZCVFR0QlFVTm9RaXhWUVVGTGFFUXNVMEZCVEN4SFFVRnBRaXhGUVVGcVFqdEJRVU5FTEVkQmFrczJRanM3UVVGQlFTeFBRVEJMT1VKcFJDeExRVEZMT0VJc1IwRXdTM1JDTEc5Q1FVRlpPMEZCUTJ4Q0xGRkJRVTFETEZsQlFWa3NNa0pCUVd4Q08wRkJRMEVzVlVGQlMycEVMRk5CUVV3c1EwRkJaV01zU1VGQlppeERRVUZ2UWp0QlFVTnNRakJDTEZWQlFVbFRMRk5CUkdNN1FVRkZiRUp3UWp0QlFVWnJRaXhMUVVGd1FqczdRVUZMUVN4WFFVRlBiMElzVTBGQlVEdEJRVU5FTEVkQmJFdzJRanM3UVVGQlFTeFBRWGxNT1VKRExFOUJla3c0UWl4SFFYbE1jRUlzY1VKQlFXRTdRVUZEY2tJc1VVRkJUVGxDTEZGQlFWRXNUVUZCUzNCQ0xGTkJRVXdzUTBGQlpUQkRMRk5CUVdZc1EwRkJlVUk3UVVGQlFTeGhRVUZYWkN4UlFVRlJXU3hGUVVGU0xFdEJRV1ZUTEZOQlFURkNPMEZCUVVFc1MwRkJla0lzUTBGQlpEczdRVUZGUVN4UlFVRkpOMElzVlVGQlZTeERRVUZETEVOQlFXWXNSVUZCYTBJc1RVRkJUU3hKUVVGSmRVSXNTMEZCU2l4RFFVRlZMSGxDUVVGNVFrMHNVMEZCYmtNc1EwRkJUanM3UVVGRmJFSXNWVUZCUzJwRUxGTkJRVXdzUTBGQlpYTkNMRTFCUVdZc1EwRkJjMEpHTEV0QlFYUkNMRVZCUVRaQ0xFTkJRVGRDTzBGQlEwUXNSMEV2VERaQ096dEJRVUZCTEU5QmIwMDVRaXRDTEZWQmNFMDRRaXhIUVc5TmFrSXNXVUZCVFR0QlFVTnFRaXhWUVVGTGJrUXNVMEZCVEN4SFFVRnBRaXhGUVVGcVFqdEJRVU5FTEVkQmRFMDJRanM3UVVGQlFTeFBRVFpOT1VKdlJDeFhRVGROT0VJc1IwRTJUV2hDTEdsQ1FVRlRPMEZCUTNKQ0xGVkJRVXQ2UkN4aFFVRk1MRWRCUVhGQ2RVTXNTMEZCY2tJN1FVRkRSQ3hIUVM5Tk5rSTdPMEZCUVVFc1QwRnZUamxDYlVJc1NVRndUamhDTEVkQmIwNTJRaXhaUVVGTk8wRkJRMWdzVVVGQlNTeERRVUZETEUxQlFVc3pSQ3hSUVVGV0xFVkJRVzlDTzBGQlEyeENMRmxCUVVzMFJDeFJRVUZNTEVOQlFXTkRMRzFDUVVGa0xFTkJRV3RETEZOQlFXeERMRVZCUVRaRExFMUJRVXRzUkN4VlFVRnNSRHRCUVVOQkxGbEJRVXRwUkN4UlFVRk1MRU5CUVdORExHMUNRVUZrTEVOQlFXdERMRTlCUVd4RExFVkJRVEpETEUxQlFVdHdReXhSUVVGb1JEdEJRVU5CTEZsQlFVdHRReXhSUVVGTUxFTkJRV05ETEcxQ1FVRmtMRU5CUVd0RExFOUJRV3hETEVWQlFUSkRMRTFCUVV0b1F5eFZRVUZvUkR0QlFVTkJMRmxCUVVzclFpeFJRVUZNTEVOQlFXTkRMRzFDUVVGa0xFTkJRV3RETEUxQlFXeERMRVZCUVRCRExFMUJRVXRvUXl4VlFVRXZRenM3UVVGRlFTeFpRVUZMUVN4VlFVRk1PenRCUVVWQkxGbEJRVXMzUWl4UlFVRk1MRWRCUVdkQ0xFbEJRV2hDTzBGQlEwUTdRVUZEUml4SFFTOU9Oa0k3TzBGQlFVRXNUMEZ2VHpsQ09FUXNUVUZ3VHpoQ0xFZEJiMDl5UWl4WlFVRk5PMEZCUTJJc1VVRkJTU3hOUVVGTE9VUXNVVUZCVkN4RlFVRnRRanRCUVVOcVFpeFpRVUZMTkVRc1VVRkJUQ3hEUVVGalJ5eG5Ra0ZCWkN4RFFVRXJRaXhUUVVFdlFpeEZRVUV3UXl4TlFVRkxjRVFzVlVGQkwwTTdRVUZEUVN4WlFVRkxhVVFzVVVGQlRDeERRVUZqUnl4blFrRkJaQ3hEUVVFclFpeFBRVUV2UWl4RlFVRjNReXhOUVVGTGRFTXNVVUZCTjBNN1FVRkRRU3haUVVGTGJVTXNVVUZCVEN4RFFVRmpSeXhuUWtGQlpDeERRVUVyUWl4UFFVRXZRaXhGUVVGM1F5eE5RVUZMYkVNc1ZVRkJOME03UVVGRFFTeFpRVUZMSzBJc1VVRkJUQ3hEUVVGalJ5eG5Ra0ZCWkN4RFFVRXJRaXhOUVVFdlFpeEZRVUYxUXl4TlFVRkxiRU1zVlVGQk5VTTdPMEZCUlVFc1dVRkJTemRDTEZGQlFVd3NSMEZCWjBJc1MwRkJhRUk3UVVGRFJEdEJRVU5HTEVkQk4wODJRanM3UVVGQlFTeFBRV3RRT1VKblJTeExRV3hRT0VJc1IwRnJVSFJDTEZsQlFVMDdRVUZEV2l4VlFVRkxia01zVlVGQlREdEJRVU5CTEZWQlFVdDNRaXhUUVVGTU8wRkJRMEVzVlVGQlMwa3NWVUZCVER0QlFVTkVMRWRCZEZBMlFqczdRVUZETlVJc1RVRkJTU3hEUVVGRE0wUXNUMEZCVEN4RlFVRmpRU3hWUVVGVmJVVXNUVUZCVmp0QlFVTmtMRTlCUVV0TUxGRkJRVXdzUjBGQlowSTVSQ3hQUVVGb1FqczdRVUZGUVc5RkxGTkJRVTlETEUxQlFWQXNRMEZCWXl4TFFVRkxjRVVzVDBGQmJrSXNSVUZCTkVKQkxFOUJRVFZDT3p0QlFVVkJMRTlCUVVzclJDeE5RVUZNTzBGQlEwUTdPMEZCTUVaRU96czdPenM3T3pzN096dEJRU3RDUVRzN096czdPenRCUVdGQk96czdPenM3UVVGbFFUczdPenM3UVVGUFFUczdPenM3T3pzN08wRkJhVUpCT3pzN096czdPMEZCWVVFN096czdPMEZCVDBFN096czdPenM3UVVGVFFUczdPenM3UVVGblFrRTdPenM3TzBGQlkwRTdPenM3TzBGQmFsRkpha1VzU1N4RFFVVkhTeXhoTEVkQlFXZENMR1U3YTBKQmVWRldUQ3hKT3pzN096czdPenM3T3pzN096czdPenM3YTBKRE5WQkJMRlZCUVZNNFF5eFJRVUZVTEVWQlFXMUNPMEZCUTJoRExFMUJRVWtzUTBGQlEzbENMRTFCUVUxRExFOUJRVTRzUTBGQll6RkNMRkZCUVdRc1EwRkJSQ3hKUVVFMFFrRXNVMEZCVXpOQ0xFMUJRVlFzUzBGQmIwSXNRMEZCY0VRc1JVRkRSU3hOUVVGTkxFbEJRVWxwUXl4TFFVRktMRU5CUVZVc2MwTkJRWE5EVGl4UlFVRm9SQ3hEUVVGT096dEJRVVZHTEUxQlFVa3lRaXhoUVVGaExFOUJRVTh6UWl4VFFVRlRMRU5CUVZRc1EwRkJVQ3hMUVVGMVFpeFJRVUY0UXpzN1FVRkZRU3hOUVVGSk1rSXNZMEZCWXpOQ0xGTkJRVk16UWl4TlFVRlVMRXRCUVc5Q0xFTkJRWFJETEVWQlFYbERPMEZCUTNaRE1rSXNaVUZCVjBFc1UwRkJVeXhEUVVGVUxFTkJRVmc3UVVGRFFUSkNMR2xDUVVGaExFdEJRV0k3UVVGRFJEczdRVUZGUkN4TlFVRkpRU3hWUVVGS0xFVkJRV2RDUXl4alFVRmpOVUlzVVVGQlpDeEZRVUZvUWl4TFFVTkxOa0lzVjBGQlZ6ZENMRkZCUVZnN08wRkJSVXdzVTBGQlQwRXNVVUZCVUR0QlFVTkVMRU03TzBGQmNrUkVMRk5CUVZNMFFpeGhRVUZVTEVOQlFYVkNla01zVVVGQmRrSXNSVUZCYVVNN1FVRkRMMElzVDBGQlN5eEpRVUZKVVN4SlFVRkpMRU5CUVdJc1JVRkJaMEpCTEVsQlFVbFNMRk5CUVZOa0xFMUJRVGRDTEVWQlFYRkRjMElzUjBGQmNrTXNSVUZCTUVNN1FVRkRlRU1zVVVGQlNTeERRVUZET0VJc1RVRkJUVU1zVDBGQlRpeERRVUZqZGtNc1UwRkJVMUVzUTBGQlZDeERRVUZrTEVOQlFVd3NSVUZEUlN4TlFVRk5MRWxCUVVsWExFdEJRVW9zWjBOQlFYVkRia0lzVVVGQmRrTXNUMEZCVGpzN1FVRkZSakJETEdWQlFWY3hReXhUUVVGVFVTeERRVUZVTEVOQlFWZzdRVUZEUkR0QlFVTkdPenRCUVVWRUxGTkJRVk5yUXl4VlFVRlVMRU5CUVc5Q1F5eExRVUZ3UWl4RlFVRXlRanRCUVVONlFpeFBRVUZMTEVsQlFVbHVReXhKUVVGSkxFTkJRV0lzUlVGQlowSkJMRWxCUVVsdFF5eE5RVUZOZWtRc1RVRkJNVUlzUlVGQmEwTnpRaXhIUVVGc1F5eEZRVUYxUXp0QlFVTnlReXhSUVVGSkxFOUJRVTl0UXl4TlFVRk5ia01zUTBGQlRpeERRVUZRTEV0QlFXOUNMRkZCUVhoQ0xFVkJRMFVzVFVGQlRTeEpRVUZKVnl4TFFVRktMRFpDUVVGdlEzZENMRXRCUVhCRExFOUJRVTQ3TzBGQlJVWXNVVUZCVFVNc1lVRkJZVU1zVTBGQlUwWXNUVUZCVFc1RExFTkJRVTRzUTBGQlZDeERRVUZ1UWp0QlFVTkJMRkZCUVVrc1EwRkJRMjlETEZWQlFVd3NSVUZEUlN4TlFVRk5MRWxCUVVsNlFpeExRVUZLTEd0Q1FVRjVRbmxDTEZWQlFYcENMREpDUVVGNVJFUXNTMEZCZWtRc1QwRkJUanM3UVVGRlJrRXNWVUZCVFc1RExFTkJRVTRzU1VGQlYyOURMRlZCUVZnN1FVRkRSRHRCUVVORVJDeFJRVUZOY0VRc1NVRkJUanRCUVVORU96dEJRVVZFTEZOQlFWTnpSQ3hSUVVGVUxFTkJRV3RDTjBRc1IwRkJiRUlzUlVGQmRVSTdRVUZEY2tKQkxGRkJRVTFCTEVsQlFVazRSQ3hQUVVGS0xFTkJRVmtzVFVGQldpeEZRVUZ2UWl4SFFVRndRaXhEUVVGT08wRkJRMEVzVFVGQlNUbEVMRkZCUVZFc1IwRkJXaXhGUVVGcFFrRXNUVUZCVFN4UFFVRk9PMEZCUTJwQ1FTeFJRVUZOUVN4SlFVRkpLMFFzU1VGQlNpeEZRVUZPTzBGQlEwRXNUVUZCU1M5RUxFbEJRVWxGTEUxQlFVb3NTMEZCWlN4RFFVRnVRaXhGUVVGelFrWXNUVUZCVFVFc1NVRkJTVWNzVjBGQlNpeEZRVUZPTzBGQlEzUkNMRk5CUVU5SUxFZEJRVkE3UVVGRFJEczdRVUZGUkRzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMnRDUTNwQ1pTeFpRVUZYTzBGQlEzaENMRk5CUVU5blJTeFJRVUZRTzBGQlEwUXNRenM3UVVGU1JDeEpRVUZKUVN4VFFVRlRMRU5CUVdJN08wRkJSVUU3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPM2xEUTBaVFF5eFBPenM3T3pzN096czdhMFJCUTBGQkxFODdPenM3T3pzN096c3JRMEZEUVVFc1R6czdPenM3T3pzN08ydEVRVU5CUVN4UE96czdPenM3T3pzN2MwUkJRMEZCTEU4N096czdPenM3T3pzN096czdPenM3T3pzN096czdhMEpEYVVKTkxGVkJRVk53UXl4UlFVRlVMRVZCUVcxQ08wRkJRMmhETEUxQlFVa3NUMEZCVDBFc1VVRkJVQ3hMUVVGdlFpeFJRVUY0UWl4RlFVTkZMRTFCUVUwc1NVRkJTVTBzUzBGQlNpeERRVUZWTEhWRFFVRjFRMDRzVVVGQmFrUXNRMEZCVGpzN1FVRkZSa0VzWVVGQlYwRXNVMEZCVTJsRExFOUJRVlFzUTBGQmFVSXNUVUZCYWtJc1JVRkJlVUlzUlVGQmVrSXNRMEZCV0RzN1FVRkZRU3hOUVVGSkxFOUJRVTlxUXl4UlFVRlFMRXRCUVc5Q0xGRkJRWEJDTEVsQlFXZERRU3hUUVVGVE0wSXNUVUZCVkN4TFFVRnZRaXhEUVVGNFJDeEZRVU5GTEUxQlFVMHNTVUZCU1dsRExFdEJRVW9zUTBGQlZTeHJSRUZCYTBST0xGRkJRVFZFTEVOQlFVNDdPMEZCUlVZc1RVRkJTVGRDTEUxQlFVMHNSVUZCVmp0QlFVTkJMRTFCUVVreVJDeFJRVUZSTEVWQlFWbzdRVUZEUVN4TlFVRk5NME1zVjBGQlZ5eEZRVUZxUWpzN1FVRkZRU3hQUVVGTExFbEJRVWxSTEVsQlFVa3NRMEZCWWl4RlFVRm5Ra0VzU1VGQlNVc3NVMEZCVXpOQ0xFMUJRVGRDTEVWQlFYRkRjMElzUjBGQmNrTXNSVUZCTUVNN1FVRkRlRU1zVVVGQlRUQkRMRWxCUVVseVF5eFRRVUZUYzBNc1RVRkJWQ3hEUVVGblFqTkRMRU5CUVdoQ0xFTkJRVlk3UVVGRFFTeFJRVUZKTEVOQlFVTjRRaXhKUVVGSlJTeE5RVUZVTEVWQlFXbENPMEZCUTJaR0xGVkJRVWxOTEVsQlFVb3NRMEZCVXpSRUxFTkJRVlE3UVVGRFJDeExRVVpFTEUxQlJVODdRVUZEVEN4VlFVRkpRU3hOUVVGTlJTeFpRVUZXTEVWQlFYZENPMEZCUTNSQ1ZDeGpRVUZOY2tRc1NVRkJUaXhEUVVGWEswUXNWMEZCVjNKRkxFZEJRVmdzUTBGQldEdEJRVU5CUVN4alFVRk5MRVZCUVU0N1FVRkRSQ3hQUVVoRUxFMUJSMDhzU1VGQlNXdEZMRTFCUVUxSkxGZEJRVllzUlVGQmRVSTdRVUZETlVKWUxHTkJRVTF5UkN4SlFVRk9MRU5CUVZjclJDeFhRVUZYY2tVc1IwRkJXQ3hEUVVGWU8wRkJRMEZCTEdOQlFVMHNSVUZCVGp0QlFVTkJNa1FzWTBGQlRYQkVMRWxCUVU0N1FVRkRRVk1zYVVKQlFWTldMRWxCUVZRc1EwRkJZM0ZFTEV0QlFXUTdRVUZEUVVFc1owSkJRVkVzUlVGQlVqdEJRVU5FTEU5QlRrMHNUVUZOUVR0QlFVTk1NMFFzV1VGQlNVMHNTVUZCU2l4RFFVRlRORVFzUTBGQlZEdEJRVU5FTzBGQlEwWTdRVUZEUmpzN1FVRkZSQ3hOUVVGSmJFVXNTVUZCU1VVc1RVRkJVaXhGUVVGblFqdEJRVU5rZVVRc1ZVRkJUWEpFTEVsQlFVNHNRMEZCVnl0RUxGZEJRVmR5UlN4SFFVRllMRU5CUVZnN1FVRkRRVEpFTEZWQlFVMXdSQ3hKUVVGT08wRkJRMEZUTEdGQlFWTldMRWxCUVZRc1EwRkJZM0ZFTEV0QlFXUTdRVUZEUkN4SFFVcEVMRTFCU1U4N1FVRkRUQ3hWUVVGTkxFbEJRVWw0UWl4TFFVRktMRU5CUVZVc01rTkJRVEpEVGl4UlFVRnlSQ3hEUVVGT08wRkJRMFE3TzBGQmRrTXJRanRCUVVGQk8wRkJRVUU3TzBGQlFVRTdRVUY1UTJoRExIbENRVUZyUW1Jc1VVRkJiRUlzT0VoQlFUUkNPMEZCUVVFc1ZVRkJia0l5UXl4TlFVRnRRanM3UVVGRE1VSXNWVUZCVFZrc1lVRkJZVU1zWTBGQlkySXNUVUZCWkN4RFFVRnVRanRCUVVOQkxGVkJRVWxaTEZkQlFWZHlSU3hOUVVGWUxFZEJRVzlDTEVOQlFYaENMRVZCUTBVc1RVRkJUU3hKUVVGSmFVTXNTMEZCU2l4RFFVRlZMSFZEUVVGMVEwNHNVVUZCYWtRc1EwRkJUanRCUVVOSU8wRkJOME1yUWp0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk96dEJRU3REYUVNc1RVRkJTV0lzVTBGQlUyUXNUVUZCVkN4TFFVRnZRaXhEUVVGNFFpeEZRVUV5UWl4UFFVRlBZeXhUUVVGVExFTkJRVlFzUTBGQlVDeERRVUV6UWl4TFFVTkxMRTlCUVU5QkxGRkJRVkE3UVVGRFRpeERPenM3TzBGQmRFVkVMRWxCUVUxdlJDeGxRVUZsTEVkQlFYSkNPMEZCUTBFc1NVRkJUVVVzWTBGQll5eEhRVUZ3UWpzN1FVRkZRU3hUUVVGVFJTeGhRVUZVTEVOQlFYVkNZaXhMUVVGMlFpeEZRVUU0UWp0QlFVTTFRaXhOUVVGTll5eFJRVUZSTEZOQlFWSkJMRXRCUVZFN1FVRkJRU3hYUVVOYVpDeE5RVUZOWlN4TlFVRk9MRU5CUVdFc1ZVRkJRME1zUlVGQlJDeEZRVUZMUXl4RlFVRk1PMEZCUVVFc1lVRkJXWGhDTEU5QlFVOURMRTFCUVZBc1EwRkJZM05DTEVWQlFXUXNjMEpCUVhGQ1F5eEZRVUZ5UWl4RlFVRXdRaXhEUVVGRFJDeEhRVUZIUXl4RlFVRklMRXRCUVZVc1EwRkJXQ3hKUVVGblFpeERRVUV4UXl4RlFVRmFPMEZCUVVFc1MwRkJZaXhGUVVGNVJTeEZRVUY2UlN4RFFVUlpPMEZCUVVFc1IwRkJaRHRCUVVWQkxFMUJRVTFNTEdGQlFXRXNVMEZCWWtFc1ZVRkJZVHRCUVVGQkxGZEJRVkZ1UWl4UFFVRlBlVUlzU1VGQlVDeERRVUZaUXl4SlFVRmFMRVZCUVd0Q2JFWXNUVUZCYkVJc1EwRkJlVUk3UVVGQlFTeGhRVUZMYTBZc1MwRkJTME1zUTBGQlRDeEpRVUZWTEVOQlFXWTdRVUZCUVN4TFFVRjZRaXhEUVVGU08wRkJRVUVzUjBGQmJrSTdRVUZEUVN4VFFVRlBVaXhYUVVGWFJTeE5RVUZOWkN4TFFVRk9MRU5CUVZnc1EwRkJVRHRCUVVORU96dEJRVVZFTEZOQlFWTlZMRlZCUVZRc1EwRkJiMEp5UlN4SFFVRndRaXhGUVVGNVFqdEJRVU4yUWtFc1VVRkJUVUVzU1VGQlNXZEdMRWxCUVVvc1EwRkJVeXhGUVVGVUxFTkJRVTQ3UVVGRFFTeE5RVUZKYUVZc1NVRkJTVVVzVFVGQlNpeExRVUZsTEVOQlFXNUNMRVZCUVhOQ1JpeE5RVUZOUVN4SlFVRkpSeXhYUVVGS0xFVkJRVTQ3UVVGRGRFSXNVMEZCVDBnc1IwRkJVRHRCUVVORU96dEJRVVZFT3pzN096czdPenM3T3pzN096czdPenM3T3pzN08ydENRMUpsTEZWQlFWTTJRaXhSUVVGVUxFVkJRVzFDTzBGQlEyaERMRTFCUVVrc1EwRkJRM2xDTEUxQlFVMURMRTlCUVU0c1EwRkJZekZDTEZGQlFXUXNRMEZCVEN4RlFVTkZMRTFCUVUwc1NVRkJTVTBzUzBGQlNpeERRVUZWTERCRFFVRXdRMDRzVVVGQmNFUXNRMEZCVGpzN1FVRkZSaXhOUVVGSk1rSXNZVUZCWVN4UFFVRlBNMElzVTBGQlV5eERRVUZVTEVOQlFWQXNTMEZCZFVJc1VVRkJlRU03TzBGQlJVRXNUVUZCU1N4RFFVRkRNa0lzVlVGQlRDeEZRVUZwUWp0QlFVTm1MRmRCUVU4elFpeFRRVUZUYlVRc1NVRkJWQ3hEUVVGaldpeFpRVUZrTEVOQlFWQTdRVUZEUkN4SFFVWkVMRTFCUlU4N1FVRkRUQ3hYUVVGUGRrTXNVMEZCVTI5RUxFZEJRVlFzUTBGQllUdEJRVUZCTEdGQlFWRkRMRXRCUVV0R0xFbEJRVXdzUTBGQlZWb3NXVUZCVml4RFFVRlNPMEZCUVVFc1MwRkJZaXhGUVVFNFExa3NTVUZCT1VNc1EwRkJiVVJXTEZkQlFXNUVMRU5CUVZBN1FVRkRSRHRCUVVOR0xFTTdPMEZCYmtKRUxFbEJRVTFHTEdWQlFXVXNTMEZCY2tJN1FVRkRRU3hKUVVGTlJTeGpRVUZqTEV0QlFYQkNPenRCUVVWQklpd2labWxzWlNJNkltdGxlV04xZEhNdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUlvWm5WdVkzUnBiMjRnZDJWaWNHRmphMVZ1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNG9jbTl2ZEN3Z1ptRmpkRzl5ZVNrZ2UxeHVYSFJwWmloMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkSGx3Wlc5bUlHMXZaSFZzWlNBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MGJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbVlXTjBiM0o1S0NrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHUmxabWx1WlNBOVBUMGdKMloxYm1OMGFXOXVKeUFtSmlCa1pXWnBibVV1WVcxa0tWeHVYSFJjZEdSbFptbHVaU2hiWFN3Z1ptRmpkRzl5ZVNrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHVjRjRzl5ZEhOYlhDSnJaWGxqZFhSelhDSmRJRDBnWm1GamRHOXllU2dwTzF4dVhIUmxiSE5sWEc1Y2RGeDBjbTl2ZEZ0Y0ltdGxlV04xZEhOY0lsMGdQU0JtWVdOMGIzSjVLQ2s3WEc1OUtTaDNhVzVrYjNjc0lHWjFibU4wYVc5dUtDa2dlMXh1Y21WMGRYSnVJQ0lzSWlCY2RDOHZJRlJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEhaaGNpQnBibk4wWVd4c1pXUk5iMlIxYkdWeklEMGdlMzA3WEc1Y2JpQmNkQzh2SUZSb1pTQnlaWEYxYVhKbElHWjFibU4wYVc5dVhHNGdYSFJtZFc1amRHbHZiaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0cxdlpIVnNaVWxrS1NCN1hHNWNiaUJjZEZ4MEx5OGdRMmhsWTJzZ2FXWWdiVzlrZFd4bElHbHpJR2x1SUdOaFkyaGxYRzRnWEhSY2RHbG1LR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRLU0I3WEc0Z1hIUmNkRngwY21WMGRYSnVJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbVY0Y0c5eWRITTdYRzRnWEhSY2RIMWNiaUJjZEZ4MEx5OGdRM0psWVhSbElHRWdibVYzSUcxdlpIVnNaU0FvWVc1a0lIQjFkQ0JwZENCcGJuUnZJSFJvWlNCallXTm9aU2xjYmlCY2RGeDBkbUZ5SUcxdlpIVnNaU0E5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkSUQwZ2UxeHVJRngwWEhSY2RHazZJRzF2WkhWc1pVbGtMRnh1SUZ4MFhIUmNkR3c2SUdaaGJITmxMRnh1SUZ4MFhIUmNkR1Y0Y0c5eWRITTZJSHQ5WEc0Z1hIUmNkSDA3WEc1Y2JpQmNkRngwTHk4Z1JYaGxZM1YwWlNCMGFHVWdiVzlrZFd4bElHWjFibU4wYVc5dVhHNGdYSFJjZEcxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1OaGJHd29iVzlrZFd4bExtVjRjRzl5ZEhNc0lHMXZaSFZzWlN3Z2JXOWtkV3hsTG1WNGNHOXlkSE1zSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4cE8xeHVYRzRnWEhSY2RDOHZJRVpzWVdjZ2RHaGxJRzF2WkhWc1pTQmhjeUJzYjJGa1pXUmNiaUJjZEZ4MGJXOWtkV3hsTG13Z1BTQjBjblZsTzF4dVhHNGdYSFJjZEM4dklGSmxkSFZ5YmlCMGFHVWdaWGh3YjNKMGN5QnZaaUIwYUdVZ2JXOWtkV3hsWEc0Z1hIUmNkSEpsZEhWeWJpQnRiMlIxYkdVdVpYaHdiM0owY3p0Y2JpQmNkSDFjYmx4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlhNZ2IySnFaV04wSUNoZlgzZGxZbkJoWTJ0ZmJXOWtkV3hsYzE5ZktWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dElEMGdiVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WXlBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHUmxabWx1WlNCblpYUjBaWElnWm5WdVkzUnBiMjRnWm05eUlHaGhjbTF2Ym5rZ1pYaHdiM0owYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrSUQwZ1puVnVZM1JwYjI0b1pYaHdiM0owY3l3Z2JtRnRaU3dnWjJWMGRHVnlLU0I3WEc0Z1hIUmNkR2xtS0NGZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOG9aWGh3YjNKMGN5d2dibUZ0WlNrcElIdGNiaUJjZEZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnYm1GdFpTd2dleUJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMQ0JuWlhRNklHZGxkSFJsY2lCOUtUdGNiaUJjZEZ4MGZWeHVJRngwZlR0Y2JseHVJRngwTHk4Z1pHVm1hVzVsSUY5ZlpYTk5iMlIxYkdVZ2IyNGdaWGh3YjNKMGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eUlEMGdablZ1WTNScGIyNG9aWGh3YjNKMGN5a2dlMXh1SUZ4MFhIUnBaaWgwZVhCbGIyWWdVM2x0WW05c0lDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUppQlRlVzFpYjJ3dWRHOVRkSEpwYm1kVVlXY3BJSHRjYmlCY2RGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z1UzbHRZbTlzTG5SdlUzUnlhVzVuVkdGbkxDQjdJSFpoYkhWbE9pQW5UVzlrZFd4bEp5QjlLVHRjYmlCY2RGeDBmVnh1SUZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnSjE5ZlpYTk5iMlIxYkdVbkxDQjdJSFpoYkhWbE9pQjBjblZsSUgwcE8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1kzSmxZWFJsSUdFZ1ptRnJaU0J1WVcxbGMzQmhZMlVnYjJKcVpXTjBYRzRnWEhRdkx5QnRiMlJsSUNZZ01Ub2dkbUZzZFdVZ2FYTWdZU0J0YjJSMWJHVWdhV1FzSUhKbGNYVnBjbVVnYVhSY2JpQmNkQzh2SUcxdlpHVWdKaUF5T2lCdFpYSm5aU0JoYkd3Z2NISnZjR1Z5ZEdsbGN5QnZaaUIyWVd4MVpTQnBiblJ2SUhSb1pTQnVjMXh1SUZ4MEx5OGdiVzlrWlNBbUlEUTZJSEpsZEhWeWJpQjJZV3gxWlNCM2FHVnVJR0ZzY21WaFpIa2dibk1nYjJKcVpXTjBYRzRnWEhRdkx5QnRiMlJsSUNZZ09Id3hPaUJpWldoaGRtVWdiR2xyWlNCeVpYRjFhWEpsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMblFnUFNCbWRXNWpkR2x2YmloMllXeDFaU3dnYlc5a1pTa2dlMXh1SUZ4MFhIUnBaaWh0YjJSbElDWWdNU2tnZG1Gc2RXVWdQU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0haaGJIVmxLVHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JRGdwSUhKbGRIVnliaUIyWVd4MVpUdGNiaUJjZEZ4MGFXWW9LRzF2WkdVZ0ppQTBLU0FtSmlCMGVYQmxiMllnZG1Gc2RXVWdQVDA5SUNkdlltcGxZM1FuSUNZbUlIWmhiSFZsSUNZbUlIWmhiSFZsTGw5ZlpYTk5iMlIxYkdVcElISmxkSFZ5YmlCMllXeDFaVHRjYmlCY2RGeDBkbUZ5SUc1eklEMGdUMkpxWldOMExtTnlaV0YwWlNodWRXeHNLVHRjYmlCY2RGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV5S0c1ektUdGNiaUJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLRzV6TENBblpHVm1ZWFZzZENjc0lIc2daVzUxYldWeVlXSnNaVG9nZEhKMVpTd2dkbUZzZFdVNklIWmhiSFZsSUgwcE8xeHVJRngwWEhScFppaHRiMlJsSUNZZ01pQW1KaUIwZVhCbGIyWWdkbUZzZFdVZ0lUMGdKM04wY21sdVp5Y3BJR1p2Y2loMllYSWdhMlY1SUdsdUlIWmhiSFZsS1NCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUW9ibk1zSUd0bGVTd2dablZ1WTNScGIyNG9hMlY1S1NCN0lISmxkSFZ5YmlCMllXeDFaVnRyWlhsZE95QjlMbUpwYm1Rb2JuVnNiQ3dnYTJWNUtTazdYRzRnWEhSY2RISmxkSFZ5YmlCdWN6dGNiaUJjZEgwN1hHNWNiaUJjZEM4dklHZGxkRVJsWm1GMWJIUkZlSEJ2Y25RZ1puVnVZM1JwYjI0Z1ptOXlJR052YlhCaGRHbGlhV3hwZEhrZ2QybDBhQ0J1YjI0dGFHRnliVzl1ZVNCdGIyUjFiR1Z6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTRnUFNCbWRXNWpkR2x2YmlodGIyUjFiR1VwSUh0Y2JpQmNkRngwZG1GeUlHZGxkSFJsY2lBOUlHMXZaSFZzWlNBbUppQnRiMlIxYkdVdVgxOWxjMDF2WkhWc1pTQS9YRzRnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwUkdWbVlYVnNkQ2dwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVnNuWkdWbVlYVnNkQ2RkT3lCOUlEcGNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJOYjJSMWJHVkZlSEJ2Y25SektDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bE95QjlPMXh1SUZ4MFhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFvWjJWMGRHVnlMQ0FuWVNjc0lHZGxkSFJsY2lrN1hHNGdYSFJjZEhKbGRIVnliaUJuWlhSMFpYSTdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHeGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5QTlJR1oxYm1OMGFXOXVLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BJSHNnY21WMGRYSnVJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2h2WW1wbFkzUXNJSEJ5YjNCbGNuUjVLVHNnZlR0Y2JseHVJRngwTHk4Z1gxOTNaV0p3WVdOclgzQjFZbXhwWTE5d1lYUm9YMTljYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjQ0E5SUZ3aVhDSTdYRzVjYmx4dUlGeDBMeThnVEc5aFpDQmxiblJ5ZVNCdGIyUjFiR1VnWVc1a0lISmxkSFZ5YmlCbGVIQnZjblJ6WEc0Z1hIUnlaWFIxY200Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aGZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbk1nUFNCY0lpNHZjM0pqTDJsdVpHVjRMbXB6WENJcE8xeHVJaXdpYVcxd2IzSjBJR2RsYm1WeVlYUmxTV1FnWm5KdmJTQW5MaTluWlc1bGNtRjBaVWxrSjF4dWFXMXdiM0owSUdOc1pXRnVVMmh2Y25SamRYUWdabkp2YlNBbkxpOWpiR1ZoYmxOb2IzSjBZM1YwSjF4dWFXMXdiM0owSUhCaGNuTmxVMmh2Y25SamRYUWdabkp2YlNBbkxpOXdZWEp6WlZOb2IzSjBZM1YwSjF4dWFXMXdiM0owSUhOMGNtbHVaMmxtZVZOb2IzSjBZM1YwSUdaeWIyMGdKeTR2YzNSeWFXNW5hV1o1VTJodmNuUmpkWFFuWEc1Y2JpOHFLbHh1SUNvZ1ZHaGxJRzFoYVc0Z1kyeGhjM01nZEc4Z1lXTmpaWE56SUhSb1pTQm1aV0YwZFhKbGN5QnZaaUIwYUdVZ1MyVjVRM1YwY3lCc2FXSnlZWEo1TGx4dUlDb2dRSEJoY21GdElIdElWRTFNUld4bGJXVnVkSDBnWld4bGJXVnVkQ0JVYUdVZ1NGUk5UQ0JsYkdWdFpXNTBJSFJvWVhRZ2MyaHZkV3hrSUd4cGMzUmxiaUIwYjF4dUlDb2dJQ0JyWlhsaWIyRnlaQ0J6YUc5eWRHTjFkSE1nS0dsbUlHNXZkQ0J3Y205MmFXUmxaQ0IwYUdWdUlGZHBibVJ2ZHlCdlltcGxZM1FnYVhNZ2RYTmxaQ2t1WEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2IzQjBhVzl1Y3lBdElFRmtaR2wwYVc5dVlXd2diM0IwYVc5dWN5QW9iM0IwYVc5dVlXd3BMbHh1SUNvZ1FIQmhjbUZ0SUh0aWIyOXNaV0Z1ZlNCdmNIUnBiMjV6TG5SeWFXZG5aWEpQYm1ObFVHVnlTMlY1SUMwZ1NXWWdZU0JyWlhrZ2FYTWdhMlZ3ZENCa2IzZHVJSFJvWlc1Y2JpQXFJQ0FnZEdobElITm9iM0owWTNWMElIZHBiR3dnWW1VZ2RISnBaMmRsY21Wa0lHMTFiSFJwY0d4bElIUnBiV1Z6SUhkb1pXNGdjMlYwSUhSdklHWmhiSE5sSUdGdVpGeHVJQ29nSUNCdmJteDVJRzl1WTJVZ2QyaGxiaUJ6WlhRZ2RHOGdkSEoxWlNBb1pHVm1ZWFZzZERvZ1ptRnNjMlVwWEc0Z0tpQkFjR0Z5WVcwZ2UySnZiMnhsWVc1OUlHOXdkR2x2Ym5NdWRYTmxRMjlrWlVsdWMzUmxZV1JMWlhrZ0xTQkpaaUJ6WlhRZ2RHOGdabUZzYzJVZ2RHaGxibHh1SUNvZ0lDQkxaWGxpYjJGeVpFVjJaVzUwTG10bGVTQnBjeUJsZG1Gc2RXRjBaV1FnWm05eUlIUnlhV2RuWlhKcGJtY2djMmh2Y25SamRYUnpMQ0J2ZEdobGNuZHBjMlZjYmlBcUlDQWdTMlY1WW05aGNtUkZkbVZ1ZEM1amIyUmxJQ2hrWldaaGRXeDBPaUJtWVd4elpTbGNiaUFxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0J2Y0hScGIyNXpMbTFoZUZObGNYVmxibU5sVEdWdVozUm9JQzBnVkdobElHMWhlR2x0ZFcwZ2MyVnhkV1Z1WTJVZ2IyWmNiaUFxSUNBZ2EyVjVJRzl5SUdOdmJXSnZjeUIwYUdGMElITm9iM1ZzWkNCaVpTQjBjbUZqYTJWa0lDaGtaV1poZFd4ME9pQXpLVnh1SUNvZ1FIQmhjbUZ0SUh0R2RXNWpkR2x2Ym4wZ2IzQjBhVzl1Y3k1bWFXeDBaWElnTFNCQklHWnBiSFJsY2lCbWRXNWpkR2x2Ymk0Z1NXWWdkR2hsSUdacGJIUmxjbHh1SUNvZ0lDQnlaWFIxY201eklHWmhiSE5sSUhSb1pTQmxkbVZ1ZENCM2FXeHNJR0psSUdacGJIUmxjbVZrSUc5MWRDQmhibVFnYm04Z1ltOTFibVFnYUdGdVpHeGxjbHh1SUNvZ0lDQnZjaUIzWVhSamFHVnlJSGRwYkd3Z1ltVWdkSEpwWjJkbGNtVmtMaUJVYUdVZ1ptbHNkR1Z5SUdaMWJtTjBhVzl1SUhkcGJHd2dZbVVnWTJGc2JHVmtYRzRnS2lBZ0lIZHBkR2dnZEdobElHdGxlU0JsZG1WdWRDNGdWR2hsSUdSbFptRjFiSFFnWm1sc2RHVnlJSGRwYkd3Z1lXeDNZWGx6SUhKbGRIVnliaUIwY25WbExseHVJQ292WEc1amJHRnpjeUJMWlhseklIdGNiaUFnTHlvcUlGUm9aU0J1WVcxbElHOW1JSFJvWlNCa1pXWmhkV3gwSUhOamIzQmxMaUFxTDF4dUlDQnpkR0YwYVdNZ1JFVkdRVlZNVkY5VFEwOVFSU0E5SUNkRVJVWkJWVXhVWDFORFQxQkZKMXh1WEc0Z0lGOXpkRzl3Y0dWa0lEMGdkSEoxWlZ4dUlDQmZZM1Z5Y21WdWRGTmpiM0JsSUQwZ1MyVjVjeTVFUlVaQlZVeFVYMU5EVDFCRlhHNGdJRjlqZFhKeVpXNTBRMjl0WW04Z1BTQmJYVnh1SUNCZmMyVnhkV1Z1WTJVZ1BTQmJYVnh1SUNCZmFHRnVaR3hsY25NZ1BTQmJYVnh1SUNCZmQyRjBZMmhsY25NZ1BTQmJYVnh1WEc0Z0lHOXdkR2x2Ym5NZ1BTQjdYRzRnSUNBZ2RISnBaMmRsY2s5dVkyVlFaWEpMWlhrNklHWmhiSE5sTEZ4dUlDQWdJSFZ6WlVOdlpHVkpibk4wWldGa1MyVjVPaUJtWVd4elpTeGNiaUFnSUNCdFlYaFRaWEYxWlc1alpVeGxibWQwYURvZ015eGNiaUFnSUNCbWFXeDBaWEk2SUNncElEMCtJSFJ5ZFdWY2JpQWdmVnh1WEc0Z0lHTnZibk4wY25WamRHOXlLR1ZzWlcxbGJuUXNJRzl3ZEdsdmJuTXBJSHRjYmlBZ0lDQnBaaUFvSVdWc1pXMWxiblFwSUdWc1pXMWxiblFnUFNCM2FXNWtiM2RjYmlBZ0lDQjBhR2x6TGw5bGJHVnRaVzUwSUQwZ1pXeGxiV1Z1ZEZ4dVhHNGdJQ0FnVDJKcVpXTjBMbUZ6YzJsbmJpaDBhR2x6TG05d2RHbHZibk1zSUc5d2RHbHZibk1wWEc1Y2JpQWdJQ0IwYUdsekxuSmxjM1Z0WlNncFhHNGdJSDFjYmx4dUlDQmZiMjVMWlhsRWIzZHVJRDBnWlhabGJuUWdQVDRnZTF4dUlDQWdJR2xtSUNnaGRHaHBjeTV2Y0hScGIyNXpMbVpwYkhSbGNpNWpZV3hzS0hSb2FYTXNJR1YyWlc1MEtTa2djbVYwZFhKdVhHNWNiaUFnSUNCc1pYUWdhMlY1SUQwZ2RHaHBjeTV2Y0hScGIyNXpMblZ6WlVOdlpHVkpibk4wWldGa1MyVjVJRDhnWlhabGJuUXVZMjlrWlNBNklHVjJaVzUwTG10bGVWeHVYRzRnSUNBZ2FXWWdLR3RsZVM1c1pXNW5kR2dnUFQwOUlERXBJSHRjYmlBZ0lDQWdJR3RsZVNBOUlHdGxlUzUwYjB4dmQyVnlRMkZ6WlNncFhHNGdJQ0FnSUNCcFppQW9hMlY1SUQwOVBTQW5JQ2NwSUd0bGVTQTlJQ2RUY0dGalpTZGNiaUFnSUNCOVhHNWNiaUFnSUNCamIyNXpkQ0JoYkhKbFlXUjVWSEpwWjJkbGNtVmtJRDBnZEdocGN5NWZZM1Z5Y21WdWRFTnZiV0p2TG1sdVkyeDFaR1Z6S0d0bGVTbGNibHh1SUNBZ0lHbG1JQ2doWVd4eVpXRmtlVlJ5YVdkblpYSmxaQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NWZZM1Z5Y21WdWRFTnZiV0p2TG5CMWMyZ29hMlY1S1Z4dUlDQWdJQ0FnZEdocGN5NWZZM1Z5Y21WdWRFTnZiV0p2TG5OdmNuUW9LVnh1WEc0Z0lDQWdJQ0JwWmlBb1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDNObGNYVmxibU5sTG14bGJtZDBhQ0E5UFQwZ01DQjhmRnh1SUNBZ0lDQWdJQ0IwYUdsekxsOXpaWEYxWlc1alpWdDBhR2x6TGw5elpYRjFaVzVqWlM1c1pXNW5kR2dnTFNBeFhTQWhQVDBnZEdocGN5NWZZM1Z5Y21WdWRFTnZiV0p2WEc0Z0lDQWdJQ0FwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdVgzTmxjWFZsYm1ObExteGxibWQwYUNBOVBUMGdkR2hwY3k1dmNIUnBiMjV6TG0xaGVGTmxjWFZsYm1ObFRHVnVaM1JvS1Z4dUlDQWdJQ0FnSUNBZ0lIUm9hWE11WDNObGNYVmxibU5sTG5Ob2FXWjBLQ2xjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbDl6WlhGMVpXNWpaUzV3ZFhOb0tIUm9hWE11WDJOMWNuSmxiblJEYjIxaWJ5bGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9JV0ZzY21WaFpIbFVjbWxuWjJWeVpXUWdmSHdnSVhSb2FYTXViM0IwYVc5dWN5NTBjbWxuWjJWeVQyNWpaVkJsY2t0bGVTa2dlMXh1SUNBZ0lDQWdkR2hwY3k1ZmJtOTBhV1o1VjJGMFkyaGxjbk1vWlhabGJuUXBYRzRnSUNBZ0lDQjBhR2x6TGw5a2FYTndZWFJqYUVoaGJtUnNaWEp6S0dWMlpXNTBLVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJRjl2Ymt0bGVWVndJRDBnWlhabGJuUWdQVDRnZTF4dUlDQWdJR2xtSUNnaGRHaHBjeTV2Y0hScGIyNXpMbVpwYkhSbGNpNWpZV3hzS0hSb2FYTXNJR1YyWlc1MEtTa2djbVYwZFhKdVhHNWNiaUFnSUNCc1pYUWdhMlY1SUQwZ2RHaHBjeTV2Y0hScGIyNXpMblZ6WlVOdlpHVkpibk4wWldGa1MyVjVJRDhnWlhabGJuUXVZMjlrWlNBNklHVjJaVzUwTG10bGVWeHVYRzRnSUNBZ2FXWWdLR3RsZVM1c1pXNW5kR2dnUFQwOUlERXBJSHRjYmlBZ0lDQWdJR3RsZVNBOUlHdGxlUzUwYjB4dmQyVnlRMkZ6WlNncFhHNGdJQ0FnSUNCcFppQW9hMlY1SUQwOVBTQW5JQ2NwSUd0bGVTQTlJQ2RUY0dGalpTZGNiaUFnSUNCOVhHNWNiaUFnSUNCMGFHbHpMbDlqZFhKeVpXNTBRMjl0WW04Z1BTQmJMaTR1ZEdocGN5NWZZM1Z5Y21WdWRFTnZiV0p2WFZ4dVhHNGdJQ0FnWTI5dWMzUWdhVzVrWlhnZ1BTQjBhR2x6TGw5amRYSnlaVzUwUTI5dFltOHVhVzVrWlhoUFppaHJaWGtwWEc0Z0lDQWdhV1lnS0dsdVpHVjRJQ0U5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdkR2hwY3k1ZlkzVnljbVZ1ZEVOdmJXSnZMbk53YkdsalpTaHBibVJsZUN3Z01TbGNiaUFnSUNBZ0lIUm9hWE11WDJOMWNuSmxiblJEYjIxaWJ5NXpiM0owS0NsY2JpQWdJQ0I5WEc1Y2JpQWdJQ0IwYUdsekxsOXViM1JwWm5sWFlYUmphR1Z5Y3lobGRtVnVkQ2xjYmlBZ2ZWeHVYRzRnSUY5eVpYTmxkRXRsZVhNZ1BTQW9LU0E5UGlCN1hHNGdJQ0FnZEdocGN5NWZZM1Z5Y21WdWRFTnZiV0p2SUQwZ1cxMWNiaUFnSUNCMGFHbHpMbDl6WlhGMVpXNWpaU0E5SUZ0ZFhHNGdJSDFjYmx4dUlDQmZibTkwYVdaNVYyRjBZMmhsY25NZ1BTQmxkbVZ1ZENBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnYzJWeGRXVnVZMlVnUFNCS1UwOU9MbkJoY25ObEtFcFRUMDR1YzNSeWFXNW5hV1o1S0hSb2FYTXVYM05sY1hWbGJtTmxLU2xjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJSGRoZEdOb1pYSWdiMllnZEdocGN5NWZkMkYwWTJobGNuTXBJSHRjYmlBZ0lDQWdJSGRoZEdOb1pYSXVZMkZzYkdKaFkyc29jMlZ4ZFdWdVkyVXNJR1YyWlc1MEtWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lGOWthWE53WVhSamFFaGhibVJzWlhKeklEMGdaWFpsYm5RZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUhObGNYVmxibU5sSUQwZ1NsTlBUaTV3WVhKelpTaEtVMDlPTG5OMGNtbHVaMmxtZVNoMGFHbHpMbDl6WlhGMVpXNWpaU2twWEc1Y2JpQWdJQ0JqYjI1emRDQnphV2R1WVhSMWNtVnpJRDBnVzExY2JseHVJQ0FnSUd4bGRDQnphV2R1WVhSMWNtVlRaWEYxWlc1alpTQTlJRnRkWEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SUhSb2FYTXVYM05sY1hWbGJtTmxMbXhsYm1kMGFDQXRJREU3SUdrZ1BqMGdNRHNnYVMwdEtTQjdYRzRnSUNBZ0lDQnphV2R1WVhSMWNtVlRaWEYxWlc1alpTQTlJRnQwYUdsekxsOXpaWEYxWlc1alpWdHBYU3dnTGk0dWMybG5ibUYwZFhKbFUyVnhkV1Z1WTJWZFhHNGdJQ0FnSUNCemFXZHVZWFIxY21WekxuQjFjMmdvYzNSeWFXNW5hV1o1VTJodmNuUmpkWFFvYzJsbmJtRjBkWEpsVTJWeGRXVnVZMlVwS1Z4dUlDQWdJSDFjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR2hoYm1Sc1pYSWdiMllnZEdocGN5NWZhR0Z1Wkd4bGNuTXBJSHRjYmlBZ0lDQWdJR2xtSUNoY2JpQWdJQ0FnSUNBZ2RHaHBjeTVmWTNWeWNtVnVkRk5qYjNCbElEMDlQU0JvWVc1a2JHVnlMbk5qYjNCbElDWW1YRzRnSUNBZ0lDQWdJSE5wWjI1aGRIVnlaWE11YVc1amJIVmtaWE1vYUdGdVpHeGxjaTV6YVdkdVlYUjFjbVVwWEc0Z0lDQWdJQ0FwSUh0Y2JpQWdJQ0FnSUNBZ2FHRnVaR3hsY2k1allXeHNZbUZqYXloelpYRjFaVzVqWlN3Z1pYWmxiblFwWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnTHlvcVhHNGdJQ0FxSUVKcGJtUWdZU0JyWlhsaWIyRnlaQ0J6YUc5eWRHTjFkQzRnUVNCemFHOXlkR04xZENCallXNGdZbVVnYVc0Z2MzUnlhVzVuSUc5eUlHRnljbUY1SUdadmNtMWhkQzVjYmlBZ0lDb2dRSEJoY21GdElIdHpkSEpwYm1kOGMzUnlhVzVuVzExOFFYSnlZWGt1UEhOMGNtbHVaMXRkUG4wZ2MyaHZjblJqZFhRZ0xTQlVhR1VnYzJodmNuUmpkWFFnZEc4Z1ltbHVaQzVjYmlBZ0lDb2dRSEJoY21GdElIdHpkSEpwYm1kOUlITmpiM0JsSUMwZ1FXNGdiM0IwYVc5dVlXd2djMk52Y0dVdVhHNGdJQ0FxSUVCd1lYSmhiU0I3Um5WdVkzUnBiMjU5SUdOaGJHeGlZV05ySUMwZ1ZHaGxJR05oYkd4aVlXTnJJSFJvWVhRZ2MyaHZkV3hrSUdKbElIUnlhV2RuWlhKbFpDNWNiaUFnSUNvZ0lDQlVhR1VnWTJGc2JHSmhZMnNnWjJWMGN5QmpZV3hzWldRZ2QybDBhQ0IwYUdVZ1kzVnljbVZ1ZENCclpYa2diM0lnWTI5dFltOGdjMlZ4ZFdWdVkyVmNiaUFnSUNvZ0lDQmhibVFnZEdobElHdGxlU0JsZG1WdWRDNWNiaUFnSUNvZ1FISmxkSFZ5YmlCN2JuVnRZbVZ5ZlNCVWFHVWdkVzVwY1hWbElFbEVJRzltSUhSb1pTQmliM1Z1WkNCb1lXNWtiR1Z5TGx4dUlDQWdLaTljYmlBZ1ltbHVaQ0E5SUNoemFHOXlkR04xZEN3Z2MyTnZjR1VzSUdOaGJHeGlZV05yS1NBOVBpQjdYRzRnSUNBZ2FXWWdLR05oYkd4aVlXTnJJRDA5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNBZ0lHTmhiR3hpWVdOcklEMGdjMk52Y0dWY2JpQWdJQ0FnSUhOamIzQmxJRDBnUzJWNWN5NUVSVVpCVlV4VVgxTkRUMUJGWEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUJ6YUc5eWRHTjFkQ0E5UFQwZ0ozTjBjbWx1WnljcElITm9iM0owWTNWMElEMGdjR0Z5YzJWVGFHOXlkR04xZENoemFHOXlkR04xZENsY2JseHVJQ0FnSUhOb2IzSjBZM1YwSUQwZ1kyeGxZVzVUYUc5eWRHTjFkQ2h6YUc5eWRHTjFkQ2xjYmx4dUlDQWdJR052Ym5OMElHaGhibVJzWlhKSlpDQTlJR2RsYm1WeVlYUmxTV1FvS1Z4dUlDQWdJSFJvYVhNdVgyaGhibVJzWlhKekxuQjFjMmdvZTF4dUlDQWdJQ0FnYVdRNklHaGhibVJzWlhKSlpDeGNiaUFnSUNBZ0lITnBaMjVoZEhWeVpUb2djM1J5YVc1bmFXWjVVMmh2Y25SamRYUW9jMmh2Y25SamRYUXBMRnh1SUNBZ0lDQWdjMmh2Y25SamRYUXNYRzRnSUNBZ0lDQnpZMjl3WlN4Y2JpQWdJQ0FnSUdOaGJHeGlZV05yWEc0Z0lDQWdmU2xjYmx4dUlDQWdJSEpsZEhWeWJpQm9ZVzVrYkdWeVNXUmNiaUFnZlZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJWYm1KcGJtUWdZU0J6Y0dWamFXWnBZeUJyWlhsaWIyRnlaQ0J6YUc5eWRHTjFkQ0JvWVc1a2JHVnlJSFZ6YVc1bklHbDBjeUJKUkM1Y2JpQWdJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJR2hoYm1Sc1pYSkpaQ0F0SUZSb1pTQkpSQ0J5WlhSMWNtNWxaQ0JpZVNCMGFHVWdlMEJzYVc1cklHSnBibVI5SUcxbGRHaHZaQzVjYmlBZ0lDb2dRSFJvY205M2N5QlVhSEp2ZDNNZ1lXNGdaWEp5YjNJZ2QyaGxiaUIwYUdVZ1NVUWdhWE1nYVc1MllXeHBaQzVjYmlBZ0lDb3ZYRzRnSUhWdVltbHVaQ0E5SUdoaGJtUnNaWEpKWkNBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnYVc1a1pYZ2dQU0IwYUdsekxsOW9ZVzVrYkdWeWN5NW1hVzVrU1c1a1pYZ29hR0Z1Wkd4bGNpQTlQaUJvWVc1a2JHVnlMbWxrSUQwOVBTQm9ZVzVrYkdWeVNXUXBYRzVjYmlBZ0lDQnBaaUFvYVc1a1pYZ2dQVDA5SUMweEtTQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0owbHVkbUZzYVdRZ2FHRnVaR3hsY2lCSlJEb2dKeUFySUdoaGJtUnNaWEpKWkNsY2JseHVJQ0FnSUhSb2FYTXVYMmhoYm1Sc1pYSnpMbk53YkdsalpTaHBibVJsZUN3Z01TbGNiaUFnZlZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJWYm1KcGJtUWdhMlY1WW05aGNtUWdjMmh2Y25SamRYUWdhR0Z1Wkd4bGNuTWdhR0YyYVc1bklIUm9aU0J6Y0dWamFXWnBaV1FnYzJOdmNHVXVYRzRnSUNBcUlFQndZWEpoYlNCN1UzUnlhVzVuZlNCelkyOXdaU0F0SUZSb1pTQnpZMjl3WlM1Y2JpQWdJQ292WEc0Z0lIVnVZbWx1WkZOamIzQmxJRDBnYzJOdmNHVWdQVDRnZTF4dUlDQWdJR052Ym5OMElHbHVaR2xqWlhNZ1BTQmJYVnh1SUNBZ0lIUm9hWE11WDJoaGJtUnNaWEp6TG1admNrVmhZMmdvS0doaGJtUnNaWElzSUdsdVpHVjRLU0E5UGlCN1hHNGdJQ0FnSUNCcFppQW9hR0Z1Wkd4bGNpNXpZMjl3WlNBOVBUMGdjMk52Y0dVcElHbHVaR2xqWlhNdWNIVnphQ2hwYm1SbGVDbGNiaUFnSUNCOUtWeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FXNWtaWGdnYjJZZ2FXNWthV05sY3lrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVmYUdGdVpHeGxjbk11YzNCc2FXTmxLR2x1WkdWNExDQXhLVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJWYm1KcGJtUWdZV3hzSUd0bGVXSnZZWEprSUhOb2IzSjBZM1YwSUdoaGJtUnNaWEp6TGx4dUlDQWdLaTljYmlBZ2RXNWlhVzVrUVd4c0lEMGdLQ2tnUFQ0Z2UxeHVJQ0FnSUhSb2FYTXVYMmhoYm1Sc1pYSnpJRDBnVzExY2JpQWdmVnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQlhZWFJqYUNCclpYbGliMkZ5WkNCbGRtVnVkSE1nS0d0bGVXUnZkMjRnWVc1a0lHdGxlWFZ3S1M1Y2JpQWdJQ29nUUhCaGNtRnRJSHRHZFc1amRHbHZibjBnWTJGc2JHSmhZMnNnTFNCVWFHVWdZMkZzYkdKaFkyc2dkR2hoZENCemFHOTFiR1FnWW1VZ2RISnBaMmRsY21Wa0xseHVJQ0FnS2lBZ0lIZG9aVzRnWVNCclpYbGtiM2R1SUc5eUlHdGxlWFZ3SUdWMlpXNTBJRzlqWTNWeWN5NGdWR2hsSUdOaGJHeGlZV05ySUdkbGRITWdZMkZzYkdWa0lIZHBkR2hjYmlBZ0lDb2dJQ0IwYUdVZ1kzVnljbVZ1ZENCclpYa2diM0lnWTI5dFltOGdjMlZ4ZFdWdVkyVWdZVzVrSUhSb1pTQnJaWGtnWlhabGJuUXVYRzRnSUNBcUlFQnlaWFIxY200Z2UyNTFiV0psY24wZ1ZHaGxJSFZ1YVhGMVpTQkpSQ0J2WmlCMGFHVWdZV1JrWldRZ2QyRjBZMmhsY2k1Y2JpQWdJQ292WEc0Z0lIZGhkR05vSUQwZ1kyRnNiR0poWTJzZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUhkaGRHTm9aWEpKWkNBOUlHZGxibVZ5WVhSbFNXUW9LVnh1SUNBZ0lIUm9hWE11WDNkaGRHTm9aWEp6TG5CMWMyZ29lMXh1SUNBZ0lDQWdhV1E2SUhkaGRHTm9aWEpKWkN4Y2JpQWdJQ0FnSUdOaGJHeGlZV05yWEc0Z0lDQWdmU2xjYmx4dUlDQWdJSEpsZEhWeWJpQjNZWFJqYUdWeVNXUmNiaUFnZlZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJWYm1KcGJtUWdZU0J6Y0dWamFXWnBZeUIzWVhSamFHVnlJSFZ6YVc1bklHbDBjeUJKUkM1Y2JpQWdJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJSGRoZEdOb1pYSkpaQ0F0SUZSb1pTQkpSQ0J5WlhSMWNtNWxaQ0JpZVNCMGFHVWdlMEJzYVc1cklIZGhkR05vZlNCdFpYUm9iMlF1WEc0Z0lDQXFJRUIwYUhKdmQzTWdWR2h5YjNkeklHRnVJR1Z5Y205eUlIZG9aVzRnZEdobElFbEVJR2x6SUdsdWRtRnNhV1F1WEc0Z0lDQXFMMXh1SUNCMWJuZGhkR05vSUQwZ2QyRjBZMmhsY2tsa0lEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCcGJtUmxlQ0E5SUhSb2FYTXVYM2RoZEdOb1pYSnpMbVpwYm1SSmJtUmxlQ2gzWVhSamFHVnlJRDArSUhkaGRHTm9aWEl1YVdRZ1BUMDlJSGRoZEdOb1pYSkpaQ2xjYmx4dUlDQWdJR2xtSUNocGJtUmxlQ0E5UFQwZ0xURXBJSFJvY205M0lHNWxkeUJGY25KdmNpZ25TVzUyWVd4cFpDQjNZWFJqYUdWeUlFbEVPaUFuSUNzZ2QyRjBZMmhsY2tsa0tWeHVYRzRnSUNBZ2RHaHBjeTVmZDJGMFkyaGxjbk11YzNCc2FXTmxLR2x1WkdWNExDQXhLVnh1SUNCOVhHNWNiaUFnTHlvcVhHNGdJQ0FxSUZWdVltbHVaQ0JoYkd3Z2QyRjBZMmhsY25NdVhHNGdJQ0FxTDF4dUlDQjFibmRoZEdOb1FXeHNJRDBnS0NrZ1BUNGdlMXh1SUNBZ0lIUm9hWE11WDNkaGRHTm9aWEp6SUQwZ1cxMWNiaUFnZlZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJUZDJsMFkyZ2dkR2hsSUhOamIzQmxMaUJQYm14NUlHSnZkVzVrSUdoaGJtUnNaWEp6SUdkbGRDQjBjbWxuWjJWeVpXUWdkR2hoZENCb1lYWmxJSFJvWlNCdVpYZGNiaUFnSUNvZ2MyTnZjR1V1SUZSb1pTQmtaV1poZFd4MElITmpiM0JsSUdOaGJpQmlaU0JoWTJObGMzTmxaQ0JpZVNCN1FHeHBibXNnUzJWNWN5NUVSVVpCVlV4VVgxTkRUMUJGZlM1Y2JpQWdJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJSE5qYjNCbElDMGdWR2hsSUhOamIzQmxMbHh1SUNBZ0tpOWNiaUFnYzNkcGRHTm9VMk52Y0dVZ1BTQnpZMjl3WlNBOVBpQjdYRzRnSUNBZ2RHaHBjeTVmWTNWeWNtVnVkRk5qYjNCbElEMGdjMk52Y0dWY2JpQWdmVnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQlRkRzl3SUd4cGMzUmxibWx1WnlCMGJ5QnJaWGtnWlhabGJuUnpJR0Z1WkNCeVpYTmxkQ0IwYUdVZ2EyVjVJSE5sY1hWbGJtTmxMbHh1SUNBZ0tpOWNiaUFnYzNSdmNDQTlJQ2dwSUQwK0lIdGNiaUFnSUNCcFppQW9JWFJvYVhNdVgzTjBiM0J3WldRcElIdGNiaUFnSUNBZ0lIUm9hWE11WDJWc1pXMWxiblF1Y21WdGIzWmxSWFpsYm5STWFYTjBaVzVsY2lnbmEyVjVaRzkzYmljc0lIUm9hWE11WDI5dVMyVjVSRzkzYmlsY2JpQWdJQ0FnSUhSb2FYTXVYMlZzWlcxbGJuUXVjbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaWduYTJWNWRYQW5MQ0IwYUdsekxsOXZia3RsZVZWd0tWeHVJQ0FnSUNBZ2RHaHBjeTVmWld4bGJXVnVkQzV5WlcxdmRtVkZkbVZ1ZEV4cGMzUmxibVZ5S0NkbWIyTjFjeWNzSUhSb2FYTXVYM0psYzJWMFMyVjVjeWxjYmlBZ0lDQWdJSFJvYVhNdVgyVnNaVzFsYm5RdWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpZ25ZbXgxY2ljc0lIUm9hWE11WDNKbGMyVjBTMlY1Y3lsY2JseHVJQ0FnSUNBZ2RHaHBjeTVmY21WelpYUkxaWGx6S0NsY2JseHVJQ0FnSUNBZ2RHaHBjeTVmYzNSdmNIQmxaQ0E5SUhSeWRXVmNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQXZLaXBjYmlBZ0lDb2dVbVZ6ZFcxbElHeHBjM1JsYm1sdVp5QjBieUJyWlhrZ1pYWmxiblJ6TGx4dUlDQWdLaTljYmlBZ2NtVnpkVzFsSUQwZ0tDa2dQVDRnZTF4dUlDQWdJR2xtSUNoMGFHbHpMbDl6ZEc5d2NHVmtLU0I3WEc0Z0lDQWdJQ0IwYUdsekxsOWxiR1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oydGxlV1J2ZDI0bkxDQjBhR2x6TGw5dmJrdGxlVVJ2ZDI0cFhHNGdJQ0FnSUNCMGFHbHpMbDlsYkdWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMnRsZVhWd0p5d2dkR2hwY3k1ZmIyNUxaWGxWY0NsY2JpQWdJQ0FnSUhSb2FYTXVYMlZzWlcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25abTlqZFhNbkxDQjBhR2x6TGw5eVpYTmxkRXRsZVhNcFhHNGdJQ0FnSUNCMGFHbHpMbDlsYkdWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMkpzZFhJbkxDQjBhR2x6TGw5eVpYTmxkRXRsZVhNcFhHNWNiaUFnSUNBZ0lIUm9hWE11WDNOMGIzQndaV1FnUFNCbVlXeHpaVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJQzhxSUZKbGMyVjBJSFJvYVhNZ2FXNXpkR0Z1WTJVZ1lua2dkVzVpYVc1a2FXNW5JR0ZzYkNCb1lXNWtiR1Z5Y3l3Z2NtVnRiM1pwYm1jZ1lXeHNJSGRoZEdOb1pYSnpYRzRnSUNBcUlHRnVaQ0J5WlhObGRIUnBibWNnZEdobElHdGxlU0J6WlhGMVpXNWpaUzVjYmlBZ0lDb3ZYRzRnSUhKbGMyVjBJRDBnS0NrZ1BUNGdlMXh1SUNBZ0lIUm9hWE11WDNKbGMyVjBTMlY1Y3lncFhHNGdJQ0FnZEdocGN5NTFibUpwYm1SQmJHd29LVnh1SUNBZ0lIUm9hWE11ZFc1M1lYUmphRUZzYkNncFhHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1MyVjVjMXh1SWl3aVpuVnVZM1JwYjI0Z1kyeGxZVzVUWlhGMVpXNWpaU2h6WlhGMVpXNWpaU2tnZTF4dUlDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJSE5sY1hWbGJtTmxMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnYVdZZ0tDRkJjbkpoZVM1cGMwRnljbUY1S0hObGNYVmxibU5sVzJsZEtTbGNiaUFnSUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2loZ1NXNTJZV3hwWkNCemFHOXlkR04xZENCelpYRjFaVzVqWlNBa2UzTmxjWFZsYm1ObGZTNWdLVnh1WEc0Z0lDQWdZMnhsWVc1RGIyMWlieWh6WlhGMVpXNWpaVnRwWFNsY2JpQWdmVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmpiR1ZoYmtOdmJXSnZLR052YldKdktTQjdYRzRnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1kyOXRZbTh1YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNCcFppQW9kSGx3Wlc5bUlHTnZiV0p2VzJsZElDRTlQU0FuYzNSeWFXNW5KeWxjYmlBZ0lDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpaGdTVzUyWVd4cFpDQnphRzl5ZEdOMWRDQmpiMjFpYnlBa2UyTnZiV0p2ZlM1Z0tWeHVYRzRnSUNBZ1kyOXVjM1FnWTJ4bFlXNWxaRXRsZVNBOUlHTnNaV0Z1UzJWNUtHTnZiV0p2VzJsZEtWeHVJQ0FnSUdsbUlDZ2hZMnhsWVc1bFpFdGxlU2xjYmlBZ0lDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpaGdTVzUyWVd4cFpDQnJaWGtnSkh0amJHVmhibVZrUzJWNWZTQnBiaUJ6YUc5eWRHTjFkQ0JqYjIxaWJ5QWtlMk52YldKdmZTNWdLVnh1WEc0Z0lDQWdZMjl0WW05YmFWMGdQU0JqYkdWaGJtVmtTMlY1WEc0Z0lIMWNiaUFnWTI5dFltOHVjMjl5ZENncFhHNTlYRzVjYm1aMWJtTjBhVzl1SUdOc1pXRnVTMlY1S0d0bGVTa2dlMXh1SUNCclpYa2dQU0JyWlhrdWNtVndiR0ZqWlNndlhGeHpLeTluTENBbklDY3BYRzRnSUdsbUlDaHJaWGtnUFQwOUlDY2dKeWtnYTJWNUlEMGdKMU53WVdObEoxeHVJQ0JyWlhrZ1BTQnJaWGt1ZEhKcGJTZ3BYRzRnSUdsbUlDaHJaWGt1YkdWdVozUm9JRDA5UFNBeEtTQnJaWGtnUFNCclpYa3VkRzlNYjNkbGNrTmhjMlVvS1Z4dUlDQnlaWFIxY200Z2EyVjVYRzU5WEc1Y2JpOHFLbHh1SUNvZ1EyeGxZVzRnWVc0Z1lYSnlZWGtnYzJodmNuUmpkWFF1SUZSb1pTQmhjbkpoZVNCcGN5QmpiR1ZoYm1Wa0lHbHVMWEJzWVdObElHRnVaQ0JoYkhOdklISmxkSFZ5Ym1Wa0xseHVJQ29nVlc1dVpXTmxjM05oY25rZ2QyaHBkR1VnYzNCaFkyVWdhWE1nY21WdGIzWmxaQ3dnYTJWNUlHTnZiV0pwYm1GMGFXOXVjeUJoY21VZ2MyOXlkR1ZrSUdGdVpGeHVJQ29nYzJsdVoyeGxJR05vWVhKeklHTnZiblpsY25SbFpDQjBieUJzYjNkbGNpQmpZWE5sTGx4dUlDb2dRSEJoY21GdElIdHpkSEpwYm1kYlhYeEJjbkpoZVM0OGMzUnlhVzVuVzEwK2ZTQnphRzl5ZEdOMWRDQXRJRlJvWlNCaGNuSmhlU0J6YUc5eWRHTjFkQ0IwYnlCamJHVmhiaTVjYmlBcUlFQnlaWFIxY200Z2UzTjBjbWx1WjF0ZGZFRnljbUY1TGp4emRISnBibWRiWFQ1OUlGUm9aU0JqYkdWaGJtVmtJR0Z5Y21GNUlITm9iM0owWTNWMExseHVJQ292WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaWh6YUc5eWRHTjFkQ2tnZTF4dUlDQnBaaUFvSVVGeWNtRjVMbWx6UVhKeVlYa29jMmh2Y25SamRYUXBJSHg4SUhOb2IzSjBZM1YwTG14bGJtZDBhQ0E5UFQwZ01DbGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjBsdWRtRnNhV1FnWVhKeVlYa2djMmh2Y25SamRYUWdkRzhnWTJ4bFlXNDZJQ2NnS3lCemFHOXlkR04xZENsY2JseHVJQ0JzWlhRZ2FYTlRaWEYxWlc1alpTQTlJSFI1Y0dWdlppQnphRzl5ZEdOMWRGc3dYU0FoUFQwZ0ozTjBjbWx1WnlkY2JseHVJQ0JwWmlBb2FYTlRaWEYxWlc1alpTQW1KaUJ6YUc5eWRHTjFkQzVzWlc1bmRHZ2dQVDA5SURFcElIdGNiaUFnSUNCemFHOXlkR04xZENBOUlITm9iM0owWTNWMFd6QmRYRzRnSUNBZ2FYTlRaWEYxWlc1alpTQTlJR1poYkhObFhHNGdJSDFjYmx4dUlDQnBaaUFvYVhOVFpYRjFaVzVqWlNrZ1kyeGxZVzVUWlhGMVpXNWpaU2h6YUc5eWRHTjFkQ2xjYmlBZ1pXeHpaU0JqYkdWaGJrTnZiV0p2S0hOb2IzSjBZM1YwS1Z4dVhHNGdJSEpsZEhWeWJpQnphRzl5ZEdOMWRGeHVmVnh1SWl3aWJHVjBJRzVsZUhSSlpDQTlJREZjYmx4dUx5b3FYRzRnS2lCRGNtVmhkR1VnWVNCMWJtbHhkV1VnU1VRZ1pYWmxjbmtnZEdsdFpTQnBkQ0JwY3lCallXeHNaV1F1WEc0Z0tpQkFjbVYwZFhKdUlIdHVkVzFpWlhKOUlFRWdkVzVwY1hWbElFbEVMbHh1SUNvdlhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlncElIdGNiaUFnY21WMGRYSnVJRzVsZUhSSlpDc3JYRzU5WEc0aUxDSmxlSEJ2Y25RZ2V5QmtaV1poZFd4MElHRnpJRXRsZVhNZ2ZTQm1jbTl0SUNjdUwwdGxlWE1uWEc1bGVIQnZjblFnZXlCa1pXWmhkV3gwSUdGeklHTnNaV0Z1VTJodmNuUmpkWFFnZlNCbWNtOXRJQ2N1TDJOc1pXRnVVMmh2Y25SamRYUW5YRzVsZUhCdmNuUWdleUJrWldaaGRXeDBJR0Z6SUdkbGJtVnlZWFJsU1dRZ2ZTQm1jbTl0SUNjdUwyZGxibVZ5WVhSbFNXUW5YRzVsZUhCdmNuUWdleUJrWldaaGRXeDBJR0Z6SUhCaGNuTmxVMmh2Y25SamRYUWdmU0JtY205dElDY3VMM0JoY25ObFUyaHZjblJqZFhRblhHNWxlSEJ2Y25RZ2V5QmtaV1poZFd4MElHRnpJSE4wY21sdVoybG1lVk5vYjNKMFkzVjBJSDBnWm5KdmJTQW5MaTl6ZEhKcGJtZHBabmxUYUc5eWRHTjFkQ2RjYmlJc0ltTnZibk4wSUVOUFRVSkpUa1ZmVjBsVVNDQTlJQ2NySjF4dVkyOXVjM1FnUms5TVRFOVhSVVJmUWxrZ1BTQW5QaWRjYmx4dVpuVnVZM1JwYjI0Z1oyVjBSSFZ3YkdsallYUmxjeWhqYjIxaWJ5a2dlMXh1SUNCamIyNXpkQ0JqYjNWdWRDQTlJR052YldKdklEMCtYRzRnSUNBZ1kyOXRZbTh1Y21Wa2RXTmxLQ2hyTVN3Z2F6SXBJRDArSUU5aWFtVmpkQzVoYzNOcFoyNG9hekVzSUhzZ1cyc3lYVG9nS0dzeFcyc3lYU0I4ZkNBd0tTQXJJREVnZlNrc0lIdDlLVnh1SUNCamIyNXpkQ0JrZFhCc2FXTmhkR1Z6SUQwZ1pHbGpkQ0E5UGlCUFltcGxZM1F1YTJWNWN5aGthV04wS1M1bWFXeDBaWElvYXlBOVBpQmthV04wVzJ0ZElENGdNU2xjYmlBZ2NtVjBkWEp1SUdSMWNHeHBZMkYwWlhNb1kyOTFiblFvWTI5dFltOHBLVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmpiMjUyWlhKMFMyVjVLR3RsZVNrZ2UxeHVJQ0JyWlhrZ1BTQnJaWGt1YW05cGJpZ25KeWxjYmlBZ2FXWWdLR3RsZVM1c1pXNW5kR2dnUFQwOUlERXBJR3RsZVNBOUlHdGxlUzUwYjB4dmQyVnlRMkZ6WlNncFhHNGdJSEpsZEhWeWJpQnJaWGxjYm4xY2JseHVMeW9xWEc0Z0tpQlFZWEp6WlNCaElITjBjbWx1WnlCemFHOXlkR04xZENCaGJtUWdjbVYwZFhKdUlIUm9aU0JsY1hWcGRtRnNaVzUwSUdGeWNtRjVJSE5vYjNKMFkzVjBMbHh1SUNvZ1FIQmhjbUZ0SUh0emRISnBibWQ5SUhOb2IzSjBZM1YwSUMwZ1ZHaGxJSE4wY21sdVp5QnphRzl5ZEdOMWRDQjBieUJqYjI1MlpYSjBMbHh1SUNvZ1FISmxkSFZ5YmlCN2MzUnlhVzVuVzExOFFYSnlZWGt1UEhOMGNtbHVaMXRkUG4wZ1ZHaGxJR052Ym5abGNuUmxaQ0JoY25KaGVTQnphRzl5ZEdOMWRDNWNiaUFxTDF4dVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRvYzJodmNuUmpkWFFwSUh0Y2JpQWdhV1lnS0hSNWNHVnZaaUJ6YUc5eWRHTjFkQ0FoUFQwZ0ozTjBjbWx1WnljcFhHNGdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2RKYm5aaGJHbGtJSE4wY21sdVp5QnphRzl5ZEdOMWRDQjBieUJ3WVhKelpUb2dKeUFySUhOb2IzSjBZM1YwS1Z4dVhHNGdJSE5vYjNKMFkzVjBJRDBnYzJodmNuUmpkWFF1Y21Wd2JHRmpaU2d2WEZ4ekt5OW5MQ0FuSnlsY2JseHVJQ0JwWmlBb2RIbHdaVzltSUhOb2IzSjBZM1YwSUNFOVBTQW5jM1J5YVc1bkp5QjhmQ0J6YUc5eWRHTjFkQzVzWlc1bmRHZ2dQVDA5SURBcFhHNGdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2RKYm5aaGJHbGtJSE5vYjNKMFkzVjBJQ2h0ZFhOMElHSmxJRzV2YmlCbGJYQjBlU0J6ZEhKcGJtY3BPaUFuSUNzZ2MyaHZjblJqZFhRcFhHNWNiaUFnYkdWMElHdGxlU0E5SUZ0ZFhHNGdJR3hsZENCamIyMWlieUE5SUZ0ZFhHNGdJR052Ym5OMElITmxjWFZsYm1ObElEMGdXMTFjYmx4dUlDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJSE5vYjNKMFkzVjBMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnWTI5dWMzUWdZeUE5SUhOb2IzSjBZM1YwTG1Ob1lYSkJkQ2hwS1Z4dUlDQWdJR2xtSUNnaGEyVjVMbXhsYm1kMGFDa2dlMXh1SUNBZ0lDQWdhMlY1TG5CMWMyZ29ZeWxjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2FXWWdLR01nUFQwOUlFTlBUVUpKVGtWZlYwbFVTQ2tnZTF4dUlDQWdJQ0FnSUNCamIyMWlieTV3ZFhOb0tHTnZiblpsY25STFpYa29hMlY1S1NsY2JpQWdJQ0FnSUNBZ2EyVjVJRDBnVzExY2JpQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb1l5QTlQVDBnUms5TVRFOVhSVVJmUWxrcElIdGNiaUFnSUNBZ0lDQWdZMjl0WW04dWNIVnphQ2hqYjI1MlpYSjBTMlY1S0d0bGVTa3BYRzRnSUNBZ0lDQWdJR3RsZVNBOUlGdGRYRzRnSUNBZ0lDQWdJR052YldKdkxuTnZjblFvS1Z4dUlDQWdJQ0FnSUNCelpYRjFaVzVqWlM1d2RYTm9LR052YldKdktWeHVJQ0FnSUNBZ0lDQmpiMjFpYnlBOUlGdGRYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQnJaWGt1Y0hWemFDaGpLVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJR2xtSUNoclpYa3ViR1Z1WjNSb0tTQjdYRzRnSUNBZ1kyOXRZbTh1Y0hWemFDaGpiMjUyWlhKMFMyVjVLR3RsZVNrcFhHNGdJQ0FnWTI5dFltOHVjMjl5ZENncFhHNGdJQ0FnYzJWeGRXVnVZMlV1Y0hWemFDaGpiMjFpYnlsY2JpQWdmU0JsYkhObElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjBsdWRtRnNhV1FnYzJodmNuUmpkWFFnS0cxMWMzUWdaVzVrSUhkcGRHZ2dhMlY1S1RvZ0p5QXJJSE5vYjNKMFkzVjBLVnh1SUNCOVhHNWNiaUFnWm05eUlDaHNaWFFnWTI5dFltOGdiMllnYzJWeGRXVnVZMlVwSUh0Y2JpQWdJQ0JqYjI1emRDQmtkWEJzYVdOaGRHVnpJRDBnWjJWMFJIVndiR2xqWVhSbGN5aGpiMjFpYnlsY2JpQWdJQ0JwWmlBb1pIVndiR2xqWVhSbGN5NXNaVzVuZEdnZ1BpQXdLVnh1SUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZEpiblpoYkdsa0lITm9iM0owWTNWMElDaGtkWEJzYVdOaGRHVWdhMlY1Y3lrNkp5QXJJSE5vYjNKMFkzVjBLVnh1SUNCOVhHNWNiaUFnYVdZZ0tITmxjWFZsYm1ObExteGxibWQwYUNBOVBUMGdNU2tnY21WMGRYSnVJSE5sY1hWbGJtTmxXekJkWEc0Z0lHVnNjMlVnY21WMGRYSnVJSE5sY1hWbGJtTmxYRzU5WEc0aUxDSmpiMjV6ZENCRFQwMUNTVTVGWDFkSlZFZ2dQU0FuSUNzZ0oxeHVZMjl1YzNRZ1JrOU1URTlYUlVSZlFsa2dQU0FuSUQ0Z0oxeHVYRzR2S2lwY2JpQXFJRU55WldGMFpTQmxjWFZwZG1Gc1pXNTBJSE4wY21sdVp5QnphRzl5ZEdOMWRDQnZaaUJoYmlCaGNuSmhlU0J6YUc5eWRHTjFkQzVjYmlBcUlFQndZWEpoYlNCN2MzUnlhVzVuVzExOFFYSnlZWGt1UEhOMGNtbHVaMXRkUG4wZ2MyaHZjblJqZFhRZ0xTQlVhR1VnWVhKeVlYa2djMmh2Y25SamRYUWdkRzhnWTI5dWRtVnlkQzVjYmlBcUlFQnlaWFIxY200Z2UzTjBjbWx1WjMwZ1ZHaGxJR052Ym5abGNuUmxaQ0J6ZEhKcGJtY2djMmh2Y25SamRYSjBMbHh1SUNvdlhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmloemFHOXlkR04xZENrZ2UxeHVJQ0JwWmlBb0lVRnljbUY1TG1selFYSnlZWGtvYzJodmNuUmpkWFFwS1Z4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25TVzUyWVd4cFpDQmhjbkpoZVNCemFHOXlkR04xZENCMGJ5QnpkSEpwYm1kcFpuazZJQ2NnS3lCemFHOXlkR04xZENsY2JseHVJQ0JzWlhRZ2FYTlRaWEYxWlc1alpTQTlJSFI1Y0dWdlppQnphRzl5ZEdOMWRGc3dYU0FoUFQwZ0ozTjBjbWx1WnlkY2JseHVJQ0JwWmlBb0lXbHpVMlZ4ZFdWdVkyVXBJSHRjYmlBZ0lDQnlaWFIxY200Z2MyaHZjblJqZFhRdWFtOXBiaWhEVDAxQ1NVNUZYMWRKVkVncFhHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2NtVjBkWEp1SUhOb2IzSjBZM1YwTG0xaGNDaHdZWEowSUQwK0lIQmhjblF1YW05cGJpaERUMDFDU1U1RlgxZEpWRWdwS1M1cWIybHVLRVpQVEV4UFYwVkVYMEpaS1Z4dUlDQjlYRzU5WEc0aVhTd2ljMjkxY21ObFVtOXZkQ0k2SWlKOSIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5T2JqZWN0ID0ge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5T2JqZWN0OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9lbXB0eUZ1bmN0aW9uJyk7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZW1wdHlGdW5jdGlvbjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIHdhcm5pbmcgPSBmdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQuaW5kZXhPZignRmFpbGVkIENvbXBvc2l0ZSBwcm9wVHlwZTogJykgPT09IDApIHtcbiAgICAgIHJldHVybjsgLy8gSWdub3JlIENvbXBvc2l0ZUNvbXBvbmVudCBwcm9wdHlwZSBjaGVjay5cbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nOyIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuICB2YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmICh0eXBlU3BlY3MuaGFzT3duUHJvcGVydHkodHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpbnZhcmlhbnQodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdID09PSAnZnVuY3Rpb24nLCAnJXM6ICVzIHR5cGUgYCVzYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSAnICsgJ3RoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAlc2AuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0pO1xuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICB3YXJuaW5nKCFlcnJvciB8fCBlcnJvciBpbnN0YW5jZW9mIEVycm9yLCAnJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgd2FybmluZyhmYWxzZSwgJ0ZhaWxlZCAlcyB0eXBlOiAlcyVzJywgbG9jYXRpb24sIGVycm9yLm1lc3NhZ2UsIHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIGludmFyaWFudChcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJXNgIHByb3Agb24gYCVzYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLicsXG4gICAgICAgICAgICAgIHByb3BGdWxsTmFtZSxcbiAgICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcyk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgcHJvcFZhbHVlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChwcm9wVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICVzIGF0IGluZGV4ICVzLicsXG4gICAgICAgICAgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpLFxuICAgICAgICAgIGlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICBTeW1ib2wuZm9yICYmXG4gICAgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuICAgIDB4ZWFjNztcblxuICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH07XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjQuMFxuICogcmVhY3QuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgZW1wdHlPYmplY3QgPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eU9iamVjdCcpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMnKTtcblxuLy8gVE9ETzogdGhpcyBpcyBzcGVjaWFsIGJlY2F1c2UgaXQgZ2V0cyBpbXBvcnRlZCBkdXJpbmcgYnVpbGQuXG5cbnZhciBSZWFjdFZlcnNpb24gPSAnMTYuNC4wJztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7XG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1RJTUVPVVRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnRpbWVvdXQnKSA6IDB4ZWFkMTtcblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuXG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gUmVseWluZyBvbiB0aGUgYGludmFyaWFudCgpYCBpbXBsZW1lbnRhdGlvbiBsZXRzIHVzXG4vLyBoYXZlIHByZXNlcnZlIHRoZSBmb3JtYXQgYW5kIHBhcmFtcyBpbiB0aGUgd3d3IGJ1aWxkcy5cblxuLy8gRXhwb3J0cyBSZWFjdERPTS5jcmVhdGVSb290XG5cblxuLy8gRXhwZXJpbWVudGFsIGVycm9yLWJvdW5kYXJ5IEFQSSB0aGF0IGNhbiByZWNvdmVyIGZyb20gZXJyb3JzIHdpdGhpbiBhIHNpbmdsZVxuLy8gcmVuZGVyIHBoYXNlXG5cbi8vIFN1c3BlbnNlXG52YXIgZW5hYmxlU3VzcGVuc2UgPSBmYWxzZTtcbi8vIEhlbHBzIGlkZW50aWZ5IHNpZGUgZWZmZWN0cyBpbiBiZWdpbi1waGFzZSBsaWZlY3ljbGUgaG9va3MgYW5kIHNldFN0YXRlIHJlZHVjZXJzOlxuXG5cbi8vIEluIHNvbWUgY2FzZXMsIFN0cmljdE1vZGUgc2hvdWxkIGFsc28gZG91YmxlLXJlbmRlciBsaWZlY3ljbGVzLlxuLy8gVGhpcyBjYW4gYmUgY29uZnVzaW5nIGZvciB0ZXN0cyB0aG91Z2gsXG4vLyBBbmQgaXQgY2FuIGJlIGJhZCBmb3IgcGVyZm9ybWFuY2UgaW4gcHJvZHVjdGlvbi5cbi8vIFRoaXMgZmVhdHVyZSBmbGFnIGNhbiBiZSB1c2VkIHRvIGNvbnRyb2wgdGhlIGJlaGF2aW9yOlxuXG5cbi8vIFRvIHByZXNlcnZlIHRoZSBcIlBhdXNlIG9uIGNhdWdodCBleGNlcHRpb25zXCIgYmVoYXZpb3Igb2YgdGhlIGRlYnVnZ2VyLCB3ZVxuLy8gcmVwbGF5IHRoZSBiZWdpbiBwaGFzZSBvZiBhIGZhaWxlZCBjb21wb25lbnQgaW5zaWRlIGludm9rZUd1YXJkZWRDYWxsYmFjay5cblxuXG4vLyBXYXJuIGFib3V0IGRlcHJlY2F0ZWQsIGFzeW5jLXVuc2FmZSBsaWZlY3ljbGVzOyByZWxhdGVzIHRvIFJGQyAjNjpcblxuXG4vLyBXYXJuIGFib3V0IGxlZ2FjeSBjb250ZXh0IEFQSVxuXG5cbi8vIEdhdGhlciBhZHZhbmNlZCB0aW1pbmcgbWV0cmljcyBmb3IgUHJvZmlsZXIgc3VidHJlZXMuXG5cblxuLy8gRmlyZXMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIGZvciBzdGF0ZSAqb3IqIHByb3BzIGNoYW5nZXNcblxuXG4vLyBPbmx5IHVzZWQgaW4gd3d3IGJ1aWxkcy5cblxuLyoqXG4gKiBGb3JrZWQgZnJvbSBmYmpzL3dhcm5pbmc6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL2U2NmJhMjBhZDViZTQzM2ViNTQ0MjNmMmIwOTdkODI5MzI0ZDlkZTYvcGFja2FnZXMvZmJqcy9zcmMvX19mb3Jrc19fL3dhcm5pbmcuanNcbiAqXG4gKiBPbmx5IGNoYW5nZSBpcyB3ZSB1c2UgY29uc29sZS53YXJuIGluc3RlYWQgb2YgY29uc29sZS5lcnJvcixcbiAqIGFuZCBkbyBub3RoaW5nIHdoZW4gJ2NvbnNvbGUnIGlzIG5vdCBzdXBwb3J0ZWQuXG4gKiBUaGlzIHJlYWxseSBzaW1wbGlmaWVzIHRoZSBjb2RlLlxuICogLS0tXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmckMSA9IGxvd1ByaW9yaXR5V2FybmluZztcblxudmFyIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICB7XG4gICAgdmFyIF9jb25zdHJ1Y3RvciA9IHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yO1xuICAgIHZhciBjb21wb25lbnROYW1lID0gX2NvbnN0cnVjdG9yICYmIChfY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgX2NvbnN0cnVjdG9yLm5hbWUpIHx8ICdSZWFjdENsYXNzJztcbiAgICB2YXIgd2FybmluZ0tleSA9IGNvbXBvbmVudE5hbWUgKyAnLicgKyBjYWxsZXJOYW1lO1xuICAgIGlmIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2FybmluZyhmYWxzZSwgXCJDYW4ndCBjYWxsICVzIG9uIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHlldCBtb3VudGVkLiBcIiArICdUaGlzIGlzIGEgbm8tb3AsIGJ1dCBpdCBtaWdodCBpbmRpY2F0ZSBhIGJ1ZyBpbiB5b3VyIGFwcGxpY2F0aW9uLiAnICsgJ0luc3RlYWQsIGFzc2lnbiB0byBgdGhpcy5zdGF0ZWAgZGlyZWN0bHkgb3IgZGVmaW5lIGEgYHN0YXRlID0ge307YCAnICsgJ2NsYXNzIHByb3BlcnR5IHdpdGggdGhlIGRlc2lyZWQgc3RhdGUgaW4gdGhlICVzIGNvbXBvbmVudC4nLCBjYWxsZXJOYW1lLCBjb21wb25lbnROYW1lKTtcbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgYWJzdHJhY3QgQVBJIGZvciBhbiB1cGRhdGUgcXVldWUuXG4gKi9cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgaGVscGVycyBmb3IgdGhlIHVwZGF0aW5nIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICovXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xuXG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrKSB7XG4gICEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkgPyBpbnZhcmlhbnQoZmFsc2UsICdzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy4nKSA6IHZvaWQgMDtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCAnc2V0U3RhdGUnKTtcbn07XG5cbi8qKlxuICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gKlxuICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gKlxuICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAqXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcblxuLyoqXG4gKiBEZXByZWNhdGVkIEFQSXMuIFRoZXNlIEFQSXMgdXNlZCB0byBleGlzdCBvbiBjbGFzc2ljIFJlYWN0IGNsYXNzZXMgYnV0IHNpbmNlXG4gKiB3ZSB3b3VsZCBsaWtlIHRvIGRlcHJlY2F0ZSB0aGVtLCB3ZSdyZSBub3QgZ29pbmcgdG8gbW92ZSB0aGVtIG92ZXIgdG8gdGhpc1xuICogbW9kZXJuIGJhc2UgY2xhc3MuIEluc3RlYWQsIHdlIGRlZmluZSBhIGdldHRlciB0aGF0IHdhcm5zIGlmIGl0J3MgYWNjZXNzZWQuXG4gKi9cbntcbiAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgIGlzTW91bnRlZDogWydpc01vdW50ZWQnLCAnSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gJyArICdjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy4nXSxcbiAgICByZXBsYWNlU3RhdGU6IFsncmVwbGFjZVN0YXRlJywgJ1JlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlICcgKyAnaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjM2KS4nXVxuICB9O1xuICB2YXIgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvd1ByaW9yaXR5V2FybmluZyQxKGZhbHNlLCAnJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXMnLCBpbmZvWzBdLCBpbmZvWzFdKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5Db21wb25lbnREdW1teS5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuXG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5mdW5jdGlvbiBQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbnZhciBwdXJlQ29tcG9uZW50UHJvdG90eXBlID0gUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuY29uc3RydWN0b3IgPSBQdXJlQ29tcG9uZW50O1xuLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXG5fYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbi8vIGFuIGltbXV0YWJsZSBvYmplY3Qgd2l0aCBhIHNpbmdsZSBtdXRhYmxlIHZhbHVlXG5mdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG4gIHZhciByZWZPYmplY3QgPSB7XG4gICAgY3VycmVudDogbnVsbFxuICB9O1xuICB7XG4gICAgT2JqZWN0LnNlYWwocmVmT2JqZWN0KTtcbiAgfVxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IG93bmVyLlxuICpcbiAqIFRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBjb21wb25lbnQgd2hvIHNob3VsZCBvd24gYW55IGNvbXBvbmVudHMgdGhhdCBhcmVcbiAqIGN1cnJlbnRseSBiZWluZyBjb25zdHJ1Y3RlZC5cbiAqL1xudmFyIFJlYWN0Q3VycmVudE93bmVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG5cbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHZvaWQgMDtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHZvaWQgMDtcblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICAgIHdhcm5pbmcoZmFsc2UsICclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vZmIubWUvcmVhY3Qtc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgfVxuICB9O1xuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG4gICAgICB3YXJuaW5nKGZhbHNlLCAnJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgIH1cbiAgfTtcbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIG5vIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAaW50ZXJuYWxcbiAqL1xudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcblxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcblxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTtcblxuICAgIC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pO1xuICAgIC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTtcbiAgICAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgdmFyIHByb3BOYW1lID0gdm9pZCAwO1xuXG4gIC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcbiAgdmFyIHByb3BzID0ge307XG5cbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgIH1cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIHNlbGYgPSBjb25maWcuX19zZWxmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc2VsZjtcbiAgICBzb3VyY2UgPSBjb25maWcuX19zb3VyY2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zb3VyY2U7XG4gICAgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG4gICAge1xuICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZEFycmF5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICBpZiAodHlwZW9mIHByb3BzLiQkdHlwZW9mID09PSAndW5kZWZpbmVkJyB8fCBwcm9wcy4kJHR5cGVvZiAhPT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlZikge1xuICAgICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG59XG5cbi8qKlxuICogUmV0dXJuIGEgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBSZWFjdEVsZW1lbnRzIG9mIGEgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZmFjdG9yeVxuICovXG5cblxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuXG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG4vKipcbiAqIENsb25lIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IHVzaW5nIGVsZW1lbnQgYXMgdGhlIHN0YXJ0aW5nIHBvaW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjbG9uZWVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgISEoZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB1bmRlZmluZWQpID8gaW52YXJpYW50KGZhbHNlLCAnUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgJXMuJywgZWxlbWVudCkgOiB2b2lkIDA7XG5cbiAgdmFyIHByb3BOYW1lID0gdm9pZCAwO1xuXG4gIC8vIE9yaWdpbmFsIHByb3BzIGFyZSBjb3BpZWRcbiAgdmFyIHByb3BzID0gX2Fzc2lnbih7fSwgZWxlbWVudC5wcm9wcyk7XG5cbiAgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XG4gIHZhciByZWYgPSBlbGVtZW50LnJlZjtcbiAgLy8gU2VsZiBpcyBwcmVzZXJ2ZWQgc2luY2UgdGhlIG93bmVyIGlzIHByZXNlcnZlZC5cbiAgdmFyIHNlbGYgPSBlbGVtZW50Ll9zZWxmO1xuICAvLyBTb3VyY2UgaXMgcHJlc2VydmVkIHNpbmNlIGNsb25lRWxlbWVudCBpcyB1bmxpa2VseSB0byBiZSB0YXJnZXRlZCBieSBhXG4gIC8vIHRyYW5zcGlsZXIsIGFuZCB0aGUgb3JpZ2luYWwgc291cmNlIGlzIHByb2JhYmx5IGEgYmV0dGVyIGluZGljYXRvciBvZiB0aGVcbiAgLy8gdHJ1ZSBvd25lci5cbiAgdmFyIHNvdXJjZSA9IGVsZW1lbnQuX3NvdXJjZTtcblxuICAvLyBPd25lciB3aWxsIGJlIHByZXNlcnZlZCwgdW5sZXNzIHJlZiBpcyBvdmVycmlkZGVuXG4gIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICAvLyBTaWxlbnRseSBzdGVhbCB0aGUgcmVmIGZyb20gdGhlIHBhcmVudC5cbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICBvd25lciA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQ7XG4gICAgfVxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgb3ZlcnJpZGUgZXhpc3RpbmcgcHJvcHNcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdm9pZCAwO1xuICAgIGlmIChlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgZGVmYXVsdFByb3BzID0gZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcztcbiAgICB9XG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgaWYgKGNvbmZpZ1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpO1xufVxuXG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIHZhbGlkIGNvbXBvbmVudC5cbiAqIEBmaW5hbFxuICovXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSB7fTtcblxue1xuICAvLyBDb21wb25lbnQgdGhhdCBpcyBiZWluZyB3b3JrZWQgb25cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBudWxsO1xuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaW1wbCA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrO1xuICAgIGlmIChpbXBsKSB7XG4gICAgICByZXR1cm4gaW1wbCgpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn1cblxudmFyIFNFUEFSQVRPUiA9ICcuJztcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XG5cbi8qKlxuICogRXNjYXBlIGFuZCB3cmFwIGtleSBzbyBpdCBpcyBzYWZlIHRvIHVzZSBhcyBhIHJlYWN0aWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGJlIGVzY2FwZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBlc2NhcGVkIGtleS5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xuICB2YXIgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInXG4gIH07XG4gIHZhciBlc2NhcGVkU3RyaW5nID0gKCcnICsga2V5KS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuXG4gIHJldHVybiAnJCcgKyBlc2NhcGVkU3RyaW5nO1xufVxuXG4vKipcbiAqIFRPRE86IFRlc3QgdGhhdCBhIHNpbmdsZSBjaGlsZCBhbmQgYW4gYXJyYXkgd2l0aCBvbmUgaXRlbSBoYXZlIHRoZSBzYW1lIGtleVxuICogcGF0dGVybi5cbiAqL1xuXG52YXIgZGlkV2FybkFib3V0TWFwcyA9IGZhbHNlO1xuXG52YXIgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nO1xuZnVuY3Rpb24gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHRleHQpIHtcbiAgcmV0dXJuICgnJyArIHRleHQpLnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cblxudmFyIFBPT0xfU0laRSA9IDEwO1xudmFyIHRyYXZlcnNlQ29udGV4dFBvb2wgPSBbXTtcbmZ1bmN0aW9uIGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChtYXBSZXN1bHQsIGtleVByZWZpeCwgbWFwRnVuY3Rpb24sIG1hcENvbnRleHQpIHtcbiAgaWYgKHRyYXZlcnNlQ29udGV4dFBvb2wubGVuZ3RoKSB7XG4gICAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IHRyYXZlcnNlQ29udGV4dFBvb2wucG9wKCk7XG4gICAgdHJhdmVyc2VDb250ZXh0LnJlc3VsdCA9IG1hcFJlc3VsdDtcbiAgICB0cmF2ZXJzZUNvbnRleHQua2V5UHJlZml4ID0ga2V5UHJlZml4O1xuICAgIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbWFwRnVuY3Rpb247XG4gICAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBtYXBDb250ZXh0O1xuICAgIHRyYXZlcnNlQ29udGV4dC5jb3VudCA9IDA7XG4gICAgcmV0dXJuIHRyYXZlcnNlQ29udGV4dDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0OiBtYXBSZXN1bHQsXG4gICAgICBrZXlQcmVmaXg6IGtleVByZWZpeCxcbiAgICAgIGZ1bmM6IG1hcEZ1bmN0aW9uLFxuICAgICAgY29udGV4dDogbWFwQ29udGV4dCxcbiAgICAgIGNvdW50OiAwXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCkge1xuICB0cmF2ZXJzZUNvbnRleHQucmVzdWx0ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmtleVByZWZpeCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuY291bnQgPSAwO1xuICBpZiAodHJhdmVyc2VDb250ZXh0UG9vbC5sZW5ndGggPCBQT09MX1NJWkUpIHtcbiAgICB0cmF2ZXJzZUNvbnRleHRQb29sLnB1c2godHJhdmVyc2VDb250ZXh0KTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHshc3RyaW5nfSBuYW1lU29GYXIgTmFtZSBvZiB0aGUga2V5IHBhdGggc28gZmFyLlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIHRvIGludm9rZSB3aXRoIGVhY2ggY2hpbGQgZm91bmQuXG4gKiBAcGFyYW0gez8qfSB0cmF2ZXJzZUNvbnRleHQgVXNlZCB0byBwYXNzIGluZm9ybWF0aW9uIHRocm91Z2hvdXQgdGhlIHRyYXZlcnNhbFxuICogcHJvY2Vzcy5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5mdW5jdGlvbiB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZHJlbiwgbmFtZVNvRmFyLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGNoaWxkcmVuO1xuXG4gIGlmICh0eXBlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAvLyBBbGwgb2YgdGhlIGFib3ZlIGFyZSBwZXJjZWl2ZWQgYXMgbnVsbC5cbiAgICBjaGlsZHJlbiA9IG51bGw7XG4gIH1cblxuICB2YXIgaW52b2tlQ2FsbGJhY2sgPSBmYWxzZTtcblxuICBpZiAoY2hpbGRyZW4gPT09IG51bGwpIHtcbiAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sodHJhdmVyc2VDb250ZXh0LCBjaGlsZHJlbixcbiAgICAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3MuXG4gICAgbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldENvbXBvbmVudEtleShjaGlsZHJlbiwgMCkgOiBuYW1lU29GYXIpO1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkID0gdm9pZCAwO1xuICB2YXIgbmV4dE5hbWUgPSB2b2lkIDA7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuICB2YXIgbmV4dE5hbWVQcmVmaXggPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SIDogbmFtZVNvRmFyICsgU1VCU0VQQVJBVE9SO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkLCBpKTtcbiAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAge1xuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gPT09IGNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICAhZGlkV2FybkFib3V0TWFwcyA/IHdhcm5pbmcoZmFsc2UsICdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIHVuc3VwcG9ydGVkIGFuZCB3aWxsIGxpa2VseSB5aWVsZCAnICsgJ3VuZXhwZWN0ZWQgcmVzdWx0cy4gQ29udmVydCBpdCB0byBhIHNlcXVlbmNlL2l0ZXJhYmxlIG9mIGtleWVkICcgKyAnUmVhY3RFbGVtZW50cyBpbnN0ZWFkLiVzJywgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCkpIDogdm9pZCAwO1xuICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChjaGlsZHJlbik7XG4gICAgICB2YXIgc3RlcCA9IHZvaWQgMDtcbiAgICAgIHZhciBpaSA9IDA7XG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBhZGRlbmR1bSA9ICcnO1xuICAgICAge1xuICAgICAgICBhZGRlbmR1bSA9ICcgSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSAnICsgJ2luc3RlYWQuJyArIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuICAgICAgfVxuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gJycgKyBjaGlsZHJlbjtcbiAgICAgIGludmFyaWFudChmYWxzZSwgJ09iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogJXMpLiVzJywgY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nLCBhZGRlbmR1bSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnRyZWVDb3VudDtcbn1cblxuLyoqXG4gKiBUcmF2ZXJzZXMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLCBidXRcbiAqIG1pZ2h0IGFsc28gYmUgc3BlY2lmaWVkIHRocm91Z2ggYXR0cmlidXRlczpcbiAqXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sIC4uLilgXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMubGVmdFBhbmVsQ2hpbGRyZW4sIC4uLilgXG4gKlxuICogVGhlIGB0cmF2ZXJzZUNvbnRleHRgIGlzIGFuIG9wdGlvbmFsIGFyZ3VtZW50IHRoYXQgaXMgcGFzc2VkIHRocm91Z2ggdGhlXG4gKiBlbnRpcmUgdHJhdmVyc2FsLiBJdCBjYW4gYmUgdXNlZCB0byBzdG9yZSBhY2N1bXVsYXRpb25zIG9yIGFueXRoaW5nIGVsc2UgdGhhdFxuICogdGhlIGNhbGxiYWNrIG1pZ2h0IGZpbmQgcmVsZXZhbnQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBvYmplY3QuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgVG8gaW52b2tlIHVwb24gdHJhdmVyc2luZyBlYWNoIGNoaWxkLlxuICogQHBhcmFtIHs/Kn0gdHJhdmVyc2VDb250ZXh0IENvbnRleHQgZm9yIHRyYXZlcnNhbC5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5mdW5jdGlvbiB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICByZXR1cm4gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGRyZW4sICcnLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhIGtleSBzdHJpbmcgdGhhdCBpZGVudGlmaWVzIGEgY29tcG9uZW50IHdpdGhpbiBhIHNldC5cbiAqXG4gKiBAcGFyYW0geyp9IGNvbXBvbmVudCBBIGNvbXBvbmVudCB0aGF0IGNvdWxkIGNvbnRhaW4gYSBtYW51YWwga2V5LlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IHRoYXQgaXMgdXNlZCBpZiBhIG1hbnVhbCBrZXkgaXMgbm90IHByb3ZpZGVkLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRDb21wb25lbnRLZXkoY29tcG9uZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICdvYmplY3QnICYmIGNvbXBvbmVudCAhPT0gbnVsbCAmJiBjb21wb25lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICByZXR1cm4gZXNjYXBlKGNvbXBvbmVudC5rZXkpO1xuICB9XG4gIC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIGZvckVhY2hTaW5nbGVDaGlsZChib29rS2VlcGluZywgY2hpbGQsIG5hbWUpIHtcbiAgdmFyIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG5cbiAgZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBib29rS2VlcGluZy5jb3VudCsrKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0LmNoaWxkcmVuLmZvcmVhY2hcbiAqXG4gKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZm9yRWFjaEZ1bmNcbiAqIEBwYXJhbSB7Kn0gZm9yRWFjaENvbnRleHQgQ29udGV4dCBmb3IgZm9yRWFjaENvbnRleHQuXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG4gIHZhciB0cmF2ZXJzZUNvbnRleHQgPSBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQobnVsbCwgbnVsbCwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KTtcbiAgdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaFNpbmdsZUNoaWxkLCB0cmF2ZXJzZUNvbnRleHQpO1xuICByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQoYm9va0tlZXBpbmcsIGNoaWxkLCBjaGlsZEtleSkge1xuICB2YXIgcmVzdWx0ID0gYm9va0tlZXBpbmcucmVzdWx0LFxuICAgICAga2V5UHJlZml4ID0gYm9va0tlZXBpbmcua2V5UHJlZml4LFxuICAgICAgZnVuYyA9IGJvb2tLZWVwaW5nLmZ1bmMsXG4gICAgICBjb250ZXh0ID0gYm9va0tlZXBpbmcuY29udGV4dDtcblxuXG4gIHZhciBtYXBwZWRDaGlsZCA9IGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG4gIGlmIChBcnJheS5pc0FycmF5KG1hcHBlZENoaWxkKSkge1xuICAgIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwobWFwcGVkQ2hpbGQsIHJlc3VsdCwgY2hpbGRLZXksIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgIGlmIChpc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgIG1hcHBlZENoaWxkID0gY2xvbmVBbmRSZXBsYWNlS2V5KG1hcHBlZENoaWxkLFxuICAgICAgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAga2V5UHJlZml4ICsgKG1hcHBlZENoaWxkLmtleSAmJiAoIWNoaWxkIHx8IGNoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IGVzY2FwZVVzZXJQcm92aWRlZEtleShtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgIH1cbiAgICByZXN1bHQucHVzaChtYXBwZWRDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgYXJyYXksIHByZWZpeCwgZnVuYywgY29udGV4dCkge1xuICB2YXIgZXNjYXBlZFByZWZpeCA9ICcnO1xuICBpZiAocHJlZml4ICE9IG51bGwpIHtcbiAgICBlc2NhcGVkUHJlZml4ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHByZWZpeCkgKyAnLyc7XG4gIH1cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChhcnJheSwgZXNjYXBlZFByZWZpeCwgZnVuYywgY29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KTtcbn1cblxuLyoqXG4gKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0LmNoaWxkcmVuLm1hcFxuICpcbiAqIFRoZSBwcm92aWRlZCBtYXBGdW5jdGlvbihjaGlsZCwga2V5LCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMgVGhlIG1hcCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgcmVzdWx0LCBudWxsLCBmdW5jLCBjb250ZXh0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdC5jaGlsZHJlbi5jb3VudFxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuLlxuICovXG5mdW5jdGlvbiBjb3VudENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHJldHVybiB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCwgbnVsbCk7XG59XG5cbi8qKlxuICogRmxhdHRlbiBhIGNoaWxkcmVuIG9iamVjdCAodHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gKSBhbmRcbiAqIHJldHVybiBhbiBhcnJheSB3aXRoIGFwcHJvcHJpYXRlbHkgcmUta2V5ZWQgY2hpbGRyZW4uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdC5jaGlsZHJlbi50b2FycmF5XG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgY2hpbGQgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuIGFuZCB2ZXJpZmllcyB0aGF0IHRoZXJlXG4gKiBpcyBvbmx5IG9uZSBjaGlsZCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0LmNoaWxkcmVuLm9ubHlcbiAqXG4gKiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBhIHNpbmdsZSBjaGlsZCBnZXRzXG4gKiBwYXNzZWQgd2l0aG91dCBhIHdyYXBwZXIsIGJ1dCB0aGUgcHVycG9zZSBvZiB0aGlzIGhlbHBlciBmdW5jdGlvbiBpcyB0b1xuICogYWJzdHJhY3QgYXdheSB0aGUgcGFydGljdWxhciBzdHJ1Y3R1cmUgb2YgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHs/b2JqZWN0fSBjaGlsZHJlbiBDaGlsZCBjb2xsZWN0aW9uIHN0cnVjdHVyZS5cbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gVGhlIGZpcnN0IGFuZCBvbmx5IGBSZWFjdEVsZW1lbnRgIGNvbnRhaW5lZCBpbiB0aGVcbiAqIHN0cnVjdHVyZS5cbiAqL1xuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gICFpc1ZhbGlkRWxlbWVudChjaGlsZHJlbikgPyBpbnZhcmlhbnQoZmFsc2UsICdSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC4nKSA6IHZvaWQgMDtcbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSwgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIHtcbiAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxjdWxhdGVDaGFuZ2VkQml0cyA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAge1xuICAgICAgIShjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gbnVsbCB8fCB0eXBlb2YgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09ICdmdW5jdGlvbicpID8gd2FybmluZyhmYWxzZSwgJ2NyZWF0ZUNvbnRleHQ6IEV4cGVjdGVkIHRoZSBvcHRpb25hbCBzZWNvbmQgYXJndW1lbnQgdG8gYmUgYSAnICsgJ2Z1bmN0aW9uLiBJbnN0ZWFkIHJlY2VpdmVkOiAlcycsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKSA6IHZvaWQgMDtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udGV4dCA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY2FsY3VsYXRlQ2hhbmdlZEJpdHMsXG4gICAgX2RlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIF9jdXJyZW50VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICAvLyBBcyBhIHdvcmthcm91bmQgdG8gc3VwcG9ydCBtdWx0aXBsZSBjb25jdXJyZW50IHJlbmRlcmVycywgd2UgY2F0ZWdvcml6ZVxuICAgIC8vIHNvbWUgcmVuZGVyZXJzIGFzIHByaW1hcnkgYW5kIG90aGVycyBhcyBzZWNvbmRhcnkuIFdlIG9ubHkgZXhwZWN0XG4gICAgLy8gdGhlcmUgdG8gYmUgdHdvIGNvbmN1cnJlbnQgcmVuZGVyZXJzIGF0IG1vc3Q6IFJlYWN0IE5hdGl2ZSAocHJpbWFyeSkgYW5kXG4gICAgLy8gRmFicmljIChzZWNvbmRhcnkpOyBSZWFjdCBET00gKHByaW1hcnkpIGFuZCBSZWFjdCBBUlQgKHNlY29uZGFyeSkuXG4gICAgLy8gU2Vjb25kYXJ5IHJlbmRlcmVycyBzdG9yZSB0aGVpciBjb250ZXh0IHZhbHVlcyBvbiBzZXBhcmF0ZSBmaWVsZHMuXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICBfY2hhbmdlZEJpdHM6IDAsXG4gICAgX2NoYW5nZWRCaXRzMjogMCxcbiAgICAvLyBUaGVzZSBhcmUgY2lyY3VsYXJcbiAgICBQcm92aWRlcjogbnVsbCxcbiAgICBDb25zdW1lcjogbnVsbFxuICB9O1xuXG4gIGNvbnRleHQuUHJvdmlkZXIgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX1BST1ZJREVSX1RZUEUsXG4gICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgfTtcbiAgY29udGV4dC5Db25zdW1lciA9IGNvbnRleHQ7XG5cbiAge1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyMiA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgICEodHlwZW9mIHJlbmRlciA9PT0gJ2Z1bmN0aW9uJykgPyB3YXJuaW5nKGZhbHNlLCAnZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpIDogdm9pZCAwO1xuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICAhKHJlbmRlci5kZWZhdWx0UHJvcHMgPT0gbnVsbCAmJiByZW5kZXIucHJvcFR5cGVzID09IG51bGwpID8gd2FybmluZyhmYWxzZSwgJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBkbyBub3Qgc3VwcG9ydCBwcm9wVHlwZXMgb3IgZGVmYXVsdFByb3BzLiAnICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBSZWFjdCBjb21wb25lbnQ/JykgOiB2b2lkIDA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSxcbiAgICByZW5kZXI6IHJlbmRlclxuICB9O1xufVxuXG52YXIgZGVzY3JpYmVDb21wb25lbnRGcmFtZSA9IGZ1bmN0aW9uIChuYW1lLCBzb3VyY2UsIG93bmVyTmFtZSkge1xuICByZXR1cm4gJ1xcbiAgICBpbiAnICsgKG5hbWUgfHwgJ1Vua25vd24nKSArIChzb3VyY2UgPyAnIChhdCAnICsgc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKSArICc6JyArIHNvdXJjZS5saW5lTnVtYmVyICsgJyknIDogb3duZXJOYW1lID8gJyAoY3JlYXRlZCBieSAnICsgb3duZXJOYW1lICsgJyknIDogJycpO1xufTtcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfVElNRU9VVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZShmaWJlcikge1xuICB2YXIgdHlwZSA9IGZpYmVyLnR5cGU7XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lO1xuICB9XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnQXN5bmNNb2RlJztcbiAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgIHJldHVybiAnQ29udGV4dC5Db25zdW1lcic7XG4gICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgcmV0dXJuICdSZWFjdEZyYWdtZW50JztcbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdSZWFjdFBvcnRhbCc7XG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcignICsgZmliZXIucGVuZGluZ1Byb3BzLmlkICsgJyknO1xuICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgIHJldHVybiAnQ29udGV4dC5Qcm92aWRlcic7XG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcbiAgICBjYXNlIFJFQUNUX1RJTUVPVVRfVFlQRTpcbiAgICAgIHJldHVybiAnVGltZW91dCc7XG4gIH1cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHZhciBmdW5jdGlvbk5hbWUgPSB0eXBlLnJlbmRlci5kaXNwbGF5TmFtZSB8fCB0eXBlLnJlbmRlci5uYW1lIHx8ICcnO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb25OYW1lICE9PSAnJyA/ICdGb3J3YXJkUmVmKCcgKyBmdW5jdGlvbk5hbWUgKyAnKScgOiAnRm9yd2FyZFJlZic7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFJlYWN0RWxlbWVudFZhbGlkYXRvciBwcm92aWRlcyBhIHdyYXBwZXIgYXJvdW5kIGEgZWxlbWVudCBmYWN0b3J5XG4gKiB3aGljaCB2YWxpZGF0ZXMgdGhlIHByb3BzIHBhc3NlZCB0byB0aGUgZWxlbWVudC4gVGhpcyBpcyBpbnRlbmRlZCB0byBiZVxuICogdXNlZCBvbmx5IGluIERFViBhbmQgY291bGQgYmUgcmVwbGFjZWQgYnkgYSBzdGF0aWMgdHlwZSBjaGVja2VyIGZvciBsYW5ndWFnZXNcbiAqIHRoYXQgc3VwcG9ydCBpdC5cbiAqL1xuXG52YXIgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSB2b2lkIDA7XG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB2b2lkIDA7XG5cbnZhciBnZXREaXNwbGF5TmFtZSA9IGZ1bmN0aW9uICgpIHt9O1xudmFyIGdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IG51bGw7XG5cbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcblxuICBnZXREaXNwbGF5TmFtZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcjZW1wdHknO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlbGVtZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuICcjdGV4dCc7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudC50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGVsZW1lbnQudHlwZTtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQudHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkge1xuICAgICAgcmV0dXJuICdSZWFjdC5GcmFnbWVudCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbGVtZW50LnR5cGUuZGlzcGxheU5hbWUgfHwgZWxlbWVudC50eXBlLm5hbWUgfHwgJ1Vua25vd24nO1xuICAgIH1cbiAgfTtcblxuICBnZXRTdGFja0FkZGVuZHVtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGFjayA9ICcnO1xuICAgIGlmIChjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXREaXNwbGF5TmFtZShjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCk7XG4gICAgICB2YXIgb3duZXIgPSBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC5fb3duZXI7XG4gICAgICBzdGFjayArPSBkZXNjcmliZUNvbXBvbmVudEZyYW1lKG5hbWUsIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50Ll9zb3VyY2UsIG93bmVyICYmIGdldENvbXBvbmVudE5hbWUob3duZXIpKTtcbiAgICB9XG4gICAgc3RhY2sgKz0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCkgfHwgJyc7XG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIGlmIChSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpO1xuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQgJiYgZWxlbWVudFByb3BzLl9fc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgc291cmNlID0gZWxlbWVudFByb3BzLl9fc291cmNlO1xuICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSAnXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8JyArIHBhcmVudE5hbWUgKyAnPi4nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaW5mbztcbn1cblxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcblxuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG4gIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTtcblxuICAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gJyBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSAnICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lcikgKyAnLic7XG4gIH1cblxuICBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IGVsZW1lbnQ7XG4gIHtcbiAgICB3YXJuaW5nKGZhbHNlLCAnRWFjaCBjaGlsZCBpbiBhbiBhcnJheSBvciBpdGVyYXRvciBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4lcycsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIsIGdldFN0YWNrQWRkZW5kdW0oKSk7XG4gIH1cbiAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBudWxsO1xufVxuXG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobm9kZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgIHZhciBzdGVwID0gdm9pZCAwO1xuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHZhciBjb21wb25lbnRDbGFzcyA9IGVsZW1lbnQudHlwZTtcbiAgaWYgKHR5cGVvZiBjb21wb25lbnRDbGFzcyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbmFtZSA9IGNvbXBvbmVudENsYXNzLmRpc3BsYXlOYW1lIHx8IGNvbXBvbmVudENsYXNzLm5hbWU7XG4gIHZhciBwcm9wVHlwZXMgPSBjb21wb25lbnRDbGFzcy5wcm9wVHlwZXM7XG4gIGlmIChwcm9wVHlwZXMpIHtcbiAgICBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGdldFN0YWNrQWRkZW5kdW0pO1xuICAgIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gbnVsbDtcbiAgfSBlbHNlIGlmIChjb21wb25lbnRDbGFzcy5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7XG4gICAgd2FybmluZyhmYWxzZSwgJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIG5hbWUgfHwgJ1Vua25vd24nKTtcbiAgfVxuICBpZiAodHlwZW9mIGNvbXBvbmVudENsYXNzLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICFjb21wb25lbnRDbGFzcy5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQgPyB3YXJuaW5nKGZhbHNlLCAnZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpIDogdm9pZCAwO1xuICB9XG59XG5cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gZnJhZ21lbnQ7XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4lcycsIGtleSwgZ2V0U3RhY2tBZGRlbmR1bSgpKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4lcycsIGdldFN0YWNrQWRkZW5kdW0oKSk7XG4gIH1cblxuICBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTtcblxuICAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuICBpZiAoIXZhbGlkVHlwZSkge1xuICAgIHZhciBpbmZvID0gJyc7XG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShwcm9wcyk7XG4gICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICB9XG5cbiAgICBpbmZvICs9IGdldFN0YWNrQWRkZW5kdW0oKSB8fCAnJztcblxuICAgIHZhciB0eXBlU3RyaW5nID0gdm9pZCAwO1xuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICB9XG5cbiAgICB3YXJuaW5nKGZhbHNlLCAnUmVhY3QuY3JlYXRlRWxlbWVudDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gIC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcbiAgaWYgKHZhbGlkVHlwZSkge1xuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFKSB7XG4gICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbih0eXBlKSB7XG4gIHZhciB2YWxpZGF0ZWRGYWN0b3J5ID0gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uLmJpbmQobnVsbCwgdHlwZSk7XG4gIHZhbGlkYXRlZEZhY3RvcnkudHlwZSA9IHR5cGU7XG4gIC8vIExlZ2FjeSBob29rOiByZW1vdmUgaXRcbiAge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvd1ByaW9yaXR5V2FybmluZyQxKGZhbHNlLCAnRmFjdG9yeS50eXBlIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB0aGUgY2xhc3MgZGlyZWN0bHkgJyArICdiZWZvcmUgcGFzc2luZyBpdCB0byBjcmVhdGVGYWN0b3J5LicpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3R5cGUnLCB7XG4gICAgICAgICAgdmFsdWU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlZEZhY3Rvcnk7XG59XG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uKGVsZW1lbnQsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgbmV3RWxlbWVudCA9IGNsb25lRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgbmV3RWxlbWVudC50eXBlKTtcbiAgfVxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbnZhciBSZWFjdCA9IHtcbiAgQ2hpbGRyZW46IHtcbiAgICBtYXA6IG1hcENoaWxkcmVuLFxuICAgIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgICBjb3VudDogY291bnRDaGlsZHJlbixcbiAgICB0b0FycmF5OiB0b0FycmF5LFxuICAgIG9ubHk6IG9ubHlDaGlsZFxuICB9LFxuXG4gIGNyZWF0ZVJlZjogY3JlYXRlUmVmLFxuICBDb21wb25lbnQ6IENvbXBvbmVudCxcbiAgUHVyZUNvbXBvbmVudDogUHVyZUNvbXBvbmVudCxcblxuICBjcmVhdGVDb250ZXh0OiBjcmVhdGVDb250ZXh0LFxuICBmb3J3YXJkUmVmOiBmb3J3YXJkUmVmLFxuXG4gIEZyYWdtZW50OiBSRUFDVF9GUkFHTUVOVF9UWVBFLFxuICBTdHJpY3RNb2RlOiBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFLFxuICB1bnN0YWJsZV9Bc3luY01vZGU6IFJFQUNUX0FTWU5DX01PREVfVFlQRSxcbiAgdW5zdGFibGVfUHJvZmlsZXI6IFJFQUNUX1BST0ZJTEVSX1RZUEUsXG5cbiAgY3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uLFxuICBjbG9uZUVsZW1lbnQ6IGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uLFxuICBjcmVhdGVGYWN0b3J5OiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24sXG4gIGlzVmFsaWRFbGVtZW50OiBpc1ZhbGlkRWxlbWVudCxcblxuICB2ZXJzaW9uOiBSZWFjdFZlcnNpb24sXG5cbiAgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6IHtcbiAgICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXIsXG4gICAgLy8gVXNlZCBieSByZW5kZXJlcnMgdG8gYXZvaWQgYnVuZGxpbmcgb2JqZWN0LWFzc2lnbiB0d2ljZSBpbiBVTUQgYnVuZGxlczpcbiAgICBhc3NpZ246IF9hc3NpZ25cbiAgfVxufTtcblxuaWYgKGVuYWJsZVN1c3BlbnNlKSB7XG4gIFJlYWN0LlRpbWVvdXQgPSBSRUFDVF9USU1FT1VUX1RZUEU7XG59XG5cbntcbiAgX2Fzc2lnbihSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCwge1xuICAgIC8vIFRoZXNlIHNob3VsZCBub3QgYmUgaW5jbHVkZWQgaW4gcHJvZHVjdGlvbi5cbiAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lOiBSZWFjdERlYnVnQ3VycmVudEZyYW1lLFxuICAgIC8vIFNoaW0gZm9yIFJlYWN0IERPTSAxNi4wLjAgd2hpY2ggc3RpbGwgZGVzdHJ1Y3R1cmVkIChidXQgbm90IHVzZWQpIHRoaXMuXG4gICAgLy8gVE9ETzogcmVtb3ZlIGluIFJlYWN0IDE3LjAuXG4gICAgUmVhY3RDb21wb25lbnRUcmVlSG9vazoge31cbiAgfSk7XG59XG5cblxuXG52YXIgUmVhY3QkMiA9IE9iamVjdC5mcmVlemUoe1xuXHRkZWZhdWx0OiBSZWFjdFxufSk7XG5cbnZhciBSZWFjdCQzID0gKCBSZWFjdCQyICYmIFJlYWN0ICkgfHwgUmVhY3QkMjtcblxuLy8gVE9ETzogZGVjaWRlIG9uIHRoZSB0b3AtbGV2ZWwgZXhwb3J0IGZvcm0uXG4vLyBUaGlzIGlzIGhhY2t5IGJ1dCBtYWtlcyBpdCB3b3JrIHdpdGggYm90aCBSb2xsdXAgYW5kIEplc3QuXG52YXIgcmVhY3QgPSBSZWFjdCQzLmRlZmF1bHQgPyBSZWFjdCQzLmRlZmF1bHQgOiBSZWFjdCQzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlYWN0O1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBLZXlzIH0gZnJvbSAna2V5Y3V0cydcblxuY2xhc3MgS2V5Q3V0cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnByb3BzLm9wdGlvbnNcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW5cblxuICAgIGlmIChjaGlsZHJlbikgdGhpcy5rZXlzID0gbmV3IEtleXModGhpcy5fZWwsIG9wdGlvbnMpXG4gICAgZWxzZSB0aGlzLmtleXMgPSBuZXcgS2V5cyh3aW5kb3csIG9wdGlvbnMpXG5cbiAgICB0aGlzLnVwZGF0ZUJpbmRpbmdzKClcbiAgICB0aGlzLnVwZGF0ZVdhdGNoZXJzKClcblxuICAgIHRoaXMucGF1c2VSZXN1bWUoKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5rZXlzLnN0b3AoKVxuICAgIHRoaXMua2V5cy5yZXNldCgpXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHByZXZQcm9wcy5iaW5kICE9PSB0aGlzLnByb3BzLmJpbmQpIHRoaXMudXBkYXRlQmluZGluZ3MoKVxuICAgIGlmIChwcmV2UHJvcHMud2F0Y2ggIT09IHRoaXMucHJvcHMud2F0Y2gpIHRoaXMudXBkYXRlV2F0Y2hlcnMoKVxuICAgIGlmIChwcmV2UHJvcHMucGF1c2VkICE9PSB0aGlzLnByb3BzLnBhdXNlZCkgdGhpcy5wYXVzZVJlc3VtZSgpXG4gIH1cblxuICBwYXVzZVJlc3VtZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5wYXVzZWQpIHRoaXMua2V5cy5zdG9wKClcbiAgICBlbHNlIHRoaXMua2V5cy5yZXN1bWUoKVxuICB9XG5cbiAgdXBkYXRlQmluZGluZ3MgPSAoKSA9PiB7XG4gICAgdGhpcy5rZXlzLnVuYmluZEFsbCgpXG5cbiAgICBjb25zdCBiaW5kaW5ncyA9IHRoaXMucHJvcHMuYmluZFxuXG4gICAgaWYgKCFiaW5kaW5ncykgcmV0dXJuXG5cbiAgICBpZiAodHlwZW9mIGJpbmRpbmdzICE9PSAnb2JqZWN0JylcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBiaW5kIHBhcmFtZXRlciB2YWx1ZTogJyArIGJpbmRpbmdzKVxuXG4gICAgZm9yIChsZXQgYmluZGluZyBvZiBPYmplY3QuZW50cmllcyhiaW5kaW5ncykpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdoZXJlJylcbiAgICAgIGNvbnN0IFtzaG9ydGN1dCwgY2FsbGJhY2tdID0gYmluZGluZ1xuICAgICAgdGhpcy5rZXlzLmJpbmQoc2hvcnRjdXQsIGNhbGxiYWNrKVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVdhdGNoZXJzID0gKCkgPT4ge1xuICAgIHRoaXMua2V5cy51bndhdGNoQWxsKClcblxuICAgIGNvbnN0IGNhbGxiYWNrcyA9IHRoaXMucHJvcHMud2F0Y2hcblxuICAgIGlmICghY2FsbGJhY2tzKSByZXR1cm5cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShjYWxsYmFja3MpKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHdhdGNoIHBhcmFtZXRlciB2YWx1ZTogJyArIGNhbGxiYWNrcylcblxuICAgIGZvciAobGV0IGNhbGxiYWNrIG9mIGNhbGxiYWNrcykge1xuICAgICAgdGhpcy5rZXlzLndhdGNoKGNhbGxiYWNrKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBvcHRpb25zLCAuLi5vdGhlciB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAvLyBUT0RPOiBTd2l0Y2ggZnJvbSBkaXYgdG8gRnJhZ21lbnQgbGF0ZXIgb24sIGJ1dCBGcmFnbWVudHNcbiAgICAgIC8vIGN1cnJlbnRseSBjYW4ndCBoYXZlIGV2ZW50IGxpc3RlbmVycyBhdHRhY2hlZC5cbiAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEyMDUxXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHJlZj17ZWwgPT4gKHRoaXMuX2VsID0gZWwpfSB7Li4ub3RoZXJ9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbktleUN1dHMucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGJpbmQ6IFByb3BUeXBlcy5vYmplY3QsXG4gIHdhdGNoOiBQcm9wVHlwZXMuYXJyYXksXG4gIHBhdXNlZDogUHJvcFR5cGVzLmJvb2xcbn1cblxuZXhwb3J0IGRlZmF1bHQgS2V5Q3V0c1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBLZXlDdXRzIH0gZnJvbSAnLi9jb21wb25lbnRzL0tleUN1dHMnXG4iXSwic291cmNlUm9vdCI6IiJ9
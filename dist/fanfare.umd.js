'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var Accordion = function Accordion(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  return React__default.createElement("dl", _extends({
    className: className
  }, props, {
    role: "presentation"
  }), children);
};

var Fanfare =
/*#__PURE__*/
function (_Component) {
  _inherits(Fanfare, _Component);

  function Fanfare() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Fanfare);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Fanfare)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      activeAccordions: _this.props.activeAccordions || []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "accordionItems", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (id) {
      _this.toggleAccordion(id);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyDown", function (e) {
      // @todo: There has to be a better way to do this!
      var focusedElement = document.activeElement;
      var focusedAccordion;

      if (focusedElement) {
        focusedAccordion = focusedElement.tagName === 'BUTTON' ? focusedElement : focusedElement.parentElement;
      }

      var currentIndex = parseInt(Object.keys(_this.accordionItems).filter(function (i) {
        return _this.accordionItems[i].ref === focusedAccordion;
      }), 10);

      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
        var moveIndexAmount = e.key === 'ArrowUp' ? -1 : 1;

        var indexToFocus = _this.cycleAccordionIndex(currentIndex, moveIndexAmount);

        if (indexToFocus) {
          _this.accordionItems[indexToFocus].ref.focus();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setRef", function (id, ref) {
      var existingReference = Object.keys(_this.accordionItems).filter(function (r) {
        return _this.accordionItems[r].id === id;
      })[0];

      if (!existingReference) {
        // Subtract 1 to stay zero-based
        var numberOfRefs = Object.keys(_this.accordionItems).length - 1;
        _this.accordionItems[numberOfRefs + 1] = {
          id: id,
          ref: ref
        };
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cycleAccordionIndex", function (currentIndex, amount) {
      var lastIndex = Object.keys(_this.accordionItems).length - 1;

      if (lastIndex < 0) {
        return;
      }

      if (currentIndex === null) {
        currentIndex = amount > 0 ? -1 : lastIndex + 1;
      }

      var newIndex = currentIndex + amount;

      if (newIndex < 0) {
        newIndex = lastIndex;
      } else if (newIndex > lastIndex) {
        newIndex = 0;
      }

      return newIndex;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleAccordion", function (id) {
      _this.setState(function (state) {
        var activeAccordions = state.activeAccordions;
        var indexOf = activeAccordions.indexOf(id);

        var accordionItems = _toConsumableArray(activeAccordions);

        if (_this.props.allowMultiple) {
          accordionItems = indexOf === -1 ? _toConsumableArray(activeAccordions).concat([id]) : activeAccordions.filter(function (i) {
            return i !== id;
          });
        } else {
          accordionItems = indexOf === -1 ? [id] : [];
        }

        return {
          activeAccordions: accordionItems
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getItemProps", function (_ref) {
      var props = _extends({}, _ref);

      var activeAccordions = _this.state.activeAccordions;
      return _objectSpread({}, props, {
        activeAccordions: activeAccordions,
        onClick: _this.handleClick,
        onKeyDown: _this.handleKeyDown,
        setRef: _this.setRef
      });
    });

    return _this;
  }

  _createClass(Fanfare, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className;
      var activeAccordions = this.state.activeAccordions;
      return React__default.createElement(Accordion, {
        className: className
      }, children({
        activeAccordions: activeAccordions,
        getItemProps: this.getItemProps
      }));
    }
  }]);

  return Fanfare;
}(React.Component);

var Item =
/*#__PURE__*/
function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Item);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Item)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getButtonProps", function () {
      var _this$props = _this.props,
          activeAccordions = _this$props.activeAccordions,
          id = _this$props.id,
          _onClick = _this$props.onClick,
          onKeyDown = _this$props.onKeyDown,
          setRef = _this$props.setRef;
      var isOpen = activeAccordions.includes(id);
      return {
        'aria-controls': "accordion-panel-".concat(id),
        'aria-expanded': isOpen,
        id: "accordion-".concat(id),
        isOpen: isOpen,
        onClick: function onClick() {
          _onClick(id);
        },
        onKeyDown: onKeyDown,
        setRef: setRef
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getPanelProps", function () {
      var _this$props2 = _this.props,
          activeAccordions = _this$props2.activeAccordions,
          id = _this$props2.id;
      var isOpen = activeAccordions.includes(id);
      return {
        'aria-labelledby': "accordion-".concat(id),
        id: "accordion-panel-".concat(id),
        isOpen: isOpen,
        role: 'region'
      };
    });

    return _this;
  }

  _createClass(Item, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props,
          id = _this$props3.id,
          startOpen = _this$props3.startOpen,
          onClick = _this$props3.onClick;

      if (startOpen) {
        onClick(id);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children({
        getButtonProps: this.getButtonProps,
        getPanelProps: this.getPanelProps
      });
    }
  }]);

  return Item;
}(React.Component);

var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          props = _objectWithoutProperties(_this$props, ["children", "className"]);

      return React__default.createElement("dt", _extends({
        className: className
      }, props), children);
    }
  }]);

  return Header;
}(React.Component);

var Panel = function Panel(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  return React__default.createElement("dd", _extends({
    className: className
  }, props), children);
};

exports.Fanfare = Fanfare;
exports.Item = Item;
exports.Header = Header;
exports.Panel = Panel;

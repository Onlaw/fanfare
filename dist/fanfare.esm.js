import React, { PureComponent } from 'react';

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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

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

  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
}

var Accordion = function Accordion(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return React.createElement("dl", {
    className: className,
    role: "presentation"
  }, children);
};

var Fanfare =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Fanfare, _PureComponent);

  function Fanfare() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Fanfare);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Fanfare.__proto__ || Object.getPrototypeOf(Fanfare)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        activeAccordions: _this.props.activeAccordions || []
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "accordionItems", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {}
    }), Object.defineProperty(_assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(id) {
        _this.toggleAccordion(id);
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleKeyDown", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
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
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "setRef", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(id, ref) {
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
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "cycleAccordionIndex", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(currentIndex, amount) {
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
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "toggleAccordion", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(id) {
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
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "getItemProps", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_ref2) {
        var props = _objectWithoutProperties(_ref2, []);
        var activeAccordions = _this.state.activeAccordions;
        return _extends({}, props, {
          activeAccordions: activeAccordions,
          onClick: _this.handleClick,
          onKeyDown: _this.handleKeyDown,
          setRef: _this.setRef
        });
      }
    }), _temp));
  }

  _createClass(Fanfare, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          className = _props.className,
          render = _props.render;
      var activeAccordions = this.state.activeAccordions;
      return React.createElement(Accordion, {
        className: className
      }, render({
        activeAccordions: activeAccordions,
        getItemProps: this.getItemProps
      }));
    }
  }]);
  return Fanfare;
}(PureComponent);

var Item =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Item, _PureComponent);

  function Item() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Item);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Item.__proto__ || Object.getPrototypeOf(Item)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "getButtonProps", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props = _this.props,
            activeAccordions = _this$props.activeAccordions,
            id = _this$props.id,
            onClick = _this$props.onClick,
            onKeyDown = _this$props.onKeyDown,
            setRef = _this$props.setRef;
        var isOpen = activeAccordions.includes(id);
        return {
          'aria-controls': "accordion-panel-".concat(id),
          'aria-expanded': isOpen,
          id: "accordion-".concat(id),
          isOpen: isOpen,
          onClick: function (_onClick) {
            function onClick() {
              return _onClick.apply(this, arguments);
            }

            onClick.toString = function () {
              return _onClick.toString();
            };

            return onClick;
          }(function () {
            onClick(id);
          }),
          onKeyDown: onKeyDown,
          // ref: (ref: HTMLButtonElement) => setRef(id, ref),
          setRef: setRef
        };
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "getPanelProps", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
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
      }
    }), _temp));
  }

  _createClass(Item, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          id = _props.id,
          startOpen = _props.startOpen,
          onClick = _props.onClick;

      if (startOpen) {
        onClick(id);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.render({
        getButtonProps: this.getButtonProps,
        getPanelProps: this.getPanelProps
      });
    }
  }]);
  return Item;
}(PureComponent);

var Header =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Header, _PureComponent);

  function Header() {
    _classCallCheck(this, Header);
    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className;
      return React.createElement("dt", {
        className: className
      }, children);
    }
  }]);
  return Header;
}(PureComponent);

var Panel = function Panel(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return React.createElement("dd", {
    className: className
  }, children);
};

export { Fanfare, Item, Header, Panel };

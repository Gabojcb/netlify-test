"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hmr = exports.__beyond_pkg = exports.View = exports.Controller = void 0;
var dependency_0 = require("@beyond-js/widgets/render");
var dependency_1 = require("@beyond-js/kernel/bundle");
var dependency_2 = require("@beyond-js/kernel/styles");
var dependency_3 = require("@beyond-js/react-18-widgets/page");
var dependency_4 = require("react");
const {
  Bundle: __Bundle
} = dependency_1;
const __pkg = new __Bundle({
  "module": {
    "vspecifier": "practice@0.0.1/home"
  },
  "type": "widget"
}).package();
;
__pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4]]);
brequire('@beyond-js/widgets/render').widgets.register([{
  "name": "home-page",
  "vspecifier": "practice@0.0.1/home",
  "is": "page",
  "route": "/"
}]);
brequire('@beyond-js/kernel/styles').styles.register('practice@0.0.1/home');
const ims = new Map();

/****************************
INTERNAL MODULE: ./controller
****************************/

ims.set('./controller', {
  hash: 516348069,
  creator: function (require, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Controller = void 0;
    var _page = require("@beyond-js/react-18-widgets/page");
    var _store = require("./store");
    var _views = require("./views");
    /*bundle*/
    class Controller extends _page.PageReactWidgetController {
      #store;
      createStore() {
        this.#store = new _store.StoreManager();
        return this.#store;
      }
      get Widget() {
        return _views.View;
      }
      /**
       * this method is executed when the widget is showd
       */
      load() {}
      /**
       * this method is executed when the widget is hidden
       */
      hide() {}
    }
    exports.Controller = Controller;
  }
});

/*****************************
INTERNAL MODULE: ./store/index
*****************************/

ims.set('./store/index', {
  hash: 1793251939,
  creator: function (require, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.StoreManager = void 0;
    class StoreManager {}
    exports.StoreManager = StoreManager;
  }
});

/*****************************
INTERNAL MODULE: ./views/index
*****************************/

ims.set('./views/index', {
  hash: 242664044,
  creator: function (require, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.View = View;
    var React = require("react");
    /*bundle*/
    function View() {
      function tuckIn(arr1, arr2) {
        const resultArr = [];
        const newArr = [arr1[0], ...arr2, arr1[1]];
        return newArr;
      }
      const output = tuckIn([1, 455, 49], [39, 53, 1]);
      return React.createElement("div", {
        className: 'page__container'
      }, React.createElement("h1", null, "My first page using BeyondJS with ", React.createElement("span", {
        className: 'beyond'
      }, "React"), "!"), React.createElement("section", null, React.createElement("p", null, output)));
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./controller",
  "from": "Controller",
  "name": "Controller"
}, {
  "im": "./views/index",
  "from": "View",
  "name": "View"
}];
let Controller, View;

// Module exports
exports.View = View;
exports.Controller = Controller;
__pkg.exports.process = function ({
  require,
  prop,
  value
}) {
  (require || prop === 'Controller') && (exports.Controller = Controller = require ? require('./controller').Controller : value);
  (require || prop === 'View') && (exports.View = View = require ? require('./views/index').View : value);
};
const __beyond_pkg = __pkg;
exports.__beyond_pkg = __beyond_pkg;
const hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
exports.hmr = hmr;
__pkg.initialise(ims);
//# sourceMappingURL=home.cjs.js.map
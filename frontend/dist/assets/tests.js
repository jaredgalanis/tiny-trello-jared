'use strict';

define('tiny-trello-jared/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/item-detail-modal.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/item-detail-modal.js should pass ESLint\n\n');
  });

  QUnit.test('components/new-item-input.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/new-item-input.js should pass ESLint\n\n');
  });

  QUnit.test('components/new-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/new-item.js should pass ESLint\n\n');
  });

  QUnit.test('components/trello-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/trello-item.js should pass ESLint\n\n');
  });

  QUnit.test('components/trello-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/trello-list.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/board.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/board.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/board/edit-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/board/edit-item.js should pass ESLint\n\n');
  });

  QUnit.test('models/item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/item.js should pass ESLint\n\n');
  });

  QUnit.test('models/list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/list.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/board.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/board.js should pass ESLint\n\n');
  });

  QUnit.test('routes/board/edit-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/board/edit-item.js should pass ESLint\n\n');
  });
});
define('tiny-trello-jared/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  var run = Ember.run;
  function destroyApp(application) {
    run(application, 'destroy');
  }
});
define('tiny-trello-jared/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'tiny-trello-jared/tests/helpers/start-app', 'tiny-trello-jared/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('tiny-trello-jared/tests/helpers/resolver', ['exports', 'tiny-trello-jared/resolver', 'tiny-trello-jared/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('tiny-trello-jared/tests/helpers/start-app', ['exports', 'tiny-trello-jared/app', 'tiny-trello-jared/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  var merge = Ember.merge;
  var run = Ember.run;
  function startApp(attrs) {
    var attributes = merge({}, _environment.default.APP);
    attributes = merge(attributes, attrs); // use defaults, but you can override;

    return run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('tiny-trello-jared/tests/integration/components/item-detail-modal-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('item-detail-modal', 'Integration | Component | item detail modal', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "PgYMZFo5",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"item-detail-modal\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "ZoB82twX",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"item-detail-modal\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('tiny-trello-jared/tests/integration/components/new-item-input-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('new-item-input', 'Integration | Component | new item input', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "vjUAZCSY",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"new-item-input\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "7UVwggPC",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"new-item-input\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('tiny-trello-jared/tests/integration/components/new-item-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('new-item', 'Integration | Component | new item', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "ncHqq8xm",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"new-item\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "bB5VamV+",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"new-item\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('tiny-trello-jared/tests/integration/components/trello-item-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('trello-item', 'Integration | Component | trello item', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "wX7ntOaQ",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"trello-item\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "kNJaeQeO",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"trello-item\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('tiny-trello-jared/tests/integration/components/trello-list-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('trello-list', 'Integration | Component | trello list', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "UhE6mJCM",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"trello-list\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "0J+Peau+",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"trello-list\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('tiny-trello-jared/tests/test-helper', ['tiny-trello-jared/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('tiny-trello-jared/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/item-detail-modal-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/item-detail-modal-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/new-item-input-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/new-item-input-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/new-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/new-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/trello-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/trello-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/trello-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/trello-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/board-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/board-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/edit-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/edit-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/item-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/list-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/board-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/board-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/board/edit-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/board/edit-item-test.js should pass ESLint\n\n');
  });
});
define('tiny-trello-jared/tests/unit/adapters/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('tiny-trello-jared/tests/unit/controllers/board-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:board', 'Unit | Controller | board', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('tiny-trello-jared/tests/unit/controllers/edit-item-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:edit-item', 'Unit | Controller | edit item', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('tiny-trello-jared/tests/unit/models/item-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('item', 'Unit | Model | item', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('tiny-trello-jared/tests/unit/models/list-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('list', 'Unit | Model | list', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('tiny-trello-jared/tests/unit/routes/board-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:board', 'Unit | Route | board', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('tiny-trello-jared/tests/unit/routes/board/edit-item-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:board/edit-item', 'Unit | Route | board/edit item', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('tiny-trello-jared/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map

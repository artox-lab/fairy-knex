'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _knex = require('knex');

var _knex2 = _interopRequireDefault(_knex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FairyKnex {

  constructor(_ref) {
    let db = _ref.db;
    this._config = {};
    this._builder = null;

    this._config.db = db;
  }

  query() {
    this.connect();

    return this._builder;
  }

  connect() {
    if (!this._builder) {
      this._builder = (0, _knex2.default)(this._config.db);
    }

    if (!this._builder.client.pool) {
      this._builder.client.initialize(this._config.db);
    }
  }

  disconnect() {
    if (this._builder.client.pool) {
      this._builder.destroy();
    }
  }
}

exports.default = FairyKnex;
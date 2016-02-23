import knex from 'knex';

class FairyKnex {
  _config = {};
  _builder = null;

  constructor({db})
  {
    this._config.db = db;
  }

  query()
  {
    this.connect();

    return this._builder;
  }

  connect()
  {
    if (!this._builder)
    {
      this._builder = knex(this._config.db);
    }

    if (!this._builder.client.pool)
    {
      this._builder.client.initialize(this._config.db);
    }
  }

  disconnect()
  {
    if (this._builder.client.pool)
    {
      this._builder.destroy();
    }
  }
}

export default FairyKnex;
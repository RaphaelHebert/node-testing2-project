// Update with your config settings.
const shared = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: {
    directory: './data/migrations',
  },
  seeds: {
    directory:'./data/seeds'
  }
}

module.exports = {
  development: {
    ...shared,
    connection: {
      filename: './dev.sqlite3'
    }
  },
  test: {
    ...shared,
    connection: {
      filename: './tests.sqlite3'
    }
  }
};

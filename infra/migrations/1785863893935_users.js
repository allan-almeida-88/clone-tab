/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pg => {
  pg.createTable('users', {
    id: 'id',
    name: {type: 'varchar', notNull: true}
  });
};

exports.down = pg => {
  pg.dropTable('users', {})
};

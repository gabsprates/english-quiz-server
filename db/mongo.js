const mongojs = require('mongojs');
const config  = require('config');
const debug   = require('debug')('english_quiz:db');

'use strict';

function __connection() {

  let username  = config.get('mongo.username');
  let password  = config.get('mongo.password');
  let database  = config.get('mongo.database');
  let server    = config.get('mongo.server');
  let port      = config.get('mongo.port');
  let auth      = username ? (username + ':' + password + '@') : '';

  return 'mongodb://' + auth + server + ':' + port + '/' + database;

}

var db = mongojs(__connection());

db.on('error', function(err) {
  debug(err);
});

module.exports = db;

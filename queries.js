const promise = require('bluebird');
      dbconfig = require('./config.js').dbconfig;

const options = {
  promiseLib: promise
}

const pgp = require('pg-promise')();
      db = pgp(dbconfig);

function getAllUsers(req, res, next) {
  db.any('SELECT * FROM users')
    .then(data => {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Usuarios recibidos'
        });
    })
    .catch(err => {
      return next(err);
    });
}

function getUserById(req, res, next) {
  var facebookId = req.params.id;
  db.one("SELECT * FROM users WHERE facebook_id = '" + facebookId + "'")
    .then(data => {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Usuario por ID recibido'
        });
    })
    .catch(err => {
      return next(err);
    });
}

// function createUser(req, res, next) {
//
// }
//
// function updateUser(req, res, next) {
//
// }

module.exports = {
  getAllUsers: getAllUsers,
  getUserById: getUserById
}

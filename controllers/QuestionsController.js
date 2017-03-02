const debug = require('debug')('english_quiz:db');

class QuestionsController {

  constructor(QuestionsModel) {
    this.model = QuestionsModel;
  }

  getAll(req, res, next) {
    this.model.find({}, function(err, data) {
      if (err) {
        return next(err);
      }
      res.json(data);
    })
  }

  getIds(req, res, next) {

    this.model.find({}, { _id: true }, function(err, data) {
      if (err) {
        return next(err);
      }
      res.json(data);
    })

  }

  getById(req, res, next) {
    var _id = req.params._id;
    this.model.findOne(_id, function(err, data) {
      if (err) {
        return next(err);
      }
      if (!data) {
        var err = new Error('Not Found');
        err.status = 404;
        return next(err);
      }
      res.json(data);
    })
  }

  create(req, res, next) {
    var body = req.body;
    this.model.create(body, function(err, data) {
      if (err) {
        return next(err);
      }
      res.json(data);
    })
  }

  update(req, res, next) {
    var _id   = req.params._id;
    var body  = req.body;
    this.model.update(_id, body, function(err, data) {
      if (err) {
        return next(err);
      }
      res.json(data);
    })
  }

  remove(req, res, next) {
    var _id = req.params._id;
    this.model.remove(_id, function(err, data) {
      if (err) {
        return next(err);
      }
      res.json(data);
    })
  }
}

module.exports = function(QuestionsModel) {
  return new QuestionsController(QuestionsModel);
}

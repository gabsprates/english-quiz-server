class QuestionsController {

  constructor() {}

  getAll(req, res, next) {
    res.send('get all questions');
  }

  getById(req, res, next) {
    res.send('get one particular question by id');
  }

  create(req, res, next) {
    res.send('create a new question');
  }

  update(req, res, next) {
    res.send('update a question by id');
  }

  remove(req, res, next) {
    res.send('delete a question by id');
  }
}

module.exports = new QuestionsController();

const express = require('express');
const router  = express.Router();
const QuestionsController = require('../controllers/QuestionsController');

router.get('/', QuestionsController.getAll)

router.get('/:_id', QuestionsController.getById)

router.post('/', QuestionsController.create)

router.put('/:_id', QuestionsController.update)

router.delete('/:_id', QuestionsController.remove)

module.exports = router;

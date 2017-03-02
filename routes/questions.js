const express = require('express');
const router  = express.Router();

const mongo   = require('../db/mongo');

const QuestionsModel = require('../models/QuestionsModel')(mongo);
const QuestionsController = require('../controllers/QuestionsController')(QuestionsModel);

router.get('/', QuestionsController.getAll.bind(QuestionsController))

router.get('/ids', QuestionsController.getIds.bind(QuestionsController))

router.get('/:_id', QuestionsController.getById.bind(QuestionsController))

router.post('/', QuestionsController.create.bind(QuestionsController))

router.put('/:_id', QuestionsController.update.bind(QuestionsController))

router.delete('/:_id', QuestionsController.remove.bind(QuestionsController))

module.exports = router;

const express = require('express');
const router = express.Router();

const answerController = require('../controller/answer')
const questionController = require('../controller/question')
const userController = require('../controller/user')

router.get('/', userController.getUser);
router.post('/register', userController.signUp);
router.post('/login', userController.signIn);

router.get('/answer', answerController.list);
router.get('/answer/:id', answerController.retrieve);
router.post('/answer', answerController.create);
router.put('/answer/:id', answerController.update);
router.delete('/answer/:id', answerController.destroy);

router.get('/question', questionController.list);
router.get('/question/:id', questionController.retrieve);
router.post('/question', questionController.create);
router.put('/question/:id', questionController.update);
router.delete('/question/:id', questionController.destroy);

module.exports = router;






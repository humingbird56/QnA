const question = require('../models').question;
const jwt = require('jsonwebtoken')

module.exports = {
  list(req, res) {
    return question.findAll({
      include: [{
        all: true
      }]
    })
      .then(data => res.status(201).send(data))
      .catch(err => console.log(err));
  },
  retrieve(req, res) {
    return question
      .findOne({
        where: {
          id: req.params.id
        },
        include: [{
          all: true
        }]
      })
      .then(data => {
        if (!data) {
          return res.status(404).send({
            message: 'question Not Found',
          });
        }
        return res.status(200).send(data);
      })
      .catch(error => res.status(400).send(error));
  },  
  create(req, res) {
    const decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET);
    return question
      .create({
        question: req.body.question,
        userId: decoded.id
      })
      .then(data => res.status(201).send(data))
      .catch(err => res.status(400).send(err));
  },
  update(req, res) {
    return question
      .findById(req.params.id)
      .then(data => {
        if (!data) {
          return res.status(404).send({
            message: 'question Not Found',
          });
        }
        return data
          .update({
            question: req.body.question || data.question,
          })
          .then(() => res.status(200).send(data))  // Send back the updated data.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return question
      .findById(req.params.id)
      .then(data => {
        if (!data) {
          return res.status(400).send({
            message: 'question Not Found',
          });
        }
        return data
        .destroy()
        .then(() => res.status(200).send({ message: 'question deleted successfully.' }))
        .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  like(req, res){
    return question.findOne({
      where: {
        id: req.body.questionId
      }
    })
    .then( dataQuestion => {
      question.update({
        like: dataQuestion.like + 1
      }, {
        where: {
        id: dataQuestion.id
      }
    })
    res.send('like')  
  })
  .catch(err => console.log(err))
  }
};

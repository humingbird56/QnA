const answer = require('../models').answer;
const jwt = require('jsonwebtoken')

module.exports = {
  list(req, res) {
    return answer.findAll({
      include: [{
        all: true
      }]
    })
      .then(data => res.status(201).send(data))
      .catch(err => res.status(400).send(err));
  },
  retrieve(req, res) {
    return answer
      .findById({
        where:{
          id : req.params.id
        },
        include: [{
          all: true
        }]
      })
      .then(data => {
        if (!data) {
          return res.status(404).send({
            message: 'answer Not Found',
          });
        }
        return res.status(200).send(data);
      })
      .catch(error => res.status(400).send(error));
  },  
  create(req, res) {
    let decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET);
    return answer
      .create({
        answer: req.body.answer,
        questionId: req.body.questionId,
        userId: decoded.id
      })
      .then(data => res.status(201).send(data))
      .catch(err => res.status(400).send(err));
  },
  update(req, res) {
    return answer
      .findById(req.params.id)
      .then(data => {
        if (!data) {
          return res.status(404).send({
            message: 'answer Not Found',
          });
        }
        return data
          .update({
            answer: req.body.answer || data.answer,
          })
          .then(() => res.status(200).send(data))  // Send back the updated data.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return answer
      .findById(req.params.id)
      .then(data => {
        if (!data) {
          return res.status(400).send({
            message: 'answer Not Found',
          });
        }
        return data
        .destroy()
        .then(() => res.status(200).send({ message: 'answer deleted successfully.' }))
        .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};

const jwt = require('jsonwebtoken')
const db =require('../models')
const user = require('../models').user;
const emailHelper = require('../Helpers/Email')

module.exports={
  signUp(req, res) {
    const email = emailHelper(req.body.email)
    db.user.findOne({
      where: {
        $or:[
          {
            username: req.body.username
          },
          {
            email: email
          }
        ]
      }
    })
    .then(found =>{
      if(found) {
        if (found.email === email || found.username === req.body.username)
          return res.send('email or username already used')
      }
        db.user.create({
          username:req.body.username,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: email,
          typedEmail: req.body.email,
          password: req.body.password
        })
        .then(dataUser => {
          const token = jwt.sign({
            id: dataUser.dataValues.id,
            username: dataUser.dataValues.username,
            firstname: dataUser.dataValues.firstname,
            email: dataUser.dataValues.email,
            typedEmail: dataUser.dataValues.typedEmail
          }, process.env.JWT_SECRET)
          res.send({token})
        })
    })
    .catch(err => console.log(err))
  },

  signIn(req, res){
    const email = emailHelper(req.body.email)
    db.user.findOne({
      where:{
        $or:[
          {
            username: req.body.username
          },
          {
            email: email
          }
        ]
      }
    })
    .then(dataUser => {
      if(dataUser == null){
        res.send('username or email not found')
      } else if (dataUser.dataValues.password !== req.body.password){
        res.send('wrong password')
      } else if (dataUser.dataValues.password === req.body.password){
        let token = jwt.sign({
          id: dataUser.dataValues.id,
          username: dataUser.dataValues.username,
          firstname: dataUser.dataValues.firstname,
          email: dataUser.dataValues.email,
          typedEmail: dataUser.dataValues.typedEmail
        },process.env.JWT_SECRET)
        res.send({token})
      }
    })
    .catch(err => console.log(err))
  },

  getUser(req, res){
    return user.findAll({
      include: [
        {all: true}
      ]
    })
      .then(data => res.status(201).send(data))
      .catch(err => res.status(400).send(err));
    }

}
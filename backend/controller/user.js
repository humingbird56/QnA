const jwt = require('jsonwebtoken')
const db =require('../models')
const user = require('../models').user;
const secret = 'bijikuda'

module.exports={
  signUp(req, res) {
    let email = req.body.email
    let front = email.split('@')[0]
    let back = email.split('@')[1]
    let emailFinal = ''
    if (back === 'gmail.com'){
      let userWithoudDot = front.split('.').join('')
      emailFinal = userWithoudDot + '@gmail.com'
    } else {
      emailFinal = req.body.email
    }
    console.log('aaaaa', emailFinal)
    db.user.findOne({
      where: {
        $or:[
          {
            username: req.body.username
          },
          {
            email: emailFinal
          }
        ]
      }
    })
    .then(found =>{
      if(found) {
        if (found.email === emailFinal || found.username === req.body.username)
          return res.send('email or username already used')
      }
        db.user.create({
          username:req.body.username,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: emailFinal,
          password: req.body.password
        })
        .then(dataUser => {
          var token = jwt.sign({
            id: dataUser.dataValues.id,
            username: dataUser.dataValues.username,
            firstname: dataUser.dataValues.firstname,
            email: dataUser.dataValues.email
          }, secret)
          res.send({token})
        })
        .catch(err => res.send(err))
    })
    .catch(err => res.send(err))
  },

  signIn(req, res){
    var email = req.body.email
    var front = email.split('@')[0]
    var back = email.split('@')[1]
  
    if (back === 'gmail.com'){
      let userWithoudDot = front.split('.').join('')
      var emailFinal = userWithoudDot + '@gmail.com'
    } else {
      var emailFinal = req.body.email
    }
    db.user.findOne({
      where:{
        $or:[
          {
            username: req.body.username
          },
          {
            email: emailFinal
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
          email: dataUser.dataValues.email
        },secret)
        res.send({token})
      }
    })
    .catch(err => res.send(err))
  },

  getUser(req, res){
    return user.findAll()
      .then(data => res.status(201).send(data))
      .catch(err => res.status(400).send(err));
    }

}
const async = require('asyncawait/async');
const await = require('asyncawait/await');

  const gmailDot =  function(body) {  
    const email = body.trim().toLowerCase()
    const front = email.split('@')[0]
    const back = email.split('@')[1]
  
    if (back === 'gmail.com'){
      const userWithoudDot = front.split('.').join('')
      return userWithoudDot + '@gmail.com'
    } else {
      return body
    }
  };
  
  module.exports = gmailDot;
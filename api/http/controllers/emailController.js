var domain = 'sandboxf881c32da7fe4ee1a548d017b8c0e27d.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: process.env.MAILGUN_API_SECRETKEY, domain: domain});

module.exports = {
    sendContactUsEmail : function(req, res) {
      var data = {
        from: req.body.email,
        to: process.env.CONTACT_US_ADDRESS,
        subject: req.body.headline,
        text: req.body.message
      }

      mailgun.messages().send(data, function (error, body) {
        if(error) {
          res.send(error);
        } else {
          res.send(body);
        }
      });
    }
}

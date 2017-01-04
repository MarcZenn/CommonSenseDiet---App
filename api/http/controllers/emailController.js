var http = require('http');
var mailgun = require('mailgun-js')({
  apiKey: process.env.MAILGUN_API_SECRETKEY,
  domain: process.env.MAILGUN_DEST_DOMAIN
});

module.exports = {
    sendContactUsEmail : function(req, res) {
      var data = {
        from: req.body.email,
        to: process.env.CONTACT_US_ADDRESS,
        subject: req.body.headline,
        text: req.body.message
      }
      mailgun

      mailgun.messages().send(data, function (error, body) {
        if(error) {
          res.send(error);
        } else {
          res.send(body);
        }
      });
    }
}

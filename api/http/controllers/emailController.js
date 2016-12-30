var api_key = process.env.NODE_ENV !== 'production' ? process.env.MAILGUN_API_PUBKEY : process.env.MAILGUN_API_SECRETKEY;
var contact_us_address = process.env.CONTACT_US_ADDRESS;
var domain = 'sandboxf881c32da7fe4ee1a548d017b8c0e27d.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

module.exports = {
    sendContactUsEmail : function(req, res) {
      var data = {
        from: req.body.email,
        to: contact_us_address,
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

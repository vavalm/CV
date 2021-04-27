const Mail = require('../models/mail');

/**
 * Send a mail
 * @param req
 * @param res
 * @param next
 */
// TODO: write the method to send an email
exports.sendMail = (req, res, next) => {
    const mailObject = JSON.parse(req.body.thing);
    delete mailObject._id;
    const mail = new Mail({
        ...mailObject,
    });
    mail.save()
        .then(() => res.status(201).json({message: 'Mail sent!'}))
        .catch(error => res.status(400).json({error}));
}

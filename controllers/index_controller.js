var express = require('express');
var router = express.Router();
const { validationResult } = require('express-validator');
const i18next = require('i18next');

class IndexController {
    static get(req, res, next) {
        res.render('form', { title: 'Sigfrid Stjärnholm' });
    }

    // static post(req, res, next) {
    //     const errors = validationResult(req);

    //     if (errors.isEmpty()) {
    //         res.send('Thank you for your registration!');
    //     } else {
    //         res.render('form', {
    //             title: 'Registration form',
    //             errors: errors.array(),
    //             data: req.body,
    //         });
    //     }
    // } 
}

module.exports = IndexController;
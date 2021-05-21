var express = require('express');
var router = express.Router();
const { validationResult } = require('express-validator');
const i18next = require('i18next');

class BachelorController {
    static get(req, res, next) {
        res.render('projects/bachelor.pug', { title: 'Sigfrid Stjärnholm' });
    }
}

module.exports = BachelorController;
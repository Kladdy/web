const express = require('express');
const { check } = require('express-validator');
const router = express.Router();

const BachelorController = require('../controllers/projects_controller');

router.get('/bachelor_project', (req, res) => {
    BachelorController.get(req, res)
});

// router.post('/',
// [
//     check('name')
//     .isLength({ min: 1 })
//     .withMessage('Please enter a name'),
//     check('email')
//     .isLength({ min: 1 })
//     .withMessage('Please enter an email'),
// ], (req, res) => {
//     IndexController.post(req, res)
// });

module.exports = router;